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
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "../commands/DeleteObjectsCommand";
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
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "../commands/ListObjectVersionsCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "../commands/ListObjectsCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "../commands/ListObjectsV2Command";
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
  CORSConfiguration,
  CORSRule,
  CSVInput,
  CSVOutput,
  CommonPrefix,
  CompletedMultipartUpload,
  CompletedPart,
  Condition,
  CopyObjectResult,
  CreateBucketConfiguration,
  DefaultRetention,
  Delete,
  DeleteMarkerEntry,
  DeleteMarkerReplication,
  DeletedObject,
  Destination,
  Encryption,
  EncryptionConfiguration,
  ErrorDocument,
  Event,
  ExistingObjectReplication,
  FilterRule,
  GlacierJobParameters,
  Grant,
  Grantee,
  IndexDocument,
  Initiator,
  InputSerialization,
  InventoryConfiguration,
  InventoryDestination,
  InventoryEncryption,
  InventoryFilter,
  InventoryOptionalField,
  InventoryS3BucketDestination,
  InventorySchedule,
  JSONInput,
  JSONOutput,
  LambdaFunctionConfiguration,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  LoggingEnabled,
  MetadataEntry,
  Metrics,
  MetricsAndOperator,
  MetricsConfiguration,
  MetricsFilter,
  MultipartUpload,
  NoSuchBucket,
  NoSuchKey,
  NoSuchUpload,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NotificationConfiguration,
  NotificationConfigurationFilter,
  ObjectAlreadyInActiveTierError,
  ObjectIdentifier,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockRetention,
  ObjectLockRule,
  ObjectNotInActiveTierError,
  ObjectVersion,
  OutputLocation,
  OutputSerialization,
  Owner,
  OwnershipControls,
  OwnershipControlsRule,
  ParquetInput,
  Part,
  PolicyStatus,
  PublicAccessBlockConfiguration,
  QueueConfiguration,
  Redirect,
  RedirectAllRequestsTo,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationTime,
  ReplicationTimeValue,
  RequestPaymentConfiguration,
  RoutingRule,
  S3KeyFilter,
  S3Location,
  SSEKMS,
  SSES3,
  SelectParameters,
  ServerSideEncryptionByDefault,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionRule,
  SourceSelectionCriteria,
  SseKmsEncryptedObjects,
  StorageClassAnalysis,
  StorageClassAnalysisDataExport,
  Tag,
  Tagging,
  TargetGrant,
  TopicConfiguration,
  Transition,
  VersioningConfiguration,
  WebsiteConfiguration,
  _Error,
  _Object,
} from "../models/models_0";
import {
  ContinuationEvent,
  CopyPartResult,
  EndEvent,
  ProgressEvent,
  RecordsEvent,
  RequestProgress,
  RestoreRequest,
  ScanRange,
  SelectObjectContentEventStream,
  StatsEvent,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  dateToUtcString as __dateToUtcString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_restXmlAbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "x-id": "AbortMultipartUpload",
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  let contents: any;
  if (input.MultipartUpload !== undefined) {
    contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.Expires) && { Expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfModifiedSince) && {
      "x-amz-copy-source-if-modified-since": __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "Content-Disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "Content-Language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.CopySource) && { "x-amz-copy-source": input.CopySource! }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerAlgorithm) && {
      "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKey) && {
      "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKeyMD5) && {
      "x-amz-copy-source-server-side-encryption-customer-key-MD5": input.CopySourceSSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "Cache-Control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.TaggingDirective) && { "x-amz-tagging-directive": input.TaggingDirective! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "Content-Encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince) && {
      "x-amz-copy-source-if-unmodified-since": __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentType) && { "Content-Type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfMatch) && {
      "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedSourceBucketOwner) && {
      "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.MetadataDirective) && { "x-amz-metadata-directive": input.MetadataDirective! }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.CopySourceIfNoneMatch) && {
      "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc["x-amz-meta-" + suffix] = input.Metadata![suffix];
        return acc;
      }, {})),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "x-id": "CopyObject",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
      "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket!.toString(),
    }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.ContentType) && { "Content-Type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "Content-Language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "Cache-Control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.Expires) && { Expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "Content-Disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "Content-Encoding": input.ContentEncoding! }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc["x-amz-meta-" + suffix] = input.Metadata![suffix];
        return acc;
      }, {})),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    uploads: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "DeleteObject",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    delete: "",
  };
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = serializeAws_restXmlDelete(input.Delete, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    accelerate: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    "x-id": "GetBucketAnalyticsConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    "x-id": "GetBucketInventoryConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    location: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    logging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    "x-id": "GetBucketMetricsConfiguration",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    notification: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policyStatus: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    requestPayment: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versioning: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.IfUnmodifiedSince) && {
      "If-Unmodified-Since": __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.IfModifiedSince) && {
      "If-Modified-Since": __dateToUtcString(input.IfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.IfNoneMatch) && { "If-None-Match": input.IfNoneMatch! }),
    ...(isSerializableHeaderValue(input.IfMatch) && { "If-Match": input.IfMatch! }),
    ...(isSerializableHeaderValue(input.Range) && { Range: input.Range! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "GetObject",
    ...(input.ResponseContentEncoding !== undefined && { "response-content-encoding": input.ResponseContentEncoding }),
    ...(input.ResponseCacheControl !== undefined && { "response-cache-control": input.ResponseCacheControl }),
    ...(input.ResponseContentLanguage !== undefined && { "response-content-language": input.ResponseContentLanguage }),
    ...(input.ResponseContentDisposition !== undefined && {
      "response-content-disposition": input.ResponseContentDisposition,
    }),
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
    ...(input.ResponseExpires !== undefined && {
      "response-expires": (input.ResponseExpires.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ResponseContentType !== undefined && { "response-content-type": input.ResponseContentType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "legal-hold": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "object-lock": "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    retention: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    torrent: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.Range) && { Range: input.Range! }),
    ...(isSerializableHeaderValue(input.IfNoneMatch) && { "If-None-Match": input.IfNoneMatch! }),
    ...(isSerializableHeaderValue(input.IfUnmodifiedSince) && {
      "If-Unmodified-Since": __dateToUtcString(input.IfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.IfModifiedSince) && {
      "If-Modified-Since": __dateToUtcString(input.IfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.IfMatch) && { "If-Match": input.IfMatch! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    "x-id": "ListBucketAnalyticsConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    "x-id": "ListBucketInventoryConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    "x-id": "ListBucketMetricsConfigurations",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    uploads: "",
    ...(input.UploadIdMarker !== undefined && { "upload-id-marker": input.UploadIdMarker }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.MaxUploads !== undefined && { "max-uploads": input.MaxUploads.toString() }),
    ...(input.KeyMarker !== undefined && { "key-marker": input.KeyMarker }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "list-type": "2",
    ...(input.ContinuationToken !== undefined && { "continuation-token": input.ContinuationToken }),
    ...(input.FetchOwner !== undefined && { "fetch-owner": input.FetchOwner.toString() }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.StartAfter !== undefined && { "start-after": input.StartAfter }),
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versions: "",
    ...(input.KeyMarker !== undefined && { "key-marker": input.KeyMarker }),
    ...(input.MaxKeys !== undefined && { "max-keys": input.MaxKeys.toString() }),
    ...(input.Delimiter !== undefined && { delimiter: input.Delimiter }),
    ...(input.VersionIdMarker !== undefined && { "version-id-marker": input.VersionIdMarker }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.EncodingType !== undefined && { "encoding-type": input.EncodingType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "ListParts",
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
    ...(input.MaxParts !== undefined && { "max-parts": input.MaxParts.toString() }),
    ...(input.PartNumberMarker !== undefined && { "part-number-marker": input.PartNumberMarker.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    accelerate: "",
  };
  let body: any;
  let contents: any;
  if (input.AccelerateConfiguration !== undefined) {
    contents = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
  };
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    analytics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.AnalyticsConfiguration !== undefined) {
    contents = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    cors: "",
  };
  let body: any;
  let contents: any;
  if (input.CORSConfiguration !== undefined) {
    contents = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    encryption: "",
  };
  let body: any;
  let contents: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    contents = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    inventory: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.InventoryConfiguration !== undefined) {
    contents = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    lifecycle: "",
  };
  let body: any;
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    logging: "",
  };
  let body: any;
  let contents: any;
  if (input.BucketLoggingStatus !== undefined) {
    contents = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    metrics: "",
    ...(input.Id !== undefined && { id: input.Id }),
  };
  let body: any;
  let contents: any;
  if (input.MetricsConfiguration !== undefined) {
    contents = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    notification: "",
  };
  let body: any;
  let contents: any;
  if (input.NotificationConfiguration !== undefined) {
    contents = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    ownershipControls: "",
  };
  let body: any;
  let contents: any;
  if (input.OwnershipControls !== undefined) {
    contents = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
      "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess!.toString(),
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    policy: "",
  };
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutBucketPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
  if (input.Policy !== undefined) {
    const node = new __XmlNode("Policy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.Token) && { "x-amz-bucket-object-lock-token": input.Token! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    replication: "",
  };
  let body: any;
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    requestPayment: "",
  };
  let body: any;
  let contents: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    contents = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    tagging: "",
  };
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.MFA) && { "x-amz-mfa": input.MFA! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    versioning: "",
  };
  let body: any;
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    website: "",
  };
  let body: any;
  let contents: any;
  if (input.WebsiteConfiguration !== undefined) {
    contents = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.ContentEncoding) && { "Content-Encoding": input.ContentEncoding! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "Cache-Control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.WebsiteRedirectLocation) && {
      "x-amz-website-redirect-location": input.WebsiteRedirectLocation!,
    }),
    ...(isSerializableHeaderValue(input.ObjectLockLegalHoldStatus) && {
      "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus!,
    }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ContentLength) && { "Content-Length": input.ContentLength!.toString() }),
    ...(isSerializableHeaderValue(input.ObjectLockRetainUntilDate) && {
      "x-amz-object-lock-retain-until-date": (
        input.ObjectLockRetainUntilDate!.toISOString().split(".")[0] + "Z"
      ).toString(),
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.ContentDisposition) && { "Content-Disposition": input.ContentDisposition! }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSEKMSEncryptionContext) && {
      "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext!,
    }),
    ...(isSerializableHeaderValue(input.Tagging) && { "x-amz-tagging": input.Tagging! }),
    ...(isSerializableHeaderValue(input.Expires) && { Expires: __dateToUtcString(input.Expires!).toString() }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ServerSideEncryption) && {
      "x-amz-server-side-encryption": input.ServerSideEncryption!,
    }),
    ...(isSerializableHeaderValue(input.ObjectLockMode) && { "x-amz-object-lock-mode": input.ObjectLockMode! }),
    ...(isSerializableHeaderValue(input.SSEKMSKeyId) && {
      "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId!,
    }),
    ...(isSerializableHeaderValue(input.ContentLanguage) && { "Content-Language": input.ContentLanguage! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.ContentType) && { "Content-Type": input.ContentType! }),
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc["x-amz-meta-" + suffix] = input.Metadata![suffix];
        return acc;
      }, {})),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "PutObject",
  };
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    acl: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "legal-hold": "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.LegalHold !== undefined) {
    contents = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.Token) && { "x-amz-bucket-object-lock-token": input.Token! }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    "object-lock": "",
  };
  let body: any;
  let contents: any;
  if (input.ObjectLockConfiguration !== undefined) {
    contents = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.BypassGovernanceRetention) && {
      "x-amz-bypass-governance-retention": input.BypassGovernanceRetention!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    retention: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.Retention !== undefined) {
    contents = serializeAws_restXmlObjectLockRetention(input.Retention, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    tagging: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    publicAccessBlock: "",
  };
  let body: any;
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    restore: "",
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
  };
  let body: any;
  let contents: any;
  if (input.RestoreRequest !== undefined) {
    contents = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  const query: any = {
    select: "",
    "select-type": "2",
  };
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SelectObjectContentRequest");
  bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
  if (input.Expression !== undefined) {
    const node = new __XmlNode("Expression").addChildNode(new __XmlText(input.Expression)).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.ExpressionType !== undefined) {
    const node = new __XmlNode("ExpressionType")
      .addChildNode(new __XmlText(input.ExpressionType))
      .withName("ExpressionType");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.ContentLength) && { "Content-Length": input.ContentLength!.toString() }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.ContentMD5) && { "Content-MD5": input.ContentMD5! }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "UploadPart",
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
  };
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.RequestPayer) && { "x-amz-request-payer": input.RequestPayer! }),
    ...(isSerializableHeaderValue(input.CopySourceRange) && { "x-amz-copy-source-range": input.CopySourceRange! }),
    ...(isSerializableHeaderValue(input.SSECustomerKey) && {
      "x-amz-server-side-encryption-customer-key": input.SSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerAlgorithm) && {
      "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfMatch) && {
      "x-amz-copy-source-if-match": input.CopySourceIfMatch!,
    }),
    ...(isSerializableHeaderValue(input.ExpectedBucketOwner) && {
      "x-amz-expected-bucket-owner": input.ExpectedBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKey) && {
      "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey!,
    }),
    ...(isSerializableHeaderValue(input.CopySource) && { "x-amz-copy-source": input.CopySource! }),
    ...(isSerializableHeaderValue(input.CopySourceIfModifiedSince) && {
      "x-amz-copy-source-if-modified-since": __dateToUtcString(input.CopySourceIfModifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerAlgorithm) && {
      "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince) && {
      "x-amz-copy-source-if-unmodified-since": __dateToUtcString(input.CopySourceIfUnmodifiedSince!).toString(),
    }),
    ...(isSerializableHeaderValue(input.ExpectedSourceBucketOwner) && {
      "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner!,
    }),
    ...(isSerializableHeaderValue(input.SSECustomerKeyMD5) && {
      "x-amz-server-side-encryption-customer-key-MD5": input.SSECustomerKeyMD5!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceIfNoneMatch) && {
      "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch!,
    }),
    ...(isSerializableHeaderValue(input.CopySourceSSECustomerKeyMD5) && {
      "x-amz-copy-source-server-side-encryption-customer-key-MD5": input.CopySourceSSECustomerKeyMD5!,
    }),
  };
  let resolvedPath = "/{Bucket}/{Key+}";
  if (input.Bucket !== undefined) {
    const labelValue: string = input.Bucket;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Bucket.");
    }
    resolvedPath = resolvedPath.replace("{Bucket}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Bucket.");
  }
  if (input.Key !== undefined) {
    const labelValue: string = input.Key;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Key.");
    }
    resolvedPath = resolvedPath.replace(
      "{Key+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Key.");
  }
  const query: any = {
    "x-id": "UploadPartCopy",
    ...(input.UploadId !== undefined && { uploadId: input.UploadId }),
    ...(input.PartNumber !== undefined && { partNumber: input.PartNumber.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restXmlAbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlAbortMultipartUploadCommandError(output, context);
  }
  const contents: AbortMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlAbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      response = {
        ...(await deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context);
  }
  const contents: CompleteMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    ETag: undefined,
    Expiration: undefined,
    Key: undefined,
    Location: undefined,
    RequestCharged: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["ETag"] !== undefined) {
    contents.ETag = data["ETag"];
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["Location"] !== undefined) {
    contents.Location = data["Location"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCopyObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCopyObjectCommandError(output, context);
  }
  const contents: CopyObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    CopyObjectResult: undefined,
    CopySourceVersionId: undefined,
    Expiration: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
    contents.CopySourceVersionId = output.headers["x-amz-copy-source-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  const data: any = await parseBody(output.body, context);
  contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCopyObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      response = {
        ...(await deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateBucketCommandError(output, context);
  }
  const contents: CreateBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMultipartUploadCommandError(output, context);
  }
  const contents: CreateMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    AbortDate: undefined,
    AbortRuleId: undefined,
    Bucket: undefined,
    Key: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    UploadId: undefined,
  };
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-abort-date"] !== undefined) {
    contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-abort-rule-id"] !== undefined) {
    contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = data["UploadId"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCommandError(output, context);
  }
  const contents: DeleteBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketCorsCommandError(output, context);
  }
  const contents: DeleteBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context);
  }
  const contents: DeleteBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context);
  }
  const contents: DeleteBucketLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError(output, context);
  }
  const contents: DeleteBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
  }
  const contents: DeleteBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context);
  }
  const contents: DeleteBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
  }
  const contents: DeleteBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context);
  }
  const contents: DeleteBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeleteMarker: undefined,
    RequestCharged: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectsCommandError(output, context);
  }
  const contents: DeleteObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Deleted: undefined,
    Errors: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.Deleted === "") {
    contents.Deleted = [];
  }
  if (data["Deleted"] !== undefined) {
    contents.Deleted = deserializeAws_restXmlDeletedObjects(__getArrayIfSingleItem(data["Deleted"]), context);
  }
  if (data.Error === "") {
    contents.Errors = [];
  }
  if (data["Error"] !== undefined) {
    contents.Errors = deserializeAws_restXmlErrors(__getArrayIfSingleItem(data["Error"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context);
  }
  const contents: DeleteObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
  }
  const contents: DeletePublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: GetBucketAccelerateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Status"] !== undefined) {
    contents.Status = data["Status"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAclCommandError(output, context);
  }
  const contents: GetBucketAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    Grants: undefined,
    Owner: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessControlList === "") {
    contents.Grants = [];
  }
  if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: GetBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalyticsConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.AnalyticsConfiguration = deserializeAws_restXmlAnalyticsConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCorsCommandError(output, context);
  }
  const contents: GetBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CORSRules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CORSRule === "") {
    contents.CORSRules = [];
  }
  if (data["CORSRule"] !== undefined) {
    contents.CORSRules = deserializeAws_restXmlCORSRules(__getArrayIfSingleItem(data["CORSRule"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketEncryptionCommandError(output, context);
  }
  const contents: GetBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ServerSideEncryptionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: GetBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    InventoryConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.InventoryConfiguration = deserializeAws_restXmlInventoryConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: GetBucketLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Rules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Rule === "") {
    contents.Rules = [];
  }
  if (data["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rule"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLocationCommandError(output, context);
  }
  const contents: GetBucketLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LocationConstraint: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["LocationConstraint"] !== undefined) {
    contents.LocationConstraint = data["LocationConstraint"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketLoggingCommandError(output, context);
  }
  const contents: GetBucketLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    LoggingEnabled: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["LoggingEnabled"] !== undefined) {
    contents.LoggingEnabled = deserializeAws_restXmlLoggingEnabled(data["LoggingEnabled"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: GetBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    MetricsConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MetricsConfiguration = deserializeAws_restXmlMetricsConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: GetBucketNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    LambdaFunctionConfigurations: undefined,
    QueueConfigurations: undefined,
    TopicConfigurations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CloudFunctionConfiguration === "") {
    contents.LambdaFunctionConfigurations = [];
  }
  if (data["CloudFunctionConfiguration"] !== undefined) {
    contents.LambdaFunctionConfigurations = deserializeAws_restXmlLambdaFunctionConfigurationList(
      __getArrayIfSingleItem(data["CloudFunctionConfiguration"]),
      context
    );
  }
  if (data.QueueConfiguration === "") {
    contents.QueueConfigurations = [];
  }
  if (data["QueueConfiguration"] !== undefined) {
    contents.QueueConfigurations = deserializeAws_restXmlQueueConfigurationList(
      __getArrayIfSingleItem(data["QueueConfiguration"]),
      context
    );
  }
  if (data.TopicConfiguration === "") {
    contents.TopicConfigurations = [];
  }
  if (data["TopicConfiguration"] !== undefined) {
    contents.TopicConfigurations = deserializeAws_restXmlTopicConfigurationList(
      __getArrayIfSingleItem(data["TopicConfiguration"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketOwnershipControlsCommandError(output, context);
  }
  const contents: GetBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    OwnershipControls: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.OwnershipControls = deserializeAws_restXmlOwnershipControls(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
  }
  const contents: GetBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Policy"] !== undefined) {
    contents.Policy = data["Policy"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context);
  }
  const contents: GetBucketPolicyStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    PolicyStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketReplicationCommandError(output, context);
  }
  const contents: GetBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReplicationConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ReplicationConfiguration = deserializeAws_restXmlReplicationConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context);
  }
  const contents: GetBucketRequestPaymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Payer: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Payer"] !== undefined) {
    contents.Payer = data["Payer"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
  }
  const contents: GetBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagSet: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.TagSet === "") {
    contents.TagSet = [];
  }
  if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketVersioningCommandError(output, context);
  }
  const contents: GetBucketVersioningCommandOutput = {
    $metadata: deserializeMetadata(output),
    MFADelete: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["MfaDelete"] !== undefined) {
    contents.MFADelete = data["MfaDelete"];
  }
  if (data["Status"] !== undefined) {
    contents.Status = data["Status"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketWebsiteCommandError(output, context);
  }
  const contents: GetBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ErrorDocument: undefined,
    IndexDocument: undefined,
    RedirectAllRequestsTo: undefined,
    RoutingRules: undefined,
  };
  const data: any = await parseBody(output.body, context);
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
  }
  if (data["RoutingRules"] !== undefined && data["RoutingRules"]["RoutingRule"] !== undefined) {
    contents.RoutingRules = deserializeAws_restXmlRoutingRules(
      __getArrayIfSingleItem(data["RoutingRules"]["RoutingRule"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectCommandError(output, context);
  }
  const contents: GetObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcceptRanges: undefined,
    Body: undefined,
    CacheControl: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentRange: undefined,
    ContentType: undefined,
    DeleteMarker: undefined,
    ETag: undefined,
    Expiration: undefined,
    Expires: undefined,
    LastModified: undefined,
    Metadata: undefined,
    MissingMeta: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    PartsCount: undefined,
    ReplicationStatus: undefined,
    RequestCharged: undefined,
    Restore: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    StorageClass: undefined,
    TagCount: undefined,
    VersionId: undefined,
    WebsiteRedirectLocation: undefined,
  };
  if (output.headers["x-amz-object-lock-mode"] !== undefined) {
    contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
  }
  if (output.headers["content-language"] !== undefined) {
    contents.ContentLanguage = output.headers["content-language"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.ContentDisposition = output.headers["content-disposition"];
  }
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["content-range"] !== undefined) {
    contents.ContentRange = output.headers["content-range"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
  }
  if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
  }
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-storage-class"] !== undefined) {
    contents.StorageClass = output.headers["x-amz-storage-class"];
  }
  if (output.headers["content-encoding"] !== undefined) {
    contents.ContentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["x-amz-restore"] !== undefined) {
    contents.Restore = output.headers["x-amz-restore"];
  }
  if (output.headers["x-amz-website-redirect-location"] !== undefined) {
    contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-mp-parts-count"] !== undefined) {
    contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.AcceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["expires"] !== undefined) {
    contents.Expires = new Date(output.headers["expires"]);
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-missing-meta"] !== undefined) {
    contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
  }
  if (output.headers["x-amz-replication-status"] !== undefined) {
    contents.ReplicationStatus = output.headers["x-amz-replication-status"];
  }
  if (output.headers["x-amz-tagging-count"] !== undefined) {
    contents.TagCount = parseInt(output.headers["x-amz-tagging-count"], 10);
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.Metadata === undefined) {
      contents.Metadata = {};
    }
    if (header.startsWith("x-amz-meta-")) {
      contents.Metadata[header.substring(11)] = output.headers[header];
    }
  });
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectAclCommandError(output, context);
  }
  const contents: GetObjectAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    Grants: undefined,
    Owner: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.AccessControlList === "") {
    contents.Grants = [];
  }
  if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
    contents.Grants = deserializeAws_restXmlGrants(__getArrayIfSingleItem(data["AccessControlList"]["Grant"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context);
  }
  const contents: GetObjectLegalHoldCommandOutput = {
    $metadata: deserializeMetadata(output),
    LegalHold: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.LegalHold = deserializeAws_restXmlObjectLockLegalHold(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context);
  }
  const contents: GetObjectLockConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ObjectLockConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectRetentionCommandError(output, context);
  }
  const contents: GetObjectRetentionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Retention: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.Retention = deserializeAws_restXmlObjectLockRetention(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTaggingCommandError(output, context);
  }
  const contents: GetObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagSet: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.TagSet === "") {
    contents.TagSet = [];
  }
  if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetObjectTorrentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetObjectTorrentCommandError(output, context);
  }
  const contents: GetObjectTorrentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Body: undefined,
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetObjectTorrentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
  }
  const contents: GetPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    PublicAccessBlockConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHeadBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadBucketCommandError(output, context);
  }
  const contents: HeadBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHeadBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlHeadObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlHeadObjectCommandError(output, context);
  }
  const contents: HeadObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    AcceptRanges: undefined,
    CacheControl: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    DeleteMarker: undefined,
    ETag: undefined,
    Expiration: undefined,
    Expires: undefined,
    LastModified: undefined,
    Metadata: undefined,
    MissingMeta: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    PartsCount: undefined,
    ReplicationStatus: undefined,
    RequestCharged: undefined,
    Restore: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    StorageClass: undefined,
    VersionId: undefined,
    WebsiteRedirectLocation: undefined,
  };
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["x-amz-object-lock-retain-until-date"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output.headers["x-amz-object-lock-retain-until-date"]);
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.ContentDisposition = output.headers["content-disposition"];
  }
  if (output.headers["content-language"] !== undefined) {
    contents.ContentLanguage = output.headers["content-language"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["expires"] !== undefined) {
    contents.Expires = new Date(output.headers["expires"]);
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-replication-status"] !== undefined) {
    contents.ReplicationStatus = output.headers["x-amz-replication-status"];
  }
  if (output.headers["x-amz-object-lock-legal-hold"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output.headers["x-amz-object-lock-legal-hold"];
  }
  if (output.headers["x-amz-website-redirect-location"] !== undefined) {
    contents.WebsiteRedirectLocation = output.headers["x-amz-website-redirect-location"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-mp-parts-count"] !== undefined) {
    contents.PartsCount = parseInt(output.headers["x-amz-mp-parts-count"], 10);
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  if (output.headers["x-amz-missing-meta"] !== undefined) {
    contents.MissingMeta = parseInt(output.headers["x-amz-missing-meta"], 10);
  }
  if (output.headers["x-amz-restore"] !== undefined) {
    contents.Restore = output.headers["x-amz-restore"];
  }
  if (output.headers["content-encoding"] !== undefined) {
    contents.ContentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["x-amz-storage-class"] !== undefined) {
    contents.StorageClass = output.headers["x-amz-storage-class"];
  }
  if (output.headers["x-amz-delete-marker"] !== undefined) {
    contents.DeleteMarker = output.headers["x-amz-delete-marker"] === "true";
  }
  if (output.headers["x-amz-object-lock-mode"] !== undefined) {
    contents.ObjectLockMode = output.headers["x-amz-object-lock-mode"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.AcceptRanges = output.headers["accept-ranges"];
  }
  Object.keys(output.headers).forEach((header) => {
    if (contents.Metadata === undefined) {
      contents.Metadata = {};
    }
    if (header.startsWith("x-amz-meta-")) {
      contents.Metadata[header.substring(11)] = output.headers[header];
    }
  });
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlHeadObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context);
  }
  const contents: ListBucketAnalyticsConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AnalyticsConfigurationList: undefined,
    ContinuationToken: undefined,
    IsTruncated: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AnalyticsConfiguration === "") {
    contents.AnalyticsConfigurationList = [];
  }
  if (data["AnalyticsConfiguration"] !== undefined) {
    contents.AnalyticsConfigurationList = deserializeAws_restXmlAnalyticsConfigurationList(
      __getArrayIfSingleItem(data["AnalyticsConfiguration"]),
      context
    );
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketInventoryConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context);
  }
  const contents: ListBucketInventoryConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContinuationToken: undefined,
    InventoryConfigurationList: undefined,
    IsTruncated: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data.InventoryConfiguration === "") {
    contents.InventoryConfigurationList = [];
  }
  if (data["InventoryConfiguration"] !== undefined) {
    contents.InventoryConfigurationList = deserializeAws_restXmlInventoryConfigurationList(
      __getArrayIfSingleItem(data["InventoryConfiguration"]),
      context
    );
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketInventoryConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketMetricsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context);
  }
  const contents: ListBucketMetricsConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContinuationToken: undefined,
    IsTruncated: undefined,
    MetricsConfigurationList: undefined,
    NextContinuationToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data.MetricsConfiguration === "") {
    contents.MetricsConfigurationList = [];
  }
  if (data["MetricsConfiguration"] !== undefined) {
    contents.MetricsConfigurationList = deserializeAws_restXmlMetricsConfigurationList(
      __getArrayIfSingleItem(data["MetricsConfiguration"]),
      context
    );
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketMetricsConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListBucketsCommandError(output, context);
  }
  const contents: ListBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Buckets: undefined,
    Owner: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Buckets === "") {
    contents.Buckets = [];
  }
  if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(data["Buckets"]["Bucket"]), context);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMultipartUploadsCommandError(output, context);
  }
  const contents: ListMultipartUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    CommonPrefixes: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyMarker: undefined,
    MaxUploads: undefined,
    NextKeyMarker: undefined,
    NextUploadIdMarker: undefined,
    Prefix: undefined,
    UploadIdMarker: undefined,
    Uploads: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = data["KeyMarker"];
  }
  if (data["MaxUploads"] !== undefined) {
    contents.MaxUploads = parseInt(data["MaxUploads"]);
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = data["NextKeyMarker"];
  }
  if (data["NextUploadIdMarker"] !== undefined) {
    contents.NextUploadIdMarker = data["NextUploadIdMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["UploadIdMarker"] !== undefined) {
    contents.UploadIdMarker = data["UploadIdMarker"];
  }
  if (data.Upload === "") {
    contents.Uploads = [];
  }
  if (data["Upload"] !== undefined) {
    contents.Uploads = deserializeAws_restXmlMultipartUploadList(__getArrayIfSingleItem(data["Upload"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsCommandError(output, context);
  }
  const contents: ListObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    Contents: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextMarker: undefined,
    Prefix: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  }
  if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["Marker"] !== undefined) {
    contents.Marker = data["Marker"];
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextMarker"] !== undefined) {
    contents.NextMarker = data["NextMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectsV2CommandError(output, context);
  }
  const contents: ListObjectsV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    Contents: undefined,
    ContinuationToken: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyCount: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextContinuationToken: undefined,
    Prefix: undefined,
    StartAfter: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.Contents === "") {
    contents.Contents = [];
  }
  if (data["Contents"] !== undefined) {
    contents.Contents = deserializeAws_restXmlObjectList(__getArrayIfSingleItem(data["Contents"]), context);
  }
  if (data["ContinuationToken"] !== undefined) {
    contents.ContinuationToken = data["ContinuationToken"];
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyCount"] !== undefined) {
    contents.KeyCount = parseInt(data["KeyCount"]);
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextContinuationToken"] !== undefined) {
    contents.NextContinuationToken = data["NextContinuationToken"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["StartAfter"] !== undefined) {
    contents.StartAfter = data["StartAfter"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectsV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      response = {
        ...(await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListObjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListObjectVersionsCommandError(output, context);
  }
  const contents: ListObjectVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CommonPrefixes: undefined,
    DeleteMarkers: undefined,
    Delimiter: undefined,
    EncodingType: undefined,
    IsTruncated: undefined,
    KeyMarker: undefined,
    MaxKeys: undefined,
    Name: undefined,
    NextKeyMarker: undefined,
    NextVersionIdMarker: undefined,
    Prefix: undefined,
    VersionIdMarker: undefined,
    Versions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CommonPrefixes === "") {
    contents.CommonPrefixes = [];
  }
  if (data["CommonPrefixes"] !== undefined) {
    contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList(
      __getArrayIfSingleItem(data["CommonPrefixes"]),
      context
    );
  }
  if (data.DeleteMarker === "") {
    contents.DeleteMarkers = [];
  }
  if (data["DeleteMarker"] !== undefined) {
    contents.DeleteMarkers = deserializeAws_restXmlDeleteMarkers(__getArrayIfSingleItem(data["DeleteMarker"]), context);
  }
  if (data["Delimiter"] !== undefined) {
    contents.Delimiter = data["Delimiter"];
  }
  if (data["EncodingType"] !== undefined) {
    contents.EncodingType = data["EncodingType"];
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["KeyMarker"] !== undefined) {
    contents.KeyMarker = data["KeyMarker"];
  }
  if (data["MaxKeys"] !== undefined) {
    contents.MaxKeys = parseInt(data["MaxKeys"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NextKeyMarker"] !== undefined) {
    contents.NextKeyMarker = data["NextKeyMarker"];
  }
  if (data["NextVersionIdMarker"] !== undefined) {
    contents.NextVersionIdMarker = data["NextVersionIdMarker"];
  }
  if (data["Prefix"] !== undefined) {
    contents.Prefix = data["Prefix"];
  }
  if (data["VersionIdMarker"] !== undefined) {
    contents.VersionIdMarker = data["VersionIdMarker"];
  }
  if (data.Version === "") {
    contents.Versions = [];
  }
  if (data["Version"] !== undefined) {
    contents.Versions = deserializeAws_restXmlObjectVersionList(__getArrayIfSingleItem(data["Version"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListObjectVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListPartsCommandError(output, context);
  }
  const contents: ListPartsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AbortDate: undefined,
    AbortRuleId: undefined,
    Bucket: undefined,
    Initiator: undefined,
    IsTruncated: undefined,
    Key: undefined,
    MaxParts: undefined,
    NextPartNumberMarker: undefined,
    Owner: undefined,
    PartNumberMarker: undefined,
    Parts: undefined,
    RequestCharged: undefined,
    StorageClass: undefined,
    UploadId: undefined,
  };
  if (output.headers["x-amz-abort-rule-id"] !== undefined) {
    contents.AbortRuleId = output.headers["x-amz-abort-rule-id"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-abort-date"] !== undefined) {
    contents.AbortDate = new Date(output.headers["x-amz-abort-date"]);
  }
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["Initiator"] !== undefined) {
    contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
  }
  if (data["IsTruncated"] !== undefined) {
    contents.IsTruncated = data["IsTruncated"] == "true";
  }
  if (data["Key"] !== undefined) {
    contents.Key = data["Key"];
  }
  if (data["MaxParts"] !== undefined) {
    contents.MaxParts = parseInt(data["MaxParts"]);
  }
  if (data["NextPartNumberMarker"] !== undefined) {
    contents.NextPartNumberMarker = parseInt(data["NextPartNumberMarker"]);
  }
  if (data["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
  }
  if (data["PartNumberMarker"] !== undefined) {
    contents.PartNumberMarker = parseInt(data["PartNumberMarker"]);
  }
  if (data.Part === "") {
    contents.Parts = [];
  }
  if (data["Part"] !== undefined) {
    contents.Parts = deserializeAws_restXmlParts(__getArrayIfSingleItem(data["Part"]), context);
  }
  if (data["StorageClass"] !== undefined) {
    contents.StorageClass = data["StorageClass"];
  }
  if (data["UploadId"] !== undefined) {
    contents.UploadId = data["UploadId"];
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context);
  }
  const contents: PutBucketAccelerateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAclCommandError(output, context);
  }
  const contents: PutBucketAclCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context);
  }
  const contents: PutBucketAnalyticsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketCorsCommandError(output, context);
  }
  const contents: PutBucketCorsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketCorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketEncryptionCommandError(output, context);
  }
  const contents: PutBucketEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context);
  }
  const contents: PutBucketInventoryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketInventoryConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: PutBucketLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketLoggingCommandError(output, context);
  }
  const contents: PutBucketLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context);
  }
  const contents: PutBucketMetricsConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketMetricsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context);
  }
  const contents: PutBucketNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketOwnershipControlsCommandError(output, context);
  }
  const contents: PutBucketOwnershipControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketOwnershipControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
  }
  const contents: PutBucketPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketReplicationCommandError(output, context);
  }
  const contents: PutBucketReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context);
  }
  const contents: PutBucketRequestPaymentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketRequestPaymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
  }
  const contents: PutBucketTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketVersioningCommandError(output, context);
  }
  const contents: PutBucketVersioningCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketVersioningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutBucketWebsiteCommandError(output, context);
  }
  const contents: PutBucketWebsiteCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutBucketWebsiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectCommandError(output, context);
  }
  const contents: PutObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    Expiration: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSEncryptionContext: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
    VersionId: undefined,
  };
  if (output.headers["x-amz-server-side-encryption-context"] !== undefined) {
    contents.SSEKMSEncryptionContext = output.headers["x-amz-server-side-encryption-context"];
  }
  if (output.headers["x-amz-expiration"] !== undefined) {
    contents.Expiration = output.headers["x-amz-expiration"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectAclCommandError(output, context);
  }
  const contents: PutObjectAclCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectAclCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      response = {
        ...(await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context);
  }
  const contents: PutObjectLegalHoldCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context);
  }
  const contents: PutObjectLockConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectRetentionCommandError(output, context);
  }
  const contents: PutObjectRetentionCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutObjectTaggingCommandError(output, context);
  }
  const contents: PutObjectTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    VersionId: undefined,
  };
  if (output.headers["x-amz-version-id"] !== undefined) {
    contents.VersionId = output.headers["x-amz-version-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutObjectTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
  }
  const contents: PutPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlRestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlRestoreObjectCommandError(output, context);
  }
  const contents: RestoreObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    RequestCharged: undefined,
    RestoreOutputPath: undefined,
  };
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-restore-output-path"] !== undefined) {
    contents.RestoreOutputPath = output.headers["x-amz-restore-output-path"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlRestoreObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      response = {
        ...(await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlSelectObjectContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlSelectObjectContentCommandError(output, context);
  }
  const contents: SelectObjectContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    Payload: undefined,
  };
  const data: any = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
    const eventName = Object.keys(event)[0];
    const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
      accummulator[curr[0]] = curr[1].value;
      return accummulator;
    }, {} as { [key: string]: any });
    const eventMessage = {
      headers: eventHeaders,
      body: event[eventName].body,
    };
    const parsedEvent = {
      [eventName]: eventMessage,
    };
    return await deserializeAws_restXmlSelectObjectContentEventStream_event(parsedEvent, context);
  });
  contents.Payload = data;
  return Promise.resolve(contents);
};

