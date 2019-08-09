import {
  _AccountGateResult,
  _UnmarshalledAccountGateResult
} from "./_AccountGateResult";

/**
 * <p>The structure that contains information about a specified operation's results for a given account in a given region.</p>
 */
export interface _StackSetOperationResultSummary {
  /**
   * <p>The name of the AWS account for this operation result.</p>
   */
  Account?: string;

  /**
   * <p>The name of the AWS region for this operation result.</p>
   */
  Region?: string;

  /**
   * <p>The result status of the stack set operation for the given account in the given region.</p> <ul> <li> <p> <code>CANCELLED</code>: The operation in the specified account and region has been cancelled. This is either because a user has stopped the stack set operation, or because the failure tolerance of the stack set operation has been exceeded.</p> </li> <li> <p> <code>FAILED</code>: The operation in the specified account and region failed. </p> <p>If the stack set operation fails in enough accounts within a region, the failure tolerance for the stack set operation as a whole might be exceeded. </p> </li> <li> <p> <code>RUNNING</code>: The operation in the specified account and region is currently in progress.</p> </li> <li> <p> <code>PENDING</code>: The operation in the specified account and region has yet to start. </p> </li> <li> <p> <code>SUCCEEDED</code>: The operation in the specified account and region completed successfully.</p> </li> </ul>
   */
  Status?:
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | string;

  /**
   * <p>The reason for the assigned result status.</p>
   */
  StatusReason?: string;

  /**
   * <p>The results of the account gate function AWS CloudFormation invokes, if present, before proceeding with stack set operations in an account</p>
   */
  AccountGateResult?: _AccountGateResult;
}

export interface _UnmarshalledStackSetOperationResultSummary
  extends _StackSetOperationResultSummary {
  /**
   * <p>The results of the account gate function AWS CloudFormation invokes, if present, before proceeding with stack set operations in an account</p>
   */
  AccountGateResult?: _UnmarshalledAccountGateResult;
}
