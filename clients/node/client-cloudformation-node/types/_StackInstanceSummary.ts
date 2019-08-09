/**
 * <p>The structure that contains summary information about a stack instance.</p>
 */
export interface _StackInstanceSummary {
  /**
   * <p>The name or unique ID of the stack set that the stack instance is associated with.</p>
   */
  StackSetId?: string;

  /**
   * <p>The name of the AWS region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * <p>The name of the AWS account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p> <ul> <li> <p> <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to <code>true</code>, to delete the stack instance, and then delete the stack manually.</p> </li> <li> <p> <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p> <ul> <li> <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation. </p> </li> <li> <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated. </p> </li> </ul> </li> <li> <p> <code>CURRENT</code>: The stack is currently up to date with the stack set.</p> </li> </ul>
   */
  Status?: "CURRENT" | "OUTDATED" | "INOPERABLE" | string;

  /**
   * <p>The explanation for the specific status code assigned to this stack instance.</p>
   */
  StatusReason?: string;
}

export type _UnmarshalledStackInstanceSummary = _StackInstanceSummary;
