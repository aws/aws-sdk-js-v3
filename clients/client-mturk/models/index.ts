import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptQualificationRequestRequest {
  __type?: "AcceptQualificationRequestRequest";
  /**
   * <p>
   *             The value of the Qualification. You can omit this value if you are using the
   *             presence or absence of the Qualification as the basis for a HIT requirement.
   *         </p>
   */
  IntegerValue?: number;

  /**
   * <p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>
   */
  QualificationRequestId: string | undefined;
}

export namespace AcceptQualificationRequestRequest {
  export const filterSensitiveLog = (
    obj: AcceptQualificationRequestRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptQualificationRequestRequest =>
    __isa(o, "AcceptQualificationRequestRequest");
}

export interface AcceptQualificationRequestResponse {
  __type?: "AcceptQualificationRequestResponse";
}

export namespace AcceptQualificationRequestResponse {
  export const filterSensitiveLog = (
    obj: AcceptQualificationRequestResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptQualificationRequestResponse =>
    __isa(o, "AcceptQualificationRequestResponse");
}

export interface ApproveAssignmentRequest {
  __type?: "ApproveAssignmentRequest";
  /**
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>.
   *         </p>
   */
  OverrideRejection?: boolean;

  /**
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   */
  RequesterFeedback?: string;
}

export namespace ApproveAssignmentRequest {
  export const filterSensitiveLog = (obj: ApproveAssignmentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApproveAssignmentRequest =>
    __isa(o, "ApproveAssignmentRequest");
}

export interface ApproveAssignmentResponse {
  __type?: "ApproveAssignmentResponse";
}

export namespace ApproveAssignmentResponse {
  export const filterSensitiveLog = (obj: ApproveAssignmentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApproveAssignmentResponse =>
    __isa(o, "ApproveAssignmentResponse");
}

/**
 * <p> The Assignment data structure represents a single assignment
 *             of a HIT to a Worker. The assignment tracks the Worker's efforts to
 *             complete the HIT, and contains the results for later retrieval.
 *         </p>
 */
export interface Assignment {
  __type?: "Assignment";
  /**
   * <p> The date and time the Worker accepted the assignment.</p>
   */
  AcceptTime?: Date;

  /**
   * <p> The Worker's answers submitted for the HIT contained in a
   *             QuestionFormAnswers document, if the Worker provides an answer. If
   *             the Worker does not provide any answers, Answer may contain a
   *             QuestionFormAnswers document, or Answer may be empty.</p>
   */
  Answer?: string;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             approved the results, ApprovalTime is the date and time the Requester
   *             approved the results. This value is omitted from the assignment if
   *             the Requester has not yet approved the results.</p>
   */
  ApprovalTime?: Date;

  /**
   * <p> A unique identifier for the assignment.</p>
   */
  AssignmentId?: string;

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
   * <p> The date and time of the deadline for the assignment. This
   *             value is derived from the deadline specification for the HIT and the
   *             date and time the Worker accepted the HIT.</p>
   */
  Deadline?: Date;

  /**
   * <p> The ID of the HIT.</p>
   */
  HITId?: string;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             rejected the results, RejectionTime is the date and time the
   *             Requester rejected the results.</p>
   */
  RejectionTime?: Date;

  /**
   * <p> The feedback string included with the call to the
   *             ApproveAssignment operation or the RejectAssignment operation, if the
   *             Requester approved or rejected the assignment and specified feedback.</p>
   */
  RequesterFeedback?: string;

  /**
   * <p> If the Worker has submitted results, SubmitTime is the date
   *             and time the assignment was submitted. This value is omitted from the
   *             assignment if the Worker has not yet submitted results.</p>
   */
  SubmitTime?: Date;

  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;
}

export namespace Assignment {
  export const filterSensitiveLog = (obj: Assignment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Assignment => __isa(o, "Assignment");
}

export enum AssignmentStatus {
  Approved = "Approved",
  Rejected = "Rejected",
  Submitted = "Submitted"
}

export interface AssociateQualificationWithWorkerRequest {
  __type?: "AssociateQualificationWithWorkerRequest";
  /**
   * <p>The value of the Qualification to assign.</p>
   */
  IntegerValue?: number;

  /**
   * <p>The ID of the Qualification type to use for the assigned Qualification.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>
   *             Specifies whether to send a notification email message to the Worker
   *             saying that the qualification was assigned to the Worker.
   *             Note: this is true by default.
   *         </p>
   */
  SendNotification?: boolean;

  /**
   * <p>
   *             The ID of the Worker to whom the Qualification is being assigned.
   *             Worker IDs are included with submitted HIT assignments and Qualification requests.
   *         </p>
   */
  WorkerId: string | undefined;
}

export namespace AssociateQualificationWithWorkerRequest {
  export const filterSensitiveLog = (
    obj: AssociateQualificationWithWorkerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateQualificationWithWorkerRequest =>
    __isa(o, "AssociateQualificationWithWorkerRequest");
}

export interface AssociateQualificationWithWorkerResponse {
  __type?: "AssociateQualificationWithWorkerResponse";
}

export namespace AssociateQualificationWithWorkerResponse {
  export const filterSensitiveLog = (
    obj: AssociateQualificationWithWorkerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateQualificationWithWorkerResponse =>
    __isa(o, "AssociateQualificationWithWorkerResponse");
}

/**
 * <p>An object representing a Bonus payment paid to a Worker.</p>
 */
export interface BonusPayment {
  __type?: "BonusPayment";
  /**
   * <p>The ID of the assignment associated with this bonus payment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  BonusAmount?: string;

  /**
   * <p>The date and time of when the bonus was granted.</p>
   */
  GrantTime?: Date;

  /**
   * <p>The Reason text given when the bonus was granted, if any.</p>
   */
  Reason?: string;

