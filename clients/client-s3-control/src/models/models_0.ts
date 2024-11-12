// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { S3ControlServiceException as __BaseException } from "./S3ControlServiceException";

/**
 * <p>The container for abort incomplete multipart upload</p>
 * @public
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload to
   *          the Outposts bucket.</p>
   * @public
   */
  DaysAfterInitiation?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OwnerOverride = {
  Destination: "Destination",
} as const;

/**
 * @public
 */
export type OwnerOverride = (typeof OwnerOverride)[keyof typeof OwnerOverride];

/**
 * <p>A container for information about access control for replicas.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface AccessControlTranslation {
  /**
   * <p>Specifies the replica ownership.</p>
   * @public
   */
  Owner: OwnerOverride | undefined;
}

/**
 * <p>Information about the S3 Access Grants instance.</p>
 * @public
 */
export interface ListAccessGrantsInstanceEntry {
  /**
   * <p>The ID of the S3 Access Grants instance. The ID is <code>default</code>. You can have one S3 Access Grants instance per Region per account. </p>
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Access Grants instance. </p>
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * <p>The date and time when you created the S3 Access Grants instance. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * @deprecated
   *
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs.</p>
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * <p>The configuration options of the S3 Access Grants location. It contains the <code>S3SubPrefix</code> field. The grant scope, the data to which you are granting access, is the result of appending the <code>Subprefix</code> field to the scope of the registered location.</p>
 * @public
 */
export interface AccessGrantsLocationConfiguration {
  /**
   * <p>The <code>S3SubPrefix</code> is appended to the location scope creating the grant scope. Use this field to narrow the scope of the grant to a subset of the location scope. This field is required if the location scope is the default location <code>s3://</code> because you cannot create a grant for all of your S3 data in the Region and must narrow the scope. For example, if the location scope is the default location <code>s3://</code>, the <code>S3SubPrefx</code> can be a <bucket-name>/*, so the full grant scope path would be <code>s3://<bucket-name>/*</code>. Or the <code>S3SubPrefx</code> can be <code><bucket-name>/<prefix-name>*</code>, so the full grant scope path would be or <code>s3://<bucket-name>/<prefix-name>*</code>.</p>
   *          <p>If the <code>S3SubPrefix</code> includes a prefix, append the wildcard character <code>*</code> after the prefix to indicate that you want to include all object key names in the bucket that start with that prefix. </p>
   * @public
   */
  S3SubPrefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GranteeType = {
  DIRECTORY_GROUP: "DIRECTORY_GROUP",
  DIRECTORY_USER: "DIRECTORY_USER",
  IAM: "IAM",
} as const;

/**
 * @public
 */
export type GranteeType = (typeof GranteeType)[keyof typeof GranteeType];

/**
 * <p>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.</p>
 * @public
 */
export interface Grantee {
  /**
   * <p>The type of the grantee to which access has been granted. It can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IAM</code> - An IAM user or role.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECTORY_USER</code> - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECTORY_GROUP</code> - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GranteeType?: GranteeType | undefined;

  /**
   * <p>The unique identifier of the <code>Grantee</code>. If the grantee type is <code>IAM</code>, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.</p>
   * @public
   */
  GranteeIdentifier?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  READ: "READ",
  READWRITE: "READWRITE",
  WRITE: "WRITE",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * <p>Information about the access grant.</p>
 * @public
 */
export interface ListAccessGrantEntry {
  /**
   * <p>The date and time when you created the S3 Access Grants instance. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</p>
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access grant. </p>
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * <p>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.</p>
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * <p>The type of access granted to your S3 data, which can be set to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. </p>
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * <p>The S3 path of the data to which you are granting access. It is the result of appending the <code>Subprefix</code> to the location scope.</p>
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * <p>A container for information about the registered location.</p>
 * @public
 */
export interface ListAccessGrantsLocationsEntry {
  /**
   * <p>The date and time when you registered the location. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registered location. </p>
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * <p>The S3 path to the location that you are registering. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the <code>engineering/</code> prefix or object key names that start with the <code>marketing/campaigns/</code> prefix.</p>
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkOrigin = {
  Internet: "Internet",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type NetworkOrigin = (typeof NetworkOrigin)[keyof typeof NetworkOrigin];

/**
 * <p>The virtual private cloud (VPC) configuration for an access point.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>If this field is specified, this access point will only allow connections from the specified VPC
   *          ID.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>An access point used to access a bucket.</p>
 * @public
 */
export interface AccessPoint {
  /**
   * <p>The name of this access point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   * @public
   */
  NetworkOrigin: NetworkOrigin | undefined;

  /**
   * <p>The virtual private cloud (VPC) configuration for this access point, if one exists.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services services.</p>
   *          </note>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The name of the bucket associated with this access point.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The ARN for the access point.</p>
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * <p>The name or alias of the access point.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * <p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details
 *          about how your storage is requested, such as requests (for example, All requests, Get
 *          requests, Put requests), bytes uploaded or downloaded, and errors.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface ActivityMetrics {
  /**
   * <p>A container that indicates whether activity metrics are enabled.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * <p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced
 *          cost-optimization metrics provide insights that you can use to manage and optimize your
 *          storage costs, for example, lifecycle rule counts for transitions, expirations, and
 *          incomplete multipart uploads.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface AdvancedCostOptimizationMetrics {
  /**
   * <p>A container that indicates whether advanced cost-optimization metrics are
   *          enabled.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * <p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced
 *          data-protection metrics provide insights that you can use to perform audits and protect
 *          your data, for example replication rule counts within and across Regions.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface AdvancedDataProtectionMetrics {
  /**
   * <p>A container that indicates whether advanced data-protection metrics are enabled.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * <p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status
 *          code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403
 *             Forbidden</code>, <code>503 Service Unavailable</code> and others. </p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface DetailedStatusCodesMetrics {
  /**
   * <p>A container that indicates whether detailed status code metrics are enabled.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface SelectionCriteria {
  /**
   * <p>A container for the delimiter of the selection criteria being used.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The max depth of the selection criteria</p>
   * @public
   */
  MaxDepth?: number | undefined;

  /**
   * <p>The minimum number of storage bytes percentage whose metrics will be selected.</p>
   *          <note>
   *             <p>You must choose a value greater than or equal to <code>1.0</code>.</p>
   *          </note>
   * @public
   */
  MinStorageBytesPercentage?: number | undefined;
}

/**
 * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
 * @public
 */
export interface PrefixLevelStorageMetrics {
  /**
   * <p>A container for whether prefix-level storage metrics are enabled.</p>
   * @public
   */
  IsEnabled?: boolean | undefined;

  /**
   * <p></p>
   * @public
   */
  SelectionCriteria?: SelectionCriteria | undefined;
}

/**
 * <p>A container for the prefix-level configuration.</p>
 * @public
 */
export interface PrefixLevel {
  /**
   * <p>A container for the prefix-level storage metrics for S3 Storage Lens.</p>
   * @public
   */
  StorageMetrics: PrefixLevelStorageMetrics | undefined;
}

/**
 * <p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface BucketLevel {
  /**
   * <p>A container for the bucket-level activity metrics for S3 Storage Lens.</p>
   * @public
   */
  ActivityMetrics?: ActivityMetrics | undefined;

  /**
   * <p>A container for the prefix-level metrics for S3 Storage Lens. </p>
   * @public
   */
  PrefixLevel?: PrefixLevel | undefined;

  /**
   * <p>A container for bucket-level advanced cost-optimization metrics for S3 Storage Lens.</p>
   * @public
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;

  /**
   * <p>A container for bucket-level advanced data-protection metrics for S3 Storage Lens.</p>
   * @public
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;

  /**
   * <p>A container for bucket-level detailed status code metrics for S3 Storage Lens.</p>
   * @public
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;
}

/**
 * <p> Indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group
 *          aggregation. You can only attach Storage Lens groups to your Storage Lens dashboard if
 *          they're included in your Storage Lens group aggregation. If this value is left null, then
 *          all Storage Lens groups are selected. </p>
 * @public
 */
export interface StorageLensGroupLevelSelectionCriteria {
  /**
   * <p> Indicates which Storage Lens group ARNs to include in the Storage Lens group
   *          aggregation. </p>
   * @public
   */
  Include?: string[] | undefined;

  /**
   * <p> Indicates which Storage Lens group ARNs to exclude from the Storage Lens group
   *          aggregation. </p>
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * <p> Specifies the Storage Lens groups to include in the Storage Lens group aggregation.
 *       </p>
 * @public
 */
export interface StorageLensGroupLevel {
  /**
   * <p> Indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group
   *          aggregation. If this value is left null, then all Storage Lens groups are selected. </p>
   * @public
   */
  SelectionCriteria?: StorageLensGroupLevelSelectionCriteria | undefined;
}

/**
 * <p>A container element for the account-level Amazon S3 Storage Lens configuration.</p>
 *          <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface AccountLevel {
  /**
   * <p>A container element for S3 Storage Lens activity metrics.</p>
   * @public
   */
  ActivityMetrics?: ActivityMetrics | undefined;

  /**
   * <p>A container element for the S3 Storage Lens bucket-level configuration.</p>
   * @public
   */
  BucketLevel: BucketLevel | undefined;

  /**
   * <p>A container element for S3 Storage Lens advanced cost-optimization metrics.</p>
   * @public
   */
  AdvancedCostOptimizationMetrics?: AdvancedCostOptimizationMetrics | undefined;

  /**
   * <p>A container element for S3 Storage Lens advanced data-protection metrics.</p>
   * @public
   */
  AdvancedDataProtectionMetrics?: AdvancedDataProtectionMetrics | undefined;

  /**
   * <p>A container element for detailed status code metrics. </p>
   * @public
   */
  DetailedStatusCodesMetrics?: DetailedStatusCodesMetrics | undefined;

  /**
   * <p>
   * A container element for S3 Storage Lens groups metrics.
   * </p>
   * @public
   */
  StorageLensGroupLevel?: StorageLensGroupLevel | undefined;
}

/**
 * @public
 */
export interface AssociateAccessGrantsIdentityCenterRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs.</p>
   * @public
   */
  IdentityCenterArn: string | undefined;
}

/**
 * <p>Error details for the failed asynchronous operation.</p>
 * @public
 */
export interface AsyncErrorDetails {
  /**
   * <p>A string that uniquely identifies the error condition.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A generic description of the error condition in English.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The identifier of the resource associated with the error.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>The ID of the request associated with the error.</p>
   * @public
   */
  RequestId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AsyncOperationName = {
  CreateMultiRegionAccessPoint: "CreateMultiRegionAccessPoint",
  DeleteMultiRegionAccessPoint: "DeleteMultiRegionAccessPoint",
  PutMultiRegionAccessPointPolicy: "PutMultiRegionAccessPointPolicy",
} as const;

/**
 * @public
 */
export type AsyncOperationName = (typeof AsyncOperationName)[keyof typeof AsyncOperationName];

/**
 * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
 *          account. You can enable the configuration options in any combination. For more information
 *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
 * @public
 */
export interface PublicAccessBlockConfiguration {
  /**
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in
   *          this account. Setting this element to <code>TRUE</code> causes the following
   *          behavior:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PutBucketAcl</code> and <code>PutObjectAcl</code> calls fail if the
   *                specified ACL is public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting
   *          this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on buckets in this
   *          account and any objects that they contain. </p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
   *          Setting this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy
   *          if the specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for buckets in this
   *          account. Setting this element to <code>TRUE</code> restricts access to buckets with public
   *          policies to only Amazon Web Services service principals and authorized users within this
   *          account.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that
   *          public and cross-account access within any public bucket policy, including non-public
   *          delegation to specific accounts, is blocked.</p>
   *          <p>This property is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;
}

/**
 * <p>A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.</p>
 * @public
 */
export interface Region {
  /**
   * <p>The name of the associated bucket for the Region.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this
   *          Multi-Region Access Point.</p>
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. </p>
 * @public
 */
export interface CreateMultiRegionAccessPointInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The buckets in different Regions that are associated with the Multi-Region Access Point.</p>
   * @public
   */
  Regions: Region[] | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
 * @public
 */
export interface DeleteMultiRegionAccessPointInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with this request.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
 * @public
 */
export interface PutMultiRegionAccessPointPolicyInput {
  /**
   * <p>The name of the Multi-Region Access Point associated with the request.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The policy details for the <code>PutMultiRegionAccessPoint</code> request.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * <p>A container for the request parameters associated with an asynchronous request.</p>
 * @public
 */
export interface AsyncRequestParameters {
  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.</p>
   * @public
   */
  CreateMultiRegionAccessPointRequest?: CreateMultiRegionAccessPointInput | undefined;

  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.</p>
   * @public
   */
  DeleteMultiRegionAccessPointRequest?: DeleteMultiRegionAccessPointInput | undefined;

  /**
   * <p>A container of the parameters for a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.</p>
   * @public
   */
  PutMultiRegionAccessPointPolicyRequest?: PutMultiRegionAccessPointPolicyInput | undefined;
}

/**
 * <p>Status information for a single Multi-Region Access Point Region.</p>
 * @public
 */
export interface MultiRegionAccessPointRegionalResponse {
  /**
   * <p>The name of the Region in the Multi-Region Access Point.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the Multi-Region Access Point in this Region.</p>
   * @public
   */
  RequestStatus?: string | undefined;
}

/**
 * <p>The Multi-Region Access Point details that are returned when querying about an asynchronous request.</p>
 * @public
 */
export interface MultiRegionAccessPointsAsyncResponse {
  /**
   * <p>A collection of status information for the different Regions that a Multi-Region Access Point
   *          supports.</p>
   * @public
   */
  Regions?: MultiRegionAccessPointRegionalResponse[] | undefined;
}

/**
 * <p>A container for the response details that are returned when querying about an
 *          asynchronous request.</p>
 * @public
 */
export interface AsyncResponseDetails {
  /**
   * <p>The details for the Multi-Region Access Point.</p>
   * @public
   */
  MultiRegionAccessPointDetails?: MultiRegionAccessPointsAsyncResponse | undefined;

  /**
   * <p>Error details for an asynchronous request.</p>
   * @public
   */
  ErrorDetails?: AsyncErrorDetails | undefined;
}

/**
 * <p>A container for the information about an asynchronous operation.</p>
 * @public
 */
export interface AsyncOperation {
  /**
   * <p>The time that the request was sent to the service.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The specific operation for the asynchronous request.</p>
   * @public
   */
  Operation?: AsyncOperationName | undefined;

