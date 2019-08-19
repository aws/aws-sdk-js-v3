/**
 * <p>Contains details about an exit from a state during an execution.</p>
 */
export interface _StateExitedEventDetails {
  /**
   * <p>The name of the state.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>
   */
  name: string;

  /**
   * <p>The JSON output data of the state.</p>
   */
  output?: string;
}

export type _UnmarshalledStateExitedEventDetails = _StateExitedEventDetails;
