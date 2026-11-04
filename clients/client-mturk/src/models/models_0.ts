// smithy-typescript generated code
import type {
  AssignmentStatus,
  Comparator,
  EventType,
  HITAccessActions,
  HITReviewStatus,
  HITStatus,
  NotificationTransport,
  NotifyWorkersFailureCode,
  QualificationStatus,
  QualificationTypeStatus,
  ReviewableHITStatus,
  ReviewActionStatus,
  ReviewPolicyLevel,
} from "./enums";

/**
 * @public
 */
export interface AcceptQualificationRequestRequest {
  /**
   * The ID of the Qualification request, as returned by the `GetQualificationRequests` operation.
   *
   * @public
   */
  QualificationRequestId: string | undefined;

  /**
   * The value of the Qualification. You can omit this value if you are using the presence or absence of the Qualification as the basis for a HIT requirement.
   *
   * @public
   */
  IntegerValue?: number | undefined;
}

/**
 * @public
 */
export interface AcceptQualificationRequestResponse {}

/**
 * @public
 */
export interface ApproveAssignmentRequest {
  /**
   * The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * A message for the Worker, which the Worker can see in the Status section of the web site.
   *
   * @public
   */
  RequesterFeedback?: string | undefined;

  /**
   * A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to `False`.
   *
   * @public
   */
  OverrideRejection?: boolean | undefined;
}

/**
 * @public
 */
export interface ApproveAssignmentResponse {}

/**
 * The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.
 *
 * @public
 */
export interface Assignment {
  /**
   * A unique identifier for the assignment.
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * The ID of the Worker who accepted the HIT.
   *
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * The ID of the HIT.
   *
   * @public
   */
  HITId?: string | undefined;

  /**
   * The status of the assignment.
   *
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.
   *
   * @public
   */
  AutoApprovalTime?: Date | undefined;

  /**
   * The date and time the Worker accepted the assignment.
   *
   * @public
   */
  AcceptTime?: Date | undefined;

  /**
   * If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.
   *
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.
   *
   * @public
   */
  ApprovalTime?: Date | undefined;

  /**
   * If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.
   *
   * @public
   */
  RejectionTime?: Date | undefined;

  /**
   * The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.
   *
   * @public
   */
  Deadline?: Date | undefined;

  /**
   * The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.
   *
   * @public
   */
  Answer?: string | undefined;

