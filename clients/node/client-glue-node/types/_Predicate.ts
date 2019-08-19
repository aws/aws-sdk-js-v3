import { _Condition, _UnmarshalledCondition } from "./_Condition";

/**
 * <p>Defines the predicate of the trigger, which determines when it fires.</p>
 */
export interface _Predicate {
  /**
   * <p>An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.</p>
   */
  Logical?: "AND" | "ANY" | string;

  /**
   * <p>A list of the conditions that determine when the trigger will fire.</p>
   */
  Conditions?: Array<_Condition> | Iterable<_Condition>;
}

export interface _UnmarshalledPredicate extends _Predicate {
  /**
   * <p>A list of the conditions that determine when the trigger will fire.</p>
   */
  Conditions?: Array<_UnmarshalledCondition>;
}
