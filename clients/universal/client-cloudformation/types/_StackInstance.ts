import { _Parameter, _UnmarshalledParameter } from "./_Parameter";

/**
 * <p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.</p>
 */
export interface _StackInstance {
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
   * <p>A list of parameters from the stack set template whose values have been overridden in this stack instance.</p>
   */
  ParameterOverrides?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p> <ul> <li> <p> <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to <code>true</code>, to delete the stack instance, and then delete the stack manually.</p> </li> <li> <p> <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p> <ul> <li> <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation. </p> </li> <li> <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated. </p> </li> </ul> </li> <li> <p> <code>CURRENT</code>: The stack is currently up to date with the stack set.</p> </li> </ul>
   */
  Status?: "CURRENT" | "OUTDATED" | "INOPERABLE" | string;

  /**
   * <p>The explanation for the specific status code that is assigned to this stack instance.</p>
   */
  StatusReason?: string;
}

export interface _UnmarshalledStackInstance extends _StackInstance {
  /**
   * <p>A list of parameters from the stack set template whose values have been overridden in this stack instance.</p>
   */
  ParameterOverrides?: Array<_UnmarshalledParameter>;
}
