/**
 * <p>An <code>ActionTarget</code> object.</p>
 */
export interface _ActionTarget {
  /**
   * <p>The ARN for the target action.</p>
   */
  ActionTargetArn: string;

  /**
   * <p>The name of the action target.</p>
   */
  Name: string;

  /**
   * <p>The description of the target action.</p>
   */
  Description: string;
}

export type _UnmarshalledActionTarget = _ActionTarget;
