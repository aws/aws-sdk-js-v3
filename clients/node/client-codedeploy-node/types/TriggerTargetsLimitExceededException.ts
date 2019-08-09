import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum allowed number of triggers was exceeded.</p>
 */
export interface TriggerTargetsLimitExceededException
  extends __ServiceException__<_TriggerTargetsLimitExceededExceptionDetails> {
  name: "TriggerTargetsLimitExceededException";
}

export interface _TriggerTargetsLimitExceededExceptionDetails {}