  /**
   * <p>The ID of the Worker to whom the bonus was paid.</p>
   */
  WorkerId?: string;
}

export namespace BonusPayment {
  export const filterSensitiveLog = (obj: BonusPayment): any => ({
    ...obj
  });
  export const isa = (o: any): o is BonusPayment => __isa(o, "BonusPayment");
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
  NotIn = "NotIn"
}

export interface CreateAdditionalAssignmentsForHITRequest {
  __type?: "CreateAdditionalAssignmentsForHITRequest";
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

export namespace CreateAdditionalAssignmentsForHITRequest {
  export const filterSensitiveLog = (
    obj: CreateAdditionalAssignmentsForHITRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAdditionalAssignmentsForHITRequest =>
    __isa(o, "CreateAdditionalAssignmentsForHITRequest");
}

export interface CreateAdditionalAssignmentsForHITResponse {
  __type?: "CreateAdditionalAssignmentsForHITResponse";
}

export namespace CreateAdditionalAssignmentsForHITResponse {
  export const filterSensitiveLog = (
    obj: CreateAdditionalAssignmentsForHITResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAdditionalAssignmentsForHITResponse =>
    __isa(o, "CreateAdditionalAssignmentsForHITResponse");
}

export interface CreateHITRequest {
  __type?: "CreateHITRequest";
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
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

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
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   */
  Description: string | undefined;

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

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

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
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

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
}

export namespace CreateHITRequest {
  export const filterSensitiveLog = (obj: CreateHITRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITRequest =>
    __isa(o, "CreateHITRequest");
}

export interface CreateHITResponse {
  __type?: "CreateHITResponse";
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

export namespace CreateHITResponse {
  export const filterSensitiveLog = (obj: CreateHITResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITResponse =>
    __isa(o, "CreateHITResponse");
}

export interface CreateHITTypeRequest {
  __type?: "CreateHITTypeRequest";
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
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   */
  AutoApprovalDelayInSeconds?: number;

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
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   */
  Keywords?: string;

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
}

export namespace CreateHITTypeRequest {
  export const filterSensitiveLog = (obj: CreateHITTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITTypeRequest =>
    __isa(o, "CreateHITTypeRequest");
}

export interface CreateHITTypeResponse {
  __type?: "CreateHITTypeResponse";
  /**
   * <p> The ID of the newly registered HIT type.</p>
   */
  HITTypeId?: string;
}

export namespace CreateHITTypeResponse {
  export const filterSensitiveLog = (obj: CreateHITTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITTypeResponse =>
    __isa(o, "CreateHITTypeResponse");
}

export interface CreateHITWithHITTypeRequest {
  __type?: "CreateHITWithHITTypeRequest";
  /**
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

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

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   */
  HITReviewPolicy?: ReviewPolicy;

  /**
   * <p>The HIT type ID you want to create this HIT with.</p>
   */
  HITTypeId: string | undefined;

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
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

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
}

export namespace CreateHITWithHITTypeRequest {
  export const filterSensitiveLog = (
    obj: CreateHITWithHITTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITWithHITTypeRequest =>
    __isa(o, "CreateHITWithHITTypeRequest");
}

export interface CreateHITWithHITTypeResponse {
  __type?: "CreateHITWithHITTypeResponse";
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   */
  HIT?: HIT;
}

export namespace CreateHITWithHITTypeResponse {
  export const filterSensitiveLog = (
    obj: CreateHITWithHITTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHITWithHITTypeResponse =>
    __isa(o, "CreateHITWithHITTypeResponse");
}

export interface CreateQualificationTypeRequest {
  __type?: "CreateQualificationTypeRequest";
  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter, in the form of an AnswerKey data structure.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes.</p>
   *         <p>Constraints: None. If not specified, you must process
   *             Qualification requests manually.</p>
   */
  AnswerKey?: string;

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

  /**
   * <p>A long description for the Qualification type. On the Amazon
   *             Mechanical Turk website, the long description is displayed when a
   *             Worker examines a Qualification type.</p>
   */
  Description: string | undefined;

  /**
   * <p>One or more words or phrases that describe the Qualification
   *             type, separated by commas. The keywords of a type make the type
   *             easier to find during a search.</p>
   */
  Keywords?: string;

  /**
   * <p> The name you give to the Qualification type. The type name
   *             is used to represent the Qualification to Workers, and to find the
   *             type using a Qualification type search. It must be unique across all
   *             of your Qualification types.</p>
   */
  Name: string | undefined;

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
   * <p>The number of seconds the Worker has to complete the
   *             Qualification test, starting from the time the Worker requests the
   *             Qualification.</p>
   */
  TestDurationInSeconds?: number;
}

export namespace CreateQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: CreateQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQualificationTypeRequest =>
    __isa(o, "CreateQualificationTypeRequest");
}

export interface CreateQualificationTypeResponse {
  __type?: "CreateQualificationTypeResponse";
  /**
   * <p>The created Qualification type, returned as a
   *             QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}

export namespace CreateQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: CreateQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateQualificationTypeResponse =>
    __isa(o, "CreateQualificationTypeResponse");
}

export interface CreateWorkerBlockRequest {
  __type?: "CreateWorkerBlockRequest";
  /**
   * <p>A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.</p>
   */
  Reason: string | undefined;

  /**
   * <p>The ID of the Worker to block.</p>
   */
  WorkerId: string | undefined;
}

export namespace CreateWorkerBlockRequest {
  export const filterSensitiveLog = (obj: CreateWorkerBlockRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkerBlockRequest =>
    __isa(o, "CreateWorkerBlockRequest");
}

export interface CreateWorkerBlockResponse {
  __type?: "CreateWorkerBlockResponse";
}

export namespace CreateWorkerBlockResponse {
  export const filterSensitiveLog = (obj: CreateWorkerBlockResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkerBlockResponse =>
    __isa(o, "CreateWorkerBlockResponse");
}

export interface DeleteHITRequest {
  __type?: "DeleteHITRequest";
  /**
   * <p>The ID of the HIT to be deleted.</p>
   */
  HITId: string | undefined;
}

export namespace DeleteHITRequest {
  export const filterSensitiveLog = (obj: DeleteHITRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHITRequest =>
    __isa(o, "DeleteHITRequest");
}

export interface DeleteHITResponse {
  __type?: "DeleteHITResponse";
}

export namespace DeleteHITResponse {
  export const filterSensitiveLog = (obj: DeleteHITResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteHITResponse =>
    __isa(o, "DeleteHITResponse");
}

export interface DeleteQualificationTypeRequest {
  __type?: "DeleteQualificationTypeRequest";
  /**
   * <p>The ID of the QualificationType to dispose.</p>
   */
  QualificationTypeId: string | undefined;
}

export namespace DeleteQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: DeleteQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQualificationTypeRequest =>
    __isa(o, "DeleteQualificationTypeRequest");
}

export interface DeleteQualificationTypeResponse {
  __type?: "DeleteQualificationTypeResponse";
}

export namespace DeleteQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: DeleteQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteQualificationTypeResponse =>
    __isa(o, "DeleteQualificationTypeResponse");
}

export interface DeleteWorkerBlockRequest {
  __type?: "DeleteWorkerBlockRequest";
  /**
   * <p>A message that explains the reason for unblocking the Worker. The Worker does not see this message.</p>
   */
  Reason?: string;

