import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p> An attribute that we extracted, but were unable to relate to an entity. </p>
 */
export interface _UnmappedAttribute {
  /**
   * <p> The type of the attribute, could be one of the following values: "MEDICATION", "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PERSONAL_HEALTH_INFORMATION". </p>
   */
  Type?:
    | "MEDICATION"
    | "MEDICAL_CONDITION"
    | "PROTECTED_HEALTH_INFORMATION"
    | "TEST_TREATMENT_PROCEDURE"
    | "ANATOMY"
    | string;

  /**
   * <p> The specific attribute that has been extracted but not mapped to an entity. </p>
   */
  Attribute?: _Attribute;
}

export interface _UnmarshalledUnmappedAttribute extends _UnmappedAttribute {
  /**
   * <p> The specific attribute that has been extracted but not mapped to an entity. </p>
   */
  Attribute?: _UnmarshalledAttribute;
}
