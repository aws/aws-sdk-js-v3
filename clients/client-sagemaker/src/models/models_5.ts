// smithy-typescript generated code
import { BooleanOperator } from "./models_0";

import { UserSettings } from "./models_1";

import {
  CrossAccountFilterOption,
  MemberDefinition,
  NotificationConfiguration,
  OidcConfig,
  OidcConfigFilterSensitiveLog,
  SourceIpConfig,
  WorkerAccessConfiguration,
  WorkforceVpcConfigRequest,
} from "./models_2";

import { Filter, ResourceType, Workforce, Workteam } from "./models_3";

import { NestedFilters, SearchSortOrder, VisibilityConditions } from "./models_4";

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *             name by using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListWorkforces.html">ListWorkforces</a> operation.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *          <p>Maximum: Ten CIDR values</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   * @public
   */
  OidcConfig?: OidcConfig | undefined;

  /**
   * <p>Use this parameter to update your VPC configuration for a workforce.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest | undefined;
}

/**
 * @public
 */
export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   * @public
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *          <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *          <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   * @public
   */
  MemberDefinitions?: MemberDefinition[] | undefined;

  /**
   * <p>An updated description for the work team.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A list of nested filter objects.</p>
   * @public
   */
  NestedFilters?: NestedFilters[] | undefined;

  /**
   * <p>A list of search expression objects.</p>
   * @public
   */
  SubExpressions?: SearchExpression[] | undefined;

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   * @public
   */
  Operator?: BooleanOperator | undefined;
}

/**
 * @public
 */
export interface SearchRequest {
  /**
   * <p>The name of the SageMaker resource to search for.</p>
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   * @public
   */
  SearchExpression?: SearchExpression | undefined;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SearchSortOrder | undefined;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       A cross account filter option. When the value is <code>"CrossAccount"</code> the
   *       search results will only include resources made discoverable to you from other
   *       accounts. When the value is <code>"SameAccount"</code> or <code>null</code> the
   *       search results will only include resources from your account. Default is
   *       <code>null</code>. For more information on searching for resources made
   *       discoverable to your account, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-cross-account-discoverability-use.html">
   *         Search discoverable resources</a> in the SageMaker Developer Guide.
   *       The maximum number of <code>ResourceCatalog</code>s viewable is 1000.
   *     </p>
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | undefined;

  /**
   * <p>
   *       Limits the results of your search request to the resources that you can access.
   *     </p>
   * @public
   */
  VisibilityConditions?: VisibilityConditions[] | undefined;
}

/**
 * @internal
 */
export const UpdateWorkforceRequestFilterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});
