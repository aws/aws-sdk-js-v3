// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MobileServiceException as __BaseException } from "./MobileServiceException";

/**
 * <p>
 *             Account Action is required in order to continue the request.
 *         </p>
 */
export class AccountActionRequiredException extends __BaseException {
  readonly name: "AccountActionRequiredException" = "AccountActionRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountActionRequiredException, __BaseException>) {
    super({
      name: "AccountActionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountActionRequiredException.prototype);
  }
}

/**
 * <p>
 *             The request cannot be processed because some parameter is not valid or the project
 *             state prevents the operation from being performed.
 *         </p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>
 *             Request structure used to request a project be created.
 *         </p>
 */
export interface CreateProjectRequest {
  /**
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             Default region where project resources should be created.
   *         </p>
   */
  region?: string;

  /**
   * <p>
   *             ZIP or YAML file which contains configuration settings to be used when creating
   *             the project. This may be the contents of the file downloaded from the URL provided
   *             in an export project operation.
   *         </p>
   */
  contents?: Uint8Array;

  /**
   * <p>
   *             Unique identifier for an exported snapshot of project configuration. This
   *             snapshot identifier is included in the share URL when a project is exported.
   *         </p>
   */
  snapshotId?: string;
}

/**
 * <p>
 *             Information about an instance of an AWS resource associated with a project.
 *         </p>
 */
export interface Resource {
  /**
   * <p>
   *             Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket).
   *         </p>
   */
  type?: string;

  /**
   * <p>
   *             Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket).
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             AWS resource name which uniquely identifies the resource in AWS systems.
   *         </p>
   */
  arn?: string;

  /**
   * <p>
   *             Identifies which feature in AWS Mobile Hub is associated with this AWS resource.
   *         </p>
   */
  feature?: string;

  /**
   * <p>
   *             Key-value attribute pairs.
   *         </p>
   */
  attributes?: Record<string, string>;
}

export enum ProjectState {
  IMPORTING = "IMPORTING",
  NORMAL = "NORMAL",
  SYNCING = "SYNCING",
}

/**
 * <p>
 *             Detailed information about an AWS Mobile Hub project.
 *         </p>
 */
export interface ProjectDetails {
  /**
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;

  /**
   * <p>
   *             Default region to use for AWS resource creation in the AWS Mobile Hub project.
   *         </p>
   */
  region?: string;

  /**
   * <p>
   *             Synchronization state for a project.
   *         </p>
   */
  state?: ProjectState | string;

  /**
   * <p>
   *             Date the project was created.
   *         </p>
   */
  createdDate?: Date;

  /**
   * <p>
   *             Date of the last modification of the project.
   *         </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>
   *             Website URL for this project in the AWS Mobile Hub console.
   *         </p>
   */
  consoleUrl?: string;

  /**
   * <p>
   *             List of AWS resources associated with a project.
   *         </p>
   */
  resources?: Resource[];
}

/**
 * <p>
 *             Result structure used in response to a request to create a project.
 *         </p>
 */
export interface CreateProjectResult {
  /**
   * <p>
   *             Detailed information about the created AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}

/**
 * <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>
 *             There are too many AWS Mobile Hub projects in the account or the account has
 *             exceeded the maximum number of resources in some AWS service. You should create
 *             another sub-account using AWS Organizations or remove some resources and retry
 *             your request.
 *         </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>
 *             Request structure used to request a project be deleted.
 *         </p>
 */
export interface DeleteProjectRequest {
  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * <p>
 *             Result structure used in response to request to delete a project.
 *         </p>
 */
export interface DeleteProjectResult {
  /**
   * <p>
   *             Resources which were deleted.
   *         </p>
   */
  deletedResources?: Resource[];

  /**
   * <p>
   *             Resources which were not deleted, due to a risk of losing potentially
   *             important data or files.
   *         </p>
   */
  orphanedResources?: Resource[];
}

/**
 * <p>
 *             Request structure to request the details of a specific bundle.
 *         </p>
 */
export interface DescribeBundleRequest {
  /**
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId: string | undefined;
}

export enum Platform {
  ANDROID = "ANDROID",
  JAVASCRIPT = "JAVASCRIPT",
  LINUX = "LINUX",
  OBJC = "OBJC",
  OSX = "OSX",
  SWIFT = "SWIFT",
  WINDOWS = "WINDOWS",
}

/**
 * <p>
 *             The details of the bundle.
 *         </p>
 */
export interface BundleDetails {
  /**
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId?: string;

  /**
   * <p>
   *             Title of the download bundle.
   *         </p>
   */
  title?: string;

  /**
   * <p>
   *             Version of the download bundle.
   *         </p>
   */
  version?: string;

  /**
   * <p>
   *             Description of the download bundle.
   *         </p>
   */
  description?: string;

  /**
   * <p>
   *             Icon for the download bundle.
   *         </p>
   */
  iconUrl?: string;

  /**
   * <p>
   *             Developer desktop or mobile app or website platforms.
   *         </p>
   */
  availablePlatforms?: (Platform | string)[];
}

/**
 * <p>
 *             Result structure contains the details of the bundle.
 *         </p>
 */
export interface DescribeBundleResult {
  /**
   * <p>
   *             The details of the bundle.
   *         </p>
   */
  details?: BundleDetails;
}

/**
 * <p>
 *             Request structure used to request details about a project.
 *         </p>
 */
export interface DescribeProjectRequest {
  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;