  /**
   * <p>The request token associated with the request.</p>
   * @public
   */
  RequestTokenARN?: string | undefined;

  /**
   * <p>The parameters associated with the request.</p>
   * @public
   */
  RequestParameters?: AsyncRequestParameters | undefined;

  /**
   * <p>The current status of the request.</p>
   * @public
   */
  RequestStatus?: string | undefined;

  /**
   * <p>The details of the response.</p>
   * @public
   */
  ResponseDetails?: AsyncResponseDetails | undefined;
}

/**
 * <p>Lambda function used to transform objects through an Object Lambda Access Point.</p>
 * @public
 */
export interface AwsLambdaTransformation {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>Additional JSON that provides supplemental data to the Lambda function used to transform
   *          objects.</p>
   * @public
   */
  FunctionPayload?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3PrefixType = {
  Object: "Object",
} as const;

/**
 * @public
 */
export type S3PrefixType = (typeof S3PrefixType)[keyof typeof S3PrefixType];

/**
 * <p>
 *    An Amazon Web Services resource tag that's associated with your S3 resource. You can add tags to new objects when you upload them, or you can add object tags to existing objects.
 * </p>
 *          <note>
 *             <p>This operation is only supported for <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-groups.html">S3 Storage Lens groups</a> and for <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-tagging.html">S3 Access Grants</a>. The tagged resource can be an S3 Storage Lens group or S3 Access Grants instance, registered location, or grant. </p>
 *          </note>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the key-value pair of a tag added to your Amazon Web Services resource. A tag key can be up to 128 Unicode characters in length and is case-sensitive. System created tags that begin with <code>aws:</code> aren’t supported.
   *       </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>
   *    The value of the key-value pair of a tag added to your Amazon Web Services resource. A tag value can be up to 256 Unicode characters in length and is case-sensitive.
   * </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register. </p>
   *          <p>If you are passing the <code>default</code> location, you cannot create an access grant for the entire default location. You must also specify a bucket or a bucket and prefix in the <code>Subprefix</code> field. </p>
   * @public
   */
  AccessGrantsLocationId: string | undefined;

  /**
   * <p>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. It contains the <code>S3SubPrefix</code> field. The grant scope is the result of appending the subprefix to the location scope of the registered location.</p>
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * <p>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.</p>
   * @public
   */
  Grantee: Grantee | undefined;

  /**
   * <p>The type of access that you are granting to your S3 data, which can be set to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission: Permission | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If an application ARN is included in the request to create an access grant, the grantee can only access the S3 data through this application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The type of <code>S3SubPrefix</code>. The only possible value is <code>Object</code>. Pass this value if the access grant scope is an object. Do not pass this value if the access grant scope is a bucket or a bucket and a prefix. </p>
   * @public
   */
  S3PrefixType?: S3PrefixType | undefined;

