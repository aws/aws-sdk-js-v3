// smithy-typescript generated code
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  collectBody,
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
  resolvedPath as __resolvedPath,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "../commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import {
  CreateMultiRegionAccessPointCommandInput,
  CreateMultiRegionAccessPointCommandOutput,
} from "../commands/CreateMultiRegionAccessPointCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "../commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
} from "../commands/DeleteAccessPointForObjectLambdaCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "../commands/DeleteAccessPointPolicyCommand";
import {
  DeleteAccessPointPolicyForObjectLambdaCommandInput,
  DeleteAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "../commands/DeleteBucketCommand";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "../commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "../commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "../commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "../commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "../commands/DeleteJobTaggingCommand";
import {
  DeleteMultiRegionAccessPointCommandInput,
  DeleteMultiRegionAccessPointCommandOutput,
} from "../commands/DeleteMultiRegionAccessPointCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "../commands/DeletePublicAccessBlockCommand";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "../commands/DeleteStorageLensConfigurationCommand";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "../commands/DeleteStorageLensConfigurationTaggingCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import {
  DescribeMultiRegionAccessPointOperationCommandInput,
  DescribeMultiRegionAccessPointOperationCommandOutput,
} from "../commands/DescribeMultiRegionAccessPointOperationCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "../commands/GetAccessPointCommand";
import {
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointConfigurationForObjectLambdaCommand";
import {
  GetAccessPointForObjectLambdaCommandInput,
  GetAccessPointForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointForObjectLambdaCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "../commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyForObjectLambdaCommandInput,
  GetAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointPolicyForObjectLambdaCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "../commands/GetAccessPointPolicyStatusCommand";
import {
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
} from "../commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "../commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "../commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "../commands/GetBucketPolicyCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "../commands/GetBucketReplicationCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "../commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "../commands/GetBucketVersioningCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "../commands/GetJobTaggingCommand";
import {
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
} from "../commands/GetMultiRegionAccessPointCommand";
import {
  GetMultiRegionAccessPointPolicyCommandInput,
  GetMultiRegionAccessPointPolicyCommandOutput,
} from "../commands/GetMultiRegionAccessPointPolicyCommand";
import {
  GetMultiRegionAccessPointPolicyStatusCommandInput,
  GetMultiRegionAccessPointPolicyStatusCommandOutput,
} from "../commands/GetMultiRegionAccessPointPolicyStatusCommand";
import {
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
} from "../commands/GetMultiRegionAccessPointRoutesCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "../commands/GetPublicAccessBlockCommand";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "../commands/GetStorageLensConfigurationCommand";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "../commands/GetStorageLensConfigurationTaggingCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "../commands/ListAccessPointsCommand";
import {
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "../commands/ListAccessPointsForObjectLambdaCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "../commands/ListMultiRegionAccessPointsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "../commands/ListRegionalBucketsCommand";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "../commands/ListStorageLensConfigurationsCommand";
import {
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
} from "../commands/PutAccessPointConfigurationForObjectLambdaCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "../commands/PutAccessPointPolicyCommand";
import {
  PutAccessPointPolicyForObjectLambdaCommandInput,
  PutAccessPointPolicyForObjectLambdaCommandOutput,
} from "../commands/PutAccessPointPolicyForObjectLambdaCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "../commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "../commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "../commands/PutBucketReplicationCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "../commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "../commands/PutBucketVersioningCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "../commands/PutJobTaggingCommand";
import {
  PutMultiRegionAccessPointPolicyCommandInput,
  PutMultiRegionAccessPointPolicyCommandOutput,
} from "../commands/PutMultiRegionAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "../commands/PutPublicAccessBlockCommand";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "../commands/PutStorageLensConfigurationCommand";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "../commands/PutStorageLensConfigurationTaggingCommand";
import {
  SubmitMultiRegionAccessPointRoutesCommandInput,
  SubmitMultiRegionAccessPointRoutesCommandOutput,
} from "../commands/SubmitMultiRegionAccessPointRoutesCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "../commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "../commands/UpdateJobStatusCommand";
import {
  _Exclude,
  AbortIncompleteMultipartUpload,
  AccessControlTranslation,
  AccessPoint,
  AccountLevel,
  ActivityMetrics,
  AdvancedCostOptimizationMetrics,
  AdvancedDataProtectionMetrics,
  AsyncErrorDetails,
  AsyncOperation,
  AsyncRequestParameters,
  AsyncResponseDetails,
  AwsLambdaTransformation,
  BadRequestException,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketLevel,
  CloudWatchMetrics,
  CreateBucketConfiguration,
  CreateMultiRegionAccessPointInput,
  DeleteMarkerReplication,
  DeleteMultiRegionAccessPointInput,
  Destination,
  DetailedStatusCodesMetrics,
  EncryptionConfiguration,
  EstablishedMultiRegionAccessPointPolicy,
  ExistingObjectReplication,
  GeneratedManifestEncryption,
  IdempotencyException,
  Include,
  InternalServiceException,
  InvalidNextTokenException,
  InvalidRequestException,
  JobDescriptor,
  JobFailure,
  JobListDescriptor,
  JobManifest,
  JobManifestFieldName,
  JobManifestGenerator,
  JobManifestGeneratorFilter,
  JobManifestLocation,
  JobManifestSpec,
  JobOperation,
  JobProgressSummary,
  JobReport,
  JobStatusException,
  JobTimers,
  LambdaInvokeOperation,
  LifecycleConfiguration,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  ListStorageLensConfigurationEntry,
  Metrics,
  MultiRegionAccessPointPolicyDocument,
  MultiRegionAccessPointRegionalResponse,
  MultiRegionAccessPointReport,
  MultiRegionAccessPointRoute,
  MultiRegionAccessPointsAsyncResponse,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NoSuchPublicAccessBlockConfiguration,
  NotFoundException,
  ObjectLambdaAccessPoint,
  ObjectLambdaAccessPointAlias,
  ObjectLambdaAllowedFeature,
  ObjectLambdaConfiguration,
  ObjectLambdaContentTransformation,
  ObjectLambdaTransformationConfiguration,
  ObjectLambdaTransformationConfigurationAction,
  PolicyStatus,
  PrefixLevel,
  PrefixLevelStorageMetrics,
  ProposedMultiRegionAccessPointPolicy,
  PublicAccessBlockConfiguration,
  PutMultiRegionAccessPointPolicyInput,
  Region,
  RegionalBucket,
  RegionReport,
  ReplicaModifications,
  ReplicationConfiguration,
  ReplicationRule,
  ReplicationRuleAndOperator,
  ReplicationRuleFilter,
  ReplicationStatus,
  ReplicationTime,
  ReplicationTimeValue,
  S3AccessControlList,
  S3AccessControlPolicy,
  S3BucketDestination,
  S3CopyObjectOperation,
  S3DeleteObjectTaggingOperation,
  S3GeneratedManifestDescriptor,
  S3Grant,
  S3Grantee,
  S3InitiateRestoreObjectOperation,
  S3JobManifestGenerator,
  S3ManifestOutputLocation,
  S3ObjectLockLegalHold,
  S3ObjectMetadata,
  S3ObjectOwner,
  S3ReplicateObjectOperation,
  S3Retention,
  S3SetObjectAclOperation,
  S3SetObjectLegalHoldOperation,
  S3SetObjectRetentionOperation,
  S3SetObjectTaggingOperation,
  S3Tag,
  SelectionCriteria,
  SourceSelectionCriteria,
  SSEKMS,
  SseKmsEncryptedObjects,
  SSEKMSEncryption,
  SSES3,
  SSES3Encryption,
  StorageLensAwsOrg,
  StorageLensConfiguration,
  StorageLensDataExport,
  StorageLensDataExportEncryption,
  StorageLensTag,
  Tagging,
  TooManyRequestsException,
  TooManyTagsException,
  Transition,
  VersioningConfiguration,
  VpcConfiguration,
} from "../models/models_0";
import { S3ControlServiceException as __BaseException } from "../models/S3ControlServiceException";

/**
 * serializeAws_restXmlCreateAccessPointCommand
 */
export const se_CreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateAccessPointRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Bucket !== undefined) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.BucketAccountId !== undefined) {
    const node = __XmlNode.of("AccountId", input.BucketAccountId).withName("BucketAccountId");
    bodyNode.addChildNode(node);
  }
  if (input.PublicAccessBlockConfiguration !== undefined) {
    const node = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context).withName(
      "PublicAccessBlockConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.VpcConfiguration !== undefined) {
    const node = se_VpcConfiguration(input.VpcConfiguration, context).withName("VpcConfiguration");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlCreateAccessPointForObjectLambdaCommand
 */
export const se_CreateAccessPointForObjectLambdaCommand = async (
  input: CreateAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateAccessPointForObjectLambdaRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Configuration !== undefined) {
    const node = se_ObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "x-amz-outpost-id": input.OutpostId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.CreateBucketConfiguration !== undefined) {
    body = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
  }
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = se_CreateBucketConfiguration(input.CreateBucketConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
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
 * serializeAws_restXmlCreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateJobRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    const node = __XmlNode.of("NonEmptyMaxLength64String", input.ClientRequestToken).withName("ClientRequestToken");
    bodyNode.addChildNode(node);
  }
  if (input.ConfirmationRequired !== undefined) {
    const node = __XmlNode
      .of("ConfirmationRequired", String(input.ConfirmationRequired))
      .withName("ConfirmationRequired");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined) {
    const node = __XmlNode.of("NonEmptyMaxLength256String", input.Description).withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.Manifest !== undefined) {
    const node = se_JobManifest(input.Manifest, context).withName("Manifest");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestGenerator !== undefined) {
    const node = se_JobManifestGenerator(input.ManifestGenerator, context).withName("ManifestGenerator");
    bodyNode.addChildNode(node);
  }
  if (input.Operation !== undefined) {
    const node = se_JobOperation(input.Operation, context).withName("Operation");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined) {
    const node = __XmlNode.of("JobPriority", String(input.Priority)).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Report !== undefined) {
    const node = se_JobReport(input.Report, context).withName("Report");
    bodyNode.addChildNode(node);
  }
  if (input.RoleArn !== undefined) {
    const node = __XmlNode.of("IAMRoleArn", input.RoleArn).withName("RoleArn");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = se_S3TagSet(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
    body,
  });
};

/**
 * serializeAws_restXmlCreateMultiRegionAccessPointCommand
 */
export const se_CreateMultiRegionAccessPointCommand = async (
  input: CreateMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/async-requests/mrap/create";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateMultiRegionAccessPointRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    const node = __XmlNode.of("MultiRegionAccessPointClientToken", input.ClientToken).withName("ClientToken");
    bodyNode.addChildNode(node);
  }
  if (input.Details !== undefined) {
    const node = se_CreateMultiRegionAccessPointInput(input.Details, context).withName("Details");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
    body,
  });
};

/**
 * serializeAws_restXmlDeleteAccessPointCommand
 */
export const se_DeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand
 */