  /**
   * <p>The ID of the Worker to unblock.</p>
   */
  WorkerId: string | undefined;
}

export namespace DeleteWorkerBlockRequest {
  export const filterSensitiveLog = (obj: DeleteWorkerBlockRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkerBlockRequest =>
    __isa(o, "DeleteWorkerBlockRequest");
}

export interface DeleteWorkerBlockResponse {
  __type?: "DeleteWorkerBlockResponse";
}

export namespace DeleteWorkerBlockResponse {
  export const filterSensitiveLog = (obj: DeleteWorkerBlockResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkerBlockResponse =>
    __isa(o, "DeleteWorkerBlockResponse");
}

export interface DisassociateQualificationFromWorkerRequest {
  __type?: "DisassociateQualificationFromWorkerRequest";
  /**
   * <p>The ID of the Qualification type of the Qualification to be revoked.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>
   */
  Reason?: string;

  /**
   * <p>The ID of the Worker who possesses the Qualification to be revoked.</p>
   */
  WorkerId: string | undefined;
}

export namespace DisassociateQualificationFromWorkerRequest {
  export const filterSensitiveLog = (
    obj: DisassociateQualificationFromWorkerRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateQualificationFromWorkerRequest =>
    __isa(o, "DisassociateQualificationFromWorkerRequest");
}

export interface DisassociateQualificationFromWorkerResponse {
  __type?: "DisassociateQualificationFromWorkerResponse";
}

export namespace DisassociateQualificationFromWorkerResponse {
  export const filterSensitiveLog = (
    obj: DisassociateQualificationFromWorkerResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateQualificationFromWorkerResponse =>
    __isa(o, "DisassociateQualificationFromWorkerResponse");
}

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
  Ping = "Ping"
}

export interface GetAccountBalanceRequest {
  __type?: "GetAccountBalanceRequest";
}

export namespace GetAccountBalanceRequest {
  export const filterSensitiveLog = (obj: GetAccountBalanceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountBalanceRequest =>
    __isa(o, "GetAccountBalanceRequest");
}

export interface GetAccountBalanceResponse {
  __type?: "GetAccountBalanceResponse";
  /**
   * <p>A string representing a currency amount.</p>
   */
  AvailableBalance?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  OnHoldBalance?: string;
}

export namespace GetAccountBalanceResponse {
  export const filterSensitiveLog = (obj: GetAccountBalanceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAccountBalanceResponse =>
    __isa(o, "GetAccountBalanceResponse");
}

export interface GetAssignmentRequest {
  __type?: "GetAssignmentRequest";
  /**
   * <p>The ID of the Assignment to be retrieved.</p>
   */
  AssignmentId: string | undefined;
}

export namespace GetAssignmentRequest {
  export const filterSensitiveLog = (obj: GetAssignmentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAssignmentRequest =>
    __isa(o, "GetAssignmentRequest");
}

export interface GetAssignmentResponse {
  __type?: "GetAssignmentResponse";
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

export namespace GetAssignmentResponse {
  export const filterSensitiveLog = (obj: GetAssignmentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAssignmentResponse =>
    __isa(o, "GetAssignmentResponse");
}

export interface GetFileUploadURLRequest {
  __type?: "GetFileUploadURLRequest";
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

export namespace GetFileUploadURLRequest {
  export const filterSensitiveLog = (obj: GetFileUploadURLRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFileUploadURLRequest =>
    __isa(o, "GetFileUploadURLRequest");
}

export interface GetFileUploadURLResponse {
  __type?: "GetFileUploadURLResponse";
  /**
   * <p> A temporary URL for the file that the Worker uploaded for
   *             the answer.
   *         </p>
   */
  FileUploadURL?: string;
}

export namespace GetFileUploadURLResponse {
  export const filterSensitiveLog = (obj: GetFileUploadURLResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFileUploadURLResponse =>
    __isa(o, "GetFileUploadURLResponse");
}

export interface GetHITRequest {
  __type?: "GetHITRequest";
  /**
   * <p>The ID of the HIT to be retrieved.</p>
   */
  HITId: string | undefined;
}

export namespace GetHITRequest {
  export const filterSensitiveLog = (obj: GetHITRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHITRequest => __isa(o, "GetHITRequest");
}

export interface GetHITResponse {
  __type?: "GetHITResponse";
  /**
   * <p> Contains the requested HIT data.</p>
   */
  HIT?: HIT;
}

export namespace GetHITResponse {
  export const filterSensitiveLog = (obj: GetHITResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetHITResponse =>
    __isa(o, "GetHITResponse");
}

export interface GetQualificationScoreRequest {
  __type?: "GetQualificationScoreRequest";
  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The ID of the Worker whose Qualification is being updated.</p>
   */
  WorkerId: string | undefined;
}

export namespace GetQualificationScoreRequest {
  export const filterSensitiveLog = (
    obj: GetQualificationScoreRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQualificationScoreRequest =>
    __isa(o, "GetQualificationScoreRequest");
}

export interface GetQualificationScoreResponse {
  __type?: "GetQualificationScoreResponse";
  /**
   * <p> The Qualification data structure of the Qualification
   *             assigned to a user, including the Qualification type and the value
   *             (score).
   *         </p>
   */
  Qualification?: Qualification;
}

export namespace GetQualificationScoreResponse {
  export const filterSensitiveLog = (
    obj: GetQualificationScoreResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQualificationScoreResponse =>
    __isa(o, "GetQualificationScoreResponse");
}

export interface GetQualificationTypeRequest {
  __type?: "GetQualificationTypeRequest";
  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId: string | undefined;
}

export namespace GetQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: GetQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQualificationTypeRequest =>
    __isa(o, "GetQualificationTypeRequest");
}

export interface GetQualificationTypeResponse {
  __type?: "GetQualificationTypeResponse";
  /**
   * <p> The returned Qualification Type</p>
   */
  QualificationType?: QualificationType;
}

export namespace GetQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: GetQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetQualificationTypeResponse =>
    __isa(o, "GetQualificationTypeResponse");
}

/**
 * <p> The HIT data structure represents a single HIT, including
 *             all the information necessary for a Worker to accept and complete the
 *             HIT.</p>
 */
export interface HIT {
  __type?: "HIT";
  /**
   * <p> The length of time, in seconds, that a Worker has to
   *             complete the HIT after accepting it.</p>
   */
  AssignmentDurationInSeconds?: number;

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
   * <p> The date and time the HIT was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p> A general description of the HIT.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the HIT expires.</p>
   */
  Expiration?: Date;

  /**
   * <p> The ID of the HIT Group of this HIT.</p>
   */
  HITGroupId?: string;

  /**
   * <p> A unique identifier for the HIT.</p>
   */
  HITId?: string;

  /**
   * <p> The ID of the HIT Layout of this HIT.</p>
   */
  HITLayoutId?: string;

  /**
   * <p> Indicates the review status of the HIT. Valid Values are
   *             NotReviewed | MarkedForReview | ReviewedAppropriate |
   *             ReviewedInappropriate.</p>
   */
  HITReviewStatus?: HITReviewStatus | string;

