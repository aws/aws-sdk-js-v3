import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified webhook was entered in an invalid format or cannot be found.</p>
 */
export interface WebhookNotFoundException
  extends __ServiceException__<_WebhookNotFoundExceptionDetails> {
  name: "WebhookNotFoundException";
}

export interface _WebhookNotFoundExceptionDetails {}
