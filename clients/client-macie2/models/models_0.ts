import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdminStatus {
  DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>Provides information about an account that's designated as a delegated administrator of Amazon Macie for an AWS organization.</p>
 */
export interface AdminAccount {
  /**
   * <p>The AWS account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The current status of the account as a delegated administrator of Amazon Macie for the organization.</p>
   */
  status?: AdminStatus | string;
}

export namespace AdminAccount {
  export const filterSensitiveLog = (obj: AdminAccount): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a custom data identifier.</p>
 */
export interface BatchGetCustomDataIdentifierSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;
}

export namespace BatchGetCustomDataIdentifierSummary {
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifierSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.</p>
 */
export interface ObjectCountByEncryptionType {
  /**
   * <p>The total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  unencrypted?: number;

  /**
   * <p>The total number of objects that are encrypted using a customer-managed key. The objects use customer-provided server-side (SSE-C) encryption.</p>
   */
  customerManaged?: number;

  /**
   * <p>The total number of objects that are encrypted using an Amazon S3-managed key. The objects use Amazon S3-managed (SSE-S3) encryption.</p>
   */
  s3Managed?: number;

  /**
   * <p>The total number of objects that are encrypted using an AWS Key Management Service (AWS KMS) customer master key (CMK). The objects use AWS KMS AWS-managed (AWS-KMS) encryption or AWS KMS customer-managed (SSE-KMS) encryption.</p>
   */
  kmsManaged?: number;
}

export namespace ObjectCountByEncryptionType {
  export const filterSensitiveLog = (obj: ObjectCountByEncryptionType): any => ({
    ...obj,
  });
}

export enum EffectivePermission {
  NOT_PUBLIC = "NOT_PUBLIC",
  PUBLIC = "PUBLIC",
}

/**
 * <p>Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BlockPublicAccess {
  /**
   * <p>Specifies whether Amazon S3 restricts public bucket policies for the bucket.</p>
   */
  restrictPublicBuckets?: boolean;

  /**
   * <p>Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.</p>
   */
  blockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.</p>
   */
  ignorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 blocks public bucket policies for the bucket.</p>
   */
  blockPublicPolicy?: boolean;
}

export namespace BlockPublicAccess {
  export const filterSensitiveLog = (obj: BlockPublicAccess): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about account-level permissions settings that apply to an S3 bucket.</p>
 */
export interface AccountLevelPermissions {
  /**
   * <p>The block public access settings for the bucket.</p>
   */
  blockPublicAccess?: BlockPublicAccess;
}

export namespace AccountLevelPermissions {
  export const filterSensitiveLog = (obj: AccountLevelPermissions): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.</p>
 */
export interface AccessControlList {
  /**
   * <p>Specifies whether the ACL grants the general public with read access permissions for the bucket.</p>
   */
  allowsPublicReadAccess?: boolean;

  /**
   * <p>Specifies whether the ACL grants the general public with write access permissions for the bucket.</p>
   */
  allowsPublicWriteAccess?: boolean;
}

export namespace AccessControlList {
  export const filterSensitiveLog = (obj: AccessControlList): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the permissions settings of a bucket policy for an S3 bucket.</p>
 */
export interface BucketPolicy {
  /**
   * <p>Specifies whether the bucket policy allows the general public to have read access to the bucket.</p>
   */
  allowsPublicReadAccess?: boolean;

  /**
   * <p>Specifies whether the bucket policy allows the general public to have write access to the bucket.</p>
   */
  allowsPublicWriteAccess?: boolean;
}

export namespace BucketPolicy {
  export const filterSensitiveLog = (obj: BucketPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about bucket-level permissions settings for an S3 bucket.</p>
 */
export interface BucketLevelPermissions {
  /**
   * <p>The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.</p>
   */
  accessControlList?: AccessControlList;

  /**
   * <p>The block public access settings for the bucket.</p>
   */
  blockPublicAccess?: BlockPublicAccess;

  /**
   * <p>The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.</p>
   */
  bucketPolicy?: BucketPolicy;
}

export namespace BucketLevelPermissions {
  export const filterSensitiveLog = (obj: BucketLevelPermissions): any => ({
    ...obj,
  });
}

/**
 * <p>The account-level and bucket-level permissions settings for an S3 bucket.</p>
 */
export interface BucketPermissionConfiguration {
  /**
   * <p>The bucket-level permissions settings for the bucket.</p>
   */
  bucketLevelPermissions?: BucketLevelPermissions;

  /**
   * <p>The account-level permissions settings that apply to the bucket.</p>
   */
  accountLevelPermissions?: AccountLevelPermissions;
}

export namespace BucketPermissionConfiguration {
  export const filterSensitiveLog = (obj: BucketPermissionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about permissions settings that determine whether an S3 bucket is publicly accessible.</p>
 */
export interface BucketPublicAccess {
  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are: PUBLIC, the bucket is publicly accessible; and, NOT_PUBLIC, the bucket isn't publicly accessible.</p>
   */
  effectivePermission?: EffectivePermission | string;

  /**
   * <p>The account-level and bucket-level permissions for the bucket.</p>
   */
  permissionConfiguration?: BucketPermissionConfiguration;
}

export namespace BucketPublicAccess {
  export const filterSensitiveLog = (obj: BucketPublicAccess): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts.</p>
 */
export interface ReplicationDetails {
  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to any destination.</p>
   */
  replicated?: boolean;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to an AWS account that isn't part of the Amazon Macie organization.</p>
   */
  replicatedExternally?: boolean;

  /**
   * <p>An array of AWS account IDs, one for each AWS account that the bucket is configured to replicate one or more objects to.</p>
   */
  replicationAccounts?: string[];
}

export namespace ReplicationDetails {
  export const filterSensitiveLog = (obj: ReplicationDetails): any => ({
    ...obj,
  });
}

export enum SharedAccess {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
  NOT_SHARED = "NOT_SHARED",
}

/**
 * <p>Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.</p>
 */
export interface KeyValuePair {
  /**
   * <p>One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be empty or null.</p>
   */
  value?: string;

  /**
   * <p>One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.</p>
   */
  key?: string;
}

export namespace KeyValuePair {
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an S3 bucket that Amazon Macie monitors and analyzes.</p>
 */
export interface BucketMetadata {
  /**
   * <p>The total number of objects in the bucket.</p>
   */
  objectCount?: number;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a file format, file extension, or content type that Amazon Macie supports.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>Specifies whether the bucket is shared with another AWS account. Valid values are:</p> <ul><li><p>EXTERNAL - The bucket is shared with an AWS account that isn’t part of the same Amazon Macie organization.</p></li> <li><p>INTERNAL - The bucket is shared with an AWS account that's part of the same Amazon Macie organization.</p></li> <li><p>NOT_SHARED - The bucket isn't shared with other AWS accounts.</p></li></ul>
   */
  sharedAccess?: SharedAccess | string;

  /**
   * <p>The name of the bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to buckets for other AWS accounts and, if so, which accounts.</p>
   */
  replicationDetails?: ReplicationDetails;

  /**
   * <p>The AWS Region that hosts the bucket.</p>
   */
  region?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
   */
  bucketCreatedAt?: Date;

  /**
   * <p>The total compressed storage size, in bytes, of the bucket.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>The unique identifier for the AWS account that's associated with the bucket.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  bucketArn?: string;

  /**
   * <p>An array that specifies the tags (keys and values) that are associated with the bucket.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>Specifies whether the bucket is publicly accessible. If this value is true, an access control list (ACL), bucket policy, or block public access settings allow the bucket to be accessed by the general public.</p>
   */
  publicAccess?: BucketPublicAccess;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last analyzed the bucket.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>Specifies whether versioning is enabled for the bucket.</p>
   */
  versioning?: boolean;
}

export namespace BucketMetadata {
  export const filterSensitiveLog = (obj: BucketMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a custom data identifier.</p>
 */
export interface CustomDataIdentifierSummary {
  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;
}

export namespace CustomDataIdentifierSummary {
  export const filterSensitiveLog = (obj: CustomDataIdentifierSummary): any => ({
    ...obj,
  });
}

export enum FindingCategory {
  CLASSIFICATION = "CLASSIFICATION",
  POLICY = "POLICY",
}

/**
 * <p>Provides information about a custom data identifier that produced a sensitive data finding, and the number of occurrences of the data that it detected for the finding.</p>
 */
export interface CustomDetection {
  /**
   * <p>The total number of occurrences of the data that the custom data identifier detected for the finding.</p>
   */
  count?: number;

  /**
   * <p>The name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;
}

export namespace CustomDetection {
  export const filterSensitiveLog = (obj: CustomDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of occurrences of the data that produced a sensitive data finding, and the custom data identifiers that detected the data for the finding.</p>
 */
export interface CustomDataIdentifiers {
  /**
   * <p>The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.</p>
   */
  detections?: CustomDetection[];

  /**
   * <p>The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.</p>
   */
  totalCount?: number;
}

export namespace CustomDataIdentifiers {
  export const filterSensitiveLog = (obj: CustomDataIdentifiers): any => ({
    ...obj,
  });
}

export enum SensitiveDataItemCategory {
  CREDENTIALS = "CREDENTIALS",
  CUSTOM_IDENTIFIER = "CUSTOM_IDENTIFIER",
  FINANCIAL_INFORMATION = "FINANCIAL_INFORMATION",
  PERSONAL_INFORMATION = "PERSONAL_INFORMATION",
}

/**
 * <p>Provides information about sensitive data that was detected by managed data identifiers and produced a sensitive data finding.</p>
 */
export interface DefaultDetection {
  /**
   * <p>The total number of occurrences of the type of data that was detected.</p>
   */
  count?: number;

  /**
   * <p>The type of data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.</p>
   */
  type?: string;
}

export namespace DefaultDetection {
  export const filterSensitiveLog = (obj: DefaultDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the category, type, and number of occurrences of sensitive data that produced a finding.</p>
 */
export interface SensitiveDataItem {
  /**
   * <p>The total number of occurrences of the sensitive data that was detected.</p>
   */
  totalCount?: number;

  /**
   * <p>The category of sensitive data that was detected. For example: FINANCIAL_INFORMATION, for financial information such as credit card numbers; PERSONAL_INFORMATION, for personally identifiable information such as full names and mailing addresses; or, CUSTOM_IDENTIFIER, for data that was detected by a custom data identifier.</p>
   */
  category?: SensitiveDataItemCategory | string;

  /**
   * <p>An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected.</p>
   */
  detections?: DefaultDetection[];
}

export namespace SensitiveDataItem {
  export const filterSensitiveLog = (obj: SensitiveDataItem): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status of a sensitive data finding.</p>
 */
export interface ClassificationResultStatus {
  /**
   * <p>The status of the finding, such as COMPLETE.</p>
   */
  code?: string;

  /**
   * <p>A brief description of the status of the finding. Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding.</p>
   */
  reason?: string;
}

export namespace ClassificationResultStatus {
  export const filterSensitiveLog = (obj: ClassificationResultStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Provides detailed information about a sensitive data finding, including the types and number of occurrences of the sensitive data that was found.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The category and number of occurrences of the sensitive data that produced the finding.</p>
   */
  sensitiveData?: SensitiveDataItem[];

  /**
   * <p>The type of content, expressed as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe PDF file.</p>
   */
  mimeType?: string;

  /**
   * <p>The total size, in bytes, of the data that the finding applies to.</p>
   */
  sizeClassified?: number;

  /**
   * <p>The status of the finding.</p>
   */
  status?: ClassificationResultStatus;

  /**
   * <p>The number of occurrences of the data that produced the finding, and the custom data identifiers that detected the data.</p>
   */
  customDataIdentifiers?: CustomDataIdentifiers;
}

export namespace ClassificationResult {
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a sensitive data finding, including the classification job that produced the finding.</p>
 */
export interface ClassificationDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job that produced the finding.</p>
   */
  jobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file that contains the detailed record, including offsets, for the finding.</p>
   */
  detailedResultsLocation?: string;

  /**
   * <p>The status and detailed results of the finding.</p>
   */
  result?: ClassificationResult;

  /**
   * <p>The unique identifier for the classification job that produced the finding.</p>
   */
  jobId?: string;
}

export namespace ClassificationDetails {
  export const filterSensitiveLog = (obj: ClassificationDetails): any => ({
    ...obj,
  });
}

export enum FindingActionType {
  AWS_API_CALL = "AWS_API_CALL",
}

/**
 * <p>Provides information about an API operation that an entity invoked for an affected resource.</p>
 */
export interface ApiCallDetails {
  /**
   * <p>The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.</p>
   */
  lastSeen?: Date;

  /**
   * <p>The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.</p>
   */
  firstSeen?: Date;

  /**
   * <p>The URL of the AWS service that provides the operation, for example: s3.amazonaws.com.</p>
   */
  apiServiceName?: string;

  /**
   * <p>The name of the operation that was invoked most recently and produced the finding.</p>
   */
  api?: string;
}

export namespace ApiCallDetails {
  export const filterSensitiveLog = (obj: ApiCallDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an action that occurred for a resource and produced a policy finding.</p>
 */
export interface FindingAction {
  /**
   * <p>The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.</p>
   */
  actionType?: FindingActionType | string;

  /**
   * <p>The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.</p>
   */
  apiCallDetails?: ApiCallDetails;
}

export namespace FindingAction {
  export const filterSensitiveLog = (obj: FindingAction): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the domain name of the device that an entity used to perform an action on an affected resource.</p>
 */
export interface DomainDetails {
  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;
}

export namespace DomainDetails {
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the city that an IP address originated from.</p>
 */
export interface IpCity {
  /**
   * <p>The name of the city.</p>
   */
  name?: string;
}

export namespace IpCity {
  export const filterSensitiveLog = (obj: IpCity): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the country that an IP address originated from.</p>
 */
export interface IpCountry {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.</p>
   */
  code?: string;

  /**
   * <p>The name of the country that the IP address originated from.</p>
   */
  name?: string;
}

export namespace IpCountry {
  export const filterSensitiveLog = (obj: IpCountry): any => ({
    ...obj,
  });
}

/**
 * <p>Provides geographic coordinates that indicate where a specified IP address originated from.</p>
 */
export interface IpGeoLocation {
  /**
   * <p>The longitude coordinate of the location, rounded to four decimal places.</p>
   */
  lon?: number;

  /**
   * <p>The latitude coordinate of the location, rounded to four decimal places.</p>
   */
  lat?: number;
}

export namespace IpGeoLocation {
  export const filterSensitiveLog = (obj: IpGeoLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the registered owner of an IP address.</p>
 */
export interface IpOwner {
  /**
   * <p>The name of the internet service provider (ISP) that owned the IP address.</p>
   */
  isp?: string;

  /**
   * <p>The autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asn?: string;

  /**
   * <p>The name of the organization that owned the IP address.</p>
   */
  org?: string;

  /**
   * <p>The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asnOrg?: string;
}

export namespace IpOwner {
  export const filterSensitiveLog = (obj: IpOwner): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the IP address of the device that an entity used to perform an action on an affected resource.</p>
 */
export interface IpAddressDetails {
  /**
   * <p>The city that the IP address originated from.</p>
   */
  ipCity?: IpCity;

  /**
   * <p>The geographic coordinates of the location that the IP address originated from.</p>
   */
  ipGeoLocation?: IpGeoLocation;

  /**
   * <p>The country that the IP address originated from.</p>
   */
  ipCountry?: IpCountry;

  /**
   * <p>The registered owner of the IP address.</p>
   */
  ipOwner?: IpOwner;

  /**
   * <p>The Internet Protocol version 4 (IPv4) address of the device.</p>
   */
  ipAddressV4?: string;
}

export namespace IpAddressDetails {
  export const filterSensitiveLog = (obj: IpAddressDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the context in which temporary security credentials were issued to an entity.</p>
 */
export interface SessionContextAttributes {
  /**
   * <p>Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   */
  mfaAuthenticated?: boolean;

  /**
   * <p>The date and time, in UTC and ISO 8601 format, when the credentials were issued.</p>
   */
  creationDate?: Date;
}

export namespace SessionContextAttributes {
  export const filterSensitiveLog = (obj: SessionContextAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the source and type of temporary security credentials that were issued to an entity.</p>
 */
export interface SessionIssuer {
  /**
   * <p>The unique identifier for the AWS account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The source of the temporary security credentials, such as Root, IAMUser, or Role.</p>
   */
  type?: string;

  /**
   * <p>The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.</p>
   */
  userName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source account, IAM user, or role that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;
}

export namespace SessionIssuer {
  export const filterSensitiveLog = (obj: SessionIssuer): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a session that was created for an entity that performed an action by using temporary security credentials.</p>
 */
export interface SessionContext {
  /**
   * <p>The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   */
  attributes?: SessionContextAttributes;

  /**
   * <p>The source and type of credentials that were issued to the entity.</p>
   */
  sessionIssuer?: SessionIssuer;
}

export namespace SessionContext {
  export const filterSensitiveLog = (obj: SessionContext): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the AWS Security Token Service (AWS STS) API.</p>
 */
export interface AssumedRole {
  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The AWS access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The unique identifier for the AWS account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   */
  arn?: string;
}

export namespace AssumedRole {
  export const filterSensitiveLog = (obj: AssumedRole): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an AWS account and entity that performed an action on an affected resource. The action was performed using the credentials for an AWS account other than your own account.</p>
 */
export interface AwsAccount {
  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;

  /**
   * <p>The unique identifier for the AWS account.</p>
   */
  accountId?: string;
}

export namespace AwsAccount {
  export const filterSensitiveLog = (obj: AwsAccount): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an AWS service that performed an action on an affected resource.</p>
 */
export interface AwsService {
  /**
   * <p>The name of the AWS service that performed the action.</p>
   */
  invokedBy?: string;
}

export namespace AwsService {
  export const filterSensitiveLog = (obj: AwsService): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the AWS Security Token Service (AWS STS) API.</p>
 */
export interface FederatedUser {
  /**
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;

  /**
   * <p>The unique identifier for the AWS account that owns the entity that was used to get the credentials.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The AWS access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;
}

export namespace FederatedUser {
  export const filterSensitiveLog = (obj: FederatedUser): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an AWS Identity and Access Management (IAM) user who performed an action on an affected resource.</p>
 */
export interface IamUser {
  /**
   * <p>The user name of the IAM user who performed the action.</p>
   */
  userName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the AWS account that's associated with the IAM user who performed the action.</p>
   */
  accountId?: string;

  /**
   * <p>The unique identifier for the IAM user who performed the action.</p>
   */
  principalId?: string;
}

export namespace IamUser {
  export const filterSensitiveLog = (obj: IamUser): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an AWS account and entity that performed an action on an affected resource. The action was performed using the credentials for your AWS account.</p>
 */
export interface UserIdentityRoot {
  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the AWS account.</p>
   */
  accountId?: string;
}

export namespace UserIdentityRoot {
  export const filterSensitiveLog = (obj: UserIdentityRoot): any => ({
    ...obj,
  });
}

export enum UserIdentityType {
  AWSAccount = "AWSAccount",
  AWSService = "AWSService",
  AssumedRole = "AssumedRole",
  FederatedUser = "FederatedUser",
  IAMUser = "IAMUser",
  Root = "Root",
}

/**
 * <p>Provides information about the type and other characteristics of an entity that performed an action on an affected resource.</p>
 */
export interface UserIdentity {
  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the AWS Security Token Service (AWS STS) API, the identifiers, session context, and other details about the identity.</p>
   */
  assumedRole?: AssumedRole;

  /**
   * <p>If the action was performed using the credentials for another AWS account, the details of that account.</p>
   */
  awsAccount?: AwsAccount;

  /**
   * <p>The type of entity that performed the action.</p>
   */
  type?: UserIdentityType | string;

  /**
   * <p>If the action was performed by an AWS account that belongs to an AWS service, the name of the service.</p>
   */
  awsService?: AwsService;

  /**
   * <p>If the action was performed using the credentials for an AWS Identity and Access Management (IAM) user, the name and other details about the user.</p>
   */
  iamUser?: IamUser;

  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the AWS Security Token Service (AWS STS) API, the identifiers, session context, and other details about the identity.</p>
   */
  federatedUser?: FederatedUser;

  /**
   * <p>If the action was performed using the credentials for your AWS account, the details of your account.</p>
   */
  root?: UserIdentityRoot;
}

export namespace UserIdentity {
  export const filterSensitiveLog = (obj: UserIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an entity that performed an action that produced a policy finding for a resource.</p>
 */
export interface FindingActor {
  /**
   * <p>The domain name of the device that the entity used to perform the action on the affected resource.</p>
   */
  domainDetails?: DomainDetails;

  /**
   * <p>The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographic location for the IP address.</p>
   */
  ipAddressDetails?: IpAddressDetails;

  /**
   * <p>The type and other characteristics of the entity that performed the action on the affected resource.</p>
   */
  userIdentity?: UserIdentity;
}

export namespace FindingActor {
  export const filterSensitiveLog = (obj: FindingActor): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details of a policy finding.</p>
 */
export interface PolicyDetails {
  /**
   * <p>The entity that performed the action that produced the finding.</p>
   */
  actor?: FindingActor;

  /**
   * <p>The action that produced the finding.</p>
   */
  action?: FindingAction;
}

export namespace PolicyDetails {
  export const filterSensitiveLog = (obj: PolicyDetails): any => ({
    ...obj,
  });
}

export enum EncryptionType {
  AES256 = "AES256",
  NONE = "NONE",
  UNKNOWN = "UNKNOWN",
  aws_kms = "aws:kms",
}

/**
 * <p>Provides information about the server-side encryption settings for an S3 bucket or object.</p>
 */
export interface ServerSideEncryption {
  /**
   * <p>The server-side encryption algorithm that's used when storing data in the bucket or object. If encryption is disabled for the bucket or object, this value is NONE.</p>
   */
  encryptionType?: EncryptionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) master key that's used to encrypt the bucket or object. This value is null if KMS isn't used to encrypt the bucket or object.</p>
   */
  kmsMasterKeyId?: string;
}

export namespace ServerSideEncryption {
  export const filterSensitiveLog = (obj: ServerSideEncryption): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the user who owns an S3 bucket.</p>
 */
export interface S3BucketOwner {
  /**
   * <p>The AWS account ID for the user who owns the bucket.</p>
   */
  id?: string;

  /**
   * <p>The display name of the user who owns the bucket.</p>
   */
  displayName?: string;
}

export namespace S3BucketOwner {
  export const filterSensitiveLog = (obj: S3BucketOwner): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an S3 bucket that a finding applies to.</p>
 */
export interface S3Bucket {
  /**
   * <p>The display name and account identifier for the user who owns the bucket.</p>
   */
  owner?: S3BucketOwner;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The permissions settings that determine whether the bucket is publicly accessible.</p>
   */
  publicAccess?: BucketPublicAccess;

  /**
   * <p>The name of the bucket.</p>
   */
  name?: string;

  /**
   * <p>The server-side encryption settings for the bucket.</p>
   */
  defaultServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>The tags that are associated with the bucket.</p>
   */
  tags?: KeyValuePair[];
}

export namespace S3Bucket {
  export const filterSensitiveLog = (obj: S3Bucket): any => ({
    ...obj,
  });
}

export enum StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}

/**
 * <p>Provides information about an S3 object that a finding applies to.</p>
 */
export interface S3Object {
  /**
   * <p>The Amazon Resource Name (ARN) of the bucket that contains the object.</p>
   */
  bucketArn?: string;

  /**
   * <p>The file extension of the object. If the object doesn't have a file extension, this value is "".</p>
   */
  extension?: string;

  /**
   * <p>The identifier for the affected version of the object.</p>
   */
  versionId?: string;

  /**
   * <p>The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.</p>
   */
  eTag?: string;

  /**
   * <p>The path to the object, including the full key (name).</p>
   */
  path?: string;

  /**
   * <p>The total storage size, in bytes, of the object.</p>
   */
  size?: number;

  /**
   * <p>Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.</p>
   */
  publicAccess?: boolean;

  /**
   * <p>The storage class of the object.</p>
   */
  storageClass?: StorageClass | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the object was last modified.</p>
   */
  lastModified?: Date;

  /**
   * <p>The server-side encryption settings for the object.</p>
   */
  serverSideEncryption?: ServerSideEncryption;

  /**
   * <p>The tags that are associated with the object.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>The full key (name) that's assigned to the object.</p>
   */
  key?: string;
}

export namespace S3Object {
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the resources that a finding applies to.</p>
 */
export interface ResourcesAffected {
  /**
   * <p>An array of objects, one for each S3 bucket that the finding applies to. Each object provides a set of metadata about an affected S3 bucket.</p>
   */
  s3Bucket?: S3Bucket;

  /**
   * <p>An array of objects, one for each S3 object that the finding applies to. Each object provides a set of metadata about an affected S3 object.</p>
   */
  s3Object?: S3Object;
}

export namespace ResourcesAffected {
  export const filterSensitiveLog = (obj: ResourcesAffected): any => ({
    ...obj,
  });
}

export enum SeverityDescription {
  High = "High",
  Low = "Low",
  Medium = "Medium",
}

/**
 * <p>Provides the numeric score and textual representation of a severity value.</p>
 */
export interface Severity {
  /**
   * <p>The textual representation of the severity value, such as Low or High.</p>
   */
  description?: SeverityDescription | string;

  /**
   * <p>The numeric score for the severity value, ranging from 0 (least severe) to 4 (most severe).</p>
   */
  score?: number;
}

export namespace Severity {
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
}

export enum FindingType {
  Policy_IAMUser_S3BlockPublicAccessDisabled = "Policy:IAMUser/S3BlockPublicAccessDisabled",
  Policy_IAMUser_S3BucketEncryptionDisabled = "Policy:IAMUser/S3BucketEncryptionDisabled",
  Policy_IAMUser_S3BucketPublic = "Policy:IAMUser/S3BucketPublic",
  Policy_IAMUser_S3BucketReplicatedExternally = "Policy:IAMUser/S3BucketReplicatedExternally",
  Policy_IAMUser_S3BucketSharedExternally = "Policy:IAMUser/S3BucketSharedExternally",
  SensitiveData_S3Object_Credentials = "SensitiveData:S3Object/Credentials",
  SensitiveData_S3Object_CustomIdentifier = "SensitiveData:S3Object/CustomIdentifier",
  SensitiveData_S3Object_Financial = "SensitiveData:S3Object/Financial",
  SensitiveData_S3Object_Multiple = "SensitiveData:S3Object/Multiple",
  SensitiveData_S3Object_Personal = "SensitiveData:S3Object/Personal",
}

/**
 * <p>Provides information about a finding.</p>
 */
export interface Finding {
  /**
   * <p>The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.</p>
   */
  id?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was last updated. For sensitive data findings, this value is the same as the value for the createdAt property. Sensitive data findings aren't updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The details of a sensitive data finding. This value is null for a policy finding.</p>
   */
  classificationDetails?: ClassificationDetails;

  /**
   * <p>The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.</p>
   */
  category?: FindingCategory | string;

  /**
   * <p>The resources that the finding applies to.</p>
   */
  resourcesAffected?: ResourcesAffected;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS partition that Amazon Macie created the finding in.</p>
   */
  partition?: string;

  /**
   * <p>The version of the schema that was used to define the data structures in the finding.</p>
   */
  schemaVersion?: string;

  /**
   * <p>The brief description of the finding.</p>
   */
  title?: string;

  /**
   * <p>The total number of occurrences of this finding.</p>
   */
  count?: number;

  /**
   * <p>The AWS Region that Amazon Macie created the finding in.</p>
   */
  region?: string;

  /**
   * <p>The unique identifier for the AWS account that the finding applies to. This is typically the account that owns the affected resource.</p>
   */
  accountId?: string;

  /**
   * <p>Specifies whether the finding is a sample finding. A <i>sample finding</i> is a finding that uses example data to demonstrate what a finding might contain.</p>
   */
  sample?: boolean;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The type of the finding.</p>
   */
  type?: FindingType | string;

  /**
   * <p>The severity of the finding.</p>
   */
  severity?: Severity;

  /**
   * <p>Specifies whether the finding is archived.</p>
   */
  archived?: boolean;

  /**
   * <p>The details of a policy finding. This value is null for a sensitive data finding.</p>
   */
  policyDetails?: PolicyDetails;
}

export namespace Finding {
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
}

export enum FindingsFilterAction {
  ARCHIVE = "ARCHIVE",
  NOOP = "NOOP",
}

/**
 * <p>Provides information about a findings filter.</p>
 */
export interface FindingsFilterListItem {
  /**
   * <p>The action that's performed on findings that meet the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.</p>
   */
  tags?: { [key: string]: string };
}

export namespace FindingsFilterListItem {
  export const filterSensitiveLog = (obj: FindingsFilterListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a group of results for a query that retrieved aggregated statistical data about findings.</p>
 */
export interface GroupCount {
  /**
   * <p>The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.</p>
   */
  groupKey?: string;

  /**
   * <p>The total number of findings in the group of query results.</p>
   */
  count?: number;
}

export namespace GroupCount {
  export const filterSensitiveLog = (obj: GroupCount): any => ({
    ...obj,
  });
}

export enum RelationshipStatus {
  AccountSuspended = "AccountSuspended",
  Created = "Created",
  EmailVerificationFailed = "EmailVerificationFailed",
  EmailVerificationInProgress = "EmailVerificationInProgress",
  Enabled = "Enabled",
  Invited = "Invited",
  Paused = "Paused",
  RegionDisabled = "RegionDisabled",
  Removed = "Removed",
  Resigned = "Resigned",
}

/**
 * <p>Provides information about an Amazon Macie membership invitation that was received by an account.</p>
 */
export interface Invitation {
  /**
   * <p>The AWS account ID for the account that sent the invitation.</p>
   */
  accountId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The status of the relationship between the account that sent the invitation (<i>inviter account</i>) and the account that received the invitation (<i>invitee account</i>).</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>The unique identifier for the invitation. Amazon Macie uses this identifier to validate the inviter account with the invitee account.</p>
   */
  invitationId?: string;
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export enum JobComparator {
  CONTAINS = "CONTAINS",
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  NE = "NE",
}

export enum ScopeFilterKey {
  BUCKET_CREATION_DATE = "BUCKET_CREATION_DATE",
  OBJECT_EXTENSION = "OBJECT_EXTENSION",
  OBJECT_LAST_MODIFIED_DATE = "OBJECT_LAST_MODIFIED_DATE",
  OBJECT_SIZE = "OBJECT_SIZE",
  TAG = "TAG",
}

/**
 * <p>Specifies a property-based condition that determines whether an object is included or excluded from a classification job.</p>
 */
export interface SimpleScopeTerm {
  /**
   * <p>The operator to use in the condition.</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>An array that lists one or more values to use in the condition.</p>
   */
  values?: string[];

  /**
   * <p>The property to use in the condition.</p>
   */
  key?: ScopeFilterKey | string;
}

export namespace SimpleScopeTerm {
  export const filterSensitiveLog = (obj: SimpleScopeTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a tag key and value, as a pair, to use in a tag-based condition for a classification job.</p>
 */
export interface TagValuePair {
  /**
   * <p>The tag value, associated with the specified tag key, to use in the condition.</p>
   */
  value?: string;

  /**
   * <p>The value for the tag key to use in the condition.</p>
   */
  key?: string;
}

export namespace TagValuePair {
  export const filterSensitiveLog = (obj: TagValuePair): any => ({
    ...obj,
  });
}

export enum TagTarget {
  S3_OBJECT = "S3_OBJECT",
}

/**
 * <p>Specifies a tag-based condition that determines whether an object is included or excluded from a classification job.</p>
 */
export interface TagScopeTerm {
  /**
   * <p>The tag key and value pairs to use in the condition.</p>
   */
  tagValues?: TagValuePair[];

  /**
   * <p>The tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The type of object to apply the condition to.</p>
   */
  target?: TagTarget | string;

  /**
   * <p>The operator to use in the condition.</p>
   */
  comparator?: JobComparator | string;
}

export namespace TagScopeTerm {
  export const filterSensitiveLog = (obj: TagScopeTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a property- or tag-based condition that defines criteria for including or excluding objects from a classification job.</p>
 */
export interface JobScopeTerm {
  /**
   * <p>A tag-based condition that defines the operator and a tag key or tag keys and values for including or excluding an object from the job.</p>
   */
  tagScopeTerm?: TagScopeTerm;

  /**
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job.</p>
   */
  simpleScopeTerm?: SimpleScopeTerm;
}

export namespace JobScopeTerm {
  export const filterSensitiveLog = (obj: JobScopeTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies which S3 buckets contain the objects that a classification job analyzes.</p>
 */
export interface S3BucketDefinitionForJob {
  /**
   * <p>An array that lists the names of the buckets.</p>
   */
  buckets?: string[];

  /**
   * <p>The unique identifier for the AWS account that owns one or more of the buckets. If specified, the job analyzes objects in all the buckets that are owned by the account and meet other conditions specified for the job.</p>
   */
  accountId?: string;
}

export namespace S3BucketDefinitionForJob {
  export const filterSensitiveLog = (obj: S3BucketDefinitionForJob): any => ({
    ...obj,
  });
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  COMPLETE = "COMPLETE",
  IDLE = "IDLE",
  PAUSED = "PAUSED",
  RUNNING = "RUNNING",
}

export enum JobType {
  ONE_TIME = "ONE_TIME",
  SCHEDULED = "SCHEDULED",
}

/**
 * <p>Provides information about a classification job, including the current status of the job.</p>
 */
export interface JobSummary {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job ran or will run only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - The job was cancelled by you or a user of the master account for your organization. A job might also be cancelled if ownership of an S3 bucket changed while the job was running, and that change affected the job's access to the bucket.</p></li> <li><p>COMPLETE - Amazon Macie finished processing all the data specified for the job.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to jobs that occur only once.</p></li> <li><p>PAUSED - Amazon Macie started the job, but completion of the job would exceed one or more quotas for your account.</p></li> <li><p>RUNNING - The job is in progress.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>The S3 buckets that the job is configured to analyze.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];
}

export namespace JobSummary {
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj,
  });
}

export enum ListJobsFilterKey {
  createdAt = "createdAt",
  jobStatus = "jobStatus",
  jobType = "jobType",
  name = "name",
}

/**
 * <p>Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.</p>
 */
export interface ListJobsFilterTerm {
  /**
   * <p>The property to use to filter the results.</p>
   */
  key?: ListJobsFilterKey | string;

  /**
   * <p>The operator to use to filter the results.</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>An array that lists one or more values to use to filter the results.</p>
   */
  values?: string[];
}

export namespace ListJobsFilterTerm {
  export const filterSensitiveLog = (obj: ListJobsFilterTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an account that's associated with an Amazon Macie master account.</p>
 */
export interface Member {
  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The current status of the relationship between the account and the master account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The AWS account ID for the master account.</p>
   */
  masterAccountId?: string;

  /**
   * <p>The AWS account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   */
  arn?: string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  ClientError = "ClientError",
  InternalError = "InternalError",
}

/**
 * <p>Provides information about an account-related request that hasn't been processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * <p>The AWS account ID for the account that the request applies to.</p>
   */
  accountId?: string;

  /**
   * <p>The reason why the request hasn't been processed.</p>
   */
  errorMessage?: string;

  /**
   * <p>The source of the issue or delay in processing the request.</p>
   */
  errorCode?: ErrorCode | string;
}

export namespace UnprocessedAccount {
  export const filterSensitiveLog = (obj: UnprocessedAccount): any => ({
    ...obj,
  });
}

export enum Currency {
  USD = "USD",
}

export enum Unit {
  TERABYTES = "TERABYTES",
}

/**
 * <p>Specifies a current quota for an account.</p>
 */
export interface ServiceLimit {
  /**
   * <p>Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.</p>
   */
  isServiceLimited?: boolean;

  /**
   * <p>The unit of measurement for the value specified by the value field.</p>
   */
  unit?: Unit | string;

  /**
   * <p>The value for the metric specified by the UsageByAccount.type field in the response.</p>
   */
  value?: number;
}

export namespace ServiceLimit {
  export const filterSensitiveLog = (obj: ServiceLimit): any => ({
    ...obj,
  });
}

export enum UsageType {
  DATA_INVENTORY_EVALUATION = "DATA_INVENTORY_EVALUATION",
  SENSITIVE_DATA_DISCOVERY = "SENSITIVE_DATA_DISCOVERY",
}

/**
 * <p>Provides data for a specific usage metric and the corresponding quota for an account. The value for the metric is an aggregated value that reports usage during the past 30 days.</p>
 */
export interface UsageByAccount {
  /**
   * <p>The estimated value for the metric.</p>
   */
  estimatedCost?: string;

  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The current value for the quota that corresponds to the metric specified by the type field.</p>
   */
  serviceLimit?: ServiceLimit;

  /**
   * <p>The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing sensitive data.</p>
   */
  type?: UsageType | string;
}

export namespace UsageByAccount {
  export const filterSensitiveLog = (obj: UsageByAccount): any => ({
    ...obj,
  });
}

/**
 * <p>Provides quota and aggregated usage data for an account.</p>
 */
export interface UsageRecord {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the free trial started for the account.</p>
   */
  freeTrialStartDate?: Date;

  /**
   * <p>The unique identifier for the AWS account that the data applies to.</p>
   */
  accountId?: string;

  /**
   * <p>An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.</p>
   */
  usage?: UsageByAccount[];
}

export namespace UsageRecord {
  export const filterSensitiveLog = (obj: UsageRecord): any => ({
    ...obj,
  });
}

export enum UsageStatisticsFilterComparator {
  CONTAINS = "CONTAINS",
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  NE = "NE",
}

export enum UsageStatisticsFilterKey {
  accountId = "accountId",
  freeTrialStartDate = "freeTrialStartDate",
  serviceLimit = "serviceLimit",
  total = "total",
}

/**
 * <p>Specifies a condition for filtering the results of a query for account quotas and usage data.</p>
 */
export interface UsageStatisticsFilter {
  /**
   * <p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an AWS account.</p></li></ul> <ul><li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the free trial started for an account.</p></li></ul> <ul><li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li></ul> <ul><li><p>total - A string that represents the current, estimated month-to-date cost for an account.</p></li></ul>
   */
  values?: string[];

  /**
   * <p>The field to use in the condition.</p>
   */
  key?: UsageStatisticsFilterKey | string;

  /**
   * <p>The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.</p>
   */
  comparator?: UsageStatisticsFilterComparator | string;
}

export namespace UsageStatisticsFilter {
  export const filterSensitiveLog = (obj: UsageStatisticsFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Provides aggregated data for a usage metric. The value for the metric reports usage data for an account during the past 30 days.</p>
 */
export interface UsageTotal {
  /**
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The estimated value for the metric.</p>
   */
  estimatedCost?: string;

  /**
   * <p>The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing sensitive data.</p>
   */
  type?: UsageType | string;
}

export namespace UsageTotal {
  export const filterSensitiveLog = (obj: UsageTotal): any => ({
    ...obj,
  });
}

export interface AcceptInvitationRequest {
  /**
   * <p>The unique identifier for the invitation to accept.</p>
   */
  invitationId: string | undefined;

  /**
   * <p>The AWS account ID for the account that sent the invitation.</p>
   */
  masterAccount: string | undefined;
}

export namespace AcceptInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
}

export interface AcceptInvitationResponse {}

export namespace AcceptInvitationResponse {
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The explanation of the error that occurred.</p>
   */
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies details for an account to associate with an Amazon Macie master account.</p>
 */
export interface AccountDetail {
  /**
   * <p>The AWS account ID for the account.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The email address for the account.</p>
   */
  email: string | undefined;
}

export namespace AccountDetail {
  export const filterSensitiveLog = (obj: AccountDetail): any => ({
    ...obj,
  });
}

export interface BatchGetCustomDataIdentifiersRequest {
  /**
   * <p>An array of strings that lists the unique identifiers for the custom data identifiers to retrieve information about.</p>
   */
  ids?: string[];
}

export namespace BatchGetCustomDataIdentifiersRequest {
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifiersRequest): any => ({
    ...obj,
  });
}

export interface BatchGetCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier that meets the criteria specified in the request.</p>
   */
  customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];

  /**
   * <p>An array of identifiers, one for each identifier that was specified in the request, but doesn't correlate to an existing custom data identifier.</p>
   */
  notFoundIdentifierIds?: string[];
}

export namespace BatchGetCustomDataIdentifiersResponse {
  export const filterSensitiveLog = (obj: BatchGetCustomDataIdentifiersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
 */
export interface BucketCountByEffectivePermission {
  /**
   * <p>The total number of buckets that allow the general public to have read or write access to the bucket.</p>
   */
  publiclyAccessible?: number;

  /**
   * <p>The total number of buckets that allow the general public to have read access to the bucket.</p>
   */
  publiclyReadable?: number;

  /**
   * <p>The total number of buckets that allow the general public to have write access to the bucket.</p>
   */
  publiclyWritable?: number;
}

export namespace BucketCountByEffectivePermission {
  export const filterSensitiveLog = (obj: BucketCountByEffectivePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of S3 buckets that use certain types of server-side encryption or don't encrypt objects by default.</p>
 */
export interface BucketCountByEncryptionType {
  /**
   * <p>The total number of buckets that use an AWS Key Management Service (AWS KMS) customer master key (CMK) to encrypt objects. These buckets use AWS KMS AWS-managed (AWS-KMS) encryption or AWS KMS customer-managed (SSE-KMS) encryption.</p>
   */
  kmsManaged?: number;

  /**
   * <p>The total number of buckets that don't encrypt objects by default. Default encryption is disabled for these buckets.</p>
   */
  unencrypted?: number;

  /**
   * <p>The total number of buckets that use an Amazon S3-managed key to encrypt objects. These buckets use Amazon S3-managed (SSE-S3) encryption.</p>
   */
  s3Managed?: number;
}

export namespace BucketCountByEncryptionType {
  export const filterSensitiveLog = (obj: BucketCountByEncryptionType): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of S3 buckets that are shared with other AWS accounts.</p>
 */
export interface BucketCountBySharedAccessType {
  /**
   * <p>The total number of buckets that are shared with an AWS account that isn't part of the same Amazon Macie organization.</p>
   */
  external?: number;

  /**
   * <p>The total number of buckets that aren't shared with any other AWS accounts.</p>
   */
  notShared?: number;

  /**
   * <p>The total number of buckets that are shared with an AWS account that's part of the same Amazon Macie organization.</p>
   */
  internal?: number;
}

export namespace BucketCountBySharedAccessType {
  export const filterSensitiveLog = (obj: BucketCountBySharedAccessType): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the operator to use in an attribute-based condition that filters the results of a query for information about S3 buckets.</p>
 */
export interface BucketCriteriaAdditionalProperties {
  /**
   * <p>An equal to condition to apply to a specified attribute value for buckets.</p>
   */
  eq?: string[];

  /**
   * <p>The prefix of the buckets to include in the results.</p>
   */
  prefix?: string;

  /**
   * <p>A less than or equal to condition to apply to a specified attribute value for buckets.</p>
   */
  lte?: number;

  /**
   * <p>A greater than condition to apply to a specified attribute value for buckets.</p>
   */
  gt?: number;

  /**
   * <p>A less than condition to apply to a specified attribute value for buckets.</p>
   */
  lt?: number;

  /**
   * <p>A not equal to condition to apply to a specified attribute value for buckets.</p>
   */
  neq?: string[];

  /**
   * <p>A greater than or equal to condition to apply to a specified attribute value for buckets.</p>
   */
  gte?: number;
}

export namespace BucketCriteriaAdditionalProperties {
  export const filterSensitiveLog = (obj: BucketCriteriaAdditionalProperties): any => ({
    ...obj,
  });
}

export enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about S3 buckets.</p>
 */
export interface BucketSortCriteria {
  /**
   * <p>The name of the attribute to sort the results by. This value can be the name of any property that Amazon Macie defines as bucket metadata, such as bucketName, accountId, or lastUpdated.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace BucketSortCriteria {
  export const filterSensitiveLog = (obj: BucketSortCriteria): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
 */
export interface S3Destination {
  /**
   * <p>The name of the bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for encryption of the results. This must be the ARN of an existing CMK that's in the same AWS Region as the bucket.</p>
   */
  kmsKeyArn: string | undefined;
}

export namespace S3Destination {
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.</p>
 */
export interface ClassificationExportConfiguration {
  /**
   * <p>The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ClassificationExportConfiguration {
  export const filterSensitiveLog = (obj: ClassificationExportConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding objects from a classification job.</p>
 */
export interface JobScopingBlock {
  /**
   * <p>An array of conditions, one for each condition that determines which objects to include or exclude from the job.</p>
   */
  and?: JobScopeTerm[];
}

export namespace JobScopingBlock {
  export const filterSensitiveLog = (obj: JobScopingBlock): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one or more property- and tag-based conditions that refine the scope of a classification job. These conditions define criteria that determine which objects a job analyzes.</p>
 */
export interface Scoping {
  /**
   * <p>The property- or tag-based conditions that determine which objects to exclude from the analysis.</p>
   */
  excludes?: JobScopingBlock;

  /**
   * <p>The property- or tag-based conditions that determine which objects to include in the analysis.</p>
   */
  includes?: JobScopingBlock;
}

export namespace Scoping {
  export const filterSensitiveLog = (obj: Scoping): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.</p>
 */
export interface S3JobDefinition {
  /**
   * <p>An array of objects, one for each bucket that contains objects to analyze.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * <p>The property- and tag-based conditions that determine which objects to include or exclude from the analysis.</p>
   */
  scoping?: Scoping;
}

export namespace S3JobDefinition {
  export const filterSensitiveLog = (obj: S3JobDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that a classification job runs once a day, every day. This is an empty object.</p>
 */
export interface DailySchedule {}

export namespace DailySchedule {
  export const filterSensitiveLog = (obj: DailySchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a monthly recurrence pattern for running a classification job.</p>
 */
export interface MonthlySchedule {
  /**
   * <p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 30.</p>
   */
  dayOfMonth?: number;
}

export namespace MonthlySchedule {
  export const filterSensitiveLog = (obj: MonthlySchedule): any => ({
    ...obj,
  });
}

export enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

/**
 * <p>Specifies a weekly recurrence pattern for running a classification job.</p>
 */
export interface WeeklySchedule {
  /**
   * <p>The day of the week when Amazon Macie runs the job.</p>
   */
  dayOfWeek?: DayOfWeek | string;
}

export namespace WeeklySchedule {
  export const filterSensitiveLog = (obj: WeeklySchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the recurrence pattern for running a classification job.</p>
 */
export interface JobScheduleFrequency {
  /**
   * <p>Specifies a weekly recurrence pattern for running the job.</p>
   */
  weeklySchedule?: WeeklySchedule;

  /**
   * <p>Specifies a monthly recurrence pattern for running the job.</p>
   */
  monthlySchedule?: MonthlySchedule;

  /**
   * <p>Specifies a daily recurrence pattern for running the job.</p>
   */
  dailySchedule?: DailySchedule;
}

export namespace JobScheduleFrequency {
  export const filterSensitiveLog = (obj: JobScheduleFrequency): any => ({
    ...obj,
  });
}

export interface CreateClassificationJobRequest {
  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the job.</p> <p>A job can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition: S3JobDefinition | undefined;

  /**
   * <p>A custom description of the job. The description can contain as many as 200 characters.</p>
   */
  description?: string;

  /**
   * <p>A custom name for the job. The name can contain as many as 500 characters.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies whether to run the job immediately, after it's created.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.</p></li></ul>
   */
  jobType: JobType | string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value of the jobType property to ONE_TIME.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>The custom data identifiers to use for data analysis and classification.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If the value is less than 100, Amazon Macie randomly selects the objects to analyze, up to the specified percentage.</p>
   */
  samplingPercentage?: number;
}

export namespace CreateClassificationJobRequest {
  export const filterSensitiveLog = (obj: CreateClassificationJobRequest): any => ({
    ...obj,
  });
}

export interface CreateClassificationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;
}

export namespace CreateClassificationJobResponse {
  export const filterSensitiveLog = (obj: CreateClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface CreateCustomDataIdentifierRequest {
  /**
   * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex?: string;

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters.</p>
   */
  keywords?: string[];

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters.</p>
   */
  ignoreWords?: string[];
}

export namespace CreateCustomDataIdentifierRequest {
  export const filterSensitiveLog = (obj: CreateCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomDataIdentifierResponse {
  /**
   * <p>The unique identifier for the custom data identifier that was created.</p>
   */
  customDataIdentifierId?: string;
}

export namespace CreateCustomDataIdentifierResponse {
  export const filterSensitiveLog = (obj: CreateCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the operator to use in a property-based condition that filters the results of a query for findings.</p>
 */
export interface CriterionAdditionalProperties {
  /**
   * <p>An equal to condition to apply to a specified property value for findings.</p>
   */
  eq?: string[];

  /**
   * <p>A less than or equal to condition to apply to a specified property value for findings.</p>
   */
  lte?: number;

  /**
   * <p>A greater than condition to apply to a specified property value for findings.</p>
   */
  gt?: number;

  /**
   * <p>A less than condition to apply to a specified property value for findings.</p>
   */
  lt?: number;

  /**
   * <p>A not equal to condition to apply to a specified property value for findings.</p>
   */
  neq?: string[];

  /**
   * <p>A greater than or equal to condition to apply to a specified property value for findings.</p>
   */
  gte?: number;
}

export namespace CriterionAdditionalProperties {
  export const filterSensitiveLog = (obj: CriterionAdditionalProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.</p>
 */
export interface FindingCriteria {
  /**
   * <p>A condition that specifies the property, operator, and value to use to filter the results.</p>
   */
  criterion?: { [key: string]: CriterionAdditionalProperties };
}

export namespace FindingCriteria {
  export const filterSensitiveLog = (obj: FindingCriteria): any => ({
    ...obj,
  });
}

export interface CreateFindingsFilterRequest {
  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action: FindingsFilterAction | string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;
}

export namespace CreateFindingsFilterRequest {
  export const filterSensitiveLog = (obj: CreateFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateFindingsFilterResponse {
  /**
   * <p>The unique identifier for the filter that was created.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was created.</p>
   */
  arn?: string;
}

export namespace CreateFindingsFilterResponse {
  export const filterSensitiveLog = (obj: CreateFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface CreateInvitationsRequest {
  /**
   * <p>A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.</p>
   */
  message?: string;

  /**
   * <p>Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true.</p>
   */
  disableEmailNotification?: boolean;

  /**
   * <p>An array that lists AWS account IDs, one for each account to send the invitation to.</p>
   */
  accountIds: string[] | undefined;
}

export namespace CreateInvitationsRequest {
  export const filterSensitiveLog = (obj: CreateInvitationsRequest): any => ({
    ...obj,
  });
}

export interface CreateInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace CreateInvitationsResponse {
  export const filterSensitiveLog = (obj: CreateInvitationsResponse): any => ({
    ...obj,
  });
}

export interface CreateMemberRequest {
  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The details for the account to associate with the master account.</p>
   */
  account: AccountDetail | undefined;
}

export namespace CreateMemberRequest {
  export const filterSensitiveLog = (obj: CreateMemberRequest): any => ({
    ...obj,
  });
}

export interface CreateMemberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the account that was associated with the master account.</p>
   */
  arn?: string;
}

export namespace CreateMemberResponse {
  export const filterSensitiveLog = (obj: CreateMemberResponse): any => ({
    ...obj,
  });
}

export interface CreateSampleFindingsRequest {
  /**
   * <p>An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled.</p>
   */
  findingTypes?: (FindingType | string)[];
}

export namespace CreateSampleFindingsRequest {
  export const filterSensitiveLog = (obj: CreateSampleFindingsRequest): any => ({
    ...obj,
  });
}

export interface CreateSampleFindingsResponse {}

export namespace CreateSampleFindingsResponse {
  export const filterSensitiveLog = (obj: CreateSampleFindingsResponse): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsRequest {
  /**
   * <p>An array that lists AWS account IDs, one for each account that sent an invitation to decline.</p>
   */
  accountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace DeclineInvitationsResponse {
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteCustomDataIdentifierRequest {
  export const filterSensitiveLog = (obj: DeleteCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomDataIdentifierResponse {}

export namespace DeleteCustomDataIdentifierResponse {
  export const filterSensitiveLog = (obj: DeleteCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteFindingsFilterRequest {
  export const filterSensitiveLog = (obj: DeleteFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteFindingsFilterResponse {}

export namespace DeleteFindingsFilterResponse {
  export const filterSensitiveLog = (obj: DeleteFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsRequest {
  /**
   * <p>An array that lists AWS account IDs, one for each account that sent an invitation to delete.</p>
   */
  accountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsResponse {
  /**
   * <p>An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.</p>
   */
  unprocessedAccounts?: UnprocessedAccount[];
}

export namespace DeleteInvitationsResponse {
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DeleteMemberRequest {
  export const filterSensitiveLog = (obj: DeleteMemberRequest): any => ({
    ...obj,
  });
}

export interface DeleteMemberResponse {}

export namespace DeleteMemberResponse {
  export const filterSensitiveLog = (obj: DeleteMemberResponse): any => ({
    ...obj,
  });
}

export interface DescribeBucketsRequest {
  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: BucketSortCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to filter the query results.</p>
   */
  criteria?: { [key: string]: BucketCriteriaAdditionalProperties };
}

export namespace DescribeBucketsRequest {
  export const filterSensitiveLog = (obj: DescribeBucketsRequest): any => ({
    ...obj,
  });
}

export interface DescribeBucketsResponse {
  /**
   * <p>An array of objects, one for each bucket that meets the filter criteria specified in the request.</p>
   */
  buckets?: BucketMetadata[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace DescribeBucketsResponse {
  export const filterSensitiveLog = (obj: DescribeBucketsResponse): any => ({
    ...obj,
  });
}

export interface DescribeClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeClassificationJobRequest {
  export const filterSensitiveLog = (obj: DescribeClassificationJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides processing statistics for a classification job.</p>
 */
export interface Statistics {
  /**
   * <p>The approximate number of objects that the job has yet to process during its current run.</p>
   */
  approximateNumberOfObjectsToProcess?: number;

  /**
   * <p>The number of times that the job has run.</p>
   */
  numberOfRuns?: number;
}

export namespace Statistics {
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj,
  });
}

export interface DescribeClassificationJobResponse {
  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job ran or will run only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>The token that was provided to ensure the idempotency of the request to create the job.</p>
   */
  clientToken?: string;

  /**
   * <p>The custom data identifiers that the job uses to analyze data.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job last ran.</p>
   */
  lastRunTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The custom description of the job.</p>
   */
  description?: string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the classification job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The sampling depth, as a percentage, that the job applies when it processes objects.</p>
   */
  samplingPercentage?: number;

  /**
   * <p>Specifies whether the job has run for the first time.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - The job was cancelled by you or a user of the master account for your organization. A job might also be cancelled if ownership of an S3 bucket changed while the job was running, and that change affected the job's access to the bucket.</p></li> <li><p>COMPLETE - Amazon Macie finished processing all the data specified for the job.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to jobs that occur only once.</p></li> <li><p>PAUSED - Amazon Macie started the job, but completion of the job would exceed one or more quotas for your account.</p></li> <li><p>RUNNING - The job is in progress.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The S3 buckets that the job is configured to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition?: S3JobDefinition;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The recurrence pattern for running the job. If the job is configured to run only once, this value is null.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>The number of times that the job has run and processing statistics for the job's most recent run.</p>
   */
  statistics?: Statistics;
}

export namespace DescribeClassificationJobResponse {
  export const filterSensitiveLog = (obj: DescribeClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Specifies whether Amazon Macie is enabled automatically for accounts that are added to the AWS organization.</p>
   */
  autoEnable?: boolean;

  /**
   * <p>Specifies whether the maximum number of Amazon Macie member accounts are already associated with the AWS organization.</p>
   */
  maxAccountLimitReached?: boolean;
}

export namespace DescribeOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DisableMacieRequest {}

export namespace DisableMacieRequest {
  export const filterSensitiveLog = (obj: DisableMacieRequest): any => ({
    ...obj,
  });
}

export interface DisableMacieResponse {}

export namespace DisableMacieResponse {
  export const filterSensitiveLog = (obj: DisableMacieResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The AWS account ID of the delegated administrator account.</p>
   */
  adminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace DisassociateMemberRequest {
  export const filterSensitiveLog = (obj: DisassociateMemberRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMemberResponse {}

export namespace DisassociateMemberResponse {
  export const filterSensitiveLog = (obj: DisassociateMemberResponse): any => ({
    ...obj,
  });
}

export enum FindingPublishingFrequency {
  FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
  ONE_HOUR = "ONE_HOUR",
  SIX_HOURS = "SIX_HOURS",
}

export enum MacieStatus {
  ENABLED = "ENABLED",
  PAUSED = "PAUSED",
}

export interface EnableMacieRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies the status for the account. To enable Amazon Macie and start all Amazon Macie activities for the account, set this value to ENABLED.</p>
   */
  status?: MacieStatus | string;
}

export namespace EnableMacieRequest {
  export const filterSensitiveLog = (obj: EnableMacieRequest): any => ({
    ...obj,
  });
}

export interface EnableMacieResponse {}

export namespace EnableMacieResponse {
  export const filterSensitiveLog = (obj: EnableMacieResponse): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS account ID for the account.</p>
   */
  adminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export enum FindingStatisticsSortAttributeName {
  count = "count",
  groupKey = "groupKey",
}

/**
 * <p>Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.</p>
 */
export interface FindingStatisticsSortCriteria {
  /**
   * <p>The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.</p>
   */
  attributeName?: FindingStatisticsSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace FindingStatisticsSortCriteria {
  export const filterSensitiveLog = (obj: FindingStatisticsSortCriteria): any => ({
    ...obj,
  });
}

export interface GetBucketStatisticsRequest {
  /**
   * <p>The unique identifier for the AWS account.</p>
   */
  accountId?: string;
}

export namespace GetBucketStatisticsRequest {
  export const filterSensitiveLog = (obj: GetBucketStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetBucketStatisticsResponse {
  /**
   * <p>The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that aren't encrypted.</p>
   */
  bucketCountByEncryptionType?: BucketCountByEncryptionType;

  /**
   * <p>The total storage size, in bytes, of all the buckets.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last analyzed the buckets.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in all the buckets. These objects use a file format, file extension, or content type that Amazon Macie supports.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total number of buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
   */
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  /**
   * <p>The total number of objects in all the buckets.</p>
   */
  objectCount?: number;

  /**
   * <p>The total compressed storage size, in bytes, of all the buckets.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>The total number of buckets that are shared with another AWS account.</p>
   */
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  /**
   * <p>The total number of buckets.</p>
   */
  bucketCount?: number;
}

export namespace GetBucketStatisticsResponse {
  export const filterSensitiveLog = (obj: GetBucketStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetClassificationExportConfigurationRequest {}

export namespace GetClassificationExportConfigurationRequest {
  export const filterSensitiveLog = (obj: GetClassificationExportConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetClassificationExportConfigurationResponse {
  /**
   * <p>The location where data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export namespace GetClassificationExportConfigurationResponse {
  export const filterSensitiveLog = (obj: GetClassificationExportConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetCustomDataIdentifierRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetCustomDataIdentifierRequest {
  export const filterSensitiveLog = (obj: GetCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface GetCustomDataIdentifierResponse {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match.</p>
   */
  regex?: string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match.</p>
   */
  keywords?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;
}

export namespace GetCustomDataIdentifierResponse {
  export const filterSensitiveLog = (obj: GetCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies criteria for sorting the results of a request for information about findings.</p>
 */
export interface SortCriteria {
  /**
   * <p>The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace SortCriteria {
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
}

export interface GetFindingsRequest {
  /**
   * <p>The criteria for sorting the results of the request.</p>
   */
  sortCriteria?: SortCriteria;

  /**
   * <p>An array of strings that lists the unique identifiers for the findings to retrieve information about.</p>
   */
  findingIds: string[] | undefined;
}

export namespace GetFindingsRequest {
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsResponse {
  /**
   * <p>An array of objects, one for each finding that meets the criteria specified in the request.</p>
   */
  findings?: Finding[];
}

export namespace GetFindingsResponse {
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetFindingsFilterRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetFindingsFilterRequest {
  export const filterSensitiveLog = (obj: GetFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>The action that's performed on findings that meet the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The custom description of the filter.</p>
   */
  description?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>The criteria that's used to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetFindingsFilterResponse {
  export const filterSensitiveLog = (obj: GetFindingsFilterResponse): any => ({
    ...obj,
  });
}

export enum GroupBy {
  classificationDetails_jobId = "classificationDetails.jobId",
  resourcesAffected_s3Bucket_name = "resourcesAffected.s3Bucket.name",
  severity_description = "severity.description",
  type = "type",
}

export interface GetFindingStatisticsRequest {
  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  size?: number;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: FindingStatisticsSortCriteria;

  /**
   * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
   */
  groupBy: GroupBy | string | undefined;

  /**
   * <p>The criteria to use to filter the query results.</p>
   */
  findingCriteria?: FindingCriteria;
}

export namespace GetFindingStatisticsRequest {
  export const filterSensitiveLog = (obj: GetFindingStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingStatisticsResponse {
  /**
   * <p>An array of objects, one for each group of findings that meet the filter criteria specified in the request.</p>
   */
  countsByGroup?: GroupCount[];
}

export namespace GetFindingStatisticsResponse {
  export const filterSensitiveLog = (obj: GetFindingStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The total number of invitations that were received by the account, not including the currently accepted invitation.</p>
   */
  invitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMacieSessionRequest {}

export namespace GetMacieSessionRequest {
  export const filterSensitiveLog = (obj: GetMacieSessionRequest): any => ({
    ...obj,
  });
}

export interface GetMacieSessionResponse {
  /**
   * <p>The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Amazon Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Amazon Macie activities are enabled for the account.</p>
   */
  status?: MacieStatus | string;

  /**
   * <p>The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Amazon Macie account.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in AWS resources for the account.</p>
   */
  serviceRole?: string;
}

export namespace GetMacieSessionResponse {
  export const filterSensitiveLog = (obj: GetMacieSessionResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>The AWS account ID for the master account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent and accepted to establish the relationship between the accounts.</p>
   */
  master?: Invitation;
}

export namespace GetMasterAccountResponse {
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMemberRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace GetMemberRequest {
  export const filterSensitiveLog = (obj: GetMemberRequest): any => ({
    ...obj,
  });
}

export interface GetMemberResponse {
  /**
   * <p>The AWS account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The current status of the relationship between the account and the master account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the member account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The AWS account ID for the master account.</p>
   */
  masterAccountId?: string;
}

export namespace GetMemberResponse {
  export const filterSensitiveLog = (obj: GetMemberResponse): any => ({
    ...obj,
  });
}

export enum UsageStatisticsSortKey {
  accountId = "accountId",
  freeTrialStartDate = "freeTrialStartDate",
  serviceLimitValue = "serviceLimitValue",
  total = "total",
}

/**
 * <p>Specifies criteria for sorting the results of a query for account quotas and usage data.</p>
 */
export interface UsageStatisticsSortBy {
  /**
   * <p>The field to sort the results by.</p>
   */
  key?: UsageStatisticsSortKey | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export namespace UsageStatisticsSortBy {
  export const filterSensitiveLog = (obj: UsageStatisticsSortBy): any => ({
    ...obj,
  });
}

export interface GetUsageStatisticsRequest {
  /**
   * <p>An array of objects, one for each condition to use to filter the query results. If the array contains more than one object, Amazon Macie uses an AND operator to join the conditions specified by the objects.</p>
   */
  filterBy?: UsageStatisticsFilter[];

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortBy?: UsageStatisticsSortBy;
}

export namespace GetUsageStatisticsRequest {
  export const filterSensitiveLog = (obj: GetUsageStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetUsageStatisticsResponse {
  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for an account that meets the filter criteria specified in the request.</p>
   */
  records?: UsageRecord[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace GetUsageStatisticsResponse {
  export const filterSensitiveLog = (obj: GetUsageStatisticsResponse): any => ({
    ...obj,
  });
}

export interface GetUsageTotalsRequest {}

export namespace GetUsageTotalsRequest {
  export const filterSensitiveLog = (obj: GetUsageTotalsRequest): any => ({
    ...obj,
  });
}

export interface GetUsageTotalsResponse {
  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.</p>
   */
  usageTotals?: UsageTotal[];
}

export namespace GetUsageTotalsResponse {
  export const filterSensitiveLog = (obj: GetUsageTotalsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies criteria for filtering the results of a request for information about classification jobs.</p>
 */
export interface ListJobsFilterCriteria {
  /**
   * <p>An array of objects, one for each condition that determines which jobs to exclude from the results.</p>
   */
  excludes?: ListJobsFilterTerm[];

  /**
   * <p>An array of objects, one for each condition that determines which jobs to include in the results.</p>
   */
  includes?: ListJobsFilterTerm[];
}

export namespace ListJobsFilterCriteria {
  export const filterSensitiveLog = (obj: ListJobsFilterCriteria): any => ({
    ...obj,
  });
}

export enum ListJobsSortAttributeName {
  createdAt = "createdAt",
  jobStatus = "jobStatus",
  jobType = "jobType",
  name = "name",
}

/**
 * <p>Specifies criteria for sorting the results of a request for information about classification jobs.</p>
 */
export interface ListJobsSortCriteria {
  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;

  /**
   * <p>The property to sort the results by.</p>
   */
  attributeName?: ListJobsSortAttributeName | string;
}

export namespace ListJobsSortCriteria {
  export const filterSensitiveLog = (obj: ListJobsSortCriteria): any => ({
    ...obj,
  });
}

export interface ListClassificationJobsRequest {
  /**
   * <p>The criteria to use to filter the results.</p>
   */
  filterCriteria?: ListJobsFilterCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: ListJobsSortCriteria;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListClassificationJobsRequest {
  export const filterSensitiveLog = (obj: ListClassificationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListClassificationJobsResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects, one for each job that meets the filter criteria specified in the request.</p>
   */
  items?: JobSummary[];
}

export namespace ListClassificationJobsResponse {
  export const filterSensitiveLog = (obj: ListClassificationJobsResponse): any => ({
    ...obj,
  });
}

export interface ListCustomDataIdentifiersRequest {
  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListCustomDataIdentifiersRequest {
  export const filterSensitiveLog = (obj: ListCustomDataIdentifiersRequest): any => ({
    ...obj,
  });
}

export interface ListCustomDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each custom data identifier.</p>
   */
  items?: CustomDataIdentifierSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListCustomDataIdentifiersResponse {
  export const filterSensitiveLog = (obj: ListCustomDataIdentifiersResponse): any => ({
    ...obj,
  });
}

export interface ListFindingsRequest {
  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: SortCriteria;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to filter the results.</p>
   */
  findingCriteria?: FindingCriteria;
}

export namespace ListFindingsRequest {
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
}

export interface ListFindingsResponse {
  /**
   * <p>An array of strings, where each string is the unique identifier for a finding that meets the filter criteria specified in the request.</p>
   */
  findingIds?: string[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsResponse {
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
}

export interface ListFindingsFiltersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsFiltersRequest {
  export const filterSensitiveLog = (obj: ListFindingsFiltersRequest): any => ({
    ...obj,
  });
}

export interface ListFindingsFiltersResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects, one for each filter that's associated with the account.</p>
   */
  findingsFilterListItems?: FindingsFilterListItem[];
}

export namespace ListFindingsFiltersResponse {
  export const filterSensitiveLog = (obj: ListFindingsFiltersResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;
}

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
}

export interface ListInvitationsResponse {
  /**
   * <p>An array of objects, one for each invitation that was received by the account.</p>
   */
  invitations?: Invitation[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies which accounts to include in the response, based on the status of an account's relationship with the master account. By default, the response includes only current member accounts. To include all accounts, set the value for this parameter to false.</p>
   */
  onlyAssociated?: string;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

export interface ListMembersResponse {
  /**
   * <p>An array of objects, one for each account that's associated with the master account and meets the criteria specified by the onlyAssociated request parameter.</p>
   */
  members?: Member[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export namespace ListOrganizationAdminAccountsRequest {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>An array of objects, one for each account that's designated as a delegated administrator of Amazon Macie for the AWS organization. Of those accounts, only one can have a status of ENABLED.</p>
   */
  adminAccounts?: AdminAccount[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListOrganizationAdminAccountsResponse {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutClassificationExportConfigurationRequest {
  /**
   * <p>The location to store data classification results in, and the encryption settings to use when storing results in that location.</p>
   */
  configuration: ClassificationExportConfiguration | undefined;
}

export namespace PutClassificationExportConfigurationRequest {
  export const filterSensitiveLog = (obj: PutClassificationExportConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutClassificationExportConfigurationResponse {
  /**
   * <p>The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export namespace PutClassificationExportConfigurationResponse {
  export const filterSensitiveLog = (obj: PutClassificationExportConfigurationResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface TestCustomDataIdentifierRequest {
  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex: string | undefined;

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.</p>
   */
  sampleText: string | undefined;
}

export namespace TestCustomDataIdentifierRequest {
  export const filterSensitiveLog = (obj: TestCustomDataIdentifierRequest): any => ({
    ...obj,
  });
}

export interface TestCustomDataIdentifierResponse {
  /**
   * <p>The number of instances of sample text that matched the detection criteria specified in the custom data identifier.</p>
   */
  matchCount?: number;
}

export namespace TestCustomDataIdentifierResponse {
  export const filterSensitiveLog = (obj: TestCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The status to change the job's status to. The only supported value is CANCELLED, which cancels the job completely.</p>
   */
  jobStatus: JobStatus | string | undefined;
}

export namespace UpdateClassificationJobRequest {
  export const filterSensitiveLog = (obj: UpdateClassificationJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassificationJobResponse {}

export namespace UpdateClassificationJobResponse {
  export const filterSensitiveLog = (obj: UpdateClassificationJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingsFilterRequest {
  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;
}

export namespace UpdateFindingsFilterRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsFilterResponse {
  /**
   * <p>The unique identifier for the filter that was updated.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   */
  arn?: string;
}

export namespace UpdateFindingsFilterResponse {
  export const filterSensitiveLog = (obj: UpdateFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface UpdateMacieSessionRequest {
  /**
   * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies whether to change the status of the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status?: MacieStatus | string;
}

export namespace UpdateMacieSessionRequest {
  export const filterSensitiveLog = (obj: UpdateMacieSessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMacieSessionResponse {}

export namespace UpdateMacieSessionResponse {
  export const filterSensitiveLog = (obj: UpdateMacieSessionResponse): any => ({
    ...obj,
  });
}

export interface UpdateMemberSessionRequest {
  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status: MacieStatus | string | undefined;

  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;
}

export namespace UpdateMemberSessionRequest {
  export const filterSensitiveLog = (obj: UpdateMemberSessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMemberSessionResponse {}

export namespace UpdateMemberSessionResponse {
  export const filterSensitiveLog = (obj: UpdateMemberSessionResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.</p>
   */
  autoEnable: boolean | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}