  /**
   * <p>The status of the HIT and its assignments. Valid Values are
   *             Assignable | Unassignable | Reviewable | Reviewing | Disposed.
   *         </p>
   */
  HITStatus?: HITStatus | string;

  /**
   * <p>The ID of the HIT type of this HIT</p>
   */
  HITTypeId?: string;

  /**
   * <p> One or more words or phrases that describe the HIT,
   *             separated by commas. Search terms similar to the keywords of a HIT
   *             are more likely to have the HIT in the search results.</p>
   */
  Keywords?: string;

  /**
   * <p>The number of times the HIT can be accepted and completed
   *             before the HIT becomes unavailable.
   *         </p>
   */
  MaxAssignments?: number;

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

  /**
   * <p> The number of assignments for this HIT that are being
   *             previewed or have been accepted by Workers, but have not yet been
   *             submitted, returned, or abandoned.</p>
   */
  NumberOfAssignmentsPending?: number;

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
   * <p> The data the Worker completing the HIT uses produce the
   *             results. This is either either a QuestionForm, HTMLQuestion or an
   *             ExternalQuestion data structure.</p>
   */
  Question?: string;

  /**
   * <p> An arbitrary data field the Requester who created the HIT
   *             can use. This field is visible only to the creator of the HIT.</p>
   */
  RequesterAnnotation?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  Reward?: string;

  /**
   * <p> The title of the HIT.</p>
   */
  Title?: string;
}

export namespace HIT {
  export const filterSensitiveLog = (obj: HIT): any => ({
    ...obj
  });
  export const isa = (o: any): o is HIT => __isa(o, "HIT");
}

export enum HITAccessActions {
  Accept = "Accept",
  DiscoverPreviewAndAccept = "DiscoverPreviewAndAccept",
  PreviewAndAccept = "PreviewAndAccept"
}

/**
 * <p> The HITLayoutParameter data structure defines parameter
 *             values used with a HITLayout. A HITLayout is a reusable Amazon
 *             Mechanical Turk project template used to provide Human Intelligence
 *             Task (HIT) question data for CreateHIT.
 *         </p>
 */
export interface HITLayoutParameter {
  __type?: "HITLayoutParameter";
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

export namespace HITLayoutParameter {
  export const filterSensitiveLog = (obj: HITLayoutParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is HITLayoutParameter =>
    __isa(o, "HITLayoutParameter");
}

export enum HITReviewStatus {
  MarkedForReview = "MarkedForReview",
  NotReviewed = "NotReviewed",
  ReviewedAppropriate = "ReviewedAppropriate",
  ReviewedInappropriate = "ReviewedInappropriate"
}

export enum HITStatus {
  Assignable = "Assignable",
  Disposed = "Disposed",
  Reviewable = "Reviewable",
  Reviewing = "Reviewing",
  Unassignable = "Unassignable"
}

export interface ListAssignmentsForHITRequest {
  __type?: "ListAssignmentsForHITRequest";
  /**
   * <p>The status of the assignments to return: Submitted | Approved
   *             | Rejected</p>
   */
  AssignmentStatuses?: (AssignmentStatus | string)[];

  /**
   * <p>The ID of the HIT.</p>
   */
  HITId: string | undefined;

  MaxResults?: number;
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;
}

export namespace ListAssignmentsForHITRequest {
  export const filterSensitiveLog = (
    obj: ListAssignmentsForHITRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssignmentsForHITRequest =>
    __isa(o, "ListAssignmentsForHITRequest");
}

export interface ListAssignmentsForHITResponse {
  __type?: "ListAssignmentsForHITResponse";
  /**
   * <p> The collection of Assignment data structures returned by
   *             this call.</p>
   */
  Assignments?: Assignment[];

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
}

export namespace ListAssignmentsForHITResponse {
  export const filterSensitiveLog = (
    obj: ListAssignmentsForHITResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAssignmentsForHITResponse =>
    __isa(o, "ListAssignmentsForHITResponse");
}

export interface ListBonusPaymentsRequest {
  __type?: "ListBonusPaymentsRequest";
  /**
   * <p>The ID of the assignment associated with the bonus payments
   *             to retrieve. If specified, only bonus payments for the given
   *             assignment are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  AssignmentId?: string;

  /**
   * <p>The ID of the HIT associated with the bonus payments to
   *             retrieve. If not specified, all bonus payments for all assignments
   *             for the given HIT are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   */
  HITId?: string;

  MaxResults?: number;
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;
}

export namespace ListBonusPaymentsRequest {
  export const filterSensitiveLog = (obj: ListBonusPaymentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBonusPaymentsRequest =>
    __isa(o, "ListBonusPaymentsRequest");
}

export interface ListBonusPaymentsResponse {
  __type?: "ListBonusPaymentsResponse";
  /**
   * <p>A successful request to the ListBonusPayments operation
   *             returns a list of BonusPayment objects.
   *         </p>
   */
  BonusPayments?: BonusPayment[];

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The number of bonus payments on this page in the filtered
   *             results list, equivalent to the number of bonus payments being
   *             returned by this call.
   *         </p>
   */
  NumResults?: number;
}

export namespace ListBonusPaymentsResponse {
  export const filterSensitiveLog = (obj: ListBonusPaymentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBonusPaymentsResponse =>
    __isa(o, "ListBonusPaymentsResponse");
}

export interface ListHITsForQualificationTypeRequest {
  __type?: "ListHITsForQualificationTypeRequest";
  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             The ID of the Qualification type to use when querying HITs.
   *         </p>
   */
  QualificationTypeId: string | undefined;
}

export namespace ListHITsForQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: ListHITsForQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHITsForQualificationTypeRequest =>
    __isa(o, "ListHITsForQualificationTypeRequest");
}

export interface ListHITsForQualificationTypeResponse {
  __type?: "ListHITsForQualificationTypeResponse";
  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];

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
}

export namespace ListHITsForQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: ListHITsForQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHITsForQualificationTypeResponse =>
    __isa(o, "ListHITsForQualificationTypeResponse");
}

export interface ListHITsRequest {
  __type?: "ListHITsRequest";
  MaxResults?: number;
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;
}

export namespace ListHITsRequest {
  export const filterSensitiveLog = (obj: ListHITsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHITsRequest =>
    __isa(o, "ListHITsRequest");
}

export interface ListHITsResponse {
  __type?: "ListHITsResponse";
  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];

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
}

export namespace ListHITsResponse {
  export const filterSensitiveLog = (obj: ListHITsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHITsResponse =>
    __isa(o, "ListHITsResponse");
}

export interface ListQualificationRequestsRequest {
  __type?: "ListQualificationRequestsRequest";
  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the QualificationType.</p>
   */
  QualificationTypeId?: string;
}

export namespace ListQualificationRequestsRequest {
  export const filterSensitiveLog = (
    obj: ListQualificationRequestsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQualificationRequestsRequest =>
    __isa(o, "ListQualificationRequestsRequest");
}

export interface ListQualificationRequestsResponse {
  __type?: "ListQualificationRequestsResponse";
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The number of Qualification requests on this page in the filtered results list,
   *             equivalent to the number of Qualification requests being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p>The Qualification request. The response includes one
   *             QualificationRequest element
   *             for each Qualification request returned
   *             by the query.</p>
   */
  QualificationRequests?: QualificationRequest[];
}

export namespace ListQualificationRequestsResponse {
  export const filterSensitiveLog = (
    obj: ListQualificationRequestsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQualificationRequestsResponse =>
    __isa(o, "ListQualificationRequestsResponse");
}

export interface ListQualificationTypesRequest {
  __type?: "ListQualificationTypesRequest";
  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p> Specifies that only Qualification types that the Requester
   *             created are returned. If false, the operation returns all
   *             Qualification types.
   *         </p>
   */
  MustBeOwnedByCaller?: boolean;

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
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> A text query against all of the searchable attributes of
   *             Qualification types.
   *         </p>
   */
  Query?: string;
}

export namespace ListQualificationTypesRequest {
  export const filterSensitiveLog = (
    obj: ListQualificationTypesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQualificationTypesRequest =>
    __isa(o, "ListQualificationTypesRequest");
}

export interface ListQualificationTypesResponse {
  __type?: "ListQualificationTypesResponse";
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p> The number of Qualification types on this page in the
   *             filtered results list, equivalent to the number of types this
   *             operation returns.
   *         </p>
   */
  NumResults?: number;

