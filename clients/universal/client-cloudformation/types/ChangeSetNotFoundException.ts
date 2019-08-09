import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.</p>
 */
export interface ChangeSetNotFoundException
  extends __ServiceException__<_ChangeSetNotFoundExceptionDetails> {
  name: "ChangeSetNotFoundException";
}

export interface _ChangeSetNotFoundExceptionDetails {}
