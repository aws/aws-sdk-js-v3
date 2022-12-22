// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DataExchangeServiceException as __BaseException } from "./DataExchangeServiceException";

/**
 * <p>Access to the resource is denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Access to the resource is denied.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum ServerSideEncryptionTypes {
  AES256 = "AES256",
  aws_kms = "aws:kms",
}

/**
 * <p>Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.</p>
 */
export interface ExportServerSideEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The type of server side encryption used for encrypting the objects in Amazon S3.</p>
   */
  Type: ServerSideEncryptionTypes | string | undefined;
}

/**
 * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
 */
export interface AutoExportRevisionDestinationEntry {
  /**
   * <p>The Amazon S3 bucket that is the destination for the event action.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface AutoExportRevisionToS3RequestDetails {
  /**
   * <p>Encryption configuration for the auto export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
   */
  RevisionDestination: AutoExportRevisionDestinationEntry | undefined;
}

/**
 * <p>What occurs after a certain event.</p>
 */
export interface Action {
  /**
   * <p>Details for the export revision to Amazon S3 action.</p>
   */
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
}

export enum ProtocolType {
  REST = "REST",
}

/**
 * <p>The API Gateway API that is the asset.</p>
 */
export interface ApiGatewayApiAsset {
  /**
   * <p>The API description of the API asset.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API endpoint of the API asset.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The unique identifier of the API asset.</p>
   */
  ApiId?: string;

  /**
   * <p>The API key of the API asset.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name of the API asset.</p>
   */
  ApiName?: string;

  /**
   * <p>The download URL of the API specification of the API asset.</p>
   */
  ApiSpecificationDownloadUrl?: string;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationDownloadUrlExpiresAt?: Date;

  /**
   * <p>The protocol type of the API asset.</p>
   */
  ProtocolType?: ProtocolType | string;

  /**
   * <p>The stage of the API asset.</p>
   */
  Stage?: string;
}

/**
 * <p>The destination for the asset.</p>
 */
export interface AssetDestinationEntry {
  /**
   * <p>The unique identifier for the asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The Amazon S3 bucket that is the destination for the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key?: string;
}

/**
 * <p>A structure that allows an LF-admin to grant permissions on certain conditions.</p>
 */
export interface LFTag {
  /**
   * <p>The key name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of LF-tag values.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * <p>The LF-tag policy for database resources.</p>
 */
export interface DatabaseLFTagPolicy {
  /**
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>The LF-tag policy for a table resource.</p>
 */
export interface TableLFTagPolicy {
  /**
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission.</p>
 */
export interface LFResourceDetails {
  /**
   * <p>Details about the database resource included in the AWS Lake Formation data permission.</p>
   */
  Database?: DatabaseLFTagPolicy;

  /**
   * <p>Details about the table resource included in the AWS Lake Formation data permission.</p>
   */
  Table?: TableLFTagPolicy;
}

export enum LFResourceType {
  DATABASE = "DATABASE",
  TABLE = "TABLE",
}

/**
 * <p>Details about the LF-tag policy.</p>
 */
export interface LFTagPolicyDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * <p>The resource type for which the LF-tag policy applies.</p>
   */
  ResourceType: LFResourceType | string | undefined;

  /**
   * <p>Details for the Lake Formation Resources included in the LF-tag policy.</p>
   */
  ResourceDetails: LFResourceDetails | undefined;
}

/**
 * <p>Details about the AWS Lake Formation data permission.</p>
 */
export interface LakeFormationDataPermissionDetails {
  /**
   * <p>Details about the LF-tag policy.</p>
   */
  LFTagPolicy?: LFTagPolicyDetails;
}

export enum LakeFormationDataPermissionType {
  LFTagPolicy = "LFTagPolicy",
}

export enum LFPermission {
  DESCRIBE = "DESCRIBE",
  SELECT = "SELECT",
}

/**
 * <p>The AWS Lake Formation data permission asset.</p>
 */
export interface LakeFormationDataPermissionAsset {
  /**
   * <p>Details about the AWS Lake Formation data permission.</p>
   */
  LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails | undefined;

  /**
   * <p>The data permission type.</p>
   */
  LakeFormationDataPermissionType: LakeFormationDataPermissionType | string | undefined;