const deserializeAws_restXmlSelectObjectContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUploadPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCommandError(output, context);
  }
  const contents: UploadPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    ETag: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
  };
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUploadPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUploadPartCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUploadPartCopyCommandError(output, context);
  }
  const contents: UploadPartCopyCommandOutput = {
    $metadata: deserializeMetadata(output),
    CopyPartResult: undefined,
    CopySourceVersionId: undefined,
    RequestCharged: undefined,
    SSECustomerAlgorithm: undefined,
    SSECustomerKeyMD5: undefined,
    SSEKMSKeyId: undefined,
    ServerSideEncryption: undefined,
  };
  if (output.headers["x-amz-copy-source-version-id"] !== undefined) {
    contents.CopySourceVersionId = output.headers["x-amz-copy-source-version-id"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-algorithm"] !== undefined) {
    contents.SSECustomerAlgorithm = output.headers["x-amz-server-side-encryption-customer-algorithm"];
  }
  if (output.headers["x-amz-server-side-encryption-customer-key-md5"] !== undefined) {
    contents.SSECustomerKeyMD5 = output.headers["x-amz-server-side-encryption-customer-key-md5"];
  }
  if (output.headers["x-amz-request-charged"] !== undefined) {
    contents.RequestCharged = output.headers["x-amz-request-charged"];
  }
  if (output.headers["x-amz-server-side-encryption-aws-kms-key-id"] !== undefined) {
    contents.SSEKMSKeyId = output.headers["x-amz-server-side-encryption-aws-kms-key-id"];
  }
  if (output.headers["x-amz-server-side-encryption"] !== undefined) {
    contents.ServerSideEncryption = output.headers["x-amz-server-side-encryption"];
  }
  const data: any = await parseBody(output.body, context);
  contents.CopyPartResult = deserializeAws_restXmlCopyPartResult(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUploadPartCopyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restXmlSelectObjectContentEventStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<SelectObjectContentEventStream> => {
  if (output["Cont"] !== undefined) {
    return {
      Cont: await deserializeAws_restXmlContinuationEvent_event(output["Cont"], context),
    };
  }
  if (output["Progress"] !== undefined) {
    return {
      Progress: await deserializeAws_restXmlProgressEvent_event(output["Progress"], context),
    };
  }
  if (output["Stats"] !== undefined) {
    return {
      Stats: await deserializeAws_restXmlStatsEvent_event(output["Stats"], context),
    };
  }
  if (output["End"] !== undefined) {
    return {
      End: await deserializeAws_restXmlEndEvent_event(output["End"], context),
    };
  }
  if (output["Records"] !== undefined) {
    return {
      Records: await deserializeAws_restXmlRecordsEvent_event(output["Records"], context),
    };
  }
  return { $unknown: output };
};
const deserializeAws_restXmlContinuationEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContinuationEvent> => {
  let contents: ContinuationEvent = {} as any;
  return contents;
};
const deserializeAws_restXmlEndEvent_event = async (output: any, context: __SerdeContext): Promise<EndEvent> => {
  let contents: EndEvent = {} as any;
  return contents;
};
const deserializeAws_restXmlProgressEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ProgressEvent> => {
  let contents: ProgressEvent = {} as any;
  contents.Details = await parseBody(output.body, context);
  return contents;
};
const deserializeAws_restXmlRecordsEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<RecordsEvent> => {
  let contents: RecordsEvent = {} as any;
  contents.Payload = output.body;
  return contents;
};
const deserializeAws_restXmlStatsEvent_event = async (output: any, context: __SerdeContext): Promise<StatsEvent> => {
  let contents: StatsEvent = {} as any;
  contents.Details = await parseBody(output.body, context);
  return contents;
};
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyExists> => {
  const contents: BucketAlreadyExists = {
    name: "BucketAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyOwnedByYou> => {
  const contents: BucketAlreadyOwnedByYou = {
    name: "BucketAlreadyOwnedByYou",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlNoSuchBucketResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchBucket> => {
  const contents: NoSuchBucket = {
    name: "NoSuchBucket",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlNoSuchKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchKey> => {
  const contents: NoSuchKey = {
    name: "NoSuchKey",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlNoSuchUploadResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchUpload> => {
  const contents: NoSuchUpload = {
    name: "NoSuchUpload",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectAlreadyInActiveTierError> => {
  const contents: ObjectAlreadyInActiveTierError = {
    name: "ObjectAlreadyInActiveTierError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restXmlObjectNotInActiveTierErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotInActiveTierError> => {
  const contents: ObjectNotInActiveTierError = {
    name: "ObjectNotInActiveTierError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const serializeAws_restXmlAbortIncompleteMultipartUpload = (
  input: AbortIncompleteMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
  if (input.DaysAfterInitiation !== undefined) {
    const node = new __XmlNode("DaysAfterInitiation")
      .addChildNode(new __XmlText(String(input.DaysAfterInitiation)))
      .withName("DaysAfterInitiation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccelerateConfiguration = (input: AccelerateConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccelerateConfiguration");
  if (input.Status !== undefined) {
    const node = new __XmlNode("BucketAccelerateStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccessControlPolicy = (input: AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccessControlPolicy");
  if (input.Grants !== undefined) {
    const nodes = serializeAws_restXmlGrants(input.Grants, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Owner !== undefined) {
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
  if (input.Owner !== undefined) {
    const node = new __XmlNode("OwnerOverride").addChildNode(new __XmlText(input.Owner)).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = new __XmlNode("AllowedHeader").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlAllowedMethods = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = new __XmlNode("AllowedMethod").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlAllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = new __XmlNode("AllowedOrigin").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlAnalyticsAndOperator = (input: AnalyticsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsAndOperator");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
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
  if (input.StorageClassAnalysis !== undefined) {
    const node = serializeAws_restXmlStorageClassAnalysis(input.StorageClassAnalysis, context).withName(
      "StorageClassAnalysis"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlAnalyticsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Id !== undefined) {
    const node = new __XmlNode("AnalyticsId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsExportDestination = (
  input: AnalyticsExportDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AnalyticsExportDestination");
  if (input.S3BucketDestination !== undefined) {
    const node = serializeAws_restXmlAnalyticsS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsFilter = (input: AnalyticsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AnalyticsFilter");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined) {
    const node = serializeAws_restXmlAnalyticsAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAnalyticsS3BucketDestination = (
  input: AnalyticsS3BucketDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AnalyticsS3BucketDestination");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.BucketAccountId !== undefined) {
    const node = new __XmlNode("AccountId")
      .addChildNode(new __XmlText(input.BucketAccountId))
      .withName("BucketAccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Format !== undefined) {
    const node = new __XmlNode("AnalyticsS3ExportFileFormat")
      .addChildNode(new __XmlText(input.Format))
      .withName("Format");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketLifecycleConfiguration = (
  input: BucketLifecycleConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("BucketLifecycleConfiguration");
  if (input.Rules !== undefined) {
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
  if (input.LoggingEnabled !== undefined) {
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
  if (input.Parts !== undefined) {
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
  if (input.ETag !== undefined) {
    const node = new __XmlNode("ETag").addChildNode(new __XmlText(input.ETag)).withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.PartNumber !== undefined) {
    const node = new __XmlNode("PartNumber")
      .addChildNode(new __XmlText(String(input.PartNumber)))
      .withName("PartNumber");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCompletedPartList = (input: CompletedPart[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlCompletedPart(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlCondition = (input: Condition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Condition");
  if (input.KeyPrefixEquals !== undefined) {
    const node = new __XmlNode("KeyPrefixEquals")
      .addChildNode(new __XmlText(input.KeyPrefixEquals))
      .withName("KeyPrefixEquals");
    bodyNode.addChildNode(node);
  }
  if (input.HttpErrorCodeReturnedEquals !== undefined) {
    const node = new __XmlNode("HttpErrorCodeReturnedEquals")
      .addChildNode(new __XmlText(input.HttpErrorCodeReturnedEquals))
      .withName("HttpErrorCodeReturnedEquals");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCORSConfiguration = (input: CORSConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CORSConfiguration");
  if (input.CORSRules !== undefined) {
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
  if (input.AllowedHeaders !== undefined) {
    const nodes = serializeAws_restXmlAllowedHeaders(input.AllowedHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedOrigins !== undefined) {
    const nodes = serializeAws_restXmlAllowedOrigins(input.AllowedOrigins, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedOrigin");
      bodyNode.addChildNode(node);
    });
  }
  if (input.MaxAgeSeconds !== undefined) {
    const node = new __XmlNode("MaxAgeSeconds")
      .addChildNode(new __XmlText(String(input.MaxAgeSeconds)))
      .withName("MaxAgeSeconds");
    bodyNode.addChildNode(node);
  }
  if (input.ExposeHeaders !== undefined) {
    const nodes = serializeAws_restXmlExposeHeaders(input.ExposeHeaders, context);
    nodes.map((node: any) => {
      node = node.withName("ExposeHeader");
      bodyNode.addChildNode(node);
    });
  }
  if (input.AllowedMethods !== undefined) {
    const nodes = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context);
    nodes.map((node: any) => {
      node = node.withName("AllowedMethod");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlCORSRules = (input: CORSRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlCORSRule(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlCreateBucketConfiguration = (
  input: CreateBucketConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateBucketConfiguration");
  if (input.LocationConstraint !== undefined) {
    const node = new __XmlNode("BucketLocationConstraint")
      .addChildNode(new __XmlText(input.LocationConstraint))
      .withName("LocationConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCSVInput = (input: CSVInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVInput");
  if (input.FieldDelimiter !== undefined) {
    const node = new __XmlNode("FieldDelimiter")
      .addChildNode(new __XmlText(input.FieldDelimiter))
      .withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.AllowQuotedRecordDelimiter !== undefined) {
    const node = new __XmlNode("AllowQuotedRecordDelimiter")
      .addChildNode(new __XmlText(String(input.AllowQuotedRecordDelimiter)))
      .withName("AllowQuotedRecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.FileHeaderInfo !== undefined) {
    const node = new __XmlNode("FileHeaderInfo")
      .addChildNode(new __XmlText(input.FileHeaderInfo))
      .withName("FileHeaderInfo");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter !== undefined) {
    const node = new __XmlNode("QuoteCharacter")
      .addChildNode(new __XmlText(input.QuoteCharacter))
      .withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter !== undefined) {
    const node = new __XmlNode("QuoteEscapeCharacter")
      .addChildNode(new __XmlText(input.QuoteEscapeCharacter))
      .withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter !== undefined) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.Comments !== undefined) {
    const node = new __XmlNode("Comments").addChildNode(new __XmlText(input.Comments)).withName("Comments");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlCSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CSVOutput");
  if (input.FieldDelimiter !== undefined) {
    const node = new __XmlNode("FieldDelimiter")
      .addChildNode(new __XmlText(input.FieldDelimiter))
      .withName("FieldDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteFields !== undefined) {
    const node = new __XmlNode("QuoteFields").addChildNode(new __XmlText(input.QuoteFields)).withName("QuoteFields");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteCharacter !== undefined) {
    const node = new __XmlNode("QuoteCharacter")
      .addChildNode(new __XmlText(input.QuoteCharacter))
      .withName("QuoteCharacter");
    bodyNode.addChildNode(node);
  }
  if (input.RecordDelimiter !== undefined) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  if (input.QuoteEscapeCharacter !== undefined) {
    const node = new __XmlNode("QuoteEscapeCharacter")
      .addChildNode(new __XmlText(input.QuoteEscapeCharacter))
      .withName("QuoteEscapeCharacter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDefaultRetention = (input: DefaultRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DefaultRetention");
  if (input.Days !== undefined) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined) {
    const node = new __XmlNode("ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.Years !== undefined) {
    const node = new __XmlNode("Years").addChildNode(new __XmlText(String(input.Years))).withName("Years");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDelete = (input: Delete, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Delete");
  if (input.Objects !== undefined) {
    const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
    nodes.map((node: any) => {
      node = node.withName("Object");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Quiet !== undefined) {
    const node = new __XmlNode("Quiet").addChildNode(new __XmlText(String(input.Quiet))).withName("Quiet");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DeleteMarkerReplication");
  if (input.Status !== undefined) {
    const node = new __XmlNode("DeleteMarkerReplicationStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlDestination = (input: Destination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Destination");
  if (input.EncryptionConfiguration !== undefined) {
    const node = serializeAws_restXmlEncryptionConfiguration(input.EncryptionConfiguration, context).withName(
      "EncryptionConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Account !== undefined) {
    const node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.Account)).withName("Account");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.Metrics !== undefined) {
    const node = serializeAws_restXmlMetrics(input.Metrics, context).withName("Metrics");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlTranslation !== undefined) {
    const node = serializeAws_restXmlAccessControlTranslation(input.AccessControlTranslation, context).withName(
      "AccessControlTranslation"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ReplicationTime !== undefined) {
    const node = serializeAws_restXmlReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryption = (input: Encryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Encryption");
  if (input.KMSKeyId !== undefined) {
    const node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KMSKeyId)).withName("KMSKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.KMSContext !== undefined) {
    const node = new __XmlNode("KMSContext").addChildNode(new __XmlText(input.KMSContext)).withName("KMSContext");
    bodyNode.addChildNode(node);
  }
  if (input.EncryptionType !== undefined) {
    const node = new __XmlNode("ServerSideEncryption")
      .addChildNode(new __XmlText(input.EncryptionType))
      .withName("EncryptionType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("EncryptionConfiguration");
  if (input.ReplicaKmsKeyID !== undefined) {
    const node = new __XmlNode("ReplicaKmsKeyID")
      .addChildNode(new __XmlText(input.ReplicaKmsKeyID))
      .withName("ReplicaKmsKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlErrorDocument = (input: ErrorDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ErrorDocument");
  if (input.Key !== undefined) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlEventList = (input: (Event | string)[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = new __XmlNode("Event").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlExistingObjectReplication = (
  input: ExistingObjectReplication,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ExistingObjectReplication");
  if (input.Status !== undefined) {
    const node = new __XmlNode("ExistingObjectReplicationStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = new __XmlNode("ExposeHeader").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlFilterRule = (input: FilterRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("FilterRule");
  if (input.Name !== undefined) {
    const node = new __XmlNode("FilterRuleName").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined) {
    const node = new __XmlNode("FilterRuleValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlFilterRuleList = (input: FilterRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlFilterRule(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlGlacierJobParameters = (input: GlacierJobParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GlacierJobParameters");
  if (input.Tier !== undefined) {
    const node = new __XmlNode("Tier").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrant = (input: Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grant");
  if (input.Grantee !== undefined) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined) {
    const node = new __XmlNode("Permission").addChildNode(new __XmlText(input.Permission)).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlGrantee = (input: Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Grantee");
  if (input.EmailAddress !== undefined) {
    const node = new __XmlNode("EmailAddress").addChildNode(new __XmlText(input.EmailAddress)).withName("EmailAddress");
    bodyNode.addChildNode(node);
  }
  if (input.DisplayName !== undefined) {
    const node = new __XmlNode("DisplayName").addChildNode(new __XmlText(input.DisplayName)).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.URI !== undefined) {
    const node = new __XmlNode("URI").addChildNode(new __XmlText(input.URI)).withName("URI");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined) {
    bodyNode.addAttribute("xsi:type", input.Type);
  }
  return bodyNode;
};

const serializeAws_restXmlGrants = (input: Grant[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlGrant(entry, context);
    return node.withName("Grant");
  });
};

const serializeAws_restXmlIndexDocument = (input: IndexDocument, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("IndexDocument");
  if (input.Suffix !== undefined) {
    const node = new __XmlNode("Suffix").addChildNode(new __XmlText(input.Suffix)).withName("Suffix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InputSerialization");
  if (input.JSON !== undefined) {
    const node = serializeAws_restXmlJSONInput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  if (input.CompressionType !== undefined) {
    const node = new __XmlNode("CompressionType")
      .addChildNode(new __XmlText(input.CompressionType))
      .withName("CompressionType");
    bodyNode.addChildNode(node);
  }
  if (input.Parquet !== undefined) {
    const node = serializeAws_restXmlParquetInput(input.Parquet, context).withName("Parquet");
    bodyNode.addChildNode(node);
  }
  if (input.CSV !== undefined) {
    const node = serializeAws_restXmlCSVInput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryConfiguration = (input: InventoryConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryConfiguration");
  if (input.IncludedObjectVersions !== undefined) {
    const node = new __XmlNode("InventoryIncludedObjectVersions")
      .addChildNode(new __XmlText(input.IncludedObjectVersions))
      .withName("IncludedObjectVersions");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled !== undefined) {
    const node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Schedule !== undefined) {
    const node = serializeAws_restXmlInventorySchedule(input.Schedule, context).withName("Schedule");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlInventoryFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.OptionalFields !== undefined) {
    const nodes = serializeAws_restXmlInventoryOptionalFields(input.OptionalFields, context);
    const containerNode = new __XmlNode("OptionalFields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Destination !== undefined) {
    const node = serializeAws_restXmlInventoryDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  if (input.Id !== undefined) {
    const node = new __XmlNode("InventoryId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryDestination = (input: InventoryDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryDestination");
  if (input.S3BucketDestination !== undefined) {
    const node = serializeAws_restXmlInventoryS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryEncryption = (input: InventoryEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryEncryption");
  if (input.SSEKMS !== undefined) {
    const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  if (input.SSES3 !== undefined) {
    const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventoryFilter");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventoryOptionalFields = (
  input: (InventoryOptionalField | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => {
    const node = new __XmlNode("InventoryOptionalField").addChildNode(new __XmlText(entry));
    return node.withName("Field");
  });
};

const serializeAws_restXmlInventoryS3BucketDestination = (
  input: InventoryS3BucketDestination,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("InventoryS3BucketDestination");
  if (input.Format !== undefined) {
    const node = new __XmlNode("InventoryFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption !== undefined) {
    const node = serializeAws_restXmlInventoryEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.AccountId !== undefined) {
    const node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.AccountId)).withName("AccountId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInventorySchedule = (input: InventorySchedule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("InventorySchedule");
  if (input.Frequency !== undefined) {
    const node = new __XmlNode("InventoryFrequency").addChildNode(new __XmlText(input.Frequency)).withName("Frequency");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONInput = (input: JSONInput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONInput");
  if (input.Type !== undefined) {
    const node = new __XmlNode("JSONType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJSONOutput = (input: JSONOutput, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JSONOutput");
  if (input.RecordDelimiter !== undefined) {
    const node = new __XmlNode("RecordDelimiter")
      .addChildNode(new __XmlText(input.RecordDelimiter))
      .withName("RecordDelimiter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfiguration = (
  input: LambdaFunctionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaFunctionConfiguration");
  if (input.Events !== undefined) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.LambdaFunctionArn !== undefined) {
    const node = new __XmlNode("LambdaFunctionArn")
      .addChildNode(new __XmlText(input.LambdaFunctionArn))
      .withName("CloudFunction");
    bodyNode.addChildNode(node);
  }
  if (input.Id !== undefined) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaFunctionConfigurationList = (
  input: LambdaFunctionConfiguration[],
  context: __SerdeContext
): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlLambdaFunctionConfiguration(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlLifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleExpiration");
  if (input.Days !== undefined) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.ExpiredObjectDeleteMarker !== undefined) {
    const node = new __XmlNode("ExpiredObjectDeleteMarker")
      .addChildNode(new __XmlText(String(input.ExpiredObjectDeleteMarker)))
      .withName("ExpiredObjectDeleteMarker");
    bodyNode.addChildNode(node);
  }
  if (input.Date !== undefined) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.NoncurrentVersionTransitions !== undefined) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    nodes.map((node: any) => {
      node = node.withName("NoncurrentVersionTransition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Expiration !== undefined) {
    const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Transitions !== undefined) {
    const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
    nodes.map((node: any) => {
      node = node.withName("Transition");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentVersionExpiration !== undefined) {
    const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName(
      "NoncurrentVersionExpiration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AbortIncompleteMultipartUpload !== undefined) {
    const node = serializeAws_restXmlAbortIncompleteMultipartUpload(
      input.AbortIncompleteMultipartUpload,
      context
    ).withName("AbortIncompleteMultipartUpload");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined) {
    const node = new __XmlNode("ExpirationStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRuleAndOperator = (
  input: LifecycleRuleAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LifecycleRuleAndOperator");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  if (input.And !== undefined) {
    const node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlLifecycleRule(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlLoggingEnabled = (input: LoggingEnabled, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LoggingEnabled");
  if (input.TargetGrants !== undefined) {
    const nodes = serializeAws_restXmlTargetGrants(input.TargetGrants, context);
    const containerNode = new __XmlNode("TargetGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TargetBucket !== undefined) {
    const node = new __XmlNode("TargetBucket").addChildNode(new __XmlText(input.TargetBucket)).withName("TargetBucket");
    bodyNode.addChildNode(node);
  }
  if (input.TargetPrefix !== undefined) {
    const node = new __XmlNode("TargetPrefix").addChildNode(new __XmlText(input.TargetPrefix)).withName("TargetPrefix");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetadataEntry = (input: MetadataEntry, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetadataEntry");
  if (input.Value !== undefined) {
    const node = new __XmlNode("MetadataValue").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  if (input.Name !== undefined) {
    const node = new __XmlNode("MetadataKey").addChildNode(new __XmlText(input.Name)).withName("Name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetrics = (input: Metrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Metrics");
  if (input.Status !== undefined) {
    const node = new __XmlNode("MetricsStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.EventThreshold !== undefined) {
    const node = serializeAws_restXmlReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsAndOperator = (input: MetricsAndOperator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsAndOperator");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = serializeAws_restXmlTagSet(input.Tags, context);
    nodes.map((node: any) => {
      node = node.withName("Tag");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsConfiguration");
  if (input.Id !== undefined) {
    const node = new __XmlNode("MetricsId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlMetricsFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlMetricsFilter = (input: MetricsFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MetricsFilter");
  if (input.And !== undefined) {
    const node = serializeAws_restXmlMetricsAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionExpiration = (
  input: NoncurrentVersionExpiration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionExpiration");
  if (input.NoncurrentDays !== undefined) {
    const node = new __XmlNode("Days")
      .addChildNode(new __XmlText(String(input.NoncurrentDays)))
      .withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionTransition = (
  input: NoncurrentVersionTransition,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionTransition");
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentDays !== undefined) {
    const node = new __XmlNode("Days")
      .addChildNode(new __XmlText(String(input.NoncurrentDays)))
      .withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlNoncurrentVersionTransitionList = (
  input: NoncurrentVersionTransition[],
  context: __SerdeContext
): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlNotificationConfiguration = (
  input: NotificationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfiguration");
  if (input.TopicConfigurations !== undefined) {
    const nodes = serializeAws_restXmlTopicConfigurationList(input.TopicConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("TopicConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.QueueConfigurations !== undefined) {
    const nodes = serializeAws_restXmlQueueConfigurationList(input.QueueConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("QueueConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  if (input.LambdaFunctionConfigurations !== undefined) {
    const nodes = serializeAws_restXmlLambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
    nodes.map((node: any) => {
      node = node.withName("CloudFunctionConfiguration");
      bodyNode.addChildNode(node);
    });
  }
  return bodyNode;
};

const serializeAws_restXmlNotificationConfigurationFilter = (
  input: NotificationConfigurationFilter,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NotificationConfigurationFilter");
  if (input.Key !== undefined) {
    const node = serializeAws_restXmlS3KeyFilter(input.Key, context).withName("S3Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectIdentifier = (input: ObjectIdentifier, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectIdentifier");
  if (input.Key !== undefined) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.VersionId !== undefined) {
    const node = new __XmlNode("ObjectVersionId").addChildNode(new __XmlText(input.VersionId)).withName("VersionId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectIdentifierList = (input: ObjectIdentifier[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlObjectIdentifier(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlObjectLockConfiguration = (input: ObjectLockConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockConfiguration");
  if (input.ObjectLockEnabled !== undefined) {
    const node = new __XmlNode("ObjectLockEnabled")
      .addChildNode(new __XmlText(input.ObjectLockEnabled))
      .withName("ObjectLockEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.Rule !== undefined) {
    const node = serializeAws_restXmlObjectLockRule(input.Rule, context).withName("Rule");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockLegalHold = (input: ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockLegalHold");
  if (input.Status !== undefined) {
    const node = new __XmlNode("ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockRetention = (input: ObjectLockRetention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRetention");
  if (input.Mode !== undefined) {
    const node = new __XmlNode("ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  if (input.RetainUntilDate !== undefined) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLockRule = (input: ObjectLockRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLockRule");
  if (input.DefaultRetention !== undefined) {
    const node = serializeAws_restXmlDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputLocation");
  if (input.S3 !== undefined) {
    const node = serializeAws_restXmlS3Location(input.S3, context).withName("S3");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OutputSerialization");
  if (input.JSON !== undefined) {
    const node = serializeAws_restXmlJSONOutput(input.JSON, context).withName("JSON");
    bodyNode.addChildNode(node);
  }
  if (input.CSV !== undefined) {
    const node = serializeAws_restXmlCSVOutput(input.CSV, context).withName("CSV");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwner = (input: Owner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Owner");
  if (input.DisplayName !== undefined) {
    const node = new __XmlNode("DisplayName").addChildNode(new __XmlText(input.DisplayName)).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControls = (input: OwnershipControls, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("OwnershipControls");
  if (input.Rules !== undefined) {
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
  if (input.ObjectOwnership !== undefined) {
    const node = new __XmlNode("ObjectOwnership")
      .addChildNode(new __XmlText(input.ObjectOwnership))
      .withName("ObjectOwnership");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlOwnershipControlsRules = (input: OwnershipControlsRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
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
  if (input.BlockPublicPolicy !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicPolicy)))
      .withName("BlockPublicPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.BlockPublicAcls !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicAcls)))
      .withName("BlockPublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.RestrictPublicBuckets !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.RestrictPublicBuckets)))
      .withName("RestrictPublicBuckets");
    bodyNode.addChildNode(node);
  }
  if (input.IgnorePublicAcls !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.IgnorePublicAcls)))
      .withName("IgnorePublicAcls");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueueConfiguration = (input: QueueConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("QueueConfiguration");
  if (input.Events !== undefined) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Id !== undefined) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.QueueArn !== undefined) {
    const node = new __XmlNode("QueueArn").addChildNode(new __XmlText(input.QueueArn)).withName("Queue");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlQueueConfigurationList = (input: QueueConfiguration[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlQueueConfiguration(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlRedirect = (input: Redirect, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Redirect");
  if (input.HttpRedirectCode !== undefined) {
    const node = new __XmlNode("HttpRedirectCode")
      .addChildNode(new __XmlText(input.HttpRedirectCode))
      .withName("HttpRedirectCode");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyPrefixWith !== undefined) {
    const node = new __XmlNode("ReplaceKeyPrefixWith")
      .addChildNode(new __XmlText(input.ReplaceKeyPrefixWith))
      .withName("ReplaceKeyPrefixWith");
    bodyNode.addChildNode(node);
  }
  if (input.Protocol !== undefined) {
    const node = new __XmlNode("Protocol").addChildNode(new __XmlText(input.Protocol)).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  if (input.HostName !== undefined) {
    const node = new __XmlNode("HostName").addChildNode(new __XmlText(input.HostName)).withName("HostName");
    bodyNode.addChildNode(node);
  }
  if (input.ReplaceKeyWith !== undefined) {
    const node = new __XmlNode("ReplaceKeyWith")
      .addChildNode(new __XmlText(input.ReplaceKeyWith))
      .withName("ReplaceKeyWith");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRedirectAllRequestsTo = (input: RedirectAllRequestsTo, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RedirectAllRequestsTo");
  if (input.Protocol !== undefined) {
    const node = new __XmlNode("Protocol").addChildNode(new __XmlText(input.Protocol)).withName("Protocol");
    bodyNode.addChildNode(node);
  }
  if (input.HostName !== undefined) {
    const node = new __XmlNode("HostName").addChildNode(new __XmlText(input.HostName)).withName("HostName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationConfiguration = (
  input: ReplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationConfiguration");
  if (input.Role !== undefined) {
    const node = new __XmlNode("Role").addChildNode(new __XmlText(input.Role)).withName("Role");
    bodyNode.addChildNode(node);
  }
  if (input.Rules !== undefined) {
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
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.SourceSelectionCriteria !== undefined) {
    const node = serializeAws_restXmlSourceSelectionCriteria(input.SourceSelectionCriteria, context).withName(
      "SourceSelectionCriteria"
    );
    bodyNode.addChildNode(node);
  }
  if (input.DeleteMarkerReplication !== undefined) {
    const node = serializeAws_restXmlDeleteMarkerReplication(input.DeleteMarkerReplication, context).withName(
      "DeleteMarkerReplication"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlReplicationRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined) {
    const node = new __XmlNode("Priority").addChildNode(new __XmlText(String(input.Priority))).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined) {
    const node = new __XmlNode("ReplicationRuleStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.ExistingObjectReplication !== undefined) {
    const node = serializeAws_restXmlExistingObjectReplication(input.ExistingObjectReplication, context).withName(
      "ExistingObjectReplication"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Destination !== undefined) {
    const node = serializeAws_restXmlDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRuleAndOperator = (
  input: ReplicationRuleAndOperator,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ReplicationRuleAndOperator");
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
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
  if (input.Tag !== undefined) {
    const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined) {
    const node = serializeAws_restXmlReplicationRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlReplicationRule(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTime");
  if (input.Time !== undefined) {
    const node = serializeAws_restXmlReplicationTimeValue(input.Time, context).withName("Time");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined) {
    const node = new __XmlNode("ReplicationTimeStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationTimeValue");
  if (input.Minutes !== undefined) {
    const node = new __XmlNode("Minutes").addChildNode(new __XmlText(String(input.Minutes))).withName("Minutes");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestPaymentConfiguration = (
  input: RequestPaymentConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("RequestPaymentConfiguration");
  if (input.Payer !== undefined) {
    const node = new __XmlNode("Payer").addChildNode(new __XmlText(input.Payer)).withName("Payer");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRequestProgress = (input: RequestProgress, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RequestProgress");
  if (input.Enabled !== undefined) {
    const node = new __XmlNode("EnableRequestProgress")
      .addChildNode(new __XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRestoreRequest = (input: RestoreRequest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RestoreRequest");
  if (input.GlacierJobParameters !== undefined) {
    const node = serializeAws_restXmlGlacierJobParameters(input.GlacierJobParameters, context).withName(
      "GlacierJobParameters"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.OutputLocation !== undefined) {
    const node = serializeAws_restXmlOutputLocation(input.OutputLocation, context).withName("OutputLocation");
    bodyNode.addChildNode(node);
  }
  if (input.SelectParameters !== undefined) {
    const node = serializeAws_restXmlSelectParameters(input.SelectParameters, context).withName("SelectParameters");
    bodyNode.addChildNode(node);
  }
  if (input.Tier !== undefined) {
    const node = new __XmlNode("Tier").addChildNode(new __XmlText(input.Tier)).withName("Tier");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined) {
    const node = new __XmlNode("Description").addChildNode(new __XmlText(input.Description)).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.Type !== undefined) {
    const node = new __XmlNode("RestoreRequestType").addChildNode(new __XmlText(input.Type)).withName("Type");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRule = (input: RoutingRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("RoutingRule");
  if (input.Redirect !== undefined) {
    const node = serializeAws_restXmlRedirect(input.Redirect, context).withName("Redirect");
    bodyNode.addChildNode(node);
  }
  if (input.Condition !== undefined) {
    const node = serializeAws_restXmlCondition(input.Condition, context).withName("Condition");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRoutingRules = (input: RoutingRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlRoutingRule(entry, context);
    return node.withName("RoutingRule");
  });
};

const serializeAws_restXmlS3KeyFilter = (input: S3KeyFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3KeyFilter");
  if (input.FilterRules !== undefined) {
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
  if (input.BucketName !== undefined) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.BucketName)).withName("BucketName");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("StorageClass").addChildNode(new __XmlText(input.StorageClass)).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.CannedACL !== undefined) {
    const node = new __XmlNode("ObjectCannedACL").addChildNode(new __XmlText(input.CannedACL)).withName("CannedACL");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata !== undefined) {
    const nodes = serializeAws_restXmlUserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("LocationPrefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tagging !== undefined) {
    const node = serializeAws_restXmlTagging(input.Tagging, context).withName("Tagging");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption !== undefined) {
    const node = serializeAws_restXmlEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlList !== undefined) {
    const nodes = serializeAws_restXmlGrants(input.AccessControlList, context);
    const containerNode = new __XmlNode("AccessControlList");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlScanRange = (input: ScanRange, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ScanRange");
  if (input.End !== undefined) {
    const node = new __XmlNode("End").addChildNode(new __XmlText(String(input.End))).withName("End");
    bodyNode.addChildNode(node);
  }
  if (input.Start !== undefined) {
    const node = new __XmlNode("Start").addChildNode(new __XmlText(String(input.Start))).withName("Start");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectParameters");
  if (input.ExpressionType !== undefined) {
    const node = new __XmlNode("ExpressionType")
      .addChildNode(new __XmlText(input.ExpressionType))
      .withName("ExpressionType");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSerialization !== undefined) {
    const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName(
      "OutputSerialization"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Expression !== undefined) {
    const node = new __XmlNode("Expression").addChildNode(new __XmlText(input.Expression)).withName("Expression");
    bodyNode.addChildNode(node);
  }
  if (input.InputSerialization !== undefined) {
    const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName(
      "InputSerialization"
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
  if (input.SSEAlgorithm !== undefined) {
    const node = new __XmlNode("ServerSideEncryption")
      .addChildNode(new __XmlText(input.SSEAlgorithm))
      .withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  if (input.KMSMasterKeyID !== undefined) {
    const node = new __XmlNode("SSEKMSKeyId")
      .addChildNode(new __XmlText(input.KMSMasterKeyID))
      .withName("KMSMasterKeyID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ServerSideEncryptionConfiguration");
  if (input.Rules !== undefined) {
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
  if (input.ApplyServerSideEncryptionByDefault !== undefined) {
    const node = serializeAws_restXmlServerSideEncryptionByDefault(
      input.ApplyServerSideEncryptionByDefault,
      context
    ).withName("ApplyServerSideEncryptionByDefault");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlServerSideEncryptionRules = (
  input: ServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlServerSideEncryptionRule(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlSourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SourceSelectionCriteria");
  if (input.SseKmsEncryptedObjects !== undefined) {
    const node = serializeAws_restXmlSseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName(
      "SseKmsEncryptedObjects"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId !== undefined) {
    const node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KeyId)).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SseKmsEncryptedObjects");
  if (input.Status !== undefined) {
    const node = new __XmlNode("SseKmsEncryptedObjectsStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
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
  if (input.DataExport !== undefined) {
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
  if (input.OutputSchemaVersion !== undefined) {
    const node = new __XmlNode("StorageClassAnalysisSchemaVersion")
      .addChildNode(new __XmlText(input.OutputSchemaVersion))
      .withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.Destination !== undefined) {
    const node = serializeAws_restXmlAnalyticsExportDestination(input.Destination, context).withName("Destination");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTag = (input: Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tag");
  if (input.Value !== undefined) {
    const node = new __XmlNode("Value").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  if (input.Key !== undefined) {
    const node = new __XmlNode("ObjectKey").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet !== undefined) {
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
  return input.map((entry) => {
    const node = serializeAws_restXmlTag(entry, context);
    return node.withName("Tag");
  });
};

const serializeAws_restXmlTargetGrant = (input: TargetGrant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TargetGrant");
  if (input.Grantee !== undefined) {
    const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined) {
    const node = new __XmlNode("BucketLogsPermission")
      .addChildNode(new __XmlText(input.Permission))
      .withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTargetGrants = (input: TargetGrant[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlTargetGrant(entry, context);
    return node.withName("Grant");
  });
};

const serializeAws_restXmlTopicConfiguration = (input: TopicConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("TopicConfiguration");
  if (input.Events !== undefined) {
    const nodes = serializeAws_restXmlEventList(input.Events, context);
    nodes.map((node: any) => {
      node = node.withName("Event");
      bodyNode.addChildNode(node);
    });
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.TopicArn !== undefined) {
    const node = new __XmlNode("TopicArn").addChildNode(new __XmlText(input.TopicArn)).withName("Topic");
    bodyNode.addChildNode(node);
  }
  if (input.Id !== undefined) {
    const node = new __XmlNode("NotificationId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTopicConfigurationList = (input: TopicConfiguration[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlTopicConfiguration(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlTransition = (input: Transition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Transition");
  if (input.Days !== undefined) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.Date !== undefined) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlTransition(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlUserMetadata = (input: MetadataEntry[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlMetadataEntry(entry, context);
    return node.withName("MetadataEntry");
  });
};

const serializeAws_restXmlVersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VersioningConfiguration");
  if (input.Status !== undefined) {
    const node = new __XmlNode("BucketVersioningStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.MFADelete !== undefined) {
    const node = new __XmlNode("MFADelete").addChildNode(new __XmlText(input.MFADelete)).withName("MfaDelete");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlWebsiteConfiguration = (input: WebsiteConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("WebsiteConfiguration");
  if (input.ErrorDocument !== undefined) {
    const node = serializeAws_restXmlErrorDocument(input.ErrorDocument, context).withName("ErrorDocument");
    bodyNode.addChildNode(node);
  }
  if (input.RedirectAllRequestsTo !== undefined) {
    const node = serializeAws_restXmlRedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName(
      "RedirectAllRequestsTo"
    );
    bodyNode.addChildNode(node);
  }
  if (input.IndexDocument !== undefined) {
    const node = serializeAws_restXmlIndexDocument(input.IndexDocument, context).withName("IndexDocument");
    bodyNode.addChildNode(node);
  }
  if (input.RoutingRules !== undefined) {
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
  let contents: any = {
    DaysAfterInitiation: undefined,
  };
  if (output["DaysAfterInitiation"] !== undefined) {
    contents.DaysAfterInitiation = parseInt(output["DaysAfterInitiation"]);
  }
  return contents;
};

const deserializeAws_restXmlAccessControlTranslation = (
  output: any,
  context: __SerdeContext
): AccessControlTranslation => {
  let contents: any = {
    Owner: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = output["Owner"];
  }
  return contents;
};

const deserializeAws_restXmlAllowedHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlAllowedMethods = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlAllowedOrigins = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlAnalyticsAndOperator = (output: any, context: __SerdeContext): AnalyticsAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfiguration = (output: any, context: __SerdeContext): AnalyticsConfiguration => {
  let contents: any = {
    StorageClassAnalysis: undefined,
    Filter: undefined,
    Id: undefined,
  };
  if (output["StorageClassAnalysis"] !== undefined) {
    contents.StorageClassAnalysis = deserializeAws_restXmlStorageClassAnalysis(output["StorageClassAnalysis"], context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlAnalyticsFilter(output["Filter"], context);
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsConfigurationList = (
  output: any,
  context: __SerdeContext
): AnalyticsConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlAnalyticsConfiguration(entry, context));
};

const deserializeAws_restXmlAnalyticsExportDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsExportDestination => {
  let contents: any = {
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
  let contents: any = {
    Prefix: undefined,
    Tag: undefined,
    And: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlAnalyticsAndOperator(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlAnalyticsS3BucketDestination = (
  output: any,
  context: __SerdeContext
): AnalyticsS3BucketDestination => {
  let contents: any = {
    Prefix: undefined,
    BucketAccountId: undefined,
    Bucket: undefined,
    Format: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = output["BucketAccountId"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  return contents;
};

const deserializeAws_restXmlBucket = (output: any, context: __SerdeContext): Bucket => {
  let contents: any = {
    CreationDate: undefined,
    Name: undefined,
  };
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  return contents;
};

const deserializeAws_restXmlBuckets = (output: any, context: __SerdeContext): Bucket[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlBucket(entry, context));
};

const deserializeAws_restXmlCommonPrefix = (output: any, context: __SerdeContext): CommonPrefix => {
  let contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};

const deserializeAws_restXmlCommonPrefixList = (output: any, context: __SerdeContext): CommonPrefix[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlCommonPrefix(entry, context));
};

const deserializeAws_restXmlCondition = (output: any, context: __SerdeContext): Condition => {
  let contents: any = {
    KeyPrefixEquals: undefined,
    HttpErrorCodeReturnedEquals: undefined,
  };
  if (output["KeyPrefixEquals"] !== undefined) {
    contents.KeyPrefixEquals = output["KeyPrefixEquals"];
  }
  if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
    contents.HttpErrorCodeReturnedEquals = output["HttpErrorCodeReturnedEquals"];
  }
  return contents;
};

const deserializeAws_restXmlCopyObjectResult = (output: any, context: __SerdeContext): CopyObjectResult => {
  let contents: any = {
    ETag: undefined,
    LastModified: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlCopyPartResult = (output: any, context: __SerdeContext): CopyPartResult => {
  let contents: any = {
    ETag: undefined,
    LastModified: undefined,
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlCORSRule = (output: any, context: __SerdeContext): CORSRule => {
  let contents: any = {
    AllowedHeaders: undefined,
    AllowedOrigins: undefined,
    MaxAgeSeconds: undefined,
    ExposeHeaders: undefined,
    AllowedMethods: undefined,
  };
  if (output.AllowedHeader === "") {
    contents.AllowedHeaders = [];
  }
  if (output["AllowedHeader"] !== undefined) {
    contents.AllowedHeaders = deserializeAws_restXmlAllowedHeaders(
      __getArrayIfSingleItem(output["AllowedHeader"]),
      context
    );
  }
  if (output.AllowedOrigin === "") {
    contents.AllowedOrigins = [];
  }
  if (output["AllowedOrigin"] !== undefined) {
    contents.AllowedOrigins = deserializeAws_restXmlAllowedOrigins(
      __getArrayIfSingleItem(output["AllowedOrigin"]),
      context
    );
  }
  if (output["MaxAgeSeconds"] !== undefined) {
    contents.MaxAgeSeconds = parseInt(output["MaxAgeSeconds"]);
  }
  if (output.ExposeHeader === "") {
    contents.ExposeHeaders = [];
  }
  if (output["ExposeHeader"] !== undefined) {
    contents.ExposeHeaders = deserializeAws_restXmlExposeHeaders(
      __getArrayIfSingleItem(output["ExposeHeader"]),
      context
    );
  }
  if (output.AllowedMethod === "") {
    contents.AllowedMethods = [];
  }
  if (output["AllowedMethod"] !== undefined) {
    contents.AllowedMethods = deserializeAws_restXmlAllowedMethods(
      __getArrayIfSingleItem(output["AllowedMethod"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlCORSRules = (output: any, context: __SerdeContext): CORSRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlCORSRule(entry, context));
};

const deserializeAws_restXmlDefaultRetention = (output: any, context: __SerdeContext): DefaultRetention => {
  let contents: any = {
    Days: undefined,
    Mode: undefined,
    Years: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["Years"] !== undefined) {
    contents.Years = parseInt(output["Years"]);
  }
  return contents;
};

const deserializeAws_restXmlDeletedObject = (output: any, context: __SerdeContext): DeletedObject => {
  let contents: any = {
    DeleteMarker: undefined,
    Key: undefined,
    VersionId: undefined,
    DeleteMarkerVersionId: undefined,
  };
  if (output["DeleteMarker"] !== undefined) {
    contents.DeleteMarker = output["DeleteMarker"] == "true";
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["DeleteMarkerVersionId"] !== undefined) {
    contents.DeleteMarkerVersionId = output["DeleteMarkerVersionId"];
  }
  return contents;
};

const deserializeAws_restXmlDeletedObjects = (output: any, context: __SerdeContext): DeletedObject[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlDeletedObject(entry, context));
};

const deserializeAws_restXmlDeleteMarkerEntry = (output: any, context: __SerdeContext): DeleteMarkerEntry => {
  let contents: any = {
    VersionId: undefined,
    LastModified: undefined,
    Key: undefined,
    IsLatest: undefined,
    Owner: undefined,
  };
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = output["IsLatest"] == "true";
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkerReplication = (
  output: any,
  context: __SerdeContext
): DeleteMarkerReplication => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlDeleteMarkers = (output: any, context: __SerdeContext): DeleteMarkerEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlDeleteMarkerEntry(entry, context));
};

const deserializeAws_restXmlDestination = (output: any, context: __SerdeContext): Destination => {
  let contents: any = {
    EncryptionConfiguration: undefined,
    Bucket: undefined,
    Account: undefined,
    StorageClass: undefined,
    Metrics: undefined,
    AccessControlTranslation: undefined,
    ReplicationTime: undefined,
  };
  if (output["EncryptionConfiguration"] !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_restXmlEncryptionConfiguration(
      output["EncryptionConfiguration"],
      context
    );
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Metrics"] !== undefined) {
    contents.Metrics = deserializeAws_restXmlMetrics(output["Metrics"], context);
  }
  if (output["AccessControlTranslation"] !== undefined) {
    contents.AccessControlTranslation = deserializeAws_restXmlAccessControlTranslation(
      output["AccessControlTranslation"],
      context
    );
  }
  if (output["ReplicationTime"] !== undefined) {
    contents.ReplicationTime = deserializeAws_restXmlReplicationTime(output["ReplicationTime"], context);
  }
  return contents;
};

const deserializeAws_restXmlEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  let contents: any = {
    ReplicaKmsKeyID: undefined,
  };
  if (output["ReplicaKmsKeyID"] !== undefined) {
    contents.ReplicaKmsKeyID = output["ReplicaKmsKeyID"];
  }
  return contents;
};

const deserializeAws_restXml_Error = (output: any, context: __SerdeContext): _Error => {
  let contents: any = {
    Message: undefined,
    Code: undefined,
    Key: undefined,
    VersionId: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  return contents;
};

const deserializeAws_restXmlErrorDocument = (output: any, context: __SerdeContext): ErrorDocument => {
  let contents: any = {
    Key: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  return contents;
};

const deserializeAws_restXmlErrors = (output: any, context: __SerdeContext): _Error[] => {
  return (output || []).map((entry: any) => deserializeAws_restXml_Error(entry, context));
};

const deserializeAws_restXmlEventList = (output: any, context: __SerdeContext): (Event | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlExistingObjectReplication = (
  output: any,
  context: __SerdeContext
): ExistingObjectReplication => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlExposeHeaders = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlFilterRule = (output: any, context: __SerdeContext): FilterRule => {
  let contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_restXmlFilterRuleList = (output: any, context: __SerdeContext): FilterRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlFilterRule(entry, context));
};

const deserializeAws_restXmlGrant = (output: any, context: __SerdeContext): Grant => {
  let contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  return contents;
};

const deserializeAws_restXmlGrantee = (output: any, context: __SerdeContext): Grantee => {
  let contents: any = {
    EmailAddress: undefined,
    DisplayName: undefined,
    URI: undefined,
    ID: undefined,
    Type: undefined,
  };
  if (output["EmailAddress"] !== undefined) {
    contents.EmailAddress = output["EmailAddress"];
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["URI"] !== undefined) {
    contents.URI = output["URI"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["xsi:type"] !== undefined) {
    contents.Type = output["xsi:type"];
  }
  return contents;
};

const deserializeAws_restXmlGrants = (output: any, context: __SerdeContext): Grant[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlGrant(entry, context));
};

const deserializeAws_restXmlIndexDocument = (output: any, context: __SerdeContext): IndexDocument => {
  let contents: any = {
    Suffix: undefined,
  };
  if (output["Suffix"] !== undefined) {
    contents.Suffix = output["Suffix"];
  }
  return contents;
};

const deserializeAws_restXmlInitiator = (output: any, context: __SerdeContext): Initiator => {
  let contents: any = {
    ID: undefined,
    DisplayName: undefined,
  };
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfiguration = (output: any, context: __SerdeContext): InventoryConfiguration => {
  let contents: any = {
    IncludedObjectVersions: undefined,
    IsEnabled: undefined,
    Schedule: undefined,
    Filter: undefined,
    OptionalFields: undefined,
    Destination: undefined,
    Id: undefined,
  };
  if (output["IncludedObjectVersions"] !== undefined) {
    contents.IncludedObjectVersions = output["IncludedObjectVersions"];
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = output["IsEnabled"] == "true";
  }
  if (output["Schedule"] !== undefined) {
    contents.Schedule = deserializeAws_restXmlInventorySchedule(output["Schedule"], context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlInventoryFilter(output["Filter"], context);
  }
  if (output.OptionalFields === "") {
    contents.OptionalFields = [];
  }
  if (output["OptionalFields"] !== undefined && output["OptionalFields"]["Field"] !== undefined) {
    contents.OptionalFields = deserializeAws_restXmlInventoryOptionalFields(
      __getArrayIfSingleItem(output["OptionalFields"]["Field"]),
      context
    );
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlInventoryDestination(output["Destination"], context);
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_restXmlInventoryConfigurationList = (
  output: any,
  context: __SerdeContext
): InventoryConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlInventoryConfiguration(entry, context));
};

const deserializeAws_restXmlInventoryDestination = (output: any, context: __SerdeContext): InventoryDestination => {
  let contents: any = {
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
  let contents: any = {
    SSEKMS: undefined,
    SSES3: undefined,
  };
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
  }
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
  }
  return contents;
};

const deserializeAws_restXmlInventoryFilter = (output: any, context: __SerdeContext): InventoryFilter => {
  let contents: any = {
    Prefix: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  return contents;
};

const deserializeAws_restXmlInventoryOptionalFields = (
  output: any,
  context: __SerdeContext
): (InventoryOptionalField | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlInventoryS3BucketDestination = (
  output: any,
  context: __SerdeContext
): InventoryS3BucketDestination => {
  let contents: any = {
    Format: undefined,
    Encryption: undefined,
    Prefix: undefined,
    Bucket: undefined,
    AccountId: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  if (output["Encryption"] !== undefined) {
    contents.Encryption = deserializeAws_restXmlInventoryEncryption(output["Encryption"], context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = output["AccountId"];
  }
  return contents;
};

const deserializeAws_restXmlInventorySchedule = (output: any, context: __SerdeContext): InventorySchedule => {
  let contents: any = {
    Frequency: undefined,
  };
  if (output["Frequency"] !== undefined) {
    contents.Frequency = output["Frequency"];
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfiguration = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration => {
  let contents: any = {
    Events: undefined,
    Filter: undefined,
    LambdaFunctionArn: undefined,
    Id: undefined,
  };
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  if (output["CloudFunction"] !== undefined) {
    contents.LambdaFunctionArn = output["CloudFunction"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_restXmlLambdaFunctionConfigurationList = (
  output: any,
  context: __SerdeContext
): LambdaFunctionConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlLambdaFunctionConfiguration(entry, context));
};

const deserializeAws_restXmlLifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  let contents: any = {
    Days: undefined,
    ExpiredObjectDeleteMarker: undefined,
    Date: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = output["ExpiredObjectDeleteMarker"] == "true";
  }
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  let contents: any = {
    NoncurrentVersionTransitions: undefined,
    Expiration: undefined,
    ID: undefined,
    Transitions: undefined,
    Prefix: undefined,
    NoncurrentVersionExpiration: undefined,
    AbortIncompleteMultipartUpload: undefined,
    Filter: undefined,
    Status: undefined,
  };
  if (output.NoncurrentVersionTransition === "") {
    contents.NoncurrentVersionTransitions = [];
  }
  if (output["NoncurrentVersionTransition"] !== undefined) {
    contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransition"]),
      context
    );
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output.Transition === "") {
    contents.Transitions = [];
  }
  if (output["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(__getArrayIfSingleItem(output["Transition"]), context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
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
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleAndOperator = (
  output: any,
  context: __SerdeContext
): LifecycleRuleAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  let contents: any = {
    And: undefined,
    Prefix: undefined,
    Tag: undefined,
  };
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlLifecycleRule(entry, context));
};

const deserializeAws_restXmlLoggingEnabled = (output: any, context: __SerdeContext): LoggingEnabled => {
  let contents: any = {
    TargetGrants: undefined,
    TargetBucket: undefined,
    TargetPrefix: undefined,
  };
  if (output.TargetGrants === "") {
    contents.TargetGrants = [];
  }
  if (output["TargetGrants"] !== undefined && output["TargetGrants"]["Grant"] !== undefined) {
    contents.TargetGrants = deserializeAws_restXmlTargetGrants(
      __getArrayIfSingleItem(output["TargetGrants"]["Grant"]),
      context
    );
  }
  if (output["TargetBucket"] !== undefined) {
    contents.TargetBucket = output["TargetBucket"];
  }
  if (output["TargetPrefix"] !== undefined) {
    contents.TargetPrefix = output["TargetPrefix"];
  }
  return contents;
};

const deserializeAws_restXmlMetrics = (output: any, context: __SerdeContext): Metrics => {
  let contents: any = {
    Status: undefined,
    EventThreshold: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["EventThreshold"] !== undefined) {
    contents.EventThreshold = deserializeAws_restXmlReplicationTimeValue(output["EventThreshold"], context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsAndOperator = (output: any, context: __SerdeContext): MetricsAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  let contents: any = {
    Id: undefined,
    Filter: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlMetricsFilter(output["Filter"], context);
  }
  return contents;
};

const deserializeAws_restXmlMetricsConfigurationList = (
  output: any,
  context: __SerdeContext
): MetricsConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlMetricsConfiguration(entry, context));
};

const deserializeAws_restXmlMetricsFilter = (output: any, context: __SerdeContext): MetricsFilter => {
  let contents: any = {
    And: undefined,
    Prefix: undefined,
    Tag: undefined,
  };
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlMetricsAndOperator(output["And"], context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  return contents;
};

const deserializeAws_restXmlMultipartUpload = (output: any, context: __SerdeContext): MultipartUpload => {
  let contents: any = {
    Initiator: undefined,
    UploadId: undefined,
    Key: undefined,
    Owner: undefined,
    StorageClass: undefined,
    Initiated: undefined,
  };
  if (output["Initiator"] !== undefined) {
    contents.Initiator = deserializeAws_restXmlInitiator(output["Initiator"], context);
  }
  if (output["UploadId"] !== undefined) {
    contents.UploadId = output["UploadId"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Initiated"] !== undefined) {
    contents.Initiated = new Date(output["Initiated"]);
  }
  return contents;
};

const deserializeAws_restXmlMultipartUploadList = (output: any, context: __SerdeContext): MultipartUpload[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlMultipartUpload(entry, context));
};

const deserializeAws_restXmlNoncurrentVersionExpiration = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionExpiration => {
  let contents: any = {
    NoncurrentDays: undefined,
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
  }
  return contents;
};

const deserializeAws_restXmlNoncurrentVersionTransition = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition => {
  let contents: any = {
    StorageClass: undefined,
    NoncurrentDays: undefined,
  };
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
  }
  return contents;
};

const deserializeAws_restXmlNoncurrentVersionTransitionList = (
  output: any,
  context: __SerdeContext
): NoncurrentVersionTransition[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlNoncurrentVersionTransition(entry, context));
};

const deserializeAws_restXmlNotificationConfigurationFilter = (
  output: any,
  context: __SerdeContext
): NotificationConfigurationFilter => {
  let contents: any = {
    Key: undefined,
  };
  if (output["S3Key"] !== undefined) {
    contents.Key = deserializeAws_restXmlS3KeyFilter(output["S3Key"], context);
  }
  return contents;
};

const deserializeAws_restXml_Object = (output: any, context: __SerdeContext): _Object => {
  let contents: any = {
    Size: undefined,
    ETag: undefined,
    Owner: undefined,
    StorageClass: undefined,
    Key: undefined,
    LastModified: undefined,
  };
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectList = (output: any, context: __SerdeContext): _Object[] => {
  return (output || []).map((entry: any) => deserializeAws_restXml_Object(entry, context));
};

const deserializeAws_restXmlObjectLockConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLockConfiguration => {
  let contents: any = {
    ObjectLockEnabled: undefined,
    Rule: undefined,
  };
  if (output["ObjectLockEnabled"] !== undefined) {
    contents.ObjectLockEnabled = output["ObjectLockEnabled"];
  }
  if (output["Rule"] !== undefined) {
    contents.Rule = deserializeAws_restXmlObjectLockRule(output["Rule"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectLockLegalHold = (output: any, context: __SerdeContext): ObjectLockLegalHold => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRetention = (output: any, context: __SerdeContext): ObjectLockRetention => {
  let contents: any = {
    Mode: undefined,
    RetainUntilDate: undefined,
  };
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
  }
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectLockRule = (output: any, context: __SerdeContext): ObjectLockRule => {
  let contents: any = {
    DefaultRetention: undefined,
  };
  if (output["DefaultRetention"] !== undefined) {
    contents.DefaultRetention = deserializeAws_restXmlDefaultRetention(output["DefaultRetention"], context);
  }
  return contents;
};

const deserializeAws_restXmlObjectVersion = (output: any, context: __SerdeContext): ObjectVersion => {
  let contents: any = {
    Size: undefined,
    Key: undefined,
    StorageClass: undefined,
    Owner: undefined,
    IsLatest: undefined,
    ETag: undefined,
    LastModified: undefined,
    VersionId: undefined,
  };
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
  }
  if (output["IsLatest"] !== undefined) {
    contents.IsLatest = output["IsLatest"] == "true";
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  return contents;
};

const deserializeAws_restXmlObjectVersionList = (output: any, context: __SerdeContext): ObjectVersion[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlObjectVersion(entry, context));
};

const deserializeAws_restXmlOwner = (output: any, context: __SerdeContext): Owner => {
  let contents: any = {
    DisplayName: undefined,
    ID: undefined,
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControls = (output: any, context: __SerdeContext): OwnershipControls => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlOwnershipControlsRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRule = (output: any, context: __SerdeContext): OwnershipControlsRule => {
  let contents: any = {
    ObjectOwnership: undefined,
  };
  if (output["ObjectOwnership"] !== undefined) {
    contents.ObjectOwnership = output["ObjectOwnership"];
  }
  return contents;
};

const deserializeAws_restXmlOwnershipControlsRules = (
  output: any,
  context: __SerdeContext
): OwnershipControlsRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlOwnershipControlsRule(entry, context));
};

const deserializeAws_restXmlPart = (output: any, context: __SerdeContext): Part => {
  let contents: any = {
    Size: undefined,
    LastModified: undefined,
    PartNumber: undefined,
    ETag: undefined,
  };
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["PartNumber"] !== undefined) {
    contents.PartNumber = parseInt(output["PartNumber"]);
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  return contents;
};

const deserializeAws_restXmlParts = (output: any, context: __SerdeContext): Part[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlPart(entry, context));
};

const deserializeAws_restXmlPolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  let contents: any = {
    IsPublic: undefined,
  };
  if (output["IsPublic"] !== undefined) {
    contents.IsPublic = output["IsPublic"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlPublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): PublicAccessBlockConfiguration => {
  let contents: any = {
    BlockPublicPolicy: undefined,
    BlockPublicAcls: undefined,
    RestrictPublicBuckets: undefined,
    IgnorePublicAcls: undefined,
  };
  if (output["BlockPublicPolicy"] !== undefined) {
    contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
  }
  if (output["BlockPublicAcls"] !== undefined) {
    contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
  }
  if (output["RestrictPublicBuckets"] !== undefined) {
    contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
  }
  if (output["IgnorePublicAcls"] !== undefined) {
    contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlQueueConfiguration = (output: any, context: __SerdeContext): QueueConfiguration => {
  let contents: any = {
    Events: undefined,
    Id: undefined,
    Filter: undefined,
    QueueArn: undefined,
  };
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  if (output["Queue"] !== undefined) {
    contents.QueueArn = output["Queue"];
  }
  return contents;
};

const deserializeAws_restXmlQueueConfigurationList = (output: any, context: __SerdeContext): QueueConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlQueueConfiguration(entry, context));
};

const deserializeAws_restXmlRedirect = (output: any, context: __SerdeContext): Redirect => {
  let contents: any = {
    HttpRedirectCode: undefined,
    ReplaceKeyPrefixWith: undefined,
    Protocol: undefined,
    HostName: undefined,
    ReplaceKeyWith: undefined,
  };
  if (output["HttpRedirectCode"] !== undefined) {
    contents.HttpRedirectCode = output["HttpRedirectCode"];
  }
  if (output["ReplaceKeyPrefixWith"] !== undefined) {
    contents.ReplaceKeyPrefixWith = output["ReplaceKeyPrefixWith"];
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["HostName"] !== undefined) {
    contents.HostName = output["HostName"];
  }
  if (output["ReplaceKeyWith"] !== undefined) {
    contents.ReplaceKeyWith = output["ReplaceKeyWith"];
  }
  return contents;
};

const deserializeAws_restXmlRedirectAllRequestsTo = (output: any, context: __SerdeContext): RedirectAllRequestsTo => {
  let contents: any = {
    Protocol: undefined,
    HostName: undefined,
  };
  if (output["Protocol"] !== undefined) {
    contents.Protocol = output["Protocol"];
  }
  if (output["HostName"] !== undefined) {
    contents.HostName = output["HostName"];
  }
  return contents;
};

const deserializeAws_restXmlReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ReplicationConfiguration => {
  let contents: any = {
    Role: undefined,
    Rules: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = output["Role"];
  }
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlReplicationRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  let contents: any = {
    Prefix: undefined,
    ID: undefined,
    SourceSelectionCriteria: undefined,
    DeleteMarkerReplication: undefined,
    Filter: undefined,
    Priority: undefined,
    Status: undefined,
    ExistingObjectReplication: undefined,
    Destination: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  if (output["SourceSelectionCriteria"] !== undefined) {
    contents.SourceSelectionCriteria = deserializeAws_restXmlSourceSelectionCriteria(
      output["SourceSelectionCriteria"],
      context
    );
  }
  if (output["DeleteMarkerReplication"] !== undefined) {
    contents.DeleteMarkerReplication = deserializeAws_restXmlDeleteMarkerReplication(
      output["DeleteMarkerReplication"],
      context
    );
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlReplicationRuleFilter(output["Filter"], context);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
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
  return contents;
};

const deserializeAws_restXmlReplicationRuleAndOperator = (
  output: any,
  context: __SerdeContext
): ReplicationRuleAndOperator => {
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output.Tag === "") {
    contents.Tags = [];
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlTagSet(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  let contents: any = {
    Tag: undefined,
    Prefix: undefined,
    And: undefined,
  };
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlReplicationRuleAndOperator(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlReplicationRules = (output: any, context: __SerdeContext): ReplicationRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlReplicationRule(entry, context));
};

const deserializeAws_restXmlReplicationTime = (output: any, context: __SerdeContext): ReplicationTime => {
  let contents: any = {
    Time: undefined,
    Status: undefined,
  };
  if (output["Time"] !== undefined) {
    contents.Time = deserializeAws_restXmlReplicationTimeValue(output["Time"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  let contents: any = {
    Minutes: undefined,
  };
  if (output["Minutes"] !== undefined) {
    contents.Minutes = parseInt(output["Minutes"]);
  }
  return contents;
};

const deserializeAws_restXmlRoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  let contents: any = {
    Redirect: undefined,
    Condition: undefined,
  };
  if (output["Redirect"] !== undefined) {
    contents.Redirect = deserializeAws_restXmlRedirect(output["Redirect"], context);
  }
  if (output["Condition"] !== undefined) {
    contents.Condition = deserializeAws_restXmlCondition(output["Condition"], context);
  }
  return contents;
};

const deserializeAws_restXmlRoutingRules = (output: any, context: __SerdeContext): RoutingRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlRoutingRule(entry, context));
};

const deserializeAws_restXmlS3KeyFilter = (output: any, context: __SerdeContext): S3KeyFilter => {
  let contents: any = {
    FilterRules: undefined,
  };
  if (output.FilterRule === "") {
    contents.FilterRules = [];
  }
  if (output["FilterRule"] !== undefined) {
    contents.FilterRules = deserializeAws_restXmlFilterRuleList(__getArrayIfSingleItem(output["FilterRule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionByDefault => {
  let contents: any = {
    SSEAlgorithm: undefined,
    KMSMasterKeyID: undefined,
  };
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = output["SSEAlgorithm"];
  }
  if (output["KMSMasterKeyID"] !== undefined) {
    contents.KMSMasterKeyID = output["KMSMasterKeyID"];
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  let contents: any = {
    Rules: undefined,
  };
  if (output.Rule === "") {
    contents.Rules = [];
  }
  if (output["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlServerSideEncryptionRules(__getArrayIfSingleItem(output["Rule"]), context);
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule => {
  let contents: any = {
    ApplyServerSideEncryptionByDefault: undefined,
  };
  if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
    contents.ApplyServerSideEncryptionByDefault = deserializeAws_restXmlServerSideEncryptionByDefault(
      output["ApplyServerSideEncryptionByDefault"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlServerSideEncryptionRule(entry, context));
};

const deserializeAws_restXmlSourceSelectionCriteria = (
  output: any,
  context: __SerdeContext
): SourceSelectionCriteria => {
  let contents: any = {
    SseKmsEncryptedObjects: undefined,
  };
  if (output["SseKmsEncryptedObjects"] !== undefined) {
    contents.SseKmsEncryptedObjects = deserializeAws_restXmlSseKmsEncryptedObjects(
      output["SseKmsEncryptedObjects"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlSSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  let contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = output["KeyId"];
  }
  return contents;
};

const deserializeAws_restXmlSseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlSSES3 = (output: any, context: __SerdeContext): SSES3 => {
  let contents: any = {};
  return contents;
};

const deserializeAws_restXmlStorageClassAnalysis = (output: any, context: __SerdeContext): StorageClassAnalysis => {
  let contents: any = {
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
  let contents: any = {
    OutputSchemaVersion: undefined,
    Destination: undefined,
  };
  if (output["OutputSchemaVersion"] !== undefined) {
    contents.OutputSchemaVersion = output["OutputSchemaVersion"];
  }
  if (output["Destination"] !== undefined) {
    contents.Destination = deserializeAws_restXmlAnalyticsExportDestination(output["Destination"], context);
  }
  return contents;
};

const deserializeAws_restXmlTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    Value: undefined,
    Key: undefined,
  };
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  return contents;
};

const deserializeAws_restXmlTagSet = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlTag(entry, context));
};

const deserializeAws_restXmlTargetGrant = (output: any, context: __SerdeContext): TargetGrant => {
  let contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  return contents;
};

const deserializeAws_restXmlTargetGrants = (output: any, context: __SerdeContext): TargetGrant[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlTargetGrant(entry, context));
};

const deserializeAws_restXmlTopicConfiguration = (output: any, context: __SerdeContext): TopicConfiguration => {
  let contents: any = {
    Events: undefined,
    Filter: undefined,
    TopicArn: undefined,
    Id: undefined,
  };
  if (output.Event === "") {
    contents.Events = [];
  }
  if (output["Event"] !== undefined) {
    contents.Events = deserializeAws_restXmlEventList(__getArrayIfSingleItem(output["Event"]), context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
  }
  if (output["Topic"] !== undefined) {
    contents.TopicArn = output["Topic"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_restXmlTopicConfigurationList = (output: any, context: __SerdeContext): TopicConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlTopicConfiguration(entry, context));
};

const deserializeAws_restXmlTransition = (output: any, context: __SerdeContext): Transition => {
  let contents: any = {
    Days: undefined,
    Date: undefined,
    StorageClass: undefined,
  };
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  return contents;
};

const deserializeAws_restXmlTransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlTransition(entry, context));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val),
      });
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

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