  /**
   * The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.
   *
   * @public
   */
  RequesterFeedback?: string | undefined;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerRequest {
  /**
   * The ID of the Qualification type to use for the assigned Qualification.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * The ID of the Worker to whom the Qualification is being assigned. Worker IDs are included with submitted HIT assignments and Qualification requests.
   *
   * @public
   */
  WorkerId: string | undefined;

  /**
   * The value of the Qualification to assign.
   *
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * Specifies whether to send a notification email message to the Worker saying that the qualification was assigned to the Worker. Note: this is true by default.
   *
   * @public
   */
  SendNotification?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerResponse {}

/**
 * An object representing a Bonus payment paid to a Worker.
 *
 * @public
 */
export interface BonusPayment {
  /**
   * The ID of the Worker to whom the bonus was paid.
   *
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * A string representing a currency amount.
   *
   * @public
   */
  BonusAmount?: string | undefined;

  /**
   * The ID of the assignment associated with this bonus payment.
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * The Reason text given when the bonus was granted, if any.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The date and time of when the bonus was granted.
   *
   * @public
   */
  GrantTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITRequest {
  /**
   * The ID of the HIT to extend.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * The number of additional assignments to request for this HIT.
   *
   * @public
   */
  NumberOfAdditionalAssignments: number | undefined;

  /**
   * A unique identifier for this request, which allows you to retry the call on error without extending the HIT multiple times. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the extend HIT already exists in the system from a previous call using the same `UniqueRequestToken`, subsequent calls will return an error with a message containing the request ID.
   *
   * @public
   */
  UniqueRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITResponse {}

/**
 * This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
 *
 * @public
 */
export interface ParameterMapEntry {
  /**
   * The QuestionID from the HIT that is used to identify which question requires Mechanical Turk to score as part of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * Name of the parameter from the Review policy.
 *
 * @public
 */
export interface PolicyParameter {
  /**
   * Name of the parameter from the list of Review Polices.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The list of values of the Parameter
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * List of ParameterMapEntry objects.
   *
   * @public
   */
  MapEntries?: ParameterMapEntry[] | undefined;
}

/**
 * HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.
 *
 * @public
 */
export interface ReviewPolicy {
  /**
   * Name of a Review Policy: SimplePlurality/2011-09-01 or ScoreMyKnownAnswers/2011-09-01
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Name of the parameter from the Review policy.
   *
   * @public
   */
  Parameters?: PolicyParameter[] | undefined;
}

/**
 * The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.
 *
 * @public
 */
export interface HITLayoutParameter {
  /**
   * The name of the parameter in the HITLayout.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value substituted for the parameter referenced in the HITLayout.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The Locale data structure represents a geographical region or location.
 *
 * @public
 */
export interface Locale {
  /**
   * The country of the locale. Must be a valid ISO 3166 country code. For example, the code US refers to the United States of America.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The state or subdivision of the locale. A valid ISO 3166-2 subdivision code. For example, the code WA refers to the state of Washington.
   *
   * @public
   */
  Subdivision?: string | undefined;
}

/**
 * The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.
 *
 * @public
 */
export interface QualificationRequirement {
  /**
   * The ID of the Qualification type for the requirement.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * The kind of comparison to make against a Qualification's value. You can compare a Qualification's value to an IntegerValue to see if it is LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You can compare it to a LocaleValue to see if it is EqualTo, or NotEqualTo the LocaleValue. You can check to see if the value is In or NotIn a set of IntegerValue or LocaleValue values. Lastly, a Qualification requirement can also test if a Qualification Exists or DoesNotExist in the user's profile, regardless of its value.
   *
   * @public
   */
  Comparator: Comparator | undefined;

  /**
   * The integer value to compare against the Qualification's value. IntegerValue must not be present if Comparator is Exists or DoesNotExist. IntegerValue can only be used if the Qualification type has an integer value; it cannot be used with the Worker_Locale QualificationType ID. When performing a set comparison by using the In or the NotIn comparator, you can use up to 15 IntegerValue elements in a QualificationRequirement data structure.
   *
   * @public
   */
  IntegerValues?: number[] | undefined;

  /**
   * The locale value to compare against the Qualification's value. The local value must be a valid ISO 3166 country code or supports ISO 3166-2 subdivisions. LocaleValue can only be used with a Worker_Locale QualificationType ID. LocaleValue can only be used with the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use a single LocaleValue element when using the EqualTo or NotEqualTo comparators. When performing a set comparison by using the In or the NotIn comparator, you can use up to 30 LocaleValue elements in a QualificationRequirement data structure.
   *
   * @public
   */
  LocaleValues?: Locale[] | undefined;

  /**
   * DEPRECATED: Use the `ActionsGuarded` field instead. If RequiredToPreview is true, the question data for the HIT will not be shown when a Worker whose Qualifications do not meet this requirement tries to preview the HIT. That is, a Worker's Qualifications must meet all of the requirements for which RequiredToPreview is true in order to preview the HIT. If a Worker meets all of the requirements where RequiredToPreview is true (or if there are no such requirements), but does not meet all of the requirements for the HIT, the Worker will be allowed to preview the HIT's question data, but will not be allowed to accept and complete the HIT. The default is false. This should not be used in combination with the `ActionsGuarded` field.
   *
   * @deprecated deprecated.
   * @public
   */
  RequiredToPreview?: boolean | undefined;

  /**
   * Setting this attribute prevents Workers whose Qualifications do not meet this QualificationRequirement from taking the specified action. Valid arguments include "Accept" (Worker cannot accept the HIT, but can preview the HIT and see it in their search results), "PreviewAndAccept" (Worker cannot accept or preview the HIT, but can see the HIT in their search results), and "DiscoverPreviewAndAccept" (Worker cannot accept, preview, or see the HIT in their search results). It's possible for you to create a HIT with multiple QualificationRequirements (which can have different values for the ActionGuarded attribute). In this case, the Worker is only permitted to perform an action when they have met all QualificationRequirements guarding the action. The actions in the order of least restrictive to most restrictive are Discover, Preview and Accept. For example, if a Worker meets all QualificationRequirements that are set to DiscoverPreviewAndAccept, but do not meet all requirements that are set with PreviewAndAccept, then the Worker will be able to Discover, i.e. see the HIT in their search result, but will not be able to Preview or Accept the HIT. ActionsGuarded should not be used in combination with the `RequiredToPreview` field.
   *
   * @public
   */
  ActionsGuarded?: HITAccessActions | undefined;
}

/**
 * @public
 */
export interface CreateHITRequest {
  /**
   * The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it.
   *
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted.
   *
   * @public
   */
  LifetimeInSeconds: number | undefined;

  /**
   * The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept.
   *
   * @public
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *
   * @public
   */
  Reward: string | undefined;

  /**
   * The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs.
   *
   * @public
   */
  Keywords?: string | undefined;

  /**
   * A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The data the person completing the HIT uses to produce the results.
   *
   * Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace.
   *
   * Either a Question parameter or a HITLayoutId parameter must be provided.
   *
   * @public
   */
  Question?: string | undefined;

  /**
   * An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT.
   *
   * The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester.
   *
   * The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped.
   *
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the `ActionsGuarded` field on each `QualificationRequirement` structure.
   *
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;

  /**
   * A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId.
   *
   * > **Note:** Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *
   * @public
   */
  UniqueRequestToken?: string | undefined;

  /**
   * The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
   *
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
   *
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters.
   *
   * Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout.
   *
   * @public
   */
  HITLayoutParameters?: HITLayoutParameter[] | undefined;
}

/**
 * The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
 *
 * @public
 */
export interface HIT {
  /**
   * A unique identifier for the HIT.
   *
   * @public
   */
  HITId?: string | undefined;

  /**
   * The ID of the HIT type of this HIT
   *
   * @public
   */
  HITTypeId?: string | undefined;

  /**
   * The ID of the HIT Group of this HIT.
   *
   * @public
   */
  HITGroupId?: string | undefined;

  /**
   * The ID of the HIT Layout of this HIT.
   *
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * The date and time the HIT was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The title of the HIT.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * A general description of the HIT.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.
   *
   * @public
   */
  Question?: string | undefined;

  /**
   * One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.
   *
   * @public
   */
  Keywords?: string | undefined;

  /**
   * The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed.
   *
   * @public
   */
  HITStatus?: HITStatus | undefined;

  /**
   * The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * A string representing a currency amount.
   *
   * @public
   */
  Reward?: string | undefined;

  /**
   * The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid.
   *
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * The date and time the HIT expires.
   *
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * The length of time, in seconds, that a Worker has to complete the HIT after accepting it.
   *
   * @public
   */
  AssignmentDurationInSeconds?: number | undefined;

  /**
   * An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.
   *
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the `ActionsGuarded` field on each `QualificationRequirement` structure.
   *
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;

  /**
   * Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate.
   *
   * @public
   */
  HITReviewStatus?: HITReviewStatus | undefined;

  /**
   * The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.
   *
   * @public
   */
  NumberOfAssignmentsPending?: number | undefined;

  /**
   * The number of assignments for this HIT that are available for Workers to accept.
   *
   * @public
   */
  NumberOfAssignmentsAvailable?: number | undefined;

  /**
   * The number of assignments for this HIT that have been approved or rejected.
   *
   * @public
   */
  NumberOfAssignmentsCompleted?: number | undefined;
}

/**
 * @public
 */
export interface CreateHITResponse {
  /**
   * Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation.
   *
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface CreateHITTypeRequest {
  /**
   * The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it.
   *
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept.
   *
   * @public
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *
   * @public
   */
  Reward: string | undefined;

  /**
   * The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs.
   *
   * @public
   */
  Keywords?: string | undefined;

  /**
   * A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the `ActionsGuarded` field on each `QualificationRequirement` structure.
   *
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;
}

/**
 * @public
 */
export interface CreateHITTypeResponse {
  /**
   * The ID of the newly registered HIT type.
   *
   * @public
   */
  HITTypeId?: string | undefined;
}

/**
 * @public
 */
export interface CreateHITWithHITTypeRequest {
  /**
   * The HIT type ID you want to create this HIT with.
   *
   * @public
   */
  HITTypeId: string | undefined;

  /**
   * The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted.
   *
   * @public
   */
  LifetimeInSeconds: number | undefined;

  /**
   * The data the person completing the HIT uses to produce the results.
   *
   * Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace.
   *
   * Either a Question parameter or a HITLayoutId parameter must be provided.
   *
   * @public
   */
  Question?: string | undefined;

  /**
   * An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT.
   *
   * The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester.
   *
   * The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped.
   *
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId.
   *
   * > **Note:** Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *
   * @public
   */
  UniqueRequestToken?: string | undefined;

  /**
   * The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
   *
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy.
   *
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters.
   *
   * Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout.
   *
   * @public
   */
  HITLayoutParameters?: HITLayoutParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateHITWithHITTypeResponse {
  /**
   * Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation.
   *
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface CreateQualificationTypeRequest {
  /**
   * The name you give to the Qualification type. The type name is used to represent the Qualification to Workers, and to find the type using a Qualification type search. It must be unique across all of your Qualification types.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more words or phrases that describe the Qualification type, separated by commas. The keywords of a type make the type easier to find during a search.
   *
   * @public
   */
  Keywords?: string | undefined;

  /**
   * A long description for the Qualification type. On the Amazon Mechanical Turk website, the long description is displayed when a Worker examines a Qualification type.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The initial status of the Qualification type.
   *
   * Constraints: Valid values are: Active | Inactive
   *
   * @public
   */
  QualificationTypeStatus: QualificationTypeStatus | undefined;

  /**
   * The number of seconds that a Worker must wait after requesting a Qualification of the Qualification type before the worker can retry the Qualification request.
   *
   * Constraints: None. If not specified, retries are disabled and Workers can request a Qualification of this type only once, even if the Worker has not been granted the Qualification. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must delete existing retry-enabled Qualification type and then create a new Qualification type with retries disabled.
   *
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, `TestDurationInSeconds` must also be specified.
   *
   * Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.
   *
   * Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.
   *
   * @public
   */
  Test?: string | undefined;

  /**
   * The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.
   *
   * Constraints: Must not be longer than 65535 bytes.
   *
   * Constraints: None. If not specified, you must process Qualification requests manually.
   *
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.
   *
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.
   *
   * Constraints: If the Test parameter is specified, this parameter cannot be true.
   *
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.
   *
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.
 *
 * @public
 */
export interface QualificationType {
  /**
   * A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation.
   *
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * The date and time the Qualification type was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A long description for the Qualification type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search.
   *
   * @public
   */
  Keywords?: string | undefined;

  /**
   * The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive.
   *
   * @public
   */
  QualificationTypeStatus?: QualificationTypeStatus | undefined;

  /**
   * The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true.
   *
   * @public
   */
  Test?: string | undefined;

  /**
   * The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification.
   *
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * The answers to the Qualification test specified in the Test parameter.
   *
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once.
   *
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False.
   *
   * @public
   */
  IsRequestable?: boolean | undefined;

  /**
   * Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.
   *
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default.
   *
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * @public
 */
export interface CreateQualificationTypeResponse {
  /**
   * The created Qualification type, returned as a QualificationType data structure.
   *
   * @public
   */
  QualificationType?: QualificationType | undefined;
}

/**
 * @public
 */
export interface CreateWorkerBlockRequest {
  /**
   * The ID of the Worker to block.
   *
   * @public
   */
  WorkerId: string | undefined;

  /**
   * A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.
   *
   * @public
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
   * The ID of the HIT to be deleted.
   *
   * @public
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
   * The ID of the QualificationType to dispose.
   *
   * @public
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
   * The ID of the Worker to unblock.
   *
   * @public
   */
  WorkerId: string | undefined;

  /**
   * A message that explains the reason for unblocking the Worker. The Worker does not see this message.
   *
   * @public
   */
  Reason?: string | undefined;
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
   * The ID of the Worker who possesses the Qualification to be revoked.
   *
   * @public
   */
  WorkerId: string | undefined;

  /**
   * The ID of the Qualification type of the Qualification to be revoked.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQualificationFromWorkerResponse {}

/**
 * @public
 */
export interface GetAccountBalanceRequest {}

/**
 * @public
 */
export interface GetAccountBalanceResponse {
  /**
   * A string representing a currency amount.
   *
   * @public
   */
  AvailableBalance?: string | undefined;

  /**
   * A string representing a currency amount.
   *
   * @public
   */
  OnHoldBalance?: string | undefined;
}

/**
 * @public
 */
export interface GetAssignmentRequest {
  /**
   * The ID of the Assignment to be retrieved.
   *
   * @public
   */
  AssignmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssignmentResponse {
  /**
   * The assignment. The response includes one Assignment element.
   *
   * @public
   */
  Assignment?: Assignment | undefined;

  /**
   * The HIT associated with this assignment. The response includes one HIT element.
   *
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface GetFileUploadURLRequest {
  /**
   * The ID of the assignment that contains the question with a FileUploadAnswer.
   *
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * The identifier of the question with a FileUploadAnswer, as specified in the QuestionForm of the HIT.
   *
   * @public
   */
  QuestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetFileUploadURLResponse {
  /**
   * A temporary URL for the file that the Worker uploaded for the answer.
   *
   * @public
   */
  FileUploadURL?: string | undefined;
}

/**
 * @public
 */
export interface GetHITRequest {
  /**
   * The ID of the HIT to be retrieved.
   *
   * @public
   */
  HITId: string | undefined;
}

/**
 * @public
 */
export interface GetHITResponse {
  /**
   * Contains the requested HIT data.
   *
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface GetQualificationScoreRequest {
  /**
   * The ID of the QualificationType.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * The ID of the Worker whose Qualification is being updated.
   *
   * @public
   */
  WorkerId: string | undefined;
}

/**
 * The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
 *
 * @public
 */
export interface Qualification {
  /**
   * The ID of the Qualification type for the Qualification.
   *
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * The ID of the Worker who possesses the Qualification.
   *
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.
   *
   * @public
   */
  GrantTime?: Date | undefined;

  /**
   * The value (score) of the Qualification, if the Qualification has an integer value.
   *
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * The Locale data structure represents a geographical region or location.
   *
   * @public
   */
  LocaleValue?: Locale | undefined;

  /**
   * The status of the Qualification. Valid values are Granted | Revoked.
   *
   * @public
   */
  Status?: QualificationStatus | undefined;
}

/**
 * @public
 */
export interface GetQualificationScoreResponse {
  /**
   * The Qualification data structure of the Qualification assigned to a user, including the Qualification type and the value (score).
   *
   * @public
   */
  Qualification?: Qualification | undefined;
}

/**
 * @public
 */
export interface GetQualificationTypeRequest {
  /**
   * The ID of the QualificationType.
   *
   * @public
   */
  QualificationTypeId: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationTypeResponse {
  /**
   * The returned Qualification Type
   *
   * @public
   */
  QualificationType?: QualificationType | undefined;
}

/**
 * @public
 */
export interface ListAssignmentsForHITRequest {
  /**
   * The ID of the HIT.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * Pagination token
   *
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
  /**
   * The status of the assignments to return: Submitted | Approved | Rejected
   *
   * @public
   */
  AssignmentStatuses?: AssignmentStatus[] | undefined;
}

/**
 * @public
 */
export interface ListAssignmentsForHITResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The collection of Assignment data structures returned by this call.
   *
   * @public
   */
  Assignments?: Assignment[] | undefined;
}

/**
 * @public
 */
export interface ListBonusPaymentsRequest {
  /**
   * The ID of the HIT associated with the bonus payments to retrieve. If not specified, all bonus payments for all assignments for the given HIT are returned. Either the HITId parameter or the AssignmentId parameter must be specified
   *
   * @public
   */
  HITId?: string | undefined;

  /**
   * The ID of the assignment associated with the bonus payments to retrieve. If specified, only bonus payments for the given assignment are returned. Either the HITId parameter or the AssignmentId parameter must be specified
   *
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * Pagination token
   *
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBonusPaymentsResponse {
  /**
   * The number of bonus payments on this page in the filtered results list, equivalent to the number of bonus payments being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A successful request to the ListBonusPayments operation returns a list of BonusPayment objects.
   *
   * @public
   */
  BonusPayments?: BonusPayment[] | undefined;
}

/**
 * @public
 */
export interface ListHITsRequest {
  /**
   * Pagination token
   *
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHITsResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The list of HIT elements returned by the query.
   *
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeRequest {
  /**
   * The ID of the Qualification type to use when querying HITs.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * Pagination Token
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limit the number of results returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The list of HIT elements returned by the query.
   *
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 */
export interface ListQualificationRequestsRequest {
  /**
   * The ID of the QualificationType.
   *
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The QualificationRequest data structure represents a request a Worker has made for a Qualification.
 *
 * @public
 */
export interface QualificationRequest {
  /**
   * The ID of the Qualification request, a unique identifier generated when the request was submitted.
   *
   * @public
   */
  QualificationRequestId?: string | undefined;

  /**
   * The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation.
   *
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * The ID of the Worker requesting the Qualification.
   *
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.
   *
   * @public
   */
  Test?: string | undefined;

  /**
   * The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty.
   *
   * @public
   */
  Answer?: string | undefined;

  /**
   * The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test.
   *
   * @public
   */
  SubmitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListQualificationRequestsResponse {
  /**
   * The number of Qualification requests on this page in the filtered results list, equivalent to the number of Qualification requests being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Qualification request. The response includes one QualificationRequest element for each Qualification request returned by the query.
   *
   * @public
   */
  QualificationRequests?: QualificationRequest[] | undefined;
}

/**
 * @public
 */
export interface ListQualificationTypesRequest {
  /**
   * A text query against all of the searchable attributes of Qualification types.
   *
   * @public
   */
  Query?: string | undefined;

  /**
   * Specifies that only Qualification types that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test, are returned as results of the search. Some Qualification types, such as those assigned automatically by the system, cannot be requested directly by users. If false, all Qualification types, including those managed by the system, are considered. Valid values are True | False.
   *
   * @public
   */
  MustBeRequestable: boolean | undefined;

  /**
   * Specifies that only Qualification types that the Requester created are returned. If false, the operation returns all Qualification types.
   *
   * @public
   */
  MustBeOwnedByCaller?: boolean | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListQualificationTypesResponse {
  /**
   * The number of Qualification types on this page in the filtered results list, equivalent to the number of types this operation returns.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of QualificationType elements returned by the query.
   *
   * @public
   */
  QualificationTypes?: QualificationType[] | undefined;
}

/**
 * @public
 */
export interface ListReviewableHITsRequest {
  /**
   * The ID of the HIT type of the HITs to consider for the query. If not specified, all HITs for the Reviewer are considered
   *
   * @public
   */
  HITTypeId?: string | undefined;

  /**
   * Can be either `Reviewable` or `Reviewing`. Reviewable is the default value.
   *
   * @public
   */
  Status?: ReviewableHITStatus | undefined;

  /**
   * Pagination Token
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limit the number of results returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReviewableHITsResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The list of HIT elements returned by the query.
   *
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITRequest {
  /**
   * The unique identifier of the HIT to retrieve review results for.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * The Policy Level(s) to retrieve review results for - HIT or Assignment. If omitted, the default behavior is to retrieve all data for both policy levels. For a list of all the described policies, see Review Policies.
   *
   * @public
   */
  PolicyLevels?: ReviewPolicyLevel[] | undefined;

  /**
   * Specify if the operation should retrieve a list of the actions taken executing the Review Policies and their outcomes.
   *
   * @public
   */
  RetrieveActions?: boolean | undefined;

  /**
   * Specify if the operation should retrieve a list of the results computed by the Review Policies.
   *
   * @public
   */
  RetrieveResults?: boolean | undefined;

  /**
   * Pagination token
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limit the number of results returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.
 *
 * @public
 */
export interface ReviewActionDetail {
  /**
   * The unique identifier for the action.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * The nature of the action itself. The Review Policy is responsible for examining the HIT and Assignments, emitting results, and deciding which other actions will be necessary.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * The specific HITId or AssignmentID targeted by the action.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The type of object in TargetId.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * The current disposition of the action: INTENDED, SUCCEEDED, FAILED, or CANCELLED.
   *
   * @public
   */
  Status?: ReviewActionStatus | undefined;

  /**
   * The date when the action was completed.
   *
   * @public
   */
  CompleteTime?: Date | undefined;

  /**
   * A description of the outcome of the review.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * Present only when the Results have a FAILED Status.
   *
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * This data structure is returned multiple times for each result specified in the Review Policy.
 *
 * @public
 */
export interface ReviewResultDetail {
  /**
   * A unique identifier of the Review action result.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * The HITID or AssignmentId about which this result was taken. Note that HIT-level Review Policies will often emit results about both the HIT itself and its Assignments, while Assignment-level review policies generally only emit results about the Assignment itself.
   *
   * @public
   */
  SubjectId?: string | undefined;

  /**
   * The type of the object from the SubjectId field.
   *
   * @public
   */
  SubjectType?: string | undefined;

  /**
   * Specifies the QuestionId the result is describing. Depending on whether the TargetType is a HIT or Assignment this results could specify multiple values. If TargetType is HIT and QuestionId is absent, then the result describes results of the HIT, including the HIT agreement score. If ObjectType is Assignment and QuestionId is absent, then the result describes the Worker's performance on the HIT.
   *
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * Key identifies the particular piece of reviewed information.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The values of Key provided by the review policies you have selected.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains both ReviewResult and ReviewAction elements for a particular HIT.
 *
 * @public
 */
export interface ReviewReport {
  /**
   * A list of ReviewResults objects for each action specified in the Review Policy.
   *
   * @public
   */
  ReviewResults?: ReviewResultDetail[] | undefined;

  /**
   * A list of ReviewAction objects for each action specified in the Review Policy.
   *
   * @public
   */
  ReviewActions?: ReviewActionDetail[] | undefined;
}

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITResponse {
  /**
   * The HITId of the HIT for which results have been returned.
   *
   * @public
   */
  HITId?: string | undefined;

  /**
   * The name of the Assignment-level Review Policy. This contains only the PolicyName element.
   *
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * The name of the HIT-level Review Policy. This contains only the PolicyName element.
   *
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * Contains both ReviewResult and ReviewAction elements for an Assignment.
   *
   * @public
   */
  AssignmentReviewReport?: ReviewReport | undefined;

  /**
   * Contains both ReviewResult and ReviewAction elements for a particular HIT.
   *
   * @public
   */
  HITReviewReport?: ReviewReport | undefined;

  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerBlocksRequest {
  /**
   * Pagination token
   *
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.
 *
 * @public
 */
export interface WorkerBlock {
  /**
   * The ID of the Worker who accepted the HIT.
   *
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * A message explaining the reason the Worker was blocked.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerBlocksResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The list of WorkerBlocks, containing the collection of Worker IDs and reasons for blocking.
   *
   * @public
   */
  WorkerBlocks?: WorkerBlock[] | undefined;
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeRequest {
  /**
   * The ID of the Qualification type of the Qualifications to return.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * The status of the Qualifications to return. Can be `Granted | Revoked`.
   *
   * @public
   */
  Status?: QualificationStatus | undefined;

  /**
   * Pagination Token
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Limit the number of results returned.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeResponse {
  /**
   * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of Qualifications on this page in the filtered results list, equivalent to the number of Qualifications being returned by this call.
   *
   * @public
   */
  NumResults?: number | undefined;

  /**
   * The list of Qualification elements returned by this call.
   *
   * @public
   */
  Qualifications?: Qualification[] | undefined;
}

/**
 * @public
 */
export interface NotifyWorkersRequest {
  /**
   * The subject line of the email message to send. Can include up to 200 characters.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The text of the email message to send. Can include up to 4,096 characters
   *
   * @public
   */
  MessageText: string | undefined;

  /**
   * A list of Worker IDs you wish to notify. You can notify upto 100 Workers at a time.
   *
   * @public
   */
  WorkerIds: string[] | undefined;
}

/**
 * When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.
 *
 * @public
 */
export interface NotifyWorkersFailureStatus {
  /**
   * Encoded value for the failure type.
   *
   * @public
   */
  NotifyWorkersFailureCode?: NotifyWorkersFailureCode | undefined;

  /**
   * A message detailing the reason the Worker could not be notified.
   *
   * @public
   */
  NotifyWorkersFailureMessage?: string | undefined;

  /**
   * The ID of the Worker.
   *
   * @public
   */
  WorkerId?: string | undefined;
}

/**
 * @public
 */
export interface NotifyWorkersResponse {
  /**
   * When MTurk sends notifications to the list of Workers, it returns back any failures it encounters in this list of NotifyWorkersFailureStatus objects.
   *
   * @public
   */
  NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[] | undefined;
}

/**
 * @public
 */
export interface RejectAssignmentRequest {
  /**
   * The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * A message for the Worker, which the Worker can see in the Status section of the web site.
   *
   * @public
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
   * The ID of the Qualification request, as returned by the `ListQualificationRequests` operation.
   *
   * @public
   */
  QualificationRequestId: string | undefined;

  /**
   * A text message explaining why the request was rejected, to be shown to the Worker who made the request.
   *
   * @public
   */
  Reason?: string | undefined;
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
   * The ID of the Worker being paid the bonus.
   *
   * @public
   */
  WorkerId: string | undefined;

  /**
   * The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and "101.42" represents $101.42 USD). Do not include currency symbols or currency codes.
   *
   * @public
   */
  BonusAmount: string | undefined;

  /**
   * The ID of the assignment for which this bonus is paid.
   *
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * A message that explains the reason for the bonus payment. The Worker receiving the bonus can see this message.
   *
   * @public
   */
  Reason: string | undefined;

  /**
   * A unique identifier for this request, which allows you to retry the call on error without granting multiple bonuses. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the bonus already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID.
   *
   * @public
   */
  UniqueRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface SendBonusResponse {}

/**
 * The NotificationSpecification data structure describes a HIT event notification for a HIT type.
 *
 * @public
 */
export interface NotificationSpecification {
  /**
   * The target for notification messages. The Destination’s format is determined by the specified Transport:
   *
   * - When Transport is Email, the Destination is your email address.
   * - When Transport is SQS, the Destination is your queue URL.
   * - When Transport is SNS, the Destination is the ARN of your topic.
   *
   * @public
   */
  Destination: string | undefined;

  /**
   * The method Amazon Mechanical Turk uses to send the notification. Valid Values: Email | SQS | SNS.
   *
   * @public
   */
  Transport: NotificationTransport | undefined;

  /**
   * The version of the Notification API to use. Valid value is 2006-05-05.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation.
   *
   * @public
   */
  EventTypes: EventType[] | undefined;
}

/**
 * @public
 */
export interface SendTestEventNotificationRequest {
  /**
   * The notification specification to test. This value is identical to the value you would provide to the UpdateNotificationSettings operation when you establish the notification specification for a HIT type.
   *
   * @public
   */
  Notification: NotificationSpecification | undefined;

  /**
   * The event to simulate to test the notification specification. This event is included in the test message even if the notification specification does not include the event type. The notification specification does not filter out the test event.
   *
   * @public
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
   * The HIT to update.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * The date and time at which you want the HIT to expire
   *
   * @public
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
   * The ID of the HIT to update.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * Specifies how to update the HIT status. Default is `False`.
   *
   * - Setting this to false will only transition a HIT from `Reviewable` to `Reviewing`
   * - Setting this to true will only transition a HIT from `Reviewing` to `Reviewable`
   *
   * @public
   */
  Revert?: boolean | undefined;
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
   * The HIT to update.
   *
   * @public
   */
  HITId: string | undefined;

  /**
   * The ID of the new HIT type.
   *
   * @public
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
   * The ID of the HIT type whose notification specification is being updated.
   *
   * @public
   */
  HITTypeId: string | undefined;

  /**
   * The notification specification for the HIT type.
   *
   * @public
   */
  Notification?: NotificationSpecification | undefined;

  /**
   * Specifies whether notifications are sent for HITs of this HIT type, according to the notification specification. You must specify either the Notification parameter or the Active parameter for the call to UpdateNotificationSettings to succeed.
   *
   * @public
   */
  Active?: boolean | undefined;
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
   * The ID of the Qualification type to update.
   *
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * The new description of the Qualification type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new status of the Qualification type - Active | Inactive
   *
   * @public
   */
  QualificationTypeStatus?: QualificationTypeStatus | undefined;

  /**
   * The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, `TestDurationInSeconds` must also be specified.
   *
   * Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.
   *
   * Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.
   *
   * @public
   */
  Test?: string | undefined;

  /**
   * The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.
   *
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.
   *
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * The amount of time, in seconds, that Workers must wait after requesting a Qualification of the specified Qualification type before they can retry the Qualification request. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must dispose of the existing retry-enabled Qualification type using DisposeQualificationType and then create a new Qualification type with retries disabled using CreateQualificationType.
   *
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.
   *
   * Constraints: If the Test parameter is specified, this parameter cannot be true.
   *
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.
   *
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * @public
 */
export interface UpdateQualificationTypeResponse {
  /**
   * Contains a QualificationType data structure.
   *
   * @public
   */
  QualificationType?: QualificationType | undefined;
}
