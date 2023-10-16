// smithy-typescript generated code
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  collectBody,
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "../commands/AbortMultipartUploadCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "../commands/CompleteMultipartUploadCommand";
import { CopyObjectCommandInput, CopyObjectCommandOutput } from "../commands/CopyObjectCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "../commands/CreateMultipartUploadCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "../commands/DeleteBucketAnalyticsConfigurationCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "../commands/DeleteBucketCommand";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "../commands/DeleteBucketCorsCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "../commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "../commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "../commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "../commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "../commands/DeleteBucketOwnershipControlsCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "../commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "../commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "../commands/DeleteBucketTaggingCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "../commands/DeleteBucketWebsiteCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "../commands/DeleteObjectsCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "../commands/DeletePublicAccessBlockCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "../commands/GetBucketAccelerateConfigurationCommand";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "../commands/GetBucketAclCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "../commands/GetBucketAnalyticsConfigurationCommand";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "../commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "../commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "../commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "../commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "../commands/GetBucketLocationCommand";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "../commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "../commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "../commands/GetBucketNotificationConfigurationCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "../commands/GetBucketOwnershipControlsCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "../commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "../commands/GetBucketPolicyStatusCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "../commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "../commands/GetBucketRequestPaymentCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "../commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "../commands/GetBucketVersioningCommand";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "../commands/GetBucketWebsiteCommand";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "../commands/GetObjectAclCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "../commands/GetObjectAttributesCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput } from "../commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "../commands/GetObjectLockConfigurationCommand";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput } from "../commands/GetObjectRetentionCommand";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "../commands/GetObjectTaggingCommand";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "../commands/GetObjectTorrentCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "../commands/GetPublicAccessBlockCommand";
import { HeadBucketCommandInput, HeadBucketCommandOutput } from "../commands/HeadBucketCommand";
import { HeadObjectCommandInput, HeadObjectCommandOutput } from "../commands/HeadObjectCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "../commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "../commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "../commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "../commands/ListBucketMetricsConfigurationsCommand";
import { ListBucketsCommandInput, ListBucketsCommandOutput } from "../commands/ListBucketsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "../commands/ListObjectsV2Command";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "../commands/ListObjectVersionsCommand";
import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "../commands/PutBucketAccelerateConfigurationCommand";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "../commands/PutBucketAclCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "../commands/PutBucketAnalyticsConfigurationCommand";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "../commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "../commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "../commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "../commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "../commands/PutBucketLoggingCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "../commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "../commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "../commands/PutBucketOwnershipControlsCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "../commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "../commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "../commands/PutBucketRequestPaymentCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "../commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "../commands/PutBucketVersioningCommand";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "../commands/PutBucketWebsiteCommand";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "../commands/PutObjectAclCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "../commands/PutObjectCommand";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput } from "../commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "../commands/PutObjectLockConfigurationCommand";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput } from "../commands/PutObjectRetentionCommand";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "../commands/PutObjectTaggingCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "../commands/PutPublicAccessBlockCommand";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "../commands/RestoreObjectCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "../commands/SelectObjectContentCommand";
import { UploadPartCommandInput, UploadPartCommandOutput } from "../commands/UploadPartCommand";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "../commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "../commands/WriteGetObjectResponseCommand";
import {
  _Error,
  _Object,
  AbortIncompleteMultipartUpload,
  AccelerateConfiguration,
  AccessControlPolicy,
  AccessControlTranslation,
  AnalyticsAndOperator,
  AnalyticsConfiguration,
  AnalyticsExportDestination,
  AnalyticsFilter,
  AnalyticsS3BucketDestination,
  Bucket,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketLifecycleConfiguration,
  BucketLoggingStatus,
  Checksum,
  ChecksumAlgorithm,
  CommonPrefix,
  CompletedMultipartUpload,
  CompletedPart,
  Condition,
  CopyObjectResult,
  CORSConfiguration,
  CORSRule,
  CreateBucketConfiguration,
  DefaultRetention,
  Delete,
  DeletedObject,
  DeleteMarkerEntry,
  DeleteMarkerReplication,
  Destination,
  EncryptionConfiguration,
  ErrorDocument,
  Event,
  EventBridgeConfiguration,
  ExistingObjectReplication,
  FilterRule,
  GetObjectAttributesParts,
  Grant,
  Grantee,
  IndexDocument,
  Initiator,
  IntelligentTieringAndOperator,
  IntelligentTieringConfiguration,
  IntelligentTieringFilter,
  InvalidObjectState,
  InventoryConfiguration,
  InventoryDestination,
  InventoryEncryption,
  InventoryFilter,
  InventoryOptionalField,
  InventoryS3BucketDestination,
  InventorySchedule,
  LambdaFunctionConfiguration,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  LoggingEnabled,
  Metrics,
  MetricsAndOperator,
  MetricsConfiguration,
  MetricsFilter,
  MultipartUpload,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NotFound,
  NotificationConfiguration,
  NotificationConfigurationFilter,
  ObjectIdentifier,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockRetention,
  ObjectLockRule,
  ObjectNotInActiveTierError,
  ObjectPart,
  ObjectVersion,
  Owner,
  OwnershipControls,
  OwnershipControlsRule,
  Part,
  PolicyStatus,
  PublicAccessBlockConfiguration,
  QueueConfiguration,
  Redirect,
  RedirectAllRequestsTo,
  ReplicaModifications,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationTime,
  ReplicationTimeValue,
  RequestPaymentConfiguration,
  RestoreStatus,
  RoutingRule,
  S3KeyFilter,
  ServerSideEncryptionByDefault,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionRule,
  SourceSelectionCriteria,
  SSEKMS,
  SseKmsEncryptedObjects,
  SSES3,
  StorageClassAnalysis,
  StorageClassAnalysisDataExport,
  Tag,
  Tagging,
  TargetGrant,
  Tiering,
  TopicConfiguration,
  Transition,
  VersioningConfiguration,
  WebsiteConfiguration,
} from "../models/models_0";
import {
  ContinuationEvent,
  CopyPartResult,
  CSVInput,
  CSVOutput,
  Encryption,
  EndEvent,
  GlacierJobParameters,
  InputSerialization,
  JSONInput,
  JSONOutput,
  MetadataEntry,
  ObjectAlreadyInActiveTierError,
  OutputLocation,
  OutputSerialization,
  ParquetInput,
  Progress,
  ProgressEvent,
  RecordsEvent,
  RequestProgress,
  RestoreRequest,
  S3Location,
  ScanRange,
  SelectObjectContentEventStream,
  SelectParameters,
  Stats,
  StatsEvent,
} from "../models/models_1";
import { S3ServiceException as __BaseException } from "../models/S3ServiceException";

/**
 * serializeAws_restXmlAbortMultipartUploadCommand
 */
