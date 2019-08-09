import {
  _ReviewResultDetail,
  _UnmarshalledReviewResultDetail
} from "./_ReviewResultDetail";
import {
  _ReviewActionDetail,
  _UnmarshalledReviewActionDetail
} from "./_ReviewActionDetail";

/**
 * <p> Contains both ReviewResult and ReviewAction elements for a particular HIT. </p>
 */
export interface _ReviewReport {
  /**
   * <p> A list of ReviewResults objects for each action specified in the Review Policy. </p>
   */
  ReviewResults?: Array<_ReviewResultDetail> | Iterable<_ReviewResultDetail>;

  /**
   * <p> A list of ReviewAction objects for each action specified in the Review Policy. </p>
   */
  ReviewActions?: Array<_ReviewActionDetail> | Iterable<_ReviewActionDetail>;
}

export interface _UnmarshalledReviewReport extends _ReviewReport {
  /**
   * <p> A list of ReviewResults objects for each action specified in the Review Policy. </p>
   */
  ReviewResults?: Array<_UnmarshalledReviewResultDetail>;

  /**
   * <p> A list of ReviewAction objects for each action specified in the Review Policy. </p>
   */
  ReviewActions?: Array<_UnmarshalledReviewActionDetail>;
}
