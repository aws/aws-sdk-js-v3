import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The execution has the same <code>name</code> as another execution (but a different <code>input</code>).</p> <note> <p>Executions with the same <code>name</code> and <code>input</code> are considered idempotent.</p> </note>
 */
export interface ExecutionAlreadyExists
  extends __ServiceException__<_ExecutionAlreadyExistsDetails> {
  name: "ExecutionAlreadyExists";
}

export interface _ExecutionAlreadyExistsDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
