import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>User does not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ChoiceReason {
  ARCHITECTURE_CONSTRAINTS = "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES = "BUSINESS_PRIORITIES",
  NONE = "NONE",
  OTHER = "OTHER",
  OUT_OF_SCOPE = "OUT_OF_SCOPE",
}

export enum ChoiceStatus {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  SELECTED = "SELECTED",
  UNSELECTED = "UNSELECTED",
}

/**
 * <p>A choice that has been answered on a question in your workload.</p>
 */
export interface ChoiceAnswer {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   */
  Status?: ChoiceStatus | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;

  /**
   * <p>The notes associated with a choice.</p>
   */
  Notes?: string;
}

export namespace ChoiceAnswer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChoiceAnswer): any => ({
    ...obj,
  });
}

/**
 * <p>A choice available to answer question.</p>
 */
export interface Choice {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The title of a choice.</p>
   */
  Title?: string;

  /**
   * <p>The description of a choice.</p>
   */
  Description?: string;
}

export namespace Choice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Choice): any => ({
    ...obj,
  });
}

export enum AnswerReason {
  ARCHITECTURE_CONSTRAINTS = "ARCHITECTURE_CONSTRAINTS",
  BUSINESS_PRIORITIES = "BUSINESS_PRIORITIES",
  NONE = "NONE",
  OTHER = "OTHER",
  OUT_OF_SCOPE = "OUT_OF_SCOPE",
}

export enum Risk {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
  NOT_APPLICABLE = "NOT_APPLICABLE",
  UNANSWERED = "UNANSWERED",
}

/**
 * <p>An answer of the question.</p>
 */
export interface Answer {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>The description of the question.</p>
   */
  QuestionDescription?: string;

  /**
   * <p>The improvement plan URL for a question.</p>
   *         <p>This value is only available if the question has been answered.</p>
   */
  ImprovementPlanUrl?: string;

  /**
   * <p>The helpful resource URL for a question.</p>
   */
  HelpfulResourceUrl?: string;

  /**
   * <p>List of choices available for a question.</p>
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   */
  ChoiceAnswers?: ChoiceAnswer[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The reason why the question is not applicable to your workload.</p>
   */
  Reason?: AnswerReason | string;
}

export namespace Answer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Answer): any => ({
    ...obj,
  });
}

/**
 * <p>A choice summary that has been answered on a question in your workload.</p>
 */
export interface ChoiceAnswerSummary {
  /**
   * <p>The ID of a choice.</p>
   */
  ChoiceId?: string;

  /**
   * <p>The status of a choice.</p>
   */
  Status?: ChoiceStatus | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;
}

export namespace ChoiceAnswerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChoiceAnswerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An answer summary of a lens review in a workload.</p>
 */
export interface AnswerSummary {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>List of choices available for a question.</p>
   */
  Choices?: Choice[];

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[];

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: AnswerReason | string;
}

export namespace AnswerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnswerSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Input to associate lens reviews.</p>
 */
export interface AssociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload.</p>
   *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAliases: string[] | undefined;
}

export namespace AssociateLensesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLensesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>There is a problem with the AWS Well-Architected Tool API service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   */
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   */
  QuotaCode?: string;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
   */
  ServiceCode?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name for which validation failed.</p>
   */
  Name: string | undefined;

  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The user input is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>The reason why the request failed validation.</p>
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * <p>The fields that caused the error, if applicable.</p>
   */
  Fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>A list of choices to be updated.</p>
 */
export interface ChoiceUpdate {
  /**
   * <p>The status of a choice.</p>
   */
  Status: ChoiceStatus | string | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   */
  Reason?: ChoiceReason | string;

  /**
   * <p>The notes associated with a choice.</p>
   */
  Notes?: string;
}

export namespace ChoiceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChoiceUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Input for milestone creation.</p>
 */
export interface CreateMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

export namespace CreateMilestoneInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMilestoneInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a create milestone call.</p>
 */
export interface CreateMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

export namespace CreateMilestoneOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMilestoneOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The user has reached their resource quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>Description of the error.</p>
   */
  Message: string | undefined;

  /**
   * <p>Identifier of the resource affected.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of the resource affected.</p>
   */
  ResourceType?: string;

  /**
   * <p>Service Quotas requirement to identify originating quota.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Service Quotas requirement to identify originating service.</p>
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export enum WorkloadEnvironment {
  PREPRODUCTION = "PREPRODUCTION",
  PRODUCTION = "PRODUCTION",
}

/**
 * <p>Input for workload creation.</p>
 */
export interface CreateWorkloadInput {
  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName: string | undefined;

