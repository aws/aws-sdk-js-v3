import {
  _QualificationRequirement,
  _UnmarshalledQualificationRequirement
} from "./_QualificationRequirement";

/**
 * <p> The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.</p>
 */
export interface _HIT {
  /**
   * <p> A unique identifier for the HIT.</p>
   */
  HITId?: string;

  /**
   * <p>The ID of the HIT type of this HIT</p>
   */
  HITTypeId?: string;

  /**
   * <p> The ID of the HIT Group of this HIT.</p>
   */
  HITGroupId?: string;

  /**
   * <p> The ID of the HIT Layout of this HIT.</p>
   */
  HITLayoutId?: string;

  /**
   * <p> The date and time the HIT was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p> The title of the HIT.</p>
   */
  Title?: string;

  /**
   * <p> A general description of the HIT.</p>
   */
  Description?: string;

  /**
   * <p> The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.</p>
   */
  Question?: string;

  /**
   * <p> One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.</p>
   */
  Keywords?: string;

  /**
   * <p>The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. </p>
   */
  HITStatus?:
    | "Assignable"
    | "Unassignable"
    | "Reviewable"
    | "Reviewing"
    | "Disposed"
    | string;

  /**
   * <p>The number of times the HIT can be accepted and completed before the HIT becomes unavailable. </p>
   */
  MaxAssignments?: number;

  /**
   * <p>A string representing a currency amount.</p>
   */
  Reward?: string;

  /**
   * <p>The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid. </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * <p>The date and time the HIT expires.</p>
   */
  Expiration?: Date | string | number;

  /**
   * <p> The length of time, in seconds, that a Worker has to complete the HIT after accepting it.</p>
   */
  AssignmentDurationInSeconds?: number;

  /**
   * <p> An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.</p>
   */
  RequesterAnnotation?: string;

  /**
   * <p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>
   */
  QualificationRequirements?:
    | Array<_QualificationRequirement>
    | Iterable<_QualificationRequirement>;

  /**
   * <p> Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate.</p>
   */
  HITReviewStatus?:
    | "NotReviewed"
    | "MarkedForReview"
    | "ReviewedAppropriate"
    | "ReviewedInappropriate"
    | string;

  /**
   * <p> The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.</p>
   */
  NumberOfAssignmentsPending?: number;

  /**
   * <p> The number of assignments for this HIT that are available for Workers to accept.</p>
   */
  NumberOfAssignmentsAvailable?: number;

  /**
   * <p> The number of assignments for this HIT that have been approved or rejected.</p>
   */
  NumberOfAssignmentsCompleted?: number;
}

export interface _UnmarshalledHIT extends _HIT {
  /**
   * <p> The date and time the HIT was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time the HIT expires.</p>
   */
  Expiration?: Date;

  /**
   * <p> Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. </p>
   */
  QualificationRequirements?: Array<_UnmarshalledQualificationRequirement>;
}
