// smithy-typescript generated code
import type {
  AcceptanceStateFilterValue,
  AssetType,
  Code,
  DatabaseLFTagPolicyPermission,
  DataGrantAcceptanceState,
  GrantDistributionScope,
  JobErrorLimitName,
  JobErrorResourceTypes,
  LakeFormationDataPermissionType,
  LFPermission,
  LFResourceType,
  NotificationType,
  Origin,
  ProtocolType,
  SchemaChangeType,
  ServerSideEncryptionTypes,
  State,
  TableTagPolicyLFPermission,
  Type,
} from "./enums";

/**
 * @public
 */
export interface AcceptDataGrantRequest {
  /**
   * The Amazon Resource Name (ARN) of the data grant to accept.
   *
   * @public
   */
  DataGrantArn: string | undefined;
}

/**
 * @public
 */
export interface AcceptDataGrantResponse {
  /**
   * The name of the accepted data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal?: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The description of the accepted data grant.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The distribution scope for the data grant.
   *
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the accepted data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.
 *
 * @public
 */
export interface ExportServerSideEncryption {
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The type of server side encryption used for encrypting the objects in Amazon S3.
   *
   * @public
   */
  Type: ServerSideEncryptionTypes | undefined;
}

/**
 * A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.
 *
 * @public
 */
export interface AutoExportRevisionDestinationEntry {
  /**
   * The Amazon S3 bucket that is the destination for the event action.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see [Key patterns when exporting revisions](https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns).
   *
   * @public
   */
  KeyPattern?: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface AutoExportRevisionToS3RequestDetails {
  /**
   * Encryption configuration for the auto export job.
   *
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.
   *
   * @public
   */
  RevisionDestination: AutoExportRevisionDestinationEntry | undefined;
}

/**
 * What occurs after a certain event.
 *
 * @public
 */
export interface Action {
  /**
   * Details for the export revision to Amazon S3 action.
   *
   * @public
   */
  ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails | undefined;
}

/**
 * The API Gateway API that is the asset.
 *
 * @public
 */
export interface ApiGatewayApiAsset {
  /**
   * The API description of the API asset.
   *
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * The API endpoint of the API asset.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * The unique identifier of the API asset.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * The API key of the API asset.
   *
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * The API name of the API asset.
   *
   * @public
   */
  ApiName?: string | undefined;

  /**
   * The download URL of the API specification of the API asset.
   *
   * @public
   */
  ApiSpecificationDownloadUrl?: string | undefined;

  /**
   * The date and time that the upload URL expires, in ISO 8601 format.
   *
   * @public
   */
  ApiSpecificationDownloadUrlExpiresAt?: Date | undefined;

  /**
   * The protocol type of the API asset.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The stage of the API asset.
   *
   * @public
   */
  Stage?: string | undefined;
}

/**
 * A tag consisting of a key-value pair that can be applied to a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The configuration for the asset, which can include tags.
 *
 * @public
 */
export interface AssetConfiguration {
  /**
   * The tags to be applied to assets created by the job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The destination for the asset.
 *
 * @public
 */
export interface AssetDestinationEntry {
  /**
   * The unique identifier for the asset.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The Amazon S3 bucket that is the destination for the asset.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The name of the object in Amazon S3 for the asset.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * A structure that allows an LF-admin to grant permissions on certain conditions.
 *
 * @public
 */
export interface LFTag {
  /**
   * The key name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of LF-tag values.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * The LF-tag policy for database resources.
 *
 * @public
 */
export interface DatabaseLFTagPolicy {
  /**
   * A list of LF-tag conditions that apply to database resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * The LF-tag policy for a table resource.
 *
 * @public
 */
export interface TableLFTagPolicy {
  /**
   * A list of LF-tag conditions that apply to table resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission.
 *
 * @public
 */
export interface LFResourceDetails {
  /**
   * Details about the database resource included in the AWS Lake Formation data permission.
   *
   * @public
   */
  Database?: DatabaseLFTagPolicy | undefined;

  /**
   * Details about the table resource included in the AWS Lake Formation data permission.
   *
   * @public
   */
  Table?: TableLFTagPolicy | undefined;
}

/**
 * Details about the LF-tag policy.
 *
 * @public
 */
export interface LFTagPolicyDetails {
  /**
   * The identifier for the AWS Glue Data Catalog.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The resource type for which the LF-tag policy applies.
   *
   * @public
   */
  ResourceType: LFResourceType | undefined;

  /**
   * Details for the Lake Formation Resources included in the LF-tag policy.
   *
   * @public
   */
  ResourceDetails: LFResourceDetails | undefined;
}

/**
 * Details about the AWS Lake Formation data permission.
 *
 * @public
 */
export interface LakeFormationDataPermissionDetails {
  /**
   * Details about the LF-tag policy.
   *
   * @public
   */
  LFTagPolicy?: LFTagPolicyDetails | undefined;
}

/**
 * The AWS Lake Formation data permission asset.
 *
 * @public
 */
export interface LakeFormationDataPermissionAsset {
  /**
   * Details about the AWS Lake Formation data permission.
   *
   * @public
   */
  LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails | undefined;

