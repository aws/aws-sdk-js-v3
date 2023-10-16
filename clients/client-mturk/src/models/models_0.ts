// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MTurkServiceException as __BaseException } from "./MTurkServiceException";

/**
 * @public
 */
export interface AcceptQualificationRequestRequest {
  /**
   * @public
   * <p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>
   */
  QualificationRequestId: string | undefined;

  /**
   * @public
   * <p>
   *             The value of the Qualification. You can omit this value if you are using the
   *             presence or absence of the Qualification as the basis for a HIT requirement.
   *         </p>
   */
  IntegerValue?: number;
}

/**
 * @public
 */
export interface AcceptQualificationRequestResponse {}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface ApproveAssignmentRequest {
  /**
   * @public
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   */
  AssignmentId: string | undefined;

  /**
   * @public
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   */
  RequesterFeedback?: string;

  /**
   * @public
   * <p>
   *             A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>.
   *         </p>
   */
  OverrideRejection?: boolean;
}

/**
 * @public
 */
export interface ApproveAssignmentResponse {}

/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  Approved: "Approved",
  Rejected: "Rejected",
  Submitted: "Submitted",
} as const;

/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * @public
 * <p> The Assignment data structure represents a single assignment
 *             of a HIT to a Worker. The assignment tracks the Worker's efforts to
 *             complete the HIT, and contains the results for later retrieval.
 *         </p>
 */
export interface Assignment {
  /**
   * @public
   * <p> A unique identifier for the assignment.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * @public
   * <p> The ID of the HIT.</p>
   */
  HITId?: string;

  /**
   * @public
   * <p> The status of the assignment.</p>
   */
  AssignmentStatus?: AssignmentStatus;

  /**
   * @public
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
   * @public
   * <p> The date and time the Worker accepted the assignment.</p>
   */
  AcceptTime?: Date;

  /**
   * @public
   * <p> If the Worker has submitted results, SubmitTime is the date
   *             and time the assignment was submitted. This value is omitted from the
   *             assignment if the Worker has not yet submitted results.</p>
   */
  SubmitTime?: Date;

  /**
   * @public
   * <p> If the Worker has submitted results and the Requester has
   *             approved the results, ApprovalTime is the date and time the Requester
   *             approved the results. This value is omitted from the assignment if
   *             the Requester has not yet approved the results.</p>
   */
  ApprovalTime?: Date;

  /**
   * @public
   * <p> If the Worker has submitted results and the Requester has
   *             rejected the results, RejectionTime is the date and time the
   *             Requester rejected the results.</p>
   */
  RejectionTime?: Date;

  /**
   * @public
   * <p> The date and time of the deadline for the assignment. This
   *             value is derived from the deadline specification for the HIT and the
   *             date and time the Worker accepted the HIT.</p>
   */
  Deadline?: Date;

  /**
   * @public
   * <p> The Worker's answers submitted for the HIT contained in a
   *             QuestionFormAnswers document, if the Worker provides an answer. If
   *             the Worker does not provide any answers, Answer may contain a
   *             QuestionFormAnswers document, or Answer may be empty.</p>
   */
  Answer?: string;

