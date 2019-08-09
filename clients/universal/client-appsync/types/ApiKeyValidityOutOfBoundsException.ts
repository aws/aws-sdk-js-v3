import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 */
export interface ApiKeyValidityOutOfBoundsException
  extends __ServiceException__<_ApiKeyValidityOutOfBoundsExceptionDetails> {
  name: "ApiKeyValidityOutOfBoundsException";
}

export interface _ApiKeyValidityOutOfBoundsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
