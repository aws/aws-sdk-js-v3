import { _Trait, _UnmarshalledTrait } from "./_Trait";

/**
 * <p> An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. </p>
 */
export interface _Attribute {
  /**
   * <p> The type of attribute. </p>
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
   * <p> The level of confidence that Comprehend Medical has that the segment of text is correctly recognized as an attribute. </p>
   */
  Score?: number;

  /**
   * <p> The level of confidence that Comprehend Medical has that this attribute is correctly related to this entity. </p>
   */
  RelationshipScore?: number;

  /**
   * <p> The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier. </p>
   */
  Id?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string. </p>
   */
  BeginOffset?: number;

  /**
   * <p> The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string. </p>
   */
  EndOffset?: number;

  /**
   * <p> The segment of input text extracted as this attribute.</p>
   */
  Text?: string;

  /**
   * <p> Contextual information for this attribute. </p>
   */
  Traits?: Array<_Trait> | Iterable<_Trait>;
}

export interface _UnmarshalledAttribute extends _Attribute {
  /**
   * <p> Contextual information for this attribute. </p>
   */
  Traits?: Array<_UnmarshalledTrait>;
}