  /**
   * <p>The description for the workload.</p>
   */
  Description: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment: WorkloadEnvironment | string | undefined;

  /**
   * <p>The list of AWS account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of AWS Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-AWS Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner: string | undefined;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to be associated with the workload.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateWorkloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkloadInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a create workload call.</p>
 */
export interface CreateWorkloadOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn?: string;
}

export namespace CreateWorkloadOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkloadOutput): any => ({
    ...obj,
  });
}

export enum PermissionType {
  CONTRIBUTOR = "CONTRIBUTOR",
  READONLY = "READONLY",
}

/**
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The AWS account ID or IAM role with which the workload is shared.</p>
   */
  SharedWith: string | undefined;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType: PermissionType | string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

export namespace CreateWorkloadShareInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkloadShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for Create Workload Share</p>
 */
export interface CreateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;
}

export namespace CreateWorkloadShareOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkloadShareOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for workload deletion.</p>
 */
export interface DeleteWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

export namespace DeleteWorkloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkloadInput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for Delete Workload Share</p>
 */
export interface DeleteWorkloadShareInput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

export namespace DeleteWorkloadShareInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkloadShareInput): any => ({
    ...obj,
  });
}

export enum DifferenceStatus {
  DELETED = "DELETED",
  NEW = "NEW",
  UPDATED = "UPDATED",
}

/**
 * <p>Input to disassociate lens reviews.</p>
 */
export interface DisassociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload.</p>
   *         <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAliases: string[] | undefined;
}

export namespace DisassociateLensesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLensesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to get answer.</p>
 */
export interface GetAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

export namespace GetAnswerInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnswerInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a get answer call.</p>
 */
export interface GetAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>An answer of the question.</p>
   */
  Answer?: Answer;
}

export namespace GetAnswerOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnswerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to get lens review.</p>
 */
export interface GetLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

export namespace GetLensReviewInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensReviewInput): any => ({
    ...obj,
  });
}

export enum LensStatus {
  CURRENT = "CURRENT",
  DEPRECATED = "DEPRECATED",
  NOT_CURRENT = "NOT_CURRENT",
}

/**
 * <p>A pillar review summary of a lens review.</p>
 */
export interface PillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The name of the pillar.</p>
   */
  PillarName?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: { [key: string]: number };
}

export namespace PillarReviewSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PillarReviewSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A lens review of a question.</p>
 */
export interface LensReview {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   */
  LensStatus?: LensStatus | string;

  /**
   * <p>List of pillar review summaries of lens review in a workload.</p>
   */
  PillarReviewSummaries?: PillarReviewSummary[];

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: { [key: string]: number };

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace LensReview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LensReview): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a get lens review call.</p>
 */
export interface GetLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>A lens review of a question.</p>
   */
  LensReview?: LensReview;
}

export namespace GetLensReviewOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensReviewOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to get lens review report.</p>
 */
export interface GetLensReviewReportInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;
}

export namespace GetLensReviewReportInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensReviewReportInput): any => ({
    ...obj,
  });
}

/**
 * <p>A report of a lens review.</p>
 */
export interface LensReviewReport {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *         <p>This data can be used to create a PDF file.</p>
   */
  Base64String?: string;
}

export namespace LensReviewReport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LensReviewReport): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a get lens review report call.</p>
 */
export interface GetLensReviewReportOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>A report of a lens review.</p>
   */
  LensReviewReport?: LensReviewReport;
}

export namespace GetLensReviewReportOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensReviewReportOutput): any => ({
    ...obj,
  });
}

export interface GetLensVersionDifferenceInput {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   */
  BaseLensVersion: string | undefined;
}

export namespace GetLensVersionDifferenceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensVersionDifferenceInput): any => ({
    ...obj,
  });
}

/**
 * <p>A question difference return object.</p>
 */
export interface QuestionDifference {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>Indicates the type of change to the question.</p>
   */
  DifferenceStatus?: DifferenceStatus | string;
}

export namespace QuestionDifference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuestionDifference): any => ({
    ...obj,
  });
}

/**
 * <p>A pillar difference return object.</p>
 */
export interface PillarDifference {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>Indicates the type of change to the pillar.</p>
   */
  DifferenceStatus?: DifferenceStatus | string;

  /**
   * <p>List of question differences.</p>
   */
  QuestionDifferences?: QuestionDifference[];
}

export namespace PillarDifference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PillarDifference): any => ({
    ...obj,
  });
}

/**
 * <p>The differences between the base and latest versions of the lens.</p>
 */
export interface VersionDifferences {
  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   */
  PillarDifferences?: PillarDifference[];
}

