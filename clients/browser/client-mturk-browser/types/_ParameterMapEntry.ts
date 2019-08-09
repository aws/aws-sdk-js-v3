/**
 * <p> This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. </p>
 */
export interface _ParameterMapEntry {
  /**
   * <p> The QuestionID from the HIT that is used to identify which question requires Mechanical Turk to score as part of the ScoreMyKnownAnswers/2011-09-01 Review Policy. </p>
   */
  Key?: string;

  /**
   * <p> The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly. </p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParameterMapEntry extends _ParameterMapEntry {
  /**
   * <p> The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly. </p>
   */
  Values?: Array<string>;
}
