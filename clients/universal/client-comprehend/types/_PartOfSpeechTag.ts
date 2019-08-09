/**
 * <p>Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.</p>
 */
export interface _PartOfSpeechTag {
  /**
   * <p>Identifies the part of speech that the token represents.</p>
   */
  Tag?:
    | "ADJ"
    | "ADP"
    | "ADV"
    | "AUX"
    | "CONJ"
    | "CCONJ"
    | "DET"
    | "INTJ"
    | "NOUN"
    | "NUM"
    | "O"
    | "PART"
    | "PRON"
    | "PROPN"
    | "PUNCT"
    | "SCONJ"
    | "SYM"
    | "VERB"
    | string;

  /**
   * <p>The confidence that Amazon Comprehend has that the part of speech was correctly identified.</p>
   */
  Score?: number;
}

export type _UnmarshalledPartOfSpeechTag = _PartOfSpeechTag;