export namespace VersionDifferences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersionDifferences): any => ({
    ...obj,
  });
}

export interface GetLensVersionDifferenceOutput {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The base version of the lens.</p>
   */
  BaseLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   */
  LatestLensVersion?: string;

  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   */
  VersionDifferences?: VersionDifferences;
}

export namespace GetLensVersionDifferenceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLensVersionDifferenceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to get a milestone.</p>
 */
export interface GetMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber: number | undefined;
}

export namespace GetMilestoneInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMilestoneInput): any => ({
    ...obj,
  });
}

export enum WorkloadImprovementStatus {
  COMPLETE = "COMPLETE",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_APPLICABLE = "NOT_APPLICABLE",
  NOT_STARTED = "NOT_STARTED",
  RISK_ACKNOWLEDGED = "RISK_ACKNOWLEDGED",
}

/**
 * <p>A workload return object.</p>
 */
export interface Workload {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment?: WorkloadEnvironment | string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of AWS account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of AWS Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-AWS Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  ReviewRestrictionDate?: Date;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *         <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: { [key: string]: number };

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses?: string[];

  /**
   * <p>An AWS account ID.</p>
   */
  Owner?: string;

  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>The tags associated with the workload.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Workload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workload): any => ({
    ...obj,
  });
}

/**
 * <p>A milestone return object.</p>
 */
export interface Milestone {
  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  RecordedAt?: Date;

  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

export namespace Milestone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Milestone): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a get milestone call.</p>
 */
export interface GetMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A milestone return object.</p>
   */
  Milestone?: Milestone;
}

export namespace GetMilestoneOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMilestoneOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to get a workload.</p>
 */
export interface GetWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;
}

export namespace GetWorkloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkloadInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a get workload call.</p>
 */
export interface GetWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

export namespace GetWorkloadOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkloadOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An improvement summary of a lens review in a workload.</p>
 */
export interface ImprovementSummary {
  /**
   * <p>The ID of the question.</p>
   */
  QuestionId?: string;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The title of the question.</p>
   */
  QuestionTitle?: string;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   */
  Risk?: Risk | string;

  /**
   * <p>The improvement plan URL for a question.</p>
   *         <p>This value is only available if the question has been answered.</p>
   */
  ImprovementPlanUrl?: string;
}

export namespace ImprovementSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImprovementSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A lens review summary of a workload.</p>
 */
export interface LensReviewSummary {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The status of the lens.</p>
   */
  LensStatus?: LensStatus | string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: { [key: string]: number };
}

export namespace LensReviewSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LensReviewSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A lens summary of a lens.</p>
 */
export interface LensSummary {
  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The version of the lens.</p>
   */
  LensVersion?: string;

  /**
   * <p>The full name of the lens.</p>
   */
  LensName?: string;

  /**
   * <p>The description of the lens.</p>
   */
  Description?: string;
}

export namespace LensSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LensSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Lens upgrade summary return object.</p>
 */
export interface LensUpgradeSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>The current version of the lens.</p>
   */
  CurrentLensVersion?: string;

  /**
   * <p>The latest version of the lens.</p>
   */
  LatestLensVersion?: string;
}

export namespace LensUpgradeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LensUpgradeSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list answers.</p>
 */
export interface ListAnswersInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListAnswersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnswersInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list answers call.</p>
 */
export interface ListAnswersOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>List of answer summaries of lens review in a workload.</p>
   */
  AnswerSummaries?: AnswerSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAnswersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnswersOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list lenses.</p>
 */
export interface ListLensesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListLensesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list lenses call.</p>
 */
export interface ListLensesOutput {
  /**
   * <p>List of lens summaries of available lenses.</p>
   */
  LensSummaries?: LensSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLensesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list lens review improvements.</p>
 */
export interface ListLensReviewImprovementsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *         <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListLensReviewImprovementsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensReviewImprovementsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list lens review improvements call.</p>
 */
export interface ListLensReviewImprovementsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>List of improvement summaries of lens review in a workload.</p>
   */
  ImprovementSummaries?: ImprovementSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLensReviewImprovementsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensReviewImprovementsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list lens reviews.</p>
 */
export interface ListLensReviewsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListLensReviewsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensReviewsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list lens reviews call.</p>
 */
export interface ListLensReviewsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>List of lens summaries of lens reviews of a workload.</p>
   */
  LensReviewSummaries?: LensReviewSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLensReviewsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLensReviewsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list all milestones for a workload.</p>
 */
export interface ListMilestonesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListMilestonesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMilestonesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A workload summary return object.</p>
 */
export interface WorkloadSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn?: string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>An AWS account ID.</p>
   */
  Owner?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  Lenses?: string[];

