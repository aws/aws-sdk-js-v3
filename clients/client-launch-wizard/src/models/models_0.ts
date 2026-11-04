// smithy-typescript generated code
import type {
  DeploymentFilterKey,
  DeploymentPatternVersionFilterKey,
  DeploymentStatus,
  EventStatus,
  WorkloadDeploymentPatternStatus,
  WorkloadStatus,
} from "./enums";

/**
 * The deployment must be initiated from a delegated administrator account for the specified service principal.
 * @public
 */
export interface DelegatedAdminConstraint {
  /**
   * The service principal for which the account must be a delegated administrator. For example, `stacksets.cloudformation.amazonaws.com`.
   * @public
   */
  servicePrincipal: string | undefined;
}

/**
 * The deployment must be initiated from the AWS Organizations management account.
 * @public
 */
export interface ManagementAccountConstraint {}

/**
 * A constraint on which AWS account a deployment can be initiated from. Specify one of the supported constraint types.
 * @public
 */
export type AccountConstraint =
  | AccountConstraint.DelegatedAdminMember
  | AccountConstraint.ManagementAccountMember
  | AccountConstraint.$UnknownMember;

/**
 * @public
 */
export namespace AccountConstraint {
  /**
   * The deployment must be initiated from the AWS Organizations management account.
   * @public
   */
  export interface ManagementAccountMember {
    managementAccount: ManagementAccountConstraint;
    delegatedAdmin?: never;
    $unknown?: never;
  }

