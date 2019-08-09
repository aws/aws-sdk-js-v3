/**
 * <p>Structure that contains the results of the account gate function which AWS CloudFormation invokes, if present, before proceeding with a stack set operation in an account and region.</p> <p>For each account and region, AWS CloudFormation lets you specify a Lamdba function that encapsulates any requirements that must be met before CloudFormation can proceed with a stack set operation in that account and region. CloudFormation invokes the function each time a stack set operation is requested for that account and region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation in that account and region, and sets the stack set operation result status for that account and region to <code>FAILED</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account gate</a>.</p>
 */
export interface _AccountGateResult {
  /**
   * <p>The status of the account gate function.</p> <ul> <li> <p> <code>SUCCEEDED</code>: The account gate function has determined that the account and region passes any requirements for a stack set operation to occur. AWS CloudFormation proceeds with the stack operation in that account and region. </p> </li> <li> <p> <code>FAILED</code>: The account gate function has determined that the account and region does not meet the requirements for a stack set operation to occur. AWS CloudFormation cancels the stack set operation in that account and region, and sets the stack set operation result status for that account and region to <code>FAILED</code>. </p> </li> <li> <p> <code>SKIPPED</code>: AWS CloudFormation has skipped calling the account gate function for this account and region, for one of the following reasons:</p> <ul> <li> <p>An account gate function has not been specified for the account and region. AWS CloudFormation proceeds with the stack set operation in this account and region.</p> </li> <li> <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the stack set adminstration account lacks permissions to invoke the function. AWS CloudFormation proceeds with the stack set operation in this account and region.</p> </li> <li> <p>Either no action is necessary, or no action is possible, on the stack. AWS CloudFormation skips the stack set operation in this account and region.</p> </li> </ul> </li> </ul>
   */
  Status?: "SUCCEEDED" | "FAILED" | "SKIPPED" | string;

  /**
   * <p>The reason for the account gate status assigned to this account and region for the stack set operation.</p>
   */
  StatusReason?: string;
}

export type _UnmarshalledAccountGateResult = _AccountGateResult;
