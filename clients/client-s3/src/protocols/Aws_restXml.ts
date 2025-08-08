// smithy-typescript generated code
import { loadRestXmlErrorCode, parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { requestBuilder as rb } from "@smithy/core";
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
  isSerializableHeaderValue,
  map,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  quoteHeader as __quoteHeader,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
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
import { v4 as generateIdempotencyToken } from "uuid";

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
  CreateBucketMetadataConfigurationCommandInput,
  CreateBucketMetadataConfigurationCommandOutput,
} from "../commands/CreateBucketMetadataConfigurationCommand";
import {
  CreateBucketMetadataTableConfigurationCommandInput,
  CreateBucketMetadataTableConfigurationCommandOutput,
} from "../commands/CreateBucketMetadataTableConfigurationCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "../commands/CreateMultipartUploadCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
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
  DeleteBucketMetadataConfigurationCommandInput,
  DeleteBucketMetadataConfigurationCommandOutput,
} from "../commands/DeleteBucketMetadataConfigurationCommand";
import {
  DeleteBucketMetadataTableConfigurationCommandInput,
  DeleteBucketMetadataTableConfigurationCommandOutput,
} from "../commands/DeleteBucketMetadataTableConfigurationCommand";
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
  GetBucketMetadataConfigurationCommandInput,
  GetBucketMetadataConfigurationCommandOutput,
} from "../commands/GetBucketMetadataConfigurationCommand";
import {
  GetBucketMetadataTableConfigurationCommandInput,
  GetBucketMetadataTableConfigurationCommandOutput,
} from "../commands/GetBucketMetadataTableConfigurationCommand";
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
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput,
} from "../commands/ListDirectoryBucketsCommand";
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
import { RenameObjectCommandInput, RenameObjectCommandOutput } from "../commands/RenameObjectCommand";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "../commands/RestoreObjectCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "../commands/SelectObjectContentCommand";
import {
  UpdateBucketMetadataInventoryTableConfigurationCommandInput,
  UpdateBucketMetadataInventoryTableConfigurationCommandOutput,
} from "../commands/UpdateBucketMetadataInventoryTableConfigurationCommand";
import {
  UpdateBucketMetadataJournalTableConfigurationCommandInput,
  UpdateBucketMetadataJournalTableConfigurationCommandOutput,
} from "../commands/UpdateBucketMetadataJournalTableConfigurationCommand";
import { UploadPartCommandInput, UploadPartCommandOutput } from "../commands/UploadPartCommand";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "../commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "../commands/WriteGetObjectResponseCommand";
import {
  _Error,
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
  BucketInfo,
  Checksum,
  ChecksumAlgorithm,
  CommonPrefix,
  CompletedMultipartUpload,
  CompletedPart,
  Condition,
  CopyObjectResult,
  CORSRule,
  CreateBucketConfiguration,
  DefaultRetention,
  Delete,
  DeletedObject,
  DeleteMarkerReplication,
  Destination,
  DestinationResult,
  EncryptionConfiguration,
  ErrorDetails,
  ErrorDocument,
  Event,
  EventBridgeConfiguration,
  ExistingObjectReplication,
  FilterRule,
  GetBucketMetadataConfigurationResult,
  GetBucketMetadataTableConfigurationResult,
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
  InventoryTableConfiguration,
  InventoryTableConfigurationResult,
  JournalTableConfiguration,
  JournalTableConfigurationResult,
  LambdaFunctionConfiguration,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  LocationInfo,
  LoggingEnabled,
  MetadataConfiguration,
  MetadataConfigurationResult,
  MetadataTableConfiguration,
  MetadataTableConfigurationResult,
  MetadataTableEncryptionConfiguration,
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
  Owner,
  OwnershipControls,
  OwnershipControlsRule,
  PartitionedPrefix,
  PolicyStatus,
  PublicAccessBlockConfiguration,
  QueueConfiguration,
  RecordExpiration,
  Redirect,
  RedirectAllRequestsTo,
  ReplicaModifications,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationTime,
  ReplicationTimeValue,
  RestoreStatus,
  RoutingRule,
  S3KeyFilter,
  S3TablesDestination,
  S3TablesDestinationResult,
  ServerSideEncryptionByDefault,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionRule,
  SessionCredentials,
  SimplePrefix,
  SourceSelectionCriteria,
  SSEKMS,
  SseKmsEncryptedObjects,
  SSES3,
  StorageClassAnalysis,
  StorageClassAnalysisDataExport,
  Tag,
  TargetGrant,
  TargetObjectKeyFormat,
  Tiering,
  TopicConfiguration,
  Transition,
} from "../models/models_0";
import {
  _Object,
  BucketLifecycleConfiguration,
  BucketLoggingStatus,
  ContinuationEvent,
  CopyPartResult,
  CORSConfiguration,
  CSVInput,
  CSVOutput,
  DeleteMarkerEntry,
  Encryption,
  EncryptionTypeMismatch,
  EndEvent,
  GlacierJobParameters,
  IdempotencyParameterMismatch,
  InputSerialization,
  InvalidRequest,
  InvalidWriteOffset,
  InventoryTableConfigurationUpdates,
  JournalTableConfigurationUpdates,
  JSONInput,
  JSONOutput,
  MetadataEntry,
  ObjectAlreadyInActiveTierError,
  ObjectVersion,
  OutputLocation,
  OutputSerialization,
  ParquetInput,
  Part,
  Progress,
  ProgressEvent,
  RecordsEvent,
  RequestPaymentConfiguration,
  RequestProgress,
  RestoreRequest,
  S3Location,
  ScanRange,
  SelectObjectContentEventStream,
  SelectParameters,
  Stats,
  StatsEvent,
  Tagging,
  TooManyParts,
  VersioningConfiguration,
  WebsiteConfiguration,
} from "../models/models_1";
import { S3ServiceException as __BaseException } from "../models/S3ServiceException";

/**
 * serializeAws_restXmlAbortMultipartUploadCommand
 */
export const se_AbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xaimit]: [() => isSerializableHeaderValue(input[_IMIT]), () => __dateToUtcString(input[_IMIT]!).toString()],
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "AbortMultipartUpload"],
    [_uI]: [, __expectNonNull(input[_UI]!, `UploadId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCompleteMultipartUploadCommand
 */
export const se_CompleteMultipartUploadCommand = async (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xacc]: input[_CCRC]!,
    [_xacc_]: input[_CCRCC]!,
    [_xacc__]: input[_CCRCNVME]!,
    [_xacs]: input[_CSHA]!,
    [_xacs_]: input[_CSHAh]!,
    [_xact]: input[_CT]!,
    [_xamos]: [() => isSerializableHeaderValue(input[_MOS]), () => input[_MOS]!.toString()],
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_im]: input[_IM]!,
    [_inm]: input[_INM]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_uI]: [, __expectNonNull(input[_UI]!, `UploadId`)],
  });
  let body: any;
  let contents: any;
  if (input.MultipartUpload !== undefined) {
    contents = se_CompletedMultipartUpload(input.MultipartUpload, context);
    contents = contents.n("CompleteMultipartUpload");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCopyObjectCommand
 */
export const se_CopyObjectCommand = async (
  input: CopyObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
    [_xaa]: input[_ACL]!,
    [_cc]: input[_CC]!,
    [_xaca]: input[_CA]!,
    [_cd]: input[_CD]!,
    [_ce]: input[_CE]!,
    [_cl]: input[_CL]!,
    [_ct]: input[_CTo]!,
    [_xacs__]: input[_CS]!,
    [_xacsim]: input[_CSIM]!,
    [_xacsims]: [() => isSerializableHeaderValue(input[_CSIMS]), () => __dateToUtcString(input[_CSIMS]!).toString()],
    [_xacsinm]: input[_CSINM]!,
    [_xacsius]: [() => isSerializableHeaderValue(input[_CSIUS]), () => __dateToUtcString(input[_CSIUS]!).toString()],
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => __dateToUtcString(input[_E]!).toString()],
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagwa]: input[_GWACP]!,
    [_xamd]: input[_MD]!,
    [_xatd]: input[_TD]!,
    [_xasse]: input[_SSE]!,
    [_xasc]: input[_SC]!,
    [_xawrl]: input[_WRL]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xasseakki]: input[_SSEKMSKI]!,
    [_xassec]: input[_SSEKMSEC]!,
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE]!.toString()],
    [_xacssseca]: input[_CSSSECA]!,
    [_xacssseck]: input[_CSSSECK]!,
    [_xacssseckm]: input[_CSSSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xat]: input[_T]!,
    [_xaolm]: input[_OLM]!,
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => __serializeDateTime(input[_OLRUD]!).toString()],
    [_xaollh]: input[_OLLHS]!,
    [_xaebo]: input[_EBO]!,
    [_xasebo]: input[_ESBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "CopyObject"],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateBucketCommand
 */
export const se_CreateBucketCommand = async (
  input: CreateBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaa]: input[_ACL]!,
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagw]: input[_GW]!,
    [_xagwa]: input[_GWACP]!,
    [_xabole]: [() => isSerializableHeaderValue(input[_OLEFB]), () => input[_OLEFB]!.toString()],
    [_xaoo]: input[_OO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateBucketMetadataConfigurationCommand
 */
export const se_CreateBucketMetadataConfigurationCommand = async (
  input: CreateBucketMetadataConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mC]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.MetadataConfiguration !== undefined) {
    contents = se_MetadataConfiguration(input.MetadataConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateBucketMetadataTableConfigurationCommand
 */
export const se_CreateBucketMetadataTableConfigurationCommand = async (
  input: CreateBucketMetadataTableConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mT]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.MetadataTableConfiguration !== undefined) {
    contents = se_MetadataTableConfiguration(input.MetadataTableConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateMultipartUploadCommand
 */
export const se_CreateMultipartUploadCommand = async (
  input: CreateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
    [_xaa]: input[_ACL]!,
    [_cc]: input[_CC]!,
    [_cd]: input[_CD]!,
    [_ce]: input[_CE]!,
    [_cl]: input[_CL]!,
    [_ct]: input[_CTo]!,
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => __dateToUtcString(input[_E]!).toString()],
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagwa]: input[_GWACP]!,
    [_xasse]: input[_SSE]!,
    [_xasc]: input[_SC]!,
    [_xawrl]: input[_WRL]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xasseakki]: input[_SSEKMSKI]!,
    [_xassec]: input[_SSEKMSEC]!,
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE]!.toString()],
    [_xarp]: input[_RP]!,
    [_xat]: input[_T]!,
    [_xaolm]: input[_OLM]!,
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => __serializeDateTime(input[_OLRUD]!).toString()],
    [_xaollh]: input[_OLLHS]!,
    [_xaebo]: input[_EBO]!,
    [_xaca]: input[_CA]!,
    [_xact]: input[_CT]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_u]: [, ""],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlCreateSessionCommand
 */
export const se_CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacsm]: input[_SM]!,
    [_xasse]: input[_SSE]!,
    [_xasseakki]: input[_SSEKMSKI]!,
    [_xassec]: input[_SSEKMSEC]!,
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE]!.toString()],
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_s]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketCommand
 */
export const se_DeleteBucketCommand = async (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand
 */
export const se_DeleteBucketAnalyticsConfigurationCommand = async (
  input: DeleteBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_a]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketCorsCommand
 */
export const se_DeleteBucketCorsCommand = async (
  input: DeleteBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_c]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketEncryptionCommand
 */
export const se_DeleteBucketEncryptionCommand = async (
  input: DeleteBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_en]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand
 */
export const se_DeleteBucketIntelligentTieringConfigurationCommand = async (
  input: DeleteBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_it]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketInventoryConfigurationCommand
 */
export const se_DeleteBucketInventoryConfigurationCommand = async (
  input: DeleteBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_in]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketLifecycleCommand
 */
export const se_DeleteBucketLifecycleCommand = async (
  input: DeleteBucketLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_l]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketMetadataConfigurationCommand
 */
export const se_DeleteBucketMetadataConfigurationCommand = async (
  input: DeleteBucketMetadataConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mC]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketMetadataTableConfigurationCommand
 */
export const se_DeleteBucketMetadataTableConfigurationCommand = async (
  input: DeleteBucketMetadataTableConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mT]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketMetricsConfigurationCommand
 */
export const se_DeleteBucketMetricsConfigurationCommand = async (
  input: DeleteBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_m]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketOwnershipControlsCommand
 */
export const se_DeleteBucketOwnershipControlsCommand = async (
  input: DeleteBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_oC]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketPolicyCommand
 */
export const se_DeleteBucketPolicyCommand = async (
  input: DeleteBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_p]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketReplicationCommand
 */
export const se_DeleteBucketReplicationCommand = async (
  input: DeleteBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_r]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketTaggingCommand
 */
export const se_DeleteBucketTaggingCommand = async (
  input: DeleteBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_t]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteBucketWebsiteCommand
 */
export const se_DeleteBucketWebsiteCommand = async (
  input: DeleteBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_w]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteObjectCommand
 */
export const se_DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xam]: input[_MFA]!,
    [_xarp]: input[_RP]!,
    [_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR]!.toString()],
    [_xaebo]: input[_EBO]!,
    [_im]: input[_IM]!,
    [_xaimlmt]: [() => isSerializableHeaderValue(input[_IMLMT]), () => __dateToUtcString(input[_IMLMT]!).toString()],
    [_xaims]: [() => isSerializableHeaderValue(input[_IMS]), () => input[_IMS]!.toString()],
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "DeleteObject"],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteObjectsCommand
 */
export const se_DeleteObjectsCommand = async (
  input: DeleteObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xam]: input[_MFA]!,
    [_xarp]: input[_RP]!,
    [_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR]!.toString()],
    [_xaebo]: input[_EBO]!,
    [_xasca]: input[_CA]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_d]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.Delete !== undefined) {
    contents = se_Delete(input.Delete, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeleteObjectTaggingCommand
 */
export const se_DeleteObjectTaggingCommand = async (
  input: DeleteObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_t]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const se_DeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_pAB]: [, ""],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketAccelerateConfigurationCommand
 */
export const se_GetBucketAccelerateConfigurationCommand = async (
  input: GetBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
    [_xarp]: input[_RP]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_ac]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketAclCommand
 */
export const se_GetBucketAclCommand = async (
  input: GetBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_acl]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketAnalyticsConfigurationCommand
 */
export const se_GetBucketAnalyticsConfigurationCommand = async (
  input: GetBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_a]: [, ""],
    [_xi]: [, "GetBucketAnalyticsConfiguration"],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketCorsCommand
 */
export const se_GetBucketCorsCommand = async (
  input: GetBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_c]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketEncryptionCommand
 */
export const se_GetBucketEncryptionCommand = async (
  input: GetBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_en]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand
 */
export const se_GetBucketIntelligentTieringConfigurationCommand = async (
  input: GetBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_it]: [, ""],
    [_xi]: [, "GetBucketIntelligentTieringConfiguration"],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketInventoryConfigurationCommand
 */
export const se_GetBucketInventoryConfigurationCommand = async (
  input: GetBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_in]: [, ""],
    [_xi]: [, "GetBucketInventoryConfiguration"],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const se_GetBucketLifecycleConfigurationCommand = async (
  input: GetBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_l]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketLocationCommand
 */
export const se_GetBucketLocationCommand = async (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_lo]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketLoggingCommand
 */
export const se_GetBucketLoggingCommand = async (
  input: GetBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_log]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketMetadataConfigurationCommand
 */
export const se_GetBucketMetadataConfigurationCommand = async (
  input: GetBucketMetadataConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mC]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketMetadataTableConfigurationCommand
 */
export const se_GetBucketMetadataTableConfigurationCommand = async (
  input: GetBucketMetadataTableConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mT]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketMetricsConfigurationCommand
 */
export const se_GetBucketMetricsConfigurationCommand = async (
  input: GetBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_m]: [, ""],
    [_xi]: [, "GetBucketMetricsConfiguration"],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketNotificationConfigurationCommand
 */
export const se_GetBucketNotificationConfigurationCommand = async (
  input: GetBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_n]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketOwnershipControlsCommand
 */
export const se_GetBucketOwnershipControlsCommand = async (
  input: GetBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_oC]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketPolicyCommand
 */
export const se_GetBucketPolicyCommand = async (
  input: GetBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_p]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketPolicyStatusCommand
 */
export const se_GetBucketPolicyStatusCommand = async (
  input: GetBucketPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_pS]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketReplicationCommand
 */
export const se_GetBucketReplicationCommand = async (
  input: GetBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_r]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketRequestPaymentCommand
 */
export const se_GetBucketRequestPaymentCommand = async (
  input: GetBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_rP]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketTaggingCommand
 */
export const se_GetBucketTaggingCommand = async (
  input: GetBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_t]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketVersioningCommand
 */
export const se_GetBucketVersioningCommand = async (
  input: GetBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_v]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetBucketWebsiteCommand
 */
export const se_GetBucketWebsiteCommand = async (
  input: GetBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_w]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectCommand
 */
export const se_GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
    [_ims]: [() => isSerializableHeaderValue(input[_IMSf]), () => __dateToUtcString(input[_IMSf]!).toString()],
    [_inm]: input[_INM]!,
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => __dateToUtcString(input[_IUS]!).toString()],
    [_ra]: input[_R]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xacm]: input[_CM]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "GetObject"],
    [_rcc]: [, input[_RCC]!],
    [_rcd]: [, input[_RCD]!],
    [_rce]: [, input[_RCE]!],
    [_rcl]: [, input[_RCL]!],
    [_rct]: [, input[_RCT]!],
    [_re]: [() => input.ResponseExpires !== void 0, () => __dateToUtcString(input[_RE]!).toString()],
    [_vI]: [, input[_VI]!],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectAclCommand
 */
export const se_GetObjectAclCommand = async (
  input: GetObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_acl]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectAttributesCommand
 */
export const se_GetObjectAttributesCommand = async (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xamp]: [() => isSerializableHeaderValue(input[_MP]), () => input[_MP]!.toString()],
    [_xapnm]: input[_PNM]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xaoa]: [() => isSerializableHeaderValue(input[_OA]), () => (input[_OA]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_at]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectLegalHoldCommand
 */
export const se_GetObjectLegalHoldCommand = async (
  input: GetObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_lh]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectLockConfigurationCommand
 */
export const se_GetObjectLockConfigurationCommand = async (
  input: GetObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_ol]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectRetentionCommand
 */
export const se_GetObjectRetentionCommand = async (
  input: GetObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_ret]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectTaggingCommand
 */
export const se_GetObjectTaggingCommand = async (
  input: GetObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
    [_xarp]: input[_RP]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_t]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetObjectTorrentCommand
 */
export const se_GetObjectTorrentCommand = async (
  input: GetObjectTorrentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_to]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlGetPublicAccessBlockCommand
 */
export const se_GetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_pAB]: [, ""],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHeadBucketCommand
 */
export const se_HeadBucketCommand = async (
  input: HeadBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  b.m("HEAD").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlHeadObjectCommand
 */
export const se_HeadObjectCommand = async (
  input: HeadObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_IM]!,
    [_ims]: [() => isSerializableHeaderValue(input[_IMSf]), () => __dateToUtcString(input[_IMSf]!).toString()],
    [_inm]: input[_INM]!,
    [_ius]: [() => isSerializableHeaderValue(input[_IUS]), () => __dateToUtcString(input[_IUS]!).toString()],
    [_ra]: input[_R]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xacm]: input[_CM]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_rcc]: [, input[_RCC]!],
    [_rcd]: [, input[_RCD]!],
    [_rce]: [, input[_RCE]!],
    [_rcl]: [, input[_RCL]!],
    [_rct]: [, input[_RCT]!],
    [_re]: [() => input.ResponseExpires !== void 0, () => __dateToUtcString(input[_RE]!).toString()],
    [_vI]: [, input[_VI]!],
    [_pN]: [() => input.PartNumber !== void 0, () => input[_PN]!.toString()],
  });
  let body: any;
  b.m("HEAD").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListBucketAnalyticsConfigurationsCommand
 */
export const se_ListBucketAnalyticsConfigurationsCommand = async (
  input: ListBucketAnalyticsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_a]: [, ""],
    [_xi]: [, "ListBucketAnalyticsConfigurations"],
    [_ct_]: [, input[_CTon]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand
 */
export const se_ListBucketIntelligentTieringConfigurationsCommand = async (
  input: ListBucketIntelligentTieringConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_it]: [, ""],
    [_xi]: [, "ListBucketIntelligentTieringConfigurations"],
    [_ct_]: [, input[_CTon]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListBucketInventoryConfigurationsCommand
 */
export const se_ListBucketInventoryConfigurationsCommand = async (
  input: ListBucketInventoryConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_in]: [, ""],
    [_xi]: [, "ListBucketInventoryConfigurations"],
    [_ct_]: [, input[_CTon]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListBucketMetricsConfigurationsCommand
 */
export const se_ListBucketMetricsConfigurationsCommand = async (
  input: ListBucketMetricsConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_m]: [, ""],
    [_xi]: [, "ListBucketMetricsConfigurations"],
    [_ct_]: [, input[_CTon]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListBucketsCommand
 */
export const se_ListBucketsCommand = async (
  input: ListBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/");
  const query: any = map({
    [_xi]: [, "ListBuckets"],
    [_mb]: [() => input.MaxBuckets !== void 0, () => input[_MB]!.toString()],
    [_ct_]: [, input[_CTon]!],
    [_pr]: [, input[_P]!],
    [_br]: [, input[_BR]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListDirectoryBucketsCommand
 */
export const se_ListDirectoryBucketsCommand = async (
  input: ListDirectoryBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/");
  const query: any = map({
    [_xi]: [, "ListDirectoryBuckets"],
    [_ct_]: [, input[_CTon]!],
    [_mdb]: [() => input.MaxDirectoryBuckets !== void 0, () => input[_MDB]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListMultipartUploadsCommand
 */
export const se_ListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
    [_xarp]: input[_RP]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_u]: [, ""],
    [_de]: [, input[_D]!],
    [_et]: [, input[_ET]!],
    [_km]: [, input[_KM]!],
    [_mu]: [() => input.MaxUploads !== void 0, () => input[_MU]!.toString()],
    [_pr]: [, input[_P]!],
    [_uim]: [, input[_UIM]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListObjectsCommand
 */
export const se_ListObjectsCommand = async (
  input: ListObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xaooa]: [() => isSerializableHeaderValue(input[_OOA]), () => (input[_OOA]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_de]: [, input[_D]!],
    [_et]: [, input[_ET]!],
    [_ma]: [, input[_M]!],
    [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK]!.toString()],
    [_pr]: [, input[_P]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListObjectsV2Command
 */
export const se_ListObjectsV2Command = async (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xaooa]: [() => isSerializableHeaderValue(input[_OOA]), () => (input[_OOA]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_lt]: [, "2"],
    [_de]: [, input[_D]!],
    [_et]: [, input[_ET]!],
    [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK]!.toString()],
    [_pr]: [, input[_P]!],
    [_ct_]: [, input[_CTon]!],
    [_fo]: [() => input.FetchOwner !== void 0, () => input[_FO]!.toString()],
    [_sa]: [, input[_SA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListObjectVersionsCommand
 */
export const se_ListObjectVersionsCommand = async (
  input: ListObjectVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xaebo]: input[_EBO]!,
    [_xarp]: input[_RP]!,
    [_xaooa]: [() => isSerializableHeaderValue(input[_OOA]), () => (input[_OOA]! || []).map(__quoteHeader).join(", ")],
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_ver]: [, ""],
    [_de]: [, input[_D]!],
    [_et]: [, input[_ET]!],
    [_km]: [, input[_KM]!],
    [_mk]: [() => input.MaxKeys !== void 0, () => input[_MK]!.toString()],
    [_pr]: [, input[_P]!],
    [_vim]: [, input[_VIM]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlListPartsCommand
 */
export const se_ListPartsCommand = async (
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "ListParts"],
    [_mp]: [() => input.MaxParts !== void 0, () => input[_MP]!.toString()],
    [_pnm]: [, input[_PNM]!],
    [_uI]: [, __expectNonNull(input[_UI]!, `UploadId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketAccelerateConfigurationCommand
 */
export const se_PutBucketAccelerateConfigurationCommand = async (
  input: PutBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
    [_xasca]: input[_CA]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_ac]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.AccelerateConfiguration !== undefined) {
    contents = se_AccelerateConfiguration(input.AccelerateConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketAclCommand
 */
export const se_PutBucketAclCommand = async (
  input: PutBucketAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaa]: input[_ACL]!,
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagw]: input[_GW]!,
    [_xagwa]: input[_GWACP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_acl]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = se_AccessControlPolicy(input.AccessControlPolicy, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketAnalyticsConfigurationCommand
 */
export const se_PutBucketAnalyticsConfigurationCommand = async (
  input: PutBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_a]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  let contents: any;
  if (input.AnalyticsConfiguration !== undefined) {
    contents = se_AnalyticsConfiguration(input.AnalyticsConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketCorsCommand
 */
export const se_PutBucketCorsCommand = async (
  input: PutBucketCorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_c]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.CORSConfiguration !== undefined) {
    contents = se_CORSConfiguration(input.CORSConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketEncryptionCommand
 */
export const se_PutBucketEncryptionCommand = async (
  input: PutBucketEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_en]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    contents = se_ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand
 */
export const se_PutBucketIntelligentTieringConfigurationCommand = async (
  input: PutBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_it]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  let contents: any;
  if (input.IntelligentTieringConfiguration !== undefined) {
    contents = se_IntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketInventoryConfigurationCommand
 */
export const se_PutBucketInventoryConfigurationCommand = async (
  input: PutBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_in]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  let contents: any;
  if (input.InventoryConfiguration !== undefined) {
    contents = se_InventoryConfiguration(input.InventoryConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const se_PutBucketLifecycleConfigurationCommand = async (
  input: PutBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
    [_xatdmos]: input[_TDMOS]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_l]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = se_BucketLifecycleConfiguration(input.LifecycleConfiguration, context);
    contents = contents.n("LifecycleConfiguration");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketLoggingCommand
 */
export const se_PutBucketLoggingCommand = async (
  input: PutBucketLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_log]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.BucketLoggingStatus !== undefined) {
    contents = se_BucketLoggingStatus(input.BucketLoggingStatus, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketMetricsConfigurationCommand
 */
export const se_PutBucketMetricsConfigurationCommand = async (
  input: PutBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_m]: [, ""],
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
  });
  let body: any;
  let contents: any;
  if (input.MetricsConfiguration !== undefined) {
    contents = se_MetricsConfiguration(input.MetricsConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketNotificationConfigurationCommand
 */
export const se_PutBucketNotificationConfigurationCommand = async (
  input: PutBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaebo]: input[_EBO]!,
    [_xasdv]: [() => isSerializableHeaderValue(input[_SDV]), () => input[_SDV]!.toString()],
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_n]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.NotificationConfiguration !== undefined) {
    contents = se_NotificationConfiguration(input.NotificationConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketOwnershipControlsCommand
 */
export const se_PutBucketOwnershipControlsCommand = async (
  input: PutBucketOwnershipControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xaebo]: input[_EBO]!,
    [_xasca]: input[_CA]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_oC]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.OwnershipControls !== undefined) {
    contents = se_OwnershipControls(input.OwnershipControls, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketPolicyCommand
 */
export const se_PutBucketPolicyCommand = async (
  input: PutBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "text/plain",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xacrsba]: [() => isSerializableHeaderValue(input[_CRSBA]), () => input[_CRSBA]!.toString()],
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_p]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.Policy !== undefined) {
    contents = input.Policy;
    body = contents;
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketReplicationCommand
 */
export const se_PutBucketReplicationCommand = async (
  input: PutBucketReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xabolt]: input[_To]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_r]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketRequestPaymentCommand
 */
export const se_PutBucketRequestPaymentCommand = async (
  input: PutBucketRequestPaymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_rP]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.RequestPaymentConfiguration !== undefined) {
    contents = se_RequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketTaggingCommand
 */
export const se_PutBucketTaggingCommand = async (
  input: PutBucketTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_t]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketVersioningCommand
 */
export const se_PutBucketVersioningCommand = async (
  input: PutBucketVersioningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xam]: input[_MFA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_v]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = se_VersioningConfiguration(input.VersioningConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutBucketWebsiteCommand
 */
export const se_PutBucketWebsiteCommand = async (
  input: PutBucketWebsiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_w]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.WebsiteConfiguration !== undefined) {
    contents = se_WebsiteConfiguration(input.WebsiteConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectCommand
 */
export const se_PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
    [_ct]: input[_CTo] || "application/octet-stream",
    [_xaa]: input[_ACL]!,
    [_cc]: input[_CC]!,
    [_cd]: input[_CD]!,
    [_ce]: input[_CE]!,
    [_cl]: input[_CL]!,
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo]!.toString()],
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xacc]: input[_CCRC]!,
    [_xacc_]: input[_CCRCC]!,
    [_xacc__]: input[_CCRCNVME]!,
    [_xacs]: input[_CSHA]!,
    [_xacs_]: input[_CSHAh]!,
    [_e]: [() => isSerializableHeaderValue(input[_E]), () => __dateToUtcString(input[_E]!).toString()],
    [_im]: input[_IM]!,
    [_inm]: input[_INM]!,
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagwa]: input[_GWACP]!,
    [_xawob]: [() => isSerializableHeaderValue(input[_WOB]), () => input[_WOB]!.toString()],
    [_xasse]: input[_SSE]!,
    [_xasc]: input[_SC]!,
    [_xawrl]: input[_WRL]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xasseakki]: input[_SSEKMSKI]!,
    [_xassec]: input[_SSEKMSEC]!,
    [_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE]!.toString()],
    [_xarp]: input[_RP]!,
    [_xat]: input[_T]!,
    [_xaolm]: input[_OLM]!,
    [_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => __serializeDateTime(input[_OLRUD]!).toString()],
    [_xaollh]: input[_OLLHS]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "PutObject"],
  });
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectAclCommand
 */
export const se_PutObjectAclCommand = async (
  input: PutObjectAclCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xaa]: input[_ACL]!,
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xagfc]: input[_GFC]!,
    [_xagr]: input[_GR]!,
    [_xagra]: input[_GRACP]!,
    [_xagw]: input[_GW]!,
    [_xagwa]: input[_GWACP]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_acl]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  let contents: any;
  if (input.AccessControlPolicy !== undefined) {
    contents = se_AccessControlPolicy(input.AccessControlPolicy, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectLegalHoldCommand
 */
export const se_PutObjectLegalHoldCommand = async (
  input: PutObjectLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xarp]: input[_RP]!,
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_lh]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  let contents: any;
  if (input.LegalHold !== undefined) {
    contents = se_ObjectLockLegalHold(input.LegalHold, context);
    contents = contents.n("LegalHold");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectLockConfigurationCommand
 */
export const se_PutObjectLockConfigurationCommand = async (
  input: PutObjectLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xarp]: input[_RP]!,
    [_xabolt]: input[_To]!,
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_ol]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.ObjectLockConfiguration !== undefined) {
    contents = se_ObjectLockConfiguration(input.ObjectLockConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectRetentionCommand
 */
export const se_PutObjectRetentionCommand = async (
  input: PutObjectRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xarp]: input[_RP]!,
    [_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR]!.toString()],
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_ret]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  let contents: any;
  if (input.Retention !== undefined) {
    contents = se_ObjectLockRetention(input.Retention, context);
    contents = contents.n("Retention");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutObjectTaggingCommand
 */
export const se_PutObjectTaggingCommand = async (
  input: PutObjectTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
    [_xarp]: input[_RP]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_t]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlPutPublicAccessBlockCommand
 */
export const se_PutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_pAB]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlRenameObjectCommand
 */