  /**
   * The data permission type.
   *
   * @public
   */
  LakeFormationDataPermissionType: LakeFormationDataPermissionType | undefined;

  /**
   * The permissions granted to the subscribers on the resource.
   *
   * @public
   */
  Permissions: LFPermission[] | undefined;

  /**
   * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * The Amazon Redshift datashare asset.
 *
 * @public
 */
export interface RedshiftDataShareAsset {
  /**
   * The Amazon Resource Name (ARN) of the datashare asset.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3 objects.
 *
 * @public
 */
export interface KmsKeyToGrant {
  /**
   * The AWS KMS CMK (Key Management System Customer Managed Key) used to encrypt S3 objects in the shared S3 Bucket. AWS Data exchange will create a KMS grant for each subscriber to allow them to access and decrypt their entitled data that is encrypted using this KMS key specified.
   *
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * The Amazon S3 data access that is the asset.
 *
 * @public
 */
export interface S3DataAccessAsset {
  /**
   * The Amazon S3 bucket hosting data to be shared in the S3 data access.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.
   *
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * S3 keys made available using this asset.
   *
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * The automatically-generated bucket-style alias for your Amazon S3 Access Point. Customers can access their entitled data using the S3 Access Point alias.
   *
   * @public
   */
  S3AccessPointAlias?: string | undefined;

  /**
   * The ARN for your Amazon S3 Access Point. Customers can also access their entitled data using the S3 Access Point ARN.
   *
   * @public
   */
  S3AccessPointArn?: string | undefined;

  /**
   * List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset. Providers must include all AWS KMS keys used to encrypt these shared S3 objects.
   *
   * @public
   */
  KmsKeysToGrant?: KmsKeyToGrant[] | undefined;
}

/**
 * The Amazon S3 object that is the asset.
 *
 * @public
 */
export interface S3SnapshotAsset {
  /**
   * The size of the Amazon S3 object that is the object.
   *
   * @public
   */
  Size: number | undefined;
}

/**
 * Details about the asset.
 *
 * @public
 */
export interface AssetDetails {
  /**
   * The Amazon S3 object that is the asset.
   *
   * @public
   */
  S3SnapshotAsset?: S3SnapshotAsset | undefined;

  /**
   * The Amazon Redshift datashare that is the asset.
   *
   * @public
   */
  RedshiftDataShareAsset?: RedshiftDataShareAsset | undefined;

  /**
   * Information about the API Gateway API asset.
   *
   * @public
   */
  ApiGatewayApiAsset?: ApiGatewayApiAsset | undefined;

  /**
   * The Amazon S3 data access that is the asset.
   *
   * @public
   */
  S3DataAccessAsset?: S3DataAccessAsset | undefined;

  /**
   * The AWS Lake Formation data permission that is the asset.
   *
   * @public
   */
  LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset | undefined;
}

/**
 * An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access). The asset can be a structured data file, an image file, or some other data file that can be stored as an Amazon S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or an Amazon S3 data access. When you create an import job for your files, API Gateway APIs, Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access, you create an asset in AWS Data Exchange.
 *
 * @public
 */
export interface AssetEntry {
  /**
   * The ARN for the asset.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Details about the asset.
   *
   * @public
   */
  AssetDetails: AssetDetails | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * The date and time that the asset was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The unique identifier for the data set associated with this asset.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the asset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in LF-tag policy" or "Table(s) included in LF-tag policy" are used as the asset name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier for the revision associated with this asset.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the asset was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * The source of the assets.
 *
 * @public
 */
export interface AssetSourceEntry {
  /**
   * The Amazon S3 bucket that's part of the source of the asset.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The name of the object in Amazon S3 for the asset.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The unique identifier for a job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface CreateDataGrantRequest {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The distribution scope of the data grant.
   *
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The ID of the data set used to create the data grant.
   *
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The description of the data grant.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags to add to the data grant. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataGrantResponse {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The description of the data grant.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The distribution scope for the data grant.
   *
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data set used to create the data grant.
   *
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The tags associated to the data grant. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataSetRequest {
  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * A description for the data set. This value can be up to 16,348 characters long.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Details about the origin of the data set.
 *
 * @public
 */
export interface OriginDetails {
  /**
   * The product ID of the origin of the data set.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  DataGrantId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSetResponse {
  /**
   * The ARN for the data set.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * The date and time that the data set was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The description for the data set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the data set.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   *
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
   *
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The tags for the data set.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the data set was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Information about the published revision.
 *
 * @public
 */
export interface RevisionPublished {
  /**
   * The data set ID of the published revision.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * What occurs to start an action.
 *
 * @public
 */
export interface Event {
  /**
   * What occurs to start the revision publish action.
   *
   * @public
   */
  RevisionPublished?: RevisionPublished | undefined;
}

/**
 * @public
 */
export interface CreateEventActionRequest {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action: Action | undefined;

