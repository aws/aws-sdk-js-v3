import {
  BuildHandlerArguments,
  BuildHandler,
  MetadataBearer,
  BuildHandlerOutput,
  Pluggable,
  BuildHandlerOptions
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { UserAgentResolvedConfig } from "./configurations";

const userAgentHeader = "User-Agent";

export function userAgentMiddleware(options: UserAgentResolvedConfig) {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, any>
  ): BuildHandler<any, any> => (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    let { request } = args;
    if (!HttpRequest.isInstance(request)) return next(args);
    const { headers } = request;
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
      request
    });
  };
}

export const getUserAgentMiddlewareOptions: BuildHandlerOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  tags: ["SET_USER_AGENT", "USER_AGENT"]
};

export const getUserAgentPlugin = (
  config: UserAgentResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
  }
});
