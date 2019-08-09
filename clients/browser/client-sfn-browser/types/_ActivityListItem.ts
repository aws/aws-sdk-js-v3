/**
 * <p>Contains details about an activity.</p>
 */
export interface _ActivityListItem {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the activity.</p>
   */
  activityArn: string;

  /**
   * <p>The name of the activity.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>
   */
  name: string;

  /**
   * <p>The date the activity is created.</p>
   */
  creationDate: Date | string | number;
}

export interface _UnmarshalledActivityListItem extends _ActivityListItem {
  /**
   * <p>The date the activity is created.</p>
   */
  creationDate: Date;
}
