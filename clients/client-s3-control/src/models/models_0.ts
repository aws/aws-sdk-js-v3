// smithy-typescript generated code
import type {
  AsyncOperationName,
  BucketCannedACL,
  BucketLocationConstraint,
  BucketVersioningStatus,
  ComputeObjectChecksumAlgorithm,
  ComputeObjectChecksumType,
  DeleteMarkerReplicationStatus,
  ExistingObjectReplicationStatus,
  ExpirationStatus,
  Format,
  GeneratedManifestFormat,
  GranteeType,
  JobManifestFieldName,
  JobManifestFormat,
  JobReportFormat,
  JobReportScope,
  JobStatus,
  MetricsStatus,
  MFADelete,
  MFADeleteStatus,
  MultiRegionAccessPointStatus,
  NetworkOrigin,
  ObjectLambdaAccessPointAliasStatus,
  ObjectLambdaAllowedFeature,
  ObjectLambdaTransformationConfigurationAction,
  OperationName,
  OutputSchemaVersion,
  OwnerOverride,
  Permission,
  Privilege,
  ReplicaModificationsStatus,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationStorageClass,
  ReplicationTimeStatus,
  S3AnnotationDirective,
  S3CannedAccessControlList,
  S3ChecksumAlgorithm,
  S3GlacierJobTier,
  S3GranteeTypeIdentifier,
  S3MetadataDirective,
  S3ObjectLockEventHold,
  S3ObjectLockLegalHoldStatus,
  S3ObjectLockMode,
  S3ObjectLockRetentionEventHold,
  S3ObjectLockRetentionMode,
  S3Permission,
  S3PrefixType,
  S3SSEAlgorithm,
  S3StorageClass,
  ScopePermission,
  SseKmsEncryptedObjectsStatus,
  TransitionStorageClass,
} from "./enums";

/**
 * The container for abort incomplete multipart upload
 *
 * @public
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to the Outposts bucket.
   *
   * @public
   */
  DaysAfterInitiation?: number | undefined;
}

/**
 * A container for information about access control for replicas.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface AccessControlTranslation {
  /**
   * Specifies the replica ownership.
   *
   * @public
   */
  Owner: OwnerOverride | undefined;
}

/**
 * Information about the S3 Access Grants instance.
 *
 * @public
 */
export interface ListAccessGrantsInstanceEntry {
  /**
   * The ID of the S3 Access Grants instance. The ID is `default`. You can have one S3 Access Grants instance per Region per account.
   *
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 Access Grants instance.
   *
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * The date and time when you created the S3 Access Grants instance.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @deprecated IdentityCenterArn has been deprecated. Use IdentityCenterInstanceArn or IdentityCenterApplicationArn.
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * The configuration options of the S3 Access Grants location. It contains the `S3SubPrefix` field. The grant scope, the data to which you are granting access, is the result of appending the `Subprefix` field to the scope of the registered location.
 *
 * @public
 */
export interface AccessGrantsLocationConfiguration {
  /**
   * The `S3SubPrefix` is appended to the location scope creating the grant scope. Use this field to narrow the scope of the grant to a subset of the location scope. This field is required if the location scope is the default location `s3://` because you cannot create a grant for all of your S3 data in the Region and must narrow the scope. For example, if the location scope is the default location `s3://`, the `S3SubPrefx` can be a <bucket-name>/*, so the full grant scope path would be `s3://<bucket-name>/*`. Or the `S3SubPrefx` can be `<bucket-name>/<prefix-name>*`, so the full grant scope path would be or `s3://<bucket-name>/<prefix-name>*`.
   *
   * If the `S3SubPrefix` includes a prefix, append the wildcard character `*` after the prefix to indicate that you want to include all object key names in the bucket that start with that prefix.
   *
   * @public
   */
  S3SubPrefix?: string | undefined;
}

/**
 * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
 *
 * @public
 */
export interface Grantee {
  /**
   * The type of the grantee to which access has been granted. It can be one of the following values:
   *
   * - `IAM` - An IAM user or role.
   * - `DIRECTORY_USER` - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
   * - `DIRECTORY_GROUP` - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
   *
   * @public
   */
  GranteeType?: GranteeType | undefined;

  /**
   * The unique identifier of the `Grantee`. If the grantee type is `IAM`, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.
   *
   * @public
   */
  GranteeIdentifier?: string | undefined;
}

/**
 * Information about the access grant.
 *
 * @public
 */
export interface ListAccessGrantEntry {
  /**
   * The date and time when you created the S3 Access Grants instance.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
   *
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   *
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
   *
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * The type of access granted to your S3 data, which can be set to one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access.
   *
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * The S3 path of the data to which you are granting access. It is the result of appending the `Subprefix` to the location scope.
   *
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * A container for information about the registered location.
 *
 * @public
 */
export interface ListAccessGrantsLocationsEntry {
  /**
   * The date and time when you registered the location.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registered location.
   *
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * The S3 path to the location that you are registering. The location scope can be the default S3 location `s3://`, the S3 path to a bucket `s3://<bucket>`, or the S3 path to a bucket and prefix `s3://<bucket>/<prefix>`. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
   *
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * The virtual private cloud (VPC) configuration for an access point.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * If this field is specified, this access point will only allow connections from the specified VPC ID.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * An access point used to access a bucket.
 *
 * @public
 */
export interface AccessPoint {
  /**
   * The name of this access point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Indicates whether this access point allows access from the public internet. If `VpcConfiguration` is specified for this access point, then `NetworkOrigin` is `VPC`, and the access point doesn't allow access from the public internet. Otherwise, `NetworkOrigin` is `Internet`, and the access point allows access from the public internet, subject to the access point and bucket access policies.
   *
   * @public
   */
  NetworkOrigin: NetworkOrigin | undefined;

  /**
   * The virtual private cloud (VPC) configuration for this access point, if one exists.
   *
   * > **Note:** This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services services.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The name of the bucket associated with this access point.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The ARN for the access point.
   *
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * The name or alias of the access point.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
   *
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * A unique identifier for the data source of the access point.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The type of the data source that the access point is attached to.
   *
   * @public
   */
  DataSourceType?: string | undefined;
}

/**
 * The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface ActivityMetrics {
  /**
   * A container that indicates whether activity metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced cost-optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AdvancedCostOptimizationMetrics {
  /**
   * A container that indicates whether advanced cost-optimization metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced data-protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AdvancedDataProtectionMetrics {
  /**
   * A container that indicates whether advanced data-protection metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * The container element for S3 Storage Lens advanced performance metrics. Advanced performance metrics provide insights into application performance, such as request efficiency and access patterns. These metrics help you optimize your S3 storage for both cost and performance by providing detailed analytics on how your applications interact with S3 resources.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AdvancedPerformanceMetrics {
  /**
   * A container that indicates whether S3 Storage Lens advanced performance metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as `200 OK`, `403 Forbidden`, `503 Service Unavailable` and others.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface DetailedStatusCodesMetrics {
  /**
   * A container that indicates whether detailed status code metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface SelectionCriteria {
  /**
   * A container for the delimiter of the selection criteria being used.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * The max depth of the selection criteria
   *
   * @public
   */
  MaxDepth?: number | undefined;

  /**
   * The minimum percentage of total bucket storage that a prefix must hold for its metrics to be included.
   *
   * @public
   */
  MinStorageBytesPercentage?: number | undefined;
}

/**
 * A container for the prefix-level storage metrics for S3 Storage Lens.
 *
 * @public
 */
export interface PrefixLevelStorageMetrics {
  /**
   * A container for whether prefix-level storage metrics are enabled.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;

  /**
   * @public
   */
  SelectionCriteria?: SelectionCriteria | undefined;
}

/**
 * A container for the prefix-level configuration.
 *
 * @public
 */
export interface PrefixLevel {
  /**
   * A container for the prefix-level storage metrics for S3 Storage Lens.
   *
   * @public
   */
  StorageMetrics: PrefixLevelStorageMetrics | undefined;
}

/**
 * A container for the bucket-level configuration for Amazon S3 Storage Lens.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface BucketLevel {
  /**
   * A container for the bucket-level activity metrics for S3 Storage Lens.
   *
   * @public
   */
  ActivityMetrics?: ActivityMetrics | undefined;

  /**
   * A container for the prefix-level metrics for S3 Storage Lens.
   *
   * @public
   */
  PrefixLevel?: PrefixLevel | undefined;

  /**
   * A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.
   *
   * @public
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;

  /**
   * A container for bucket-level advanced data-protection metrics for S3 Storage Lens.
   *
   * @public
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;

  /**
   * A container for bucket-level detailed status code metrics for S3 Storage Lens.
   *
   * @public
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;

  /**
   * A container for bucket-level advanced performance metrics for S3 Storage Lens.
   *
   * @public
   */
  AdvancedPerformanceMetrics?: AdvancedPerformanceMetrics | undefined;
}

/**
 * Indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation. You can only attach Storage Lens groups to your Storage Lens dashboard if they're included in your Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected.
 *
 * @public
 */
export interface StorageLensGroupLevelSelectionCriteria {
  /**
   * Indicates which Storage Lens group ARNs to include in the Storage Lens group aggregation.
   *
   * @public
   */
  Include?: string[] | undefined;

  /**
   * Indicates which Storage Lens group ARNs to exclude from the Storage Lens group aggregation.
   *
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * Specifies the Storage Lens groups to include in the Storage Lens group aggregation.
 *
 * @public
 */
export interface StorageLensGroupLevel {
  /**
   * Indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected.
   *
   * @public
   */
  SelectionCriteria?: StorageLensGroupLevelSelectionCriteria | undefined;
}

/**
 * A container element for the account-level Amazon S3 Storage Lens configuration.
 *
 * > **Note:** You must enable Storage Lens metrics consistently at both the account level and bucket level, or your request will fail.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*. For a complete list of S3 Storage Lens metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AccountLevel {
  /**
   * A container element for S3 Storage Lens activity metrics.
   *
   * @public
   */
  ActivityMetrics?: ActivityMetrics | undefined;

  /**
   * A container element for the S3 Storage Lens bucket-level configuration.
   *
   * @public
   */
  BucketLevel: BucketLevel | undefined;

  /**
   * A container element for S3 Storage Lens advanced cost-optimization metrics.
   *
   * @public
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;

  /**
   * A container element for S3 Storage Lens advanced data-protection metrics.
   *
   * @public
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;

  /**
   * A container element for detailed status code metrics.
   *
   * @public
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;

  /**
   * A container element for S3 Storage Lens advanced performance metrics.
   *
   * @public
   */
  AdvancedPerformanceMetrics?: AdvancedPerformanceMetrics | undefined;

  /**
   * A container element for S3 Storage Lens groups metrics.
   *
   * @public
   */
  StorageLensGroupLevel?: StorageLensGroupLevel | undefined;
}

/**
 * @public
 */
export interface AssociateAccessGrantsIdentityCenterRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  IdentityCenterArn: string | undefined;
}

/**
 * Error details for the failed asynchronous operation.
 *
 * @public
 */
export interface AsyncErrorDetails {
  /**
   * A string that uniquely identifies the error condition.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A generic description of the error condition in English.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The identifier of the resource associated with the error.
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * The ID of the request associated with the error.
   *
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
 *
 * This data type is not supported for Amazon S3 on Outposts.
 *
 * @public
 */
export interface PublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to `TRUE` causes the following behavior:
   *
   * - `PutBucketAcl` and `PutObjectAcl` calls fail if the specified ACL is public.
   * - PUT Object calls fail if the request includes a public ACL.
   * - PUT Bucket calls fail if the request includes a public ACL.
   *
   * Enabling this setting doesn't affect existing policies or ACLs.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.
   *
   * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   *
   * Enabling this setting doesn't affect existing bucket policies.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to `TRUE` restricts access to buckets with public policies to only Amazon Web Services service principals and authorized users within this account.
   *
   * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;
}

/**
 * A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.
 *
 * @public
 */
export interface Region {
  /**
   * The name of the associated bucket for the Region.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
   *
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * A container for the information associated with a [CreateMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html) request.
 *
 * @public
 */
export interface CreateMultiRegionAccessPointInput {
  /**
   * The name of the Multi-Region Access Point associated with this request.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * This data type is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration | undefined;

  /**
   * The buckets in different Regions that are associated with the Multi-Region Access Point.
   *
   * @public
   */
  Regions: Region[] | undefined;
}

/**
 * A container for the information associated with a [DeleteMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html) request.
 *
 * @public
 */
export interface DeleteMultiRegionAccessPointInput {
  /**
   * The name of the Multi-Region Access Point associated with this request.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A container for the information associated with a [PutMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html) request.
 *
 * @public
 */
export interface PutMultiRegionAccessPointPolicyInput {
  /**
   * The name of the Multi-Region Access Point associated with the request.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The policy details for the `PutMultiRegionAccessPoint` request.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * A container for the request parameters associated with an asynchronous request.
 *
 * @public
 */
export interface AsyncRequestParameters {
  /**
   * A container of the parameters for a [CreateMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html) request.
   *
   * @public
   */
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput | undefined;

  /**
   * A container of the parameters for a [DeleteMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html) request.
   *
   * @public
   */
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput | undefined;

  /**
   * A container of the parameters for a [PutMultiRegionAccessPoint](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html) request.
   *
   * @public
   */
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput | undefined;
}

/**
 * Status information for a single Multi-Region Access Point Region.
 *
 * @public
 */
export interface MultiRegionAccessPointRegionalResponse {
  /**
   * The name of the Region in the Multi-Region Access Point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the Multi-Region Access Point in this Region.
   *
   * @public
   */
  RequestStatus?: string | undefined;
}

/**
 * The Multi-Region Access Point details that are returned when querying about an asynchronous request.
 *
 * @public
 */
export interface MultiRegionAccessPointsAsyncResponse {
  /**
   * A collection of status information for the different Regions that a Multi-Region Access Point supports.
   *
   * @public
   */
  Regions?: MultiRegionAccessPointRegionalResponse[] | undefined;
}

/**
 * A container for the response details that are returned when querying about an asynchronous request.
 *
 * @public
 */
export interface AsyncResponseDetails {
  /**
   * The details for the Multi-Region Access Point.
   *
   * @public
   */
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse | undefined;

