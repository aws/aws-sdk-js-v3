// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AdditionalEmailRecipients,
  AgentInfo,
  AgentStatusSearchFilter,
  Campaign,
  Channel,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  EvaluationFormScoringStrategy,
  SegmentAttributeValue,
  StringCondition,
} from "./models_0";

import {
  AnsweringMachineDetectionStatus,
  AttributeCondition,
  ContactFlowState,
  Customer,
  CustomerVoiceActivity,
  DisconnectDetails,
  EndpointInfo,
  Evaluation,
  EvaluationFormVersionStatus,
  Expiry,
  QualityMetrics,
  QueueInfo,
  RoutingCriteriaStepStatus,
  WisdomInfo,
} from "./models_1";

import {
  AgentStatusSearchCriteria,
  ContactFlowModuleSearchCriteria,
  ContactFlowModuleSearchFilter,
  ContactFlowSearchFilter,
  EmailAddressSearchFilter,
  EvaluationFormItem,
  HierarchyGroupCondition,
  HoursOfOperationSearchFilter,
  ListCondition,
  PromptSearchFilter,
  QueueSearchFilter,
  QuickConnectSearchFilter,
  RoutingCriteriaInputStepExpiry,
  RoutingProfileSearchFilter,
  SearchableQueueType,
  SecurityProfilesSearchFilter,
  UserHierarchyGroupSearchFilter,
  UserSearchFilter,
} from "./models_2";

/**
 * <p>The search criteria to be used to return contact flows.</p>
 * @public
 */
export interface ContactFlowSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  TypeCondition?: ContactFlowType | undefined;

  /**
   * <p>The state of the flow.</p>
   * @public
   */
  StateCondition?: ContactFlowState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  StatusCondition?: ContactFlowStatus | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EmailAddressSearchCriteria {
  /**
   * <p></p>
   * @public
   */
  OrConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * <p></p>
   * @public
   */
  AndConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>Information about the evaluation form.</p>
 * @public
 */
export interface EvaluationForm {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   * @public
   */
  Locked: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about an evaluation form used in a contact evaluation.</p>
 * @public
 */
export interface EvaluationFormContent {
  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;
}

/**
 * <p>A tagged union to specify expression for a routing step.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>An object to specify the predefined attribute condition.</p>
   * @public
   */
  AttributeCondition?: AttributeCondition | undefined;

  /**
   * <p>List of routing expressions which will be AND-ed together.</p>
   * @public
   */
  AndExpression?: Expression[] | undefined;

  /**
   * <p>List of routing expressions which will be OR-ed together.</p>
   * @public
   */
  OrExpression?: Expression[] | undefined;
}

/**
 * <p>The search criteria to be used to return hours of operations.</p>
 * @public
 */
export interface HoursOfOperationSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>timezone</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return predefined attributes.</p>
 * @public
 */
export interface PredefinedAttributeSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return prompts.</p>
 * @public
 */
export interface PromptSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: PromptSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: PromptSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return queues.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 * @public
 */
export interface QueueSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: QueueSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QueueSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypeCondition?: SearchableQueueType | undefined;
}

/**
 * <p>The search criteria to be used to return quick connects.</p>
 * @public
 */
export interface QuickConnectSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return routing profiles.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 * @public
 */
export interface RoutingProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are
   *      <code>associatedQueueIds</code>, <code>name</code>, <code>description</code>, and
   *      <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return security profiles.</p>
 *          <note>
 *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
 *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
 *     invalid results.</p>
 *          </note>
 * @public
 */
export interface SecurityProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form to update.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>A flag indicating whether the operation must create a new version.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The search criteria to be used to return userHierarchyGroup.</p>
 * @public
 */
export interface UserHierarchyGroupSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>parentId</code>, <code>levelId</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return users.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results.  </p>
 *          </note>
 * @public
 */
