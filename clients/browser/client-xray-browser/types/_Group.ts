/**
 * <p>Details and metadata for a group.</p>
 */
export interface _Group {
  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;
}

export type _UnmarshalledGroup = _Group;
