// smithy-typescript generated code
import {
  AccountJiraIssueManagementStatus,
  AdditionalResourceType,
  AnswerReason,
  CheckFailureReason,
  CheckProvider,
  CheckStatus,
  ChoiceReason,
  ChoiceStatus,
  DefinitionType,
  DifferenceStatus,
  DiscoveryIntegrationStatus,
  ImportLensStatus,
  IntegratingService,
  IntegrationStatus,
  IntegrationStatusInput,
  IssueManagementType,
  LensStatus,
  LensStatusType,
  LensType,
  MetricType,
  NotificationType,
  OrganizationSharingStatus,
  PermissionType,
  ProfileNotificationType,
  ProfileOwnerType,
  Question,
  QuestionPriority,
  QuestionType,
  ReportFormat,
  ReviewTemplateAnswerStatus,
  ReviewTemplateUpdateStatus,
  Risk,
  ShareInvitationAction,
  ShareResourceType,
  ShareStatus,
  TrustedAdvisorIntegrationStatus,
  WorkloadEnvironment,
  WorkloadImprovementStatus,
  WorkloadIssueManagementStatus,
} from "./enums";

/**
 * <p>Account-level: Input for the Jira configuration.</p>
 * @public
 */
export interface AccountJiraConfigurationInput {
  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatusInput | undefined;
}

/**
 * <p>Account-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface AccountJiraConfigurationOutput {
  /**
   * <p>Account-level: Configuration status of the Jira integration.</p>
   * @public
   */
  IntegrationStatus?: IntegrationStatus | undefined;

  /**
   * <p>Account-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: AccountJiraIssueManagementStatus | undefined;

  /**
   * <p>Account-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Account-level: Jira subdomain URL.</p>
   * @public
   */
  Subdomain?: string | undefined;

  /**
   * <p>Account-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Account-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>The choice content.</p>
 * @public
 */
export interface ChoiceContent {
  /**
   * <p>The display text for the choice content.</p>
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * <p>The URL for the choice content.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>The choice level additional resources for a custom lens.</p>
 *          <p>This field does not apply to Amazon Web Services official lenses.</p>
 * @public
 */
export interface AdditionalResources {
  /**
   * <p>Type of additional resource for a custom lens.</p>
   * @public
   */
  Type?: AdditionalResourceType | undefined;

  /**
   * <p>The URLs for additional resources, either helpful resources or improvement plans, for a custom lens. Up to five additional URLs can be specified.</p>
   * @public
   */
  Content?: ChoiceContent[] | undefined;
}

/**
 * <p>A choice that has been answered on a question in your workload.</p>
 * @public
 */
export interface ChoiceAnswer {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason | undefined;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string | undefined;
}

/**
 * <p>A choice available to answer question.</p>
 * @public
 */
export interface Choice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The helpful resource (both text and URL) for a particular choice.</p>
   *          <p>This field only applies to custom lenses. Each choice can have only one helpful resource.</p>
   * @public
   */
  HelpfulResource?: ChoiceContent | undefined;

  /**
   * <p>The improvement plan (both text and URL) for a particular choice.</p>
   *          <p>This field only applies to custom lenses. Each choice can have only one improvement plan.</p>
   * @public
   */
  ImprovementPlan?: ChoiceContent | undefined;

  /**
   * <p>The additional resources for a choice in a custom lens.</p>
   *          <p>A choice can have up to two additional resources: one of type <code>HELPFUL_RESOURCE</code>,
   *             one of type <code>IMPROVEMENT_PLAN</code>, or both.</p>
   * @public
   */
  AdditionalResources?: AdditionalResources[] | undefined;
}

/**
 * <p>Configuration of the Jira integration.</p>
 * @public
 */
export interface JiraConfiguration {
  /**
   * <p>The URL of the associated Jira issue.</p>
   * @public
   */
  JiraIssueUrl?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  LastSyncedTime?: Date | undefined;
}

/**
 * <p>An answer of the question.</p>
 * @public
 */
export interface Answer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The helpful resource URL.</p>
   *          <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p>
   *          <p>For custom lenses, this is the helpful resource URL for a question and is only provided
   *             if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p>
   *          <p>This field does not apply to Amazon Web Services official lenses.</p>
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The reason why the question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * <p>A choice summary that has been answered on a question in your workload.</p>
 * @public
 */
export interface ChoiceAnswerSummary {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status?: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason | undefined;
}

/**
 * <p>An answer summary of a lens review in a workload.</p>
 * @public
 */
export interface AnswerSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your workload.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>The type of the question.</p>
   * @public
   */
  QuestionType?: QuestionType | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * <p>Input to associate lens reviews.</p>
 * @public
 */
export interface AssociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *          <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name for which validation failed.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Description of the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface AssociateProfilesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The list of profile ARNs to associate with the workload.</p>
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * <p>A best practice, or question choice, that has been identified as a risk in this question.</p>
 * @public
 */
export interface BestPractice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;
}

/**
 * <p>Account details for a Well-Architected best practice in relation to Trusted Advisor checks.</p>
 * @public
 */
export interface CheckDetail {
  /**
   * <p>Trusted Advisor check ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Count of flagged resources associated to the check.</p>
   * @public
   */
  FlaggedResources?: number | undefined;

