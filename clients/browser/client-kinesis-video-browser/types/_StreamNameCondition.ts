/**
 * <p>Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. </p>
 */
export interface _StreamNameCondition {
  /**
   * <p>A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.</p>
   */
  ComparisonOperator?: "BEGINS_WITH" | string;

  /**
   * <p>A value to compare.</p>
   */
  ComparisonValue?: string;
}

export type _UnmarshalledStreamNameCondition = _StreamNameCondition;
