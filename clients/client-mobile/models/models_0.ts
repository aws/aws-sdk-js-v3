import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             Account Action is required in order to continue the request.
 *         </p>
 */
export interface AccountActionRequiredException extends __SmithyException, $MetadataBearer {
  name: "AccountActionRequiredException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace AccountActionRequiredException {
  export const filterSensitiveLog = (obj: AccountActionRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The request cannot be processed because some parameter is not valid or the project
 *             state prevents the operation from being performed.
 *         </p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
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

export namespace CreateProjectRequest {
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
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
  attributes?: { [key: string]: string };
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
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

export namespace ProjectDetails {
  export const filterSensitiveLog = (obj: ProjectDetails): any => ({
    ...obj,
  });
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

export namespace CreateProjectResult {
  export const filterSensitiveLog = (obj: CreateProjectResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The service has encountered an unexpected error condition which prevents it from
 *             servicing the request.
 *         </p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             There are too many AWS Mobile Hub projects in the account or the account has
 *             exceeded the maximum number of resources in some AWS service. You should create
 *             another sub-account using AWS Organizations or remove some resources and retry
 *             your request.
 *         </p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             No entity can be found with the specified identifier.
 *         </p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The service is temporarily unavailable. The request should be retried after some
 *             time delay.
 *         </p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Too many requests have been received for this AWS account in too short a time. The
 *             request should be retried after some time delay.
 *         </p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Credentials of the caller are insufficient to authorize the request.
 *         </p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>
   *             The Exception Error Message.
   *         </p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
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

export namespace DeleteProjectRequest {
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
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

export namespace DeleteProjectResult {
  export const filterSensitiveLog = (obj: DeleteProjectResult): any => ({
    ...obj,
  });
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

export namespace DescribeBundleRequest {
  export const filterSensitiveLog = (obj: DescribeBundleRequest): any => ({
    ...obj,
  });
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

export namespace BundleDetails {
  export const filterSensitiveLog = (obj: BundleDetails): any => ({
    ...obj,
  });
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

export namespace DescribeBundleResult {
  export const filterSensitiveLog = (obj: DescribeBundleResult): any => ({
    ...obj,
  });
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

export namespace DescribeProjectRequest {
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
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

export namespace DescribeProjectResult {
  export const filterSensitiveLog = (obj: DescribeProjectResult): any => ({
    ...obj,
  });
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

export namespace ExportBundleRequest {
  export const filterSensitiveLog = (obj: ExportBundleRequest): any => ({
    ...obj,
  });
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

export namespace ExportBundleResult {
  export const filterSensitiveLog = (obj: ExportBundleResult): any => ({
    ...obj,
  });
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

export namespace ExportProjectRequest {
  export const filterSensitiveLog = (obj: ExportProjectRequest): any => ({
    ...obj,
  });
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

export namespace ExportProjectResult {
  export const filterSensitiveLog = (obj: ExportProjectResult): any => ({
    ...obj,
  });
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

export namespace ListBundlesRequest {
  export const filterSensitiveLog = (obj: ListBundlesRequest): any => ({
    ...obj,
  });
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

export namespace ListBundlesResult {
  export const filterSensitiveLog = (obj: ListBundlesResult): any => ({
    ...obj,
  });
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

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
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

export namespace ProjectSummary {
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
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

export namespace ListProjectsResult {
  export const filterSensitiveLog = (obj: ListProjectsResult): any => ({
    ...obj,
  });
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

export namespace UpdateProjectRequest {
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
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

export namespace UpdateProjectResult {
  export const filterSensitiveLog = (obj: UpdateProjectResult): any => ({
    ...obj,
  });
}