  /**
   * <p>A map from risk names to the count of how questions have that rating.</p>
   */
  RiskCounts?: { [key: string]: number };

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;
}

export namespace WorkloadSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkloadSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A milestone summary return object.</p>
 */
export interface MilestoneSummary {
  /**
   * <p>The milestone number.</p>
   *         <p>A workload can have a maximum of 100 milestones.</p>
   */
  MilestoneNumber?: number;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName?: string;

  /**
   * <p>The date and time recorded.</p>
   */
  RecordedAt?: Date;

  /**
   * <p>A workload summary return object.</p>
   */
  WorkloadSummary?: WorkloadSummary;
}

export namespace MilestoneSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MilestoneSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list milestones call.</p>
 */
export interface ListMilestonesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A list of milestone summaries.</p>
   */
  MilestoneSummaries?: MilestoneSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListMilestonesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMilestonesOutput): any => ({
    ...obj,
  });
}

export interface ListNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListNotificationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationsInput): any => ({
    ...obj,
  });
}

export enum NotificationType {
  LENS_VERSION_DEPRECATED = "LENS_VERSION_DEPRECATED",
  LENS_VERSION_UPGRADED = "LENS_VERSION_UPGRADED",
}

/**
 * <p>A notification summary return object.</p>
 */
export interface NotificationSummary {
  /**
   * <p>The type of notification.</p>
   */
  Type?: NotificationType | string;

  /**
   * <p>Summary of lens upgrade.</p>
   */
  LensUpgradeSummary?: LensUpgradeSummary;
}

export namespace NotificationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationSummary): any => ({
    ...obj,
  });
}

export interface ListNotificationsOutput {
  /**
   * <p>List of lens notification summaries in a workload.</p>
   */
  NotificationSummaries?: NotificationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListNotificationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNotificationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListShareInvitationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListShareInvitationsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A share invitation summary return object.</p>
 */
export interface ShareInvitationSummary {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>An AWS account ID.</p>
   */
  SharedBy?: string;

  /**
   * <p>The AWS account ID or IAM role with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;
}

export namespace ShareInvitationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareInvitationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Input for List Share Invitations</p>
 */
export interface ListShareInvitationsOutput {
  /**
   * <p>List of share invitation summaries in a workload.</p>
   */
  ShareInvitationSummaries?: ShareInvitationSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListShareInvitationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListShareInvitationsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn: string | undefined;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to list all workloads.</p>
 */
export interface ListWorkloadsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   */
  WorkloadNamePrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkloadsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkloadsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a list workloads call.</p>
 */
export interface ListWorkloadsOutput {
  /**
   * <p>A list of workload summaries.</p>
   */
  WorkloadSummaries?: WorkloadSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListWorkloadsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkloadsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The AWS account ID or IAM role with which the workload is shared.</p>
   */
  SharedWithPrefix?: string;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return for this request.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkloadSharesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkloadSharesInput): any => ({
    ...obj,
  });
}

export enum ShareStatus {
  ACCEPTED = "ACCEPTED",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  REVOKED = "REVOKED",
}

/**
 * <p>A workload share summary return object.</p>
 */
export interface WorkloadShareSummary {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;

  /**
   * <p>The AWS account ID or IAM role with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;
}

export namespace WorkloadShareSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkloadShareSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Input for List Workload Share</p>
 */
export interface ListWorkloadSharesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A list of workload share summaries.</p>
   */
  WorkloadShareSummaries?: WorkloadShareSummary[];

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListWorkloadSharesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkloadSharesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The share invitation.</p>
 */
export interface ShareInvitation {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;
}

export namespace ShareInvitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ShareInvitation): any => ({
    ...obj,
  });
}

export enum ShareInvitationAction {
  ACCEPT = "ACCEPT",
  REJECT = "REJECT",
}

export interface TagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   */
  WorkloadArn: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags of the resource
   *             whose keys are members of this list are removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to update answer.</p>
 */
export interface UpdateAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *         <p>The values entered replace the previously selected choices.</p>
   */
  SelectedChoices?: string[];

  /**
   * <p>A list of choices to update on a question in your workload.  The String key
   *             corresponds to the choice ID to be updated.</p>
   */
  ChoiceUpdates?: { [key: string]: ChoiceUpdate };

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   */
  IsApplicable?: boolean;

  /**
   * <p>The reason why a question is not applicable to your workload.</p>
   */
  Reason?: AnswerReason | string;
}

export namespace UpdateAnswerInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAnswerInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a update answer call.</p>
 */
