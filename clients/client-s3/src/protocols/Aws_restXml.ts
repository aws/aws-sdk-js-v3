// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  dateToUtcString as __dateToUtcString,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  map as __map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
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

export const serializeAws_restXmlAbortMultipartUploadCommand = async (
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

export const serializeAws_restXmlCompleteMultipartUploadCommand = async (
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
    body = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
  }
  let contents: any;
  if (input.MultipartUpload !== undefined) {
    contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
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

export const serializeAws_restXmlCopyObjectCommand = async (
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

export const serializeAws_restXmlCreateBucketCommand = async (
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
    body = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
  }
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
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

export const serializeAws_restXmlCreateMultipartUploadCommand = async (
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

export const serializeAws_restXmlDeleteBucketCommand = async (
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

export const serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteBucketCorsCommand = async (
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

export const serializeAws_restXmlDeleteBucketEncryptionCommand = async (
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

export const serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteBucketLifecycleCommand = async (
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

export const serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (
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

export const serializeAws_restXmlDeleteBucketPolicyCommand = async (
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

export const serializeAws_restXmlDeleteBucketReplicationCommand = async (
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

export const serializeAws_restXmlDeleteBucketTaggingCommand = async (
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

export const serializeAws_restXmlDeleteBucketWebsiteCommand = async (
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

export const serializeAws_restXmlDeleteObjectCommand = async (
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

export const serializeAws_restXmlDeleteObjectsCommand = async (
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
    body = serializeAws_restXmlDelete(input.Delete, context);
  }
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlDelete(input.Delete, context);
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

export const serializeAws_restXmlDeleteObjectTaggingCommand = async (
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

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
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

export const serializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (
  input: GetBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
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

export const serializeAws_restXmlGetBucketAclCommand = async (
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

export const serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketCorsCommand = async (
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

export const serializeAws_restXmlGetBucketEncryptionCommand = async (
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

export const serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketInventoryConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketLocationCommand = async (
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

export const serializeAws_restXmlGetBucketLoggingCommand = async (
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

export const serializeAws_restXmlGetBucketMetricsConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketNotificationConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketOwnershipControlsCommand = async (
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

export const serializeAws_restXmlGetBucketPolicyCommand = async (
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

export const serializeAws_restXmlGetBucketPolicyStatusCommand = async (
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

export const serializeAws_restXmlGetBucketReplicationCommand = async (
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

export const serializeAws_restXmlGetBucketRequestPaymentCommand = async (
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

export const serializeAws_restXmlGetBucketTaggingCommand = async (
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

export const serializeAws_restXmlGetBucketVersioningCommand = async (
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

export const serializeAws_restXmlGetBucketWebsiteCommand = async (
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

export const serializeAws_restXmlGetObjectCommand = async (
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

export const serializeAws_restXmlGetObjectAclCommand = async (
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

export const serializeAws_restXmlGetObjectAttributesCommand = async (
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

export const serializeAws_restXmlGetObjectLegalHoldCommand = async (
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

export const serializeAws_restXmlGetObjectLockConfigurationCommand = async (
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

export const serializeAws_restXmlGetObjectRetentionCommand = async (
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

export const serializeAws_restXmlGetObjectTaggingCommand = async (
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

export const serializeAws_restXmlGetObjectTorrentCommand = async (
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

export const serializeAws_restXmlGetPublicAccessBlockCommand = async (
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

export const serializeAws_restXmlHeadBucketCommand = async (
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

export const serializeAws_restXmlHeadObjectCommand = async (
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

export const serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (
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

export const serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (
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

export const serializeAws_restXmlListBucketInventoryConfigurationsCommand = async (
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

export const serializeAws_restXmlListBucketMetricsConfigurationsCommand = async (
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

export const serializeAws_restXmlListBucketsCommand = async (
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

export const serializeAws_restXmlListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
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

export const serializeAws_restXmlListObjectsCommand = async (
  input: ListObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
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

export const serializeAws_restXmlListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-request-payer": input.RequestPayer!,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
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

export const serializeAws_restXmlListObjectVersionsCommand = async (
  input: ListObjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
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

export const serializeAws_restXmlListPartsCommand = async (
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

export const serializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (
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
    body = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
  }
  let contents: any;
  if (input.AccelerateConfiguration !== undefined) {
    contents = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
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

export const serializeAws_restXmlPutBucketAclCommand = async (
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
    body = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
  }
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
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

export const serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (
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
    body = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
  }
  let contents: any;
  if (input.AnalyticsConfiguration !== undefined) {
    contents = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
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

export const serializeAws_restXmlPutBucketCorsCommand = async (
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
    body = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
  }
  let contents: any;
  if (input.CORSConfiguration !== undefined) {
    contents = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
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

export const serializeAws_restXmlPutBucketEncryptionCommand = async (
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
    body = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
  }
  let contents: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    contents = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
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

export const serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (
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
    body = serializeAws_restXmlIntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
  }
  let contents: any;
  if (input.IntelligentTieringConfiguration !== undefined) {
    contents = serializeAws_restXmlIntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
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

export const serializeAws_restXmlPutBucketInventoryConfigurationCommand = async (
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
    body = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
  }
  let contents: any;
  if (input.InventoryConfiguration !== undefined) {
    contents = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
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

export const serializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
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
    body = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
  }
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
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

export const serializeAws_restXmlPutBucketLoggingCommand = async (
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
    body = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
  }
  let contents: any;
  if (input.BucketLoggingStatus !== undefined) {
    contents = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
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

export const serializeAws_restXmlPutBucketMetricsConfigurationCommand = async (
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
    body = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
  }
  let contents: any;
  if (input.MetricsConfiguration !== undefined) {
    contents = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
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

export const serializeAws_restXmlPutBucketNotificationConfigurationCommand = async (
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
    body = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
  }
  let contents: any;
  if (input.NotificationConfiguration !== undefined) {
    contents = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
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

export const serializeAws_restXmlPutBucketOwnershipControlsCommand = async (
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
    body = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
  }
  let contents: any;
  if (input.OwnershipControls !== undefined) {
    contents = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
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

export const serializeAws_restXmlPutBucketPolicyCommand = async (
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

export const serializeAws_restXmlPutBucketReplicationCommand = async (
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
    body = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
  }
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
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

export const serializeAws_restXmlPutBucketRequestPaymentCommand = async (
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
    body = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
  }
  let contents: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    contents = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
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

export const serializeAws_restXmlPutBucketTaggingCommand = async (
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
    body = serializeAws_restXmlTagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
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

export const serializeAws_restXmlPutBucketVersioningCommand = async (
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
    body = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
  }
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
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

export const serializeAws_restXmlPutBucketWebsiteCommand = async (
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
    body = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
  }
  let contents: any;
  if (input.WebsiteConfiguration !== undefined) {
    contents = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
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

export const serializeAws_restXmlPutObjectCommand = async (
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

export const serializeAws_restXmlPutObjectAclCommand = async (
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
    body = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
  }
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
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

export const serializeAws_restXmlPutObjectLegalHoldCommand = async (
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
    body = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
  }
  let contents: any;
  if (input.LegalHold !== undefined) {
    contents = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
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

export const serializeAws_restXmlPutObjectLockConfigurationCommand = async (
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
    body = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
  }
  let contents: any;
  if (input.ObjectLockConfiguration !== undefined) {
    contents = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
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

export const serializeAws_restXmlPutObjectRetentionCommand = async (
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
    body = serializeAws_restXmlObjectLockRetention(input.Retention, context);
  }
  let contents: any;
  if (input.Retention !== undefined) {
    contents = serializeAws_restXmlObjectLockRetention(input.Retention, context);
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

export const serializeAws_restXmlPutObjectTaggingCommand = async (
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
    body = serializeAws_restXmlTagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
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

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
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
    body = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
  }
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
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

export const serializeAws_restXmlRestoreObjectCommand = async (
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
    body = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
  }
  let contents: any;
  if (input.RestoreRequest !== undefined) {
    contents = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
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

export const serializeAws_restXmlSelectObjectContentCommand = async (
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
    const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName(
      "InputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization !== undefined) {
    const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName(
      "OutputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RequestProgress !== undefined) {
    const node = serializeAws_restXmlRequestProgress(input.RequestProgress, context).withName("RequestProgress");
    bodyNode.addChildNode(node);
  }
  if (input.ScanRange !== undefined) {
    const node = serializeAws_restXmlScanRange(input.ScanRange, context).withName("ScanRange");
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

export const serializeAws_restXmlUploadPartCommand = async (
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

export const serializeAws_restXmlUploadPartCopyCommand = async (
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

export const serializeAws_restXmlWriteGetObjectResponseCommand = async (
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

export const deserializeAws_restXmlAbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlAbortMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlAbortMultipartUploadCommandError = async (
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
      throw await deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context);
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

const deserializeAws_restXmlCompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlCopyObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCopyObjectCommandError(output, context);
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
  contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
  return contents;
};

const deserializeAws_restXmlCopyObjectCommandError = async (
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
      throw await deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    Location: [, output.headers["location"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlCreateBucketCommandError = async (
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
      throw await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMultipartUploadCommandError(output, context);
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

const deserializeAws_restXmlCreateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectCommandError(output, context);
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

const deserializeAws_restXmlDeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deleted === "") {
    contents.Deleted = [];
  } else if (data["Deleted"] !== undefined) {
    contents.Deleted = deserializeAws_restXmlDeletedObjects(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  } else if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return contents;
};

const deserializeAws_restXmlDeleteObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Status"] !== undefined) {
    contents.Status = __expectString(data["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents.Grants = [];
  } else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.AnalyticsConfiguration = deserializeAws_restXmlAnalyticsConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CORSRule === "") {
    contents.CORSRules = [];
  } else if (data["CORSRule"] !== undefined) {
    contents.CORSRules = deserializeAws_restXmlCORSRules(__getArrayIfSingleItem(data["CORSRule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.IntelligentTieringConfiguration = deserializeAws_restXmlIntelligentTieringConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InventoryConfiguration = deserializeAws_restXmlInventoryConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rule === "") {
    contents.Rules = [];
  } else if (data["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLocationCommandError(output, context);
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

const deserializeAws_restXmlGetBucketLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLoggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["LoggingEnabled"] !== undefined) {
    contents.LoggingEnabled = deserializeAws_restXmlLoggingEnabled(data["LoggingEnabled"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MetricsConfiguration = deserializeAws_restXmlMetricsConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["EventBridgeConfiguration"] !== undefined) {
    contents.EventBridgeConfiguration = deserializeAws_restXmlEventBridgeConfiguration(
      data["EventBridgeConfiguration"],
      context
    );
  }
  if (data.CloudFunctionConfiguration === "") {
    contents.LambdaFunctionConfigurations = [];
  } else if (data["CloudFunctionConfiguration"] !== undefined) {
    contents.LambdaFunctionConfigurations = deserializeAws_restXmlLambdaFunctionConfigurationList(
      __getArrayIfSingleItem(data["CloudFunctionConfiguration"]),
      context
    );
  }
  if (data.QueueConfiguration === "") {
    contents.QueueConfigurations = [];
  } else if (data["QueueConfiguration"] !== undefined) {
    contents.QueueConfigurations = deserializeAws_restXmlQueueConfigurationList(
      __getArrayIfSingleItem(data["QueueConfiguration"]),
      context
    );
  }
  if (data.TopicConfiguration === "") {
    contents.TopicConfigurations = [];
  } else if (data["TopicConfiguration"] !== undefined) {
    contents.TopicConfigurations = deserializeAws_restXmlTopicConfigurationList(
      __getArrayIfSingleItem(data["TopicConfiguration"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OwnershipControls = deserializeAws_restXmlOwnershipControls(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.Policy = __expectString(data);
  return contents;
};

const deserializeAws_restXmlGetBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ReplicationConfiguration = deserializeAws_restXmlReplicationConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context);
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

const deserializeAws_restXmlGetBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents.TagSet = [];
  } else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketVersioningCommandError(output, context);
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

const deserializeAws_restXmlGetBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ErrorDocument"] !== undefined) {
    contents.ErrorDocument = deserializeAws_restXmlErrorDocument(data["ErrorDocument"], context);
  }
  if (data["IndexDocument"] !== undefined) {
    contents.IndexDocument = deserializeAws_restXmlIndexDocument(data["IndexDocument"], context);
  }
  if (data["RedirectAllRequestsTo"] !== undefined) {
    contents.RedirectAllRequestsTo = deserializeAws_restXmlRedirectAllRequestsTo(
      data["RedirectAllRequestsTo"],
      context
    );
  }
  if (data.RoutingRules === "") {
    contents.RoutingRules = [];
  } else if (data["RoutingRules"] !== undefined && data["RoutingRules"]["RoutingRule"] !== undefined) {
    contents.RoutingRules = deserializeAws_restXmlRoutingRules(
      __getArrayIfSingleItem(data["RoutingRules"]["RoutingRule"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectCommandError(output, context);
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
      () => __expectNonNull(__parseRfc3339DateTime(output.headers["x-amz-object-lock-retain-until-date"])),
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

const deserializeAws_restXmlGetObjectCommandError = async (
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
      throw await deserializeAws_restXmlInvalidObjectStateResponse(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents.Grants = [];
  } else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetObjectAclCommandError = async (
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
      throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectAttributesCommandError(output, context);
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
    contents.Checksum = deserializeAws_restXmlChecksum(data["Checksum"], context);
  }
  if (data["ETag"] !== undefined) {
    contents.ETag = __expectString(data["ETag"]);
  }
  if (data["ObjectParts"] !== undefined) {
    contents.ObjectParts = deserializeAws_restXmlGetObjectAttributesParts(data["ObjectParts"], context);
  }
  if (data["ObjectSize"] !== undefined) {
    contents.ObjectSize = __strictParseLong(data["ObjectSize"]) as number;
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(data["StorageClass"]);
  }
  return contents;
};

const deserializeAws_restXmlGetObjectAttributesCommandError = async (
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
      throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.LegalHold = deserializeAws_restXmlObjectLockLegalHold(data, context);
  return contents;
};

const deserializeAws_restXmlGetObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Retention = deserializeAws_restXmlObjectLockRetention(data, context);
  return contents;
};

const deserializeAws_restXmlGetObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents.TagSet = [];
  } else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetObjectTorrentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTorrentCommandError(output, context);
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

const deserializeAws_restXmlGetObjectTorrentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlHeadBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlHeadBucketCommandError = async (
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
      throw await deserializeAws_restXmlNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlHeadObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadObjectCommandError(output, context);
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
      () => __expectNonNull(__parseRfc3339DateTime(output.headers["x-amz-object-lock-retain-until-date"])),
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

const deserializeAws_restXmlHeadObjectCommandError = async (
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
      throw await deserializeAws_restXmlNotFoundResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalyticsConfiguration === "") {
    contents.AnalyticsConfigurationList = [];
  } else if (data["AnalyticsConfiguration"] !== undefined) {
    contents.AnalyticsConfigurationList = deserializeAws_restXmlAnalyticsConfigurationList(
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

const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError(output, context);
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
    contents.IntelligentTieringConfigurationList = deserializeAws_restXmlIntelligentTieringConfigurationList(
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

const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListBucketInventoryConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context);
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
    contents.InventoryConfigurationList = deserializeAws_restXmlInventoryConfigurationList(
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

const deserializeAws_restXmlListBucketInventoryConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListBucketMetricsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context);
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
    contents.MetricsConfigurationList = deserializeAws_restXmlMetricsConfigurationList(
      __getArrayIfSingleItem(data["MetricsConfiguration"]),
      context
    );
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = __expectString(data["NextContinuationToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListBucketMetricsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Buckets === "") {
    contents.Buckets = [];
  } else if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(data["Buckets"]["Bucket"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlListBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMultipartUploadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
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
    contents.Uploads = deserializeAws_restXmlMultipartUploadList(__getArrayIfSingleItem(data["Upload"]), context);
  }
  return contents;
};

const deserializeAws_restXmlListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  } else if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
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

const deserializeAws_restXmlListObjectsCommandError = async (
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
      throw await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  } else if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
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

const deserializeAws_restXmlListObjectsV2CommandError = async (
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
      throw await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListObjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  } else if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.DeleteMarker === "") {
    contents.DeleteMarkers = [];
  } else if (data["DeleteMarker"] !== undefined) {
    contents.DeleteMarkers = deserializeAws_restXmlDeleteMarkers(__getArrayIfSingleItem(data["DeleteMarker"]), context);
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
    contents.Versions = deserializeAws_restXmlObjectVersionList(__getArrayIfSingleItem(data["Version"]), context);
  }
  return contents;
};

const deserializeAws_restXmlListObjectVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListPartsCommandError(output, context);
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
    contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
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
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  if (data["PartNumberMarker"] !== undefined) {
    contents.PartNumberMarker = __expectString(data["PartNumberMarker"]);
  }
  if (data.Part === "") {
    contents.Parts = [];
  } else if (data["Part"] !== undefined) {
    contents.Parts = deserializeAws_restXmlParts(__getArrayIfSingleItem(data["Part"]), context);
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(data["StorageClass"]);
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = __expectString(data["UploadId"]);
  }
  return contents;
};

const deserializeAws_restXmlListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketCorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketEncryptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLoggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketOwnershipControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketVersioningCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketWebsiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectCommandError(output, context);
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

const deserializeAws_restXmlPutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectAclCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutObjectAclCommandError = async (
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
      throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlPutObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    VersionId: [, output.headers["x-amz-version-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlRestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRestoreObjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestCharged: [, output.headers["x-amz-request-charged"]],
    RestoreOutputPath: [, output.headers["x-amz-restore-output-path"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlRestoreObjectCommandError = async (
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
      throw await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlSelectObjectContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlSelectObjectContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.Payload = deserializeAws_restXmlSelectObjectContentEventStream(data, context);
  return contents;
};

const deserializeAws_restXmlSelectObjectContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlUploadPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCommandError(output, context);
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

const deserializeAws_restXmlUploadPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlUploadPartCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCopyCommandError(output, context);
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
  contents.CopyPartResult = deserializeAws_restXmlCopyPartResult(data, context);
  return contents;
};

const deserializeAws_restXmlUploadPartCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlWriteGetObjectResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteGetObjectResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlWriteGetObjectResponseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlWriteGetObjectResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteGetObjectResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const map = __map;
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (
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

const deserializeAws_restXmlInvalidObjectStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidObjectState> => {
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

const deserializeAws_restXmlNoSuchBucketResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchBucket> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchBucket({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restXmlNoSuchKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchKey> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restXmlNoSuchUploadResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchUpload> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NoSuchUpload({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restXmlNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new NotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse = async (
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

const deserializeAws_restXmlObjectNotInActiveTierErrorResponse = async (
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

const deserializeAws_restXmlSelectObjectContentEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<SelectObjectContentEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["Records"] != null) {
      return {
        Records: await deserializeAws_restXmlRecordsEvent_event(event["Records"], context),
      };
    }
    if (event["Stats"] != null) {
      return {
        Stats: await deserializeAws_restXmlStatsEvent_event(event["Stats"], context),
      };
    }
    if (event["Progress"] != null) {
      return {
        Progress: await deserializeAws_restXmlProgressEvent_event(event["Progress"], context),
      };
    }
    if (event["Cont"] != null) {
      return {
        Cont: await deserializeAws_restXmlContinuationEvent_event(event["Cont"], context),
      };
    }
    if (event["End"] != null) {
      return {
        End: await deserializeAws_restXmlEndEvent_event(event["End"], context),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_restXmlContinuationEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContinuationEvent> => {
  const contents: ContinuationEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restXmlContinuationEvent(data, context));
  return contents;
};
const deserializeAws_restXmlEndEvent_event = async (output: any, context: __SerdeContext): Promise<EndEvent> => {
  const contents: EndEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restXmlEndEvent(data, context));
  return contents;
};
const deserializeAws_restXmlProgressEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ProgressEvent> => {
  const contents: ProgressEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents.Details = deserializeAws_restXmlProgress(data, context);
  return contents;
};
const deserializeAws_restXmlRecordsEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<RecordsEvent> => {
  const contents: RecordsEvent = {} as any;
  contents.Payload = output.body;
  return contents;
};
const deserializeAws_restXmlStatsEvent_event = async (output: any, context: __SerdeContext): Promise<StatsEvent> => {
  const contents: StatsEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents.Details = deserializeAws_restXmlStats(data, context);
  return contents;
};
const serializeAws_restXmlAbortIncompleteMultipartUpload = (
  input: AbortIncompleteMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
  if (input.DaysAfterInitiation != null) {
    const node = __XmlNode.of("DaysAfterInitiation", String(input.DaysAfterInitiation)).withName("DaysAfterInitiation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccelerateConfiguration = (input: AccelerateConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccelerateConfiguration");
  if (input.Status != null) {
    const node = __XmlNode.of("BucketAccelerateStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccessControlPolicy = (input: AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccessControlPolicy");
  if (input.Grants != null) {
    const nodes = serializeAws_restXmlGrants(input.Grants, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Owner != null) {
    const node = serializeAws_restXmlOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccessControlTranslation = (
  input: AccessControlTranslation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AccessControlTranslation");
  if (input.Owner != null) {
    const node = __XmlNode.of("OwnerOverride", input.Owner).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedHeader", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlAllowedMethods = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedMethod", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlAllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("AllowedOrigin", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlAnalyticsAndOperator = (input: AnalyticsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsConfiguration = (input: AnalyticsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("AnalyticsId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlAnalyticsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClassAnalysis != null) {
    const node = serializeAws_restXmlStorageClassAnalysis(input.StorageClassAnalysis, context).withName(
      "StorageClassAnalysis"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsExportDestination = (
  input: AnalyticsExportDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AnalyticsExportDestination");
  if (input.S3BucketDestination != null) {
    const node = serializeAws_restXmlAnalyticsS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsFilter = (input: AnalyticsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsFilter");
  AnalyticsFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlAnalyticsAndOperator(value, context).withName("And");
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

const serializeAws_restXmlAnalyticsS3BucketDestination = (
  input: AnalyticsS3BucketDestination,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlBucketLifecycleConfiguration = (
  input: BucketLifecycleConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("BucketLifecycleConfiguration");
  if (input.Rules != null) {
    const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlBucketLoggingStatus = (input: BucketLoggingStatus, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLoggingStatus");
  if (input.LoggingEnabled != null) {
    const node = serializeAws_restXmlLoggingEnabled(input.LoggingEnabled, context).withName("LoggingEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCompletedMultipartUpload = (
  input: CompletedMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CompletedMultipartUpload");
  if (input.Parts != null) {
    const nodes = serializeAws_restXmlCompletedPartList(input.Parts, context);
    nodes.map((node: any) => {
      node = node.withName("Part");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlCompletedPart = (input: CompletedPart, context: __SerdeContext): any => {
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

const serializeAws_restXmlCompletedPartList = (input: CompletedPart[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlCompletedPart(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCondition = (input: Condition, context: __SerdeContext): any => {
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

const serializeAws_restXmlCORSConfiguration = (input: CORSConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSConfiguration");
  if (input.CORSRules != null) {
    const nodes = serializeAws_restXmlCORSRules(input.CORSRules, context);
    nodes.map((node: any) => {
      node = node.withName("CORSRule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlCORSRule = (input: CORSRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSRule");
  if (input.ID != null) {
    const node = __XmlNode.of("ID", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedHeaders != null) {
    const nodes = serializeAws_restXmlAllowedHeaders(input.AllowedHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedMethods != null) {
    const nodes = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedMethod");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedOrigins != null) {
    const nodes = serializeAws_restXmlAllowedOrigins(input.AllowedOrigins, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedOrigin");
      bodyNode.addChildNode(node);
    });
  }
  if (input.ExposeHeaders != null) {
    const nodes = serializeAws_restXmlExposeHeaders(input.ExposeHeaders, context);
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

const serializeAws_restXmlCORSRules = (input: CORSRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlCORSRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlCreateBucketConfiguration = (
  input: CreateBucketConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateBucketConfiguration");
  if (input.LocationConstraint != null) {
    const node = __XmlNode.of("BucketLocationConstraint", input.LocationConstraint).withName("LocationConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCSVInput = (input: CSVInput, context: __SerdeContext): any => {
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

const serializeAws_restXmlCSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
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

const serializeAws_restXmlDefaultRetention = (input: DefaultRetention, context: __SerdeContext): any => {
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

const serializeAws_restXmlDelete = (input: Delete, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Delete");
  if (input.Objects != null) {
    const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
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

const serializeAws_restXmlDeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DeleteMarkerReplication");
  if (input.Status != null) {
    const node = __XmlNode.of("DeleteMarkerReplicationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDestination = (input: Destination, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlAccessControlTranslation(input.AccessControlTranslation, context).withName(
      "AccessControlTranslation"
    );
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionConfiguration != null) {
    const node = serializeAws_restXmlEncryptionConfiguration(input.EncryptionConfiguration, context).withName(
      "EncryptionConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReplicationTime != null) {
    const node = serializeAws_restXmlReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
    bodyNode.addChildNode(node);
  }
  if (input.Metrics != null) {
    const node = serializeAws_restXmlMetrics(input.Metrics, context).withName("Metrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryption = (input: Encryption, context: __SerdeContext): any => {
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

const serializeAws_restXmlEncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionConfiguration");
  if (input.ReplicaKmsKeyID != null) {
    const node = __XmlNode.of("ReplicaKmsKeyID", input.ReplicaKmsKeyID).withName("ReplicaKmsKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlErrorDocument = (input: ErrorDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ErrorDocument");
  if (input.Key != null) {
    const node = __XmlNode.of("ObjectKey", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEventBridgeConfiguration = (
  input: EventBridgeConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("EventBridgeConfiguration");
  return bodyNode;
};

const serializeAws_restXmlEventList = (input: (Event | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("Event", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlExistingObjectReplication = (
  input: ExistingObjectReplication,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ExistingObjectReplication");
  if (input.Status != null) {
    const node = __XmlNode.of("ExistingObjectReplicationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ExposeHeader", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlFilterRule = (input: FilterRule, context: __SerdeContext): any => {
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

const serializeAws_restXmlFilterRuleList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlFilterRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlGlacierJobParameters = (input: GlacierJobParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GlacierJobParameters");
  if (input.Tier != null) {
    const node = __XmlNode.of("Tier", input.Tier).withName("Tier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrant = (input: Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grant");
  if (input.Grantee != null) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("Permission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrantee = (input: Grantee, context: __SerdeContext): any => {
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

const serializeAws_restXmlGrants = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlGrant(entry, context);
      return node.withName("Grant");
    });
};

const serializeAws_restXmlIndexDocument = (input: IndexDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IndexDocument");
  if (input.Suffix != null) {
    const node = __XmlNode.of("Suffix", input.Suffix).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InputSerialization");
  if (input.CSV != null) {
    const node = serializeAws_restXmlCSVInput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.CompressionType != null) {
    const node = __XmlNode.of("CompressionType", input.CompressionType).withName("CompressionType");
    bodyNode.addChildNode(node);
  }
  if (input.JSON != null) {
    const node = serializeAws_restXmlJSONInput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  if (input.Parquet != null) {
    const node = serializeAws_restXmlParquetInput(input.Parquet, context).withName("Parquet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringAndOperator = (
  input: IntelligentTieringAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringConfiguration = (
  input: IntelligentTieringConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("IntelligentTieringId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlIntelligentTieringFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("IntelligentTieringStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Tierings != null) {
    const nodes = serializeAws_restXmlTieringList(input.Tierings, context);
    nodes.map((node: any) => {
      node = node.withName("Tiering");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlIntelligentTieringFilter = (
  input: IntelligentTieringFilter,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("IntelligentTieringFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag != null) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And != null) {
    const node = serializeAws_restXmlIntelligentTieringAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryConfiguration = (input: InventoryConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryConfiguration");
  if (input.Destination != null) {
    const node = serializeAws_restXmlInventoryDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlInventoryFilter(input.Filter, context).withName("Filter");
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
    const nodes = serializeAws_restXmlInventoryOptionalFields(input.OptionalFields, context);
    const containerNode = new __XmlNode("OptionalFields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Schedule != null) {
    const node = serializeAws_restXmlInventorySchedule(input.Schedule, context).withName("Schedule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryDestination = (input: InventoryDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryDestination");
  if (input.S3BucketDestination != null) {
    const node = serializeAws_restXmlInventoryS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryEncryption = (input: InventoryEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryEncryption");
  if (input.SSES3 != null) {
    const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS != null) {
    const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryOptionalFields = (
  input: (InventoryOptionalField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("InventoryOptionalField", entry);
      return node.withName("Field");
    });
};

const serializeAws_restXmlInventoryS3BucketDestination = (
  input: InventoryS3BucketDestination,
  context: __SerdeContext
): any => {
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
    const node = serializeAws_restXmlInventoryEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventorySchedule = (input: InventorySchedule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventorySchedule");
  if (input.Frequency != null) {
    const node = __XmlNode.of("InventoryFrequency", input.Frequency).withName("Frequency");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONInput = (input: JSONInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONInput");
  if (input.Type != null) {
    const node = __XmlNode.of("JSONType", input.Type).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONOutput = (input: JSONOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONOutput");
  if (input.RecordDelimiter != null) {
    const node = __XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfiguration = (
  input: LambdaFunctionConfiguration,
  context: __SerdeContext
): any => {
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
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfigurationList = (
  input: LambdaFunctionConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlLambdaFunctionConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlLifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
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

const serializeAws_restXmlLifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.Expiration != null) {
    const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
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
    const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("ExpirationStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Transitions != null) {
    const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
    nodes.map((node: any) => {
      node = node.withName("Transition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionTransitions != null) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    nodes.map((node: any) => {
      node = node.withName("NoncurrentVersionTransition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.NoncurrentVersionExpiration != null) {
    const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName(
      "NoncurrentVersionExpiration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AbortIncompleteMultipartUpload != null) {
    const node = serializeAws_restXmlAbortIncompleteMultipartUpload(
      input.AbortIncompleteMultipartUpload,
      context
    ).withName("AbortIncompleteMultipartUpload");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRuleAndOperator = (
  input: LifecycleRuleAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LifecycleRuleAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
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

const serializeAws_restXmlLifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  LifecycleRuleFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
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
      const node = serializeAws_restXmlLifecycleRuleAndOperator(value, context).withName("And");
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

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlLifecycleRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlLoggingEnabled = (input: LoggingEnabled, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingEnabled");
  if (input.TargetBucket != null) {
    const node = __XmlNode.of("TargetBucket", input.TargetBucket).withName("TargetBucket");
    bodyNode.addChildNode(node);
  }
  if (input.TargetGrants != null) {
    const nodes = serializeAws_restXmlTargetGrants(input.TargetGrants, context);
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

const serializeAws_restXmlMetadataEntry = (input: MetadataEntry, context: __SerdeContext): any => {
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

const serializeAws_restXmlMetrics = (input: Metrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Metrics");
  if (input.Status != null) {
    const node = __XmlNode.of("MetricsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.EventThreshold != null) {
    const node = serializeAws_restXmlReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsAndOperator = (input: MetricsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
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

const serializeAws_restXmlMetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("MetricsId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlMetricsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsFilter = (input: MetricsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsFilter");
  MetricsFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    AccessPointArn: (value) => {
      const node = __XmlNode.of("AccessPointArn", value).withName("AccessPointArn");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlMetricsAndOperator(value, context).withName("And");
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

const serializeAws_restXmlNoncurrentVersionExpiration = (
  input: NoncurrentVersionExpiration,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlNoncurrentVersionTransition = (
  input: NoncurrentVersionTransition,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlNoncurrentVersionTransitionList = (
  input: NoncurrentVersionTransition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlNotificationConfiguration = (
  input: NotificationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfiguration");
  if (input.TopicConfigurations != null) {
    const nodes = serializeAws_restXmlTopicConfigurationList(input.TopicConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("TopicConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.QueueConfigurations != null) {
    const nodes = serializeAws_restXmlQueueConfigurationList(input.QueueConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("QueueConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.LambdaFunctionConfigurations != null) {
    const nodes = serializeAws_restXmlLambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("CloudFunctionConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.EventBridgeConfiguration != null) {
    const node = serializeAws_restXmlEventBridgeConfiguration(input.EventBridgeConfiguration, context).withName(
      "EventBridgeConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNotificationConfigurationFilter = (
  input: NotificationConfigurationFilter,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfigurationFilter");
  if (input.Key != null) {
    const node = serializeAws_restXmlS3KeyFilter(input.Key, context).withName("S3Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectIdentifier = (input: ObjectIdentifier, context: __SerdeContext): any => {
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

const serializeAws_restXmlObjectIdentifierList = (input: ObjectIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlObjectIdentifier(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlObjectLockConfiguration = (input: ObjectLockConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockConfiguration");
  if (input.ObjectLockEnabled != null) {
    const node = __XmlNode.of("ObjectLockEnabled", input.ObjectLockEnabled).withName("ObjectLockEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Rule != null) {
    const node = serializeAws_restXmlObjectLockRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockLegalHold = (input: ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockLegalHold");
  if (input.Status != null) {
    const node = __XmlNode.of("ObjectLockLegalHoldStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockRetention = (input: ObjectLockRetention, context: __SerdeContext): any => {
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

const serializeAws_restXmlObjectLockRule = (input: ObjectLockRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRule");
  if (input.DefaultRetention != null) {
    const node = serializeAws_restXmlDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputLocation");
  if (input.S3 != null) {
    const node = serializeAws_restXmlS3Location(input.S3, context).withName("S3");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputSerialization");
  if (input.CSV != null) {
    const node = serializeAws_restXmlCSVOutput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  if (input.JSON != null) {
    const node = serializeAws_restXmlJSONOutput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwner = (input: Owner, context: __SerdeContext): any => {
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

const serializeAws_restXmlOwnershipControls = (input: OwnershipControls, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControls");
  if (input.Rules != null) {
    const nodes = serializeAws_restXmlOwnershipControlsRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControlsRule = (input: OwnershipControlsRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControlsRule");
  if (input.ObjectOwnership != null) {
    const node = __XmlNode.of("ObjectOwnership", input.ObjectOwnership).withName("ObjectOwnership");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControlsRules = (input: OwnershipControlsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlOwnershipControlsRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlParquetInput = (input: ParquetInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ParquetInput");
  return bodyNode;
};

const serializeAws_restXmlPublicAccessBlockConfiguration = (
  input: PublicAccessBlockConfiguration,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlQueueConfiguration = (input: QueueConfiguration, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueueConfigurationList = (input: QueueConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlQueueConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlRedirect = (input: Redirect, context: __SerdeContext): any => {
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

const serializeAws_restXmlRedirectAllRequestsTo = (input: RedirectAllRequestsTo, context: __SerdeContext): any => {
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

const serializeAws_restXmlReplicaModifications = (input: ReplicaModifications, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicaModifications");
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicaModificationsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationConfiguration = (
  input: ReplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationConfiguration");
  if (input.Role != null) {
    const node = __XmlNode.of("Role", input.Role).withName("Role");
    bodyNode.addChildNode(node);
  }
  if (input.Rules != null) {
    const nodes = serializeAws_restXmlReplicationRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlReplicationRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicationRuleStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.SourceSelectionCriteria != null) {
    const node = serializeAws_restXmlSourceSelectionCriteria(input.SourceSelectionCriteria, context).withName(
      "SourceSelectionCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ExistingObjectReplication != null) {
    const node = serializeAws_restXmlExistingObjectReplication(input.ExistingObjectReplication, context).withName(
      "ExistingObjectReplication"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Destination != null) {
    const node = serializeAws_restXmlDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.DeleteMarkerReplication != null) {
    const node = serializeAws_restXmlDeleteMarkerReplication(input.DeleteMarkerReplication, context).withName(
      "DeleteMarkerReplication"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRuleAndOperator = (
  input: ReplicationRuleAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationRuleAndOperator");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags != null) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRuleFilter");
  ReplicationRuleFilter.visit(input, {
    Prefix: (value) => {
      const node = __XmlNode.of("Prefix", value).withName("Prefix");
      bodyNode.addChildNode(node);
    },
    Tag: (value) => {
      const node = serializeAws_restXmlTag(value, context).withName("Tag");
      bodyNode.addChildNode(node);
    },
    And: (value) => {
      const node = serializeAws_restXmlReplicationRuleAndOperator(value, context).withName("And");
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

const serializeAws_restXmlReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlReplicationRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTime");
  if (input.Status != null) {
    const node = __XmlNode.of("ReplicationTimeStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Time != null) {
    const node = serializeAws_restXmlReplicationTimeValue(input.Time, context).withName("Time");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTimeValue");
  if (input.Minutes != null) {
    const node = __XmlNode.of("Minutes", String(input.Minutes)).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestPaymentConfiguration = (
  input: RequestPaymentConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RequestPaymentConfiguration");
  if (input.Payer != null) {
    const node = __XmlNode.of("Payer", input.Payer).withName("Payer");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestProgress = (input: RequestProgress, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RequestProgress");
  if (input.Enabled != null) {
    const node = __XmlNode.of("EnableRequestProgress", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestoreRequest = (input: RestoreRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreRequest");
  if (input.Days != null) {
    const node = __XmlNode.of("Days", String(input.Days)).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobParameters != null) {
    const node = serializeAws_restXmlGlacierJobParameters(input.GlacierJobParameters, context).withName(
      "GlacierJobParameters"
    );
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
    const node = serializeAws_restXmlSelectParameters(input.SelectParameters, context).withName("SelectParameters");
    bodyNode.addChildNode(node);
  }
  if (input.OutputLocation != null) {
    const node = serializeAws_restXmlOutputLocation(input.OutputLocation, context).withName("OutputLocation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRule = (input: RoutingRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RoutingRule");
  if (input.Condition != null) {
    const node = serializeAws_restXmlCondition(input.Condition, context).withName("Condition");
    bodyNode.addChildNode(node);
  }
  if (input.Redirect != null) {
    const node = serializeAws_restXmlRedirect(input.Redirect, context).withName("Redirect");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRules = (input: RoutingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlRoutingRule(entry, context);
      return node.withName("RoutingRule");
    });
};

const serializeAws_restXmlS3KeyFilter = (input: S3KeyFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3KeyFilter");
  if (input.FilterRules != null) {
    const nodes = serializeAws_restXmlFilterRuleList(input.FilterRules, context);
    nodes.map((node: any) => {
      node = node.withName("FilterRule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlS3Location = (input: S3Location, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  if (input.CannedACL != null) {
    const node = __XmlNode.of("ObjectCannedACL", input.CannedACL).withName("CannedACL");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlList != null) {
    const nodes = serializeAws_restXmlGrants(input.AccessControlList, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Tagging != null) {
    const node = serializeAws_restXmlTagging(input.Tagging, context).withName("Tagging");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata != null) {
    const nodes = serializeAws_restXmlUserMetadata(input.UserMetadata, context);
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

const serializeAws_restXmlScanRange = (input: ScanRange, context: __SerdeContext): any => {
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

const serializeAws_restXmlSelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectParameters");
  if (input.InputSerialization != null) {
    const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName(
      "InputSerialization"
    );
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
    const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName(
      "OutputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionByDefault = (
  input: ServerSideEncryptionByDefault,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionConfiguration");
  if (input.Rules != null) {
    const nodes = serializeAws_restXmlServerSideEncryptionRules(input.Rules, context);
    nodes.map((node: any) => {
      node = node.withName("Rule");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionRule = (
  input: ServerSideEncryptionRule,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionRule");
  if (input.ApplyServerSideEncryptionByDefault != null) {
    const node = serializeAws_restXmlServerSideEncryptionByDefault(
      input.ApplyServerSideEncryptionByDefault,
      context
    ).withName("ApplyServerSideEncryptionByDefault");
    bodyNode.addChildNode(node);
  }
  if (input.BucketKeyEnabled != null) {
    const node = __XmlNode.of("BucketKeyEnabled", String(input.BucketKeyEnabled)).withName("BucketKeyEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionRules = (
  input: ServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlServerSideEncryptionRule(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlSourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SourceSelectionCriteria");
  if (input.SseKmsEncryptedObjects != null) {
    const node = serializeAws_restXmlSseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName(
      "SseKmsEncryptedObjects"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReplicaModifications != null) {
    const node = serializeAws_restXmlReplicaModifications(input.ReplicaModifications, context).withName(
      "ReplicaModifications"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId != null) {
    const node = __XmlNode.of("SSEKMSKeyId", input.KeyId).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SseKmsEncryptedObjects");
  if (input.Status != null) {
    const node = __XmlNode.of("SseKmsEncryptedObjectsStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

const serializeAws_restXmlStorageClassAnalysis = (input: StorageClassAnalysis, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysis");
  if (input.DataExport != null) {
    const node = serializeAws_restXmlStorageClassAnalysisDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageClassAnalysisDataExport = (
  input: StorageClassAnalysisDataExport,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageClassAnalysisDataExport");
  if (input.OutputSchemaVersion != null) {
    const node = __XmlNode
      .of("StorageClassAnalysisSchemaVersion", input.OutputSchemaVersion)
      .withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Destination != null) {
    const node = serializeAws_restXmlAnalyticsExportDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTag = (input: Tag, context: __SerdeContext): any => {
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

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet != null) {
    const nodes = serializeAws_restXmlTagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTargetGrant = (input: TargetGrant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TargetGrant");
  if (input.Grantee != null) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("BucketLogsPermission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTargetGrants = (input: TargetGrant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTargetGrant(entry, context);
      return node.withName("Grant");
    });
};

const serializeAws_restXmlTiering = (input: Tiering, context: __SerdeContext): any => {
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

const serializeAws_restXmlTieringList = (input: Tiering[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTiering(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlTopicConfiguration = (input: TopicConfiguration, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTopicConfigurationList = (input: TopicConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTopicConfiguration(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlTransition = (input: Transition, context: __SerdeContext): any => {
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

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTransition(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlUserMetadata = (input: MetadataEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlMetadataEntry(entry, context);
      return node.withName("MetadataEntry");
    });
};

const serializeAws_restXmlVersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
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

const serializeAws_restXmlWebsiteConfiguration = (input: WebsiteConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WebsiteConfiguration");
  if (input.ErrorDocument != null) {
    const node = serializeAws_restXmlErrorDocument(input.ErrorDocument, context).withName("ErrorDocument");
    bodyNode.addChildNode(node);
  }
  if (input.IndexDocument != null) {
    const node = serializeAws_restXmlIndexDocument(input.IndexDocument, context).withName("IndexDocument");
    bodyNode.addChildNode(node);
  }
  if (input.RedirectAllRequestsTo != null) {
    const node = serializeAws_restXmlRedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName(
      "RedirectAllRequestsTo"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RoutingRules != null) {
    const nodes = serializeAws_restXmlRoutingRules(input.RoutingRules, context);
    const containerNode = new __XmlNode("RoutingRules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const deserializeAws_restXmlAbortIncompleteMultipartUpload = (
  output: any,
  context: __SerdeContext
): AbortIncompleteMultipartUpload => {
  const contents: any = {
    DaysAfterInitiation: undefined,
  };
  if (output["DaysAfterInitiation"] !== undefined) {
    contents.DaysAfterInitiation = __strictParseInt32(output["DaysAfterInitiation"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlAccessControlTranslation = (
  output: any,
  context: __SerdeContext
): AccessControlTranslation => {
  const contents: any = {
    Owner: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = __expectString(output["Owner"]);
  }
  return contents;
};

const deserializeAws_restXmlAllowedHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAllowedMethods = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAllowedOrigins = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlAnalyticsAndOperator = (output: any, context: __SerdeContext): AnalyticsAndOperator => {
  const contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfiguration = (output: any, context: __SerdeContext): AnalyticsConfiguration => {
  const contents: any = {
    Id: undefined,
    Filter: undefined,
    StorageClassAnalysis: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlAnalyticsFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["StorageClassAnalysis"] !== undefined) {
    contents.StorageClassAnalysis = deserializeAws_restXmlStorageClassAnalysis(output["StorageClassAnalysis"], context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfigurationList = (
  output: any,
  context: __SerdeContext
): AnalyticsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlAnalyticsConfiguration(entry, context);
    });
};

const deserializeAws_restXmlAnalyticsExportDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsExportDestination => {
  const contents: any = {
    S3BucketDestination: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlAnalyticsS3BucketDestination(
      output["S3BucketDestination"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsFilter = (output: any, context: __SerdeContext): AnalyticsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlAnalyticsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlAnalyticsS3BucketDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsS3BucketDestination => {
  const contents: any = {
    Format: undefined,
    BucketAccountId: undefined,
    Bucket: undefined,
    Prefix: undefined,
  };
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

const deserializeAws_restXmlBucket = (output: any, context: __SerdeContext): Bucket => {
  const contents: any = {
    Name: undefined,
    CreationDate: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(output["CreationDate"]));
  }
  return contents;
};

const deserializeAws_restXmlBuckets = (output: any, context: __SerdeContext): Bucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlBucket(entry, context);
    });
};

const deserializeAws_restXmlChecksum = (output: any, context: __SerdeContext): Checksum => {
  const contents: any = {
    ChecksumCRC32: undefined,
    ChecksumCRC32C: undefined,
    ChecksumSHA1: undefined,
    ChecksumSHA256: undefined,
  };
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

const deserializeAws_restXmlChecksumAlgorithmList = (
  output: any,
  context: __SerdeContext
): (ChecksumAlgorithm | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCommonPrefix = (output: any, context: __SerdeContext): CommonPrefix => {
  const contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

const deserializeAws_restXmlCommonPrefixList = (output: any, context: __SerdeContext): CommonPrefix[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlCommonPrefix(entry, context);
    });
};

const deserializeAws_restXmlCondition = (output: any, context: __SerdeContext): Condition => {
  const contents: any = {
    HttpErrorCodeReturnedEquals: undefined,
    KeyPrefixEquals: undefined,
  };
  if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
    contents.HttpErrorCodeReturnedEquals = __expectString(output["HttpErrorCodeReturnedEquals"]);
  }
  if (output["KeyPrefixEquals"] !== undefined) {
    contents.KeyPrefixEquals = __expectString(output["KeyPrefixEquals"]);
  }
  return contents;
};

const deserializeAws_restXmlContinuationEvent = (output: any, context: __SerdeContext): ContinuationEvent => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlCopyObjectResult = (output: any, context: __SerdeContext): CopyObjectResult => {
  const contents: any = {
    ETag: undefined,
    LastModified: undefined,
    ChecksumCRC32: undefined,
    ChecksumCRC32C: undefined,
    ChecksumSHA1: undefined,
    ChecksumSHA256: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
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

const deserializeAws_restXmlCopyPartResult = (output: any, context: __SerdeContext): CopyPartResult => {
  const contents: any = {
    ETag: undefined,
    LastModified: undefined,
    ChecksumCRC32: undefined,
    ChecksumCRC32C: undefined,
    ChecksumSHA1: undefined,
    ChecksumSHA256: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
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

const deserializeAws_restXmlCORSRule = (output: any, context: __SerdeContext): CORSRule => {
  const contents: any = {
    ID: undefined,
    AllowedHeaders: undefined,
    AllowedMethods: undefined,
    AllowedOrigins: undefined,
    ExposeHeaders: undefined,
    MaxAgeSeconds: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output.AllowedHeader === "") {
    contents.AllowedHeaders = [];
  } else if (output["AllowedHeader"] !== undefined) {
    contents.AllowedHeaders = deserializeAws_restXmlAllowedHeaders(
      __getArrayIfSingleItem(output["AllowedHeader"]),
      context
    );
  }
  if (output.AllowedMethod === "") {
    contents.AllowedMethods = [];
  } else if (output["AllowedMethod"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(
      __getArrayIfSingleItem(output["AllowedMethod"]),
      context
    );
  }
  if (output.AllowedOrigin === "") {
    contents.AllowedOrigins = [];
  } else if (output["AllowedOrigin"] !== undefined) {
    contents.AllowedOrigins = deserializeAws_restXmlAllowedOrigins(
      __getArrayIfSingleItem(output["AllowedOrigin"]),
      context
    );
  }
  if (output.ExposeHeader === "") {
    contents.ExposeHeaders = [];
  } else if (output["ExposeHeader"] !== undefined) {
    contents.ExposeHeaders = deserializeAws_restXmlExposeHeaders(
      __getArrayIfSingleItem(output["ExposeHeader"]),
      context
    );
  }
  if (output["MaxAgeSeconds"] !== undefined) {
    contents.MaxAgeSeconds = __strictParseInt32(output["MaxAgeSeconds"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlCORSRules = (output: any, context: __SerdeContext): CORSRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlCORSRule(entry, context);
    });
};

const deserializeAws_restXmlDefaultRetention = (output: any, context: __SerdeContext): DefaultRetention => {
  const contents: any = {
    Mode: undefined,
    Days: undefined,
    Years: undefined,
  };
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

const deserializeAws_restXmlDeletedObject = (output: any, context: __SerdeContext): DeletedObject => {
  const contents: any = {
    Key: undefined,
    VersionId: undefined,
    DeleteMarker: undefined,
    DeleteMarkerVersionId: undefined,
  };
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

const deserializeAws_restXmlDeletedObjects = (output: any, context: __SerdeContext): DeletedObject[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlDeletedObject(entry, context);
    });
};

const deserializeAws_restXmlDeleteMarkerEntry = (output: any, context: __SerdeContext): DeleteMarkerEntry => {
  const contents: any = {
    Owner: undefined,
    Key: undefined,
    VersionId: undefined,
    IsLatest: undefined,
    LastModified: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
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
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkerReplication = (
  output: any,
  context: __SerdeContext
): DeleteMarkerReplication => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkers = (output: any, context: __SerdeContext): DeleteMarkerEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlDeleteMarkerEntry(entry, context);
    });
};

const deserializeAws_restXmlDestination = (output: any, context: __SerdeContext): Destination => {
  const contents: any = {
    Bucket: undefined,
    Account: undefined,
    StorageClass: undefined,
    AccessControlTranslation: undefined,
    EncryptionConfiguration: undefined,
    ReplicationTime: undefined,
    Metrics: undefined,
  };
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
    contents.AccessControlTranslation = deserializeAws_restXmlAccessControlTranslation(
      output["AccessControlTranslation"],
      context
    );
  }
  if (output["EncryptionConfiguration"] !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_restXmlEncryptionConfiguration(
      output["EncryptionConfiguration"],
      context
    );
  }
  if (output["ReplicationTime"] !== undefined) {
    contents.ReplicationTime = deserializeAws_restXmlReplicationTime(output["ReplicationTime"], context);
  }
  if (output["Metrics"] !== undefined) {
    contents.Metrics = deserializeAws_restXmlMetrics(output["Metrics"], context);
  }
  return contents;
};

const deserializeAws_restXmlEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  const contents: any = {
    ReplicaKmsKeyID: undefined,
  };
  if (output["ReplicaKmsKeyID"] !== undefined) {
    contents.ReplicaKmsKeyID = __expectString(output["ReplicaKmsKeyID"]);
  }
  return contents;
};

const deserializeAws_restXmlEndEvent = (output: any, context: __SerdeContext): EndEvent => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXml_Error = (output: any, context: __SerdeContext): _Error => {
  const contents: any = {
    Key: undefined,
    VersionId: undefined,
    Code: undefined,
    Message: undefined,
  };
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

const deserializeAws_restXmlErrorDocument = (output: any, context: __SerdeContext): ErrorDocument => {
  const contents: any = {
    Key: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  return contents;
};

const deserializeAws_restXmlErrors = (output: any, context: __SerdeContext): _Error[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXml_Error(entry, context);
    });
};

const deserializeAws_restXmlEventBridgeConfiguration = (
  output: any,
  context: __SerdeContext
): EventBridgeConfiguration => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlEventList = (output: any, context: __SerdeContext): (Event | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlExistingObjectReplication = (
  output: any,
  context: __SerdeContext
): ExistingObjectReplication => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlExposeHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlFilterRule = (output: any, context: __SerdeContext): FilterRule => {
  const contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_restXmlFilterRuleList = (output: any, context: __SerdeContext): FilterRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlFilterRule(entry, context);
    });
};

const deserializeAws_restXmlGetObjectAttributesParts = (
  output: any,
  context: __SerdeContext
): GetObjectAttributesParts => {
  const contents: any = {
    TotalPartsCount: undefined,
    PartNumberMarker: undefined,
    NextPartNumberMarker: undefined,
    MaxParts: undefined,
    IsTruncated: undefined,
    Parts: undefined,
  };
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
    contents.Parts = deserializeAws_restXmlPartsList(__getArrayIfSingleItem(output["Part"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGrant = (output: any, context: __SerdeContext): Grant => {
  const contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

const deserializeAws_restXmlGrantee = (output: any, context: __SerdeContext): Grantee => {
  const contents: any = {
    DisplayName: undefined,
    EmailAddress: undefined,
    ID: undefined,
    URI: undefined,
    Type: undefined,
  };
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

const deserializeAws_restXmlGrants = (output: any, context: __SerdeContext): Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlGrant(entry, context);
    });
};

const deserializeAws_restXmlIndexDocument = (output: any, context: __SerdeContext): IndexDocument => {
  const contents: any = {
    Suffix: undefined,
  };
  if (output["Suffix"] !== undefined) {
    contents.Suffix = __expectString(output["Suffix"]);
  }
  return contents;
};

const deserializeAws_restXmlInitiator = (output: any, context: __SerdeContext): Initiator => {
  const contents: any = {
    ID: undefined,
    DisplayName: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringAndOperator = (
  output: any,
  context: __SerdeContext
): IntelligentTieringAndOperator => {
  const contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringConfiguration = (
  output: any,
  context: __SerdeContext
): IntelligentTieringConfiguration => {
  const contents: any = {
    Id: undefined,
    Filter: undefined,
    Status: undefined,
    Tierings: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlIntelligentTieringFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Tiering === "") {
    contents.Tierings = [];
  } else if (output["Tiering"] !== undefined) {
    contents.Tierings = deserializeAws_restXmlTieringList(__getArrayIfSingleItem(output["Tiering"]), context);
  }
  return contents;
};

const deserializeAws_restXmlIntelligentTieringConfigurationList = (
  output: any,
  context: __SerdeContext
): IntelligentTieringConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlIntelligentTieringConfiguration(entry, context);
    });
};

const deserializeAws_restXmlIntelligentTieringFilter = (
  output: any,
  context: __SerdeContext
): IntelligentTieringFilter => {
  const contents: any = {
    Prefix: undefined,
    Tag: undefined,
    And: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlIntelligentTieringAndOperator(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfiguration = (output: any, context: __SerdeContext): InventoryConfiguration => {
  const contents: any = {
    Destination: undefined,
    IsEnabled: undefined,
    Filter: undefined,
    Id: undefined,
    IncludedObjectVersions: undefined,
    OptionalFields: undefined,
    Schedule: undefined,
  };
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlInventoryDestination(output["Destination"], context);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlInventoryFilter(output["Filter"], context);
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
    contents.OptionalFields = deserializeAws_restXmlInventoryOptionalFields(
      __getArrayIfSingleItem(output["OptionalFields"]["Field"]),
      context
    );
  }
  if (output["Schedule"] !== undefined) {
    contents.Schedule = deserializeAws_restXmlInventorySchedule(output["Schedule"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfigurationList = (
  output: any,
  context: __SerdeContext
): InventoryConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlInventoryConfiguration(entry, context);
    });
};

const deserializeAws_restXmlInventoryDestination = (output: any, context: __SerdeContext): InventoryDestination => {
  const contents: any = {
    S3BucketDestination: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlInventoryS3BucketDestination(
      output["S3BucketDestination"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlInventoryEncryption = (output: any, context: __SerdeContext): InventoryEncryption => {
  const contents: any = {
    SSES3: undefined,
    SSEKMS: undefined,
  };
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
  }
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryFilter = (output: any, context: __SerdeContext): InventoryFilter => {
  const contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  return contents;
};

const deserializeAws_restXmlInventoryOptionalFields = (
  output: any,
  context: __SerdeContext
): (InventoryOptionalField | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlInventoryS3BucketDestination = (
  output: any,
  context: __SerdeContext
): InventoryS3BucketDestination => {
  const contents: any = {
    AccountId: undefined,
    Bucket: undefined,
    Format: undefined,
    Prefix: undefined,
    Encryption: undefined,
  };
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
    contents.Encryption = deserializeAws_restXmlInventoryEncryption(output["Encryption"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventorySchedule = (output: any, context: __SerdeContext): InventorySchedule => {
  const contents: any = {
    Frequency: undefined,
  };
  if (output["Frequency"] !== undefined) {
    contents.Frequency = __expectString(output["Frequency"]);
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfiguration = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration => {
  const contents: any = {
    Id: undefined,
    LambdaFunctionArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["CloudFunction"] !== undefined) {
    contents.LambdaFunctionArn = __expectString(output["CloudFunction"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfigurationList = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlLambdaFunctionConfiguration(entry, context);
    });
};

const deserializeAws_restXmlLifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  const contents: any = {
    Date: undefined,
    Days: undefined,
    ExpiredObjectDeleteMarker: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTime(output["Date"]));
  }
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = __parseBoolean(output["ExpiredObjectDeleteMarker"]);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  const contents: any = {
    Expiration: undefined,
    ID: undefined,
    Prefix: undefined,
    Filter: undefined,
    Status: undefined,
    Transitions: undefined,
    NoncurrentVersionTransitions: undefined,
    NoncurrentVersionExpiration: undefined,
    AbortIncompleteMultipartUpload: undefined,
  };
  if (output["Expiration"] !== undefined) {
    contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
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
    contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Transition === "") {
    contents.Transitions = [];
  } else if (output["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(__getArrayIfSingleItem(output["Transition"]), context);
  }
  if (output.NoncurrentVersionTransition === "") {
    contents.NoncurrentVersionTransitions = [];
  } else if (output["NoncurrentVersionTransition"] !== undefined) {
    contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransition"]),
      context
    );
  }
  if (output["NoncurrentVersionExpiration"] !== undefined) {
    contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(
      output["NoncurrentVersionExpiration"],
      context
    );
  }
  if (output["AbortIncompleteMultipartUpload"] !== undefined) {
    contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(
      output["AbortIncompleteMultipartUpload"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleAndOperator = (
  output: any,
  context: __SerdeContext
): LifecycleRuleAndOperator => {
  const contents: any = {
    Prefix: undefined,
    Tags: undefined,
    ObjectSizeGreaterThan: undefined,
    ObjectSizeLessThan: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = __strictParseLong(output["ObjectSizeGreaterThan"]) as number;
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = __strictParseLong(output["ObjectSizeLessThan"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
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
      And: deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};

const deserializeAws_restXmlLoggingEnabled = (output: any, context: __SerdeContext): LoggingEnabled => {
  const contents: any = {
    TargetBucket: undefined,
    TargetGrants: undefined,
    TargetPrefix: undefined,
  };
  if (output["TargetBucket"] !== undefined) {
    contents.TargetBucket = __expectString(output["TargetBucket"]);
  }
  if (output.TargetGrants === "") {
    contents.TargetGrants = [];
  } else if (output["TargetGrants"] !== undefined && output["TargetGrants"]["Grant"] !== undefined) {
    contents.TargetGrants = deserializeAws_restXmlTargetGrants(
      __getArrayIfSingleItem(output["TargetGrants"]["Grant"]),
      context
    );
  }
  if (output["TargetPrefix"] !== undefined) {
    contents.TargetPrefix = __expectString(output["TargetPrefix"]);
  }
  return contents;
};

const deserializeAws_restXmlMetrics = (output: any, context: __SerdeContext): Metrics => {
  const contents: any = {
    Status: undefined,
    EventThreshold: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["EventThreshold"] !== undefined) {
    contents.EventThreshold = deserializeAws_restXmlReplicationTimeValue(output["EventThreshold"], context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsAndOperator = (output: any, context: __SerdeContext): MetricsAndOperator => {
  const contents: any = {
    Prefix: undefined,
    Tags: undefined,
    AccessPointArn: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  if (output["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(output["AccessPointArn"]);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  const contents: any = {
    Id: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlMetricsFilter(__expectUnion(output["Filter"]), context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfigurationList = (
  output: any,
  context: __SerdeContext
): MetricsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlMetricsConfiguration(entry, context);
    });
};

const deserializeAws_restXmlMetricsFilter = (output: any, context: __SerdeContext): MetricsFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["AccessPointArn"] !== undefined) {
    return {
      AccessPointArn: __expectString(output["AccessPointArn"]) as any,
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlMetricsAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlMultipartUpload = (output: any, context: __SerdeContext): MultipartUpload => {
  const contents: any = {
    UploadId: undefined,
    Key: undefined,
    Initiated: undefined,
    StorageClass: undefined,
    Owner: undefined,
    Initiator: undefined,
    ChecksumAlgorithm: undefined,
  };
  if (output["UploadId"] !== undefined) {
    contents.UploadId = __expectString(output["UploadId"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Initiated"] !== undefined) {
    contents.Initiated = __expectNonNull(__parseRfc3339DateTime(output["Initiated"]));
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["Initiator"] !== undefined) {
    contents.Initiator = deserializeAws_restXmlInitiator(output["Initiator"], context);
  }
  if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = __expectString(output["ChecksumAlgorithm"]);
  }
  return contents;
};

const deserializeAws_restXmlMultipartUploadList = (output: any, context: __SerdeContext): MultipartUpload[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlMultipartUpload(entry, context);
    });
};

const deserializeAws_restXmlNoncurrentVersionExpiration = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionExpiration => {
  const contents: any = {
    NoncurrentDays: undefined,
    NewerNoncurrentVersions: undefined,
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = __strictParseInt32(output["NoncurrentDays"]) as number;
  }
  if (output["NewerNoncurrentVersions"] !== undefined) {
    contents.NewerNoncurrentVersions = __strictParseInt32(output["NewerNoncurrentVersions"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlNoncurrentVersionTransition = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition => {
  const contents: any = {
    NoncurrentDays: undefined,
    StorageClass: undefined,
    NewerNoncurrentVersions: undefined,
  };
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

const deserializeAws_restXmlNoncurrentVersionTransitionList = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};

const deserializeAws_restXmlNotificationConfigurationFilter = (
  output: any,
  context: __SerdeContext
): NotificationConfigurationFilter => {
  const contents: any = {
    Key: undefined,
  };
  if (output["S3Key"] !== undefined) {
    contents.Key = deserializeAws_restXmlS3KeyFilter(output["S3Key"], context);
  }
  return contents;
};

const deserializeAws_restXml_Object = (output: any, context: __SerdeContext): _Object => {
  const contents: any = {
    Key: undefined,
    LastModified: undefined,
    ETag: undefined,
    ChecksumAlgorithm: undefined,
    Size: undefined,
    StorageClass: undefined,
    Owner: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents.ChecksumAlgorithm = [];
  } else if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = deserializeAws_restXmlChecksumAlgorithmList(
      __getArrayIfSingleItem(output["ChecksumAlgorithm"]),
      context
    );
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectList = (output: any, context: __SerdeContext): _Object[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXml_Object(entry, context);
    });
};

const deserializeAws_restXmlObjectLockConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLockConfiguration => {
  const contents: any = {
    ObjectLockEnabled: undefined,
    Rule: undefined,
  };
  if (output["ObjectLockEnabled"] !== undefined) {
    contents.ObjectLockEnabled = __expectString(output["ObjectLockEnabled"]);
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_restXmlObjectLockRule(output["Rule"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectLockLegalHold = (output: any, context: __SerdeContext): ObjectLockLegalHold => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRetention = (output: any, context: __SerdeContext): ObjectLockRetention => {
  const contents: any = {
    Mode: undefined,
    RetainUntilDate: undefined,
  };
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = __expectNonNull(__parseRfc3339DateTime(output["RetainUntilDate"]));
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRule = (output: any, context: __SerdeContext): ObjectLockRule => {
  const contents: any = {
    DefaultRetention: undefined,
  };
  if (output["DefaultRetention"] !== undefined) {
    contents.DefaultRetention = deserializeAws_restXmlDefaultRetention(output["DefaultRetention"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectPart = (output: any, context: __SerdeContext): ObjectPart => {
  const contents: any = {
    PartNumber: undefined,
    Size: undefined,
    ChecksumCRC32: undefined,
    ChecksumCRC32C: undefined,
    ChecksumSHA1: undefined,
    ChecksumSHA256: undefined,
  };
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

const deserializeAws_restXmlObjectVersion = (output: any, context: __SerdeContext): ObjectVersion => {
  const contents: any = {
    ETag: undefined,
    ChecksumAlgorithm: undefined,
    Size: undefined,
    StorageClass: undefined,
    Key: undefined,
    VersionId: undefined,
    IsLatest: undefined,
    LastModified: undefined,
    Owner: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents.ChecksumAlgorithm = [];
  } else if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = deserializeAws_restXmlChecksumAlgorithmList(
      __getArrayIfSingleItem(output["ChecksumAlgorithm"]),
      context
    );
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
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectVersionList = (output: any, context: __SerdeContext): ObjectVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlObjectVersion(entry, context);
    });
};

const deserializeAws_restXmlOwner = (output: any, context: __SerdeContext): Owner => {
  const contents: any = {
    DisplayName: undefined,
    ID: undefined,
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  if (output["ID"] !== undefined) {
    contents.ID = __expectString(output["ID"]);
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControls = (output: any, context: __SerdeContext): OwnershipControls => {
  const contents: any = {
    Rules: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlOwnershipControlsRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRule = (output: any, context: __SerdeContext): OwnershipControlsRule => {
  const contents: any = {
    ObjectOwnership: undefined,
  };
  if (output["ObjectOwnership"] !== undefined) {
    contents.ObjectOwnership = __expectString(output["ObjectOwnership"]);
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRules = (
  output: any,
  context: __SerdeContext
): OwnershipControlsRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlOwnershipControlsRule(entry, context);
    });
};

const deserializeAws_restXmlPart = (output: any, context: __SerdeContext): Part => {
  const contents: any = {
    PartNumber: undefined,
    LastModified: undefined,
    ETag: undefined,
    Size: undefined,
    ChecksumCRC32: undefined,
    ChecksumCRC32C: undefined,
    ChecksumSHA1: undefined,
    ChecksumSHA256: undefined,
  };
  if (output["PartNumber"] !== undefined) {
    contents.PartNumber = __strictParseInt32(output["PartNumber"]) as number;
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTime(output["LastModified"]));
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

const deserializeAws_restXmlParts = (output: any, context: __SerdeContext): Part[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlPart(entry, context);
    });
};

const deserializeAws_restXmlPartsList = (output: any, context: __SerdeContext): ObjectPart[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlObjectPart(entry, context);
    });
};

const deserializeAws_restXmlPolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  const contents: any = {
    IsPublic: undefined,
  };
  if (output["IsPublic"] !== undefined) {
    contents.IsPublic = __parseBoolean(output["IsPublic"]);
  }
  return contents;
};

const deserializeAws_restXmlProgress = (output: any, context: __SerdeContext): Progress => {
  const contents: any = {
    BytesScanned: undefined,
    BytesProcessed: undefined,
    BytesReturned: undefined,
  };
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

const deserializeAws_restXmlPublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): PublicAccessBlockConfiguration => {
  const contents: any = {
    BlockPublicAcls: undefined,
    IgnorePublicAcls: undefined,
    BlockPublicPolicy: undefined,
    RestrictPublicBuckets: undefined,
  };
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

const deserializeAws_restXmlQueueConfiguration = (output: any, context: __SerdeContext): QueueConfiguration => {
  const contents: any = {
    Id: undefined,
    QueueArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Queue"] !== undefined) {
    contents.QueueArn = __expectString(output["Queue"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlQueueConfigurationList = (output: any, context: __SerdeContext): QueueConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlQueueConfiguration(entry, context);
    });
};

const deserializeAws_restXmlRedirect = (output: any, context: __SerdeContext): Redirect => {
  const contents: any = {
    HostName: undefined,
    HttpRedirectCode: undefined,
    Protocol: undefined,
    ReplaceKeyPrefixWith: undefined,
    ReplaceKeyWith: undefined,
  };
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

const deserializeAws_restXmlRedirectAllRequestsTo = (output: any, context: __SerdeContext): RedirectAllRequestsTo => {
  const contents: any = {
    HostName: undefined,
    Protocol: undefined,
  };
  if (output["HostName"] !== undefined) {
    contents.HostName = __expectString(output["HostName"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  return contents;
};

const deserializeAws_restXmlReplicaModifications = (output: any, context: __SerdeContext): ReplicaModifications => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ReplicationConfiguration => {
  const contents: any = {
    Role: undefined,
    Rules: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = __expectString(output["Role"]);
  }
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlReplicationRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  const contents: any = {
    ID: undefined,
    Priority: undefined,
    Prefix: undefined,
    Filter: undefined,
    Status: undefined,
    SourceSelectionCriteria: undefined,
    ExistingObjectReplication: undefined,
    Destination: undefined,
    DeleteMarkerReplication: undefined,
  };
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
    contents.Filter = deserializeAws_restXmlReplicationRuleFilter(__expectUnion(output["Filter"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SourceSelectionCriteria"] !== undefined) {
    contents.SourceSelectionCriteria = deserializeAws_restXmlSourceSelectionCriteria(
      output["SourceSelectionCriteria"],
      context
    );
  }
  if (output["ExistingObjectReplication"] !== undefined) {
    contents.ExistingObjectReplication = deserializeAws_restXmlExistingObjectReplication(
      output["ExistingObjectReplication"],
      context
    );
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlDestination(output["Destination"], context);
  }
  if (output["DeleteMarkerReplication"] !== undefined) {
    contents.DeleteMarkerReplication = deserializeAws_restXmlDeleteMarkerReplication(
      output["DeleteMarkerReplication"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlReplicationRuleAndOperator = (
  output: any,
  context: __SerdeContext
): ReplicationRuleAndOperator => {
  const contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tag === "") {
    contents.Tags = [];
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  if (output["Prefix"] !== undefined) {
    return {
      Prefix: __expectString(output["Prefix"]) as any,
    };
  }
  if (output["Tag"] !== undefined) {
    return {
      Tag: deserializeAws_restXmlTag(output["Tag"], context),
    };
  }
  if (output["And"] !== undefined) {
    return {
      And: deserializeAws_restXmlReplicationRuleAndOperator(output["And"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlReplicationRules = (output: any, context: __SerdeContext): ReplicationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlReplicationRule(entry, context);
    });
};

const deserializeAws_restXmlReplicationTime = (output: any, context: __SerdeContext): ReplicationTime => {
  const contents: any = {
    Status: undefined,
    Time: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Time"] !== undefined) {
    contents.Time = deserializeAws_restXmlReplicationTimeValue(output["Time"], context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  const contents: any = {
    Minutes: undefined,
  };
  if (output["Minutes"] !== undefined) {
    contents.Minutes = __strictParseInt32(output["Minutes"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlRoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  const contents: any = {
    Condition: undefined,
    Redirect: undefined,
  };
  if (output["Condition"] !== undefined) {
    contents.Condition = deserializeAws_restXmlCondition(output["Condition"], context);
  }
  if (output["Redirect"] !== undefined) {
    contents.Redirect = deserializeAws_restXmlRedirect(output["Redirect"], context);
  }
  return contents;
};

const deserializeAws_restXmlRoutingRules = (output: any, context: __SerdeContext): RoutingRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlRoutingRule(entry, context);
    });
};

const deserializeAws_restXmlS3KeyFilter = (output: any, context: __SerdeContext): S3KeyFilter => {
  const contents: any = {
    FilterRules: undefined,
  };
  if (output.FilterRule === "") {
    contents.FilterRules = [];
  } else if (output["FilterRule"] !== undefined) {
    contents.FilterRules = deserializeAws_restXmlFilterRuleList(__getArrayIfSingleItem(output["FilterRule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionByDefault => {
  const contents: any = {
    SSEAlgorithm: undefined,
    KMSMasterKeyID: undefined,
  };
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = __expectString(output["SSEAlgorithm"]);
  }
  if (output["KMSMasterKeyID"] !== undefined) {
    contents.KMSMasterKeyID = __expectString(output["KMSMasterKeyID"]);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  const contents: any = {
    Rules: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  } else if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlServerSideEncryptionRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule => {
  const contents: any = {
    ApplyServerSideEncryptionByDefault: undefined,
    BucketKeyEnabled: undefined,
  };
  if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
    contents.ApplyServerSideEncryptionByDefault = deserializeAws_restXmlServerSideEncryptionByDefault(
      output["ApplyServerSideEncryptionByDefault"],
      context
    );
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = __parseBoolean(output["BucketKeyEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlServerSideEncryptionRule(entry, context);
    });
};

const deserializeAws_restXmlSourceSelectionCriteria = (
  output: any,
  context: __SerdeContext
): SourceSelectionCriteria => {
  const contents: any = {
    SseKmsEncryptedObjects: undefined,
    ReplicaModifications: undefined,
  };
  if (output["SseKmsEncryptedObjects"] !== undefined) {
    contents.SseKmsEncryptedObjects = deserializeAws_restXmlSseKmsEncryptedObjects(
      output["SseKmsEncryptedObjects"],
      context
    );
  }
  if (output["ReplicaModifications"] !== undefined) {
    contents.ReplicaModifications = deserializeAws_restXmlReplicaModifications(output["ReplicaModifications"], context);
  }
  return contents;
};

const deserializeAws_restXmlSSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  const contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
  }
  return contents;
};

const deserializeAws_restXmlSseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlSSES3 = (output: any, context: __SerdeContext): SSES3 => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlStats = (output: any, context: __SerdeContext): Stats => {
  const contents: any = {
    BytesScanned: undefined,
    BytesProcessed: undefined,
    BytesReturned: undefined,
  };
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

const deserializeAws_restXmlStorageClassAnalysis = (output: any, context: __SerdeContext): StorageClassAnalysis => {
  const contents: any = {
    DataExport: undefined,
  };
  if (output["DataExport"] !== undefined) {
    contents.DataExport = deserializeAws_restXmlStorageClassAnalysisDataExport(output["DataExport"], context);
  }
  return contents;
};

const deserializeAws_restXmlStorageClassAnalysisDataExport = (
  output: any,
  context: __SerdeContext
): StorageClassAnalysisDataExport => {
  const contents: any = {
    OutputSchemaVersion: undefined,
    Destination: undefined,
  };
  if (output["OutputSchemaVersion"] !== undefined) {
    contents.OutputSchemaVersion = __expectString(output["OutputSchemaVersion"]);
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlAnalyticsExportDestination(output["Destination"], context);
  }
  return contents;
};

const deserializeAws_restXmlTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_restXmlTagSet = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTag(entry, context);
    });
};

const deserializeAws_restXmlTargetGrant = (output: any, context: __SerdeContext): TargetGrant => {
  const contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

const deserializeAws_restXmlTargetGrants = (output: any, context: __SerdeContext): TargetGrant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTargetGrant(entry, context);
    });
};

const deserializeAws_restXmlTiering = (output: any, context: __SerdeContext): Tiering => {
  const contents: any = {
    Days: undefined,
    AccessTier: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["AccessTier"] !== undefined) {
    contents.AccessTier = __expectString(output["AccessTier"]);
  }
  return contents;
};

const deserializeAws_restXmlTieringList = (output: any, context: __SerdeContext): Tiering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTiering(entry, context);
    });
};

const deserializeAws_restXmlTopicConfiguration = (output: any, context: __SerdeContext): TopicConfiguration => {
  const contents: any = {
    Id: undefined,
    TopicArn: undefined,
    Events: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Topic"] !== undefined) {
    contents.TopicArn = __expectString(output["Topic"]);
  }
  if (output.Event === "") {
    contents.Events = [];
  } else if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlTopicConfigurationList = (output: any, context: __SerdeContext): TopicConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTopicConfiguration(entry, context);
    });
};

const deserializeAws_restXmlTransition = (output: any, context: __SerdeContext): Transition => {
  const contents: any = {
    Date: undefined,
    Days: undefined,
    StorageClass: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = __expectNonNull(__parseRfc3339DateTime(output["Date"]));
  }
  if (output["Days"] !== undefined) {
    contents.Days = __strictParseInt32(output["Days"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  return contents;
};

const deserializeAws_restXmlTransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlTransition(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
