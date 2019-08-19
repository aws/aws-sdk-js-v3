import { _Operator, _UnmarshalledOperator } from "./_Operator";

/**
 * <p>A comparision that is used to determine whether a query should return this object.</p>
 */
export interface _Selector {
  /**
   * <p>The name of the field that the operator will be applied to. The field name is the "key" portion of the field definition in the pipeline definition syntax that is used by the AWS Data Pipeline API. If the field is not set on the object, the condition fails.</p>
   */
  fieldName?: string;

  /**
   * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
   */
  operator?: _Operator;
}

export interface _UnmarshalledSelector extends _Selector {
  /**
   * <p>Contains a logical operation for comparing the value of a field with a specified value.</p>
   */
  operator?: _UnmarshalledOperator;
}
