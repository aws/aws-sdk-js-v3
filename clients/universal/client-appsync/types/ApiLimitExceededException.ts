import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 */
export interface ApiLimitExceededException
  extends __ServiceException__<_ApiLimitExceededExceptionDetails> {
  name: "ApiLimitExceededException";
}

export interface _ApiLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
