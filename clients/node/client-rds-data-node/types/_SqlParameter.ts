import { _Field, _UnmarshalledField } from "./_Field";

/**
 * <p>A parameter used in a SQL statement.</p>
 */
export interface _SqlParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  name?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  value?: _Field;
}

export interface _UnmarshalledSqlParameter extends _SqlParameter {
  /**
   * <p>The value of the parameter.</p>
   */
  value?: _UnmarshalledField;
}