  /**
   * <p>The Amazon Web Services resource tags that you are adding to the access grant. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantResult {
  /**
   * <p>The date and time when you created the access grant. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</p>
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access grant. </p>
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * <p>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.</p>
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register. </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. </p>
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * <p>The type of access that you are granting to your S3 data, which can be set to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The S3 path of the data to which you are granting access. It is the result of appending the <code>Subprefix</code> to the location scope. </p>
   * @public
   */
  GrantScope?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsInstanceRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>If you would like to associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs. </p>
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * <p>The Amazon Web Services resource tags that you are adding to the S3 Access Grants instance. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsInstanceResult {
  /**
   * <p>The date and time when you created the S3 Access Grants instance. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the S3 Access Grants instance. The ID is <code>default</code>. You can have one S3 Access Grants instance per Region per account. </p>
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs.</p>
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * @deprecated
   *
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs.</p>
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsLocationRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 path to the location that you are registering. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the <code>engineering/</code> prefix or object key names that start with the <code>marketing/campaigns/</code> prefix.</p>
   * @public
   */
  LocationScope: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn: string | undefined;

  /**
   * <p>The Amazon Web Services resource tags that you are adding to the S3 Access Grants location. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessGrantsLocationResult {
  /**
   * <p>The date and time when you registered the location. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the location you are registering.</p>
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * <p>The S3 URI path to the location that you are registering. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the <code>engineering/</code> prefix or object key names that start with the <code>marketing/campaigns/</code> prefix.</p>
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name you want to assign to this access point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the bucket that you want to associate this access point with.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>If you include this field, Amazon S3 restricts access to this access point to requests from the
   *          specified virtual private cloud (VPC).</p>
   *          <note>
   *             <p>This is required for creating an access point for Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p> The <code>PublicAccessBlock</code> configuration that you want to apply to the access point.
   *       </p>
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   *          <p>For same account access point when your bucket and access point belong to the same account owner, the <code>BucketAccountId</code> is not required.
   *          For cross-account access point when your bucket and access point are not in the same account, the <code>BucketAccountId</code> is required.
   *       </p>
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointResult {
  /**
   * <p>The ARN of the access point.</p>
   *          <note>
   *             <p>This is only supported by Amazon S3 on Outposts.</p>
   *          </note>
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * <p>The name or alias of the access point.</p>
   * @public
   */
  Alias?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectLambdaAllowedFeature = {
  GetObjectPartNumber: "GetObject-PartNumber",
  GetObjectRange: "GetObject-Range",
  HeadObjectPartNumber: "HeadObject-PartNumber",
  HeadObjectRange: "HeadObject-Range",
} as const;

/**
 * @public
 */
export type ObjectLambdaAllowedFeature = (typeof ObjectLambdaAllowedFeature)[keyof typeof ObjectLambdaAllowedFeature];

/**
 * @public
 * @enum
 */
export const ObjectLambdaTransformationConfigurationAction = {
  GetObject: "GetObject",
  HeadObject: "HeadObject",
  ListObjects: "ListObjects",
  ListObjectsV2: "ListObjectsV2",
} as const;

/**
 * @public
 */
export type ObjectLambdaTransformationConfigurationAction =
  (typeof ObjectLambdaTransformationConfigurationAction)[keyof typeof ObjectLambdaTransformationConfigurationAction];

/**
 * <p>A container for AwsLambdaTransformation.</p>
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
   * <p>A container for an Lambda function.</p>
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

  export interface Visitor<T> {
    AwsLambda: (value: AwsLambdaTransformation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ObjectLambdaContentTransformation, visitor: Visitor<T>): T => {
    if (value.AwsLambda !== undefined) return visitor.AwsLambda(value.AwsLambda);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A configuration used when creating an Object Lambda Access Point transformation.</p>
 * @public
 */
export interface ObjectLambdaTransformationConfiguration {
  /**
   * <p>A container for the action of an Object Lambda Access Point configuration. Valid inputs are
   *             <code>GetObject</code>, <code>ListObjects</code>, <code>HeadObject</code>, and
   *             <code>ListObjectsV2</code>.</p>
   * @public
   */
  Actions: ObjectLambdaTransformationConfigurationAction[] | undefined;

  /**
   * <p>A container for the content transformation of an Object Lambda Access Point configuration.</p>
   * @public
   */
  ContentTransformation: ObjectLambdaContentTransformation | undefined;
}

/**
 * <p>A configuration used when creating an Object Lambda Access Point.</p>
 * @public
 */
export interface ObjectLambdaConfiguration {
  /**
   * <p>Standard access point associated with the Object Lambda Access Point.</p>
   * @public
   */
  SupportingAccessPoint: string | undefined;

  /**
   * <p>A container for whether the CloudWatch metrics configuration is enabled.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>A container for allowed features. Valid inputs are <code>GetObject-Range</code>,
   *             <code>GetObject-PartNumber</code>, <code>HeadObject-Range</code>, and
   *             <code>HeadObject-PartNumber</code>.</p>
   * @public
   */
  AllowedFeatures?: ObjectLambdaAllowedFeature[] | undefined;

  /**
   * <p>A container for transformation configurations for an Object Lambda Access Point.</p>
   * @public
   */
  TransformationConfigurations: ObjectLambdaTransformationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaRequest {
  /**
   * <p>The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name you want to assign to this Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Object Lambda Access Point configuration as a JSON document.</p>
   * @public
   */
  Configuration: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectLambdaAccessPointAliasStatus = {
  PROVISIONING: "PROVISIONING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ObjectLambdaAccessPointAliasStatus =
  (typeof ObjectLambdaAccessPointAliasStatus)[keyof typeof ObjectLambdaAccessPointAliasStatus];

/**
 * <p>The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a
 *             bucket-style alias for your S3 bucket Object Lambda Access Point</a>.</p>
 * @public
 */
export interface ObjectLambdaAccessPointAlias {
  /**
   * <p>The alias value of the Object Lambda Access Point.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The status of the Object Lambda Access Point alias. If the status is <code>PROVISIONING</code>, the Object Lambda Access Point
   *          is provisioning the alias and the alias is not ready for use yet. If the status is
   *             <code>READY</code>, the Object Lambda Access Point alias is successfully provisioned and ready for
   *          use.</p>
   * @public
   */
  Status?: ObjectLambdaAccessPointAliasStatus | undefined;
}

/**
 * @public
 */
export interface CreateAccessPointForObjectLambdaResult {
  /**
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   * @public
   */
  ObjectLambdaAccessPointArn?: string | undefined;

  /**
   * <p>The alias of the Object Lambda Access Point.</p>
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * <p>The requested Outposts bucket name is not available. The bucket namespace is shared by
 *          all users of the Outposts in this Region. Select a different name and try
 *          again.</p>
 * @public
 */
export class BucketAlreadyExists extends __BaseException {
  readonly name: "BucketAlreadyExists" = "BucketAlreadyExists";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyExists, __BaseException>) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
}

/**
 * <p>The Outposts bucket you tried to create already exists, and you own it. </p>
 * @public
 */
export class BucketAlreadyOwnedByYou extends __BaseException {
  readonly name: "BucketAlreadyOwnedByYou" = "BucketAlreadyOwnedByYou";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyOwnedByYou, __BaseException>) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const BucketCannedACL = {
  authenticated_read: "authenticated-read",
  private: "private",
  public_read: "public-read",
  public_read_write: "public-read-write",
} as const;

/**
 * @public
 */
export type BucketCannedACL = (typeof BucketCannedACL)[keyof typeof BucketCannedACL];

/**
 * @public
 * @enum
 */
export const BucketLocationConstraint = {
  EU: "EU",
  ap_northeast_1: "ap-northeast-1",
  ap_south_1: "ap-south-1",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  cn_north_1: "cn-north-1",
  eu_central_1: "eu-central-1",
  eu_west_1: "eu-west-1",
  sa_east_1: "sa-east-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;

/**
 * @public
 */
export type BucketLocationConstraint = (typeof BucketLocationConstraint)[keyof typeof BucketLocationConstraint];

/**
 * <p>The container for the bucket configuration.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface CreateBucketConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created. If you are creating a bucket on
   *          the US East (N. Virginia) Region (us-east-1), you do not need to specify the location. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  LocationConstraint?: BucketLocationConstraint | undefined;
}

/**
 * @public
 */
export interface CreateBucketRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  ACL?: BucketCannedACL | undefined;

  /**
   * <p>The name of the bucket.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  CreateBucketConfiguration?: CreateBucketConfiguration | undefined;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockEnabledForBucket?: boolean | undefined;

  /**
   * <p>The ID of the Outposts where the bucket is being created.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * @public
 */
export interface CreateBucketResult {
  /**
   * <p>The location of the bucket.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the information required to locate a manifest object. Manifests can't be
 *          imported from directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">Directory
 *             buckets</a>.</p>
 * @public
 */
export interface JobManifestLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for a manifest object.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   * @public
   */
  ObjectArn: string | undefined;

  /**
   * <p>The optional version ID to identify a specific version of the manifest object.</p>
   * @public
   */
  ObjectVersionId?: string | undefined;

  /**
   * <p>The ETag for the specified manifest object.</p>
   * @public
   */
  ETag: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobManifestFieldName = {
  Bucket: "Bucket",
  Ignore: "Ignore",
  Key: "Key",
  VersionId: "VersionId",
} as const;

/**
 * @public
 */
export type JobManifestFieldName = (typeof JobManifestFieldName)[keyof typeof JobManifestFieldName];

/**
 * @public
 * @enum
 */
export const JobManifestFormat = {
  S3BatchOperations_CSV_20180820: "S3BatchOperations_CSV_20180820",
  S3InventoryReport_CSV_20161130: "S3InventoryReport_CSV_20161130",
} as const;

/**
 * @public
 */
export type JobManifestFormat = (typeof JobManifestFormat)[keyof typeof JobManifestFormat];

/**
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the
 *          columns contained within the manifest.</p>
 * @public
 */
export interface JobManifestSpec {
  /**
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   * @public
   */
  Format: JobManifestFormat | undefined;

  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code>
   *          format, this element describes which columns contain the required data.</p>
   * @public
   */
  Fields?: JobManifestFieldName[] | undefined;
}

/**
 * <p>Contains the configuration information for a job's manifest.</p>
 * @public
 */
export interface JobManifest {
  /**
   * <p>Describes the format of the specified job's manifest. If the manifest is in CSV format,
   *          also describes the columns contained within the manifest.</p>
   * @public
   */
  Spec: JobManifestSpec | undefined;

  /**
   * <p>Contains the information required to locate the specified job's manifest. Manifests
   *          can't be imported from directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">Directory buckets</a>.</p>
   * @public
   */
  Location: JobManifestLocation | undefined;
}

/**
 * <p>If provided, the generated manifest includes only source bucket objects whose object
 *          keys match the string constraints specified for <code>MatchAnyPrefix</code>,
 *             <code>MatchAnySuffix</code>, and <code>MatchAnySubstring</code>.</p>
 * @public
 */
export interface KeyNameConstraint {
  /**
   * <p>If provided, the generated manifest includes objects where the specified string appears
   *          at the start of the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.</p>
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * <p>If provided, the generated manifest includes objects where the specified string appears
   *          at the end of the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.</p>
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * <p>If provided, the generated manifest includes objects where the specified string appears
   *          anywhere within the object key string. Each KeyNameConstraint filter accepts an array of strings with a length of 1 string.</p>
   * @public
   */
  MatchAnySubstring?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const S3StorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type S3StorageClass = (typeof S3StorageClass)[keyof typeof S3StorageClass];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  NONE: "NONE",
  REPLICA: "REPLICA",
} as const;

/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * <p>The filter used to describe a set of objects for the job's manifest.</p>
 * @public
 */
export interface JobManifestGeneratorFilter {
  /**
   * <p>Include objects in the generated manifest only if they are eligible for replication
   *          according to the Replication configuration on the source bucket.</p>
   * @public
   */
  EligibleForReplication?: boolean | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects that were
   *          created after this time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects that were
   *          created before this time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects that have one of
   *          the specified Replication statuses.</p>
   * @public
   */
  ObjectReplicationStatuses?: ReplicationStatus[] | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects whose object
   *          keys match the string constraints specified for <code>MatchAnyPrefix</code>,
   *             <code>MatchAnySuffix</code>, and <code>MatchAnySubstring</code>.</p>
   * @public
   */
  KeyNameConstraint?: KeyNameConstraint | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects whose file size
   *          is greater than the specified number of bytes.</p>
   * @public
   */
  ObjectSizeGreaterThanBytes?: number | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects whose file size
   *          is less than the specified number of bytes.</p>
   * @public
   */
  ObjectSizeLessThanBytes?: number | undefined;

  /**
   * <p>If provided, the generated manifest includes only source bucket objects that are stored
   *          with the specified storage class.</p>
   * @public
   */
  MatchAnyStorageClass?: S3StorageClass[] | undefined;
}

/**
 * <p>Configuration for the use of SSE-KMS to encrypt generated manifest objects.</p>
 * @public
 */
export interface SSEKMSEncryption {
  /**
   * <p>Specifies the ID of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric encryption
   *          customer managed key to use for encrypting generated manifest objects.</p>
   * @public
   */
  KeyId: string | undefined;
}

/**
 * <p>Configuration for the use of SSE-S3 to encrypt generated manifest objects.</p>
 * @public
 */
export interface SSES3Encryption {}

/**
 * <p>The encryption configuration to use when storing the generated manifest.</p>
 * @public
 */
export interface GeneratedManifestEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt generated manifest objects.</p>
   * @public
   */
  SSES3?: SSES3Encryption | undefined;

  /**
   * <p>Configuration details on how SSE-KMS is used to encrypt generated manifest
   *          objects.</p>
   * @public
   */
  SSEKMS?: SSEKMSEncryption | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedManifestFormat = {
  S3InventoryReport_CSV_20211130: "S3InventoryReport_CSV_20211130",
} as const;

/**
 * @public
 */
export type GeneratedManifestFormat = (typeof GeneratedManifestFormat)[keyof typeof GeneratedManifestFormat];

/**
 * <p>Location details for where the generated manifest should be written.</p>
 * @public
 */
export interface S3ManifestOutputLocation {
  /**
   * <p>The Account ID that owns the bucket the generated manifest is written to.</p>
   * @public
   */
  ExpectedManifestBucketOwner?: string | undefined;

  /**
   * <p>The bucket ARN the generated manifest should be written to.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - Directory buckets aren't supported
   *          as the buckets to store the generated manifest.</p>
   *          </note>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Prefix identifying one or more objects to which the manifest applies.</p>
   * @public
   */
  ManifestPrefix?: string | undefined;

  /**
   * <p>Specifies what encryption should be used when the generated manifest objects are
   *          written.</p>
   * @public
   */
  ManifestEncryption?: GeneratedManifestEncryption | undefined;

  /**
   * <p>The format of the generated manifest.</p>
   * @public
   */
  ManifestFormat: GeneratedManifestFormat | undefined;
}

/**
 * <p>The container for the service that will create the S3 manifest.</p>
 * @public
 */
export interface S3JobManifestGenerator {
  /**
   * <p>The Amazon Web Services account ID that owns the bucket the generated manifest is written to. If
   *          provided the generated manifest bucket's owner Amazon Web Services account ID must match this value, else
   *          the job fails.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The ARN of the source bucket used by the ManifestGenerator.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - Directory buckets aren't supported
   *          as the source buckets used by <code>S3JobManifestGenerator</code> to generate the job manifest.</p>
   *          </note>
   * @public
   */
  SourceBucket: string | undefined;

  /**
   * <p>Specifies the location the generated manifest will be written to. Manifests can't be
   *          written to directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">Directory
   *             buckets</a>.</p>
   * @public
   */
  ManifestOutputLocation?: S3ManifestOutputLocation | undefined;

  /**
   * <p>Specifies rules the S3JobManifestGenerator should use to decide whether an object
   *          in the source bucket should or should not be included in the generated job manifest.</p>
   * @public
   */
  Filter?: JobManifestGeneratorFilter | undefined;

  /**
   * <p>Determines whether or not to write the job's generated manifest to a bucket.</p>
   * @public
   */
  EnableManifestOutput: boolean | undefined;
}

/**
 * <p>Configures the type of the job's ManifestGenerator.</p>
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
   * <p>The S3 job ManifestGenerator's configuration details.</p>
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

  export interface Visitor<T> {
    S3JobManifestGenerator: (value: S3JobManifestGenerator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobManifestGenerator, visitor: Visitor<T>): T => {
    if (value.S3JobManifestGenerator !== undefined) return visitor.S3JobManifestGenerator(value.S3JobManifestGenerator);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains the configuration parameters for a <code>Lambda Invoke</code> operation.</p>
 * @public
 */
export interface LambdaInvokeOperation {
  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function that the specified job will
   *          invoke on every object in the manifest.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>Specifies the schema version for the payload that Batch Operations sends when invoking
   *          an Lambda function. Version <code>1.0</code> is the default. Version
   *             <code>2.0</code> is required when you use Batch Operations to invoke Lambda functions that act on directory buckets, or if you need to specify
   *             <code>UserArguments</code>. For more information, see <a href="https://aws.amazon.com/blogs/storage/automate-object-processing-in-amazon-s3-directory-buckets-with-s3-batch-operations-and-aws-lambda/">Automate object processing in Amazon S3 directory buckets with S3 Batch Operations and
   *                Lambda</a> in the <i>Amazon Web Services Storage Blog</i>.</p>
   *          <important>
   *             <p>Ensure that your Lambda function code expects
   *                <code>InvocationSchemaVersion</code>
   *                <b>2.0</b> and uses bucket name rather than bucket ARN. If the
   *                <code>InvocationSchemaVersion</code> does not match what your Lambda
   *             function expects, your function might not work as expected.</p>
   *          </important>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - To initiate Amazon Web Services Lambda function to perform custom actions on objects in directory buckets, you must specify <code>2.0</code>.</p>
   *          </note>
   * @public
   */
  InvocationSchemaVersion?: string | undefined;

  /**
   * <p>Key-value pairs that are passed in the payload that Batch Operations sends when invoking
   *          an Lambda function. You must specify <code>InvocationSchemaVersion</code>
   *             <b>2.0</b> for <code>LambdaInvoke</code> operations that include
   *             <code>UserArguments</code>. For more information, see <a href="https://aws.amazon.com/blogs/storage/automate-object-processing-in-amazon-s3-directory-buckets-with-s3-batch-operations-and-aws-lambda/">Automate object processing in Amazon S3 directory buckets with S3 Batch Operations and
   *                Lambda</a> in the <i>Amazon Web Services Storage Blog</i>.</p>
   * @public
   */
  UserArguments?: Record<string, string> | undefined;
}

/**
 * <p>Contains no configuration parameters because the DELETE Object tagging
 *             (<code>DeleteObjectTagging</code>)
 *          API
 *          operation
 *          accepts
 *          only
 *          the bucket name and key name as parameters, which are defined in the
 *          job's manifest.</p>
 * @public
 */
export interface S3DeleteObjectTaggingOperation {}

/**
 * @public
 * @enum
 */
export const S3GlacierJobTier = {
  BULK: "BULK",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type S3GlacierJobTier = (typeof S3GlacierJobTier)[keyof typeof S3GlacierJobTier];

/**
 * <p>Contains the configuration parameters for
 *          a
 *          POST Object restore job. S3 Batch Operations passes every object to the
 *          underlying
 *             <code>RestoreObject</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.</p>
 * @public
 */
export interface S3InitiateRestoreObjectOperation {
  /**
   * <p>This argument specifies how long the S3 Glacier or S3 Glacier Deep Archive object remains
   *          available in Amazon S3. S3 Initiate Restore Object jobs that target S3 Glacier and S3 Glacier Deep Archive
   *          objects require <code>ExpirationInDays</code> set to 1 or greater.</p>
   *          <p>Conversely, do <i>not</i> set <code>ExpirationInDays</code> when creating
   *          S3 Initiate Restore Object jobs that target S3 Intelligent-Tiering Archive Access and
   *          Deep Archive Access tier objects. Objects in S3 Intelligent-Tiering archive access tiers are
   *          not subject to restore expiry, so specifying <code>ExpirationInDays</code> results in
   *          restore request failure.</p>
   *          <p>S3 Batch Operations jobs can operate either on S3 Glacier and S3 Glacier Deep Archive storage class
   *          objects or on S3 Intelligent-Tiering Archive Access and Deep Archive Access storage tier
   *          objects, but not both types in the same job. If you need to restore objects of both types
   *          you <i>must</i> create separate Batch Operations jobs. </p>
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * <p>S3 Batch Operations supports <code>STANDARD</code> and <code>BULK</code> retrieval tiers, but
   *          not the <code>EXPEDITED</code> retrieval tier.</p>
   * @public
   */
  GlacierJobTier?: S3GlacierJobTier | undefined;
}

/**
 * @public
 * @enum
 */
export const S3GranteeTypeIdentifier = {
  CANONICAL: "id",
  EMAIL_ADDRESS: "emailAddress",
  GROUP: "uri",
} as const;

/**
 * @public
 */
export type S3GranteeTypeIdentifier = (typeof S3GranteeTypeIdentifier)[keyof typeof S3GranteeTypeIdentifier];

/**
 * <p></p>
 * @public
 */
export interface S3Grantee {
  /**
   * <p></p>
   * @public
   */
  TypeIdentifier?: S3GranteeTypeIdentifier | undefined;

  /**
   * <p></p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3Permission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type S3Permission = (typeof S3Permission)[keyof typeof S3Permission];

/**
 * <p></p>
 * @public
 */
export interface S3Grant {
  /**
   * <p></p>
   * @public
   */
  Grantee?: S3Grantee | undefined;

  /**
   * <p></p>
   * @public
   */
  Permission?: S3Permission | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface S3ObjectOwner {
  /**
   * <p></p>
   * @public
   */
  ID?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface S3AccessControlList {
  /**
   * <p></p>
   * @public
   */
  Owner: S3ObjectOwner | undefined;

  /**
   * <p></p>
   * @public
   */
  Grants?: S3Grant[] | undefined;
}

/**
 * @public
 * @enum
 */
export const S3CannedAccessControlList = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;

/**
 * @public
 */
export type S3CannedAccessControlList = (typeof S3CannedAccessControlList)[keyof typeof S3CannedAccessControlList];

/**
 * <p></p>
 * @public
 */
export interface S3AccessControlPolicy {
  /**
   * <p></p>
   * @public
   */
  AccessControlList?: S3AccessControlList | undefined;

  /**
   * <p></p>
   * @public
   */
  CannedAccessControlList?: S3CannedAccessControlList | undefined;
}

/**
 * <p>Contains the configuration parameters for a
 *          PUT
 *          Object ACL operation. S3 Batch Operations passes every object to the underlying
 *             <code>PutObjectAcl</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>.</p>
 * @public
 */
export interface S3SetObjectAclOperation {
  /**
   * <p></p>
   * @public
   */
  AccessControlPolicy?: S3AccessControlPolicy | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ChecksumAlgorithm = {
  CRC32: "CRC32",
  CRC32C: "CRC32C",
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;

/**
 * @public
 */
export type S3ChecksumAlgorithm = (typeof S3ChecksumAlgorithm)[keyof typeof S3ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const S3MetadataDirective = {
  COPY: "COPY",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type S3MetadataDirective = (typeof S3MetadataDirective)[keyof typeof S3MetadataDirective];

/**
 * @public
 * @enum
 */
export const S3SSEAlgorithm = {
  AES256: "AES256",
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type S3SSEAlgorithm = (typeof S3SSEAlgorithm)[keyof typeof S3SSEAlgorithm];

/**
 * <p></p>
 * @public
 */
export interface S3ObjectMetadata {
  /**
   * <p></p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  UserMetadata?: Record<string, string> | undefined;

  /**
   * <p>
   *             <i>This member has been deprecated.</i>
   *          </p>
   *          <p></p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>
   *             <i>This member has been deprecated.</i>
   *          </p>
   *          <p></p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  HttpExpiresDate?: Date | undefined;

  /**
   * <p>
   *             <i>This member has been deprecated.</i>
   *          </p>
   *          <p></p>
   * @public
   */
  RequesterCharged?: boolean | undefined;

  /**
   * <p></p>
   *          <note>
   *             <p>For directory buckets, only the server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) is supported.</p>
   *          </note>
   * @public
   */
  SSEAlgorithm?: S3SSEAlgorithm | undefined;
}

/**
 * <p>A container for a key-value name pair.</p>
 * @public
 */
export interface S3Tag {
  /**
   * <p>Key of the tag</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ObjectLockLegalHoldStatus = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type S3ObjectLockLegalHoldStatus =
  (typeof S3ObjectLockLegalHoldStatus)[keyof typeof S3ObjectLockLegalHoldStatus];

/**
 * @public
 * @enum
 */
export const S3ObjectLockMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type S3ObjectLockMode = (typeof S3ObjectLockMode)[keyof typeof S3ObjectLockMode];

/**
 * <p>Contains
 *          the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every
 *          object to the underlying
 *             <code>CopyObject</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>.</p>
 * @public
 */
export interface S3CopyObjectOperation {
  /**
   * <p>Specifies the destination bucket
   *          Amazon Resource Name
   *          (ARN)
   *          for the batch copy operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>General purpose buckets</b> - For example, to copy objects to a general purpose bucket named
   *                <code>destinationBucket</code>, set the <code>TargetResource</code> property to
   *                <code>arn:aws:s3:::destinationBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Directory buckets</b> - For example, to copy objects to a directory bucket named
   *                <code>destinationBucket</code> in the Availability Zone; identified by the AZ ID <code>usw2-az1</code>, set the <code>TargetResource</code> property to
   *                <code>arn:aws:s3express:<i>region</i>:<i>account_id</i>:/bucket/<i>destination_bucket_base_name</i>--<i>usw2-az1</i>--x-s3</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetResource?: string | undefined;

  /**
   * <p></p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  CannedAccessControlList?: S3CannedAccessControlList | undefined;

  /**
   * <p></p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  AccessControlGrants?: S3Grant[] | undefined;

  /**
   * <p></p>
   * @public
   */
  MetadataDirective?: S3MetadataDirective | undefined;

  /**
   * <p></p>
   * @public
   */
  ModifiedSinceConstraint?: Date | undefined;

  /**
   * <p>If you don't provide this parameter, Amazon S3 copies all the metadata from the original
   *          objects. If you specify an empty set, the new objects will have no tags. Otherwise, Amazon S3
   *          assigns the supplied tags to the new objects.</p>
   * @public
   */
  NewObjectMetadata?: S3ObjectMetadata | undefined;

  /**
   * <p>Specifies a list of tags to add to the destination objects after they are copied.
   *          If <code>NewObjectTagging</code> is not specified, the tags of the source objects are copied to destination objects by default.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - Tags aren't supported by directory buckets.
   *          If your source objects have tags and your destination bucket is a directory bucket, specify an empty tag set in the <code>NewObjectTagging</code> field
   *          to prevent copying the source object tags to the directory bucket.</p>
   *          </note>
   * @public
   */
  NewObjectTagging?: S3Tag[] | undefined;

  /**
   * <p>If the destination bucket is configured as a website, specifies an optional metadata property for website redirects,
   *             <code>x-amz-website-redirect-location</code>. Allows webpage redirects if the object copy is
   *          accessed through a website endpoint.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  RedirectLocation?: string | undefined;

  /**
   * <p></p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  RequesterPays?: boolean | undefined;

  /**
   * <p>Specify the storage class for the destination objects in a <code>Copy</code> operation.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets </b> - This functionality is not supported by directory buckets. </p>
   *          </note>
   * @public
   */
  StorageClass?: S3StorageClass | undefined;

  /**
   * <p></p>
   * @public
   */
  UnModifiedSinceConstraint?: Date | undefined;

  /**
   * <p></p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  SSEAwsKmsKeyId?: string | undefined;

  /**
   * <p>Specifies the folder prefix
   *          that
   *          you
   *          want
   *          the objects to be
   *          copied
   *          into. For example, to copy objects into a folder named
   *             <code>Folder1</code> in the destination bucket, set the
   *             <code>TargetKeyPrefix</code>
   *          property
   *          to <code>Folder1</code>.</p>
   * @public
   */
  TargetKeyPrefix?: string | undefined;

  /**
   * <p>The legal hold status to be applied to all objects in the Batch Operations job.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockLegalHoldStatus?: S3ObjectLockLegalHoldStatus | undefined;

  /**
   * <p>The retention mode to be applied to all objects in the Batch Operations job.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockMode?: S3ObjectLockMode | undefined;

  /**
   * <p>The date when the applied object retention configuration expires on all objects in the
   *          Batch Operations job.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Amazon Web Services KMS (SSE-KMS). Setting this header to <code>true</code>
   *          causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with an <i>object</i> action doesn’t affect
   *             <i>bucket-level</i> settings for S3 Bucket Key.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>Indicates the algorithm
   *          that
   *          you want Amazon S3 to use to create the checksum. For more
   *          information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html"> Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumAlgorithm?: S3ChecksumAlgorithm | undefined;
}

/**
 * <p>Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations
 *          job.</p>
 * @public
 */
export interface S3ObjectLockLegalHold {
  /**
   * <p>The Object Lock legal hold status to be applied to all objects in the Batch Operations
   *          job.</p>
   * @public
   */
  Status: S3ObjectLockLegalHoldStatus | undefined;
}

/**
 * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
 *          S3 Batch Operations job passes
 *          to
 *          every object to the underlying
 *             <code>PutObjectLegalHold</code>
 *          API
 *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>This functionality is not supported by directory buckets.</p>
 *          </note>
 * @public
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * <p>Contains the Object Lock legal hold status to be applied to all objects in the
   *          Batch Operations job.</p>
   * @public
   */
  LegalHold: S3ObjectLockLegalHold | undefined;
}

/**
 * @public
 * @enum
 */
export const S3ObjectLockRetentionMode = {
  COMPLIANCE: "COMPLIANCE",
  GOVERNANCE: "GOVERNANCE",
} as const;

/**
 * @public
 */
export type S3ObjectLockRetentionMode = (typeof S3ObjectLockRetentionMode)[keyof typeof S3ObjectLockRetentionMode];

/**
 * <p>Contains the S3 Object Lock retention mode to be applied to all objects in the
 *          S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code>
 *          data types in your operation, you will remove the retention from your objects. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface S3Retention {
  /**
   * <p>The date when the applied Object Lock retention will expire on all objects set by the
   *          Batch Operations job.</p>
   * @public
   */
  RetainUntilDate?: Date | undefined;

  /**
   * <p>The Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job.</p>
   * @public
   */
  Mode?: S3ObjectLockRetentionMode | undefined;
}

/**
 * <p>Contains the configuration parameters for the Object Lock retention action for an
 *          S3 Batch Operations job. Batch Operations passes every object to the underlying
 *             <code>PutObjectRetention</code>
 *          API
 *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
 *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>This functionality is not supported by directory buckets.</p>
 *          </note>
 * @public
 */
export interface S3SetObjectRetentionOperation {
  /**
   * <p>Indicates if the action should be applied to objects in the Batch Operations job even if they
   *          have Object Lock <code> GOVERNANCE</code> type in place.</p>
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * <p>Contains the Object Lock retention mode to be applied to all objects in the Batch Operations
   *          job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Retention: S3Retention | undefined;
}

/**
 * <p>Contains the configuration parameters for a
 *          PUT
 *          Object Tagging operation. S3 Batch Operations passes every object to the underlying
 *             <code>PutObjectTagging</code>
 *          API
 *          operation. For more information about the parameters for this operation,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>.</p>
 * @public
 */
export interface S3SetObjectTaggingOperation {
  /**
   * <p></p>
   * @public
   */
  TagSet?: S3Tag[] | undefined;
}

/**
 * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
 *          job's manifest.</p>
 * @public
 */
export interface S3ReplicateObjectOperation {}

/**
 * <p>The operation that you want this job to perform on every object listed in the manifest.
 *          For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface JobOperation {
  /**
   * <p>Directs the specified job to invoke an Lambda function on every object in the
   *          manifest.</p>
   * @public
   */
  LambdaInvoke?: LambdaInvokeOperation | undefined;

  /**
   * <p>Directs the specified job to run a PUT Copy object call on every object in the
   *          manifest.</p>
   * @public
   */
  S3PutObjectCopy?: S3CopyObjectOperation | undefined;

  /**
   * <p>Directs the specified job to run a <code>PutObjectAcl</code> call on every object in the
   *          manifest.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3PutObjectAcl?: S3SetObjectAclOperation | undefined;

  /**
   * <p>Directs the specified job to run a PUT Object tagging call on every object in the
   *          manifest.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3PutObjectTagging?: S3SetObjectTaggingOperation | undefined;

  /**
   * <p>Directs the specified job to execute a DELETE Object tagging call on every object in the
   *          manifest.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3DeleteObjectTagging?: S3DeleteObjectTaggingOperation | undefined;

  /**
   * <p>Directs the specified job to initiate restore requests for every archived object in the
   *          manifest.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3InitiateRestoreObject?: S3InitiateRestoreObjectOperation | undefined;

  /**
   * <p>Contains the configuration for an S3 Object Lock legal hold operation that an
   *          S3 Batch Operations job passes
   *          to
   *          every object to the underlying
   *             <code>PutObjectLegalHold</code>
   *          API
   *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3PutObjectLegalHold?: S3SetObjectLegalHoldOperation | undefined;

  /**
   * <p>Contains the configuration parameters for the Object Lock retention action for an
   *          S3 Batch Operations job. Batch Operations passes every object to the underlying
   *             <code>PutObjectRetention</code>
   *          API
   *          operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention
   *             with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3PutObjectRetention?: S3SetObjectRetentionOperation | undefined;

  /**
   * <p>Directs the specified job to invoke <code>ReplicateObject</code> on every object in the
   *          job's manifest.</p>
   *          <note>
   *             <p>This functionality is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  S3ReplicateObject?: S3ReplicateObjectOperation | undefined;
}

/**
 * @public
 * @enum
 */
export const JobReportFormat = {
  Report_CSV_20180820: "Report_CSV_20180820",
} as const;

/**
 * @public
 */
export type JobReportFormat = (typeof JobReportFormat)[keyof typeof JobReportFormat];

/**
 * @public
 * @enum
 */
export const JobReportScope = {
  AllTasks: "AllTasks",
  FailedTasksOnly: "FailedTasksOnly",
} as const;

/**
 * @public
 */
export type JobReportScope = (typeof JobReportScope)[keyof typeof JobReportScope];

/**
 * <p>Contains the configuration parameters for a job-completion report.</p>
 * @public
 */
export interface JobReport {
  /**
   * <p>The Amazon Resource Name (ARN) for the bucket where specified job-completion report will
   *          be stored.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - Directory buckets aren't supported
   *          as a location for Batch Operations to store job completion reports.</p>
   *          </note>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The format of the specified job-completion report.</p>
   * @public
   */
  Format?: JobReportFormat | undefined;

  /**
   * <p>Indicates whether the specified job will generate a job-completion report.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>An optional prefix to describe where in the specified bucket the job-completion report
   *          will be stored. Amazon S3 stores the job-completion report at
   *             <code><prefix>/job-<job-id>/report.json</code>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Indicates whether the job-completion report will include details of all tasks or only
   *          failed tasks.</p>
   * @public
   */
  ReportScope?: JobReportScope | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>The Amazon Web Services account ID that creates the job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is
   *          only required for jobs created through the Amazon S3 console.</p>
   * @public
   */
  ConfirmationRequired?: boolean | undefined;

  /**
   * <p>The action that you want this job to perform on every object listed in the manifest. For
   *          more information about the available actions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-actions.html">Operations</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Operation: JobOperation | undefined;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   * @public
   */
  Report: JobReport | undefined;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request
   *          twice. You can use any string up to the maximum length.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Configuration parameters for the manifest.</p>
   * @public
   */
  Manifest?: JobManifest | undefined;

  /**
   * <p>A description for this job. You can use any string within the permitted length.
   *          Descriptions don't need to be unique and can be used for multiple jobs.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will
   *          use to run this job's action on every object in the manifest.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of tags to associate with the S3 Batch Operations job. This is an optional parameter.
   *       </p>
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * <p>The attribute container for the ManifestGenerator details. Jobs must be created with
   *          either a manifest file or a ManifestGenerator, but not both.</p>
   * @public
   */
  ManifestGenerator?: JobManifestGenerator | undefined;
}

/**
 * @public
 */
export interface CreateJobResult {
  /**
   * <p>The ID for this job. Amazon S3 generates this ID automatically and returns it after a
   *          successful <code>Create Job</code> request.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export class IdempotencyException extends __BaseException {
  readonly name: "IdempotencyException" = "IdempotencyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p></p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p></p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own
   *          the underlying buckets.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   * @public
   */
  Details: CreateMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionAccessPointResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * <p>
 *    A filter condition that specifies the object age range of included objects in days. Only integers are supported.
 * </p>
 * @public
 */
export interface MatchObjectAge {
  /**
   * <p>
   * Specifies the maximum object age in days. Must be a positive whole number, greater than the minimum object age and less than or equal to 2,147,483,647.
   * </p>
   * @public
   */
  DaysGreaterThan?: number | undefined;

  /**
   * <p>
   * Specifies the minimum object age in days. The value must be a positive whole number, greater than 0 and less than or equal to 2,147,483,647.
   * </p>
   * @public
   */
  DaysLessThan?: number | undefined;
}

/**
 * <p>
 * A filter condition that specifies the object size range of included objects in bytes. Only integers are supported.
 * </p>
 * @public
 */
export interface MatchObjectSize {
  /**
   * <p>
   * Specifies the minimum object size in Bytes. The value must be a positive number, greater than 0 and less than 5 TB.
   * </p>
   * @public
   */
  BytesGreaterThan?: number | undefined;

  /**
   * <p>
   * Specifies the maximum object size in Bytes. The value must be a positive number, greater than the minimum object size and less than 5 TB.
   * </p>
   * @public
   */
  BytesLessThan?: number | undefined;
}

/**
 * <p> A logical operator that allows multiple filter conditions to be joined for more complex
 *          comparisons of Storage Lens group data. </p>
 * @public
 */
export interface StorageLensGroupAndOperator {
  /**
   * <p> Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes
   *          are allowed. </p>
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * <p> Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes
   *          are allowed. </p>
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * <p> Contains the list of object tags. At least one object tag must be specified. Up to 10
   *          object tags are allowed. </p>
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * <p> Contains <code>DaysGreaterThan</code> and <code>DaysLessThan</code> to define the
   *          object age range (minimum and maximum number of days). </p>
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * <p> Contains <code>BytesGreaterThan</code> and <code>BytesLessThan</code> to define the
   *          object size range (minimum and maximum number of Bytes). </p>
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;
}

/**
 * <p>A container element for specifying <code>Or</code> rule conditions. The rule conditions
 *          determine the subset of objects to which the <code>Or</code> rule applies. Objects can
 *          match any of the listed filter conditions, which are joined by the <code>Or</code> logical
 *          operator. Only one of each filter condition is allowed.</p>
 * @public
 */
export interface StorageLensGroupOrOperator {
  /**
   * <p> Filters objects that match any of the specified prefixes. </p>
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * <p>
   * Filters objects that match any of the specified suffixes.
   * </p>
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * <p>
   * Filters objects that match any of the specified S3 object tags.
   * </p>
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * <p>
   * Filters objects that match the specified object age range.
   * </p>
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * <p>
   * Filters objects that match the specified object size range.
   * </p>
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;
}

/**
 * <p>The filter element sets the criteria for the Storage Lens group data that is displayed.
 *          For multiple filter conditions, the <code>AND</code> or <code>OR</code> logical operator is
 *          used.</p>
 * @public
 */
export interface StorageLensGroupFilter {
  /**
   * <p> Contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes
   *          are allowed. </p>
   * @public
   */
  MatchAnyPrefix?: string[] | undefined;

  /**
   * <p> Contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes
   *          are allowed. </p>
   * @public
   */
  MatchAnySuffix?: string[] | undefined;

  /**
   * <p> Contains the list of S3 object tags. At least one object tag must be specified. Up to
   *          10 object tags are allowed. </p>
   * @public
   */
  MatchAnyTag?: S3Tag[] | undefined;

  /**
   * <p> Contains <code>DaysGreaterThan</code> and <code>DaysLessThan</code> to define the
   *          object age range (minimum and maximum number of days). </p>
   * @public
   */
  MatchObjectAge?: MatchObjectAge | undefined;

  /**
   * <p> Contains <code>BytesGreaterThan</code> and <code>BytesLessThan</code> to define the
   *          object size range (minimum and maximum number of Bytes). </p>
   * @public
   */
  MatchObjectSize?: MatchObjectSize | undefined;

  /**
   * <p>A logical operator that allows multiple filter conditions to be joined for more complex
   *          comparisons of Storage Lens group data. Objects must match all of the listed filter
   *          conditions that are joined by the <code>And</code> logical operator. Only one of each
   *          filter condition is allowed.</p>
   * @public
   */
  And?: StorageLensGroupAndOperator | undefined;

  /**
   * <p>A single logical operator that allows multiple filter conditions to be joined. Objects
   *          can match any of the listed filter conditions, which are joined by the <code>Or</code>
   *          logical operator. Only one of each filter condition is allowed. </p>
   * @public
   */
  Or?: StorageLensGroupOrOperator | undefined;
}

/**
 * <p>A custom grouping of objects that include filters for prefixes, suffixes, object tags,
 *          object size, or object age. You can create an S3 Storage Lens group that includes a single
 *          filter or multiple filter conditions. To specify multiple filter conditions, you use
 *             <code>AND</code> or <code>OR</code> logical operators. </p>
 * @public
 */
export interface StorageLensGroup {
  /**
   * <p> Contains the name of the Storage Lens group. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Sets the criteria for the Storage Lens group data that is displayed. For multiple filter
   *          conditions, the <code>AND</code> or <code>OR</code> logical operator is used.</p>
   * @public
   */
  Filter: StorageLensGroupFilter | undefined;

  /**
   * <p> Contains the Amazon Resource Name (ARN) of the Storage Lens group. This property is
   *          read-only. </p>
   * @public
   */
  StorageLensGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateStorageLensGroupRequest {
  /**
   * <p>
   * The Amazon Web Services account ID that the Storage Lens group is created from and associated with.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The Storage Lens group configuration.
   * </p>
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;

  /**
   * <p>
   * The Amazon Web Services resource tags that you're adding to your Storage Lens group. This parameter is optional.
   * </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</p>
   * @public
   */
  AccessGrantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsInstanceRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsInstanceResourcePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessGrantsLocationRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the registered location that you are deregistering from your S3 Access Grants instance. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point you want to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point whose policy you want to delete.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point you want to delete the policy for.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketRequest {
  /**
   * <p>The account ID that owns the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket being deleted.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * <p>The account ID of the lifecycle configuration to delete.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketPolicyRequest {
  /**
   * <p>The account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketReplicationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration
   *          for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the S3 on Outposts bucket to delete the replication configuration for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket tag set to be removed.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The bucket ARN that has the tag set to be removed.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to delete.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTaggingResult {}

/**
 * <p></p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>An idempotency token used to identify the request and guarantee that requests are
   *          unique.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A container element containing details about the Multi-Region Access Point.</p>
   * @public
   */
  Details: DeleteMultiRegionAccessPointInput | undefined;
}

/**
 * @public
 */
export interface DeleteMultiRegionAccessPointResult {
  /**
   * <p>The request token associated with the request. You can use this token with <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> to determine the status of asynchronous
   *          requests.</p>
   * @public
   */
  RequestTokenARN?: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to remove.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
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
   * <p>
   * The name of the Storage Lens group that you're trying to delete.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The Amazon Web Services account ID used to create the Storage Lens group that you're trying to delete.
   * </p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the job whose information you want to retrieve.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>If this job failed, this element indicates why the job failed.</p>
 * @public
 */
export interface JobFailure {
  /**
   * <p>The failure code, if any, for the specified job.</p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>The failure reason, if any, for the specified job.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>Describes the specified job's generated manifest. Batch Operations jobs created with a
 *          ManifestGenerator populate details of this descriptor after execution of the
 *          ManifestGenerator.</p>
 * @public
 */
export interface S3GeneratedManifestDescriptor {
  /**
   * <p>The format of the generated manifest.</p>
   * @public
   */
  Format?: GeneratedManifestFormat | undefined;

  /**
   * <p>Contains the information required to locate a manifest object. Manifests can't be
   *          imported from directory buckets. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">Directory
   *             buckets</a>.</p>
   * @public
   */
  Location?: JobManifestLocation | undefined;
}

/**
 * <p>Provides timing details for the job.</p>
 * @public
 */
export interface JobTimers {
  /**
   * <p>Indicates the elapsed time in seconds the job has been in the Active job state.</p>
   * @public
   */
  ElapsedTimeInActiveSeconds?: number | undefined;
}

/**
 * <p>Describes the total number of tasks that the specified job has started, the number of
 *          tasks that succeeded, and the number of tasks that failed.</p>
 * @public
 */
export interface JobProgressSummary {
  /**
   * <p></p>
   * @public
   */
  TotalNumberOfTasks?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  NumberOfTasksSucceeded?: number | undefined;

  /**
   * <p></p>
   * @public
   */
  NumberOfTasksFailed?: number | undefined;

  /**
   * <p>The JobTimers attribute of a job's progress summary.</p>
   * @public
   */
  Timers?: JobTimers | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  Active: "Active",
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Complete: "Complete",
  Completing: "Completing",
  Failed: "Failed",
  Failing: "Failing",
  New: "New",
  Paused: "Paused",
  Pausing: "Pausing",
  Preparing: "Preparing",
  Ready: "Ready",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>A container element for the job configuration and status information returned by a
 *             <code>Describe Job</code> request.</p>
 * @public
 */
export interface JobDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job.
   *          Confirmation is required only for jobs created through the Amazon S3 console.</p>
   * @public
   */
  ConfirmationRequired?: boolean | undefined;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code>
   *          request.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   * @public
   */
  JobArn?: string | undefined;

  /**
   * <p>The current status of the specified job.</p>
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * <p>The configuration information for the specified job's manifest object.</p>
   * @public
   */
  Manifest?: JobManifest | undefined;

  /**
   * <p>The operation that the specified job is configured to run on the objects listed in the
   *          manifest.</p>
   * @public
   */
  Operation?: JobOperation | undefined;

  /**
   * <p>The priority of the specified job.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   * @public
   */
  ProgressSummary?: JobProgressSummary | undefined;

  /**
   * <p>The reason for updating the job.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;

  /**
   * <p>If the specified job failed, this field contains information describing the
   *          failure.</p>
   * @public
   */
  FailureReasons?: JobFailure[] | undefined;

  /**
   * <p>Contains the configuration information for the job-completion report if you requested
   *          one in the <code>Create Job</code> request.</p>
   * @public
   */
  Report?: JobReport | undefined;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date
   *          and time when it succeeded, failed, or was canceled.</p>
   * @public
   */
  TerminationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks
   *          for this job.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   * @public
   */
  SuspendedDate?: Date | undefined;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it
   *          through the Amazon S3 console. When you create the job, it enters the <code>Suspended</code>
   *          state to await confirmation before running. After you confirm the job, it automatically
   *          exits the <code>Suspended</code> state.</p>
   * @public
   */
  SuspendedCause?: string | undefined;

  /**
   * <p>The manifest generator that was used to generate a job manifest for this job.</p>
   * @public
   */
  ManifestGenerator?: JobManifestGenerator | undefined;

  /**
   * <p>The attribute of the JobDescriptor containing details about the job's generated
   *          manifest.</p>
   * @public
   */
  GeneratedManifestDescriptor?: S3GeneratedManifestDescriptor | undefined;
}

/**
 * @public
 */
export interface DescribeJobResult {
  /**
   * <p>Contains the configuration parameters and status for the job specified in the
   *             <code>Describe Job</code> request.</p>
   * @public
   */
  Job?: JobDescriptor | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The request token associated with the request you want to know about. This request token
   *          is returned as part of the response when you make an asynchronous request. You provide this
   *          token to query about the status of the asynchronous action.</p>
   * @public
   */
  RequestTokenARN: string | undefined;
}

/**
 * @public
 */
export interface DescribeMultiRegionAccessPointOperationResult {
  /**
   * <p>A container element containing the details of the asynchronous operation.</p>
   * @public
   */
  AsyncOperation?: AsyncOperation | undefined;
}

/**
 * @public
 */
export interface DissociateAccessGrantsIdentityCenterRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</p>
   * @public
   */
  AccessGrantId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantResult {
  /**
   * <p>The date and time when you created the access grant. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</p>
   * @public
   */
  AccessGrantId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access grant. </p>
   * @public
   */
  AccessGrantArn?: string | undefined;

  /**
   * <p>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added a corporate directory to Amazon Web Services IAM Identity Center and associated this Identity Center instance with the S3 Access Grants instance, the grantee can also be a corporate directory user or group.</p>
   * @public
   */
  Grantee?: Grantee | undefined;

  /**
   * <p>The type of permission that was granted in the access grant. Can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register. </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access. </p>
   * @public
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration | undefined;

  /**
   * <p>The S3 path of the data to which you are granting access. It is the result of appending the <code>Subprefix</code> to the location scope.</p>
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.  </p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Access Grants instance. </p>
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * <p>The ID of the S3 Access Grants instance. The ID is <code>default</code>. You can have one S3 Access Grants instance per Region per account. </p>
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;

  /**
   * @deprecated
   *
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html">ListInstances</a> API operation to retrieve a list of your Identity Center instances and their ARNs.</p>
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;

  /**
   * <p>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance. </p>
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;

  /**
   * <p>The date and time when you created the S3 Access Grants instance. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceForPrefixRequest {
  /**
   * <p>The ID of the Amazon Web Services account that is making this request.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 prefix of the access grants that you would like to retrieve.</p>
   * @public
   */
  S3Prefix: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceForPrefixResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Access Grants instance. </p>
   * @public
   */
  AccessGrantsInstanceArn?: string | undefined;

  /**
   * <p>The ID of the S3 Access Grants instance. The ID is <code>default</code>. You can have one S3 Access Grants instance per Region per account. </p>
   * @public
   */
  AccessGrantsInstanceId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResourcePolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsInstanceResourcePolicyResult {
  /**
   * <p>The resource policy of the S3 Access Grants instance.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The Organization of the resource policy of the S3 Access Grants instance.</p>
   * @public
   */
  Organization?: string | undefined;

  /**
   * <p>The date and time when you created the S3 Access Grants instance resource policy. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsLocationRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the registered location that you are retrieving. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccessGrantsLocationResult {
  /**
   * <p>The date and time when you registered the location. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID <code>default</code> to the default location <code>s3://</code> and assigns an auto-generated ID to other locations that you register.  </p>
   * @public
   */
  AccessGrantsLocationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registered location. </p>
   * @public
   */
  AccessGrantsLocationArn?: string | undefined;

  /**
   * <p>The S3 URI path to the registered location. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the <code>engineering/</code> prefix or object key names that start with the <code>marketing/campaigns/</code> prefix.</p>
   * @public
   */
  LocationScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location. </p>
   * @public
   */
  IAMRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point whose configuration information you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointResult {
  /**
   * <p>The name of the specified access point.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the bucket associated with the specified access point.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>Indicates whether this access point allows access from the public internet. If
   *             <code>VpcConfiguration</code> is specified for this access point, then
   *             <code>NetworkOrigin</code> is <code>VPC</code>, and the access point doesn't allow access from
   *          the public internet. Otherwise, <code>NetworkOrigin</code> is <code>Internet</code>, and
   *          the access point allows access from the public internet, subject to the access point and bucket access
   *          policies.</p>
   *          <p>This will always be true for an Amazon S3 on Outposts access point</p>
   * @public
   */
  NetworkOrigin?: NetworkOrigin | undefined;

  /**
   * <p>Contains the virtual private cloud (VPC) configuration for the specified access point.</p>
   *          <note>
   *             <p>This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other
   *                Amazon Web Services services.</p>
   *          </note>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The date and time when the specified access point was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The name or alias of the access point.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The ARN of the access point.</p>
   * @public
   */
  AccessPointArn?: string | undefined;

  /**
   * <p>The VPC endpoint for the access point.</p>
   * @public
   */
  Endpoints?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</p>
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point you want to return the configuration for.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointConfigurationForObjectLambdaResult {
  /**
   * <p>Object Lambda Access Point configuration document.</p>
   * @public
   */
  Configuration?: ObjectLambdaConfiguration | undefined;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointForObjectLambdaResult {
  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Configuration to block all public access. This setting is turned on and can not be
   *          edited. </p>
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The date and time when the specified Object Lambda Access Point was created.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The alias of the Object Lambda Access Point.</p>
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point whose policy you want to retrieve.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/accesspoint/<my-accesspoint-name></code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyResult {
  /**
   * <p>The access point policy associated with the specified access point.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyForObjectLambdaResult {
  /**
   * <p>Object Lambda Access Point resource policy document.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusRequest {
  /**
   * <p>The account ID for the account that owns the specified access point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the access point whose policy status you want to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
 *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
 * @public
 */
export interface PolicyStatus {
  /**
   * <p></p>
   * @public
   */
  IsPublic?: boolean | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusResult {
  /**
   * <p>Indicates the current policy status of the specified access point.</p>
   * @public
   */
  PolicyStatus?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPointPolicyStatusForObjectLambdaResult {
  /**
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   * @public
   */
  PolicyStatus?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetBucketRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketResult {
  /**
   * <p>The Outposts bucket requested.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  PublicAccessBlockEnabled?: boolean | undefined;

  /**
   * <p>The creation date of the Outposts bucket.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * <p>The container of the Outposts bucket lifecycle expiration.</p>
 * @public
 */
export interface LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be deleted. Should be in GMT ISO 8601
   *          format.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired. If set to false, the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   * @public
   */
  ExpiredObjectDeleteMarker?: boolean | undefined;
}

/**
 * <p>The container for the Outposts bucket lifecycle rule and operator.</p>
 * @public
 */
export interface LifecycleRuleAndOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   * @public
   */
  Tags?: S3Tag[] | undefined;

  /**
   * <p>The non-inclusive minimum object size for the lifecycle rule. Setting this property to 7 means the rule applies to objects with a size that is greater than 7. </p>
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * <p>The non-inclusive maximum object size for the lifecycle rule. Setting this property to 77 means the rule applies to objects with a size that is less than 77. </p>
   * @public
   */
  ObjectSizeLessThan?: number | undefined;
}

/**
 * <p>The container for the filter of the lifecycle rule.</p>
 * @public
 */
export interface LifecycleRuleFilter {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A container for a key-value name pair.</p>
   * @public
   */
  Tag?: S3Tag | undefined;

  /**
   * <p>The container for the <code>AND</code> condition for the lifecycle rule.</p>
   * @public
   */
  And?: LifecycleRuleAndOperator | undefined;

  /**
   * <p>Minimum object size to which the rule applies.</p>
   * @public
   */
  ObjectSizeGreaterThan?: number | undefined;

  /**
   * <p>Maximum object size to which the rule applies.</p>
   * @public
   */
  ObjectSizeLessThan?: number | undefined;
}

/**
 * <p>The container of the noncurrent version expiration.</p>
 * @public
 */
export interface NoncurrentVersionExpiration {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * <p>Specifies how many noncurrent versions S3 on Outposts will retain. If there are this many
   *          more recent noncurrent versions, S3 on Outposts will take the associated action. For more
   *          information about noncurrent versions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html">Lifecycle configuration
   *             elements</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  NewerNoncurrentVersions?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TransitionStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type TransitionStorageClass = (typeof TransitionStorageClass)[keyof typeof TransitionStorageClass];

/**
 * <p>The container for the noncurrent version transition.</p>
 * @public
 */
export interface NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations"> How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  NoncurrentDays?: number | undefined;

  /**
   * <p>The class of storage used to store the object.</p>
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;
}

/**
 * @public
 * @enum
 */
export const ExpirationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExpirationStatus = (typeof ExpirationStatus)[keyof typeof ExpirationStatus];

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">
 *             Transitioning objects using Amazon S3 Lifecycle</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   * @public
   */
  StorageClass?: TransitionStorageClass | undefined;
}

/**
 * <p>The container for the Outposts bucket lifecycle rule.</p>
 * @public
 */
export interface LifecycleRule {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   * @public
   */
  Expiration?: LifecycleExpiration | undefined;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   * @public
   */
  ID?: string | undefined;

  /**
   * <p>The container for the filter of lifecycle rule.</p>
   * @public
   */
  Filter?: LifecycleRuleFilter | undefined;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   * @public
   */
  Status: ExpirationStatus | undefined;

  /**
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  Transitions?: Transition[] | undefined;

  /**
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[] | undefined;

  /**
   * <p>The noncurrent version expiration of the lifecycle rule.</p>
   * @public
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration | undefined;

  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3
   *          waits before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a> in
   *          the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload | undefined;
}

/**
 * @public
 */
export interface GetBucketLifecycleConfigurationResult {
  /**
   * <p>Container for the lifecycle rule of the Outposts bucket.</p>
   * @public
   */
  Rules?: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketPolicyResult {
  /**
   * <p>The policy of the Outposts bucket.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket to get the replication information for.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeleteMarkerReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type DeleteMarkerReplicationStatus =
  (typeof DeleteMarkerReplicationStatus)[keyof typeof DeleteMarkerReplicationStatus];

/**
 * <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a
 *             <code>Filter</code> element in your replication configuration, you must also include a
 *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
 *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's
 *             <code>Status</code> child element must be set to <code>Disabled</code>, because
 *          S3 on Outposts does not support replicating delete markers for tag-based rules.</p>
 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the
 *             <i>Amazon S3 User Guide</i>. </p>
 * @public
 */
export interface DeleteMarkerReplication {
  /**
   * <p>Indicates whether to replicate delete markers.</p>
   * @public
   */
  Status: DeleteMarkerReplicationStatus | undefined;
}

/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for
 *          replicated objects. If you're specifying a customer managed KMS key, we recommend using a fully qualified
 *          KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the
 *          requester’s account. This behavior can result in data that's encrypted with a KMS key
 *          that belongs to the requester, and not the bucket owner.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>Specifies the ID of the customer managed KMS key that's stored in Key Management Service (KMS)
   *          for the destination bucket. This ID is either the Amazon Resource Name (ARN) for the
   *          KMS key or the alias ARN for the KMS key. Amazon S3 uses this KMS key to encrypt
   *          replica objects. Amazon S3 supports only symmetric encryption KMS keys. For more information,
   *          see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks">Symmetric encryption
   *             KMS keys</a> in the <i>Amazon Web Services Key Management Service Developer
   *             Guide</i>.</p>
   * @public
   */
  ReplicaKmsKeyID?: string | undefined;
}

/**
 * <p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for
 *          the replication metrics <code>EventThreshold</code> element. </p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface ReplicationTimeValue {
  /**
   * <p>Contains an integer that specifies the time period in minutes. </p>
   *          <p>Valid value: 15</p>
   * @public
   */
  Minutes?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * <p>A container that specifies replication metrics-related settings.</p>
 * @public
 */
export interface Metrics {
  /**
   * <p>Specifies whether replication metrics are enabled. </p>
   * @public
   */
  Status: MetricsStatus | undefined;

  /**
   * <p>A container that specifies the time threshold for emitting the
   *             <code>s3:Replication:OperationMissedThreshold</code> event. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  EventThreshold?: ReplicationTimeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationTimeStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationTimeStatus = (typeof ReplicationTimeStatus)[keyof typeof ReplicationTimeStatus];

/**
 * <p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC
 *          is enabled and the time when all objects and operations on objects must be
 *          replicated.</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface ReplicationTime {
  /**
   * <p>Specifies whether S3 Replication Time Control (S3 RTC) is enabled. </p>
   * @public
   */
  Status: ReplicationTimeStatus | undefined;

  /**
   * <p>A container that specifies the time by which replication should be complete for all
   *          objects and operations on objects. </p>
   * @public
   */
  Time: ReplicationTimeValue | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type ReplicationStorageClass = (typeof ReplicationStorageClass)[keyof typeof ReplicationStorageClass];

/**
 * <p>Specifies information about the replication destination bucket and its settings for an
 *          S3 on Outposts replication configuration.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The destination bucket owner's account ID. </p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access point for the destination bucket where you want
   *          S3 on Outposts to store the replication results.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A container that specifies S3 Replication Time Control (S3 RTC) settings, including whether S3 RTC is enabled
   *          and the time when all objects and operations on objects must be replicated. Must be
   *          specified together with a <code>Metrics</code> block. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  ReplicationTime?: ReplicationTime | undefined;

  /**
   * <p>Specify this property only in a cross-account scenario (where the source and destination
   *          bucket owners are not the same), and you want to change replica ownership to the
   *          Amazon Web Services account that owns the destination bucket. If this property is not specified in the
   *          replication configuration, the replicas are owned by same Amazon Web Services account that owns the
   *          source object.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  AccessControlTranslation?: AccessControlTranslation | undefined;

  /**
   * <p>A container that provides information about encryption. If
   *             <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p> A container that specifies replication metrics-related settings. </p>
   * @public
   */
  Metrics?: Metrics | undefined;

  /**
   * <p> The storage class to use when replicating objects. All objects stored on S3 on Outposts
   *          are stored in the <code>OUTPOSTS</code> storage class. S3 on Outposts uses the
   *             <code>OUTPOSTS</code> storage class to create the object replicas. </p>
   *          <note>
   *             <p>Values other than <code>OUTPOSTS</code> aren't supported by Amazon S3 on Outposts. </p>
   *          </note>
   * @public
   */
  StorageClass?: ReplicationStorageClass | undefined;
}

/**
 * @public
 * @enum
 */
export const ExistingObjectReplicationStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ExistingObjectReplicationStatus =
  (typeof ExistingObjectReplicationStatus)[keyof typeof ExistingObjectReplicationStatus];

/**
 * <p>An optional configuration to replicate existing source bucket objects. </p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface ExistingObjectReplication {
  /**
   * <p>Specifies whether Amazon S3 replicates existing source bucket objects. </p>
   * @public
   */
  Status: ExistingObjectReplicationStatus | undefined;
}

/**
 * <p>A container for specifying rule filters. The filters determine the subset of objects to
 *          which the rule applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
 *                these filters in an <code>And</code> element. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
 *                in an <code>And</code> element.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ReplicationRuleAndOperator {
  /**
   * <p>An object key name prefix that identifies the subset of objects that the rule applies
   *          to.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>An array of tags that contain key and value pairs.</p>
   * @public
   */
  Tags?: S3Tag[] | undefined;
}

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *             <code>Filter</code> element must specify exactly one <code>Prefix</code>,
 *             <code>Tag</code>, or <code>And</code> child element.</p>
 * @public
 */
export interface ReplicationRuleFilter {
  /**
   * <p>An object key name prefix that identifies the subset of objects that the rule applies
   *          to.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A container for a key-value name pair.</p>
   * @public
   */
  Tag?: S3Tag | undefined;

  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects
   *          that the rule applies to. This element is required only if you specify more than one
   *          filter. For example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
   *                these filters in an <code>And</code> element.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
   *                in an <code>And</code> element.</p>
   *             </li>
   *          </ul>
   * @public
   */
  And?: ReplicationRuleAndOperator | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicaModificationsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicaModificationsStatus = (typeof ReplicaModificationsStatus)[keyof typeof ReplicaModificationsStatus];

/**
 * <p>A filter that you can use to specify whether replica modification sync is enabled.
 *          S3 on Outposts replica modification sync can help you keep object metadata synchronized
 *          between replicas and source objects. By default, S3 on Outposts replicates metadata from the
 *          source objects to the replicas only. When replica modification sync is enabled,
 *          S3 on Outposts replicates metadata changes made to the replica copies back to the source
 *          object, making the replication bidirectional.</p>
 *          <p>To replicate object metadata modifications on replicas, you can specify this element and
 *          set the <code>Status</code> of this element to <code>Enabled</code>.</p>
 *          <note>
 *             <p>You must enable replica modification sync on the source and destination buckets to
 *             replicate replica metadata changes between the source and the replicas.</p>
 *          </note>
 * @public
 */
export interface ReplicaModifications {
  /**
   * <p>Specifies whether S3 on Outposts replicates modifications to object metadata on
   *          replicas.</p>
   * @public
   */
  Status: ReplicaModificationsStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const SseKmsEncryptedObjectsStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type SseKmsEncryptedObjectsStatus =
  (typeof SseKmsEncryptedObjectsStatus)[keyof typeof SseKmsEncryptedObjectsStatus];

/**
 * <p>A container for filter information that you can use to select S3 objects that are
 *          encrypted with Key Management Service (KMS).</p>
 *          <note>
 *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
 *          </note>
 * @public
 */
export interface SseKmsEncryptedObjects {
  /**
   * <p>Specifies whether Amazon S3 replicates objects that are created with server-side encryption
   *          by using an KMS key stored in Key Management Service.</p>
   * @public
   */
  Status: SseKmsEncryptedObjectsStatus | undefined;
}

/**
 * <p>A container that describes additional filters for identifying the source objects that
 *          you want to replicate. You can choose to enable or disable the replication of these
 *          objects.</p>
 * @public
 */
export interface SourceSelectionCriteria {
  /**
   * <p>A filter that you can use to select Amazon S3 objects that are encrypted with server-side
   *          encryption by using Key Management Service (KMS) keys. If you include
   *             <code>SourceSelectionCriteria</code> in the replication configuration, this element is
   *          required. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects | undefined;

  /**
   * <p>A filter that you can use to specify whether replica modification sync is enabled.
   *          S3 on Outposts replica modification sync can help you keep object metadata synchronized
   *          between replicas and source objects. By default, S3 on Outposts replicates metadata from the
   *          source objects to the replicas only. When replica modification sync is enabled,
   *          S3 on Outposts replicates metadata changes made to the replica copies back to the source
   *          object, making the replication bidirectional.</p>
   *          <p>To replicate object metadata modifications on replicas, you can specify this element and
   *          set the <code>Status</code> of this element to <code>Enabled</code>.</p>
   *          <note>
   *             <p>You must enable replica modification sync on the source and destination buckets to
   *             replicate replica metadata changes between the source and the replicas.</p>
   *          </note>
   * @public
   */
  ReplicaModifications?: ReplicaModifications | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationRuleStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ReplicationRuleStatus = (typeof ReplicationRuleStatus)[keyof typeof ReplicationRuleStatus];

/**
 * <p>Specifies which S3 on Outposts objects to replicate and where to store the
 *          replicas.</p>
 * @public
 */
export interface ReplicationRule {
  /**
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   * @public
   */
  ID?: string | undefined;

  /**
   * <p>The priority indicates which rule has precedence whenever two or more replication rules
   *          conflict. S3 on Outposts attempts to replicate objects according to all replication rules.
   *          However, if there are two or more rules with the same destination Outposts bucket, then
   *          objects will be replicated according to the rule with the highest priority. The higher the
   *          number, the higher the priority. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-between-outposts.html">Creating replication
   *             rules on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * @deprecated
   *
   * <p>An object key name prefix that identifies the object or objects to which the rule
   *          applies. The maximum prefix length is 1,024 characters. To include all objects in an
   *          Outposts bucket, specify an empty string.</p>
   *          <important>
   *             <p>When you're using XML requests, you must
   * replace special characters (such as carriage returns) in object keys with their equivalent XML entity codes.
   * For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints">
   *             XML-related object key constraints</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </important>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *             <code>Filter</code> element must specify exactly one <code>Prefix</code>,
   *             <code>Tag</code>, or <code>And</code> child element.</p>
   * @public
   */
  Filter?: ReplicationRuleFilter | undefined;

  /**
   * <p>Specifies whether the rule is enabled.</p>
   * @public
   */
  Status: ReplicationRuleStatus | undefined;

  /**
   * <p>A container that describes additional filters for identifying the source Outposts
   *          objects that you want to replicate. You can choose to enable or disable the replication of
   *          these objects.</p>
   * @public
   */
  SourceSelectionCriteria?: SourceSelectionCriteria | undefined;

  /**
   * <p>An optional configuration to replicate existing source bucket objects. </p>
   *          <note>
   *             <p>This is not supported by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  ExistingObjectReplication?: ExistingObjectReplication | undefined;

  /**
   * <p>A container for information about the replication destination and its
   *          configurations.</p>
   * @public
   */
  Destination: Destination | undefined;

  /**
   * <p>Specifies whether S3 on Outposts replicates delete markers. If you specify a
   *             <code>Filter</code> element in your replication configuration, you must also include a
   *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
   *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's
   *             <code>Status</code> child element must be set to <code>Disabled</code>, because
   *          S3 on Outposts doesn't support replicating delete markers for tag-based rules.</p>
   *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the
   *             <i>Amazon S3 User Guide</i>. </p>
   * @public
   */
  DeleteMarkerReplication?: DeleteMarkerReplication | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the access point for the source Outposts bucket that you want
   *          S3 on Outposts to replicate the objects from.</p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * <p>A container for one or more replication rules. A replication configuration must have at
 *          least one rule and you can add up to 100 rules. The maximum size of a replication
 *          configuration is 128 KB.</p>
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that S3 on Outposts assumes
   *          when replicating objects. For information about S3 replication on Outposts configuration,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-how-setup.html">Setting up
   *             replication</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain an array of 100 rules at the most. </p>
   * @public
   */
  Rules: ReplicationRule[] | undefined;
}

/**
 * @public
 */
export interface GetBucketReplicationResult {
  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and you can add up to 100 rules. The maximum size of a replication
   *          configuration is 128 KB.</p>
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the bucket.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 */
export interface GetBucketTaggingResult {
  /**
   * <p>The tags set of the Outposts bucket.</p>
   * @public
   */
  TagSet: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBucketVersioningRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 on Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 on Outposts bucket to return the versioning state for.</p>
   * @public
   */
  Bucket: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MFADeleteStatus = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADeleteStatus = (typeof MFADeleteStatus)[keyof typeof MFADeleteStatus];

/**
 * @public
 * @enum
 */
export const BucketVersioningStatus = {
  Enabled: "Enabled",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type BucketVersioningStatus = (typeof BucketVersioningStatus)[keyof typeof BucketVersioningStatus];

/**
 * @public
 */
export interface GetBucketVersioningResult {
  /**
   * <p>The versioning state of the S3 on Outposts bucket.</p>
   * @public
   */
  Status?: BucketVersioningStatus | undefined;

  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is returned only if the bucket has been configured with MFA delete. If MFA delete
   *          has never been configured for the bucket, this element is not returned.</p>
   * @public
   */
  MFADelete?: MFADeleteStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const Privilege = {
  Default: "Default",
  Minimal: "Minimal",
} as const;

/**
 * @public
 */
export type Privilege = (typeof Privilege)[keyof typeof Privilege];

/**
 * @public
 */
export interface GetDataAccessRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 URI path of the data to which you are requesting temporary access credentials. If the requesting account has an access grant for this data, S3 Access Grants vends temporary access credentials in the response.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>The type of permission granted to your S3 data, which can be set to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission: Permission | undefined;

  /**
   * <p>The session duration, in seconds, of the temporary access credential that S3 Access Grants vends to the grantee or client application. The default value is 1 hour, but the grantee can specify a range from 900 seconds (15 minutes) up to 43200 seconds (12 hours). If the grantee requests a value higher than this maximum, the operation fails. </p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>The scope of the temporary access credential that S3 Access Grants vends to the grantee or client application. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Default</code> – The scope of the returned temporary access token is the scope of the grant that is closest to the target scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Minimal</code> – The scope of the returned temporary access token is the same as the requested target scope as long as the requested scope is the same as or a subset of the grant scope. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Privilege?: Privilege | undefined;

  /**
   * <p>The type of <code>Target</code>. The only possible value is <code>Object</code>. Pass this value if the target data that you would like to access is a path to an object. Do not pass this value if the target data is a bucket or a bucket and a prefix. </p>
   * @public
   */
  TargetType?: S3PrefixType | undefined;
}

/**
 * <p>The Amazon Web Services Security Token Service temporary credential that S3 Access Grants vends to grantees and client applications. </p>
 * @public
 */
export interface Credentials {
  /**
   * <p>The unique access key ID of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. </p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The secret access key of the Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. </p>
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * <p>The Amazon Web Services STS temporary credential that S3 Access Grants vends to grantees and client applications. </p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>The expiration date and time of the temporary credential that S3 Access Grants vends to grantees and client applications. </p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetDataAccessResult {
  /**
   * <p>The temporary credential token that S3 Access Grants vends.</p>
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * <p>The S3 URI path of the data to which you are being granted temporary access credentials. </p>
   * @public
   */
  MatchedGrantTarget?: string | undefined;
}

/**
 * @public
 */
export interface GetJobTaggingRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID for the S3 Batch Operations job whose tags you want to retrieve.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobTaggingResult {
  /**
   * <p>The set of tags associated with the S3 Batch Operations job.</p>
   * @public
   */
  Tags?: S3Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the Multi-Region Access Point whose configuration information you want to receive. The name of
   *          the Multi-Region Access Point is different from the alias. For more information about the distinction between
   *          the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Rules for naming Amazon S3 Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A combination of a bucket and Region that's part of a Multi-Region Access Point.</p>
 * @public
 */
export interface RegionReport {
  /**
   * <p>The name of the bucket.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The name of the Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket that's associated with this
   *          Multi-Region Access Point.</p>
   * @public
   */
  BucketAccountId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MultiRegionAccessPointStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  INCONSISTENT_ACROSS_REGIONS: "INCONSISTENT_ACROSS_REGIONS",
  PARTIALLY_CREATED: "PARTIALLY_CREATED",
  PARTIALLY_DELETED: "PARTIALLY_DELETED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type MultiRegionAccessPointStatus =
  (typeof MultiRegionAccessPointStatus)[keyof typeof MultiRegionAccessPointStatus];

/**
 * <p>A collection of statuses for a Multi-Region Access Point in the various Regions it supports.</p>
 * @public
 */
export interface MultiRegionAccessPointReport {
  /**
   * <p>The name of the Multi-Region Access Point.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The alias for the Multi-Region Access Point. For more information about the distinction between the name
   *          and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Rules for naming Amazon S3 Multi-Region Access Points</a>.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>When the Multi-Region Access Point create request was received.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          account. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>This data type is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  PublicAccessBlock?: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The current status of the Multi-Region Access Point.</p>
   *          <p>
   *             <code>CREATING</code> and <code>DELETING</code> are temporary states that exist while
   *          the request is propagating and being completed. If a Multi-Region Access Point has a status of
   *             <code>PARTIALLY_CREATED</code>, you can retry creation or send a request to delete the
   *          Multi-Region Access Point. If a Multi-Region Access Point has a status of <code>PARTIALLY_DELETED</code>, you can retry a delete
   *          request to finish the deletion of the Multi-Region Access Point.</p>
   * @public
   */
  Status?: MultiRegionAccessPointStatus | undefined;

  /**
   * <p>A collection of the Regions and buckets associated with the Multi-Region Access Point.</p>
   * @public
   */
  Regions?: RegionReport[] | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointResult {
  /**
   * <p>A container element containing the details of the requested Multi-Region Access Point.</p>
   * @public
   */
  AccessPoint?: MultiRegionAccessPointReport | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Rules for naming Amazon S3 Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The last established access control policy for a Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 * @public
 */
export interface EstablishedMultiRegionAccessPointPolicy {
  /**
   * <p>The details of the last established policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>The proposed access control policy for the Multi-Region Access Point.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 * @public
 */
export interface ProposedMultiRegionAccessPointPolicy {
  /**
   * <p>The details of the proposed policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>The Multi-Region Access Point access control policy.</p>
 *          <p>When you update the policy, the update is first listed as the proposed policy. After the
 *          update is finished and all Regions have been updated, the proposed policy is listed as the
 *          established policy. If both policies have the same version number, the proposed policy is
 *          the established policy.</p>
 * @public
 */
export interface MultiRegionAccessPointPolicyDocument {
  /**
   * <p>The last established policy for the Multi-Region Access Point.</p>
   * @public
   */
  Established?: EstablishedMultiRegionAccessPointPolicy | undefined;

  /**
   * <p>The proposed policy for the Multi-Region Access Point.</p>
   * @public
   */
  Proposed?: ProposedMultiRegionAccessPointPolicy | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyResult {
  /**
   * <p>The policy associated with the specified Multi-Region Access Point.</p>
   * @public
   */
  Policy?: MultiRegionAccessPointPolicyDocument | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more
   *          information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Rules for naming Amazon S3 Multi-Region Access Points</a> in the
   *          <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointPolicyStatusResult {
  /**
   * <p>Indicates whether this access point policy is public. For more information about how Amazon S3
   *          evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. </p>
   * @public
   */
  Established?: PolicyStatus | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Multi-Region Access Point ARN.</p>
   * @public
   */
  Mrap: string | undefined;
}

/**
 * <p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be
 *          either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but
 *          passive routes are not eligible to process Amazon S3 requests. </p>
 *          <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located
 *          in. The route also includes the <code>TrafficDialPercentage</code> value, which shows
 *          whether the bucket and Region are active (indicated by a value of <code>100</code>) or
 *          passive (indicated by a value of <code>0</code>).</p>
 * @public
 */
export interface MultiRegionAccessPointRoute {
  /**
   * <p>The name of the Amazon S3 bucket for which you'll submit a routing configuration change.
   *          Either the <code>Bucket</code> or the <code>Region</code> value must be provided. If both
   *          are provided, the bucket must be in the specified Region.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The Amazon Web Services Region to which you'll be submitting a routing configuration change. Either
   *          the <code>Bucket</code> or the <code>Region</code> value must be provided. If both are
   *          provided, the bucket must be in the specified Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The traffic state for the specified bucket or Amazon Web Services Region. </p>
   *          <p>A value of <code>0</code> indicates a passive state, which means that no new traffic
   *          will be routed to the Region. </p>
   *          <p>A value of <code>100</code> indicates an active state, which means that traffic will be
   *          routed to the specified Region. </p>
   *          <p>When the routing configuration for a Region is changed from active to passive, any
   *          in-progress operations (uploads, copies, deletes, and so on) to the formerly active Region
   *          will continue to run to until a final success or failure status is reached.</p>
   *          <p>If all Regions in the routing configuration are designated as passive, you'll receive an
   *             <code>InvalidRequest</code> error.</p>
   * @public
   */
  TrafficDialPercentage: number | undefined;
}

/**
 * @public
 */
export interface GetMultiRegionAccessPointRoutesResult {
  /**
   * <p>The Multi-Region Access Point ARN.</p>
   * @public
   */
  Mrap?: string | undefined;

  /**
   * <p>The different routes that make up the route configuration. Active routes return a value
   *          of <code>100</code>, and passive routes return a value of <code>0</code>.</p>
   * @public
   */
  Routes?: MultiRegionAccessPointRoute[] | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockOutput {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this
   *          Amazon Web Services account.</p>
   * @public
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration | undefined;
}

/**
 * @public
 */
export interface GetPublicAccessBlockRequest {
  /**
   * <p>The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration
   *          you want to retrieve.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>Amazon S3 throws this exception if you make a <code>GetPublicAccessBlock</code> request
 *          against an account that doesn't have a <code>PublicAccessBlockConfiguration</code>
 *          set.</p>
 * @public
 */
export class NoSuchPublicAccessBlockConfiguration extends __BaseException {
  readonly name: "NoSuchPublicAccessBlockConfiguration" = "NoSuchPublicAccessBlockConfiguration";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchPublicAccessBlockConfiguration, __BaseException>) {
    super({
      name: "NoSuchPublicAccessBlockConfiguration",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchPublicAccessBlockConfiguration.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetStorageLensConfigurationRequest {
  /**
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>The Amazon Web Services organization for your S3 Storage Lens.</p>
 * @public
 */
export interface StorageLensAwsOrg {
  /**
   * <p>A container for the Amazon Resource Name (ARN) of the Amazon Web Services organization. This property
   *          is read-only and follows the following format: <code>
   *                arn:aws:organizations:<i>us-east-1</i>:<i>example-account-id</i>:organization/<i>o-ex2l495dck</i>
   *             </code>
   *          </p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
 *          <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor
 *             S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface CloudWatchMetrics {
  /**
   * <p>A container that indicates whether CloudWatch publishing for S3 Storage Lens metrics is enabled. A
   *          value of <code>true</code> indicates that CloudWatch publishing for S3 Storage Lens metrics is
   *          enabled.</p>
   * @public
   */
  IsEnabled: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface SSEKMS {
  /**
   * <p>A container for the ARN of the SSE-KMS encryption. This property is read-only and
   *          follows the following format: <code>
   *                arn:aws:kms:<i>us-east-1</i>:<i>example-account-id</i>:key/<i>example-9a73-4afc-8d29-8f5900cef44e</i>
   *             </code>
   *          </p>
   * @public
   */
  KeyId: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface SSES3 {}

/**
 * <p>A container for the encryption of the S3 Storage Lens metrics exports.</p>
 * @public
 */
export interface StorageLensDataExportEncryption {
  /**
   * <p></p>
   * @public
   */
  SSES3?: SSES3 | undefined;

  /**
   * <p></p>
   * @public
   */
  SSEKMS?: SSEKMS | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  Parquet: "Parquet",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const OutputSchemaVersion = {
  V_1: "V_1",
} as const;

/**
 * @public
 */
export type OutputSchemaVersion = (typeof OutputSchemaVersion)[keyof typeof OutputSchemaVersion];

/**
 * <p>A container for the bucket where the Amazon S3 Storage Lens metrics export files are
 *          located.</p>
 * @public
 */
export interface S3BucketDestination {
  /**
   * <p></p>
   * @public
   */
  Format: Format | undefined;

  /**
   * <p>The schema version of the export file.</p>
   * @public
   */
  OutputSchemaVersion: OutputSchemaVersion | undefined;

  /**
   * <p>The account ID of the owner of the S3 Storage Lens metrics export bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket. This property is read-only and follows the
   *          following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:bucket/<i>your-destination-bucket-name</i>
   *             </code>
   *          </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The prefix of the destination bucket where the metrics export will be delivered.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The container for the type encryption of the metrics exports in this bucket.</p>
   * @public
   */
  Encryption?: StorageLensDataExportEncryption | undefined;
}

/**
 * <p>A container to specify the properties of your S3 Storage Lens metrics export, including the
 *          destination, schema, and format.</p>
 * @public
 */
export interface StorageLensDataExport {
  /**
   * <p>A container for the bucket where the S3 Storage Lens metrics export will be located.</p>
   *          <note>
   *             <p>This bucket must be located in the same Region as the storage lens configuration.
   *          </p>
   *          </note>
   * @public
   */
  S3BucketDestination?: S3BucketDestination | undefined;

  /**
   * <p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p>
   * @public
   */
  CloudWatchMetrics?: CloudWatchMetrics | undefined;
}

/**
 * <p>A container for what Amazon S3 Storage Lens will exclude.</p>
 * @public
 */
export interface _Exclude {
  /**
   * <p>A container for the S3 Storage Lens bucket excludes.</p>
   * @public
   */
  Buckets?: string[] | undefined;

  /**
   * <p>A container for the S3 Storage Lens Region excludes.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * <p>A container for what Amazon S3 Storage Lens configuration includes.</p>
 * @public
 */
export interface Include {
  /**
   * <p>A container for the S3 Storage Lens bucket includes.</p>
   * @public
   */
  Buckets?: string[] | undefined;

  /**
   * <p>A container for the S3 Storage Lens Region includes.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * <p>A container for the Amazon S3 Storage Lens configuration.</p>
 * @public
 */
export interface StorageLensConfiguration {
  /**
   * <p>A container for the Amazon S3 Storage Lens configuration ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A container for all the account-level configurations of your S3 Storage Lens
   *          configuration.</p>
   * @public
   */
  AccountLevel: AccountLevel | undefined;

  /**
   * <p>A container for what is included in this configuration. This container can only be valid
   *          if there is no <code>Exclude</code> container submitted, and it's not empty. </p>
   * @public
   */
  Include?: Include | undefined;

  /**
   * <p>A container for what is excluded in this configuration. This container can only be valid
   *          if there is no <code>Include</code> container submitted, and it's not empty. </p>
   * @public
   */
  Exclude?: _Exclude | undefined;

  /**
   * <p>A container to specify the properties of your S3 Storage Lens metrics export including, the
   *          destination, schema and format.</p>
   * @public
   */
  DataExport?: StorageLensDataExport | undefined;

  /**
   * <p>A container for whether the S3 Storage Lens configuration is enabled.</p>
   * @public
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>A container for the Amazon Web Services organization for this S3 Storage Lens configuration.</p>
   * @public
   */
  AwsOrg?: StorageLensAwsOrg | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only
   *          and follows the following format: <code>
   *                arn:aws:s3:<i>us-east-1</i>:<i>example-account-id</i>:storage-lens/<i>your-dashboard-name</i>
   *             </code>
   *          </p>
   * @public
   */
  StorageLensArn?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationResult {
  /**
   * <p>The S3 Storage Lens configuration requested.</p>
   * @public
   */
  StorageLensConfiguration?: StorageLensConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingRequest {
  /**
   * <p>The ID of the Amazon S3 Storage Lens configuration.</p>
   * @public
   */
  ConfigId: string | undefined;

  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StorageLensTag {
  /**
   * <p></p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensConfigurationTaggingResult {
  /**
   * <p>The tags of S3 Storage Lens configuration requested.</p>
   * @public
   */
  Tags?: StorageLensTag[] | undefined;
}

/**
 * @public
 */
export interface GetStorageLensGroupRequest {
  /**
   * <p>
   * The name of the Storage Lens group that you're trying to retrieve the configuration details for.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The Amazon Web Services account ID associated with the Storage Lens group that you're trying to retrieve the details for.
   * </p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetStorageLensGroupResult {
  /**
   * <p>
   * The name of the Storage Lens group that you're trying to retrieve the configuration details for.
   * </p>
   * @public
   */
  StorageLensGroup?: StorageLensGroup | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access grants that you would like returned in the <code>List Access Grants</code> response. If the results include the pagination token <code>NextToken</code>, make another call using the <code>NextToken</code> to determine if there are more results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The type of the grantee to which access has been granted. It can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IAM</code> - An IAM user or role.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECTORY_USER</code> - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIRECTORY_GROUP</code> - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GranteeType?: GranteeType | undefined;

  /**
   * <p>The unique identifer of the <code>Grantee</code>. If the grantee type is <code>IAM</code>, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.</p>
   * @public
   */
  GranteeIdentifier?: string | undefined;

  /**
   * <p>The type of permission granted to your S3 data, which can be set to one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> – Grant read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> – Grant write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> – Grant both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * <p>The S3 path of the data to which you are granting access. It is the result of appending the <code>Subprefix</code> to the location scope.</p>
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsResult {
  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A container for a list of grants in an S3 Access Grants instance.</p>
   * @public
   */
  AccessGrantsList?: ListAccessGrantEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsInstancesRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants Instances</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access grants that you would like returned in the <code>List Access Grants</code> response. If the results include the pagination token <code>NextToken</code>, make another call using the <code>NextToken</code> to determine if there are more results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsInstancesResult {
  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants Instances</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A container for a list of S3 Access Grants instances.</p>
   * @public
   */
  AccessGrantsInstancesList?: ListAccessGrantsInstanceEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsLocationsRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants Locations</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access grants that you would like returned in the <code>List Access Grants</code> response. If the results include the pagination token <code>NextToken</code>, make another call using the <code>NextToken</code> to determine if there are more results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The S3 path to the location that you are registering. The location scope can be the default S3 location <code>s3://</code>, the S3 path to a bucket <code>s3://<bucket></code>, or the S3 path to a bucket and prefix <code>s3://<bucket>/<prefix></code>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the <code>engineering/</code> prefix or object key names that start with the <code>marketing/campaigns/</code> prefix.</p>
   * @public
   */
  LocationScope?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessGrantsLocationsResult {
  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Access Grants Locations</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A container for a list of registered locations in an S3 Access Grants instance.</p>
   * @public
   */
  AccessGrantsLocationsList?: ListAccessGrantsLocationsEntry[] | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsRequest {
  /**
   * <p>The Amazon Web Services account ID for the account that owns the specified access points.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The name of the bucket whose associated access points you want to list.</p>
   *          <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p>
   *          <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must  specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/bucket/<my-bucket-name></code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded.  </p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>A continuation token. If a previous call to <code>ListAccessPoints</code> returned a
   *          continuation token in the <code>NextToken</code> field, then providing that value here
   *          causes Amazon S3 to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access points that you want to include in the list. If the specified
   *          bucket has more than this number of access points, then the response will include a continuation
   *          token in the <code>NextToken</code> field that you can use to retrieve the next page of
   *          access points.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsResult {
  /**
   * <p>Contains identification and configuration information for one or more access points associated
   *          with the specified bucket.</p>
   * @public
   */
  AccessPointList?: AccessPoint[] | undefined;

  /**
   * <p>If the specified bucket has more access points than can be returned in one call to this API,
   *          this field contains a continuation token that you can provide in subsequent calls to this
   *          API to retrieve additional access points.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaRequest {
  /**
   * <p>The account ID for the account that owns the specified Object Lambda Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access points that you want to include in the list. The response may
   *          contain fewer access points but will never contain more. If there are more than this number of
   *          access points, then the response will include a continuation token in the <code>NextToken</code>
   *          field that you can use to retrieve the next page of access points.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>An access point with an attached Lambda function used to access transformed data from an Amazon S3
 *          bucket.</p>
 * @public
 */
export interface ObjectLambdaAccessPoint {
  /**
   * <p>The name of the Object Lambda Access Point.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the ARN for the Object Lambda Access Point.</p>
   * @public
   */
  ObjectLambdaAccessPointArn?: string | undefined;

  /**
   * <p>The alias of the Object Lambda Access Point.</p>
   * @public
   */
  Alias?: ObjectLambdaAccessPointAlias | undefined;
}

/**
 * @public
 */
export interface ListAccessPointsForObjectLambdaResult {
  /**
   * <p>Returns list of Object Lambda Access Points.</p>
   * @public
   */
  ObjectLambdaAccessPointList?: ObjectLambdaAccessPoint[] | undefined;

  /**
   * <p>If the list has more access points than can be returned in one call to this API, this field
   *          contains a continuation token that you can provide in subsequent calls to this API to
   *          retrieve additional access points.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCallerAccessGrantsRequest {
  /**
   * <p>The Amazon Web Services account ID of the S3 Access Grants instance.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The S3 path of the data that you would like to access. Must start with <code>s3://</code>. You can optionally pass only the beginning characters of a path, and S3 Access Grants will search for all applicable grants for the path fragment. </p>
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results. Pass this value into a subsequent <code>List Caller Access Grants</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of access grants that you would like returned in the <code>List Caller Access Grants</code> response. If the results include the pagination token <code>NextToken</code>, make another call using the <code>NextToken</code> to determine if there are more results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If this optional parameter is passed in the request, a filter is applied to the results. The results will include only the access grants for the caller's Identity Center application or for any other applications (<code>ALL</code>).</p>
   * @public
   */
  AllowedByApplication?: boolean | undefined;
}

/**
 * <p>Part of <code>ListCallerAccessGrantsResult</code>. Each entry includes the
 *          permission level (READ, WRITE, or READWRITE) and the grant scope of the access grant. If the grant also includes an application ARN, the grantee can only access the S3 data through this application.</p>
 * @public
 */
export interface ListCallerAccessGrantsEntry {
  /**
   * <p>The type of permission granted, which can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READ</code> - Grants read-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WRITE</code> - Grants write-only access to the S3 data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READWRITE</code> - Grants both read and write access to the S3 data.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Permission?: Permission | undefined;

  /**
   * <p>The S3 path of the data to which you have been granted access. </p>
   * @public
   */
  GrantScope?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCallerAccessGrantsResult {
  /**
   * <p>A pagination token that you can use to request the next page of results. Pass this value into a subsequent <code>List Caller Access Grants</code> request in order to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the caller's access grants that were created using S3 Access Grants and that grant the caller access to the S3 data of the Amazon Web Services account ID that was specified in the request. </p>
   * @public
   */
  CallerAccessGrantsList?: ListCallerAccessGrantsEntry[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p></p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The Amazon Web Services account ID associated with the S3 Batch Operations job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The <code>List Jobs</code> request returns jobs that match the statuses listed in this
   *          element.</p>
   * @public
   */
  JobStatuses?: JobStatus[] | undefined;

  /**
   * <p>A pagination token to request the next page of results. Use the token that Amazon S3 returned
   *          in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous
   *             <code>List Jobs</code> request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code>
   *          response. If there are more jobs than this number, the response will include a pagination
   *          token in the <code>NextToken</code> field to enable you to retrieve the next page of
   *          results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationName = {
  LambdaInvoke: "LambdaInvoke",
  S3DeleteObjectTagging: "S3DeleteObjectTagging",
  S3InitiateRestoreObject: "S3InitiateRestoreObject",
  S3PutObjectAcl: "S3PutObjectAcl",
  S3PutObjectCopy: "S3PutObjectCopy",
  S3PutObjectLegalHold: "S3PutObjectLegalHold",
  S3PutObjectRetention: "S3PutObjectRetention",
  S3PutObjectTagging: "S3PutObjectTagging",
  S3ReplicateObject: "S3ReplicateObject",
} as const;

/**
 * @public
 */
export type OperationName = (typeof OperationName)[keyof typeof OperationName];

/**
 * <p>Contains the configuration and status information for a single job retrieved as part of
 *          a job list.</p>
 * @public
 */
export interface JobListDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create
   *             Job</code> request.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The operation that the specified job is configured to run on every object listed in the
   *          manifest.</p>
   * @public
   */
  Operation?: OperationName | undefined;

  /**
   * <p>The current priority for the specified job.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The specified job's current status.</p>
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * <p>A timestamp indicating when the specified job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is
   *          the date and time when it succeeded, failed, or was canceled.</p>
   * @public
   */
  TerminationDate?: Date | undefined;

  /**
   * <p>Describes the total number of tasks that the specified job has run, the number of tasks
   *          that succeeded, and the number of tasks that failed.</p>
   * @public
   */
  ProgressSummary?: JobProgressSummary | undefined;
}

/**
 * @public
 */
export interface ListJobsResult {
  /**
   * <p>If the <code>List Jobs</code> request produced more than the maximum number of results,
   *          you can pass this value into a subsequent <code>List Jobs</code> request in order to
   *          retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of current jobs and jobs that have ended within the last 30 days.</p>
   * @public
   */
  Jobs?: JobListDescriptor[] | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsRequest {
  /**
   * <p>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Not currently used. Do not use this parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMultiRegionAccessPointsResult {
  /**
   * <p>The list of Multi-Region Access Points associated with the user.</p>
   * @public
   */
  AccessPoints?: MultiRegionAccessPointReport[] | undefined;

  /**
   * <p>If the specified bucket has more Multi-Region Access Points than can be returned in one call to this
   *          action, this field contains a continuation token. You can use this token tin subsequent
   *          calls to this action to retrieve additional Multi-Region Access Points.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsRequest {
  /**
   * <p>The Amazon Web Services account ID of the Outposts bucket.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ID of the Outposts resource.</p>
   *          <note>
   *             <p>This ID is required by Amazon S3 on Outposts buckets.</p>
   *          </note>
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * <p>The container for the regional bucket.</p>
 * @public
 */
export interface RegionalBucket {
  /**
   * <p></p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the regional bucket.</p>
   * @public
   */
  BucketArn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  PublicAccessBlockEnabled: boolean | undefined;

  /**
   * <p>The creation date of the regional bucket</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>The Outposts ID of the regional bucket.</p>
   * @public
   */
  OutpostId?: string | undefined;
}

/**
 * @public
 */
export interface ListRegionalBucketsResult {
  /**
   * <p></p>
   * @public
   */
  RegionalBucketList?: RegionalBucket[] | undefined;

  /**
   * <p>
   *             <code>NextToken</code> is sent when <code>isTruncated</code> is true, which means there
   *          are more buckets that can be listed. The next list requests to Amazon S3 can be continued with
   *          this <code>NextToken</code>. <code>NextToken</code> is obfuscated and is not a real
   *          key.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageLensConfigurationsRequest {
  /**
   * <p>The account ID of the requester.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
  ...(obj.AccessKeyId && { AccessKeyId: SENSITIVE_STRING }),
  ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
  ...(obj.SessionToken && { SessionToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDataAccessResultFilterSensitiveLog = (obj: GetDataAccessResult): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});
