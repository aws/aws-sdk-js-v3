import { MiddlewareStack, Pluggable } from "@aws-sdk/types";

export interface InjectUserAgentOptions {
  /**
   * The aame of the user agent to be injected to the request, e.g. a dependency name.
   */
  name: string;
  /**
   * The value of the user agent to be injected to the request, e.g. a dependency version.
   */
  version?: string;
  /**
   * The identifier of the middleware that injecting this user agent pair to the handler execution context.
   * The middleware name will be `inject${userAgentIdentifier}UAMiddleware`. You can use this name to remove
   * this middleware.
   */
  userAgentIdentifier?: string;
}

/**
 * A helper plugin that inject user agent pair.
 */
export const injectUserAgent = (options: InjectUserAgentOptions): Pluggable<any, any> => ({
  applyToStack: (stack: MiddlewareStack<any, any>) => {
    stack.add(
      (next, context) => (args) => {
        if (!context.userAgent) context.userAgent = [];
        context.userAgent.push([options.name, options.version]);
        return next(args);
      },
      {
        step: "initialize",
        name: options.userAgentIdentifier ? `inject${options.userAgentIdentifier}UAMiddleware` : undefined,
        tags: ["SET_USER_AGENT", "USER_AGENT"],
      }
    );
  },
});