  /**
   * Error details for an asynchronous request.
   *
   * @public
   */
  ErrorDetails?: AsyncErrorDetails | undefined;
}

/**
 * A container for the information about an asynchronous operation.
 *
 * @public
 */
export interface AsyncOperation {
  /**
   * The time that the request was sent to the service.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The specific operation for the asynchronous request.
   *
   * @public
   */
  Operation?: AsyncOperationName | undefined;

  /**
   * The request token associated with the request.
   *
   * @public
   */
  RequestTokenARN?: string | undefined;

  /**
   * The parameters associated with the request.
   *
   * @public
   */
  RequestParameters?: AsyncRequestParameters | undefined;

  /**
   * The current status of the request.
   *
   * @public
   */
  RequestStatus?: string | undefined;

  /**
   * The details of the response.
   *
   * @public
   */
  ResponseDetails?: AsyncResponseDetails | undefined;
}

/**
 * Lambda function used to transform objects through an Object Lambda Access Point.
 *
 * @public
 */
export interface AwsLambdaTransformation {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * Additional JSON that provides supplemental data to the Lambda function used to transform objects.
   *
   * @public
   */
  FunctionPayload?: string | undefined;
}

/**
 * A key-value pair that you use to label your resources. You can add tags to new resources when you create them, or you can add tags to existing resources. Tags can help you organize, track costs for, and control access to resources.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the key-value pair of a tag added to your Amazon Web Services resource. A tag key can be up to 128 Unicode characters in length and is case-sensitive. System created tags that begin with `aws:` aren’t supported.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key-value pair of a tag added to your Amazon Web Services resource. A tag value can be up to 256 Unicode characters in length and is case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * If you are passing the `default` location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the `Subprefix` field.
   *
   * @public
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. It contains the `S3SubPrefix` field. The grant scope is the result of appending the subprefix to the location scope of the registered location.
   *
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
   *
   * @public
   */
  Grantee: Grantee | undefined;

  /**
   * The type of access that you are granting to your S3 data, which can be set to one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission: Permission | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If an application ARN is included in the request to create an access grant, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The type of `S3SubPrefix`. The only possible value is `Object`. Pass this value if the access grant scope is an object. Do not pass this value if the access grant scope is a bucket or a bucket and a prefix.
   *
   * @public
   */
  S3PrefixType?: S3PrefixType | undefined;

