/**
 * <p>Describes a key noun phrase.</p>
 */
export interface _KeyPhrase {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;

  /**
   * <p>The text of a key noun phrase.</p>
   */
  Text?: string;

  /**
   * <p>A character offset in the input text that shows where the key phrase begins (the first character is at position 0). The offset returns the position of each UTF-8 code point in the string. A <i>code point</i> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>
   */
  BeginOffset?: number;

  /**
   * <p>A character offset in the input text where the key phrase ends. The offset returns the position of each UTF-8 code point in the string. A <code>code point</code> is the abstract character from a particular graphical representation. For example, a multi-byte UTF-8 character maps to a single code point.</p>
   */
  EndOffset?: number;
}

export type _UnmarshalledKeyPhrase = _KeyPhrase;
