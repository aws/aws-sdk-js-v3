import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified event filter rule is in an invalid format.</p>
 */
export interface InvalidWebhookFilterPatternException
  extends __ServiceException__<_InvalidWebhookFilterPatternExceptionDetails> {
  name: "InvalidWebhookFilterPatternException";
}

export interface _InvalidWebhookFilterPatternExceptionDetails {}
