// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MobileServiceException as __BaseException } from "./MobileServiceException";

/**
 * @public
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
 * @public
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
 * @public
 * <p>
 *             Request structure used to request a project be created.
 *         </p>
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *             Default region where project resources should be created.
   *         </p>
   */
  region?: string;

  /**
   * @public
   * <p>
   *             ZIP or YAML file which contains configuration settings to be used when creating
   *             the project. This may be the contents of the file downloaded from the URL provided
   *             in an export project operation.
   *         </p>
   */
  contents?: Uint8Array;

  /**
   * @public
   * <p>
   *             Unique identifier for an exported snapshot of project configuration. This
   *             snapshot identifier is included in the share URL when a project is exported.
   *         </p>
   */
  snapshotId?: string;
}

/**
 * @public
 * <p>
 *             Information about an instance of an AWS resource associated with a project.
 *         </p>
 */
export interface Resource {
  /**
   * @public
   * <p>
   *             Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket).
   *         </p>
   */
  type?: string;

  /**
   * @public
   * <p>
   *             Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket).
   *         </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *             AWS resource name which uniquely identifies the resource in AWS systems.
   *         </p>
   */
  arn?: string;

  /**
   * @public
   * <p>
   *             Identifies which feature in AWS Mobile Hub is associated with this AWS resource.
   *         </p>
   */
  feature?: string;

  /**
   * @public
   * <p>
   *             Key-value attribute pairs.
   *         </p>
   */
  attributes?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ProjectState = {
  IMPORTING: "IMPORTING",
  NORMAL: "NORMAL",
  SYNCING: "SYNCING",
} as const;

/**
 * @public
 */
export type ProjectState = (typeof ProjectState)[keyof typeof ProjectState];

/**
 * @public
 * <p>
 *             Detailed information about an AWS Mobile Hub project.
 *         </p>
 */
export interface ProjectDetails {
  /**
   * @public
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;

  /**
   * @public
   * <p>
   *             Default region to use for AWS resource creation in the AWS Mobile Hub project.
   *         </p>
   */
  region?: string;

  /**
   * @public
   * <p>
   *             Synchronization state for a project.
   *         </p>
   */
  state?: ProjectState | string;

  /**
   * @public
   * <p>
   *             Date the project was created.
   *         </p>
   */
  createdDate?: Date;

  /**
   * @public
   * <p>
   *             Date of the last modification of the project.
   *         </p>
   */
  lastUpdatedDate?: Date;

  /**
   * @public
   * <p>
   *             Website URL for this project in the AWS Mobile Hub console.
   *         </p>
   */
  consoleUrl?: string;

  /**
   * @public
   * <p>
   *             List of AWS resources associated with a project.
   *         </p>
   */
  resources?: Resource[];
}

/**
 * @public
 * <p>
 *             Result structure used in response to a request to create a project.
 *         </p>
 */
export interface CreateProjectResult {
  /**
   * @public
   * <p>
   *             Detailed information about the created AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}

/**
 * @public
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
 * @public
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
   * @public
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
 * @public
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
 * @public
 * <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
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
 * @public
 * <p>
 *             Request structure used to request a project be deleted.
 *         </p>
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * @public
 * <p>
 *             Result structure used in response to request to delete a project.
 *         </p>
 */
export interface DeleteProjectResult {
  /**
   * @public
   * <p>
   *             Resources which were deleted.
   *         </p>
   */
  deletedResources?: Resource[];

  /**
   * @public
   * <p>
   *             Resources which were not deleted, due to a risk of losing potentially
   *             important data or files.
   *         </p>
   */
  orphanedResources?: Resource[];
}

/**
 * @public
 * <p>
 *             Request structure to request the details of a specific bundle.
 *         </p>
 */
export interface DescribeBundleRequest {
  /**
   * @public
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Platform = {
  ANDROID: "ANDROID",
  JAVASCRIPT: "JAVASCRIPT",
  LINUX: "LINUX",
  OBJC: "OBJC",
  OSX: "OSX",
  SWIFT: "SWIFT",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * <p>
 *             The details of the bundle.
 *         </p>
 */
export interface BundleDetails {
  /**
   * @public
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId?: string;

  /**
   * @public
   * <p>
   *             Title of the download bundle.
   *         </p>
   */
  title?: string;

  /**
   * @public
   * <p>
   *             Version of the download bundle.
   *         </p>
   */
  version?: string;

  /**
   * @public
   * <p>
   *             Description of the download bundle.
   *         </p>
   */
  description?: string;

  /**
   * @public
   * <p>
   *             Icon for the download bundle.
   *         </p>
   */
  iconUrl?: string;