export const se_DeleteAccessPointForObjectLambdaCommand = async (
  input: DeleteAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteAccessPointPolicyCommand
 */
export const se_DeleteAccessPointPolicyCommand = async (
  input: DeleteAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand
 */
export const se_DeleteAccessPointPolicyForObjectLambdaCommand = async (
  input: DeleteAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand
 */
export const se_DeleteBucketLifecycleConfigurationCommand = async (
  input: DeleteBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/replication";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteJobTaggingCommand
 */
export const se_DeleteJobTaggingCommand = async (
  input: DeleteJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteMultiRegionAccessPointCommand
 */
export const se_DeleteMultiRegionAccessPointCommand = async (
  input: DeleteMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/async-requests/mrap/delete";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("DeleteMultiRegionAccessPointRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    const node = __XmlNode.of("MultiRegionAccessPointClientToken", input.ClientToken).withName("ClientToken");
    bodyNode.addChildNode(node);
  }
  if (input.Details !== undefined) {
    const node = se_DeleteMultiRegionAccessPointInput(input.Details, context).withName("Details");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/configuration/publicAccessBlock";
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteStorageLensConfigurationCommand
 */
export const se_DeleteStorageLensConfigurationCommand = async (
  input: DeleteStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand
 */
export const se_DeleteStorageLensConfigurationTaggingCommand = async (
  input: DeleteStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand
 */
export const se_DescribeMultiRegionAccessPointOperationCommand = async (
  input: DescribeMultiRegionAccessPointOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/async-requests/mrap/{RequestTokenARN+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RequestTokenARN",
    () => input.RequestTokenARN!,
    "{RequestTokenARN+}",
    true
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointCommand
 */
export const se_GetAccessPointCommand = async (
  input: GetAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand
 */
export const se_GetAccessPointConfigurationForObjectLambdaCommand = async (
  input: GetAccessPointConfigurationForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointForObjectLambdaCommand
 */
export const se_GetAccessPointForObjectLambdaCommand = async (
  input: GetAccessPointForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointPolicyCommand
 */
export const se_GetAccessPointPolicyCommand = async (
  input: GetAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand
 */
export const se_GetAccessPointPolicyForObjectLambdaCommand = async (
  input: GetAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointPolicyStatusCommand
 */
export const se_GetAccessPointPolicyStatusCommand = async (
  input: GetAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspoint/{Name}/policyStatus";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand
 */
export const se_GetAccessPointPolicyStatusForObjectLambdaCommand = async (
  input: GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policyStatus";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetBucketCommand
 */
export const se_GetBucketCommand = async (
  input: GetBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/replication";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/versioning";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetJobTaggingCommand
 */
export const se_GetJobTaggingCommand = async (
  input: GetJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointCommand
 */
export const se_GetMultiRegionAccessPointCommand = async (
  input: GetMultiRegionAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/mrap/instances/{Name+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name+}", true);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointPolicyCommand
 */
export const se_GetMultiRegionAccessPointPolicyCommand = async (
  input: GetMultiRegionAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/mrap/instances/{Name+}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name+}", true);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand
 */
export const se_GetMultiRegionAccessPointPolicyStatusCommand = async (
  input: GetMultiRegionAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/mrap/instances/{Name+}/policystatus";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name+}", true);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetMultiRegionAccessPointRoutesCommand
 */
export const se_GetMultiRegionAccessPointRoutesCommand = async (
  input: GetMultiRegionAccessPointRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/mrap/instances/{Mrap+}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "Mrap", () => input.Mrap!, "{Mrap+}", true);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/configuration/publicAccessBlock";
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetStorageLensConfigurationCommand
 */
export const se_GetStorageLensConfigurationCommand = async (
  input: GetStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlGetStorageLensConfigurationTaggingCommand
 */
export const se_GetStorageLensConfigurationTaggingCommand = async (
  input: GetStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlListAccessPointsCommand
 */
export const se_ListAccessPointsCommand = async (
  input: ListAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint";
  const query: any = map({
    bucket: [, input.Bucket!],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListAccessPointsForObjectLambdaCommand
 */
export const se_ListAccessPointsForObjectLambdaCommand = async (
  input: ListAccessPointsForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspointforobjectlambda";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs";
  const query: any = map({
    jobStatuses: [() => input.JobStatuses !== void 0, () => (input.JobStatuses! || []).map((_entry) => _entry as any)],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListMultiRegionAccessPointsCommand
 */
export const se_ListMultiRegionAccessPointsCommand = async (
  input: ListMultiRegionAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/mrap/instances";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListRegionalBucketsCommand
 */
export const se_ListRegionalBucketsCommand = async (
  input: ListRegionalBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
    "x-amz-outpost-id": input.OutpostId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlListStorageLensConfigurationsCommand
 */
export const se_ListStorageLensConfigurationsCommand = async (
  input: ListStorageLensConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens";
  const query: any = map({
    nextToken: [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand
 */
export const se_PutAccessPointConfigurationForObjectLambdaCommand = async (
  input: PutAccessPointConfigurationForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointConfigurationForObjectLambdaRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Configuration !== undefined) {
    const node = se_ObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutAccessPointPolicyCommand
 */
export const se_PutAccessPointPolicyCommand = async (
  input: PutAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = __XmlNode.of("Policy", input.Policy).withName("Policy");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand
 */
export const se_PutAccessPointPolicyForObjectLambdaCommand = async (
  input: PutAccessPointPolicyForObjectLambdaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointPolicyForObjectLambdaRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = __XmlNode.of("ObjectLambdaPolicy", input.Policy).withName("Policy");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.LifecycleConfiguration !== undefined) {
    body = se_LifecycleConfiguration(input.LifecycleConfiguration, context);
  }
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = se_LifecycleConfiguration(input.LifecycleConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
    "x-amz-confirm-remove-self-bucket-access": [
      () => isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess),
      () => input.ConfirmRemoveSelfBucketAccess!.toString(),
    ],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutBucketPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = __XmlNode.of("Policy", input.Policy).withName("Policy");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/replication";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.ReplicationConfiguration !== undefined) {
    body = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
  }
  let contents: any;
  if (input.ReplicationConfiguration !== undefined) {
    contents = se_ReplicationConfiguration(input.ReplicationConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.Tagging !== undefined) {
    body = se_Tagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = se_Tagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
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
    "x-amz-account-id": input.AccountId!,
    "x-amz-mfa": input.MFA!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/versioning";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.VersioningConfiguration !== undefined) {
    body = se_VersioningConfiguration(input.VersioningConfiguration, context);
  }
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = se_VersioningConfiguration(input.VersioningConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutJobTaggingCommand
 */
export const se_PutJobTaggingCommand = async (
  input: PutJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutJobTaggingRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Tags !== undefined) {
    const nodes = se_S3TagSet(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutMultiRegionAccessPointPolicyCommand
 */
export const se_PutMultiRegionAccessPointPolicyCommand = async (
  input: PutMultiRegionAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/async-requests/mrap/put-policy";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutMultiRegionAccessPointPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    const node = __XmlNode.of("MultiRegionAccessPointClientToken", input.ClientToken).withName("ClientToken");
    bodyNode.addChildNode(node);
  }
  if (input.Details !== undefined) {
    const node = se_PutMultiRegionAccessPointPolicyInput(input.Details, context).withName("Details");
    bodyNode.addChildNode(node);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
    "x-amz-account-id": input.AccountId!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/configuration/publicAccessBlock";
  let body: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    body = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
  }
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = se_PublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutStorageLensConfigurationCommand
 */
export const se_PutStorageLensConfigurationCommand = async (
  input: PutStorageLensConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutStorageLensConfigurationRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.StorageLensConfiguration !== undefined) {
    const node = se_StorageLensConfiguration(input.StorageLensConfiguration, context).withName(
      "StorageLensConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = se_StorageLensTags(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlPutStorageLensConfigurationTaggingCommand
 */
export const se_PutStorageLensConfigurationTaggingCommand = async (
  input: PutStorageLensConfigurationTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  resolvedPath = __resolvedPath(resolvedPath, input, "ConfigId", () => input.ConfigId!, "{ConfigId}", false);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutStorageLensConfigurationTaggingRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Tags !== undefined) {
    const nodes = se_StorageLensTags(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand
 */
export const se_SubmitMultiRegionAccessPointRoutesCommand = async (
  input: SubmitMultiRegionAccessPointRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/xml",
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/mrap/instances/{Mrap+}/routes";
  resolvedPath = __resolvedPath(resolvedPath, input, "Mrap", () => input.Mrap!, "{Mrap+}", true);
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("SubmitMultiRegionAccessPointRoutesRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.RouteUpdates !== undefined) {
    const nodes = se_RouteList(input.RouteUpdates, context);
    const containerNode = new __XmlNode("RouteUpdates");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  body += bodyNode.toString();
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restXmlUpdateJobPriorityCommand
 */
export const se_UpdateJobPriorityCommand = async (
  input: UpdateJobPriorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/priority";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  const query: any = map({
    priority: [__expectNonNull(input.Priority, `Priority`) != null, () => input.Priority!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
 * serializeAws_restXmlUpdateJobStatusCommand
 */
export const se_UpdateJobStatusCommand = async (
  input: UpdateJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-account-id": input.AccountId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/status";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  const query: any = map({
    requestedJobStatus: [, __expectNonNull(input.RequestedJobStatus!, `RequestedJobStatus`)],
    statusUpdateReason: [, input.StatusUpdateReason!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    if (input.AccountId === undefined) {
      throw new Error("Empty value provided for input host prefix: AccountId.");
    }
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
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
 * deserializeAws_restXmlCreateAccessPointCommand
 */
export const de_CreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(data["AccessPointArn"]);
  }
  if (data["Alias"] !== undefined) {
    contents.Alias = __expectString(data["Alias"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessPointCommandError
 */
const de_CreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand
 */
export const de_CreateAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Alias"] !== undefined) {
    contents.Alias = de_ObjectLambdaAccessPointAlias(data["Alias"], context);
  }
  if (data["ObjectLambdaAccessPointArn"] !== undefined) {
    contents.ObjectLambdaAccessPointArn = __expectString(data["ObjectLambdaAccessPointArn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError
 */
const de_CreateAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["BucketArn"] !== undefined) {
    contents.BucketArn = __expectString(data["BucketArn"]);
  }
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
    case "com.amazonaws.s3control#BucketAlreadyExists":
      throw await de_BucketAlreadyExistsRes(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3control#BucketAlreadyOwnedByYou":
      throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateJobCommandError
 */
const de_CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.s3control#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlCreateMultiRegionAccessPointCommand
 */
export const de_CreateMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMultiRegionAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RequestTokenARN"] !== undefined) {
    contents.RequestTokenARN = __expectString(data["RequestTokenARN"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultiRegionAccessPointCommandError
 */
const de_CreateMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteAccessPointCommand
 */
export const de_DeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteAccessPointCommandError
 */
const de_DeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand
 */
export const de_DeleteAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError
 */
const de_DeleteAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteAccessPointPolicyCommand
 */
export const de_DeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteAccessPointPolicyCommandError
 */
const de_DeleteAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand
 */
export const de_DeleteAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError
 */
const de_DeleteAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand
 */
export const de_DeleteBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError
 */
const de_DeleteBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteJobTaggingCommand
 */
export const de_DeleteJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteJobTaggingCommandError
 */
const de_DeleteJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDeleteMultiRegionAccessPointCommand
 */
export const de_DeleteMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMultiRegionAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RequestTokenARN"] !== undefined) {
    contents.RequestTokenARN = __expectString(data["RequestTokenARN"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDeleteMultiRegionAccessPointCommandError
 */
const de_DeleteMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteStorageLensConfigurationCommand
 */
export const de_DeleteStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteStorageLensConfigurationCommandError
 */
const de_DeleteStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand
 */
export const de_DeleteStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError
 */
const de_DeleteStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlDescribeJobCommand
 */
export const de_DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Job"] !== undefined) {
    contents.Job = de_JobDescriptor(data["Job"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDescribeJobCommandError
 */
const de_DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand
 */
export const de_DescribeMultiRegionAccessPointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMultiRegionAccessPointOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AsyncOperation"] !== undefined) {
    contents.AsyncOperation = de_AsyncOperation(data["AsyncOperation"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommandError
 */
const de_DescribeMultiRegionAccessPointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointCommand
 */
export const de_GetAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(data["AccessPointArn"]);
  }
  if (data["Alias"] !== undefined) {
    contents.Alias = __expectString(data["Alias"]);
  }
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = __expectString(data["BucketAccountId"]);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["CreationDate"]));
  }
  if (data.Endpoints === "") {
    contents.Endpoints = {};
  } else if (data["Endpoints"] !== undefined && data["Endpoints"]["entry"] !== undefined) {
    contents.Endpoints = de_Endpoints(__getArrayIfSingleItem(data["Endpoints"]["entry"]), context);
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = __expectString(data["NetworkOrigin"]);
  }
  if (data["PublicAccessBlockConfiguration"] !== undefined) {
    contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(
      data["PublicAccessBlockConfiguration"],
      context
    );
  }
  if (data["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = de_VpcConfiguration(data["VpcConfiguration"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointCommandError
 */
const de_GetAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand
 */
export const de_GetAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Configuration"] !== undefined) {
    contents.Configuration = de_ObjectLambdaConfiguration(data["Configuration"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError
 */
const de_GetAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointForObjectLambdaCommand
 */
export const de_GetAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Alias"] !== undefined) {
    contents.Alias = de_ObjectLambdaAccessPointAlias(data["Alias"], context);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["CreationDate"]));
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["PublicAccessBlockConfiguration"] !== undefined) {
    contents.PublicAccessBlockConfiguration = de_PublicAccessBlockConfiguration(
      data["PublicAccessBlockConfiguration"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError
 */
const de_GetAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyCommand
 */
export const de_GetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyCommandError
 */
const de_GetAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand
 */
export const de_GetAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError
 */
const de_GetAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusCommand
 */
export const de_GetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = de_PolicyStatus(data["PolicyStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusCommandError
 */
const de_GetAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand
 */
export const de_GetAccessPointPolicyStatusForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccessPointPolicyStatusForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = de_PolicyStatus(data["PolicyStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError
 */
const de_GetAccessPointPolicyStatusForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetBucketCommand
 */
export const de_GetBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(data["CreationDate"]));
  }
  if (data["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = __parseBoolean(data["PublicAccessBlockEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetBucketCommandError
 */
const de_GetBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  if (data.Rules === "") {
    contents.Rules = [];
  } else if (data["Rules"] !== undefined && data["Rules"]["Rule"] !== undefined) {
    contents.Rules = de_LifecycleRules(__getArrayIfSingleItem(data["Rules"]["Rule"]), context);
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
    parsedBody: parsedBody.Error,
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
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
    parsedBody: parsedBody.Error,
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ReplicationConfiguration"] !== undefined) {
    contents.ReplicationConfiguration = de_ReplicationConfiguration(data["ReplicationConfiguration"], context);
  }
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
    parsedBody: parsedBody.Error,
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
  } else if (data["TagSet"] !== undefined && data["TagSet"]["member"] !== undefined) {
    contents.TagSet = de_S3TagSet(__getArrayIfSingleItem(data["TagSet"]["member"]), context);
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetJobTaggingCommand
 */
export const de_GetJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents.Tags = [];
  } else if (data["Tags"] !== undefined && data["Tags"]["member"] !== undefined) {
    contents.Tags = de_S3TagSet(__getArrayIfSingleItem(data["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetJobTaggingCommandError
 */
const de_GetJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointCommand
 */
export const de_GetMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMultiRegionAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AccessPoint"] !== undefined) {
    contents.AccessPoint = de_MultiRegionAccessPointReport(data["AccessPoint"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointCommandError
 */
const de_GetMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommand
 */
export const de_GetMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMultiRegionAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = de_MultiRegionAccessPointPolicyDocument(data["Policy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommandError
 */
const de_GetMultiRegionAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand
 */
export const de_GetMultiRegionAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMultiRegionAccessPointPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Established"] !== undefined) {
    contents.Established = de_PolicyStatus(data["Established"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommandError
 */
const de_GetMultiRegionAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommand
 */
export const de_GetMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMultiRegionAccessPointRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Mrap"] !== undefined) {
    contents.Mrap = __expectString(data["Mrap"]);
  }
  if (data.Routes === "") {
    contents.Routes = [];
  } else if (data["Routes"] !== undefined && data["Routes"]["Route"] !== undefined) {
    contents.Routes = de_RouteList(__getArrayIfSingleItem(data["Routes"]["Route"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommandError
 */
const de_GetMultiRegionAccessPointRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  switch (errorCode) {
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
      throw await de_NoSuchPublicAccessBlockConfigurationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationCommand
 */
export const de_GetStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StorageLensConfiguration = de_StorageLensConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationCommandError
 */
const de_GetStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand
 */
export const de_GetStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents.Tags = [];
  } else if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
    contents.Tags = de_StorageLensTags(__getArrayIfSingleItem(data["Tags"]["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError
 */
const de_GetStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListAccessPointsCommand
 */
export const de_ListAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessPointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointList === "") {
    contents.AccessPointList = [];
  } else if (data["AccessPointList"] !== undefined && data["AccessPointList"]["AccessPoint"] !== undefined) {
    contents.AccessPointList = de_AccessPointList(
      __getArrayIfSingleItem(data["AccessPointList"]["AccessPoint"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessPointsCommandError
 */
const de_ListAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListAccessPointsForObjectLambdaCommand
 */
export const de_ListAccessPointsForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessPointsForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.ObjectLambdaAccessPointList === "") {
    contents.ObjectLambdaAccessPointList = [];
  } else if (
    data["ObjectLambdaAccessPointList"] !== undefined &&
    data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"] !== undefined
  ) {
    contents.ObjectLambdaAccessPointList = de_ObjectLambdaAccessPointList(
      __getArrayIfSingleItem(data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError
 */
const de_ListAccessPointsForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs === "") {
    contents.Jobs = [];
  } else if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
    contents.Jobs = de_JobListDescriptorList(__getArrayIfSingleItem(data["Jobs"]["member"]), context);
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.s3control#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.s3control#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlListMultiRegionAccessPointsCommand
 */
export const de_ListMultiRegionAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultiRegionAccessPointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPoints === "") {
    contents.AccessPoints = [];
  } else if (data["AccessPoints"] !== undefined && data["AccessPoints"]["AccessPoint"] !== undefined) {
    contents.AccessPoints = de_MultiRegionAccessPointReportList(
      __getArrayIfSingleItem(data["AccessPoints"]["AccessPoint"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlListMultiRegionAccessPointsCommandError
 */
const de_ListMultiRegionAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListRegionalBucketsCommand
 */
export const de_ListRegionalBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRegionalBucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.RegionalBucketList === "") {
    contents.RegionalBucketList = [];
  } else if (data["RegionalBucketList"] !== undefined && data["RegionalBucketList"]["RegionalBucket"] !== undefined) {
    contents.RegionalBucketList = de_RegionalBucketList(
      __getArrayIfSingleItem(data["RegionalBucketList"]["RegionalBucket"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListRegionalBucketsCommandError
 */
const de_ListRegionalBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlListStorageLensConfigurationsCommand
 */
export const de_ListStorageLensConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStorageLensConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.StorageLensConfigurationList === "") {
    contents.StorageLensConfigurationList = [];
  } else if (data["StorageLensConfigurationList"] !== undefined) {
    contents.StorageLensConfigurationList = de_StorageLensConfigurationList(
      __getArrayIfSingleItem(data["StorageLensConfigurationList"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlListStorageLensConfigurationsCommandError
 */
const de_ListStorageLensConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand
 */
export const de_PutAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError
 */
const de_PutAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutAccessPointPolicyCommand
 */
export const de_PutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutAccessPointPolicyCommandError
 */
const de_PutAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand
 */
export const de_PutAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError
 */
const de_PutAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutJobTaggingCommand
 */
export const de_PutJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutJobTaggingCommandError
 */
const de_PutJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.s3control#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommand
 */
export const de_PutMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutMultiRegionAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["RequestTokenARN"] !== undefined) {
    contents.RequestTokenARN = __expectString(data["RequestTokenARN"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommandError
 */
const de_PutMultiRegionAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMultiRegionAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutStorageLensConfigurationCommand
 */
export const de_PutStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutStorageLensConfigurationCommandError
 */
const de_PutStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand
 */
export const de_PutStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError
 */
const de_PutStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand
 */
export const de_SubmitMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SubmitMultiRegionAccessPointRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommandError
 */
const de_SubmitMultiRegionAccessPointRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_restXmlUpdateJobPriorityCommand
 */
export const de_UpdateJobPriorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJobPriorityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  if (data["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(data["Priority"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateJobPriorityCommandError
 */
const de_UpdateJobPriorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restXmlUpdateJobStatusCommand
 */
export const de_UpdateJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJobStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  if (data["Status"] !== undefined) {
    contents.Status = __expectString(data["Status"]);
  }
  if (data["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = __expectString(data["StatusUpdateReason"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlUpdateJobStatusCommandError
 */
const de_UpdateJobStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "JobStatusException":
    case "com.amazonaws.s3control#JobStatusException":
      throw await de_JobStatusExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restXmlBadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlBucketAlreadyExistsRes
 */
const de_BucketAlreadyExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<BucketAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlBucketAlreadyOwnedByYouRes
 */
const de_BucketAlreadyOwnedByYouRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyOwnedByYou> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  const exception = new BucketAlreadyOwnedByYou({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlIdempotencyExceptionRes
 */
const de_IdempotencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new IdempotencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlInvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlJobStatusExceptionRes
 */
const de_JobStatusExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<JobStatusException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new JobStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationRes
 */
const de_NoSuchPublicAccessBlockConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchPublicAccessBlockConfiguration> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new NoSuchPublicAccessBlockConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlNotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

/**
 * deserializeAws_restXmlTooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
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
 * serializeAws_restXmlAccountLevel
 */
const se_AccountLevel = (input: AccountLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccountLevel");
  if (input.ActivityMetrics != null) {
    const node = se_ActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.BucketLevel != null) {
    const node = se_BucketLevel(input.BucketLevel, context).withName("BucketLevel");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedCostOptimizationMetrics != null) {
    const node = se_AdvancedCostOptimizationMetrics(input.AdvancedCostOptimizationMetrics, context).withName(
      "AdvancedCostOptimizationMetrics"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedDataProtectionMetrics != null) {
    const node = se_AdvancedDataProtectionMetrics(input.AdvancedDataProtectionMetrics, context).withName(
      "AdvancedDataProtectionMetrics"
    );
    bodyNode.addChildNode(node);
  }
  if (input.DetailedStatusCodesMetrics != null) {
    const node = se_DetailedStatusCodesMetrics(input.DetailedStatusCodesMetrics, context).withName(
      "DetailedStatusCodesMetrics"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlActivityMetrics
 */
const se_ActivityMetrics = (input: ActivityMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ActivityMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAdvancedCostOptimizationMetrics
 */
const se_AdvancedCostOptimizationMetrics = (input: AdvancedCostOptimizationMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AdvancedCostOptimizationMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAdvancedDataProtectionMetrics
 */
const se_AdvancedDataProtectionMetrics = (input: AdvancedDataProtectionMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AdvancedDataProtectionMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlAwsLambdaTransformation
 */
const se_AwsLambdaTransformation = (input: AwsLambdaTransformation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AwsLambdaTransformation");
  if (input.FunctionArn != null) {
    const node = __XmlNode.of("FunctionArnString", input.FunctionArn).withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionPayload != null) {
    const node = __XmlNode.of("AwsLambdaTransformationPayload", input.FunctionPayload).withName("FunctionPayload");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlBucketLevel
 */
const se_BucketLevel = (input: BucketLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLevel");
  if (input.ActivityMetrics != null) {
    const node = se_ActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixLevel != null) {
    const node = se_PrefixLevel(input.PrefixLevel, context).withName("PrefixLevel");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedCostOptimizationMetrics != null) {
    const node = se_AdvancedCostOptimizationMetrics(input.AdvancedCostOptimizationMetrics, context).withName(
      "AdvancedCostOptimizationMetrics"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedDataProtectionMetrics != null) {
    const node = se_AdvancedDataProtectionMetrics(input.AdvancedDataProtectionMetrics, context).withName(
      "AdvancedDataProtectionMetrics"
    );
    bodyNode.addChildNode(node);
  }
  if (input.DetailedStatusCodesMetrics != null) {
    const node = se_DetailedStatusCodesMetrics(input.DetailedStatusCodesMetrics, context).withName(
      "DetailedStatusCodesMetrics"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlBuckets
 */
const se_Buckets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("S3BucketArnString", entry);
      return node.withName("Arn");
    });
};

/**
 * serializeAws_restXmlCloudWatchMetrics
 */
const se_CloudWatchMetrics = (input: CloudWatchMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CloudWatchMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
 * serializeAws_restXmlCreateMultiRegionAccessPointInput
 */
const se_CreateMultiRegionAccessPointInput = (
  input: CreateMultiRegionAccessPointInput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateMultiRegionAccessPointInput");
  if (input.Name != null) {
    const node = __XmlNode.of("MultiRegionAccessPointName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.PublicAccessBlock != null) {
    const node = se_PublicAccessBlockConfiguration(input.PublicAccessBlock, context).withName("PublicAccessBlock");
    bodyNode.addChildNode(node);
  }
  if (input.Regions != null) {
    const nodes = se_RegionCreationList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
 * serializeAws_restXmlDeleteMultiRegionAccessPointInput
 */
const se_DeleteMultiRegionAccessPointInput = (
  input: DeleteMultiRegionAccessPointInput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("DeleteMultiRegionAccessPointInput");
  if (input.Name != null) {
    const node = __XmlNode.of("MultiRegionAccessPointName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDestination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Destination");
  if (input.Account != null) {
    const node = __XmlNode.of("AccountId", input.Account).withName("Account");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketIdentifierString", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.ReplicationTime != null) {
    const node = se_ReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
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
  if (input.Metrics != null) {
    const node = se_Metrics(input.Metrics, context).withName("Metrics");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("ReplicationStorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlDetailedStatusCodesMetrics
 */
const se_DetailedStatusCodesMetrics = (input: DetailedStatusCodesMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("DetailedStatusCodesMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
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
 * serializeAws_restXml_Exclude
 */
const se__Exclude = (input: _Exclude, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Exclude");
  if (input.Buckets != null) {
    const nodes = se_Buckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions != null) {
    const nodes = se_Regions(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
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
 * serializeAws_restXmlGeneratedManifestEncryption
 */
const se_GeneratedManifestEncryption = (input: GeneratedManifestEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("GeneratedManifestEncryption");
  if (input.SSES3 != null) {
    const node = se_SSES3Encryption(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS != null) {
    const node = se_SSEKMSEncryption(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlInclude
 */
const se_Include = (input: Include, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Include");
  if (input.Buckets != null) {
    const nodes = se_Buckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions != null) {
    const nodes = se_Regions(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobManifest
 */
const se_JobManifest = (input: JobManifest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifest");
  if (input.Spec != null) {
    const node = se_JobManifestSpec(input.Spec, context).withName("Spec");
    bodyNode.addChildNode(node);
  }
  if (input.Location != null) {
    const node = se_JobManifestLocation(input.Location, context).withName("Location");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobManifestFieldList
 */
const se_JobManifestFieldList = (input: (JobManifestFieldName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("JobManifestFieldName", entry);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlJobManifestGenerator
 */
const se_JobManifestGenerator = (input: JobManifestGenerator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestGenerator");
  JobManifestGenerator.visit(input, {
    S3JobManifestGenerator: (value) => {
      const node = se_S3JobManifestGenerator(value, context).withName("S3JobManifestGenerator");
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
 * serializeAws_restXmlJobManifestGeneratorFilter
 */
const se_JobManifestGeneratorFilter = (input: JobManifestGeneratorFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestGeneratorFilter");
  if (input.EligibleForReplication != null) {
    const node = __XmlNode.of("Boolean", String(input.EligibleForReplication)).withName("EligibleForReplication");
    bodyNode.addChildNode(node);
  }
  if (input.CreatedAfter != null) {
    const node = __XmlNode
      .of("ObjectCreationTime", input.CreatedAfter.toISOString().split(".")[0] + "Z")
      .withName("CreatedAfter");
    bodyNode.addChildNode(node);
  }
  if (input.CreatedBefore != null) {
    const node = __XmlNode
      .of("ObjectCreationTime", input.CreatedBefore.toISOString().split(".")[0] + "Z")
      .withName("CreatedBefore");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectReplicationStatuses != null) {
    const nodes = se_ReplicationStatusFilterList(input.ObjectReplicationStatuses, context);
    const containerNode = new __XmlNode("ObjectReplicationStatuses");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobManifestLocation
 */
const se_JobManifestLocation = (input: JobManifestLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestLocation");
  if (input.ObjectArn != null) {
    const node = __XmlNode.of("S3KeyArnString", input.ObjectArn).withName("ObjectArn");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectVersionId != null) {
    const node = __XmlNode.of("S3ObjectVersionId", input.ObjectVersionId).withName("ObjectVersionId");
    bodyNode.addChildNode(node);
  }
  if (input.ETag != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ETag).withName("ETag");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobManifestSpec
 */
const se_JobManifestSpec = (input: JobManifestSpec, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestSpec");
  if (input.Format != null) {
    const node = __XmlNode.of("JobManifestFormat", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Fields != null) {
    const nodes = se_JobManifestFieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobOperation
 */
const se_JobOperation = (input: JobOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobOperation");
  if (input.LambdaInvoke != null) {
    const node = se_LambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectCopy != null) {
    const node = se_S3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectAcl != null) {
    const node = se_S3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectTagging != null) {
    const node = se_S3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName("S3PutObjectTagging");
    bodyNode.addChildNode(node);
  }
  if (input.S3DeleteObjectTagging != null) {
    const node = se_S3DeleteObjectTaggingOperation(input.S3DeleteObjectTagging, context).withName(
      "S3DeleteObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3InitiateRestoreObject != null) {
    const node = se_S3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName(
      "S3InitiateRestoreObject"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectLegalHold != null) {
    const node = se_S3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName("S3PutObjectLegalHold");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectRetention != null) {
    const node = se_S3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName("S3PutObjectRetention");
    bodyNode.addChildNode(node);
  }
  if (input.S3ReplicateObject != null) {
    const node = se_S3ReplicateObjectOperation(input.S3ReplicateObject, context).withName("S3ReplicateObject");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlJobReport
 */
const se_JobReport = (input: JobReport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobReport");
  if (input.Bucket != null) {
    const node = __XmlNode.of("S3BucketArnString", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Format != null) {
    const node = __XmlNode.of("JobReportFormat", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled != null) {
    const node = __XmlNode.of("Boolean", String(input.Enabled)).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("ReportPrefixString", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.ReportScope != null) {
    const node = __XmlNode.of("JobReportScope", input.ReportScope).withName("ReportScope");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLambdaInvokeOperation
 */
const se_LambdaInvokeOperation = (input: LambdaInvokeOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn != null) {
    const node = __XmlNode.of("FunctionArnString", input.FunctionArn).withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleConfiguration
 */
const se_LifecycleConfiguration = (input: LifecycleConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleConfiguration");
  if (input.Rules != null) {
    const nodes = se_LifecycleRules(input.Rules, context);
    const containerNode = new __XmlNode("Rules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlLifecycleExpiration
 */
const se_LifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleExpiration");
  if (input.Date != null) {
    const node = __XmlNode.of("Date", input.Date.toISOString().split(".")[0] + "Z").withName("Date");
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
    const containerNode = new __XmlNode("Transitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.NoncurrentVersionTransitions != null) {
    const nodes = se_NoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    const containerNode = new __XmlNode("NoncurrentVersionTransitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
    const nodes = se_S3TagSet(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag != null) {
    const node = se_S3Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And != null) {
    const node = se_LifecycleRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
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
 * serializeAws_restXmlLifecycleRules
 */
const se_LifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_LifecycleRule(entry, context);
      return node.withName("Rule");
    });
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
 * serializeAws_restXmlMultiRegionAccessPointRoute
 */
const se_MultiRegionAccessPointRoute = (input: MultiRegionAccessPointRoute, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("MultiRegionAccessPointRoute");
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Region != null) {
    const node = __XmlNode.of("RegionName", input.Region).withName("Region");
    bodyNode.addChildNode(node);
  }
  if (input.TrafficDialPercentage != null) {
    const node = __XmlNode
      .of("TrafficDialPercentage", String(input.TrafficDialPercentage))
      .withName("TrafficDialPercentage");
    bodyNode.addChildNode(node);
  }
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
      .of("NoncurrentVersionCount", String(input.NewerNoncurrentVersions))
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
      return node.withName("NoncurrentVersionTransition");
    });
};

/**
 * serializeAws_restXmlObjectLambdaAllowedFeaturesList
 */
const se_ObjectLambdaAllowedFeaturesList = (
  input: (ObjectLambdaAllowedFeature | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ObjectLambdaAllowedFeature", entry);
      return node.withName("AllowedFeature");
    });
};

/**
 * serializeAws_restXmlObjectLambdaConfiguration
 */
const se_ObjectLambdaConfiguration = (input: ObjectLambdaConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ObjectLambdaConfiguration");
  if (input.SupportingAccessPoint != null) {
    const node = __XmlNode
      .of("ObjectLambdaSupportingAccessPointArn", input.SupportingAccessPoint)
      .withName("SupportingAccessPoint");
    bodyNode.addChildNode(node);
  }
  if (input.CloudWatchMetricsEnabled != null) {
    const node = __XmlNode.of("Boolean", String(input.CloudWatchMetricsEnabled)).withName("CloudWatchMetricsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedFeatures != null) {
    const nodes = se_ObjectLambdaAllowedFeaturesList(input.AllowedFeatures, context);
    const containerNode = new __XmlNode("AllowedFeatures");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TransformationConfigurations != null) {
    const nodes = se_ObjectLambdaTransformationConfigurationsList(input.TransformationConfigurations, context);
    const containerNode = new __XmlNode("TransformationConfigurations");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectLambdaContentTransformation
 */
const se_ObjectLambdaContentTransformation = (
  input: ObjectLambdaContentTransformation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ObjectLambdaContentTransformation");
  ObjectLambdaContentTransformation.visit(input, {
    AwsLambda: (value) => {
      const node = se_AwsLambdaTransformation(value, context).withName("AwsLambda");
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
 * serializeAws_restXmlObjectLambdaTransformationConfiguration
 */
const se_ObjectLambdaTransformationConfiguration = (
  input: ObjectLambdaTransformationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ObjectLambdaTransformationConfiguration");
  if (input.Actions != null) {
    const nodes = se_ObjectLambdaTransformationConfigurationActionsList(input.Actions, context);
    const containerNode = new __XmlNode("Actions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentTransformation != null) {
    const node = se_ObjectLambdaContentTransformation(input.ContentTransformation, context).withName(
      "ContentTransformation"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList
 */
const se_ObjectLambdaTransformationConfigurationActionsList = (
  input: (ObjectLambdaTransformationConfigurationAction | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ObjectLambdaTransformationConfigurationAction", entry);
      return node.withName("Action");
    });
};

/**
 * serializeAws_restXmlObjectLambdaTransformationConfigurationsList
 */
const se_ObjectLambdaTransformationConfigurationsList = (
  input: ObjectLambdaTransformationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_ObjectLambdaTransformationConfiguration(entry, context);
      return node.withName("TransformationConfiguration");
    });
};

/**
 * serializeAws_restXmlPrefixLevel
 */
const se_PrefixLevel = (input: PrefixLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PrefixLevel");
  if (input.StorageMetrics != null) {
    const node = se_PrefixLevelStorageMetrics(input.StorageMetrics, context).withName("StorageMetrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlPrefixLevelStorageMetrics
 */
const se_PrefixLevelStorageMetrics = (input: PrefixLevelStorageMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PrefixLevelStorageMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.SelectionCriteria != null) {
    const node = se_SelectionCriteria(input.SelectionCriteria, context).withName("SelectionCriteria");
    bodyNode.addChildNode(node);
  }
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
 * serializeAws_restXmlPutMultiRegionAccessPointPolicyInput
 */
const se_PutMultiRegionAccessPointPolicyInput = (
  input: PutMultiRegionAccessPointPolicyInput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PutMultiRegionAccessPointPolicyInput");
  if (input.Name != null) {
    const node = __XmlNode.of("MultiRegionAccessPointName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.Policy != null) {
    const node = __XmlNode.of("Policy", input.Policy).withName("Policy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRegion
 */
const se_Region = (input: Region, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Region");
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.BucketAccountId != null) {
    const node = __XmlNode.of("AccountId", input.BucketAccountId).withName("BucketAccountId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlRegionCreationList
 */
const se_RegionCreationList = (input: Region[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_Region(entry, context);
      return node.withName("Region");
    });
};

/**
 * serializeAws_restXmlRegions
 */
const se_Regions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("S3AWSRegion", entry);
      return node.withName("Region");
    });
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
    const containerNode = new __XmlNode("Rules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketIdentifierString", input.Bucket).withName("Bucket");
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
    const nodes = se_S3TagSet(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlReplicationRuleFilter
 */
const se_ReplicationRuleFilter = (input: ReplicationRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ReplicationRuleFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag != null) {
    const node = se_S3Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And != null) {
    const node = se_ReplicationRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
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
      return node.withName("Rule");
    });
};

/**
 * serializeAws_restXmlReplicationStatusFilterList
 */
const se_ReplicationStatusFilterList = (input: (ReplicationStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ReplicationStatus", entry);
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
 * serializeAws_restXmlRouteList
 */
const se_RouteList = (input: MultiRegionAccessPointRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_MultiRegionAccessPointRoute(entry, context);
      return node.withName("Route");
    });
};

/**
 * serializeAws_restXmlS3AccessControlList
 */
const se_S3AccessControlList = (input: S3AccessControlList, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlList");
  if (input.Owner != null) {
    const node = se_S3ObjectOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  if (input.Grants != null) {
    const nodes = se_S3GrantList(input.Grants, context);
    const containerNode = new __XmlNode("Grants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3AccessControlPolicy
 */
const se_S3AccessControlPolicy = (input: S3AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlPolicy");
  if (input.AccessControlList != null) {
    const node = se_S3AccessControlList(input.AccessControlList, context).withName("AccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList != null) {
    const node = __XmlNode
      .of("S3CannedAccessControlList", input.CannedAccessControlList)
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3BucketDestination
 */
const se_S3BucketDestination = (input: S3BucketDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3BucketDestination");
  if (input.Format != null) {
    const node = __XmlNode.of("Format", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSchemaVersion != null) {
    const node = __XmlNode.of("OutputSchemaVersion", input.OutputSchemaVersion).withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.AccountId != null) {
    const node = __XmlNode.of("AccountId", input.AccountId).withName("AccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Arn != null) {
    const node = __XmlNode.of("S3BucketArnString", input.Arn).withName("Arn");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption != null) {
    const node = se_StorageLensDataExportEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3CopyObjectOperation
 */
const se_S3CopyObjectOperation = (input: S3CopyObjectOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3CopyObjectOperation");
  if (input.TargetResource != null) {
    const node = __XmlNode.of("S3BucketArnString", input.TargetResource).withName("TargetResource");
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList != null) {
    const node = __XmlNode
      .of("S3CannedAccessControlList", input.CannedAccessControlList)
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlGrants != null) {
    const nodes = se_S3GrantList(input.AccessControlGrants, context);
    const containerNode = new __XmlNode("AccessControlGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.MetadataDirective != null) {
    const node = __XmlNode.of("S3MetadataDirective", input.MetadataDirective).withName("MetadataDirective");
    bodyNode.addChildNode(node);
  }
  if (input.ModifiedSinceConstraint != null) {
    const node = __XmlNode
      .of("TimeStamp", input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z")
      .withName("ModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectMetadata != null) {
    const node = se_S3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectTagging != null) {
    const nodes = se_S3TagSet(input.NewObjectTagging, context);
    const containerNode = new __XmlNode("NewObjectTagging");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.RedirectLocation != null) {
    const node = __XmlNode.of("NonEmptyMaxLength2048String", input.RedirectLocation).withName("RedirectLocation");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterPays != null) {
    const node = __XmlNode.of("Boolean", String(input.RequesterPays)).withName("RequesterPays");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass != null) {
    const node = __XmlNode.of("S3StorageClass", input.StorageClass).withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.UnModifiedSinceConstraint != null) {
    const node = __XmlNode
      .of("TimeStamp", input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z")
      .withName("UnModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAwsKmsKeyId != null) {
    const node = __XmlNode.of("KmsKeyArnString", input.SSEAwsKmsKeyId).withName("SSEAwsKmsKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.TargetKeyPrefix != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.TargetKeyPrefix).withName("TargetKeyPrefix");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockLegalHoldStatus != null) {
    const node = __XmlNode
      .of("S3ObjectLockLegalHoldStatus", input.ObjectLockLegalHoldStatus)
      .withName("ObjectLockLegalHoldStatus");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockMode != null) {
    const node = __XmlNode.of("S3ObjectLockMode", input.ObjectLockMode).withName("ObjectLockMode");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockRetainUntilDate != null) {
    const node = __XmlNode
      .of("TimeStamp", input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z")
      .withName("ObjectLockRetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.BucketKeyEnabled != null) {
    const node = __XmlNode.of("Boolean", String(input.BucketKeyEnabled)).withName("BucketKeyEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.ChecksumAlgorithm != null) {
    const node = __XmlNode.of("S3ChecksumAlgorithm", input.ChecksumAlgorithm).withName("ChecksumAlgorithm");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3DeleteObjectTaggingOperation
 */
const se_S3DeleteObjectTaggingOperation = (input: S3DeleteObjectTaggingOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3DeleteObjectTaggingOperation");
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Grant
 */
const se_S3Grant = (input: S3Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grant");
  if (input.Grantee != null) {
    const node = se_S3Grantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("S3Permission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Grantee
 */
const se_S3Grantee = (input: S3Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grantee");
  if (input.TypeIdentifier != null) {
    const node = __XmlNode.of("S3GranteeTypeIdentifier", input.TypeIdentifier).withName("TypeIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.Identifier != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.Identifier).withName("Identifier");
    bodyNode.addChildNode(node);
  }
  if (input.DisplayName != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.DisplayName).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3GrantList
 */
const se_S3GrantList = (input: S3Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_S3Grant(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlS3InitiateRestoreObjectOperation
 */
const se_S3InitiateRestoreObjectOperation = (input: S3InitiateRestoreObjectOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
  if (input.ExpirationInDays != null) {
    const node = __XmlNode.of("S3ExpirationInDays", String(input.ExpirationInDays)).withName("ExpirationInDays");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobTier != null) {
    const node = __XmlNode.of("S3GlacierJobTier", input.GlacierJobTier).withName("GlacierJobTier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3JobManifestGenerator
 */
const se_S3JobManifestGenerator = (input: S3JobManifestGenerator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3JobManifestGenerator");
  if (input.ExpectedBucketOwner != null) {
    const node = __XmlNode.of("AccountId", input.ExpectedBucketOwner).withName("ExpectedBucketOwner");
    bodyNode.addChildNode(node);
  }
  if (input.SourceBucket != null) {
    const node = __XmlNode.of("S3BucketArnString", input.SourceBucket).withName("SourceBucket");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestOutputLocation != null) {
    const node = se_S3ManifestOutputLocation(input.ManifestOutputLocation, context).withName("ManifestOutputLocation");
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = se_JobManifestGeneratorFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.EnableManifestOutput != null) {
    const node = __XmlNode.of("Boolean", String(input.EnableManifestOutput)).withName("EnableManifestOutput");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3ManifestOutputLocation
 */
const se_S3ManifestOutputLocation = (input: S3ManifestOutputLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ManifestOutputLocation");
  if (input.ExpectedManifestBucketOwner != null) {
    const node = __XmlNode.of("AccountId", input.ExpectedManifestBucketOwner).withName("ExpectedManifestBucketOwner");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket != null) {
    const node = __XmlNode.of("S3BucketArnString", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestPrefix != null) {
    const node = __XmlNode.of("ManifestPrefixString", input.ManifestPrefix).withName("ManifestPrefix");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestEncryption != null) {
    const node = se_GeneratedManifestEncryption(input.ManifestEncryption, context).withName("ManifestEncryption");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestFormat != null) {
    const node = __XmlNode.of("GeneratedManifestFormat", input.ManifestFormat).withName("ManifestFormat");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3ObjectLockLegalHold
 */
const se_S3ObjectLockLegalHold = (input: S3ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectLockLegalHold");
  if (input.Status != null) {
    const node = __XmlNode.of("S3ObjectLockLegalHoldStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3ObjectMetadata
 */
const se_S3ObjectMetadata = (input: S3ObjectMetadata, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectMetadata");
  if (input.CacheControl != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.CacheControl).withName("CacheControl");
    bodyNode.addChildNode(node);
  }
  if (input.ContentDisposition != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ContentDisposition).withName("ContentDisposition");
    bodyNode.addChildNode(node);
  }
  if (input.ContentEncoding != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ContentEncoding).withName("ContentEncoding");
    bodyNode.addChildNode(node);
  }
  if (input.ContentLanguage != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ContentLanguage).withName("ContentLanguage");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata != null) {
    const nodes = se_S3UserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentLength != null) {
    const node = __XmlNode.of("S3ContentLength", String(input.ContentLength)).withName("ContentLength");
    bodyNode.addChildNode(node);
  }
  if (input.ContentMD5 != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ContentMD5).withName("ContentMD5");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ContentType).withName("ContentType");
    bodyNode.addChildNode(node);
  }
  if (input.HttpExpiresDate != null) {
    const node = __XmlNode
      .of("TimeStamp", input.HttpExpiresDate.toISOString().split(".")[0] + "Z")
      .withName("HttpExpiresDate");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterCharged != null) {
    const node = __XmlNode.of("Boolean", String(input.RequesterCharged)).withName("RequesterCharged");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAlgorithm != null) {
    const node = __XmlNode.of("S3SSEAlgorithm", input.SSEAlgorithm).withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3ObjectOwner
 */
const se_S3ObjectOwner = (input: S3ObjectOwner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectOwner");
  if (input.ID != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.ID).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.DisplayName != null) {
    const node = __XmlNode.of("NonEmptyMaxLength1024String", input.DisplayName).withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3ReplicateObjectOperation
 */
const se_S3ReplicateObjectOperation = (input: S3ReplicateObjectOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ReplicateObjectOperation");
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Retention
 */
const se_S3Retention = (input: S3Retention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Retention");
  if (input.RetainUntilDate != null) {
    const node = __XmlNode
      .of("TimeStamp", input.RetainUntilDate.toISOString().split(".")[0] + "Z")
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.Mode != null) {
    const node = __XmlNode.of("S3ObjectLockRetentionMode", input.Mode).withName("Mode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3SetObjectAclOperation
 */
const se_S3SetObjectAclOperation = (input: S3SetObjectAclOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy != null) {
    const node = se_S3AccessControlPolicy(input.AccessControlPolicy, context).withName("AccessControlPolicy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3SetObjectLegalHoldOperation
 */
const se_S3SetObjectLegalHoldOperation = (input: S3SetObjectLegalHoldOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectLegalHoldOperation");
  if (input.LegalHold != null) {
    const node = se_S3ObjectLockLegalHold(input.LegalHold, context).withName("LegalHold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3SetObjectRetentionOperation
 */
const se_S3SetObjectRetentionOperation = (input: S3SetObjectRetentionOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectRetentionOperation");
  if (input.BypassGovernanceRetention != null) {
    const node = __XmlNode.of("Boolean", String(input.BypassGovernanceRetention)).withName("BypassGovernanceRetention");
    bodyNode.addChildNode(node);
  }
  if (input.Retention != null) {
    const node = se_S3Retention(input.Retention, context).withName("Retention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3SetObjectTaggingOperation
 */
const se_S3SetObjectTaggingOperation = (input: S3SetObjectTaggingOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectTaggingOperation");
  if (input.TagSet != null) {
    const nodes = se_S3TagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3Tag
 */
const se_S3Tag = (input: S3Tag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Tag");
  if (input.Key != null) {
    const node = __XmlNode.of("TagKeyString", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("TagValueString", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlS3TagSet
 */
const se_S3TagSet = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_S3Tag(entry, context);
      return node.withName("member");
    });
};

/**
 * serializeAws_restXmlS3UserMetadata
 */
const se_S3UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = __XmlNode.of("NonEmptyMaxLength1024String", key).withName("key");
      entryNode.addChildNode(keyNode);
      let node;
      node = __XmlNode.of("MaxLength1024String", input[key]);
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

/**
 * serializeAws_restXmlSelectionCriteria
 */
const se_SelectionCriteria = (input: SelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectionCriteria");
  if (input.Delimiter != null) {
    const node = __XmlNode.of("StorageLensPrefixLevelDelimiter", input.Delimiter).withName("Delimiter");
    bodyNode.addChildNode(node);
  }
  if (input.MaxDepth != null) {
    const node = __XmlNode.of("StorageLensPrefixLevelMaxDepth", String(input.MaxDepth)).withName("MaxDepth");
    bodyNode.addChildNode(node);
  }
  if (input.MinStorageBytesPercentage != null) {
    const node = __XmlNode
      .of("MinStorageBytesPercentage", String(input.MinStorageBytesPercentage))
      .withName("MinStorageBytesPercentage");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
 * serializeAws_restXmlSSEKMSEncryption
 */
const se_SSEKMSEncryption = (input: SSEKMSEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId != null) {
    const node = __XmlNode.of("KmsKeyArnString", input.KeyId).withName("KeyId");
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
 * serializeAws_restXmlSSES3Encryption
 */
const se_SSES3Encryption = (input: SSES3Encryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageLensAwsOrg
 */
const se_StorageLensAwsOrg = (input: StorageLensAwsOrg, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensAwsOrg");
  if (input.Arn != null) {
    const node = __XmlNode.of("AwsOrgArn", input.Arn).withName("Arn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageLensConfiguration
 */
const se_StorageLensConfiguration = (input: StorageLensConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("ConfigId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.AccountLevel != null) {
    const node = se_AccountLevel(input.AccountLevel, context).withName("AccountLevel");
    bodyNode.addChildNode(node);
  }
  if (input.Include != null) {
    const node = se_Include(input.Include, context).withName("Include");
    bodyNode.addChildNode(node);
  }
  if (input.Exclude != null) {
    const node = se__Exclude(input.Exclude, context).withName("Exclude");
    bodyNode.addChildNode(node);
  }
  if (input.DataExport != null) {
    const node = se_StorageLensDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.AwsOrg != null) {
    const node = se_StorageLensAwsOrg(input.AwsOrg, context).withName("AwsOrg");
    bodyNode.addChildNode(node);
  }
  if (input.StorageLensArn != null) {
    const node = __XmlNode.of("StorageLensArn", input.StorageLensArn).withName("StorageLensArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageLensDataExport
 */
const se_StorageLensDataExport = (input: StorageLensDataExport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensDataExport");
  if (input.S3BucketDestination != null) {
    const node = se_S3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
    bodyNode.addChildNode(node);
  }
  if (input.CloudWatchMetrics != null) {
    const node = se_CloudWatchMetrics(input.CloudWatchMetrics, context).withName("CloudWatchMetrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageLensDataExportEncryption
 */
const se_StorageLensDataExportEncryption = (input: StorageLensDataExportEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensDataExportEncryption");
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
 * serializeAws_restXmlStorageLensTag
 */
const se_StorageLensTag = (input: StorageLensTag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensTag");
  if (input.Key != null) {
    const node = __XmlNode.of("TagKeyString", input.Key).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value != null) {
    const node = __XmlNode.of("TagValueString", input.Value).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlStorageLensTags
 */
const se_StorageLensTags = (input: StorageLensTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = se_StorageLensTag(entry, context);
      return node.withName("Tag");
    });
};

/**
 * serializeAws_restXmlTagging
 */
const se_Tagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet != null) {
    const nodes = se_S3TagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

/**
 * serializeAws_restXmlTransition
 */
const se_Transition = (input: Transition, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Transition");
  if (input.Date != null) {
    const node = __XmlNode.of("Date", input.Date.toISOString().split(".")[0] + "Z").withName("Date");
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
      return node.withName("Transition");
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
 * serializeAws_restXmlVpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId != null) {
    const node = __XmlNode.of("VpcId", input.VpcId).withName("VpcId");
    bodyNode.addChildNode(node);
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
 * deserializeAws_restXmlAccessPoint
 */
const de_AccessPoint = (output: any, context: __SerdeContext): AccessPoint => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = __expectString(output["NetworkOrigin"]);
  }
  if (output["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = de_VpcConfiguration(output["VpcConfiguration"], context);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(output["AccessPointArn"]);
  }
  if (output["Alias"] !== undefined) {
    contents.Alias = __expectString(output["Alias"]);
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = __expectString(output["BucketAccountId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAccessPointList
 */
const de_AccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPoint(entry, context);
    });
};

/**
 * deserializeAws_restXmlAccountLevel
 */
const de_AccountLevel = (output: any, context: __SerdeContext): AccountLevel => {
  const contents: any = {};
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = de_ActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["BucketLevel"] !== undefined) {
    contents.BucketLevel = de_BucketLevel(output["BucketLevel"], context);
  }
  if (output["AdvancedCostOptimizationMetrics"] !== undefined) {
    contents.AdvancedCostOptimizationMetrics = de_AdvancedCostOptimizationMetrics(
      output["AdvancedCostOptimizationMetrics"],
      context
    );
  }
  if (output["AdvancedDataProtectionMetrics"] !== undefined) {
    contents.AdvancedDataProtectionMetrics = de_AdvancedDataProtectionMetrics(
      output["AdvancedDataProtectionMetrics"],
      context
    );
  }
  if (output["DetailedStatusCodesMetrics"] !== undefined) {
    contents.DetailedStatusCodesMetrics = de_DetailedStatusCodesMetrics(output["DetailedStatusCodesMetrics"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlActivityMetrics
 */
const de_ActivityMetrics = (output: any, context: __SerdeContext): ActivityMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAdvancedCostOptimizationMetrics
 */
const de_AdvancedCostOptimizationMetrics = (output: any, context: __SerdeContext): AdvancedCostOptimizationMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAdvancedDataProtectionMetrics
 */
const de_AdvancedDataProtectionMetrics = (output: any, context: __SerdeContext): AdvancedDataProtectionMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncErrorDetails
 */
const de_AsyncErrorDetails = (output: any, context: __SerdeContext): AsyncErrorDetails => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Resource"] !== undefined) {
    contents.Resource = __expectString(output["Resource"]);
  }
  if (output["RequestId"] !== undefined) {
    contents.RequestId = __expectString(output["RequestId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncOperation
 */
const de_AsyncOperation = (output: any, context: __SerdeContext): AsyncOperation => {
  const contents: any = {};
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = __expectString(output["Operation"]);
  }
  if (output["RequestTokenARN"] !== undefined) {
    contents.RequestTokenARN = __expectString(output["RequestTokenARN"]);
  }
  if (output["RequestParameters"] !== undefined) {
    contents.RequestParameters = de_AsyncRequestParameters(output["RequestParameters"], context);
  }
  if (output["RequestStatus"] !== undefined) {
    contents.RequestStatus = __expectString(output["RequestStatus"]);
  }
  if (output["ResponseDetails"] !== undefined) {
    contents.ResponseDetails = de_AsyncResponseDetails(output["ResponseDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncRequestParameters
 */
const de_AsyncRequestParameters = (output: any, context: __SerdeContext): AsyncRequestParameters => {
  const contents: any = {};
  if (output["CreateMultiRegionAccessPointRequest"] !== undefined) {
    contents.CreateMultiRegionAccessPointRequest = de_CreateMultiRegionAccessPointInput(
      output["CreateMultiRegionAccessPointRequest"],
      context
    );
  }
  if (output["DeleteMultiRegionAccessPointRequest"] !== undefined) {
    contents.DeleteMultiRegionAccessPointRequest = de_DeleteMultiRegionAccessPointInput(
      output["DeleteMultiRegionAccessPointRequest"],
      context
    );
  }
  if (output["PutMultiRegionAccessPointPolicyRequest"] !== undefined) {
    contents.PutMultiRegionAccessPointPolicyRequest = de_PutMultiRegionAccessPointPolicyInput(
      output["PutMultiRegionAccessPointPolicyRequest"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlAsyncResponseDetails
 */
const de_AsyncResponseDetails = (output: any, context: __SerdeContext): AsyncResponseDetails => {
  const contents: any = {};
  if (output["MultiRegionAccessPointDetails"] !== undefined) {
    contents.MultiRegionAccessPointDetails = de_MultiRegionAccessPointsAsyncResponse(
      output["MultiRegionAccessPointDetails"],
      context
    );
  }
  if (output["ErrorDetails"] !== undefined) {
    contents.ErrorDetails = de_AsyncErrorDetails(output["ErrorDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlAwsLambdaTransformation
 */
const de_AwsLambdaTransformation = (output: any, context: __SerdeContext): AwsLambdaTransformation => {
  const contents: any = {};
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  if (output["FunctionPayload"] !== undefined) {
    contents.FunctionPayload = __expectString(output["FunctionPayload"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBucketLevel
 */
const de_BucketLevel = (output: any, context: __SerdeContext): BucketLevel => {
  const contents: any = {};
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = de_ActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["PrefixLevel"] !== undefined) {
    contents.PrefixLevel = de_PrefixLevel(output["PrefixLevel"], context);
  }
  if (output["AdvancedCostOptimizationMetrics"] !== undefined) {
    contents.AdvancedCostOptimizationMetrics = de_AdvancedCostOptimizationMetrics(
      output["AdvancedCostOptimizationMetrics"],
      context
    );
  }
  if (output["AdvancedDataProtectionMetrics"] !== undefined) {
    contents.AdvancedDataProtectionMetrics = de_AdvancedDataProtectionMetrics(
      output["AdvancedDataProtectionMetrics"],
      context
    );
  }
  if (output["DetailedStatusCodesMetrics"] !== undefined) {
    contents.DetailedStatusCodesMetrics = de_DetailedStatusCodesMetrics(output["DetailedStatusCodesMetrics"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlBuckets
 */
const de_Buckets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlCloudWatchMetrics
 */
const de_CloudWatchMetrics = (output: any, context: __SerdeContext): CloudWatchMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlCreateMultiRegionAccessPointInput
 */
const de_CreateMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): CreateMultiRegionAccessPointInput => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["PublicAccessBlock"] !== undefined) {
    contents.PublicAccessBlock = de_PublicAccessBlockConfiguration(output["PublicAccessBlock"], context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_RegionCreationList(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
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
 * deserializeAws_restXmlDeleteMultiRegionAccessPointInput
 */
const de_DeleteMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): DeleteMultiRegionAccessPointInput => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDestination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  const contents: any = {};
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["ReplicationTime"] !== undefined) {
    contents.ReplicationTime = de_ReplicationTime(output["ReplicationTime"], context);
  }
  if (output["AccessControlTranslation"] !== undefined) {
    contents.AccessControlTranslation = de_AccessControlTranslation(output["AccessControlTranslation"], context);
  }
  if (output["EncryptionConfiguration"] !== undefined) {
    contents.EncryptionConfiguration = de_EncryptionConfiguration(output["EncryptionConfiguration"], context);
  }
  if (output["Metrics"] !== undefined) {
    contents.Metrics = de_Metrics(output["Metrics"], context);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlDetailedStatusCodesMetrics
 */
const de_DetailedStatusCodesMetrics = (output: any, context: __SerdeContext): DetailedStatusCodesMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
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
 * deserializeAws_restXmlEndpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlEstablishedMultiRegionAccessPointPolicy
 */
const de_EstablishedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): EstablishedMultiRegionAccessPointPolicy => {
  const contents: any = {};
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  return contents;
};

/**
 * deserializeAws_restXml_Exclude
 */
const de__Exclude = (output: any, context: __SerdeContext): _Exclude => {
  const contents: any = {};
  if (output.Buckets === "") {
    contents.Buckets = [];
  } else if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = de_Buckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_Regions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
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
 * deserializeAws_restXmlGeneratedManifestEncryption
 */
const de_GeneratedManifestEncryption = (output: any, context: __SerdeContext): GeneratedManifestEncryption => {
  const contents: any = {};
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = de_SSES3Encryption(output["SSE-S3"], context);
  }
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = de_SSEKMSEncryption(output["SSE-KMS"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlInclude
 */
const de_Include = (output: any, context: __SerdeContext): Include => {
  const contents: any = {};
  if (output.Buckets === "") {
    contents.Buckets = [];
  } else if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = de_Buckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_Regions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobDescriptor
 */
const de_JobDescriptor = (output: any, context: __SerdeContext): JobDescriptor => {
  const contents: any = {};
  if (output["JobId"] !== undefined) {
    contents.JobId = __expectString(output["JobId"]);
  }
  if (output["ConfirmationRequired"] !== undefined) {
    contents.ConfirmationRequired = __parseBoolean(output["ConfirmationRequired"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["JobArn"] !== undefined) {
    contents.JobArn = __expectString(output["JobArn"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Manifest"] !== undefined) {
    contents.Manifest = de_JobManifest(output["Manifest"], context);
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = de_JobOperation(output["Operation"], context);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = de_JobProgressSummary(output["ProgressSummary"], context);
  }
  if (output["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = __expectString(output["StatusUpdateReason"]);
  }
  if (output.FailureReasons === "") {
    contents.FailureReasons = [];
  } else if (output["FailureReasons"] !== undefined && output["FailureReasons"]["member"] !== undefined) {
    contents.FailureReasons = de_JobFailureList(__getArrayIfSingleItem(output["FailureReasons"]["member"]), context);
  }
  if (output["Report"] !== undefined) {
    contents.Report = de_JobReport(output["Report"], context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TerminationDate"]));
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["SuspendedDate"] !== undefined) {
    contents.SuspendedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["SuspendedDate"]));
  }
  if (output["SuspendedCause"] !== undefined) {
    contents.SuspendedCause = __expectString(output["SuspendedCause"]);
  }
  if (output.ManifestGenerator === "") {
    // Pass empty tags.
  } else if (output["ManifestGenerator"] !== undefined) {
    contents.ManifestGenerator = de_JobManifestGenerator(__expectUnion(output["ManifestGenerator"]), context);
  }
  if (output["GeneratedManifestDescriptor"] !== undefined) {
    contents.GeneratedManifestDescriptor = de_S3GeneratedManifestDescriptor(
      output["GeneratedManifestDescriptor"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobFailure
 */
const de_JobFailure = (output: any, context: __SerdeContext): JobFailure => {
  const contents: any = {};
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = __expectString(output["FailureCode"]);
  }
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = __expectString(output["FailureReason"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobFailureList
 */
const de_JobFailureList = (output: any, context: __SerdeContext): JobFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobFailure(entry, context);
    });
};

/**
 * deserializeAws_restXmlJobListDescriptor
 */
const de_JobListDescriptor = (output: any, context: __SerdeContext): JobListDescriptor => {
  const contents: any = {};
  if (output["JobId"] !== undefined) {
    contents.JobId = __expectString(output["JobId"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = __expectString(output["Operation"]);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationTime"]));
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["TerminationDate"]));
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = de_JobProgressSummary(output["ProgressSummary"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobListDescriptorList
 */
const de_JobListDescriptorList = (output: any, context: __SerdeContext): JobListDescriptor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobListDescriptor(entry, context);
    });
};

/**
 * deserializeAws_restXmlJobManifest
 */
const de_JobManifest = (output: any, context: __SerdeContext): JobManifest => {
  const contents: any = {};
  if (output["Spec"] !== undefined) {
    contents.Spec = de_JobManifestSpec(output["Spec"], context);
  }
  if (output["Location"] !== undefined) {
    contents.Location = de_JobManifestLocation(output["Location"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestFieldList
 */
const de_JobManifestFieldList = (output: any, context: __SerdeContext): (JobManifestFieldName | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlJobManifestGenerator
 */
const de_JobManifestGenerator = (output: any, context: __SerdeContext): JobManifestGenerator => {
  if (output["S3JobManifestGenerator"] !== undefined) {
    return {
      S3JobManifestGenerator: de_S3JobManifestGenerator(output["S3JobManifestGenerator"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlJobManifestGeneratorFilter
 */
const de_JobManifestGeneratorFilter = (output: any, context: __SerdeContext): JobManifestGeneratorFilter => {
  const contents: any = {};
  if (output["EligibleForReplication"] !== undefined) {
    contents.EligibleForReplication = __parseBoolean(output["EligibleForReplication"]);
  }
  if (output["CreatedAfter"] !== undefined) {
    contents.CreatedAfter = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedAfter"]));
  }
  if (output["CreatedBefore"] !== undefined) {
    contents.CreatedBefore = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedBefore"]));
  }
  if (output.ObjectReplicationStatuses === "") {
    contents.ObjectReplicationStatuses = [];
  } else if (
    output["ObjectReplicationStatuses"] !== undefined &&
    output["ObjectReplicationStatuses"]["member"] !== undefined
  ) {
    contents.ObjectReplicationStatuses = de_ReplicationStatusFilterList(
      __getArrayIfSingleItem(output["ObjectReplicationStatuses"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestLocation
 */
const de_JobManifestLocation = (output: any, context: __SerdeContext): JobManifestLocation => {
  const contents: any = {};
  if (output["ObjectArn"] !== undefined) {
    contents.ObjectArn = __expectString(output["ObjectArn"]);
  }
  if (output["ObjectVersionId"] !== undefined) {
    contents.ObjectVersionId = __expectString(output["ObjectVersionId"]);
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = __expectString(output["ETag"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobManifestSpec
 */
const de_JobManifestSpec = (output: any, context: __SerdeContext): JobManifestSpec => {
  const contents: any = {};
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output.Fields === "") {
    contents.Fields = [];
  } else if (output["Fields"] !== undefined && output["Fields"]["member"] !== undefined) {
    contents.Fields = de_JobManifestFieldList(__getArrayIfSingleItem(output["Fields"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobOperation
 */
const de_JobOperation = (output: any, context: __SerdeContext): JobOperation => {
  const contents: any = {};
  if (output["LambdaInvoke"] !== undefined) {
    contents.LambdaInvoke = de_LambdaInvokeOperation(output["LambdaInvoke"], context);
  }
  if (output["S3PutObjectCopy"] !== undefined) {
    contents.S3PutObjectCopy = de_S3CopyObjectOperation(output["S3PutObjectCopy"], context);
  }
  if (output["S3PutObjectAcl"] !== undefined) {
    contents.S3PutObjectAcl = de_S3SetObjectAclOperation(output["S3PutObjectAcl"], context);
  }
  if (output["S3PutObjectTagging"] !== undefined) {
    contents.S3PutObjectTagging = de_S3SetObjectTaggingOperation(output["S3PutObjectTagging"], context);
  }
  if (output["S3DeleteObjectTagging"] !== undefined) {
    contents.S3DeleteObjectTagging = de_S3DeleteObjectTaggingOperation(output["S3DeleteObjectTagging"], context);
  }
  if (output["S3InitiateRestoreObject"] !== undefined) {
    contents.S3InitiateRestoreObject = de_S3InitiateRestoreObjectOperation(output["S3InitiateRestoreObject"], context);
  }
  if (output["S3PutObjectLegalHold"] !== undefined) {
    contents.S3PutObjectLegalHold = de_S3SetObjectLegalHoldOperation(output["S3PutObjectLegalHold"], context);
  }
  if (output["S3PutObjectRetention"] !== undefined) {
    contents.S3PutObjectRetention = de_S3SetObjectRetentionOperation(output["S3PutObjectRetention"], context);
  }
  if (output["S3ReplicateObject"] !== undefined) {
    contents.S3ReplicateObject = de_S3ReplicateObjectOperation(output["S3ReplicateObject"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobProgressSummary
 */
const de_JobProgressSummary = (output: any, context: __SerdeContext): JobProgressSummary => {
  const contents: any = {};
  if (output["TotalNumberOfTasks"] !== undefined) {
    contents.TotalNumberOfTasks = __strictParseLong(output["TotalNumberOfTasks"]) as number;
  }
  if (output["NumberOfTasksSucceeded"] !== undefined) {
    contents.NumberOfTasksSucceeded = __strictParseLong(output["NumberOfTasksSucceeded"]) as number;
  }
  if (output["NumberOfTasksFailed"] !== undefined) {
    contents.NumberOfTasksFailed = __strictParseLong(output["NumberOfTasksFailed"]) as number;
  }
  if (output["Timers"] !== undefined) {
    contents.Timers = de_JobTimers(output["Timers"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobReport
 */
const de_JobReport = (output: any, context: __SerdeContext): JobReport => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["ReportScope"] !== undefined) {
    contents.ReportScope = __expectString(output["ReportScope"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlJobTimers
 */
const de_JobTimers = (output: any, context: __SerdeContext): JobTimers => {
  const contents: any = {};
  if (output["ElapsedTimeInActiveSeconds"] !== undefined) {
    contents.ElapsedTimeInActiveSeconds = __strictParseLong(output["ElapsedTimeInActiveSeconds"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlLambdaInvokeOperation
 */
const de_LambdaInvokeOperation = (output: any, context: __SerdeContext): LambdaInvokeOperation => {
  const contents: any = {};
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  return contents;
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
  if (output["Filter"] !== undefined) {
    contents.Filter = de_LifecycleRuleFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Transitions === "") {
    contents.Transitions = [];
  } else if (output["Transitions"] !== undefined && output["Transitions"]["Transition"] !== undefined) {
    contents.Transitions = de_TransitionList(__getArrayIfSingleItem(output["Transitions"]["Transition"]), context);
  }
  if (output.NoncurrentVersionTransitions === "") {
    contents.NoncurrentVersionTransitions = [];
  } else if (
    output["NoncurrentVersionTransitions"] !== undefined &&
    output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"] !== undefined
  ) {
    contents.NoncurrentVersionTransitions = de_NoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"]),
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_S3TagSet(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = de_S3Tag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = de_LifecycleRuleAndOperator(output["And"], context);
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
 * deserializeAws_restXmlListStorageLensConfigurationEntry
 */
const de_ListStorageLensConfigurationEntry = (
  output: any,
  context: __SerdeContext
): ListStorageLensConfigurationEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["StorageLensArn"] !== undefined) {
    contents.StorageLensArn = __expectString(output["StorageLensArn"]);
  }
  if (output["HomeRegion"] !== undefined) {
    contents.HomeRegion = __expectString(output["HomeRegion"]);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
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
 * deserializeAws_restXmlMultiRegionAccessPointPolicyDocument
 */
const de_MultiRegionAccessPointPolicyDocument = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointPolicyDocument => {
  const contents: any = {};
  if (output["Established"] !== undefined) {
    contents.Established = de_EstablishedMultiRegionAccessPointPolicy(output["Established"], context);
  }
  if (output["Proposed"] !== undefined) {
    contents.Proposed = de_ProposedMultiRegionAccessPointPolicy(output["Proposed"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRegionalResponse
 */
const de_MultiRegionAccessPointRegionalResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["RequestStatus"] !== undefined) {
    contents.RequestStatus = __expectString(output["RequestStatus"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRegionalResponseList
 */
const de_MultiRegionAccessPointRegionalResponseList = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointRegionalResponse(entry, context);
    });
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointReport
 */
const de_MultiRegionAccessPointReport = (output: any, context: __SerdeContext): MultiRegionAccessPointReport => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Alias"] !== undefined) {
    contents.Alias = __expectString(output["Alias"]);
  }
  if (output["CreatedAt"] !== undefined) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedAt"]));
  }
  if (output["PublicAccessBlock"] !== undefined) {
    contents.PublicAccessBlock = de_PublicAccessBlockConfiguration(output["PublicAccessBlock"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_RegionReportList(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointReportList
 */
const de_MultiRegionAccessPointReportList = (output: any, context: __SerdeContext): MultiRegionAccessPointReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointReport(entry, context);
    });
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointRoute
 */
const de_MultiRegionAccessPointRoute = (output: any, context: __SerdeContext): MultiRegionAccessPointRoute => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["TrafficDialPercentage"] !== undefined) {
    contents.TrafficDialPercentage = __strictParseInt32(output["TrafficDialPercentage"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_restXmlMultiRegionAccessPointsAsyncResponse
 */
const de_MultiRegionAccessPointsAsyncResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointsAsyncResponse => {
  const contents: any = {};
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = de_MultiRegionAccessPointRegionalResponseList(
      __getArrayIfSingleItem(output["Regions"]["Region"]),
      context
    );
  }
  return contents;
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
 * deserializeAws_restXmlObjectLambdaAccessPoint
 */
const de_ObjectLambdaAccessPoint = (output: any, context: __SerdeContext): ObjectLambdaAccessPoint => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["ObjectLambdaAccessPointArn"] !== undefined) {
    contents.ObjectLambdaAccessPointArn = __expectString(output["ObjectLambdaAccessPointArn"]);
  }
  if (output["Alias"] !== undefined) {
    contents.Alias = de_ObjectLambdaAccessPointAlias(output["Alias"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaAccessPointAlias
 */
const de_ObjectLambdaAccessPointAlias = (output: any, context: __SerdeContext): ObjectLambdaAccessPointAlias => {
  const contents: any = {};
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaAccessPointList
 */
const de_ObjectLambdaAccessPointList = (output: any, context: __SerdeContext): ObjectLambdaAccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectLambdaAccessPoint(entry, context);
    });
};

/**
 * deserializeAws_restXmlObjectLambdaAllowedFeaturesList
 */
const de_ObjectLambdaAllowedFeaturesList = (
  output: any,
  context: __SerdeContext
): (ObjectLambdaAllowedFeature | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlObjectLambdaConfiguration
 */
const de_ObjectLambdaConfiguration = (output: any, context: __SerdeContext): ObjectLambdaConfiguration => {
  const contents: any = {};
  if (output["SupportingAccessPoint"] !== undefined) {
    contents.SupportingAccessPoint = __expectString(output["SupportingAccessPoint"]);
  }
  if (output["CloudWatchMetricsEnabled"] !== undefined) {
    contents.CloudWatchMetricsEnabled = __parseBoolean(output["CloudWatchMetricsEnabled"]);
  }
  if (output.AllowedFeatures === "") {
    contents.AllowedFeatures = [];
  } else if (output["AllowedFeatures"] !== undefined && output["AllowedFeatures"]["AllowedFeature"] !== undefined) {
    contents.AllowedFeatures = de_ObjectLambdaAllowedFeaturesList(
      __getArrayIfSingleItem(output["AllowedFeatures"]["AllowedFeature"]),
      context
    );
  }
  if (output.TransformationConfigurations === "") {
    contents.TransformationConfigurations = [];
  } else if (
    output["TransformationConfigurations"] !== undefined &&
    output["TransformationConfigurations"]["TransformationConfiguration"] !== undefined
  ) {
    contents.TransformationConfigurations = de_ObjectLambdaTransformationConfigurationsList(
      __getArrayIfSingleItem(output["TransformationConfigurations"]["TransformationConfiguration"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaContentTransformation
 */
const de_ObjectLambdaContentTransformation = (
  output: any,
  context: __SerdeContext
): ObjectLambdaContentTransformation => {
  if (output["AwsLambda"] !== undefined) {
    return {
      AwsLambda: de_AwsLambdaTransformation(output["AwsLambda"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfiguration
 */
const de_ObjectLambdaTransformationConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration => {
  const contents: any = {};
  if (output.Actions === "") {
    contents.Actions = [];
  } else if (output["Actions"] !== undefined && output["Actions"]["Action"] !== undefined) {
    contents.Actions = de_ObjectLambdaTransformationConfigurationActionsList(
      __getArrayIfSingleItem(output["Actions"]["Action"]),
      context
    );
  }
  if (output.ContentTransformation === "") {
    // Pass empty tags.
  } else if (output["ContentTransformation"] !== undefined) {
    contents.ContentTransformation = de_ObjectLambdaContentTransformation(
      __expectUnion(output["ContentTransformation"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList
 */
const de_ObjectLambdaTransformationConfigurationActionsList = (
  output: any,
  context: __SerdeContext
): (ObjectLambdaTransformationConfigurationAction | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_restXmlObjectLambdaTransformationConfigurationsList
 */
const de_ObjectLambdaTransformationConfigurationsList = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ObjectLambdaTransformationConfiguration(entry, context);
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
 * deserializeAws_restXmlPrefixLevel
 */
const de_PrefixLevel = (output: any, context: __SerdeContext): PrefixLevel => {
  const contents: any = {};
  if (output["StorageMetrics"] !== undefined) {
    contents.StorageMetrics = de_PrefixLevelStorageMetrics(output["StorageMetrics"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlPrefixLevelStorageMetrics
 */
const de_PrefixLevelStorageMetrics = (output: any, context: __SerdeContext): PrefixLevelStorageMetrics => {
  const contents: any = {};
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["SelectionCriteria"] !== undefined) {
    contents.SelectionCriteria = de_SelectionCriteria(output["SelectionCriteria"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlProposedMultiRegionAccessPointPolicy
 */
const de_ProposedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): ProposedMultiRegionAccessPointPolicy => {
  const contents: any = {};
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
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
 * deserializeAws_restXmlPutMultiRegionAccessPointPolicyInput
 */
const de_PutMultiRegionAccessPointPolicyInput = (
  output: any,
  context: __SerdeContext
): PutMultiRegionAccessPointPolicyInput => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegion
 */
const de_Region = (output: any, context: __SerdeContext): Region => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = __expectString(output["BucketAccountId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionalBucket
 */
const de_RegionalBucket = (output: any, context: __SerdeContext): RegionalBucket => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["BucketArn"] !== undefined) {
    contents.BucketArn = __expectString(output["BucketArn"]);
  }
  if (output["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = __parseBoolean(output["PublicAccessBlockEnabled"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationDate"]));
  }
  if (output["OutpostId"] !== undefined) {
    contents.OutpostId = __expectString(output["OutpostId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionalBucketList
 */
const de_RegionalBucketList = (output: any, context: __SerdeContext): RegionalBucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionalBucket(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegionCreationList
 */
const de_RegionCreationList = (output: any, context: __SerdeContext): Region[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Region(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegionReport
 */
const de_RegionReport = (output: any, context: __SerdeContext): RegionReport => {
  const contents: any = {};
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["BucketAccountId"] !== undefined) {
    contents.BucketAccountId = __expectString(output["BucketAccountId"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlRegionReportList
 */
const de_RegionReportList = (output: any, context: __SerdeContext): RegionReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionReport(entry, context);
    });
};

/**
 * deserializeAws_restXmlRegions
 */
const de_Regions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
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
  if (output.Rules === "") {
    contents.Rules = [];
  } else if (output["Rules"] !== undefined && output["Rules"]["Rule"] !== undefined) {
    contents.Rules = de_ReplicationRules(__getArrayIfSingleItem(output["Rules"]["Rule"]), context);
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
  if (output["Filter"] !== undefined) {
    contents.Filter = de_ReplicationRuleFilter(output["Filter"], context);
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
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_S3TagSet(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlReplicationRuleFilter
 */
const de_ReplicationRuleFilter = (output: any, context: __SerdeContext): ReplicationRuleFilter => {
  const contents: any = {};
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = de_S3Tag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = de_ReplicationRuleAndOperator(output["And"], context);
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
 * deserializeAws_restXmlReplicationStatusFilterList
 */
const de_ReplicationStatusFilterList = (output: any, context: __SerdeContext): (ReplicationStatus | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
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
 * deserializeAws_restXmlRouteList
 */
const de_RouteList = (output: any, context: __SerdeContext): MultiRegionAccessPointRoute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiRegionAccessPointRoute(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3AccessControlList
 */
const de_S3AccessControlList = (output: any, context: __SerdeContext): S3AccessControlList => {
  const contents: any = {};
  if (output["Owner"] !== undefined) {
    contents.Owner = de_S3ObjectOwner(output["Owner"], context);
  }
  if (output.Grants === "") {
    contents.Grants = [];
  } else if (output["Grants"] !== undefined && output["Grants"]["member"] !== undefined) {
    contents.Grants = de_S3GrantList(__getArrayIfSingleItem(output["Grants"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3AccessControlPolicy
 */
const de_S3AccessControlPolicy = (output: any, context: __SerdeContext): S3AccessControlPolicy => {
  const contents: any = {};
  if (output["AccessControlList"] !== undefined) {
    contents.AccessControlList = de_S3AccessControlList(output["AccessControlList"], context);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = __expectString(output["CannedAccessControlList"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3BucketDestination
 */
const de_S3BucketDestination = (output: any, context: __SerdeContext): S3BucketDestination => {
  const contents: any = {};
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["OutputSchemaVersion"] !== undefined) {
    contents.OutputSchemaVersion = __expectString(output["OutputSchemaVersion"]);
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Encryption"] !== undefined) {
    contents.Encryption = de_StorageLensDataExportEncryption(output["Encryption"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3CopyObjectOperation
 */
const de_S3CopyObjectOperation = (output: any, context: __SerdeContext): S3CopyObjectOperation => {
  const contents: any = {};
  if (output["TargetResource"] !== undefined) {
    contents.TargetResource = __expectString(output["TargetResource"]);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = __expectString(output["CannedAccessControlList"]);
  }
  if (output.AccessControlGrants === "") {
    contents.AccessControlGrants = [];
  } else if (output["AccessControlGrants"] !== undefined && output["AccessControlGrants"]["member"] !== undefined) {
    contents.AccessControlGrants = de_S3GrantList(
      __getArrayIfSingleItem(output["AccessControlGrants"]["member"]),
      context
    );
  }
  if (output["MetadataDirective"] !== undefined) {
    contents.MetadataDirective = __expectString(output["MetadataDirective"]);
  }
  if (output["ModifiedSinceConstraint"] !== undefined) {
    contents.ModifiedSinceConstraint = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ModifiedSinceConstraint"])
    );
  }
  if (output["NewObjectMetadata"] !== undefined) {
    contents.NewObjectMetadata = de_S3ObjectMetadata(output["NewObjectMetadata"], context);
  }
  if (output.NewObjectTagging === "") {
    contents.NewObjectTagging = [];
  } else if (output["NewObjectTagging"] !== undefined && output["NewObjectTagging"]["member"] !== undefined) {
    contents.NewObjectTagging = de_S3TagSet(__getArrayIfSingleItem(output["NewObjectTagging"]["member"]), context);
  }
  if (output["RedirectLocation"] !== undefined) {
    contents.RedirectLocation = __expectString(output["RedirectLocation"]);
  }
  if (output["RequesterPays"] !== undefined) {
    contents.RequesterPays = __parseBoolean(output["RequesterPays"]);
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
  }
  if (output["UnModifiedSinceConstraint"] !== undefined) {
    contents.UnModifiedSinceConstraint = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["UnModifiedSinceConstraint"])
    );
  }
  if (output["SSEAwsKmsKeyId"] !== undefined) {
    contents.SSEAwsKmsKeyId = __expectString(output["SSEAwsKmsKeyId"]);
  }
  if (output["TargetKeyPrefix"] !== undefined) {
    contents.TargetKeyPrefix = __expectString(output["TargetKeyPrefix"]);
  }
  if (output["ObjectLockLegalHoldStatus"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = __expectString(output["ObjectLockLegalHoldStatus"]);
  }
  if (output["ObjectLockMode"] !== undefined) {
    contents.ObjectLockMode = __expectString(output["ObjectLockMode"]);
  }
  if (output["ObjectLockRetainUntilDate"] !== undefined) {
    contents.ObjectLockRetainUntilDate = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["ObjectLockRetainUntilDate"])
    );
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = __parseBoolean(output["BucketKeyEnabled"]);
  }
  if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = __expectString(output["ChecksumAlgorithm"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3DeleteObjectTaggingOperation
 */
const de_S3DeleteObjectTaggingOperation = (output: any, context: __SerdeContext): S3DeleteObjectTaggingOperation => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlS3GeneratedManifestDescriptor
 */
const de_S3GeneratedManifestDescriptor = (output: any, context: __SerdeContext): S3GeneratedManifestDescriptor => {
  const contents: any = {};
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["Location"] !== undefined) {
    contents.Location = de_JobManifestLocation(output["Location"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Grant
 */
const de_S3Grant = (output: any, context: __SerdeContext): S3Grant => {
  const contents: any = {};
  if (output["Grantee"] !== undefined) {
    contents.Grantee = de_S3Grantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Grantee
 */
const de_S3Grantee = (output: any, context: __SerdeContext): S3Grantee => {
  const contents: any = {};
  if (output["TypeIdentifier"] !== undefined) {
    contents.TypeIdentifier = __expectString(output["TypeIdentifier"]);
  }
  if (output["Identifier"] !== undefined) {
    contents.Identifier = __expectString(output["Identifier"]);
  }
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = __expectString(output["DisplayName"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3GrantList
 */
const de_S3GrantList = (output: any, context: __SerdeContext): S3Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3Grant(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3InitiateRestoreObjectOperation
 */
const de_S3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  const contents: any = {};
  if (output["ExpirationInDays"] !== undefined) {
    contents.ExpirationInDays = __strictParseInt32(output["ExpirationInDays"]) as number;
  }
  if (output["GlacierJobTier"] !== undefined) {
    contents.GlacierJobTier = __expectString(output["GlacierJobTier"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3JobManifestGenerator
 */
const de_S3JobManifestGenerator = (output: any, context: __SerdeContext): S3JobManifestGenerator => {
  const contents: any = {};
  if (output["ExpectedBucketOwner"] !== undefined) {
    contents.ExpectedBucketOwner = __expectString(output["ExpectedBucketOwner"]);
  }
  if (output["SourceBucket"] !== undefined) {
    contents.SourceBucket = __expectString(output["SourceBucket"]);
  }
  if (output["ManifestOutputLocation"] !== undefined) {
    contents.ManifestOutputLocation = de_S3ManifestOutputLocation(output["ManifestOutputLocation"], context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = de_JobManifestGeneratorFilter(output["Filter"], context);
  }
  if (output["EnableManifestOutput"] !== undefined) {
    contents.EnableManifestOutput = __parseBoolean(output["EnableManifestOutput"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ManifestOutputLocation
 */
const de_S3ManifestOutputLocation = (output: any, context: __SerdeContext): S3ManifestOutputLocation => {
  const contents: any = {};
  if (output["ExpectedManifestBucketOwner"] !== undefined) {
    contents.ExpectedManifestBucketOwner = __expectString(output["ExpectedManifestBucketOwner"]);
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["ManifestPrefix"] !== undefined) {
    contents.ManifestPrefix = __expectString(output["ManifestPrefix"]);
  }
  if (output["ManifestEncryption"] !== undefined) {
    contents.ManifestEncryption = de_GeneratedManifestEncryption(output["ManifestEncryption"], context);
  }
  if (output["ManifestFormat"] !== undefined) {
    contents.ManifestFormat = __expectString(output["ManifestFormat"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectLockLegalHold
 */
const de_S3ObjectLockLegalHold = (output: any, context: __SerdeContext): S3ObjectLockLegalHold => {
  const contents: any = {};
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectMetadata
 */
const de_S3ObjectMetadata = (output: any, context: __SerdeContext): S3ObjectMetadata => {
  const contents: any = {};
  if (output["CacheControl"] !== undefined) {
    contents.CacheControl = __expectString(output["CacheControl"]);
  }
  if (output["ContentDisposition"] !== undefined) {
    contents.ContentDisposition = __expectString(output["ContentDisposition"]);
  }
  if (output["ContentEncoding"] !== undefined) {
    contents.ContentEncoding = __expectString(output["ContentEncoding"]);
  }
  if (output["ContentLanguage"] !== undefined) {
    contents.ContentLanguage = __expectString(output["ContentLanguage"]);
  }
  if (output.UserMetadata === "") {
    contents.UserMetadata = {};
  } else if (output["UserMetadata"] !== undefined && output["UserMetadata"]["entry"] !== undefined) {
    contents.UserMetadata = de_S3UserMetadata(__getArrayIfSingleItem(output["UserMetadata"]["entry"]), context);
  }
  if (output["ContentLength"] !== undefined) {
    contents.ContentLength = __strictParseLong(output["ContentLength"]) as number;
  }
  if (output["ContentMD5"] !== undefined) {
    contents.ContentMD5 = __expectString(output["ContentMD5"]);
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = __expectString(output["ContentType"]);
  }
  if (output["HttpExpiresDate"] !== undefined) {
    contents.HttpExpiresDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["HttpExpiresDate"]));
  }
  if (output["RequesterCharged"] !== undefined) {
    contents.RequesterCharged = __parseBoolean(output["RequesterCharged"]);
  }
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = __expectString(output["SSEAlgorithm"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3ObjectOwner
 */
const de_S3ObjectOwner = (output: any, context: __SerdeContext): S3ObjectOwner => {
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
 * deserializeAws_restXmlS3ReplicateObjectOperation
 */
const de_S3ReplicateObjectOperation = (output: any, context: __SerdeContext): S3ReplicateObjectOperation => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlS3Retention
 */
const de_S3Retention = (output: any, context: __SerdeContext): S3Retention => {
  const contents: any = {};
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RetainUntilDate"]));
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectAclOperation
 */
const de_S3SetObjectAclOperation = (output: any, context: __SerdeContext): S3SetObjectAclOperation => {
  const contents: any = {};
  if (output["AccessControlPolicy"] !== undefined) {
    contents.AccessControlPolicy = de_S3AccessControlPolicy(output["AccessControlPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectLegalHoldOperation
 */
const de_S3SetObjectLegalHoldOperation = (output: any, context: __SerdeContext): S3SetObjectLegalHoldOperation => {
  const contents: any = {};
  if (output["LegalHold"] !== undefined) {
    contents.LegalHold = de_S3ObjectLockLegalHold(output["LegalHold"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectRetentionOperation
 */
const de_S3SetObjectRetentionOperation = (output: any, context: __SerdeContext): S3SetObjectRetentionOperation => {
  const contents: any = {};
  if (output["BypassGovernanceRetention"] !== undefined) {
    contents.BypassGovernanceRetention = __parseBoolean(output["BypassGovernanceRetention"]);
  }
  if (output["Retention"] !== undefined) {
    contents.Retention = de_S3Retention(output["Retention"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3SetObjectTaggingOperation
 */
const de_S3SetObjectTaggingOperation = (output: any, context: __SerdeContext): S3SetObjectTaggingOperation => {
  const contents: any = {};
  if (output.TagSet === "") {
    contents.TagSet = [];
  } else if (output["TagSet"] !== undefined && output["TagSet"]["member"] !== undefined) {
    contents.TagSet = de_S3TagSet(__getArrayIfSingleItem(output["TagSet"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlS3Tag
 */
const de_S3Tag = (output: any, context: __SerdeContext): S3Tag => {
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
 * deserializeAws_restXmlS3TagSet
 */
const de_S3TagSet = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3Tag(entry, context);
    });
};

/**
 * deserializeAws_restXmlS3UserMetadata
 */
const de_S3UserMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restXmlSelectionCriteria
 */
const de_SelectionCriteria = (output: any, context: __SerdeContext): SelectionCriteria => {
  const contents: any = {};
  if (output["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(output["Delimiter"]);
  }
  if (output["MaxDepth"] !== undefined) {
    contents.MaxDepth = __strictParseInt32(output["MaxDepth"]) as number;
  }
  if (output["MinStorageBytesPercentage"] !== undefined) {
    contents.MinStorageBytesPercentage = __strictParseFloat(output["MinStorageBytesPercentage"]) as number;
  }
  return contents;
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
 * deserializeAws_restXmlSSEKMSEncryption
 */
const de_SSEKMSEncryption = (output: any, context: __SerdeContext): SSEKMSEncryption => {
  const contents: any = {};
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
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
 * deserializeAws_restXmlSSES3Encryption
 */
const de_SSES3Encryption = (output: any, context: __SerdeContext): SSES3Encryption => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensAwsOrg
 */
const de_StorageLensAwsOrg = (output: any, context: __SerdeContext): StorageLensAwsOrg => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensConfiguration
 */
const de_StorageLensConfiguration = (output: any, context: __SerdeContext): StorageLensConfiguration => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["AccountLevel"] !== undefined) {
    contents.AccountLevel = de_AccountLevel(output["AccountLevel"], context);
  }
  if (output["Include"] !== undefined) {
    contents.Include = de_Include(output["Include"], context);
  }
  if (output["Exclude"] !== undefined) {
    contents.Exclude = de__Exclude(output["Exclude"], context);
  }
  if (output["DataExport"] !== undefined) {
    contents.DataExport = de_StorageLensDataExport(output["DataExport"], context);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["AwsOrg"] !== undefined) {
    contents.AwsOrg = de_StorageLensAwsOrg(output["AwsOrg"], context);
  }
  if (output["StorageLensArn"] !== undefined) {
    contents.StorageLensArn = __expectString(output["StorageLensArn"]);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensConfigurationList
 */
const de_StorageLensConfigurationList = (output: any, context: __SerdeContext): ListStorageLensConfigurationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListStorageLensConfigurationEntry(entry, context);
    });
};

/**
 * deserializeAws_restXmlStorageLensDataExport
 */
const de_StorageLensDataExport = (output: any, context: __SerdeContext): StorageLensDataExport => {
  const contents: any = {};
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = de_S3BucketDestination(output["S3BucketDestination"], context);
  }
  if (output["CloudWatchMetrics"] !== undefined) {
    contents.CloudWatchMetrics = de_CloudWatchMetrics(output["CloudWatchMetrics"], context);
  }
  return contents;
};

/**
 * deserializeAws_restXmlStorageLensDataExportEncryption
 */
const de_StorageLensDataExportEncryption = (output: any, context: __SerdeContext): StorageLensDataExportEncryption => {
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
 * deserializeAws_restXmlStorageLensTag
 */
const de_StorageLensTag = (output: any, context: __SerdeContext): StorageLensTag => {
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
 * deserializeAws_restXmlStorageLensTags
 */
const de_StorageLensTags = (output: any, context: __SerdeContext): StorageLensTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StorageLensTag(entry, context);
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

/**
 * deserializeAws_restXmlVpcConfiguration
 */
const de_VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  const contents: any = {};
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  return contents;
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
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