  /**
   * <p> The list of QualificationType elements returned by the
   *             query.
   *         </p>
   */
  QualificationTypes?: QualificationType[];
}

export namespace ListQualificationTypesResponse {
  export const filterSensitiveLog = (
    obj: ListQualificationTypesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQualificationTypesResponse =>
    __isa(o, "ListQualificationTypesResponse");
}

export interface ListReviewableHITsRequest {
  __type?: "ListReviewableHITsRequest";
  /**
   * <p>
   *             The ID of the HIT type of the HITs to consider for the query.
   *             If not specified, all HITs for the Reviewer are considered
   *         </p>
   */
  HITTypeId?: string;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p>
   *             Can be either <code>Reviewable</code> or <code>Reviewing</code>.
   *             Reviewable is the default value.
   *         </p>
   */
  Status?: ReviewableHITStatus | string;
}

export namespace ListReviewableHITsRequest {
  export const filterSensitiveLog = (obj: ListReviewableHITsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReviewableHITsRequest =>
    __isa(o, "ListReviewableHITsRequest");
}

export interface ListReviewableHITsResponse {
  __type?: "ListReviewableHITsResponse";
  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: HIT[];

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
}

export namespace ListReviewableHITsResponse {
  export const filterSensitiveLog = (obj: ListReviewableHITsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReviewableHITsResponse =>
    __isa(o, "ListReviewableHITsResponse");
}

export interface ListReviewPolicyResultsForHITRequest {
  __type?: "ListReviewPolicyResultsForHITRequest";
  /**
   * <p>The unique identifier of the HIT to retrieve review results for.</p>
   */
  HITId: string | undefined;

  /**
   * <p>Limit the number of results returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;

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
}

export namespace ListReviewPolicyResultsForHITRequest {
  export const filterSensitiveLog = (
    obj: ListReviewPolicyResultsForHITRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReviewPolicyResultsForHITRequest =>
    __isa(o, "ListReviewPolicyResultsForHITRequest");
}

export interface ListReviewPolicyResultsForHITResponse {
  __type?: "ListReviewPolicyResultsForHITResponse";
  /**
   * <p> The name of the Assignment-level Review Policy. This
   *             contains only the PolicyName element.
   *         </p>
   */
  AssignmentReviewPolicy?: ReviewPolicy;

  /**
   * <p> Contains both ReviewResult and ReviewAction elements for an
   *             Assignment.
   *         </p>
   */
  AssignmentReviewReport?: ReviewReport;

  /**
   * <p>The HITId of the HIT for which results have been returned.</p>
   */
  HITId?: string;

  /**
   * <p>The name of the HIT-level Review Policy. This contains only
   *             the PolicyName element.</p>
   */
  HITReviewPolicy?: ReviewPolicy;

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

export namespace ListReviewPolicyResultsForHITResponse {
  export const filterSensitiveLog = (
    obj: ListReviewPolicyResultsForHITResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListReviewPolicyResultsForHITResponse =>
    __isa(o, "ListReviewPolicyResultsForHITResponse");
}

export interface ListWorkerBlocksRequest {
  __type?: "ListWorkerBlocksRequest";
  MaxResults?: number;
  /**
   * <p>Pagination token</p>
   */
  NextToken?: string;
}

export namespace ListWorkerBlocksRequest {
  export const filterSensitiveLog = (obj: ListWorkerBlocksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkerBlocksRequest =>
    __isa(o, "ListWorkerBlocksRequest");
}

export interface ListWorkerBlocksResponse {
  __type?: "ListWorkerBlocksResponse";
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

export namespace ListWorkerBlocksResponse {
  export const filterSensitiveLog = (obj: ListWorkerBlocksResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkerBlocksResponse =>
    __isa(o, "ListWorkerBlocksResponse");
}

export interface ListWorkersWithQualificationTypeRequest {
  __type?: "ListWorkersWithQualificationTypeRequest";
  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

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
}

export namespace ListWorkersWithQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: ListWorkersWithQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkersWithQualificationTypeRequest =>
    __isa(o, "ListWorkersWithQualificationTypeRequest");
}

export interface ListWorkersWithQualificationTypeResponse {
  __type?: "ListWorkersWithQualificationTypeResponse";
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

export namespace ListWorkersWithQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: ListWorkersWithQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkersWithQualificationTypeResponse =>
    __isa(o, "ListWorkersWithQualificationTypeResponse");
}

/**
 * <p>The Locale data structure represents a geographical region or location.</p>
 */
export interface Locale {
  __type?: "Locale";
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

export namespace Locale {
  export const filterSensitiveLog = (obj: Locale): any => ({
    ...obj
  });
  export const isa = (o: any): o is Locale => __isa(o, "Locale");
}

/**
 * <p>The NotificationSpecification data structure describes a HIT
 *             event notification for a HIT type.</p>
 */
export interface NotificationSpecification {
  __type?: "NotificationSpecification";
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
   * <p> The list of events that should cause notifications to be
   *             sent. Valid Values: AssignmentAccepted | AssignmentAbandoned |
   *             AssignmentReturned | AssignmentSubmitted | AssignmentRejected |
   *             AssignmentApproved | HITCreated | HITExtended | HITDisposed |
   *             HITReviewable | HITExpired | Ping. The Ping event is only valid for
   *             the SendTestEventNotification operation.
   *         </p>
   */
  EventTypes: (EventType | string)[] | undefined;

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
}

export namespace NotificationSpecification {
  export const filterSensitiveLog = (obj: NotificationSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationSpecification =>
    __isa(o, "NotificationSpecification");
}

export enum NotificationTransport {
  Email = "Email",
  SNS = "SNS",
  SQS = "SQS"
}

export enum NotifyWorkersFailureCode {
  HardFailure = "HardFailure",
  SoftFailure = "SoftFailure"
}

/**
 * <p> When MTurk encounters an issue with notifying the Workers
 *             you specified, it returns back this object with failure details.
 *         </p>
 */
export interface NotifyWorkersFailureStatus {
  __type?: "NotifyWorkersFailureStatus";
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

export namespace NotifyWorkersFailureStatus {
  export const filterSensitiveLog = (obj: NotifyWorkersFailureStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyWorkersFailureStatus =>
    __isa(o, "NotifyWorkersFailureStatus");
}

export interface NotifyWorkersRequest {
  __type?: "NotifyWorkersRequest";
  /**
   * <p>The text of the email message to send. Can include up to
   *             4,096 characters</p>
   */
  MessageText: string | undefined;

