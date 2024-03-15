// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { LaunchWizardServiceException as __BaseException } from "./LaunchWizardServiceException";

/**
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * <p>The name of the workload. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">
   *                <code>ListWorkloadDeploymentPatterns</code>
   *             </a> operation to discover supported
   *          values for this parameter.</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>The name of the deployment pattern supported by a given workload. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">
   *                <code>ListWorkloadDeploymentPatterns</code>
   *             </a> operation to discover supported
   *          values for this parameter. </p>
   * @public
   */
  deploymentPatternName: string | undefined;

  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The settings specified for the deployment. For more information on the specifications
   *          required for creating a deployment, see <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications.html">Workload specifications</a>.</p>
   * @public
   */
  specifications: Record<string, string> | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making
   *          the request, and provides an error response. If you have the required permissions, the
   *          error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  dryRun?: boolean;
}

/**
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  deploymentId?: string;
}

/**
 * <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>You have exceeded an Launch Wizard resource limit. For example, you might have too many
 *          deployments in progress.</p>
 * @public
 */
export class ResourceLimitException extends __BaseException {
  readonly name: "ResourceLimitException" = "ResourceLimitException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitException, __BaseException>) {
    super({
      name: "ResourceLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitException.prototype);
  }
}

/**
 * <p>The specified workload or deployment resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteDeploymentInput {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_INITIATING: "DELETE_INITIATING",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 */
export interface DeleteDeploymentOutput {
  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  status?: DeploymentStatus;

  /**
   * <p>The reason for the deployment status.</p>
   * @public
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListDeploymentEventsInput {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EventStatus = {
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];

/**
 * <p>A summary of the deployment event data.</p>
 * @public
 */
export interface DeploymentEventDataSummary {
  /**
   * <p>The name of the deployment event.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the deployment event.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the deployment event.</p>
   * @public
   */
  status?: EventStatus;

  /**
   * <p>The reason of the deployment event status.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The timestamp of the deployment event.</p>
   * @public
   */
  timestamp?: Date;
}

/**
 * @public
 */
export interface ListDeploymentEventsOutput {
  /**
   * <p>Lists the deployment events.</p>
   * @public
   */
  deploymentEvents?: DeploymentEventDataSummary[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  deploymentId: string | undefined;
}

/**
 * <p>The data associated with a deployment.</p>
 * @public
 */
export interface DeploymentData {
  /**
   * <p>The name of the deployment.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName?: string;

  /**
   * <p>The pattern name of the deployment.</p>
   * @public
   */
  patternName?: string;

  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  status?: DeploymentStatus;

  /**
   * <p>The time the deployment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The specifications of the deployment. For more information on specifications for each
   *          deployment, see <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications.html">Workload specifications</a>.</p>
   * @public
   */
  specifications?: Record<string, string>;

  /**
   * <p>The resource group of the deployment.</p>
   * @public
   */
  resourceGroup?: string;

  /**
   * <p>The time the deployment was deleted.</p>
   * @public
   */
  deletedAt?: Date;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * <p>An object that details the deployment.</p>
   * @public
   */
  deployment?: DeploymentData;
}

/**
 * @public
 * @enum
 */
export const DeploymentFilterKey = {
  DEPLOYMENT_STATUS: "DEPLOYMENT_STATUS",
  WORKLOAD_NAME: "WORKLOAD_NAME",
} as const;

/**
 * @public
 */
export type DeploymentFilterKey = (typeof DeploymentFilterKey)[keyof typeof DeploymentFilterKey];

/**
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific
 *          criteria.</p>
 * @public
 */
export interface DeploymentFilter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  name?: DeploymentFilterKey;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for
   *          a filter, the values are joined with an <code>OR</code>, and the request returns all
   *          results that match any of the specified values.</p>
   * @public
   */
  values?: string[];
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * <p>Filters to scope the results. The following filters are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WORKLOAD_NAME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPLOYMENT_STATUS</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: DeploymentFilter[];

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of the deployment data.</p>
 * @public
 */
export interface DeploymentDataSummary {
  /**
   * <p>The name of the deployment</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the deployment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName?: string;

  /**
   * <p>The name of the workload deployment pattern.</p>
   * @public
   */
  patternName?: string;

  /**
   * <p>The status of the deployment.</p>
   * @public
   */
  status?: DeploymentStatus;

  /**
   * <p>The time the deployment was created.</p>
   * @public
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * <p>Lists the deployments.</p>
   * @public
   */
  deployments?: DeploymentDataSummary[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetWorkloadInput {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkloadStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type WorkloadStatus = (typeof WorkloadStatus)[keyof typeof WorkloadStatus];

/**
 * <p>Describes a workload.</p>
 * @public
 */
export interface WorkloadData {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName?: string;

  /**
   * <p>The display name of a workload.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The description of a workload.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The URL of a workload document.</p>
   * @public
   */
  documentationUrl?: string;

  /**
   * <p>The URL of a workload icon.</p>
   * @public
   */
  iconUrl?: string;

  /**
   * <p>The status of a workload.</p>
   * @public
   */
  status?: WorkloadStatus;

  /**
   * <p>The message about a workload's status.</p>
   * @public
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * <p>Information about the workload.</p>
   * @public
   */
  workload?: WorkloadData;
}

/**
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Describes workload data.</p>
 * @public
 */
export interface WorkloadDataSummary {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName?: string;

  /**
   * <p>The display name of the workload data.</p>
   * @public
   */
  displayName?: string;
}

/**
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * <p>Information about the workloads.</p>
   * @public
   */
  workloads?: WorkloadDataSummary[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsInput {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const WorkloadDeploymentPatternStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type WorkloadDeploymentPatternStatus =
  (typeof WorkloadDeploymentPatternStatus)[keyof typeof WorkloadDeploymentPatternStatus];

/**
 * <p>Describes a workload deployment pattern.</p>
 * @public
 */
export interface WorkloadDeploymentPatternDataSummary {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  workloadName?: string;

  /**
   * <p>The name of a workload deployment pattern.</p>
   * @public
   */
  deploymentPatternName?: string;

  /**
   * <p>The name of the workload deployment pattern version.</p>
   * @public
   */
  workloadVersionName?: string;

  /**
   * <p>The display name of a workload deployment pattern.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The description of a workload deployment pattern.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of a workload deployment pattern.</p>
   * @public
   */
  status?: WorkloadDeploymentPatternStatus;

  /**
   * <p>A message about a workload deployment pattern's status.</p>
   * @public
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsOutput {
  /**
   * <p>Describes the workload deployment patterns.</p>
   * @public
   */
  workloadDeploymentPatterns?: WorkloadDeploymentPatternDataSummary[];

  /**
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const CreateDeploymentInputFilterSensitiveLog = (obj: CreateDeploymentInput): any => ({
  ...obj,
  ...(obj.specifications && { specifications: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeploymentDataFilterSensitiveLog = (obj: DeploymentData): any => ({
  ...obj,
  ...(obj.specifications && { specifications: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeploymentOutputFilterSensitiveLog = (obj: GetDeploymentOutput): any => ({
  ...obj,
  ...(obj.deployment && { deployment: DeploymentDataFilterSensitiveLog(obj.deployment) }),
});