export interface UpdateAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias?: string;

  /**
   * <p>An answer of the question.</p>
   */
  Answer?: Answer;
}

export namespace UpdateAnswerOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAnswerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for update lens review.</p>
 */
export interface UpdateLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   */
  LensNotes?: string;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   */
  PillarNotes?: { [key: string]: string };
}

export namespace UpdateLensReviewInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLensReviewInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of a update lens review call.</p>
 */
export interface UpdateLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A lens review of a question.</p>
   */
  LensReview?: LensReview;
}

export namespace UpdateLensReviewOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLensReviewOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for Update Share Invitation</p>
 */
export interface UpdateShareInvitationInput {
  /**
   * <p>The ID assigned to the share invitation.</p>
   */
  ShareInvitationId: string | undefined;

  /**
   * <p>Share invitation action taken by contributor.</p>
   */
  ShareInvitationAction: ShareInvitationAction | string | undefined;
}

export namespace UpdateShareInvitationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateShareInvitationInput): any => ({
    ...obj,
  });
}

export interface UpdateShareInvitationOutput {
  /**
   * <p>The updated workload share invitation.</p>
   */
  ShareInvitation?: ShareInvitation;
}

export namespace UpdateShareInvitationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateShareInvitationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to update a workload.</p>
 */
export interface UpdateWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The description for the workload.</p>
   */
  Description?: string;

  /**
   * <p>The environment for the workload.</p>
   */
  Environment?: WorkloadEnvironment | string;

  /**
   * <p>The list of AWS account IDs associated with the workload.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of AWS Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   */
  AwsRegions?: string[];

  /**
   * <p> The list of non-AWS Regions associated with the workload.</p>
   */
  NonAwsRegions?: string[];

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   */
  PillarPriorities?: string[];

  /**
   * <p>The URL of the architectural design for the workload.</p>
   */
  ArchitecturalDesign?: string;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   */
  ReviewOwner?: string;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *         <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   */
  IsReviewOwnerUpdateAcknowledged?: boolean;

  /**
   * <p>The industry type for the workload.</p>
   *         <p>If specified, must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  IndustryType?: string;

  /**
   * <p>The industry for the workload.</p>
   */
  Industry?: string;

  /**
   * <p>The notes associated with the workload.</p>
   */
  Notes?: string;

  /**
   * <p>The improvement status for a workload.</p>
   */
  ImprovementStatus?: WorkloadImprovementStatus | string;
}

export namespace UpdateWorkloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkloadInput): any => ({
    ...obj,
  });
}

/**
 * <p>Output of an update workload call.</p>
 */
export interface UpdateWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   */
  Workload?: Workload;
}

export namespace UpdateWorkloadOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkloadOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareInput {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType: PermissionType | string | undefined;
}

export namespace UpdateWorkloadShareInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkloadShareInput): any => ({
    ...obj,
  });
}

/**
 * <p>A workload share return object.</p>
 */
export interface WorkloadShare {
  /**
   * <p>The ID associated with the workload share.</p>
   */
  ShareId?: string;

  /**
   * <p>An AWS account ID.</p>
   */
  SharedBy?: string;

  /**
   * <p>The AWS account ID or IAM role with which the workload is shared.</p>
   */
  SharedWith?: string;

  /**
   * <p>Permission granted on a workload share.</p>
   */
  PermissionType?: PermissionType | string;

  /**
   * <p>The status of a workload share.</p>
   */
  Status?: ShareStatus | string;

  /**
   * <p>The name of the workload.</p>
   *         <p>The name must be unique within an account within a Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   */
  WorkloadName?: string;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;
}

export namespace WorkloadShare {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkloadShare): any => ({
    ...obj,
  });
}

/**
 * <p>Input for Update Workload Share</p>
 */
export interface UpdateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId?: string;

  /**
   * <p>A workload share return object.</p>
   */
  WorkloadShare?: WorkloadShare;
}

export namespace UpdateWorkloadShareOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkloadShareOutput): any => ({
    ...obj,
  });
}

export interface UpgradeLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an AWS Region.</p>
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens, for example, <code>serverless</code>.</p>
   *         <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   */
  LensAlias: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *         <p>Milestone names must be unique within a workload.</p>
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *         <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after it has completed
   *             successfully, the result of the original request is returned. </p>
   *         <important>
   *             <p>This token is listed as required, however, if you do not specify it, the AWS SDKs
   *                 automatically generate one for you. If you are not using the AWS SDK or the AWS CLI,
   *                 you must provide this token or the request will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;
}

export namespace UpgradeLensReviewInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpgradeLensReviewInput): any => ({
    ...obj,
  });
}
