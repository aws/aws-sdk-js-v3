// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MTurkServiceException as __BaseException } from "./MTurkServiceException";

export interface AcceptQualificationRequestRequest {
  /**
   * <p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>
   */
  QualificationRequestId: string | undefined;

  /**
   * <p>
   *             The value of the Qualification. You can omit this value if you are using the
   *             presence or absence of the Qualification as the basis for a HIT requirement.
   *         </p>
   */
  IntegerValue?: number;
}

export interface AcceptQualificationRequestResponse {}

/**
 * <p>Your request is invalid.</p>
 */
export class RequestError extends __BaseException {
  readonly name: "RequestError" = "RequestError";
  readonly $fault: "client" = "client";
  Message?: string;
  TurkErrorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestError, __BaseException>) {
    super({
      name: "RequestError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestError.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}

/**
 * <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 */
export class ServiceFault extends __BaseException {
  readonly name: "ServiceFault" = "ServiceFault";
  readonly $fault: "server" = "server";
  Message?: string;
  TurkErrorCode?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFault, __BaseException>) {
    super({
      name: "ServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFault.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}

export interface ApproveAssignmentRequest {
  /**
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   */
  RequesterFeedback?: string;

  /**
   * <p>
   *             A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>.
   *         </p>
   */
  OverrideRejection?: boolean;
}

export interface ApproveAssignmentResponse {}

export enum AssignmentStatus {
  Approved = "Approved",
  Rejected = "Rejected",
  Submitted = "Submitted",
}

/**
 * <p> The Assignment data structure represents a single assignment
 *             of a HIT to a Worker. The assignment tracks the Worker's efforts to
 *             complete the HIT, and contains the results for later retrieval.
 *         </p>
 */
export interface Assignment {
  /**
   * <p> A unique identifier for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * <p> The ID of the HIT.</p>
   */
  HITId?: string;

  /**
   * <p> The status of the assignment.</p>
   */
  AssignmentStatus?: AssignmentStatus | string;

  /**
   * <p> If results have been submitted, AutoApprovalTime is the date
   *             and time the results of the assignment results are considered
   *             Approved automatically if they have not already been explicitly
   *             approved or rejected by the Requester. This value is derived from the
   *             auto-approval delay specified by the Requester in the HIT. This value
   *             is omitted from the assignment if the Worker has not yet submitted
   *             results.</p>
   */
  AutoApprovalTime?: Date;

  /**
   * <p> The date and time the Worker accepted the assignment.</p>
   */
  AcceptTime?: Date;

  /**
   * <p> If the Worker has submitted results, SubmitTime is the date
   *             and time the assignment was submitted. This value is omitted from the
   *             assignment if the Worker has not yet submitted results.</p>
   */
  SubmitTime?: Date;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             approved the results, ApprovalTime is the date and time the Requester
   *             approved the results. This value is omitted from the assignment if
   *             the Requester has not yet approved the results.</p>
   */
  ApprovalTime?: Date;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             rejected the results, RejectionTime is the date and time the
   *             Requester rejected the results.</p>
   */
  RejectionTime?: Date;

  /**
   * <p> The date and time of the deadline for the assignment. This
   *             value is derived from the deadline specification for the HIT and the
   *             date and time the Worker accepted the HIT.</p>
   */
  Deadline?: Date;

  /**
   * <p> The Worker's answers submitted for the HIT contained in a
   *             QuestionFormAnswers document, if the Worker provides an answer. If
   *             the Worker does not provide any answers, Answer may contain a
   *             QuestionFormAnswers document, or Answer may be empty.</p>
   */
  Answer?: string;

  /**
   * <p> The feedback string included with the call to the
   *             ApproveAssignment operation or the RejectAssignment operation, if the
   *             Requester approved or rejected the assignment and specified feedback.</p>
   */
  RequesterFeedback?: string;
}

export interface AssociateQualificationWithWorkerRequest {
  /**
   * <p>The ID of the Qualification type to use for the assigned Qualification.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>
   *             The ID of the Worker to whom the Qualification is being assigned.
   *             Worker IDs are included with submitted HIT assignments and Qualification requests.
   *         </p>
   */
  WorkerId: string | undefined;

  /**
   * <p>The value of the Qualification to assign.</p>
   */
  IntegerValue?: number;

  /**
   * <p>
   *             Specifies whether to send a notification email message to the Worker
   *             saying that the qualification was assigned to the Worker.
   *             Note: this is true by default.
   *         </p>
   */
  SendNotification?: boolean;
}

export interface AssociateQualificationWithWorkerResponse {}

/**
 * <p>An object representing a Bonus payment paid to a Worker.</p>
 */
export interface BonusPayment {
  /**
   * <p>The ID of the Worker to whom the bonus was paid.</p>
   */
  WorkerId?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  BonusAmount?: string;

  /**
   * <p>The ID of the assignment associated with this bonus payment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The Reason text given when the bonus was granted, if any.</p>
   */
  Reason?: string;

  /**
   * <p>The date and time of when the bonus was granted.</p>
   */
  GrantTime?: Date;
}

export enum Comparator {
  DoesNotExist = "DoesNotExist",
  EqualTo = "EqualTo",
  Exists = "Exists",
  GreaterThan = "GreaterThan",
  GreaterThanOrEqualTo = "GreaterThanOrEqualTo",
  In = "In",
  LessThan = "LessThan",
  LessThanOrEqualTo = "LessThanOrEqualTo",
  NotEqualTo = "NotEqualTo",
  NotIn = "NotIn",
}

export interface CreateAdditionalAssignmentsForHITRequest {
  /**
   * <p>The ID of the HIT to extend.</p>
   */
  HITId: string | undefined;

  /**
   * <p>The number of additional assignments to request for this HIT.</p>
   */
  NumberOfAdditionalAssignments: number | undefined;

  /**
   * <p>
   *             A unique identifier for this request, which allows you to retry the call on error
   *             without extending the HIT multiple times.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server. If the extend HIT already exists in the system
   *             from a previous call using the same <code>UniqueRequestToken</code>,
   *             subsequent calls will return an error with a message containing the request ID.
   *         </p>
   */
  UniqueRequestToken?: string;
}

export interface CreateAdditionalAssignmentsForHITResponse {}

/**
 * <p> This data structure is the data type for the AnswerKey
 *             parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
 *         </p>
 */
export interface ParameterMapEntry {
  /**
   * <p> The QuestionID from the HIT that is used to identify which
   *             question requires Mechanical Turk to score as part of the
   *             ScoreMyKnownAnswers/2011-09-01 Review Policy.
   *         </p>
   */
  Key?: string;

  /**
   * <p> The list of answers to the question specified in the
   *             MapEntry Key element. The Worker must match all values in order for
   *             the answer to be scored correctly.
   *         </p>
   */
  Values?: string[];
}

/**
 * <p> Name of the parameter from the Review policy.
 *         </p>
 */
export interface PolicyParameter {
  /**
   * <p> Name of the parameter from the list of Review Polices.
   *         </p>
   */
  Key?: string;

  /**
   * <p> The list of values of the Parameter</p>
   */
  Values?: string[];

  /**
   * <p> List of ParameterMapEntry objects.
   *         </p>
   */
  MapEntries?: ParameterMapEntry[];
}

/**
 * <p> HIT Review Policy data structures represent HIT review
 *             policies, which you specify when you create a HIT.
 *         </p>
 */
export interface ReviewPolicy {
  /**
   * <p> Name of a Review Policy: SimplePlurality/2011-09-01 or
   *             ScoreMyKnownAnswers/2011-09-01
   *         </p>
   */
  PolicyName: string | undefined;

  /**
   * <p>Name of the parameter from the Review policy.</p>
   */
  Parameters?: PolicyParameter[];
}

/**
 * <p> The HITLayoutParameter data structure defines parameter
 *             values used with a HITLayout. A HITLayout is a reusable Amazon
 *             Mechanical Turk project template used to provide Human Intelligence
 *             Task (HIT) question data for CreateHIT.
 *         </p>
 */
export interface HITLayoutParameter {
  /**
   * <p> The name of the parameter in the HITLayout.
   *         </p>
   */
  Name: string | undefined;

  /**
   * <p>The value substituted for the parameter referenced in the
   *             HITLayout.
   *         </p>
   */
  Value: string | undefined;
}

export enum HITAccessActions {
  Accept = "Accept",
  DiscoverPreviewAndAccept = "DiscoverPreviewAndAccept",
  PreviewAndAccept = "PreviewAndAccept",
}

/**
 * <p>The Locale data structure represents a geographical region or location.</p>
 */
export interface Locale {
  /**
   * <p> The country of the locale. Must be a valid ISO 3166 country
   *             code. For example, the code US refers to the United States of
   *             America.
   *         </p>
   */
  Country: string | undefined;

  /**
   * <p>The state or subdivision of the locale. A valid ISO 3166-2
   *             subdivision code. For example, the code WA refers to the state of
   *             Washington.</p>
   */
  Subdivision?: string;
}

/**
 * <p>
 *             The QualificationRequirement data structure describes a Qualification that a Worker must have
 *             before the Worker is allowed to accept a HIT.
 *             A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or
 *             see the HIT in search results.
 *         </p>
 */
export interface QualificationRequirement {
  /**
   * <p> The ID of the Qualification type for the requirement.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The kind of comparison to make against a Qualification's
   *             value. You can compare a Qualification's value to an IntegerValue to
   *             see if it is LessThan, LessThanOrEqualTo, GreaterThan,
   *             GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You
   *             can compare it to a LocaleValue to see if it is EqualTo, or
   *             NotEqualTo the LocaleValue. You can check to see if the value is In
   *             or NotIn a set of IntegerValue
   *             or LocaleValue values. Lastly, a
   *             Qualification requirement can also
   *             test if a Qualification Exists or
   *             DoesNotExist in the user's profile,
   *             regardless of its value.
   *         </p>
   */
  Comparator: Comparator | string | undefined;

  /**
   * <p> The integer value to compare against the Qualification's
   *             value. IntegerValue must not be present if Comparator is Exists or
   *             DoesNotExist. IntegerValue can only be used if the Qualification type
   *             has an integer value; it cannot be used with the Worker_Locale
   *             QualificationType ID. When performing a set comparison by using the
   *             In or the NotIn comparator, you can use up to 15 IntegerValue
   *             elements in a QualificationRequirement data structure.
   *         </p>
   */
  IntegerValues?: number[];

  /**
   * <p> The locale value to compare against the Qualification's
   *             value. The local value must be a valid ISO 3166 country code or
   *             supports ISO 3166-2 subdivisions. LocaleValue can only be used with a
   *             Worker_Locale QualificationType ID. LocaleValue can only be used with
   *             the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use
   *             a single LocaleValue element when using the EqualTo or NotEqualTo
   *             comparators. When performing a set comparison by using the In or the
   *             NotIn comparator, you can use up to 30 LocaleValue elements in a
   *             QualificationRequirement data structure.
   *         </p>
   */
  LocaleValues?: Locale[];

  /**
   * @deprecated
   *
   * <p> DEPRECATED: Use the <code>ActionsGuarded</code> field instead.
   *             If RequiredToPreview is true, the question data for the HIT will not be shown
   *             when a Worker whose Qualifications do not meet this requirement tries
   *             to preview the HIT. That is, a Worker's Qualifications must meet all
   *             of the requirements for which RequiredToPreview is true in order to
   *             preview the HIT. If a Worker meets all of the requirements where
   *             RequiredToPreview is true (or if there are no such requirements), but
   *             does not meet all of the requirements for the HIT, the Worker will be
   *             allowed to preview the HIT's question data, but will not be allowed
   *             to accept and complete the HIT. The default is false. This should not
   *             be used in combination with the <code>ActionsGuarded</code> field.
   *         </p>
   */
  RequiredToPreview?: boolean;

  /**
   * <p> Setting this attribute prevents Workers whose Qualifications do not meet
   *             this QualificationRequirement from taking the specified action. Valid arguments include
   *             "Accept" (Worker cannot accept the HIT, but can preview the HIT and see it in their search results),
   *             "PreviewAndAccept" (Worker cannot accept or preview the HIT, but can see the HIT in their search results),
   *             and "DiscoverPreviewAndAccept" (Worker cannot accept, preview, or see the HIT in their search results). It's possible for you to create a HIT with multiple
   *             QualificationRequirements (which can have different values for the ActionGuarded attribute). In this case,
   *             the Worker is only permitted to perform an action when they have met all QualificationRequirements guarding
   *             the action. The actions in the order of least restrictive to most restrictive are Discover, Preview and Accept.
   *             For example, if a Worker meets all QualificationRequirements that are set to DiscoverPreviewAndAccept, but do
   *             not meet all requirements that are set with PreviewAndAccept, then the Worker will be able to Discover, i.e. see the
   *             HIT in their search result, but will not be able to Preview or Accept the HIT. ActionsGuarded should not be used in combination with the
   *             <code>RequiredToPreview</code> field.
   *         </p>
   */
  ActionsGuarded?: HITAccessActions | string;
}

export interface CreateHITRequest {
  /**
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   */
  LifetimeInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of time, in seconds, that a Worker has to complete the HIT after accepting it.
   *             If a Worker does not complete the assignment within the specified duration,
   *             the assignment is considered abandoned. If the HIT is still active
   *             (that is, its lifetime has not elapsed), the assignment becomes available
   *             for other users to find and accept.
   *         </p>
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   */
  Reward: string | undefined;

  /**
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   */
  Title: string | undefined;

  /**
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

  /**
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   */
  Description: string | undefined;

  /**
   * <p>
   *             The data the person completing the HIT uses to produce the results.
   *         </p>
   *         <p>
   *             Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure,
   *             or an HTMLQuestion data structure. The XML question data must not be larger than
   *             64 kilobytes (65,535 bytes) in size, including whitespace.
   *         </p>
   *         <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>
   */
  Question?: string;

  /**
   * <p>
   *             An arbitrary data field.
   *             The RequesterAnnotation parameter lets your application attach arbitrary data
   *             to the HIT for tracking purposes.
   *             For example, this parameter could be an identifier internal to the Requester's application
   *             that corresponds with the HIT.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT.
   *             It is not shown to the Worker, or any other Requester.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter may be different for each HIT you submit.
   *             It does not affect how your HITs are grouped.
   *         </p>
   */
  RequesterAnnotation?: string;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   */
  QualificationRequirements?: QualificationRequirement[];

  /**
   * <p>
   *             A unique identifier for this request which allows you to retry the call
   *             on error without creating duplicate HITs.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server.
   *             If the HIT already exists in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error
   *             with a message containing the HITId.
   *         </p>
   *         <note>
   *             <p>
   *                 Note: It is your responsibility to ensure uniqueness of the token.
   *                 The unique token expires after 24 hours. Subsequent calls using the same
   *                 UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *             </p>
   *         </note>
   */
  UniqueRequestToken?: string;

  /**
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * <p>
   *             The HITLayoutId allows you to use a pre-existing HIT design with placeholder values
   *             and create an additional HIT by providing those values as HITLayoutParameters.
   *         </p>
   *         <p>
   *             Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *         </p>
   */
  HITLayoutId?: string;

  /**
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   */
  HITLayoutParameters?: HITLayoutParameter[];
}

export enum HITReviewStatus {
  MarkedForReview = "MarkedForReview",
  NotReviewed = "NotReviewed",
  ReviewedAppropriate = "ReviewedAppropriate",
  ReviewedInappropriate = "ReviewedInappropriate",
}

export enum HITStatus {
  Assignable = "Assignable",
  Disposed = "Disposed",
  Reviewable = "Reviewable",
  Reviewing = "Reviewing",
  Unassignable = "Unassignable",
}

/**
 * <p> The HIT data structure represents a single HIT, including
 *             all the information necessary for a Worker to accept and complete the
 *             HIT.</p>
 */
export interface HIT {
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
  CreationTime?: Date;

  /**
   * <p> The title of the HIT.</p>
   */
  Title?: string;

  /**
   * <p> A general description of the HIT.</p>
   */
  Description?: string;

  /**
   * <p> The data the Worker completing the HIT uses produce the
   *             results. This is either either a QuestionForm, HTMLQuestion or an
   *             ExternalQuestion data structure.</p>
   */
  Question?: string;

  /**
   * <p> One or more words or phrases that describe the HIT,
   *             separated by commas. Search terms similar to the keywords of a HIT
   *             are more likely to have the HIT in the search results.</p>
   */
  Keywords?: string;

  /**
   * <p>The status of the HIT and its assignments. Valid Values are
   *             Assignable | Unassignable | Reviewable | Reviewing | Disposed.
   *         </p>
   */
  HITStatus?: HITStatus | string;

  /**
   * <p>The number of times the HIT can be accepted and completed
   *             before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * <p>A string representing a currency amount.</p>
   */
  Reward?: string;

  /**
   * <p>The amount of time, in seconds, after the Worker submits an
   *             assignment for the HIT that the results are automatically approved by
   *             Amazon Mechanical Turk. This is the amount of time the Requester has
   *             to reject an assignment submitted by a Worker before the assignment
   *             is auto-approved and the Worker is paid.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * <p>The date and time the HIT expires.</p>
   */
  Expiration?: Date;

  /**
   * <p> The length of time, in seconds, that a Worker has to
   *             complete the HIT after accepting it.</p>
   */
  AssignmentDurationInSeconds?: number;

  /**
   * <p> An arbitrary data field the Requester who created the HIT
   *             can use. This field is visible only to the creator of the HIT.</p>
   */
  RequesterAnnotation?: string;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   */
  QualificationRequirements?: QualificationRequirement[];

  /**
   * <p> Indicates the review status of the HIT. Valid Values are
   *             NotReviewed | MarkedForReview | ReviewedAppropriate |
   *             ReviewedInappropriate.</p>
   */
  HITReviewStatus?: HITReviewStatus | string;

  /**
   * <p> The number of assignments for this HIT that are being
   *             previewed or have been accepted by Workers, but have not yet been
   *             submitted, returned, or abandoned.</p>
   */
  NumberOfAssignmentsPending?: number;

  /**
   * <p> The number of assignments for this HIT that are available
   *             for Workers to accept.</p>
   */
  NumberOfAssignmentsAvailable?: number;

  /**
   * <p> The number of assignments for this HIT that have been
   *             approved or rejected.</p>
   */
  NumberOfAssignmentsCompleted?: number;
}

export interface CreateHITResponse {
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

export interface CreateHITTypeRequest {
  /**
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * <p>
   *             The amount of time, in seconds, that a Worker has to complete the HIT after accepting it.
   *             If a Worker does not complete the assignment within the specified duration,
   *             the assignment is considered abandoned. If the HIT is still active
   *             (that is, its lifetime has not elapsed), the assignment becomes available
   *             for other users to find and accept.
   *         </p>
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   */
  Reward: string | undefined;

  /**
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   */
  Title: string | undefined;

  /**
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

  /**
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   */
  Description: string | undefined;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   */
  QualificationRequirements?: QualificationRequirement[];
}

export interface CreateHITTypeResponse {
  /**
   * <p> The ID of the newly registered HIT type.</p>
   */
  HITTypeId?: string;
}

export interface CreateHITWithHITTypeRequest {
  /**
   * <p>The HIT type ID you want to create this HIT with.</p>
   */
  HITTypeId: string | undefined;

  /**
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   */
  LifetimeInSeconds: number | undefined;

  /**
   * <p>
   *             The data the person completing the HIT uses to produce the results.
   *         </p>
   *         <p>
   *             Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure,
   *             or an HTMLQuestion data structure. The XML question data must not be larger than
   *             64 kilobytes (65,535 bytes) in size, including whitespace.
   *         </p>
   *         <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>
   */
  Question?: string;

  /**
   * <p>
   *             An arbitrary data field.
   *             The RequesterAnnotation parameter lets your application attach arbitrary data
   *             to the HIT for tracking purposes.
   *             For example, this parameter could be an identifier internal to the Requester's application
   *             that corresponds with the HIT.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT.
   *             It is not shown to the Worker, or any other Requester.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter may be different for each HIT you submit.
   *             It does not affect how your HITs are grouped.
   *         </p>
   */
  RequesterAnnotation?: string;

  /**
   * <p>
   *             A unique identifier for this request which allows you to retry the call
   *             on error without creating duplicate HITs.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server.
   *             If the HIT already exists in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error
   *             with a message containing the HITId.
   *         </p>
   *         <note>
   *             <p>
   *                 Note: It is your responsibility to ensure uniqueness of the token.
   *                 The unique token expires after 24 hours. Subsequent calls using the same
   *                 UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *             </p>
   *         </note>
   */
  UniqueRequestToken?: string;

  /**
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * <p>
   *             The HITLayoutId allows you to use a pre-existing HIT design with placeholder values
   *             and create an additional HIT by providing those values as HITLayoutParameters.
   *         </p>
   *         <p>
   *             Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *         </p>
   */
  HITLayoutId?: string;

  /**
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   */
  HITLayoutParameters?: HITLayoutParameter[];
}

export interface CreateHITWithHITTypeResponse {
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

export enum QualificationTypeStatus {
  Active = "Active",
  Inactive = "Inactive",
}

export interface CreateQualificationTypeRequest {
  /**
   * <p> The name you give to the Qualification type. The type name
   *             is used to represent the Qualification to Workers, and to find the
   *             type using a Qualification type search. It must be unique across all
   *             of your Qualification types.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more words or phrases that describe the Qualification
   *             type, separated by commas. The keywords of a type make the type
   *             easier to find during a search.</p>
   */
  Keywords?: string;

  /**
   * <p>A long description for the Qualification type. On the Amazon
   *             Mechanical Turk website, the long description is displayed when a
   *             Worker examines a Qualification type.</p>
   */
  Description: string | undefined;

  /**
   * <p>The initial status of the Qualification type.</p>
   *         <p>Constraints: Valid values are: Active | Inactive</p>
   */
  QualificationTypeStatus: QualificationTypeStatus | string | undefined;

  /**
   * <p>The number of seconds that a Worker must wait after
   *             requesting a Qualification of the Qualification type before the
   *             worker can retry the Qualification request.</p>
   *         <p>Constraints: None. If not specified, retries are disabled and
   *             Workers can request a Qualification of this type only once, even if
   *             the Worker has not been granted the Qualification. It is not possible
   *             to disable retries for a Qualification type after it has been created
   *             with retries enabled. If you want to disable retries, you must delete
   *             existing retry-enabled Qualification type and then create a new
   *             Qualification type with retries disabled.</p>
   */
  RetryDelayInSeconds?: number;

  /**
   * <p>
   *             The questions for the Qualification test a Worker must answer
   *             correctly to obtain a Qualification of this type. If this parameter
   *             is specified,
   *             <code>TestDurationInSeconds</code>
   *             must also be specified.
   *         </p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a
   *             QuestionForm data structure. This parameter cannot be specified if
   *             AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request
   *             the Qualification without answering any questions.</p>
   */
  Test?: string;

  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter, in the form of an AnswerKey data structure.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes.</p>
   *         <p>Constraints: None. If not specified, you must process
   *             Qualification requests manually.</p>
   */
  AnswerKey?: string;

  /**
   * <p>The number of seconds the Worker has to complete the
   *             Qualification test, starting from the time the Worker requests the
   *             Qualification.</p>
   */
  TestDurationInSeconds?: number;

  /**
   * <p>Specifies whether requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this
   *             parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p>The Qualification value to use for automatically granted
   *             Qualifications. This parameter is used only if the AutoGranted
   *             parameter is true.</p>
   */
  AutoGrantedValue?: number;
}

/**
 * <p> The QualificationType data structure represents a
 *             Qualification type, a description of a property of a Worker that must
 *             match the requirements of a HIT for the Worker to be able to accept
 *             the HIT. The type also describes how a Worker can obtain a
 *             Qualification of that type, such as through a Qualification test.
 *         </p>
 */
export interface QualificationType {
  /**
   * <p> A unique identifier for the Qualification type. A
   *             Qualification type is given a Qualification type ID when you call the
   *             CreateQualificationType operation.
   *         </p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The date and time the Qualification type was created.
   *         </p>
   */
  CreationTime?: Date;

  /**
   * <p> The name of the Qualification type. The type name is used to
   *             identify the type, and to find the type using a Qualification type
   *             search.
   *         </p>
   */
  Name?: string;

  /**
   * <p> A long description for the Qualification type.
   *         </p>
   */
  Description?: string;

  /**
   * <p> One or more words or phrases that describe theQualification
   *             type, separated by commas. The Keywords make the type easier to find
   *             using a search.
   *         </p>
   */
  Keywords?: string;

  /**
   * <p> The status of the Qualification type. A Qualification type's
   *             status determines if users can apply to receive a Qualification of
   *             this type, and if HITs can be created with requirements based on this
   *             type. Valid values are Active | Inactive.
   *         </p>
   */
  QualificationTypeStatus?: QualificationTypeStatus | string;

  /**
   * <p> The questions for a Qualification test associated with this
   *             Qualification type that a user can take to obtain a Qualification of
   *             this type. This parameter must be specified if AnswerKey is present.
   *             A Qualification type cannot have both a specified Test parameter and
   *             an AutoGranted value of true.
   *         </p>
   */
  Test?: string;

  /**
   * <p> The amount of time, in seconds, given to a Worker to
   *             complete the Qualification test, beginning from the time the Worker
   *             requests the Qualification.
   *         </p>
   */
  TestDurationInSeconds?: number;

  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter.</p>
   */
  AnswerKey?: string;

  /**
   * <p> The amount of time, in seconds, Workers must wait after
   *             taking the Qualification test before they can take it again. Workers
   *             can take a Qualification test multiple times if they were not granted
   *             the Qualification from a previous attempt, or if the test offers a
   *             gradient score and they want a better score. If not specified,
   *             retries are disabled and Workers can request a Qualification only
   *             once.
   *         </p>
   */
  RetryDelayInSeconds?: number;

  /**
   * <p> Specifies whether the Qualification type is one that a user
   *             can request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test. This value is False for Qualifications
   *             assigned automatically by the system. Valid values are True | False.
   *         </p>
   */
  IsRequestable?: boolean;

  /**
   * <p>Specifies that requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test. Valid values are True | False.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p> The Qualification integer value to use for automatically
   *             granted Qualifications, if AutoGranted is true. This is 1 by default.
   *         </p>
   */
  AutoGrantedValue?: number;
}

export interface CreateQualificationTypeResponse {
  /**
   * <p>The created Qualification type, returned as a
   *             QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}

export interface CreateWorkerBlockRequest {
  /**
   * <p>The ID of the Worker to block.</p>
   */
  WorkerId: string | undefined;

  /**
   * <p>A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.</p>
   */
  Reason: string | undefined;
}

export interface CreateWorkerBlockResponse {}

export interface DeleteHITRequest {
  /**
   * <p>The ID of the HIT to be deleted.</p>
   */
  HITId: string | undefined;
}

export interface DeleteHITResponse {}

export interface DeleteQualificationTypeRequest {
  /**
   * <p>The ID of the QualificationType to dispose.</p>
   */
  QualificationTypeId: string | undefined;
}

export interface DeleteQualificationTypeResponse {}

export interface DeleteWorkerBlockRequest {
  /**
   * <p>The ID of the Worker to unblock.</p>
   */
  WorkerId: string | undefined;

  /**
   * <p>A message that explains the reason for unblocking the Worker. The Worker does not see this message.</p>
   */
  Reason?: string;
}

export interface DeleteWorkerBlockResponse {}

export interface DisassociateQualificationFromWorkerRequest {
  /**
   * <p>The ID of the Worker who possesses the Qualification to be revoked.</p>
   */
  WorkerId: string | undefined;

  /**
   * <p>The ID of the Qualification type of the Qualification to be revoked.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>
   */
  Reason?: string;
}

export interface DisassociateQualificationFromWorkerResponse {}

export enum EventType {
  AssignmentAbandoned = "AssignmentAbandoned",
  AssignmentAccepted = "AssignmentAccepted",
  AssignmentApproved = "AssignmentApproved",
  AssignmentRejected = "AssignmentRejected",
  AssignmentReturned = "AssignmentReturned",
  AssignmentSubmitted = "AssignmentSubmitted",
  HITCreated = "HITCreated",
  HITDisposed = "HITDisposed",
  HITExpired = "HITExpired",
  HITExtended = "HITExtended",
  HITReviewable = "HITReviewable",
  Ping = "Ping",
}

export interface GetAccountBalanceRequest {}

export interface GetAccountBalanceResponse {
  /**
   * <p>A string representing a currency amount.</p>
   */
  AvailableBalance?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  OnHoldBalance?: string;
}

export interface GetAssignmentRequest {
  /**
   * <p>The ID of the Assignment to be retrieved.</p>
   */
  AssignmentId: string | undefined;
}

export interface GetAssignmentResponse {
  /**
   * <p> The assignment. The response includes one Assignment
   *             element.
   *         </p>
   */
  Assignment?: Assignment;

  /**
   * <p> The HIT associated with this assignment. The response
   *             includes one HIT element.</p>
   */
  HIT?: HIT;
}

export interface GetFileUploadURLRequest {
  /**
   * <p>The ID of the assignment that contains the question with a
   *             FileUploadAnswer.</p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>The identifier of the question with a FileUploadAnswer, as
   *             specified in the QuestionForm of the HIT.</p>
   */
  QuestionIdentifier: string | undefined;
}

export interface GetFileUploadURLResponse {
  /**
   * <p> A temporary URL for the file that the Worker uploaded for
   *             the answer.
   *         </p>
   */
  FileUploadURL?: string;
}

export interface GetHITRequest {
  /**
   * <p>The ID of the HIT to be retrieved.</p>
   */
  HITId: string | undefined;
}

export interface GetHITResponse {
  /**
   * <p> Contains the requested HIT data.</p>
   */
  HIT?: HIT;
}

export interface GetQualificationScoreRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The ID of the Worker whose Qualification is being updated.</p>
   */
  WorkerId: string | undefined;
}

export enum QualificationStatus {
  Granted = "Granted",
  Revoked = "Revoked",
}

/**
 * <p>The Qualification data structure represents a Qualification
 *             assigned to a user, including the Qualification type and the value
 *             (score).</p>
 */
export interface Qualification {
  /**
   * <p> The ID of the Qualification type for the Qualification.</p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The ID of the Worker who possesses the Qualification.
   *         </p>
   */
  WorkerId?: string;

  /**
   * <p> The date and time the Qualification was granted to the
   *             Worker. If the Worker's Qualification was revoked, and then
   *             re-granted based on a new Qualification request, GrantTime is the
   *             date and time of the last call to the AcceptQualificationRequest
   *             operation.</p>
   */
  GrantTime?: Date;

  /**
   * <p> The value (score) of the Qualification, if the Qualification
   *             has an integer value.</p>
   */
  IntegerValue?: number;

  /**
   * <p>The Locale data structure represents a geographical region or location.</p>
   */
  LocaleValue?: Locale;

  /**
   * <p> The status of the Qualification. Valid values are Granted |
   *             Revoked.</p>
   */
  Status?: QualificationStatus | string;
}

export interface GetQualificationScoreResponse {
  /**
   * <p> The Qualification data structure of the Qualification
   *             assigned to a user, including the Qualification type and the value
   *             (score).
   *         </p>
   */
  Qualification?: Qualification;
}

export interface GetQualificationTypeRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;
}

export interface GetQualificationTypeResponse {
  /**
   * <p> The returned Qualification Type</p>
   */
  QualificationType?: QualificationType;
}

export interface ListAssignmentsForHITRequest {
  /**
   * <p>The ID of the HIT.</p>
   */
  HITId: string | undefined;

  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
  /**
   * <p>The status of the assignments to return: Submitted | Approved
   *             | Rejected</p>
   */
  AssignmentStatuses?: (AssignmentStatus | string)[];
}

export interface ListAssignmentsForHITResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   */
  NumResults?: number;

  /**
   * <p> The collection of Assignment data structures returned by
   *             this call.</p>
   */
  Assignments?: Assignment[];
}

export interface ListBonusPaymentsRequest {
  /**
   * <p>The ID of the HIT associated with the bonus payments to
   *             retrieve. If not specified, all bonus payments for all assignments
   *             for the given HIT are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  HITId?: string;

  /**
   * <p>The ID of the assignment associated with the bonus payments
   *             to retrieve. If specified, only bonus payments for the given
   *             assignment are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  AssignmentId?: string;

  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

export interface ListBonusPaymentsResponse {
  /**
   * <p>The number of bonus payments on this page in the filtered
   *             results list, equivalent to the number of bonus payments being
   *             returned by this call.
   *         </p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>A successful request to the ListBonusPayments operation
   *             returns a list of BonusPayment objects.
   *         </p>
   */
  BonusPayments?: BonusPayment[];
}

export interface ListHITsRequest {
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

export interface ListHITsResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The number of HITs on this page in the filtered results list,
   *             equivalent to the number of HITs being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

export interface ListHITsForQualificationTypeRequest {
  /**
   * <p>
   *             The ID of the Qualification type to use when querying HITs.
   *         </p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

export interface ListHITsForQualificationTypeResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.	</p>
   */
  NumResults?: number;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

export interface ListQualificationRequestsRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId?: string;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * <p> The QualificationRequest data structure represents a request
 *             a Worker has made for a Qualification.
 *         </p>
 */
export interface QualificationRequest {
  /**
   * <p>The ID of the Qualification request, a unique identifier
   *             generated when the request was submitted.
   *
   *         </p>
   */
  QualificationRequestId?: string;

  /**
   * <p> The ID of the Qualification type the Worker is requesting,
   *             as returned by the CreateQualificationType operation.
   *         </p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The ID of the Worker requesting the Qualification.</p>
   */
  WorkerId?: string;

  /**
   * <p> The contents of the Qualification test that was presented to
   *             the Worker, if the type has a test and the Worker has submitted
   *             answers. This value is identical to the QuestionForm associated with
   *             the Qualification type at the time the Worker requests the
   *             Qualification.</p>
   */
  Test?: string;

  /**
   * <p> The Worker's answers for the Qualification type's test
   *             contained in a QuestionFormAnswers document, if the type has a test
   *             and the Worker has submitted answers. If the Worker does not provide
   *             any answers, Answer may be empty.
   *         </p>
   */
  Answer?: string;

  /**
   * <p>The date and time the Qualification request had a status of
   *             Submitted. This is either the time the Worker submitted answers for a
   *             Qualification test, or the time the Worker requested the
   *             Qualification if the Qualification type does not have a test.
   *         </p>
   */
  SubmitTime?: Date;
}

export interface ListQualificationRequestsResponse {
  /**
   * <p>The number of Qualification requests on this page in the filtered results list,
   *             equivalent to the number of Qualification requests being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The Qualification request. The response includes one
   *             QualificationRequest element
   *             for each Qualification request returned
   *             by the query.</p>
   */
  QualificationRequests?: QualificationRequest[];
}

export interface ListQualificationTypesRequest {
  /**
   * <p> A text query against all of the searchable attributes of
   *             Qualification types.
   *         </p>
   */
  Query?: string;

  /**
   * <p>Specifies that only Qualification types that a user can
   *             request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test, are returned as results of the search.
   *             Some Qualification types, such as those assigned automatically by the
   *             system, cannot be requested directly by users. If false, all
   *             Qualification types, including those managed by the system, are
   *             considered. Valid values are True | False.
   *         </p>
   */
  MustBeRequestable: boolean | undefined;

  /**
   * <p> Specifies that only Qualification types that the Requester
   *             created are returned. If false, the operation returns all
   *             Qualification types.
   *         </p>
   */
  MustBeOwnedByCaller?: boolean;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;
}

export interface ListQualificationTypesResponse {
  /**
   * <p> The number of Qualification types on this page in the
   *             filtered results list, equivalent to the number of types this
   *             operation returns.
   *         </p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The list of QualificationType elements returned by the
   *             query.
   *         </p>
   */
  QualificationTypes?: QualificationType[];
}

export enum ReviewableHITStatus {
  Reviewable = "Reviewable",
  Reviewing = "Reviewing",
}

export interface ListReviewableHITsRequest {
  /**
   * <p>
   *             The ID of the HIT type of the HITs to consider for the query.
   *             If not specified, all HITs for the Reviewer are considered
   *         </p>
   */
  HITTypeId?: string;

  /**
   * <p>
   *             Can be either <code>Reviewable</code> or <code>Reviewing</code>.
   *             Reviewable is the default value.
   *         </p>
   */
  Status?: ReviewableHITStatus | string;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

export interface ListReviewableHITsResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.
   *         </p>
   */
  NumResults?: number;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

export enum ReviewPolicyLevel {
  Assignment = "Assignment",
  HIT = "HIT",
}

export interface ListReviewPolicyResultsForHITRequest {
  /**
   * <p>The unique identifier of the HIT to retrieve review results for.</p>
   */
  HITId: string | undefined;

  /**
   * <p>
   *             The Policy Level(s) to retrieve review results for - HIT or Assignment.
   *             If omitted, the default behavior is to retrieve all data for both policy levels.
   *             For a list of all the described policies, see Review Policies.
   *         </p>
   */
  PolicyLevels?: (ReviewPolicyLevel | string)[];

  /**
   * <p>
   *             Specify if the operation should retrieve a list of the actions taken executing
   *             the Review Policies and their outcomes.
   *         </p>
   */
  RetrieveActions?: boolean;

  /**
   * <p>
   *             Specify if the operation should retrieve a list of the results computed by the Review Policies.
   *         </p>
   */
  RetrieveResults?: boolean;

  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  /**
   * <p>Limit the number of results returned.</p>
   */
  MaxResults?: number;
}

export enum ReviewActionStatus {
  Cancelled = "Cancelled",
  Failed = "Failed",
  Intended = "Intended",
  Succeeded = "Succeeded",
}

/**
 * <p> Both the AssignmentReviewReport and the HITReviewReport
 *             elements contains the ReviewActionDetail data structure. This
 *             structure is returned multiple times for each action specified in the
 *             Review Policy.
 *         </p>
 */
export interface ReviewActionDetail {
  /**
   * <p>The unique identifier for the action.</p>
   */
  ActionId?: string;

  /**
   * <p> The nature of the action itself. The Review Policy is
   *             responsible for examining the HIT and Assignments, emitting results,
   *             and deciding which other actions will be necessary. </p>
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
   * <p> The current disposition of the action: INTENDED, SUCCEEDED,
   *             FAILED, or CANCELLED.
   *         </p>
   */
  Status?: ReviewActionStatus | string;

  /**
   * <p> The date when the action was completed.</p>
   */
  CompleteTime?: Date;

  /**
   * <p> A description of the outcome of the review.</p>
   */
  Result?: string;

  /**
   * <p> Present only when the Results have a FAILED Status.</p>
   */
  ErrorCode?: string;
}

/**
 * <p> This data structure is returned multiple times for each
 *             result specified in the Review Policy.
 *         </p>
 */
export interface ReviewResultDetail {
  /**
   * <p> A unique identifier of the Review action result.
   *         </p>
   */
  ActionId?: string;

  /**
   * <p>The HITID or AssignmentId about which this result was taken.
   *             Note that HIT-level Review Policies will often emit results about
   *             both the HIT itself and its Assignments, while Assignment-level
   *             review policies generally only emit results about the Assignment
   *             itself.
   *         </p>
   */
  SubjectId?: string;

  /**
   * <p> The type of the object from the SubjectId field.</p>
   */
  SubjectType?: string;

  /**
   * <p> Specifies the QuestionId the result is describing. Depending
   *             on whether the TargetType is a HIT or Assignment this results could
   *             specify multiple values. If TargetType is HIT and QuestionId is
   *             absent, then the result describes results of the HIT, including the
   *             HIT agreement score. If ObjectType is Assignment and QuestionId is
   *             absent, then the result describes the Worker's performance on the
   *             HIT.
   *         </p>
   */
  QuestionId?: string;

  /**
   * <p> Key identifies the particular piece of reviewed information.
   *         </p>
   */
  Key?: string;

  /**
   * <p> The values of Key provided by the review policies you have
   *             selected.
   *         </p>
   */
  Value?: string;
}

/**
 * <p> Contains both ReviewResult and ReviewAction elements for a
 *             particular HIT.
 *         </p>
 */
export interface ReviewReport {
  /**
   * <p> A list of ReviewResults objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewResults?: ReviewResultDetail[];

  /**
   * <p> A list of ReviewAction objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewActions?: ReviewActionDetail[];
}

export interface ListReviewPolicyResultsForHITResponse {
  /**
   * <p>The HITId of the HIT for which results have been returned.</p>
   */
  HITId?: string;

  /**
   * <p> The name of the Assignment-level Review Policy. This
   *             contains only the PolicyName element.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * <p>The name of the HIT-level Review Policy. This contains only
   *             the PolicyName element.</p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * <p> Contains both ReviewResult and ReviewAction elements for an
   *             Assignment.
   *         </p>
   */
  AssignmentReviewReport?: ReviewReport;

  /**
   * <p>Contains both ReviewResult and ReviewAction elements for a particular HIT.
   *         </p>
   */
  HITReviewReport?: ReviewReport;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;
}

export interface ListWorkerBlocksRequest {
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

/**
 * <p> The WorkerBlock data structure represents a Worker who has
 *             been blocked. It has two elements: the WorkerId and the Reason for
 *             the block.
 *         </p>
 */
export interface WorkerBlock {
  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * <p> A message explaining the reason the Worker was blocked.
   *         </p>
   */
  Reason?: string;
}

export interface ListWorkerBlocksResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   */
  NumResults?: number;

  /**
   * <p> The list of WorkerBlocks, containing the collection of
   *             Worker IDs and reasons for blocking.</p>
   */
  WorkerBlocks?: WorkerBlock[];
}

export interface ListWorkersWithQualificationTypeRequest {
  /**
   * <p>The ID of the Qualification type of the Qualifications to
   *             return.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>
   *             The status of the Qualifications to return.
   *             Can be <code>Granted | Revoked</code>.
   *         </p>
   */
  Status?: QualificationStatus | string;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

export interface ListWorkersWithQualificationTypeResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of Qualifications on this page in the filtered
   *             results list, equivalent to the number of Qualifications being
   *             returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p> The list of Qualification elements returned by this call.
   *         </p>
   */
  Qualifications?: Qualification[];
}

export interface NotifyWorkersRequest {
  /**
   * <p>The subject line of the email message to send. Can include up
   *             to 200 characters.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The text of the email message to send. Can include up to
   *             4,096 characters</p>
   */
  MessageText: string | undefined;

  /**
   * <p>A list of Worker IDs you wish to notify. You
   *             can notify upto
   *             100 Workers at a time.</p>
   */
  WorkerIds: string[] | undefined;
}

export enum NotifyWorkersFailureCode {
  HardFailure = "HardFailure",
  SoftFailure = "SoftFailure",
}

/**
 * <p> When MTurk encounters an issue with notifying the Workers
 *             you specified, it returns back this object with failure details.
 *         </p>
 */
export interface NotifyWorkersFailureStatus {
  /**
   * <p> Encoded value for the failure type.
   *         </p>
   */
  NotifyWorkersFailureCode?: NotifyWorkersFailureCode | string;

  /**
   * <p> A message detailing the reason the Worker could not be
   *             notified.
   *         </p>
   */
  NotifyWorkersFailureMessage?: string;

  /**
   * <p> The ID of the Worker.</p>
   */
  WorkerId?: string;
}

export interface NotifyWorkersResponse {
  /**
   * <p> When MTurk sends notifications to the list of Workers, it
   *             returns back any failures it encounters in this list of
   *             NotifyWorkersFailureStatus objects.
   *         </p>
   */
  NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[];
}

export interface RejectAssignmentRequest {
  /**
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   */
  RequesterFeedback: string | undefined;
}

export interface RejectAssignmentResponse {}

export interface RejectQualificationRequestRequest {
  /**
   * <p>
   *             The ID of the Qualification request, as returned by the
   *             <code>ListQualificationRequests</code>
   *             operation.
   *         </p>
   */
  QualificationRequestId: string | undefined;

  /**
   * <p>A text message explaining why the request was rejected, to be
   *             shown to the Worker who made the request.</p>
   */
  Reason?: string;
}

export interface RejectQualificationRequestResponse {}

export interface SendBonusRequest {
  /**
   * <p>The ID of the Worker being paid the bonus.</p>
   */
  WorkerId: string | undefined;

  /**
   * <p>
   *             The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and
   *             "101.42" represents $101.42 USD). Do not include currency symbols or currency codes.
   *         </p>
   */
  BonusAmount: string | undefined;

  /**
   * <p>The ID of the assignment for which this bonus is paid.</p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>A message that explains the reason for the bonus payment. The
   *             Worker receiving the bonus can see this message.</p>
   */
  Reason: string | undefined;

  /**
   * <p>A unique identifier for this request, which allows you to
   *             retry the call on error without granting multiple bonuses. This is
   *             useful in cases such as network timeouts where it is unclear whether
   *             or not the call succeeded on the server. If the bonus already exists
   *             in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return an error with a message containing the
   *             request ID.</p>
   */
  UniqueRequestToken?: string;
}

export interface SendBonusResponse {}

export enum NotificationTransport {
  Email = "Email",
  SNS = "SNS",
  SQS = "SQS",
}

/**
 * <p>The NotificationSpecification data structure describes a HIT
 *             event notification for a HIT type.</p>
 */
export interface NotificationSpecification {
  /**
   * <p>
   *             The target for notification messages. The Destination’s format is determined by the specified Transport:
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>When Transport is Email, the Destination is your email address.</p>
   *             </li>
   *             <li>
   *                 <p>When Transport is SQS, the Destination is your queue URL.</p>
   *             </li>
   *             <li>
   *                 <p>When Transport is SNS, the Destination is the ARN of your topic.</p>
   *             </li>
   *          </ul>
   */
  Destination: string | undefined;

  /**
   * <p> The method Amazon Mechanical Turk uses to send the
   *             notification. Valid Values: Email | SQS | SNS.
   *         </p>
   */
  Transport: NotificationTransport | string | undefined;

  /**
   * <p>The version of the Notification API to use. Valid value is
   *             2006-05-05.</p>
   */
  Version: string | undefined;

  /**
   * <p> The list of events that should cause notifications to be
   *             sent. Valid Values: AssignmentAccepted | AssignmentAbandoned |
   *             AssignmentReturned | AssignmentSubmitted | AssignmentRejected |
   *             AssignmentApproved | HITCreated | HITExtended | HITDisposed |
   *             HITReviewable | HITExpired | Ping. The Ping event is only valid for
   *             the SendTestEventNotification operation.
   *         </p>
   */
  EventTypes: (EventType | string)[] | undefined;
}

export interface SendTestEventNotificationRequest {
  /**
   * <p>
   *             The notification specification to test. This value is identical to the value
   *             you would provide to the UpdateNotificationSettings operation when you establish
   *             the notification specification for a HIT type.
   *         </p>
   */
  Notification: NotificationSpecification | undefined;

  /**
   * <p>
   *             The event to simulate to test the notification specification.
   *             This event is included in the test message even if the notification specification
   *             does not include the event type.
   *             The notification specification does not filter out the test event.
   *         </p>
   */
  TestEventType: EventType | string | undefined;
}

export interface SendTestEventNotificationResponse {}

export interface UpdateExpirationForHITRequest {
  /**
   * <p>
   *             The HIT to update.
   *         </p>
   */
  HITId: string | undefined;

  /**
   * <p>
   *             The date and time at which you want the HIT to expire
   *         </p>
   */
  ExpireAt: Date | undefined;
}

export interface UpdateExpirationForHITResponse {}

export interface UpdateHITReviewStatusRequest {
  /**
   * <p>
   *             The ID of the HIT to update.
   *         </p>
   */
  HITId: string | undefined;

  /**
   * <p>
   *             Specifies how to update the HIT status. Default is <code>False</code>.
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     Setting this to false will only transition a HIT from <code>Reviewable</code> to <code>Reviewing</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     Setting this to true will only transition a HIT from <code>Reviewing</code> to <code>Reviewable</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Revert?: boolean;
}

export interface UpdateHITReviewStatusResponse {}

export interface UpdateHITTypeOfHITRequest {
  /**
   * <p>The HIT to update.</p>
   */
  HITId: string | undefined;

  /**
   * <p>The ID of the new HIT type.</p>
   */
  HITTypeId: string | undefined;
}

export interface UpdateHITTypeOfHITResponse {}

export interface UpdateNotificationSettingsRequest {
  /**
   * <p>
   *             The ID of the HIT type whose notification specification is being updated.
   *         </p>
   */
  HITTypeId: string | undefined;

  /**
   * <p>
   *             The notification specification for the HIT type.
   *         </p>
   */
  Notification?: NotificationSpecification;

  /**
   * <p>
   *             Specifies whether notifications are sent for HITs of this HIT type,
   *             according to the notification specification.
   *             You must specify either the Notification parameter or the Active parameter
   *             for the call to UpdateNotificationSettings to succeed.
   *         </p>
   */
  Active?: boolean;
}

export interface UpdateNotificationSettingsResponse {}

export interface UpdateQualificationTypeRequest {
  /**
   * <p>The ID of the Qualification type to update.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The new description of the Qualification type.</p>
   */
  Description?: string;

  /**
   * <p>The new status of the Qualification type - Active | Inactive</p>
   */
  QualificationTypeStatus?: QualificationTypeStatus | string;

  /**
   * <p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>
   */
  Test?: string;

  /**
   * <p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>
   */
  AnswerKey?: string;

  /**
   * <p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>
   */
  TestDurationInSeconds?: number;

  /**
   * <p>The amount of time, in seconds, that Workers must wait
   *             after requesting a Qualification of the specified Qualification type
   *             before they can retry the Qualification request. It is not possible to
   *             disable retries for a Qualification type after it has been created with
   *             retries enabled. If you want to disable retries, you must dispose of
   *             the existing retry-enabled Qualification type using
   *             DisposeQualificationType and then create a new Qualification type with
   *             retries disabled using CreateQualificationType.</p>
   */
  RetryDelayInSeconds?: number;

  /**
   * <p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>
   */
  AutoGrantedValue?: number;
}

export interface UpdateQualificationTypeResponse {
  /**
   * <p> Contains a QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}

/**
 * @internal
 */
export const AcceptQualificationRequestRequestFilterSensitiveLog = (obj: AcceptQualificationRequestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptQualificationRequestResponseFilterSensitiveLog = (obj: AcceptQualificationRequestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApproveAssignmentRequestFilterSensitiveLog = (obj: ApproveAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApproveAssignmentResponseFilterSensitiveLog = (obj: ApproveAssignmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignmentFilterSensitiveLog = (obj: Assignment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateQualificationWithWorkerRequestFilterSensitiveLog = (
  obj: AssociateQualificationWithWorkerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateQualificationWithWorkerResponseFilterSensitiveLog = (
  obj: AssociateQualificationWithWorkerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BonusPaymentFilterSensitiveLog = (obj: BonusPayment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAdditionalAssignmentsForHITRequestFilterSensitiveLog = (
  obj: CreateAdditionalAssignmentsForHITRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAdditionalAssignmentsForHITResponseFilterSensitiveLog = (
  obj: CreateAdditionalAssignmentsForHITResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParameterMapEntryFilterSensitiveLog = (obj: ParameterMapEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyParameterFilterSensitiveLog = (obj: PolicyParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReviewPolicyFilterSensitiveLog = (obj: ReviewPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HITLayoutParameterFilterSensitiveLog = (obj: HITLayoutParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocaleFilterSensitiveLog = (obj: Locale): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QualificationRequirementFilterSensitiveLog = (obj: QualificationRequirement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITRequestFilterSensitiveLog = (obj: CreateHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HITFilterSensitiveLog = (obj: HIT): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITResponseFilterSensitiveLog = (obj: CreateHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITTypeRequestFilterSensitiveLog = (obj: CreateHITTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITTypeResponseFilterSensitiveLog = (obj: CreateHITTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITWithHITTypeRequestFilterSensitiveLog = (obj: CreateHITWithHITTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHITWithHITTypeResponseFilterSensitiveLog = (obj: CreateHITWithHITTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQualificationTypeRequestFilterSensitiveLog = (obj: CreateQualificationTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QualificationTypeFilterSensitiveLog = (obj: QualificationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQualificationTypeResponseFilterSensitiveLog = (obj: CreateQualificationTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkerBlockRequestFilterSensitiveLog = (obj: CreateWorkerBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkerBlockResponseFilterSensitiveLog = (obj: CreateWorkerBlockResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHITRequestFilterSensitiveLog = (obj: DeleteHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHITResponseFilterSensitiveLog = (obj: DeleteHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQualificationTypeRequestFilterSensitiveLog = (obj: DeleteQualificationTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQualificationTypeResponseFilterSensitiveLog = (obj: DeleteQualificationTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerBlockRequestFilterSensitiveLog = (obj: DeleteWorkerBlockRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkerBlockResponseFilterSensitiveLog = (obj: DeleteWorkerBlockResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateQualificationFromWorkerRequestFilterSensitiveLog = (
  obj: DisassociateQualificationFromWorkerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateQualificationFromWorkerResponseFilterSensitiveLog = (
  obj: DisassociateQualificationFromWorkerResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountBalanceRequestFilterSensitiveLog = (obj: GetAccountBalanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountBalanceResponseFilterSensitiveLog = (obj: GetAccountBalanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssignmentRequestFilterSensitiveLog = (obj: GetAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssignmentResponseFilterSensitiveLog = (obj: GetAssignmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFileUploadURLRequestFilterSensitiveLog = (obj: GetFileUploadURLRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFileUploadURLResponseFilterSensitiveLog = (obj: GetFileUploadURLResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHITRequestFilterSensitiveLog = (obj: GetHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetHITResponseFilterSensitiveLog = (obj: GetHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQualificationScoreRequestFilterSensitiveLog = (obj: GetQualificationScoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QualificationFilterSensitiveLog = (obj: Qualification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQualificationScoreResponseFilterSensitiveLog = (obj: GetQualificationScoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQualificationTypeRequestFilterSensitiveLog = (obj: GetQualificationTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQualificationTypeResponseFilterSensitiveLog = (obj: GetQualificationTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssignmentsForHITRequestFilterSensitiveLog = (obj: ListAssignmentsForHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssignmentsForHITResponseFilterSensitiveLog = (obj: ListAssignmentsForHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBonusPaymentsRequestFilterSensitiveLog = (obj: ListBonusPaymentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBonusPaymentsResponseFilterSensitiveLog = (obj: ListBonusPaymentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHITsRequestFilterSensitiveLog = (obj: ListHITsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHITsResponseFilterSensitiveLog = (obj: ListHITsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHITsForQualificationTypeRequestFilterSensitiveLog = (
  obj: ListHITsForQualificationTypeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListHITsForQualificationTypeResponseFilterSensitiveLog = (
  obj: ListHITsForQualificationTypeResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQualificationRequestsRequestFilterSensitiveLog = (obj: ListQualificationRequestsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QualificationRequestFilterSensitiveLog = (obj: QualificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQualificationRequestsResponseFilterSensitiveLog = (obj: ListQualificationRequestsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQualificationTypesRequestFilterSensitiveLog = (obj: ListQualificationTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQualificationTypesResponseFilterSensitiveLog = (obj: ListQualificationTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReviewableHITsRequestFilterSensitiveLog = (obj: ListReviewableHITsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReviewableHITsResponseFilterSensitiveLog = (obj: ListReviewableHITsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReviewPolicyResultsForHITRequestFilterSensitiveLog = (
  obj: ListReviewPolicyResultsForHITRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReviewActionDetailFilterSensitiveLog = (obj: ReviewActionDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReviewResultDetailFilterSensitiveLog = (obj: ReviewResultDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReviewReportFilterSensitiveLog = (obj: ReviewReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReviewPolicyResultsForHITResponseFilterSensitiveLog = (
  obj: ListReviewPolicyResultsForHITResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerBlocksRequestFilterSensitiveLog = (obj: ListWorkerBlocksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerBlockFilterSensitiveLog = (obj: WorkerBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerBlocksResponseFilterSensitiveLog = (obj: ListWorkerBlocksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkersWithQualificationTypeRequestFilterSensitiveLog = (
  obj: ListWorkersWithQualificationTypeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkersWithQualificationTypeResponseFilterSensitiveLog = (
  obj: ListWorkersWithQualificationTypeResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyWorkersRequestFilterSensitiveLog = (obj: NotifyWorkersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyWorkersFailureStatusFilterSensitiveLog = (obj: NotifyWorkersFailureStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyWorkersResponseFilterSensitiveLog = (obj: NotifyWorkersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectAssignmentRequestFilterSensitiveLog = (obj: RejectAssignmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectAssignmentResponseFilterSensitiveLog = (obj: RejectAssignmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectQualificationRequestRequestFilterSensitiveLog = (obj: RejectQualificationRequestRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectQualificationRequestResponseFilterSensitiveLog = (obj: RejectQualificationRequestResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendBonusRequestFilterSensitiveLog = (obj: SendBonusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendBonusResponseFilterSensitiveLog = (obj: SendBonusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationSpecificationFilterSensitiveLog = (obj: NotificationSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTestEventNotificationRequestFilterSensitiveLog = (obj: SendTestEventNotificationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendTestEventNotificationResponseFilterSensitiveLog = (obj: SendTestEventNotificationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExpirationForHITRequestFilterSensitiveLog = (obj: UpdateExpirationForHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateExpirationForHITResponseFilterSensitiveLog = (obj: UpdateExpirationForHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHITReviewStatusRequestFilterSensitiveLog = (obj: UpdateHITReviewStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHITReviewStatusResponseFilterSensitiveLog = (obj: UpdateHITReviewStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHITTypeOfHITRequestFilterSensitiveLog = (obj: UpdateHITTypeOfHITRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHITTypeOfHITResponseFilterSensitiveLog = (obj: UpdateHITTypeOfHITResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotificationSettingsRequestFilterSensitiveLog = (obj: UpdateNotificationSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotificationSettingsResponseFilterSensitiveLog = (obj: UpdateNotificationSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQualificationTypeRequestFilterSensitiveLog = (obj: UpdateQualificationTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQualificationTypeResponseFilterSensitiveLog = (obj: UpdateQualificationTypeResponse): any => ({
  ...obj,
});
