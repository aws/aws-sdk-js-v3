// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";

import {
  AccountGateResult,
  AutoDeployment,
  CallAs,
  Capability,
  Category,
  DeploymentTargets,
  DeprecatedStatus,
  IdentityProvider,
  LoggingConfig,
  ManagedExecution,
  OperationResultFilter,
  Parameter,
  PermissionModels,
  ProvisioningType,
  RegistrationStatus,
  RegistryType,
  ResourceDefinition,
  RollbackConfiguration,
  ScanFilter,
  StackDriftStatus,
  StackSetOperationAction,
  StackSetOperationPreferences,
  StackSetOperationStatus,
  StackSetOperationStatusDetails,
  StackSetStatus,
  Tag,
  TemplateConfiguration,
  ThirdPartyType,
  Visibility,
} from "./models_0";

/**
 * @public
 */
export interface ListStackSetOperationResultsInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to get operation results for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of the StackSet operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * <p>The filter to apply to operation results.</p>
   * @public
   */
  Filters?: OperationResultFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StackSetOperationResultStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type StackSetOperationResultStatus =
  (typeof StackSetOperationResultStatus)[keyof typeof StackSetOperationResultStatus];

/**
 * <p>The structure that contains information about a specified operation's results for a given
 *    account in a given Region.</p>
 * @public
 */
export interface StackSetOperationResultSummary {
  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account for this operation result.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region for this operation result.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The result status of the StackSet operation for the given account in the given
   *    Region.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has been
   *      canceled. This is either because a user has stopped the StackSet operation, or because the
   *      failure tolerance of the StackSet operation has been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed.</p>
   *                <p>If the StackSet operation fails in enough accounts within a Region, the failure tolerance
   *      for the StackSet operation as a whole might be exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is currently in
   *      progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet to
   *      start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region completed
   *      successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StackSetOperationResultStatus | undefined;