  /**
   * <p>The subject line of the email message to send. Can include up
   *             to 200 characters.</p>
   */
  Subject: string | undefined;

  /**
   * <p>A list of Worker IDs you wish to notify. You
   *             can notify upto
   *             100 Workers at a time.</p>
   */
  WorkerIds: string[] | undefined;
}

export namespace NotifyWorkersRequest {
  export const filterSensitiveLog = (obj: NotifyWorkersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyWorkersRequest =>
    __isa(o, "NotifyWorkersRequest");
}

export interface NotifyWorkersResponse {
  __type?: "NotifyWorkersResponse";
  /**
   * <p> When MTurk sends notifications to the list of Workers, it
   *             returns back any failures it encounters in this list of
   *             NotifyWorkersFailureStatus objects.
   *         </p>
   */
  NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[];
}

export namespace NotifyWorkersResponse {
  export const filterSensitiveLog = (obj: NotifyWorkersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyWorkersResponse =>
    __isa(o, "NotifyWorkersResponse");
}

/**
 * <p> This data structure is the data type for the AnswerKey
 *             parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
 *         </p>
 */
export interface ParameterMapEntry {
  __type?: "ParameterMapEntry";
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

export namespace ParameterMapEntry {
  export const filterSensitiveLog = (obj: ParameterMapEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterMapEntry =>
    __isa(o, "ParameterMapEntry");
}

/**
 * <p> Name of the parameter from the Review policy.
 *         </p>
 */
export interface PolicyParameter {
  __type?: "PolicyParameter";
  /**
   * <p> Name of the parameter from the list of Review Polices.
   *         </p>
   */
  Key?: string;

  /**
   * <p> List of ParameterMapEntry objects.
   *         </p>
   */
  MapEntries?: ParameterMapEntry[];

  /**
   * <p> The list of values of the Parameter</p>
   */
  Values?: string[];
}

export namespace PolicyParameter {
  export const filterSensitiveLog = (obj: PolicyParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyParameter =>
    __isa(o, "PolicyParameter");
}

/**
 * <p>The Qualification data structure represents a Qualification
 *             assigned to a user, including the Qualification type and the value
 *             (score).</p>
 */
export interface Qualification {
  __type?: "Qualification";
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
   * <p> The ID of the Qualification type for the Qualification.</p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The status of the Qualification. Valid values are Granted |
   *             Revoked.</p>
   */
  Status?: QualificationStatus | string;

  /**
   * <p> The ID of the Worker who possesses the Qualification.
   *         </p>
   */
  WorkerId?: string;
}

export namespace Qualification {
  export const filterSensitiveLog = (obj: Qualification): any => ({
    ...obj
  });
  export const isa = (o: any): o is Qualification => __isa(o, "Qualification");
}

/**
 * <p> The QualificationRequest data structure represents a request
 *             a Worker has made for a Qualification.
 *         </p>
 */
export interface QualificationRequest {
  __type?: "QualificationRequest";
  /**
   * <p> The Worker's answers for the Qualification type's test
   *             contained in a QuestionFormAnswers document, if the type has a test
   *             and the Worker has submitted answers. If the Worker does not provide
   *             any answers, Answer may be empty.
   *         </p>
   */
  Answer?: string;

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
   * <p>The date and time the Qualification request had a status of
   *             Submitted. This is either the time the Worker submitted answers for a
   *             Qualification test, or the time the Worker requested the
   *             Qualification if the Qualification type does not have a test.
   *         </p>
   */
  SubmitTime?: Date;

  /**
   * <p> The contents of the Qualification test that was presented to
   *             the Worker, if the type has a test and the Worker has submitted
   *             answers. This value is identical to the QuestionForm associated with
   *             the Qualification type at the time the Worker requests the
   *             Qualification.</p>
   */
  Test?: string;

