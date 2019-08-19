import { _Trait, _UnmarshalledTrait } from "./_Trait";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p> Provides information about an extracted medical entity.</p>
 */
export interface _Entity {
  /**
   * <p> The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string. </p>
   */
  EndOffset?: number;

  /**
   * <p>The level of confidence that Comprehend Medical has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p> The segment of input text extracted as this entity.</p>
   */
  Text?: string;

  /**
   * <p> The category of the entity.</p>
   */
  Category?:
    | "MEDICATION"
    | "MEDICAL_CONDITION"
    | "PROTECTED_HEALTH_INFORMATION"
    | "TEST_TREATMENT_PROCEDURE"
    | "ANATOMY"
    | string;

  /**
   * <p> Describes the specific type of entity with category of entities. </p>
   */
  Type?:
    | "NAME"
    | "DOSAGE"
    | "ROUTE_OR_MODE"
    | "FORM"
    | "FREQUENCY"
    | "DURATION"
    | "GENERIC_NAME"
    | "BRAND_NAME"
    | "STRENGTH"
    | "RATE"
    | "ACUITY"
    | "TEST_NAME"
    | "TEST_VALUE"
    | "TEST_UNITS"
    | "PROCEDURE_NAME"
    | "TREATMENT_NAME"
    | "DATE"
    | "AGE"
    | "CONTACT_POINT"
    | "EMAIL"
    | "IDENTIFIER"
    | "URL"
    | "ADDRESS"
    | "PROFESSION"
    | "SYSTEM_ORGAN_SITE"
    | "DIRECTION"
    | "QUALITY"
    | "QUANTITY"
    | string;

  /**
   * <p>Contextual information for the entity</p>
   */
  Traits?: Array<_Trait> | Iterable<_Trait>;

  /**
   * <p> The extracted attributes that relate to this entity.</p>
   */
  Attributes?: Array<_Attribute> | Iterable<_Attribute>;
}

export interface _UnmarshalledEntity extends _Entity {
  /**
   * <p>Contextual information for the entity</p>
   */
  Traits?: Array<_UnmarshalledTrait>;

  /**
   * <p> The extracted attributes that relate to this entity.</p>
   */
  Attributes?: Array<_UnmarshalledAttribute>;
}