export interface UserSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: UserSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   * @public
   */
  AndConditions?: UserSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <p>The currently supported values for <code>FieldName</code> are <code>Username</code>,
   *     <code>FirstName</code>, <code>LastName</code>, <code>RoutingProfileId</code>,
   *     <code>SecurityProfileId</code>, <code>ResourceId</code>.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a List condition to search users with
   *    attributes included in Lists like Proficiencies.</p>
   * @public
   */
  ListCondition?: ListCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * <p>Information about the evaluation form completed for a specific contact.</p>
   * @public
   */
  Evaluation: Evaluation | undefined;

  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * <p>Step defines the list of agents to be routed or route based on the agent requirements such
 *    as ProficiencyLevel, Name, or Value.</p>
 * @public
 */
export interface RoutingCriteriaInputStep {
  /**
   * <p>An object to specify the expiration of a routing step.</p>
   * @public
   */
  Expiry?: RoutingCriteriaInputStepExpiry | undefined;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression | undefined;
}

/**
 * @public
 */
export interface SearchAgentStatusesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: AgentStatusSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  SearchCriteria?: AgentStatusSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowModuleSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return contact flow modules.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowModuleSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return flows.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchEmailAddressesRequest {
  /**
   * <p></p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  SearchCriteria?: EmailAddressSearchCriteria | undefined;

  /**
   * <p></p>
   * @public
   */
  SearchFilter?: EmailAddressSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return hours of operations.</p>
   * @public
   */
  SearchCriteria?: HoursOfOperationSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The search criteria to be used to return predefined attributes.</p>
   * @public
   */
  SearchCriteria?: PredefinedAttributeSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: PromptSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return prompts.</p>
   * @public
   */
  SearchCriteria?: PromptSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QueueSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: QueueSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QuickConnectSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return quick connects.</p>
   * @public
   */
  SearchCriteria?: QuickConnectSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: RoutingProfileSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: RoutingProfileSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The search criteria to be used to return security profiles. </p>
   *          <note>
   *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
   *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
   *     invalid results.</p>
   *          </note>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   * @public
   */
  SearchCriteria?: SecurityProfileSearchCriteria | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: SecurityProfilesSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserHierarchyGroupSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return UserHierarchyGroups.</p>
   * @public
   */
  SearchCriteria?: UserHierarchyGroupSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   *          <note>
   *             <p>InstanceID is a required field. The "Required: No" below is incorrect.</p>
   *          </note>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   * @public
   */
  SearchCriteria?: UserSearchCriteria | undefined;
}

/**
 * <p>Step signifies the criteria to be used for routing to an agent</p>
 * @public
 */
export interface Step {
  /**
   * <p>An object to specify the expiration of a routing step.</p>
   * @public
   */
  Expiry?: Expiry | undefined;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression | undefined;

  /**
   * <p>Represents status of the Routing step.</p>
   * @public
   */
  Status?: RoutingCriteriaStepStatus | undefined;
}

/**
 * <p>Latest routing criteria on the contact.</p>
 * @public
 */
export interface RoutingCriteria {
  /**
   * <p>List of routing steps. When Amazon Connect does not find an available agent meeting the
   *    requirements in a step for a given step duration, the routing criteria will move on to the next
   *    step sequentially until a join is completed with an agent. When all steps are exhausted, the
   *    contact will be offered to any agent in the queue.</p>
   * @public
   */
  Steps?: Step[] | undefined;

  /**
   * <p>The timestamp indicating when the routing criteria is set to active. A routing criteria is
   *    activated when contact is transferred to a queue. ActivationTimestamp will be set on routing
   *    criteria for contacts in agent queue even though Routing criteria is never activated for contacts
   *    in agent queue.</p>
   * @public
   */
  ActivationTimestamp?: Date | undefined;

  /**
   * <p>Information about the index of the routing criteria.</p>
   * @public
   */
  Index?: number | undefined;
}

/**
 * <p>An object to define the RoutingCriteria.</p>
 * @public
 */