  /**
   * The deployment must be initiated from a delegated administrator account for the specified service principal.
   * @public
   */
  export interface DelegatedAdminMember {
    managementAccount?: never;
    delegatedAdmin: DelegatedAdminConstraint;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    managementAccount?: never;
    delegatedAdmin?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    managementAccount: (value: ManagementAccountConstraint) => T;
    delegatedAdmin: (value: DelegatedAdminConstraint) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * The name of the workload. You can use the [`ListWorkloads`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The name of the deployment pattern supported by a given workload. You can use the [`ListWorkloadDeploymentPatterns`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  deploymentPatternName: string | undefined;

  /**
   * The name of the deployment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see [SAP deployment specifications](https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications-sap.html). To retrieve the specifications required to create a deployment for other workloads, use the [`GetWorkloadDeploymentPattern`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkloadDeploymentPattern.html) operation.
   *
   * @public
   */
  specifications: Record<string, string> | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  dryRun?: boolean | undefined;

  /**
   * The tags to add to the deployment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentOutput {
  /**
   * The status of the deployment.
   *
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * The reason for the deployment status.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListDeploymentEventsInput {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of the deployment event data.
 *
 * @public
 */
export interface DeploymentEventDataSummary {
  /**
   * The name of the deployment event.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the deployment event.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the deployment event.
   *
   * @public
   */
  status?: EventStatus | undefined;

  /**
   * The reason of the deployment event status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp of the deployment event.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * A map of metadata key-value pairs associated with a deployment event.
   * For error detection events, contains workload context and log excerpts used for troubleshooting.
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDeploymentEventsOutput {
  /**
   * Lists the deployment events.
   *
   * @public
   */
  deploymentEvents?: DeploymentEventDataSummary[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * The data associated with a deployment.
 *
 * @public
 */
export interface DeploymentData {
  /**
   * The name of the deployment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the deployment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The pattern name of the deployment.
   *
   * @public
   */
  patternName?: string | undefined;

  /**
   * The status of the deployment.
   *
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * The time the deployment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the deployment was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see [SAP deployment specifications](https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications-sap.html). To retrieve the specifications required to create a deployment for other workloads, use the [`GetWorkloadDeploymentPattern`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkloadDeploymentPattern.html) operation.
   *
   * @public
   */
  specifications?: Record<string, string> | undefined;

  /**
   * The resource group of the deployment.
   *
   * @public
   */
  resourceGroup?: string | undefined;

  /**
   * The time the deployment was deleted.
   *
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * Information about the tags attached to a deployment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deployment.
   *
   * @public
   */
  deploymentArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * An object that details the deployment.
   *
   * @public
   */
  deployment?: DeploymentData | undefined;
}

/**
 * A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria.
 *
 * @public
 */
export interface DeploymentFilter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  name?: DeploymentFilterKey | undefined;

  /**
   * The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an `OR`, and the request returns all results that match any of the specified values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * Filters to scope the results. The following filters are supported:
   *
   * - `WORKLOAD_NAME` - The name used in deployments.
   * - `DEPLOYMENT_STATUS` - `COMPLETED` | `CREATING` | `DELETE_IN_PROGRESS` | `DELETE_INITIATING` | `DELETE_FAILED` | `DELETED` | `FAILED` | `IN_PROGRESS` | `VALIDATING`
   *
   * @public
   */
  filters?: DeploymentFilter[] | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of the deployment data.
 *
 * @public
 */
export interface DeploymentDataSummary {
  /**
   * The name of the deployment
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the deployment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The name of the workload deployment pattern.
   *
   * @public
   */
  patternName?: string | undefined;

  /**
   * The status of the deployment.
   *
   * @public
   */
  status?: DeploymentStatus | undefined;

  /**
   * The time the deployment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time the deployment was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * Lists the deployments.
   *
   * @public
   */
  deployments?: DeploymentDataSummary[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentInput {
  /**
   * The ID of the deployment.
   *
   * @public
   */
  deploymentId: string | undefined;

  /**
   * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see [SAP deployment specifications](https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications-sap.html). To retrieve the specifications required to create a deployment for other workloads, use the [`GetWorkloadDeploymentPattern`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkloadDeploymentPattern.html) operation.
   *
   * @public
   */
  specifications: Record<string, string> | undefined;

  /**
   * The name of the workload version.
   *
   * @public
   */
  workloadVersionName?: string | undefined;

  /**
   * The name of the deployment pattern version.
   *
   * @public
   */
  deploymentPatternVersionName?: string | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  dryRun?: boolean | undefined;

  /**
   * Forces the update even if validation warnings are present.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentOutput {
  /**
   * The deployment.
   *
   * @public
   */
  deployment?: DeploymentDataSummary | undefined;
}

/**
 * A field that details a condition of the specifications for a deployment.
 *
 * @public
 */
export interface DeploymentConditionalField {
  /**
   * The name of the deployment condition.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the condition.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The comparator of the condition.
   *
   * Valid values: `Equal | NotEqual`
   *
   * @public
   */
  comparator?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentPatternVersionInput {
  /**
   * The name of the workload. You can use the [`ListWorkloads`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The name of the deployment pattern. You can use the [`ListWorkloadDeploymentPatterns`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  deploymentPatternName: string | undefined;

  /**
   * The name of the deployment pattern version.
   *
   * @public
   */
  deploymentPatternVersionName: string | undefined;
}

/**
 * Describes a deployment pattern version summary.
 *
 * @public
 */
export interface DeploymentPatternVersionDataSummary {
  /**
   * The name of the deployment pattern version.
   *
   * @public
   */
  deploymentPatternVersionName?: string | undefined;

  /**
   * The description of the deployment pattern version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The URL of the documentation for the deployment pattern version.
   *
   * @public
   */
  documentationUrl?: string | undefined;

  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The name of the deployment pattern.
   *
   * @public
   */
  deploymentPatternName?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentPatternVersionOutput {
  /**
   * The deployment pattern version.
   *
   * @public
   */
  deploymentPatternVersion?: DeploymentPatternVersionDataSummary | undefined;
}

/**
 * A filter for deployment pattern versions. Use this filter to specify criteria for querying deployment pattern versions in Launch Wizard.
 *
 * @public
 */
export interface DeploymentPatternVersionFilter {
  /**
   * The name of the filter attribute. Specifies which attribute to filter on when querying deployment pattern versions.
   *
   * @public
   */
  name: DeploymentPatternVersionFilterKey | undefined;

  /**
   * The values to filter by. Contains the specific values to match against when filtering deployment pattern versions.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentPatternVersionsInput {
  /**
   * The name of the workload. You can use the [`ListWorkloads`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloads.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The name of the deployment pattern. You can use the [`ListWorkloadDeploymentPatterns`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html) operation to discover supported values for this parameter.
   *
   * @public
   */
  deploymentPatternName: string | undefined;

  /**
   * The maximum number of deployment pattern versions to list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters to apply when listing deployment pattern versions.
   *
   * @public
   */
  filters?: DeploymentPatternVersionFilter[] | undefined;
}

/**
 * @public
 */
export interface ListDeploymentPatternVersionsOutput {
  /**
   * The deployment pattern versions.
   *
   * @public
   */
  deploymentPatternVersions?: DeploymentPatternVersionDataSummary[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A field that details a specification of a deployment pattern.
 *
 * @public
 */
export interface DeploymentSpecificationsField {
  /**
   * The name of the deployment specification.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the deployment specification.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The allowed values of the deployment specification.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * Indicates if the deployment specification is required.
   *
   * @public
   */
  required?: string | undefined;

  /**
   * The conditionals used for the deployment specification.
   *
   * @public
   */
  conditionals?: DeploymentConditionalField[] | undefined;
}

/**
 * @public
 */
export interface GetWorkloadInput {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName: string | undefined;
}

/**
 * Describes a workload.
 *
 * @public
 */
export interface WorkloadData {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The display name of a workload.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The status of a workload.
   *
   * *You can list deployments in the `DISABLED` status.*
   *
   * @public
   */
  status?: WorkloadStatus | undefined;

  /**
   * Optional list of constraints describing what kind of AWS account is allowed to deploy this workload or deployment pattern. Within a single list the semantics are OR: an account satisfies the list if it satisfies any entry. Workload-level and pattern-level lists combine with AND at deployment time. An absent or empty list at this level means no constraint at this level.
   * @public
   */
  accountConstraints?: AccountConstraint[] | undefined;

  /**
   * The description of a workload.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The URL of a workload document.
   *
   * @public
   */
  documentationUrl?: string | undefined;

  /**
   * The URL of a workload icon.
   *
   * @public
   */
  iconUrl?: string | undefined;

  /**
   * The message about a workload's status.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * Information about the workload.
   *
   * @public
   */
  workload?: WorkloadData | undefined;
}

/**
 * @public
 */
export interface GetWorkloadDeploymentPatternInput {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The name of the deployment pattern.
   *
   * @public
   */
  deploymentPatternName: string | undefined;
}

/**
 * The data that details a workload deployment pattern.
 *
 * @public
 */
export interface WorkloadDeploymentPatternData {
  /**
   * The workload name of the deployment pattern.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The name of the deployment pattern.
   *
   * @public
   */
  deploymentPatternName?: string | undefined;

  /**
   * The workload version name of the deployment pattern.
   *
   * @public
   */
  workloadVersionName?: string | undefined;

  /**
   * The version name of the deployment pattern.
   *
   * @public
   */
  deploymentPatternVersionName?: string | undefined;

  /**
   * The display name of the deployment pattern.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the deployment pattern.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the deployment pattern.
   *
   * @public
   */
  status?: WorkloadDeploymentPatternStatus | undefined;

  /**
   * The status message of the deployment pattern.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * Optional list of constraints describing what kind of AWS account is allowed to deploy this workload or deployment pattern. Within a single list the semantics are OR: an account satisfies the list if it satisfies any entry. Workload-level and pattern-level lists combine with AND at deployment time. An absent or empty list at this level means no constraint at this level.
   * @public
   */
  accountConstraints?: AccountConstraint[] | undefined;

  /**
   * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see [SAP deployment specifications](https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications-sap.html). To retrieve the specifications required to create a deployment for other workloads, use the [`GetWorkloadDeploymentPattern`](https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_GetWorkloadDeploymentPattern.html) operation.
   *
   * @public
   */
  specifications?: DeploymentSpecificationsField[] | undefined;
}

/**
 * @public
 */
export interface GetWorkloadDeploymentPatternOutput {
  /**
   * Details about the workload deployment pattern.
   *
   * @public
   */
  workloadDeploymentPattern?: WorkloadDeploymentPatternData | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * Information about the tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * One or more tags to attach to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Keys identifying the tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes workload data.
 *
 * @public
 */
export interface WorkloadDataSummary {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The display name of the workload data.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The status of the workload.
   *
   * @public
   */
  status?: WorkloadStatus | undefined;

  /**
   * Optional list of constraints describing what kind of AWS account is allowed to deploy this workload or deployment pattern. Within a single list the semantics are OR: an account satisfies the list if it satisfies any entry. Workload-level and pattern-level lists combine with AND at deployment time. An absent or empty list at this level means no constraint at this level.
   * @public
   */
  accountConstraints?: AccountConstraint[] | undefined;
}

/**
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * Information about the workloads.
   *
   * @public
   */
  workloads?: WorkloadDataSummary[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsInput {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a workload deployment pattern.
 *
 * @public
 */
export interface WorkloadDeploymentPatternDataSummary {
  /**
   * The name of the workload.
   *
   * @public
   */
  workloadName?: string | undefined;

  /**
   * The name of a workload deployment pattern.
   *
   * @public
   */
  deploymentPatternName?: string | undefined;

  /**
   * The name of the workload deployment pattern version.
   *
   * @public
   */
  workloadVersionName?: string | undefined;

  /**
   * The version name of a workload deployment pattern.
   *
   * @public
   */
  deploymentPatternVersionName?: string | undefined;

  /**
   * The display name of a workload deployment pattern.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of a workload deployment pattern.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of a workload deployment pattern.
   *
   * @public
   */
  status?: WorkloadDeploymentPatternStatus | undefined;

  /**
   * A message about a workload deployment pattern's status.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * Optional list of constraints describing what kind of AWS account is allowed to deploy this workload or deployment pattern. Within a single list the semantics are OR: an account satisfies the list if it satisfies any entry. Workload-level and pattern-level lists combine with AND at deployment time. An absent or empty list at this level means no constraint at this level.
   * @public
   */
  accountConstraints?: AccountConstraint[] | undefined;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsOutput {
  /**
   * Describes the workload deployment patterns.
   *
   * @public
   */
  workloadDeploymentPatterns?: WorkloadDeploymentPatternDataSummary[] | undefined;

  /**
   * The token to include in another request to get the next page of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}
