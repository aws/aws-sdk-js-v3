import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AdminStatus {
  DISABLING_IN_PROGRESS = "DISABLING_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
 * <p>Provides information about the delegated Amazon Macie administrator account for an AWS organization.</p>
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

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

export enum IsDefinedInJob {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
}

export enum IsMonitoredByJob {
  FALSE = "FALSE",
  TRUE = "TRUE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.</p>
 */
export interface JobDetails {
  /**
   * <p>Specifies whether any one-time or recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - One or more jobs is configured to analyze data in the bucket, and at least one of those jobs has a status other than CANCELLED.</p></li> <li><p>FALSE - No jobs are configured to analyze data in the bucket, or all the jobs that are configured to analyze data in the bucket have a status of CANCELLED.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul> <p></p>
   */
  isDefinedInJob?: IsDefinedInJob | string;

  /**
   * <p>Specifies whether any recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - One or more recurring jobs is configured to analyze data in the bucket, and at least one of those jobs has a status other than CANCELLED.</p></li> <li><p>FALSE - No recurring jobs are configured to analyze data in the bucket, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>
   */
  isMonitoredByJob?: IsMonitoredByJob | string;

  /**
   * <p>The unique identifier for the job that ran most recently (either the latest run of a recurring job or the only run of a one-time job) and is configured to analyze data in the bucket.</p> <p>This value is null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   */
  lastJobId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started.</p> <p>This value is null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>
   */
  lastJobRunTime?: Date;
}

export namespace JobDetails {
  export const filterSensitiveLog = (obj: JobDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.</p>
 */
export interface ObjectCountByEncryptionType {
  /**
   * <p>The total number of objects that are encrypted using a customer-managed key. The objects use customer-provided server-side (SSE-C) encryption.</p>
   */
  customerManaged?: number;

  /**
   * <p>The total number of objects that are encrypted using an AWS Key Management Service (AWS KMS) customer master key (CMK). The objects use AWS managed AWS KMS (AWS-KMS) encryption or customer managed AWS KMS (SSE-KMS) encryption.</p>
   */
  kmsManaged?: number;

  /**
   * <p>The total number of objects that are encrypted using an Amazon S3 managed key. The objects use Amazon S3 managed (SSE-S3) encryption.</p>
   */
  s3Managed?: number;

  /**
   * <p>The total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  unencrypted?: number;
}

export namespace ObjectCountByEncryptionType {
  export const filterSensitiveLog = (obj: ObjectCountByEncryptionType): any => ({
    ...obj,
  });
}

export enum EffectivePermission {
  NOT_PUBLIC = "NOT_PUBLIC",
  PUBLIC = "PUBLIC",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BlockPublicAccess {
  /**
   * <p>Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.</p>
   */
  blockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 blocks public bucket policies for the bucket.</p>
   */
  blockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.</p>
   */
  ignorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 restricts public bucket policies for the bucket.</p>
   */
  restrictPublicBuckets?: boolean;
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
 * <p>Provides information about the bucket-level permissions settings for an S3 bucket.</p>
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
 * <p>Provides information about the account-level and bucket-level permissions settings for an S3 bucket.</p>
 */
export interface BucketPermissionConfiguration {
  /**
   * <p>The account-level permissions settings that apply to the bucket.</p>
   */
  accountLevelPermissions?: AccountLevelPermissions;

  /**
   * <p>The bucket-level permissions settings for the bucket.</p>
   */
  bucketLevelPermissions?: BucketLevelPermissions;
}

export namespace BucketPermissionConfiguration {
  export const filterSensitiveLog = (obj: BucketPermissionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.</p>
 */
export interface BucketPublicAccess {
  /**
   * <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are:</p> <ul><li><p>NOT_PUBLIC - The bucket isn't publicly accessible.</p></li> <li><p>PUBLIC - The bucket is publicly accessible.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.</p></li></ul>
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
   * <p>Specifies whether the bucket is configured to replicate one or more objects to an AWS account that isn't part of the same Amazon Macie organization.</p>
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
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.</p>
 */
export interface KeyValuePair {
  /**
   * <p>One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.</p>
   */
  key?: string;

  /**
   * <p>One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.</p>
   */
  value?: string;
}

export namespace KeyValuePair {
  export const filterSensitiveLog = (obj: KeyValuePair): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results.</p>
 */
export interface ObjectLevelStatistics {
  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.</p>
   */
  fileType?: number;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.</p>
   */
  storageClass?: number;

  /**
   * <p>The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  total?: number;
}

export namespace ObjectLevelStatistics {
  export const filterSensitiveLog = (obj: ObjectLevelStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an S3 bucket that Amazon Macie monitors and analyzes.</p>
 */
export interface BucketMetadata {
  /**
   * <p>The unique identifier for the AWS account that owns the bucket.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  bucketArn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
   */
  bucketCreatedAt?: Date;

  /**
   * <p>The name of the bucket.</p>
   */
  bucketName?: string;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>Specifies whether any one-time or recurring classification jobs are configured to analyze data in the bucket, and, if so, the details of the job that ran most recently.</p>
   */
  jobDetails?: JobDetails;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved data about the bucket from Amazon S3.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>The total number of objects in the bucket.</p>
   */
  objectCount?: number;

  /**
   * <p>The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.</p>
   */
  objectCountByEncryptionType?: ObjectCountByEncryptionType;

  /**
   * <p>Specifies whether the bucket is publicly accessible. If this value is true, an access control list (ACL), bucket policy, or block public access settings allow the bucket to be accessed by the general public.</p>
   */
  publicAccess?: BucketPublicAccess;

  /**
   * <p>The AWS Region that hosts the bucket.</p>
   */
  region?: string;

  /**
   * <p>Specifies whether the bucket is configured to replicate one or more objects to buckets for other AWS accounts and, if so, which accounts.</p>
   */
  replicationDetails?: ReplicationDetails;

  /**
   * <p>Specifies whether the bucket is shared with another AWS account. Possible values are:</p> <ul><li><p>EXTERNAL - The bucket is shared with an AWS account that isn't part of the same Amazon Macie organization.</p></li> <li><p>INTERNAL - The bucket is shared with an AWS account that's part of the same Amazon Macie organization.</p></li> <li><p>NOT_SHARED - The bucket isn't shared with other AWS accounts.</p></li> <li><p>UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.</p></li></ul>
   */
  sharedAccess?: SharedAccess | string;

  /**
   * <p>The total storage size, in bytes, of the bucket.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total compressed storage size, in bytes, of the bucket.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>An array that specifies the tags (keys and values) that are associated with the bucket.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * <p>The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;

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
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;
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
 * <p>Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.</p>
 */
export interface Cell {
  /**
   * <p>The location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.</p>
   */
  cellReference?: string;

  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier. For example, 1 for column A, 2 for column B, and so on.</p>
   */
  column?: number;

  /**
   * <p>The name of the column that contains the data, if available.</p>
   */
  columnName?: string;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  row?: number;
}

export namespace Cell {
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the location of an occurrence of sensitive data in an Adobe Portable Document Format file, Microsoft Word document, or non-binary text file.</p>
 */
export interface Range {
  /**
   * <p>Possible values are:</p> <ul><li><p>In an Occurrences.lineRanges array, the number of lines from the beginning of the file to the end of the sensitive data.</p></li> <li><p>In an Occurrences.offsetRanges array, the number of characters from the beginning of the file to the end of the sensitive data.</p></li> <li><p>In a Page object, the number of lines (lineRange) or characters (offsetRange) from the beginning of the page to the end of the sensitive data.</p></li></ul>
   */
  end?: number;

  /**
   * <p>Possible values are:</p> <ul><li><p>In an Occurrences.lineRanges array, the number of lines from the beginning of the file to the beginning of the sensitive data.</p></li> <li><p>In an Occurrences.offsetRanges array, the number of characters from the beginning of the file to the beginning of the sensitive data.</p></li> <li><p>In a Page object, the number of lines (lineRange) or characters (offsetRange) from the beginning of the page to the beginning of the sensitive data.</p></li></ul>
   */
  start?: number;

  /**
   * <p>The column number for the column that contains the data, if the file contains structured data.</p>
   */
  startColumn?: number;
}

export namespace Range {
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.</p>
 */
export interface Page {
  /**
   * <p>The line that contains the data, and the position of the data on that line.</p>
   */
  lineRange?: Range;

  /**
   * <p>The position of the data on the page, relative to the beginning of the page.</p>
   */
  offsetRange?: Range;

  /**
   * <p>The page number of the page that contains the data.</p>
   */
  pageNumber?: number;
}

export namespace Page {
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the location of an occurrence of sensitive data in an Apache Avro object container or Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data.</p> <p>If the name of an element exceeds 20 characters, Amazon Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.</p>
   */
  jsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  recordIndex?: number;
}

export namespace _Record {
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the location of 1-15 occurrences of sensitive data that was detected by managed data identifiers or a custom data identifier and produced a sensitive data finding.</p>
 */
export interface Occurrences {
  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. Each object specifies the cell or field that contains the data. This value is null for all other types of files.</p>
   */
  cells?: Cell[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a Microsoft Word document or non-binary text file, such as an HTML, JSON, TXT, or XML file. Each object specifies the line that contains the data, and the position of the data on that line.</p> <p>This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the locations of: data in unstructured sections of an otherwise structured file, such as a comment in a file; and, data in a malformed file that Amazon Macie analyzes as plain text.</p>
   */
  lineRanges?: Range[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in a binary text file. Each object specifies the position of the data relative to the beginning of the file.</p> <p>This value is typically null. For binary text files, Amazon Macie adds location data to a lineRanges.Range or Page object, depending on the file type.</p>
   */
  offsetRanges?: Range[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. Each object specifies the page that contains the data, and the position of the data on that page. This value is null for all other types of files.</p>
   */
  pages?: Page[];

  /**
   * <p>An array of objects, one for each occurrence of sensitive data in an Apache Avro object container or Apache Parquet file. Each object specifies the record index and the path to the field in the record that contains the data. This value is null for all other types of files.</p>
   */
  records?: _Record[];
}

export namespace Occurrences {
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.</p>
 */
export interface CustomDetection {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The total number of occurrences of the sensitive data that the custom data identifier detected.</p>
   */
  count?: number;

  /**
   * <p>The name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   */
  occurrences?: Occurrences;
}

export namespace CustomDetection {
  export const filterSensitiveLog = (obj: CustomDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.</p>
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
 * <p>Provides information about a type of sensitive data that was detected by managed data identifiers and produced a sensitive data finding.</p>
 */
export interface DefaultDetection {
  /**
   * <p>The total number of occurrences of the type of sensitive data that was detected.</p>
   */
  count?: number;

  /**
   * <p>The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p>
   */
  occurrences?: Occurrences;

  /**
   * <p>The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.</p>
   */
  type?: string;
}

export namespace DefaultDetection {
  export const filterSensitiveLog = (obj: DefaultDetection): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.</p>
 */
export interface SensitiveDataItem {
  /**
   * <p>The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or AWS secret keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as driver's license identification numbers.</p>
   */
  category?: SensitiveDataItemCategory | string;

  /**
   * <p>An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.</p>
   */
  detections?: DefaultDetection[];

  /**
   * <p>The total number of occurrences of the sensitive data that was detected.</p>
   */
  totalCount?: number;
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
   * <p>The status of the finding. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the object that the finding applies to.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of the data in the object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the object that the finding applies to. For example, the object is a malformed file or a file that uses an unsupported format.</p></li></ul>
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
 * <p>Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.</p>
 */
export interface ClassificationResult {
  /**
   * <p>Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p> <p>This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).</p>
   */
  additionalOccurrences?: boolean;

  /**
   * <p>The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.</p>
   */
  customDataIdentifiers?: CustomDataIdentifiers;

  /**
   * <p>The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.</p>
   */
  mimeType?: string;

  /**
   * <p>The category, types, and number of occurrences of the sensitive data that produced the finding.</p>
   */
  sensitiveData?: SensitiveDataItem[];

  /**
   * <p>The total size, in bytes, of the data that the finding applies to.</p>
   */
  sizeClassified?: number;

  /**
   * <p>The status of the finding.</p>
   */
  status?: ClassificationResultStatus;
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
   * <p>The path to the folder or file (in Amazon S3) that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.</p>
   */
  detailedResultsLocation?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the classification job that produced the finding.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the classification job that produced the finding.</p>
   */
  jobId?: string;

  /**
   * <p>The status and other details for the finding.</p>
   */
  result?: ClassificationResult;
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
   * <p>The name of the operation that was invoked most recently and produced the finding.</p>
   */
  api?: string;

  /**
   * <p>The URL of the AWS service that provides the operation, for example: s3.amazonaws.com.</p>
   */
  apiServiceName?: string;

  /**
   * <p>The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.</p>
   */
  firstSeen?: Date;

  /**
   * <p>The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.</p>
   */
  lastSeen?: Date;
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
   * <p>The latitude coordinate of the location, rounded to four decimal places.</p>
   */
  lat?: number;

  /**
   * <p>The longitude coordinate of the location, rounded to four decimal places.</p>
   */
  lon?: number;
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
   * <p>The autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asn?: string;

  /**
   * <p>The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.</p>
   */
  asnOrg?: string;

  /**
   * <p>The name of the internet service provider (ISP) that owned the IP address.</p>
   */
  isp?: string;

  /**
   * <p>The name of the organization that owned the IP address.</p>
   */
  org?: string;
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
   * <p>The Internet Protocol version 4 (IPv4) address of the device.</p>
   */
  ipAddressV4?: string;

  /**
   * <p>The city that the IP address originated from.</p>
   */
  ipCity?: IpCity;

  /**
   * <p>The country that the IP address originated from.</p>
   */
  ipCountry?: IpCountry;

  /**
   * <p>The geographic coordinates of the location that the IP address originated from.</p>
   */
  ipGeoLocation?: IpGeoLocation;

  /**
   * <p>The registered owner of the IP address.</p>
   */
  ipOwner?: IpOwner;
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
   * <p>The date and time, in UTC and ISO 8601 format, when the credentials were issued.</p>
   */
  creationDate?: Date;

  /**
   * <p>Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.</p>
   */
  mfaAuthenticated?: boolean;
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
   * <p>The Amazon Resource Name (ARN) of the source account, IAM user, or role that was used to get the credentials.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that was used to get the credentials.</p>
   */
  principalId?: string;

  /**
   * <p>The source of the temporary security credentials, such as Root, IAMUser, or Role.</p>
   */
  type?: string;

  /**
   * <p>The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.</p>
   */
  userName?: string;
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
   * <p>The AWS access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;

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
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;
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
   * <p>The unique identifier for the AWS account.</p>
   */
  accountId?: string;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;
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
   * <p>The AWS access key ID that identifies the credentials.</p>
   */
  accessKeyId?: string;

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
   * <p>The details of the session that was created for the credentials, including the entity that issued the session.</p>
   */
  sessionContext?: SessionContext;
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
   * <p>The unique identifier for the AWS account that's associated with the IAM user who performed the action.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the IAM user who performed the action.</p>
   */
  principalId?: string;

  /**
   * <p>The user name of the IAM user who performed the action.</p>
   */
  userName?: string;
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
   * <p>The unique identifier for the AWS account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the entity that performed the action.</p>
   */
  principalId?: string;
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
   * <p>If the action was performed by an AWS account that belongs to an AWS service, the name of the service.</p>
   */
  awsService?: AwsService;

  /**
   * <p>If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the AWS Security Token Service (AWS STS) API, the identifiers, session context, and other details about the identity.</p>
   */
  federatedUser?: FederatedUser;

  /**
   * <p>If the action was performed using the credentials for an AWS Identity and Access Management (IAM) user, the name and other details about the user.</p>
   */
  iamUser?: IamUser;

  /**
   * <p>If the action was performed using the credentials for your AWS account, the details of your account.</p>
   */
  root?: UserIdentityRoot;

  /**
   * <p>The type of entity that performed the action.</p>
   */
  type?: UserIdentityType | string;
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
   * <p>The action that produced the finding.</p>
   */
  action?: FindingAction;

  /**
   * <p>The entity that performed the action that produced the finding.</p>
   */
  actor?: FindingActor;
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
 * <p>Provides information about the server-side encryption settings for an S3 bucket or S3 object.</p>
 */
export interface ServerSideEncryption {
  /**
   * <p>The server-side encryption algorithm that's used when storing data in the bucket or object. If encryption is disabled for the bucket or object, this value is NONE.</p>
   */
  encryptionType?: EncryptionType | string;

  /**
   * <p>The unique identifier for the AWS Key Management Service (AWS KMS) master key that's used to encrypt the bucket or object. This value is null if AWS KMS isn't used to encrypt the bucket or object.</p>
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
   * <p>The display name of the user who owns the bucket.</p>
   */
  displayName?: string;

  /**
   * <p>The AWS account ID for the user who owns the bucket.</p>
   */
  id?: string;
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
   * <p>The Amazon Resource Name (ARN) of the bucket.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the bucket was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The type of server-side encryption that's used by default to encrypt objects in the bucket.</p>
   */
  defaultServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>The name of the bucket.</p>
   */
  name?: string;

  /**
   * <p>The display name and account identifier for the user who owns the bucket.</p>
   */
  owner?: S3BucketOwner;

  /**
   * <p>The permissions settings that determine whether the bucket is publicly accessible.</p>
   */
  publicAccess?: BucketPublicAccess;

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
   * <p>The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.</p>
   */
  eTag?: string;

  /**
   * <p>The file name extension of the object. If the object doesn't have a file name extension, this value is "".</p>
   */
  extension?: string;

  /**
   * <p>The full key (name) that's assigned to the object.</p>
   */
  key?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the object was last modified.</p>
   */
  lastModified?: Date;

  /**
   * <p>The path to the object, including the full key (name).</p>
   */
  path?: string;

  /**
   * <p>Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.</p>
   */
  publicAccess?: boolean;

  /**
   * <p>The type of server-side encryption that's used for the object.</p>
   */
  serverSideEncryption?: ServerSideEncryption;

  /**
   * <p>The total storage size, in bytes, of the object.</p>
   */
  size?: number;

  /**
   * <p>The storage class of the object.</p>
   */
  storageClass?: StorageClass | string;

  /**
   * <p>The tags that are associated with the object.</p>
   */
  tags?: KeyValuePair[];

  /**
   * <p>The identifier for the affected version of the object.</p>
   */
  versionId?: string;
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
 * <p>Provides the numerical and qualitative representations of a finding's severity.</p>
 */
export interface Severity {
  /**
   * <p>The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).</p>
   */
  description?: SeverityDescription | string;

  /**
   * <p>The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).</p>
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
 * <p>Provides the details of a finding.</p>
 */
export interface Finding {
  /**
   * <p>The unique identifier for the AWS account that the finding applies to. This is typically the account that owns the affected resource.</p>
   */
  accountId?: string;

  /**
   * <p>Specifies whether the finding is archived.</p>
   */
  archived?: boolean;

  /**
   * <p>The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.</p>
   */
  category?: FindingCategory | string;

  /**
   * <p>The details of a sensitive data finding. This value is null for a policy finding.</p>
   */
  classificationDetails?: ClassificationDetails;

  /**
   * <p>The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.</p>
   */
  count?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.</p>
   */
  id?: string;

  /**
   * <p>The AWS partition that Amazon Macie created the finding in.</p>
   */
  partition?: string;

  /**
   * <p>The details of a policy finding. This value is null for a sensitive data finding.</p>
   */
  policyDetails?: PolicyDetails;

  /**
   * <p>The AWS Region that Amazon Macie created the finding in.</p>
   */
  region?: string;

  /**
   * <p>The resources that the finding applies to.</p>
   */
  resourcesAffected?: ResourcesAffected;

  /**
   * <p>Specifies whether the finding is a sample finding. A <i>sample finding</i> is a finding that uses example data to demonstrate what a finding might contain.</p>
   */
  sample?: boolean;

  /**
   * <p>The version of the schema that was used to define the data structures in the finding.</p>
   */
  schemaVersion?: string;

  /**
   * <p>The severity level and score for the finding.</p>
   */
  severity?: Severity;

  /**
   * <p>The brief description of the finding.</p>
   */
  title?: string;

  /**
   * <p>The type of the finding.</p>
   */
  type?: FindingType | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the finding was last updated. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.</p>
   */
  updatedAt?: Date;
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
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

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
   * <p>The total number of findings in the group of query results.</p>
   */
  count?: number;

  /**
   * <p>The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.</p>
   */
  groupKey?: string;
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
   * <p>The unique identifier for the invitation. Amazon Macie uses this identifier to validate the inviter account with the invitee account.</p>
   */
  invitationId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The status of the relationship between the account that sent the invitation (<i>inviter account</i>) and the account that received the invitation (<i>invitee account</i>).</p>
   */
  relationshipStatus?: RelationshipStatus | string;
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
   * <p>The operator to use in the condition. Valid operators for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - EQ (equals) or NE (not equals)</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - Any operator except CONTAINS</p></li> <li><p>OBJECT_SIZE - Any operator except CONTAINS</p></li> <li><p>TAG - EQ (equals) or NE (not equals)</p></li></ul>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The object property to use in the condition.</p>
   */
  key?: ScopeFilterKey | string;

  /**
   * <p>An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION, this array can specify multiple values and Amazon Macie uses an OR operator to join the values. Otherwise, this array can specify only one value. Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: doc, docx, pdf</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2020-09-28T14:31:13Z</p></li> <li><p>OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object.</p></li> <li><p>TAG - A string that represents a tag key for an object. For advanced options, use a TagScopeTerm object, instead of a SimpleScopeTerm object, to define a tag-based condition for the job.</p></li></ul>
   */
  values?: string[];
}

export namespace SimpleScopeTerm {
  export const filterSensitiveLog = (obj: SimpleScopeTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a tag key or tag key and value pair to use in a tag-based condition for a classification job.</p>
 */
export interface TagValuePair {
  /**
   * <p>The value for the tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.</p>
   */
  value?: string;
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
   * <p>The operator to use in the condition. Valid operators are EQ (equals) or NE (not equals).</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The tag key to use in the condition.</p>
   */
  key?: string;

  /**
   * <p>The tag keys or tag key and value pairs to use in the condition.</p>
   */
  tagValues?: TagValuePair[];

  /**
   * <p>The type of object to apply the condition to.</p>
   */
  target?: TagTarget | string;
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
   * <p>A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job.</p>
   */
  simpleScopeTerm?: SimpleScopeTerm;

  /**
   * <p>A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an object from the job.</p>
   */
  tagScopeTerm?: TagScopeTerm;
}

export namespace JobScopeTerm {
  export const filterSensitiveLog = (obj: JobScopeTerm): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies which AWS account owns the S3 buckets that a classification job analyzes, and the buckets to analyze for the account.</p>
 */
export interface S3BucketDefinitionForJob {
  /**
   * <p>The unique identifier for the AWS account that owns the buckets. If you specify this value and don't specify a value for the buckets array, the job analyzes objects in all the buckets that are owned by the account and meet other conditions specified for the job.</p>
   */
  accountId?: string;

  /**
   * <p>An array that lists the names of the buckets.</p>
   */
  buckets?: string[];
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
  USER_PAUSED = "USER_PAUSED",
}

export enum JobType {
  ONE_TIME = "ONE_TIME",
  SCHEDULED = "SCHEDULED",
}

export enum LastRunErrorStatusCode {
  ERROR = "ERROR",
  NONE = "NONE",
}

/**
 * <p>Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For example, the job is configured to analyze data for a member account that was suspended, or the job is configured to analyze an S3 bucket that Amazon Macie isn't allowed to access.</p>
 */
export interface LastRunErrorStatus {
  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are:</p> <ul><li><p>ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job.</p></li> <li><p>NONE - No errors occurred. Macie processed all the data specified for the job.</p></li></ul>
   */
  code?: LastRunErrorStatusCode | string;
}

export namespace LastRunErrorStatus {
  export const filterSensitiveLog = (obj: LastRunErrorStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about when a classification job was paused and when it will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.</p>
 */
export interface UserPausedDetails {
  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job will expire and be cancelled if you don't resume it first. If you don't resume a job within 30 days of pausing it, the job expires and Amazon Macie cancels it.</p>
   */
  jobExpiresAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Health event that Amazon Macie sent to notify you of the job's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.</p>
   */
  jobImminentExpirationHealthEventArn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when you paused the job.</p>
   */
  jobPausedAt?: Date;
}

export namespace UserPausedDetails {
  export const filterSensitiveLog = (obj: UserPausedDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a classification job, including the current status of the job.</p>
 */
export interface JobSummary {
  /**
   * <p>The S3 buckets that the job is configured to analyze.</p>
   */
  bucketDefinitions?: S3BucketDefinitionForJob[];

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job, or you paused the job while it had a status of RUNNING and you didn't resume it within 30 days of pausing it.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Amazon Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume the job within 30 days of pausing it, the job expires and is cancelled. To check the job's expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   */
  lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   */
  userPausedDetails?: UserPausedDetails;
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
   * <p>The operator to use to filter the results.</p>
   */
  comparator?: JobComparator | string;

  /**
   * <p>The property to use to filter the results.</p>
   */
  key?: ListJobsFilterKey | string;

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
   * <p>The AWS account ID for the account.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p>
   */
  arn?: string;

  /**
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The AWS account ID for the master account.</p>
   */
  masterAccountId?: string;

  /**
   * <p>The current status of the relationship between the account and the master account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.</p>
   */
  updatedAt?: Date;
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
   * <p>The source of the issue or delay in processing the request.</p>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>The reason why the request hasn't been processed.</p>
   */
  errorMessage?: string;
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
   * <p>The type of currency that the value for the metric (estimatedCost) is reported in.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The estimated value for the metric.</p>
   */
  estimatedCost?: string;

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
   * <p>The unique identifier for the AWS account that the data applies to.</p>
   */
  accountId?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the free trial started for the account.</p>
   */
  freeTrialStartDate?: Date;

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
   * <p>The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.</p>
   */
  comparator?: UsageStatisticsFilterComparator | string;

  /**
   * <p>The field to use in the condition.</p>
   */
  key?: UsageStatisticsFilterKey | string;

  /**
   * <p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an AWS account.</p></li></ul> <ul><li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the free trial started for an account.</p></li></ul> <ul><li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li></ul> <ul><li><p>total - A string that represents the current, estimated month-to-date cost for an account.</p></li></ul>
   */
  values?: string[];
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

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. Macie can't determine whether these buckets are publicly accessible.</p>
   */
  unknown?: number;
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
   * <p>The total number of buckets that use an AWS Key Management Service (AWS KMS) customer master key (CMK) to encrypt objects. These buckets use AWS managed AWS KMS (AWS-KMS) encryption or customer managed AWS KMS (SSE-KMS) encryption.</p>
   */
  kmsManaged?: number;

  /**
   * <p>The total number of buckets that use an Amazon S3 managed key to encrypt objects. These buckets use Amazon S3 managed (SSE-S3) encryption.</p>
   */
  s3Managed?: number;

  /**
   * <p>The total number of buckets that don't encrypt objects by default. Default encryption is disabled for these buckets.</p>
   */
  unencrypted?: number;
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
   * <p>The total number of buckets that are shared with an AWS account that's part of the same Amazon Macie organization.</p>
   */
  internal?: number;

  /**
   * <p>The total number of buckets that aren't shared with other AWS accounts.</p>
   */
  notShared?: number;

  /**
   * <p>The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. Macie can't determine whether these buckets are shared with other AWS accounts.</p>
   */
  unknown?: number;
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
   * <p>A greater than condition to apply to a specified attribute value for buckets.</p>
   */
  gt?: number;

  /**
   * <p>A greater than or equal to condition to apply to a specified attribute value for buckets.</p>
   */
  gte?: number;

  /**
   * <p>A less than condition to apply to a specified attribute value for buckets.</p>
   */
  lt?: number;

  /**
   * <p>A less than or equal to condition to apply to a specified attribute value for buckets.</p>
   */
  lte?: number;

  /**
   * <p>A not equal to condition to apply to a specified attribute value for buckets.</p>
   */
  neq?: string[];

  /**
   * <p>The prefix of the buckets to include in the results.</p>
   */
  prefix?: string;
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
   * <p>The name of the attribute to sort the results by. This value can be the name of any property that Amazon Macie defines as bucket metadata, such as bucketName or accountId.</p>
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
 * <p>Specifies one or more property- and tag-based conditions that define criteria for including or excluding objects from a classification job. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.</p>
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
 * <p>Specifies one or more property- and tag-based conditions that refine the scope of a classification job. These conditions define criteria that determine which objects a job analyzes. Exclude conditions take precedence over include conditions.</p>
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
   * <p>An array of objects, one for each AWS account that owns buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for the account.</p>
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
   * <p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.</p> <p>If this value exceeds the number of days in a certain month, Macie runs the job on the last day of that month. For example, if this value is 31 and a month has only 30 days, Macie runs the job on day 30 of that month.</p>
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
   * <p>Specifies a daily recurrence pattern for running the job.</p>
   */
  dailySchedule?: DailySchedule;

  /**
   * <p>Specifies a monthly recurrence pattern for running the job.</p>
   */
  monthlySchedule?: MonthlySchedule;

  /**
   * <p>Specifies a weekly recurrence pattern for running the job.</p>
   */
  weeklySchedule?: WeeklySchedule;
}

export namespace JobScheduleFrequency {
  export const filterSensitiveLog = (obj: JobScheduleFrequency): any => ({
    ...obj,
  });
}

export interface CreateClassificationJobRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The custom data identifiers to use for data analysis and classification.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>A custom description of the job. The description can contain as many as 200 characters.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether to analyze all existing, eligible objects immediately after the job is created.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.</p></li></ul>
   */
  jobType: JobType | string | undefined;

  /**
   * <p>A custom name for the job. The name can contain as many as 500 characters.</p>
   */
  name: string | undefined;

  /**
   * <p>The S3 buckets that contain the objects to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition: S3JobDefinition | undefined;

  /**
   * <p>The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.</p>
   */
  samplingPercentage?: number;

  /**
   * <p>The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the job.</p> <p>A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
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
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex?: string;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
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
   * <p>A condition that requires an array field to exactly match the specified property values. You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.</p>
   */
  eqExactMatch?: string[];

  /**
   * <p>A greater than condition to apply to a specified property value for findings.</p>
   */
  gt?: number;

  /**
   * <p>A greater than or equal to condition to apply to a specified property value for findings.</p>
   */
  gte?: number;

  /**
   * <p>A less than condition to apply to a specified property value for findings.</p>
   */
  lt?: number;

  /**
   * <p>A less than or equal to condition to apply to a specified property value for findings.</p>
   */
  lte?: number;

  /**
   * <p>A not equal to condition to apply to a specified property value for findings.</p>
   */
  neq?: string[];
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
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action: FindingsFilterAction | string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria: FindingCriteria | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name: string | undefined;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFindingsFilterRequest {
  export const filterSensitiveLog = (obj: CreateFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was created.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was created.</p>
   */
  id?: string;
}

export namespace CreateFindingsFilterResponse {
  export const filterSensitiveLog = (obj: CreateFindingsFilterResponse): any => ({
    ...obj,
  });
}

export interface CreateInvitationsRequest {
  /**
   * <p>An array that lists AWS account IDs, one for each account to send the invitation to.</p>
   */
  accountIds: string[] | undefined;

  /**
   * <p>Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true.</p>
   */
  disableEmailNotification?: boolean;

  /**
   * <p>A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.</p>
   */
  message?: string;
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
   * <p>The details for the account to associate with the master account.</p>
   */
  account: AccountDetail | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags?: { [key: string]: string };
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
   * <p>The criteria to use to filter the query results.</p>
   */
  criteria?: { [key: string]: BucketCriteriaAdditionalProperties };

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: BucketSortCriteria;
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
   * <p>The token that was provided to ensure the idempotency of the request to create the job.</p>
   */
  clientToken?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The custom data identifiers that the job uses to analyze data.</p>
   */
  customDataIdentifierIds?: string[];

  /**
   * <p>The custom description of the job.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the job is configured to analyze all existing, eligible objects immediately after it's created.</p>
   */
  initialRun?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier for the job.</p>
   */
  jobId?: string;

  /**
   * <p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job, or you paused the job while it had a status of RUNNING and you didn't resume it within 30 days of pausing it.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Amazon Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume the job within 30 days of pausing it, the job expires and is cancelled. To check the job's expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus?: JobStatus | string;

  /**
   * <p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.</p></li></ul>
   */
  jobType?: JobType | string;

  /**
   * <p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</p>
   */
  lastRunErrorStatus?: LastRunErrorStatus;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started.</p>
   */
  lastRunTime?: Date;

  /**
   * <p>The custom name of the job.</p>
   */
  name?: string;

  /**
   * <p>The S3 buckets that the job is configured to analyze, and the scope of that analysis.</p>
   */
  s3JobDefinition?: S3JobDefinition;

  /**
   * <p>The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.</p>
   */
  samplingPercentage?: number;

  /**
   * <p>The recurrence pattern for running the job. If the job is configured to run only once, this value is null.</p>
   */
  scheduleFrequency?: JobScheduleFrequency;

  /**
   * <p>The number of times that the job has run and processing statistics for the job's current run.</p>
   */
  statistics?: Statistics;

  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the classification job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</p>
   */
  userPausedDetails?: UserPausedDetails;
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
   * <p>Specifies whether the maximum number of Amazon Macie member accounts are part of the AWS organization.</p>
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
   * <p>The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.</p>
   */
  adminAccountId: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
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
   * <p>The total number of buckets.</p>
   */
  bucketCount?: number;

  /**
   * <p>The total number of buckets that are publicly accessible based on a combination of permissions settings for each bucket.</p>
   */
  bucketCountByEffectivePermission?: BucketCountByEffectivePermission;

  /**
   * <p>The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that don't encrypt objects by default.</p>
   */
  bucketCountByEncryptionType?: BucketCountByEncryptionType;

  /**
   * <p>The total number of buckets that are shared with another AWS account.</p>
   */
  bucketCountBySharedAccessType?: BucketCountBySharedAccessType;

  /**
   * <p>The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableObjectCount?: number;

  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p>
   */
  classifiableSizeInBytes?: number;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved data about the buckets from Amazon S3.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>The total number of objects in the buckets.</p>
   */
  objectCount?: number;

  /**
   * <p>The total storage size, in bytes, of the buckets.</p>
   */
  sizeInBytes?: number;

  /**
   * <p>The total compressed storage size, in bytes, of the buckets.</p>
   */
  sizeInBytesCompressed?: number;

  /**
   * <p>The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectCount?: ObjectLevelStatistics;

  /**
   * <p>The total storage size, in bytes, of all the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.</p>
   */
  unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
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
   * <p>The Amazon Resource Name (ARN) of the custom data identifier.</p>
   */
  arn?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</p>
   */
  deleted?: boolean;

  /**
   * <p>The custom description of the custom data identifier.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the custom data identifier.</p>
   */
  id?: string;

  /**
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The custom name of the custom data identifier.</p>
   */
  name?: string;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match.</p>
   */
  regex?: string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetCustomDataIdentifierResponse {
  export const filterSensitiveLog = (obj: GetCustomDataIdentifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies criteria for sorting the results of a request for findings.</p>
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
   * <p>An array of strings that lists the unique identifiers for the findings to retrieve.</p>
   */
  findingIds: string[] | undefined;

  /**
   * <p>The criteria for sorting the results of the request.</p>
   */
  sortCriteria?: SortCriteria;
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
   * <p>The action that's performed on findings that meet the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the filter.</p>
   */
  arn?: string;

  /**
   * <p>The custom description of the filter.</p>
   */
  description?: string;

  /**
   * <p>The criteria that's used to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the filter.</p>
   */
  id?: string;

  /**
   * <p>The custom name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;

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
   * <p>The criteria to use to filter the query results.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
   */
  groupBy: GroupBy | string | undefined;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  size?: number;

  /**
   * <p>The criteria to use to sort the query results.</p>
   */
  sortCriteria?: FindingStatisticsSortCriteria;
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
   * <p>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in AWS resources for the account.</p>
   */
  serviceRole?: string;

  /**
   * <p>The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Amazon Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Amazon Macie activities are enabled for the account.</p>
   */
  status?: MacieStatus | string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Amazon Macie account.</p>
   */
  updatedAt?: Date;
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
   * <p>The email address for the account.</p>
   */
  email?: string;

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.</p>
   */
  invitedAt?: Date;

  /**
   * <p>The AWS account ID for the master account.</p>
   */
  masterAccountId?: string;

  /**
   * <p>The current status of the relationship between the account and the master account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>A map of key-value pairs that identifies the tags (keys and values) that are associated with the member account in Amazon Macie.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.</p>
   */
  updatedAt?: Date;
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
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

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
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the data for an account that meets the filter criteria specified in the request.</p>
   */
  records?: UsageRecord[];
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
   * <p>The property to sort the results by.</p>
   */
  attributeName?: ListJobsSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
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
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: ListJobsSortCriteria;
}

export namespace ListClassificationJobsRequest {
  export const filterSensitiveLog = (obj: ListClassificationJobsRequest): any => ({
    ...obj,
  });
}

export interface ListClassificationJobsResponse {
  /**
   * <p>An array of objects, one for each job that meets the filter criteria specified in the request.</p>
   */
  items?: JobSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
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
   * <p>The criteria to use to filter the results.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: SortCriteria;
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
   * <p>An array of objects, one for each filter that's associated with the account.</p>
   */
  findingsFilterListItems?: FindingsFilterListItem[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export namespace ListFindingsFiltersResponse {
  export const filterSensitiveLog = (obj: ListFindingsFiltersResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
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
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies which accounts to include in the response, based on the status of an account's relationship with the master account. By default, the response includes only current member accounts. To include all accounts, set the value for this parameter to false.</p>
   */
  onlyAssociated?: string;
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
   * <p>An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.</p>
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
   * <p>The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string } | undefined;
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
   * <p>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex: string | undefined;

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
   * <p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. You can't resume a job after you cancel it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED. If you specify this value, Amazon Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other configuration settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job. This value is valid only if the job's current status is IDLE or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a job when its status is RUNNING and you don't resume the job within 30 days, the job expires and Macie cancels it. You can't resume a job after it's cancelled.</p></li></ul>
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
   * <p>The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;
}

export namespace UpdateFindingsFilterRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsFilterRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was updated.</p>
   */
  id?: string;
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
   * <p>The unique identifier for the Amazon Macie resource or account that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status: MacieStatus | string | undefined;
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