export const se_RenameObjectCommand = async (
  input: RenameObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xars]: input[_RS]!,
    [_im]: input[_DIM]!,
    [_inm]: input[_DINM]!,
    [_ims]: [() => isSerializableHeaderValue(input[_DIMS]), () => __dateToUtcString(input[_DIMS]!).toString()],
    [_ius]: [() => isSerializableHeaderValue(input[_DIUS]), () => __dateToUtcString(input[_DIUS]!).toString()],
    [_xarsim]: input[_SIM]!,
    [_xarsinm]: input[_SINM]!,
    [_xarsims]: [() => isSerializableHeaderValue(input[_SIMS]), () => __dateToUtcString(input[_SIMS]!).toString()],
    [_xarsius]: [() => isSerializableHeaderValue(input[_SIUS]), () => __dateToUtcString(input[_SIUS]!).toString()],
    [_xact_]: input[_CTl] ?? generateIdempotencyToken(),
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_rO]: [, ""],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlRestoreObjectCommand
 */
export const se_RestoreObjectCommand = async (
  input: RestoreObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xarp]: input[_RP]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_res]: [, ""],
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  let contents: any;
  if (input.RestoreRequest !== undefined) {
    contents = se_RestoreRequest(input.RestoreRequest, context);
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlSelectObjectContentCommand
 */
export const se_SelectObjectContentCommand = async (
  input: SelectObjectContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_se]: [, ""],
    [_st]: [, "2"],
  });
  let body: any;
  body = _ve;
  const bn = new __XmlNode(_SOCR);
  bn.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
  bn.cc(input, _Ex);
  bn.cc(input, _ETx);
  if (input[_IS] != null) {
    bn.c(se_InputSerialization(input[_IS], context).n(_IS));
  }
  if (input[_OS] != null) {
    bn.c(se_OutputSerialization(input[_OS], context).n(_OS));
  }
  if (input[_RPe] != null) {
    bn.c(se_RequestProgress(input[_RPe], context).n(_RPe));
  }
  if (input[_SR] != null) {
    bn.c(se_ScanRange(input[_SR], context).n(_SR));
  }
  body += bn.toString();
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateBucketMetadataInventoryTableConfigurationCommand
 */
export const se_UpdateBucketMetadataInventoryTableConfigurationCommand = async (
  input: UpdateBucketMetadataInventoryTableConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mIT]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.InventoryTableConfiguration !== undefined) {
    contents = se_InventoryTableConfigurationUpdates(input.InventoryTableConfiguration, context);
    contents = contents.n("InventoryTableConfiguration");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUpdateBucketMetadataJournalTableConfigurationCommand
 */
export const se_UpdateBucketMetadataJournalTableConfigurationCommand = async (
  input: UpdateBucketMetadataJournalTableConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  const query: any = map({
    [_mJT]: [, ""],
  });
  let body: any;
  let contents: any;
  if (input.JournalTableConfiguration !== undefined) {
    contents = se_JournalTableConfigurationUpdates(input.JournalTableConfiguration, context);
    contents = contents.n("JournalTableConfiguration");
    body = _ve;
    contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    body += contents.toString();
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUploadPartCommand
 */
export const se_UploadPartCommand = async (
  input: UploadPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo]!.toString()],
    [_cm]: input[_CMD]!,
    [_xasca]: input[_CA]!,
    [_xacc]: input[_CCRC]!,
    [_xacc_]: input[_CCRCC]!,
    [_xacc__]: input[_CCRCNVME]!,
    [_xacs]: input[_CSHA]!,
    [_xacs_]: input[_CSHAh]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "UploadPart"],
    [_pN]: [__expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN]!.toString()],
    [_uI]: [, __expectNonNull(input[_UI]!, `UploadId`)],
  });
  let body: any;
  let contents: any;
  if (input.Body !== undefined) {
    contents = input.Body;
    body = contents;
  }
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlUploadPartCopyCommand
 */
export const se_UploadPartCopyCommand = async (
  input: UploadPartCopyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xacs__]: input[_CS]!,
    [_xacsim]: input[_CSIM]!,
    [_xacsims]: [() => isSerializableHeaderValue(input[_CSIMS]), () => __dateToUtcString(input[_CSIMS]!).toString()],
    [_xacsinm]: input[_CSINM]!,
    [_xacsius]: [() => isSerializableHeaderValue(input[_CSIUS]), () => __dateToUtcString(input[_CSIUS]!).toString()],
    [_xacsr]: input[_CSR]!,
    [_xasseca]: input[_SSECA]!,
    [_xasseck]: input[_SSECK]!,
    [_xasseckm]: input[_SSECKMD]!,
    [_xacssseca]: input[_CSSSECA]!,
    [_xacssseck]: input[_CSSSECK]!,
    [_xacssseckm]: input[_CSSSECKMD]!,
    [_xarp]: input[_RP]!,
    [_xaebo]: input[_EBO]!,
    [_xasebo]: input[_ESBO]!,
  });
  b.bp("/{Key+}");
  b.p("Bucket", () => input.Bucket!, "{Bucket}", false);
  b.p("Key", () => input.Key!, "{Key+}", true);
  const query: any = map({
    [_xi]: [, "UploadPartCopy"],
    [_pN]: [__expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN]!.toString()],
    [_uI]: [, __expectNonNull(input[_UI]!, `UploadId`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restXmlWriteGetObjectResponseCommand
 */
export const se_WriteGetObjectResponseCommand = async (
  input: WriteGetObjectResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    ...(input.Metadata !== undefined &&
      Object.keys(input.Metadata).reduce((acc: any, suffix: string) => {
        acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata![suffix];
        return acc;
      }, {})),
    "content-type": "application/octet-stream",
    [_xarr]: input[_RR]!,
    [_xart]: input[_RT]!,
    [_xafs]: [() => isSerializableHeaderValue(input[_SCt]), () => input[_SCt]!.toString()],
    [_xafec]: input[_EC]!,
    [_xafem]: input[_EM]!,
    [_xafhar]: input[_AR]!,
    [_xafhcc]: input[_CC]!,
    [_xafhcd]: input[_CD]!,
    [_xafhce]: input[_CE]!,
    [_xafhcl]: input[_CL]!,
    [_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo]!.toString()],
    [_xafhcr]: input[_CR]!,
    [_xafhct]: input[_CTo]!,
    [_xafhxacc]: input[_CCRC]!,
    [_xafhxacc_]: input[_CCRCC]!,
    [_xafhxacc__]: input[_CCRCNVME]!,
    [_xafhxacs]: input[_CSHA]!,
    [_xafhxacs_]: input[_CSHAh]!,
    [_xafhxadm]: [() => isSerializableHeaderValue(input[_DM]), () => input[_DM]!.toString()],
    [_xafhe]: input[_ETa]!,
    [_xafhe_]: [() => isSerializableHeaderValue(input[_E]), () => __dateToUtcString(input[_E]!).toString()],
    [_xafhxae]: input[_Exp]!,
    [_xafhlm]: [() => isSerializableHeaderValue(input[_LM]), () => __dateToUtcString(input[_LM]!).toString()],
    [_xafhxamm]: [() => isSerializableHeaderValue(input[_MM]), () => input[_MM]!.toString()],
    [_xafhxaolm]: input[_OLM]!,
    [_xafhxaollh]: input[_OLLHS]!,
    [_xafhxaolrud]: [
      () => isSerializableHeaderValue(input[_OLRUD]),
      () => __serializeDateTime(input[_OLRUD]!).toString(),
    ],
    [_xafhxampc]: [() => isSerializableHeaderValue(input[_PC]), () => input[_PC]!.toString()],
    [_xafhxars]: input[_RSe]!,
    [_xafhxarc]: input[_RC]!,
    [_xafhxar]: input[_Re]!,
    [_xafhxasse]: input[_SSE]!,
    [_xafhxasseca]: input[_SSECA]!,
    [_xafhxasseakki]: input[_SSEKMSKI]!,
    [_xafhxasseckm]: input[_SSECKMD]!,
    [_xafhxasc]: input[_SC]!,
    [_xafhxatc]: [() => isSerializableHeaderValue(input[_TC]), () => input[_TC]!.toString()],
    [_xafhxavi]: input[_VI]!,
    [_xafhxassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE]!.toString()],
  });
  b.bp("/WriteGetObjectResponse");
  let body: any;
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
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restXmlAbortMultipartUploadCommand
 */
export const de_AbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCompleteMultipartUploadCommand
 */
