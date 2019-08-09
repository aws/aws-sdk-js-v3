/**
 * <p> Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. </p>
 */
export interface _ReviewActionDetail {
  /**
   * <p>The unique identifier for the action.</p>
   */
  ActionId?: string;

  /**
   * <p> The nature of the action itself. The Review Policy is responsible for examining the HIT and Assignments, emitting results, and deciding which other actions will be necessary. </p>
   */
  ActionName?: string;

  /**
   * <p> The specific HITId or AssignmentID targeted by the action.</p>
   */
  TargetId?: string;

  /**
   * <p> The type of object in TargetId.</p>
   */
  TargetType?: string;

  /**
   * <p> The current disposition of the action: INTENDED, SUCCEEDED, FAILED, or CANCELLED. </p>
   */
  Status?: "Intended" | "Succeeded" | "Failed" | "Cancelled" | string;

  /**
   * <p> The date when the action was completed.</p>
   */
  CompleteTime?: Date | string | number;

  /**
   * <p> A description of the outcome of the review.</p>
   */
  Result?: string;

  /**
   * <p> Present only when the Results have a FAILED Status.</p>
   */
  ErrorCode?: string;
}

export interface _UnmarshalledReviewActionDetail extends _ReviewActionDetail {
  /**
   * <p> The date when the action was completed.</p>
   */
  CompleteTime?: Date;
}