  /**
   * <p>The permissions granted to the subscribers on the resource.</p>
   */
  Permissions: (LFPermission | string)[] | undefined;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.</p>
   */
  RoleArn?: string;
}

/**
 * <p>The Amazon Redshift datashare asset.</p>
 */
export interface RedshiftDataShareAsset {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   */
  Arn: string | undefined;
}

/**
 * <p>The Amazon S3 data access that is the asset.</p>
 */
export interface S3DataAccessAsset {
  /**
   * <p>The Amazon S3 bucket hosting data to be shared in the S3 data access.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   */
  KeyPrefixes?: string[];

  /**
   * <p>S3 keys made available using this asset.</p>
   */
  Keys?: string[];

  /**
   * <p>The automatically-generated bucket-style alias for your Amazon S3 Access Point. Customers can access their entitled data using the S3 Access Point alias.</p>
   */
  S3AccessPointAlias?: string;

  /**
   * <p>The ARN for your Amazon S3 Access Point. Customers can also access their entitled data using the S3 Access Point ARN.</p>
   */
  S3AccessPointArn?: string;
}

/**
 * <p>The Amazon S3 object that is the asset.</p>
 */
export interface S3SnapshotAsset {
  /**
   * <p>The size of the Amazon S3 object that is the object.</p>
   */
  Size: number | undefined;
}

/**
 * <p>Details about the asset.</p>
 */
export interface AssetDetails {
  /**
   * <p>The Amazon S3 object that is the asset.</p>
   */
  S3SnapshotAsset?: S3SnapshotAsset;

  /**
   * <p>The Amazon Redshift datashare that is the asset.</p>
   */
  RedshiftDataShareAsset?: RedshiftDataShareAsset;

  /**
   * <p>Information about the API Gateway API asset.</p>
   */
  ApiGatewayApiAsset?: ApiGatewayApiAsset;

  /**
   * <p>The Amazon S3 data access that is the asset.</p>
   */
  S3DataAccessAsset?: S3DataAccessAsset;