  /**
   * @public
   * <p> The feedback string included with the call to the
   *             ApproveAssignment operation or the RejectAssignment operation, if the
   *             Requester approved or rejected the assignment and specified feedback.</p>
   */
  RequesterFeedback?: string;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerRequest {
  /**
   * @public
   * <p>The ID of the Qualification type to use for the assigned Qualification.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>
   *             The ID of the Worker to whom the Qualification is being assigned.
   *             Worker IDs are included with submitted HIT assignments and Qualification requests.
   *         </p>
   */
  WorkerId: string | undefined;

  /**
   * @public
   * <p>The value of the Qualification to assign.</p>
   */
  IntegerValue?: number;

  /**
   * @public
   * <p>
   *             Specifies whether to send a notification email message to the Worker
   *             saying that the qualification was assigned to the Worker.
   *             Note: this is true by default.
   *         </p>
   */
  SendNotification?: boolean;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerResponse {}

/**
 * @public
 * <p>An object representing a Bonus payment paid to a Worker.</p>
 */
export interface BonusPayment {
  /**
   * @public
   * <p>The ID of the Worker to whom the bonus was paid.</p>
   */
  WorkerId?: string;

  /**
   * @public
   * <p>A string representing a currency amount.</p>
   */
  BonusAmount?: string;

  /**
   * @public
   * <p>The ID of the assignment associated with this bonus payment.</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>The Reason text given when the bonus was granted, if any.</p>
   */
  Reason?: string;

  /**
   * @public
   * <p>The date and time of when the bonus was granted.</p>
   */
  GrantTime?: Date;
}

/**
 * @public
 * @enum
 */
export const Comparator = {
  DoesNotExist: "DoesNotExist",
  EqualTo: "EqualTo",
  Exists: "Exists",
  GreaterThan: "GreaterThan",
  GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
  In: "In",
  LessThan: "LessThan",
  LessThanOrEqualTo: "LessThanOrEqualTo",
  NotEqualTo: "NotEqualTo",
  NotIn: "NotIn",
} as const;

/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITRequest {
  /**
   * @public
   * <p>The ID of the HIT to extend.</p>
   */
  HITId: string | undefined;

  /**
   * @public
   * <p>The number of additional assignments to request for this HIT.</p>
   */
  NumberOfAdditionalAssignments: number | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITResponse {}

/**
 * @public
 * <p> This data structure is the data type for the AnswerKey
 *             parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
 *         </p>
 */
export interface ParameterMapEntry {
  /**
   * @public
   * <p> The QuestionID from the HIT that is used to identify which
   *             question requires Mechanical Turk to score as part of the
   *             ScoreMyKnownAnswers/2011-09-01 Review Policy.
   *         </p>
   */
  Key?: string;

  /**
   * @public
   * <p> The list of answers to the question specified in the
   *             MapEntry Key element. The Worker must match all values in order for
   *             the answer to be scored correctly.
   *         </p>
   */
  Values?: string[];
}

/**
 * @public
 * <p> Name of the parameter from the Review policy.
 *         </p>
 */
export interface PolicyParameter {
  /**
   * @public
   * <p> Name of the parameter from the list of Review Polices.
   *         </p>
   */
  Key?: string;

  /**
   * @public
   * <p> The list of values of the Parameter</p>
   */
  Values?: string[];

  /**
   * @public
   * <p> List of ParameterMapEntry objects.
   *         </p>
   */
  MapEntries?: ParameterMapEntry[];
}

/**
 * @public
 * <p> HIT Review Policy data structures represent HIT review
 *             policies, which you specify when you create a HIT.
 *         </p>
 */
export interface ReviewPolicy {
  /**
   * @public
   * <p> Name of a Review Policy: SimplePlurality/2011-09-01 or
   *             ScoreMyKnownAnswers/2011-09-01
   *         </p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>Name of the parameter from the Review policy.</p>
   */
  Parameters?: PolicyParameter[];
}

/**
 * @public
 * <p> The HITLayoutParameter data structure defines parameter
 *             values used with a HITLayout. A HITLayout is a reusable Amazon
 *             Mechanical Turk project template used to provide Human Intelligence
 *             Task (HIT) question data for CreateHIT.
 *         </p>
 */
export interface HITLayoutParameter {
  /**
   * @public
   * <p> The name of the parameter in the HITLayout.
   *         </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value substituted for the parameter referenced in the
   *             HITLayout.
   *         </p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HITAccessActions = {
  Accept: "Accept",
  DiscoverPreviewAndAccept: "DiscoverPreviewAndAccept",
  PreviewAndAccept: "PreviewAndAccept",
} as const;

/**
 * @public
 */
export type HITAccessActions = (typeof HITAccessActions)[keyof typeof HITAccessActions];

/**
 * @public
 * <p>The Locale data structure represents a geographical region or location.</p>
 */
export interface Locale {
  /**
   * @public
   * <p> The country of the locale. Must be a valid ISO 3166 country
   *             code. For example, the code US refers to the United States of
   *             America.
   *         </p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The state or subdivision of the locale. A valid ISO 3166-2
   *             subdivision code. For example, the code WA refers to the state of
   *             Washington.</p>
   */
  Subdivision?: string;
}

/**
 * @public
 * <p>
 *             The QualificationRequirement data structure describes a Qualification that a Worker must have
 *             before the Worker is allowed to accept a HIT.
 *             A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or
 *             see the HIT in search results.
 *         </p>
 */
export interface QualificationRequirement {
  /**
   * @public
   * <p> The ID of the Qualification type for the requirement.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
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
  Comparator: Comparator | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
  ActionsGuarded?: HITAccessActions;
}

/**
 * @public
 */
export interface CreateHITRequest {
  /**
   * @public
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * @public
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * @public
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   */
  LifetimeInSeconds: number | undefined;

  /**
   * @public
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
   * @public
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   */
  Reward: string | undefined;

  /**
   * @public
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

  /**
   * @public
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   */
  Description: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * @public
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * @public
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
   * @public
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   */
  HITLayoutParameters?: HITLayoutParameter[];
}

/**
 * @public
 * @enum
 */
export const HITReviewStatus = {
  MarkedForReview: "MarkedForReview",
  NotReviewed: "NotReviewed",
  ReviewedAppropriate: "ReviewedAppropriate",
  ReviewedInappropriate: "ReviewedInappropriate",
} as const;

/**
 * @public
 */
export type HITReviewStatus = (typeof HITReviewStatus)[keyof typeof HITReviewStatus];

/**
 * @public
 * @enum
 */
export const HITStatus = {
  Assignable: "Assignable",
  Disposed: "Disposed",
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
  Unassignable: "Unassignable",
} as const;

/**
 * @public
 */
export type HITStatus = (typeof HITStatus)[keyof typeof HITStatus];

/**
 * @public
 * <p> The HIT data structure represents a single HIT, including
 *             all the information necessary for a Worker to accept and complete the
 *             HIT.</p>
 */
export interface HIT {
  /**
   * @public
   * <p> A unique identifier for the HIT.</p>
   */
  HITId?: string;

  /**
   * @public
   * <p>The ID of the HIT type of this HIT</p>
   */
  HITTypeId?: string;

  /**
   * @public
   * <p> The ID of the HIT Group of this HIT.</p>
   */
  HITGroupId?: string;

  /**
   * @public
   * <p> The ID of the HIT Layout of this HIT.</p>
   */
  HITLayoutId?: string;

  /**
   * @public
   * <p> The date and time the HIT was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p> The title of the HIT.</p>
   */
  Title?: string;

  /**
   * @public
   * <p> A general description of the HIT.</p>
   */
  Description?: string;

  /**
   * @public
   * <p> The data the Worker completing the HIT uses produce the
   *             results. This is either either a QuestionForm, HTMLQuestion or an
   *             ExternalQuestion data structure.</p>
   */
  Question?: string;

  /**
   * @public
   * <p> One or more words or phrases that describe the HIT,
   *             separated by commas. Search terms similar to the keywords of a HIT
   *             are more likely to have the HIT in the search results.</p>
   */
  Keywords?: string;

  /**
   * @public
   * <p>The status of the HIT and its assignments. Valid Values are
   *             Assignable | Unassignable | Reviewable | Reviewing | Disposed.
   *         </p>
   */
  HITStatus?: HITStatus;

  /**
   * @public
   * <p>The number of times the HIT can be accepted and completed
   *             before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * @public
   * <p>A string representing a currency amount.</p>
   */
  Reward?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, after the Worker submits an
   *             assignment for the HIT that the results are automatically approved by
   *             Amazon Mechanical Turk. This is the amount of time the Requester has
   *             to reject an assignment submitted by a Worker before the assignment
   *             is auto-approved and the Worker is paid.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * @public
   * <p>The date and time the HIT expires.</p>
   */
  Expiration?: Date;

  /**
   * @public
   * <p> The length of time, in seconds, that a Worker has to
   *             complete the HIT after accepting it.</p>
   */
  AssignmentDurationInSeconds?: number;

  /**
   * @public
   * <p> An arbitrary data field the Requester who created the HIT
   *             can use. This field is visible only to the creator of the HIT.</p>
   */
  RequesterAnnotation?: string;

  /**
   * @public
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
   * @public
   * <p> Indicates the review status of the HIT. Valid Values are
   *             NotReviewed | MarkedForReview | ReviewedAppropriate |
   *             ReviewedInappropriate.</p>
   */
  HITReviewStatus?: HITReviewStatus;

  /**
   * @public
   * <p> The number of assignments for this HIT that are being
   *             previewed or have been accepted by Workers, but have not yet been
   *             submitted, returned, or abandoned.</p>
   */
  NumberOfAssignmentsPending?: number;

  /**
   * @public
   * <p> The number of assignments for this HIT that are available
   *             for Workers to accept.</p>
   */
  NumberOfAssignmentsAvailable?: number;

  /**
   * @public
   * <p> The number of assignments for this HIT that have been
   *             approved or rejected.</p>
   */
  NumberOfAssignmentsCompleted?: number;
}

/**
 * @public
 */
export interface CreateHITResponse {
  /**
   * @public
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

/**
 * @public
 */
export interface CreateHITTypeRequest {
  /**
   * @public
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

  /**
   * @public
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
   * @public
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   */
  Reward: string | undefined;

  /**
   * @public
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

  /**
   * @public
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   */
  Description: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface CreateHITTypeResponse {
  /**
   * @public
   * <p> The ID of the newly registered HIT type.</p>
   */
  HITTypeId?: string;
}

/**
 * @public
 */
export interface CreateHITWithHITTypeRequest {
  /**
   * @public
   * <p>The HIT type ID you want to create this HIT with.</p>
   */
  HITTypeId: string | undefined;

  /**
   * @public
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

  /**
   * @public
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   */
  LifetimeInSeconds: number | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * @public
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * @public
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
   * @public
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   */
  HITLayoutParameters?: HITLayoutParameter[];
}

/**
 * @public
 */
export interface CreateHITWithHITTypeResponse {
  /**
   * @public
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

/**
 * @public
 * @enum
 */
export const QualificationTypeStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type QualificationTypeStatus = (typeof QualificationTypeStatus)[keyof typeof QualificationTypeStatus];

/**
 * @public
 */
export interface CreateQualificationTypeRequest {
  /**
   * @public
   * <p> The name you give to the Qualification type. The type name
   *             is used to represent the Qualification to Workers, and to find the
   *             type using a Qualification type search. It must be unique across all
   *             of your Qualification types.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more words or phrases that describe the Qualification
   *             type, separated by commas. The keywords of a type make the type
   *             easier to find during a search.</p>
   */
  Keywords?: string;

  /**
   * @public
   * <p>A long description for the Qualification type. On the Amazon
   *             Mechanical Turk website, the long description is displayed when a
   *             Worker examines a Qualification type.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The initial status of the Qualification type.</p>
   *         <p>Constraints: Valid values are: Active | Inactive</p>
   */
  QualificationTypeStatus: QualificationTypeStatus | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The answers to the Qualification test specified in the Test
   *             parameter, in the form of an AnswerKey data structure.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes.</p>
   *         <p>Constraints: None. If not specified, you must process
   *             Qualification requests manually.</p>
   */
  AnswerKey?: string;

  /**
   * @public
   * <p>The number of seconds the Worker has to complete the
   *             Qualification test, starting from the time the Worker requests the
   *             Qualification.</p>
   */
  TestDurationInSeconds?: number;

  /**
   * @public
   * <p>Specifies whether requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this
   *             parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * @public
   * <p>The Qualification value to use for automatically granted
   *             Qualifications. This parameter is used only if the AutoGranted
   *             parameter is true.</p>
   */
  AutoGrantedValue?: number;
}

/**
 * @public
 * <p> The QualificationType data structure represents a
 *             Qualification type, a description of a property of a Worker that must
 *             match the requirements of a HIT for the Worker to be able to accept
 *             the HIT. The type also describes how a Worker can obtain a
 *             Qualification of that type, such as through a Qualification test.
 *         </p>
 */
export interface QualificationType {
  /**
   * @public
   * <p> A unique identifier for the Qualification type. A
   *             Qualification type is given a Qualification type ID when you call the
   *             CreateQualificationType operation.
   *         </p>
   */
  QualificationTypeId?: string;

  /**
   * @public
   * <p> The date and time the Qualification type was created.
   *         </p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p> The name of the Qualification type. The type name is used to
   *             identify the type, and to find the type using a Qualification type
   *             search.
   *         </p>
   */
  Name?: string;

  /**
   * @public
   * <p> A long description for the Qualification type.
   *         </p>
   */
  Description?: string;

  /**
   * @public
   * <p> One or more words or phrases that describe theQualification
   *             type, separated by commas. The Keywords make the type easier to find
   *             using a search.
   *         </p>
   */
  Keywords?: string;

  /**
   * @public
   * <p> The status of the Qualification type. A Qualification type's
   *             status determines if users can apply to receive a Qualification of
   *             this type, and if HITs can be created with requirements based on this
   *             type. Valid values are Active | Inactive.
   *         </p>
   */
  QualificationTypeStatus?: QualificationTypeStatus;

  /**
   * @public
   * <p> The questions for a Qualification test associated with this
   *             Qualification type that a user can take to obtain a Qualification of
   *             this type. This parameter must be specified if AnswerKey is present.
   *             A Qualification type cannot have both a specified Test parameter and
   *             an AutoGranted value of true.
   *         </p>
   */
  Test?: string;

  /**
   * @public
   * <p> The amount of time, in seconds, given to a Worker to
   *             complete the Qualification test, beginning from the time the Worker
   *             requests the Qualification.
   *         </p>
   */
  TestDurationInSeconds?: number;

  /**
   * @public
   * <p>The answers to the Qualification test specified in the Test
   *             parameter.</p>
   */
  AnswerKey?: string;

  /**
   * @public
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
   * @public
   * <p> Specifies whether the Qualification type is one that a user
   *             can request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test. This value is False for Qualifications
   *             assigned automatically by the system. Valid values are True | False.
   *         </p>
   */
  IsRequestable?: boolean;

  /**
   * @public
   * <p>Specifies that requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test. Valid values are True | False.</p>
   */
  AutoGranted?: boolean;

  /**
   * @public
   * <p> The Qualification integer value to use for automatically
   *             granted Qualifications, if AutoGranted is true. This is 1 by default.
   *         </p>
   */
  AutoGrantedValue?: number;
}

/**
 * @public
 */
export interface CreateQualificationTypeResponse {
  /**
   * @public
   * <p>The created Qualification type, returned as a
   *             QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}

/**
 * @public
 */
export interface CreateWorkerBlockRequest {
  /**
   * @public
   * <p>The ID of the Worker to block.</p>
   */
  WorkerId: string | undefined;

  /**
   * @public
   * <p>A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.</p>
   */
  Reason: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerBlockResponse {}

/**
 * @public
 */
export interface DeleteHITRequest {
  /**
   * @public
   * <p>The ID of the HIT to be deleted.</p>
   */
  HITId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHITResponse {}

/**
 * @public
 */
export interface DeleteQualificationTypeRequest {
  /**
   * @public
   * <p>The ID of the QualificationType to dispose.</p>
   */
  QualificationTypeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQualificationTypeResponse {}

/**
 * @public
 */
export interface DeleteWorkerBlockRequest {
  /**
   * @public
   * <p>The ID of the Worker to unblock.</p>
   */
  WorkerId: string | undefined;

  /**
   * @public
   * <p>A message that explains the reason for unblocking the Worker. The Worker does not see this message.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface DeleteWorkerBlockResponse {}

/**
 * @public
 */
export interface DisassociateQualificationFromWorkerRequest {
  /**
   * @public
   * <p>The ID of the Worker who possesses the Qualification to be revoked.</p>
   */
  WorkerId: string | undefined;

  /**
   * @public
   * <p>The ID of the Qualification type of the Qualification to be revoked.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface DisassociateQualificationFromWorkerResponse {}

/**
 * @public
 * @enum
 */
export const EventType = {
  AssignmentAbandoned: "AssignmentAbandoned",
  AssignmentAccepted: "AssignmentAccepted",
  AssignmentApproved: "AssignmentApproved",
  AssignmentRejected: "AssignmentRejected",
  AssignmentReturned: "AssignmentReturned",
  AssignmentSubmitted: "AssignmentSubmitted",
  HITCreated: "HITCreated",
  HITDisposed: "HITDisposed",
  HITExpired: "HITExpired",
  HITExtended: "HITExtended",
  HITReviewable: "HITReviewable",
  Ping: "Ping",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 */
export interface GetAccountBalanceRequest {}

/**
 * @public
 */
export interface GetAccountBalanceResponse {
  /**
   * @public
   * <p>A string representing a currency amount.</p>
   */
  AvailableBalance?: string;

  /**
   * @public
   * <p>A string representing a currency amount.</p>
   */
  OnHoldBalance?: string;
}

/**
 * @public
 */
export interface GetAssignmentRequest {
  /**
   * @public
   * <p>The ID of the Assignment to be retrieved.</p>
   */
  AssignmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssignmentResponse {
  /**
   * @public
   * <p> The assignment. The response includes one Assignment
   *             element.
   *         </p>
   */
  Assignment?: Assignment;

  /**
   * @public
   * <p> The HIT associated with this assignment. The response
   *             includes one HIT element.</p>
   */
  HIT?: HIT;
}

/**
 * @public
 */
export interface GetFileUploadURLRequest {
  /**
   * @public
   * <p>The ID of the assignment that contains the question with a
   *             FileUploadAnswer.</p>
   */
  AssignmentId: string | undefined;

  /**
   * @public
   * <p>The identifier of the question with a FileUploadAnswer, as
   *             specified in the QuestionForm of the HIT.</p>
   */
  QuestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetFileUploadURLResponse {
  /**
   * @public
   * <p> A temporary URL for the file that the Worker uploaded for
   *             the answer.
   *         </p>
   */
  FileUploadURL?: string;
}

/**
 * @public
 */
export interface GetHITRequest {
  /**
   * @public
   * <p>The ID of the HIT to be retrieved.</p>
   */
  HITId: string | undefined;
}

/**
 * @public
 */
export interface GetHITResponse {
  /**
   * @public
   * <p> Contains the requested HIT data.</p>
   */
  HIT?: HIT;
}

/**
 * @public
 */
export interface GetQualificationScoreRequest {
  /**
   * @public
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>The ID of the Worker whose Qualification is being updated.</p>
   */
  WorkerId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QualificationStatus = {
  Granted: "Granted",
  Revoked: "Revoked",
} as const;

/**
 * @public
 */
export type QualificationStatus = (typeof QualificationStatus)[keyof typeof QualificationStatus];

/**
 * @public
 * <p>The Qualification data structure represents a Qualification
 *             assigned to a user, including the Qualification type and the value
 *             (score).</p>
 */
export interface Qualification {
  /**
   * @public
   * <p> The ID of the Qualification type for the Qualification.</p>
   */
  QualificationTypeId?: string;

  /**
   * @public
   * <p> The ID of the Worker who possesses the Qualification.
   *         </p>
   */
  WorkerId?: string;

  /**
   * @public
   * <p> The date and time the Qualification was granted to the
   *             Worker. If the Worker's Qualification was revoked, and then
   *             re-granted based on a new Qualification request, GrantTime is the
   *             date and time of the last call to the AcceptQualificationRequest
   *             operation.</p>
   */
  GrantTime?: Date;

  /**
   * @public
   * <p> The value (score) of the Qualification, if the Qualification
   *             has an integer value.</p>
   */
  IntegerValue?: number;

  /**
   * @public
   * <p>The Locale data structure represents a geographical region or location.</p>
   */
  LocaleValue?: Locale;

  /**
   * @public
   * <p> The status of the Qualification. Valid values are Granted |
   *             Revoked.</p>
   */
  Status?: QualificationStatus;
}

/**
 * @public
 */
export interface GetQualificationScoreResponse {
  /**
   * @public
   * <p> The Qualification data structure of the Qualification
   *             assigned to a user, including the Qualification type and the value
   *             (score).
   *         </p>
   */
  Qualification?: Qualification;
}

/**
 * @public
 */
export interface GetQualificationTypeRequest {
  /**
   * @public
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationTypeResponse {
  /**
   * @public
   * <p> The returned Qualification Type</p>
   */
  QualificationType?: QualificationType;
}

/**
 * @public
 */
export interface ListAssignmentsForHITRequest {
  /**
   * @public
   * <p>The ID of the HIT.</p>
   */
  HITId: string | undefined;

  /**
   * @public
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
  /**
   * @public
   * <p>The status of the assignments to return: Submitted | Approved
   *             | Rejected</p>
   */
  AssignmentStatuses?: AssignmentStatus[];
}

/**
 * @public
 */
export interface ListAssignmentsForHITResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The collection of Assignment data structures returned by
   *             this call.</p>
   */
  Assignments?: Assignment[];
}

/**
 * @public
 */
export interface ListBonusPaymentsRequest {
  /**
   * @public
   * <p>The ID of the HIT associated with the bonus payments to
   *             retrieve. If not specified, all bonus payments for all assignments
   *             for the given HIT are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  HITId?: string;

  /**
   * @public
   * <p>The ID of the assignment associated with the bonus payments
   *             to retrieve. If specified, only bonus payments for the given
   *             assignment are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  AssignmentId?: string;

  /**
   * @public
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

/**
 * @public
 */
export interface ListBonusPaymentsResponse {
  /**
   * @public
   * <p>The number of bonus payments on this page in the filtered
   *             results list, equivalent to the number of bonus payments being
   *             returned by this call.
   *         </p>
   */
  NumResults?: number;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A successful request to the ListBonusPayments operation
   *             returns a list of BonusPayment objects.
   *         </p>
   */
  BonusPayments?: BonusPayment[];
}

/**
 * @public
 */
export interface ListHITsRequest {
  /**
   * @public
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

/**
 * @public
 */
export interface ListHITsResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of HITs on this page in the filtered results list,
   *             equivalent to the number of HITs being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeRequest {
  /**
   * @public
   * <p>
   *             The ID of the Qualification type to use when querying HITs.
   *         </p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.	</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

/**
 * @public
 */
export interface ListQualificationRequestsRequest {
  /**
   * @public
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId?: string;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> The QualificationRequest data structure represents a request
 *             a Worker has made for a Qualification.
 *         </p>
 */
export interface QualificationRequest {
  /**
   * @public
   * <p>The ID of the Qualification request, a unique identifier
   *             generated when the request was submitted.
   *
   *         </p>
   */
  QualificationRequestId?: string;

  /**
   * @public
   * <p> The ID of the Qualification type the Worker is requesting,
   *             as returned by the CreateQualificationType operation.
   *         </p>
   */
  QualificationTypeId?: string;

  /**
   * @public
   * <p> The ID of the Worker requesting the Qualification.</p>
   */
  WorkerId?: string;

  /**
   * @public
   * <p> The contents of the Qualification test that was presented to
   *             the Worker, if the type has a test and the Worker has submitted
   *             answers. This value is identical to the QuestionForm associated with
   *             the Qualification type at the time the Worker requests the
   *             Qualification.</p>
   */
  Test?: string;

  /**
   * @public
   * <p> The Worker's answers for the Qualification type's test
   *             contained in a QuestionFormAnswers document, if the type has a test
   *             and the Worker has submitted answers. If the Worker does not provide
   *             any answers, Answer may be empty.
   *         </p>
   */
  Answer?: string;

  /**
   * @public
   * <p>The date and time the Qualification request had a status of
   *             Submitted. This is either the time the Worker submitted answers for a
   *             Qualification test, or the time the Worker requested the
   *             Qualification if the Qualification type does not have a test.
   *         </p>
   */
  SubmitTime?: Date;
}

/**
 * @public
 */
export interface ListQualificationRequestsResponse {
  /**
   * @public
   * <p>The number of Qualification requests on this page in the filtered results list,
   *             equivalent to the number of Qualification requests being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Qualification request. The response includes one
   *             QualificationRequest element
   *             for each Qualification request returned
   *             by the query.</p>
   */
  QualificationRequests?: QualificationRequest[];
}

/**
 * @public
 */
export interface ListQualificationTypesRequest {
  /**
   * @public
   * <p> A text query against all of the searchable attributes of
   *             Qualification types.
   *         </p>
   */
  Query?: string;

  /**
   * @public
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
   * @public
   * <p> Specifies that only Qualification types that the Requester
   *             created are returned. If false, the operation returns all
   *             Qualification types.
   *         </p>
   */
  MustBeOwnedByCaller?: boolean;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListQualificationTypesResponse {
  /**
   * @public
   * <p> The number of Qualification types on this page in the
   *             filtered results list, equivalent to the number of types this
   *             operation returns.
   *         </p>
   */
  NumResults?: number;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The list of QualificationType elements returned by the
   *             query.
   *         </p>
   */
  QualificationTypes?: QualificationType[];
}

/**
 * @public
 * @enum
 */
export const ReviewableHITStatus = {
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
} as const;

/**
 * @public
 */
export type ReviewableHITStatus = (typeof ReviewableHITStatus)[keyof typeof ReviewableHITStatus];

/**
 * @public
 */
export interface ListReviewableHITsRequest {
  /**
   * @public
   * <p>
   *             The ID of the HIT type of the HITs to consider for the query.
   *             If not specified, all HITs for the Reviewer are considered
   *         </p>
   */
  HITTypeId?: string;

  /**
   * @public
   * <p>
   *             Can be either <code>Reviewable</code> or <code>Reviewing</code>.
   *             Reviewable is the default value.
   *         </p>
   */
  Status?: ReviewableHITStatus;

  /**
   * @public
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListReviewableHITsResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.
   *         </p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];
}

/**
 * @public
 * @enum
 */
export const ReviewPolicyLevel = {
  Assignment: "Assignment",
  HIT: "HIT",
} as const;

/**
 * @public
 */
export type ReviewPolicyLevel = (typeof ReviewPolicyLevel)[keyof typeof ReviewPolicyLevel];

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITRequest {
  /**
   * @public
   * <p>The unique identifier of the HIT to retrieve review results for.</p>
   */
  HITId: string | undefined;

  /**
   * @public
   * <p>
   *             The Policy Level(s) to retrieve review results for - HIT or Assignment.
   *             If omitted, the default behavior is to retrieve all data for both policy levels.
   *             For a list of all the described policies, see Review Policies.
   *         </p>
   */
  PolicyLevels?: ReviewPolicyLevel[];

  /**
   * @public
   * <p>
   *             Specify if the operation should retrieve a list of the actions taken executing
   *             the Review Policies and their outcomes.
   *         </p>
   */
  RetrieveActions?: boolean;

  /**
   * @public
   * <p>
   *             Specify if the operation should retrieve a list of the results computed by the Review Policies.
   *         </p>
   */
  RetrieveResults?: boolean;

  /**
   * @public
   * <p>Pagination token</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Limit the number of results returned.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ReviewActionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  Intended: "Intended",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type ReviewActionStatus = (typeof ReviewActionStatus)[keyof typeof ReviewActionStatus];

/**
 * @public
 * <p> Both the AssignmentReviewReport and the HITReviewReport
 *             elements contains the ReviewActionDetail data structure. This
 *             structure is returned multiple times for each action specified in the
 *             Review Policy.
 *         </p>
 */
export interface ReviewActionDetail {
  /**
   * @public
   * <p>The unique identifier for the action.</p>
   */
  ActionId?: string;

  /**
   * @public
   * <p> The nature of the action itself. The Review Policy is
   *             responsible for examining the HIT and Assignments, emitting results,
   *             and deciding which other actions will be necessary. </p>
   */
  ActionName?: string;

  /**
   * @public
   * <p> The specific HITId or AssignmentID targeted by the action.</p>
   */
  TargetId?: string;

  /**
   * @public
   * <p> The type of object in TargetId.</p>
   */
  TargetType?: string;

  /**
   * @public
   * <p> The current disposition of the action: INTENDED, SUCCEEDED,
   *             FAILED, or CANCELLED.
   *         </p>
   */
  Status?: ReviewActionStatus;

  /**
   * @public
   * <p> The date when the action was completed.</p>
   */
  CompleteTime?: Date;

  /**
   * @public
   * <p> A description of the outcome of the review.</p>
   */
  Result?: string;

  /**
   * @public
   * <p> Present only when the Results have a FAILED Status.</p>
   */
  ErrorCode?: string;
}

/**
 * @public
 * <p> This data structure is returned multiple times for each
 *             result specified in the Review Policy.
 *         </p>
 */
export interface ReviewResultDetail {
  /**
   * @public
   * <p> A unique identifier of the Review action result.
   *         </p>
   */
  ActionId?: string;

  /**
   * @public
   * <p>The HITID or AssignmentId about which this result was taken.
   *             Note that HIT-level Review Policies will often emit results about
   *             both the HIT itself and its Assignments, while Assignment-level
   *             review policies generally only emit results about the Assignment
   *             itself.
   *         </p>
   */
  SubjectId?: string;

  /**
   * @public
   * <p> The type of the object from the SubjectId field.</p>
   */
  SubjectType?: string;

  /**
   * @public
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
   * @public
   * <p> Key identifies the particular piece of reviewed information.
   *         </p>
   */
  Key?: string;

  /**
   * @public
   * <p> The values of Key provided by the review policies you have
   *             selected.
   *         </p>
   */
  Value?: string;
}

/**
 * @public
 * <p> Contains both ReviewResult and ReviewAction elements for a
 *             particular HIT.
 *         </p>
 */
export interface ReviewReport {
  /**
   * @public
   * <p> A list of ReviewResults objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewResults?: ReviewResultDetail[];

  /**
   * @public
   * <p> A list of ReviewAction objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewActions?: ReviewActionDetail[];
}

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITResponse {
  /**
   * @public
   * <p>The HITId of the HIT for which results have been returned.</p>
   */
  HITId?: string;

  /**
   * @public
   * <p> The name of the Assignment-level Review Policy. This
   *             contains only the PolicyName element.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * @public
   * <p>The name of the HIT-level Review Policy. This contains only
   *             the PolicyName element.</p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * @public
   * <p> Contains both ReviewResult and ReviewAction elements for an
   *             Assignment.
   *         </p>
   */
  AssignmentReviewReport?: ReviewReport;

  /**
   * @public
   * <p>Contains both ReviewResult and ReviewAction elements for a particular HIT.
   *         </p>
   */
  HITReviewReport?: ReviewReport;

  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWorkerBlocksRequest {
  /**
   * @public
   * <p>Pagination token</p>
   */
  NextToken?: string;

  MaxResults?: number;
}

/**
 * @public
 * <p> The WorkerBlock data structure represents a Worker who has
 *             been blocked. It has two elements: the WorkerId and the Reason for
 *             the block.
 *         </p>
 */
export interface WorkerBlock {
  /**
   * @public
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * @public
   * <p> A message explaining the reason the Worker was blocked.
   *         </p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface ListWorkerBlocksResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The list of WorkerBlocks, containing the collection of
   *             Worker IDs and reasons for blocking.</p>
   */
  WorkerBlocks?: WorkerBlock[];
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeRequest {
  /**
   * @public
   * <p>The ID of the Qualification type of the Qualifications to
   *             return.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>
   *             The status of the Qualifications to return.
   *             Can be <code>Granted | Revoked</code>.
   *         </p>
   */
  Status?: QualificationStatus;

  /**
   * @public
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeResponse {
  /**
   * @public
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> The number of Qualifications on this page in the filtered
   *             results list, equivalent to the number of Qualifications being
   *             returned by this call.</p>
   */
  NumResults?: number;

  /**
   * @public
   * <p> The list of Qualification elements returned by this call.
   *         </p>
   */
  Qualifications?: Qualification[];
}

/**
 * @public
 */
export interface NotifyWorkersRequest {
  /**
   * @public
   * <p>The subject line of the email message to send. Can include up
   *             to 200 characters.</p>
   */
  Subject: string | undefined;

  /**
   * @public
   * <p>The text of the email message to send. Can include up to
   *             4,096 characters</p>
   */
  MessageText: string | undefined;

  /**
   * @public
   * <p>A list of Worker IDs you wish to notify. You
   *             can notify upto
   *             100 Workers at a time.</p>
   */
  WorkerIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NotifyWorkersFailureCode = {
  HardFailure: "HardFailure",
  SoftFailure: "SoftFailure",
} as const;

/**
 * @public
 */
export type NotifyWorkersFailureCode = (typeof NotifyWorkersFailureCode)[keyof typeof NotifyWorkersFailureCode];

/**
 * @public
 * <p> When MTurk encounters an issue with notifying the Workers
 *             you specified, it returns back this object with failure details.
 *         </p>
 */
export interface NotifyWorkersFailureStatus {
  /**
   * @public
   * <p> Encoded value for the failure type.
   *         </p>
   */
  NotifyWorkersFailureCode?: NotifyWorkersFailureCode;

  /**
   * @public
   * <p> A message detailing the reason the Worker could not be
   *             notified.
   *         </p>
   */
  NotifyWorkersFailureMessage?: string;

  /**
   * @public
   * <p> The ID of the Worker.</p>
   */
  WorkerId?: string;
}

/**
 * @public
 */
export interface NotifyWorkersResponse {
  /**
   * @public
   * <p> When MTurk sends notifications to the list of Workers, it
   *             returns back any failures it encounters in this list of
   *             NotifyWorkersFailureStatus objects.
   *         </p>
   */
  NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[];
}

/**
 * @public
 */
export interface RejectAssignmentRequest {
  /**
   * @public
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   */
  AssignmentId: string | undefined;

  /**
   * @public
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   */
  RequesterFeedback: string | undefined;
}

/**
 * @public
 */
export interface RejectAssignmentResponse {}

/**
 * @public
 */
export interface RejectQualificationRequestRequest {
  /**
   * @public
   * <p>
   *             The ID of the Qualification request, as returned by the
   *             <code>ListQualificationRequests</code>
   *             operation.
   *         </p>
   */
  QualificationRequestId: string | undefined;

  /**
   * @public
   * <p>A text message explaining why the request was rejected, to be
   *             shown to the Worker who made the request.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface RejectQualificationRequestResponse {}

/**
 * @public
 */
export interface SendBonusRequest {
  /**
   * @public
   * <p>The ID of the Worker being paid the bonus.</p>
   */
  WorkerId: string | undefined;

  /**
   * @public
   * <p>
   *             The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and
   *             "101.42" represents $101.42 USD). Do not include currency symbols or currency codes.
   *         </p>
   */
  BonusAmount: string | undefined;

  /**
   * @public
   * <p>The ID of the assignment for which this bonus is paid.</p>
   */
  AssignmentId: string | undefined;

  /**
   * @public
   * <p>A message that explains the reason for the bonus payment. The
   *             Worker receiving the bonus can see this message.</p>
   */
  Reason: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface SendBonusResponse {}

/**
 * @public
 * @enum
 */
export const NotificationTransport = {
  Email: "Email",
  SNS: "SNS",
  SQS: "SQS",
} as const;

/**
 * @public
 */
export type NotificationTransport = (typeof NotificationTransport)[keyof typeof NotificationTransport];

/**
 * @public
 * <p>The NotificationSpecification data structure describes a HIT
 *             event notification for a HIT type.</p>
 */
export interface NotificationSpecification {
  /**
   * @public
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
   * @public
   * <p> The method Amazon Mechanical Turk uses to send the
   *             notification. Valid Values: Email | SQS | SNS.
   *         </p>
   */
  Transport: NotificationTransport | undefined;

  /**
   * @public
   * <p>The version of the Notification API to use. Valid value is
   *             2006-05-05.</p>
   */
  Version: string | undefined;

  /**
   * @public
   * <p> The list of events that should cause notifications to be
   *             sent. Valid Values: AssignmentAccepted | AssignmentAbandoned |
   *             AssignmentReturned | AssignmentSubmitted | AssignmentRejected |
   *             AssignmentApproved | HITCreated | HITExtended | HITDisposed |
   *             HITReviewable | HITExpired | Ping. The Ping event is only valid for
   *             the SendTestEventNotification operation.
   *         </p>
   */
  EventTypes: EventType[] | undefined;
}

/**
 * @public
 */
export interface SendTestEventNotificationRequest {
  /**
   * @public
   * <p>
   *             The notification specification to test. This value is identical to the value
   *             you would provide to the UpdateNotificationSettings operation when you establish
   *             the notification specification for a HIT type.
   *         </p>
   */
  Notification: NotificationSpecification | undefined;

  /**
   * @public
   * <p>
   *             The event to simulate to test the notification specification.
   *             This event is included in the test message even if the notification specification
   *             does not include the event type.
   *             The notification specification does not filter out the test event.
   *         </p>
   */
  TestEventType: EventType | undefined;
}

/**
 * @public
 */
export interface SendTestEventNotificationResponse {}

/**
 * @public
 */
export interface UpdateExpirationForHITRequest {
  /**
   * @public
   * <p>
   *             The HIT to update.
   *         </p>
   */
  HITId: string | undefined;

  /**
   * @public
   * <p>
   *             The date and time at which you want the HIT to expire
   *         </p>
   */
  ExpireAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateExpirationForHITResponse {}

/**
 * @public
 */
export interface UpdateHITReviewStatusRequest {
  /**
   * @public
   * <p>
   *             The ID of the HIT to update.
   *         </p>
   */
  HITId: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateHITReviewStatusResponse {}

/**
 * @public
 */
export interface UpdateHITTypeOfHITRequest {
  /**
   * @public
   * <p>The HIT to update.</p>
   */
  HITId: string | undefined;

  /**
   * @public
   * <p>The ID of the new HIT type.</p>
   */
  HITTypeId: string | undefined;
}

/**
 * @public
 */
export interface UpdateHITTypeOfHITResponse {}

/**
 * @public
 */
export interface UpdateNotificationSettingsRequest {
  /**
   * @public
   * <p>
   *             The ID of the HIT type whose notification specification is being updated.
   *         </p>
   */
  HITTypeId: string | undefined;

  /**
   * @public
   * <p>
   *             The notification specification for the HIT type.
   *         </p>
   */
  Notification?: NotificationSpecification;

  /**
   * @public
   * <p>
   *             Specifies whether notifications are sent for HITs of this HIT type,
   *             according to the notification specification.
   *             You must specify either the Notification parameter or the Active parameter
   *             for the call to UpdateNotificationSettings to succeed.
   *         </p>
   */
  Active?: boolean;
}

/**
 * @public
 */
export interface UpdateNotificationSettingsResponse {}

/**
 * @public
 */
export interface UpdateQualificationTypeRequest {
  /**
   * @public
   * <p>The ID of the Qualification type to update.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * @public
   * <p>The new description of the Qualification type.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The new status of the Qualification type - Active | Inactive</p>
   */
  QualificationTypeStatus?: QualificationTypeStatus;

  /**
   * @public
   * <p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>
   */
  Test?: string;

  /**
   * @public
   * <p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>
   */
  AnswerKey?: string;

  /**
   * @public
   * <p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>
   */
  TestDurationInSeconds?: number;

  /**
   * @public
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
   * @public
   * <p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * @public
   * <p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>
   */
  AutoGrantedValue?: number;
}

/**
 * @public
 */
export interface UpdateQualificationTypeResponse {
  /**
   * @public
   * <p> Contains a QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}
