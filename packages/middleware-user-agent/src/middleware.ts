import {
  BuildHandlerArguments,
  BuildHandler,
  MetadataBearer,
  BuildHandlerOutput,
  Pluggable
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { UserAgentConfigResolved } from "./configurations";

const userAgentHeader = "User-Agent";

export function userAgentMiddleware(options: UserAgentConfigResolved) {
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

export const getUserAgentPlugin = (
  config: UserAgentConfigResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(userAgentMiddleware(config), {
      step: "build",
      tags: { SET_USER_AGENT: true }
    });
  }
});