  /**
   * <p>The AWS Lake Formation data permission that is the asset.</p>
   */
  LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset;
}

export enum AssetType {
  API_GATEWAY_API = "API_GATEWAY_API",
  LAKE_FORMATION_DATA_PERMISSION = "LAKE_FORMATION_DATA_PERMISSION",
  REDSHIFT_DATA_SHARE = "REDSHIFT_DATA_SHARE",
  S3_DATA_ACCESS = "S3_DATA_ACCESS",
  S3_SNAPSHOT = "S3_SNAPSHOT",
}

/**
 * <p>An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of
 *          fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation
 *          data permission, or Amazon S3 data access). The asset can be a structured data file, an
 *          image file, or some other data file that can be stored as an Amazon S3 object, an Amazon
 *          API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or
 *          an Amazon S3 data access. When you create an import job for your files, API Gateway APIs,
 *          Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access,
 *          you create an asset in AWS Data Exchange.</p>
 */
export interface AssetEntry {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Details about the asset.</p>
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s)
   *          included in LF-tag policy" or "Table(s) included in LF-tag policy" are used as the asset
   *          name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>The source of the assets.</p>
 */
export interface AssetSourceEntry {
  /**
   * <p>The Amazon S3 bucket that's part of the source of the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key: string | undefined;
}

export interface CancelJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export enum ResourceType {
  ASSET = "ASSET",
  DATA_SET = "DATA_SET",
  EVENT_ACTION = "EVENT_ACTION",
  JOB = "JOB",
  REVISION = "REVISION",
}

/**
 * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource with the conflict.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource with the conflict.</p>
   */
  ResourceType?: ResourceType | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>An exception occurred with the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The message identifying the service exception that occurred.</p>
   */
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource couldn't be found.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource that couldn't be found.</p>
   */
  ResourceType?: ResourceType | string;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The limit on the number of requests per second was exceeded.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

export enum ExceptionCause {
  InsufficientS3BucketPolicy = "InsufficientS3BucketPolicy",
  S3AccessDenied = "S3AccessDenied",
}

/**
 * <p>The request was invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that informs you about what was invalid about the request.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ExceptionCause?: ExceptionCause | string;
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
    this.Message = opts.Message;
    this.ExceptionCause = opts.ExceptionCause;
  }
}

export enum Code {
  ACCESS_DENIED_EXCEPTION = "ACCESS_DENIED_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION = "INTERNAL_SERVER_EXCEPTION",
  MALWARE_DETECTED = "MALWARE_DETECTED",
  MALWARE_SCAN_ENCRYPTED_FILE = "MALWARE_SCAN_ENCRYPTED_FILE",
  RESOURCE_NOT_FOUND_EXCEPTION = "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION = "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  VALIDATION_EXCEPTION = "VALIDATION_EXCEPTION",
}

export interface CreateDataSetRequest {
  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>A description for the data set. This value can be up to 16,348 characters long.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: Record<string, string>;
}

export enum Origin {
  ENTITLED = "ENTITLED",
  OWNED = "OWNED",
}

/**
 * <p>Details about the origin of the data set.</p>
 */
export interface OriginDetails {
  /**
   * <p>The product ID of the origin of the data set.</p>
   */
  ProductId: string | undefined;
}

export interface CreateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export enum LimitName {
  AWS_Lake_Formation_data_permission_assets_per_revision = "AWS Lake Formation data permission assets per revision",
  Amazon_API_Gateway_API_assets_per_revision = "Amazon API Gateway API assets per revision",
  Amazon_Redshift_datashare_assets_per_import_job_from_Redshift = "Amazon Redshift datashare assets per import job from Redshift",
  Amazon_Redshift_datashare_assets_per_revision = "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision = "Amazon S3 data access assets per revision",
  Asset_per_export_job_from_Amazon_S3 = "Asset per export job from Amazon S3",
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_import_job_from_Amazon_S3 = "Assets per import job from Amazon S3",
  Assets_per_revision = "Assets per revision",
  Auto_export_event_actions_per_data_set = "Auto export event actions per data set",
  Concurrent_in_progress_jobs_to_create_Amazon_S3_data_access_assets_from_S3_buckets = "Concurrent in progress jobs to create Amazon S3 data access assets from S3 buckets",
  Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3 = "Concurrent in progress jobs to export assets to Amazon S3",
  Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL = "Concurrent in progress jobs to export assets to a signed URL",
  Concurrent_in_progress_jobs_to_export_revisions_to_Amazon_S3 = "Concurrent in progress jobs to export revisions to Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_Redshift_datashares = "Concurrent in progress jobs to import assets from Amazon Redshift datashares",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3 = "Concurrent in progress jobs to import assets from Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL = "Concurrent in progress jobs to import assets from a signed URL",
  Concurrent_in_progress_jobs_to_import_assets_from_an_API_Gateway_API = "Concurrent in progress jobs to import assets from an API Gateway API",
  Concurrent_in_progress_jobs_to_import_assets_from_an_AWS_Lake_Formation_tag_policy = "Concurrent in progress jobs to import assets from an AWS Lake Formation tag policy",
  Data_sets_per_account = "Data sets per account",
  Data_sets_per_product = "Data sets per product",
  Event_actions_per_account = "Event actions per account",
  Products_per_account = "Products per account",
  Revisions_per_AWS_Lake_Formation_data_permission_data_set = "Revisions per AWS Lake Formation data permission data set",
  Revisions_per_Amazon_API_Gateway_API_data_set = "Revisions per Amazon API Gateway API data set",
  Revisions_per_Amazon_Redshift_datashare_data_set = "Revisions per Amazon Redshift datashare data set",
  Revisions_per_Amazon_S3_data_access_data_set = "Revisions per Amazon S3 data access data set",
  Revisions_per_data_set = "Revisions per data set",
}

/**
 * <p>The request has exceeded the quotas imposed by the service.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: LimitName | string;

  /**
   * <p>The value of the exceeded limit.</p>
   */
  LimitValue?: number;

  /**
   * <p>The request has exceeded the quotas imposed by the service.</p>
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.LimitName = opts.LimitName;
    this.LimitValue = opts.LimitValue;
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about the published revision.</p>
 */
export interface RevisionPublished {
  /**
   * <p>The data set ID of the published revision.</p>
   */
  DataSetId: string | undefined;
}

/**
 * <p>What occurs to start an action.</p>
 */
export interface Event {
  /**
   * <p>What occurs to start the revision publish action.</p>
   */
  RevisionPublished?: RevisionPublished;
}

export interface CreateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;
}

export interface CreateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * <p>Source details for an Amazon S3 data access asset.</p>
 */
export interface S3DataAccessAssetSourceEntry {
  /**
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.</p>
   */
  KeyPrefixes?: string[];

