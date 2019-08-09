import {
  _StackSetOperationPreferences,
  _UnmarshalledStackSetOperationPreferences
} from "./_StackSetOperationPreferences";

/**
 * <p>The structure that contains information about a stack set operation. </p>
 */
export interface _StackSetOperation {
  /**
   * <p>The unique ID of a stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>The type of stack set operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>. Create and delete operations affect only the specified stack set instances that are associated with the specified stack set. Update operations affect both the stack set itself, as well as <i>all</i> associated stack set instances.</p>
   */
  Action?: "CREATE" | "UPDATE" | "DELETE" | string;

  /**
   * <p>The status of the operation. </p> <ul> <li> <p> <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each region during stack create and update operations. If the number of failed stacks within a region exceeds the failure tolerance, the status of the operation in the region is set to <code>FAILED</code>. This in turn sets the status of the operation as a whole to <code>FAILED</code>, and AWS CloudFormation cancels the operation in any remaining regions.</p> </li> <li> <p> <code>RUNNING</code>: The operation is currently being performed.</p> </li> <li> <p> <code>STOPPED</code>: The user has cancelled the operation.</p> </li> <li> <p> <code>STOPPING</code>: The operation is in the process of stopping, at user request. </p> </li> <li> <p> <code>SUCCEEDED</code>: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.</p> </li> </ul>
   */
  Status?: "RUNNING" | "SUCCEEDED" | "FAILED" | "STOPPING" | "STOPPED" | string;

  /**
   * <p>The preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: _StackSetOperationPreferences;

  /**
   * <p>For stack set operations of action type <code>DELETE</code>, specifies whether to remove the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a retained stack, or add an existing, saved stack to a new stack set.</p>
   */
  RetainStacks?: boolean;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role used to perform this stack set operation. </p> <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Define Permissions for Multiple Administrators</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set.</p> <p>Use customized execution roles to control which stack resources users and groups can include in their stack sets. </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because AWS CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested regions, before actually creating the first stacks.</p>
   */
  CreationTimestamp?: Date | string | number;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and regions specified. Note that this doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or region.</p>
   */
  EndTimestamp?: Date | string | number;
}

export interface _UnmarshalledStackSetOperation extends _StackSetOperation {
  /**
   * <p>The preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: _UnmarshalledStackSetOperationPreferences;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because AWS CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested regions, before actually creating the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and regions specified. Note that this doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or region.</p>
   */
  EndTimestamp?: Date;
}
