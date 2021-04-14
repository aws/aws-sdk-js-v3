import { BooleanOperator, UserSettings } from "./models_0";
import {
  MemberDefinition,
  NotificationConfiguration,
  OidcConfig,
  SourceIpConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  Workforce,
  Workteam,
} from "./models_1";
import { Filter, NestedFilters, ResourceType, SearchSortOrder } from "./models_2";

export interface UpdateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace UpdateTrialResponse {
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj,
  });
}

export interface UpdateTrialComponentRequest {
  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];
}

export namespace UpdateTrialComponentRequest {
  export const filterSensitiveLog = (obj: UpdateTrialComponentRequest): any => ({
    ...obj,
    ...(obj.Parameters && {
      Parameters: Object.entries(obj.Parameters).reduce(
        (acc: any, [key, value]: [string, TrialComponentParameterValue]) => ({
          ...acc,
          [key]: TrialComponentParameterValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface UpdateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
  export const filterSensitiveLog = (obj: UpdateTrialComponentResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace UpdateUserProfileRequest {
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace UpdateUserProfileResponse {
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkforceRequest {
  /**
   * <p>The name of the private workforce that you want to update. You can find your workforce
   *         name by using the  operation.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>A list of one to ten worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: Ten CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>Use this parameter to update your OIDC Identity Provider (IdP)
   *       configuration for a workforce made using your own IdP.</p>
   */
  OidcConfig?: OidcConfig;
}

export namespace UpdateWorkforceRequest {
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj,
    ...(obj.OidcConfig && { OidcConfig: OidcConfig.filterSensitiveLog(obj.OidcConfig) }),
  });
}

export interface UpdateWorkforceResponse {
  /**
   * <p>A single private workforce. You can create one private work force in each AWS Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamRequest {
  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *         <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>. You should not provide input
   *             for both of these parameters in a single request.</p>
   *         <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>For workforces created using your own OIDC IdP, specify the user groups that you want
   *             to include in your private work team in <code>OidcMemberDefinition</code> by listing
   *             those groups in <code>Groups</code>. Be aware that user groups that are already in the
   *             work team must also be listed in <code>Groups</code> when you make this request to
   *             remain on the work team. If you do not include these user groups, they will no longer be
   *             associated with the work team you update. </p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace UpdateWorkteamRequest {
  export const filterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

export namespace UpdateWorkteamResponse {
  export const filterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
    ...obj,
  });
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
 */
export interface SearchExpression {
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;
}

export namespace SearchExpression {
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj,
  });
}

export interface SearchRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>A Boolean conditional statement. Resources must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;

  /**
   * <p>If more than <code>MaxResults</code> resources match the specified
   *       <code>SearchExpression</code>, the response includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace SearchRequest {
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj,
  });
}
