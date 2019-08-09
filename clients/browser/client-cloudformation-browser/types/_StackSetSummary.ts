/**
 * <p>The structures that contain summary information about the specified stack set.</p>
 */
export interface _StackSetSummary {
  /**
   * <p>The name of the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>A description of the stack set that you specify when the stack set is created or updated.</p>
   */
  Description?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: "ACTIVE" | "DELETED" | string;
}

export type _UnmarshalledStackSetSummary = _StackSetSummary;
