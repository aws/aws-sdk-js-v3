import { _ResourceValue, _UnmarshalledResourceValue } from "./_ResourceValue";
import { _StaticValue, _UnmarshalledStaticValue } from "./_StaticValue";

/**
 * <p>The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.</p>
 */
export interface _RemediationParameterValue {
  /**
   * <p>The value is dynamic and changes at run-time.</p>
   */
  ResourceValue?: _ResourceValue;

  /**
   * <p>The value is static and does not change at run-time.</p>
   */
  StaticValue?: _StaticValue;
}

export interface _UnmarshalledRemediationParameterValue
  extends _RemediationParameterValue {
  /**
   * <p>The value is dynamic and changes at run-time.</p>
   */
  ResourceValue?: _UnmarshalledResourceValue;

  /**
   * <p>The value is static and does not change at run-time.</p>
   */
  StaticValue?: _UnmarshalledStaticValue;
}