  /**
   * What occurs to start an action.
   *
   * @public
   */
  Event: Event | undefined;

  /**
   * Key-value pairs that you can associate with the event action.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventActionResponse {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The ARN for the event action.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time that the event action was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * What occurs to start an action.
   *
   * @public
   */
  Event?: Event | undefined;

  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The tags for the event action.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the event action was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Source details for an Amazon S3 data access asset.
 *
 * @public
 */
export interface S3DataAccessAssetSourceEntry {
  /**
   * The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.
   *
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * The keys used to create the Amazon S3 data access.
   *
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset.
   *
   * @public
   */
  KmsKeysToGrant?: KmsKeyToGrant[] | undefined;
}

/**
 * Details of the operation to create an Amazon S3 data access from an S3 bucket.
 *
 * @public
 */
export interface CreateS3DataAccessFromS3BucketRequestDetails {
  /**
   * Details about the S3 data access source asset.
   *
   * @public
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * The unique identifier for the data set associated with the creation of this Amazon S3 data access.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface ExportAssetsToS3RequestDetails {
  /**
   * The destination for the asset.
   *
   * @public
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Encryption configuration for the export job.
   *
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * The unique identifier for the revision associated with this export request.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface ExportAssetToSignedUrlRequestDetails {
  /**
   * The unique identifier for the asset that is exported to a signed URL.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this export request.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * The destination where the assets in the revision will be exported.
 *
 * @public
 */
export interface RevisionDestinationEntry {
  /**
   * The Amazon S3 bucket that is the destination for the assets in the revision.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see [Key patterns when exporting revisions](https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns).
   *
   * @public
   */
  KeyPattern?: string | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface ExportRevisionsToS3RequestDetails {
  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Encryption configuration for the export job.
   *
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * The destination for the revision.
   *
   * @public
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;
}

/**
 * The request details.
 *
 * @public
 */
export interface ImportAssetFromApiGatewayApiRequestDetails {
  /**
   * The API description. Markdown supported.
   *
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * The API Gateway API ID.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API Gateway API key.
   *
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * The API name.
   *
   * @public
   */
  ApiName: string | undefined;

  /**
   * The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.
   *
   * @public
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * The data set ID.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The protocol type.
   *
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * The revision ID.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface ImportAssetFromSignedUrlRequestDetails {
  /**
   * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name.
   *
   * @public
   */
  AssetName: string | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.
   *
   * @public
   */
  Md5Hash: string | undefined;

  /**
   * The unique identifier for the revision associated with this import request.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * The LF-tag policy and permissions for database resources.
 *
 * @public
 */
export interface DatabaseLFTagPolicyAndPermissions {
  /**
   * A list of LF-tag conditions that apply to database resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;

  /**
   * The permissions granted to subscribers on database resources.
   *
   * @public
   */
  Permissions: DatabaseLFTagPolicyPermission[] | undefined;
}

/**
 * The LF-tag policy and permissions that apply to table resources.
 *
 * @public
 */
export interface TableLFTagPolicyAndPermissions {
  /**
   * A list of LF-tag conditions that apply to table resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;

  /**
   * The permissions granted to subscribers on table resources.
   *
   * @public
   */
  Permissions: TableTagPolicyLFPermission[] | undefined;
}

/**
 * Details about the assets imported from an AWS Lake Formation tag policy request.
 *
 * @public
 */
export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
  /**
   * The identifier for the AWS Glue Data Catalog.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * A structure for the database object.
   *
   * @public
   */
  Database?: DatabaseLFTagPolicyAndPermissions | undefined;

  /**
   * A structure for the table object.
   *
   * @public
   */
  Table?: TableLFTagPolicyAndPermissions | undefined;

  /**
   * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions of subscribers to AWS Lake Formation data permissions.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * The source of the Amazon Redshift datashare asset.
 *
 * @public
 */
export interface RedshiftDataShareAssetSourceEntry {
  /**
   * The Amazon Resource Name (ARN) of the datashare asset.
   *
   * @public
   */
  DataShareArn: string | undefined;
}

/**
 * Details from an import from Amazon Redshift datashare request.
 *
 * @public
 */
export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
  /**
   * A list of Amazon Redshift datashare assets.
   *
   * @public
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details of the operation to be performed by the job.
 *
 * @public
 */
export interface ImportAssetsFromS3RequestDetails {
  /**
   * Is a list of Amazon S3 bucket and object key pairs.
   *
   * @public
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import request.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * The details for the request.
 *
 * @public
 */
export interface RequestDetails {
  /**
   * Details about the export to signed URL request.
   *
   * @public
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails | undefined;

  /**
   * Details about the export to Amazon S3 request.
   *
   * @public
   */
  ExportAssetsToS3?: ExportAssetsToS3RequestDetails | undefined;

