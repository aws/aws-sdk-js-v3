/**
 * <p> This data structure is returned multiple times for each result specified in the Review Policy. </p>
 */
export interface _ReviewResultDetail {
  /**
   * <p> A unique identifier of the Review action result. </p>
   */
  ActionId?: string;

  /**
   * <p>The HITID or AssignmentId about which this result was taken. Note that HIT-level Review Policies will often emit results about both the HIT itself and its Assignments, while Assignment-level review policies generally only emit results about the Assignment itself. </p>
   */
  SubjectId?: string;

  /**
   * <p> The type of the object from the SubjectId field.</p>
   */
  SubjectType?: string;

  /**
   * <p> Specifies the QuestionId the result is describing. Depending on whether the TargetType is a HIT or Assignment this results could specify multiple values. If TargetType is HIT and QuestionId is absent, then the result describes results of the HIT, including the HIT agreement score. If ObjectType is Assignment and QuestionId is absent, then the result describes the Worker's performance on the HIT. </p>
   */
  QuestionId?: string;

  /**
   * <p> Key identifies the particular piece of reviewed information. </p>
   */
  Key?: string;

  /**
   * <p> The values of Key provided by the review policies you have selected. </p>
   */
  Value?: string;
}

export type _UnmarshalledReviewResultDetail = _ReviewResultDetail;