  /**
   * <p>The keys used to create the Amazon S3 data access.</p>
   */
  Keys?: string[];
}

/**
 * <p>Details of the operation to create an Amazon S3 data access from an S3 bucket.</p>
 */
export interface CreateS3DataAccessFromS3BucketRequestDetails {
  /**
   * <p>Details about the S3 data access source asset.</p>
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * <p>The unique identifier for the data set associated with the creation of this Amazon S3 data access.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * <p>The destination for the asset.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * <p>The unique identifier for the asset that is exported to a signed URL.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>The destination where the assets in the revision will be exported.</p>
 */
export interface RevisionDestinationEntry {
  /**
   * <p>The Amazon S3 bucket that is the destination for the assets in the revision.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportRevisionsToS3RequestDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The destination for the revision.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;
}

/**
 * <p>The request details.</p>
 */
export interface ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * <p>The API description. Markdown supported.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API Gateway API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API Gateway API key.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

export enum DatabaseLFTagPolicyPermission {
  DESCRIBE = "DESCRIBE",
}

/**
 * <p>The LF-tag policy and permissions for database resources.</p>
 */
export interface DatabaseLFTagPolicyAndPermissions {
  /**
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   */
  Expression: LFTag[] | undefined;

  /**
   * <p>The permissions granted to subscribers on database resources.</p>
   */
  Permissions: (DatabaseLFTagPolicyPermission | string)[] | undefined;
}

export enum TableTagPolicyLFPermission {
  DESCRIBE = "DESCRIBE",
  SELECT = "SELECT",
}

/**
 * <p>The LF-tag policy and permissions that apply to table resources.</p>
 */
export interface TableLFTagPolicyAndPermissions {
  /**
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   */
  Expression: LFTag[] | undefined;

  /**
   * <p>The permissions granted to subscribers on table resources.</p>
   */
  Permissions: (TableTagPolicyLFPermission | string)[] | undefined;
}

/**
 * <p>Details about the assets imported from an AWS Lake Formation tag policy request.</p>
 */
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * <p>A structure for the database object.</p>
   */
  Database?: DatabaseLFTagPolicyAndPermissions;

  /**
   * <p>A structure for the table object.</p>
   */
  Table?: TableLFTagPolicyAndPermissions;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions of subscribers to AWS Lake Formation data permissions.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>The source of the Amazon Redshift datashare asset.</p>
 */
export interface RedshiftDataShareAssetSourceEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   */
  DataShareArn: string | undefined;
}

/**
 * <p>Details from an import from Amazon Redshift datashare request.</p>
 */
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * <p>A list of Amazon Redshift datashare assets.</p>
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>The details for the request.</p>
 */
export interface RequestDetails {
  /**
   * <p>Details about the export to signed URL request.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;

  /**
   * <p>Details about the import from Amazon S3 request.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

  /**
   * <p>Details about the import asset from API Gateway API request.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;

  /**
   * <p>Details from an import from Amazon Redshift datashare request.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;

  /**
   * <p>Details about the import from signed URL request.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;

  /**
   * <p>Details of the request to create S3 data access from the Amazon S3 bucket.</p>
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;

  /**
   * <p>Request details for the ImportAssetsFromLakeFormationTagPolicy job.</p>
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
}

export enum Type {
  CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET = "CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET",
  EXPORT_ASSETS_TO_S3 = "EXPORT_ASSETS_TO_S3",
  EXPORT_ASSET_TO_SIGNED_URL = "EXPORT_ASSET_TO_SIGNED_URL",
  EXPORT_REVISIONS_TO_S3 = "EXPORT_REVISIONS_TO_S3",
  IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY = "IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY",
  IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES = "IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES",
  IMPORT_ASSETS_FROM_S3 = "IMPORT_ASSETS_FROM_S3",
  IMPORT_ASSET_FROM_API_GATEWAY_API = "IMPORT_ASSET_FROM_API_GATEWAY_API",
  IMPORT_ASSET_FROM_SIGNED_URL = "IMPORT_ASSET_FROM_SIGNED_URL",
}

export interface CreateJobRequest {
  /**
   * <p>The details for the CreateJob request.</p>
   */
  Details: RequestDetails | undefined;