  /**
   * Details about the export to Amazon S3 request.
   *
   * @public
   */
  ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails | undefined;

  /**
   * Details about the import from Amazon S3 request.
   *
   * @public
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails | undefined;

  /**
   * Details about the import asset from API Gateway API request.
   *
   * @public
   */
  ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails | undefined;

  /**
   * Details from an import from Amazon Redshift datashare request.
   *
   * @public
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails | undefined;

  /**
   * Details about the import from signed URL request.
   *
   * @public
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails | undefined;

  /**
   * Details of the request to create S3 data access from the Amazon S3 bucket.
   *
   * @public
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails | undefined;

  /**
   * Request details for the ImportAssetsFromLakeFormationTagPolicy job.
   *
   * @public
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The configuration for the asset, including tags to be applied to assets created by the job.
   *
   * @public
   */
  AssetConfiguration?: AssetConfiguration | undefined;

  /**
   * The details for the CreateJob request.
   *
   * @public
   */
  Details: RequestDetails | undefined;

  /**
   * The type of job to be created.
   *
   * @public
   */
  Type: Type | undefined;
}

/**
 * Details about the response of the operation to create an S3 data access from an S3 bucket.
 *
 * @public
 */
export interface CreateS3DataAccessFromS3BucketResponseDetails {
  /**
   * Details about the asset source from an Amazon S3 bucket.
   *
   * @public
   */
  AssetSource: S3DataAccessAssetSourceEntry | undefined;

  /**
   * The unique identifier for this data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details about the export to Amazon S3 response.
 *
 * @public
 */
export interface ExportAssetsToS3ResponseDetails {
  /**
   * The destination in Amazon S3 where the asset is exported.
   *
   * @public
   */
  AssetDestinations: AssetDestinationEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Encryption configuration of the export job.
   *
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * The unique identifier for the revision associated with this export response.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * The details of the export to signed URL response.
 *
 * @public
 */
export interface ExportAssetToSignedUrlResponseDetails {
  /**
   * The unique identifier for the asset associated with this export job.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this export response.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * The signed URL for the export request.
   *
   * @public
   */
  SignedUrl?: string | undefined;

  /**
   * The date and time that the signed URL expires, in ISO 8601 format.
   *
   * @public
   */
  SignedUrlExpiresAt?: Date | undefined;
}

/**
 * Details about the export revisions to Amazon S3 response.
 *
 * @public
 */
export interface ExportRevisionsToS3ResponseDetails {
  /**
   * The unique identifier for the data set associated with this export job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Encryption configuration of the export job.
   *
   * @public
   */
  Encryption?: ExportServerSideEncryption | undefined;

  /**
   * The destination in Amazon S3 where the revision is exported.
   *
   * @public
   */
  RevisionDestinations: RevisionDestinationEntry[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the event action.
   *
   * @public
   */
  EventActionArn?: string | undefined;
}

/**
 * The response details.
 *
 * @public
 */
export interface ImportAssetFromApiGatewayApiResponseDetails {
  /**
   * The API description.
   *
   * @public
   */
  ApiDescription?: string | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API key.
   *
   * @public
   */
  ApiKey?: string | undefined;

  /**
   * The API name.
   *
   * @public
   */
  ApiName: string | undefined;

  /**
   * The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.
   *
   * @public
   */
  ApiSpecificationMd5Hash: string | undefined;

  /**
   * The upload URL of the API specification.
   *
   * @public
   */
  ApiSpecificationUploadUrl: string | undefined;

  /**
   * The date and time that the upload URL expires, in ISO 8601 format.
   *
   * @public
   */
  ApiSpecificationUploadUrlExpiresAt: Date | undefined;

  /**
   * The data set ID.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The protocol type.
   *
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * The revision ID.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage: string | undefined;
}

/**
 * The details in the response for an import request, including the signed URL and other information.
 *
 * @public
 */
export interface ImportAssetFromSignedUrlResponseDetails {
  /**
   * The name for the asset associated with this import job.
   *
   * @public
   */
  AssetName: string | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.
   *
   * @public
   */
  Md5Hash?: string | undefined;

  /**
   * The unique identifier for the revision associated with this import response.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * The signed URL.
   *
   * @public
   */
  SignedUrl?: string | undefined;

  /**
   * The time and date at which the signed URL expires, in ISO 8601 format.
   *
   * @public
   */
  SignedUrlExpiresAt?: Date | undefined;
}

/**
 * Details from an import AWS Lake Formation tag policy job response.
 *
 * @public
 */
export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
  /**
   * The identifier for the AWS Glue Data Catalog.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * A structure for the database object.
   *
   * @public
   */
  Database?: DatabaseLFTagPolicyAndPermissions | undefined;