  /**
   * <p>The reason for the assigned result status.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The results of the account gate function CloudFormation invokes, if present, before proceeding
   *    with StackSet operations in an account.</p>
   * @public
   */
  AccountGateResult?: AccountGateResult | undefined;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that
   *    you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationResultsOutput {
  /**
   * <p>A list of <code>StackSetOperationResultSummary</code> structures that contain information
   *       about the specified operation results, for accounts and Amazon Web Services Regions that are included in the
   *       operation.</p>
   * @public
   */
  Summaries?: StackSetOperationResultSummary[] | undefined;

  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To
   *       retrieve the next set of results, call <code>ListOperationResults</code> again and assign that
   *       token to the request object's <code>NextToken</code> parameter. If there are no remaining
   *       results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationsInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to get operation summaries for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * <p>The structures that contain summary information about the specified operation.</p>
 * @public
 */
export interface StackSetOperationSummary {
  /**
   * <p>The unique ID of the StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>The type of operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>.
   *    Create and delete operations affect only the specified stack instances that are associated with
   *    the specified StackSet. Update operations affect both the StackSet itself and
   *     <i>all</i> associated StackSet instances.</p>
   * @public
   */
  Action?: StackSetOperationAction | undefined;

  /**
   * <p>The overall status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure
   *      tolerance value that you've set for an operation is applied for each Region during stack create
   *      and update operations. If the number of failed stacks within a Region exceeds the failure
   *      tolerance, the status of the operation in the Region is set to <code>FAILED</code>. This in
   *      turn sets the status of the operation as a whole to <code>FAILED</code>, and CloudFormation cancels
   *      the operation in any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that require
   *      a sequence of operations, the operation is queued to be performed. For more information, see
   *      the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">StackSet status codes</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has canceled the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user
   *      request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the specified
   *      stacks without exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StackSetOperationStatus | undefined;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the StackSet
   *    operation might differ from the creation time of the individual stacks themselves. This is
   *    because CloudFormation needs to perform preparatory work for the operation, such as dispatching the
   *    work to the requested Regions, before actually creating the first stacks.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The time at which the StackSet operation ended, across all accounts and Regions specified.
   *    Note that this doesn't necessarily mean that the StackSet operation was successful, or even
   *    attempted, in each account or Region.</p>
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * <p>The status of the operation in details.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Detailed information about the StackSet operation.</p>
   * @public
   */
  StatusDetails?: StackSetOperationStatusDetails | undefined;

  /**
   * <p>The user-specified preferences for how CloudFormation performs a StackSet operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">StackSet
   *     operation options</a>.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationsOutput {
  /**
   * <p>A list of <code>StackSetOperationSummary</code> structures that contain summary
   *       information about operations for the specified StackSet.</p>
   * @public
   */
  Summaries?: StackSetOperationSummary[] | undefined;

  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To
   *       retrieve the next set of results, call <code>ListOperationResults</code> again and assign that
   *       token to the request object's <code>NextToken</code> parameter. If there are no remaining
   *       results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetsInput {
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the StackSets that you want to get summary information about.</p>
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the management account or as a delegated administrator in a member
   *       account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * <p>The structures that contain summary information about the specified StackSet.</p>
 * @public
 */
export interface StackSetSummary {
  /**
   * <p>The name of the StackSet.</p>
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * <p>The ID of the StackSet.</p>
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * <p>A description of the StackSet that you specify when the StackSet is created or
   *    updated.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the StackSet.</p>
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organizational unit (OU).</p>
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * <p>Describes how the IAM roles required for StackSet operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *      execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *       self-managed permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM
   *      roles required to deploy to accounts managed by Organizations. For more information,
   *      see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html">Activate
   *       trusted access for StackSets with Organizations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * <p>Status of the StackSet's actual configuration compared to its expected template and
   *    parameter configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the StackSet differs
   *      from the expected template and parameter configuration. A stack instance is considered to have
   *      drifted if one or more of the resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked the StackSet for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All the stack instances belonging to the StackSet match the expected
   *      template and parameter configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the StackSet. This
   *    value will be <code>NULL</code> for any StackSet that drift detection hasn't yet been performed
   *    on.</p>
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues
   *    conflicting operations.</p>
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface ListStackSetsOutput {
  /**
   * <p>A list of <code>StackSetSummary</code> structures that contain information about the
   *       user's StackSets.</p>
   * @public
   */
  Summaries?: StackSetSummary[] | undefined;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set
   *       to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again
   *       and assign that token to the request object's <code>NextToken</code> parameter. If the request
   *       returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeRegistrationsInput {
  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The current status of the extension registration request.</p>
   *          <p>The default is <code>IN_PROGRESS</code>.</p>
   * @public
   */
  RegistrationStatusFilter?: RegistrationStatus | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeRegistrationsOutput {
  /**
   * <p>A list of extension registration tokens.</p>
   *          <p>Use <a>DescribeTypeRegistration</a> to return detailed information about a type
   *       registration request.</p>
   * @public
   */
  RegistrationTokenList?: string[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call this action again and assign that token to
   *       the request object's <code>NextToken</code> parameter. If the request returns all results,
   *         <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Filter criteria to use in determining which extensions to return.</p>
 * @public
 */
export interface TypeFilters {
  /**
   * <p>The category of extensions to return.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code>: Private extensions that have been registered for this account and
   *      Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATED</code>: Public extensions that have been activated for this account and
   *      Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRD_PARTY</code>: Extensions available for use from publishers other than Amazon.
   *      This includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions registered in the account.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions from publishers other than Amazon, whether activated or not.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_TYPES</code>: Extensions available for use from Amazon.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Category?: Category | undefined;

  /**
   * <p>The id of the publisher of the extension.</p>
   *          <p>Extensions published by Amazon aren't assigned a publisher ID. Use the
   *     <code>AWS_TYPES</code> category to specify a list of types published by Amazon.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>A prefix to use as a filter for results.</p>
   * @public
   */
  TypeNamePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListTypesInput {
  /**
   * <p>The scope at which the extensions are visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: Extensions that are visible and usable within this account and
   *           Region. This includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions you have registered in this account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions that you have activated in this account and Region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: Extensions that are publicly visible and available to be
   *           activated within any Amazon Web Services account. This includes extensions from Amazon Web Services and third-party
   *           publishers.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>PRIVATE</code>.</p>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>For resource types, the provisioning behavior of the resource type. CloudFormation determines
   *       the provisioning type during registration, based on the types of handlers in the schema
   *       handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process
   *           updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the
   *           type can't be updated and must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type doesn't include create, read, and
   *           delete handlers, and therefore can't actually be provisioned.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>FULLY_MUTABLE</code>.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The deprecation status of the extension that you want to get summary information
   *       about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is registered for use in CloudFormation
   *           operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deregistered and can no longer be used
   *           in CloudFormation operations.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * <p>The type of extension.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>Filter criteria to use in determining which extensions to return.</p>
   *          <p>Filters must be compatible with <code>Visibility</code> to return valid results. For
   *       example, specifying <code>AWS_TYPES</code> for <code>Category</code> and <code>PRIVATE</code>
   *       for <code>Visibility</code> returns an empty list of types, but specifying <code>PUBLIC</code>
   *       for <code>Visibility</code> returns the desired list.</p>
   * @public
   */
  Filters?: TypeFilters | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about the specified CloudFormation extension.</p>
 * @public
 */
export interface TypeSummary {
  /**
   * <p>The kind of extension.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a> API
   *    operation in your account and Region, CloudFormation considers that alias as the type name.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The ID of the default version of the extension. The default version is used when the
   *    extension version isn't specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public
   *    extensions, both those provided by Amazon and published by third parties, CloudFormation returns
   *     <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <a>SetTypeDefaultVersion</a>.</p>
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * <p>The ARN of the extension.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified. For more
   *      information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   *          <p>For all other extension types, CloudFormation returns <code>null</code>.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The description of the extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the extension publisher, if the extension is published by a third party.
   *    Extensions published by Amazon don't return a publisher ID.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the type name of
   *    the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account
   *    and Region, CloudFormation treats that alias as the extension's type name within the account and
   *    Region, not the type name of the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Use
   *     aliases to refer to extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the version of
   *    the public extension to be used for CloudFormation operations in this account and Region.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *    CloudFormation automatically updates the extension in this account and Region when a new version is
   *    released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  PublicVersionNumber?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the latest
   *    version of the public extension <i>that is available</i>. For any extensions other
   *    than activated third-party extensions, CloudFormation returns <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *    CloudFormation automatically updates the extension in this account and Region when a new version is
   *    released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  LatestPublicVersion?: string | undefined;

  /**
   * <p>The service used to verify the publisher identity.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make
   *     them available for public use</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  PublisherIdentity?: IdentityProvider | undefined;

  /**
   * <p>The publisher name, as defined in the public profile for that publisher in the service used
   *    to verify the publisher identity.</p>
   * @public
   */
  PublisherName?: string | undefined;

  /**
   * <p>Whether the extension is activated for this account and Region.</p>
   *          <p>This applies only to third-party public extensions. Extensions published by Amazon are
   *    activated by default.</p>
   * @public
   */
  IsActivated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTypesOutput {
  /**
   * <p>A list of <code>TypeSummary</code> structures that contain information about the specified
   *       extensions.</p>
   * @public
   */
  TypeSummaries?: TypeSummary[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call this action again and assign that token to
   *       the request object's <code>NextToken</code> parameter. If the request returns all results,
   *         <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeVersionsInput {
  /**
   * <p>The kind of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension for which you want version summary information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary
   *       information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The deprecation status of the extension versions that you want to get summary information
   *       about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension version is registered and can be used in CloudFormation
   *           operations, dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension version has been deregistered and can no longer
   *           be used in CloudFormation operations.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>LIVE</code>.</p>
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions published by Amazon aren't assigned a publisher ID.</p>
   * @public
   */
  PublisherId?: string | undefined;
}

/**
 * <p>Contains summary information about a specific version of a CloudFormation extension.</p>
 * @public
 */
export interface TypeVersionSummary {
  /**
   * <p>The kind of extension.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of the
   *    ARN assigned to the extension version when it's registered.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and extensions
   *    published by Amazon. For public third-party extensions, CloudFormation returns
   *    <code>null</code>.</p>
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * <p>The ARN of the extension version.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>When the version was registered.</p>
   * @public
   */
  TimeCreated?: Date | undefined;

  /**
   * <p>The description of the extension version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the version of
   *    the public extension to be used for CloudFormation operations in this account and Region. For any
   *    extensions other than activated third-party extensions, CloudFormation returns
   *    <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *    CloudFormation automatically updates the extension in this account and Region when a new version is
   *    released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  PublicVersionNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeVersionsOutput {
  /**
   * <p>A list of <code>TypeVersionSummary</code> structures that contain information about the
   *       specified extension's versions.</p>
   * @public
   */
  TypeVersionSummaries?: TypeVersionSummary[] | undefined;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set
   *       to a token. To retrieve the next set of results, call this action again and assign that token
   *       to the request object's <code>NextToken</code> parameter. If the request returns all results,
   *         <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PublishTypeInput {
  /**
   * <p>The type of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The version number to assign to this version of the extension.</p>
   *          <p>Use the following format, and adhere to semantic versioning when assigning a version
   *       number to your extension:</p>
   *          <p>
   *             <code>MAJOR.MINOR.PATCH</code>
   *          </p>
   *          <p>For more information, see <a href="https://semver.org/">Semantic Versioning
   *         2.0.0</a>.</p>
   *          <p>If you don't specify a version number, CloudFormation increments the version number by one
   *       minor version release.</p>
   *          <p>You cannot specify a version number the first time you publish a type. CloudFormation
   *       automatically sets the first version number to be <code>1.0.0</code>.</p>
   * @public
   */
  PublicVersionNumber?: string | undefined;
}

/**
 * @public
 */
export interface PublishTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) assigned to the public extension upon publication.</p>
   * @public
   */
  PublicTypeArn?: string | undefined;
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name: "InvalidStateTransitionException" = "InvalidStateTransitionException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 * @public
 */
export class OperationStatusCheckFailedException extends __BaseException {
  readonly name: "OperationStatusCheckFailedException" = "OperationStatusCheckFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationStatusCheckFailedException, __BaseException>) {
    super({
      name: "OperationStatusCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationStatusCheckFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const HandlerErrorCode = {
  AccessDenied: "AccessDenied",
  AlreadyExists: "AlreadyExists",
  GeneralServiceException: "GeneralServiceException",
  HandlerInternalFailure: "HandlerInternalFailure",
  InternalFailure: "InternalFailure",
  InvalidCredentials: "InvalidCredentials",
  InvalidRequest: "InvalidRequest",
  InvalidTypeConfiguration: "InvalidTypeConfiguration",
  NetworkFailure: "NetworkFailure",
  NonCompliant: "NonCompliant",
  NotFound: "NotFound",
  NotUpdatable: "NotUpdatable",
  ResourceConflict: "ResourceConflict",
  ServiceInternalError: "ServiceInternalError",
  ServiceLimitExceeded: "ServiceLimitExceeded",
  ServiceTimeout: "NotStabilized",
  Throttling: "Throttling",
  Unknown: "Unknown",
  UnsupportedTarget: "UnsupportedTarget",
} as const;

/**
 * @public
 */
export type HandlerErrorCode = (typeof HandlerErrorCode)[keyof typeof HandlerErrorCode];

/**
 * @public
 */
export interface RecordHandlerProgressInput {
  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  BearerToken: string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  OperationStatus: OperationStatus | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  CurrentOperationStatus?: OperationStatus | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  ErrorCode?: HandlerErrorCode | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  ResourceModel?: string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *         CLI</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface RecordHandlerProgressOutput {}

/**
 * @public
 */
export interface RegisterPublisherInput {
  /**
   * <p>Whether you accept the <a href="https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf">Terms and Conditions</a> for publishing extensions in the CloudFormation registry. You must
   *       accept the terms and conditions in order to register to publish public extensions to the
   *       CloudFormation registry.</p>
   *          <p>The default is <code>false</code>.</p>
   * @public
   */
  AcceptTermsAndConditions?: boolean | undefined;

  /**
   * <p>If you are using a Bitbucket or GitHub account for identity verification, the Amazon
   *       Resource Name (ARN) for your connection to that account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Prerequisite: Registering your account to publish CloudFormation extensions</a> in the
   *         <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  ConnectionArn?: string | undefined;
}

/**
 * @public
 */
export interface RegisterPublisherOutput {
  /**
   * <p>The ID assigned this account by CloudFormation for publishing extensions.</p>
   * @public
   */
  PublisherId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTypeInput {
  /**
   * <p>The kind of extension.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension being registered.</p>
   *          <p>We suggest that extension names adhere to the following patterns:</p>
   *          <ul>
   *             <li>
   *                <p>For resource types, <code>company_or_organization::service::type</code>.</p>
   *             </li>
   *             <li>
   *                <p>For modules, <code>company_or_organization::service::type::MODULE</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Hooks, <code>MyCompany::Testing::MyTestHook</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The following organization namespaces are reserved and can't be used in your extension
   *         names:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>Alexa</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AMZN</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Amazon</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Custom</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Dev</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  TypeName: string | undefined;

  /**
   * <p>A URL to the S3 bucket that contains the extension project package that contains the
   *       necessary files for the extension you want to register.</p>
   *          <p>For information about generating a schema handler package for the extension you want to
   *       register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in
   *       the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   *          <note>
   *             <p>The user registering the extension must be able to access the package in the S3 bucket.
   *         That's, the user needs to have <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> permissions for the schema
   *         handler package. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html">Actions, Resources, and Condition Keys for
   *           Amazon S3</a> in the <i>Identity and Access Management User Guide</i>.</p>
   *          </note>
   * @public
   */
  SchemaHandlerPackage: string | undefined;

  /**
   * <p>Specifies logging configuration information for an extension.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking
   *       the extension.</p>
   *          <p>For CloudFormation to assume the specified execution role, the role must contain a trust
   *       relationship with the CloudFormation service principal
   *         (<code>resources.cloudformation.amazonaws.com</code>). For more information about adding
   *       trust relationships, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy">Modifying a role trust policy</a> in the <i>Identity and Access Management User
   *       Guide</i>.</p>
   *          <p>If your extension calls Amazon Web Services APIs in any of its handlers, you must create an
   *           <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM
   *           execution role</a>
   *             </i> that includes the necessary permissions to call those
   *       Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke
   *       the resource type handler, CloudFormation assumes this execution role to create a temporary
   *       session token, which it then passes to the resource type handler, thereby supplying your
   *       resource type with the appropriate credentials.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>A unique identifier that acts as an idempotency key for this registration request.
   *       Specifying a client request token prevents CloudFormation from generating more than one version of
   *       an extension from the same registration request, even if the request is submitted multiple
   *       times.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTypeOutput {
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>Use this registration token when calling <a>DescribeTypeRegistration</a>, which
   *       returns information about the status and IDs of the extension registration.</p>
   * @public
   */
  RegistrationToken?: string | undefined;
}

/**
 * @public
 */
export interface RollbackStackInput {
  /**
   * <p>The name that's associated with the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to rollback the
   *       stack.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>A unique identifier for this <code>RollbackStack</code> request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation
   *       rolls back. This includes newly created resources marked with a deletion policy of
   *         <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;
}

/**
 * @public
 */
export interface RollbackStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;
}

/**
 * <p>The input for the <a>SetStackPolicy</a> action.</p>
 * @public
 */
export interface SetStackPolicyInput {
  /**
   * <p>The name or unique stack ID that you want to associate a policy with.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>Structure that contains the stack policy body. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html">Prevent updates to stack resources</a> in the <i>CloudFormation User Guide</i>.
   *       You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *       parameter, but not both.</p>
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * <p>Location of a file that contains the stack policy. The URL must point to a policy (maximum
   *       size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. The location for
   *       an Amazon S3 bucket must start with <code>https://</code>. URLs from S3 static websites are not
   *       supported.</p>
   *          <p>You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *       parameter, but not both.</p>
   * @public
   */
  StackPolicyURL?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the extension in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a> API operation in this account and Region. For private extensions, this
   *       will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a> API
   *       operation in this account and Region.</p>
   *          <p>Do not include the extension versions suffix at the end of the ARN. You can set the
   *       configuration for an extension, but not for a specific extension version.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The configuration data for the extension in this account and Region.</p>
   *          <p>The configuration data must be formatted as JSON and validate against the extension's
   *       schema returned in the <code>Schema</code> response element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
   * @public
   */
  Configuration: string | undefined;

  /**
   * <p>An alias by which to refer to this extension configuration data.</p>
   *          <p>Conditional: Specifying a configuration alias is required when setting a configuration for
   *       a resource type extension.</p>
   * @public
   */
  ConfigurationAlias?: string | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *         <code>TypeName</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The type of extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *         <code>TypeName</code>.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;
}

/**
 * @public
 */
export interface SetTypeConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the configuration data in this account and
   *       Region.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *         <code>TypeName</code>.</p>
   * @public
   */
  ConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary
   *       information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *       the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionOutput {}

/**
 * @public
 * @enum
 */
export const ResourceSignalStatus = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ResourceSignalStatus = (typeof ResourceSignalStatus)[keyof typeof ResourceSignalStatus];

/**
 * <p>The input for the <a>SignalResource</a> action.</p>
 * @public
 */
export interface SignalResourceInput {
  /**
   * <p>The stack name or unique stack ID that includes the resource that you want to
   *       signal.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The logical ID of the resource that you want to signal. The logical ID is the name of the
   *       resource that given in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the
   *       instance ID that you are signaling as the unique ID. If you send multiple signals to a single
   *       resource (such as signaling a wait condition), each signal requires a different unique
   *       ID.</p>
   * @public
   */
  UniqueId: string | undefined;

  /**
   * <p>The status of the signal, which is either success or failure. A failure signal causes
   *       CloudFormation to immediately fail the stack creation or update.</p>
   * @public
   */
  Status: ResourceSignalStatus | undefined;
}

/**
 * <p>The limit on resource scans has been exceeded. Reasons include:</p>
 *          <ul>
 *             <li>
 *                <p>Exceeded the daily quota for resource scans.</p>
 *             </li>
 *             <li>
 *                <p>A resource scan recently failed. You must wait 10 minutes before starting a new resource scan.</p>
 *             </li>
 *             <li>
 *                <p>The last resource scan failed after exceeding 100,000 resources. When this happens, you must wait 24 hours
 *      before starting a new resource scan.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ResourceScanLimitExceededException extends __BaseException {
  readonly name: "ResourceScanLimitExceededException" = "ResourceScanLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanLimitExceededException, __BaseException>) {
    super({
      name: "ResourceScanLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartResourceScanInput {
  /**
   * <p>A unique identifier for this <code>StartResourceScan</code> request. Specify this token if
   *       you plan to retry requests so that CloudFormation knows that you're not attempting to start a new
   *       resource scan.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The scan filters to use.</p>
   * @public
   */
  ScanFilters?: ScanFilter[] | undefined;
}

/**
 * @public
 */
export interface StartResourceScanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan. The format is
   *         <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:resourceScan/$\{Id\}</code>. An
   *       example is
   *           <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:resourceScan/<i>f5b490f7-7ed4-428a-aa06-31ff25db0772</i>
   *             </code>.</p>
   * @public
   */
  ResourceScanId?: string | undefined;
}

/**
 * @public
 */
export interface StopStackSetOperationInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to stop the operation for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of the stack operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid only if the
   *    StackSet uses service-managed permissions.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *    self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *      <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *       <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *       delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface StopStackSetOperationOutput {}

/**
 * @public
 */
export interface TestTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * <p>The name of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The version of the extension to test.</p>
   *          <p>You can specify the version id with either <code>Arn</code>, or with <code>TypeName</code>
   *       and <code>Type</code>.</p>
   *          <p>If you don't specify a version, CloudFormation uses the default version of the extension in
   *       this account and Region for testing.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p>
   *          <p>CloudFormation delivers the logs by the time contract testing has completed and the extension
   *       has been assigned a test type status of <code>PASSED</code> or <code>FAILED</code>.</p>
   *          <p>The user calling <code>TestType</code> must be able to access items in the specified S3
   *       bucket. Specifically, the user needs the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GetObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PutObject</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html">Actions, Resources, and
   *         Condition Keys for Amazon S3</a> in the <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  LogDeliveryBucket?: string | undefined;
}

/**
 * @public
 */
export interface TestTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  TypeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of a generated template.</p>
   * @public
   */
  GeneratedTemplateName: string | undefined;

  /**
   * <p>An optional new name to assign to the generated template.</p>
   * @public
   */
  NewGeneratedTemplateName?: string | undefined;

  /**
   * <p>An optional list of resources to be added to the generated template.</p>
   * @public
   */
  AddResources?: ResourceDefinition[] | undefined;

  /**
   * <p>A list of logical ids for resources to remove from the generated template.</p>
   * @public
   */
  RemoveResources?: string[] | undefined;

  /**
   * <p>If <code>true</code>, update the resource properties in the generated template with their
   *       current live state. This feature is useful when the resource properties in your generated a
   *       template does not reflect the live state of the resource properties. This happens when a user
   *       update the resource properties after generating a template.</p>
   * @public
   */
  RefreshAllResources?: boolean | undefined;

  /**
   * <p>The configuration details of the generated template, including the
   *         <code>DeletionPolicy</code> and <code>UpdateReplacePolicy</code>.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the generated template. The format is
   *         <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}</code>.
   *       For example,
   *           <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:generatedtemplate/<i>2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc</i>
   *             </code>.</p>
   * @public
   */
  GeneratedTemplateId?: string | undefined;
}

/**
 * <p>The input for an <a>UpdateStack</a> action.</p>
 * @public
 */
export interface UpdateStackInput {
  /**
   * <p>The name or unique stack ID of the stack to update.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>Structure that contains the template body with a minimum length of 1 byte and a maximum
   *       length of 51,200 bytes.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template that's
   *       located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must
   *       start with <code>https://</code>.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>Reuse the existing template that is associated with the stack that you are
   *       updating.</p>
   *          <p>When using templates with the <code>AWS::LanguageExtensions</code> transform, provide the
   *       template instead of using <code>UsePreviousTemplate</code> to ensure new parameter values and
   *       Systems Manager parameter updates are applied correctly. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/transform-aws-languageextensions.html">AWS::LanguageExtensions transform</a>.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * <p>Structure that contains the temporary overriding stack policy body. You can specify either
   *       the <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code>
   *       parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy
   *       during this update. If you don't specify a stack policy, the current policy that is associated
   *       with the stack will be used.</p>
   * @public
   */
  StackPolicyDuringUpdateBody?: string | undefined;

  /**
   * <p>Location of a file that contains the temporary overriding stack policy. The URL must point
   *       to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The
   *       location for an Amazon S3 bucket must start with <code>https://</code>. URLs from S3 static
   *       websites are not supported.</p>
   *          <p>You can specify either the <code>StackPolicyDuringUpdateBody</code> or the
   *         <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy
   *       during this update. If you don't specify a stack policy, the current policy that is associated
   *       with the stack will be used.</p>
   * @public
   */
  StackPolicyDuringUpdateURL?: string | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the stack.
   *       For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *       type.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *       capabilities in order for CloudFormation to update the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your
   *           Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must
   *           explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *             <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *               specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *                 <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we suggest that you review all
   *           permissions associated with them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html">
   *                 AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html">
   *                 AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html"> AWS::IAM::ManagedPolicy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html">AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html">
   *                 AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html">
   *                 AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can
   *           include simple actions like find-and-replace operations, all the way to extensive
   *           transformations of entire templates. Because of this, users typically create a change set
   *           from the processed template, so that they can review the changes resulting from the macros
   *           before actually updating the stack. If your stack template contains one or more macros,
   *           and you choose to update a stack directly from the processed template, without first
   *           reviewing the resulting changes in a change set, you must acknowledge this capability.
   *           This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html">AWS::Include</a>
   *           and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <p>If you want to update a stack from a stack template that contains macros
   *             <i>and</i> nested stacks, you must update the stack directly from the
   *           template using this capability.</p>
   *                <important>
   *                   <p>You should only update stacks directly from a stack template that contains macros if
   *             you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *             templates. Be aware that the Lambda function owner can update the function operation
   *             without CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Perform custom processing
   *             on CloudFormation templates with template macros</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>Specifies which resource types you can work with, such as <code>AWS::EC2::Instance</code>
   *       or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're updating, the stack
   *       update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this
   *       parameter for CloudFormation-specific condition keys in IAM policies. For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html">Control CloudFormation
   *         access with Identity and Access Management</a>.</p>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to update the
   *       stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always
   *       uses this role for all future operations on the stack. Provided that users have permission to
   *       operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *       pass it. Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with
   *       the stack. If no role is available, CloudFormation uses a temporary session that is generated from
   *       your user credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
   *       operations, and for the specified monitoring period afterwards.</p>
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * <p>Structure that contains a new stack policy body. You can specify either the
   *         <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not
   *       both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that
   *       you created during a stack update. If you don't specify a stack policy, the current policy
   *       that is associated with the stack is unchanged.</p>
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * <p>Location of a file that contains the updated stack policy. The URL must point to a policy
   *       (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an
   *       Amazon S3 bucket must start with <code>https://</code>. URLs from S3 static websites are not
   *       supported.</p>
   *          <p>You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *       parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that
   *       you created during a stack update. If you don't specify a stack policy, the current policy
   *       that is associated with the stack is unchanged.</p>
   * @public
   */
  StackPolicyURL?: string | undefined;

  /**
   * <p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation
   *       associates with the stack. Specify an empty list to remove all notification topics.</p>
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to
   *       supported resources in the stack. You can specify a maximum number of 50 tags.</p>
   *          <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you
   *       specify an empty value, CloudFormation removes all associated tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Preserve the state of previously provisioned resources when an operation fails.</p>
   *          <p>Default: <code>False</code>
   *          </p>
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you
   *       plan to retry requests so that CloudFormation knows that you're not attempting to update a stack
   *       with the same name. You might retry <code>UpdateStack</code> requests to ensure that
   *       CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *       token, which you can use to track operations. For example, if you execute a
   *         <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *         <code>StackEvents</code> generated by that operation will have
   *         <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack
   *       operations that are initiated from the console use the token format
   *         <i>Console-StackOperation-ID</i>, which helps you easily identify the stack
   *       operation . For example, if you create a stack using the console, each stack event would be
   *       assigned the same token in the following format:
   *         <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation
   *       rolls back. This includes newly created resources marked with a deletion policy of
   *         <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;
}

/**
 * <p>The output for an <a>UpdateStack</a> action.</p>
 * @public
 */
export interface UpdateStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStackInstancesInput {
  /**
   * <p>The name or unique ID of the StackSet associated with the stack instances.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The account IDs of one or more Amazon Web Services accounts in which you want
   *       to update parameter values for stack instances. The overridden parameter values will be
   *       applied to all stack instances in the specified accounts and Amazon Web Services Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>[Service-managed permissions] The Organizations accounts in which you want to
   *       update parameter values for stack instances. If your update targets OUs, the overridden
   *       parameter values only apply to the accounts that are currently in the target OUs and their
   *       child OUs. Accounts added to the target OUs and their child OUs in the future won't use the
   *       overridden values.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * <p>The names of one or more Amazon Web Services Regions in which you want to update parameter values for
   *       stack instances. The overridden parameter values will be applied to all stack instances in the
   *       specified accounts and Amazon Web Services Regions.</p>
   * @public
   */
  Regions: string[] | undefined;

  /**
   * <p>A list of input parameters whose values you want to update for the specified stack
   *       instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the specified
   *       accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how
   *       CloudFormation sets parameter values during stack instance update operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and specify its
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and
   *           specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a
   *           value and set <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *             </li>
   *             <li>
   *                <p>To set an overridden parameter back to the value specified in the StackSet, specify a
   *           parameter list but don't include the parameter in the list.</p>
   *             </li>
   *             <li>
   *                <p>To leave all parameters set to their present values, don't specify this property at
   *           all.</p>
   *             </li>
   *          </ul>
   *          <p>During StackSet updates, any parameter values overridden for a stack instance aren't
   *       updated, but retain their overridden value.</p>
   *          <p>You can only override the parameter <i>values</i> that are specified in the
   *       StackSet. To add or delete a parameter itself, use <code>UpdateStackSet</code> to update the
   *       StackSet template. If you add a parameter to a template, before you can override the parameter
   *       value specified in the StackSet you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a>
   *       to update all stack instances with the updated template and parameter value specified in the
   *       StackSet. Once a stack instance has been updated with the new parameter, you can then override
   *       the parameter value using <code>UpdateStackInstances</code>.</p>
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * <p>Preferences for how CloudFormation performs this StackSet operation.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>The unique identifier for this StackSet operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation
   *       performs the StackSet operation only once, even if you retry the request multiple times. You
   *       might retry StackSet operation requests to ensure that CloudFormation successfully received
   *       them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *       automatically.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface UpdateStackInstancesOutput {
  /**
   * <p>The unique identifier for this StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStackSetInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to update.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>A brief description of updates that you are making.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *       maximum length of 51,200 bytes.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *         <code>UsePreviousTemplate</code> to true.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template
   *       (maximum size: 1 MB) that is located in an Amazon S3 bucket or a Systems Manager document. The
   *       location for an Amazon S3 bucket must start with <code>https://</code>. S3 static website URLs are
   *       not supported.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *         <code>UsePreviousTemplate</code> to true.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>Use the existing template that's associated with the StackSet that you're updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *         <code>UsePreviousTemplate</code> to true.</p>
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * <p>A list of input parameters for the StackSet template.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *       capabilities in order for CloudFormation to update the StackSet and its associated stack
   *       instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your
   *           Amazon Web Services account, for example, by creating new IAM users. For those stacks sets, you must
   *           explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *             <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *               specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *                 <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all
   *           permissions associated with them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html">AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html">AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html">AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html">AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html">AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your StackSet template references one or more
   *           macros, you must update the StackSet directly from the processed template, without first
   *           reviewing the resulting changes in a change set. To update the StackSet directly, you must
   *           acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Perform custom processing
   *             on CloudFormation templates with template macros</a>.</p>
   *                <important>
   *                   <p>StackSets with service-managed permissions do not currently support the use of
   *             macros in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if
   *             you specify this capability for a StackSet with service-managed permissions, if you
   *             reference a macro in your template the StackSet operation will fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>The key-value pairs to associate with this StackSet and the stacks created from it.
   *       CloudFormation also propagates these tags to supported resources that are created in the stacks.
   *       You can specify a maximum number of 50 tags.</p>
   *          <p>If you specify tags for this parameter, those tags replace any list of tags that are
   *       currently associated with this StackSet. This means:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's
   *           tags.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <i>any</i> tags using this parameter, you must specify
   *             <i>all</i> the tags that you want associated with this StackSet, even tags
   *           you've specified before (for example, when creating the StackSet or during a previous
   *           update of the StackSet.). Any tags that you don't include in the updated list of tags are
   *           removed from the StackSet, and therefore from the stacks and resources as well.</p>
   *             </li>
   *             <li>
   *                <p>If you specify an empty value, CloudFormation removes all currently associated
   *           tags.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, CloudFormation
   *       checks to see if you have the required IAM permission to tag resources. If you omit tags
   *       that are currently associated with the StackSet from the list of tags you specify, CloudFormation
   *       assumes that you want to remove those tags from the StackSet, and checks to see if you have
   *       permission to untag resources. If you don't have the necessary permission(s), the entire
   *         <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the
   *       StackSet is not updated.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Preferences for how CloudFormation performs this StackSet operation.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>[Self-managed permissions] The Amazon Resource Name (ARN) of the IAM role to use to
   *       update this StackSet.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *       which users or groups can manage specific StackSets within the same administrator account. For
   *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *         self-managed permissions</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>If you specified a customized administrator role when you created the StackSet, you must
   *       specify a customized administrator role, even if it is the same customized administrator role
   *       used with this StackSet previously.</p>
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * <p>[Self-managed permissions] The name of the IAM execution role to use to update the stack
   *       set. If you do not specify an execution role, CloudFormation uses the
   *         <code>AWSCloudFormationStackSetExecutionRole</code> role for the StackSet operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *       stack resources users and groups can include in their StackSets.</p>
   *          <p>If you specify a customized execution role, CloudFormation uses that role to update the stack.
   *       If you do not specify a customized execution role, CloudFormation performs the update using the
   *       role previously associated with the StackSet, so long as you have permissions to perform
   *       operations on the StackSet.</p>
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * <p>[Service-managed permissions] The Organizations accounts in which to update
   *       associated stack instances.</p>
   *          <p>To update all the stack instances associated with this StackSet, do not specify
   *         <code>DeploymentTargets</code> or <code>Regions</code>.</p>
   *          <p>If the StackSet update includes changes to the template (that is, if
   *         <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the
   *         <code>Parameters</code>, CloudFormation marks all stack instances with a status of
   *         <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *       Amazon Web Services Regions. If the StackSet update doesn't include changes to the template or parameters,
   *       CloudFormation updates the stack instances in the specified accounts and Regions, while leaving
   *       all other stack instances with their existing stack instance status.</p>
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * <p>Describes how the IAM roles required for StackSet operations are created. You cannot
   *       modify <code>PermissionModel</code> if there are stack instances associated with your stack
   *       set.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *           execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *             self-managed permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *           IAM roles required to deploy to accounts managed by Organizations. For more
   *           information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html">Activate trusted access for StackSets with Organizations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU).
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html">Enable or disable automatic deployments for StackSets in Organizations</a>
   *       in the <i>CloudFormation User Guide</i>.</p>
   *          <p>If you specify <code>AutoDeployment</code>, don't specify <code>DeploymentTargets</code>
   *       or <code>Regions</code>.</p>
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * <p>The unique ID for this StackSet operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation
   *       performs the StackSet operation only once, even if you retry the request multiple times. You
   *       might retry StackSet operation requests to ensure that CloudFormation successfully received
   *       them.</p>
   *          <p>If you don't specify an operation ID, CloudFormation generates one
   *       automatically.</p>
   *          <p>Repeating this StackSet operation with a new operation ID retries all stack instances
   *       whose status is <code>OUTDATED</code>.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>[Self-managed permissions] The accounts in which to update associated stack instances. If
   *       you specify accounts, you must also specify the Amazon Web Services Regions in which to update StackSet
   *       instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this StackSet,
   *       don't specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the StackSet update includes changes to the template (that is, if the
   *         <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *         <code>Parameters</code> property, CloudFormation marks all stack instances with a status of
   *         <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *       Amazon Web Services Regions. If the StackSet update does not include changes to the template or parameters,
   *       CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while
   *       leaving all other stack instances with their existing stack instance status.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions,
   *       you must also specify accounts in which to update StackSet instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this StackSet, do
   *       not specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the StackSet update includes changes to the template (that is, if the
   *         <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *         <code>Parameters</code> property, CloudFormation marks all stack instances with a status of
   *         <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *       Regions. If the StackSet update does not include changes to the template or parameters,
   *       CloudFormation updates the stack instances in the specified accounts and Regions, while leaving
   *       all other stack instances with their existing stack instance status.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * <p>Describes whether CloudFormation performs non-conflicting operations concurrently and queues
   *       conflicting operations.</p>
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface UpdateStackSetOutput {
  /**
   * <p>The unique ID for this StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionInput {
  /**
   * <p>Whether to enable termination protection on the specified stack.</p>
   * @public
   */
  EnableTerminationProtection: boolean | undefined;

  /**
   * <p>The name or unique ID of the stack for which you want to set termination
   *       protection.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionOutput {
  /**
   * <p>The unique ID of the stack.</p>
   * @public
   */
  StackId?: string | undefined;
}

/**
 * <p>The input for <a>ValidateTemplate</a> action.</p>
 * @public
 */
export interface ValidateTemplateInput {
  /**
   * <p>Structure that contains the template body with a minimum length of 1 byte and a maximum
   *       length of 51,200 bytes.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both
   *       are passed, only <code>TemplateBody</code> is used.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template (max
   *       size: 1 MB) that is located in an Amazon S3 bucket or a Systems Manager document. The location for
   *       an Amazon S3 bucket must start with <code>https://</code>.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both
   *       are passed, only <code>TemplateBody</code> is used.</p>
   * @public
   */
  TemplateURL?: string | undefined;
}

/**
 * <p>The <code>TemplateParameter</code> data type.</p>
 * @public
 */
export interface TemplateParameter {
  /**
   * <p>The name associated with the parameter.</p>
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * <p>The default value associated with the parameter.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>Flag indicating whether the parameter should be displayed as plain text in logs and
   *    UIs.</p>
   * @public
   */
  NoEcho?: boolean | undefined;

  /**
   * <p>User defined description associated with the parameter.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The output for <a>ValidateTemplate</a> action.</p>
 * @public
 */
export interface ValidateTemplateOutput {
  /**
   * <p>A list of <code>TemplateParameter</code> structures.</p>
   * @public
   */
  Parameters?: TemplateParameter[] | undefined;

  /**
   * <p>The description found within the template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The capabilities found within the template. If your template contains IAM resources, you
   *       must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use
   *       the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template;
   *       otherwise, those actions return an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code> response
   *       element.</p>
   * @public
   */
  CapabilitiesReason?: string | undefined;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   * @public
   */
  DeclaredTransforms?: string[] | undefined;
}
