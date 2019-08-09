import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The automatic rollback configuration was specified in an invalid format. For example, automatic rollback is enabled, but an invalid triggering event type or no event types were listed.</p>
 */
export interface InvalidAutoRollbackConfigException
  extends __ServiceException__<_InvalidAutoRollbackConfigExceptionDetails> {
  name: "InvalidAutoRollbackConfigException";
}

export interface _InvalidAutoRollbackConfigExceptionDetails {}