  /**
   * <p>The type of job to be created.</p>
   */
  Type: Type | string | undefined;
}

/**
 * <p>Details about the response of the operation to create an S3 data access from an S3 bucket.</p>
 */
export interface CreateS3DataAccessFromS3BucketResponseDetails {
  /**
   * <p>Details about the asset source from an Amazon S3 bucket.</p>
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * <p>The unique identifier for this data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details about the export to Amazon S3 response.</p>
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * <p>The destination in Amazon S3 where the asset is exported.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>The details of the export to signed URL response.</p>
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * <p>The unique identifier for the asset associated with this export job.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL for the export request.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The date and time that the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

/**
 * <p>Details about the export revisions to Amazon S3 response.</p>
 */
export interface ExportRevisionsToS3ResponseDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * <p>The destination in Amazon S3 where the revision is exported.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event action.</p>
   */
  EventActionArn?: string;
}

/**
 * <p>The response details.</p>
 */
export interface ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * <p>The API description.</p>
   */
  ApiDescription?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * <p>The API key.</p>
   */
  ApiKey?: string;

  /**
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The upload URL of the API specification.</p>
   */
  ApiSpecificationUploadUrl: string | undefined;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationUploadUrlExpiresAt: Date | undefined;

  /**
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | string | undefined;

  /**
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * <p>The details in the response for an import request, including the signed URL and other information.</p>
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * <p>The name for the asset associated with this import job.</p>
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash?: string;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL.</p>
   */
  SignedUrl?: string;

  /**
   * <p>The time and date at which the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

/**
 * <p>Details from an import AWS Lake Formation tag policy job response.</p>
 */
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * <p>A structure for the database object.</p>
   */
  Database?: DatabaseLFTagPolicyAndPermissions;

  /**
   * <p>A structure for the table object.</p>
   */
  Table?: TableLFTagPolicyAndPermissions;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details from an import from Amazon Redshift datashare response.</p>
 */
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * <p>A list of Amazon Redshift datashare asset sources.</p>
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details from an import from Amazon S3 response.</p>
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details for the response.</p>
 */
export interface ResponseDetails {
  /**
   * <p>Details for the export to signed URL response.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

  /**
   * <p>Details for the export to Amazon S3 response.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

  /**
   * <p>Details for the export revisions to Amazon S3 response.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;

  /**
   * <p>Details for the import from signed URL response.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

  /**
   * <p>Details for the import from Amazon S3 response.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;

  /**
   * <p>Details from an import from Amazon Redshift datashare response.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;

  /**
   * <p>The response details.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;

  /**
   * <p>Response details from the CreateS3DataAccessFromS3Bucket job.</p>
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails;

  /**
   * <p>Response details from the ImportAssetsFromLakeFormationTagPolicy job.</p>
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails;
}

/**
 * <p>Details about the job error.</p>
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * <p>Details about the job error.</p>
   */
  AssetName: string | undefined;
}

/**
 * <p>Information about the job error.</p>
 */
export interface Details {
  /**
   * <p>Information about the job error.</p>
   */
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

  /**
   * <p>Details about the job error.</p>
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[];
}

export enum JobErrorLimitName {
  AWS_Lake_Formation_data_permission_assets_per_revision = "AWS Lake Formation data permission assets per revision",
  Amazon_Redshift_datashare_assets_per_revision = "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision = "Amazon S3 data access assets per revision",
  Asset_size_in_GB = "Asset size in GB",
  Assets_per_revision = "Assets per revision",
}

export enum JobErrorResourceTypes {
  ASSET = "ASSET",
  DATA_SET = "DATA_SET",
  REVISION = "REVISION",
}

/**
 * <p>An error that occurred with the job request.</p>
 */
export interface JobError {
  /**
   * <p>The code for the job error.</p>
   */
  Code: Code | string | undefined;

  /**
   * <p>The details about the job error.</p>
   */
  Details?: Details;