  /**
   * <p>Reason associated to the check.</p>
   * @public
   */
  Reason?: CheckFailureReason | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Trusted Advisor check summary.</p>
 * @public
 */
export interface CheckSummary {
  /**
   * <p>Trusted Advisor check ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Trusted Advisor check name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Provider of the check related to the best practice.</p>
   * @public
   */
  Provider?: CheckProvider | undefined;

  /**
   * <p>Trusted Advisor check description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Well-Architected Lens ARN associated to the check.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>Status associated to the check.</p>
   * @public
   */
  Status?: CheckStatus | undefined;

  /**
   * <p>Account summary associated to the check.</p>
   * @public
   */
  AccountSummary?: Partial<Record<CheckStatus, number>> | undefined;
}

/**
 * <p>The choice level improvement plan.</p>
 * @public
 */
export interface ChoiceImprovementPlan {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The display text for the improvement plan.</p>
   * @public
   */
  DisplayText?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;
}

/**
 * <p>A list of choices to be updated.</p>
 * @public
 */
export interface ChoiceUpdate {
  /**
   * <p>The status of a choice.</p>
   * @public
   */
  Status: ChoiceStatus | undefined;

  /**
   * <p>The reason why a choice is non-applicable to a question in your workload.</p>
   * @public
   */
  Reason?: ChoiceReason | undefined;

