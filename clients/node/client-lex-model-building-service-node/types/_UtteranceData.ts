/**
 * <p>Provides information about a single utterance that was made to your bot. </p>
 */
export interface _UtteranceData {
  /**
   * <p>The text that was entered by the user or the text representation of an audio clip.</p>
   */
  utteranceString?: string;

  /**
   * <p>The number of times that the utterance was processed.</p>
   */
  count?: number;

  /**
   * <p>The total number of individuals that used the utterance.</p>
   */
  distinctUsers?: number;

  /**
   * <p>The date that the utterance was first recorded.</p>
   */
  firstUtteredDate?: Date | string | number;

  /**
   * <p>The date that the utterance was last recorded.</p>
   */
  lastUtteredDate?: Date | string | number;
}

export interface _UnmarshalledUtteranceData extends _UtteranceData {
  /**
   * <p>The date that the utterance was first recorded.</p>
   */
  firstUtteredDate?: Date;

  /**
   * <p>The date that the utterance was last recorded.</p>
   */
  lastUtteredDate?: Date;
}