  /**
   * <p> The ID of the Worker requesting the Qualification.</p>
   */
  WorkerId?: string;
}

export namespace QualificationRequest {
  export const filterSensitiveLog = (obj: QualificationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is QualificationRequest =>
    __isa(o, "QualificationRequest");
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
  __type?: "QualificationRequirement";
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
   * <p> The ID of the Qualification type for the requirement.</p>
   */
  QualificationTypeId: string | undefined;

  /**
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
}

export namespace QualificationRequirement {
  export const filterSensitiveLog = (obj: QualificationRequirement): any => ({
    ...obj
  });
  export const isa = (o: any): o is QualificationRequirement =>
    __isa(o, "QualificationRequirement");
}

export enum QualificationStatus {
  Granted = "Granted",
  Revoked = "Revoked"
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
  __type?: "QualificationType";
  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter.</p>
   */
  AnswerKey?: string;

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

  /**
   * <p> The date and time the Qualification type was created.
   *         </p>
   */
  CreationTime?: Date;

  /**
   * <p> A long description for the Qualification type.
   *         </p>
   */
  Description?: string;

  /**
   * <p> Specifies whether the Qualification type is one that a user
   *             can request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test. This value is False for Qualifications
   *             assigned automatically by the system. Valid values are True | False.
   *         </p>
   */
  IsRequestable?: boolean;

  /**
   * <p> One or more words or phrases that describe theQualification
   *             type, separated by commas. The Keywords make the type easier to find
   *             using a search.
   *         </p>
   */
  Keywords?: string;

  /**
   * <p> The name of the Qualification type. The type name is used to
   *             identify the type, and to find the type using a Qualification type
   *             search.
   *         </p>
   */
  Name?: string;

  /**
   * <p> A unique identifier for the Qualification type. A
   *             Qualification type is given a Qualification type ID when you call the
   *             CreateQualificationType operation.
   *         </p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The status of the Qualification type. A Qualification type's
   *             status determines if users can apply to receive a Qualification of
   *             this type, and if HITs can be created with requirements based on this
   *             type. Valid values are Active | Inactive.
   *         </p>
   */
  QualificationTypeStatus?: QualificationTypeStatus | string;

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
}

export namespace QualificationType {
  export const filterSensitiveLog = (obj: QualificationType): any => ({
    ...obj
  });
  export const isa = (o: any): o is QualificationType =>
    __isa(o, "QualificationType");
}

export enum QualificationTypeStatus {
  Active = "Active",
  Inactive = "Inactive"
}

export interface RejectAssignmentRequest {
  __type?: "RejectAssignmentRequest";
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

export namespace RejectAssignmentRequest {
  export const filterSensitiveLog = (obj: RejectAssignmentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectAssignmentRequest =>
    __isa(o, "RejectAssignmentRequest");
}

export interface RejectAssignmentResponse {
  __type?: "RejectAssignmentResponse";
}

export namespace RejectAssignmentResponse {
  export const filterSensitiveLog = (obj: RejectAssignmentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectAssignmentResponse =>
    __isa(o, "RejectAssignmentResponse");
}

export interface RejectQualificationRequestRequest {
  __type?: "RejectQualificationRequestRequest";
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

export namespace RejectQualificationRequestRequest {
  export const filterSensitiveLog = (
    obj: RejectQualificationRequestRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectQualificationRequestRequest =>
    __isa(o, "RejectQualificationRequestRequest");
}

export interface RejectQualificationRequestResponse {
  __type?: "RejectQualificationRequestResponse";
}

export namespace RejectQualificationRequestResponse {
  export const filterSensitiveLog = (
    obj: RejectQualificationRequestResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectQualificationRequestResponse =>
    __isa(o, "RejectQualificationRequestResponse");
}

/**
 * <p>Your request is invalid.</p>
 */
export interface RequestError extends __SmithyException, $MetadataBearer {
  name: "RequestError";
  $fault: "client";
  Message?: string;
  TurkErrorCode?: string;
}

export namespace RequestError {
  export const filterSensitiveLog = (obj: RequestError): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestError => __isa(o, "RequestError");
}

export enum ReviewableHITStatus {
  Reviewable = "Reviewable",
  Reviewing = "Reviewing"
}

/**
 * <p> Both the AssignmentReviewReport and the HITReviewReport
 *             elements contains the ReviewActionDetail data structure. This
 *             structure is returned multiple times for each action specified in the
 *             Review Policy.
 *         </p>
 */
export interface ReviewActionDetail {
  __type?: "ReviewActionDetail";
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
   * <p> The date when the action was completed.</p>
   */
  CompleteTime?: Date;

  /**
   * <p> Present only when the Results have a FAILED Status.</p>
   */
  ErrorCode?: string;

  /**
   * <p> A description of the outcome of the review.</p>
   */
  Result?: string;

  /**
   * <p> The current disposition of the action: INTENDED, SUCCEEDED,
   *             FAILED, or CANCELLED.
   *         </p>
   */
  Status?: ReviewActionStatus | string;

  /**
   * <p> The specific HITId or AssignmentID targeted by the action.</p>
   */
  TargetId?: string;

  /**
   * <p> The type of object in TargetId.</p>
   */
  TargetType?: string;
}

export namespace ReviewActionDetail {
  export const filterSensitiveLog = (obj: ReviewActionDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReviewActionDetail =>
    __isa(o, "ReviewActionDetail");
}

export enum ReviewActionStatus {
  Cancelled = "Cancelled",
  Failed = "Failed",
  Intended = "Intended",
  Succeeded = "Succeeded"
}

/**
 * <p> HIT Review Policy data structures represent HIT review
 *             policies, which you specify when you create a HIT.
 *         </p>
 */
export interface ReviewPolicy {
  __type?: "ReviewPolicy";
  /**
   * <p>Name of the parameter from the Review policy.</p>
   */
  Parameters?: PolicyParameter[];

  /**
   * <p> Name of a Review Policy: SimplePlurality/2011-09-01 or
   *             ScoreMyKnownAnswers/2011-09-01
   *         </p>
   */
  PolicyName: string | undefined;
}

export namespace ReviewPolicy {
  export const filterSensitiveLog = (obj: ReviewPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReviewPolicy => __isa(o, "ReviewPolicy");
}

export enum ReviewPolicyLevel {
  Assignment = "Assignment",
  HIT = "HIT"
}

/**
 * <p> Contains both ReviewResult and ReviewAction elements for a
 *             particular HIT.
 *         </p>
 */
export interface ReviewReport {
  __type?: "ReviewReport";
  /**
   * <p> A list of ReviewAction objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewActions?: ReviewActionDetail[];

  /**
   * <p> A list of ReviewResults objects for each action specified in
   *             the Review Policy.
   *         </p>
   */
  ReviewResults?: ReviewResultDetail[];
}

export namespace ReviewReport {
  export const filterSensitiveLog = (obj: ReviewReport): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReviewReport => __isa(o, "ReviewReport");
}

/**
 * <p> This data structure is returned multiple times for each
 *             result specified in the Review Policy.
 *         </p>
 */
export interface ReviewResultDetail {
  __type?: "ReviewResultDetail";
  /**
   * <p> A unique identifier of the Review action result.
   *         </p>
   */
  ActionId?: string;

  /**
   * <p> Key identifies the particular piece of reviewed information.
   *         </p>
   */
  Key?: string;

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
   * <p> The values of Key provided by the review policies you have
   *             selected.
   *         </p>
   */
  Value?: string;
}

export namespace ReviewResultDetail {
  export const filterSensitiveLog = (obj: ReviewResultDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReviewResultDetail =>
    __isa(o, "ReviewResultDetail");
}

export interface SendBonusRequest {
  __type?: "SendBonusRequest";
  /**
   * <p>The ID of the assignment for which this bonus is paid.</p>
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and
   *             "101.42" represents $101.42 USD). Do not include currency symbols or currency codes.
   *         </p>
   */
  BonusAmount: string | undefined;

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