  /**
   * A structure for the table object.
   *
   * @public
   */
  Table?: TableLFTagPolicyAndPermissions | undefined;

  /**
   * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details from an import from Amazon Redshift datashare response.
 *
 * @public
 */
export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
  /**
   * A list of Amazon Redshift datashare asset sources.
   *
   * @public
   */
  AssetSources: RedshiftDataShareAssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import job.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details from an import from Amazon S3 response.
 *
 * @public
 */
export interface ImportAssetsFromS3ResponseDetails {
  /**
   * Is a list of Amazon S3 bucket and object key pairs.
   *
   * @public
   */
  AssetSources: AssetSourceEntry[] | undefined;

  /**
   * The unique identifier for the data set associated with this import job.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for the revision associated with this import response.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Details for the response.
 *
 * @public
 */
export interface ResponseDetails {
  /**
   * Details for the export to signed URL response.
   *
   * @public
   */
  ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails | undefined;

  /**
   * Details for the export to Amazon S3 response.
   *
   * @public
   */
  ExportAssetsToS3?: ExportAssetsToS3ResponseDetails | undefined;

  /**
   * Details for the export revisions to Amazon S3 response.
   *
   * @public
   */
  ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails | undefined;

  /**
   * Details for the import from signed URL response.
   *
   * @public
   */
  ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails | undefined;

  /**
   * Details for the import from Amazon S3 response.
   *
   * @public
   */
  ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails | undefined;

  /**
   * Details from an import from Amazon Redshift datashare response.
   *
   * @public
   */
  ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails | undefined;

  /**
   * The response details.
   *
   * @public
   */
  ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails | undefined;

  /**
   * Response details from the CreateS3DataAccessFromS3Bucket job.
   *
   * @public
   */
  CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails | undefined;

  /**
   * Response details from the ImportAssetsFromLakeFormationTagPolicy job.
   *
   * @public
   */
  ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails | undefined;
}

/**
 * Details about the job error.
 *
 * @public
 */
export interface ImportAssetFromSignedUrlJobErrorDetails {
  /**
   * Details about the job error.
   *
   * @public
   */
  AssetName: string | undefined;
}

/**
 * Information about the job error.
 *
 * @public
 */
export interface Details {
  /**
   * Information about the job error.
   *
   * @public
   */
  ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails | undefined;

  /**
   * Details about the job error.
   *
   * @public
   */
  ImportAssetsFromS3JobErrorDetails?: AssetSourceEntry[] | undefined;
}

/**
 * An error that occurred with the job request.
 *
 * @public
 */
export interface JobError {
  /**
   * The code for the job error.
   *
   * @public
   */
  Code: Code | undefined;

  /**
   * The details about the job error.
   *
   * @public
   */
  Details?: Details | undefined;

  /**
   * The name of the limit that was reached.
   *
   * @public
   */
  LimitName?: JobErrorLimitName | undefined;

  /**
   * The value of the exceeded limit.
   *
   * @public
   */
  LimitValue?: number | undefined;

  /**
   * The message related to the job error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The unique identifier for the resource related to the error.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource related to the error.
   *
   * @public
   */
  ResourceType?: JobErrorResourceTypes | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * The ARN for the job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The configuration for the asset, including tags applied to assets created by the job.
   *
   * @public
   */
  AssetConfiguration?: AssetConfiguration | undefined;

  /**
   * The date and time that the job was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Details about the job.
   *
   * @public
   */
  Details?: ResponseDetails | undefined;

