// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DataExchangeServiceException as __BaseException } from "./DataExchangeServiceException";

/**
 * @public
 * <p>Access to the resource is denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ServerSideEncryptionTypes = {
  AES256: "AES256",
  aws_kms: "aws:kms",
} as const;

/**
 * @public
 */
export type ServerSideEncryptionTypes = (typeof ServerSideEncryptionTypes)[keyof typeof ServerSideEncryptionTypes];

/**
 * @public
 * <p>Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.</p>
 */
export interface ExportServerSideEncryption {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The type of server side encryption used for encrypting the objects in Amazon S3.</p>
   */
  Type: ServerSideEncryptionTypes | undefined;
}

/**
 * @public
 * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
 */
export interface AutoExportRevisionDestinationEntry {
  /**
   * @public
   * <p>The Amazon S3 bucket that is the destination for the event action.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface AutoExportRevisionToS3RequestDetails {
  /**
   * @public
   * <p>Encryption configuration for the auto export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * @public
   * <p>A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.</p>
   */
  RevisionDestination: AutoExportRevisionDestinationEntry | undefined;
}

/**
 * @public
 * <p>What occurs after a certain event.</p>
 */
export interface Action {
  /**
   * @public
   * <p>Details for the export revision to Amazon S3 action.</p>
   */
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
}

/**
 * @public
 * @enum
 */
export const ProtocolType = {
  REST: "REST",
} as const;

/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * <p>The API Gateway API that is the asset.</p>
 */
export interface ApiGatewayApiAsset {
  /**
   * @public
   * <p>The API description of the API asset.</p>
   */
  ApiDescription?: string;

  /**
   * @public
   * <p>The API endpoint of the API asset.</p>
   */
  ApiEndpoint?: string;

  /**
   * @public
   * <p>The unique identifier of the API asset.</p>
   */
  ApiId?: string;

  /**
   * @public
   * <p>The API key of the API asset.</p>
   */
  ApiKey?: string;

  /**
   * @public
   * <p>The API name of the API asset.</p>
   */
  ApiName?: string;

  /**
   * @public
   * <p>The download URL of the API specification of the API asset.</p>
   */
  ApiSpecificationDownloadUrl?: string;

  /**
   * @public
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationDownloadUrlExpiresAt?: Date;

  /**
   * @public
   * <p>The protocol type of the API asset.</p>
   */
  ProtocolType?: ProtocolType;

  /**
   * @public
   * <p>The stage of the API asset.</p>
   */
  Stage?: string;
}

/**
 * @public
 * <p>The destination for the asset.</p>
 */
export interface AssetDestinationEntry {
  /**
   * @public
   * <p>The unique identifier for the asset.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket that is the destination for the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>A structure that allows an LF-admin to grant permissions on certain conditions.</p>
 */
export interface LFTag {
  /**
   * @public
   * <p>The key name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of LF-tag values.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 * <p>The LF-tag policy for database resources.</p>
 */
export interface DatabaseLFTagPolicy {
  /**
   * @public
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 * <p>The LF-tag policy for a table resource.</p>
 */
export interface TableLFTagPolicy {
  /**
   * @public
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 * <p>Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission.</p>
 */
export interface LFResourceDetails {
  /**
   * @public
   * <p>Details about the database resource included in the AWS Lake Formation data permission.</p>
   */
  Database?: DatabaseLFTagPolicy;

  /**
   * @public
   * <p>Details about the table resource included in the AWS Lake Formation data permission.</p>
   */
  Table?: TableLFTagPolicy;
}

/**
 * @public
 * @enum
 */
export const LFResourceType = {
  DATABASE: "DATABASE",
  TABLE: "TABLE",
} as const;

/**
 * @public
 */
export type LFResourceType = (typeof LFResourceType)[keyof typeof LFResourceType];

/**
 * @public
 * <p>Details about the LF-tag policy.</p>
 */
export interface LFTagPolicyDetails {
  /**
   * @public
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>The resource type for which the LF-tag policy applies.</p>
   */
  ResourceType: LFResourceType | undefined;

