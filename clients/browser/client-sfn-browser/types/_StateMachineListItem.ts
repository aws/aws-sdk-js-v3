/**
 * <p>Contains details about the state machine.</p>
 */
export interface _StateMachineListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the state machine.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The name of the state machine.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>
   */
  name: string;

  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date | string | number;
}

export interface _UnmarshalledStateMachineListItem
  extends _StateMachineListItem {
  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date;
}
