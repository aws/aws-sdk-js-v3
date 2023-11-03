// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { LaunchWizardServiceException as __BaseException } from "./LaunchWizardServiceException";

/**
 * @public
 */
export interface CreateDeploymentInput {
  /**
   * @public
   * <p>The name of the workload. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">
   *                <code>ListWorkloadDeploymentPatterns</code>
   *             </a> operation to discover supported
   *          values for this parameter.</p>
   */
  workloadName: string | undefined;

  /**
   * @public
   * <p>The name of the deployment pattern supported by a given workload. You can use the <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/API_ListWorkloadDeploymentPatterns.html">
   *                <code>ListWorkloadDeploymentPatterns</code>
   *             </a> operation to discover supported
   *          values for this parameter. </p>
   */
  deploymentPatternName: string | undefined;

  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The settings specified for the deployment. For more information on the specifications
   *          required for creating a deployment, see <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications.html">Workload specifications</a>.</p>
   */
  specifications: Record<string, string> | undefined;

  /**
   * @public
   * <p>Checks whether you have the required permissions for the action, without actually making
   *          the request, and provides an error response. If you have the required permissions, the
   *          error response is <code>DryRunOperation</code>. Otherwise, it is
   *             <code>UnauthorizedOperation</code>.</p>
   */
  dryRun?: boolean;
}

/**
 * @public
 */
export interface CreateDeploymentOutput {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId?: string;
}

/**
 * @public
 * <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
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
 * @public
 * <p>You have exceeded an Launch Wizard resource limit. For example, you might have too many
 *          deployments in progress.</p>
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
 * @public
 * <p>The specified workload or deployment resource can't be found.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
   * @public
   * <p>The ID of the deployment.</p>
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
   * @public
   * <p>The status of the deployment.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The reason for the deployment status.</p>
   */
  statusReason?: string;
}

/**
 * @public
 */
export interface ListDeploymentEventsInput {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
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
 * @public
 * <p>A summary of the deployment event data.</p>
 */
export interface DeploymentEventDataSummary {
  /**
   * @public
   * <p>The name of the deployment event.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the deployment event.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the deployment event.</p>
   */
  status?: EventStatus;

  /**
   * @public
   * <p>The reason of the deployment event status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The timestamp of the deployment event.</p>
   */
  timestamp?: Date;
}

/**
 * @public
 */
export interface ListDeploymentEventsOutput {
  /**
   * @public
   * <p>Lists the deployment events.</p>
   */
  deploymentEvents?: DeploymentEventDataSummary[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetDeploymentInput {
  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  deploymentId: string | undefined;
}

/**
 * @public
 * <p>The data associated with a deployment.</p>
 */
export interface DeploymentData {
  /**
   * @public
   * <p>The name of the deployment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName?: string;

  /**
   * @public
   * <p>The pattern name of the deployment.</p>
   */
  patternName?: string;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The time the deployment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The specifications of the deployment. For more information on specifications for each
   *          deployment, see <a href="https://docs.aws.amazon.com/launchwizard/latest/APIReference/launch-wizard-specifications.html">Workload specifications</a>.</p>
   */
  specifications?: Record<string, string>;

  /**
   * @public
   * <p>The resource group of the deployment.</p>
   */
  resourceGroup?: string;

  /**
   * @public
   * <p>The time the deployment was deleted.</p>
   */
  deletedAt?: Date;
}

/**
 * @public
 */
export interface GetDeploymentOutput {
  /**
   * @public
   * <p>An object that details the deployment.</p>
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
 * @public
 * <p>A filter name and value pair that is used to return more specific results from a
 *          describe operation. Filters can be used to match a set of resources by specific
 *          criteria.</p>
 */
export interface DeploymentFilter {
  /**
   * @public
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  name?: DeploymentFilterKey;

  /**
   * @public
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for
   *          a filter, the values are joined with an <code>OR</code>, and the request returns all
   *          results that match any of the specified values.</p>
   */
  values?: string[];
}

/**
 * @public
 */
export interface ListDeploymentsInput {
  /**
   * @public
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
   */
  filters?: DeploymentFilter[];

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of the deployment data.</p>
 */
export interface DeploymentDataSummary {
  /**
   * @public
   * <p>The name of the deployment</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ID of the deployment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName?: string;

  /**
   * @public
   * <p>The name of the workload deployment pattern.</p>
   */
  patternName?: string;

  /**
   * @public
   * <p>The status of the deployment.</p>
   */
  status?: DeploymentStatus;

  /**
   * @public
   * <p>The time the deployment was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface ListDeploymentsOutput {
  /**
   * @public
   * <p>Lists the deployments.</p>
   */
  deployments?: DeploymentDataSummary[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetWorkloadInput {
  /**
   * @public
   * <p>The name of the workload.</p>
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
 * @public
 * <p>Describes a workload.</p>
 */
export interface WorkloadData {
  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName?: string;

  /**
   * @public
   * <p>The display name of a workload.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of a workload.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The URL of a workload document.</p>
   */
  documentationUrl?: string;

  /**
   * @public
   * <p>The URL of a workload icon.</p>
   */
  iconUrl?: string;

  /**
   * @public
   * <p>The status of a workload.</p>
   */
  status?: WorkloadStatus;

  /**
   * @public
   * <p>The message about a workload's status.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetWorkloadOutput {
  /**
   * @public
   * <p>Information about the workload.</p>
   */
  workload?: WorkloadData;
}

/**
 * @public
 */
export interface ListWorkloadsInput {
  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes workload data.</p>
 */
export interface WorkloadDataSummary {
  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName?: string;

  /**
   * @public
   * <p>The display name of the workload data.</p>
   */
  displayName?: string;
}

/**
 * @public
 */
export interface ListWorkloadsOutput {
  /**
   * @public
   * <p>Information about the workloads.</p>
   */
  workloads?: WorkloadDataSummary[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsInput {
  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to return for this request. To get the next page of items,
   *          make another request with the token returned in the output.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token returned from a previous paginated request. Pagination continues from the end
   *          of the items returned by the previous request.</p>
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
 * @public
 * <p>Describes a workload deployment pattern.</p>
 */
export interface WorkloadDeploymentPatternDataSummary {
  /**
   * @public
   * <p>The name of the workload.</p>
   */
  workloadName?: string;

  /**
   * @public
   * <p>The name of a workload deployment pattern.</p>
   */
  deploymentPatternName?: string;

  /**
   * @public
   * <p>The name of the workload deployment pattern version.</p>
   */
  workloadVersionName?: string;

  /**
   * @public
   * <p>The display name of a workload deployment pattern.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of a workload deployment pattern.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of a workload deployment pattern.</p>
   */
  status?: WorkloadDeploymentPatternStatus;

  /**
   * @public
   * <p>A message about a workload deployment pattern's status.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface ListWorkloadDeploymentPatternsOutput {
  /**
   * @public
   * <p>Describes the workload deployment patterns.</p>
   */
  workloadDeploymentPatterns?: WorkloadDeploymentPatternDataSummary[];

  /**
   * @public
   * <p>The token to include in another request to get the next page of items. This value is
   *             <code>null</code> when there are no more items to return.</p>
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