  /**
   * The errors associated with jobs.
   *
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The state of the job.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * The job type.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * The date and time that the job was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRevisionRequest {
  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRevisionResponse {
  /**
   * The ARN for the revision.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The date and time that the revision was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with the data set revision.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The tags for the revision.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the revision was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * A status indicating that subscribers' access to the revision was revoked.
   *
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The date and time that the revision was revoked, in ISO 8601 format.
   *
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * The unique identifier for an asset.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataGrantRequest {
  /**
   * The ID of the data grant to delete.
   *
   * @public
   */
  DataGrantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSetRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventActionRequest {
  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRevisionRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetRequest {
  /**
   * The unique identifier for an asset.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetAssetResponse {
  /**
   * The ARN for the asset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Details about the asset.
   *
   * @public
   */
  AssetDetails?: AssetDetails | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * The date and time that the asset was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with this asset.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The unique identifier for the asset.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in the LF-tag policy" are used as the asset name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for the revision associated with this asset.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The tags for the asset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the asset was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDataGrantRequest {
  /**
   * The ID of the data grant.
   *
   * @public
   */
  DataGrantId: string | undefined;
}

/**
 * @public
 */
export interface GetDataGrantResponse {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The description of the data grant.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The distribution scope for the data grant.
   *
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data set used to create the data grant.
   *
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The tags associated to the data grant. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDataSetRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;
}

/**
 * @public
 */
export interface GetDataSetResponse {
  /**
   * The ARN for the data set.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * The date and time that the data set was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The description for the data set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the data set.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   *
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
   *
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The tags for the data set.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the data set was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetEventActionRequest {
  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface GetEventActionResponse {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The ARN for the event action.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time that the event action was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * What occurs to start an action.
   *
   * @public
   */
  Event?: Event | undefined;

  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The tags for the event action.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the event action was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * The unique identifier for a job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * The ARN for the job.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The configuration for the asset, including tags applied to assets created by the job.
   *
   * @public
   */
  AssetConfiguration?: AssetConfiguration | undefined;

  /**
   * The date and time that the job was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Details about the job.
   *
   * @public
   */
  Details?: ResponseDetails | undefined;

  /**
   * The errors associated with jobs.
   *
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The state of the job.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * The job type.
   *
   * @public
   */
  Type?: Type | undefined;

  /**
   * The date and time that the job was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetReceivedDataGrantRequest {
  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  DataGrantArn: string | undefined;
}

/**
 * @public
 */
export interface GetReceivedDataGrantResponse {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal?: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The description of the data grant.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The distribution scope for the data grant.
   *
   * @public
   */
  GrantDistributionScope: GrantDistributionScope | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetRevisionRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface GetRevisionResponse {
  /**
   * The ARN for the revision.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The date and time that the revision was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with the data set revision.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The tags for the revision.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time that the revision was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * A status indicating that subscribers' access to the revision was revoked.
   *
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The date and time that the revision was revoked, in ISO 8601 format.
   *
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataGrantsRequest {
  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a data grant.
 *
 * @public
 */
export interface DataGrantSummaryEntry {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data set used to create the data grant.
   *
   * @public
   */
  SourceDataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataGrantsResponse {
  /**
   * An object that contains a list of data grant information.
   *
   * @public
   */
  DataGrantSummaries?: DataGrantSummaryEntry[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataSetRevisionsRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The maximum number of results returned by a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A revision is a container for one or more assets.
 *
 * @public
 */
export interface RevisionEntry {
  /**
   * The ARN for the revision.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The date and time that the revision was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The unique identifier for the data set associated with the data set revision.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the revision was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * A status indicating that subscribers' access to the revision was revoked.
   *
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The date and time that the revision was revoked, in ISO 8601 format.
   *
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSetRevisionsResponse {
  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The asset objects listed by the request.
   *
   * @public
   */
  Revisions?: RevisionEntry[] | undefined;
}

/**
 * @public
 */
export interface ListDataSetsRequest {
  /**
   * The maximum number of results returned by a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   *
   * @public
   */
  Origin?: string | undefined;
}

/**
 * A data set is an AWS resource with one or more revisions.
 *
 * @public
 */
export interface DataSetEntry {
  /**
   * The ARN for the data set.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType: AssetType | undefined;

  /**
   * The date and time that the data set was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The description for the data set.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The unique identifier for the data set.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   *
   * @public
   */
  Origin: Origin | undefined;

  /**
   * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
   *
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the data set was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDataSetsResponse {
  /**
   * The data set objects listed by the request.
   *
   * @public
   */
  DataSets?: DataSetEntry[] | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventActionsRequest {
  /**
   * The unique identifier for the event source.
   *
   * @public
   */
  EventSourceId?: string | undefined;

  /**
   * The maximum number of results returned by a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.
 *
 * @public
 */
export interface EventActionEntry {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action: Action | undefined;

  /**
   * The Amazon Resource Name (ARN) for the event action.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The date and time that the event action was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * What occurs to start an action.
   *
   * @public
   */
  Event: Event | undefined;

  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The date and time that the event action was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListEventActionsResponse {
  /**
   * The event action objects listed by the request.
   *
   * @public
   */
  EventActions?: EventActionEntry[] | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The maximum number of results returned by a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.
 *
 * @public
 */
export interface JobEntry {
  /**
   * The ARN for the job.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The configuration for the asset, including tags applied to assets created by the job.
   *
   * @public
   */
  AssetConfiguration?: AssetConfiguration | undefined;

  /**
   * The date and time that the job was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * Details of the operation to be performed by the job, such as export destination details or import source details.
   *
   * @public
   */
  Details: ResponseDetails | undefined;

  /**
   * Errors for jobs.
   *
   * @public
   */
  Errors?: JobError[] | undefined;

  /**
   * The unique identifier for the job.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The state of the job.
   *
   * @public
   */
  State: State | undefined;

  /**
   * The job type.
   *
   * @public
   */
  Type: Type | undefined;

  /**
   * The date and time that the job was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * The jobs listed by the request.
   *
   * @public
   */
  Jobs?: JobEntry[] | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReceivedDataGrantsRequest {
  /**
   * The maximum number of results to be included in the next page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The acceptance state of the data grants to list.
   *
   * @public
   */
  AcceptanceState?: AcceptanceStateFilterValue[] | undefined;
}

/**
 * Information about a received data grant.
 *
 * @public
 */
export interface ReceivedDataGrantSummariesEntry {
  /**
   * The name of the data grant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant sender.
   *
   * @public
   */
  SenderPrincipal: string | undefined;

  /**
   * The Amazon Web Services account ID of the data grant receiver.
   *
   * @public
   */
  ReceiverPrincipal: string | undefined;

  /**
   * The acceptance state of the data grant.
   *
   * @public
   */
  AcceptanceState: DataGrantAcceptanceState | undefined;

  /**
   * The timestamp of when the data grant was accepted.
   *
   * @public
   */
  AcceptedAt?: Date | undefined;

  /**
   * The timestamp of when access to the associated data set ends.
   *
   * @public
   */
  EndsAt?: Date | undefined;

  /**
   * The ID of the data set associated to the data grant.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The ID of the data grant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data grant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The timestamp of when the data grant was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the data grant was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListReceivedDataGrantsResponse {
  /**
   * An object that contains a list of received data grant information.
   *
   * @public
   */
  DataGrantSummaries?: ReceivedDataGrantSummariesEntry[] | undefined;

  /**
   * The pagination token used to retrieve the next page of results for this operation.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRevisionAssetsRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The maximum number of results returned by a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface ListRevisionAssetsResponse {
  /**
   * The asset objects listed by the request.
   *
   * @public
   */
  Assets?: AssetEntry[] | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A label that consists of a customer-defined key and an optional value.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RevokeRevisionRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment: string | undefined;
}

/**
 * @public
 */
export interface RevokeRevisionResponse {
  /**
   * The ARN for the revision.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The date and time that the revision was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with the data set revision.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the revision was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * A status indicating that subscribers' access to the revision was revoked.
   *
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The date and time that the revision was revoked, in ISO 8601 format.
   *
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SendApiAssetRequest {
  /**
   * The request body.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).
   *
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;

  /**
   * Asset ID value for the API request.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * Data set ID value for the API request.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.
   *
   * @public
   */
  RequestHeaders?: Record<string, string> | undefined;

  /**
   * HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.
   *
   * @public
   */
  Method?: string | undefined;

  /**
   * URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/\{pathValue\}.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Revision ID value for the API request.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface SendApiAssetResponse {
  /**
   * The response body from the underlying API tracked by the API asset.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The response headers from the underlying API tracked by the API asset.
   *
   * @public
   */
  ResponseHeaders?: Record<string, string> | undefined;
}

/**
 * Extra details specific to a data update type notification.
 *
 * @public
 */
export interface DataUpdateRequestDetails {
  /**
   * A datetime in the past when the data was updated. This typically means that the underlying resource supporting the data set was updated.
   *
   * @public
   */
  DataUpdatedAt?: Date | undefined;
}

/**
 * Extra details specific to a deprecation type notification.
 *
 * @public
 */
export interface DeprecationRequestDetails {
  /**
   * A datetime in the future when the data set will be deprecated.
   *
   * @public
   */
  DeprecationAt: Date | undefined;
}

/**
 * Object encompassing information about a schema change to a single, particular field, a notification can have up to 100 of these.
 *
 * @public
 */
export interface SchemaChangeDetails {
  /**
   * Name of the changing field. This value can be up to 255 characters long.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Is the field being added, removed, or modified?
   *
   * @public
   */
  Type: SchemaChangeType | undefined;

  /**
   * Description of what's changing about this field. This value can be up to 512 characters long.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Extra details specific to this schema change type notification.
 *
 * @public
 */
export interface SchemaChangeRequestDetails {
  /**
   * List of schema changes happening in the scope of this notification. This can have up to 100 entries.
   *
   * @public
   */
  Changes?: SchemaChangeDetails[] | undefined;

  /**
   * A date in the future when the schema change is taking effect.
   *
   * @public
   */
  SchemaChangeAt: Date | undefined;
}

/**
 * Extra details specific to this notification.
 *
 * @public
 */
export interface NotificationDetails {
  /**
   * Extra details specific to a data update type notification.
   *
   * @public
   */
  DataUpdate?: DataUpdateRequestDetails | undefined;

  /**
   * Extra details specific to a deprecation type notification.
   *
   * @public
   */
  Deprecation?: DeprecationRequestDetails | undefined;

  /**
   * Extra details specific to a schema change type notification.
   *
   * @public
   */
  SchemaChange?: SchemaChangeRequestDetails | undefined;
}

/**
 * Extra details specific to the affected scope in this LF data set.
 *
 * @public
 */
export interface LakeFormationTagPolicyDetails {
  /**
   * The underlying Glue database that the notification is referring to.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * The underlying Glue table that the notification is referring to.
   *
   * @public
   */
  Table?: string | undefined;
}

/**
 * Extra details specific to the affected scope in this Redshift data set.
 *
 * @public
 */
export interface RedshiftDataShareDetails {
  /**
   * The ARN of the underlying Redshift data share that is being affected by this notification.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The database name in the Redshift data share that is being affected by this notification.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * A function name in the Redshift database that is being affected by this notification.
   *
   * @public
   */
  Function?: string | undefined;

  /**
   * A table name in the Redshift database that is being affected by this notification.
   *
   * @public
   */
  Table?: string | undefined;

  /**
   * A schema name in the Redshift database that is being affected by this notification.
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * A view name in the Redshift database that is being affected by this notification.
   *
   * @public
   */
  View?: string | undefined;
}

/**
 * Extra details specific to the affected scope in this S3 Data Access data set.
 *
 * @public
 */
export interface S3DataAccessDetails {
  /**
   * A list of the key prefixes affected by this notification. This can have up to 50 entries.
   *
   * @public
   */
  KeyPrefixes?: string[] | undefined;

  /**
   * A list of the keys affected by this notification. This can have up to 50 entries.
   *
   * @public
   */
  Keys?: string[] | undefined;
}

/**
 * Details about the scope of the notifications such as the affected resources.
 *
 * @public
 */
export interface ScopeDetails {
  /**
   * Underlying LF resources that will be affected by this notification.
   *
   * @public
   */
  LakeFormationTagPolicies?: LakeFormationTagPolicyDetails[] | undefined;

  /**
   * Underlying Redshift resources that will be affected by this notification.
   *
   * @public
   */
  RedshiftDataShares?: RedshiftDataShareDetails[] | undefined;

  /**
   * Underlying S3 resources that will be affected by this notification.
   *
   * @public
   */
  S3DataAccesses?: S3DataAccessDetails[] | undefined;
}

/**
 * @public
 */
export interface SendDataSetNotificationRequest {
  /**
   * Affected scope of this notification such as the underlying resources affected by the notification event.
   *
   * @public
   */
  Scope?: ScopeDetails | undefined;

  /**
   * Idempotency key for the notification, this key allows us to deduplicate notifications that are sent in quick succession erroneously.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Free-form text field for providers to add information about their notifications.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * Affected data set of the notification.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Extra details specific to this notification type.
   *
   * @public
   */
  Details?: NotificationDetails | undefined;

  /**
   * The type of the notification. Describing the kind of event the notification is alerting you to.
   *
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
   * The unique identifier for a job.
   *
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
   * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A label that consists of a customer-defined key and an optional value.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key tags.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * The unique identifier for an asset.
   *
   * @public
   */
  AssetId: string | undefined;

  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * The ARN for the asset.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Details about the asset.
   *
   * @public
   */
  AssetDetails?: AssetDetails | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * The date and time that the asset was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with this asset.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * The unique identifier for the asset.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy"- or "Table(s) included in LF-tag policy" are used as the asset name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for the revision associated with this asset.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the asset was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetRequest {
  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * The description for the data set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSetResponse {
  /**
   * The ARN for the data set.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of asset that is added to a data set.
   *
   * @public
   */
  AssetType?: AssetType | undefined;

  /**
   * The date and time that the data set was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The description for the data set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the data set.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the data set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
   *
   * @public
   */
  Origin?: Origin | undefined;

  /**
   * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
   *
   * @public
   */
  OriginDetails?: OriginDetails | undefined;

  /**
   * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the data set was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventActionRequest {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  EventActionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventActionResponse {
  /**
   * What occurs after a certain event.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * The ARN for the event action.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time that the event action was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * What occurs to start an action.
   *
   * @public
   */
  Event?: Event | undefined;

  /**
   * The unique identifier for the event action.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The date and time that the event action was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateRevisionRequest {
  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The unique identifier for a data set.
   *
   * @public
   */
  DataSetId: string | undefined;

  /**
   * Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for a revision.
   *
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRevisionResponse {
  /**
   * The ARN for the revision.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An optional comment about the revision.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * The date and time that the revision was created, in ISO 8601 format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The unique identifier for the data set associated with the data set revision.
   *
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
   *
   * @public
   */
  Finalized?: boolean | undefined;

  /**
   * The unique identifier for the revision.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
   *
   * @public
   */
  SourceId?: string | undefined;

  /**
   * The date and time that the revision was last updated, in ISO 8601 format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A required comment to inform subscribers of the reason their access to the revision was revoked.
   *
   * @public
   */
  RevocationComment?: string | undefined;

  /**
   * A status indicating that subscribers' access to the revision was revoked.
   *
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The date and time that the revision was revoked, in ISO 8601 format.
   *
   * @public
   */
  RevokedAt?: Date | undefined;
}
