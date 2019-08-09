/**
 * _Condition shape
 */
export interface _Condition {
  /**
   * <p>Represents the equal condition to be applied to a single field when querying for findings.</p>
   */
  Eq?: Array<string> | Iterable<string>;

  /**
   * <p>Represents the not equal condition to be applied to a single field when querying for findings.</p>
   */
  Neq?: Array<string> | Iterable<string>;

  /**
   * <p>Represents a greater than condition to be applied to a single field when querying for findings.</p>
   */
  Gt?: number;

  /**
   * <p>Represents a greater than equal condition to be applied to a single field when querying for findings.</p>
   */
  Gte?: number;

  /**
   * <p>Represents a less than condition to be applied to a single field when querying for findings.</p>
   */
  Lt?: number;

  /**
   * <p>Represents a less than equal condition to be applied to a single field when querying for findings.</p>
   */
  Lte?: number;

  /**
   * _Equals shape
   */
  Equals?: Array<string> | Iterable<string>;

  /**
   * _NotEquals shape
   */
  NotEquals?: Array<string> | Iterable<string>;

  /**
   * <p>Represents a greater than condition to be applied to a single field when querying for findings.</p>
   */
  GreaterThan?: number;

  /**
   * <p>Represents a greater than equal condition to be applied to a single field when querying for findings.</p>
   */
  GreaterThanOrEqual?: number;

  /**
   * <p>Represents a less than condition to be applied to a single field when querying for findings.</p>
   */
  LessThan?: number;

  /**
   * <p>Represents a less than equal condition to be applied to a single field when querying for findings.</p>
   */
  LessThanOrEqual?: number;
}

export interface _UnmarshalledCondition extends _Condition {
  /**
   * <p>Represents the equal condition to be applied to a single field when querying for findings.</p>
   */
  Eq?: Array<string>;

  /**
   * <p>Represents the not equal condition to be applied to a single field when querying for findings.</p>
   */
  Neq?: Array<string>;

  /**
   * _Equals shape
   */
  Equals?: Array<string>;

  /**
   * _NotEquals shape
   */
  NotEquals?: Array<string>;
}
