/**
 * <p>Provides information about an entity. </p> <p> </p>
 */
export interface _Entity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p>The entity's type.</p>
   */
  Type?:
    | "PERSON"
    | "LOCATION"
    | "ORGANIZATION"
    | "COMMERCIAL_ITEM"
    | "EVENT"
    | "DATE"
    | "QUANTITY"
    | "TITLE"
    | "OTHER"
    | string;

  /**
   * <p>The text of the entity.</p>
   */
  Text?: string;

  /**
   * <p>A character offset in the input text that shows where the entity begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text that shows where the entity ends. The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point. </p>
   */
  EndOffset?: number;
}

export type _UnmarshalledEntity = _Entity;
