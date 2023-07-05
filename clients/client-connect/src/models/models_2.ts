// smithy-typescript generated code
import { Evaluation, EvaluationFormScoringStrategy } from "./models_0";
import {
  EvaluationForm,
  EvaluationFormContent,
  EvaluationFormItem,
  HierarchyGroupCondition,
  HoursOfOperationSearchCriteria,
  HoursOfOperationSearchFilter,
  PromptSearchCriteria,
  PromptSearchFilter,
  QueueSearchCriteria,
  QueueSearchFilter,
  QuickConnectSearchFilter,
  RoutingProfileSearchFilter,
  SecurityProfilesSearchFilter,
  StringCondition,
  UserSearchFilter,
} from "./models_1";

/**
 * @public
 * <p>The search criteria to be used to return quick connects.</p>
 */
export interface QuickConnectSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: QuickConnectSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: QuickConnectSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return routing profiles.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 */
export interface RoutingProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return security profiles.</p>
 *          <note>
 *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
 *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
 *     invalid results.</p>
 *          </note>
 */
export interface SecurityProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition. </p>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form to update.</p>
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>A flag indicating whether the operation must create a new version.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   */
  Description?: string;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * <p>The search criteria to be used to return users.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results.  </p>
 *          </note>
 */
export interface UserSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   */
  OrConditions?: UserSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   */
  AndConditions?: UserSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * <p>Information about the evaluation form completed for a specific contact.</p>
   */
  Evaluation: Evaluation | undefined;

  /**
   * <p>Information about the evaluation form.</p>
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * <p>Information about the evaluation form.</p>
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: HoursOfOperationSearchFilter;

  /**
   * <p>The search criteria to be used to return hours of operations.</p>
   */
  SearchCriteria?: HoursOfOperationSearchCriteria;
}

/**
 * @public
 */
export interface SearchPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: PromptSearchFilter;

  /**
   * <p>The search criteria to be used to return prompts.</p>
   */
  SearchCriteria?: PromptSearchCriteria;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: QueueSearchFilter;

  /**
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: QueueSearchCriteria;
}

/**
 * @public
 */
export interface SearchQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: QuickConnectSearchFilter;

  /**
   * <p>The search criteria to be used to return quick connects.</p>
   */
  SearchCriteria?: QuickConnectSearchCriteria;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: RoutingProfileSearchFilter;

  /**
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: RoutingProfileSearchCriteria;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

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
   */
  SearchCriteria?: SecurityProfileSearchCriteria;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: SecurityProfilesSearchFilter;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: UserSearchFilter;

  /**
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   */
  SearchCriteria?: UserSearchCriteria;
}