export interface RoutingCriteriaInput {
  /**
   * <p>When Amazon Connect does not find an available agent meeting the requirements in a step
   *    for  a given step duration, the routing criteria will move on to the next step sequentially until
   *    a  join is completed with an agent. When all steps are exhausted, the contact will be offered to
   *    any agent in the queue.</p>
   * @public
   */
  Steps?: RoutingCriteriaInputStep[] | undefined;
}

/**
 * <p>Contains information about a contact.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) for the contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier for the contact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ContactAssociationId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>The name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>If this contact was queued, this contains information about the queue. </p>
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: AgentInfo | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For <code>API</code>,
   *    this is when the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent
   *    started dialing the external participant. For <code>MONITOR</code>, this is when the supervisor
   *    started listening to a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when contact was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last paused.</p>
   * @public
   */
  LastPausedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last resumed.</p>
   * @public
   */
  LastResumedTimestamp?: Date | undefined;

  /**
   * <p>Total pause count for a contact.</p>
   * @public
   */
  TotalPauseCount?: number | undefined;

  /**
   * <p>Total pause duration for a contact in seconds.</p>
   * @public
   */
  TotalPauseDurationInSeconds?: number | undefined;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *   </p>
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this
   *    contact.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>Information about Amazon Connect Wisdom.</p>
   * @public
   */
  WisdomInfo?: WisdomInfo | undefined;

  /**
   * <p></p>
   * @public
   */
  CustomerEndpoint?: EndpointInfo | undefined;

  /**
   * <p></p>
   * @public
   */
  SystemEndpoint?: EndpointInfo | undefined;

  /**
   * <p>An integer that represents the queue time adjust to be applied to the contact, in seconds
   *    (longer / larger queue time are routed preferentially). Cannot be specified if the QueuePriority
   *    is specified. Must be statically defined and a valid integer value.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>An integer that represents the queue priority to be applied to the contact (lower priorities
   *    are routed preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified.
   *    Must be statically defined, must be larger than zero, and a valid integer value. Default Value is
   *    5.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Tags associated with the contact. This contains both Amazon Web Services generated and
   *    user-defined tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when customer endpoint connected to Amazon Connect.</p>
   * @public
   */
  ConnectedToSystemTimestamp?: Date | undefined;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * <p>Information about the Customer on the contact.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>Information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * <p>Indicates how an <a href="https://docs.aws.amazon.com/connect/latest/adminguide/how-to-create-campaigns.html">outbound campaign</a> call is
   *    actually disposed if the contact is connected to Amazon Connect.</p>
   * @public
   */
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus | undefined;

  /**
   * <p>Information about customer’s voice activity.</p>
   * @public
   */
  CustomerVoiceActivity?: CustomerVoiceActivity | undefined;

  /**
   * <p>Information about the quality of the participant's media connection.</p>
   * @public
   */
  QualityMetrics?: QualityMetrics | undefined;

  /**
   * <p>Information about the call disconnect experience.</p>
   * @public
   */
  DisconnectDetails?: DisconnectDetails | undefined;

  /**
   * <p></p>
   * @public
   */
  AdditionalEmailRecipients?: AdditionalEmailRecipients | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes and can be accessed in
   *    flows. Attribute keys can include only alphanumeric, -, and _ characters. This field can be used
   *    to show channel subtype. For example, <code>connect:Guide</code> or
   *    <code>connect:SMS</code>.</p>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The number of seconds to add or subtract from the contact's routing age. Contacts are routed
   *    to agents on a first-come, first-serve basis. This means that changing their amount of time in
   *    queue compared to others also changes their position in queue.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>Priority of the contact in the queue. The default priority for new contacts is 5. You can
   *    raise the priority of a contact compared to other contacts in the queue by assigning them a
   *    higher priority, such as 1 or 2.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Updates the routing criteria on the contact. These properties can be used to change how a
   *    contact is routed within the queue.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteriaInput | undefined;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   * @public
   */
  Contact?: Contact | undefined;
}

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeContactResponseFilterSensitiveLog = (obj: DescribeContactResponse): any => ({
  ...obj,
  ...(obj.Contact && { Contact: ContactFilterSensitiveLog(obj.Contact) }),
});