export const de_CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_Exp]: [, output.headers[_xae]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data[_CCRC] != null) {
    contents[_CCRC] = __expectString(data[_CCRC]);
  }
  if (data[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(data[_CCRCC]);
  }
  if (data[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(data[_CCRCNVME]);
  }
  if (data[_CSHA] != null) {
    contents[_CSHA] = __expectString(data[_CSHA]);
  }
  if (data[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(data[_CSHAh]);
  }
  if (data[_CT] != null) {
    contents[_CT] = __expectString(data[_CT]);
  }
  if (data[_ETa] != null) {
    contents[_ETa] = __expectString(data[_ETa]);
  }
  if (data[_K] != null) {
    contents[_K] = __expectString(data[_K]);
  }
  if (data[_L] != null) {
    contents[_L] = __expectString(data[_L]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCopyObjectCommand
 */
export const de_CopyObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_Exp]: [, output.headers[_xae]],
    [_CSVI]: [, output.headers[_xacsvi]],
    [_VI]: [, output.headers[_xavi]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CopyObjectResult = de_CopyObjectResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateBucketCommand
 */
export const de_CreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_L]: [, output.headers[_lo]],
    [_BA]: [, output.headers[_xaba]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateBucketMetadataConfigurationCommand
 */
export const de_CreateBucketMetadataConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketMetadataConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateBucketMetadataTableConfigurationCommand
 */
export const de_CreateBucketMetadataTableConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketMetadataTableConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultipartUploadCommand
 */
export const de_CreateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_AD]: [
      () => void 0 !== output.headers[_xaad],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers[_xaad])),
    ],
    [_ARI]: [, output.headers[_xaari]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
    [_CA]: [, output.headers[_xaca]],
    [_CT]: [, output.headers[_xact]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data[_K] != null) {
    contents[_K] = __expectString(data[_K]);
  }
  if (data[_UI] != null) {
    contents[_UI] = __expectString(data[_UI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateSessionCommand
 */
export const de_CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_SSE]: [, output.headers[_xasse]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_C] != null) {
    contents[_C] = de_SessionCredentials(data[_C], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketCommand
 */
export const de_DeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand
 */
export const de_DeleteBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketCorsCommand
 */
export const de_DeleteBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCorsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketEncryptionCommand
 */
export const de_DeleteBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand
 */
export const de_DeleteBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand
 */
export const de_DeleteBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketLifecycleCommand
 */
export const de_DeleteBucketLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketMetadataConfigurationCommand
 */
export const de_DeleteBucketMetadataConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetadataConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketMetadataTableConfigurationCommand
 */
export const de_DeleteBucketMetadataTableConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetadataTableConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand
 */
export const de_DeleteBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketOwnershipControlsCommand
 */
export const de_DeleteBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketPolicyCommand
 */
export const de_DeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketReplicationCommand
 */
export const de_DeleteBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketReplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketTaggingCommand
 */
export const de_DeleteBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketWebsiteCommand
 */
export const de_DeleteBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectCommand
 */
export const de_DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => __parseBoolean(output.headers[_xadm])],
    [_VI]: [, output.headers[_xavi]],
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectsCommand
 */
export const de_DeleteObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deleted === "") {
    contents[_De] = [];
  } else if (data[_De] != null) {
    contents[_De] = de_DeletedObjects(__getArrayIfSingleItem(data[_De]), context);
  }
  if (data.Error === "") {
    contents[_Err] = [];
  } else if (data[_Er] != null) {
    contents[_Err] = de_Errors(__getArrayIfSingleItem(data[_Er]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteObjectTaggingCommand
 */
export const de_DeleteObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectTaggingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_VI]: [, output.headers[_xavi]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeletePublicAccessBlockCommand
 */
export const de_DeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAccelerateConfigurationCommand
 */
export const de_GetBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_S] != null) {
    contents[_S] = __expectString(data[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAclCommand
 */
export const de_GetBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents[_Gr] = [];
  } else if (data[_ACLc] != null && data[_ACLc][_G] != null) {
    contents[_Gr] = de_Grants(__getArrayIfSingleItem(data[_ACLc][_G]), context);
  }
  if (data[_O] != null) {
    contents[_O] = de_Owner(data[_O], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand
 */
export const de_GetBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.AnalyticsConfiguration = de_AnalyticsConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketCorsCommand
 */
export const de_GetBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CORSRule === "") {
    contents[_CORSRu] = [];
  } else if (data[_CORSR] != null) {
    contents[_CORSRu] = de_CORSRules(__getArrayIfSingleItem(data[_CORSR]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketEncryptionCommand
 */
export const de_GetBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ServerSideEncryptionConfiguration = de_ServerSideEncryptionConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand
 */
export const de_GetBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.IntelligentTieringConfiguration = de_IntelligentTieringConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketInventoryConfigurationCommand
 */
export const de_GetBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InventoryConfiguration = de_InventoryConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLifecycleConfigurationCommand
 */
export const de_GetBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_TDMOS]: [, output.headers[_xatdmos]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Rule === "") {
    contents[_Rul] = [];
  } else if (data[_Ru] != null) {
    contents[_Rul] = de_LifecycleRules(__getArrayIfSingleItem(data[_Ru]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLocationCommand
 */
export const de_GetBucketLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_LC] != null) {
    contents[_LC] = __expectString(data[_LC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketLoggingCommand
 */
export const de_GetBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_LE] != null) {
    contents[_LE] = de_LoggingEnabled(data[_LE], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketMetadataConfigurationCommand
 */
export const de_GetBucketMetadataConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetadataConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GetBucketMetadataConfigurationResult = de_GetBucketMetadataConfigurationResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketMetadataTableConfigurationCommand
 */
export const de_GetBucketMetadataTableConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetadataTableConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GetBucketMetadataTableConfigurationResult = de_GetBucketMetadataTableConfigurationResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketMetricsConfigurationCommand
 */
export const de_GetBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MetricsConfiguration = de_MetricsConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketNotificationConfigurationCommand
 */
export const de_GetBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_EBC] != null) {
    contents[_EBC] = de_EventBridgeConfiguration(data[_EBC], context);
  }
  if (data.CloudFunctionConfiguration === "") {
    contents[_LFC] = [];
  } else if (data[_CFC] != null) {
    contents[_LFC] = de_LambdaFunctionConfigurationList(__getArrayIfSingleItem(data[_CFC]), context);
  }
  if (data.QueueConfiguration === "") {
    contents[_QCu] = [];
  } else if (data[_QC] != null) {
    contents[_QCu] = de_QueueConfigurationList(__getArrayIfSingleItem(data[_QC]), context);
  }
  if (data.TopicConfiguration === "") {
    contents[_TCop] = [];
  } else if (data[_TCo] != null) {
    contents[_TCop] = de_TopicConfigurationList(__getArrayIfSingleItem(data[_TCo]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketOwnershipControlsCommand
 */
export const de_GetBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.OwnershipControls = de_OwnershipControls(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketPolicyCommand
 */
export const de_GetBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBodyString(output.body, context);
  contents.Policy = __expectString(data);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketPolicyStatusCommand
 */
export const de_GetBucketPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PolicyStatus = de_PolicyStatus(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketReplicationCommand
 */
export const de_GetBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ReplicationConfiguration = de_ReplicationConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketRequestPaymentCommand
 */
export const de_GetBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Pa] != null) {
    contents[_Pa] = __expectString(data[_Pa]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketTaggingCommand
 */
export const de_GetBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents[_TS] = [];
  } else if (data[_TS] != null && data[_TS][_Ta] != null) {
    contents[_TS] = de_TagSet(__getArrayIfSingleItem(data[_TS][_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketVersioningCommand
 */
export const de_GetBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_MDf] != null) {
    contents[_MFAD] = __expectString(data[_MDf]);
  }
  if (data[_S] != null) {
    contents[_S] = __expectString(data[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketWebsiteCommand
 */
export const de_GetBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_ED] != null) {
    contents[_ED] = de_ErrorDocument(data[_ED], context);
  }
  if (data[_ID] != null) {
    contents[_ID] = de_IndexDocument(data[_ID], context);
  }
  if (data[_RART] != null) {
    contents[_RART] = de_RedirectAllRequestsTo(data[_RART], context);
  }
  if (data.RoutingRules === "") {
    contents[_RRo] = [];
  } else if (data[_RRo] != null && data[_RRo][_RRou] != null) {
    contents[_RRo] = de_RoutingRules(__getArrayIfSingleItem(data[_RRo][_RRou]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectCommand
 */
export const de_GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => __parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => __strictParseLong(output.headers[_cl_])],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => __strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CR]: [, output.headers[_cr]],
    [_CTo]: [, output.headers[_ct]],
    [_E]: [() => void 0 !== output.headers[_e], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RSe]: [, output.headers[_xars_]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => __strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => __strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers[_xaolrud])),
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
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
 * deserializeAws_restXmlGetObjectAclCommand
 */
export const de_GetObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessControlList === "") {
    contents[_Gr] = [];
  } else if (data[_ACLc] != null && data[_ACLc][_G] != null) {
    contents[_Gr] = de_Grants(__getArrayIfSingleItem(data[_ACLc][_G]), context);
  }
  if (data[_O] != null) {
    contents[_O] = de_Owner(data[_O], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectAttributesCommand
 */
export const de_GetObjectAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => __parseBoolean(output.headers[_xadm])],
    [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
    [_VI]: [, output.headers[_xavi]],
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_Ch] != null) {
    contents[_Ch] = de_Checksum(data[_Ch], context);
  }
  if (data[_ETa] != null) {
    contents[_ETa] = __expectString(data[_ETa]);
  }
  if (data[_OP] != null) {
    contents[_OP] = de_GetObjectAttributesParts(data[_OP], context);
  }
  if (data[_OSb] != null) {
    contents[_OSb] = __strictParseLong(data[_OSb]) as number;
  }
  if (data[_SC] != null) {
    contents[_SC] = __expectString(data[_SC]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectLegalHoldCommand
 */
export const de_GetObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.LegalHold = de_ObjectLockLegalHold(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectLockConfigurationCommand
 */
export const de_GetObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ObjectLockConfiguration = de_ObjectLockConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectRetentionCommand
 */
export const de_GetObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.Retention = de_ObjectLockRetention(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectTaggingCommand
 */
export const de_GetObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_VI]: [, output.headers[_xavi]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagSet === "") {
    contents[_TS] = [];
  } else if (data[_TS] != null && data[_TS][_Ta] != null) {
    contents[_TS] = de_TagSet(__getArrayIfSingleItem(data[_TS][_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectTorrentCommand
 */
export const de_GetObjectTorrentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetObjectTorrentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restXmlGetPublicAccessBlockCommand
 */
export const de_GetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlHeadBucketCommand
 */
export const de_HeadBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_BA]: [, output.headers[_xaba]],
    [_BLT]: [, output.headers[_xablt]],
    [_BLN]: [, output.headers[_xabln]],
    [_BR]: [, output.headers[_xabr]],
    [_APA]: [() => void 0 !== output.headers[_xaapa], () => __parseBoolean(output.headers[_xaapa])],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlHeadObjectCommand
 */
export const de_HeadObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<HeadObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_DM]: [() => void 0 !== output.headers[_xadm], () => __parseBoolean(output.headers[_xadm])],
    [_AR]: [, output.headers[_ar]],
    [_Exp]: [, output.headers[_xae]],
    [_Re]: [, output.headers[_xar]],
    [_AS]: [, output.headers[_xaas]],
    [_LM]: [() => void 0 !== output.headers[_lm], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_lm]))],
    [_CLo]: [() => void 0 !== output.headers[_cl_], () => __strictParseLong(output.headers[_cl_])],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_ETa]: [, output.headers[_eta]],
    [_MM]: [() => void 0 !== output.headers[_xamm], () => __strictParseInt32(output.headers[_xamm])],
    [_VI]: [, output.headers[_xavi]],
    [_CC]: [, output.headers[_cc]],
    [_CD]: [, output.headers[_cd]],
    [_CE]: [, output.headers[_ce]],
    [_CL]: [, output.headers[_cl]],
    [_CTo]: [, output.headers[_ct]],
    [_CR]: [, output.headers[_cr]],
    [_E]: [() => void 0 !== output.headers[_e], () => __expectNonNull(__parseRfc7231DateTime(output.headers[_e]))],
    [_ES]: [, output.headers[_ex]],
    [_WRL]: [, output.headers[_xawrl]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_SC]: [, output.headers[_xasc]],
    [_RC]: [, output.headers[_xarc]],
    [_RSe]: [, output.headers[_xars_]],
    [_PC]: [() => void 0 !== output.headers[_xampc], () => __strictParseInt32(output.headers[_xampc])],
    [_TC]: [() => void 0 !== output.headers[_xatc], () => __strictParseInt32(output.headers[_xatc])],
    [_OLM]: [, output.headers[_xaolm]],
    [_OLRUD]: [
      () => void 0 !== output.headers[_xaolrud],
      () => __expectNonNull(__parseRfc3339DateTimeWithOffset(output.headers[_xaolrud])),
    ],
    [_OLLHS]: [, output.headers[_xaollh]],
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
 * deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand
 */
export const de_ListBucketAnalyticsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnalyticsConfiguration === "") {
    contents[_ACLn] = [];
  } else if (data[_AC] != null) {
    contents[_ACLn] = de_AnalyticsConfigurationList(__getArrayIfSingleItem(data[_AC]), context);
  }
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand
 */
export const de_ListBucketIntelligentTieringConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data.IntelligentTieringConfiguration === "") {
    contents[_ITCL] = [];
  } else if (data[_ITC] != null) {
    contents[_ITCL] = de_IntelligentTieringConfigurationList(__getArrayIfSingleItem(data[_ITC]), context);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketInventoryConfigurationsCommand
 */
export const de_ListBucketInventoryConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data.InventoryConfiguration === "") {
    contents[_ICL] = [];
  } else if (data[_IC] != null) {
    contents[_ICL] = de_InventoryConfigurationList(__getArrayIfSingleItem(data[_IC]), context);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketMetricsConfigurationsCommand
 */
export const de_ListBucketMetricsConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data.MetricsConfiguration === "") {
    contents[_MCL] = [];
  } else if (data[_MC] != null) {
    contents[_MCL] = de_MetricsConfigurationList(__getArrayIfSingleItem(data[_MC]), context);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListBucketsCommand
 */
export const de_ListBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Buckets === "") {
    contents[_Bu] = [];
  } else if (data[_Bu] != null && data[_Bu][_B] != null) {
    contents[_Bu] = de_Buckets(__getArrayIfSingleItem(data[_Bu][_B]), context);
  }
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data[_O] != null) {
    contents[_O] = de_Owner(data[_O], context);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListDirectoryBucketsCommand
 */
export const de_ListDirectoryBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectoryBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Buckets === "") {
    contents[_Bu] = [];
  } else if (data[_Bu] != null && data[_Bu][_B] != null) {
    contents[_Bu] = de_Buckets(__getArrayIfSingleItem(data[_Bu][_B]), context);
  }
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListMultipartUploadsCommand
 */
export const de_ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data.CommonPrefixes === "") {
    contents[_CP] = [];
  } else if (data[_CP] != null) {
    contents[_CP] = de_CommonPrefixList(__getArrayIfSingleItem(data[_CP]), context);
  }
  if (data[_D] != null) {
    contents[_D] = __expectString(data[_D]);
  }
  if (data[_ET] != null) {
    contents[_ET] = __expectString(data[_ET]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_KM] != null) {
    contents[_KM] = __expectString(data[_KM]);
  }
  if (data[_MU] != null) {
    contents[_MU] = __strictParseInt32(data[_MU]) as number;
  }
  if (data[_NKM] != null) {
    contents[_NKM] = __expectString(data[_NKM]);
  }
  if (data[_NUIM] != null) {
    contents[_NUIM] = __expectString(data[_NUIM]);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  if (data[_UIM] != null) {
    contents[_UIM] = __expectString(data[_UIM]);
  }
  if (data.Upload === "") {
    contents[_Up] = [];
  } else if (data[_U] != null) {
    contents[_Up] = de_MultipartUploadList(__getArrayIfSingleItem(data[_U]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsCommand
 */
export const de_ListObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents[_CP] = [];
  } else if (data[_CP] != null) {
    contents[_CP] = de_CommonPrefixList(__getArrayIfSingleItem(data[_CP]), context);
  }
  if (data.Contents === "") {
    contents[_Co] = [];
  } else if (data[_Co] != null) {
    contents[_Co] = de_ObjectList(__getArrayIfSingleItem(data[_Co]), context);
  }
  if (data[_D] != null) {
    contents[_D] = __expectString(data[_D]);
  }
  if (data[_ET] != null) {
    contents[_ET] = __expectString(data[_ET]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_M] != null) {
    contents[_M] = __expectString(data[_M]);
  }
  if (data[_MK] != null) {
    contents[_MK] = __strictParseInt32(data[_MK]) as number;
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_NM] != null) {
    contents[_NM] = __expectString(data[_NM]);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectsV2Command
 */
export const de_ListObjectsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents[_CP] = [];
  } else if (data[_CP] != null) {
    contents[_CP] = de_CommonPrefixList(__getArrayIfSingleItem(data[_CP]), context);
  }
  if (data.Contents === "") {
    contents[_Co] = [];
  } else if (data[_Co] != null) {
    contents[_Co] = de_ObjectList(__getArrayIfSingleItem(data[_Co]), context);
  }
  if (data[_CTon] != null) {
    contents[_CTon] = __expectString(data[_CTon]);
  }
  if (data[_D] != null) {
    contents[_D] = __expectString(data[_D]);
  }
  if (data[_ET] != null) {
    contents[_ET] = __expectString(data[_ET]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_KC] != null) {
    contents[_KC] = __strictParseInt32(data[_KC]) as number;
  }
  if (data[_MK] != null) {
    contents[_MK] = __strictParseInt32(data[_MK]) as number;
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_NCT] != null) {
    contents[_NCT] = __expectString(data[_NCT]);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  if (data[_SA] != null) {
    contents[_SA] = __expectString(data[_SA]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListObjectVersionsCommand
 */
export const de_ListObjectVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CommonPrefixes === "") {
    contents[_CP] = [];
  } else if (data[_CP] != null) {
    contents[_CP] = de_CommonPrefixList(__getArrayIfSingleItem(data[_CP]), context);
  }
  if (data.DeleteMarker === "") {
    contents[_DMe] = [];
  } else if (data[_DM] != null) {
    contents[_DMe] = de_DeleteMarkers(__getArrayIfSingleItem(data[_DM]), context);
  }
  if (data[_D] != null) {
    contents[_D] = __expectString(data[_D]);
  }
  if (data[_ET] != null) {
    contents[_ET] = __expectString(data[_ET]);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_KM] != null) {
    contents[_KM] = __expectString(data[_KM]);
  }
  if (data[_MK] != null) {
    contents[_MK] = __strictParseInt32(data[_MK]) as number;
  }
  if (data[_N] != null) {
    contents[_N] = __expectString(data[_N]);
  }
  if (data[_NKM] != null) {
    contents[_NKM] = __expectString(data[_NKM]);
  }
  if (data[_NVIM] != null) {
    contents[_NVIM] = __expectString(data[_NVIM]);
  }
  if (data[_P] != null) {
    contents[_P] = __expectString(data[_P]);
  }
  if (data[_VIM] != null) {
    contents[_VIM] = __expectString(data[_VIM]);
  }
  if (data.Version === "") {
    contents[_Ve] = [];
  } else if (data[_V] != null) {
    contents[_Ve] = de_ObjectVersionList(__getArrayIfSingleItem(data[_V]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListPartsCommand
 */
export const de_ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_AD]: [
      () => void 0 !== output.headers[_xaad],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers[_xaad])),
    ],
    [_ARI]: [, output.headers[_xaari]],
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data[_B] != null) {
    contents[_B] = __expectString(data[_B]);
  }
  if (data[_CA] != null) {
    contents[_CA] = __expectString(data[_CA]);
  }
  if (data[_CT] != null) {
    contents[_CT] = __expectString(data[_CT]);
  }
  if (data[_In] != null) {
    contents[_In] = de_Initiator(data[_In], context);
  }
  if (data[_IT] != null) {
    contents[_IT] = __parseBoolean(data[_IT]);
  }
  if (data[_K] != null) {
    contents[_K] = __expectString(data[_K]);
  }
  if (data[_MP] != null) {
    contents[_MP] = __strictParseInt32(data[_MP]) as number;
  }
  if (data[_NPNM] != null) {
    contents[_NPNM] = __expectString(data[_NPNM]);
  }
  if (data[_O] != null) {
    contents[_O] = de_Owner(data[_O], context);
  }
  if (data[_PNM] != null) {
    contents[_PNM] = __expectString(data[_PNM]);
  }
  if (data.Part === "") {
    contents[_Part] = [];
  } else if (data[_Par] != null) {
    contents[_Part] = de_Parts(__getArrayIfSingleItem(data[_Par]), context);
  }
  if (data[_SC] != null) {
    contents[_SC] = __expectString(data[_SC]);
  }
  if (data[_UI] != null) {
    contents[_UI] = __expectString(data[_UI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAccelerateConfigurationCommand
 */
export const de_PutBucketAccelerateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAclCommand
 */
export const de_PutBucketAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand
 */
export const de_PutBucketAnalyticsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketCorsCommand
 */
export const de_PutBucketCorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketCorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketEncryptionCommand
 */
export const de_PutBucketEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketEncryptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand
 */
export const de_PutBucketIntelligentTieringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketInventoryConfigurationCommand
 */
export const de_PutBucketInventoryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketInventoryConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketLifecycleConfigurationCommand
 */
export const de_PutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_TDMOS]: [, output.headers[_xatdmos]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketLoggingCommand
 */
export const de_PutBucketLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLoggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketMetricsConfigurationCommand
 */
export const de_PutBucketMetricsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketMetricsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketNotificationConfigurationCommand
 */
export const de_PutBucketNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketOwnershipControlsCommand
 */
export const de_PutBucketOwnershipControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketOwnershipControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketPolicyCommand
 */
export const de_PutBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketReplicationCommand
 */
export const de_PutBucketReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketRequestPaymentCommand
 */
export const de_PutBucketRequestPaymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketRequestPaymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketTaggingCommand
 */
export const de_PutBucketTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketVersioningCommand
 */
export const de_PutBucketVersioningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketVersioningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutBucketWebsiteCommand
 */
export const de_PutBucketWebsiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketWebsiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectCommand
 */
export const de_PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_Exp]: [, output.headers[_xae]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_CT]: [, output.headers[_xact]],
    [_SSE]: [, output.headers[_xasse]],
    [_VI]: [, output.headers[_xavi]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_SSEKMSEC]: [, output.headers[_xassec]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_Si]: [() => void 0 !== output.headers[_xaos], () => __strictParseLong(output.headers[_xaos])],
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectAclCommand
 */
export const de_PutObjectAclCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectAclCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectLegalHoldCommand
 */
export const de_PutObjectLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectLockConfigurationCommand
 */
export const de_PutObjectLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectRetentionCommand
 */
export const de_PutObjectRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutObjectTaggingCommand
 */
export const de_PutObjectTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_VI]: [, output.headers[_xavi]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutPublicAccessBlockCommand
 */
export const de_PutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlRenameObjectCommand
 */
export const de_RenameObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenameObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlRestoreObjectCommand
 */
export const de_RestoreObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RC]: [, output.headers[_xarc]],
    [_ROP]: [, output.headers[_xarop]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlSelectObjectContentCommand
 */
export const de_SelectObjectContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SelectObjectContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.Payload = de_SelectObjectContentEventStream(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateBucketMetadataInventoryTableConfigurationCommand
 */
export const de_UpdateBucketMetadataInventoryTableConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketMetadataInventoryTableConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUpdateBucketMetadataJournalTableConfigurationCommand
 */
export const de_UpdateBucketMetadataJournalTableConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBucketMetadataJournalTableConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUploadPartCommand
 */
export const de_UploadPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_SSE]: [, output.headers[_xasse]],
    [_ETa]: [, output.headers[_eta]],
    [_CCRC]: [, output.headers[_xacc]],
    [_CCRCC]: [, output.headers[_xacc_]],
    [_CCRCNVME]: [, output.headers[_xacc__]],
    [_CSHA]: [, output.headers[_xacs]],
    [_CSHAh]: [, output.headers[_xacs_]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlUploadPartCopyCommand
 */
export const de_UploadPartCopyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadPartCopyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CSVI]: [, output.headers[_xacsvi]],
    [_SSE]: [, output.headers[_xasse]],
    [_SSECA]: [, output.headers[_xasseca]],
    [_SSECKMD]: [, output.headers[_xasseckm]],
    [_SSEKMSKI]: [, output.headers[_xasseakki]],
    [_BKE]: [() => void 0 !== output.headers[_xassebke], () => __parseBoolean(output.headers[_xassebke])],
    [_RC]: [, output.headers[_xarc]],
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CopyPartResult = de_CopyPartResult(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlWriteGetObjectResponseCommand
 */
export const de_WriteGetObjectResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteGetObjectResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restXmlCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchUpload":
    case "com.amazonaws.s3#NoSuchUpload":
      throw await de_NoSuchUploadRes(parsedOutput, context);
    case "ObjectNotInActiveTierError":
    case "com.amazonaws.s3#ObjectNotInActiveTierError":
      throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
    case "BucketAlreadyExists":
    case "com.amazonaws.s3#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    case "NoSuchBucket":
    case "com.amazonaws.s3#NoSuchBucket":
      throw await de_NoSuchBucketRes(parsedOutput, context);
    case "InvalidObjectState":
    case "com.amazonaws.s3#InvalidObjectState":
      throw await de_InvalidObjectStateRes(parsedOutput, context);
    case "NoSuchKey":
    case "com.amazonaws.s3#NoSuchKey":
      throw await de_NoSuchKeyRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.s3#NotFound":
      throw await de_NotFoundRes(parsedOutput, context);
    case "EncryptionTypeMismatch":
    case "com.amazonaws.s3#EncryptionTypeMismatch":
      throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
    case "InvalidRequest":
    case "com.amazonaws.s3#InvalidRequest":
      throw await de_InvalidRequestRes(parsedOutput, context);
    case "InvalidWriteOffset":
    case "com.amazonaws.s3#InvalidWriteOffset":
      throw await de_InvalidWriteOffsetRes(parsedOutput, context);
    case "TooManyParts":
    case "com.amazonaws.s3#TooManyParts":
      throw await de_TooManyPartsRes(parsedOutput, context);
    case "IdempotencyParameterMismatch":
    case "com.amazonaws.s3#IdempotencyParameterMismatch":
      throw await de_IdempotencyParameterMismatchRes(parsedOutput, context);
    case "ObjectAlreadyInActiveTierError":
    case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
      throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
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
 * deserializeAws_restXmlEncryptionTypeMismatchRes
 */
const de_EncryptionTypeMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionTypeMismatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new EncryptionTypeMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlIdempotencyParameterMismatchRes
 */
const de_IdempotencyParameterMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyParameterMismatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new IdempotencyParameterMismatch({
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
  if (data[_AT] != null) {
    contents[_AT] = __expectString(data[_AT]);
  }
  if (data[_SC] != null) {
    contents[_SC] = __expectString(data[_SC]);
  }
  const exception = new InvalidObjectState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlInvalidRequestRes
 */
const de_InvalidRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRequest> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new InvalidRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restXmlInvalidWriteOffsetRes
 */
const de_InvalidWriteOffsetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidWriteOffset> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new InvalidWriteOffset({
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
 * deserializeAws_restXmlTooManyPartsRes
 */
const de_TooManyPartsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyParts> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new TooManyParts({
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
    return { $unknown: event as any };
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
  const bn = new __XmlNode(_AIMU);
  if (input[_DAI] != null) {
    bn.c(__XmlNode.of(_DAI, String(input[_DAI])).n(_DAI));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccelerateConfiguration
 */
const se_AccelerateConfiguration = (input: AccelerateConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ACc);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_BAS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccessControlPolicy
 */
const se_AccessControlPolicy = (input: AccessControlPolicy, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ACP);
  bn.lc(input, "Grants", "AccessControlList", () => se_Grants(input[_Gr]!, context));
  if (input[_O] != null) {
    bn.c(se_Owner(input[_O], context).n(_O));
  }
  return bn;
};

/**
 * serializeAws_restXmlAccessControlTranslation
 */
const se_AccessControlTranslation = (input: AccessControlTranslation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ACT);
  if (input[_O] != null) {
    bn.c(__XmlNode.of(_OOw, input[_O]).n(_O));
  }
  return bn;
};

/**
 * serializeAws_restXmlAllowedHeaders
 */
const se_AllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_AH, entry);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlAllowedMethods
 */
const se_AllowedMethods = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_AM, entry);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlAllowedOrigins
 */
const se_AllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_AO, entry);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlAnalyticsAndOperator
 */
const se_AnalyticsAndOperator = (input: AnalyticsAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AAO);
  bn.cc(input, _P);
  bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]!, context));
  return bn;
};

/**
 * serializeAws_restXmlAnalyticsConfiguration
 */
const se_AnalyticsConfiguration = (input: AnalyticsConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AC);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_AI, input[_I]).n(_I));
  }
  if (input[_F] != null) {
    bn.c(se_AnalyticsFilter(input[_F], context).n(_F));
  }
  if (input[_SCA] != null) {
    bn.c(se_StorageClassAnalysis(input[_SCA], context).n(_SCA));
  }
  return bn;
};

/**
 * serializeAws_restXmlAnalyticsExportDestination
 */
const se_AnalyticsExportDestination = (input: AnalyticsExportDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AED);
  if (input[_SBD] != null) {
    bn.c(se_AnalyticsS3BucketDestination(input[_SBD], context).n(_SBD));
  }
  return bn;
};

/**
 * serializeAws_restXmlAnalyticsFilter
 */
const se_AnalyticsFilter = (input: AnalyticsFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_AF);
  AnalyticsFilter.visit(input, {
    Prefix: (value) => {
      if (input[_P] != null) {
        bn.c(__XmlNode.of(_P, value).n(_P));
      }
    },
    Tag: (value) => {
      if (input[_Ta] != null) {
        bn.c(se_Tag(value, context).n(_Ta));
      }
    },
    And: (value) => {
      if (input[_A] != null) {
        bn.c(se_AnalyticsAndOperator(value, context).n(_A));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlAnalyticsS3BucketDestination
 */
const se_AnalyticsS3BucketDestination = (input: AnalyticsS3BucketDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ASBD);
  if (input[_Fo] != null) {
    bn.c(__XmlNode.of(_ASEFF, input[_Fo]).n(_Fo));
  }
  if (input[_BAI] != null) {
    bn.c(__XmlNode.of(_AIc, input[_BAI]).n(_BAI));
  }
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  bn.cc(input, _P);
  return bn;
};

/**
 * serializeAws_restXmlBucketInfo
 */
const se_BucketInfo = (input: BucketInfo, context: __SerdeContext): any => {
  const bn = new __XmlNode(_BI);
  bn.cc(input, _DR);
  if (input[_Ty] != null) {
    bn.c(__XmlNode.of(_BT, input[_Ty]).n(_Ty));
  }
  return bn;
};

/**
 * serializeAws_restXmlBucketLifecycleConfiguration
 */
const se_BucketLifecycleConfiguration = (input: BucketLifecycleConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_BLC);
  bn.l(input, "Rules", "Rule", () => se_LifecycleRules(input[_Rul]!, context));
  return bn;
};

/**
 * serializeAws_restXmlBucketLoggingStatus
 */
const se_BucketLoggingStatus = (input: BucketLoggingStatus, context: __SerdeContext): any => {
  const bn = new __XmlNode(_BLS);
  if (input[_LE] != null) {
    bn.c(se_LoggingEnabled(input[_LE], context).n(_LE));
  }
  return bn;
};

/**
 * serializeAws_restXmlCompletedMultipartUpload
 */
const se_CompletedMultipartUpload = (input: CompletedMultipartUpload, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CMU);
  bn.l(input, "Parts", "Part", () => se_CompletedPartList(input[_Part]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCompletedPart
 */
const se_CompletedPart = (input: CompletedPart, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CPo);
  bn.cc(input, _ETa);
  bn.cc(input, _CCRC);
  bn.cc(input, _CCRCC);
  bn.cc(input, _CCRCNVME);
  bn.cc(input, _CSHA);
  bn.cc(input, _CSHAh);
  if (input[_PN] != null) {
    bn.c(__XmlNode.of(_PN, String(input[_PN])).n(_PN));
  }
  return bn;
};

/**
 * serializeAws_restXmlCompletedPartList
 */
const se_CompletedPartList = (input: CompletedPart[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_CompletedPart(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlCondition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Con);
  bn.cc(input, _HECRE);
  bn.cc(input, _KPE);
  return bn;
};

/**
 * serializeAws_restXmlCORSConfiguration
 */
const se_CORSConfiguration = (input: CORSConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CORSC);
  bn.l(input, "CORSRules", "CORSRule", () => se_CORSRules(input[_CORSRu]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCORSRule
 */
const se_CORSRule = (input: CORSRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CORSR);
  bn.cc(input, _ID_);
  bn.l(input, "AllowedHeaders", "AllowedHeader", () => se_AllowedHeaders(input[_AHl]!, context));
  bn.l(input, "AllowedMethods", "AllowedMethod", () => se_AllowedMethods(input[_AMl]!, context));
  bn.l(input, "AllowedOrigins", "AllowedOrigin", () => se_AllowedOrigins(input[_AOl]!, context));
  bn.l(input, "ExposeHeaders", "ExposeHeader", () => se_ExposeHeaders(input[_EH]!, context));
  if (input[_MAS] != null) {
    bn.c(__XmlNode.of(_MAS, String(input[_MAS])).n(_MAS));
  }
  return bn;
};

/**
 * serializeAws_restXmlCORSRules
 */
const se_CORSRules = (input: CORSRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_CORSRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlCreateBucketConfiguration
 */
const se_CreateBucketConfiguration = (input: CreateBucketConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CBC);
  if (input[_LC] != null) {
    bn.c(__XmlNode.of(_BLCu, input[_LC]).n(_LC));
  }
  if (input[_L] != null) {
    bn.c(se_LocationInfo(input[_L], context).n(_L));
  }
  if (input[_B] != null) {
    bn.c(se_BucketInfo(input[_B], context).n(_B));
  }
  bn.lc(input, "Tags", "Tags", () => se_TagSet(input[_Tag]!, context));
  return bn;
};

/**
 * serializeAws_restXmlCSVInput
 */
const se_CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CSVIn);
  bn.cc(input, _FHI);
  bn.cc(input, _Com);
  bn.cc(input, _QEC);
  bn.cc(input, _RD);
  bn.cc(input, _FD);
  bn.cc(input, _QCuo);
  if (input[_AQRD] != null) {
    bn.c(__XmlNode.of(_AQRD, String(input[_AQRD])).n(_AQRD));
  }
  return bn;
};

/**
 * serializeAws_restXmlCSVOutput
 */
const se_CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  const bn = new __XmlNode(_CSVO);
  bn.cc(input, _QF);
  bn.cc(input, _QEC);
  bn.cc(input, _RD);
  bn.cc(input, _FD);
  bn.cc(input, _QCuo);
  return bn;
};

/**
 * serializeAws_restXmlDefaultRetention
 */
const se_DefaultRetention = (input: DefaultRetention, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DRe);
  if (input[_Mo] != null) {
    bn.c(__XmlNode.of(_OLRM, input[_Mo]).n(_Mo));
  }
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_Da])).n(_Da));
  }
  if (input[_Y] != null) {
    bn.c(__XmlNode.of(_Y, String(input[_Y])).n(_Y));
  }
  return bn;
};

/**
 * serializeAws_restXmlDelete
 */
const se_Delete = (input: Delete, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Del);
  bn.l(input, "Objects", "Object", () => se_ObjectIdentifierList(input[_Ob]!, context));
  if (input[_Q] != null) {
    bn.c(__XmlNode.of(_Q, String(input[_Q])).n(_Q));
  }
  return bn;
};

/**
 * serializeAws_restXmlDeleteMarkerReplication
 */
const se_DeleteMarkerReplication = (input: DeleteMarkerReplication, context: __SerdeContext): any => {
  const bn = new __XmlNode(_DMR);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_DMRS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Des);
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  if (input[_Ac] != null) {
    bn.c(__XmlNode.of(_AIc, input[_Ac]).n(_Ac));
  }
  bn.cc(input, _SC);
  if (input[_ACT] != null) {
    bn.c(se_AccessControlTranslation(input[_ACT], context).n(_ACT));
  }
  if (input[_ECn] != null) {
    bn.c(se_EncryptionConfiguration(input[_ECn], context).n(_ECn));
  }
  if (input[_RTe] != null) {
    bn.c(se_ReplicationTime(input[_RTe], context).n(_RTe));
  }
  if (input[_Me] != null) {
    bn.c(se_Metrics(input[_Me], context).n(_Me));
  }
  return bn;
};

/**
 * serializeAws_restXmlEncryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_En);
  if (input[_ETn] != null) {
    bn.c(__XmlNode.of(_SSE, input[_ETn]).n(_ETn));
  }
  if (input[_KMSKI] != null) {
    bn.c(__XmlNode.of(_SSEKMSKI, input[_KMSKI]).n(_KMSKI));
  }
  bn.cc(input, _KMSC);
  return bn;
};

/**
 * serializeAws_restXmlEncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ECn);
  bn.cc(input, _RKKID);
  return bn;
};

/**
 * serializeAws_restXmlErrorDocument
 */
const se_ErrorDocument = (input: ErrorDocument, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ED);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_OK, input[_K]).n(_K));
  }
  return bn;
};

/**
 * serializeAws_restXmlEventBridgeConfiguration
 */
const se_EventBridgeConfiguration = (input: EventBridgeConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EBC);
  return bn;
};

/**
 * serializeAws_restXmlEventList
 */
const se_EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_Ev, entry);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlExistingObjectReplication
 */
