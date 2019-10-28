import { Pluggable } from "@aws-sdk/types";
import { userAgentMiddleware } from "./middleware";

export namespace UserAgent {
  export interface Input {
    /**
     * The custom user agent header that would be appended to default one
     */
    customUserAgent?: string;
  }
  export interface PreviouslyResolved {
    defaultUserAgent: string;
  }
  export interface Resolved {
    defaultUserAgent: string;
    customUserAgent?: string;
  }
  export function resolveConfig<T>(
    input: T & PreviouslyResolved & Input
  ): T & Resolved {
    return input;
  }

  export const setMiddleware = (
    config: UserAgent.Resolved
  ): Pluggable<any, any> => clientStack => {
    clientStack.add(userAgentMiddleware(config), {
      step: "build",
      tags: { SET_USER_AGENT: true }
    });
  };
}

export type UserAgentInput = UserAgent.Input;
