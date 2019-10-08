import {
  BuildMiddleware,
  BuildHandlerArguments,
  BuildHandler,
  MetadataBearer,
  BuildHandlerOutput,
  InjectableMiddleware
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { UserAgentConfig } from "./configurations";

const userAgentHeader = "User-Agent";

export function UserAgentMiddleware(options: UserAgentConfig.Resolved) {
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

export function UserAgentPlugin(
  options: UserAgentConfig.Resolved
): InjectableMiddleware {
  return {
    middleware: UserAgentMiddleware(options),
    step: "build",
    tags: { SET_USER_AGENT: true }
  };
}