const se_ExistingObjectReplication = (input: ExistingObjectReplication, context: __SerdeContext): any => {
  const bn = new __XmlNode(_EOR);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_EORS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlExposeHeaders
 */
const se_ExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_EHx, entry);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlFilterRule
 */
const se_FilterRule = (input: FilterRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_FR);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_FRN, input[_N]).n(_N));
  }
  if (input[_Va] != null) {
    bn.c(__XmlNode.of(_FRV, input[_Va]).n(_Va));
  }
  return bn;
};

/**
 * serializeAws_restXmlFilterRuleList
 */
const se_FilterRuleList = (input: FilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_FilterRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlGlacierJobParameters
 */
const se_GlacierJobParameters = (input: GlacierJobParameters, context: __SerdeContext): any => {
  const bn = new __XmlNode(_GJP);
  bn.cc(input, _Ti);
  return bn;
};

/**
 * serializeAws_restXmlGrant
 */
const se_Grant = (input: Grant, context: __SerdeContext): any => {
  const bn = new __XmlNode(_G);
  if (input[_Gra] != null) {
    const n = se_Grantee(input[_Gra], context).n(_Gra);
    n.a("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bn.c(n);
  }
  bn.cc(input, _Pe);
  return bn;
};

/**
 * serializeAws_restXmlGrantee
 */
const se_Grantee = (input: Grantee, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Gra);
  bn.cc(input, _DN);
  bn.cc(input, _EA);
  bn.cc(input, _ID_);
  bn.cc(input, _URI);
  bn.a("xsi:type", input[_Ty]);
  return bn;
};

/**
 * serializeAws_restXmlGrants
 */
const se_Grants = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Grant(entry, context);
      return n.n(_G);
    });
};

/**
 * serializeAws_restXmlIndexDocument
 */
const se_IndexDocument = (input: IndexDocument, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ID);
  bn.cc(input, _Su);
  return bn;
};

/**
 * serializeAws_restXmlInputSerialization
 */
const se_InputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IS);
  if (input[_CSV] != null) {
    bn.c(se_CSVInput(input[_CSV], context).n(_CSV));
  }
  bn.cc(input, _CTom);
  if (input[_JSON] != null) {
    bn.c(se_JSONInput(input[_JSON], context).n(_JSON));
  }
  if (input[_Parq] != null) {
    bn.c(se_ParquetInput(input[_Parq], context).n(_Parq));
  }
  return bn;
};

/**
 * serializeAws_restXmlIntelligentTieringAndOperator
 */
const se_IntelligentTieringAndOperator = (input: IntelligentTieringAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ITAO);
  bn.cc(input, _P);
  bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]!, context));
  return bn;
};

/**
 * serializeAws_restXmlIntelligentTieringConfiguration
 */
const se_IntelligentTieringConfiguration = (input: IntelligentTieringConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ITC);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_ITI, input[_I]).n(_I));
  }
  if (input[_F] != null) {
    bn.c(se_IntelligentTieringFilter(input[_F], context).n(_F));
  }
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_ITS, input[_S]).n(_S));
  }
  bn.l(input, "Tierings", "Tiering", () => se_TieringList(input[_Tie]!, context));
  return bn;
};

/**
 * serializeAws_restXmlIntelligentTieringFilter
 */
const se_IntelligentTieringFilter = (input: IntelligentTieringFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ITF);
  bn.cc(input, _P);
  if (input[_Ta] != null) {
    bn.c(se_Tag(input[_Ta], context).n(_Ta));
  }
  if (input[_A] != null) {
    bn.c(se_IntelligentTieringAndOperator(input[_A], context).n(_A));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryConfiguration
 */
const se_InventoryConfiguration = (input: InventoryConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IC);
  if (input[_Des] != null) {
    bn.c(se_InventoryDestination(input[_Des], context).n(_Des));
  }
  if (input[_IE] != null) {
    bn.c(__XmlNode.of(_IE, String(input[_IE])).n(_IE));
  }
  if (input[_F] != null) {
    bn.c(se_InventoryFilter(input[_F], context).n(_F));
  }
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_II, input[_I]).n(_I));
  }
  if (input[_IOV] != null) {
    bn.c(__XmlNode.of(_IIOV, input[_IOV]).n(_IOV));
  }
  bn.lc(input, "OptionalFields", "OptionalFields", () => se_InventoryOptionalFields(input[_OF]!, context));
  if (input[_Sc] != null) {
    bn.c(se_InventorySchedule(input[_Sc], context).n(_Sc));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryDestination
 */
const se_InventoryDestination = (input: InventoryDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IDn);
  if (input[_SBD] != null) {
    bn.c(se_InventoryS3BucketDestination(input[_SBD], context).n(_SBD));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryEncryption
 */
const se_InventoryEncryption = (input: InventoryEncryption, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IEn);
  if (input[_SSES] != null) {
    bn.c(se_SSES3(input[_SSES], context).n(_SS));
  }
  if (input[_SSEKMS] != null) {
    bn.c(se_SSEKMS(input[_SSEKMS], context).n(_SK));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryFilter
 */
const se_InventoryFilter = (input: InventoryFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_IF);
  bn.cc(input, _P);
  return bn;
};

/**
 * serializeAws_restXmlInventoryOptionalFields
 */
const se_InventoryOptionalFields = (input: InventoryOptionalField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = __XmlNode.of(_IOF, entry);
      return n.n(_Fi);
    });
};

/**
 * serializeAws_restXmlInventoryS3BucketDestination
 */
const se_InventoryS3BucketDestination = (input: InventoryS3BucketDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ISBD);
  bn.cc(input, _AIc);
  if (input[_B] != null) {
    bn.c(__XmlNode.of(_BN, input[_B]).n(_B));
  }
  if (input[_Fo] != null) {
    bn.c(__XmlNode.of(_IFn, input[_Fo]).n(_Fo));
  }
  bn.cc(input, _P);
  if (input[_En] != null) {
    bn.c(se_InventoryEncryption(input[_En], context).n(_En));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventorySchedule
 */
const se_InventorySchedule = (input: InventorySchedule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ISn);
  if (input[_Fr] != null) {
    bn.c(__XmlNode.of(_IFnv, input[_Fr]).n(_Fr));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryTableConfiguration
 */
const se_InventoryTableConfiguration = (input: InventoryTableConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ITCn);
  if (input[_CSo] != null) {
    bn.c(__XmlNode.of(_ICS, input[_CSo]).n(_CSo));
  }
  if (input[_ECn] != null) {
    bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn], context).n(_ECn));
  }
  return bn;
};

/**
 * serializeAws_restXmlInventoryTableConfigurationUpdates
 */
const se_InventoryTableConfigurationUpdates = (
  input: InventoryTableConfigurationUpdates,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_ITCU);
  if (input[_CSo] != null) {
    bn.c(__XmlNode.of(_ICS, input[_CSo]).n(_CSo));
  }
  if (input[_ECn] != null) {
    bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn], context).n(_ECn));
  }
  return bn;
};

/**
 * serializeAws_restXmlJournalTableConfiguration
 */
const se_JournalTableConfiguration = (input: JournalTableConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JTC);
  if (input[_REe] != null) {
    bn.c(se_RecordExpiration(input[_REe], context).n(_REe));
  }
  if (input[_ECn] != null) {
    bn.c(se_MetadataTableEncryptionConfiguration(input[_ECn], context).n(_ECn));
  }
  return bn;
};

/**
 * serializeAws_restXmlJournalTableConfigurationUpdates
 */
const se_JournalTableConfigurationUpdates = (input: JournalTableConfigurationUpdates, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JTCU);
  if (input[_REe] != null) {
    bn.c(se_RecordExpiration(input[_REe], context).n(_REe));
  }
  return bn;
};

/**
 * serializeAws_restXmlJSONInput
 */
const se_JSONInput = (input: JSONInput, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JSONI);
  if (input[_Ty] != null) {
    bn.c(__XmlNode.of(_JSONT, input[_Ty]).n(_Ty));
  }
  return bn;
};

/**
 * serializeAws_restXmlJSONOutput
 */
const se_JSONOutput = (input: JSONOutput, context: __SerdeContext): any => {
  const bn = new __XmlNode(_JSONO);
  bn.cc(input, _RD);
  return bn;
};

/**
 * serializeAws_restXmlLambdaFunctionConfiguration
 */
const se_LambdaFunctionConfiguration = (input: LambdaFunctionConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LFCa);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_NI, input[_I]).n(_I));
  }
  if (input[_LFA] != null) {
    bn.c(__XmlNode.of(_LFA, input[_LFA]).n(_CF));
  }
  bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]!, context));
  if (input[_F] != null) {
    bn.c(se_NotificationConfigurationFilter(input[_F], context).n(_F));
  }
  return bn;
};

/**
 * serializeAws_restXmlLambdaFunctionConfigurationList
 */
const se_LambdaFunctionConfigurationList = (input: LambdaFunctionConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_LambdaFunctionConfiguration(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlLifecycleExpiration
 */
const se_LifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LEi);
  if (input[_Dat] != null) {
    bn.c(__XmlNode.of(_Dat, __serializeDateTime(input[_Dat]).toString()).n(_Dat));
  }
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_Da])).n(_Da));
  }
  if (input[_EODM] != null) {
    bn.c(__XmlNode.of(_EODM, String(input[_EODM])).n(_EODM));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRule
 */
const se_LifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LR);
  if (input[_Exp] != null) {
    bn.c(se_LifecycleExpiration(input[_Exp], context).n(_Exp));
  }
  bn.cc(input, _ID_);
  bn.cc(input, _P);
  if (input[_F] != null) {
    bn.c(se_LifecycleRuleFilter(input[_F], context).n(_F));
  }
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_ESx, input[_S]).n(_S));
  }
  bn.l(input, "Transitions", "Transition", () => se_TransitionList(input[_Tr]!, context));
  bn.l(input, "NoncurrentVersionTransitions", "NoncurrentVersionTransition", () =>
    se_NoncurrentVersionTransitionList(input[_NVT]!, context)
  );
  if (input[_NVE] != null) {
    bn.c(se_NoncurrentVersionExpiration(input[_NVE], context).n(_NVE));
  }
  if (input[_AIMU] != null) {
    bn.c(se_AbortIncompleteMultipartUpload(input[_AIMU], context).n(_AIMU));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRuleAndOperator
 */
const se_LifecycleRuleAndOperator = (input: LifecycleRuleAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LRAO);
  bn.cc(input, _P);
  bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]!, context));
  if (input[_OSGT] != null) {
    bn.c(__XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
  }
  if (input[_OSLT] != null) {
    bn.c(__XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRuleFilter
 */
const se_LifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LRF);
  bn.cc(input, _P);
  if (input[_Ta] != null) {
    bn.c(se_Tag(input[_Ta], context).n(_Ta));
  }
  if (input[_OSGT] != null) {
    bn.c(__XmlNode.of(_OSGTB, String(input[_OSGT])).n(_OSGT));
  }
  if (input[_OSLT] != null) {
    bn.c(__XmlNode.of(_OSLTB, String(input[_OSLT])).n(_OSLT));
  }
  if (input[_A] != null) {
    bn.c(se_LifecycleRuleAndOperator(input[_A], context).n(_A));
  }
  return bn;
};

/**
 * serializeAws_restXmlLifecycleRules
 */
const se_LifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_LifecycleRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlLocationInfo
 */
const se_LocationInfo = (input: LocationInfo, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LI);
  if (input[_Ty] != null) {
    bn.c(__XmlNode.of(_LT, input[_Ty]).n(_Ty));
  }
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_LNAS, input[_N]).n(_N));
  }
  return bn;
};

/**
 * serializeAws_restXmlLoggingEnabled
 */