  /**
   * @public
   * <p>
   *             Developer desktop or mobile app or website platforms.
   *         </p>
   */
  availablePlatforms?: (Platform | string)[];
}

/**
 * @public
 * <p>
 *             Result structure contains the details of the bundle.
 *         </p>
 */
export interface DescribeBundleResult {
  /**
   * @public
   * <p>
   *             The details of the bundle.
   *         </p>
   */
  details?: BundleDetails;
}

/**
 * @public
 * <p>
 *             Request structure used to request details about a project.
 *         </p>
 */
export interface DescribeProjectRequest {
  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>
   *             If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project.
   *         </p>
   */
  syncFromResources?: boolean;
}

/**
 * @public
 * <p>
 *             Result structure used for requests of project details.
 *         </p>
 */
export interface DescribeProjectResult {
  /**
   * @public
   * <p>
   *             Detailed information about an AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}

/**
 * @public
 * <p>
 *             Request structure used to request generation of custom SDK and tool packages
 *             required to integrate mobile web or app clients with backed AWS resources.
 *         </p>
 */
export interface ExportBundleRequest {
  /**
   * @public
   * <p>
   *             Unique bundle identifier.
   *         </p>
   */
  bundleId: string | undefined;

  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;

  /**
   * @public
   * <p>
   *             Developer desktop or target application platform.
   *         </p>
   */
  platform?: Platform | string;
}

/**
 * @public
 * <p>
 *             Result structure which contains link to download custom-generated SDK and
 *             tool packages used to integrate mobile web or app clients with backed
 *             AWS resources.
 *         </p>
 */
export interface ExportBundleResult {
  /**
   * @public
   * <p>
   *             URL which contains the custom-generated SDK and tool packages used
   *             to integrate the client mobile app or web app with the AWS resources
   *             created by the AWS Mobile Hub project.
   *         </p>
   */
  downloadUrl?: string;
}

/**
 * @public
 * <p>
 *             Request structure used in requests to export project configuration details.
 *         </p>
 */
export interface ExportProjectRequest {
  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * @public
 * <p>
 *             Result structure used for requests to export project configuration details.
 *         </p>
 */
export interface ExportProjectResult {
  /**
   * @public
   * <p>
   *             URL which can be used to download the exported project configuation file(s).
   *         </p>
   */
  downloadUrl?: string;

  /**
   * @public
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
   * @public
   * <p>
   *             Unique identifier for the exported snapshot of the project configuration. This
   *             snapshot identifier is included in the share URL.
   *         </p>
   */
  snapshotId?: string;
}

/**
 * @public
 * <p>
 *             Request structure to request all available bundles.
 *         </p>
 */
export interface ListBundlesRequest {
  /**
   * @public
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *             Pagination token. Set to null to start listing bundles from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more bundles.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             Result structure contains a list of all available bundles with details.
 *         </p>
 */
export interface ListBundlesResult {
  /**
   * @public
   * <p>
   *             A list of bundles.
   *         </p>
   */
  bundleList?: BundleDetails[];

  /**
   * @public
   * <p>
   *             Pagination token. If non-null pagination token is returned in a result,
   *             then pass its value in another request to fetch more entries.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             Request structure used to request projects list in AWS Mobile Hub.
 *         </p>
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>
   *             Maximum number of records to list in a single response.
   *         </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *             Pagination token. Set to null to start listing projects from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more projects.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             Summary information about an AWS Mobile Hub project.
 *         </p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>
   *             Name of the project.
   *         </p>
   */
  name?: string;

  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId?: string;
}

/**
 * @public
 * <p>
 *             Result structure used for requests to list projects in AWS Mobile Hub.
 *         </p>
 */
export interface ListProjectsResult {
  /**
   * @public
   * <p>
   *             List of projects.
   *         </p>
   */
  projects?: ProjectSummary[];

  /**
   * @public
   * <p>
   *             Pagination token. Set to null to start listing records from start.
   *             If non-null pagination token is returned in a result, then pass its
   *             value in here in another request to list more entries.
   *         </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>
 *             Request structure used for requests to update project configuration.
 *         </p>
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>
   *             ZIP or YAML file which contains project configuration to be updated. This should
   *             be the contents of the file downloaded from the URL provided in an export project
   *             operation.
   *         </p>
   */
  contents?: Uint8Array;

  /**
   * @public
   * <p>
   *             Unique project identifier.
   *         </p>
   */
  projectId: string | undefined;
}

/**
 * @public
 * <p>
 *             Result structure used for requests to updated project configuration.
 *         </p>
 */
export interface UpdateProjectResult {
  /**
   * @public
   * <p>
   *             Detailed information about the updated AWS Mobile Hub project.
   *         </p>
   */
  details?: ProjectDetails;
}