  /**
   * <p>
   *             If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project.
   *         </p>
   */
  syncFromResources?: boolean;
}

/**
 * <p>
 *             Result structure used for requests of project details.
 *         </p>
 */
export interface DescribeProjectResult {
  /**
   * <p>
   *             Detailed information about an AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}

/**
 * <p>
 *             Request structure used to request generation of custom SDK and tool packages
 *             required to integrate mobile web or app clients with backed AWS resources.
 *         </p>
 */
export interface ExportBundleRequest {
  /**
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId: string | undefined;

  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;

  /**
   * <p>
   *             Developer desktop or target application platform.
   *         </p>
   */
  platform?: Platform | string;
}

/**
 * <p>
 *             Result structure which contains link to download custom-generated SDK and
 *             tool packages used to integrate mobile web or app clients with backed
 *             AWS resources.
 *         </p>
 */
export interface ExportBundleResult {
  /**
   * <p>
   *             URL which contains the custom-generated SDK and tool packages used
   *             to integrate the client mobile app or web app with the AWS resources
   *             created by the AWS Mobile Hub project.
   *         </p>
   */
  downloadUrl?: string;
}

/**
 * <p>
 *             Request structure used in requests to export project configuration details.
 *         </p>
 */
export interface ExportProjectRequest {
  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * <p>
 *             Result structure used for requests to export project configuration details.
 *         </p>
 */
export interface ExportProjectResult {
  /**
   * <p>
   *             URL which can be used to download the exported project configuation file(s).
   *         </p>
   */
  downloadUrl?: string;

  /**
   * <p>
   *             URL which can be shared to allow other AWS users to create their own project
   *             in AWS Mobile Hub with the same configuration as the specified project. This
   *             URL pertains to a snapshot in time of the project configuration that is created
   *             when this API is called. If you want to share additional changes to your project
   *             configuration, then you will need to create and share a new snapshot by calling
   *             this method again.
   *         </p>
   */
  shareUrl?: string;

  /**
   * <p>
   *             Unique identifier for the exported snapshot of the project configuration. This
   *             snapshot identifier is included in the share URL.
   *         </p>
   */
  snapshotId?: string;
}

/**
 * <p>
 *             Request structure to request all available bundles.
 *         </p>
 */
export interface ListBundlesRequest {
  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing bundles from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more bundles.
   *         </p>
   */
  nextToken?: string;
}

/**
 * <p>
 *             Result structure contains a list of all available bundles with details.
 *         </p>
 */
export interface ListBundlesResult {
  /**
   * <p>
   *             A list of bundles.
   *         </p>
   */
  bundleList?: BundleDetails[];

  /**
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

/**
 * <p>
 *             Request structure used to request projects list in AWS Mobile Hub.
 *         </p>
 */
export interface ListProjectsRequest {
  /**
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * <p>
   *             Pagination token. Set to null to start listing projects from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more projects.
   *         </p>
   */
  nextToken?: string;
}

/**
 * <p>
 *             Summary information about an AWS Mobile Hub project.
 *         </p>
 */
export interface ProjectSummary {
  /**
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;
}

/**
 * <p>
 *             Result structure used for requests to list projects in AWS Mobile Hub.
 *         </p>
 */
export interface ListProjectsResult {
  /**
   * <p>
   *             List of projects.
   *         </p>
   */
  projects?: ProjectSummary[];

  /**
   * <p>
   *             Pagination token. Set to null to start listing records from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more entries.
   *         </p>
   */
  nextToken?: string;
}

/**
 * <p>
 *             Request structure used for requests to update project configuration.
 *         </p>
 */
export interface UpdateProjectRequest {
  /**
   * <p>
   *             ZIP or YAML file which contains project configuration to be updated. This should
   *             be the contents of the file downloaded from the URL provided in an export project
   *             operation.
   *         </p>
   */
  contents?: Uint8Array;

  /**
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * <p>
 *             Result structure used for requests to updated project configuration.
 *         </p>
 */
export interface UpdateProjectResult {
  /**
   * <p>
   *             Detailed information about the updated AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDetailsFilterSensitiveLog = (obj: ProjectDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResultFilterSensitiveLog = (obj: CreateProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResultFilterSensitiveLog = (obj: DeleteProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBundleRequestFilterSensitiveLog = (obj: DescribeBundleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BundleDetailsFilterSensitiveLog = (obj: BundleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBundleResultFilterSensitiveLog = (obj: DescribeBundleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResultFilterSensitiveLog = (obj: DescribeProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportBundleRequestFilterSensitiveLog = (obj: ExportBundleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportBundleResultFilterSensitiveLog = (obj: ExportBundleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportProjectRequestFilterSensitiveLog = (obj: ExportProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportProjectResultFilterSensitiveLog = (obj: ExportProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBundlesRequestFilterSensitiveLog = (obj: ListBundlesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBundlesResultFilterSensitiveLog = (obj: ListBundlesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResultFilterSensitiveLog = (obj: ListProjectsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectResultFilterSensitiveLog = (obj: UpdateProjectResult): any => ({
  ...obj,
});