const se_LoggingEnabled = (input: LoggingEnabled, context: __SerdeContext): any => {
  const bn = new __XmlNode(_LE);
  bn.cc(input, _TB);
  bn.lc(input, "TargetGrants", "TargetGrants", () => se_TargetGrants(input[_TG]!, context));
  bn.cc(input, _TP);
  if (input[_TOKF] != null) {
    bn.c(se_TargetObjectKeyFormat(input[_TOKF], context).n(_TOKF));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetadataConfiguration
 */
const se_MetadataConfiguration = (input: MetadataConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MCe);
  if (input[_JTC] != null) {
    bn.c(se_JournalTableConfiguration(input[_JTC], context).n(_JTC));
  }
  if (input[_ITCn] != null) {
    bn.c(se_InventoryTableConfiguration(input[_ITCn], context).n(_ITCn));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetadataEntry
 */
const se_MetadataEntry = (input: MetadataEntry, context: __SerdeContext): any => {
  const bn = new __XmlNode(_ME);
  if (input[_N] != null) {
    bn.c(__XmlNode.of(_MKe, input[_N]).n(_N));
  }
  if (input[_Va] != null) {
    bn.c(__XmlNode.of(_MV, input[_Va]).n(_Va));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetadataTableConfiguration
 */
const se_MetadataTableConfiguration = (input: MetadataTableConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MTC);
  if (input[_STD] != null) {
    bn.c(se_S3TablesDestination(input[_STD], context).n(_STD));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetadataTableEncryptionConfiguration
 */
const se_MetadataTableEncryptionConfiguration = (
  input: MetadataTableEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_MTEC);
  if (input[_SAs] != null) {
    bn.c(__XmlNode.of(_TSA, input[_SAs]).n(_SAs));
  }
  bn.cc(input, _KKA);
  return bn;
};

/**
 * serializeAws_restXmlMetrics
 */
const se_Metrics = (input: Metrics, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Me);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_MS, input[_S]).n(_S));
  }
  if (input[_ETv] != null) {
    bn.c(se_ReplicationTimeValue(input[_ETv], context).n(_ETv));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetricsAndOperator
 */
const se_MetricsAndOperator = (input: MetricsAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MAO);
  bn.cc(input, _P);
  bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]!, context));
  bn.cc(input, _APAc);
  return bn;
};

/**
 * serializeAws_restXmlMetricsConfiguration
 */
const se_MetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MC);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_MI, input[_I]).n(_I));
  }
  if (input[_F] != null) {
    bn.c(se_MetricsFilter(input[_F], context).n(_F));
  }
  return bn;
};

/**
 * serializeAws_restXmlMetricsFilter
 */
const se_MetricsFilter = (input: MetricsFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_MF);
  MetricsFilter.visit(input, {
    Prefix: (value) => {
      if (input[_P] != null) {
        bn.c(__XmlNode.of(_P, value).n(_P));
      }
    },
    Tag: (value) => {
      if (input[_Ta] != null) {
        bn.c(se_Tag(value, context).n(_Ta));
      }
    },
    AccessPointArn: (value) => {
      if (input[_APAc] != null) {
        bn.c(__XmlNode.of(_APAc, value).n(_APAc));
      }
    },
    And: (value) => {
      if (input[_A] != null) {
        bn.c(se_MetricsAndOperator(value, context).n(_A));
      }
    },
    _: (name: string, value: any) => {
      if (!(value instanceof __XmlNode || value instanceof __XmlText)) {
        throw new Error("Unable to serialize unknown union members in XML.");
      }
      bn.c(new __XmlNode(name).c(value));
    },
  });
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionExpiration
 */
const se_NoncurrentVersionExpiration = (input: NoncurrentVersionExpiration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NVE);
  if (input[_ND] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_ND])).n(_ND));
  }
  if (input[_NNV] != null) {
    bn.c(__XmlNode.of(_VC, String(input[_NNV])).n(_NNV));
  }
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransition
 */
const se_NoncurrentVersionTransition = (input: NoncurrentVersionTransition, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NVTo);
  if (input[_ND] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_ND])).n(_ND));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_TSC, input[_SC]).n(_SC));
  }
  if (input[_NNV] != null) {
    bn.c(__XmlNode.of(_VC, String(input[_NNV])).n(_NNV));
  }
  return bn;
};

/**
 * serializeAws_restXmlNoncurrentVersionTransitionList
 */
const se_NoncurrentVersionTransitionList = (input: NoncurrentVersionTransition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_NoncurrentVersionTransition(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlNotificationConfiguration
 */
const se_NotificationConfiguration = (input: NotificationConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NC);
  bn.l(input, "TopicConfigurations", "TopicConfiguration", () => se_TopicConfigurationList(input[_TCop]!, context));
  bn.l(input, "QueueConfigurations", "QueueConfiguration", () => se_QueueConfigurationList(input[_QCu]!, context));
  bn.l(input, "LambdaFunctionConfigurations", "CloudFunctionConfiguration", () =>
    se_LambdaFunctionConfigurationList(input[_LFC]!, context)
  );
  if (input[_EBC] != null) {
    bn.c(se_EventBridgeConfiguration(input[_EBC], context).n(_EBC));
  }
  return bn;
};

/**
 * serializeAws_restXmlNotificationConfigurationFilter
 */
const se_NotificationConfigurationFilter = (input: NotificationConfigurationFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_NCF);
  if (input[_K] != null) {
    bn.c(se_S3KeyFilter(input[_K], context).n(_SKe));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectIdentifier
 */
const se_ObjectIdentifier = (input: ObjectIdentifier, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OI);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_OK, input[_K]).n(_K));
  }
  if (input[_VI] != null) {
    bn.c(__XmlNode.of(_OVI, input[_VI]).n(_VI));
  }
  bn.cc(input, _ETa);
  if (input[_LMT] != null) {
    bn.c(__XmlNode.of(_LMT, __dateToUtcString(input[_LMT]).toString()).n(_LMT));
  }
  if (input[_Si] != null) {
    bn.c(__XmlNode.of(_Si, String(input[_Si])).n(_Si));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectIdentifierList
 */
const se_ObjectIdentifierList = (input: ObjectIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ObjectIdentifier(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlObjectLockConfiguration
 */
const se_ObjectLockConfiguration = (input: ObjectLockConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OLC);
  bn.cc(input, _OLE);
  if (input[_Ru] != null) {
    bn.c(se_ObjectLockRule(input[_Ru], context).n(_Ru));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectLockLegalHold
 */
const se_ObjectLockLegalHold = (input: ObjectLockLegalHold, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OLLH);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_OLLHS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectLockRetention
 */
const se_ObjectLockRetention = (input: ObjectLockRetention, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OLR);
  if (input[_Mo] != null) {
    bn.c(__XmlNode.of(_OLRM, input[_Mo]).n(_Mo));
  }
  if (input[_RUD] != null) {
    bn.c(__XmlNode.of(_Dat, __serializeDateTime(input[_RUD]).toString()).n(_RUD));
  }
  return bn;
};

/**
 * serializeAws_restXmlObjectLockRule
 */
const se_ObjectLockRule = (input: ObjectLockRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OLRb);
  if (input[_DRe] != null) {
    bn.c(se_DefaultRetention(input[_DRe], context).n(_DRe));
  }
  return bn;
};

/**
 * serializeAws_restXmlOutputLocation
 */
const se_OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OL);
  if (input[_S_] != null) {
    bn.c(se_S3Location(input[_S_], context).n(_S_));
  }
  return bn;
};

/**
 * serializeAws_restXmlOutputSerialization
 */
const se_OutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OS);
  if (input[_CSV] != null) {
    bn.c(se_CSVOutput(input[_CSV], context).n(_CSV));
  }
  if (input[_JSON] != null) {
    bn.c(se_JSONOutput(input[_JSON], context).n(_JSON));
  }
  return bn;
};

/**
 * serializeAws_restXmlOwner
 */
const se_Owner = (input: Owner, context: __SerdeContext): any => {
  const bn = new __XmlNode(_O);
  bn.cc(input, _DN);
  bn.cc(input, _ID_);
  return bn;
};

/**
 * serializeAws_restXmlOwnershipControls
 */
const se_OwnershipControls = (input: OwnershipControls, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OC);
  bn.l(input, "Rules", "Rule", () => se_OwnershipControlsRules(input[_Rul]!, context));
  return bn;
};

/**
 * serializeAws_restXmlOwnershipControlsRule
 */
const se_OwnershipControlsRule = (input: OwnershipControlsRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_OCR);
  bn.cc(input, _OO);
  return bn;
};

/**
 * serializeAws_restXmlOwnershipControlsRules
 */
const se_OwnershipControlsRules = (input: OwnershipControlsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_OwnershipControlsRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlParquetInput
 */
const se_ParquetInput = (input: ParquetInput, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PI);
  return bn;
};

/**
 * serializeAws_restXmlPartitionedPrefix
 */
const se_PartitionedPrefix = (input: PartitionedPrefix, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PP);
  bn.cc(input, _PDS);
  return bn;
};

/**
 * serializeAws_restXmlPublicAccessBlockConfiguration
 */
const se_PublicAccessBlockConfiguration = (input: PublicAccessBlockConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_PABC);
  if (input[_BPA] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_BPA])).n(_BPA));
  }
  if (input[_IPA] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_IPA])).n(_IPA));
  }
  if (input[_BPP] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_BPP])).n(_BPP));
  }
  if (input[_RPB] != null) {
    bn.c(__XmlNode.of(_Se, String(input[_RPB])).n(_RPB));
  }
  return bn;
};

/**
 * serializeAws_restXmlQueueConfiguration
 */
const se_QueueConfiguration = (input: QueueConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_QC);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_NI, input[_I]).n(_I));
  }
  if (input[_QA] != null) {
    bn.c(__XmlNode.of(_QA, input[_QA]).n(_Qu));
  }
  bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]!, context));
  if (input[_F] != null) {
    bn.c(se_NotificationConfigurationFilter(input[_F], context).n(_F));
  }
  return bn;
};

/**
 * serializeAws_restXmlQueueConfigurationList
 */
const se_QueueConfigurationList = (input: QueueConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_QueueConfiguration(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlRecordExpiration
 */
const se_RecordExpiration = (input: RecordExpiration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_REe);
  if (input[_Exp] != null) {
    bn.c(__XmlNode.of(_ESxp, input[_Exp]).n(_Exp));
  }
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_RED, String(input[_Da])).n(_Da));
  }
  return bn;
};

/**
 * serializeAws_restXmlRedirect
 */
const se_Redirect = (input: Redirect, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Red);
  bn.cc(input, _HN);
  bn.cc(input, _HRC);
  bn.cc(input, _Pr);
  bn.cc(input, _RKPW);
  bn.cc(input, _RKW);
  return bn;
};

/**
 * serializeAws_restXmlRedirectAllRequestsTo
 */
const se_RedirectAllRequestsTo = (input: RedirectAllRequestsTo, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RART);
  bn.cc(input, _HN);
  bn.cc(input, _Pr);
  return bn;
};

/**
 * serializeAws_restXmlReplicaModifications
 */
const se_ReplicaModifications = (input: ReplicaModifications, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RM);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_RMS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationConfiguration
 */
const se_ReplicationConfiguration = (input: ReplicationConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RCe);
  bn.cc(input, _Ro);
  bn.l(input, "Rules", "Rule", () => se_ReplicationRules(input[_Rul]!, context));
  return bn;
};

/**
 * serializeAws_restXmlReplicationRule
 */
const se_ReplicationRule = (input: ReplicationRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRe);
  bn.cc(input, _ID_);
  if (input[_Pri] != null) {
    bn.c(__XmlNode.of(_Pri, String(input[_Pri])).n(_Pri));
  }
  bn.cc(input, _P);
  if (input[_F] != null) {
    bn.c(se_ReplicationRuleFilter(input[_F], context).n(_F));
  }
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_RRS, input[_S]).n(_S));
  }
  if (input[_SSC] != null) {
    bn.c(se_SourceSelectionCriteria(input[_SSC], context).n(_SSC));
  }
  if (input[_EOR] != null) {
    bn.c(se_ExistingObjectReplication(input[_EOR], context).n(_EOR));
  }
  if (input[_Des] != null) {
    bn.c(se_Destination(input[_Des], context).n(_Des));
  }
  if (input[_DMR] != null) {
    bn.c(se_DeleteMarkerReplication(input[_DMR], context).n(_DMR));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationRuleAndOperator
 */
const se_ReplicationRuleAndOperator = (input: ReplicationRuleAndOperator, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRAO);
  bn.cc(input, _P);
  bn.l(input, "Tags", "Tag", () => se_TagSet(input[_Tag]!, context));
  return bn;
};

/**
 * serializeAws_restXmlReplicationRuleFilter
 */
const se_ReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRF);
  bn.cc(input, _P);
  if (input[_Ta] != null) {
    bn.c(se_Tag(input[_Ta], context).n(_Ta));
  }
  if (input[_A] != null) {
    bn.c(se_ReplicationRuleAndOperator(input[_A], context).n(_A));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationRules
 */
const se_ReplicationRules = (input: ReplicationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ReplicationRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlReplicationTime
 */
const se_ReplicationTime = (input: ReplicationTime, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RTe);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_RTS, input[_S]).n(_S));
  }
  if (input[_Tim] != null) {
    bn.c(se_ReplicationTimeValue(input[_Tim], context).n(_Tim));
  }
  return bn;
};

/**
 * serializeAws_restXmlReplicationTimeValue
 */
const se_ReplicationTimeValue = (input: ReplicationTimeValue, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RTV);
  if (input[_Mi] != null) {
    bn.c(__XmlNode.of(_Mi, String(input[_Mi])).n(_Mi));
  }
  return bn;
};

/**
 * serializeAws_restXmlRequestPaymentConfiguration
 */
const se_RequestPaymentConfiguration = (input: RequestPaymentConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RPC);
  bn.cc(input, _Pa);
  return bn;
};

/**
 * serializeAws_restXmlRequestProgress
 */
const se_RequestProgress = (input: RequestProgress, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RPe);
  if (input[_Ena] != null) {
    bn.c(__XmlNode.of(_ERP, String(input[_Ena])).n(_Ena));
  }
  return bn;
};

/**
 * serializeAws_restXmlRestoreRequest
 */
const se_RestoreRequest = (input: RestoreRequest, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRes);
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_Da])).n(_Da));
  }
  if (input[_GJP] != null) {
    bn.c(se_GlacierJobParameters(input[_GJP], context).n(_GJP));
  }
  if (input[_Ty] != null) {
    bn.c(__XmlNode.of(_RRT, input[_Ty]).n(_Ty));
  }
  bn.cc(input, _Ti);
  bn.cc(input, _Desc);
  if (input[_SP] != null) {
    bn.c(se_SelectParameters(input[_SP], context).n(_SP));
  }
  if (input[_OL] != null) {
    bn.c(se_OutputLocation(input[_OL], context).n(_OL));
  }
  return bn;
};

/**
 * serializeAws_restXmlRoutingRule
 */
const se_RoutingRule = (input: RoutingRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_RRou);
  if (input[_Con] != null) {
    bn.c(se_Condition(input[_Con], context).n(_Con));
  }
  if (input[_Red] != null) {
    bn.c(se_Redirect(input[_Red], context).n(_Red));
  }
  return bn;
};

/**
 * serializeAws_restXmlRoutingRules
 */
const se_RoutingRules = (input: RoutingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_RoutingRule(entry, context);
      return n.n(_RRou);
    });
};

/**
 * serializeAws_restXmlS3KeyFilter
 */
const se_S3KeyFilter = (input: S3KeyFilter, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SKF);
  bn.l(input, "FilterRules", "FilterRule", () => se_FilterRuleList(input[_FRi]!, context));
  return bn;
};

/**
 * serializeAws_restXmlS3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SL);
  bn.cc(input, _BN);
  if (input[_P] != null) {
    bn.c(__XmlNode.of(_LP, input[_P]).n(_P));
  }
  if (input[_En] != null) {
    bn.c(se_Encryption(input[_En], context).n(_En));
  }
  if (input[_CACL] != null) {
    bn.c(__XmlNode.of(_OCACL, input[_CACL]).n(_CACL));
  }
  bn.lc(input, "AccessControlList", "AccessControlList", () => se_Grants(input[_ACLc]!, context));
  if (input[_T] != null) {
    bn.c(se_Tagging(input[_T], context).n(_T));
  }
  bn.lc(input, "UserMetadata", "UserMetadata", () => se_UserMetadata(input[_UM]!, context));
  bn.cc(input, _SC);
  return bn;
};

/**
 * serializeAws_restXmlS3TablesDestination
 */
const se_S3TablesDestination = (input: S3TablesDestination, context: __SerdeContext): any => {
  const bn = new __XmlNode(_STD);
  if (input[_TBA] != null) {
    bn.c(__XmlNode.of(_STBA, input[_TBA]).n(_TBA));
  }
  if (input[_TN] != null) {
    bn.c(__XmlNode.of(_STN, input[_TN]).n(_TN));
  }
  return bn;
};

/**
 * serializeAws_restXmlScanRange
 */
const se_ScanRange = (input: ScanRange, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SR);
  if (input[_St] != null) {
    bn.c(__XmlNode.of(_St, String(input[_St])).n(_St));
  }
  if (input[_End] != null) {
    bn.c(__XmlNode.of(_End, String(input[_End])).n(_End));
  }
  return bn;
};

/**
 * serializeAws_restXmlSelectParameters
 */
const se_SelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SP);
  if (input[_IS] != null) {
    bn.c(se_InputSerialization(input[_IS], context).n(_IS));
  }
  bn.cc(input, _ETx);
  bn.cc(input, _Ex);
  if (input[_OS] != null) {
    bn.c(se_OutputSerialization(input[_OS], context).n(_OS));
  }
  return bn;
};

/**
 * serializeAws_restXmlServerSideEncryptionByDefault
 */
const se_ServerSideEncryptionByDefault = (input: ServerSideEncryptionByDefault, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSEBD);
  if (input[_SSEA] != null) {
    bn.c(__XmlNode.of(_SSE, input[_SSEA]).n(_SSEA));
  }
  if (input[_KMSMKID] != null) {
    bn.c(__XmlNode.of(_SSEKMSKI, input[_KMSMKID]).n(_KMSMKID));
  }
  return bn;
};

/**
 * serializeAws_restXmlServerSideEncryptionConfiguration
 */
const se_ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bn = new __XmlNode(_SSEC);
  bn.l(input, "Rules", "Rule", () => se_ServerSideEncryptionRules(input[_Rul]!, context));
  return bn;
};

/**
 * serializeAws_restXmlServerSideEncryptionRule
 */
const se_ServerSideEncryptionRule = (input: ServerSideEncryptionRule, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSER);
  if (input[_ASSEBD] != null) {
    bn.c(se_ServerSideEncryptionByDefault(input[_ASSEBD], context).n(_ASSEBD));
  }
  if (input[_BKE] != null) {
    bn.c(__XmlNode.of(_BKE, String(input[_BKE])).n(_BKE));
  }
  return bn;
};

/**
 * serializeAws_restXmlServerSideEncryptionRules
 */
const se_ServerSideEncryptionRules = (input: ServerSideEncryptionRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_ServerSideEncryptionRule(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlSimplePrefix
 */
const se_SimplePrefix = (input: SimplePrefix, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SPi);
  return bn;
};

/**
 * serializeAws_restXmlSourceSelectionCriteria
 */
const se_SourceSelectionCriteria = (input: SourceSelectionCriteria, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SSC);
  if (input[_SKEO] != null) {
    bn.c(se_SseKmsEncryptedObjects(input[_SKEO], context).n(_SKEO));
  }
  if (input[_RM] != null) {
    bn.c(se_ReplicaModifications(input[_RM], context).n(_RM));
  }
  return bn;
};

/**
 * serializeAws_restXmlSSEKMS
 */
const se_SSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SK);
  if (input[_KI] != null) {
    bn.c(__XmlNode.of(_SSEKMSKI, input[_KI]).n(_KI));
  }
  return bn;
};

/**
 * serializeAws_restXmlSseKmsEncryptedObjects
 */
const se_SseKmsEncryptedObjects = (input: SseKmsEncryptedObjects, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SKEO);
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_SKEOS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlSSES3
 */
const se_SSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SS);
  return bn;
};

/**
 * serializeAws_restXmlStorageClassAnalysis
 */
const se_StorageClassAnalysis = (input: StorageClassAnalysis, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SCA);
  if (input[_DE] != null) {
    bn.c(se_StorageClassAnalysisDataExport(input[_DE], context).n(_DE));
  }
  return bn;
};

/**
 * serializeAws_restXmlStorageClassAnalysisDataExport
 */
const se_StorageClassAnalysisDataExport = (input: StorageClassAnalysisDataExport, context: __SerdeContext): any => {
  const bn = new __XmlNode(_SCADE);
  if (input[_OSV] != null) {
    bn.c(__XmlNode.of(_SCASV, input[_OSV]).n(_OSV));
  }
  if (input[_Des] != null) {
    bn.c(se_AnalyticsExportDestination(input[_Des], context).n(_Des));
  }
  return bn;
};

/**
 * serializeAws_restXmlTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Ta);
  if (input[_K] != null) {
    bn.c(__XmlNode.of(_OK, input[_K]).n(_K));
  }
  bn.cc(input, _Va);
  return bn;
};

/**
 * serializeAws_restXmlTagging
 */
const se_Tagging = (input: Tagging, context: __SerdeContext): any => {
  const bn = new __XmlNode(_T);
  bn.lc(input, "TagSet", "TagSet", () => se_TagSet(input[_TS]!, context));
  return bn;
};

/**
 * serializeAws_restXmlTagSet
 */
const se_TagSet = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Tag(entry, context);
      return n.n(_Ta);
    });
};

/**
 * serializeAws_restXmlTargetGrant
 */
const se_TargetGrant = (input: TargetGrant, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TGa);
  if (input[_Gra] != null) {
    const n = se_Grantee(input[_Gra], context).n(_Gra);
    n.a("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    bn.c(n);
  }
  if (input[_Pe] != null) {
    bn.c(__XmlNode.of(_BLP, input[_Pe]).n(_Pe));
  }
  return bn;
};

/**
 * serializeAws_restXmlTargetGrants
 */
const se_TargetGrants = (input: TargetGrant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_TargetGrant(entry, context);
      return n.n(_G);
    });
};

/**
 * serializeAws_restXmlTargetObjectKeyFormat
 */
const se_TargetObjectKeyFormat = (input: TargetObjectKeyFormat, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TOKF);
  if (input[_SPi] != null) {
    bn.c(se_SimplePrefix(input[_SPi], context).n(_SPi));
  }
  if (input[_PP] != null) {
    bn.c(se_PartitionedPrefix(input[_PP], context).n(_PP));
  }
  return bn;
};

/**
 * serializeAws_restXmlTiering
 */
const se_Tiering = (input: Tiering, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tier);
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_ITD, String(input[_Da])).n(_Da));
  }
  if (input[_AT] != null) {
    bn.c(__XmlNode.of(_ITAT, input[_AT]).n(_AT));
  }
  return bn;
};

/**
 * serializeAws_restXmlTieringList
 */