  /**
   * The Amazon Web Services resource tags that you are adding to the access grant. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantResult {
  /**
   * The date and time when you created the access grant.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
   *
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   *
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
   *
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access.
   *
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * The type of access that you are granting to your S3 data, which can be set to one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The S3 path of the data to which you are granting access. It is the result of appending the `Subprefix` to the location scope.
   *
   * @public
   */
  GrantScope?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsInstanceRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * If you would like to associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * The Amazon Web Services resource tags that you are adding to the S3 Access Grants instance. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsInstanceResult {
  /**
   * The date and time when you created the S3 Access Grants instance.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the S3 Access Grants instance. The ID is `default`. You can have one S3 Access Grants instance per Region per account.
   *
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @deprecated IdentityCenterArn has been deprecated. Use IdentityCenterInstanceArn or IdentityCenterApplicationArn.
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsLocationRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 path to the location that you are registering. The location scope can be the default S3 location `s3://`, the S3 path to a bucket `s3://<bucket>`, or the S3 path to a bucket and prefix `s3://<bucket>/<prefix>`. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
   *
   * @public
   */
  LocationScope: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn: string | undefined;

  /**
   * The Amazon Web Services resource tags that you are adding to the S3 Access Grants location. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsLocationResult {
  /**
   * The date and time when you registered the location.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the location you are registering.
   *
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * The S3 URI path to the location that you are registering. The location scope can be the default S3 location `s3://`, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
   *
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.
 *
 * For more information, see [Manage the scope of your access points for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets-manage-scope.html).
 *
 * @public
 */
export interface Scope {
  /**
   * You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.
   *
   * @public
   */
  Prefixes?: string[] | undefined;

  /**
   * You can include one or more API operations as permissions.
   *
   * @public
   */
  Permissions?: ScopePermission[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name you want to assign to this access point.
   *
   * For directory buckets, the access point name must consist of a base name that you provide and suffix that includes the `ZoneID` (Amazon Web Services Availability Zone or Local Zone) of your bucket location, followed by `--xa-s3`. For more information, see [Managing access to shared datasets in directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the bucket that you want to associate this access point with.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).
   *
   * > **Note:** This is required for creating an access point for Amazon S3 on Outposts buckets.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The `PublicAccessBlock` configuration that you want to apply to the access point.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
   *
   * For same account access point when your bucket and access point belong to the same account owner, the `BucketAccountId` is not required. For cross-account access point when your bucket and access point are not in the same account, the `BucketAccountId` is required.
   *
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * For directory buckets, you can filter access control to specific prefixes, API operations, or a combination of both. For more information, see [Managing access to shared datasets in directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** Scope is only supported for access points attached to directory buckets.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * An array of tags that you can apply to an access point. Tags are key-value pairs of metadata used to control access to your access points. For more information about tags, see [Using tags with Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html). For information about tagging access points, see [Using tags for attribute-based access control (ABAC)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/tagging.html#using-tags-for-abac).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointResult {
  /**
   * The ARN of the access point.
   *
   * > **Note:** This is only supported by Amazon S3 on Outposts.
   *
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * The name or alias of the access point.
   *
   * @public
   */
  Alias?: string | undefined;
}

/**
 * A container for AwsLambdaTransformation.
 *
 * @public
 */
export type ObjectLambdaContentTransformation =
  | ObjectLambdaContentTransformation.AwsLambdaMember
  | ObjectLambdaContentTransformation.$UnknownMember;

/**
 * @public
 */
export namespace ObjectLambdaContentTransformation {
  /**
   * A container for an Lambda function.
   *
   * @public
   */
  export interface AwsLambdaMember {
    AwsLambda: AwsLambdaTransformation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AwsLambda?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AwsLambda: (value: AwsLambdaTransformation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A configuration used when creating an Object Lambda Access Point transformation.
 *
 * @public
 */
export interface ObjectLambdaTransformationConfiguration {
  /**
   * A container for the action of an Object Lambda Access Point configuration. Valid inputs are `GetObject`, `ListObjects`, `HeadObject`, and `ListObjectsV2`.
   *
   * @public
   */
  Actions: ObjectLambdaTransformationConfigurationAction[] | undefined;

  /**
   * A container for the content transformation of an Object Lambda Access Point configuration.
   *
   * @public
   */
  ContentTransformation: ObjectLambdaContentTransformation | undefined;
}

/**
 * A configuration used when creating an Object Lambda Access Point.
 *
 * @public
 */
export interface ObjectLambdaConfiguration {
  /**
   * Standard access point associated with the Object Lambda Access Point.
   *
   * @public
   */
  SupportingAccessPoint: string | undefined;

  /**
   * A container for whether the CloudWatch metrics configuration is enabled.
   *
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * A container for allowed features. Valid inputs are `GetObject-Range`, `GetObject-PartNumber`, `HeadObject-Range`, and `HeadObject-PartNumber`.
   *
   * @public
   */
  AllowedFeatures?: ObjectLambdaAllowedFeature[] | undefined;

  /**
   * A container for transformation configurations for an Object Lambda Access Point.
   *
   * @public
   */
  TransformationConfigurations: ObjectLambdaTransformationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaRequest {
  /**
   * The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name you want to assign to this Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Object Lambda Access Point configuration as a JSON document.
   *
   * @public
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * The alias of an Object Lambda Access Point. For more information, see [How to use a bucket-style alias for your S3 bucket Object Lambda Access Point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias).
 *
 * @public
 */
export interface ObjectLambdaAccessPointAlias {
  /**
   * The alias value of the Object Lambda Access Point.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The status of the Object Lambda Access Point alias. If the status is `PROVISIONING`, the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If the status is `READY`, the Object Lambda Access Point alias is successfully provisioned and ready for use.
   *
   * @public
   */
  Status?: ObjectLambdaAccessPointAliasStatus | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaResult {
  /**
   * Specifies the ARN for the Object Lambda Access Point.
   *
   * @public
   */
  ObjectLambdaAccessPointArn?: string | undefined;

  /**
   * The alias of the Object Lambda Access Point.
   *
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * The container for the bucket configuration.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface CreateBucketConfiguration {
  /**
   * Specifies the Region where the bucket will be created. If you are creating a bucket on the US East (N. Virginia) Region (us-east-1), you do not need to specify the location.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  LocationConstraint?: BucketLocationConstraint | undefined;
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * The canned ACL to apply to the bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  ACL?: BucketCannedACL | undefined;

  /**
   * The name of the bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The configuration information for the bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  CreateBucketConfiguration?: CreateBucketConfiguration | undefined;

  /**
   * Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * Allows grantee to list the objects in the bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * Allows grantee to read the bucket ACL.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * Allows grantee to create, overwrite, and delete any object in the bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * Allows grantee to write the ACL for the applicable bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * Specifies whether you want S3 Object Lock to be enabled for the new bucket.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  ObjectLockEnabledForBucket?: boolean | undefined;

  /**
   * The ID of the Outposts where the bucket is being created.
   *
   * > **Note:** This ID is required by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBucketResult {
  /**
   * The location of the bucket.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * Contains the information required to locate a manifest object. Manifests can't be imported from directory buckets. For more information, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html).
 *
 * @public
 */
export interface JobManifestLocation {
  /**
   * The Amazon Resource Name (ARN) for a manifest object.
   *
   * > **Important:** When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see [XML-related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ObjectArn: string | undefined;

  /**
   * The optional version ID to identify a specific version of the manifest object.
   *
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * The ETag for the specified manifest object.
   *
   * @public
   */
  ETag: string | undefined;
}

/**
 * Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
 *
 * @public
 */
export interface JobManifestSpec {
  /**
   * Indicates which of the available formats the specified manifest uses.
   *
   * @public
   */
  Format: JobManifestFormat | undefined;

  /**
   * If the specified manifest object is in the `S3BatchOperations_CSV_20180820` format, this element describes which columns contain the required data.
   *
   * @public
   */
  Fields?: JobManifestFieldName[] | undefined;
}

/**
 * Contains the configuration information for a job's manifest.
 *
 * @public
 */
export interface JobManifest {
  /**
   * Describes the format of the specified job's manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.
   *
   * @public
   */
  Spec: JobManifestSpec | undefined;

  /**
   * Contains the information required to locate the specified job's manifest. Manifests can't be imported from directory buckets. For more information, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html).
   *
   * @public
   */
  Location: JobManifestLocation | undefined;
}

/**
 * If provided, the generated manifest includes only source bucket objects whose object keys match the string constraints specified for `MatchAnyPrefix`, `MatchAnySuffix`, and `MatchAnySubstring`.
 *
 * @public
 */
export interface KeyNameConstraint {
  /**
   * If provided, the generated manifest includes objects where the specified string appears at the start of the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.
   *
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * If provided, the generated manifest includes objects where the specified string appears at the end of the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.
   *
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * If provided, the generated manifest includes objects where the specified string appears anywhere within the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.
   *
   * @public
   */
  MatchAnySubstring?: string[] | undefined;
}

/**
 * A filter that returns objects that are encrypted by dual-layer server-side encryption with Amazon Web Services Key Management Service (KMS) keys (DSSE-KMS). You can further refine your filtering by optionally providing a KMS Key ARN to filter objects encrypted by a specific key.
 *
 * @public
 */
export interface DSSEKMSFilter {
  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key to use for the filter to return objects that are encrypted by the specified key. For best performance, use keys in the same Region as the S3 Batch Operations job.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * A filter that returns objects that aren't server-side encrypted.
 *
 * @public
 */
export interface NotSSEFilter {}

/**
 * A filter that returns objects that are encrypted by server-side encryption with customer-provided keys (SSE-C).
 *
 * @public
 */
export interface SSECFilter {}

/**
 * A filter that returns objects that are encrypted by server-side encryption with Amazon Web Services KMS (SSE-KMS).
 *
 * @public
 */
export interface SSEKMSFilter {
  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key to use for the filter to return objects that are encrypted by the specified key. For best performance, use keys in the same Region as the S3 Batch Operations job.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Amazon Web Services Key Management Service (Amazon Web Services KMS) keys (SSE-KMS). If specified, will filter SSE-KMS encrypted objects by S3 Bucket Key status.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}

/**
 * A filter that returns objects that are encrypted by server-side encryption with Amazon S3 managed keys (SSE-S3).
 *
 * @public
 */
export interface SSES3Filter {}

/**
 * An optional filter for the S3JobManifestGenerator that identifies the subset of objects by encryption type.
 *
 * @public
 */
export type ObjectEncryptionFilter =
  | ObjectEncryptionFilter.DSSEKMSMember
  | ObjectEncryptionFilter.NOTSSEMember
  | ObjectEncryptionFilter.SSECMember
  | ObjectEncryptionFilter.SSEKMSMember
  | ObjectEncryptionFilter.SSES3Member
  | ObjectEncryptionFilter.$UnknownMember;

/**
 * @public
 */
export namespace ObjectEncryptionFilter {
  /**
   * Filters for objects that are encrypted by server-side encryption with Amazon S3 managed keys (SSE-S3).
   *
   * @public
   */
  export interface SSES3Member {
    SSES3: SSES3Filter;
    SSEKMS?: never;
    DSSEKMS?: never;
    SSEC?: never;
    NOTSSE?: never;
    $unknown?: never;
  }

  /**
   * Filters for objects that are encrypted by server-side encryption with Amazon Web Services Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  export interface SSEKMSMember {
    SSES3?: never;
    SSEKMS: SSEKMSFilter;
    DSSEKMS?: never;
    SSEC?: never;
    NOTSSE?: never;
    $unknown?: never;
  }

  /**
   * Filters for objects that are encrypted by dual-layer server-side encryption with Amazon Web Services Key Management Service (KMS) keys (DSSE-KMS).
   *
   * @public
   */
  export interface DSSEKMSMember {
    SSES3?: never;
    SSEKMS?: never;
    DSSEKMS: DSSEKMSFilter;
    SSEC?: never;
    NOTSSE?: never;
    $unknown?: never;
  }

  /**
   * Filters for objects that are encrypted by server-side encryption with customer-provided keys (SSE-C).
   *
   * @public
   */
  export interface SSECMember {
    SSES3?: never;
    SSEKMS?: never;
    DSSEKMS?: never;
    SSEC: SSECFilter;
    NOTSSE?: never;
    $unknown?: never;
  }

  /**
   * Filters for objects that are not encrypted by server-side encryption.
   *
   * @public
   */
  export interface NOTSSEMember {
    SSES3?: never;
    SSEKMS?: never;
    DSSEKMS?: never;
    SSEC?: never;
    NOTSSE: NotSSEFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SSES3?: never;
    SSEKMS?: never;
    DSSEKMS?: never;
    SSEC?: never;
    NOTSSE?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SSES3: (value: SSES3Filter) => T;
    SSEKMS: (value: SSEKMSFilter) => T;
    DSSEKMS: (value: DSSEKMSFilter) => T;
    SSEC: (value: SSECFilter) => T;
    NOTSSE: (value: NotSSEFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The filter used to describe a set of objects for the job's manifest.
 *
 * @public
 */
export interface JobManifestGeneratorFilter {
  /**
   * Include objects in the generated manifest only if they are eligible for replication according to the Replication configuration on the source bucket.
   *
   * @public
   */
  EligibleForReplication?: boolean | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects that were created after this time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects that were created before this time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects that have one of the specified Replication statuses.
   *
   * @public
   */
  ObjectReplicationStatuses?: ReplicationStatus[] | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects whose object keys match the string constraints specified for `MatchAnyPrefix`, `MatchAnySuffix`, and `MatchAnySubstring`.
   *
   * @public
   */
  KeyNameConstraint?: KeyNameConstraint | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects whose file size is greater than the specified number of bytes.
   *
   * @public
   */
  ObjectSizeGreaterThanBytes?: number | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects whose file size is less than the specified number of bytes.
   *
   * @public
   */
  ObjectSizeLessThanBytes?: number | undefined;

  /**
   * If provided, the generated manifest includes only source bucket objects that are stored with the specified storage class.
   *
   * @public
   */
  MatchAnyStorageClass?: S3StorageClass[] | undefined;

  /**
   * If provided, the generated object list includes only source bucket objects with the indicated server-side encryption type (SSE-S3, SSE-KMS, DSSE-KMS, SSE-C, or NOT-SSE).
   *
   * @public
   */
  MatchAnyObjectEncryption?: ObjectEncryptionFilter[] | undefined;
}

/**
 * Configuration for the use of SSE-KMS to encrypt generated manifest objects.
 *
 * @public
 */
export interface SSEKMSEncryption {
  /**
   * Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption customer managed key to use for encrypting generated manifest objects.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * Configuration for the use of SSE-S3 to encrypt generated manifest objects.
 *
 * @public
 */
export interface SSES3Encryption {}

/**
 * The encryption configuration to use when storing the generated manifest.
 *
 * @public
 */
export interface GeneratedManifestEncryption {
  /**
   * Specifies the use of SSE-S3 to encrypt generated manifest objects.
   *
   * @public
   */
  SSES3?: SSES3Encryption | undefined;

  /**
   * Configuration details on how SSE-KMS is used to encrypt generated manifest objects.
   *
   * @public
   */
  SSEKMS?: SSEKMSEncryption | undefined;
}

/**
 * Location details for where the generated manifest should be written.
 *
 * @public
 */
export interface S3ManifestOutputLocation {
  /**
   * The Account ID that owns the bucket the generated manifest is written to.
   *
   * @public
   */
  ExpectedManifestBucketOwner?: string | undefined;

  /**
   * The bucket ARN the generated manifest should be written to.
   *
   * > **Note:** **Directory buckets** - Directory buckets aren't supported as the buckets to store the generated manifest.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Prefix identifying one or more objects to which the manifest applies.
   *
   * @public
   */
  ManifestPrefix?: string | undefined;

  /**
   * Specifies what encryption should be used when the generated manifest objects are written.
   *
   * @public
   */
  ManifestEncryption?: GeneratedManifestEncryption | undefined;

  /**
   * The format of the generated manifest.
   *
   * @public
   */
  ManifestFormat: GeneratedManifestFormat | undefined;
}

/**
 * The container for the service that will create the S3 manifest.
 *
 * @public
 */
export interface S3JobManifestGenerator {
  /**
   * The Amazon Web Services account ID that owns the source bucket specified in `SourceBucket`. If provided, the manifest source bucket owner's Amazon Web Services account ID must match this value, else the job fails.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * The ARN of the source bucket used by the ManifestGenerator.
   *
   * > **Note:** **Directory buckets** - Directory buckets aren't supported as the source buckets used by `S3JobManifestGenerator` to generate the job manifest.
   *
   * @public
   */
  SourceBucket: string | undefined;

  /**
   * Specifies the location the generated manifest will be written to. Manifests can't be written to directory buckets. For more information, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html).
   *
   * @public
   */
  ManifestOutputLocation?: S3ManifestOutputLocation | undefined;

  /**
   * Specifies rules the S3JobManifestGenerator should use to decide whether an object in the source bucket should or should not be included in the generated job manifest.
   *
   * @public
   */
  Filter?: JobManifestGeneratorFilter | undefined;

  /**
   * Determines whether or not to write the job's generated manifest to a bucket.
   *
   * @public
   */
  EnableManifestOutput: boolean | undefined;
}

/**
 * Configures the type of the job's ManifestGenerator.
 *
 * @public
 */
export type JobManifestGenerator =
  | JobManifestGenerator.S3JobManifestGeneratorMember
  | JobManifestGenerator.$UnknownMember;

/**
 * @public
 */
export namespace JobManifestGenerator {
  /**
   * The S3 job ManifestGenerator's configuration details.
   *
   * @public
   */
  export interface S3JobManifestGeneratorMember {
    S3JobManifestGenerator: S3JobManifestGenerator;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    S3JobManifestGenerator?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    S3JobManifestGenerator: (value: S3JobManifestGenerator) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the configuration parameters for a `Lambda Invoke` operation.
 *
 * @public
 */
export interface LambdaInvokeOperation {
  /**
   * The Amazon Resource Name (ARN) for the Lambda function that the specified job will invoke on every object in the manifest.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * Specifies the schema version for the payload that Batch Operations sends when invoking an Lambda function. Version `1.0` is the default. Version `2.0` is required when you use Batch Operations to invoke Lambda functions that act on directory buckets, or if you need to specify `UserArguments`. For more information, see [Automate object processing in Amazon S3 directory buckets with S3 Batch Operations and Lambda](https://aws.amazon.com/blogs/storage/automate-object-processing-in-amazon-s3-directory-buckets-with-s3-batch-operations-and-aws-lambda/) in the *Amazon Web Services Storage Blog*.
   *
   * > **Important:** Ensure that your Lambda function code expects `InvocationSchemaVersion` **2.0** and uses bucket name rather than bucket ARN. If the `InvocationSchemaVersion` does not match what your Lambda function expects, your function might not work as expected.
   *
   * > **Note:** **Directory buckets** - To initiate Amazon Web Services Lambda function to perform custom actions on objects in directory buckets, you must specify `2.0`.
   *
   * @public
   */
  InvocationSchemaVersion?: string | undefined;

  /**
   * Key-value pairs that are passed in the payload that Batch Operations sends when invoking an Lambda function. You must specify `InvocationSchemaVersion` **2.0** for `LambdaInvoke` operations that include `UserArguments`. For more information, see [Automate object processing in Amazon S3 directory buckets with S3 Batch Operations and Lambda](https://aws.amazon.com/blogs/storage/automate-object-processing-in-amazon-s3-directory-buckets-with-s3-batch-operations-and-aws-lambda/) in the *Amazon Web Services Storage Blog*.
   *
   * @public
   */
  UserArguments?: Record<string, string> | undefined;
}

/**
 * Directs the specified job to invoke the ComputeObjectChecksum operation on every object listed in the job's manifest.
 *
 * @public
 */
export interface S3ComputeObjectChecksumOperation {
  /**
   * Indicates the algorithm that you want Amazon S3 to use to create the checksum. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the Amazon S3 User Guide.
   *
   * @public
   */
  ChecksumAlgorithm?: ComputeObjectChecksumAlgorithm | undefined;

  /**
   * Indicates the checksum type that you want Amazon S3 to use to calculate the object's checksum value. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the Amazon S3 User Guide.
   *
   * @public
   */
  ChecksumType?: ComputeObjectChecksumType | undefined;
}

/**
 * Contains no configuration parameters because the DELETE Object tagging (`DeleteObjectTagging`) API operation accepts only the bucket name and key name as parameters, which are defined in the job's manifest.
 *
 * @public
 */
export interface S3DeleteObjectTaggingOperation {}

/**
 * Contains the configuration parameters for a POST Object restore job. S3 Batch Operations passes every object to the underlying `RestoreObject` API operation. For more information about the parameters for this operation, see [RestoreObject](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request).
 *
 * @public
 */
export interface S3InitiateRestoreObjectOperation {
  /**
   * This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains available in Amazon S3. S3 Initiate Restore Object jobs that target S3 Glacier and S3 Glacier Deep Archive objects require `ExpirationInDays` set to 1 or greater.
   *
   * Conversely, do *not* set `ExpirationInDays` when creating S3 Initiate Restore Object jobs that target S3 Intelligent-Tiering Archive Access and Deep Archive Access tier objects. Objects in S3 Intelligent-Tiering archive access tiers are not subject to restore expiry, so specifying `ExpirationInDays` results in restore request failure.
   *
   * S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier objects, but not both types in the same job. If you need to restore objects of both types you *must* create separate Batch Operations jobs.
   *
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * S3 Batch Operations supports `STANDARD` and `BULK` retrieval tiers, but not the `EXPEDITED` retrieval tier.
   *
   * @public
   */
  GlacierJobTier?: S3GlacierJobTier | undefined;
}

/**
 * @public
 */
export interface S3Grantee {
  /**
   * @public
   */
  TypeIdentifier?: S3GranteeTypeIdentifier | undefined;

  /**
   * @public
   */
  Identifier?: string | undefined;

  /**
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface S3Grant {
  /**
   * @public
   */
  Grantee?: S3Grantee | undefined;

  /**
   * @public
   */
  Permission?: S3Permission | undefined;
}

/**
 * @public
 */
export interface S3ObjectOwner {
  /**
   * @public
   */
  ID?: string | undefined;

  /**
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 */
export interface S3AccessControlList {
  /**
   * @public
   */
  Owner: S3ObjectOwner | undefined;

  /**
   * @public
   */
  Grants?: S3Grant[] | undefined;
}

/**
 * @public
 */
export interface S3AccessControlPolicy {
  /**
   * @public
   */
  AccessControlList?: S3AccessControlList | undefined;

  /**
   * @public
   */
  CannedAccessControlList?: S3CannedAccessControlList | undefined;
}

/**
 * Contains the configuration parameters for a PUT Object ACL operation. S3 Batch Operations passes every object to the underlying `PutObjectAcl` API operation. For more information about the parameters for this operation, see [PutObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html).
 *
 * @public
 */
export interface S3SetObjectAclOperation {
  /**
   * @public
   */
  AccessControlPolicy?: S3AccessControlPolicy | undefined;
}

/**
 * @public
 */
export interface S3ObjectMetadata {
  /**
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * *This member has been deprecated.*
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * *This member has been deprecated.*
   *
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * @public
   */
  ContentType?: string | undefined;

  /**
   * @public
   */
  HttpExpiresDate?: Date | undefined;

  /**
   * *This member has been deprecated.*
   *
   * @public
   */
  RequesterCharged?: boolean | undefined;

  /**
   * The server-side encryption algorithm used when storing objects in Amazon S3.
   *
   * **Directory buckets** - For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (`AES256`) and server-side encryption with KMS keys (SSE-KMS) (`KMS`). For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html) in the *Amazon S3 User Guide*. For [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), see [S3CopyObjectOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_S3CopyObjectOperation.html).
   *
   * @public
   */
  SSEAlgorithm?: S3SSEAlgorithm | undefined;
}

/**
 * A container for a key-value name pair.
 *
 * @public
 */
export interface S3Tag {
  /**
   * Key of the tag
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Value of the tag
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains the duration configuration for an event hold, specified in either days or years.
 *
 * @public
 */
export interface S3ObjectLockEventHoldDuration {
  /**
   * The number of days for the event hold duration. The minimum value is 1 and the maximum value is 36,500.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The number of years for the event hold duration. The minimum value is 1 and the maximum value is 100.
   *
   * @public
   */
  Years?: number | undefined;
}

/**
 * Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying `CopyObject` API operation. For more information about the parameters for this operation, see [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html).
 *
 * @public
 */
export interface S3CopyObjectOperation {
  /**
   * Specifies the destination bucket Amazon Resource Name (ARN) for the batch copy operation.
   *
   * - **General purpose buckets** - For example, to copy objects to a general purpose bucket named `destinationBucket`, set the `TargetResource` property to `arn:aws:s3:::destinationBucket`.
   * - **Directory buckets** - For example, to copy objects to a directory bucket named `destinationBucket` in the Availability Zone identified by the AZ ID `usw2-az1`, set the `TargetResource` property to `arn:aws:s3express:region:account_id:/bucket/destination_bucket_base_name--usw2-az1--x-s3`. A directory bucket as a destination bucket can be in Availability Zone or Local Zone.
   *
   *   > **Note:** Copying objects across different Amazon Web Services Regions isn't supported when the source or destination bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region. Otherwise, you get an HTTP `400 Bad Request` error with the error code `InvalidRequest`.
   *
   * @public
   */
  TargetResource?: string | undefined;

  /**
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  CannedAccessControlList?: S3CannedAccessControlList | undefined;

  /**
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  AccessControlGrants?: S3Grant[] | undefined;

  /**
   * @public
   */
  MetadataDirective?: S3MetadataDirective | undefined;

  /**
   * Specifies whether the Batch Operations copy job copies object annotations from the source object or skips them. If this property isn't specified, `COPY` is the default behavior.
   *
   * Valid Values: `COPY | EXCLUDE`
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  AnnotationDirective?: S3AnnotationDirective | undefined;

  /**
   * @public
   */
  ModifiedSinceConstraint?: Date | undefined;

  /**
   * If you don't provide this parameter, Amazon S3 copies all the metadata from the original objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3 assigns the supplied tags to the new objects.
   *
   * @public
   */
  NewObjectMetadata?: S3ObjectMetadata | undefined;

  /**
   * Specifies a list of tags to add to the destination objects after they are copied. If `NewObjectTagging` is not specified, the tags of the source objects are copied to destination objects by default.
   *
   * > **Note:** **Directory buckets** - Tags aren't supported by directory buckets. If your source objects have tags and your destination bucket is a directory bucket, specify an empty tag set in the `NewObjectTagging` field to prevent copying the source object tags to the directory bucket.
   *
   * @public
   */
  NewObjectTagging?: S3Tag[] | undefined;

  /**
   * If the destination bucket is configured as a website, specifies an optional metadata property for website redirects, `x-amz-website-redirect-location`. Allows webpage redirects if the object copy is accessed through a website endpoint.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  RedirectLocation?: string | undefined;

  /**
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * Specify the storage class for the destination objects in a `Copy` operation.
   *
   * > **Note:** **Directory buckets** - This functionality is not supported by directory buckets.
   *
   * @public
   */
  StorageClass?: S3StorageClass | undefined;

  /**
   * @public
   */
  UnModifiedSinceConstraint?: Date | undefined;

  /**
   * Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same account that's issuing the command, you must use the full Key ARN not the Key ID.
   *
   * > **Note:** **Directory buckets** - If you specify `SSEAlgorithm` with `KMS`, you must specify the `SSEAwsKmsKeyId` parameter with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP `400 Bad Request` error. The key alias format of the KMS key isn't supported. To encrypt new object copies in a directory bucket with SSE-KMS, you must specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk)). The [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) (`aws/s3`) isn't supported. Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket for the lifetime of the bucket. After you specify a customer managed key for SSE-KMS as the bucket default encryption, you can't override the customer managed key for the bucket's SSE-KMS configuration. Then, when you specify server-side encryption settings for new object copies with SSE-KMS, you must make sure the encryption key is the same customer managed key that you specified for the directory bucket's default encryption configuration.
   *
   * @public
   */
  SSEAwsKmsKeyId?: string | undefined;

  /**
   * Specifies the folder prefix that you want the objects to be copied into. For example, to copy objects into a folder named `Folder1` in the destination bucket, set the `TargetKeyPrefix` property to `Folder1`.
   *
   * @public
   */
  TargetKeyPrefix?: string | undefined;

  /**
   * The legal hold status to be applied to all objects in the Batch Operations job.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | undefined;

  /**
   * The retention mode to be applied to all objects in the Batch Operations job.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  ObjectLockMode?: S3ObjectLockMode | undefined;

  /**
   * The date when the applied object retention configuration expires on all objects in the Batch Operations job.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to `true` causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.
   *
   * Specifying this header with an *Copy* action doesn’t affect *bucket-level* settings for S3 Bucket Key.
   *
   * > **Note:** **Directory buckets** - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops). In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * Indicates the algorithm that you want Amazon S3 to use to create the checksum. For more information, see [Checking object integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  ChecksumAlgorithm?: S3ChecksumAlgorithm | undefined;

  /**
   * The event hold status to be applied to all objects in the Batch Operations copy job. Set to `ON` to enable an event hold or `OFF` to disable it.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  ObjectLockEventHold?: S3ObjectLockEventHold | undefined;

  /**
   * The event hold duration to be applied to all objects in the Batch Operations copy job. The duration specifies how long the object remains protected after the event hold is released.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  ObjectLockEventHoldDuration?: S3ObjectLockEventHoldDuration | undefined;
}

/**
 * Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job.
 *
 * @public
 */
export interface S3ObjectLockLegalHold {
  /**
   * The Object Lock legal hold status to be applied to all objects in the Batch Operations job.
   *
   * @public
   */
  Status: S3ObjectLockLegalHoldStatus | undefined;
}

/**
 * Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying `PutObjectLegalHold` API operation. For more information, see [Using S3 Object Lock legal hold with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** This functionality is not supported by directory buckets.
 *
 * @public
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * Contains the Object Lock legal hold status to be applied to all objects in the Batch Operations job.
   *
   * @public
   */
  LegalHold: S3ObjectLockLegalHold | undefined;
}

/**
 * Contains the duration configuration for an event hold, specified in either days or years.
 *
 * @public
 */
export interface S3ObjectLockRetentionEventHoldDuration {
  /**
   * The number of days for the event hold duration. The minimum value is 1 and the maximum value is 36,500.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The number of years for the event hold duration. The minimum value is 1 and the maximum value is 100.
   *
   * @public
   */
  Years?: number | undefined;
}

/**
 * Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don't provide `Mode` and `RetainUntilDate` data types in your operation, you will remove the retention from your objects. For more information, see [Using S3 Object Lock retention with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface S3Retention {
  /**
   * The date when the applied Object Lock retention will expire on all objects set by the Batch Operations job.
   *
   * @public
   */
  RetainUntilDate?: Date | undefined;

  /**
   * The Object Lock retention mode to be applied to all objects in the Batch Operations job.
   *
   * @public
   */
  Mode?: S3ObjectLockRetentionMode | undefined;

  /**
   * The event hold status to be applied to all objects in the Batch Operations job. Set to `ON` to enable an event hold or `OFF` to disable it.
   *
   * @public
   */
  EventHold?: S3ObjectLockRetentionEventHold | undefined;

  /**
   * The event hold duration to be applied to all objects in the Batch Operations job. The duration specifies how long the object remains protected after the event hold is released.
   *
   * @public
   */
  EventHoldDuration?: S3ObjectLockRetentionEventHoldDuration | undefined;
}

/**
 * Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying `PutObjectRetention` API operation. For more information, see [Using S3 Object Lock retention with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** This functionality is not supported by directory buckets.
 *
 * @public
 */
export interface S3SetObjectRetentionOperation {
  /**
   * Indicates if the action should be applied to objects in the Batch Operations job even if they have Object Lock `GOVERNANCE` type in place.
   *
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * Contains the Object Lock retention mode to be applied to all objects in the Batch Operations job. For more information, see [Using S3 Object Lock retention with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Retention: S3Retention | undefined;
}

/**
 * Contains the configuration parameters for a PUT Object Tagging operation. S3 Batch Operations passes every object to the underlying `PutObjectTagging` API operation. For more information about the parameters for this operation, see [PutObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html).
 *
 * @public
 */
export interface S3SetObjectTaggingOperation {
  /**
   * @public
   */
  TagSet?: S3Tag[] | undefined;
}

/**
 * Directs the specified job to invoke `ReplicateObject` on every object in the job's manifest.
 *
 * @public
 */
export interface S3ReplicateObjectOperation {}

/**
 * If `SSEKMS` is specified for `UpdateObjectEncryption`, this data type specifies the Amazon Web Services KMS key Amazon Resource Name (ARN) to use and whether to use an S3 Bucket Key for server-side encryption using Key Management Service (KMS) keys (SSE-KMS).
 *
 * @public
 */
export interface S3UpdateObjectEncryptionSSEKMS {
  /**
   * Specifies the Amazon Web Services KMS key Amazon Resource Name (ARN) to use for the updated server-side encryption type. Required if `UpdateObjectEncryption` specifies `SSEKMS`.
   *
   * @public
   */
  KMSKeyArn: string | undefined;

  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using Key Management Service (KMS) keys (SSE-KMS). If this value isn't specified, it defaults to `false`. Setting this value to `true` causes Amazon S3 to use an S3 Bucket Key for update object encryption with SSE-KMS.
   *
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}

/**
 * The updated server-side encryption type for this object. The `UpdateObjectEncryption` operation supports the SSE-KMS encryption type.
 *
 * Valid Values: `SSEKMS`
 *
 * @public
 */
export interface ObjectEncryption {
  /**
   * Specifies to update the object encryption type to server-side encryption with Key Management Service (KMS) keys (SSE-KMS).
   *
   * @public
   */
  SSEKMS?: S3UpdateObjectEncryptionSSEKMS | undefined;
}

/**
 * With the `UpdateObjectEncryption` operation, you can atomically update the server-side encryption type of an existing object in a general purpose bucket without any data movement.
 *
 * @public
 */
export interface S3UpdateObjectEncryptionOperation {
  /**
   * The updated server-side encryption type for this S3 object. The `UpdateObjectEncryption` operation supports the SSE-KMS encryption type.
   *
   * @public
   */
  ObjectEncryption?: ObjectEncryption | undefined;
}

/**
 * The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see [Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface JobOperation {
  /**
   * Directs the specified job to invoke an Lambda function on every object in the manifest.
   *
   * @public
   */
  LambdaInvoke?: LambdaInvokeOperation | undefined;

  /**
   * Directs the specified job to run a PUT Copy object call on every object in the manifest.
   *
   * @public
   */
  S3PutObjectCopy?: S3CopyObjectOperation | undefined;

  /**
   * Directs the specified job to run a `PutObjectAcl` call on every object in the manifest.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3PutObjectAcl?: S3SetObjectAclOperation | undefined;

  /**
   * Directs the specified job to run a PUT Object tagging call on every object in the manifest.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation | undefined;

  /**
   * Directs the specified job to execute a DELETE Object tagging call on every object in the manifest.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation | undefined;

  /**
   * Directs the specified job to initiate restore requests for every archived object in the manifest.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation | undefined;

  /**
   * Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying `PutObjectLegalHold` API operation. For more information, see [Using S3 Object Lock legal hold with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined;

  /**
   * Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying `PutObjectRetention` API operation. For more information, see [Using S3 Object Lock retention with S3 Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html) in the *Amazon S3 User Guide*.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined;

  /**
   * Directs the specified job to invoke `ReplicateObject` on every object in the job's manifest.
   *
   * > **Note:** This functionality is not supported by directory buckets.
   *
   * @public
   */
  S3ReplicateObject?: S3ReplicateObjectOperation | undefined;

  /**
   * Directs the specified job to compute checksum values for every object in the manifest.
   *
   * @public
   */
  S3ComputeObjectChecksum?: S3ComputeObjectChecksumOperation | undefined;

  /**
   * Updates the server-side encryption type of an existing encrypted object in a general purpose bucket. You can use the `UpdateObjectEncryption` operation to change encrypted objects from server-side encryption with Amazon S3 managed keys (SSE-S3) to server-side encryption with Key Management Service (KMS) keys (SSE-KMS), or to apply S3 Bucket Keys. You can also use the `UpdateObjectEncryption` operation to change the customer-managed KMS key used to encrypt your data so that you can comply with custom key-rotation standards.
   *
   * @public
   */
  S3UpdateObjectEncryption?: S3UpdateObjectEncryptionOperation | undefined;
}

/**
 * Contains the configuration parameters for a job-completion report.
 *
 * @public
 */
export interface JobReport {
  /**
   * The Amazon Resource Name (ARN) for the bucket where specified job-completion report will be stored.
   *
   * > **Note:** **Directory buckets** - Directory buckets aren't supported as a location for Batch Operations to store job completion reports.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The format of the specified job-completion report.
   *
   * @public
   */
  Format?: JobReportFormat | undefined;

  /**
   * Indicates whether the specified job will generate a job-completion report.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * An optional prefix to describe where in the specified bucket the job-completion report will be stored. Amazon S3 stores the job-completion report at `<prefix>/job-<job-id>/report.json`.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Indicates whether the job-completion report will include details of all tasks or only failed tasks.
   *
   * @public
   */
  ReportScope?: JobReportScope | undefined;

  /**
   * Lists the Amazon Web Services account ID that owns the target bucket, where the completion report is received.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The Amazon Web Services account ID that creates the job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.
   *
   * @public
   */
  ConfirmationRequired?: boolean | undefined;

  /**
   * The action that you want this job to perform on every object listed in the manifest. For more information about the available actions, see [Operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Operation: JobOperation | undefined;

  /**
   * Configuration parameters for the optional job-completion report.
   *
   * @public
   */
  Report: JobReport | undefined;

  /**
   * An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Configuration parameters for the manifest.
   *
   * @public
   */
  Manifest?: JobManifest | undefined;

  /**
   * A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The numerical priority for this job. Higher numbers indicate higher priority.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A set of tags to associate with the S3 Batch Operations job. This is an optional parameter.
   *
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * The attribute container for the ManifestGenerator details. Jobs must be created with either a manifest file or a ManifestGenerator, but not both.
   *
   * @public
   */
  ManifestGenerator?: JobManifestGenerator | undefined;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * The ID for this job. Amazon S3 generates this ID automatically and returns it after a successful `Create Job` request.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own the underlying buckets.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * An idempotency token used to identify the request and guarantee that requests are unique.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A container element containing details about the Multi-Region Access Point.
   *
   * @public
   */
  Details: CreateMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointResult {
  /**
   * The request token associated with the request. You can use this token with [DescribeMultiRegionAccessPointOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html) to determine the status of asynchronous requests.
   *
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * A filter condition that specifies the object age range of included objects in days. Only integers are supported.
 *
 * @public
 */
export interface MatchObjectAge {
  /**
   * Specifies the maximum object age in days. Must be a positive whole number, greater than the minimum object age and less than or equal to 2,147,483,647.
   *
   * @public
   */
  DaysGreaterThan?: number | undefined;

  /**
   * Specifies the minimum object age in days. The value must be a positive whole number, greater than 0 and less than or equal to 2,147,483,647.
   *
   * @public
   */
  DaysLessThan?: number | undefined;
}

/**
 * A filter condition that specifies the object size range of included objects in bytes. Only integers are supported.
 *
 * @public
 */
export interface MatchObjectSize {
  /**
   * Specifies the minimum object size in Bytes. The value must be a positive number, greater than 0 and less than 50 TB.
   *
   * @public
   */
  BytesGreaterThan?: number | undefined;

  /**
   * Specifies the maximum object size in Bytes. The value must be a positive number, greater than the minimum object size and less than 50 TB.
   *
   * @public
   */
  BytesLessThan?: number | undefined;
}

/**
 * A logical operator that allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data.
 *
 * @public
 */
export interface StorageLensGroupAndOperator {
  /**
   * Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed.
   *
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed.
   *
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * Contains the list of object tags. At least one object tag must be specified. Up to 10 object tags are allowed.
   *
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * Contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
   *
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * Contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
   *
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;
}

/**
 * A container element for specifying `Or` rule conditions. The rule conditions determine the subset of objects to which the `Or` rule applies. Objects can match any of the listed filter conditions, which are joined by the `Or` logical operator. Only one of each filter condition is allowed.
 *
 * @public
 */
export interface StorageLensGroupOrOperator {
  /**
   * Filters objects that match any of the specified prefixes.
   *
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * Filters objects that match any of the specified suffixes.
   *
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * Filters objects that match any of the specified S3 object tags.
   *
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * Filters objects that match the specified object age range.
   *
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * Filters objects that match the specified object size range.
   *
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;
}

/**
 * The filter element sets the criteria for the Storage Lens group data that is displayed. For multiple filter conditions, the `AND` or `OR` logical operator is used.
 *
 * @public
 */
export interface StorageLensGroupFilter {
  /**
   * Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed.
   *
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed.
   *
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * Contains the list of S3 object tags. At least one object tag must be specified. Up to 10 object tags are allowed.
   *
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * Contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
   *
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * Contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
   *
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;

  /**
   * A logical operator that allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data. Objects must match all of the listed filter conditions that are joined by the `And` logical operator. Only one of each filter condition is allowed.
   *
   * @public
   */
  And?: StorageLensGroupAndOperator | undefined;

  /**
   * A single logical operator that allows multiple filter conditions to be joined. Objects can match any of the listed filter conditions, which are joined by the `Or` logical operator. Only one of each filter condition is allowed.
   *
   * @public
   */
  Or?: StorageLensGroupOrOperator | undefined;
}

/**
 * A custom grouping of objects that include filters for prefixes, suffixes, object tags, object size, or object age. You can create an S3 Storage Lens group that includes a single filter or multiple filter conditions. To specify multiple filter conditions, you use `AND` or `OR` logical operators.
 *
 * @public
 */
export interface StorageLensGroup {
  /**
   * Contains the name of the Storage Lens group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Sets the criteria for the Storage Lens group data that is displayed. For multiple filter conditions, the `AND` or `OR` logical operator is used.
   *
   * @public
   */
  Filter: StorageLensGroupFilter | undefined;

  /**
   * Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.
   *
   * @public
   */
  StorageLensGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateStorageLensGroupRequest {
  /**
   * The Amazon Web Services account ID that the Storage Lens group is created from and associated with.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Storage Lens group configuration.
   *
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;

  /**
   * The Amazon Web Services resource tags that you're adding to your Storage Lens group. This parameter is optional.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
   *
   * @public
   */
  AccessGrantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsInstanceRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsLocationRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the registered location that you are deregistering from your S3 Access Grants instance. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point you want to delete.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>`. For example, to access the access point `reports-ap` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap`. The value must be URL encoded.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyRequest {
  /**
   * The account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point whose policy you want to delete.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>`. For example, to access the access point `reports-ap` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap`. The value must be URL encoded.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point you want to delete the policy for.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointScopeRequest {
  /**
   * The Amazon Web Services account ID that owns the access point with the scope that you want to delete.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point with the scope that you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * The account ID that owns the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket being deleted.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * The account ID of the lifecycle configuration to delete.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketPolicyRequest {
  /**
   * The account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketReplicationRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the S3 on Outposts bucket to delete the replication configuration for.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketTaggingRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket tag set to be removed.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The bucket ARN that has the tag set to be removed.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID for the S3 Batch Operations job whose tags you want to delete.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingResult {}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * An idempotency token used to identify the request and guarantee that requests are unique.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A container element containing details about the Multi-Region Access Point.
   *
   * @public
   */
  Details: DeleteMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointResult {
  /**
   * The request token associated with the request. You can use this token with [DescribeMultiRegionAccessPointOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html) to determine the status of asynchronous requests.
   *
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * The account ID for the Amazon Web Services account whose `PublicAccessBlock` configuration you want to remove.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationRequest {
  /**
   * The ID of the S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationTaggingRequest {
  /**
   * The ID of the S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationTaggingResult {}

/**
 * @public
 */
export interface DeleteStorageLensGroupRequest {
  /**
   * The name of the Storage Lens group that you're trying to delete.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID used to create the Storage Lens group that you're trying to delete.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID for the job whose information you want to retrieve.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * If this job failed, this element indicates why the job failed.
 *
 * @public
 */
export interface JobFailure {
  /**
   * The failure code, if any, for the specified job.
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * The failure reason, if any, for the specified job.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Describes the specified job's generated manifest. Batch Operations jobs created with a ManifestGenerator populate details of this descriptor after execution of the ManifestGenerator.
 *
 * @public
 */
export interface S3GeneratedManifestDescriptor {
  /**
   * The format of the generated manifest.
   *
   * @public
   */
  Format?: GeneratedManifestFormat | undefined;

  /**
   * Contains the information required to locate a manifest object. Manifests can't be imported from directory buckets. For more information, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html).
   *
   * @public
   */
  Location?: JobManifestLocation | undefined;
}

/**
 * Provides timing details for the job.
 *
 * @public
 */
export interface JobTimers {
  /**
   * Indicates the elapsed time in seconds the job has been in the Active job state.
   *
   * @public
   */
  ElapsedTimeInActiveSeconds?: number | undefined;
}

/**
 * Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.
 *
 * @public
 */
export interface JobProgressSummary {
  /**
   * @public
   */
  TotalNumberOfTasks?: number | undefined;

  /**
   * @public
   */
  NumberOfTasksSucceeded?: number | undefined;

  /**
   * @public
   */
  NumberOfTasksFailed?: number | undefined;

  /**
   * The JobTimers attribute of a job's progress summary.
   *
   * @public
   */
  Timers?: JobTimers | undefined;
}

/**
 * A container element for the job configuration and status information returned by a `Describe Job` request.
 *
 * @public
 */
export interface JobDescriptor {
  /**
   * The ID for the specified job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.
   *
   * @public
   */
  ConfirmationRequired?: boolean | undefined;

  /**
   * The description for this job, if one was provided in this job's `Create Job` request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for this job.
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The current status of the specified job.
   *
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * The configuration information for the specified job's manifest object.
   *
   * @public
   */
  Manifest?: JobManifest | undefined;

  /**
   * The operation that the specified job is configured to run on the objects listed in the manifest.
   *
   * @public
   */
  Operation?: JobOperation | undefined;

  /**
   * The priority of the specified job.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.
   *
   * @public
   */
  ProgressSummary?: JobProgressSummary | undefined;

  /**
   * The reason for updating the job.
   *
   * @public
   */
  StatusUpdateReason?: string | undefined;

  /**
   * If the specified job failed, this field contains information describing the failure.
   *
   * @public
   */
  FailureReasons?: JobFailure[] | undefined;

  /**
   * Contains the configuration information for the job-completion report if you requested one in the `Create Job` request.
   *
   * @public
   */
  Report?: JobReport | undefined;

  /**
   * A timestamp indicating when this job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
   *
   * @public
   */
  TerminationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks for this job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The timestamp when this job was suspended, if it has been suspended.
   *
   * @public
   */
  SuspendedDate?: Date | undefined;

  /**
   * The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the `Suspended` state to await confirmation before running. After you confirm the job, it automatically exits the `Suspended` state.
   *
   * @public
   */
  SuspendedCause?: string | undefined;

  /**
   * The manifest generator that was used to generate a job manifest for this job.
   *
   * @public
   */
  ManifestGenerator?: JobManifestGenerator | undefined;

  /**
   * The attribute of the JobDescriptor containing details about the job's generated manifest.
   *
   * @public
   */
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor | undefined;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * Contains the configuration parameters and status for the job specified in the `Describe Job` request.
   *
   * @public
   */
  Job?: JobDescriptor | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.
   *
   * @public
   */
  RequestTokenARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationResult {
  /**
   * A container element containing the details of the asynchronous operation.
   *
   * @public
   */
  AsyncOperation?: AsyncOperation | undefined;
}

/**
 * @public
 */
export interface DissociateAccessGrantsIdentityCenterRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
   *
   * @public
   */
  AccessGrantId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantResult {
  /**
   * The date and time when you created the access grant.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
   *
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access grant.
   *
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added a corporate directory to Amazon Web Services IAM Identity Center and associated this Identity Center instance with the S3 Access Grants instance, the grantee can also be a corporate directory user or group.
   *
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * The type of permission that was granted in the access grant. Can be one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access.
   *
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * The S3 path of the data to which you are granting access. It is the result of appending the `Subprefix` to the location scope.
   *
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResult {
  /**
   * The Amazon Resource Name (ARN) of the S3 Access Grants instance.
   *
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * The ID of the S3 Access Grants instance. The ID is `default`. You can have one S3 Access Grants instance per Region per account.
   *
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @deprecated IdentityCenterArn has been deprecated. Use IdentityCenterInstanceArn or IdentityCenterApplicationArn.
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the [ListInstances](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html) API operation to retrieve a list of your Identity Center instances and their ARNs.
   *
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.
   *
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;

  /**
   * The date and time when you created the S3 Access Grants instance.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceForPrefixRequest {
  /**
   * The ID of the Amazon Web Services account that is making this request.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 prefix of the access grants that you would like to retrieve.
   *
   * @public
   */
  S3Prefix: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceForPrefixResult {
  /**
   * The Amazon Resource Name (ARN) of the S3 Access Grants instance.
   *
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * The ID of the S3 Access Grants instance. The ID is `default`. You can have one S3 Access Grants instance per Region per account.
   *
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResourcePolicyRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResourcePolicyResult {
  /**
   * The resource policy of the S3 Access Grants instance.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The Organization of the resource policy of the S3 Access Grants instance.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * The date and time when you created the S3 Access Grants instance resource policy.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsLocationRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the registered location that you are retrieving. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsLocationResult {
  /**
   * The date and time when you registered the location.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
   *
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registered location.
   *
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * The S3 URI path to the registered location. The location scope can be the default S3 location `s3://`, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
   *
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
   *
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point whose configuration information you want to retrieve.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>`. For example, to access the access point `reports-ap` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap`. The value must be URL encoded.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointResult {
  /**
   * The name of the specified access point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the bucket associated with the specified access point.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * Indicates whether this access point allows access from the public internet. If `VpcConfiguration` is specified for this access point, then `NetworkOrigin` is `VPC`, and the access point doesn't allow access from the public internet. Otherwise, `NetworkOrigin` is `Internet`, and the access point allows access from the public internet, subject to the access point and bucket access policies.
   *
   * This will always be true for an Amazon S3 on Outposts access point
   *
   * @public
   */
  NetworkOrigin?: NetworkOrigin | undefined;

  /**
   * Contains the virtual private cloud (VPC) configuration for the specified access point.
   *
   * > **Note:** This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services services.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * This data type is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * The date and time when the specified access point was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The name or alias of the access point.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The ARN of the access point.
   *
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * The VPC endpoint for the access point.
   *
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account ID associated with the S3 bucket associated with this access point.
   *
   * @public
   */
  BucketAccountId?: string | undefined;

  /**
   * The unique identifier for the data source of the access point.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The type of the data source that the access point is attached to.
   *
   * @public
   */
  DataSourceType?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point you want to return the configuration for.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaResult {
  /**
   * Object Lambda Access Point configuration document.
   *
   * @public
   */
  Configuration?: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaResult {
  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Configuration to block all public access. This setting is turned on and can not be edited.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * The date and time when the specified Object Lambda Access Point was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The alias of the Object Lambda Access Point.
   *
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyRequest {
  /**
   * The account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point whose policy you want to retrieve.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>`. For example, to access the access point `reports-ap` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap`. The value must be URL encoded.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyResult {
  /**
   * The access point policy associated with the specified access point.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaResult {
  /**
   * Object Lambda Access Point resource policy document.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusRequest {
  /**
   * The account ID for the account that owns the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point whose policy status you want to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface PolicyStatus {
  /**
   * @public
   */
  IsPublic?: boolean | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusResult {
  /**
   * Indicates the current policy status of the specified access point.
   *
   * @public
   */
  PolicyStatus?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  /**
   * Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  PolicyStatus?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetAccessPointScopeRequest {
  /**
   * The Amazon Web Services account ID that owns the access point with the scope that you want to retrieve.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point with the scope you want to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointScopeResult {
  /**
   * The contents of the access point scope.
   *
   * @public
   */
  Scope?: Scope | undefined;
}

/**
 * @public
 */
export interface GetBucketRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketResult {
  /**
   * The Outposts bucket requested.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * @public
   */
  PublicAccessBlockEnabled?: boolean | undefined;

  /**
   * The creation date of the Outposts bucket.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * The container of the Outposts bucket lifecycle expiration.
 *
 * @public
 */
export interface LifecycleExpiration {
  /**
   * Indicates at what date the object is to be deleted. Should be in GMT ISO 8601 format.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired. If set to false, the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy. To learn more about delete markers, see [Working with delete markers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html).
   *
   * @public
   */
  ExpiredObjectDeleteMarker?: boolean | undefined;
}

/**
 * The container for the Outposts bucket lifecycle rule and operator.
 *
 * @public
 */
export interface LifecycleRuleAndOperator {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * All of these tags must exist in the object's tag set in order for the rule to apply.
   *
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * The non-inclusive minimum object size for the lifecycle rule. Setting this property to 7 means the rule applies to objects with a size that is greater than 7.
   *
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * The non-inclusive maximum object size for the lifecycle rule. Setting this property to 77 means the rule applies to objects with a size that is less than 77.
   *
   * @public
   */
  ObjectSizeLessThan?: number | undefined;
}

/**
 * The container for the filter of the lifecycle rule.
 *
 * @public
 */
export interface LifecycleRuleFilter {
  /**
   * Prefix identifying one or more objects to which the rule applies.
   *
   * > **Important:** When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see [XML-related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A container for a key-value name pair.
   *
   * @public
   */
  Tag?: S3Tag | undefined;

  /**
   * The container for the `AND` condition for the lifecycle rule.
   *
   * @public
   */
  And?: LifecycleRuleAndOperator | undefined;

  /**
   * Minimum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * Maximum object size to which the rule applies.
   *
   * @public
   */
  ObjectSizeLessThan?: number | undefined;
}

/**
 * The container of the noncurrent version expiration.
 *
 * @public
 */
export interface NoncurrentVersionExpiration {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many more recent noncurrent versions, S3 on Outposts will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  NewerNoncurrentVersions?: number | undefined;
}

/**
 * The container for the noncurrent version transition.
 *
 * @public
 */
export interface NoncurrentVersionTransition {
  /**
   * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * The class of storage used to store the object.
   *
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;
}

/**
 * Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see [Transitioning objects using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface Transition {
  /**
   * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.
   *
   * @public
   */
  Days?: number | undefined;

  /**
   * The storage class to which you want the object to transition.
   *
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;
}

/**
 * The container for the Outposts bucket lifecycle rule.
 *
 * @public
 */
export interface LifecycleRule {
  /**
   * Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.
   *
   * @public
   */
  Expiration?: LifecycleExpiration | undefined;

  /**
   * Unique identifier for the rule. The value cannot be longer than 255 characters.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * The container for the filter of lifecycle rule.
   *
   * @public
   */
  Filter?: LifecycleRuleFilter | undefined;

  /**
   * If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.
   *
   * @public
   */
  Status: ExpirationStatus | undefined;

  /**
   * Specifies when an Amazon S3 object transitions to a specified storage class.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  Transitions?: Transition[] | undefined;

  /**
   * Specifies the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to a specific storage class at a set period in the object's lifetime.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[] | undefined;

  /**
   * The noncurrent version expiration of the lifecycle rule.
   *
   * @public
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration | undefined;

  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 waits before permanently removing all parts of the upload. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationResult {
  /**
   * Container for the lifecycle rule of the Outposts bucket.
   *
   * @public
   */
  Rules?: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyResult {
  /**
   * The policy of the Outposts bucket.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket to get the replication information for.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * Specifies whether S3 on Outposts replicates delete markers. If you specify a `Filter` element in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` element's `Status` child element must be set to `Disabled`, because S3 on Outposts does not support replicating delete markers for tag-based rules.
 *
 * For more information about delete marker replication, see [How delete operations affect replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface DeleteMarkerReplication {
  /**
   * Indicates whether to replicate delete markers.
   *
   * @public
   */
  Status: DeleteMarkerReplicationStatus | undefined;
}

/**
 * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects. If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Specifies the ID of the customer managed KMS key that's stored in Key Management Service (KMS) for the destination bucket. This ID is either the Amazon Resource Name (ARN) for the KMS key or the alias ARN for the KMS key. Amazon S3 uses this KMS key to encrypt replica objects. Amazon S3 supports only symmetric encryption KMS keys. For more information, see [Symmetric encryption KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  ReplicaKmsKeyID?: string | undefined;
}

/**
 * A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for the replication metrics `EventThreshold` element.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface ReplicationTimeValue {
  /**
   * Contains an integer that specifies the time period in minutes.
   *
   * Valid value: 15
   *
   * @public
   */
  Minutes?: number | undefined;
}

/**
 * A container that specifies replication metrics-related settings.
 *
 * @public
 */
export interface Metrics {
  /**
   * Specifies whether replication metrics are enabled.
   *
   * @public
   */
  Status: MetricsStatus | undefined;

  /**
   * A container that specifies the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  EventThreshold?: ReplicationTimeValue | undefined;
}

/**
 * A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface ReplicationTime {
  /**
   * Specifies whether S3 Replication Time Control (S3 RTC) is enabled.
   *
   * @public
   */
  Status: ReplicationTimeStatus | undefined;

  /**
   * A container that specifies the time by which replication should be complete for all objects and operations on objects.
   *
   * @public
   */
  Time: ReplicationTimeValue | undefined;
}

/**
 * Specifies information about the replication destination bucket and its settings for an S3 on Outposts replication configuration.
 *
 * @public
 */
export interface Destination {
  /**
   * The destination bucket owner's account ID.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access point for the destination bucket where you want S3 on Outposts to store the replication results.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * A container that specifies S3 Replication Time Control (S3 RTC) settings, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  ReplicationTime?: ReplicationTime | undefined;

  /**
   * Specify this property only in a cross-account scenario (where the source and destination bucket owners are not the same), and you want to change replica ownership to the Amazon Web Services account that owns the destination bucket. If this property is not specified in the replication configuration, the replicas are owned by same Amazon Web Services account that owns the source object.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  AccessControlTranslation?: AccessControlTranslation | undefined;

  /**
   * A container that provides information about encryption. If `SourceSelectionCriteria` is specified, you must specify this element.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * A container that specifies replication metrics-related settings.
   *
   * @public
   */
  Metrics?: Metrics | undefined;

  /**
   * The storage class to use when replicating objects. All objects stored on S3 on Outposts are stored in the `OUTPOSTS` storage class. S3 on Outposts uses the `OUTPOSTS` storage class to create the object replicas.
   *
   * > **Note:** Values other than `OUTPOSTS` aren't supported by Amazon S3 on Outposts.
   *
   * @public
   */
  StorageClass?: ReplicationStorageClass | undefined;
}

/**
 * An optional configuration to replicate existing source bucket objects.
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface ExistingObjectReplication {
  /**
   * Specifies whether Amazon S3 replicates existing source bucket objects.
   *
   * @public
   */
  Status: ExistingObjectReplicationStatus | undefined;
}

/**
 * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter.
 *
 * For example:
 *
 * - If you specify both a `Prefix` and a `Tag` filter, wrap these filters in an `And` element.
 * - If you specify a filter based on multiple tags, wrap the `Tag` elements in an `And` element.
 *
 * @public
 */
export interface ReplicationRuleAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects that the rule applies to.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * An array of tags that contain key and value pairs.
   *
   * @public
   */
  Tags?: S3Tag[] | undefined;
}

/**
 * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` element must specify exactly one `Prefix`, `Tag`, or `And` child element.
 *
 * @public
 */
export interface ReplicationRuleFilter {
  /**
   * An object key name prefix that identifies the subset of objects that the rule applies to.
   *
   * > **Important:** When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see [XML-related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A container for a key-value name pair.
   *
   * @public
   */
  Tag?: S3Tag | undefined;

  /**
   * A container for specifying rule filters. The filters determine the subset of objects that the rule applies to. This element is required only if you specify more than one filter. For example:
   *
   * - If you specify both a `Prefix` and a `Tag` filter, wrap these filters in an `And` element.
   * - If you specify a filter based on multiple tags, wrap the `Tag` elements in an `And` element.
   *
   * @public
   */
  And?: ReplicationRuleAndOperator | undefined;
}

/**
 * A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.
 *
 * To replicate object metadata modifications on replicas, you can specify this element and set the `Status` of this element to `Enabled`.
 *
 * > **Note:** You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.
 *
 * @public
 */
export interface ReplicaModifications {
  /**
   * Specifies whether S3 on Outposts replicates modifications to object metadata on replicas.
   *
   * @public
   */
  Status: ReplicaModificationsStatus | undefined;
}

/**
 * A container for filter information that you can use to select S3 objects that are encrypted with Key Management Service (KMS).
 *
 * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
 *
 * @public
 */
export interface SseKmsEncryptedObjects {
  /**
   * Specifies whether Amazon S3 replicates objects that are created with server-side encryption by using an KMS key stored in Key Management Service.
   *
   * @public
   */
  Status: SseKmsEncryptedObjectsStatus | undefined;
}

/**
 * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
 *
 * @public
 */
export interface SourceSelectionCriteria {
  /**
   * A filter that you can use to select Amazon S3 objects that are encrypted with server-side encryption by using Key Management Service (KMS) keys. If you include `SourceSelectionCriteria` in the replication configuration, this element is required.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects | undefined;

  /**
   * A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.
   *
   * To replicate object metadata modifications on replicas, you can specify this element and set the `Status` of this element to `Enabled`.
   *
   * > **Note:** You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.
   *
   * @public
   */
  ReplicaModifications?: ReplicaModifications | undefined;
}

/**
 * Specifies which S3 on Outposts objects to replicate and where to store the replicas.
 *
 * @public
 */
export interface ReplicationRule {
  /**
   * A unique identifier for the rule. The maximum value is 255 characters.
   *
   * @public
   */
  ID?: string | undefined;

  /**
   * The priority indicates which rule has precedence whenever two or more replication rules conflict. S3 on Outposts attempts to replicate objects according to all replication rules. However, if there are two or more rules with the same destination Outposts bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.
   *
   * For more information, see [Creating replication rules on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-between-outposts.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in an Outposts bucket, specify an empty string.
   *
   * > **Important:** When you're using XML requests, you must replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes. For more information, see [XML-related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) in the *Amazon S3 User Guide*.
   *
   * @deprecated Prefix has been deprecated.
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` element must specify exactly one `Prefix`, `Tag`, or `And` child element.
   *
   * @public
   */
  Filter?: ReplicationRuleFilter | undefined;

  /**
   * Specifies whether the rule is enabled.
   *
   * @public
   */
  Status: ReplicationRuleStatus | undefined;

  /**
   * A container that describes additional filters for identifying the source Outposts objects that you want to replicate. You can choose to enable or disable the replication of these objects.
   *
   * @public
   */
  SourceSelectionCriteria?: SourceSelectionCriteria | undefined;

  /**
   * An optional configuration to replicate existing source bucket objects.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  ExistingObjectReplication?: ExistingObjectReplication | undefined;

  /**
   * A container for information about the replication destination and its configurations.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * Specifies whether S3 on Outposts replicates delete markers. If you specify a `Filter` element in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` element's `Status` child element must be set to `Disabled`, because S3 on Outposts doesn't support replicating delete markers for tag-based rules.
   *
   * For more information about delete marker replication, see [How delete operations affect replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  DeleteMarkerReplication?: DeleteMarkerReplication | undefined;

  /**
   * The Amazon Resource Name (ARN) of the access point for the source Outposts bucket that you want S3 on Outposts to replicate the objects from.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.
 *
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes when replicating objects. For information about S3 replication on Outposts configuration, see [Setting up replication](https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-how-setup.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * A container for one or more replication rules. A replication configuration must have at least one rule and can contain an array of 100 rules at the most.
   *
   * @public
   */
  Rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationResult {
  /**
   * A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.
   *
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingResult {
  /**
   * The tags set of the Outposts bucket.
   *
   * @public
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningRequest {
  /**
   * The Amazon Web Services account ID of the S3 on Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 on Outposts bucket to return the versioning state for.
   *
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningResult {
  /**
   * The versioning state of the S3 on Outposts bucket.
   *
   * @public
   */
  Status?: BucketVersioningStatus | undefined;

  /**
   * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is returned only if the bucket has been configured with MFA delete. If MFA delete has never been configured for the bucket, this element is not returned.
   *
   * @public
   */
  MFADelete?: MFADeleteStatus | undefined;
}

/**
 * @public
 */
export interface GetDataAccessRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 URI path of the data to which you are requesting temporary access credentials. If the requesting account has an access grant for this data, S3 Access Grants vends temporary access credentials in the response.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The type of permission granted to your S3 data, which can be set to one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission: Permission | undefined;

  /**
   * The session duration, in seconds, of the temporary access credential that S3 Access Grants vends to the grantee or client application. The default value is 1 hour, but the grantee can specify a range from 900 seconds (15 minutes) up to 43200 seconds (12 hours). If the grantee requests a value higher than this maximum, the operation fails.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * The scope of the temporary access credential that S3 Access Grants vends to the grantee or client application.
   *
   * - `Default` – The scope of the returned temporary access token is the scope of the grant that is closest to the target scope.
   * - `Minimal` – The scope of the returned temporary access token is the same as the requested target scope as long as the requested scope is the same as or a subset of the grant scope.
   *
   * @public
   */
  Privilege?: Privilege | undefined;

  /**
   * The type of `Target`. The only possible value is `Object`. Pass this value if the target data that you would like to access is a path to an object. Do not pass this value if the target data is a bucket or a bucket and a prefix.
   *
   * @public
   */
  TargetType?: S3PrefixType | undefined;

  /**
   * The context to identify the job or query associated with the credential request. This information will be displayed in CloudTrail log in your account.
   *
   * @public
   */
  AuditContext?: string | undefined;
}

/**
 * The Amazon Web Services Security Token Service temporary credential that S3 Access Grants vends to grantees and client applications.
 *
 * @public
 */
export interface Credentials {
  /**
   * The unique access key ID of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret access key of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications.
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications.
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The expiration date and time of the temporary credential that S3 Access Grants vends to grantees and client applications.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetDataAccessResult {
  /**
   * The temporary credential token that S3 Access Grants vends.
   *
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * The S3 URI path of the data to which you are being granted temporary access credentials.
   *
   * @public
   */
  MatchedGrantTarget?: string | undefined;

  /**
   * The user, group, or role that was granted access to the S3 location scope. For directory identities, this API also returns the grants of the IAM role used for the identity-aware request. For more information on identity-aware sessions, see [Granting permissions to use identity-aware console sessions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_sts-setcontext.html).
   *
   * @public
   */
  Grantee?: Grantee | undefined;
}

/**
 * @public
 */
export interface GetJobTaggingRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID for the S3 Batch Operations job whose tags you want to retrieve.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobTaggingResult {
  /**
   * The set of tags associated with the S3 Batch Operations job.
   *
   * @public
   */
  Tags?: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see [Rules for naming Amazon S3 Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A combination of a bucket and Region that's part of a Multi-Region Access Point.
 *
 * @public
 */
export interface RegionReport {
  /**
   * The name of the bucket.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The name of the Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
   *
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * A collection of statuses for a Multi-Region Access Point in the various Regions it supports.
 *
 * @public
 */
export interface MultiRegionAccessPointReport {
  /**
   * The name of the Multi-Region Access Point.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see [Rules for naming Amazon S3 Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming).
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * When the Multi-Region Access Point create request was received.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * This data type is not supported for Amazon S3 on Outposts.
   *
   * @public
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration | undefined;

  /**
   * The current status of the Multi-Region Access Point.
   *
   * `CREATING` and `DELETING` are temporary states that exist while the request is propagating and being completed. If a Multi-Region Access Point has a status of `PARTIALLY_CREATED`, you can retry creation or send a request to delete the Multi-Region Access Point. If a Multi-Region Access Point has a status of `PARTIALLY_DELETED`, you can retry a delete request to finish the deletion of the Multi-Region Access Point.
   *
   * @public
   */
  Status?: MultiRegionAccessPointStatus | undefined;

  /**
   * A collection of the Regions and buckets associated with the Multi-Region Access Point.
   *
   * @public
   */
  Regions?: RegionReport[] | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointResult {
  /**
   * A container element containing the details of the requested Multi-Region Access Point.
   *
   * @public
   */
  AccessPoint?: MultiRegionAccessPointReport | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see [Rules for naming Amazon S3 Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The last established access control policy for a Multi-Region Access Point.
 *
 * When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.
 *
 * @public
 */
export interface EstablishedMultiRegionAccessPointPolicy {
  /**
   * The details of the last established policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * The proposed access control policy for the Multi-Region Access Point.
 *
 * When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.
 *
 * @public
 */
export interface ProposedMultiRegionAccessPointPolicy {
  /**
   * The details of the proposed policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * The Multi-Region Access Point access control policy.
 *
 * When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.
 *
 * @public
 */
export interface MultiRegionAccessPointPolicyDocument {
  /**
   * The last established policy for the Multi-Region Access Point.
   *
   * @public
   */
  Established?: EstablishedMultiRegionAccessPointPolicy | undefined;

  /**
   * The proposed policy for the Multi-Region Access Point.
   *
   * @public
   */
  Proposed?: ProposedMultiRegionAccessPointPolicy | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyResult {
  /**
   * The policy associated with the specified Multi-Region Access Point.
   *
   * @public
   */
  Policy?: MultiRegionAccessPointPolicyDocument | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see [Rules for naming Amazon S3 Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusResult {
  /**
   * Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Established?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Multi-Region Access Point ARN.
   *
   * @public
   */
  Mrap: string | undefined;
}

/**
 * A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but passive routes are not eligible to process Amazon S3 requests.
 *
 * Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located in. The route also includes the `TrafficDialPercentage` value, which shows whether the bucket and Region are active (indicated by a value of `100`) or passive (indicated by a value of `0`).
 *
 * @public
 */
export interface MultiRegionAccessPointRoute {
  /**
   * The name of the Amazon S3 bucket for which you'll submit a routing configuration change. Either the `Bucket` or the `Region` value must be provided. If both are provided, the bucket must be in the specified Region.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either the `Bucket` or the `Region` value must be provided. If both are provided, the bucket must be in the specified Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The traffic state for the specified bucket or Amazon Web Services Region.
   *
   * A value of `0` indicates a passive state, which means that no new traffic will be routed to the Region.
   *
   * A value of `100` indicates an active state, which means that traffic will be routed to the specified Region.
   *
   * When the routing configuration for a Region is changed from active to passive, any in-progress operations (uploads, copies, deletes, and so on) to the formerly active Region will continue to run to until a final success or failure status is reached.
   *
   * If all Regions in the routing configuration are designated as passive, you'll receive an `InvalidRequest` error.
   *
   * @public
   */
  TrafficDialPercentage: number | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesResult {
  /**
   * The Multi-Region Access Point ARN.
   *
   * @public
   */
  Mrap?: string | undefined;

  /**
   * The different routes that make up the route configuration. Active routes return a value of `100`, and passive routes return a value of `0`.
   *
   * @public
   */
  Routes?: MultiRegionAccessPointRoute[] | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockOutput {
  /**
   * The `PublicAccessBlock` configuration currently in effect for this Amazon Web Services account.
   *
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockRequest {
  /**
   * The account ID for the Amazon Web Services account whose `PublicAccessBlock` configuration you want to retrieve.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationRequest {
  /**
   * The ID of the Amazon S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * The Amazon Web Services organization for your S3 Storage Lens.
 *
 * @public
 */
export interface StorageLensAwsOrg {
  /**
   * A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property is read-only and follows the following format: `arn:aws:organizations:us-east-1:example-account-id:organization/o-ex2l495dck`
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.
 *
 * For more information about publishing S3 Storage Lens metrics to CloudWatch, see [Monitor S3 Storage Lens metrics in CloudWatch](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface CloudWatchMetrics {
  /**
   * A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A value of `true` indicates that CloudWatch publishing for S3 Storage Lens metrics is enabled.
   *
   * @public
   */
  IsEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface SSEKMS {
  /**
   * A container for the ARN of the SSE-KMS encryption. This property is read-only and follows the following format: `arn:aws:kms:us-east-1:example-account-id:key/example-9a73-4afc-8d29-8f5900cef44e`
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface SSES3 {}

/**
 * A container for the encryption of the S3 Storage Lens metrics exports.
 *
 * @public
 */
export interface StorageLensDataExportEncryption {
  /**
   * @public
   */
  SSES3?: SSES3 | undefined;

  /**
   * @public
   */
  SSEKMS?: SSEKMS | undefined;
}

/**
 * A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.
 *
 * @public
 */
export interface S3BucketDestination {
  /**
   * @public
   */
  Format: Format | undefined;

  /**
   * The schema version of the export file.
   *
   * @public
   */
  OutputSchemaVersion: OutputSchemaVersion | undefined;

  /**
   * The account ID of the owner of the S3 Storage Lens metrics export bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the following format: `arn:aws:s3:us-east-1:example-account-id:bucket/your-destination-bucket-name`
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The prefix of the destination bucket where the metrics export will be delivered.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The container for the type encryption of the metrics exports in this bucket.
   *
   * @public
   */
  Encryption?: StorageLensDataExportEncryption | undefined;
}

/**
 * A container for configuring your S3 Storage Lens reports to export to read-only S3 table buckets. This parameter enables you to store your Storage Lens metrics in a structured, queryable table format in Apache Iceberg.
 *
 * For more information about S3 Storage Lens, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface StorageLensTableDestination {
  /**
   * A container that indicates whether the export to read-only S3 table buckets is enabled for your S3 Storage Lens configuration. When set to true, Storage Lens reports are automatically exported to tables in addition to other configured destinations.
   *
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * A container for the encryption of the S3 Storage Lens metrics exports.
   *
   * @public
   */
  Encryption?: StorageLensDataExportEncryption | undefined;
}

/**
 * A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format.
 *
 * @public
 */
export interface StorageLensDataExport {
  /**
   * A container for the bucket where the S3 Storage Lens metrics export will be located.
   *
   * > **Note:** This bucket must be located in the same Region as the storage lens configuration.
   *
   * @public
   */
  S3BucketDestination?: S3BucketDestination | undefined;

  /**
   * A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.
   *
   * @public
   */
  CloudWatchMetrics?: CloudWatchMetrics | undefined;

  /**
   * A container for configuring S3 Storage Lens data exports to read-only S3 table buckets.
   *
   * @public
   */
  StorageLensTableDestination?: StorageLensTableDestination | undefined;
}

/**
 * A container for what Amazon S3 Storage Lens will exclude.
 *
 * @public
 */
export interface _Exclude {
  /**
   * A container for the S3 Storage Lens bucket excludes.
   *
   * @public
   */
  Buckets?: string[] | undefined;

  /**
   * A container for the S3 Storage Lens Region excludes.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * A container for your S3 Storage Lens expanded prefix metrics report configuration. Unlike the default Storage Lens metrics report, the enhanced prefix metrics report includes all S3 Storage Lens storage and activity data related to the full list of prefixes in your Storage Lens configuration.
 *
 * @public
 */
export interface StorageLensExpandedPrefixesDataExport {
  /**
   * A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.
   *
   * @public
   */
  S3BucketDestination?: S3BucketDestination | undefined;

  /**
   * A container for the bucket where the S3 Storage Lens metric export files are located. At least one export destination must be specified.
   *
   * @public
   */
  StorageLensTableDestination?: StorageLensTableDestination | undefined;
}

/**
 * A container for what Amazon S3 Storage Lens configuration includes.
 *
 * @public
 */
export interface Include {
  /**
   * A container for the S3 Storage Lens bucket includes.
   *
   * @public
   */
  Buckets?: string[] | undefined;

  /**
   * A container for the S3 Storage Lens Region includes.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * A container for the Amazon S3 Storage Lens configuration.
 *
 * @public
 */
export interface StorageLensConfiguration {
  /**
   * A container for the Amazon S3 Storage Lens configuration ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A container for all the account-level configurations of your S3 Storage Lens configuration.
   *
   * @public
   */
  AccountLevel: AccountLevel | undefined;

  /**
   * A container for what is included in this configuration. This container can only be valid if there is no `Exclude` container submitted, and it's not empty.
   *
   * @public
   */
  Include?: Include | undefined;

  /**
   * A container for what is excluded in this configuration. This container can only be valid if there is no `Include` container submitted, and it's not empty.
   *
   * @public
   */
  Exclude?: _Exclude | undefined;

  /**
   * A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and format.
   *
   * @public
   */
  DataExport?: StorageLensDataExport | undefined;

  /**
   * A container that configures your S3 Storage Lens expanded prefixes metrics report.
   *
   * @public
   */
  ExpandedPrefixesDataExport?: StorageLensExpandedPrefixesDataExport | undefined;

  /**
   * A container for whether the S3 Storage Lens configuration is enabled.
   *
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * A container for the Amazon Web Services organization for this S3 Storage Lens configuration.
   *
   * @public
   */
  AwsOrg?: StorageLensAwsOrg | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only and follows the following format: `arn:aws:s3:us-east-1:example-account-id:storage-lens/your-dashboard-name`
   *
   * @public
   */
  StorageLensArn?: string | undefined;

  /**
   * A container for all prefix delimiters that are used for object keys in this S3 Storage Lens configuration. The prefix delimiters determine how S3 Storage Lens counts prefix depth, by separating the hierarchical levels in object keys.
   *
   * > **Note:**
   * >
   * > - If either a prefix delimiter or existing delimiter is undefined, Amazon S3 uses the delimiter that’s defined.
   * > - If both the prefix delimiter and existing delimiter are undefined, S3 uses `/` as the default delimiter.
   * > - When custom delimiters are used, both the prefix delimiter and existing delimiter must specify the same special character. Otherwise, your request results in an error.
   *
   * @public
   */
  PrefixDelimiter?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationResult {
  /**
   * The S3 Storage Lens configuration requested.
   *
   * @public
   */
  StorageLensConfiguration?: StorageLensConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingRequest {
  /**
   * The ID of the Amazon S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface StorageLensTag {
  /**
   * @public
   */
  Key: string | undefined;

  /**
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingResult {
  /**
   * The tags of S3 Storage Lens configuration requested.
   *
   * @public
   */
  Tags?: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface GetStorageLensGroupRequest {
  /**
   * The name of the Storage Lens group that you're trying to retrieve the configuration details for.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the Storage Lens group that you're trying to retrieve the details for.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensGroupResult {
  /**
   * The name of the Storage Lens group that you're trying to retrieve the configuration details for.
   *
   * @public
   */
  StorageLensGroup?: StorageLensGroup | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access grants that you would like returned in the `List Access Grants` response. If the results include the pagination token `NextToken`, make another call using the `NextToken` to determine if there are more results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The type of the grantee to which access has been granted. It can be one of the following values:
   *
   * - `IAM` - An IAM user or role.
   * - `DIRECTORY_USER` - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
   * - `DIRECTORY_GROUP` - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
   *
   * @public
   */
  GranteeType?: GranteeType | undefined;

  /**
   * The unique identifer of the `Grantee`. If the grantee type is `IAM`, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.
   *
   * @public
   */
  GranteeIdentifier?: string | undefined;

  /**
   * The type of permission granted to your S3 data, which can be set to one of the following values:
   *
   * - `READ` – Grant read-only access to the S3 data.
   * - `WRITE` – Grant write-only access to the S3 data.
   * - `READWRITE` – Grant both read and write access to the S3 data.
   *
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The S3 path of the data to which you are granting access. It is the result of appending the `Subprefix` to the location scope.
   *
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsResult {
  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A container for a list of grants in an S3 Access Grants instance.
   *
   * @public
   */
  AccessGrantsList?: ListAccessGrantEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsInstancesRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants Instances` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access grants that you would like returned in the `List Access Grants` response. If the results include the pagination token `NextToken`, make another call using the `NextToken` to determine if there are more results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsInstancesResult {
  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants Instances` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A container for a list of S3 Access Grants instances.
   *
   * @public
   */
  AccessGrantsInstancesList?: ListAccessGrantsInstanceEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsLocationsRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants Locations` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access grants that you would like returned in the `List Access Grants` response. If the results include the pagination token `NextToken`, make another call using the `NextToken` to determine if there are more results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The S3 path to the location that you are registering. The location scope can be the default S3 location `s3://`, the S3 path to a bucket `s3://<bucket>`, or the S3 path to a bucket and prefix `s3://<bucket>/<prefix>`. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
   *
   * @public
   */
  LocationScope?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsLocationsResult {
  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Access Grants Locations` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A container for a list of registered locations in an S3 Access Grants instance.
   *
   * @public
   */
  AccessGrantsLocationsList?: ListAccessGrantsLocationsEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsRequest {
  /**
   * The Amazon Web Services account ID for the account that owns the specified access points.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the bucket whose associated access points you want to list.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * A continuation token. If a previous call to `ListAccessPoints` returned a continuation token in the `NextToken` field, then providing that value here causes Amazon S3 to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the `NextToken` field that you can use to retrieve the next page of access points.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique identifier for the data source of the access point.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The type of the data source that the access point is attached to. Returns only access points attached to S3 buckets by default. To return all access points specify `DataSourceType` as `ALL`.
   *
   * @public
   */
  DataSourceType?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsResult {
  /**
   * Contains identification and configuration information for one or more access points associated with the specified bucket.
   *
   * @public
   */
  AccessPointList?: AccessPoint[] | undefined;

  /**
   * If the specified bucket has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForDirectoryBucketsRequest {
  /**
   * The Amazon Web Services account ID that owns the access points.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the directory bucket associated with the access points you want to list.
   *
   * @public
   */
  DirectoryBucket?: string | undefined;

  /**
   * If `NextToken` is returned, there are more access points available than requested in the `maxResults` value. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access points that you would like returned in the `ListAccessPointsForDirectoryBuckets` response. If the directory bucket is associated with more than this number of access points, the results include the pagination token `NextToken`. Make another call using the `NextToken` to retrieve more results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForDirectoryBucketsResult {
  /**
   * Contains identification and configuration information for one or more access points associated with the directory bucket.
   *
   * @public
   */
  AccessPointList?: AccessPoint[] | undefined;

  /**
   * If `NextToken` is returned, there are more access points available than requested in the `maxResults` value. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the `NextToken` field that you can use to retrieve the next page of access points.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An access point with an attached Lambda function used to access transformed data from an Amazon S3 bucket.
 *
 * @public
 */
export interface ObjectLambdaAccessPoint {
  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the ARN for the Object Lambda Access Point.
   *
   * @public
   */
  ObjectLambdaAccessPointArn?: string | undefined;

  /**
   * The alias of the Object Lambda Access Point.
   *
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaResult {
  /**
   * Returns list of Object Lambda Access Points.
   *
   * @public
   */
  ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[] | undefined;

  /**
   * If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCallerAccessGrantsRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 path of the data that you would like to access. Must start with `s3://`. You can optionally pass only the beginning characters of a path, and S3 Access Grants will search for all applicable grants for the path fragment.
   *
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * A pagination token to request the next page of results. Pass this value into a subsequent `List Caller Access Grants` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of access grants that you would like returned in the `List Caller Access Grants` response. If the results include the pagination token `NextToken`, make another call using the `NextToken` to determine if there are more results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If this optional parameter is passed in the request, a filter is applied to the results. The results will include only the access grants for the caller's Identity Center application or for any other applications (`ALL`).
   *
   * @public
   */
  AllowedByApplication?: boolean | undefined;
}

/**
 * Part of `ListCallerAccessGrantsResult`. Each entry includes the permission level (READ, WRITE, or READWRITE) and the grant scope of the access grant. If the grant also includes an application ARN, the grantee can only access the S3 data through this application.
 *
 * @public
 */
export interface ListCallerAccessGrantsEntry {
  /**
   * The type of permission granted, which can be one of the following values:
   *
   * - `READ` - Grants read-only access to the S3 data.
   * - `WRITE` - Grants write-only access to the S3 data.
   * - `READWRITE` - Grants both read and write access to the S3 data.
   *
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * The S3 path of the data to which you have been granted access.
   *
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCallerAccessGrantsResult {
  /**
   * A pagination token that you can use to request the next page of results. Pass this value into a subsequent `List Caller Access Grants` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the caller's access grants that were created using S3 Access Grants and that grant the caller access to the S3 data of the Amazon Web Services account ID that was specified in the request.
   *
   * @public
   */
  CallerAccessGrantsList?: ListCallerAccessGrantsEntry[] | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The `List Jobs` request returns jobs that match the statuses listed in this element.
   *
   * @public
   */
  JobStatuses?: JobStatus[] | undefined;

  /**
   * A pagination token to request the next page of results. Use the token that Amazon S3 returned in the `NextToken` element of the `ListJobsResult` from the previous `List Jobs` request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of jobs that Amazon S3 will include in the `List Jobs` response. If there are more jobs than this number, the response will include a pagination token in the `NextToken` field to enable you to retrieve the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains the configuration and status information for a single job retrieved as part of a job list.
 *
 * @public
 */
export interface JobListDescriptor {
  /**
   * The ID for the specified job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The user-specified description that was included in the specified job's `Create Job` request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operation that the specified job is configured to run on every object listed in the manifest.
   *
   * @public
   */
  Operation?: OperationName | undefined;

  /**
   * The current priority for the specified job.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The specified job's current status.
   *
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * A timestamp indicating when the specified job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.
   *
   * @public
   */
  TerminationDate?: Date | undefined;

  /**
   * Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.
   *
   * @public
   */
  ProgressSummary?: JobProgressSummary | undefined;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * If the `List Jobs` request produced more than the maximum number of results, you can pass this value into a subsequent `List Jobs` request in order to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of current jobs and jobs that have ended within the last 30 days.
   *
   * @public
   */
  Jobs?: JobListDescriptor[] | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Not currently used. Do not use this parameter.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Not currently used. Do not use this parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsResult {
  /**
   * The list of Multi-Region Access Points associated with the user.
   *
   * @public
   */
  AccessPoints?: MultiRegionAccessPointReport[] | undefined;

  /**
   * If the specified bucket has more Multi-Region Access Points than can be returned in one call to this action, this field contains a continuation token. You can use this token tin subsequent calls to this action to retrieve additional Multi-Region Access Points.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * @public
   */
  NextToken?: string | undefined;

  /**
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The ID of the Outposts resource.
   *
   * > **Note:** This ID is required by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * The container for the regional bucket.
 *
 * @public
 */
export interface RegionalBucket {
  /**
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the regional bucket.
   *
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * @public
   */
  PublicAccessBlockEnabled: boolean | undefined;

  /**
   * The creation date of the regional bucket
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * The Outposts ID of the regional bucket.
   *
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsResult {
  /**
   * @public
   */
  RegionalBucketList?: RegionalBucket[] | undefined;

  /**
   * `NextToken` is sent when `isTruncated` is true, which means there are more buckets that can be listed. The next list requests to Amazon S3 can be continued with this `NextToken`. `NextToken` is obfuscated and is not a real key.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsRequest {
  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * A pagination token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Part of `ListStorageLensConfigurationResult`. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID.
 *
 * @public
 */
export interface ListStorageLensConfigurationEntry {
  /**
   * A container for the S3 Storage Lens configuration ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN of the S3 Storage Lens configuration. This property is read-only.
   *
   * @public
   */
  StorageLensArn: string | undefined;

  /**
   * A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in your designated S3 Storage Lens home Region.
   *
   * @public
   */
  HomeRegion: string | undefined;

  /**
   * A container for whether the S3 Storage Lens configuration is enabled. This property is required.
   *
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsResult {
  /**
   * If the request produced more than the maximum number of S3 Storage Lens configuration results, you can pass this value into a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of S3 Storage Lens configurations.
   *
   * @public
   */
  StorageLensConfigurationList?: ListStorageLensConfigurationEntry[] | undefined;
}

/**
 * @public
 */
export interface ListStorageLensGroupsRequest {
  /**
   * The Amazon Web Services account ID that owns the Storage Lens groups.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The token for the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Each entry contains a Storage Lens group that exists in the specified home Region.
 *
 * @public
 */
export interface ListStorageLensGroupEntry {
  /**
   * Contains the name of the Storage Lens group that exists in the specified home Region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is read-only.
   *
   * @public
   */
  StorageLensGroupArn: string | undefined;

  /**
   * Contains the Amazon Web Services Region where the Storage Lens group was created.
   *
   * @public
   */
  HomeRegion: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensGroupsResult {
  /**
   * If `NextToken` is returned, there are more Storage Lens groups results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of Storage Lens groups that exist in the specified home Region.
   *
   * @public
   */
  StorageLensGroupList?: ListStorageLensGroupEntry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Web Services account ID of the resource owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 resource that you want to list tags for. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * The Amazon Web Services resource tags that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyRequest {
  /**
   * The Amazon Web Services account ID of the S3 Access Grants instance.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The resource policy of the S3 Access Grants instance that you are updating.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The Organization of the resource policy of the S3 Access Grants instance.
   *
   * @public
   */
  Organization?: string | undefined;
}

/**
 * @public
 */
export interface PutAccessGrantsInstanceResourcePolicyResult {
  /**
   * The updated resource policy of the S3 Access Grants instance.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The Organization of the resource policy of the S3 Access Grants instance.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * The date and time when you created the S3 Access Grants instance resource policy.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PutAccessPointConfigurationForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Object Lambda Access Point configuration document.
   *
   * @public
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyRequest {
  /**
   * The Amazon Web Services account ID for owner of the bucket associated with the specified access point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point that you want to associate with the specified policy.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name>`. For example, to access the access point `reports-ap` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap`. The value must be URL encoded.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The policy that you want to apply to the specified access point. For more information about access point policies, see [Managing data access with Amazon S3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html) or [Managing access to shared datasets in directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutAccessPointPolicyForObjectLambdaRequest {
  /**
   * The account ID for the account that owns the specified Object Lambda Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the Object Lambda Access Point.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Object Lambda Access Point resource policy document.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutAccessPointScopeRequest {
  /**
   * The Amazon Web Services account ID that owns the access point with scope that you want to create or replace.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the access point with the scope that you want to create or replace.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Object prefixes, API operations, or a combination of both.
   *
   * @public
   */
  Scope: Scope | undefined;
}

/**
 * The container for the Outposts bucket lifecycle configuration.
 *
 * @public
 */
export interface LifecycleConfiguration {
  /**
   * A lifecycle rule for individual objects in an Outposts bucket.
   *
   * @public
   */
  Rules?: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The name of the bucket for which to set the configuration.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Container for lifecycle rules. You can add as many as 1,000 rules.
   *
   * @public
   */
  LifecycleConfiguration?: LifecycleConfiguration | undefined;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.
   *
   * > **Note:** This is not supported by Amazon S3 on Outposts buckets.
   *
   * @public
   */
  ConfirmRemoveSelfBucketAccess?: boolean | undefined;

  /**
   * The bucket policy as a JSON document.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Specifies the S3 on Outposts bucket to set the configuration for.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * @public
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface Tagging {
  /**
   * A collection for a set of tags.
   *
   * @public
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * The Amazon Web Services account ID of the Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the bucket.
   *
   * For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.
   *
   * For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format `arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name>`. For example, to access the bucket `reports` through Outpost `my-outpost` owned by account `123456789012` in Region `us-west-2`, use the URL encoding of `arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports`. The value must be URL encoded.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * @public
   */
  Tagging: Tagging | undefined;
}

/**
 * Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see [PutBucketVersioning](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html).
 *
 * @public
 */
export interface VersioningConfiguration {
  /**
   * Specifies whether MFA delete is enabled or disabled in the bucket versioning configuration for the S3 on Outposts bucket.
   *
   * @public
   */
  MFADelete?: MFADelete | undefined;

  /**
   * Sets the versioning state of the S3 on Outposts bucket.
   *
   * @public
   */
  Status?: BucketVersioningStatus | undefined;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * The Amazon Web Services account ID of the S3 on Outposts bucket.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 on Outposts bucket to set the versioning state for.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
   *
   * @public
   */
  MFA?: string | undefined;

  /**
   * The root-level tag for the `VersioningConfiguration` parameters.
   *
   * @public
   */
  VersioningConfiguration: VersioningConfiguration | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingRequest {
  /**
   * The Amazon Web Services account ID associated with the S3 Batch Operations job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID for the S3 Batch Operations job whose tags you want to replace.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The set of tags to associate with the S3 Batch Operations job.
   *
   * @public
   */
  Tags: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface PutJobTaggingResult {}

/**
 * @public
 */
export interface PutMultiRegionAccessPointPolicyRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * An idempotency token used to identify the request and guarantee that requests are unique.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A container element containing the details of the policy for the Multi-Region Access Point.
   *
   * @public
   */
  Details: PutMultiRegionAccessPointPolicyInput | undefined;
}

/**
 * @public
 */
export interface PutMultiRegionAccessPointPolicyResult {
  /**
   * The request token associated with the request. You can use this token with [DescribeMultiRegionAccessPointOperation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html) to determine the status of asynchronous requests.
   *
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * The `PublicAccessBlock` configuration that you want to apply to the specified Amazon Web Services account.
   *
   * @public
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * The account ID for the Amazon Web Services account whose `PublicAccessBlock` configuration you want to set.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationRequest {
  /**
   * The ID of the S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The S3 Storage Lens configuration.
   *
   * @public
   */
  StorageLensConfiguration: StorageLensConfiguration | undefined;

  /**
   * The tag set of the S3 Storage Lens configuration.
   *
   * > **Note:** You can set up to a maximum of 50 tags.
   *
   * @public
   */
  Tags?: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationTaggingRequest {
  /**
   * The ID of the S3 Storage Lens configuration.
   *
   * @public
   */
  ConfigId: string | undefined;

  /**
   * The account ID of the requester.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The tag set of the S3 Storage Lens configuration.
   *
   * > **Note:** You can set up to a maximum of 50 tags.
   *
   * @public
   */
  Tags: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface PutStorageLensConfigurationTaggingResult {}

/**
 * @public
 */
export interface SubmitMultiRegionAccessPointRoutesRequest {
  /**
   * The Amazon Web Services account ID for the owner of the Multi-Region Access Point.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Multi-Region Access Point ARN.
   *
   * @public
   */
  Mrap: string | undefined;

  /**
   * The different routes that make up the new route configuration. Active routes return a value of `100`, and passive routes return a value of `0`.
   *
   * @public
   */
  RouteUpdates: MultiRegionAccessPointRoute[] | undefined;
}

/**
 * @public
 */
export interface SubmitMultiRegionAccessPointRoutesResult {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 resource that you're applying tags to. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The Amazon Web Services resource tags that you want to add to the specified S3 resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Web Services account ID that owns the resource that you're trying to remove the tags from.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 resource that you're removing tags from. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The array of tag key-value pairs that you're trying to remove from of the S3 resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}
