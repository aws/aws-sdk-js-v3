import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The API key exceeded a limit. Try your request again.</p>
 */
export interface ApiKeyLimitExceededException
  extends __ServiceException__<_ApiKeyLimitExceededExceptionDetails> {
  name: "ApiKeyLimitExceededException";
}

export interface _ApiKeyLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