const se_TieringList = (input: Tiering[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Tiering(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlTopicConfiguration
 */
const se_TopicConfiguration = (input: TopicConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_TCo);
  if (input[_I] != null) {
    bn.c(__XmlNode.of(_NI, input[_I]).n(_I));
  }
  if (input[_TA] != null) {
    bn.c(__XmlNode.of(_TA, input[_TA]).n(_Top));
  }
  bn.l(input, "Events", "Event", () => se_EventList(input[_Eve]!, context));
  if (input[_F] != null) {
    bn.c(se_NotificationConfigurationFilter(input[_F], context).n(_F));
  }
  return bn;
};

/**
 * serializeAws_restXmlTopicConfigurationList
 */
const se_TopicConfigurationList = (input: TopicConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_TopicConfiguration(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlTransition
 */
const se_Transition = (input: Transition, context: __SerdeContext): any => {
  const bn = new __XmlNode(_Tra);
  if (input[_Dat] != null) {
    bn.c(__XmlNode.of(_Dat, __serializeDateTime(input[_Dat]).toString()).n(_Dat));
  }
  if (input[_Da] != null) {
    bn.c(__XmlNode.of(_Da, String(input[_Da])).n(_Da));
  }
  if (input[_SC] != null) {
    bn.c(__XmlNode.of(_TSC, input[_SC]).n(_SC));
  }
  return bn;
};

/**
 * serializeAws_restXmlTransitionList
 */
const se_TransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_Transition(entry, context);
      return n.n(_me);
    });
};

/**
 * serializeAws_restXmlUserMetadata
 */
const se_UserMetadata = (input: MetadataEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const n = se_MetadataEntry(entry, context);
      return n.n(_ME);
    });
};

/**
 * serializeAws_restXmlVersioningConfiguration
 */
const se_VersioningConfiguration = (input: VersioningConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_VCe);
  if (input[_MFAD] != null) {
    bn.c(__XmlNode.of(_MFAD, input[_MFAD]).n(_MDf));
  }
  if (input[_S] != null) {
    bn.c(__XmlNode.of(_BVS, input[_S]).n(_S));
  }
  return bn;
};

/**
 * serializeAws_restXmlWebsiteConfiguration
 */
const se_WebsiteConfiguration = (input: WebsiteConfiguration, context: __SerdeContext): any => {
  const bn = new __XmlNode(_WC);
  if (input[_ED] != null) {
    bn.c(se_ErrorDocument(input[_ED], context).n(_ED));
  }
  if (input[_ID] != null) {
    bn.c(se_IndexDocument(input[_ID], context).n(_ID));
  }
  if (input[_RART] != null) {
    bn.c(se_RedirectAllRequestsTo(input[_RART], context).n(_RART));
  }
  bn.lc(input, "RoutingRules", "RoutingRules", () => se_RoutingRules(input[_RRo]!, context));
  return bn;
};

/**
 * deserializeAws_restXmlAbortIncompleteMultipartUpload
 */