  /**
   * <p>The notes associated with a choice.</p>
   * @public
   */
  Notes?: string | undefined;
}

/**
 * <p>A metric for a particular question in the pillar. </p>
 * @public
 */
export interface QuestionMetric {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The best practices, or choices, that have been identified as contributing to risk in a question.</p>
   * @public
   */
  BestPractices?: BestPractice[] | undefined;
}

/**
 * <p>A metric for a particular pillar in a lens.</p>
 * @public
 */
export interface PillarMetric {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The questions that have been identified as risks in the pillar.</p>
   * @public
   */
  Questions?: QuestionMetric[] | undefined;
}

/**
 * <p>A metric for a particular lens in a workload.</p>
 * @public
 */
export interface LensMetric {
  /**
   * <p>The lens ARN.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The metrics for the pillars in a lens.</p>
   * @public
   */
  Pillars?: PillarMetric[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A metric that contributes to the consolidated report.</p>
 * @public
 */
export interface ConsolidatedReportMetric {
  /**
   * <p>The metric type of a metric in the consolidated report. Currently only WORKLOAD metric types are supported.</p>
   * @public
   */
  MetricType?: MetricType | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The metrics for the lenses in the workload.</p>
   * @public
   */
  Lenses?: LensMetric[] | undefined;

  /**
   * <p>The total number of lenses applied to the workload.</p>
   * @public
   */
  LensesAppliedCount?: number | undefined;
}

/**
 * @public
 */
export interface CreateLensShareInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The version of the lens being created.</p>
   * @public
   */
  LensVersion: string | undefined;

  /**
   * <p>Set to true if this new major lens version.</p>
   * @public
   */
  IsMajorVersion?: boolean | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLensVersionOutput {
  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * <p>Input for milestone creation.</p>
 * @public
 */
export interface CreateMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>Output of a create milestone call.</p>
 * @public
 */
export interface CreateMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>An update to a profile question.</p>
 * @public
 */
export interface ProfileQuestionUpdate {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateProfileInput {
  /**
   * <p>Name of the profile.</p>
   * @public
   */
  ProfileName: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription: string | undefined;

  /**
   * <p>The profile questions.</p>
   * @public
   */
  ProfileQuestions: ProfileQuestionUpdate[] | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProfileOutput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>Version of the profile.</p>
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileShareInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileShareOutput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateReviewTemplateInput {
  /**
   * <p>Name of the review template.</p>
   * @public
   */
  TemplateName: string | undefined;

  /**
   * <p>The review template description.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Lenses applied to the review template.</p>
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateReviewTemplateOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateShareInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateShareOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * <p>Discovery configuration associated to the workload.</p>
 * @public
 */
export interface WorkloadDiscoveryConfig {
  /**
   * <p>Discovery integration status in respect to Trusted Advisor for the workload.</p>
   * @public
   */
  TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus | undefined;

  /**
   * <p>The mode to use for identifying resources associated with the workload.</p>
   *          <p>You can specify <code>WORKLOAD_METADATA</code>, <code>APP_REGISTRY</code>, or both.</p>
   * @public
   */
  WorkloadResourceDefinition?: DefinitionType[] | undefined;
}

/**
 * <p>Workload-level: Input for the Jira configuration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationInput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;
}

/**
 * <p>Input for workload creation.</p>
 * @public
 */
export interface CreateWorkloadInput {
  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment: WorkloadEnvironment | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags to be associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Well-Architected discovery configuration settings associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>The list of profile ARNs associated with the workload.</p>
   * @public
   */
  ProfileArns?: string[] | undefined;

  /**
   * <p>The list of review template ARNs to associate with the workload.</p>
   * @public
   */
  ReviewTemplateArns?: string[] | undefined;

  /**
   * <p>Jira configuration settings when creating a workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
}

/**
 * <p>Output of a create workload call.</p>
 * @public
 */
export interface CreateWorkloadOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;
}

/**
 * <p>Input for Create Workload Share</p>
 * @public
 */
export interface CreateWorkloadShareInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>Input for Create Workload Share</p>
 * @public
 */
export interface CreateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The status of the lens to be deleted.</p>
   * @public
   */
  LensStatus: LensStatusType | undefined;
}

/**
 * @public
 */
export interface DeleteLensShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>Input for workload deletion.</p>
 * @public
 */
export interface DeleteWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>Input for Delete Workload Share</p>
 * @public
 */
export interface DeleteWorkloadShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>Input to disassociate lens reviews.</p>
 * @public
 */
export interface DisassociateLensesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p>
   *          <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAliases: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateProfilesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The list of profile ARNs to disassociate from the workload.</p>
   * @public
   */
  ProfileArns: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be exported.</p>
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * @public
 */
export interface ExportLensOutput {
  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  LensJSON?: string | undefined;
}

/**
 * <p>Input to get answer.</p>
 * @public
 */
export interface GetAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>Output of a get answer call.</p>
 * @public
 */
export interface GetAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportInput {
  /**
   * <p>The format of the consolidated report.</p>
   *          <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>,
   *             <code>Metrics</code> is returned.</p>
   * @public
   */
  Format: ReportFormat | undefined;

  /**
   * <p>Set to <code>true</code> to have shared resources included in the report.</p>
   * @public
   */
  IncludeSharedResources?: boolean | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetConsolidatedReportOutput {
  /**
   * <p>The metrics that make up the consolidated report.</p>
   *          <p>Only returned when <code>JSON</code> format is requested.</p>
   * @public
   */
  Metrics?: ConsolidatedReportMetric[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *          <p>This data can be used to create a PDF file.</p>
   *          <p>Only returned by <a>GetConsolidatedReport</a>
   *          when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsOutput {
  /**
   * <p>Amazon Web Services Organizations sharing status.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * <p>Discovery integration status.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * <p>Jira configuration status.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface GetLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The lens version to be retrieved.</p>
   * @public
   */
  LensVersion?: string | undefined;
}

/**
 * <p>A lens return object.</p>
 * @public
 */
export interface Lens {
  /**
   * <p>The ARN of a lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of a lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the lens.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags assigned to the lens.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLensOutput {
  /**
   * <p>A lens return object.</p>
   * @public
   */
  Lens?: Lens | undefined;
}

/**
 * <p>Input to get lens review.</p>
 * @public
 */
export interface GetLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>The selected pillar.</p>
 * @public
 */
export interface SelectedPillar {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>Selected question IDs in the selected pillar.</p>
   * @public
   */
  SelectedQuestionIds?: string[] | undefined;
}

/**
 * <p>Selected questions in the workload.</p>
 * @public
 */
export interface JiraSelectedQuestionConfiguration {
  /**
   * <p>Selected pillars in the workload.</p>
   * @public
   */
  SelectedPillars?: SelectedPillar[] | undefined;
}

/**
 * <p>A pillar review summary of a lens review.</p>
 * @public
 */
export interface PillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>The profile associated with a workload.</p>
 * @public
 */
export interface WorkloadProfile {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * <p>A lens review of a question.</p>
 * @public
 */
export interface LensReview {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>List of pillar review summaries of lens review in a workload.</p>
   * @public
   */
  PillarReviewSummaries?: PillarReviewSummary[] | undefined;

  /**
   * <p>Jira configuration status of the Lens review.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>Output of a get lens review call.</p>
 * @public
 */
export interface GetLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview | undefined;
}

/**
 * <p>Input to get lens review report.</p>
 * @public
 */
export interface GetLensReviewReportInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;
}

/**
 * <p>A report of a lens review.</p>
 * @public
 */
export interface LensReviewReport {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The Base64-encoded string representation of a lens review report.</p>
   *          <p>This data can be used to create a PDF file.</p>
   *          <p>Only returned by <a>GetConsolidatedReport</a>
   *          when <code>PDF</code> format is requested.</p>
   * @public
   */
  Base64String?: string | undefined;
}

/**
 * <p>Output of a get lens review report call.</p>
 * @public
 */
export interface GetLensReviewReportOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>A report of a lens review.</p>
   * @public
   */
  LensReviewReport?: LensReviewReport | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * <p>The lens version to target a difference for.</p>
   * @public
   */
  TargetLensVersion?: string | undefined;
}

/**
 * <p>A question difference return object.</p>
 * @public
 */
export interface QuestionDifference {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>Indicates the type of change to the question.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;
}

/**
 * <p>A pillar difference return object.</p>
 * @public
 */
export interface PillarDifference {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>Indicates the type of change to the pillar.</p>
   * @public
   */
  DifferenceStatus?: DifferenceStatus | undefined;

  /**
   * <p>List of question differences.</p>
   * @public
   */
  QuestionDifferences?: QuestionDifference[] | undefined;
}

/**
 * <p>The differences between the base and latest versions of the lens.</p>
 * @public
 */
export interface VersionDifferences {
  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   * @public
   */
  PillarDifferences?: PillarDifference[] | undefined;
}

/**
 * @public
 */
export interface GetLensVersionDifferenceOutput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The base version of the lens.</p>
   * @public
   */
  BaseLensVersion?: string | undefined;

  /**
   * <p>The target lens version for the lens.</p>
   * @public
   */
  TargetLensVersion?: string | undefined;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * <p>The differences between the base and latest versions of the lens.</p>
   * @public
   */
  VersionDifferences?: VersionDifferences | undefined;
}

/**
 * <p>Input to get a milestone.</p>
 * @public
 */
export interface GetMilestoneInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber: number | undefined;
}

/**
 * <p>Workload-level: Output configuration of the Jira integration.</p>
 * @public
 */
export interface WorkloadJiraConfigurationOutput {
  /**
   * <p>Workload-level: Jira issue management status.</p>
   * @public
   */
  IssueManagementStatus?: WorkloadIssueManagementStatus | undefined;

  /**
   * <p>Workload-level: Jira issue management type.</p>
   * @public
   */
  IssueManagementType?: IssueManagementType | undefined;

  /**
   * <p>Workload-level: Jira project key to sync workloads to.</p>
   * @public
   */
  JiraProjectKey?: string | undefined;

  /**
   * <p>Workload-level: Status message on configuration of the Jira integration.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>A workload return object.</p>
 * @public
 */
export interface Workload {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  ReviewRestrictionDate?: Date | undefined;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *          <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags associated with the workload.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Discovery configuration associated to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs associated to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>Jira configuration for a specific workload.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationOutput | undefined;
}

/**
 * <p>A milestone return object.</p>
 * @public
 */
export interface Milestone {
  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * <p>Output of a get milestone call.</p>
 * @public
 */
export interface GetMilestoneOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A milestone return object.</p>
   * @public
   */
  Milestone?: Milestone | undefined;
}

/**
 * @public
 */
export interface GetProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;
}

/**
 * <p>The profile choice.</p>
 * @public
 */
export interface ProfileChoice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string | undefined;
}

/**
 * <p>A profile question.</p>
 * @public
 */
export interface ProfileQuestion {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileChoice[] | undefined;

  /**
   * <p>The selected choices.</p>
   * @public
   */
  SelectedChoiceIds?: string[] | undefined;

  /**
   * <p>The minimum number of selected choices.</p>
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * <p>The maximum number of selected choices.</p>
   * @public
   */
  MaxSelectedChoices?: number | undefined;
}

/**
 * <p>A profile.</p>
 * @public
 */
export interface Profile {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestion[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The tags assigned to the profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetProfileTemplateInput {}

/**
 * <p>A profile template choice.</p>
 * @public
 */
export interface ProfileTemplateChoice {
  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId?: string | undefined;

  /**
   * <p>The title of a choice.</p>
   * @public
   */
  ChoiceTitle?: string | undefined;

  /**
   * <p>The description of a choice.</p>
   * @public
   */
  ChoiceDescription?: string | undefined;
}

/**
 * <p>A profile template question.</p>
 * @public
 */
export interface ProfileTemplateQuestion {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The question choices.</p>
   * @public
   */
  QuestionChoices?: ProfileTemplateChoice[] | undefined;

  /**
   * <p>The minimum number of choices selected.</p>
   * @public
   */
  MinSelectedChoices?: number | undefined;

  /**
   * <p>The maximum number of choices selected.</p>
   * @public
   */
  MaxSelectedChoices?: number | undefined;
}

/**
 * <p>The profile template.</p>
 * @public
 */
export interface ProfileTemplate {
  /**
   * <p>The name of the profile template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>Profile template questions.</p>
   * @public
   */
  TemplateQuestions?: ProfileTemplateQuestion[] | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProfileTemplateOutput {
  /**
   * <p>The profile template.</p>
   * @public
   */
  ProfileTemplate?: ProfileTemplate | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * <p>A review template.</p>
 * @public
 */
export interface ReviewTemplate {
  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The lenses applied to the review template.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many total questions are answered and unanswered in the review template.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The tags assigned to the review template.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;

  /**
   * <p>The ID assigned to the template share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateOutput {
  /**
   * <p>The review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;
}

/**
 * <p>An answer of the question.</p>
 * @public
 */
export interface ReviewTemplateAnswer {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The description of the question.</p>
   * @public
   */
  QuestionDescription?: string | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The helpful resource URL.</p>
   *          <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p>
   *          <p>For custom lenses, this is the helpful resource URL for a question and is only provided
   *             if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
   * @public
   */
  HelpfulResourceUrl?: string | undefined;

  /**
   * <p>The helpful resource text to be displayed for a custom lens.</p>
   *          <note>
   *             <p>This field does not apply to Amazon Web Services official lenses.</p>
   *          </note>
   * @public
   */
  HelpfulResourceDisplayText?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in your review template.</p>
   * @public
   */
  ChoiceAnswers?: ChoiceAnswer[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The reason why the question is not applicable to your review template.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;
}

/**
 * <p>Summary of a review template.</p>
 * @public
 */
export interface ReviewTemplatePillarReviewSummary {
  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The name of the pillar.</p>
   * @public
   */
  PillarName?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many questions are answered and unanswered in the requested pillar of the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;
}

/**
 * <p>The lens review of a review template.</p>
 * @public
 */
export interface ReviewTemplateLensReview {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The lens ARN.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>Pillar review summaries of a lens review.</p>
   * @public
   */
  PillarReviewSummaries?: ReviewTemplatePillarReviewSummary[] | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A count of how many questions are answered and unanswered in the lens review.</p>
   * @public
   */
  QuestionCounts?: Partial<Record<Question, number>> | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
}

/**
 * <p>Input to get a workload.</p>
 * @public
 */
export interface GetWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;
}

/**
 * <p>Output of a get workload call.</p>
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * @public
 */
export interface ImportLensInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The JSON representation of a lens.</p>
   * @public
   */
  JSONString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags to associate to a lens.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportLensOutput {
  /**
   * <p>The ARN for the lens that was created or updated.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The status of the imported lens.</p>
   * @public
   */
  Status?: ImportLensStatus | undefined;
}

/**
 * <p>An improvement summary of a lens review in a workload.</p>
 * @public
 */
export interface ImprovementSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>The risk for a given workload, lens review, pillar, or question.</p>
   * @public
   */
  Risk?: Risk | undefined;

  /**
   * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p>
   *          <p>This value is only available if the question has been answered.</p>
   *          <p>This value does not apply to custom lenses.</p>
   * @public
   */
  ImprovementPlanUrl?: string | undefined;

  /**
   * <p>The improvement plan details.</p>
   * @public
   */
  ImprovementPlans?: ChoiceImprovementPlan[] | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraConfiguration | undefined;
}

/**
 * <p>A lens review summary of a workload.</p>
 * @public
 */
export interface LensReviewSummary {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The profiles associated with the workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A lens share summary return object.</p>
 * @public
 */
export interface LensShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>A lens summary of a lens.</p>
 * @public
 */
export interface LensSummary {
  /**
   * <p>The ARN of the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The type of the lens.</p>
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * <p>The description of the lens.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The version of the lens.</p>
   * @public
   */
  LensVersion?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The status of the lens.</p>
   * @public
   */
  LensStatus?: LensStatus | undefined;
}

/**
 * <p>Lens upgrade summary return object.</p>
 * @public
 */
export interface LensUpgradeSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The current version of the lens.</p>
   * @public
   */
  CurrentLensVersion?: string | undefined;

  /**
   * <p>The latest version of the lens.</p>
   * @public
   */
  LatestLensVersion?: string | undefined;

  /**
   * <p>
   *             <code>ResourceArn</code> of the lens being upgraded</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * <p>Input to list answers.</p>
 * @public
 */
export interface ListAnswersInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
}

/**
 * <p>Output of a list answers call.</p>
 * @public
 */
export interface ListAnswersOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>List of answer summaries of lens review in a workload.</p>
   * @public
   */
  AnswerSummaries?: AnswerSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckDetailsOutput {
  /**
   * <p>The details about the Trusted Advisor checks related to the Well-Architected best practice.</p>
   * @public
   */
  CheckDetails?: CheckDetail[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Well-Architected Lens ARN.</p>
   * @public
   */
  LensArn: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>The ID of a choice.</p>
   * @public
   */
  ChoiceId: string | undefined;
}

/**
 * @public
 */
export interface ListCheckSummariesOutput {
  /**
   * <p>List of Trusted Advisor summaries related to the Well-Architected best practice.</p>
   * @public
   */
  CheckSummaries?: CheckSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list lenses.</p>
 * @public
 */
export interface ListLensesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of lenses to be returned.</p>
   * @public
   */
  LensType?: LensType | undefined;

  /**
   * <p>The status of lenses to be returned.</p>
   * @public
   */
  LensStatus?: LensStatusType | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;
}

/**
 * <p>Output of a list lenses call.</p>
 * @public
 */
export interface ListLensesOutput {
  /**
   * <p>List of lens summaries of available lenses.</p>
   * @public
   */
  LensSummaries?: LensSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list lens review improvements.</p>
 * @public
 */
export interface ListLensReviewImprovementsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The priority of the question.</p>
   * @public
   */
  QuestionPriority?: QuestionPriority | undefined;
}

/**
 * <p>Output of a list lens review improvements call.</p>
 * @public
 */
export interface ListLensReviewImprovementsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>List of improvement summaries of lens review in a workload.</p>
   * @public
   */
  ImprovementSummaries?: ImprovementSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list lens reviews.</p>
 * @public
 */
export interface ListLensReviewsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Output of a list lens reviews call.</p>
 * @public
 */
export interface ListLensReviewsOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>List of lens summaries of lens reviews of a workload.</p>
   * @public
   */
  LensReviewSummaries?: LensReviewSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLensSharesInput {
  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the lens is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface ListLensSharesOutput {
  /**
   * <p>A list of lens share summaries.</p>
   * @public
   */
  LensShareSummaries?: LensShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list all milestones for a workload.</p>
 * @public
 */
export interface ListMilestonesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A workload summary return object.</p>
 * @public
 */
export interface WorkloadSummary {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   *          <p>If a review template that specifies lenses is applied to the workload, those lenses are applied
   *         to the workload in addition to these lenses.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  RiskCounts?: Partial<Record<Risk, number>> | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>Profile associated with a workload.</p>
   * @public
   */
  Profiles?: WorkloadProfile[] | undefined;

  /**
   * <p>A map from risk names to the count of how many questions have that rating.</p>
   * @public
   */
  PrioritizedRiskCounts?: Partial<Record<Risk, number>> | undefined;
}

/**
 * <p>A milestone summary return object.</p>
 * @public
 */
export interface MilestoneSummary {
  /**
   * <p>The milestone number.</p>
   *          <p>A workload can have a maximum of 100 milestones.</p>
   * @public
   */
  MilestoneNumber?: number | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  RecordedAt?: Date | undefined;

  /**
   * <p>A workload summary return object.</p>
   * @public
   */
  WorkloadSummary?: WorkloadSummary | undefined;
}

/**
 * <p>Output of a list milestones call.</p>
 * @public
 */
export interface ListMilestonesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A list of milestone summaries.</p>
   * @public
   */
  MilestoneSummaries?: MilestoneSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ARN for the related resource for the notification.</p>
   *          <note>
   *             <p>Only one of <code>WorkloadID</code> or <code>ResourceARN</code> should be specified.</p>
   *          </note>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>A notification summary return object.</p>
 * @public
 */
export interface NotificationSummary {
  /**
   * <p>The type of notification.</p>
   * @public
   */
  Type?: NotificationType | undefined;

  /**
   * <p>Summary of lens upgrade.</p>
   * @public
   */
  LensUpgradeSummary?: LensUpgradeSummary | undefined;
}

/**
 * @public
 */
export interface ListNotificationsOutput {
  /**
   * <p>List of lens notification summaries in a workload.</p>
   * @public
   */
  NotificationSummaries?: NotificationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The profile notification summary.</p>
 * @public
 */
export interface ProfileNotificationSummary {
  /**
   * <p>The current profile version.</p>
   * @public
   */
  CurrentProfileVersion?: string | undefined;

  /**
   * <p>The latest profile version.</p>
   * @public
   */
  LatestProfileVersion?: string | undefined;

  /**
   * <p>Type of notification.</p>
   * @public
   */
  Type?: ProfileNotificationType | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileNotificationsOutput {
  /**
   * <p>Notification summaries.</p>
   * @public
   */
  NotificationSummaries?: ProfileNotificationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilesInput {
  /**
   * <p>An optional string added to the beginning of each profile name returned in the
   *             results.</p>
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * <p>Profile owner type.</p>
   * @public
   */
  ProfileOwnerType?: ProfileOwnerType | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of a profile.</p>
 * @public
 */
export interface ProfileSummary {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The profile version.</p>
   * @public
   */
  ProfileVersion?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProfilesOutput {
  /**
   * <p>Profile summaries.</p>
   * @public
   */
  ProfileSummaries?: ProfileSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileSharesInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * <p>Summary of a profile share.</p>
 * @public
 */
export interface ProfileShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Profile share invitation status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileSharesOutput {
  /**
   * <p>Profile share summaries.</p>
   * @public
   */
  ProfileShareSummaries?: ProfileShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersInput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of review template answers.</p>
 * @public
 */
export interface ReviewTemplateAnswerSummary {
  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p>The ID used to identify a pillar, for example, <code>security</code>.</p>
   *          <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarId?: string | undefined;

  /**
   * <p>The title of the question.</p>
   * @public
   */
  QuestionTitle?: string | undefined;

  /**
   * <p>List of choices available for a question.</p>
   * @public
   */
  Choices?: Choice[] | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of selected choices to a question in the review template.</p>
   * @public
   */
  ChoiceAnswerSummaries?: ChoiceAnswerSummary[] | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The status of whether or not this question has been answered.</p>
   * @public
   */
  AnswerStatus?: ReviewTemplateAnswerStatus | undefined;

  /**
   * <p>The reason why a choice is not-applicable to a question in the review template.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;

  /**
   * <p>The type of question.</p>
   * @public
   */
  QuestionType?: QuestionType | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplateAnswersOutput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>List of answer summaries of a lens review in a review template.</p>
   * @public
   */
  AnswerSummaries?: ReviewTemplateAnswerSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesInput {
  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of a review template.</p>
 * @public
 */
export interface ReviewTemplateSummary {
  /**
   * <p>Description of the review template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Lenses associated with the review template.</p>
   * @public
   */
  Lenses?: string[] | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The date and time recorded.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The latest status of a review template.</p>
   * @public
   */
  UpdateStatus?: ReviewTemplateUpdateStatus | undefined;
}

/**
 * @public
 */
export interface ListReviewTemplatesOutput {
  /**
   * <p>List of review templates.</p>
   * @public
   */
  ReviewTemplates?: ReviewTemplateSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input for List Share Invitations</p>
 * @public
 */
export interface ListShareInvitationsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * <p>An optional string added to the beginning of each lens name returned in the results.</p>
   * @public
   */
  LensNamePrefix?: string | undefined;

  /**
   * <p>The type of share invitations to be returned.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional string added to the beginning of each profile name returned in the
   *             results.</p>
   * @public
   */
  ProfileNamePrefix?: string | undefined;

  /**
   * <p>An optional string added to the beginning of each review template name returned in the
   *             results.</p>
   * @public
   */
  TemplateNamePrefix?: string | undefined;
}

/**
 * <p>A share invitation summary return object.</p>
 * @public
 */
export interface ShareInvitationSummary {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The full name of the lens.</p>
   * @public
   */
  LensName?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The profile name.</p>
   * @public
   */
  ProfileName?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The name of the review template.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * <p>Input for List Share Invitations</p>
 * @public
 */
export interface ListShareInvitationsOutput {
  /**
   * <p>List of share invitation summaries in a workload.</p>
   * @public
   */
  ShareInvitationSummaries?: ShareInvitationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplateSharesInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit
   *             (OU) ID with which the profile is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * <p>Summary of a review template share.</p>
 * @public
 */
export interface TemplateShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Review template share invitation status message. </p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateSharesOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A review template share summary return object.</p>
   * @public
   */
  TemplateShareSummaries?: TemplateShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input to list all workloads.</p>
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * <p>An optional string added to the beginning of each workload name returned in the
   *             results.</p>
   * @public
   */
  WorkloadNamePrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Output of a list workloads call.</p>
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * <p>A list of workload summaries.</p>
   * @public
   */
  WorkloadSummaries?: WorkloadSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Input for List Workload Share</p>
 * @public
 */
export interface ListWorkloadSharesInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload is shared.</p>
   * @public
   */
  SharedWithPrefix?: string | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;
}

/**
 * <p>A workload share summary return object.</p>
 * @public
 */
export interface WorkloadShareSummary {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>Optional message to compliment the Status field.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Input for List Workload Share</p>
 * @public
 */
export interface ListWorkloadSharesOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A list of workload share summaries.</p>
   * @public
   */
  WorkloadShareSummaries?: WorkloadShareSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The share invitation.</p>
 * @public
 */
export interface ShareInvitation {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId?: string | undefined;

  /**
   * <p>The resource type of the share invitation.</p>
   * @public
   */
  ShareResourceType?: ShareResourceType | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn?: string | undefined;

  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN for the workload.</p>
   * @public
   */
  WorkloadArn: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags of the resource
   *             whose keys are members of this list are removed from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Input to update answer.</p>
 * @public
 */
export interface UpdateAnswerInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of choices to update on a question in your workload.  The String key
   *             corresponds to the choice ID to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The reason why a question is not applicable to your workload.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * <p>Output of a update answer call.</p>
 * @public
 */
export interface UpdateAnswerOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>The ARN for the lens.</p>
   * @public
   */
  LensArn?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: Answer | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsInput {
  /**
   * <p>The status of organization sharing settings.</p>
   * @public
   */
  OrganizationSharingStatus?: OrganizationSharingStatus | undefined;

  /**
   * <p>The status of discovery support settings.</p>
   * @public
   */
  DiscoveryIntegrationStatus?: DiscoveryIntegrationStatus | undefined;

  /**
   * <p>The status of Jira integration settings.</p>
   * @public
   */
  JiraConfiguration?: AccountJiraConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Which integrated service to update.</p>
   * @public
   */
  IntegratingService: IntegratingService | undefined;
}

/**
 * <p>Input for update lens review.</p>
 * @public
 */
export interface UpdateLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: JiraSelectedQuestionConfiguration | undefined;
}

/**
 * <p>Output of a update lens review call.</p>
 * @public
 */
export interface UpdateLensReviewOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: LensReview | undefined;
}

/**
 * @public
 */
export interface UpdateProfileInput {
  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The profile description.</p>
   * @public
   */
  ProfileDescription?: string | undefined;

  /**
   * <p>Profile questions.</p>
   * @public
   */
  ProfileQuestions?: ProfileQuestionUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateProfileOutput {
  /**
   * <p>The profile.</p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The review template name.</p>
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * <p>The review template description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>A list of lens aliases or ARNs to apply to the review template.</p>
   * @public
   */
  LensesToAssociate?: string[] | undefined;

  /**
   * <p>A list of lens aliases or ARNs to unapply to the review template. The <code>wellarchitected</code> lens cannot be unapplied.</p>
   * @public
   */
  LensesToDisassociate?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateOutput {
  /**
   * <p>A review template.</p>
   * @public
   */
  ReviewTemplate?: ReviewTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The ID of the question.</p>
   * @public
   */
  QuestionId: string | undefined;

  /**
   * <p>List of selected choice IDs in a question answer.</p>
   *          <p>The values entered replace the previously selected choices.</p>
   * @public
   */
  SelectedChoices?: string[] | undefined;

  /**
   * <p>A list of choices to be updated.</p>
   * @public
   */
  ChoiceUpdates?: Record<string, ChoiceUpdate> | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>Defines whether this question is applicable to a lens review.</p>
   * @public
   */
  IsApplicable?: boolean | undefined;

  /**
   * <p>The update reason.</p>
   * @public
   */
  Reason?: AnswerReason | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateAnswerOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias?: string | undefined;

  /**
   * <p>An answer of the question.</p>
   * @public
   */
  Answer?: ReviewTemplateAnswer | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewInput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  LensNotes?: string | undefined;

  /**
   * <p>List of pillar notes of a lens review in a workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  PillarNotes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateReviewTemplateLensReviewOutput {
  /**
   * <p>The review template ARN.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>A lens review of a question.</p>
   * @public
   */
  LensReview?: ReviewTemplateLensReview | undefined;
}

/**
 * <p>Input for Update Share Invitation</p>
 * @public
 */
export interface UpdateShareInvitationInput {
  /**
   * <p>The ID assigned to the share invitation.</p>
   * @public
   */
  ShareInvitationId: string | undefined;

  /**
   * <p>Share invitation action taken by contributor.</p>
   * @public
   */
  ShareInvitationAction: ShareInvitationAction | undefined;
}

/**
 * @public
 */
export interface UpdateShareInvitationOutput {
  /**
   * <p>The updated workload or custom lens share invitation.</p>
   * @public
   */
  ShareInvitation?: ShareInvitation | undefined;
}

/**
 * <p>Input to update a workload.</p>
 * @public
 */
export interface UpdateWorkloadInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The description for the workload.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The environment for the workload.</p>
   * @public
   */
  Environment?: WorkloadEnvironment | undefined;

  /**
   * <p>The list of Amazon Web Services account IDs associated with the workload.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of Amazon Web Services Regions associated with the workload, for example,
   *                 <code>us-east-2</code>, or <code>ca-central-1</code>.</p>
   * @public
   */
  AwsRegions?: string[] | undefined;

  /**
   * <p> The list of non-Amazon Web Services Regions associated with the workload.</p>
   * @public
   */
  NonAwsRegions?: string[] | undefined;

  /**
   * <p>The priorities of the pillars, which are used to order items in the improvement plan.
   *             Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.</p>
   * @public
   */
  PillarPriorities?: string[] | undefined;

  /**
   * <p>The URL of the architectural design for the workload.</p>
   * @public
   */
  ArchitecturalDesign?: string | undefined;

  /**
   * <p>The review owner of the workload. The name, email address, or identifier for the
   *             primary group or individual that owns the workload review process.</p>
   * @public
   */
  ReviewOwner?: string | undefined;

  /**
   * <p>Flag indicating whether the workload owner has acknowledged that the <i>Review
   *                 owner</i> field is required.</p>
   *          <p>If a <b>Review owner</b> is not added to the workload within
   *             60 days of acknowledgement, access to the workload is restricted until an owner is
   *             added.</p>
   * @public
   */
  IsReviewOwnerUpdateAcknowledged?: boolean | undefined;

  /**
   * <p>The industry type for the workload.</p>
   *          <p>If specified, must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Agriculture</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automobile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Defense</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Design and Engineering</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Digital Advertising</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Education</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Environmental Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Financial Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Gaming</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>General Public Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Healthcare</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Hospitality</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InfoTech</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Justice and Public Safety</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Life Sciences</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Manufacturing</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Media & Entertainment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Mining & Resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Oil & Gas</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Power & Utilities</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Professional Services</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Real Estate & Construction</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retail & Wholesale</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Social Protection</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Telecommunications</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Travel, Transportation & Logistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Other</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IndustryType?: string | undefined;

  /**
   * <p>The industry for the workload.</p>
   * @public
   */
  Industry?: string | undefined;

  /**
   * <p>The notes associated with the workload.</p>
   *          <p>For a review template, these are the notes that will be associated with the workload when the template is applied.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p>The improvement status for a workload.</p>
   * @public
   */
  ImprovementStatus?: WorkloadImprovementStatus | undefined;

  /**
   * <p>Well-Architected discovery configuration settings to associate to the workload.</p>
   * @public
   */
  DiscoveryConfig?: WorkloadDiscoveryConfig | undefined;

  /**
   * <p>List of AppRegistry application ARNs to associate to the workload.</p>
   * @public
   */
  Applications?: string[] | undefined;

  /**
   * <p>Configuration of the Jira integration.</p>
   * @public
   */
  JiraConfiguration?: WorkloadJiraConfigurationInput | undefined;
}

/**
 * <p>Output of an update workload call.</p>
 * @public
 */
export interface UpdateWorkloadOutput {
  /**
   * <p>A workload return object.</p>
   * @public
   */
  Workload?: Workload | undefined;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareInput {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType: PermissionType | undefined;
}

/**
 * <p>A workload share return object.</p>
 * @public
 */
export interface WorkloadShare {
  /**
   * <p>The ID associated with the share.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>An Amazon Web Services account ID.</p>
   * @public
   */
  SharedBy?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which
   *             the workload, lens, profile, or review template is shared.</p>
   * @public
   */
  SharedWith?: string | undefined;

  /**
   * <p>Permission granted on a share request.</p>
   * @public
   */
  PermissionType?: PermissionType | undefined;

  /**
   * <p>The status of the share request.</p>
   * @public
   */
  Status?: ShareStatus | undefined;

  /**
   * <p>The name of the workload.</p>
   *          <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization
   *             are ignored when checking for uniqueness.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;
}

/**
 * <p>Input for Update Workload Share</p>
 * @public
 */
export interface UpdateWorkloadShareOutput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId?: string | undefined;

  /**
   * <p>A workload share return object.</p>
   * @public
   */
  WorkloadShare?: WorkloadShare | undefined;
}

/**
 * @public
 */
export interface UpgradeLensReviewInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeProfileVersionInput {
  /**
   * <p>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.</p>
   * @public
   */
  WorkloadId: string | undefined;

  /**
   * <p>The profile ARN.</p>
   * @public
   */
  ProfileArn: string | undefined;

  /**
   * <p>The name of the milestone in a workload.</p>
   *          <p>Milestone names must be unique within a workload.</p>
   * @public
   */
  MilestoneName?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpgradeReviewTemplateLensReviewInput {
  /**
   * <p>The ARN of the review template.</p>
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * <p>The alias of the lens.</p>
   *          <p>For Amazon Web Services official lenses, this is either the lens alias, such as
   *                 <code>serverless</code>, or the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some
   *             operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p>
   *          <p>For custom lenses, this is the lens ARN, such as
   *                 <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p>
   *          <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
   * @public
   */
  LensAlias: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure that this request is idempotent
   *             (executes only once).</p>
   *          <p>You should not reuse the same token for other requests. If you retry a request with
   *             the same client request token and the same parameters after the original request has completed
   *             successfully, the result of the original request is returned.</p>
   *          <important>
   *             <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs
   *                 automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI,
   *                 you must provide this token or the request will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}