  /**
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: JobErrorLimitName | string;

  /**
   * <p>The value of the exceeded limit.</p>
   */
  LimitValue?: number;

  /**
   * <p>The message related to the job error.</p>
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource related to the error.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource related to the error.</p>
   */
  ResourceType?: JobErrorResourceTypes | string;
}

export enum State {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS",
  TIMED_OUT = "TIMED_OUT",
  WAITING = "WAITING",
}

export interface CreateJobResponse {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface CreateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export interface DeleteAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface DeleteDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export interface DeleteEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export interface DeleteRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface GetAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface GetAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Details about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s) included
   *          in the LF-tag policy" or "Table(s) included in the LF-tag policy" are used as the asset
   *          name.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface GetDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

export interface GetDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the data set.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface GetEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export interface GetEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface GetJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export interface GetJobResponse {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * <p>The state of the job.</p>
   */
  State?: State | string;

  /**
   * <p>The job type.</p>
   */
  Type?: Type | string;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface GetRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface GetRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The tags for the revision.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export interface ListDataSetRevisionsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>A revision is a container for one or more assets.</p>
 */
export interface RevisionEntry {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export interface ListDataSetRevisionsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The asset objects listed by the request.</p>
   */
  Revisions?: RevisionEntry[];
}

export interface ListDataSetsRequest {
  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: string;
}

/**
 * <p>A data set is an AWS resource with one or more revisions.</p>
 */
export interface DataSetEntry {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | string | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin: Origin | string | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export interface ListDataSetsResponse {
  /**
   * <p>The data set objects listed by the request.</p>
   */
  DataSets?: DataSetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListEventActionsRequest {
  /**
   * <p>The unique identifier for the event source.</p>
   */
  EventSourceId?: string;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.</p>
 */
export interface EventActionEntry {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event action.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export interface ListEventActionsResponse {
  /**
   * <p>The event action objects listed by the request.</p>
   */
  EventActions?: EventActionEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListJobsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId?: string;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId?: string;
}

/**
 * <p>AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.</p>
 */
export interface JobEntry {
  /**
   * <p>The ARN for the job.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Details of the operation to be performed by the job, such as export destination details or import source details.</p>
   */
  Details: ResponseDetails | undefined;

  /**
   * <p>Errors for jobs.</p>
   */
  Errors?: JobError[];

  /**
   * <p>The unique identifier for the job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The state of the job.</p>
   */
  State: State | string | undefined;

  /**
   * <p>The job type.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

export interface ListJobsResponse {
  /**
   * <p>The jobs listed by the request.</p>
   */
  Jobs?: JobEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListRevisionAssetsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface ListRevisionAssetsResponse {
  /**
   * <p>The asset objects listed by the request.</p>
   */
  Assets?: AssetEntry[];

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   */
  Tags?: Record<string, string>;
}

export interface RevokeRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment: string | undefined;
}

export interface RevokeRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

export interface SendApiAssetRequest {
  /**
   * <p>The request body.</p>
   */
  Body?: string;

  /**
   * <p>Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).</p>
   */
  QueryStringParameters?: Record<string, string>;

  /**
   * <p>Asset ID value for the API request.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>Data set ID value for the API request.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.</p>
   */
  RequestHeaders?: Record<string, string>;

  /**
   * <p>HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.</p>
   */
  Method?: string;

  /**
   * <p>URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/{pathValue}.</p>
   */
  Path?: string;

  /**
   * <p>Revision ID value for the API request.</p>
   */
  RevisionId: string | undefined;
}

export interface SendApiAssetResponse {
  /**
   * <p>The response body from the underlying API tracked by the API asset.</p>
   */
  Body?: string;

  /**
   * <p>The response headers from the underlying API tracked by the API asset.</p>
   */
  ResponseHeaders?: Record<string, string>;
}

export interface StartJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

export interface StartJobResponse {}

export interface TagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key tags.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s)
   *          included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the
   *          name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface UpdateAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * <p>Details about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s)
   *          included in the LF-tag policy"- or "Table(s) included in LF-tag policy" are used as the
   *          asset name.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface UpdateDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;
}

export interface UpdateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType | string;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin | string;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface UpdateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

export interface UpdateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

export interface UpdateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * <p>Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

export interface UpdateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

/**
 * @internal
 */
export const ExportServerSideEncryptionFilterSensitiveLog = (obj: ExportServerSideEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoExportRevisionDestinationEntryFilterSensitiveLog = (obj: AutoExportRevisionDestinationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoExportRevisionToS3RequestDetailsFilterSensitiveLog = (
  obj: AutoExportRevisionToS3RequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApiGatewayApiAssetFilterSensitiveLog = (obj: ApiGatewayApiAsset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetDestinationEntryFilterSensitiveLog = (obj: AssetDestinationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LFTagFilterSensitiveLog = (obj: LFTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseLFTagPolicyFilterSensitiveLog = (obj: DatabaseLFTagPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableLFTagPolicyFilterSensitiveLog = (obj: TableLFTagPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LFResourceDetailsFilterSensitiveLog = (obj: LFResourceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LFTagPolicyDetailsFilterSensitiveLog = (obj: LFTagPolicyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LakeFormationDataPermissionDetailsFilterSensitiveLog = (obj: LakeFormationDataPermissionDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LakeFormationDataPermissionAssetFilterSensitiveLog = (obj: LakeFormationDataPermissionAsset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftDataShareAssetFilterSensitiveLog = (obj: RedshiftDataShareAsset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataAccessAssetFilterSensitiveLog = (obj: S3DataAccessAsset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3SnapshotAssetFilterSensitiveLog = (obj: S3SnapshotAsset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetDetailsFilterSensitiveLog = (obj: AssetDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetEntryFilterSensitiveLog = (obj: AssetEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetSourceEntryFilterSensitiveLog = (obj: AssetSourceEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRequestFilterSensitiveLog = (obj: CancelJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataSetRequestFilterSensitiveLog = (obj: CreateDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginDetailsFilterSensitiveLog = (obj: OriginDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataSetResponseFilterSensitiveLog = (obj: CreateDataSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevisionPublishedFilterSensitiveLog = (obj: RevisionPublished): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventActionRequestFilterSensitiveLog = (obj: CreateEventActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventActionResponseFilterSensitiveLog = (obj: CreateEventActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataAccessAssetSourceEntryFilterSensitiveLog = (obj: S3DataAccessAssetSourceEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateS3DataAccessFromS3BucketRequestDetailsFilterSensitiveLog = (
  obj: CreateS3DataAccessFromS3BucketRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportAssetsToS3RequestDetailsFilterSensitiveLog = (obj: ExportAssetsToS3RequestDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportAssetToSignedUrlRequestDetailsFilterSensitiveLog = (
  obj: ExportAssetToSignedUrlRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevisionDestinationEntryFilterSensitiveLog = (obj: RevisionDestinationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportRevisionsToS3RequestDetailsFilterSensitiveLog = (obj: ExportRevisionsToS3RequestDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetFromApiGatewayApiRequestDetailsFilterSensitiveLog = (
  obj: ImportAssetFromApiGatewayApiRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetFromSignedUrlRequestDetailsFilterSensitiveLog = (
  obj: ImportAssetFromSignedUrlRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseLFTagPolicyAndPermissionsFilterSensitiveLog = (obj: DatabaseLFTagPolicyAndPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableLFTagPolicyAndPermissionsFilterSensitiveLog = (obj: TableLFTagPolicyAndPermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromLakeFormationTagPolicyRequestDetailsFilterSensitiveLog = (
  obj: ImportAssetsFromLakeFormationTagPolicyRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftDataShareAssetSourceEntryFilterSensitiveLog = (obj: RedshiftDataShareAssetSourceEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromRedshiftDataSharesRequestDetailsFilterSensitiveLog = (
  obj: ImportAssetsFromRedshiftDataSharesRequestDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromS3RequestDetailsFilterSensitiveLog = (obj: ImportAssetsFromS3RequestDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestDetailsFilterSensitiveLog = (obj: RequestDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateS3DataAccessFromS3BucketResponseDetailsFilterSensitiveLog = (
  obj: CreateS3DataAccessFromS3BucketResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportAssetsToS3ResponseDetailsFilterSensitiveLog = (obj: ExportAssetsToS3ResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportAssetToSignedUrlResponseDetailsFilterSensitiveLog = (
  obj: ExportAssetToSignedUrlResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportRevisionsToS3ResponseDetailsFilterSensitiveLog = (obj: ExportRevisionsToS3ResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetFromApiGatewayApiResponseDetailsFilterSensitiveLog = (
  obj: ImportAssetFromApiGatewayApiResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetFromSignedUrlResponseDetailsFilterSensitiveLog = (
  obj: ImportAssetFromSignedUrlResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromLakeFormationTagPolicyResponseDetailsFilterSensitiveLog = (
  obj: ImportAssetsFromLakeFormationTagPolicyResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromRedshiftDataSharesResponseDetailsFilterSensitiveLog = (
  obj: ImportAssetsFromRedshiftDataSharesResponseDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetsFromS3ResponseDetailsFilterSensitiveLog = (obj: ImportAssetsFromS3ResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseDetailsFilterSensitiveLog = (obj: ResponseDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportAssetFromSignedUrlJobErrorDetailsFilterSensitiveLog = (
  obj: ImportAssetFromSignedUrlJobErrorDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetailsFilterSensitiveLog = (obj: Details): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobErrorFilterSensitiveLog = (obj: JobError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobResponseFilterSensitiveLog = (obj: CreateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRevisionRequestFilterSensitiveLog = (obj: CreateRevisionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRevisionResponseFilterSensitiveLog = (obj: CreateRevisionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssetRequestFilterSensitiveLog = (obj: DeleteAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataSetRequestFilterSensitiveLog = (obj: DeleteDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventActionRequestFilterSensitiveLog = (obj: DeleteEventActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRevisionRequestFilterSensitiveLog = (obj: DeleteRevisionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetRequestFilterSensitiveLog = (obj: GetAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetResponseFilterSensitiveLog = (obj: GetAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataSetRequestFilterSensitiveLog = (obj: GetDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataSetResponseFilterSensitiveLog = (obj: GetDataSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventActionRequestFilterSensitiveLog = (obj: GetEventActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventActionResponseFilterSensitiveLog = (obj: GetEventActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobRequestFilterSensitiveLog = (obj: GetJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobResponseFilterSensitiveLog = (obj: GetJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRevisionRequestFilterSensitiveLog = (obj: GetRevisionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRevisionResponseFilterSensitiveLog = (obj: GetRevisionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetRevisionsRequestFilterSensitiveLog = (obj: ListDataSetRevisionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevisionEntryFilterSensitiveLog = (obj: RevisionEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetRevisionsResponseFilterSensitiveLog = (obj: ListDataSetRevisionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetsRequestFilterSensitiveLog = (obj: ListDataSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSetEntryFilterSensitiveLog = (obj: DataSetEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataSetsResponseFilterSensitiveLog = (obj: ListDataSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventActionsRequestFilterSensitiveLog = (obj: ListEventActionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventActionEntryFilterSensitiveLog = (obj: EventActionEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventActionsResponseFilterSensitiveLog = (obj: ListEventActionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobEntryFilterSensitiveLog = (obj: JobEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResponseFilterSensitiveLog = (obj: ListJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRevisionAssetsRequestFilterSensitiveLog = (obj: ListRevisionAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRevisionAssetsResponseFilterSensitiveLog = (obj: ListRevisionAssetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeRevisionRequestFilterSensitiveLog = (obj: RevokeRevisionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeRevisionResponseFilterSensitiveLog = (obj: RevokeRevisionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendApiAssetRequestFilterSensitiveLog = (obj: SendApiAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendApiAssetResponseFilterSensitiveLog = (obj: SendApiAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRequestFilterSensitiveLog = (obj: StartJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobResponseFilterSensitiveLog = (obj: StartJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetRequestFilterSensitiveLog = (obj: UpdateAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetResponseFilterSensitiveLog = (obj: UpdateAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataSetRequestFilterSensitiveLog = (obj: UpdateDataSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataSetResponseFilterSensitiveLog = (obj: UpdateDataSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventActionRequestFilterSensitiveLog = (obj: UpdateEventActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventActionResponseFilterSensitiveLog = (obj: UpdateEventActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevisionRequestFilterSensitiveLog = (obj: UpdateRevisionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevisionResponseFilterSensitiveLog = (obj: UpdateRevisionResponse): any => ({
  ...obj,
});
