/**
 * <p>Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.</p>
 */
export interface _DocumentClassifierFilter {
  /**
   * <p>Filters the list of classifiers based on status. </p>
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
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date | string | number;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date | string | number;
}

export interface _UnmarshalledDocumentClassifierFilter
  extends _DocumentClassifierFilter {
  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted before the specified time. Classifiers are returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for processing. Returns only classifiers submitted after the specified time. Classifiers are returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}
