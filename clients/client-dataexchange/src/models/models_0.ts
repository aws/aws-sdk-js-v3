// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptanceStateFilterValue = {
  ACCEPTED: "ACCEPTED",
  PENDING_RECEIVER_ACCEPTANCE: "PENDING_RECEIVER_ACCEPTANCE",
} as const;

/**
 * @public
 */
export type AcceptanceStateFilterValue = (typeof AcceptanceStateFilterValue)[keyof typeof AcceptanceStateFilterValue];

/**
 * @public
 */
export interface AcceptDataGrantRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data grant to accept.</p>
   * @public
   */
  DataGrantArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataGrantAcceptanceState = {
  ACCEPTED: "ACCEPTED",
  PENDING_RECEIVER_ACCEPTANCE: "PENDING_RECEIVER_ACCEPTANCE",
} as const;

/**
 * @public
 */
export type DataGrantAcceptanceState = (typeof DataGrantAcceptanceState)[keyof typeof DataGrantAcceptanceState];

/**
 * @public
 * @enum
 */
export const GrantDistributionScope = {
  AWS_ORGANIZATION: "AWS_ORGANIZATION",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GrantDistributionScope = (typeof GrantDistributionScope)[keyof typeof GrantDistributionScope];

/**
 * @public
 */
export interface AcceptDataGrantResponse {
  /**
   * <p>The name of the accepted data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The description of the accepted data grant.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The distribution scope for the data grant.</p>
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the accepted data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ASSET: "ASSET",
  DATA_GRANT: "DATA_GRANT",
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
 * <p>Encryption configuration of the export job. Includes the encryption type in addition to
 *          the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.</p>
 * @public
 */
export interface ExportServerSideEncryption {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon
   *          S3 objects. This parameter is required if you choose aws:kms as an encryption type.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The type of server side encryption used for encrypting the objects in Amazon S3.</p>
   * @public
   */
  Type: ServerSideEncryptionTypes | undefined;
}

/**
 * <p>A revision destination is the Amazon S3 bucket folder destination to where the export
 *          will be sent.</p>
 * @public
 */
export interface AutoExportRevisionDestinationEntry {
  /**
   * <p>The Amazon S3 bucket that is the destination for the event action.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the
   *          revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   * @public
   */
  KeyPattern?: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface AutoExportRevisionToS3RequestDetails {
  /**
   * <p>Encryption configuration for the auto export job.</p>
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * <p>A revision destination is the Amazon S3 bucket folder destination to where the export
   *          will be sent.</p>
   * @public
   */
  RevisionDestination: AutoExportRevisionDestinationEntry | undefined;
}

/**
 * <p>What occurs after a certain event.</p>
 * @public
 */
export interface Action {
  /**
   * <p>Details for the export revision to Amazon S3 action.</p>
   * @public
   */
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails | undefined;
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
 * <p>The API Gateway API that is the asset.</p>
 * @public
 */
export interface ApiGatewayApiAsset {
  /**
   * <p>The API description of the API asset.</p>
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * <p>The API endpoint of the API asset.</p>
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * <p>The unique identifier of the API asset.</p>
   * @public
   */
  ApiId?: string | undefined;

  /**
   * <p>The API key of the API asset.</p>
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * <p>The API name of the API asset.</p>
   * @public
   */
  ApiName?: string | undefined;

  /**
   * <p>The download URL of the API specification of the API asset.</p>
   * @public
   */
  ApiSpecificationDownloadUrl?: string | undefined;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   * @public
   */
  ApiSpecificationDownloadUrlExpiresAt?: Date | undefined;

  /**
   * <p>The protocol type of the API asset.</p>
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * <p>The stage of the API asset.</p>
   * @public
   */
  Stage?: string | undefined;
}

/**
 * <p>The destination for the asset.</p>
 * @public
 */
export interface AssetDestinationEntry {
  /**
   * <p>The unique identifier for the asset.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The Amazon S3 bucket that is the destination for the asset.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>A structure that allows an LF-admin to grant permissions on certain conditions.</p>
 * @public
 */
export interface LFTag {
  /**
   * <p>The key name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of LF-tag values.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p>The LF-tag policy for database resources.</p>
 * @public
 */
export interface DatabaseLFTagPolicy {
  /**
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>The LF-tag policy for a table resource.</p>
 * @public
 */
export interface TableLFTagPolicy {
  /**
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>Details about the AWS Lake Formation resource (Table or Database) included in the AWS
 *          Lake Formation data permission.</p>
 * @public
 */
export interface LFResourceDetails {
  /**
   * <p>Details about the database resource included in the AWS Lake Formation data
   *          permission.</p>
   * @public
   */
  Database?: DatabaseLFTagPolicy | undefined;

  /**
   * <p>Details about the table resource included in the AWS Lake Formation data
   *          permission.</p>
   * @public
   */
  Table?: TableLFTagPolicy | undefined;
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
 * <p>Details about the LF-tag policy.</p>
 * @public
 */
export interface LFTagPolicyDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The resource type for which the LF-tag policy applies.</p>
   * @public
   */
  ResourceType: LFResourceType | undefined;

  /**
   * <p>Details for the Lake Formation Resources included in the LF-tag policy.</p>
   * @public
   */
  ResourceDetails: LFResourceDetails | undefined;
}

/**
 * <p>Details about the AWS Lake Formation data permission.</p>
 * @public
 */
export interface LakeFormationDataPermissionDetails {
  /**
   * <p>Details about the LF-tag policy.</p>
   * @public
   */
  LFTagPolicy?: LFTagPolicyDetails | undefined;
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
 * <p>The AWS Lake Formation data permission asset.</p>
 * @public
 */
export interface LakeFormationDataPermissionAsset {
  /**
   * <p>Details about the AWS Lake Formation data permission.</p>
   * @public
   */
  LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails | undefined;

  /**
   * <p>The data permission type.</p>
   * @public
   */
  LakeFormationDataPermissionType: LakeFormationDataPermissionType | undefined;

  /**
   * <p>The permissions granted to the subscribers on the resource.</p>
   * @public
   */
  Permissions: LFPermission[] | undefined;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke
   *          permissions to AWS Lake Formation data permissions.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * <p>The Amazon Redshift datashare asset.</p>
 * @public
 */
export interface RedshiftDataShareAsset {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3
 *          objects.</p>
 * @public
 */
export interface KmsKeyToGrant {
  /**
   * <p>The AWS KMS CMK (Key Management System Customer Managed Key) used to encrypt S3 objects
   *          in the shared S3 Bucket. AWS Data exchange will create a KMS grant for each subscriber to
   *          allow them to access and decrypt their entitled data that is encrypted using this KMS key
   *          specified.</p>
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * <p>The Amazon S3 data access that is the asset.</p>
 * @public
 */
export interface S3DataAccessAsset {
  /**
   * <p>The Amazon S3 bucket hosting data to be shared in the S3 data access.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * <p>S3 keys made available using this asset.</p>
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * <p>The automatically-generated bucket-style alias for your Amazon S3 Access Point.
   *          Customers can access their entitled data using the S3 Access Point alias.</p>
   * @public
   */
  S3AccessPointAlias?: string | undefined;

  /**
   * <p>The ARN for your Amazon S3 Access Point. Customers can also access their entitled data
   *          using the S3 Access Point ARN.</p>
   * @public
   */
  S3AccessPointArn?: string | undefined;

  /**
   * <p> List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to
   *          encrypt S3 objects being shared in this S3 Data Access asset. Providers must include all
   *          AWS KMS keys used to encrypt these shared S3 objects.</p>
   * @public
   */
  KmsKeysToGrant?: KmsKeyToGrant[] | undefined;
}

/**
 * <p>The Amazon S3 object that is the asset.</p>
 * @public
 */
export interface S3SnapshotAsset {
  /**
   * <p>The size of the Amazon S3 object that is the object.</p>
   * @public
   */
  Size: number | undefined;
}

/**
 * <p>Details about the asset.</p>
 * @public
 */
export interface AssetDetails {
  /**
   * <p>The Amazon S3 object that is the asset.</p>
   * @public
   */
  S3SnapshotAsset?: S3SnapshotAsset | undefined;

  /**
   * <p>The Amazon Redshift datashare that is the asset.</p>
   * @public
   */
  RedshiftDataShareAsset?: RedshiftDataShareAsset | undefined;

  /**
   * <p>Information about the API Gateway API asset.</p>
   * @public
   */
  ApiGatewayApiAsset?: ApiGatewayApiAsset | undefined;

  /**
   * <p>The Amazon S3 data access that is the asset.</p>
   * @public
   */
  S3DataAccessAsset?: S3DataAccessAsset | undefined;

  /**
   * <p>The AWS Lake Formation data permission that is the asset.</p>
   * @public
   */
  LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset | undefined;
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
 * <p>An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of
 *          fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation
 *          data permission, or Amazon S3 data access). The asset can be a structured data file, an
 *          image file, or some other data file that can be stored as an Amazon S3 object, an Amazon
 *          API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or
 *          an Amazon S3 data access. When you create an import job for your files, API Gateway APIs,
 *          Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access,
 *          you create an asset in AWS Data Exchange.</p>
 * @public
 */
export interface AssetEntry {
  /**
   * <p>The ARN for the asset.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Details about the asset.</p>
   * @public
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   * @public
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
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This
   *          parameter is returned when an asset owner is viewing the entitled copy of its owned
   *          asset.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>The source of the assets.</p>
 * @public
 */
export interface AssetSourceEntry {
  /**
   * <p>The Amazon S3 bucket that's part of the source of the asset.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the object in Amazon S3 for the asset.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   * @public
   */
  JobId: string | undefined;
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
export interface CreateDataGrantRequest {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The distribution scope of the data grant.</p>
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The ID of the data set used to create the data grant.</p>
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The description of the data grant.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags to add to the data grant. A tag is a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataGrantResponse {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The description of the data grant.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The distribution scope for the data grant.</p>
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data set used to create the data grant.</p>
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The tags associated to the data grant. A tag is a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const LimitName = {
  AWS_Lake_Formation_data_permission_assets_per_revision: "AWS Lake Formation data permission assets per revision",
  Active_and_pending_data_grants: "Active and pending data grants",
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
  Pending_data_grants_per_consumer: "Pending data grants per consumer",
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
 */
export interface CreateDataSetRequest {
  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * <p>A description for the data set. This value can be up to 16,348 characters long.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A data set tag is an optional label that you can assign to a data set when you create
   *          it. Each tag consists of a key and an optional value, both of which you define. When you
   *          use tagging, you can also use tag-based access control in IAM policies to control access to
   *          these data sets and revisions.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
 * <p>Details about the origin of the data set.</p>
 * @public
 */
export interface OriginDetails {
  /**
   * <p>The product ID of the origin of the data set.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  DataGrantId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED
   *          to the account (for subscribers).</p>
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS
   *          Marketplace.</p>
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being
   *          viewed. This parameter is returned when a data set owner is viewing the entitled copy of
   *          its owned data set.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The tags for the data set.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Information about the published revision.</p>
 * @public
 */
export interface RevisionPublished {
  /**
   * <p>The data set ID of the published revision.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * <p>What occurs to start an action.</p>
 * @public
 */
export interface Event {
  /**
   * <p>What occurs to start the revision publish action.</p>
   * @public
   */
  RevisionPublished?: RevisionPublished | undefined;
}

/**
 * @public
 */
export interface CreateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action: Action | undefined;

  /**
   * <p>What occurs to start an action.</p>
   * @public
   */
  Event: Event | undefined;

  /**
   * <p>Key-value pairs that you can associate with the event action.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The ARN for the event action.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   * @public
   */
  Event?: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The tags for the event action.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * <p>Source details for an Amazon S3 data access asset.</p>
 * @public
 */
export interface S3DataAccessAssetSourceEntry {
  /**
   * <p>The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.</p>
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * <p>The keys used to create the Amazon S3 data access.</p>
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * <p>List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to
   *          encrypt S3 objects being shared in this S3 Data Access asset.</p>
   * @public
   */
  KmsKeysToGrant?: KmsKeyToGrant[] | undefined;
}

/**
 * <p>Details of the operation to create an Amazon S3 data access from an S3 bucket.</p>
 * @public
 */
export interface CreateS3DataAccessFromS3BucketRequestDetails {
  /**
   * <p>Details about the S3 data access source asset.</p>
   * @public
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * <p>The unique identifier for the data set associated with the creation of this Amazon S3
   *          data access.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * <p>The destination for the asset.</p>
   * @public
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * <p>The unique identifier for the asset that is exported to a signed URL.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export request.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>The destination where the assets in the revision will be exported.</p>
 * @public
 */
export interface RevisionDestinationEntry {
  /**
   * <p>The Amazon S3 bucket that is the destination for the assets in the revision.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A string representing the pattern for generated names of the individual assets in the
   *          revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.</p>
   * @public
   */
  KeyPattern?: string | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface ExportRevisionsToS3RequestDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration for the export job.</p>
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * <p>The destination for the revision.</p>
   * @public
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;
}

/**
 * <p>The request details.</p>
 * @public
 */
export interface ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * <p>The API description. Markdown supported.</p>
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * <p>The API Gateway API ID.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The API Gateway API key.</p>
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * <p>The API name.</p>
   * @public
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used
   *          to ensure the integrity of the file.</p>
   * @public
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The data set ID.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * <p>The revision ID.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name.</p>
   * @public
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at
   *          that location.</p>
   * @public
   */
  Md5Hash: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   * @public
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
 * <p>The LF-tag policy and permissions for database resources.</p>
 * @public
 */
export interface DatabaseLFTagPolicyAndPermissions {
  /**
   * <p>A list of LF-tag conditions that apply to database resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;

  /**
   * <p>The permissions granted to subscribers on database resources.</p>
   * @public
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
 * <p>The LF-tag policy and permissions that apply to table resources.</p>
 * @public
 */
export interface TableLFTagPolicyAndPermissions {
  /**
   * <p>A list of LF-tag conditions that apply to table resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;

  /**
   * <p>The permissions granted to subscribers on table resources.</p>
   * @public
   */
  Permissions: TableTagPolicyLFPermission[] | undefined;
}

/**
 * <p>Details about the assets imported from an AWS Lake Formation tag policy request.</p>
 * @public
 */
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>A structure for the database object.</p>
   * @public
   */
  Database?: DatabaseLFTagPolicyAndPermissions | undefined;

  /**
   * <p>A structure for the table object.</p>
   * @public
   */
  Table?: TableLFTagPolicyAndPermissions | undefined;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke
   *          permissions of subscribers to AWS Lake Formation data permissions.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>The source of the Amazon Redshift datashare asset.</p>
 * @public
 */
export interface RedshiftDataShareAssetSourceEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare asset.</p>
   * @public
   */
  DataShareArn: string | undefined;
}

/**
 * <p>Details from an import from Amazon Redshift datashare request.</p>
 * @public
 */
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * <p>A list of Amazon Redshift datashare assets.</p>
   * @public
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details of the operation to be performed by the job.</p>
 * @public
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   * @public
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import request.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>The details for the request.</p>
 * @public
 */
export interface RequestDetails {
  /**
   * <p>Details about the export to signed URL request.</p>
   * @public
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails | undefined;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   * @public
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails | undefined;

  /**
   * <p>Details about the export to Amazon S3 request.</p>
   * @public
   */
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails | undefined;

  /**
   * <p>Details about the import from Amazon S3 request.</p>
   * @public
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails | undefined;

  /**
   * <p>Details about the import asset from API Gateway API request.</p>
   * @public
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails | undefined;

  /**
   * <p>Details from an import from Amazon Redshift datashare request.</p>
   * @public
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails | undefined;

  /**
   * <p>Details about the import from signed URL request.</p>
   * @public
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails | undefined;

  /**
   * <p>Details of the request to create S3 data access from the Amazon S3 bucket.</p>
   * @public
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails | undefined;

  /**
   * <p>Request details for the ImportAssetsFromLakeFormationTagPolicy job.</p>
   * @public
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails | undefined;
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
   * <p>The details for the CreateJob request.</p>
   * @public
   */
  Details: RequestDetails | undefined;

  /**
   * <p>The type of job to be created.</p>
   * @public
   */
  Type: Type | undefined;
}

/**
 * <p>Details about the response of the operation to create an S3 data access from an S3
 *          bucket.</p>
 * @public
 */
export interface CreateS3DataAccessFromS3BucketResponseDetails {
  /**
   * <p>Details about the asset source from an Amazon S3 bucket.</p>
   * @public
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * <p>The unique identifier for this data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details about the export to Amazon S3 response.</p>
 * @public
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * <p>The destination in Amazon S3 where the asset is exported.</p>
   * @public
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>The details of the export to signed URL response.</p>
 * @public
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * <p>The unique identifier for the asset associated with this export job.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this export response.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL for the export request.</p>
   * @public
   */
  SignedUrl?: string | undefined;

  /**
   * <p>The date and time that the signed URL expires, in ISO 8601 format.</p>
   * @public
   */
  SignedUrlExpiresAt?: Date | undefined;
}

/**
 * <p>Details about the export revisions to Amazon S3 response.</p>
 * @public
 */
export interface ExportRevisionsToS3ResponseDetails {
  /**
   * <p>The unique identifier for the data set associated with this export job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Encryption configuration of the export job.</p>
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * <p>The destination in Amazon S3 where the revision is exported.</p>
   * @public
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event action.</p>
   * @public
   */
  EventActionArn?: string | undefined;
}

/**
 * <p>The response details.</p>
 * @public
 */
export interface ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * <p>The API description.</p>
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * <p>The API ID.</p>
   * @public
   */
  ApiId: string | undefined;

  /**
   * <p>The API key.</p>
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * <p>The API name.</p>
   * @public
   */
  ApiName: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API
   *          at that location.</p>
   * @public
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * <p>The upload URL of the API specification.</p>
   * @public
   */
  ApiSpecificationUploadUrl: string | undefined;

  /**
   * <p>The date and time that the upload URL expires, in ISO 8601 format.</p>
   * @public
   */
  ApiSpecificationUploadUrlExpiresAt: Date | undefined;

  /**
   * <p>The data set ID.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The protocol type.</p>
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * <p>The revision ID.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>The API stage.</p>
   * @public
   */
  Stage: string | undefined;
}

/**
 * <p>The details in the response for an import request, including the signed URL and other
 *          information.</p>
 * @public
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * <p>The name for the asset associated with this import job.</p>
   * @public
   */
  AssetName: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at
   *          that location.</p>
   * @public
   */
  Md5Hash?: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>The signed URL.</p>
   * @public
   */
  SignedUrl?: string | undefined;

  /**
   * <p>The time and date at which the signed URL expires, in ISO 8601 format.</p>
   * @public
   */
  SignedUrlExpiresAt?: Date | undefined;
}

/**
 * <p>Details from an import AWS Lake Formation tag policy job response.</p>
 * @public
 */
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
  /**
   * <p>The identifier for the AWS Glue Data Catalog.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>A structure for the database object.</p>
   * @public
   */
  Database?: DatabaseLFTagPolicyAndPermissions | undefined;

  /**
   * <p>A structure for the table object.</p>
   * @public
   */
  Table?: TableLFTagPolicyAndPermissions | undefined;

  /**
   * <p>The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke
   *          permissions to AWS Lake Formation data permissions.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details from an import from Amazon Redshift datashare response.</p>
 * @public
 */
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * <p>A list of Amazon Redshift datashare asset sources.</p>
   * @public
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import job.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details from an import from Amazon S3 response.</p>
 * @public
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * <p>Is a list of Amazon S3 bucket and object key pairs.</p>
   * @public
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * <p>The unique identifier for the data set associated with this import job.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this import response.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Details for the response.</p>
 * @public
 */
export interface ResponseDetails {
  /**
   * <p>Details for the export to signed URL response.</p>
   * @public
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails | undefined;

  /**
   * <p>Details for the export to Amazon S3 response.</p>
   * @public
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails | undefined;

  /**
   * <p>Details for the export revisions to Amazon S3 response.</p>
   * @public
   */
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails | undefined;

  /**
   * <p>Details for the import from signed URL response.</p>
   * @public
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails | undefined;

  /**
   * <p>Details for the import from Amazon S3 response.</p>
   * @public
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails | undefined;

  /**
   * <p>Details from an import from Amazon Redshift datashare response.</p>
   * @public
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails | undefined;

  /**
   * <p>The response details.</p>
   * @public
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails | undefined;

  /**
   * <p>Response details from the CreateS3DataAccessFromS3Bucket job.</p>
   * @public
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails | undefined;

  /**
   * <p>Response details from the ImportAssetsFromLakeFormationTagPolicy job.</p>
   * @public
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails | undefined;
}

/**
 * <p>Details about the job error.</p>
 * @public
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * <p>Details about the job error.</p>
   * @public
   */
  AssetName: string | undefined;
}

/**
 * <p>Information about the job error.</p>
 * @public
 */
export interface Details {
  /**
   * <p>Information about the job error.</p>
   * @public
   */
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails | undefined;

  /**
   * <p>Details about the job error.</p>
   * @public
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[] | undefined;
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
 * <p>An error that occurred with the job request.</p>
 * @public
 */
export interface JobError {
  /**
   * <p>The code for the job error.</p>
   * @public
   */
  Code: Code | undefined;

  /**
   * <p>The details about the job error.</p>
   * @public
   */
  Details?: Details | undefined;

  /**
   * <p>The name of the limit that was reached.</p>
   * @public
   */
  LimitName?: JobErrorLimitName | undefined;

  /**
   * <p>The value of the exceeded limit.</p>
   * @public
   */
  LimitValue?: number | undefined;

  /**
   * <p>The message related to the job error.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The unique identifier for the resource related to the error.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource related to the error.</p>
   * @public
   */
  ResourceType?: JobErrorResourceTypes | undefined;
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
   * <p>The ARN for the job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Details about the job.</p>
   * @public
   */
  Details?: ResponseDetails | undefined;

  /**
   * <p>The errors associated with jobs.</p>
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The state of the job.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The job type.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>A revision tag is an optional label that you can assign to a revision when you create
   *          it. Each tag consists of a key and an optional value, both of which you define. When you
   *          use tagging, you can also use tag-based access control in IAM policies to control access to
   *          these data sets and revisions.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized.
   *          Finalizing a revision tells AWS Data Exchange that your changes to the assets in the
   *          revision are complete. After it's in this read-only state, you can publish the revision to
   *          your products. Finalized revisions can be published through the AWS Data Exchange console
   *          or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API
   *          action. When using the API, revisions are uniquely identified by their ARN.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being
   *          viewed. This parameter is returned when a revision owner is viewing the entitled copy of
   *          its owned revision.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The tags for the revision.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataGrantRequest {
  /**
   * <p>The ID of the data grant to delete.</p>
   * @public
   */
  DataGrantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Details about the asset.</p>
   * @public
   */
  AssetDetails?: AssetDetails | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s)
   *          included in the LF-tag policy" or "Table(s) included in the LF-tag policy" are used as the
   *          asset name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This
   *          parameter is returned when an asset owner is viewing the entitled copy of its owned
   *          asset.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDataGrantRequest {
  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  DataGrantId: string | undefined;
}

/**
 * @public
 */
export interface GetDataGrantResponse {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The description of the data grant.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The distribution scope for the data grant.</p>
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data set used to create the data grant.</p>
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The tags associated to the data grant. A tag is a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED
   *          to the account (for subscribers).</p>
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS
   *          Marketplace.</p>
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being
   *          viewed. This parameter is returned when a data set owner is viewing the entitled copy of
   *          its owned data set.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The tags for the data set.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetEventActionRequest {
  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface GetEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The ARN for the event action.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   * @public
   */
  Event?: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The tags for the event action.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * <p>The unique identifier for a job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * <p>The ARN for the job.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Details about the job.</p>
   * @public
   */
  Details?: ResponseDetails | undefined;

  /**
   * <p>The errors associated with jobs.</p>
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The state of the job.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The job type.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetReceivedDataGrantRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  DataGrantArn: string | undefined;
}

/**
 * @public
 */
export interface GetReceivedDataGrantResponse {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The description of the data grant.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The distribution scope for the data grant.</p>
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized.
   *          Finalizing a revision tells AWS Data Exchange that your changes to the assets in the
   *          revision are complete. After it's in this read-only state, you can publish the revision to
   *          your products. Finalized revisions can be published through the AWS Data Exchange console
   *          or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API
   *          action. When using the API, revisions are uniquely identified by their ARN.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being
   *          viewed. This parameter is returned when a revision owner is viewing the entitled copy of
   *          its owned revision.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The tags for the revision.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataGrantsRequest {
  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a data grant.</p>
 * @public
 */
export interface DataGrantSummaryEntry {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data set used to create the data grant.</p>
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataGrantsResponse {
  /**
   * <p>An object that contains a list of data grant information.</p>
   * @public
   */
  DataGrantSummaries?: DataGrantSummaryEntry[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSetRevisionsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A revision is a container for one or more assets.</p>
 * @public
 */
export interface RevisionEntry {
  /**
   * <p>The ARN for the revision.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized.
   *          Finalizing a revision tells AWS Data Exchange that your changes to the assets in the
   *          revision are complete. After it's in this read-only state, you can publish the revision to
   *          your products. Finalized revisions can be published through the AWS Data Exchange console
   *          or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API
   *          action. When using the API, revisions are uniquely identified by their ARN.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being
   *          viewed. This parameter is returned when a revision owner is viewing the entitled copy of
   *          its owned revision.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSetRevisionsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The asset objects listed by the request.</p>
   * @public
   */
  Revisions?: RevisionEntry[] | undefined;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * <p>The maximum number of results returned by a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED
   *          to the account (for subscribers).</p>
   * @public
   */
  Origin?: string | undefined;
}

/**
 * <p>A data set is an AWS resource with one or more revisions.</p>
 * @public
 */
export interface DataSetEntry {
  /**
   * <p>The ARN for the data set.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED
   *          to the account (for subscribers).</p>
   * @public
   */
  Origin: Origin | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS
   *          Marketplace.</p>
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being
   *          viewed. This parameter is returned when a data set owner is viewing the entitled copy of
   *          its owned data set.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * <p>The data set objects listed by the request.</p>
   * @public
   */
  DataSets?: DataSetEntry[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventActionsRequest {
  /**
   * <p>The unique identifier for the event source.</p>
   * @public
   */
  EventSourceId?: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An event action is an object that defines the relationship between a specific event and
 *          an automated action that will be taken on behalf of the customer.</p>
 * @public
 */
export interface EventActionEntry {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action: Action | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event action.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   * @public
   */
  Event: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEventActionsResponse {
  /**
   * <p>The event action objects listed by the request.</p>
   * @public
   */
  EventActions?: EventActionEntry[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * <p>AWS Data Exchange Jobs are asynchronous import or export operations used to create or
 *          copy assets. A data set owner can both import and export as they see fit. Someone with an
 *          entitlement to a data set can only export. Jobs are deleted 90 days after they are
 *          created.</p>
 * @public
 */
export interface JobEntry {
  /**
   * <p>The ARN for the job.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time that the job was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>Details of the operation to be performed by the job, such as export destination details
   *          or import source details.</p>
   * @public
   */
  Details: ResponseDetails | undefined;

  /**
   * <p>Errors for jobs.</p>
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The state of the job.</p>
   * @public
   */
  State: State | undefined;

  /**
   * <p>The job type.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>The date and time that the job was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>The jobs listed by the request.</p>
   * @public
   */
  Jobs?: JobEntry[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedDataGrantsRequest {
  /**
   * <p>The maximum number of results to be included in the next page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The acceptance state of the data grants to list.</p>
   * @public
   */
  AcceptanceState?: AcceptanceStateFilterValue[] | undefined;
}

/**
 * <p>Information about a received data grant.</p>
 * @public
 */
export interface ReceivedDataGrantSummariesEntry {
  /**
   * <p>The name of the data grant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant sender.</p>
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the data grant receiver.</p>
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * <p>The acceptance state of the data grant.</p>
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * <p>The timestamp of when the data grant was accepted.</p>
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * <p>The timestamp of when access to the associated data set ends.</p>
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * <p>The ID of the data set associated to the data grant.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The ID of the data grant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data grant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The timestamp of when the data grant was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data grant was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListReceivedDataGrantsResponse {
  /**
   * <p>An object that contains a list of received data grant information.</p>
   * @public
   */
  DataGrantSummaries?: ReceivedDataGrantSummariesEntry[] | undefined;

  /**
   * <p>The pagination token used to retrieve the next page of results for this
   *          operation.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRevisionAssetsRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The maximum number of results returned by a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface ListRevisionAssetsResponse {
  /**
   * <p>The asset objects listed by the request.</p>
   * @public
   */
  Assets?: AssetEntry[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RevokeRevisionRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment: string | undefined;
}

/**
 * @public
 */
export interface RevokeRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized.
   *          Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision
   *          are complete. After it's in this read-only state, you can publish the revision to your
   *          products. Finalized revisions can be published through the AWS Data Exchange console or the
   *          AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action.
   *          When using the API, revisions are uniquely identified by their ARN.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being
   *          viewed. This parameter is returned when a revision owner is viewing the entitled copy of
   *          its owned revision.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SendApiAssetRequest {
  /**
   * <p>The request body.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>Attach query string parameters to the end of the URI (for example,
   *          /v1/examplePath?exampleParam=exampleValue).</p>
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;

  /**
   * <p>Asset ID value for the API request.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>Data set ID value for the API request.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Any header value prefixed with x-amzn-dataexchange-header- will have that stripped
   *          before sending the Asset API request. Use this when you want to override a header that AWS
   *          Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP
   *          request.</p>
   * @public
   */
  RequestHeaders?: Record<string, string> | undefined;

  /**
   * <p>HTTP method value for the API request. Alternatively, you can use the appropriate verb
   *          in your request.</p>
   * @public
   */
  Method?: string | undefined;

  /**
   * <p>URI path value for the API request. Alternatively, you can set the URI path directly by
   *          invoking /v1/\{pathValue\}.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>Revision ID value for the API request.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface SendApiAssetResponse {
  /**
   * <p>The response body from the underlying API tracked by the API asset.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The response headers from the underlying API tracked by the API asset.</p>
   * @public
   */
  ResponseHeaders?: Record<string, string> | undefined;
}

/**
 * <p>Extra details specific to a data update type notification.</p>
 * @public
 */
export interface DataUpdateRequestDetails {
  /**
   * <p>A
   *          datetime in the past when the data was updated. This typically means that the underlying
   *          resource supporting the data set was updated.</p>
   * @public
   */
  DataUpdatedAt?: Date | undefined;
}

/**
 * <p>Extra details specific to a deprecation type notification.</p>
 * @public
 */
export interface DeprecationRequestDetails {
  /**
   * <p>A
   *          datetime in the future when the data set will be deprecated.</p>
   * @public
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
 * <p>Object encompassing information about a schema change to a single, particular field, a
 *          notification can have up to 100 of these.</p>
 * @public
 */
export interface SchemaChangeDetails {
  /**
   * <p>Name
   *          of the changing
   *          field. This value
   *          can be up to 255 characters long.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Is
   *          the field being added, removed, or modified?</p>
   * @public
   */
  Type: SchemaChangeType | undefined;

  /**
   * <p>Description
   *          of what's changing about this
   *          field. This value
   *          can be up to 512 characters long.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Extra details specific to this schema change type notification.</p>
 * @public
 */
export interface SchemaChangeRequestDetails {
  /**
   * <p>List
   *          of schema changes happening in the scope of this
   *          notification. This
   *          can have up to 100 entries.</p>
   * @public
   */
  Changes?: SchemaChangeDetails[] | undefined;

  /**
   * <p>A
   *          date in the future when the schema change is taking effect.</p>
   * @public
   */
  SchemaChangeAt: Date | undefined;
}

/**
 * <p>Extra details specific to this notification.</p>
 * @public
 */
export interface NotificationDetails {
  /**
   * <p>Extra
   *          details specific to a data update type notification.</p>
   * @public
   */
  DataUpdate?: DataUpdateRequestDetails | undefined;

  /**
   * <p>Extra
   *          details specific to a deprecation type notification.</p>
   * @public
   */
  Deprecation?: DeprecationRequestDetails | undefined;

  /**
   * <p>Extra
   *          details specific to a schema change type notification.</p>
   * @public
   */
  SchemaChange?: SchemaChangeRequestDetails | undefined;
}

/**
 * <p>Extra details specific to the affected scope in this LF data set.</p>
 * @public
 */
export interface LakeFormationTagPolicyDetails {
  /**
   * <p>The
   *          underlying Glue database that the notification is referring to.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The
   *          underlying Glue table that the notification is referring to.</p>
   * @public
   */
  Table?: string | undefined;
}

/**
 * <p>Extra details specific to the affected scope in this Redshift data set.</p>
 * @public
 */
export interface RedshiftDataShareDetails {
  /**
   * <p>The
   *          ARN of the underlying Redshift data share that is being affected by this
   *          notification.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The
   *          database name in the Redshift data share that is being affected by this
   *          notification.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A
   *          function name in the Redshift database that is being affected by this notification.</p>
   * @public
   */
  Function?: string | undefined;

  /**
   * <p>A
   *          table name in the Redshift database that is being affected by this notification.</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>A
   *          schema name in the Redshift database that is being affected by this notification.</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>A
   *          view name in the Redshift database that is being affected by this notification.</p>
   * @public
   */
  View?: string | undefined;
}

/**
 * <p>Extra details specific to the affected scope in this S3 Data Access data set.</p>
 * @public
 */
export interface S3DataAccessDetails {
  /**
   * <p>A
   *          list of the key prefixes affected by this
   *          notification. This
   *          can have up to 50 entries.</p>
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * <p>A
   *          list of the keys affected by this
   *          notification. This
   *          can have up to 50 entries.</p>
   * @public
   */
  Keys?: string[] | undefined;
}

/**
 * <p>Details about the scope of the notifications such as the affected resources.</p>
 * @public
 */
export interface ScopeDetails {
  /**
   * <p>Underlying
   *          LF resources that will be affected by this notification.</p>
   * @public
   */
  LakeFormationTagPolicies?: LakeFormationTagPolicyDetails[] | undefined;

  /**
   * <p>Underlying
   *          Redshift resources that will be affected by this notification.</p>
   * @public
   */
  RedshiftDataShares?: RedshiftDataShareDetails[] | undefined;

  /**
   * <p>Underlying
   *          S3 resources that will be affected by this notification.</p>
   * @public
   */
  S3DataAccesses?: S3DataAccessDetails[] | undefined;
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
   * <p>Affected
   *          scope of this notification such as the underlying resources affected by the notification
   *          event.</p>
   * @public
   */
  Scope?: ScopeDetails | undefined;

  /**
   * <p>Idempotency
   *          key for the notification, this key allows us to deduplicate notifications that are sent in
   *          quick succession erroneously.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Free-form
   *          text field for providers to add information about their notifications.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>Affected
   *          data set of the notification.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Extra
   *          details specific to this notification type.</p>
   * @public
   */
  Details?: NotificationDetails | undefined;

  /**
   * <p>The
   *          type of the notification. Describing the kind of event the notification is alerting you
   *          to.</p>
   * @public
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
   * <p>The unique identifier for a job.</p>
   * @public
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
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A label that consists of a customer-defined key and an optional value.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key tags.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * <p>The unique identifier for an asset.</p>
   * @public
   */
  AssetId: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   * @public
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
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * <p>The ARN for the asset.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Details about the asset.</p>
   * @public
   */
  AssetDetails?: AssetDetails | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p>The date and time that the asset was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with this asset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The unique identifier for the asset.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used
   *          as the asset name. When exporting to Amazon S3, the asset name is used as default target
   *          Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as
   *          the asset name. When importing from Amazon Redshift, the datashare name is used as the
   *          asset name. When importing from AWS Lake Formation, the static values of "Database(s)
   *          included in the LF-tag policy"- or "Table(s) included in LF-tag policy" are used as the
   *          asset name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The unique identifier for the revision associated with this asset.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The asset ID of the owned asset corresponding to the entitled asset being viewed. This
   *          parameter is returned when an asset owner is viewing the entitled copy of its owned
   *          asset.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the asset was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetRequest {
  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The description for the data set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * <p>The ARN for the data set.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of asset that is added to a data set.</p>
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * <p>The date and time that the data set was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The description for the data set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier for the data set.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the data set.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A property that defines the data set as OWNED by the account (for providers) or ENTITLED
   *          to the account (for subscribers).</p>
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * <p>If the origin of this data set is ENTITLED, includes the details for the product on AWS
   *          Marketplace.</p>
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * <p>The data set ID of the owned data set corresponding to the entitled data set being
   *          viewed. This parameter is returned when a data set owner is viewing the entitled copy of
   *          its owned data set.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the data set was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventActionRequest {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventActionResponse {
  /**
   * <p>What occurs after a certain event.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>The ARN for the event action.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the event action was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>What occurs to start an action.</p>
   * @public
   */
  Event?: Event | undefined;

  /**
   * <p>The unique identifier for the event action.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The date and time that the event action was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRevisionRequest {
  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The unique identifier for a data set.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>Finalizing a revision tells AWS Data Exchange that your changes to the assets in the
   *          revision are complete. After it's in this read-only state, you can publish the revision to
   *          your products.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for a revision.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRevisionResponse {
  /**
   * <p>The ARN for the revision.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>An optional comment about the revision.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The date and time that the revision was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The unique identifier for the data set associated with the data set revision.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>To publish a revision to a data set in a product, the revision must first be finalized.
   *          Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision
   *          are complete. After it's in this read-only state, you can publish the revision to your
   *          products. Finalized revisions can be published through the AWS Data Exchange console or the
   *          AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action.
   *          When using the API, revisions are uniquely identified by their ARN.</p>
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * <p>The unique identifier for the revision.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The revision ID of the owned revision corresponding to the entitled revision being
   *          viewed. This parameter is returned when a revision owner is viewing the entitled copy of
   *          its owned revision.</p>
   * @public
   */
  SourceId?: string | undefined;

  /**
   * <p>The date and time that the revision was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A required comment to inform subscribers of the reason their access to the revision was
   *          revoked.</p>
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * <p>A status indicating that subscribers' access to the revision was revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The date and time that the revision was revoked, in ISO 8601 format.</p>
   * @public
   */
  RevokedAt?: Date | undefined;
}
