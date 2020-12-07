import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  UserAgent,
} from "@aws-sdk/types";

import { UserAgentResolvedConfig } from "./configurations";

const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";

/**
 * Build user agent header sections from:
 * 1. runtime-specific default user agent provider;
 * 2. custom user agent from `customUserAgent` client config;
 * 3. handler execution context set by internal SDK components;
 * The built user agent will be set to `x-amz-user-agent` header for ALL the
 * runtimes.
 * Please note that any override to the `user-agent` or `x-amz-user-agent` header
 * in the HTTP request is discouraged. Please use `customUserAgent` client
 * config or middleware setting the `userAgent` context to generate desired user
 * agent.
 */
export function userAgentMiddleware(options: UserAgentResolvedConfig) {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, any>,
    { userAgent }: HandlerExecutionContext
  ): BuildHandler<any, any> => (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) return next(args);
    const { headers } = request;
    const userAgentHeader = options.runtime === "node" ? USER_AGENT : X_AMZ_USER_AGENT;
    if (!headers[userAgentHeader]) {
      headers[userAgentHeader] = `${options.defaultUserAgent}`;
    } else {
      headers[userAgentHeader] += ` ${options.defaultUserAgent}`;
    }
    if (options.customUserAgent) {
      headers[userAgentHeader] += ` ${options.customUserAgent}`;
    }
    return next({
      ...args,
      request,
    });
  };
}

/**
 * @private
 */
export const buildUserAgent;

export const getUserAgentMiddlewareOptions: BuildHandlerOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
};

export const getUserAgentPlugin = (config: UserAgentResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  },
});