const de_AbortIncompleteMultipartUpload = (output: any, context: __SerdeContext): AbortIncompleteMultipartUpload => {
  const contents: any = {};
  if (output[_DAI] != null) {
    contents[_DAI] = __strictParseInt32(output[_DAI]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessControlTranslation
 */
const de_AccessControlTranslation = (output: any, context: __SerdeContext): AccessControlTranslation => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = __expectString(output[_O]);
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
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Tag === "") {
    contents[_Tag] = [];
  } else if (output[_Ta] != null) {
    contents[_Tag] = de_TagSet(__getArrayIfSingleItem(output[_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAnalyticsConfiguration
 */
const de_AnalyticsConfiguration = (output: any, context: __SerdeContext): AnalyticsConfiguration => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output[_F] != null) {
    contents[_F] = de_AnalyticsFilter(__expectUnion(output[_F]), context);
  }
  if (output[_SCA] != null) {
    contents[_SCA] = de_StorageClassAnalysis(output[_SCA], context);
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
  if (output[_SBD] != null) {
    contents[_SBD] = de_AnalyticsS3BucketDestination(output[_SBD], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAnalyticsFilter
 */
const de_AnalyticsFilter = (output: any, context: __SerdeContext): AnalyticsFilter => {
  if (output[_P] != null) {
    return {
      Prefix: __expectString(output[_P]) as any,
    };
  }
  if (output[_Ta] != null) {
    return {
      Tag: de_Tag(output[_Ta], context),
    };
  }
  if (output[_A] != null) {
    return {
      And: de_AnalyticsAndOperator(output[_A], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlAnalyticsS3BucketDestination
 */
const de_AnalyticsS3BucketDestination = (output: any, context: __SerdeContext): AnalyticsS3BucketDestination => {
  const contents: any = {};
  if (output[_Fo] != null) {
    contents[_Fo] = __expectString(output[_Fo]);
  }
  if (output[_BAI] != null) {
    contents[_BAI] = __expectString(output[_BAI]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBucket
 */
const de_Bucket = (output: any, context: __SerdeContext): Bucket => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_CDr] != null) {
    contents[_CDr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  if (output[_BR] != null) {
    contents[_BR] = __expectString(output[_BR]);
  }
  if (output[_BA] != null) {
    contents[_BA] = __expectString(output[_BA]);
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
  if (output[_CCRC] != null) {
    contents[_CCRC] = __expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(output[_CCRCC]);
  }
  if (output[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(output[_CCRCNVME]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = __expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(output[_CSHAh]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
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
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
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
  if (output[_HECRE] != null) {
    contents[_HECRE] = __expectString(output[_HECRE]);
  }
  if (output[_KPE] != null) {
    contents[_KPE] = __expectString(output[_KPE]);
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
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  if (output[_CCRC] != null) {
    contents[_CCRC] = __expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(output[_CCRCC]);
  }
  if (output[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(output[_CCRCNVME]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = __expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(output[_CSHAh]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCopyPartResult
 */
const de_CopyPartResult = (output: any, context: __SerdeContext): CopyPartResult => {
  const contents: any = {};
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_CCRC] != null) {
    contents[_CCRC] = __expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(output[_CCRCC]);
  }
  if (output[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(output[_CCRCNVME]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = __expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(output[_CSHAh]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCORSRule
 */
const de_CORSRule = (output: any, context: __SerdeContext): CORSRule => {
  const contents: any = {};
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  if (output.AllowedHeader === "") {
    contents[_AHl] = [];
  } else if (output[_AH] != null) {
    contents[_AHl] = de_AllowedHeaders(__getArrayIfSingleItem(output[_AH]), context);
  }
  if (output.AllowedMethod === "") {
    contents[_AMl] = [];
  } else if (output[_AM] != null) {
    contents[_AMl] = de_AllowedMethods(__getArrayIfSingleItem(output[_AM]), context);
  }
  if (output.AllowedOrigin === "") {
    contents[_AOl] = [];
  } else if (output[_AO] != null) {
    contents[_AOl] = de_AllowedOrigins(__getArrayIfSingleItem(output[_AO]), context);
  }
  if (output.ExposeHeader === "") {
    contents[_EH] = [];
  } else if (output[_EHx] != null) {
    contents[_EH] = de_ExposeHeaders(__getArrayIfSingleItem(output[_EHx]), context);
  }
  if (output[_MAS] != null) {
    contents[_MAS] = __strictParseInt32(output[_MAS]) as number;
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
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_Da] != null) {
    contents[_Da] = __strictParseInt32(output[_Da]) as number;
  }
  if (output[_Y] != null) {
    contents[_Y] = __strictParseInt32(output[_Y]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeletedObject
 */
const de_DeletedObject = (output: any, context: __SerdeContext): DeletedObject => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_DM] != null) {
    contents[_DM] = __parseBoolean(output[_DM]);
  }
  if (output[_DMVI] != null) {
    contents[_DMVI] = __expectString(output[_DMVI]);
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
  if (output[_O] != null) {
    contents[_O] = de_Owner(output[_O], context);
  }
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_IL] != null) {
    contents[_IL] = __parseBoolean(output[_IL]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMarkerReplication
 */
const de_DeleteMarkerReplication = (output: any, context: __SerdeContext): DeleteMarkerReplication => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
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
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Ac] != null) {
    contents[_Ac] = __expectString(output[_Ac]);
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_ACT] != null) {
    contents[_ACT] = de_AccessControlTranslation(output[_ACT], context);
  }
  if (output[_ECn] != null) {
    contents[_ECn] = de_EncryptionConfiguration(output[_ECn], context);
  }
  if (output[_RTe] != null) {
    contents[_RTe] = de_ReplicationTime(output[_RTe], context);
  }
  if (output[_Me] != null) {
    contents[_Me] = de_Metrics(output[_Me], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDestinationResult
 */
const de_DestinationResult = (output: any, context: __SerdeContext): DestinationResult => {
  const contents: any = {};
  if (output[_TBT] != null) {
    contents[_TBT] = __expectString(output[_TBT]);
  }
  if (output[_TBA] != null) {
    contents[_TBA] = __expectString(output[_TBA]);
  }
  if (output[_TNa] != null) {
    contents[_TNa] = __expectString(output[_TNa]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlEncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  const contents: any = {};
  if (output[_RKKID] != null) {
    contents[_RKKID] = __expectString(output[_RKKID]);
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
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_Cod] != null) {
    contents[_Cod] = __expectString(output[_Cod]);
  }
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  const contents: any = {};
  if (output[_EC] != null) {
    contents[_EC] = __expectString(output[_EC]);
  }
  if (output[_EM] != null) {
    contents[_EM] = __expectString(output[_EM]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlErrorDocument
 */
const de_ErrorDocument = (output: any, context: __SerdeContext): ErrorDocument => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
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
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
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
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
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
 * deserializeAws_restXmlGetBucketMetadataConfigurationResult
 */
const de_GetBucketMetadataConfigurationResult = (
  output: any,
  context: __SerdeContext
): GetBucketMetadataConfigurationResult => {
  const contents: any = {};
  if (output[_MCR] != null) {
    contents[_MCR] = de_MetadataConfigurationResult(output[_MCR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketMetadataTableConfigurationResult
 */
const de_GetBucketMetadataTableConfigurationResult = (
  output: any,
  context: __SerdeContext
): GetBucketMetadataTableConfigurationResult => {
  const contents: any = {};
  if (output[_MTCR] != null) {
    contents[_MTCR] = de_MetadataTableConfigurationResult(output[_MTCR], context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_Er] != null) {
    contents[_Er] = de_ErrorDetails(output[_Er], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetObjectAttributesParts
 */
const de_GetObjectAttributesParts = (output: any, context: __SerdeContext): GetObjectAttributesParts => {
  const contents: any = {};
  if (output[_PC] != null) {
    contents[_TPC] = __strictParseInt32(output[_PC]) as number;
  }
  if (output[_PNM] != null) {
    contents[_PNM] = __expectString(output[_PNM]);
  }
  if (output[_NPNM] != null) {
    contents[_NPNM] = __expectString(output[_NPNM]);
  }
  if (output[_MP] != null) {
    contents[_MP] = __strictParseInt32(output[_MP]) as number;
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output.Part === "") {
    contents[_Part] = [];
  } else if (output[_Par] != null) {
    contents[_Part] = de_PartsList(__getArrayIfSingleItem(output[_Par]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrant
 */
const de_Grant = (output: any, context: __SerdeContext): Grant => {
  const contents: any = {};
  if (output[_Gra] != null) {
    contents[_Gra] = de_Grantee(output[_Gra], context);
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __expectString(output[_Pe]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGrantee
 */
const de_Grantee = (output: any, context: __SerdeContext): Grantee => {
  const contents: any = {};
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_EA] != null) {
    contents[_EA] = __expectString(output[_EA]);
  }
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  if (output[_URI] != null) {
    contents[_URI] = __expectString(output[_URI]);
  }
  if (output[_x] != null) {
    contents[_Ty] = __expectString(output[_x]);
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
  if (output[_Su] != null) {
    contents[_Su] = __expectString(output[_Su]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInitiator
 */
const de_Initiator = (output: any, context: __SerdeContext): Initiator => {
  const contents: any = {};
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntelligentTieringAndOperator
 */
const de_IntelligentTieringAndOperator = (output: any, context: __SerdeContext): IntelligentTieringAndOperator => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Tag === "") {
    contents[_Tag] = [];
  } else if (output[_Ta] != null) {
    contents[_Tag] = de_TagSet(__getArrayIfSingleItem(output[_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlIntelligentTieringConfiguration
 */
const de_IntelligentTieringConfiguration = (output: any, context: __SerdeContext): IntelligentTieringConfiguration => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_F] != null) {
    contents[_F] = de_IntelligentTieringFilter(output[_F], context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output.Tiering === "") {
    contents[_Tie] = [];
  } else if (output[_Tier] != null) {
    contents[_Tie] = de_TieringList(__getArrayIfSingleItem(output[_Tier]), context);
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
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Ta] != null) {
    contents[_Ta] = de_Tag(output[_Ta], context);
  }
  if (output[_A] != null) {
    contents[_A] = de_IntelligentTieringAndOperator(output[_A], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryConfiguration
 */
const de_InventoryConfiguration = (output: any, context: __SerdeContext): InventoryConfiguration => {
  const contents: any = {};
  if (output[_Des] != null) {
    contents[_Des] = de_InventoryDestination(output[_Des], context);
  }
  if (output[_IE] != null) {
    contents[_IE] = __parseBoolean(output[_IE]);
  }
  if (output[_F] != null) {
    contents[_F] = de_InventoryFilter(output[_F], context);
  }
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_IOV] != null) {
    contents[_IOV] = __expectString(output[_IOV]);
  }
  if (output.OptionalFields === "") {
    contents[_OF] = [];
  } else if (output[_OF] != null && output[_OF][_Fi] != null) {
    contents[_OF] = de_InventoryOptionalFields(__getArrayIfSingleItem(output[_OF][_Fi]), context);
  }
  if (output[_Sc] != null) {
    contents[_Sc] = de_InventorySchedule(output[_Sc], context);
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
  if (output[_SBD] != null) {
    contents[_SBD] = de_InventoryS3BucketDestination(output[_SBD], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryEncryption
 */
const de_InventoryEncryption = (output: any, context: __SerdeContext): InventoryEncryption => {
  const contents: any = {};
  if (output[_SS] != null) {
    contents[_SSES] = de_SSES3(output[_SS], context);
  }
  if (output[_SK] != null) {
    contents[_SSEKMS] = de_SSEKMS(output[_SK], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryFilter
 */
const de_InventoryFilter = (output: any, context: __SerdeContext): InventoryFilter => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
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
  if (output[_AIc] != null) {
    contents[_AIc] = __expectString(output[_AIc]);
  }
  if (output[_B] != null) {
    contents[_B] = __expectString(output[_B]);
  }
  if (output[_Fo] != null) {
    contents[_Fo] = __expectString(output[_Fo]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_En] != null) {
    contents[_En] = de_InventoryEncryption(output[_En], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventorySchedule
 */
const de_InventorySchedule = (output: any, context: __SerdeContext): InventorySchedule => {
  const contents: any = {};
  if (output[_Fr] != null) {
    contents[_Fr] = __expectString(output[_Fr]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInventoryTableConfigurationResult
 */
const de_InventoryTableConfigurationResult = (
  output: any,
  context: __SerdeContext
): InventoryTableConfigurationResult => {
  const contents: any = {};
  if (output[_CSo] != null) {
    contents[_CSo] = __expectString(output[_CSo]);
  }
  if (output[_TSa] != null) {
    contents[_TSa] = __expectString(output[_TSa]);
  }
  if (output[_Er] != null) {
    contents[_Er] = de_ErrorDetails(output[_Er], context);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_TAa] != null) {
    contents[_TAa] = __expectString(output[_TAa]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJournalTableConfigurationResult
 */
const de_JournalTableConfigurationResult = (output: any, context: __SerdeContext): JournalTableConfigurationResult => {
  const contents: any = {};
  if (output[_TSa] != null) {
    contents[_TSa] = __expectString(output[_TSa]);
  }
  if (output[_Er] != null) {
    contents[_Er] = de_ErrorDetails(output[_Er], context);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_TAa] != null) {
    contents[_TAa] = __expectString(output[_TAa]);
  }
  if (output[_REe] != null) {
    contents[_REe] = de_RecordExpiration(output[_REe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaFunctionConfiguration
 */
const de_LambdaFunctionConfiguration = (output: any, context: __SerdeContext): LambdaFunctionConfiguration => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_CF] != null) {
    contents[_LFA] = __expectString(output[_CF]);
  }
  if (output.Event === "") {
    contents[_Eve] = [];
  } else if (output[_Ev] != null) {
    contents[_Eve] = de_EventList(__getArrayIfSingleItem(output[_Ev]), context);
  }
  if (output[_F] != null) {
    contents[_F] = de_NotificationConfigurationFilter(output[_F], context);
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
  if (output[_Dat] != null) {
    contents[_Dat] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Dat]));
  }
  if (output[_Da] != null) {
    contents[_Da] = __strictParseInt32(output[_Da]) as number;
  }
  if (output[_EODM] != null) {
    contents[_EODM] = __parseBoolean(output[_EODM]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRule
 */
const de_LifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  const contents: any = {};
  if (output[_Exp] != null) {
    contents[_Exp] = de_LifecycleExpiration(output[_Exp], context);
  }
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_F] != null) {
    contents[_F] = de_LifecycleRuleFilter(output[_F], context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output.Transition === "") {
    contents[_Tr] = [];
  } else if (output[_Tra] != null) {
    contents[_Tr] = de_TransitionList(__getArrayIfSingleItem(output[_Tra]), context);
  }
  if (output.NoncurrentVersionTransition === "") {
    contents[_NVT] = [];
  } else if (output[_NVTo] != null) {
    contents[_NVT] = de_NoncurrentVersionTransitionList(__getArrayIfSingleItem(output[_NVTo]), context);
  }
  if (output[_NVE] != null) {
    contents[_NVE] = de_NoncurrentVersionExpiration(output[_NVE], context);
  }
  if (output[_AIMU] != null) {
    contents[_AIMU] = de_AbortIncompleteMultipartUpload(output[_AIMU], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleAndOperator
 */
const de_LifecycleRuleAndOperator = (output: any, context: __SerdeContext): LifecycleRuleAndOperator => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Tag === "") {
    contents[_Tag] = [];
  } else if (output[_Ta] != null) {
    contents[_Tag] = de_TagSet(__getArrayIfSingleItem(output[_Ta]), context);
  }
  if (output[_OSGT] != null) {
    contents[_OSGT] = __strictParseLong(output[_OSGT]) as number;
  }
  if (output[_OSLT] != null) {
    contents[_OSLT] = __strictParseLong(output[_OSLT]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlLifecycleRuleFilter
 */
const de_LifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Ta] != null) {
    contents[_Ta] = de_Tag(output[_Ta], context);
  }
  if (output[_OSGT] != null) {
    contents[_OSGT] = __strictParseLong(output[_OSGT]) as number;
  }
  if (output[_OSLT] != null) {
    contents[_OSLT] = __strictParseLong(output[_OSLT]) as number;
  }
  if (output[_A] != null) {
    contents[_A] = de_LifecycleRuleAndOperator(output[_A], context);
  }
  return contents;
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
  if (output[_TB] != null) {
    contents[_TB] = __expectString(output[_TB]);
  }
  if (output.TargetGrants === "") {
    contents[_TG] = [];
  } else if (output[_TG] != null && output[_TG][_G] != null) {
    contents[_TG] = de_TargetGrants(__getArrayIfSingleItem(output[_TG][_G]), context);
  }
  if (output[_TP] != null) {
    contents[_TP] = __expectString(output[_TP]);
  }
  if (output[_TOKF] != null) {
    contents[_TOKF] = de_TargetObjectKeyFormat(output[_TOKF], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetadataConfigurationResult
 */
const de_MetadataConfigurationResult = (output: any, context: __SerdeContext): MetadataConfigurationResult => {
  const contents: any = {};
  if (output[_DRes] != null) {
    contents[_DRes] = de_DestinationResult(output[_DRes], context);
  }
  if (output[_JTCR] != null) {
    contents[_JTCR] = de_JournalTableConfigurationResult(output[_JTCR], context);
  }
  if (output[_ITCR] != null) {
    contents[_ITCR] = de_InventoryTableConfigurationResult(output[_ITCR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetadataTableConfigurationResult
 */
const de_MetadataTableConfigurationResult = (
  output: any,
  context: __SerdeContext
): MetadataTableConfigurationResult => {
  const contents: any = {};
  if (output[_STDR] != null) {
    contents[_STDR] = de_S3TablesDestinationResult(output[_STDR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metrics => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_ETv] != null) {
    contents[_ETv] = de_ReplicationTimeValue(output[_ETv], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetricsAndOperator
 */
const de_MetricsAndOperator = (output: any, context: __SerdeContext): MetricsAndOperator => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Tag === "") {
    contents[_Tag] = [];
  } else if (output[_Ta] != null) {
    contents[_Tag] = de_TagSet(__getArrayIfSingleItem(output[_Ta]), context);
  }
  if (output[_APAc] != null) {
    contents[_APAc] = __expectString(output[_APAc]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMetricsConfiguration
 */
const de_MetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output.Filter === "") {
    // Pass empty tags.
  } else if (output[_F] != null) {
    contents[_F] = de_MetricsFilter(__expectUnion(output[_F]), context);
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
  if (output[_P] != null) {
    return {
      Prefix: __expectString(output[_P]) as any,
    };
  }
  if (output[_Ta] != null) {
    return {
      Tag: de_Tag(output[_Ta], context),
    };
  }
  if (output[_APAc] != null) {
    return {
      AccessPointArn: __expectString(output[_APAc]) as any,
    };
  }
  if (output[_A] != null) {
    return {
      And: de_MetricsAndOperator(output[_A], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlMultipartUpload
 */
const de_MultipartUpload = (output: any, context: __SerdeContext): MultipartUpload => {
  const contents: any = {};
  if (output[_UI] != null) {
    contents[_UI] = __expectString(output[_UI]);
  }
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Ini] != null) {
    contents[_Ini] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ini]));
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_O] != null) {
    contents[_O] = de_Owner(output[_O], context);
  }
  if (output[_In] != null) {
    contents[_In] = de_Initiator(output[_In], context);
  }
  if (output[_CA] != null) {
    contents[_CA] = __expectString(output[_CA]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
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
  if (output[_ND] != null) {
    contents[_ND] = __strictParseInt32(output[_ND]) as number;
  }
  if (output[_NNV] != null) {
    contents[_NNV] = __strictParseInt32(output[_NNV]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlNoncurrentVersionTransition
 */
const de_NoncurrentVersionTransition = (output: any, context: __SerdeContext): NoncurrentVersionTransition => {
  const contents: any = {};
  if (output[_ND] != null) {
    contents[_ND] = __strictParseInt32(output[_ND]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_NNV] != null) {
    contents[_NNV] = __strictParseInt32(output[_NNV]) as number;
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
  if (output[_SKe] != null) {
    contents[_K] = de_S3KeyFilter(output[_SKe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXml_Object
 */
const de__Object = (output: any, context: __SerdeContext): _Object => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents[_CA] = [];
  } else if (output[_CA] != null) {
    contents[_CA] = de_ChecksumAlgorithmList(__getArrayIfSingleItem(output[_CA]), context);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_O] != null) {
    contents[_O] = de_Owner(output[_O], context);
  }
  if (output[_RSes] != null) {
    contents[_RSes] = de_RestoreStatus(output[_RSes], context);
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
  if (output[_OLE] != null) {
    contents[_OLE] = __expectString(output[_OLE]);
  }
  if (output[_Ru] != null) {
    contents[_Ru] = de_ObjectLockRule(output[_Ru], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockLegalHold
 */
const de_ObjectLockLegalHold = (output: any, context: __SerdeContext): ObjectLockLegalHold => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockRetention
 */
const de_ObjectLockRetention = (output: any, context: __SerdeContext): ObjectLockRetention => {
  const contents: any = {};
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_RUD] != null) {
    contents[_RUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RUD]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLockRule
 */
const de_ObjectLockRule = (output: any, context: __SerdeContext): ObjectLockRule => {
  const contents: any = {};
  if (output[_DRe] != null) {
    contents[_DRe] = de_DefaultRetention(output[_DRe], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectPart
 */
const de_ObjectPart = (output: any, context: __SerdeContext): ObjectPart => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __strictParseInt32(output[_PN]) as number;
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  if (output[_CCRC] != null) {
    contents[_CCRC] = __expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(output[_CCRCC]);
  }
  if (output[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(output[_CCRCNVME]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = __expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(output[_CSHAh]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectVersion
 */
const de_ObjectVersion = (output: any, context: __SerdeContext): ObjectVersion => {
  const contents: any = {};
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output.ChecksumAlgorithm === "") {
    contents[_CA] = [];
  } else if (output[_CA] != null) {
    contents[_CA] = de_ChecksumAlgorithmList(__getArrayIfSingleItem(output[_CA]), context);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectString(output[_CT]);
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_IL] != null) {
    contents[_IL] = __parseBoolean(output[_IL]);
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_O] != null) {
    contents[_O] = de_Owner(output[_O], context);
  }
  if (output[_RSes] != null) {
    contents[_RSes] = de_RestoreStatus(output[_RSes], context);
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
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOwnershipControls
 */
const de_OwnershipControls = (output: any, context: __SerdeContext): OwnershipControls => {
  const contents: any = {};
  if (output.Rule === "") {
    contents[_Rul] = [];
  } else if (output[_Ru] != null) {
    contents[_Rul] = de_OwnershipControlsRules(__getArrayIfSingleItem(output[_Ru]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlOwnershipControlsRule
 */
const de_OwnershipControlsRule = (output: any, context: __SerdeContext): OwnershipControlsRule => {
  const contents: any = {};
  if (output[_OO] != null) {
    contents[_OO] = __expectString(output[_OO]);
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
  if (output[_PN] != null) {
    contents[_PN] = __strictParseInt32(output[_PN]) as number;
  }
  if (output[_LM] != null) {
    contents[_LM] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LM]));
  }
  if (output[_ETa] != null) {
    contents[_ETa] = __expectString(output[_ETa]);
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  if (output[_CCRC] != null) {
    contents[_CCRC] = __expectString(output[_CCRC]);
  }
  if (output[_CCRCC] != null) {
    contents[_CCRCC] = __expectString(output[_CCRCC]);
  }
  if (output[_CCRCNVME] != null) {
    contents[_CCRCNVME] = __expectString(output[_CCRCNVME]);
  }
  if (output[_CSHA] != null) {
    contents[_CSHA] = __expectString(output[_CSHA]);
  }
  if (output[_CSHAh] != null) {
    contents[_CSHAh] = __expectString(output[_CSHAh]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPartitionedPrefix
 */
const de_PartitionedPrefix = (output: any, context: __SerdeContext): PartitionedPrefix => {
  const contents: any = {};
  if (output[_PDS] != null) {
    contents[_PDS] = __expectString(output[_PDS]);
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
  if (output[_IP] != null) {
    contents[_IP] = __parseBoolean(output[_IP]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlProgress
 */
const de_Progress = (output: any, context: __SerdeContext): Progress => {
  const contents: any = {};
  if (output[_BS] != null) {
    contents[_BS] = __strictParseLong(output[_BS]) as number;
  }
  if (output[_BP] != null) {
    contents[_BP] = __strictParseLong(output[_BP]) as number;
  }
  if (output[_BRy] != null) {
    contents[_BRy] = __strictParseLong(output[_BRy]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlPublicAccessBlockConfiguration
 */
const de_PublicAccessBlockConfiguration = (output: any, context: __SerdeContext): PublicAccessBlockConfiguration => {
  const contents: any = {};
  if (output[_BPA] != null) {
    contents[_BPA] = __parseBoolean(output[_BPA]);
  }
  if (output[_IPA] != null) {
    contents[_IPA] = __parseBoolean(output[_IPA]);
  }
  if (output[_BPP] != null) {
    contents[_BPP] = __parseBoolean(output[_BPP]);
  }
  if (output[_RPB] != null) {
    contents[_RPB] = __parseBoolean(output[_RPB]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlQueueConfiguration
 */
const de_QueueConfiguration = (output: any, context: __SerdeContext): QueueConfiguration => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_Qu] != null) {
    contents[_QA] = __expectString(output[_Qu]);
  }
  if (output.Event === "") {
    contents[_Eve] = [];
  } else if (output[_Ev] != null) {
    contents[_Eve] = de_EventList(__getArrayIfSingleItem(output[_Ev]), context);
  }
  if (output[_F] != null) {
    contents[_F] = de_NotificationConfigurationFilter(output[_F], context);
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
 * deserializeAws_restXmlRecordExpiration
 */
const de_RecordExpiration = (output: any, context: __SerdeContext): RecordExpiration => {
  const contents: any = {};
  if (output[_Exp] != null) {
    contents[_Exp] = __expectString(output[_Exp]);
  }
  if (output[_Da] != null) {
    contents[_Da] = __strictParseInt32(output[_Da]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlRedirect
 */
const de_Redirect = (output: any, context: __SerdeContext): Redirect => {
  const contents: any = {};
  if (output[_HN] != null) {
    contents[_HN] = __expectString(output[_HN]);
  }
  if (output[_HRC] != null) {
    contents[_HRC] = __expectString(output[_HRC]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  if (output[_RKPW] != null) {
    contents[_RKPW] = __expectString(output[_RKPW]);
  }
  if (output[_RKW] != null) {
    contents[_RKW] = __expectString(output[_RKW]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRedirectAllRequestsTo
 */
const de_RedirectAllRequestsTo = (output: any, context: __SerdeContext): RedirectAllRequestsTo => {
  const contents: any = {};
  if (output[_HN] != null) {
    contents[_HN] = __expectString(output[_HN]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicaModifications
 */
const de_ReplicaModifications = (output: any, context: __SerdeContext): ReplicaModifications => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationConfiguration
 */
const de_ReplicationConfiguration = (output: any, context: __SerdeContext): ReplicationConfiguration => {
  const contents: any = {};
  if (output[_Ro] != null) {
    contents[_Ro] = __expectString(output[_Ro]);
  }
  if (output.Rule === "") {
    contents[_Rul] = [];
  } else if (output[_Ru] != null) {
    contents[_Rul] = de_ReplicationRules(__getArrayIfSingleItem(output[_Ru]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRule
 */
const de_ReplicationRule = (output: any, context: __SerdeContext): ReplicationRule => {
  const contents: any = {};
  if (output[_ID_] != null) {
    contents[_ID_] = __expectString(output[_ID_]);
  }
  if (output[_Pri] != null) {
    contents[_Pri] = __strictParseInt32(output[_Pri]) as number;
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_F] != null) {
    contents[_F] = de_ReplicationRuleFilter(output[_F], context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_SSC] != null) {
    contents[_SSC] = de_SourceSelectionCriteria(output[_SSC], context);
  }
  if (output[_EOR] != null) {
    contents[_EOR] = de_ExistingObjectReplication(output[_EOR], context);
  }
  if (output[_Des] != null) {
    contents[_Des] = de_Destination(output[_Des], context);
  }
  if (output[_DMR] != null) {
    contents[_DMR] = de_DeleteMarkerReplication(output[_DMR], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleAndOperator
 */
const de_ReplicationRuleAndOperator = (output: any, context: __SerdeContext): ReplicationRuleAndOperator => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output.Tag === "") {
    contents[_Tag] = [];
  } else if (output[_Ta] != null) {
    contents[_Tag] = de_TagSet(__getArrayIfSingleItem(output[_Ta]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleFilter
 */
const de_ReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_Ta] != null) {
    contents[_Ta] = de_Tag(output[_Ta], context);
  }
  if (output[_A] != null) {
    contents[_A] = de_ReplicationRuleAndOperator(output[_A], context);
  }
  return contents;
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
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_Tim] != null) {
    contents[_Tim] = de_ReplicationTimeValue(output[_Tim], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationTimeValue
 */
const de_ReplicationTimeValue = (output: any, context: __SerdeContext): ReplicationTimeValue => {
  const contents: any = {};
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseInt32(output[_Mi]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlRestoreStatus
 */
const de_RestoreStatus = (output: any, context: __SerdeContext): RestoreStatus => {
  const contents: any = {};
  if (output[_IRIP] != null) {
    contents[_IRIP] = __parseBoolean(output[_IRIP]);
  }
  if (output[_REDe] != null) {
    contents[_REDe] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_REDe]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlRoutingRule
 */
const de_RoutingRule = (output: any, context: __SerdeContext): RoutingRule => {
  const contents: any = {};
  if (output[_Con] != null) {
    contents[_Con] = de_Condition(output[_Con], context);
  }
  if (output[_Red] != null) {
    contents[_Red] = de_Redirect(output[_Red], context);
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
    contents[_FRi] = [];
  } else if (output[_FR] != null) {
    contents[_FRi] = de_FilterRuleList(__getArrayIfSingleItem(output[_FR]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3TablesDestinationResult
 */
const de_S3TablesDestinationResult = (output: any, context: __SerdeContext): S3TablesDestinationResult => {
  const contents: any = {};
  if (output[_TBA] != null) {
    contents[_TBA] = __expectString(output[_TBA]);
  }
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_TAa] != null) {
    contents[_TAa] = __expectString(output[_TAa]);
  }
  if (output[_TNa] != null) {
    contents[_TNa] = __expectString(output[_TNa]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionByDefault
 */
const de_ServerSideEncryptionByDefault = (output: any, context: __SerdeContext): ServerSideEncryptionByDefault => {
  const contents: any = {};
  if (output[_SSEA] != null) {
    contents[_SSEA] = __expectString(output[_SSEA]);
  }
  if (output[_KMSMKID] != null) {
    contents[_KMSMKID] = __expectString(output[_KMSMKID]);
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
    contents[_Rul] = [];
  } else if (output[_Ru] != null) {
    contents[_Rul] = de_ServerSideEncryptionRules(__getArrayIfSingleItem(output[_Ru]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlServerSideEncryptionRule
 */
const de_ServerSideEncryptionRule = (output: any, context: __SerdeContext): ServerSideEncryptionRule => {
  const contents: any = {};
  if (output[_ASSEBD] != null) {
    contents[_ASSEBD] = de_ServerSideEncryptionByDefault(output[_ASSEBD], context);
  }
  if (output[_BKE] != null) {
    contents[_BKE] = __parseBoolean(output[_BKE]);
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
 * deserializeAws_restXmlSessionCredentials
 */
const de_SessionCredentials = (output: any, context: __SerdeContext): SessionCredentials => {
  const contents: any = {};
  if (output[_AKI] != null) {
    contents[_AKI] = __expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = __expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_Exp] != null) {
    contents[_Exp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Exp]));
  }
  return contents;
};

/**
 * deserializeAws_restXmlSimplePrefix
 */
const de_SimplePrefix = (output: any, context: __SerdeContext): SimplePrefix => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlSourceSelectionCriteria
 */
const de_SourceSelectionCriteria = (output: any, context: __SerdeContext): SourceSelectionCriteria => {
  const contents: any = {};
  if (output[_SKEO] != null) {
    contents[_SKEO] = de_SseKmsEncryptedObjects(output[_SKEO], context);
  }
  if (output[_RM] != null) {
    contents[_RM] = de_ReplicaModifications(output[_RM], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSSEKMS
 */
const de_SSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  const contents: any = {};
  if (output[_KI] != null) {
    contents[_KI] = __expectString(output[_KI]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlSseKmsEncryptedObjects
 */
const de_SseKmsEncryptedObjects = (output: any, context: __SerdeContext): SseKmsEncryptedObjects => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
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
  if (output[_BS] != null) {
    contents[_BS] = __strictParseLong(output[_BS]) as number;
  }
  if (output[_BP] != null) {
    contents[_BP] = __strictParseLong(output[_BP]) as number;
  }
  if (output[_BRy] != null) {
    contents[_BRy] = __strictParseLong(output[_BRy]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageClassAnalysis
 */
const de_StorageClassAnalysis = (output: any, context: __SerdeContext): StorageClassAnalysis => {
  const contents: any = {};
  if (output[_DE] != null) {
    contents[_DE] = de_StorageClassAnalysisDataExport(output[_DE], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageClassAnalysisDataExport
 */
const de_StorageClassAnalysisDataExport = (output: any, context: __SerdeContext): StorageClassAnalysisDataExport => {
  const contents: any = {};
  if (output[_OSV] != null) {
    contents[_OSV] = __expectString(output[_OSV]);
  }
  if (output[_Des] != null) {
    contents[_Des] = de_AnalyticsExportDestination(output[_Des], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
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
  if (output[_Gra] != null) {
    contents[_Gra] = de_Grantee(output[_Gra], context);
  }
  if (output[_Pe] != null) {
    contents[_Pe] = __expectString(output[_Pe]);
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
 * deserializeAws_restXmlTargetObjectKeyFormat
 */
const de_TargetObjectKeyFormat = (output: any, context: __SerdeContext): TargetObjectKeyFormat => {
  const contents: any = {};
  if (output[_SPi] != null) {
    contents[_SPi] = de_SimplePrefix(output[_SPi], context);
  }
  if (output[_PP] != null) {
    contents[_PP] = de_PartitionedPrefix(output[_PP], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlTiering
 */
const de_Tiering = (output: any, context: __SerdeContext): Tiering => {
  const contents: any = {};
  if (output[_Da] != null) {
    contents[_Da] = __strictParseInt32(output[_Da]) as number;
  }
  if (output[_AT] != null) {
    contents[_AT] = __expectString(output[_AT]);
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
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_Top] != null) {
    contents[_TA] = __expectString(output[_Top]);
  }
  if (output.Event === "") {
    contents[_Eve] = [];
  } else if (output[_Ev] != null) {
    contents[_Eve] = de_EventList(__getArrayIfSingleItem(output[_Ev]), context);
  }
  if (output[_F] != null) {
    contents[_F] = de_NotificationConfigurationFilter(output[_F], context);
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
  if (output[_Dat] != null) {
    contents[_Dat] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Dat]));
  }
  if (output[_Da] != null) {
    contents[_Da] = __strictParseInt32(output[_Da]) as number;
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
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

const _A = "And";
const _AAO = "AnalyticsAndOperator";
const _AC = "AnalyticsConfiguration";
const _ACL = "ACL";
const _ACLc = "AccessControlList";
const _ACLn = "AnalyticsConfigurationList";
const _ACP = "AccessControlPolicy";
const _ACT = "AccessControlTranslation";
const _ACc = "AccelerateConfiguration";
const _AD = "AbortDate";
const _AED = "AnalyticsExportDestination";
const _AF = "AnalyticsFilter";
const _AH = "AllowedHeader";
const _AHl = "AllowedHeaders";
const _AI = "AnalyticsId";
const _AIMU = "AbortIncompleteMultipartUpload";
const _AIc = "AccountId";
const _AKI = "AccessKeyId";
const _AM = "AllowedMethod";
const _AMl = "AllowedMethods";
const _AO = "AllowedOrigin";
const _AOl = "AllowedOrigins";
const _APA = "AccessPointAlias";
const _APAc = "AccessPointArn";
const _AQRD = "AllowQuotedRecordDelimiter";
const _AR = "AcceptRanges";
const _ARI = "AbortRuleId";
const _AS = "ArchiveStatus";
const _ASBD = "AnalyticsS3BucketDestination";
const _ASEFF = "AnalyticsS3ExportFileFormat";
const _ASSEBD = "ApplyServerSideEncryptionByDefault";
const _AT = "AccessTier";
const _Ac = "Account";
const _B = "Bucket";
const _BA = "BucketArn";
const _BAI = "BucketAccountId";
const _BAS = "BucketAccelerateStatus";
const _BGR = "BypassGovernanceRetention";
const _BI = "BucketInfo";
const _BKE = "BucketKeyEnabled";
const _BLC = "BucketLifecycleConfiguration";
const _BLCu = "BucketLocationConstraint";
const _BLN = "BucketLocationName";
const _BLP = "BucketLogsPermission";
const _BLS = "BucketLoggingStatus";
const _BLT = "BucketLocationType";
const _BN = "BucketName";
const _BP = "BytesProcessed";
const _BPA = "BlockPublicAcls";
const _BPP = "BlockPublicPolicy";
const _BR = "BucketRegion";
const _BRy = "BytesReturned";
const _BS = "BytesScanned";
const _BT = "BucketType";
const _BVS = "BucketVersioningStatus";
const _Bu = "Buckets";
const _C = "Credentials";
const _CA = "ChecksumAlgorithm";
const _CACL = "CannedACL";
const _CBC = "CreateBucketConfiguration";
const _CC = "CacheControl";
const _CCRC = "ChecksumCRC32";
const _CCRCC = "ChecksumCRC32C";
const _CCRCNVME = "ChecksumCRC64NVME";
const _CD = "ContentDisposition";
const _CDr = "CreationDate";
const _CE = "ContentEncoding";
const _CF = "CloudFunction";
const _CFC = "CloudFunctionConfiguration";
const _CL = "ContentLanguage";
const _CLo = "ContentLength";
const _CM = "ChecksumMode";
const _CMD = "ContentMD5";
const _CMU = "CompletedMultipartUpload";
const _CORSC = "CORSConfiguration";
const _CORSR = "CORSRule";
const _CORSRu = "CORSRules";
const _CP = "CommonPrefixes";
const _CPo = "CompletedPart";
const _CR = "ContentRange";
const _CRSBA = "ConfirmRemoveSelfBucketAccess";
const _CS = "CopySource";
const _CSHA = "ChecksumSHA1";
const _CSHAh = "ChecksumSHA256";
const _CSIM = "CopySourceIfMatch";
const _CSIMS = "CopySourceIfModifiedSince";
const _CSINM = "CopySourceIfNoneMatch";
const _CSIUS = "CopySourceIfUnmodifiedSince";
const _CSR = "CopySourceRange";
const _CSSSECA = "CopySourceSSECustomerAlgorithm";
const _CSSSECK = "CopySourceSSECustomerKey";
const _CSSSECKMD = "CopySourceSSECustomerKeyMD5";
const _CSV = "CSV";
const _CSVI = "CopySourceVersionId";
const _CSVIn = "CSVInput";
const _CSVO = "CSVOutput";
const _CSo = "ConfigurationState";
const _CT = "ChecksumType";
const _CTl = "ClientToken";
const _CTo = "ContentType";
const _CTom = "CompressionType";
const _CTon = "ContinuationToken";
const _Ch = "Checksum";
const _Co = "Contents";
const _Cod = "Code";
const _Com = "Comments";
const _Con = "Condition";
const _D = "Delimiter";
const _DAI = "DaysAfterInitiation";
const _DE = "DataExport";
const _DIM = "DestinationIfMatch";
const _DIMS = "DestinationIfModifiedSince";
const _DINM = "DestinationIfNoneMatch";
const _DIUS = "DestinationIfUnmodifiedSince";
const _DM = "DeleteMarker";
const _DMR = "DeleteMarkerReplication";
const _DMRS = "DeleteMarkerReplicationStatus";
const _DMVI = "DeleteMarkerVersionId";
const _DMe = "DeleteMarkers";
const _DN = "DisplayName";
const _DR = "DataRedundancy";
const _DRe = "DefaultRetention";
const _DRes = "DestinationResult";
const _Da = "Days";
const _Dat = "Date";
const _De = "Deleted";
const _Del = "Delete";
const _Des = "Destination";
const _Desc = "Description";
const _E = "Expires";
const _EA = "EmailAddress";
const _EBC = "EventBridgeConfiguration";
const _EBO = "ExpectedBucketOwner";
const _EC = "ErrorCode";
const _ECn = "EncryptionConfiguration";
const _ED = "ErrorDocument";
const _EH = "ExposeHeaders";
const _EHx = "ExposeHeader";
const _EM = "ErrorMessage";
const _EODM = "ExpiredObjectDeleteMarker";
const _EOR = "ExistingObjectReplication";
const _EORS = "ExistingObjectReplicationStatus";
const _ERP = "EnableRequestProgress";
const _ES = "ExpiresString";
const _ESBO = "ExpectedSourceBucketOwner";
const _ESx = "ExpirationStatus";
const _ESxp = "ExpirationState";
const _ET = "EncodingType";
const _ETa = "ETag";
const _ETn = "EncryptionType";
const _ETv = "EventThreshold";
const _ETx = "ExpressionType";
const _En = "Encryption";
const _Ena = "Enabled";
const _End = "End";
const _Er = "Error";
const _Err = "Errors";
const _Ev = "Event";
const _Eve = "Events";
const _Ex = "Expression";
const _Exp = "Expiration";
const _F = "Filter";
const _FD = "FieldDelimiter";
const _FHI = "FileHeaderInfo";
const _FO = "FetchOwner";
const _FR = "FilterRule";
const _FRN = "FilterRuleName";
const _FRV = "FilterRuleValue";
const _FRi = "FilterRules";
const _Fi = "Field";
const _Fo = "Format";
const _Fr = "Frequency";
const _G = "Grant";
const _GFC = "GrantFullControl";
const _GJP = "GlacierJobParameters";
const _GR = "GrantRead";
const _GRACP = "GrantReadACP";
const _GW = "GrantWrite";
const _GWACP = "GrantWriteACP";
const _Gr = "Grants";
const _Gra = "Grantee";
const _HECRE = "HttpErrorCodeReturnedEquals";
const _HN = "HostName";
const _HRC = "HttpRedirectCode";
const _I = "Id";
const _IC = "InventoryConfiguration";
const _ICL = "InventoryConfigurationList";
const _ICS = "InventoryConfigurationState";
const _ID = "IndexDocument";
const _ID_ = "ID";
const _IDn = "InventoryDestination";
const _IE = "IsEnabled";
const _IEn = "InventoryEncryption";
const _IF = "InventoryFilter";
const _IFn = "InventoryFormat";
const _IFnv = "InventoryFrequency";
const _II = "InventoryId";
const _IIOV = "InventoryIncludedObjectVersions";
const _IL = "IsLatest";
const _IM = "IfMatch";
const _IMIT = "IfMatchInitiatedTime";
const _IMLMT = "IfMatchLastModifiedTime";
const _IMS = "IfMatchSize";
const _IMSf = "IfModifiedSince";
const _INM = "IfNoneMatch";
const _IOF = "InventoryOptionalField";
const _IOV = "IncludedObjectVersions";
const _IP = "IsPublic";
const _IPA = "IgnorePublicAcls";
const _IRIP = "IsRestoreInProgress";
const _IS = "InputSerialization";
const _ISBD = "InventoryS3BucketDestination";
const _ISn = "InventorySchedule";
const _IT = "IsTruncated";
const _ITAO = "IntelligentTieringAndOperator";
const _ITAT = "IntelligentTieringAccessTier";
const _ITC = "IntelligentTieringConfiguration";
const _ITCL = "IntelligentTieringConfigurationList";
const _ITCR = "InventoryTableConfigurationResult";
const _ITCU = "InventoryTableConfigurationUpdates";
const _ITCn = "InventoryTableConfiguration";
const _ITD = "IntelligentTieringDays";
const _ITF = "IntelligentTieringFilter";
const _ITI = "IntelligentTieringId";
const _ITS = "IntelligentTieringStatus";
const _IUS = "IfUnmodifiedSince";
const _In = "Initiator";
const _Ini = "Initiated";
const _JSON = "JSON";
const _JSONI = "JSONInput";
const _JSONO = "JSONOutput";
const _JSONT = "JSONType";
const _JTC = "JournalTableConfiguration";
const _JTCR = "JournalTableConfigurationResult";
const _JTCU = "JournalTableConfigurationUpdates";
const _K = "Key";
const _KC = "KeyCount";
const _KI = "KeyId";
const _KKA = "KmsKeyArn";
const _KM = "KeyMarker";
const _KMSC = "KMSContext";
const _KMSKI = "KMSKeyId";
const _KMSMKID = "KMSMasterKeyID";
const _KPE = "KeyPrefixEquals";
const _L = "Location";
const _LC = "LocationConstraint";
const _LE = "LoggingEnabled";
const _LEi = "LifecycleExpiration";
const _LFA = "LambdaFunctionArn";
const _LFC = "LambdaFunctionConfigurations";
const _LFCa = "LambdaFunctionConfiguration";
const _LI = "LocationInfo";
const _LM = "LastModified";
const _LMT = "LastModifiedTime";
const _LNAS = "LocationNameAsString";
const _LP = "LocationPrefix";
const _LR = "LifecycleRule";
const _LRAO = "LifecycleRuleAndOperator";
const _LRF = "LifecycleRuleFilter";
const _LT = "LocationType";
const _M = "Marker";
const _MAO = "MetricsAndOperator";
const _MAS = "MaxAgeSeconds";
const _MB = "MaxBuckets";
const _MC = "MetricsConfiguration";
const _MCL = "MetricsConfigurationList";
const _MCR = "MetadataConfigurationResult";
const _MCe = "MetadataConfiguration";
const _MD = "MetadataDirective";
const _MDB = "MaxDirectoryBuckets";
const _MDf = "MfaDelete";
const _ME = "MetadataEntry";
const _MF = "MetricsFilter";
const _MFA = "MFA";
const _MFAD = "MFADelete";
const _MI = "MetricsId";
const _MK = "MaxKeys";
const _MKe = "MetadataKey";
const _MM = "MissingMeta";
const _MOS = "MpuObjectSize";
const _MP = "MaxParts";
const _MS = "MetricsStatus";
const _MTC = "MetadataTableConfiguration";
const _MTCR = "MetadataTableConfigurationResult";
const _MTEC = "MetadataTableEncryptionConfiguration";
const _MU = "MaxUploads";
const _MV = "MetadataValue";
const _Me = "Metrics";
const _Mes = "Message";
const _Mi = "Minutes";
const _Mo = "Mode";
const _N = "Name";
const _NC = "NotificationConfiguration";
const _NCF = "NotificationConfigurationFilter";
const _NCT = "NextContinuationToken";
const _ND = "NoncurrentDays";
const _NI = "NotificationId";
const _NKM = "NextKeyMarker";
const _NM = "NextMarker";
const _NNV = "NewerNoncurrentVersions";
const _NPNM = "NextPartNumberMarker";
const _NUIM = "NextUploadIdMarker";
const _NVE = "NoncurrentVersionExpiration";
const _NVIM = "NextVersionIdMarker";
const _NVT = "NoncurrentVersionTransitions";
const _NVTo = "NoncurrentVersionTransition";
const _O = "Owner";
const _OA = "ObjectAttributes";
const _OC = "OwnershipControls";
const _OCACL = "ObjectCannedACL";
const _OCR = "OwnershipControlsRule";
const _OF = "OptionalFields";
const _OI = "ObjectIdentifier";
const _OK = "ObjectKey";
const _OL = "OutputLocation";
const _OLC = "ObjectLockConfiguration";
const _OLE = "ObjectLockEnabled";
const _OLEFB = "ObjectLockEnabledForBucket";
const _OLLH = "ObjectLockLegalHold";
const _OLLHS = "ObjectLockLegalHoldStatus";
const _OLM = "ObjectLockMode";
const _OLR = "ObjectLockRetention";
const _OLRM = "ObjectLockRetentionMode";
const _OLRUD = "ObjectLockRetainUntilDate";
const _OLRb = "ObjectLockRule";
const _OO = "ObjectOwnership";
const _OOA = "OptionalObjectAttributes";
const _OOw = "OwnerOverride";
const _OP = "ObjectParts";
const _OS = "OutputSerialization";
const _OSGT = "ObjectSizeGreaterThan";
const _OSGTB = "ObjectSizeGreaterThanBytes";
const _OSLT = "ObjectSizeLessThan";
const _OSLTB = "ObjectSizeLessThanBytes";
const _OSV = "OutputSchemaVersion";
const _OSb = "ObjectSize";
const _OVI = "ObjectVersionId";
const _Ob = "Objects";
const _P = "Prefix";
const _PABC = "PublicAccessBlockConfiguration";
const _PC = "PartsCount";
const _PDS = "PartitionDateSource";
const _PI = "ParquetInput";
const _PN = "PartNumber";
const _PNM = "PartNumberMarker";
const _PP = "PartitionedPrefix";
const _Pa = "Payer";
const _Par = "Part";
const _Parq = "Parquet";
const _Part = "Parts";
const _Pe = "Permission";
const _Pr = "Protocol";
const _Pri = "Priority";
const _Q = "Quiet";
const _QA = "QueueArn";
const _QC = "QueueConfiguration";
const _QCu = "QueueConfigurations";
const _QCuo = "QuoteCharacter";
const _QEC = "QuoteEscapeCharacter";
const _QF = "QuoteFields";
const _Qu = "Queue";
const _R = "Range";
const _RART = "RedirectAllRequestsTo";
const _RC = "RequestCharged";
const _RCC = "ResponseCacheControl";
const _RCD = "ResponseContentDisposition";
const _RCE = "ResponseContentEncoding";
const _RCL = "ResponseContentLanguage";
const _RCT = "ResponseContentType";
const _RCe = "ReplicationConfiguration";
const _RD = "RecordDelimiter";
const _RE = "ResponseExpires";
const _RED = "RecordExpirationDays";
const _REDe = "RestoreExpiryDate";
const _REe = "RecordExpiration";
const _RKKID = "ReplicaKmsKeyID";
const _RKPW = "ReplaceKeyPrefixWith";
const _RKW = "ReplaceKeyWith";
const _RM = "ReplicaModifications";
const _RMS = "ReplicaModificationsStatus";
const _ROP = "RestoreOutputPath";
const _RP = "RequestPayer";
const _RPB = "RestrictPublicBuckets";
const _RPC = "RequestPaymentConfiguration";
const _RPe = "RequestProgress";
const _RR = "RequestRoute";
const _RRAO = "ReplicationRuleAndOperator";
const _RRF = "ReplicationRuleFilter";
const _RRS = "ReplicationRuleStatus";
const _RRT = "RestoreRequestType";
const _RRe = "ReplicationRule";
const _RRes = "RestoreRequest";
const _RRo = "RoutingRules";
const _RRou = "RoutingRule";
const _RS = "RenameSource";
const _RSe = "ReplicationStatus";
const _RSes = "RestoreStatus";
const _RT = "RequestToken";
const _RTS = "ReplicationTimeStatus";
const _RTV = "ReplicationTimeValue";
const _RTe = "ReplicationTime";
const _RUD = "RetainUntilDate";
const _Re = "Restore";
const _Red = "Redirect";
const _Ro = "Role";
const _Ru = "Rule";
const _Rul = "Rules";
const _S = "Status";
const _SA = "StartAfter";
const _SAK = "SecretAccessKey";
const _SAs = "SseAlgorithm";
const _SBD = "S3BucketDestination";
const _SC = "StorageClass";
const _SCA = "StorageClassAnalysis";
const _SCADE = "StorageClassAnalysisDataExport";
const _SCASV = "StorageClassAnalysisSchemaVersion";
const _SCt = "StatusCode";
const _SDV = "SkipDestinationValidation";
const _SIM = "SourceIfMatch";
const _SIMS = "SourceIfModifiedSince";
const _SINM = "SourceIfNoneMatch";
const _SIUS = "SourceIfUnmodifiedSince";
const _SK = "SSE-KMS";
const _SKEO = "SseKmsEncryptedObjects";
const _SKEOS = "SseKmsEncryptedObjectsStatus";
const _SKF = "S3KeyFilter";
const _SKe = "S3Key";
const _SL = "S3Location";
const _SM = "SessionMode";
const _SOCR = "SelectObjectContentRequest";
const _SP = "SelectParameters";
const _SPi = "SimplePrefix";
const _SR = "ScanRange";
const _SS = "SSE-S3";
const _SSC = "SourceSelectionCriteria";
const _SSE = "ServerSideEncryption";
const _SSEA = "SSEAlgorithm";
const _SSEBD = "ServerSideEncryptionByDefault";
const _SSEC = "ServerSideEncryptionConfiguration";
const _SSECA = "SSECustomerAlgorithm";
const _SSECK = "SSECustomerKey";
const _SSECKMD = "SSECustomerKeyMD5";
const _SSEKMS = "SSEKMS";
const _SSEKMSEC = "SSEKMSEncryptionContext";
const _SSEKMSKI = "SSEKMSKeyId";
const _SSER = "ServerSideEncryptionRule";
const _SSES = "SSES3";
const _ST = "SessionToken";
const _STBA = "S3TablesBucketArn";
const _STD = "S3TablesDestination";
const _STDR = "S3TablesDestinationResult";
const _STN = "S3TablesName";
const _S_ = "S3";
const _Sc = "Schedule";
const _Se = "Setting";
const _Si = "Size";
const _St = "Start";
const _Su = "Suffix";
const _T = "Tagging";
const _TA = "TopicArn";
const _TAa = "TableArn";
const _TB = "TargetBucket";
const _TBA = "TableBucketArn";
const _TBT = "TableBucketType";
const _TC = "TagCount";
const _TCo = "TopicConfiguration";
const _TCop = "TopicConfigurations";
const _TD = "TaggingDirective";
const _TDMOS = "TransitionDefaultMinimumObjectSize";
const _TG = "TargetGrants";
const _TGa = "TargetGrant";
const _TN = "TableName";
const _TNa = "TableNamespace";
const _TOKF = "TargetObjectKeyFormat";
const _TP = "TargetPrefix";
const _TPC = "TotalPartsCount";
const _TS = "TagSet";
const _TSA = "TableSseAlgorithm";
const _TSC = "TransitionStorageClass";
const _TSa = "TableStatus";
const _Ta = "Tag";
const _Tag = "Tags";
const _Ti = "Tier";
const _Tie = "Tierings";
const _Tier = "Tiering";
const _Tim = "Time";
const _To = "Token";
const _Top = "Topic";
const _Tr = "Transitions";
const _Tra = "Transition";
const _Ty = "Type";
const _U = "Upload";
const _UI = "UploadId";
const _UIM = "UploadIdMarker";
const _UM = "UserMetadata";
const _URI = "URI";
const _Up = "Uploads";
const _V = "Version";
const _VC = "VersionCount";
const _VCe = "VersioningConfiguration";
const _VI = "VersionId";
const _VIM = "VersionIdMarker";
const _Va = "Value";
const _Ve = "Versions";
const _WC = "WebsiteConfiguration";
const _WOB = "WriteOffsetBytes";
const _WRL = "WebsiteRedirectLocation";
const _Y = "Years";
const _a = "analytics";
const _ac = "accelerate";
const _acl = "acl";
const _ar = "accept-ranges";
const _at = "attributes";
const _br = "bucket-region";
const _c = "cors";
const _cc = "cache-control";
const _cd = "content-disposition";
const _ce = "content-encoding";
const _cl = "content-language";
const _cl_ = "content-length";
const _cm = "content-md5";
const _cr = "content-range";
const _ct = "content-type";
const _ct_ = "continuation-token";
const _d = "delete";
const _de = "delimiter";
const _e = "expires";
const _en = "encryption";
const _et = "encoding-type";
const _eta = "etag";
const _ex = "expiresstring";
const _fo = "fetch-owner";
const _i = "id";
const _im = "if-match";
const _ims = "if-modified-since";
const _in = "inventory";
const _inm = "if-none-match";
const _it = "intelligent-tiering";
const _ius = "if-unmodified-since";
const _km = "key-marker";
const _l = "lifecycle";
const _lh = "legal-hold";
const _lm = "last-modified";
const _lo = "location";
const _log = "logging";
const _lt = "list-type";
const _m = "metrics";
const _mC = "metadataConfiguration";
const _mIT = "metadataInventoryTable";
const _mJT = "metadataJournalTable";
const _mT = "metadataTable";
const _ma = "marker";
const _mb = "max-buckets";
const _mdb = "max-directory-buckets";
const _me = "member";
const _mk = "max-keys";
const _mp = "max-parts";
const _mu = "max-uploads";
const _n = "notification";
const _oC = "ownershipControls";
const _ol = "object-lock";
const _p = "policy";
const _pAB = "publicAccessBlock";
const _pN = "partNumber";
const _pS = "policyStatus";
const _pnm = "part-number-marker";
const _pr = "prefix";
const _r = "replication";
const _rO = "renameObject";
const _rP = "requestPayment";
const _ra = "range";
const _rcc = "response-cache-control";
const _rcd = "response-content-disposition";
const _rce = "response-content-encoding";
const _rcl = "response-content-language";
const _rct = "response-content-type";
const _re = "response-expires";
const _res = "restore";
const _ret = "retention";
const _s = "session";
const _sa = "start-after";
const _se = "select";
const _st = "select-type";
const _t = "tagging";
const _to = "torrent";
const _u = "uploads";
const _uI = "uploadId";
const _uim = "upload-id-marker";
const _v = "versioning";
const _vI = "versionId";
const _ve = '<?xml version="1.0" encoding="UTF-8"?>';
const _ver = "versions";
const _vim = "version-id-marker";
const _w = "website";
const _x = "xsi:type";
const _xaa = "x-amz-acl";
const _xaad = "x-amz-abort-date";
const _xaapa = "x-amz-access-point-alias";
const _xaari = "x-amz-abort-rule-id";
const _xaas = "x-amz-archive-status";
const _xaba = "x-amz-bucket-arn";
const _xabgr = "x-amz-bypass-governance-retention";
const _xabln = "x-amz-bucket-location-name";
const _xablt = "x-amz-bucket-location-type";
const _xabole = "x-amz-bucket-object-lock-enabled";
const _xabolt = "x-amz-bucket-object-lock-token";
const _xabr = "x-amz-bucket-region";
const _xaca = "x-amz-checksum-algorithm";
const _xacc = "x-amz-checksum-crc32";
const _xacc_ = "x-amz-checksum-crc32c";
const _xacc__ = "x-amz-checksum-crc64nvme";
const _xacm = "x-amz-checksum-mode";
const _xacrsba = "x-amz-confirm-remove-self-bucket-access";
const _xacs = "x-amz-checksum-sha1";
const _xacs_ = "x-amz-checksum-sha256";
const _xacs__ = "x-amz-copy-source";
const _xacsim = "x-amz-copy-source-if-match";
const _xacsims = "x-amz-copy-source-if-modified-since";
const _xacsinm = "x-amz-copy-source-if-none-match";
const _xacsius = "x-amz-copy-source-if-unmodified-since";
const _xacsm = "x-amz-create-session-mode";
const _xacsr = "x-amz-copy-source-range";
const _xacssseca = "x-amz-copy-source-server-side-encryption-customer-algorithm";
const _xacssseck = "x-amz-copy-source-server-side-encryption-customer-key";
const _xacssseckm = "x-amz-copy-source-server-side-encryption-customer-key-md5";
const _xacsvi = "x-amz-copy-source-version-id";
const _xact = "x-amz-checksum-type";
const _xact_ = "x-amz-client-token";
const _xadm = "x-amz-delete-marker";
const _xae = "x-amz-expiration";
const _xaebo = "x-amz-expected-bucket-owner";
const _xafec = "x-amz-fwd-error-code";
const _xafem = "x-amz-fwd-error-message";
const _xafhar = "x-amz-fwd-header-accept-ranges";
const _xafhcc = "x-amz-fwd-header-cache-control";
const _xafhcd = "x-amz-fwd-header-content-disposition";
const _xafhce = "x-amz-fwd-header-content-encoding";
const _xafhcl = "x-amz-fwd-header-content-language";
const _xafhcr = "x-amz-fwd-header-content-range";
const _xafhct = "x-amz-fwd-header-content-type";
const _xafhe = "x-amz-fwd-header-etag";
const _xafhe_ = "x-amz-fwd-header-expires";
const _xafhlm = "x-amz-fwd-header-last-modified";
const _xafhxacc = "x-amz-fwd-header-x-amz-checksum-crc32";
const _xafhxacc_ = "x-amz-fwd-header-x-amz-checksum-crc32c";
const _xafhxacc__ = "x-amz-fwd-header-x-amz-checksum-crc64nvme";
const _xafhxacs = "x-amz-fwd-header-x-amz-checksum-sha1";
const _xafhxacs_ = "x-amz-fwd-header-x-amz-checksum-sha256";
const _xafhxadm = "x-amz-fwd-header-x-amz-delete-marker";
const _xafhxae = "x-amz-fwd-header-x-amz-expiration";
const _xafhxamm = "x-amz-fwd-header-x-amz-missing-meta";
const _xafhxampc = "x-amz-fwd-header-x-amz-mp-parts-count";
const _xafhxaollh = "x-amz-fwd-header-x-amz-object-lock-legal-hold";
const _xafhxaolm = "x-amz-fwd-header-x-amz-object-lock-mode";
const _xafhxaolrud = "x-amz-fwd-header-x-amz-object-lock-retain-until-date";
const _xafhxar = "x-amz-fwd-header-x-amz-restore";
const _xafhxarc = "x-amz-fwd-header-x-amz-request-charged";
const _xafhxars = "x-amz-fwd-header-x-amz-replication-status";
const _xafhxasc = "x-amz-fwd-header-x-amz-storage-class";
const _xafhxasse = "x-amz-fwd-header-x-amz-server-side-encryption";
const _xafhxasseakki = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id";
const _xafhxassebke = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled";
const _xafhxasseca = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm";
const _xafhxasseckm = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-md5";
const _xafhxatc = "x-amz-fwd-header-x-amz-tagging-count";
const _xafhxavi = "x-amz-fwd-header-x-amz-version-id";
const _xafs = "x-amz-fwd-status";
const _xagfc = "x-amz-grant-full-control";
const _xagr = "x-amz-grant-read";
const _xagra = "x-amz-grant-read-acp";
const _xagw = "x-amz-grant-write";
const _xagwa = "x-amz-grant-write-acp";
const _xaimit = "x-amz-if-match-initiated-time";
const _xaimlmt = "x-amz-if-match-last-modified-time";
const _xaims = "x-amz-if-match-size";
const _xam = "x-amz-mfa";
const _xamd = "x-amz-metadata-directive";
const _xamm = "x-amz-missing-meta";
const _xamos = "x-amz-mp-object-size";
const _xamp = "x-amz-max-parts";
const _xampc = "x-amz-mp-parts-count";
const _xaoa = "x-amz-object-attributes";
const _xaollh = "x-amz-object-lock-legal-hold";
const _xaolm = "x-amz-object-lock-mode";
const _xaolrud = "x-amz-object-lock-retain-until-date";
const _xaoo = "x-amz-object-ownership";
const _xaooa = "x-amz-optional-object-attributes";
const _xaos = "x-amz-object-size";
const _xapnm = "x-amz-part-number-marker";
const _xar = "x-amz-restore";
const _xarc = "x-amz-request-charged";
const _xarop = "x-amz-restore-output-path";
const _xarp = "x-amz-request-payer";
const _xarr = "x-amz-request-route";
const _xars = "x-amz-rename-source";
const _xars_ = "x-amz-replication-status";
const _xarsim = "x-amz-rename-source-if-match";
const _xarsims = "x-amz-rename-source-if-modified-since";
const _xarsinm = "x-amz-rename-source-if-none-match";
const _xarsius = "x-amz-rename-source-if-unmodified-since";
const _xart = "x-amz-request-token";
const _xasc = "x-amz-storage-class";
const _xasca = "x-amz-sdk-checksum-algorithm";
const _xasdv = "x-amz-skip-destination-validation";
const _xasebo = "x-amz-source-expected-bucket-owner";
const _xasse = "x-amz-server-side-encryption";
const _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
const _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
const _xassec = "x-amz-server-side-encryption-context";
const _xasseca = "x-amz-server-side-encryption-customer-algorithm";
const _xasseck = "x-amz-server-side-encryption-customer-key";
const _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
const _xat = "x-amz-tagging";
const _xatc = "x-amz-tagging-count";
const _xatd = "x-amz-tagging-directive";
const _xatdmos = "x-amz-transition-default-minimum-object-size";
const _xavi = "x-amz-version-id";
const _xawob = "x-amz-write-offset-bytes";
const _xawrl = "x-amz-website-redirect-location";
const _xi = "x-id";