  /**
   * @public
   * <p>Details for the Lake Formation Resources included in the LF-tag policy.</p>
   */
  ResourceDetails: LFResourceDetails | undefined;
}

/**
 * @public
 * <p>Details about the AWS Lake Formation data permission.</p>
 */
export interface LakeFormationDataPermissionDetails {
  /**
   * @public
   * <p>Details about the LF-tag policy.</p>
   */
  LFTagPolicy?: LFTagPolicyDetails;
}

/**
 * @public
 * @enum
 */
export const LakeFormationDataPermissionType = {
  LFTagPolicy: "LFTagPolicy",
} as const;

/**
 * @public
 */
export type LakeFormationDataPermissionType =
  (typeof LakeFormationDataPermissionType)[keyof typeof LakeFormationDataPermissionType];

/**
 * @public
 * @enum
 */
export const LFPermission = {
  DESCRIBE: "DESCRIBE",
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type LFPermission = (typeof LFPermission)[keyof typeof LFPermission];

/**
 * @public
 * <p>The AWS Lake Formation data permission asset.</p>
 */
export interface LakeFormationDataPermissionAsset {
  /**
   * @public
   * <p>Details about the AWS Lake Formation data permission.</p>
   */
  LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails | undefined;

  /**
   * @public
   * <p>The data permission type.</p>
   */
  LakeFormationDataPermissionType: LakeFormationDataPermissionType | undefined;

  /**
   * @public
   * <p>The permissions granted to the subscribers on the resource.</p>
   */
  Permissions: LFPermission[] | undefined;

  /**
   * @public
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * <p>The Amazon Redshift datashare asset.</p>
 */
export interface RedshiftDataShareAsset {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3
 *          objects.</p>
 */
export interface KmsKeyToGrant {
  /**
   * @public
   * <p>The AWS KMS CMK (Key Management System Customer Managed Key) used to encrypt S3 objects
   *          in the shared S3 Bucket. AWS Data exchange will create a KMS grant for each subscriber to
   *          allow them to access and decrypt their entitled data that is encrypted using this KMS key
   *          specified.</p>
   */
  KmsKeyArn: string | undefined;
}

/**
 * @public
 * <p>The Amazon S3 data access that is the asset.</p>
 */
export interface S3DataAccessAsset {
  /**
   * @public
   * <p>The Amazon S3 bucket hosting data to be shared in the S3 data access.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   */
  KeyPrefixes?: string[];

  /**
   * @public
   * <p>S3 keys made available using this asset.</p>
   */
  Keys?: string[];

  /**
   * @public
   * <p>The automatically-generated bucket-style alias for your Amazon S3 Access Point. Customers can access their entitled data using the S3 Access Point alias.</p>
   */
  S3AccessPointAlias?: string;

  /**
   * @public
   * <p>The ARN for your Amazon S3 Access Point. Customers can also access their entitled data using the S3 Access Point ARN.</p>
   */
  S3AccessPointArn?: string;

  /**
   * @public
   * <p> List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to
   *          encrypt S3 objects being shared in this S3 Data Access asset. Providers must include all
   *          AWS KMS keys used to encrypt these shared S3 objects.</p>
   */
  KmsKeysToGrant?: KmsKeyToGrant[];
}

/**
 * @public
 * <p>The Amazon S3 object that is the asset.</p>
 */
export interface S3SnapshotAsset {
  /**
   * @public
   * <p>The size of the Amazon S3 object that is the object.</p>
   */
  Size: number | undefined;
}

/**
 * @public
 * <p>Details about the asset.</p>
 */
export interface AssetDetails {
  /**
   * @public
   * <p>The Amazon S3 object that is the asset.</p>
   */
  S3SnapshotAsset?: S3SnapshotAsset;

  /**
   * @public
   * <p>The Amazon Redshift datashare that is the asset.</p>
   */
  RedshiftDataShareAsset?: RedshiftDataShareAsset;

  /**
   * @public
   * <p>Information about the API Gateway API asset.</p>
   */
  ApiGatewayApiAsset?: ApiGatewayApiAsset;

  /**
   * @public
   * <p>The Amazon S3 data access that is the asset.</p>
   */
  S3DataAccessAsset?: S3DataAccessAsset;

  /**
   * @public
   * <p>The AWS Lake Formation data permission that is the asset.</p>
   */
  LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset;
}

/**
 * @public
 * @enum
 */
export const AssetType = {
  API_GATEWAY_API: "API_GATEWAY_API",
  LAKE_FORMATION_DATA_PERMISSION: "LAKE_FORMATION_DATA_PERMISSION",
  REDSHIFT_DATA_SHARE: "REDSHIFT_DATA_SHARE",
  S3_DATA_ACCESS: "S3_DATA_ACCESS",
  S3_SNAPSHOT: "S3_SNAPSHOT",
} as const;

/**
 * @public
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

/**
 * @public
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
   * @public
   * <p>The ARN for the asset.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>Details about the asset.</p>
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | undefined;

  /**
   * @public
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the asset.</p>
   */
  Id: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 * <p>The source of the assets.</p>
 */
export interface AssetSourceEntry {
  /**
   * @public
   * <p>The Amazon S3 bucket that's part of the source of the asset.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The name of the object in Amazon S3 for the asset.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * @public
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ASSET: "ASSET",
  DATA_SET: "DATA_SET",
  EVENT_ACTION: "EVENT_ACTION",
  JOB: "JOB",
  REVISION: "REVISION",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the resource with the conflict.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource with the conflict.</p>
   */
  ResourceType?: ResourceType;
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
 * @public
 * <p>An exception occurred with the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * <p>The resource couldn't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource couldn't be found.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource that couldn't be found.</p>
   */
  ResourceType?: ResourceType;
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
 * @public
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const ExceptionCause = {
  InsufficientS3BucketPolicy: "InsufficientS3BucketPolicy",
  S3AccessDenied: "S3AccessDenied",
} as const;

/**
 * @public
 */
export type ExceptionCause = (typeof ExceptionCause)[keyof typeof ExceptionCause];

/**
 * @public
 * <p>The request was invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that informs you about what was invalid about the request.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the resource that couldn't be found.</p>
   */
  ExceptionCause?: ExceptionCause;
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

/**
 * @public
 * @enum
 */
export const Code = {
  ACCESS_DENIED_EXCEPTION: "ACCESS_DENIED_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  MALWARE_DETECTED: "MALWARE_DETECTED",
  MALWARE_SCAN_ENCRYPTED_FILE: "MALWARE_SCAN_ENCRYPTED_FILE",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;

/**
 * @public
 */
export type Code = (typeof Code)[keyof typeof Code];

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | undefined;

  /**
   * @public
   * <p>A description for the data set. This value can be up to 16,348 characters long.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const Origin = {
  ENTITLED: "ENTITLED",
  OWNED: "OWNED",
} as const;

/**
 * @public
 */
export type Origin = (typeof Origin)[keyof typeof Origin];

/**
 * @public
 * <p>Details about the origin of the data set.</p>
 */
export interface OriginDetails {
  /**
   * @public
   * <p>The product ID of the origin of the data set.</p>
   */
  ProductId?: string;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * @public
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType;

  /**
   * @public
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin;

  /**
   * @public
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * @public
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The tags for the data set.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const LimitName = {
  AWS_Lake_Formation_data_permission_assets_per_revision: "AWS Lake Formation data permission assets per revision",
  Amazon_API_Gateway_API_assets_per_revision: "Amazon API Gateway API assets per revision",
  Amazon_Redshift_datashare_assets_per_import_job_from_Redshift:
    "Amazon Redshift datashare assets per import job from Redshift",
  Amazon_Redshift_datashare_assets_per_revision: "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision: "Amazon S3 data access assets per revision",
  Asset_per_export_job_from_Amazon_S3: "Asset per export job from Amazon S3",
  Asset_size_in_GB: "Asset size in GB",
  Assets_per_import_job_from_Amazon_S3: "Assets per import job from Amazon S3",
  Assets_per_revision: "Assets per revision",
  Auto_export_event_actions_per_data_set: "Auto export event actions per data set",
  Concurrent_in_progress_jobs_to_create_Amazon_S3_data_access_assets_from_S3_buckets:
    "Concurrent in progress jobs to create Amazon S3 data access assets from S3 buckets",
  Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3:
    "Concurrent in progress jobs to export assets to Amazon S3",
  Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL:
    "Concurrent in progress jobs to export assets to a signed URL",
  Concurrent_in_progress_jobs_to_export_revisions_to_Amazon_S3:
    "Concurrent in progress jobs to export revisions to Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_Redshift_datashares:
    "Concurrent in progress jobs to import assets from Amazon Redshift datashares",
  Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3:
    "Concurrent in progress jobs to import assets from Amazon S3",
  Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL:
    "Concurrent in progress jobs to import assets from a signed URL",
  Concurrent_in_progress_jobs_to_import_assets_from_an_API_Gateway_API:
    "Concurrent in progress jobs to import assets from an API Gateway API",
  Concurrent_in_progress_jobs_to_import_assets_from_an_AWS_Lake_Formation_tag_policy:
    "Concurrent in progress jobs to import assets from an AWS Lake Formation tag policy",
  Data_sets_per_account: "Data sets per account",
  Data_sets_per_product: "Data sets per product",
  Event_actions_per_account: "Event actions per account",
  Products_per_account: "Products per account",
  Revisions_per_AWS_Lake_Formation_data_permission_data_set:
    "Revisions per AWS Lake Formation data permission data set",
  Revisions_per_Amazon_API_Gateway_API_data_set: "Revisions per Amazon API Gateway API data set",
  Revisions_per_Amazon_Redshift_datashare_data_set: "Revisions per Amazon Redshift datashare data set",
  Revisions_per_Amazon_S3_data_access_data_set: "Revisions per Amazon S3 data access data set",
  Revisions_per_data_set: "Revisions per data set",
} as const;

/**
 * @public
 */
export type LimitName = (typeof LimitName)[keyof typeof LimitName];

/**
 * @public
 * <p>The request has exceeded the quotas imposed by the service.</p>
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: LimitName;

  /**
   * @public
   * <p>The value of the exceeded limit.</p>
   */
  LimitValue?: number;

  /**
   * @public
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
 * @public
 * <p>Information about the published revision.</p>
 */
export interface RevisionPublished {
  /**
   * @public
   * <p>The data set ID of the published revision.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 * <p>What occurs to start an action.</p>
 */
export interface Event {
  /**
   * @public
   * <p>What occurs to start the revision publish action.</p>
   */
  RevisionPublished?: RevisionPublished;
}

/**
 * @public
 */
export interface CreateEventActionRequest {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * @public
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;
}

/**
 * @public
 */
export interface CreateEventActionResponse {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>Source details for an Amazon S3 data access asset.</p>
 */
export interface S3DataAccessAssetSourceEntry {
  /**
   * @public
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.</p>
   */
  KeyPrefixes?: string[];

  /**
   * @public
   * <p>The keys used to create the Amazon S3 data access.</p>
   */
  Keys?: string[];

  /**
   * @public
   * <p>List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to
   *          encrypt S3 objects being shared in this S3 Data Access asset.</p>
   */
  KmsKeysToGrant?: KmsKeyToGrant[];
}

/**
 * @public
 * <p>Details of the operation to create an Amazon S3 data access from an S3 bucket.</p>
 */
export interface CreateS3DataAccessFromS3BucketRequestDetails {
  /**
   * @public
   * <p>Details about the S3 data access source asset.</p>
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the creation of this Amazon S3 data access.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * @public
   * <p>The destination for the asset.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * @public
   * <p>The unique identifier for the asset that is exported to a signed URL.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this export request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>The destination where the assets in the revision will be exported.</p>
 */
export interface RevisionDestinationEntry {
  /**
   * @public
   * <p>The Amazon S3 bucket that is the destination for the assets in the revision.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   */
  KeyPattern?: string;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ExportRevisionsToS3RequestDetails {
  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Encryption configuration for the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * @public
   * <p>The destination for the revision.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;
}

/**
 * @public
 * <p>The request details.</p>
 */
export interface ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * @public
   * <p>The API description. Markdown supported.</p>
   */
  ApiDescription?: string;

  /**
   * @public
   * <p>The API Gateway API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * @public
   * <p>The API Gateway API key.</p>
   */
  ApiKey?: string;

  /**
   * @public
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * @public
   * <p>The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * @public
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * @public
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * @public
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name.</p>
   */
  AssetName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatabaseLFTagPolicyPermission = {
  DESCRIBE: "DESCRIBE",
} as const;

/**
 * @public
 */
export type DatabaseLFTagPolicyPermission =
  (typeof DatabaseLFTagPolicyPermission)[keyof typeof DatabaseLFTagPolicyPermission];

/**
 * @public
 * <p>The LF-tag policy and permissions for database resources.</p>
 */
export interface DatabaseLFTagPolicyAndPermissions {
  /**
   * @public
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   */
  Expression: LFTag[] | undefined;

  /**
   * @public
   * <p>The permissions granted to subscribers on database resources.</p>
   */
  Permissions: DatabaseLFTagPolicyPermission[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TableTagPolicyLFPermission = {
  DESCRIBE: "DESCRIBE",
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type TableTagPolicyLFPermission = (typeof TableTagPolicyLFPermission)[keyof typeof TableTagPolicyLFPermission];

/**
 * @public
 * <p>The LF-tag policy and permissions that apply to table resources.</p>
 */
export interface TableLFTagPolicyAndPermissions {
  /**
   * @public
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   */
  Expression: LFTag[] | undefined;

  /**
   * @public
   * <p>The permissions granted to subscribers on table resources.</p>
   */
  Permissions: TableTagPolicyLFPermission[] | undefined;
}

/**
 * @public
 * <p>Details about the assets imported from an AWS Lake Formation tag policy request.</p>
 */
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
  /**
   * @public
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>A structure for the database object.</p>
   */
  Database?: DatabaseLFTagPolicyAndPermissions;

  /**
   * @public
   * <p>A structure for the table object.</p>
   */
  Table?: TableLFTagPolicyAndPermissions;

  /**
   * @public
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions of subscribers to AWS Lake Formation data permissions.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>The source of the Amazon Redshift datashare asset.</p>
 */
export interface RedshiftDataShareAssetSourceEntry {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   */
  DataShareArn: string | undefined;
}

/**
 * @public
 * <p>Details from an import from Amazon Redshift datashare request.</p>
 */
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * @public
   * <p>A list of Amazon Redshift datashare assets.</p>
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details of the operation to be performed by the job.</p>
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * @public
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>The details for the request.</p>
 */
export interface RequestDetails {
  /**
   * @public
   * <p>Details about the export to signed URL request.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;

  /**
   * @public
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails;

  /**
   * @public
   * <p>Details about the export to Amazon S3 request.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;

  /**
   * @public
   * <p>Details about the import from Amazon S3 request.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;

  /**
   * @public
   * <p>Details about the import asset from API Gateway API request.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;

  /**
   * @public
   * <p>Details from an import from Amazon Redshift datashare request.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;

  /**
   * @public
   * <p>Details about the import from signed URL request.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;

  /**
   * @public
   * <p>Details of the request to create S3 data access from the Amazon S3 bucket.</p>
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;

  /**
   * @public
   * <p>Request details for the ImportAssetsFromLakeFormationTagPolicy job.</p>
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
}

/**
 * @public
 * @enum
 */
export const Type = {
  CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET: "CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET",
  EXPORT_ASSETS_TO_S3: "EXPORT_ASSETS_TO_S3",
  EXPORT_ASSET_TO_SIGNED_URL: "EXPORT_ASSET_TO_SIGNED_URL",
  EXPORT_REVISIONS_TO_S3: "EXPORT_REVISIONS_TO_S3",
  IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY: "IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY",
  IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES: "IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES",
  IMPORT_ASSETS_FROM_S3: "IMPORT_ASSETS_FROM_S3",
  IMPORT_ASSET_FROM_API_GATEWAY_API: "IMPORT_ASSET_FROM_API_GATEWAY_API",
  IMPORT_ASSET_FROM_SIGNED_URL: "IMPORT_ASSET_FROM_SIGNED_URL",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * <p>The details for the CreateJob request.</p>
   */
  Details: RequestDetails | undefined;

  /**
   * @public
   * <p>The type of job to be created.</p>
   */
  Type: Type | undefined;
}

/**
 * @public
 * <p>Details about the response of the operation to create an S3 data access from an S3 bucket.</p>
 */
export interface CreateS3DataAccessFromS3BucketResponseDetails {
  /**
   * @public
   * <p>Details about the asset source from an Amazon S3 bucket.</p>
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * @public
   * <p>The unique identifier for this data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details about the export to Amazon S3 response.</p>
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * @public
   * <p>The destination in Amazon S3 where the asset is exported.</p>
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>The details of the export to signed URL response.</p>
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * @public
   * <p>The unique identifier for the asset associated with this export job.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this export response.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>The signed URL for the export request.</p>
   */
  SignedUrl?: string;

  /**
   * @public
   * <p>The date and time that the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

/**
 * @public
 * <p>Details about the export revisions to Amazon S3 response.</p>
 */
export interface ExportRevisionsToS3ResponseDetails {
  /**
   * @public
   * <p>The unique identifier for the data set associated with this export job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Encryption configuration of the export job.</p>
   */
  Encryption?: ExportServerSideEncryption;

  /**
   * @public
   * <p>The destination in Amazon S3 where the revision is exported.</p>
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the event action.</p>
   */
  EventActionArn?: string;
}

/**
 * @public
 * <p>The response details.</p>
 */
export interface ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * @public
   * <p>The API description.</p>
   */
  ApiDescription?: string;

  /**
   * @public
   * <p>The API ID.</p>
   */
  ApiId: string | undefined;

  /**
   * @public
   * <p>The API key.</p>
   */
  ApiKey?: string;

  /**
   * @public
   * <p>The API name.</p>
   */
  ApiName: string | undefined;

  /**
   * @public
   * <p>The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.</p>
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * @public
   * <p>The upload URL of the API specification.</p>
   */
  ApiSpecificationUploadUrl: string | undefined;

  /**
   * @public
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   */
  ApiSpecificationUploadUrlExpiresAt: Date | undefined;

  /**
   * @public
   * <p>The data set ID.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The protocol type.</p>
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * @public
   * <p>The revision ID.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>The API stage.</p>
   */
  Stage: string | undefined;
}

/**
 * @public
 * <p>The details in the response for an import request, including the signed URL and other information.</p>
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * @public
   * <p>The name for the asset associated with this import job.</p>
   */
  AssetName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.</p>
   */
  Md5Hash?: string;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>The signed URL.</p>
   */
  SignedUrl?: string;

  /**
   * @public
   * <p>The time and date at which the signed URL expires, in ISO 8601 format.</p>
   */
  SignedUrlExpiresAt?: Date;
}

/**
 * @public
 * <p>Details from an import AWS Lake Formation tag policy job response.</p>
 */
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
  /**
   * @public
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId: string | undefined;

  /**
   * @public
   * <p>A structure for the database object.</p>
   */
  Database?: DatabaseLFTagPolicyAndPermissions;

  /**
   * @public
   * <p>A structure for the table object.</p>
   */
  Table?: TableLFTagPolicyAndPermissions;

  /**
   * @public
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details from an import from Amazon Redshift datashare response.</p>
 */
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * @public
   * <p>A list of Amazon Redshift datashare asset sources.</p>
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import job.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details from an import from Amazon S3 response.</p>
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * @public
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this import job.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the revision associated with this import response.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 * <p>Details for the response.</p>
 */
export interface ResponseDetails {
  /**
   * @public
   * <p>Details for the export to signed URL response.</p>
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;

  /**
   * @public
   * <p>Details for the export to Amazon S3 response.</p>
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;

  /**
   * @public
   * <p>Details for the export revisions to Amazon S3 response.</p>
   */
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;

  /**
   * @public
   * <p>Details for the import from signed URL response.</p>
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;

  /**
   * @public
   * <p>Details for the import from Amazon S3 response.</p>
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;

  /**
   * @public
   * <p>Details from an import from Amazon Redshift datashare response.</p>
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;

  /**
   * @public
   * <p>The response details.</p>
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;

  /**
   * @public
   * <p>Response details from the CreateS3DataAccessFromS3Bucket job.</p>
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails;

  /**
   * @public
   * <p>Response details from the ImportAssetsFromLakeFormationTagPolicy job.</p>
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails;
}

/**
 * @public
 * <p>Details about the job error.</p>
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * @public
   * <p>Details about the job error.</p>
   */
  AssetName: string | undefined;
}

/**
 * @public
 * <p>Information about the job error.</p>
 */
export interface Details {
  /**
   * @public
   * <p>Information about the job error.</p>
   */
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;

  /**
   * @public
   * <p>Details about the job error.</p>
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[];
}

/**
 * @public
 * @enum
 */
export const JobErrorLimitName = {
  AWS_Lake_Formation_data_permission_assets_per_revision: "AWS Lake Formation data permission assets per revision",
  Amazon_Redshift_datashare_assets_per_revision: "Amazon Redshift datashare assets per revision",
  Amazon_S3_data_access_assets_per_revision: "Amazon S3 data access assets per revision",
  Asset_size_in_GB: "Asset size in GB",
  Assets_per_revision: "Assets per revision",
} as const;

/**
 * @public
 */
export type JobErrorLimitName = (typeof JobErrorLimitName)[keyof typeof JobErrorLimitName];

/**
 * @public
 * @enum
 */
export const JobErrorResourceTypes = {
  ASSET: "ASSET",
  DATA_SET: "DATA_SET",
  REVISION: "REVISION",
} as const;

/**
 * @public
 */
export type JobErrorResourceTypes = (typeof JobErrorResourceTypes)[keyof typeof JobErrorResourceTypes];

/**
 * @public
 * <p>An error that occurred with the job request.</p>
 */
export interface JobError {
  /**
   * @public
   * <p>The code for the job error.</p>
   */
  Code: Code | undefined;

  /**
   * @public
   * <p>The details about the job error.</p>
   */
  Details?: Details;

  /**
   * @public
   * <p>The name of the limit that was reached.</p>
   */
  LimitName?: JobErrorLimitName;

  /**
   * @public
   * <p>The value of the exceeded limit.</p>
   */
  LimitValue?: number;

  /**
   * @public
   * <p>The message related to the job error.</p>
   */
  Message: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the resource related to the error.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of resource related to the error.</p>
   */
  ResourceType?: JobErrorResourceTypes;
}

/**
 * @public
 * @enum
 */
export const State = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  TIMED_OUT: "TIMED_OUT",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * @public
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * @public
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * @public
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The state of the job.</p>
   */
  State?: State;

  /**
   * @public
   * <p>The job type.</p>
   */
  Type?: Type;

  /**
   * @public
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface CreateRevisionRequest {
  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRevisionResponse {
  /**
   * @public
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The tags for the revision.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * @public
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * @public
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * @public
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventActionRequest {
  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRevisionRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetRequest {
  /**
   * @public
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetResponse {
  /**
   * @public
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Details about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType;

  /**
   * @public
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * @public
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
   * @public
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * @public
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetDataSetRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSetResponse {
  /**
   * @public
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType;

  /**
   * @public
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin;

  /**
   * @public
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * @public
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The tags for the data set.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetEventActionRequest {
  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface GetEventActionResponse {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * @public
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * @public
   * <p>The ARN for the job.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Details about the job.</p>
   */
  Details?: ResponseDetails;

  /**
   * @public
   * <p>The errors associated with jobs.</p>
   */
  Errors?: JobError[];

  /**
   * @public
   * <p>The unique identifier for the job.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The state of the job.</p>
   */
  State?: State;

  /**
   * @public
   * <p>The job type.</p>
   */
  Type?: Type;

  /**
   * @public
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetRevisionRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetRevisionResponse {
  /**
   * @public
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The tags for the revision.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * @public
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * @public
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSetRevisionsRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A revision is a container for one or more assets.</p>
 */
export interface RevisionEntry {
  /**
   * @public
   * <p>The ARN for the revision.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * @public
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * @public
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSetRevisionsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The asset objects listed by the request.</p>
   */
  Revisions?: RevisionEntry[];
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * @public
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: string;
}

/**
 * @public
 * <p>A data set is an AWS resource with one or more revisions.</p>
 */
export interface DataSetEntry {
  /**
   * @public
   * <p>The ARN for the data set.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType: AssetType | undefined;

  /**
   * @public
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The description for the data set.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the data set.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin: Origin | undefined;

  /**
   * @public
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * @public
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * @public
   * <p>The data set objects listed by the request.</p>
   */
  DataSets?: DataSetEntry[];

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventActionsRequest {
  /**
   * @public
   * <p>The unique identifier for the event source.</p>
   */
  EventSourceId?: string;

  /**
   * @public
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.</p>
 */
export interface EventActionEntry {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action: Action | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the event action.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>What occurs to start an action.</p>
   */
  Event: Event | undefined;

  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEventActionsResponse {
  /**
   * @public
   * <p>The event action objects listed by the request.</p>
   */
  EventActions?: EventActionEntry[];

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId?: string;
}

/**
 * @public
 * <p>AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.</p>
 */
export interface JobEntry {
  /**
   * @public
   * <p>The ARN for the job.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>Details of the operation to be performed by the job, such as export destination details or import source details.</p>
   */
  Details: ResponseDetails | undefined;

  /**
   * @public
   * <p>Errors for jobs.</p>
   */
  Errors?: JobError[];

  /**
   * @public
   * <p>The unique identifier for the job.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The state of the job.</p>
   */
  State: State | undefined;

  /**
   * @public
   * <p>The job type.</p>
   */
  Type: Type | undefined;

  /**
   * @public
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * @public
   * <p>The jobs listed by the request.</p>
   */
  Jobs?: JobEntry[];

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRevisionAssetsRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results returned by a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface ListRevisionAssetsResponse {
  /**
   * @public
   * <p>The asset objects listed by the request.</p>
   */
  Assets?: AssetEntry[];

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RevokeRevisionRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment: string | undefined;
}

/**
 * @public
 */
export interface RevokeRevisionResponse {
  /**
   * @public
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * @public
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * @public
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}

/**
 * @public
 */
export interface SendApiAssetRequest {
  /**
   * @public
   * <p>The request body.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).</p>
   */
  QueryStringParameters?: Record<string, string>;

  /**
   * @public
   * <p>Asset ID value for the API request.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>Data set ID value for the API request.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.</p>
   */
  RequestHeaders?: Record<string, string>;

  /**
   * @public
   * <p>HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.</p>
   */
  Method?: string;

  /**
   * @public
   * <p>URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/\{pathValue\}.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>Revision ID value for the API request.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface SendApiAssetResponse {
  /**
   * @public
   * <p>The response body from the underlying API tracked by the API asset.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The response headers from the underlying API tracked by the API asset.</p>
   */
  ResponseHeaders?: Record<string, string>;
}

/**
 * @public
 * <p>Extra details specific to a data update type notification.</p>
 */
export interface DataUpdateRequestDetails {
  /**
   * @public
   * <p>A
   *          datetime in the past when the data was updated. This typically means that the underlying
   *          resource supporting the data set was updated.</p>
   */
  DataUpdatedAt?: Date;
}

/**
 * @public
 * <p>Extra details specific to a deprecation type notification.</p>
 */
export interface DeprecationRequestDetails {
  /**
   * @public
   * <p>A
   *          datetime in the future when the data set will be deprecated.</p>
   */
  DeprecationAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaChangeType = {
  ADD: "ADD",
  MODIFY: "MODIFY",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type SchemaChangeType = (typeof SchemaChangeType)[keyof typeof SchemaChangeType];

/**
 * @public
 * <p>Object encompassing information about a schema change to a single, particular field,
 *          a notification can have up to 100 of these.</p>
 */
export interface SchemaChangeDetails {
  /**
   * @public
   * <p>Name
   *          of the changing
   *          field. This value
   *          can be up to 255 characters long.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Is
   *          the field being added, removed, or modified?</p>
   */
  Type: SchemaChangeType | undefined;

  /**
   * @public
   * <p>Description
   *          of what's changing about this
   *          field. This value
   *          can be up to 512 characters long.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Extra details specific to this schema change type notification.</p>
 */
export interface SchemaChangeRequestDetails {
  /**
   * @public
   * <p>List
   *          of schema changes happening in the scope of this
   *          notification. This
   *          can have up to 100 entries.</p>
   */
  Changes?: SchemaChangeDetails[];

  /**
   * @public
   * <p>A
   *          date in the future when the schema change is taking effect.</p>
   */
  SchemaChangeAt: Date | undefined;
}

/**
 * @public
 * <p>Extra details specific to this notification.</p>
 */
export interface NotificationDetails {
  /**
   * @public
   * <p>Extra
   *          details specific to a data update type notification.</p>
   */
  DataUpdate?: DataUpdateRequestDetails;

  /**
   * @public
   * <p>Extra
   *          details specific to a deprecation type notification.</p>
   */
  Deprecation?: DeprecationRequestDetails;

  /**
   * @public
   * <p>Extra
   *          details specific to a schema change type notification.</p>
   */
  SchemaChange?: SchemaChangeRequestDetails;
}

/**
 * @public
 * <p>Extra details specific to the affected scope in
 *          this LF data set.</p>
 */
export interface LakeFormationTagPolicyDetails {
  /**
   * @public
   * <p>The
   *          underlying Glue database that the notification is referring to.</p>
   */
  Database?: string;

  /**
   * @public
   * <p>The
   *          underlying Glue table that the notification is referring to.</p>
   */
  Table?: string;
}

/**
 * @public
 * <p>Extra details specific to the affected scope
 *          in this Redshift data set.</p>
 */
export interface RedshiftDataShareDetails {
  /**
   * @public
   * <p>The
   *          ARN of the underlying Redshift data share that is being affected by this
   *          notification.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The
   *          database name in the Redshift data share that is being affected by this
   *          notification.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>A
   *          function name in the Redshift database that is being affected by this notification.</p>
   */
  Function?: string;

  /**
   * @public
   * <p>A
   *          table name in the Redshift database that is being affected by this notification.</p>
   */
  Table?: string;

  /**
   * @public
   * <p>A
   *          schema name in the Redshift database that is being affected by this notification.</p>
   */
  Schema?: string;

  /**
   * @public
   * <p>A
   *          view name in the Redshift database that is being affected by this notification.</p>
   */
  View?: string;
}

/**
 * @public
 * <p>Extra details specific to the affected scope in this S3 Data
 *          Access data set.</p>
 */
export interface S3DataAccessDetails {
  /**
   * @public
   * <p>A
   *          list of the key prefixes affected by this
   *          notification. This
   *          can have up to 50 entries.</p>
   */
  KeyPrefixes?: string[];

  /**
   * @public
   * <p>A
   *          list of the keys affected by this
   *          notification. This
   *          can have up to 50 entries.</p>
   */
  Keys?: string[];
}

/**
 * @public
 * <p>Details about the scope of the notifications such as the affected resources.</p>
 */
export interface ScopeDetails {
  /**
   * @public
   * <p>Underlying
   *          LF resources that will be affected by this notification.</p>
   */
  LakeFormationTagPolicies?: LakeFormationTagPolicyDetails[];

  /**
   * @public
   * <p>Underlying
   *          Redshift resources that will be affected by this notification.</p>
   */
  RedshiftDataShares?: RedshiftDataShareDetails[];

  /**
   * @public
   * <p>Underlying
   *          S3 resources that will be affected by this notification.</p>
   */
  S3DataAccesses?: S3DataAccessDetails[];
}

/**
 * @public
 * @enum
 */
export const NotificationType = {
  DATA_DELAY: "DATA_DELAY",
  DATA_UPDATE: "DATA_UPDATE",
  DEPRECATION: "DEPRECATION",
  SCHEMA_CHANGE: "SCHEMA_CHANGE",
} as const;

/**
 * @public
 */
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

/**
 * @public
 */
export interface SendDataSetNotificationRequest {
  /**
   * @public
   * <p>Affected
   *          scope of this notification such as the underlying resources affected by the notification
   *          event.</p>
   */
  Scope?: ScopeDetails;

  /**
   * @public
   * <p>Idempotency
   *          key for the notification, this key allows us to deduplicate notifications that are sent in
   *          quick succession erroneously.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Free-form
   *          text field for providers to add information about their notifications.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>Affected
   *          data set of the notification.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Extra
   *          details specific to this notification type.</p>
   */
  Details?: NotificationDetails;

  /**
   * @public
   * <p>The
   *          type of the notification. Describing the kind of event the notification is alerting you
   *          to.</p>
   */
  Type: NotificationType | undefined;
}

/**
 * @public
 */
export interface SendDataSetNotificationResponse {}

/**
 * @public
 */
export interface StartJobRequest {
  /**
   * @public
   * <p>The unique identifier for a job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StartJobResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key tags.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * @public
   * <p>The unique identifier for an asset.</p>
   */
  AssetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * @public
   * <p>The ARN for the asset.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Details about the asset.</p>
   */
  AssetDetails?: AssetDetails;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType;

  /**
   * @public
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with this asset.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>The unique identifier for the asset.</p>
   */
  Id?: string;

  /**
   * @public
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
   * @public
   * <p>The unique identifier for the revision associated with this asset.</p>
   */
  RevisionId?: string;

  /**
   * @public
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface UpdateDataSetRequest {
  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * @public
   * <p>The ARN for the data set.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The type of asset that is added to a data set.</p>
   */
  AssetType?: AssetType;

  /**
   * @public
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The description for the data set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique identifier for the data set.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the data set.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).</p>
   */
  Origin?: Origin;

  /**
   * @public
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.</p>
   */
  OriginDetails?: OriginDetails;

  /**
   * @public
   * <p>The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface UpdateEventActionRequest {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventActionResponse {
  /**
   * @public
   * <p>What occurs after a certain event.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>The ARN for the event action.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>What occurs to start an action.</p>
   */
  Event?: Event;

  /**
   * @public
   * <p>The unique identifier for the event action.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface UpdateRevisionRequest {
  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The unique identifier for a data set.</p>
   */
  DataSetId: string | undefined;

  /**
   * @public
   * <p>Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for a revision.</p>
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRevisionResponse {
  /**
   * @public
   * <p>The ARN for the revision.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>An optional comment about the revision.</p>
   */
  Comment?: string;

  /**
   * @public
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   */
  DataSetId?: string;

  /**
   * @public
   * <p>To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.</p>
   */
  Finalized?: boolean;

  /**
   * @public
   * <p>The unique identifier for the revision.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.</p>
   */
  SourceId?: string;

  /**
   * @public
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>A required comment to inform subscribers of the reason their access to the revision was revoked.</p>
   */
  RevocationComment?: string;

  /**
   * @public
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   */
  Revoked?: boolean;

  /**
   * @public
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   */
  RevokedAt?: Date;
}
