/**
 * <p>Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt;</p>
 */
export interface _EntityRecognizerFilter {
  /**
   * <p>The status of an entity recognizer.</p>
   */
  Status?:
    | "SUBMITTED"
    | "TRAINING"
    | "DELETING"
    | "STOP_REQUESTED"
    | "STOPPED"
    | "IN_ERROR"
    | "TRAINED"
    | string;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeBefore?: Date | string | number;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeAfter?: Date | string | number;
}

export interface _UnmarshalledEntityRecognizerFilter
  extends _EntityRecognizerFilter {
  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}