  /**
   * <p>The ID of the Worker being paid the bonus.</p>
   */
  WorkerId: string | undefined;
}

export namespace SendBonusRequest {
  export const filterSensitiveLog = (obj: SendBonusRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendBonusRequest =>
    __isa(o, "SendBonusRequest");
}

export interface SendBonusResponse {
  __type?: "SendBonusResponse";
}

export namespace SendBonusResponse {
  export const filterSensitiveLog = (obj: SendBonusResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendBonusResponse =>
    __isa(o, "SendBonusResponse");
}

export interface SendTestEventNotificationRequest {
  __type?: "SendTestEventNotificationRequest";
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

export namespace SendTestEventNotificationRequest {
  export const filterSensitiveLog = (
    obj: SendTestEventNotificationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendTestEventNotificationRequest =>
    __isa(o, "SendTestEventNotificationRequest");
}

export interface SendTestEventNotificationResponse {
  __type?: "SendTestEventNotificationResponse";
}

export namespace SendTestEventNotificationResponse {
  export const filterSensitiveLog = (
    obj: SendTestEventNotificationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendTestEventNotificationResponse =>
    __isa(o, "SendTestEventNotificationResponse");
}

/**
 * <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 */
export interface ServiceFault extends __SmithyException, $MetadataBearer {
  name: "ServiceFault";
  $fault: "server";
  Message?: string;
  TurkErrorCode?: string;
}

export namespace ServiceFault {
  export const filterSensitiveLog = (obj: ServiceFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceFault => __isa(o, "ServiceFault");
}

export interface UpdateExpirationForHITRequest {
  __type?: "UpdateExpirationForHITRequest";
  /**
   * <p>
   *             The date and time at which you want the HIT to expire
   *         </p>
   */
  ExpireAt: Date | undefined;

  /**
   * <p>
   *             The HIT to update.
   *         </p>
   */
  HITId: string | undefined;
}

export namespace UpdateExpirationForHITRequest {
  export const filterSensitiveLog = (
    obj: UpdateExpirationForHITRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateExpirationForHITRequest =>
    __isa(o, "UpdateExpirationForHITRequest");
}

export interface UpdateExpirationForHITResponse {
  __type?: "UpdateExpirationForHITResponse";
}

export namespace UpdateExpirationForHITResponse {
  export const filterSensitiveLog = (
    obj: UpdateExpirationForHITResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateExpirationForHITResponse =>
    __isa(o, "UpdateExpirationForHITResponse");
}

export interface UpdateHITReviewStatusRequest {
  __type?: "UpdateHITReviewStatusRequest";
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

export namespace UpdateHITReviewStatusRequest {
  export const filterSensitiveLog = (
    obj: UpdateHITReviewStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHITReviewStatusRequest =>
    __isa(o, "UpdateHITReviewStatusRequest");
}

export interface UpdateHITReviewStatusResponse {
  __type?: "UpdateHITReviewStatusResponse";
}

export namespace UpdateHITReviewStatusResponse {
  export const filterSensitiveLog = (
    obj: UpdateHITReviewStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHITReviewStatusResponse =>
    __isa(o, "UpdateHITReviewStatusResponse");
}

export interface UpdateHITTypeOfHITRequest {
  __type?: "UpdateHITTypeOfHITRequest";
  /**
   * <p>The HIT to update.</p>
   */
  HITId: string | undefined;

  /**
   * <p>The ID of the new HIT type.</p>
   */
  HITTypeId: string | undefined;
}

export namespace UpdateHITTypeOfHITRequest {
  export const filterSensitiveLog = (obj: UpdateHITTypeOfHITRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHITTypeOfHITRequest =>
    __isa(o, "UpdateHITTypeOfHITRequest");
}

export interface UpdateHITTypeOfHITResponse {
  __type?: "UpdateHITTypeOfHITResponse";
}

export namespace UpdateHITTypeOfHITResponse {
  export const filterSensitiveLog = (obj: UpdateHITTypeOfHITResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateHITTypeOfHITResponse =>
    __isa(o, "UpdateHITTypeOfHITResponse");
}

export interface UpdateNotificationSettingsRequest {
  __type?: "UpdateNotificationSettingsRequest";
  /**
   * <p>
   *             Specifies whether notifications are sent for HITs of this HIT type,
   *             according to the notification specification.
   *             You must specify either the Notification parameter or the Active parameter
   *             for the call to UpdateNotificationSettings to succeed.
   *         </p>
   */
  Active?: boolean;

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
}

export namespace UpdateNotificationSettingsRequest {
  export const filterSensitiveLog = (
    obj: UpdateNotificationSettingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNotificationSettingsRequest =>
    __isa(o, "UpdateNotificationSettingsRequest");
}

export interface UpdateNotificationSettingsResponse {
  __type?: "UpdateNotificationSettingsResponse";
}

export namespace UpdateNotificationSettingsResponse {
  export const filterSensitiveLog = (
    obj: UpdateNotificationSettingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNotificationSettingsResponse =>
    __isa(o, "UpdateNotificationSettingsResponse");
}

export interface UpdateQualificationTypeRequest {
  __type?: "UpdateQualificationTypeRequest";
  /**
   * <p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>
   */
  AnswerKey?: string;

  /**
   * <p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>
   */
  AutoGrantedValue?: number;

  /**
   * <p>The new description of the Qualification type.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the Qualification type to update.</p>
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The new status of the Qualification type - Active | Inactive</p>
   */
  QualificationTypeStatus?: QualificationTypeStatus | string;

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
   * <p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>
   */
  Test?: string;

  /**
   * <p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>
   */
  TestDurationInSeconds?: number;
}

export namespace UpdateQualificationTypeRequest {
  export const filterSensitiveLog = (
    obj: UpdateQualificationTypeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateQualificationTypeRequest =>
    __isa(o, "UpdateQualificationTypeRequest");
}

export interface UpdateQualificationTypeResponse {
  __type?: "UpdateQualificationTypeResponse";
  /**
   * <p> Contains a QualificationType data structure.</p>
   */
  QualificationType?: QualificationType;
}

export namespace UpdateQualificationTypeResponse {
  export const filterSensitiveLog = (
    obj: UpdateQualificationTypeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateQualificationTypeResponse =>
    __isa(o, "UpdateQualificationTypeResponse");
}

/**
 * <p> The WorkerBlock data structure represents a Worker who has
 *             been blocked. It has two elements: the WorkerId and the Reason for
 *             the block.
 *         </p>
 */
export interface WorkerBlock {
  __type?: "WorkerBlock";
  /**
   * <p> A message explaining the reason the Worker was blocked.
   *         </p>
   */
  Reason?: string;

  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;
}

export namespace WorkerBlock {
  export const filterSensitiveLog = (obj: WorkerBlock): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkerBlock => __isa(o, "WorkerBlock");
}