export const se_AbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "AbortMultipartUpload"],
    uploadId: [, __expectNonNull(input.UploadId!, `UploadId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlCompleteMultipartUploadCommand
 */
export const se_CompleteMultipartUploadCommand = async (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-checksum-crc32": input.ChecksumCRC32!,
    "x-amz-checksum-crc32c": input.ChecksumCRC32C!,
    "x-amz-checksum-sha1": input.ChecksumSHA1!,
    "x-amz-checksum-sha256": input.ChecksumSHA256!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "CompleteMultipartUpload"],
    uploadId: [, __expectNonNull(input.UploadId!, `UploadId`)],
  });
  let body: any;
  if (input.MultipartUpload !== undefined) {
    body = se_CompletedMultipartUpload(input.MultipartUpload, context);
  }
  let contents: any;
  if (input.MultipartUpload !== undefined) {
    contents = se_CompletedMultipartUpload(input.MultipartUpload, context);
    contents = contents.withName("CompleteMultipartUpload");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlCopyObjectCommand
 */
export const se_CopyObjectCommand = async (
  input: CopyObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-acl": input.ACL!,
    "cache-control": input.CacheControl!,
    "x-amz-checksum-algorithm": input.ChecksumAlgorithm!,
    "content-disposition": input.ContentDisposition!,
    "content-encoding": input.ContentEncoding!,
    "content-language": input.ContentLanguage!,
    "content-type": input.ContentType!,
    "x-amz-copy-source": input.CopySource!,
    "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    "x-amz-copy-source-if-modified-since": [
      () => isSerializableHeaderValue(input.CopySourceIfModifiedSince),
      () => __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    ],
    "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    "x-amz-copy-source-if-unmodified-since": [
      () => isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince),
      () => __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    ],
    expires: [() => isSerializableHeaderValue(input.Expires), () => __dateToUtcString(input.Expires!).toString()],
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-metadata-directive": input.MetadataDirective!,
    "x-amz-tagging-directive": input.TaggingDirective!,
    "x-amz-server-side-encryption": input.ServerSideEncryption!,
    "x-amz-storage-class": input.StorageClass!,
    "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    "x-amz-server-side-encryption-bucket-key-enabled": [
      () => isSerializableHeaderValue(input.BucketKeyEnabled),
      () => input.BucketKeyEnabled!.toString(),
    ],
    "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-tagging": input.Tagging!,
    "x-amz-object-lock-mode": input.ObjectLockMode!,
    "x-amz-object-lock-retain-until-date": [
      () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
      () => (input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "CopyObject"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlCreateBucketCommand
 */
export const se_CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-acl": input.ACL!,
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write": input.GrantWrite!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-bucket-object-lock-enabled": [
      () => isSerializableHeaderValue(input.ObjectLockEnabledForBucket),
      () => input.ObjectLockEnabledForBucket!.toString(),
    ],
    "x-amz-object-ownership": input.ObjectOwnership!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.CreateBucketConfiguration !== undefined) {
    body = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
  }
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateMultipartUploadCommand
 */
export const se_CreateMultipartUploadCommand = async (
  input: CreateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-acl": input.ACL!,
    "cache-control": input.CacheControl!,
    "content-disposition": input.ContentDisposition!,
    "content-encoding": input.ContentEncoding!,
    "content-language": input.ContentLanguage!,
    "content-type": input.ContentType!,
    expires: [() => isSerializableHeaderValue(input.Expires), () => __dateToUtcString(input.Expires!).toString()],
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-server-side-encryption": input.ServerSideEncryption!,
    "x-amz-storage-class": input.StorageClass!,
    "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    "x-amz-server-side-encryption-bucket-key-enabled": [
      () => isSerializableHeaderValue(input.BucketKeyEnabled),
      () => input.BucketKeyEnabled!.toString(),
    ],
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-tagging": input.Tagging!,
    "x-amz-object-lock-mode": input.ObjectLockMode!,
    "x-amz-object-lock-retain-until-date": [
      () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
      () => (input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-checksum-algorithm": input.ChecksumAlgorithm!,
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    uploads: [, ""],
    "x-id": [, "CreateMultipartUpload"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketCommand
 */
export const se_DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand
 */
export const se_DeleteBucketAnalyticsConfigurationCommand = async (
  input: DeleteBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    analytics: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketCorsCommand
 */
export const se_DeleteBucketCorsCommand = async (
  input: DeleteBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    cors: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketEncryptionCommand
 */
export const se_DeleteBucketEncryptionCommand = async (
  input: DeleteBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    encryption: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand
 */
export const se_DeleteBucketIntelligentTieringConfigurationCommand = async (
  input: DeleteBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "intelligent-tiering": [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketInventoryConfigurationCommand
 */
export const se_DeleteBucketInventoryConfigurationCommand = async (
  input: DeleteBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    inventory: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketLifecycleCommand
 */
export const se_DeleteBucketLifecycleCommand = async (
  input: DeleteBucketLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    lifecycle: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketMetricsConfigurationCommand
 */
export const se_DeleteBucketMetricsConfigurationCommand = async (
  input: DeleteBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    metrics: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketOwnershipControlsCommand
 */
export const se_DeleteBucketOwnershipControlsCommand = async (
  input: DeleteBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    ownershipControls: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketPolicyCommand
 */
export const se_DeleteBucketPolicyCommand = async (
  input: DeleteBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    policy: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketReplicationCommand
 */
export const se_DeleteBucketReplicationCommand = async (
  input: DeleteBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    replication: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketTaggingCommand
 */
export const se_DeleteBucketTaggingCommand = async (
  input: DeleteBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    tagging: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketWebsiteCommand
 */
export const se_DeleteBucketWebsiteCommand = async (
  input: DeleteBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    website: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteObjectCommand
 */
export const se_DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-mfa": input.MFA!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-bypass-governance-retention": [
      () => isSerializableHeaderValue(input.BypassGovernanceRetention),
      () => input.BypassGovernanceRetention!.toString(),
    ],
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "DeleteObject"],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteObjectsCommand
 */
export const se_DeleteObjectsCommand = async (
  input: DeleteObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-mfa": input.MFA!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-bypass-governance-retention": [
      () => isSerializableHeaderValue(input.BypassGovernanceRetention),
      () => input.BypassGovernanceRetention!.toString(),
    ],
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    delete: [, ""],
    "x-id": [, "DeleteObjects"],
  });
  let body: any;
  if (input.Delete !== undefined) {
    body = se_Delete(input.Delete, context);
  }
  let contents: any;
  if (input.Delete !== undefined) {
    contents = se_Delete(input.Delete, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteObjectTaggingCommand
 */
export const se_DeleteObjectTaggingCommand = async (
  input: DeleteObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    tagging: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const se_DeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    publicAccessBlock: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketAccelerateConfigurationCommand
 */
export const se_GetBucketAccelerateConfigurationCommand = async (
  input: GetBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-request-payer": input.RequestPayer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    accelerate: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketAclCommand
 */
export const se_GetBucketAclCommand = async (
  input: GetBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    acl: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketAnalyticsConfigurationCommand
 */
export const se_GetBucketAnalyticsConfigurationCommand = async (
  input: GetBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    analytics: [, ""],
    "x-id": [, "GetBucketAnalyticsConfiguration"],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketCorsCommand
 */
export const se_GetBucketCorsCommand = async (
  input: GetBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    cors: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketEncryptionCommand
 */
export const se_GetBucketEncryptionCommand = async (
  input: GetBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    encryption: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand
 */
export const se_GetBucketIntelligentTieringConfigurationCommand = async (
  input: GetBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "intelligent-tiering": [, ""],
    "x-id": [, "GetBucketIntelligentTieringConfiguration"],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketInventoryConfigurationCommand
 */
export const se_GetBucketInventoryConfigurationCommand = async (
  input: GetBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    inventory: [, ""],
    "x-id": [, "GetBucketInventoryConfiguration"],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const se_GetBucketLifecycleConfigurationCommand = async (
  input: GetBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    lifecycle: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketLocationCommand
 */
export const se_GetBucketLocationCommand = async (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    location: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketLoggingCommand
 */
export const se_GetBucketLoggingCommand = async (
  input: GetBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    logging: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketMetricsConfigurationCommand
 */
export const se_GetBucketMetricsConfigurationCommand = async (
  input: GetBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    metrics: [, ""],
    "x-id": [, "GetBucketMetricsConfiguration"],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketNotificationConfigurationCommand
 */
export const se_GetBucketNotificationConfigurationCommand = async (
  input: GetBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    notification: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketOwnershipControlsCommand
 */
export const se_GetBucketOwnershipControlsCommand = async (
  input: GetBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    ownershipControls: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketPolicyCommand
 */
export const se_GetBucketPolicyCommand = async (
  input: GetBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    policy: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketPolicyStatusCommand
 */
export const se_GetBucketPolicyStatusCommand = async (
  input: GetBucketPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    policyStatus: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketReplicationCommand
 */
export const se_GetBucketReplicationCommand = async (
  input: GetBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    replication: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketRequestPaymentCommand
 */
export const se_GetBucketRequestPaymentCommand = async (
  input: GetBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    requestPayment: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketTaggingCommand
 */
export const se_GetBucketTaggingCommand = async (
  input: GetBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    tagging: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketVersioningCommand
 */
export const se_GetBucketVersioningCommand = async (
  input: GetBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    versioning: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketWebsiteCommand
 */
export const se_GetBucketWebsiteCommand = async (
  input: GetBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    website: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectCommand
 */
export const se_GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
    "if-modified-since": [
      () => isSerializableHeaderValue(input.IfModifiedSince),
      () => __dateToUtcString(input.IfModifiedSince!).toString(),
    ],
    "if-none-match": input.IfNoneMatch!,
    "if-unmodified-since": [
      () => isSerializableHeaderValue(input.IfUnmodifiedSince),
      () => __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    ],
    range: input.Range!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-checksum-mode": input.ChecksumMode!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "GetObject"],
    "response-cache-control": [, input.ResponseCacheControl!],
    "response-content-disposition": [, input.ResponseContentDisposition!],
    "response-content-encoding": [, input.ResponseContentEncoding!],
    "response-content-language": [, input.ResponseContentLanguage!],
    "response-content-type": [, input.ResponseContentType!],
    "response-expires": [
      () => input.ResponseExpires !== void 0,
      () => __dateToUtcString(input.ResponseExpires!).toString(),
    ],
    versionId: [, input.VersionId!],
    partNumber: [() => input.PartNumber !== void 0, () => input.PartNumber!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectAclCommand
 */
export const se_GetObjectAclCommand = async (
  input: GetObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    acl: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectAttributesCommand
 */
export const se_GetObjectAttributesCommand = async (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-max-parts": [() => isSerializableHeaderValue(input.MaxParts), () => input.MaxParts!.toString()],
    "x-amz-part-number-marker": input.PartNumberMarker!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-object-attributes": [
      () => isSerializableHeaderValue(input.ObjectAttributes),
      () => (input.ObjectAttributes! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    attributes: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectLegalHoldCommand
 */
export const se_GetObjectLegalHoldCommand = async (
  input: GetObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "legal-hold": [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectLockConfigurationCommand
 */
export const se_GetObjectLockConfigurationCommand = async (
  input: GetObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "object-lock": [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectRetentionCommand
 */
export const se_GetObjectRetentionCommand = async (
  input: GetObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    retention: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectTaggingCommand
 */
export const se_GetObjectTaggingCommand = async (
  input: GetObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-request-payer": input.RequestPayer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    tagging: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetObjectTorrentCommand
 */
export const se_GetObjectTorrentCommand = async (
  input: GetObjectTorrentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    torrent: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlGetPublicAccessBlockCommand
 */
export const se_GetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    publicAccessBlock: [, ""],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlHeadBucketCommand
 */
export const se_HeadBucketCommand = async (
  input: HeadBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlHeadObjectCommand
 */
export const se_HeadObjectCommand = async (
  input: HeadObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "if-match": input.IfMatch!,
    "if-modified-since": [
      () => isSerializableHeaderValue(input.IfModifiedSince),
      () => __dateToUtcString(input.IfModifiedSince!).toString(),
    ],
    "if-none-match": input.IfNoneMatch!,
    "if-unmodified-since": [
      () => isSerializableHeaderValue(input.IfUnmodifiedSince),
      () => __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    ],
    range: input.Range!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-checksum-mode": input.ChecksumMode!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    versionId: [, input.VersionId!],
    partNumber: [() => input.PartNumber !== void 0, () => input.PartNumber!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListBucketAnalyticsConfigurationsCommand
 */
export const se_ListBucketAnalyticsConfigurationsCommand = async (
  input: ListBucketAnalyticsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    analytics: [, ""],
    "x-id": [, "ListBucketAnalyticsConfigurations"],
    "continuation-token": [, input.ContinuationToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand
 */
export const se_ListBucketIntelligentTieringConfigurationsCommand = async (
  input: ListBucketIntelligentTieringConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "intelligent-tiering": [, ""],
    "x-id": [, "ListBucketIntelligentTieringConfigurations"],
    "continuation-token": [, input.ContinuationToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListBucketInventoryConfigurationsCommand
 */
export const se_ListBucketInventoryConfigurationsCommand = async (
  input: ListBucketInventoryConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    inventory: [, ""],
    "x-id": [, "ListBucketInventoryConfigurations"],
    "continuation-token": [, input.ContinuationToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListBucketMetricsConfigurationsCommand
 */
export const se_ListBucketMetricsConfigurationsCommand = async (
  input: ListBucketMetricsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    metrics: [, ""],
    "x-id": [, "ListBucketMetricsConfigurations"],
    "continuation-token": [, input.ContinuationToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListBucketsCommand
 */
export const se_ListBucketsCommand = async (
  input: ListBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlListMultipartUploadsCommand
 */
export const se_ListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-request-payer": input.RequestPayer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    uploads: [, ""],
    delimiter: [, input.Delimiter!],
    "encoding-type": [, input.EncodingType!],
    "key-marker": [, input.KeyMarker!],
    "max-uploads": [() => input.MaxUploads !== void 0, () => input.MaxUploads!.toString()],
    prefix: [, input.Prefix!],
    "upload-id-marker": [, input.UploadIdMarker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListObjectsCommand
 */
export const se_ListObjectsCommand = async (
  input: ListObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-optional-object-attributes": [
      () => isSerializableHeaderValue(input.OptionalObjectAttributes),
      () => (input.OptionalObjectAttributes! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    delimiter: [, input.Delimiter!],
    "encoding-type": [, input.EncodingType!],
    marker: [, input.Marker!],
    "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys!.toString()],
    prefix: [, input.Prefix!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListObjectsV2Command
 */
export const se_ListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-optional-object-attributes": [
      () => isSerializableHeaderValue(input.OptionalObjectAttributes),
      () => (input.OptionalObjectAttributes! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "list-type": [, "2"],
    delimiter: [, input.Delimiter!],
    "encoding-type": [, input.EncodingType!],
    "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys!.toString()],
    prefix: [, input.Prefix!],
    "continuation-token": [, input.ContinuationToken!],
    "fetch-owner": [() => input.FetchOwner !== void 0, () => input.FetchOwner!.toString()],
    "start-after": [, input.StartAfter!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListObjectVersionsCommand
 */
export const se_ListObjectVersionsCommand = async (
  input: ListObjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-optional-object-attributes": [
      () => isSerializableHeaderValue(input.OptionalObjectAttributes),
      () => (input.OptionalObjectAttributes! || []).map((_entry) => _entry as any).join(", "),
    ],
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    versions: [, ""],
    delimiter: [, input.Delimiter!],
    "encoding-type": [, input.EncodingType!],
    "key-marker": [, input.KeyMarker!],
    "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys!.toString()],
    prefix: [, input.Prefix!],
    "version-id-marker": [, input.VersionIdMarker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListPartsCommand
 */
export const se_ListPartsCommand = async (
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "ListParts"],
    "max-parts": [() => input.MaxParts !== void 0, () => input.MaxParts!.toString()],
    "part-number-marker": [, input.PartNumberMarker!],
    uploadId: [, __expectNonNull(input.UploadId!, `UploadId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketAccelerateConfigurationCommand
 */
export const se_PutBucketAccelerateConfigurationCommand = async (
  input: PutBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    accelerate: [, ""],
  });
  let body: any;
  if (input.AccelerateConfiguration !== undefined) {
    body = se_AccelerateConfiguration(input.AccelerateConfiguration, context);
  }
  let contents: any;
  if (input.AccelerateConfiguration !== undefined) {
    contents = se_AccelerateConfiguration(input.AccelerateConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketAclCommand
 */
export const se_PutBucketAclCommand = async (
  input: PutBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-acl": input.ACL!,
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write": input.GrantWrite!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    acl: [, ""],
  });
  let body: any;
  if (input.AccessControlPolicy !== undefined) {
    body = se_AccessControlPolicy(input.AccessControlPolicy, context);
  }
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = se_AccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketAnalyticsConfigurationCommand
 */
export const se_PutBucketAnalyticsConfigurationCommand = async (
  input: PutBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    analytics: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  if (input.AnalyticsConfiguration !== undefined) {
    body = se_AnalyticsConfiguration(input.AnalyticsConfiguration, context);
  }
  let contents: any;
  if (input.AnalyticsConfiguration !== undefined) {
    contents = se_AnalyticsConfiguration(input.AnalyticsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketCorsCommand
 */
export const se_PutBucketCorsCommand = async (
  input: PutBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    cors: [, ""],
  });
  let body: any;
  if (input.CORSConfiguration !== undefined) {
    body = se_CORSConfiguration(input.CORSConfiguration, context);
  }
  let contents: any;
  if (input.CORSConfiguration !== undefined) {
    contents = se_CORSConfiguration(input.CORSConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketEncryptionCommand
 */
export const se_PutBucketEncryptionCommand = async (
  input: PutBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    encryption: [, ""],
  });
  let body: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    body = se_ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
  }
  let contents: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    contents = se_ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand
 */
export const se_PutBucketIntelligentTieringConfigurationCommand = async (
  input: PutBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "intelligent-tiering": [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  if (input.IntelligentTieringConfiguration !== undefined) {
    body = se_IntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
  }
  let contents: any;
  if (input.IntelligentTieringConfiguration !== undefined) {
    contents = se_IntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketInventoryConfigurationCommand
 */
export const se_PutBucketInventoryConfigurationCommand = async (
  input: PutBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    inventory: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  if (input.InventoryConfiguration !== undefined) {
    body = se_InventoryConfiguration(input.InventoryConfiguration, context);
  }
  let contents: any;
  if (input.InventoryConfiguration !== undefined) {
    contents = se_InventoryConfiguration(input.InventoryConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const se_PutBucketLifecycleConfigurationCommand = async (
  input: PutBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    lifecycle: [, ""],
  });
  let body: any;
  if (input.LifecycleConfiguration !== undefined) {
    body = se_BucketLifecycleConfiguration(input.LifecycleConfiguration, context);
  }
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = se_BucketLifecycleConfiguration(input.LifecycleConfiguration, context);
    contents = contents.withName("LifecycleConfiguration");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketLoggingCommand
 */
export const se_PutBucketLoggingCommand = async (
  input: PutBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    logging: [, ""],
  });
  let body: any;
  if (input.BucketLoggingStatus !== undefined) {
    body = se_BucketLoggingStatus(input.BucketLoggingStatus, context);
  }
  let contents: any;
  if (input.BucketLoggingStatus !== undefined) {
    contents = se_BucketLoggingStatus(input.BucketLoggingStatus, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketMetricsConfigurationCommand
 */
export const se_PutBucketMetricsConfigurationCommand = async (
  input: PutBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    metrics: [, ""],
    id: [, __expectNonNull(input.Id!, `Id`)],
  });
  let body: any;
  if (input.MetricsConfiguration !== undefined) {
    body = se_MetricsConfiguration(input.MetricsConfiguration, context);
  }
  let contents: any;
  if (input.MetricsConfiguration !== undefined) {
    contents = se_MetricsConfiguration(input.MetricsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketNotificationConfigurationCommand
 */
export const se_PutBucketNotificationConfigurationCommand = async (
  input: PutBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-skip-destination-validation": [
      () => isSerializableHeaderValue(input.SkipDestinationValidation),
      () => input.SkipDestinationValidation!.toString(),
    ],
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    notification: [, ""],
  });
  let body: any;
  if (input.NotificationConfiguration !== undefined) {
    body = se_NotificationConfiguration(input.NotificationConfiguration, context);
  }
  let contents: any;
  if (input.NotificationConfiguration !== undefined) {
    contents = se_NotificationConfiguration(input.NotificationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketOwnershipControlsCommand
 */
export const se_PutBucketOwnershipControlsCommand = async (
  input: PutBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    ownershipControls: [, ""],
  });
  let body: any;
  if (input.OwnershipControls !== undefined) {
    body = se_OwnershipControls(input.OwnershipControls, context);
  }
  let contents: any;
  if (input.OwnershipControls !== undefined) {
    contents = se_OwnershipControls(input.OwnershipControls, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketPolicyCommand
 */
export const se_PutBucketPolicyCommand = async (
  input: PutBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-confirm-remove-self-bucket-access": [
      () => isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess),
      () => input.ConfirmRemoveSelfBucketAccess!.toString(),
    ],
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    policy: [, ""],
  });
  let body: any;
  if (input.Policy !== undefined) {
    body = input.Policy;
  }
  let contents: any;
  if (input.Policy !== undefined) {
    contents = input.Policy;
    body = contents;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketReplicationCommand
 */
export const se_PutBucketReplicationCommand = async (
  input: PutBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-bucket-object-lock-token": input.Token!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    replication: [, ""],
  });
  let body: any;
  if (input.ReplicationConfiguration !== undefined) {
    body = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
  }
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketRequestPaymentCommand
 */
export const se_PutBucketRequestPaymentCommand = async (
  input: PutBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    requestPayment: [, ""],
  });
  let body: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    body = se_RequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
  }
  let contents: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    contents = se_RequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketTaggingCommand
 */
export const se_PutBucketTaggingCommand = async (
  input: PutBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    tagging: [, ""],
  });
  let body: any;
  if (input.Tagging !== undefined) {
    body = se_Tagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketVersioningCommand
 */
export const se_PutBucketVersioningCommand = async (
  input: PutBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-mfa": input.MFA!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    versioning: [, ""],
  });
  let body: any;
  if (input.VersioningConfiguration !== undefined) {
    body = se_VersioningConfiguration(input.VersioningConfiguration, context);
  }
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = se_VersioningConfiguration(input.VersioningConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutBucketWebsiteCommand
 */
export const se_PutBucketWebsiteCommand = async (
  input: PutBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    website: [, ""],
  });
  let body: any;
  if (input.WebsiteConfiguration !== undefined) {
    body = se_WebsiteConfiguration(input.WebsiteConfiguration, context);
  }
  let contents: any;
  if (input.WebsiteConfiguration !== undefined) {
    contents = se_WebsiteConfiguration(input.WebsiteConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectCommand
 */
export const se_PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.ContentType! || "application/octet-stream",
    "x-amz-acl": input.ACL!,
    "cache-control": input.CacheControl!,
    "content-disposition": input.ContentDisposition!,
    "content-encoding": input.ContentEncoding!,
    "content-language": input.ContentLanguage!,
    "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength!.toString()],
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-checksum-crc32": input.ChecksumCRC32!,
    "x-amz-checksum-crc32c": input.ChecksumCRC32C!,
    "x-amz-checksum-sha1": input.ChecksumSHA1!,
    "x-amz-checksum-sha256": input.ChecksumSHA256!,
    expires: [() => isSerializableHeaderValue(input.Expires), () => __dateToUtcString(input.Expires!).toString()],
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-server-side-encryption": input.ServerSideEncryption!,
    "x-amz-storage-class": input.StorageClass!,
    "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    "x-amz-server-side-encryption-bucket-key-enabled": [
      () => isSerializableHeaderValue(input.BucketKeyEnabled),
      () => input.BucketKeyEnabled!.toString(),
    ],
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-tagging": input.Tagging!,
    "x-amz-object-lock-mode": input.ObjectLockMode!,
    "x-amz-object-lock-retain-until-date": [
      () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
      () => (input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "PutObject"],
  });
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectAclCommand
 */
export const se_PutObjectAclCommand = async (
  input: PutObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-acl": input.ACL!,
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-grant-full-control": input.GrantFullControl!,
    "x-amz-grant-read": input.GrantRead!,
    "x-amz-grant-read-acp": input.GrantReadACP!,
    "x-amz-grant-write": input.GrantWrite!,
    "x-amz-grant-write-acp": input.GrantWriteACP!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    acl: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  if (input.AccessControlPolicy !== undefined) {
    body = se_AccessControlPolicy(input.AccessControlPolicy, context);
  }
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = se_AccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectLegalHoldCommand
 */
export const se_PutObjectLegalHoldCommand = async (
  input: PutObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-request-payer": input.RequestPayer!,
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "legal-hold": [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  if (input.LegalHold !== undefined) {
    body = se_ObjectLockLegalHold(input.LegalHold, context);
  }
  let contents: any;
  if (input.LegalHold !== undefined) {
    contents = se_ObjectLockLegalHold(input.LegalHold, context);
    contents = contents.withName("LegalHold");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectLockConfigurationCommand
 */
export const se_PutObjectLockConfigurationCommand = async (
  input: PutObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-bucket-object-lock-token": input.Token!,
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    "object-lock": [, ""],
  });
  let body: any;
  if (input.ObjectLockConfiguration !== undefined) {
    body = se_ObjectLockConfiguration(input.ObjectLockConfiguration, context);
  }
  let contents: any;
  if (input.ObjectLockConfiguration !== undefined) {
    contents = se_ObjectLockConfiguration(input.ObjectLockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectRetentionCommand
 */
export const se_PutObjectRetentionCommand = async (
  input: PutObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-bypass-governance-retention": [
      () => isSerializableHeaderValue(input.BypassGovernanceRetention),
      () => input.BypassGovernanceRetention!.toString(),
    ],
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    retention: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  if (input.Retention !== undefined) {
    body = se_ObjectLockRetention(input.Retention, context);
  }
  let contents: any;
  if (input.Retention !== undefined) {
    contents = se_ObjectLockRetention(input.Retention, context);
    contents = contents.withName("Retention");
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutObjectTaggingCommand
 */
export const se_PutObjectTaggingCommand = async (
  input: PutObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-request-payer": input.RequestPayer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    tagging: [, ""],
    versionId: [, input.VersionId!],
  });
  let body: any;
  if (input.Tagging !== undefined) {
    body = se_Tagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutPublicAccessBlockCommand
 */
export const se_PutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    publicAccessBlock: [, ""],
  });
  let body: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    body = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
  }
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlRestoreObjectCommand
 */
export const se_RestoreObjectCommand = async (
  input: RestoreObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    restore: [, ""],
    "x-id": [, "RestoreObject"],
    versionId: [, input.VersionId!],
  });
  let body: any;
  if (input.RestoreRequest !== undefined) {
    body = se_RestoreRequest(input.RestoreRequest, context);
  }
  let contents: any;
  if (input.RestoreRequest !== undefined) {
    contents = se_RestoreRequest(input.RestoreRequest, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlSelectObjectContentCommand
 */
export const se_SelectObjectContentCommand = async (
  input: SelectObjectContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    select: [, ""],
    "select-type": [, "2"],
    "x-id": [, "SelectObjectContent"],
  });
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SelectObjectContentRequest");
  bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
  if (input.Expression !== undefined) {
    const node = __XmlNode.of("Expression", input.Expression).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.ExpressionType !== undefined) {
    const node = __XmlNode.of("ExpressionType", input.ExpressionType).withName("ExpressionType");
    bodyNode.addChildNode(node);
  }
  if (input.InputSerialization !== undefined) {
    const node = se_InputSerialization(input.InputSerialization, context).withName("InputSerialization");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization !== undefined) {
    const node = se_OutputSerialization(input.OutputSerialization, context).withName("OutputSerialization");
    bodyNode.addChildNode(node);
  }
  if (input.RequestProgress !== undefined) {
    const node = se_RequestProgress(input.RequestProgress, context).withName("RequestProgress");
    bodyNode.addChildNode(node);
  }
  if (input.ScanRange !== undefined) {
    const node = se_ScanRange(input.ScanRange, context).withName("ScanRange");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlUploadPartCommand
 */
export const se_UploadPartCommand = async (
  input: UploadPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength!.toString()],
    "content-md5": input.ContentMD5!,
    "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm!,
    "x-amz-checksum-crc32": input.ChecksumCRC32!,
    "x-amz-checksum-crc32c": input.ChecksumCRC32C!,
    "x-amz-checksum-sha1": input.ChecksumSHA1!,
    "x-amz-checksum-sha256": input.ChecksumSHA256!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "UploadPart"],
    partNumber: [__expectNonNull(input.PartNumber, `PartNumber`) != null, () => input.PartNumber!.toString()],
    uploadId: [, __expectNonNull(input.UploadId!, `UploadId`)],
  });
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlUploadPartCopyCommand
 */
export const se_UploadPartCopyCommand = async (
  input: UploadPartCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-copy-source": input.CopySource!,
    "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    "x-amz-copy-source-if-modified-since": [
      () => isSerializableHeaderValue(input.CopySourceIfModifiedSince),
      () => __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    ],
    "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    "x-amz-copy-source-if-unmodified-since": [
      () => isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince),
      () => __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    ],
    "x-amz-copy-source-range": input.CopySourceRange!,
    "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5!,
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    "x-id": [, "UploadPartCopy"],
    partNumber: [__expectNonNull(input.PartNumber, `PartNumber`) != null, () => input.PartNumber!.toString()],
    uploadId: [, __expectNonNull(input.UploadId!, `UploadId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlWriteGetObjectResponseCommand
 */
export const se_WriteGetObjectResponseCommand = async (
  input: WriteGetObjectResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "content-type": "application/octet-stream",
    "x-amz-request-route": input.RequestRoute!,
    "x-amz-request-token": input.RequestToken!,
    "x-amz-fwd-status": [() => isSerializableHeaderValue(input.StatusCode), () => input.StatusCode!.toString()],
    "x-amz-fwd-error-code": input.ErrorCode!,
    "x-amz-fwd-error-message": input.ErrorMessage!,
    "x-amz-fwd-header-accept-ranges": input.AcceptRanges!,
    "x-amz-fwd-header-cache-control": input.CacheControl!,
    "x-amz-fwd-header-content-disposition": input.ContentDisposition!,
    "x-amz-fwd-header-content-encoding": input.ContentEncoding!,
    "x-amz-fwd-header-content-language": input.ContentLanguage!,
    "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength!.toString()],
    "x-amz-fwd-header-content-range": input.ContentRange!,
    "x-amz-fwd-header-content-type": input.ContentType!,
    "x-amz-fwd-header-x-amz-checksum-crc32": input.ChecksumCRC32!,
    "x-amz-fwd-header-x-amz-checksum-crc32c": input.ChecksumCRC32C!,
    "x-amz-fwd-header-x-amz-checksum-sha1": input.ChecksumSHA1!,
    "x-amz-fwd-header-x-amz-checksum-sha256": input.ChecksumSHA256!,
    "x-amz-fwd-header-x-amz-delete-marker": [
      () => isSerializableHeaderValue(input.DeleteMarker),
      () => input.DeleteMarker!.toString(),
    ],
    "x-amz-fwd-header-etag": input.ETag!,
    "x-amz-fwd-header-expires": [
      () => isSerializableHeaderValue(input.Expires),
      () => __dateToUtcString(input.Expires!).toString(),
    ],
    "x-amz-fwd-header-x-amz-expiration": input.Expiration!,
    "x-amz-fwd-header-last-modified": [
      () => isSerializableHeaderValue(input.LastModified),
      () => __dateToUtcString(input.LastModified!).toString(),
    ],
    "x-amz-fwd-header-x-amz-missing-meta": [
      () => isSerializableHeaderValue(input.MissingMeta),
      () => input.MissingMeta!.toString(),
    ],
    "x-amz-fwd-header-x-amz-object-lock-mode": input.ObjectLockMode!,
    "x-amz-fwd-header-x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    "x-amz-fwd-header-x-amz-object-lock-retain-until-date": [
      () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
      () => (input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "x-amz-fwd-header-x-amz-mp-parts-count": [
      () => isSerializableHeaderValue(input.PartsCount),
      () => input.PartsCount!.toString(),
    ],
    "x-amz-fwd-header-x-amz-replication-status": input.ReplicationStatus!,
    "x-amz-fwd-header-x-amz-request-charged": input.RequestCharged!,
    "x-amz-fwd-header-x-amz-restore": input.Restore!,
    "x-amz-fwd-header-x-amz-server-side-encryption": input.ServerSideEncryption!,
    "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5!,
    "x-amz-fwd-header-x-amz-storage-class": input.StorageClass!,
    "x-amz-fwd-header-x-amz-tagging-count": [
      () => isSerializableHeaderValue(input.TagCount),
      () => input.TagCount!.toString(),
    ],
    "x-amz-fwd-header-x-amz-version-id": input.VersionId!,
    "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled": [
      () => isSerializableHeaderValue(input.BucketKeyEnabled),
      () => input.BucketKeyEnabled!.toString(),
    ],
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/WriteGetObjectResponse";
  const query: any = map({
    "x-id": [, "WriteGetObjectResponse"],
  });
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{RequestRoute}." + resolvedHostname;
    if (input.RequestRoute === undefined) {
      throw new Error("Empty value provided for input host prefix: RequestRoute.");
    }
    resolvedHostname = resolvedHostname.replace("{RequestRoute}", input.RequestRoute!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restXmlAbortMultipartUploadCommand
 */
export const de_AbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AbortMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlAbortMultipartUploadCommandError
 */
const de_AbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCompleteMultipartUploadCommand
 */
export const de_CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CompleteMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Expiration: [, output.headers["x-amz-expiration"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    VersionId: [, output.headers["x-amz-version-id"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(data["ChecksumCRC32"]);
  }
  if (data["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(data["ChecksumCRC32C"]);
  }
  if (data["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(data["ChecksumSHA1"]);
  }
  if (data["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(data["ChecksumSHA256"]);
  }
  if (data["ETag"] !== undefined) {
    contents.ETag = __expectString(data["ETag"]);
  }
  if (data["Key"] !== undefined) {
    contents.Key = __expectString(data["Key"]);
  }
  if (data["Location"] !== undefined) {
    contents.Location = __expectString(data["Location"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCompleteMultipartUploadCommandError
 */
const de_CompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlCopyObjectCommand
 */
export const de_CopyObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CopyObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Expiration: [, output.headers["x-amz-expiration"]],
    CopySourceVersionId: [, output.headers["x-amz-copy-source-version-id"]],
    VersionId: [, output.headers["x-amz-version-id"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CopyObjectResult = de_CopyObjectResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCopyObjectCommandError
 */
const de_CopyObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateBucketCommand
 */
export const de_CreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateBucketCommandError
 */
const de_CreateBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateMultipartUploadCommand
 */
export const de_CreateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    AbortDate: [
      () => void 0 !== output.headers["x-amz-abort-date"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["x-amz-abort-date"])),
    ],
    AbortRuleId: [, output.headers["x-amz-abort-rule-id"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
    ChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["Key"] !== undefined) {
    contents.Key = __expectString(data["Key"]);
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = __expectString(data["UploadId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultipartUploadCommandError
 */
const de_CreateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketCommand
 */
export const de_DeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketCommandError
 */
const de_DeleteBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand
 */
export const de_DeleteBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError
 */
const de_DeleteBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketCorsCommand
 */
export const de_DeleteBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketCorsCommandError
 */
const de_DeleteBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketEncryptionCommand
 */
export const de_DeleteBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketEncryptionCommandError
 */
const de_DeleteBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand
 */
export const de_DeleteBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError
 */
const de_DeleteBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand
 */
export const de_DeleteBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError
 */
const de_DeleteBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketLifecycleCommand
 */
export const de_DeleteBucketLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketLifecycleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketLifecycleCommandError
 */
const de_DeleteBucketLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand
 */
export const de_DeleteBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError
 */
const de_DeleteBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketOwnershipControlsCommand
 */
export const de_DeleteBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError
 */
const de_DeleteBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketPolicyCommand
 */
export const de_DeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketPolicyCommandError
 */
const de_DeleteBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketReplicationCommand
 */
export const de_DeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketReplicationCommandError
 */
const de_DeleteBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketTaggingCommand
 */
export const de_DeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketTaggingCommandError
 */
const de_DeleteBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketWebsiteCommand
 */
export const de_DeleteBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketWebsiteCommandError
 */
const de_DeleteBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteObjectCommand
 */
export const de_DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    DeleteMarker: [
      () => void 0 !== output.headers["x-amz-delete-marker"],
      () => __parseBoolean(output.headers["x-amz-delete-marker"]),
    ],
    VersionId: [, output.headers["x-amz-version-id"]],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectCommandError
 */
const de_DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteObjectsCommand
 */
export const de_DeleteObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deleted === "") {
    contents.Deleted = [];
  } else if (data["Deleted"] !== undefined) {
    contents.Deleted = de_DeletedObjects(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  } else if (data["Error"] !== undefined) {
    contents.Errors = de_Errors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectsCommandError
 */
const de_DeleteObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommand
 */
export const de_DeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommandError
 */
const de_DeleteObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const de_DeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeletePublicAccessBlockCommandError
 */
const de_DeletePublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketAccelerateConfigurationCommand
 */
export const de_GetBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Status"] !== undefined) {
    contents.Status = __expectString(data["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError
 */
const de_GetBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketAclCommand
 */
export const de_GetBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents.Grants = [];
  } else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = de_Grants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = de_Owner(data["Owner"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAclCommandError
 */
const de_GetBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand
 */
export const de_GetBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.AnalyticsConfiguration = de_AnalyticsConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError
 */
const de_GetBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketCorsCommand
 */
export const de_GetBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CORSRule === "") {
    contents.CORSRules = [];
  } else if (data["CORSRule"] !== undefined) {
    contents.CORSRules = de_CORSRules(__getArrayIfSingleItem(data["CORSRule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketCorsCommandError
 */
const de_GetBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketEncryptionCommand
 */
export const de_GetBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ServerSideEncryptionConfiguration = de_ServerSideEncryptionConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketEncryptionCommandError
 */
const de_GetBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand
 */
export const de_GetBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.IntelligentTieringConfiguration = de_IntelligentTieringConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError
 */
const de_GetBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketInventoryConfigurationCommand
 */
export const de_GetBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InventoryConfiguration = de_InventoryConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketInventoryConfigurationCommandError
 */
const de_GetBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const de_GetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rule === "") {
    contents.Rules = [];
  } else if (data["Rule"] !== undefined) {
    contents.Rules = de_LifecycleRules(__getArrayIfSingleItem(data["Rule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError
 */
const de_GetBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketLocationCommand
 */
export const de_GetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["LocationConstraint"] !== undefined) {
    contents.LocationConstraint = __expectString(data["LocationConstraint"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLocationCommandError
 */
const de_GetBucketLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketLoggingCommand
 */
export const de_GetBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketLoggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["LoggingEnabled"] !== undefined) {
    contents.LoggingEnabled = de_LoggingEnabled(data["LoggingEnabled"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLoggingCommandError
 */
const de_GetBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketMetricsConfigurationCommand
 */
export const de_GetBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MetricsConfiguration = de_MetricsConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketMetricsConfigurationCommandError
 */
const de_GetBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketNotificationConfigurationCommand
 */
export const de_GetBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["EventBridgeConfiguration"] !== undefined) {
    contents.EventBridgeConfiguration = de_EventBridgeConfiguration(data["EventBridgeConfiguration"], context);
  }
  if (data.CloudFunctionConfiguration === "") {
    contents.LambdaFunctionConfigurations = [];
  } else if (data["CloudFunctionConfiguration"] !== undefined) {
    contents.LambdaFunctionConfigurations = de_LambdaFunctionConfigurationList(
      __getArrayIfSingleItem(data["CloudFunctionConfiguration"]),
      context
    );
  }
  if (data.QueueConfiguration === "") {
    contents.QueueConfigurations = [];
  } else if (data["QueueConfiguration"] !== undefined) {
    contents.QueueConfigurations = de_QueueConfigurationList(
      __getArrayIfSingleItem(data["QueueConfiguration"]),
      context
    );
  }
  if (data.TopicConfiguration === "") {
    contents.TopicConfigurations = [];
  } else if (data["TopicConfiguration"] !== undefined) {
    contents.TopicConfigurations = de_TopicConfigurationList(
      __getArrayIfSingleItem(data["TopicConfiguration"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketNotificationConfigurationCommandError
 */
const de_GetBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketOwnershipControlsCommand
 */
export const de_GetBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OwnershipControls = de_OwnershipControls(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketOwnershipControlsCommandError
 */
const de_GetBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketPolicyCommand
 */
export const de_GetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.Policy = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketPolicyCommandError
 */
const de_GetBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketPolicyStatusCommand
 */
export const de_GetBucketPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PolicyStatus = de_PolicyStatus(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketPolicyStatusCommandError
 */
const de_GetBucketPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketReplicationCommand
 */
export const de_GetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ReplicationConfiguration = de_ReplicationConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketReplicationCommandError
 */
const de_GetBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketRequestPaymentCommand
 */
export const de_GetBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketRequestPaymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Payer"] !== undefined) {
    contents.Payer = __expectString(data["Payer"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketRequestPaymentCommandError
 */
const de_GetBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketTaggingCommand
 */
export const de_GetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents.TagSet = [];
  } else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = de_TagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketTaggingCommandError
 */
const de_GetBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketVersioningCommand
 */
export const de_GetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketVersioningCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["MfaDelete"] !== undefined) {
    contents.MFADelete = __expectString(data["MfaDelete"]);
  }
  if (data["Status"] !== undefined) {
    contents.Status = __expectString(data["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketVersioningCommandError
 */
const de_GetBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketWebsiteCommand
 */
export const de_GetBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ErrorDocument"] !== undefined) {
    contents.ErrorDocument = de_ErrorDocument(data["ErrorDocument"], context);
  }
  if (data["IndexDocument"] !== undefined) {
    contents.IndexDocument = de_IndexDocument(data["IndexDocument"], context);
  }
  if (data["RedirectAllRequestsTo"] !== undefined) {
    contents.RedirectAllRequestsTo = de_RedirectAllRequestsTo(data["RedirectAllRequestsTo"], context);
  }
  if (data.RoutingRules === "") {
    contents.RoutingRules = [];
  } else if (data["RoutingRules"] !== undefined && data["RoutingRules"]["RoutingRule"] !== undefined) {
    contents.RoutingRules = de_RoutingRules(__getArrayIfSingleItem(data["RoutingRules"]["RoutingRule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketWebsiteCommandError
 */
const de_GetBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetObjectCommand
 */
export const de_GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    DeleteMarker: [
      () => void 0 !== output.headers["x-amz-delete-marker"],
      () => __parseBoolean(output.headers["x-amz-delete-marker"]),
    ],
    AcceptRanges: [, output.headers["accept-ranges"]],
    Expiration: [, output.headers["x-amz-expiration"]],
    Restore: [, output.headers["x-amz-restore"]],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
    ContentLength: [
      () => void 0 !== output.headers["content-length"],
      () => __strictParseLong(output.headers["content-length"]),
    ],
    ETag: [, output.headers["etag"]],
    ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
    ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
    ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
    ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
    MissingMeta: [
      () => void 0 !== output.headers["x-amz-missing-meta"],
      () => __strictParseInt32(output.headers["x-amz-missing-meta"]),
    ],
    VersionId: [, output.headers["x-amz-version-id"]],
    CacheControl: [, output.headers["cache-control"]],
    ContentDisposition: [, output.headers["content-disposition"]],
    ContentEncoding: [, output.headers["content-encoding"]],
    ContentLanguage: [, output.headers["content-language"]],
    ContentRange: [, output.headers["content-range"]],
    ContentType: [, output.headers["content-type"]],
    Expires: [
      () => void 0 !== output.headers["expires"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["expires"])),
    ],
    WebsiteRedirectLocation: [, output.headers["x-amz-website-redirect-location"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    StorageClass: [, output.headers["x-amz-storage-class"]],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
    ReplicationStatus: [, output.headers["x-amz-replication-status"]],
    PartsCount: [
      () => void 0 !== output.headers["x-amz-mp-parts-count"],
      () => __strictParseInt32(output.headers["x-amz-mp-parts-count"]),
    ],
    TagCount: [
      () => void 0 !== output.headers["x-amz-tagging-count"],
      () => __strictParseInt32(output.headers["x-amz-tagging-count"]),
    ],
    ObjectLockMode: [, output.headers["x-amz-object-lock-mode"]],
    ObjectLockRetainUntilDate: [
      () => void 0 !== output.headers["x-amz-object-lock-retain-until-date"],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers["x-amz-object-lock-retain-until-date"])),
    ],
    ObjectLockLegalHoldStatus: [, output.headers["x-amz-object-lock-legal-hold"]],
    Metadata: [
      ,
      Object.keys(output.headers)
        .filter((header) => header.startsWith("x-amz-meta-"))
        .reduce((acc, header) => {
          acc[header.substring(11)] = output.headers[header];
          return acc;
        }, {} as any),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectCommandError
 */
const de_GetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetObjectAclCommand
 */
export const de_GetObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents.Grants = [];
  } else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = de_Grants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = de_Owner(data["Owner"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectAclCommandError
 */
const de_GetObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetObjectAttributesCommand
 */
export const de_GetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    DeleteMarker: [
      () => void 0 !== output.headers["x-amz-delete-marker"],
      () => __parseBoolean(output.headers["x-amz-delete-marker"]),
    ],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
    VersionId: [, output.headers["x-amz-version-id"]],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Checksum"] !== undefined) {
    contents.Checksum = de_Checksum(data["Checksum"], context);
  }
  if (data["ETag"] !== undefined) {
    contents.ETag = __expectString(data["ETag"]);
  }
  if (data["ObjectParts"] !== undefined) {
    contents.ObjectParts = de_GetObjectAttributesParts(data["ObjectParts"], context);
  }
  if (data["ObjectSize"] !== undefined) {
    contents.ObjectSize = __strictParseLong(data["ObjectSize"]) as number;
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(data["StorageClass"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectAttributesCommandError
 */
const de_GetObjectAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetObjectLegalHoldCommand
 */
export const de_GetObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.LegalHold = de_ObjectLockLegalHold(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectLegalHoldCommandError
 */
const de_GetObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetObjectLockConfigurationCommand
 */
export const de_GetObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ObjectLockConfiguration = de_ObjectLockConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectLockConfigurationCommandError
 */
const de_GetObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetObjectRetentionCommand
 */
export const de_GetObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Retention = de_ObjectLockRetention(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectRetentionCommandError
 */
const de_GetObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetObjectTaggingCommand
 */
export const de_GetObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents.TagSet = [];
  } else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = de_TagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectTaggingCommandError
 */
const de_GetObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetObjectTorrentCommand
 */
export const de_GetObjectTorrentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetObjectTorrentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectTorrentCommandError
 */
const de_GetObjectTorrentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetPublicAccessBlockCommand
 */
export const de_GetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicAccessBlockCommandError
 */
const de_GetPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlHeadBucketCommand
 */
export const de_HeadBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HeadBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlHeadBucketCommandError
 */
const de_HeadBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlHeadObjectCommand
 */
export const de_HeadObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_HeadObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    DeleteMarker: [
      () => void 0 !== output.headers["x-amz-delete-marker"],
      () => __parseBoolean(output.headers["x-amz-delete-marker"]),
    ],
    AcceptRanges: [, output.headers["accept-ranges"]],
    Expiration: [, output.headers["x-amz-expiration"]],
    Restore: [, output.headers["x-amz-restore"]],
    ArchiveStatus: [, output.headers["x-amz-archive-status"]],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
    ContentLength: [
      () => void 0 !== output.headers["content-length"],
      () => __strictParseLong(output.headers["content-length"]),
    ],
    ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
    ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
    ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
    ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
    ETag: [, output.headers["etag"]],
    MissingMeta: [
      () => void 0 !== output.headers["x-amz-missing-meta"],
      () => __strictParseInt32(output.headers["x-amz-missing-meta"]),
    ],
    VersionId: [, output.headers["x-amz-version-id"]],
    CacheControl: [, output.headers["cache-control"]],
    ContentDisposition: [, output.headers["content-disposition"]],
    ContentEncoding: [, output.headers["content-encoding"]],
    ContentLanguage: [, output.headers["content-language"]],
    ContentType: [, output.headers["content-type"]],
    Expires: [
      () => void 0 !== output.headers["expires"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["expires"])),
    ],
    WebsiteRedirectLocation: [, output.headers["x-amz-website-redirect-location"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    StorageClass: [, output.headers["x-amz-storage-class"]],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
    ReplicationStatus: [, output.headers["x-amz-replication-status"]],
    PartsCount: [
      () => void 0 !== output.headers["x-amz-mp-parts-count"],
      () => __strictParseInt32(output.headers["x-amz-mp-parts-count"]),
    ],
    ObjectLockMode: [, output.headers["x-amz-object-lock-mode"]],
    ObjectLockRetainUntilDate: [
      () => void 0 !== output.headers["x-amz-object-lock-retain-until-date"],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers["x-amz-object-lock-retain-until-date"])),
    ],
    ObjectLockLegalHoldStatus: [, output.headers["x-amz-object-lock-legal-hold"]],
    Metadata: [
      ,
      Object.keys(output.headers)
        .filter((header) => header.startsWith("x-amz-meta-"))
        .reduce((acc, header) => {
          acc[header.substring(11)] = output.headers[header];
          return acc;
        }, {} as any),
    ],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlHeadObjectCommandError
 */
const de_HeadObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand
 */
export const de_ListBucketAnalyticsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBucketAnalyticsConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalyticsConfiguration === "") {
    contents.AnalyticsConfigurationList = [];
  } else if (data["AnalyticsConfiguration"] !== undefined) {
    contents.AnalyticsConfigurationList = de_AnalyticsConfigurationList(
      __getArrayIfSingleItem(data["AnalyticsConfiguration"]),
      context
    );
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError
 */
const de_ListBucketAnalyticsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand
 */
export const de_ListBucketIntelligentTieringConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBucketIntelligentTieringConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data.IntelligentTieringConfiguration === "") {
    contents.IntelligentTieringConfigurationList = [];
  } else if (data["IntelligentTieringConfiguration"] !== undefined) {
    contents.IntelligentTieringConfigurationList = de_IntelligentTieringConfigurationList(
      __getArrayIfSingleItem(data["IntelligentTieringConfiguration"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError
 */
const de_ListBucketIntelligentTieringConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListBucketInventoryConfigurationsCommand
 */
export const de_ListBucketInventoryConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBucketInventoryConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data.InventoryConfiguration === "") {
    contents.InventoryConfigurationList = [];
  } else if (data["InventoryConfiguration"] !== undefined) {
    contents.InventoryConfigurationList = de_InventoryConfigurationList(
      __getArrayIfSingleItem(data["InventoryConfiguration"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketInventoryConfigurationsCommandError
 */
const de_ListBucketInventoryConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListBucketMetricsConfigurationsCommand
 */
export const de_ListBucketMetricsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBucketMetricsConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data.MetricsConfiguration === "") {
    contents.MetricsConfigurationList = [];
  } else if (data["MetricsConfiguration"] !== undefined) {
    contents.MetricsConfigurationList = de_MetricsConfigurationList(
      __getArrayIfSingleItem(data["MetricsConfiguration"]),
      context
    );
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketMetricsConfigurationsCommandError
 */
const de_ListBucketMetricsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListBucketsCommand
 */
export const de_ListBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Buckets === "") {
    contents.Buckets = [];
  } else if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
    contents.Buckets = de_Buckets(__getArrayIfSingleItem(data["Buckets"]["Bucket"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = de_Owner(data["Owner"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketsCommandError
 */
const de_ListBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListMultipartUploadsCommand
 */
export const de_ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultipartUploadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = de_CommonPrefixList(__getArrayIfSingleItem(data["CommonPrefixes"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(data["Delimiter"]);
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = __expectString(data["EncodingType"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = __expectString(data["KeyMarker"]);
  }
  if (data["MaxUploads"] !== undefined) {
    contents.MaxUploads = __strictParseInt32(data["MaxUploads"]) as number;
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = __expectString(data["NextKeyMarker"]);
  }
  if (data["NextUploadIdMarker"] !== undefined) {
    contents.NextUploadIdMarker = __expectString(data["NextUploadIdMarker"]);
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = __expectString(data["Prefix"]);
  }
  if (data["UploadIdMarker"] !== undefined) {
    contents.UploadIdMarker = __expectString(data["UploadIdMarker"]);
  }
  if (data.Upload === "") {
    contents.Uploads = [];
  } else if (data["Upload"] !== undefined) {
    contents.Uploads = de_MultipartUploadList(__getArrayIfSingleItem(data["Upload"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListMultipartUploadsCommandError
 */
const de_ListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListObjectsCommand
 */
export const de_ListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = de_CommonPrefixList(__getArrayIfSingleItem(data["CommonPrefixes"]), context);
  }
  if (data.Contents === "") {
    contents.Contents = [];
  } else if (data["Contents"] !== undefined) {
    contents.Contents = de_ObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(data["Delimiter"]);
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = __expectString(data["EncodingType"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = __expectString(data["Marker"]);
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = __strictParseInt32(data["MaxKeys"]) as number;
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = __expectString(data["NextMarker"]);
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = __expectString(data["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsCommandError
 */
const de_ListObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListObjectsV2Command
 */
export const de_ListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectsV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = de_CommonPrefixList(__getArrayIfSingleItem(data["CommonPrefixes"]), context);
  }
  if (data.Contents === "") {
    contents.Contents = [];
  } else if (data["Contents"] !== undefined) {
    contents.Contents = de_ObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = __expectString(data["ContinuationToken"]);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(data["Delimiter"]);
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = __expectString(data["EncodingType"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["KeyCount"] !== undefined) {
    contents.KeyCount = __strictParseInt32(data["KeyCount"]) as number;
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = __strictParseInt32(data["MaxKeys"]) as number;
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = __expectString(data["Prefix"]);
  }
  if (data["StartAfter"] !== undefined) {
    contents.StartAfter = __expectString(data["StartAfter"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsV2CommandError
 */
const de_ListObjectsV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListObjectVersionsCommand
 */
export const de_ListObjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListObjectVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = de_CommonPrefixList(__getArrayIfSingleItem(data["CommonPrefixes"]), context);
  }
  if (data.DeleteMarker === "") {
    contents.DeleteMarkers = [];
  } else if (data["DeleteMarker"] !== undefined) {
    contents.DeleteMarkers = de_DeleteMarkers(__getArrayIfSingleItem(data["DeleteMarker"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(data["Delimiter"]);
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = __expectString(data["EncodingType"]);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = __expectString(data["KeyMarker"]);
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = __strictParseInt32(data["MaxKeys"]) as number;
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = __expectString(data["NextKeyMarker"]);
  }
  if (data["NextVersionIdMarker"] !== undefined) {
    contents.NextVersionIdMarker = __expectString(data["NextVersionIdMarker"]);
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = __expectString(data["Prefix"]);
  }
  if (data["VersionIdMarker"] !== undefined) {
    contents.VersionIdMarker = __expectString(data["VersionIdMarker"]);
  }
  if (data.Version === "") {
    contents.Versions = [];
  } else if (data["Version"] !== undefined) {
    contents.Versions = de_ObjectVersionList(__getArrayIfSingleItem(data["Version"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectVersionsCommandError
 */
const de_ListObjectVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListPartsCommand
 */
export const de_ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPartsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    AbortDate: [
      () => void 0 !== output.headers["x-amz-abort-date"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["x-amz-abort-date"])),
    ],
    AbortRuleId: [, output.headers["x-amz-abort-rule-id"]],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = __expectString(data["ChecksumAlgorithm"]);
  }
  if (data["Initiator"] !== undefined) {
    contents.Initiator = de_Initiator(data["Initiator"], context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(data["IsTruncated"]);
  }
  if (data["Key"] !== undefined) {
    contents.Key = __expectString(data["Key"]);
  }
  if (data["MaxParts"] !== undefined) {
    contents.MaxParts = __strictParseInt32(data["MaxParts"]) as number;
  }
  if (data["NextPartNumberMarker"] !== undefined) {
    contents.NextPartNumberMarker = __expectString(data["NextPartNumberMarker"]);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = de_Owner(data["Owner"], context);
  }
  if (data["PartNumberMarker"] !== undefined) {
    contents.PartNumberMarker = __expectString(data["PartNumberMarker"]);
  }
  if (data.Part === "") {
    contents.Parts = [];
  } else if (data["Part"] !== undefined) {
    contents.Parts = de_Parts(__getArrayIfSingleItem(data["Part"]), context);
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(data["StorageClass"]);
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = __expectString(data["UploadId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListPartsCommandError
 */
const de_ListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketAccelerateConfigurationCommand
 */
export const de_PutBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError
 */
const de_PutBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketAclCommand
 */
export const de_PutBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAclCommandError
 */
const de_PutBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand
 */
export const de_PutBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError
 */
const de_PutBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketCorsCommand
 */
export const de_PutBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketCorsCommandError
 */
const de_PutBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketEncryptionCommand
 */
export const de_PutBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketEncryptionCommandError
 */
const de_PutBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand
 */
export const de_PutBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError
 */
const de_PutBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketInventoryConfigurationCommand
 */
export const de_PutBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketInventoryConfigurationCommandError
 */
const de_PutBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const de_PutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError
 */
const de_PutBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketLoggingCommand
 */
export const de_PutBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketLoggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketLoggingCommandError
 */
const de_PutBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketMetricsConfigurationCommand
 */
export const de_PutBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketMetricsConfigurationCommandError
 */
const de_PutBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketNotificationConfigurationCommand
 */
export const de_PutBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketNotificationConfigurationCommandError
 */
const de_PutBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketOwnershipControlsCommand
 */
export const de_PutBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketOwnershipControlsCommandError
 */
const de_PutBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketPolicyCommand
 */
export const de_PutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketPolicyCommandError
 */
const de_PutBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketReplicationCommand
 */
export const de_PutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketReplicationCommandError
 */
const de_PutBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketRequestPaymentCommand
 */
export const de_PutBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketRequestPaymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketRequestPaymentCommandError
 */
const de_PutBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketTaggingCommand
 */
export const de_PutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketTaggingCommandError
 */
const de_PutBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketVersioningCommand
 */
export const de_PutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketVersioningCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketVersioningCommandError
 */
const de_PutBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutBucketWebsiteCommand
 */
export const de_PutBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketWebsiteCommandError
 */
const de_PutBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutObjectCommand
 */
export const de_PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Expiration: [, output.headers["x-amz-expiration"]],
    ETag: [, output.headers["etag"]],
    ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
    ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
    ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
    ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    VersionId: [, output.headers["x-amz-version-id"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectCommandError
 */
const de_PutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutObjectAclCommand
 */
export const de_PutObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectAclCommandError
 */
const de_PutObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlPutObjectLegalHoldCommand
 */
export const de_PutObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectLegalHoldCommandError
 */
const de_PutObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutObjectLockConfigurationCommand
 */
export const de_PutObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectLockConfigurationCommandError
 */
const de_PutObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutObjectRetentionCommand
 */
export const de_PutObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectRetentionCommandError
 */
const de_PutObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutObjectTaggingCommand
 */
export const de_PutObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectTaggingCommandError
 */
const de_PutObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutPublicAccessBlockCommand
 */
export const de_PutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutPublicAccessBlockCommandError
 */
const de_PutPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlRestoreObjectCommand
 */
export const de_RestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RestoreObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
    RestoreOutputPath: [, output.headers["x-amz-restore-output-path"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlRestoreObjectCommandError
 */
const de_RestoreObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlSelectObjectContentCommand
 */
export const de_SelectObjectContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SelectObjectContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.Payload = de_SelectObjectContentEventStream(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlSelectObjectContentCommandError
 */
const de_SelectObjectContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlUploadPartCommand
 */
export const de_UploadPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UploadPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    ETag: [, output.headers["etag"]],
    ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
    ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
    ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
    ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUploadPartCommandError
 */
const de_UploadPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlUploadPartCopyCommand
 */
export const de_UploadPartCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UploadPartCopyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    CopySourceVersionId: [, output.headers["x-amz-copy-source-version-id"]],
    ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
    SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
    SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
    SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
    BucketKeyEnabled: [
      () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
      () => __parseBoolean(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
    ],
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CopyPartResult = de_CopyPartResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUploadPartCopyCommandError
 */
const de_UploadPartCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlWriteGetObjectResponseCommand
 */
export const de_WriteGetObjectResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteGetObjectResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_WriteGetObjectResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlWriteGetObjectResponseCommandError
 */
const de_WriteGetObjectResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteGetObjectResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlBucketAlreadyExistsRes
 */
const de_BucketAlreadyExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<BucketAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlBucketAlreadyOwnedByYouRes
 */
const de_BucketAlreadyOwnedByYouRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyOwnedByYou> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlInvalidObjectStateRes
 */
const de_InvalidObjectStateRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidObjectState> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data["AccessTier"] !== undefined) {
    contents.AccessTier = __expectString(data["AccessTier"]);
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(data["StorageClass"]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlNoSuchBucketRes
 */
const de_NoSuchBucketRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchBucket> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlNoSuchKeyRes
 */
const de_NoSuchKeyRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchKey> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlNoSuchUploadRes
 */
const de_NoSuchUploadRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoSuchUpload> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlNotFoundRes
 */
const de_NotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlObjectAlreadyInActiveTierErrorRes
 */
const de_ObjectAlreadyInActiveTierErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectAlreadyInActiveTierError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new ObjectAlreadyInActiveTierError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlObjectNotInActiveTierErrorRes
 */
const de_ObjectNotInActiveTierErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotInActiveTierError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new ObjectNotInActiveTierError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlSelectObjectContentEventStream
 */
const de_SelectObjectContentEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<SelectObjectContentEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["Records"] != null) {
      return {
        Records: await de_RecordsEvent_event(event["Records"], context),
      };
    }
    if (event["Stats"] != null) {
      return {
        Stats: await de_StatsEvent_event(event["Stats"], context),
      };
    }
    if (event["Progress"] != null) {
      return {
        Progress: await de_ProgressEvent_event(event["Progress"], context),
      };
    }
    if (event["Cont"] != null) {
      return {
        Cont: await de_ContinuationEvent_event(event["Cont"], context),
      };
    }
    if (event["End"] != null) {
      return {
        End: await de_EndEvent_event(event["End"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_ContinuationEvent_event = async (output: any, context: __SerdeContext): Promise<ContinuationEvent> => {
  const contents: ContinuationEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_ContinuationEvent(data, context));
  return contents;
};
const de_EndEvent_event = async (output: any, context: __SerdeContext): Promise<EndEvent> => {
  const contents: EndEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_EndEvent(data, context));
  return contents;
};
const de_ProgressEvent_event = async (output: any, context: __SerdeContext): Promise<ProgressEvent> => {
  const contents: ProgressEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents.Details = de_Progress(data, context);
  return contents;
};
const de_RecordsEvent_event = async (output: any, context: __SerdeContext): Promise<RecordsEvent> => {
  const contents: RecordsEvent = {} as any;
  contents.Payload = output.body;
  return contents;
};
const de_StatsEvent_event = async (output: any, context: __SerdeContext): Promise<StatsEvent> => {
  const contents: StatsEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents.Details = de_Stats(data, context);
  return contents;
};
/**
 * serializeAws_restXmlAbortIncompleteMultipartUpload
 */
const se_AbortIncompleteMultipartUpload = (input: AbortIncompleteMultipartUpload, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
  if (input.DaysAfterInitiation != null) {
    const node = __XmlNode.of("DaysAfterInitiation", String(input.DaysAfterInitiation)).withName("DaysAfterInitiation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAccelerateConfiguration
 */
const se_AccelerateConfiguration = (input: AccelerateConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccelerateConfiguration");
  if (input.Status != null) {
    const node = __XmlNode.of("BucketAccelerateStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAccessControlPolicy
 */
const se_AccessControlPolicy = (input: AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccessControlPolicy");
  if (input.Grants != null) {
    const nodes = se_Grants(input.Grants, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Owner != null) {
    const node = se_Owner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAccessControlTranslation
 */
const se_AccessControlTranslation = (input: AccessControlTranslation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccessControlTranslation");
  if (input.Owner != null) {
    const node = __XmlNode.of("OwnerOverride", input.Owner).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAllowedHeaders
 */
const se_AllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedHeader", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlAllowedMethods
 */
const se_AllowedMethods = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedMethod", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlAllowedOrigins
 */
const se_AllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedOrigin", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlAnalyticsAndOperator
 */
const se_AnalyticsAndOperator = (input: AnalyticsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = se_TagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAnalyticsConfiguration
 */
const se_AnalyticsConfiguration = (input: AnalyticsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("AnalyticsId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_AnalyticsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClassAnalysis != null) {
    const node = se_StorageClassAnalysis(input.StorageClassAnalysis, context).withName("StorageClassAnalysis");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAnalyticsExportDestination
 */
const se_AnalyticsExportDestination = (input: AnalyticsExportDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsExportDestination");
  if (input.S3BucketDestination != null) {
    const node = se_AnalyticsS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAnalyticsFilter
 */
const se_AnalyticsFilter = (input: AnalyticsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsFilter");
  AnalyticsFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = se_Tag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = se_AnalyticsAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

/**
 * serializeAws_restXmlAnalyticsS3BucketDestination
 */
const se_AnalyticsS3BucketDestination = (input: AnalyticsS3BucketDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsS3BucketDestination");
  if (input.Format != null) {
    const node = __XmlNode.of("AnalyticsS3ExportFileFormat", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.BucketAccountId != null) {
    const node = __XmlNode.of("AccountId", input.BucketAccountId).withName("BucketAccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlBucketLifecycleConfiguration
 */
const se_BucketLifecycleConfiguration = (input: BucketLifecycleConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLifecycleConfiguration");
  if (input.Rules != null) {
    const nodes = se_LifecycleRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlBucketLoggingStatus
 */
const se_BucketLoggingStatus = (input: BucketLoggingStatus, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLoggingStatus");
  if (input.LoggingEnabled != null) {
    const node = se_LoggingEnabled(input.LoggingEnabled, context).withName("LoggingEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCompletedMultipartUpload
 */
const se_CompletedMultipartUpload = (input: CompletedMultipartUpload, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CompletedMultipartUpload");
  if (input.Parts != null) {
    const nodes = se_CompletedPartList(input.Parts, context);
    nodes.map((node: any) => {
      node = node.withName("Part");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCompletedPart
 */
const se_CompletedPart = (input: CompletedPart, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CompletedPart");
  if (input.ETag != null) {
    const node = __XmlNode.of("ETag", input.ETag).withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.ChecksumCRC32 != null) {
    const node = __XmlNode.of("ChecksumCRC32", input.ChecksumCRC32).withName("ChecksumCRC32");
    bodyNode.addChildNode(node);
  }
  if (input.ChecksumCRC32C != null) {
    const node = __XmlNode.of("ChecksumCRC32C", input.ChecksumCRC32C).withName("ChecksumCRC32C");
    bodyNode.addChildNode(node);
  }
  if (input.ChecksumSHA1 != null) {
    const node = __XmlNode.of("ChecksumSHA1", input.ChecksumSHA1).withName("ChecksumSHA1");
    bodyNode.addChildNode(node);
  }
  if (input.ChecksumSHA256 != null) {
    const node = __XmlNode.of("ChecksumSHA256", input.ChecksumSHA256).withName("ChecksumSHA256");
    bodyNode.addChildNode(node);
  }
  if (input.PartNumber != null) {
    const node = __XmlNode.of("PartNumber", String(input.PartNumber)).withName("PartNumber");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCompletedPartList
 */
const se_CompletedPartList = (input: CompletedPart[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_CompletedPart(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlCondition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Condition");
  if (input.HttpErrorCodeReturnedEquals != null) {
    const node = __XmlNode
      .of("HttpErrorCodeReturnedEquals", input.HttpErrorCodeReturnedEquals)
      .withName("HttpErrorCodeReturnedEquals");
    bodyNode.addChildNode(node);
  }
  if (input.KeyPrefixEquals != null) {
    const node = __XmlNode.of("KeyPrefixEquals", input.KeyPrefixEquals).withName("KeyPrefixEquals");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCORSConfiguration
 */
const se_CORSConfiguration = (input: CORSConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSConfiguration");
  if (input.CORSRules != null) {
    const nodes = se_CORSRules(input.CORSRules, context);
    nodes.map((node: any) => {
      node = node.withName("CORSRule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCORSRule
 */
const se_CORSRule = (input: CORSRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSRule");
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedHeaders != null) {
    const nodes = se_AllowedHeaders(input.AllowedHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedMethods != null) {
    const nodes = se_AllowedMethods(input.AllowedMethods, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedMethod");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedOrigins != null) {
    const nodes = se_AllowedOrigins(input.AllowedOrigins, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedOrigin");
      bodyNode.addChildNode(node);
    });
  }
  if (input.ExposeHeaders != null) {
    const nodes = se_ExposeHeaders(input.ExposeHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("ExposeHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.MaxAgeSeconds != null) {
    const node = __XmlNode.of("MaxAgeSeconds", String(input.MaxAgeSeconds)).withName("MaxAgeSeconds");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCORSRules
 */
const se_CORSRules = (input: CORSRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_CORSRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlCreateBucketConfiguration
 */
const se_CreateBucketConfiguration = (input: CreateBucketConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CreateBucketConfiguration");
  if (input.LocationConstraint != null) {
    const node = __XmlNode.of("BucketLocationConstraint", input.LocationConstraint).withName("LocationConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCSVInput
 */
const se_CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVInput");
  if (input.FileHeaderInfo != null) {
    const node = __XmlNode.of("FileHeaderInfo", input.FileHeaderInfo).withName("FileHeaderInfo");
    bodyNode.addChildNode(node);
  }
  if (input.Comments != null) {
    const node = __XmlNode.of("Comments", input.Comments).withName("Comments");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter != null) {
    const node = __XmlNode.of("QuoteEscapeCharacter", input.QuoteEscapeCharacter).withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter != null) {
    const node = __XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.FieldDelimiter != null) {
    const node = __XmlNode.of("FieldDelimiter", input.FieldDelimiter).withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter != null) {
    const node = __XmlNode.of("QuoteCharacter", input.QuoteCharacter).withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.AllowQuotedRecordDelimiter != null) {
    const node = __XmlNode
      .of("AllowQuotedRecordDelimiter", String(input.AllowQuotedRecordDelimiter))
      .withName("AllowQuotedRecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlCSVOutput
 */
const se_CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVOutput");
  if (input.QuoteFields != null) {
    const node = __XmlNode.of("QuoteFields", input.QuoteFields).withName("QuoteFields");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter != null) {
    const node = __XmlNode.of("QuoteEscapeCharacter", input.QuoteEscapeCharacter).withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter != null) {
    const node = __XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.FieldDelimiter != null) {
    const node = __XmlNode.of("FieldDelimiter", input.FieldDelimiter).withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter != null) {
    const node = __XmlNode.of("QuoteCharacter", input.QuoteCharacter).withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDefaultRetention
 */
const se_DefaultRetention = (input: DefaultRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DefaultRetention");
  if (input.Mode != null) {
    const node = __XmlNode.of("ObjectLockRetentionMode", input.Mode).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.Days != null) {
    const node = __XmlNode.of("Days", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Years != null) {
    const node = __XmlNode.of("Years", String(input.Years)).withName("Years");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDelete
 */
const se_Delete = (input: Delete, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Delete");
  if (input.Objects != null) {
    const nodes = se_ObjectIdentifierList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Quiet != null) {
    const node = __XmlNode.of("Quiet", String(input.Quiet)).withName("Quiet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDeleteMarkerReplication
 */
const se_DeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DeleteMarkerReplication");
  if (input.Status != null) {
    const node = __XmlNode.of("DeleteMarkerReplicationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Destination");
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Account != null) {
    const node = __XmlNode.of("AccountId", input.Account).withName("Account");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("StorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlTranslation != null) {
    const node = se_AccessControlTranslation(input.AccessControlTranslation, context).withName(
      "AccessControlTranslation"
    );
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionConfiguration != null) {
    const node = se_EncryptionConfiguration(input.EncryptionConfiguration, context).withName("EncryptionConfiguration");
    bodyNode.addChildNode(node);
  }
  if (input.ReplicationTime != null) {
    const node = se_ReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
    bodyNode.addChildNode(node);
  }
  if (input.Metrics != null) {
    const node = se_Metrics(input.Metrics, context).withName("Metrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEncryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Encryption");
  if (input.EncryptionType != null) {
    const node = __XmlNode.of("ServerSideEncryption", input.EncryptionType).withName("EncryptionType");
    bodyNode.addChildNode(node);
  }
  if (input.KMSKeyId != null) {
    const node = __XmlNode.of("SSEKMSKeyId", input.KMSKeyId).withName("KMSKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.KMSContext != null) {
    const node = __XmlNode.of("KMSContext", input.KMSContext).withName("KMSContext");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionConfiguration");
  if (input.ReplicaKmsKeyID != null) {
    const node = __XmlNode.of("ReplicaKmsKeyID", input.ReplicaKmsKeyID).withName("ReplicaKmsKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlErrorDocument
 */
const se_ErrorDocument = (input: ErrorDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ErrorDocument");
  if (input.Key != null) {
    const node = __XmlNode.of("ObjectKey", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlEventBridgeConfiguration
 */
const se_EventBridgeConfiguration = (input: EventBridgeConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EventBridgeConfiguration");
  return bodyNode;
};

/**
 * serializeAws_restXmlEventList
 */
const se_EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Event", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlExistingObjectReplication
 */
const se_ExistingObjectReplication = (input: ExistingObjectReplication, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ExistingObjectReplication");
  if (input.Status != null) {
    const node = __XmlNode.of("ExistingObjectReplicationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlExposeHeaders
 */
const se_ExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ExposeHeader", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlFilterRule
 */
const se_FilterRule = (input: FilterRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FilterRule");
  if (input.Name != null) {
    const node = __XmlNode.of("FilterRuleName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("FilterRuleValue", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlFilterRuleList
 */
const se_FilterRuleList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_FilterRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlGlacierJobParameters
 */
const se_GlacierJobParameters = (input: GlacierJobParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GlacierJobParameters");
  if (input.Tier != null) {
    const node = __XmlNode.of("Tier", input.Tier).withName("Tier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlGrant
 */
const se_Grant = (input: Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grant");
  if (input.Grantee != null) {
    const node = se_Grantee(input.Grantee, context).withName("Grantee");
    node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("Permission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlGrantee
 */
const se_Grantee = (input: Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grantee");
  if (input.DisplayName != null) {
    const node = __XmlNode.of("DisplayName", input.DisplayName).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.EmailAddress != null) {
    const node = __XmlNode.of("EmailAddress", input.EmailAddress).withName("EmailAddress");
    bodyNode.addChildNode(node);
  }
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.URI != null) {
    const node = __XmlNode.of("URI", input.URI).withName("URI");
    bodyNode.addChildNode(node);
  }
  if (input.Type != null) {
    bodyNode.addAttribute("xsi:type", input.Type);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlGrants
 */
const se_Grants = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Grant(entry, context);
      return node.withName("Grant");
    });
};

/**
 * serializeAws_restXmlIndexDocument
 */
const se_IndexDocument = (input: IndexDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IndexDocument");
  if (input.Suffix != null) {
    const node = __XmlNode.of("Suffix", input.Suffix).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInputSerialization
 */
const se_InputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InputSerialization");
  if (input.CSV != null) {
    const node = se_CSVInput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.CompressionType != null) {
    const node = __XmlNode.of("CompressionType", input.CompressionType).withName("CompressionType");
    bodyNode.addChildNode(node);
  }
  if (input.JSON != null) {
    const node = se_JSONInput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  if (input.Parquet != null) {
    const node = se_ParquetInput(input.Parquet, context).withName("Parquet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlIntelligentTieringAndOperator
 */
const se_IntelligentTieringAndOperator = (input: IntelligentTieringAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IntelligentTieringAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = se_TagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlIntelligentTieringConfiguration
 */
const se_IntelligentTieringConfiguration = (input: IntelligentTieringConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IntelligentTieringConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("IntelligentTieringId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_IntelligentTieringFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("IntelligentTieringStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Tierings != null) {
    const nodes = se_TieringList(input.Tierings, context);
    nodes.map((node: any) => {
      node = node.withName("Tiering");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlIntelligentTieringFilter
 */
const se_IntelligentTieringFilter = (input: IntelligentTieringFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IntelligentTieringFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag != null) {
    const node = se_Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And != null) {
    const node = se_IntelligentTieringAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventoryConfiguration
 */
const se_InventoryConfiguration = (input: InventoryConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryConfiguration");
  if (input.Destination != null) {
    const node = se_InventoryDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_InventoryFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Id != null) {
    const node = __XmlNode.of("InventoryId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.IncludedObjectVersions != null) {
    const node = __XmlNode
      .of("InventoryIncludedObjectVersions", input.IncludedObjectVersions)
      .withName("IncludedObjectVersions");
    bodyNode.addChildNode(node);
  }
  if (input.OptionalFields != null) {
    const nodes = se_InventoryOptionalFields(input.OptionalFields, context);
    const containerNode = new __XmlNode("OptionalFields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Schedule != null) {
    const node = se_InventorySchedule(input.Schedule, context).withName("Schedule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventoryDestination
 */
const se_InventoryDestination = (input: InventoryDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryDestination");
  if (input.S3BucketDestination != null) {
    const node = se_InventoryS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventoryEncryption
 */
const se_InventoryEncryption = (input: InventoryEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryEncryption");
  if (input.SSES3 != null) {
    const node = se_SSES3(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS != null) {
    const node = se_SSEKMS(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventoryFilter
 */
const se_InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventoryOptionalFields
 */
const se_InventoryOptionalFields = (input: InventoryOptionalField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("InventoryOptionalField", entry);
      return node.withName("Field");
    });
};

/**
 * serializeAws_restXmlInventoryS3BucketDestination
 */
const se_InventoryS3BucketDestination = (input: InventoryS3BucketDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryS3BucketDestination");
  if (input.AccountId != null) {
    const node = __XmlNode.of("AccountId", input.AccountId).withName("AccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Format != null) {
    const node = __XmlNode.of("InventoryFormat", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption != null) {
    const node = se_InventoryEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInventorySchedule
 */
const se_InventorySchedule = (input: InventorySchedule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventorySchedule");
  if (input.Frequency != null) {
    const node = __XmlNode.of("InventoryFrequency", input.Frequency).withName("Frequency");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJSONInput
 */
const se_JSONInput = (input: JSONInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONInput");
  if (input.Type != null) {
    const node = __XmlNode.of("JSONType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJSONOutput
 */
const se_JSONOutput = (input: JSONOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONOutput");
  if (input.RecordDelimiter != null) {
    const node = __XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLambdaFunctionConfiguration
 */
const se_LambdaFunctionConfiguration = (input: LambdaFunctionConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaFunctionConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("NotificationId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionArn != null) {
    const node = __XmlNode.of("LambdaFunctionArn", input.LambdaFunctionArn).withName("CloudFunction");
    bodyNode.addChildNode(node);
  }
  if (input.Events != null) {
    const nodes = se_EventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = se_NotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLambdaFunctionConfigurationList
 */
const se_LambdaFunctionConfigurationList = (input: LambdaFunctionConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_LambdaFunctionConfiguration(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlLifecycleExpiration
 */
const se_LifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleExpiration");
  if (input.Date != null) {
    const node = __XmlNode.of("Date", (input.Date.toISOString().split(".")[0] + "Z").toString()).withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days != null) {
    const node = __XmlNode.of("Days", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.ExpiredObjectDeleteMarker != null) {
    const node = __XmlNode
      .of("ExpiredObjectDeleteMarker", String(input.ExpiredObjectDeleteMarker))
      .withName("ExpiredObjectDeleteMarker");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleRule
 */
const se_LifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.Expiration != null) {
    const node = se_LifecycleExpiration(input.Expiration, context).withName("Expiration");
    bodyNode.addChildNode(node);
  }
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_LifecycleRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("ExpirationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Transitions != null) {
    const nodes = se_TransitionList(input.Transitions, context);
    nodes.map((node: any) => {
      node = node.withName("Transition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionTransitions != null) {
    const nodes = se_NoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    nodes.map((node: any) => {
      node = node.withName("NoncurrentVersionTransition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionExpiration != null) {
    const node = se_NoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName(
      "NoncurrentVersionExpiration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AbortIncompleteMultipartUpload != null) {
    const node = se_AbortIncompleteMultipartUpload(input.AbortIncompleteMultipartUpload, context).withName(
      "AbortIncompleteMultipartUpload"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleRuleAndOperator
 */
const se_LifecycleRuleAndOperator = (input: LifecycleRuleAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = se_TagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  if (input.ObjectSizeGreaterThan != null) {
    const node = __XmlNode
      .of("ObjectSizeGreaterThanBytes", String(input.ObjectSizeGreaterThan))
      .withName("ObjectSizeGreaterThan");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectSizeLessThan != null) {
    const node = __XmlNode
      .of("ObjectSizeLessThanBytes", String(input.ObjectSizeLessThan))
      .withName("ObjectSizeLessThan");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleRuleFilter
 */
const se_LifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  LifecycleRuleFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = se_Tag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    ObjectSizeGreaterThan: (value) => {
      const node = __XmlNode.of("ObjectSizeGreaterThanBytes", String(value)).withName("ObjectSizeGreaterThan");
      bodyNode.addChildNode(node);
    },
    ObjectSizeLessThan: (value) => {
      const node = __XmlNode.of("ObjectSizeLessThanBytes", String(value)).withName("ObjectSizeLessThan");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = se_LifecycleRuleAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleRules
 */
const se_LifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_LifecycleRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlLoggingEnabled
 */
const se_LoggingEnabled = (input: LoggingEnabled, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingEnabled");
  if (input.TargetBucket != null) {
    const node = __XmlNode.of("TargetBucket", input.TargetBucket).withName("TargetBucket");
    bodyNode.addChildNode(node);
  }
  if (input.TargetGrants != null) {
    const nodes = se_TargetGrants(input.TargetGrants, context);
    const containerNode = new __XmlNode("TargetGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TargetPrefix != null) {
    const node = __XmlNode.of("TargetPrefix", input.TargetPrefix).withName("TargetPrefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMetadataEntry
 */
const se_MetadataEntry = (input: MetadataEntry, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetadataEntry");
  if (input.Name != null) {
    const node = __XmlNode.of("MetadataKey", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("MetadataValue", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMetrics
 */
const se_Metrics = (input: Metrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Metrics");
  if (input.Status != null) {
    const node = __XmlNode.of("MetricsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.EventThreshold != null) {
    const node = se_ReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMetricsAndOperator
 */
const se_MetricsAndOperator = (input: MetricsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = se_TagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AccessPointArn != null) {
    const node = __XmlNode.of("AccessPointArn", input.AccessPointArn).withName("AccessPointArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMetricsConfiguration
 */
const se_MetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("MetricsId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_MetricsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlMetricsFilter
 */
const se_MetricsFilter = (input: MetricsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsFilter");
  MetricsFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = se_Tag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    AccessPointArn: (value) => {
      const node = __XmlNode.of("AccessPointArn", value).withName("AccessPointArn");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = se_MetricsAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

/**
 * serializeAws_restXmlNoncurrentVersionExpiration
 */
const se_NoncurrentVersionExpiration = (input: NoncurrentVersionExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionExpiration");
  if (input.NoncurrentDays != null) {
    const node = __XmlNode.of("Days", String(input.NoncurrentDays)).withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  if (input.NewerNoncurrentVersions != null) {
    const node = __XmlNode
      .of("VersionCount", String(input.NewerNoncurrentVersions))
      .withName("NewerNoncurrentVersions");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransition
 */
const se_NoncurrentVersionTransition = (input: NoncurrentVersionTransition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionTransition");
  if (input.NoncurrentDays != null) {
    const node = __XmlNode.of("Days", String(input.NoncurrentDays)).withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("TransitionStorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.NewerNoncurrentVersions != null) {
    const node = __XmlNode
      .of("VersionCount", String(input.NewerNoncurrentVersions))
      .withName("NewerNoncurrentVersions");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransitionList
 */
const se_NoncurrentVersionTransitionList = (input: NoncurrentVersionTransition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_NoncurrentVersionTransition(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlNotificationConfiguration
 */
const se_NotificationConfiguration = (input: NotificationConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NotificationConfiguration");
  if (input.TopicConfigurations != null) {
    const nodes = se_TopicConfigurationList(input.TopicConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("TopicConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.QueueConfigurations != null) {
    const nodes = se_QueueConfigurationList(input.QueueConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("QueueConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.LambdaFunctionConfigurations != null) {
    const nodes = se_LambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("CloudFunctionConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.EventBridgeConfiguration != null) {
    const node = se_EventBridgeConfiguration(input.EventBridgeConfiguration, context).withName(
      "EventBridgeConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlNotificationConfigurationFilter
 */
const se_NotificationConfigurationFilter = (input: NotificationConfigurationFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("NotificationConfigurationFilter");
  if (input.Key != null) {
    const node = se_S3KeyFilter(input.Key, context).withName("S3Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectIdentifier
 */
const se_ObjectIdentifier = (input: ObjectIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectIdentifier");
  if (input.Key != null) {
    const node = __XmlNode.of("ObjectKey", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.VersionId != null) {
    const node = __XmlNode.of("ObjectVersionId", input.VersionId).withName("VersionId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectIdentifierList
 */
const se_ObjectIdentifierList = (input: ObjectIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ObjectIdentifier(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlObjectLockConfiguration
 */
const se_ObjectLockConfiguration = (input: ObjectLockConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockConfiguration");
  if (input.ObjectLockEnabled != null) {
    const node = __XmlNode.of("ObjectLockEnabled", input.ObjectLockEnabled).withName("ObjectLockEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Rule != null) {
    const node = se_ObjectLockRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectLockLegalHold
 */
const se_ObjectLockLegalHold = (input: ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockLegalHold");
  if (input.Status != null) {
    const node = __XmlNode.of("ObjectLockLegalHoldStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectLockRetention
 */
const se_ObjectLockRetention = (input: ObjectLockRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRetention");
  if (input.Mode != null) {
    const node = __XmlNode.of("ObjectLockRetentionMode", input.Mode).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.RetainUntilDate != null) {
    const node = __XmlNode
      .of("Date", (input.RetainUntilDate.toISOString().split(".")[0] + "Z").toString())
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectLockRule
 */
const se_ObjectLockRule = (input: ObjectLockRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRule");
  if (input.DefaultRetention != null) {
    const node = se_DefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOutputLocation
 */
const se_OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputLocation");
  if (input.S3 != null) {
    const node = se_S3Location(input.S3, context).withName("S3");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOutputSerialization
 */
const se_OutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputSerialization");
  if (input.CSV != null) {
    const node = se_CSVOutput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.JSON != null) {
    const node = se_JSONOutput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOwner
 */
const se_Owner = (input: Owner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Owner");
  if (input.DisplayName != null) {
    const node = __XmlNode.of("DisplayName", input.DisplayName).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOwnershipControls
 */
const se_OwnershipControls = (input: OwnershipControls, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControls");
  if (input.Rules != null) {
    const nodes = se_OwnershipControlsRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOwnershipControlsRule
 */
const se_OwnershipControlsRule = (input: OwnershipControlsRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControlsRule");
  if (input.ObjectOwnership != null) {
    const node = __XmlNode.of("ObjectOwnership", input.ObjectOwnership).withName("ObjectOwnership");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlOwnershipControlsRules
 */
const se_OwnershipControlsRules = (input: OwnershipControlsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_OwnershipControlsRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlParquetInput
 */
const se_ParquetInput = (input: ParquetInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ParquetInput");
  return bodyNode;
};

/**
 * serializeAws_restXmlPublicAccessBlockConfiguration
 */
const se_PublicAccessBlockConfiguration = (input: PublicAccessBlockConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PublicAccessBlockConfiguration");
  if (input.BlockPublicAcls != null) {
    const node = __XmlNode.of("Setting", String(input.BlockPublicAcls)).withName("BlockPublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.IgnorePublicAcls != null) {
    const node = __XmlNode.of("Setting", String(input.IgnorePublicAcls)).withName("IgnorePublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.BlockPublicPolicy != null) {
    const node = __XmlNode.of("Setting", String(input.BlockPublicPolicy)).withName("BlockPublicPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.RestrictPublicBuckets != null) {
    const node = __XmlNode.of("Setting", String(input.RestrictPublicBuckets)).withName("RestrictPublicBuckets");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueueConfiguration
 */
const se_QueueConfiguration = (input: QueueConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueueConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("NotificationId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.QueueArn != null) {
    const node = __XmlNode.of("QueueArn", input.QueueArn).withName("Queue");
    bodyNode.addChildNode(node);
  }
  if (input.Events != null) {
    const nodes = se_EventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = se_NotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlQueueConfigurationList
 */
const se_QueueConfigurationList = (input: QueueConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_QueueConfiguration(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlRedirect
 */
const se_Redirect = (input: Redirect, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Redirect");
  if (input.HostName != null) {
    const node = __XmlNode.of("HostName", input.HostName).withName("HostName");
    bodyNode.addChildNode(node);
  }
  if (input.HttpRedirectCode != null) {
    const node = __XmlNode.of("HttpRedirectCode", input.HttpRedirectCode).withName("HttpRedirectCode");
    bodyNode.addChildNode(node);
  }
  if (input.Protocol != null) {
    const node = __XmlNode.of("Protocol", input.Protocol).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyPrefixWith != null) {
    const node = __XmlNode.of("ReplaceKeyPrefixWith", input.ReplaceKeyPrefixWith).withName("ReplaceKeyPrefixWith");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyWith != null) {
    const node = __XmlNode.of("ReplaceKeyWith", input.ReplaceKeyWith).withName("ReplaceKeyWith");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRedirectAllRequestsTo
 */
const se_RedirectAllRequestsTo = (input: RedirectAllRequestsTo, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RedirectAllRequestsTo");
  if (input.HostName != null) {
    const node = __XmlNode.of("HostName", input.HostName).withName("HostName");
    bodyNode.addChildNode(node);
  }
  if (input.Protocol != null) {
    const node = __XmlNode.of("Protocol", input.Protocol).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicaModifications
 */
const se_ReplicaModifications = (input: ReplicaModifications, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicaModifications");
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicaModificationsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationConfiguration
 */
const se_ReplicationConfiguration = (input: ReplicationConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationConfiguration");
  if (input.Role != null) {
    const node = __XmlNode.of("Role", input.Role).withName("Role");
    bodyNode.addChildNode(node);
  }
  if (input.Rules != null) {
    const nodes = se_ReplicationRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationRule
 */
const se_ReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRule");
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Priority != null) {
    const node = __XmlNode.of("Priority", String(input.Priority)).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_ReplicationRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicationRuleStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.SourceSelectionCriteria != null) {
    const node = se_SourceSelectionCriteria(input.SourceSelectionCriteria, context).withName("SourceSelectionCriteria");
    bodyNode.addChildNode(node);
  }
  if (input.ExistingObjectReplication != null) {
    const node = se_ExistingObjectReplication(input.ExistingObjectReplication, context).withName(
      "ExistingObjectReplication"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Destination != null) {
    const node = se_Destination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.DeleteMarkerReplication != null) {
    const node = se_DeleteMarkerReplication(input.DeleteMarkerReplication, context).withName("DeleteMarkerReplication");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationRuleAndOperator
 */
const se_ReplicationRuleAndOperator = (input: ReplicationRuleAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRuleAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = se_TagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationRuleFilter
 */
const se_ReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRuleFilter");
  ReplicationRuleFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = se_Tag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = se_ReplicationRuleAndOperator(value, context).withName("And");
      bodyNode.addChildNode(node);
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bodyNode.addChildNode(new __XmlNode(name).addChildNode(value));
    },
  });
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationRules
 */
const se_ReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ReplicationRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlReplicationTime
 */
const se_ReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTime");
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicationTimeStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Time != null) {
    const node = se_ReplicationTimeValue(input.Time, context).withName("Time");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationTimeValue
 */
const se_ReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTimeValue");
  if (input.Minutes != null) {
    const node = __XmlNode.of("Minutes", String(input.Minutes)).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRequestPaymentConfiguration
 */
const se_RequestPaymentConfiguration = (input: RequestPaymentConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RequestPaymentConfiguration");
  if (input.Payer != null) {
    const node = __XmlNode.of("Payer", input.Payer).withName("Payer");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRequestProgress
 */
const se_RequestProgress = (input: RequestProgress, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RequestProgress");
  if (input.Enabled != null) {
    const node = __XmlNode.of("EnableRequestProgress", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRestoreRequest
 */
const se_RestoreRequest = (input: RestoreRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreRequest");
  if (input.Days != null) {
    const node = __XmlNode.of("Days", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobParameters != null) {
    const node = se_GlacierJobParameters(input.GlacierJobParameters, context).withName("GlacierJobParameters");
    bodyNode.addChildNode(node);
  }
  if (input.Type != null) {
    const node = __XmlNode.of("RestoreRequestType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  if (input.Tier != null) {
    const node = __XmlNode.of("Tier", input.Tier).withName("Tier");
    bodyNode.addChildNode(node);
  }
  if (input.Description != null) {
    const node = __XmlNode.of("Description", input.Description).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.SelectParameters != null) {
    const node = se_SelectParameters(input.SelectParameters, context).withName("SelectParameters");
    bodyNode.addChildNode(node);
  }
  if (input.OutputLocation != null) {
    const node = se_OutputLocation(input.OutputLocation, context).withName("OutputLocation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRoutingRule
 */
const se_RoutingRule = (input: RoutingRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RoutingRule");
  if (input.Condition != null) {
    const node = se_Condition(input.Condition, context).withName("Condition");
    bodyNode.addChildNode(node);
  }
  if (input.Redirect != null) {
    const node = se_Redirect(input.Redirect, context).withName("Redirect");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRoutingRules
 */
const se_RoutingRules = (input: RoutingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_RoutingRule(entry, context);
      return node.withName("RoutingRule");
    });
};

/**
 * serializeAws_restXmlS3KeyFilter
 */
const se_S3KeyFilter = (input: S3KeyFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3KeyFilter");
  if (input.FilterRules != null) {
    const nodes = se_FilterRuleList(input.FilterRules, context);
    nodes.map((node: any) => {
      node = node.withName("FilterRule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Location");
  if (input.BucketName != null) {
    const node = __XmlNode.of("BucketName", input.BucketName).withName("BucketName");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("LocationPrefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption != null) {
    const node = se_Encryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  if (input.CannedACL != null) {
    const node = __XmlNode.of("ObjectCannedACL", input.CannedACL).withName("CannedACL");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlList != null) {
    const nodes = se_Grants(input.AccessControlList, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Tagging != null) {
    const node = se_Tagging(input.Tagging, context).withName("Tagging");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata != null) {
    const nodes = se_UserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("StorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlScanRange
 */
const se_ScanRange = (input: ScanRange, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ScanRange");
  if (input.Start != null) {
    const node = __XmlNode.of("Start", String(input.Start)).withName("Start");
    bodyNode.addChildNode(node);
  }
  if (input.End != null) {
    const node = __XmlNode.of("End", String(input.End)).withName("End");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSelectParameters
 */
const se_SelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectParameters");
  if (input.InputSerialization != null) {
    const node = se_InputSerialization(input.InputSerialization, context).withName("InputSerialization");
    bodyNode.addChildNode(node);
  }
  if (input.ExpressionType != null) {
    const node = __XmlNode.of("ExpressionType", input.ExpressionType).withName("ExpressionType");
    bodyNode.addChildNode(node);
  }
  if (input.Expression != null) {
    const node = __XmlNode.of("Expression", input.Expression).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization != null) {
    const node = se_OutputSerialization(input.OutputSerialization, context).withName("OutputSerialization");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlServerSideEncryptionByDefault
 */
const se_ServerSideEncryptionByDefault = (input: ServerSideEncryptionByDefault, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionByDefault");
  if (input.SSEAlgorithm != null) {
    const node = __XmlNode.of("ServerSideEncryption", input.SSEAlgorithm).withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  if (input.KMSMasterKeyID != null) {
    const node = __XmlNode.of("SSEKMSKeyId", input.KMSMasterKeyID).withName("KMSMasterKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlServerSideEncryptionConfiguration
 */
const se_ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionConfiguration");
  if (input.Rules != null) {
    const nodes = se_ServerSideEncryptionRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlServerSideEncryptionRule
 */
const se_ServerSideEncryptionRule = (input: ServerSideEncryptionRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionRule");
  if (input.ApplyServerSideEncryptionByDefault != null) {
    const node = se_ServerSideEncryptionByDefault(input.ApplyServerSideEncryptionByDefault, context).withName(
      "ApplyServerSideEncryptionByDefault"
    );
    bodyNode.addChildNode(node);
  }
  if (input.BucketKeyEnabled != null) {
    const node = __XmlNode.of("BucketKeyEnabled", String(input.BucketKeyEnabled)).withName("BucketKeyEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlServerSideEncryptionRules
 */
const se_ServerSideEncryptionRules = (input: ServerSideEncryptionRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ServerSideEncryptionRule(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlSourceSelectionCriteria
 */
const se_SourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SourceSelectionCriteria");
  if (input.SseKmsEncryptedObjects != null) {
    const node = se_SseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName("SseKmsEncryptedObjects");
    bodyNode.addChildNode(node);
  }
  if (input.ReplicaModifications != null) {
    const node = se_ReplicaModifications(input.ReplicaModifications, context).withName("ReplicaModifications");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSSEKMS
 */
const se_SSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId != null) {
    const node = __XmlNode.of("SSEKMSKeyId", input.KeyId).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSseKmsEncryptedObjects
 */
const se_SseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SseKmsEncryptedObjects");
  if (input.Status != null) {
    const node = __XmlNode.of("SseKmsEncryptedObjectsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlSSES3
 */
const se_SSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageClassAnalysis
 */
const se_StorageClassAnalysis = (input: StorageClassAnalysis, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysis");
  if (input.DataExport != null) {
    const node = se_StorageClassAnalysisDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageClassAnalysisDataExport
 */
const se_StorageClassAnalysisDataExport = (input: StorageClassAnalysisDataExport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysisDataExport");
  if (input.OutputSchemaVersion != null) {
    const node = __XmlNode
      .of("StorageClassAnalysisSchemaVersion", input.OutputSchemaVersion)
      .withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Destination != null) {
    const node = se_AnalyticsExportDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tag");
  if (input.Key != null) {
    const node = __XmlNode.of("ObjectKey", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("Value", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTagging
 */
const se_Tagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet != null) {
    const nodes = se_TagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTagSet
 */
const se_TagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Tag(entry, context);
      return node.withName("Tag");
    });
};

/**
 * serializeAws_restXmlTargetGrant
 */
const se_TargetGrant = (input: TargetGrant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TargetGrant");
  if (input.Grantee != null) {
    const node = se_Grantee(input.Grantee, context).withName("Grantee");
    node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("BucketLogsPermission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTargetGrants
 */
const se_TargetGrants = (input: TargetGrant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_TargetGrant(entry, context);
      return node.withName("Grant");
    });
};

/**
 * serializeAws_restXmlTiering
 */
const se_Tiering = (input: Tiering, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tiering");
  if (input.Days != null) {
    const node = __XmlNode.of("IntelligentTieringDays", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.AccessTier != null) {
    const node = __XmlNode.of("IntelligentTieringAccessTier", input.AccessTier).withName("AccessTier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTieringList
 */
const se_TieringList = (input: Tiering[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Tiering(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlTopicConfiguration
 */
const se_TopicConfiguration = (input: TopicConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TopicConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("NotificationId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.TopicArn != null) {
    const node = __XmlNode.of("TopicArn", input.TopicArn).withName("Topic");
    bodyNode.addChildNode(node);
  }
  if (input.Events != null) {
    const nodes = se_EventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = se_NotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTopicConfigurationList
 */
const se_TopicConfigurationList = (input: TopicConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_TopicConfiguration(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlTransition
 */
const se_Transition = (input: Transition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Transition");
  if (input.Date != null) {
    const node = __XmlNode.of("Date", (input.Date.toISOString().split(".")[0] + "Z").toString()).withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days != null) {
    const node = __XmlNode.of("Days", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("TransitionStorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTransitionList
 */
const se_TransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Transition(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlUserMetadata
 */
const se_UserMetadata = (input: MetadataEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_MetadataEntry(entry, context);
      return node.withName("MetadataEntry");
    });
};

/**
 * serializeAws_restXmlVersioningConfiguration
 */
const se_VersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VersioningConfiguration");
  if (input.MFADelete != null) {
    const node = __XmlNode.of("MFADelete", input.MFADelete).withName("MfaDelete");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("BucketVersioningStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlWebsiteConfiguration
 */
const se_WebsiteConfiguration = (input: WebsiteConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WebsiteConfiguration");
  if (input.ErrorDocument != null) {
    const node = se_ErrorDocument(input.ErrorDocument, context).withName("ErrorDocument");
    bodyNode.addChildNode(node);
  }
  if (input.IndexDocument != null) {
    const node = se_IndexDocument(input.IndexDocument, context).withName("IndexDocument");
    bodyNode.addChildNode(node);
  }
  if (input.RedirectAllRequestsTo != null) {
    const node = se_RedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName("RedirectAllRequestsTo");
    bodyNode.addChildNode(node);
  }
  if (input.RoutingRules != null) {
    const nodes = se_RoutingRules(input.RoutingRules, context);
    const containerNode = new __XmlNode("RoutingRules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * deserializeAws_restXmlAbortIncompleteMultipartUpload
 */
const de_AbortIncompleteMultipartUpload = (output: any, context: __SerdeContext): AbortIncompleteMultipartUpload => {
  const contents: any = {};
  if (output["DaysAfterInitiation"] !== undefined) {
    contents.DaysAfterInitiation = __strictParseInt32(output["DaysAfterInitiation"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessControlTranslation
 */
const de_AccessControlTranslation = (output: any, context: __SerdeContext): AccessControlTranslation => {
  const contents: any = {};
  if (output["Owner"] !== undefined) {
    contents.Owner = __expectString(output["Owner"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAllowedHeaders
 */
const de_AllowedHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAllowedMethods
 */
const de_AllowedMethods = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAllowedOrigins
 */
const de_AllowedOrigins = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlAnalyticsAndOperator
 */
const de_AnalyticsAndOperator = (output: any, context: __SerdeContext): AnalyticsAndOperator => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAnalyticsConfiguration
 */
const de_AnalyticsConfiguration = (output: any, context: __SerdeContext): AnalyticsConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = de_AnalyticsFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["StorageClassAnalysis"] !== undefined) {
    contents.StorageClassAnalysis = de_StorageClassAnalysis(output["StorageClassAnalysis"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAnalyticsConfigurationList
 */
const de_AnalyticsConfigurationList = (output: any, context: __SerdeContext): AnalyticsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlAnalyticsExportDestination
 */
const de_AnalyticsExportDestination = (output: any, context: __SerdeContext): AnalyticsExportDestination => {
  const contents: any = {};
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = de_AnalyticsS3BucketDestination(output["S3BucketDestination"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAnalyticsFilter
 */
const de_AnalyticsFilter = (output: any, context: __SerdeContext): AnalyticsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: de_Tag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: de_AnalyticsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlAnalyticsS3BucketDestination
 */
const de_AnalyticsS3BucketDestination = (output: any, context: __SerdeContext): AnalyticsS3BucketDestination => {
  const contents: any = {};
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = __expectString(output["BucketAccountId"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBucket
 */
const de_Bucket = (output: any, context: __SerdeContext): Bucket => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationDate"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlBuckets
 */
const de_Buckets = (output: any, context: __SerdeContext): Bucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Bucket(entry, context);
    });
};

/**
 * deserializeAws_restXmlChecksum
 */
const de_Checksum = (output: any, context: __SerdeContext): Checksum => {
  const contents: any = {};
  if (output["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(output["ChecksumCRC32"]);
  }
  if (output["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(output["ChecksumCRC32C"]);
  }
  if (output["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(output["ChecksumSHA1"]);
  }
  if (output["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(output["ChecksumSHA256"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlChecksumAlgorithmList
 */
const de_ChecksumAlgorithmList = (output: any, context: __SerdeContext): ChecksumAlgorithm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCommonPrefix
 */
const de_CommonPrefix = (output: any, context: __SerdeContext): CommonPrefix => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCommonPrefixList
 */
const de_CommonPrefixList = (output: any, context: __SerdeContext): CommonPrefix[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommonPrefix(entry, context);
    });
};

/**
 * deserializeAws_restXmlCondition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  const contents: any = {};
  if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
    contents.HttpErrorCodeReturnedEquals = __expectString(output["HttpErrorCodeReturnedEquals"]);
  }
  if (output["KeyPrefixEquals"] !== undefined) {
    contents.KeyPrefixEquals = __expectString(output["KeyPrefixEquals"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlContinuationEvent
 */
const de_ContinuationEvent = (output: any, context: __SerdeContext): ContinuationEvent => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlCopyObjectResult
 */
const de_CopyObjectResult = (output: any, context: __SerdeContext): CopyObjectResult => {
  const contents: any = {};
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(output["ChecksumCRC32"]);
  }
  if (output["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(output["ChecksumCRC32C"]);
  }
  if (output["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(output["ChecksumSHA1"]);
  }
  if (output["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(output["ChecksumSHA256"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCopyPartResult
 */
const de_CopyPartResult = (output: any, context: __SerdeContext): CopyPartResult => {
  const contents: any = {};
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(output["ChecksumCRC32"]);
  }
  if (output["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(output["ChecksumCRC32C"]);
  }
  if (output["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(output["ChecksumSHA1"]);
  }
  if (output["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(output["ChecksumSHA256"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCORSRule
 */
const de_CORSRule = (output: any, context: __SerdeContext): CORSRule => {
  const contents: any = {};
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output.AllowedHeader === "") {
    contents.AllowedHeaders = [];
  } else if (output["AllowedHeader"] !== undefined) {
    contents.AllowedHeaders = de_AllowedHeaders(__getArrayIfSingleItem(output["AllowedHeader"]), context);
  }
  if (output.AllowedMethod === "") {
    contents.AllowedMethods = [];
  } else if (output["AllowedMethod"] !== undefined) {
    contents.AllowedMethods = de_AllowedMethods(__getArrayIfSingleItem(output["AllowedMethod"]), context);
  }
  if (output.AllowedOrigin === "") {
    contents.AllowedOrigins = [];
  } else if (output["AllowedOrigin"] !== undefined) {
    contents.AllowedOrigins = de_AllowedOrigins(__getArrayIfSingleItem(output["AllowedOrigin"]), context);
  }
  if (output.ExposeHeader === "") {
    contents.ExposeHeaders = [];
  } else if (output["ExposeHeader"] !== undefined) {
    contents.ExposeHeaders = de_ExposeHeaders(__getArrayIfSingleItem(output["ExposeHeader"]), context);
  }
  if (output["MaxAgeSeconds"] !== undefined) {
    contents.MaxAgeSeconds = __strictParseInt32(output["MaxAgeSeconds"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlCORSRules
 */
const de_CORSRules = (output: any, context: __SerdeContext): CORSRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CORSRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlDefaultRetention
 */
const de_DefaultRetention = (output: any, context: __SerdeContext): DefaultRetention => {
  const contents: any = {};
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["Years"] !== undefined) {
    contents.Years = __strictParseInt32(output["Years"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeletedObject
 */
const de_DeletedObject = (output: any, context: __SerdeContext): DeletedObject => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["DeleteMarker"] !== undefined) {
    contents.DeleteMarker = __parseBoolean(output["DeleteMarker"]);
  }
  if (output["DeleteMarkerVersionId"] !== undefined) {
    contents.DeleteMarkerVersionId = __expectString(output["DeleteMarkerVersionId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeletedObjects
 */
const de_DeletedObjects = (output: any, context: __SerdeContext): DeletedObject[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeletedObject(entry, context);
    });
};

/**
 * deserializeAws_restXmlDeleteMarkerEntry
 */
const de_DeleteMarkerEntry = (output: any, context: __SerdeContext): DeleteMarkerEntry => {
  const contents: any = {};
  if (output["Owner"] !== undefined) {
    contents.Owner = de_Owner(output["Owner"], context);
  }
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = __parseBoolean(output["IsLatest"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMarkerReplication
 */
const de_DeleteMarkerReplication = (output: any, context: __SerdeContext): DeleteMarkerReplication => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMarkers
 */
const de_DeleteMarkers = (output: any, context: __SerdeContext): DeleteMarkerEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeleteMarkerEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlDestination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["AccessControlTranslation"] !== undefined) {
    contents.AccessControlTranslation = de_AccessControlTranslation(output["AccessControlTranslation"], context);
  }
  if (output["EncryptionConfiguration"] !== undefined) {
    contents.EncryptionConfiguration = de_EncryptionConfiguration(output["EncryptionConfiguration"], context);
  }
  if (output["ReplicationTime"] !== undefined) {
    contents.ReplicationTime = de_ReplicationTime(output["ReplicationTime"], context);
  }
  if (output["Metrics"] !== undefined) {
    contents.Metrics = de_Metrics(output["Metrics"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  const contents: any = {};
  if (output["ReplicaKmsKeyID"] !== undefined) {
    contents.ReplicaKmsKeyID = __expectString(output["ReplicaKmsKeyID"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEndEvent
 */
const de_EndEvent = (output: any, context: __SerdeContext): EndEvent => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXml_Error
 */
const de__Error = (output: any, context: __SerdeContext): _Error => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlErrorDocument
 */
const de_ErrorDocument = (output: any, context: __SerdeContext): ErrorDocument => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlErrors
 */
const de_Errors = (output: any, context: __SerdeContext): _Error[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Error(entry, context);
    });
};

/**
 * deserializeAws_restXmlEventBridgeConfiguration
 */
const de_EventBridgeConfiguration = (output: any, context: __SerdeContext): EventBridgeConfiguration => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlEventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlExistingObjectReplication
 */
const de_ExistingObjectReplication = (output: any, context: __SerdeContext): ExistingObjectReplication => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlExposeHeaders
 */
const de_ExposeHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlFilterRule
 */
const de_FilterRule = (output: any, context: __SerdeContext): FilterRule => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlFilterRuleList
 */
const de_FilterRuleList = (output: any, context: __SerdeContext): FilterRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FilterRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlGetObjectAttributesParts
 */
const de_GetObjectAttributesParts = (output: any, context: __SerdeContext): GetObjectAttributesParts => {
  const contents: any = {};
  if (output["PartsCount"] !== undefined) {
    contents.TotalPartsCount = __strictParseInt32(output["PartsCount"]) as number;
  }
  if (output["PartNumberMarker"] !== undefined) {
    contents.PartNumberMarker = __expectString(output["PartNumberMarker"]);
  }
  if (output["NextPartNumberMarker"] !== undefined) {
    contents.NextPartNumberMarker = __expectString(output["NextPartNumberMarker"]);
  }
  if (output["MaxParts"] !== undefined) {
    contents.MaxParts = __strictParseInt32(output["MaxParts"]) as number;
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output.Part === "") {
    contents.Parts = [];
  } else if (output["Part"] !== undefined) {
    contents.Parts = de_PartsList(__getArrayIfSingleItem(output["Part"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrant
 */
const de_Grant = (output: any, context: __SerdeContext): Grant => {
  const contents: any = {};
  if (output["Grantee"] !== undefined) {
    contents.Grantee = de_Grantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrantee
 */
const de_Grantee = (output: any, context: __SerdeContext): Grantee => {
  const contents: any = {};
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  if (output["EmailAddress"] !== undefined) {
    contents.EmailAddress = __expectString(output["EmailAddress"]);
  }
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output["URI"] !== undefined) {
    contents.URI = __expectString(output["URI"]);
  }
  if (output["xsi:type"] !== undefined) {
    contents.Type = __expectString(output["xsi:type"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrants
 */
const de_Grants = (output: any, context: __SerdeContext): Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Grant(entry, context);
    });
};

/**
 * deserializeAws_restXmlIndexDocument
 */
const de_IndexDocument = (output: any, context: __SerdeContext): IndexDocument => {
  const contents: any = {};
  if (output["Suffix"] !== undefined) {
    contents.Suffix = __expectString(output["Suffix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInitiator
 */
const de_Initiator = (output: any, context: __SerdeContext): Initiator => {
  const contents: any = {};
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntelligentTieringAndOperator
 */
const de_IntelligentTieringAndOperator = (output: any, context: __SerdeContext): IntelligentTieringAndOperator => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntelligentTieringConfiguration
 */
const de_IntelligentTieringConfiguration = (output: any, context: __SerdeContext): IntelligentTieringConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_IntelligentTieringFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Tiering === "") {
    contents.Tierings = [];
  } else if (output["Tiering"] !== undefined) {
    contents.Tierings = de_TieringList(__getArrayIfSingleItem(output["Tiering"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntelligentTieringConfigurationList
 */
const de_IntelligentTieringConfigurationList = (
  output: any,
  context: __SerdeContext
): IntelligentTieringConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntelligentTieringConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlIntelligentTieringFilter
 */
const de_IntelligentTieringFilter = (output: any, context: __SerdeContext): IntelligentTieringFilter => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = de_Tag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = de_IntelligentTieringAndOperator(output["And"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryConfiguration
 */
const de_InventoryConfiguration = (output: any, context: __SerdeContext): InventoryConfiguration => {
  const contents: any = {};
  if (output["Destination"] !== undefined) {
    contents.Destination = de_InventoryDestination(output["Destination"], context);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_InventoryFilter(output["Filter"], context);
  }
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["IncludedObjectVersions"] !== undefined) {
    contents.IncludedObjectVersions = __expectString(output["IncludedObjectVersions"]);
  }
  if (output.OptionalFields === "") {
    contents.OptionalFields = [];
  } else if (output["OptionalFields"] !== undefined && output["OptionalFields"]["Field"] !== undefined) {
    contents.OptionalFields = de_InventoryOptionalFields(
      __getArrayIfSingleItem(output["OptionalFields"]["Field"]),
      context
    );
  }
  if (output["Schedule"] !== undefined) {
    contents.Schedule = de_InventorySchedule(output["Schedule"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryConfigurationList
 */
const de_InventoryConfigurationList = (output: any, context: __SerdeContext): InventoryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InventoryConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlInventoryDestination
 */
const de_InventoryDestination = (output: any, context: __SerdeContext): InventoryDestination => {
  const contents: any = {};
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = de_InventoryS3BucketDestination(output["S3BucketDestination"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryEncryption
 */
const de_InventoryEncryption = (output: any, context: __SerdeContext): InventoryEncryption => {
  const contents: any = {};
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = de_SSES3(output["SSE-S3"], context);
  }
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = de_SSEKMS(output["SSE-KMS"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryFilter
 */
const de_InventoryFilter = (output: any, context: __SerdeContext): InventoryFilter => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryOptionalFields
 */
const de_InventoryOptionalFields = (output: any, context: __SerdeContext): InventoryOptionalField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlInventoryS3BucketDestination
 */
const de_InventoryS3BucketDestination = (output: any, context: __SerdeContext): InventoryS3BucketDestination => {
  const contents: any = {};
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Encryption"] !== undefined) {
    contents.Encryption = de_InventoryEncryption(output["Encryption"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventorySchedule
 */
const de_InventorySchedule = (output: any, context: __SerdeContext): InventorySchedule => {
  const contents: any = {};
  if (output["Frequency"] !== undefined) {
    contents.Frequency = __expectString(output["Frequency"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionConfiguration
 */
const de_LambdaFunctionConfiguration = (output: any, context: __SerdeContext): LambdaFunctionConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CloudFunction"] !== undefined) {
    contents.LambdaFunctionArn = __expectString(output["CloudFunction"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = de_EventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_NotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionConfigurationList
 */
const de_LambdaFunctionConfigurationList = (output: any, context: __SerdeContext): LambdaFunctionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlLifecycleExpiration
 */
const de_LifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  const contents: any = {};
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
  }
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = __parseBoolean(output["ExpiredObjectDeleteMarker"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRule
 */
const de_LifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  const contents: any = {};
  if (output["Expiration"] !== undefined) {
    contents.Expiration = de_LifecycleExpiration(output["Expiration"], context);
  }
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = de_LifecycleRuleFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Transition === "") {
    contents.Transitions = [];
  } else if (output["Transition"] !== undefined) {
    contents.Transitions = de_TransitionList(__getArrayIfSingleItem(output["Transition"]), context);
  }
  if (output.NoncurrentVersionTransition === "") {
    contents.NoncurrentVersionTransitions = [];
  } else if (output["NoncurrentVersionTransition"] !== undefined) {
    contents.NoncurrentVersionTransitions = de_NoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransition"]),
      context
    );
  }
  if (output["NoncurrentVersionExpiration"] !== undefined) {
    contents.NoncurrentVersionExpiration = de_NoncurrentVersionExpiration(
      output["NoncurrentVersionExpiration"],
      context
    );
  }
  if (output["AbortIncompleteMultipartUpload"] !== undefined) {
    contents.AbortIncompleteMultipartUpload = de_AbortIncompleteMultipartUpload(
      output["AbortIncompleteMultipartUpload"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleAndOperator
 */
const de_LifecycleRuleAndOperator = (output: any, context: __SerdeContext): LifecycleRuleAndOperator => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = __strictParseLong(output["ObjectSizeGreaterThan"]) as number;
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = __strictParseLong(output["ObjectSizeLessThan"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleFilter
 */
const de_LifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: de_Tag(output["Tag"], context),
    };
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    return {
      ObjectSizeGreaterThan: __strictParseLong(output["ObjectSizeGreaterThan"]) as number,
    };
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    return {
      ObjectSizeLessThan: __strictParseLong(output["ObjectSizeLessThan"]) as number,
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: de_LifecycleRuleAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlLifecycleRules
 */
const de_LifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlLoggingEnabled
 */
const de_LoggingEnabled = (output: any, context: __SerdeContext): LoggingEnabled => {
  const contents: any = {};
  if (output["TargetBucket"] !== undefined) {
    contents.TargetBucket = __expectString(output["TargetBucket"]);
  }
  if (output.TargetGrants === "") {
    contents.TargetGrants = [];
  } else if (output["TargetGrants"] !== undefined && output["TargetGrants"]["Grant"] !== undefined) {
    contents.TargetGrants = de_TargetGrants(__getArrayIfSingleItem(output["TargetGrants"]["Grant"]), context);
  }
  if (output["TargetPrefix"] !== undefined) {
    contents.TargetPrefix = __expectString(output["TargetPrefix"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metrics => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EventThreshold"] !== undefined) {
    contents.EventThreshold = de_ReplicationTimeValue(output["EventThreshold"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetricsAndOperator
 */
const de_MetricsAndOperator = (output: any, context: __SerdeContext): MetricsAndOperator => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  if (output["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(output["AccessPointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetricsConfiguration
 */
const de_MetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = de_MetricsFilter(__expectUnion(output["Filter"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetricsConfigurationList
 */
const de_MetricsConfigurationList = (output: any, context: __SerdeContext): MetricsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricsConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlMetricsFilter
 */
const de_MetricsFilter = (output: any, context: __SerdeContext): MetricsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: de_Tag(output["Tag"], context),
    };
  }
  if (output["AccessPointArn"] !== undefined) {
    return {
      AccessPointArn: __expectString(output["AccessPointArn"]) as any,
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: de_MetricsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlMultipartUpload
 */
const de_MultipartUpload = (output: any, context: __SerdeContext): MultipartUpload => {
  const contents: any = {};
  if (output["UploadId"] !== undefined) {
    contents.UploadId = __expectString(output["UploadId"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Initiated"] !== undefined) {
    contents.Initiated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Initiated"]));
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = de_Owner(output["Owner"], context);
  }
  if (output["Initiator"] !== undefined) {
    contents.Initiator = de_Initiator(output["Initiator"], context);
  }
  if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = __expectString(output["ChecksumAlgorithm"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultipartUploadList
 */
const de_MultipartUploadList = (output: any, context: __SerdeContext): MultipartUpload[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultipartUpload(entry, context);
    });
};

/**
 * deserializeAws_restXmlNoncurrentVersionExpiration
 */
const de_NoncurrentVersionExpiration = (output: any, context: __SerdeContext): NoncurrentVersionExpiration => {
  const contents: any = {};
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = __strictParseInt32(output["NoncurrentDays"]) as number;
  }
  if (output["NewerNoncurrentVersions"] !== undefined) {
    contents.NewerNoncurrentVersions = __strictParseInt32(output["NewerNoncurrentVersions"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionTransition
 */
const de_NoncurrentVersionTransition = (output: any, context: __SerdeContext): NoncurrentVersionTransition => {
  const contents: any = {};
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = __strictParseInt32(output["NoncurrentDays"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["NewerNoncurrentVersions"] !== undefined) {
    contents.NewerNoncurrentVersions = __strictParseInt32(output["NewerNoncurrentVersions"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionTransitionList
 */
const de_NoncurrentVersionTransitionList = (output: any, context: __SerdeContext): NoncurrentVersionTransition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NoncurrentVersionTransition(entry, context);
    });
};

/**
 * deserializeAws_restXmlNotificationConfigurationFilter
 */
const de_NotificationConfigurationFilter = (output: any, context: __SerdeContext): NotificationConfigurationFilter => {
  const contents: any = {};
  if (output["S3Key"] !== undefined) {
    contents.Key = de_S3KeyFilter(output["S3Key"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXml_Object
 */
const de__Object = (output: any, context: __SerdeContext): _Object => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents.ChecksumAlgorithm = [];
  } else if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = de_ChecksumAlgorithmList(__getArrayIfSingleItem(output["ChecksumAlgorithm"]), context);
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = de_Owner(output["Owner"], context);
  }
  if (output["RestoreStatus"] !== undefined) {
    contents.RestoreStatus = de_RestoreStatus(output["RestoreStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectList
 */
const de_ObjectList = (output: any, context: __SerdeContext): _Object[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Object(entry, context);
    });
};

/**
 * deserializeAws_restXmlObjectLockConfiguration
 */
const de_ObjectLockConfiguration = (output: any, context: __SerdeContext): ObjectLockConfiguration => {
  const contents: any = {};
  if (output["ObjectLockEnabled"] !== undefined) {
    contents.ObjectLockEnabled = __expectString(output["ObjectLockEnabled"]);
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = de_ObjectLockRule(output["Rule"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockLegalHold
 */
const de_ObjectLockLegalHold = (output: any, context: __SerdeContext): ObjectLockLegalHold => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockRetention
 */
const de_ObjectLockRetention = (output: any, context: __SerdeContext): ObjectLockRetention => {
  const contents: any = {};
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RetainUntilDate"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockRule
 */
const de_ObjectLockRule = (output: any, context: __SerdeContext): ObjectLockRule => {
  const contents: any = {};
  if (output["DefaultRetention"] !== undefined) {
    contents.DefaultRetention = de_DefaultRetention(output["DefaultRetention"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectPart
 */
const de_ObjectPart = (output: any, context: __SerdeContext): ObjectPart => {
  const contents: any = {};
  if (output["PartNumber"] !== undefined) {
    contents.PartNumber = __strictParseInt32(output["PartNumber"]) as number;
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  if (output["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(output["ChecksumCRC32"]);
  }
  if (output["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(output["ChecksumCRC32C"]);
  }
  if (output["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(output["ChecksumSHA1"]);
  }
  if (output["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(output["ChecksumSHA256"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectVersion
 */
const de_ObjectVersion = (output: any, context: __SerdeContext): ObjectVersion => {
  const contents: any = {};
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents.ChecksumAlgorithm = [];
  } else if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = de_ChecksumAlgorithmList(__getArrayIfSingleItem(output["ChecksumAlgorithm"]), context);
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = __parseBoolean(output["IsLatest"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = de_Owner(output["Owner"], context);
  }
  if (output["RestoreStatus"] !== undefined) {
    contents.RestoreStatus = de_RestoreStatus(output["RestoreStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectVersionList
 */
const de_ObjectVersionList = (output: any, context: __SerdeContext): ObjectVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectVersion(entry, context);
    });
};

/**
 * deserializeAws_restXmlOwner
 */
const de_Owner = (output: any, context: __SerdeContext): Owner => {
  const contents: any = {};
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOwnershipControls
 */
const de_OwnershipControls = (output: any, context: __SerdeContext): OwnershipControls => {
  const contents: any = {};
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = de_OwnershipControlsRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOwnershipControlsRule
 */
const de_OwnershipControlsRule = (output: any, context: __SerdeContext): OwnershipControlsRule => {
  const contents: any = {};
  if (output["ObjectOwnership"] !== undefined) {
    contents.ObjectOwnership = __expectString(output["ObjectOwnership"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOwnershipControlsRules
 */
const de_OwnershipControlsRules = (output: any, context: __SerdeContext): OwnershipControlsRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OwnershipControlsRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlPart
 */
const de_Part = (output: any, context: __SerdeContext): Part => {
  const contents: any = {};
  if (output["PartNumber"] !== undefined) {
    contents.PartNumber = __strictParseInt32(output["PartNumber"]) as number;
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  if (output["ChecksumCRC32"] !== undefined) {
    contents.ChecksumCRC32 = __expectString(output["ChecksumCRC32"]);
  }
  if (output["ChecksumCRC32C"] !== undefined) {
    contents.ChecksumCRC32C = __expectString(output["ChecksumCRC32C"]);
  }
  if (output["ChecksumSHA1"] !== undefined) {
    contents.ChecksumSHA1 = __expectString(output["ChecksumSHA1"]);
  }
  if (output["ChecksumSHA256"] !== undefined) {
    contents.ChecksumSHA256 = __expectString(output["ChecksumSHA256"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlParts
 */
const de_Parts = (output: any, context: __SerdeContext): Part[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Part(entry, context);
    });
};

/**
 * deserializeAws_restXmlPartsList
 */
const de_PartsList = (output: any, context: __SerdeContext): ObjectPart[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectPart(entry, context);
    });
};

/**
 * deserializeAws_restXmlPolicyStatus
 */
const de_PolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  const contents: any = {};
  if (output["IsPublic"] !== undefined) {
    contents.IsPublic = __parseBoolean(output["IsPublic"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlProgress
 */
const de_Progress = (output: any, context: __SerdeContext): Progress => {
  const contents: any = {};
  if (output["BytesScanned"] !== undefined) {
    contents.BytesScanned = __strictParseLong(output["BytesScanned"]) as number;
  }
  if (output["BytesProcessed"] !== undefined) {
    contents.BytesProcessed = __strictParseLong(output["BytesProcessed"]) as number;
  }
  if (output["BytesReturned"] !== undefined) {
    contents.BytesReturned = __strictParseLong(output["BytesReturned"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicAccessBlockConfiguration
 */
const de_PublicAccessBlockConfiguration = (output: any, context: __SerdeContext): PublicAccessBlockConfiguration => {
  const contents: any = {};
  if (output["BlockPublicAcls"] !== undefined) {
    contents.BlockPublicAcls = __parseBoolean(output["BlockPublicAcls"]);
  }
  if (output["IgnorePublicAcls"] !== undefined) {
    contents.IgnorePublicAcls = __parseBoolean(output["IgnorePublicAcls"]);
  }
  if (output["BlockPublicPolicy"] !== undefined) {
    contents.BlockPublicPolicy = __parseBoolean(output["BlockPublicPolicy"]);
  }
  if (output["RestrictPublicBuckets"] !== undefined) {
    contents.RestrictPublicBuckets = __parseBoolean(output["RestrictPublicBuckets"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueueConfiguration
 */
const de_QueueConfiguration = (output: any, context: __SerdeContext): QueueConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Queue"] !== undefined) {
    contents.QueueArn = __expectString(output["Queue"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = de_EventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_NotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueueConfigurationList
 */
const de_QueueConfigurationList = (output: any, context: __SerdeContext): QueueConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlRedirect
 */
const de_Redirect = (output: any, context: __SerdeContext): Redirect => {
  const contents: any = {};
  if (output["HostName"] !== undefined) {
    contents.HostName = __expectString(output["HostName"]);
  }
  if (output["HttpRedirectCode"] !== undefined) {
    contents.HttpRedirectCode = __expectString(output["HttpRedirectCode"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["ReplaceKeyPrefixWith"] !== undefined) {
    contents.ReplaceKeyPrefixWith = __expectString(output["ReplaceKeyPrefixWith"]);
  }
  if (output["ReplaceKeyWith"] !== undefined) {
    contents.ReplaceKeyWith = __expectString(output["ReplaceKeyWith"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRedirectAllRequestsTo
 */
const de_RedirectAllRequestsTo = (output: any, context: __SerdeContext): RedirectAllRequestsTo => {
  const contents: any = {};
  if (output["HostName"] !== undefined) {
    contents.HostName = __expectString(output["HostName"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicaModifications
 */
const de_ReplicaModifications = (output: any, context: __SerdeContext): ReplicaModifications => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationConfiguration
 */
const de_ReplicationConfiguration = (output: any, context: __SerdeContext): ReplicationConfiguration => {
  const contents: any = {};
  if (output["Role"] !== undefined) {
    contents.Role = __expectString(output["Role"]);
  }
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = de_ReplicationRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRule
 */
const de_ReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  const contents: any = {};
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = de_ReplicationRuleFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SourceSelectionCriteria"] !== undefined) {
    contents.SourceSelectionCriteria = de_SourceSelectionCriteria(output["SourceSelectionCriteria"], context);
  }
  if (output["ExistingObjectReplication"] !== undefined) {
    contents.ExistingObjectReplication = de_ExistingObjectReplication(output["ExistingObjectReplication"], context);
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = de_Destination(output["Destination"], context);
  }
  if (output["DeleteMarkerReplication"] !== undefined) {
    contents.DeleteMarkerReplication = de_DeleteMarkerReplication(output["DeleteMarkerReplication"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleAndOperator
 */
const de_ReplicationRuleAndOperator = (output: any, context: __SerdeContext): ReplicationRuleAndOperator => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleFilter
 */
const de_ReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: de_Tag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: de_ReplicationRuleAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlReplicationRules
 */
const de_ReplicationRules = (output: any, context: __SerdeContext): ReplicationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlReplicationTime
 */
const de_ReplicationTime = (output: any, context: __SerdeContext): ReplicationTime => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Time"] !== undefined) {
    contents.Time = de_ReplicationTimeValue(output["Time"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationTimeValue
 */
const de_ReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  const contents: any = {};
  if (output["Minutes"] !== undefined) {
    contents.Minutes = __strictParseInt32(output["Minutes"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlRestoreStatus
 */
const de_RestoreStatus = (output: any, context: __SerdeContext): RestoreStatus => {
  const contents: any = {};
  if (output["IsRestoreInProgress"] !== undefined) {
    contents.IsRestoreInProgress = __parseBoolean(output["IsRestoreInProgress"]);
  }
  if (output["RestoreExpiryDate"] !== undefined) {
    contents.RestoreExpiryDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RestoreExpiryDate"]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlRoutingRule
 */
const de_RoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  const contents: any = {};
  if (output["Condition"] !== undefined) {
    contents.Condition = de_Condition(output["Condition"], context);
  }
  if (output["Redirect"] !== undefined) {
    contents.Redirect = de_Redirect(output["Redirect"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRoutingRules
 */
const de_RoutingRules = (output: any, context: __SerdeContext): RoutingRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutingRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3KeyFilter
 */
const de_S3KeyFilter = (output: any, context: __SerdeContext): S3KeyFilter => {
  const contents: any = {};
  if (output.FilterRule === "") {
    contents.FilterRules = [];
  } else if (output["FilterRule"] !== undefined) {
    contents.FilterRules = de_FilterRuleList(__getArrayIfSingleItem(output["FilterRule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionByDefault
 */
const de_ServerSideEncryptionByDefault = (output: any, context: __SerdeContext): ServerSideEncryptionByDefault => {
  const contents: any = {};
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = __expectString(output["SSEAlgorithm"]);
  }
  if (output["KMSMasterKeyID"] !== undefined) {
    contents.KMSMasterKeyID = __expectString(output["KMSMasterKeyID"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionConfiguration
 */
const de_ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  const contents: any = {};
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = de_ServerSideEncryptionRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionRule
 */
const de_ServerSideEncryptionRule = (output: any, context: __SerdeContext): ServerSideEncryptionRule => {
  const contents: any = {};
  if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
    contents.ApplyServerSideEncryptionByDefault = de_ServerSideEncryptionByDefault(
      output["ApplyServerSideEncryptionByDefault"],
      context
    );
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = __parseBoolean(output["BucketKeyEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionRules
 */
const de_ServerSideEncryptionRules = (output: any, context: __SerdeContext): ServerSideEncryptionRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerSideEncryptionRule(entry, context);
    });
};

/**
 * deserializeAws_restXmlSourceSelectionCriteria
 */
const de_SourceSelectionCriteria = (output: any, context: __SerdeContext): SourceSelectionCriteria => {
  const contents: any = {};
  if (output["SseKmsEncryptedObjects"] !== undefined) {
    contents.SseKmsEncryptedObjects = de_SseKmsEncryptedObjects(output["SseKmsEncryptedObjects"], context);
  }
  if (output["ReplicaModifications"] !== undefined) {
    contents.ReplicaModifications = de_ReplicaModifications(output["ReplicaModifications"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSEKMS
 */
const de_SSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  const contents: any = {};
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSseKmsEncryptedObjects
 */
const de_SseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSES3
 */
const de_SSES3 = (output: any, context: __SerdeContext): SSES3 => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlStats
 */
const de_Stats = (output: any, context: __SerdeContext): Stats => {
  const contents: any = {};
  if (output["BytesScanned"] !== undefined) {
    contents.BytesScanned = __strictParseLong(output["BytesScanned"]) as number;
  }
  if (output["BytesProcessed"] !== undefined) {
    contents.BytesProcessed = __strictParseLong(output["BytesProcessed"]) as number;
  }
  if (output["BytesReturned"] !== undefined) {
    contents.BytesReturned = __strictParseLong(output["BytesReturned"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageClassAnalysis
 */
const de_StorageClassAnalysis = (output: any, context: __SerdeContext): StorageClassAnalysis => {
  const contents: any = {};
  if (output["DataExport"] !== undefined) {
    contents.DataExport = de_StorageClassAnalysisDataExport(output["DataExport"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageClassAnalysisDataExport
 */
const de_StorageClassAnalysisDataExport = (output: any, context: __SerdeContext): StorageClassAnalysisDataExport => {
  const contents: any = {};
  if (output["OutputSchemaVersion"] !== undefined) {
    contents.OutputSchemaVersion = __expectString(output["OutputSchemaVersion"]);
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = de_AnalyticsExportDestination(output["Destination"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTagSet
 */
const de_TagSet = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_restXmlTargetGrant
 */
const de_TargetGrant = (output: any, context: __SerdeContext): TargetGrant => {
  const contents: any = {};
  if (output["Grantee"] !== undefined) {
    contents.Grantee = de_Grantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTargetGrants
 */
const de_TargetGrants = (output: any, context: __SerdeContext): TargetGrant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetGrant(entry, context);
    });
};

/**
 * deserializeAws_restXmlTiering
 */
const de_Tiering = (output: any, context: __SerdeContext): Tiering => {
  const contents: any = {};
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["AccessTier"] !== undefined) {
    contents.AccessTier = __expectString(output["AccessTier"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTieringList
 */
const de_TieringList = (output: any, context: __SerdeContext): Tiering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tiering(entry, context);
    });
};

/**
 * deserializeAws_restXmlTopicConfiguration
 */
const de_TopicConfiguration = (output: any, context: __SerdeContext): TopicConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Topic"] !== undefined) {
    contents.TopicArn = __expectString(output["Topic"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = de_EventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_NotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTopicConfigurationList
 */
const de_TopicConfigurationList = (output: any, context: __SerdeContext): TopicConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TopicConfiguration(entry, context);
    });
};

/**
 * deserializeAws_restXmlTransition
 */
const de_Transition = (output: any, context: __SerdeContext): Transition => {
  const contents: any = {};
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Date"]));
  }
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTransitionList
 */
const de_TransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Transition(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data?.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
