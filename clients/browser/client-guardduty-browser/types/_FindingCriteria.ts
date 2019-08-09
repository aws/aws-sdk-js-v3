import { _Condition, _UnmarshalledCondition } from "./_Condition";

/**
 * _FindingCriteria shape
 */
export interface _FindingCriteria {
  /**
   * <p>Represents a map of finding properties that match specified conditions and values when querying findings.</p>
   */
  Criterion?: { [key: string]: _Condition } | Iterable<[string, _Condition]>;
}

export interface _UnmarshalledFindingCriteria extends _FindingCriteria {
  /**
   * <p>Represents a map of finding properties that match specified conditions and values when querying findings.</p>
   */
  Criterion?: { [key: string]: _UnmarshalledCondition };
}
