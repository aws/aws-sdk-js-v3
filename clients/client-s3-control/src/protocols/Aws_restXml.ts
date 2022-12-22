// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
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
  resolvedPath as __resolvedPath,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
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
  DeleteMultiRegionAccessPointInput,
  DetailedStatusCodesMetrics,
  EstablishedMultiRegionAccessPointPolicy,
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
  ReplicationStatus,
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
  SSEKMS,
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

export const serializeAws_restXmlCreateAccessPointCommand = async (
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
    const node = serializeAws_restXmlPublicAccessBlockConfiguration(
      input.PublicAccessBlockConfiguration,
      context
    ).withName("PublicAccessBlockConfiguration");
    bodyNode.addChildNode(node);
  }
  if (input.VpcConfiguration !== undefined) {
    const node = serializeAws_restXmlVpcConfiguration(input.VpcConfiguration, context).withName("VpcConfiguration");
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

export const serializeAws_restXmlCreateAccessPointForObjectLambdaCommand = async (
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
    const node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
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
    "x-amz-outpost-id": input.OutpostId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Bucket", () => input.Bucket!, "{Bucket}", false);
  let body: any;
  if (input.CreateBucketConfiguration !== undefined) {
    body = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
  }
  let contents: any;
  if (input.CreateBucketConfiguration !== undefined) {
    contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
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

export const serializeAws_restXmlCreateJobCommand = async (
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
    const node = serializeAws_restXmlJobManifest(input.Manifest, context).withName("Manifest");
    bodyNode.addChildNode(node);
  }
  if (input.ManifestGenerator !== undefined) {
    const node = serializeAws_restXmlJobManifestGenerator(input.ManifestGenerator, context).withName(
      "ManifestGenerator"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Operation !== undefined) {
    const node = serializeAws_restXmlJobOperation(input.Operation, context).withName("Operation");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined) {
    const node = __XmlNode.of("JobPriority", String(input.Priority)).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Report !== undefined) {
    const node = serializeAws_restXmlJobReport(input.Report, context).withName("Report");
    bodyNode.addChildNode(node);
  }
  if (input.RoleArn !== undefined) {
    const node = __XmlNode.of("IAMRoleArn", input.RoleArn).withName("RoleArn");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
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

export const serializeAws_restXmlCreateMultiRegionAccessPointCommand = async (
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
    const node = serializeAws_restXmlCreateMultiRegionAccessPointInput(input.Details, context).withName("Details");
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

export const serializeAws_restXmlDeleteAccessPointCommand = async (
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

export const serializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = async (
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

export const serializeAws_restXmlDeleteAccessPointPolicyCommand = async (
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

export const serializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = async (
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

export const serializeAws_restXmlDeleteBucketCommand = async (
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

export const serializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteBucketPolicyCommand = async (
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

export const serializeAws_restXmlDeleteBucketTaggingCommand = async (
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

export const serializeAws_restXmlDeleteJobTaggingCommand = async (
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

export const serializeAws_restXmlDeleteMultiRegionAccessPointCommand = async (
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
    const node = serializeAws_restXmlDeleteMultiRegionAccessPointInput(input.Details, context).withName("Details");
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

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
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

export const serializeAws_restXmlDeleteStorageLensConfigurationCommand = async (
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

export const serializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = async (
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

export const serializeAws_restXmlDescribeJobCommand = async (
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

export const serializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand = async (
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

export const serializeAws_restXmlGetAccessPointCommand = async (
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

export const serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = async (
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

export const serializeAws_restXmlGetAccessPointForObjectLambdaCommand = async (
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

export const serializeAws_restXmlGetAccessPointPolicyCommand = async (
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

export const serializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = async (
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

export const serializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
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

export const serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = async (
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

export const serializeAws_restXmlGetBucketCommand = async (
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

export const serializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (
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

export const serializeAws_restXmlGetBucketPolicyCommand = async (
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

export const serializeAws_restXmlGetBucketTaggingCommand = async (
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

export const serializeAws_restXmlGetBucketVersioningCommand = async (
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

export const serializeAws_restXmlGetJobTaggingCommand = async (
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

export const serializeAws_restXmlGetMultiRegionAccessPointCommand = async (
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

export const serializeAws_restXmlGetMultiRegionAccessPointPolicyCommand = async (
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

export const serializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand = async (
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

export const serializeAws_restXmlGetMultiRegionAccessPointRoutesCommand = async (
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

export const serializeAws_restXmlGetPublicAccessBlockCommand = async (
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

export const serializeAws_restXmlGetStorageLensConfigurationCommand = async (
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

export const serializeAws_restXmlGetStorageLensConfigurationTaggingCommand = async (
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

export const serializeAws_restXmlListAccessPointsCommand = async (
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

export const serializeAws_restXmlListAccessPointsForObjectLambdaCommand = async (
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

export const serializeAws_restXmlListJobsCommand = async (
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

export const serializeAws_restXmlListMultiRegionAccessPointsCommand = async (
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

export const serializeAws_restXmlListRegionalBucketsCommand = async (
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

export const serializeAws_restXmlListStorageLensConfigurationsCommand = async (
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

export const serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = async (
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
    const node = serializeAws_restXmlObjectLambdaConfiguration(input.Configuration, context).withName("Configuration");
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

export const serializeAws_restXmlPutAccessPointPolicyCommand = async (
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

export const serializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = async (
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

export const serializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
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
    body = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
  }
  let contents: any;
  if (input.LifecycleConfiguration !== undefined) {
    contents = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
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

export const serializeAws_restXmlPutBucketPolicyCommand = async (
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

export const serializeAws_restXmlPutBucketTaggingCommand = async (
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
    body = serializeAws_restXmlTagging(input.Tagging, context);
  }
  let contents: any;
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
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

export const serializeAws_restXmlPutBucketVersioningCommand = async (
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
    body = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
  }
  let contents: any;
  if (input.VersioningConfiguration !== undefined) {
    contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
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

export const serializeAws_restXmlPutJobTaggingCommand = async (
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
    const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
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

export const serializeAws_restXmlPutMultiRegionAccessPointPolicyCommand = async (
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
    const node = serializeAws_restXmlPutMultiRegionAccessPointPolicyInput(input.Details, context).withName("Details");
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

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
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
    body = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
  }
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
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

export const serializeAws_restXmlPutStorageLensConfigurationCommand = async (
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
    const node = serializeAws_restXmlStorageLensConfiguration(input.StorageLensConfiguration, context).withName(
      "StorageLensConfiguration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined) {
    const nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
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

export const serializeAws_restXmlPutStorageLensConfigurationTaggingCommand = async (
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
    const nodes = serializeAws_restXmlStorageLensTags(input.Tags, context);
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

export const serializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand = async (
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
    const nodes = serializeAws_restXmlRouteList(input.RouteUpdates, context);
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

export const serializeAws_restXmlUpdateJobPriorityCommand = async (
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

export const serializeAws_restXmlUpdateJobStatusCommand = async (
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

export const deserializeAws_restXmlCreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateAccessPointCommandError(output, context);
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

const deserializeAws_restXmlCreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["ObjectLambdaAccessPointArn"] !== undefined) {
    contents.ObjectLambdaAccessPointArn = __expectString(data["ObjectLambdaAccessPointArn"]);
  }
  return contents;
};

const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["BucketArn"] !== undefined) {
    contents.BucketArn = __expectString(data["BucketArn"]);
  }
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
    case "com.amazonaws.s3control#BucketAlreadyExists":
      throw await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context);
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3control#BucketAlreadyOwnedByYou":
      throw await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateJobCommandError(output, context);
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

const deserializeAws_restXmlCreateJobCommandError = async (
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
      throw await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.s3control#IdempotencyException":
      throw await deserializeAws_restXmlIdempotencyExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlCreateMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateMultiRegionAccessPointCommandError(output, context);
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

const deserializeAws_restXmlCreateMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteJobTaggingCommandError = async (
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
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDeleteMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteMultiRegionAccessPointCommandError(output, context);
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

const deserializeAws_restXmlDeleteMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlDescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDescribeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Job"] !== undefined) {
    contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
  }
  return contents;
};

const deserializeAws_restXmlDescribeJobCommandError = async (
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
      throw await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AsyncOperation"] !== undefined) {
    contents.AsyncOperation = deserializeAws_restXmlAsyncOperation(data["AsyncOperation"], context);
  }
  return contents;
};

const deserializeAws_restXmlDescribeMultiRegionAccessPointOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiRegionAccessPointOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointCommandError(output, context);
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
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(data["CreationDate"]));
  }
  if (data.Endpoints === "") {
    contents.Endpoints = {};
  } else if (data["Endpoints"] !== undefined && data["Endpoints"]["entry"] !== undefined) {
    contents.Endpoints = deserializeAws_restXmlEndpoints(__getArrayIfSingleItem(data["Endpoints"]["entry"]), context);
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = __expectString(data["NetworkOrigin"]);
  }
  if (data["PublicAccessBlockConfiguration"] !== undefined) {
    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(
      data["PublicAccessBlockConfiguration"],
      context
    );
  }
  if (data["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(data["VpcConfiguration"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Configuration"] !== undefined) {
    contents.Configuration = deserializeAws_restXmlObjectLambdaConfiguration(data["Configuration"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(data["CreationDate"]));
  }
  if (data["Name"] !== undefined) {
    contents.Name = __expectString(data["Name"]);
  }
  if (data["PublicAccessBlockConfiguration"] !== undefined) {
    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(
      data["PublicAccessBlockConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context);
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

const deserializeAws_restXmlGetAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError(output, context);
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

const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(data["CreationDate"]));
  }
  if (data["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = __parseBoolean(data["PublicAccessBlockEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlGetBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  if (data.Rules === "") {
    contents.Rules = [];
  } else if (data["Rules"] !== undefined && data["Rules"]["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rules"]["Rule"]), context);
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
    parsedBody: parsedBody.Error,
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
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
    parsedBody: parsedBody.Error,
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
  } else if (data["TagSet"] !== undefined && data["TagSet"]["member"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["TagSet"]["member"]), context);
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents.Tags = [];
  } else if (data["Tags"] !== undefined && data["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetJobTaggingCommandError = async (
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
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetMultiRegionAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMultiRegionAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["AccessPoint"] !== undefined) {
    contents.AccessPoint = deserializeAws_restXmlMultiRegionAccessPointReport(data["AccessPoint"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetMultiRegionAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Policy"] !== undefined) {
    contents.Policy = deserializeAws_restXmlMultiRegionAccessPointPolicyDocument(data["Policy"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetMultiRegionAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data["Established"] !== undefined) {
    contents.Established = deserializeAws_restXmlPolicyStatus(data["Established"], context);
  }
  return contents;
};

const deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommandError(output, context);
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
    contents.Routes = deserializeAws_restXmlRouteList(__getArrayIfSingleItem(data["Routes"]["Route"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMultiRegionAccessPointRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
  switch (errorCode) {
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
      throw await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlGetStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.StorageLensConfiguration = deserializeAws_restXmlStorageLensConfiguration(data, context);
  return contents;
};

const deserializeAws_restXmlGetStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags === "") {
    contents.Tags = [];
  } else if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlStorageLensTags(__getArrayIfSingleItem(data["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListAccessPointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointList === "") {
    contents.AccessPointList = [];
  } else if (data["AccessPointList"] !== undefined && data["AccessPointList"]["AccessPoint"] !== undefined) {
    contents.AccessPointList = deserializeAws_restXmlAccessPointList(
      __getArrayIfSingleItem(data["AccessPointList"]["AccessPoint"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError(output, context);
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
    contents.ObjectLambdaAccessPointList = deserializeAws_restXmlObjectLambdaAccessPointList(
      __getArrayIfSingleItem(data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs === "") {
    contents.Jobs = [];
  } else if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
    contents.Jobs = deserializeAws_restXmlJobListDescriptorList(
      __getArrayIfSingleItem(data["Jobs"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListJobsCommandError = async (
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
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.s3control#InvalidNextTokenException":
      throw await deserializeAws_restXmlInvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.s3control#InvalidRequestException":
      throw await deserializeAws_restXmlInvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlListMultiRegionAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListMultiRegionAccessPointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPoints === "") {
    contents.AccessPoints = [];
  } else if (data["AccessPoints"] !== undefined && data["AccessPoints"]["AccessPoint"] !== undefined) {
    contents.AccessPoints = deserializeAws_restXmlMultiRegionAccessPointReportList(
      __getArrayIfSingleItem(data["AccessPoints"]["AccessPoint"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return contents;
};

const deserializeAws_restXmlListMultiRegionAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListRegionalBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListRegionalBucketsCommandError(output, context);
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
    contents.RegionalBucketList = deserializeAws_restXmlRegionalBucketList(
      __getArrayIfSingleItem(data["RegionalBucketList"]["RegionalBucket"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListRegionalBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlListStorageLensConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListStorageLensConfigurationsCommandError(output, context);
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
    contents.StorageLensConfigurationList = deserializeAws_restXmlStorageLensConfigurationList(
      __getArrayIfSingleItem(data["StorageLensConfigurationList"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlListStorageLensConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutJobTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutJobTaggingCommandError = async (
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
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.s3control#TooManyTagsException":
      throw await deserializeAws_restXmlTooManyTagsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMultiRegionAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommandError(output, context);
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

const deserializeAws_restXmlPutMultiRegionAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMultiRegionAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
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
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutStorageLensConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restXmlUpdateJobPriorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
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

const deserializeAws_restXmlUpdateJobPriorityCommandError = async (
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
      throw await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restXmlUpdateJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateJobStatusCommandError(output, context);
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

const deserializeAws_restXmlUpdateJobStatusCommandError = async (
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
      throw await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      throw await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context);
    case "JobStatusException":
    case "com.amazonaws.s3control#JobStatusException":
      throw await deserializeAws_restXmlJobStatusExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      throw await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      throw await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restXmlBadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restXmlBucketAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body.Error;
  const exception = new BucketAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body.Error);
};

const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (
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

const deserializeAws_restXmlIdempotencyExceptionResponse = async (
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

const deserializeAws_restXmlInternalServiceExceptionResponse = async (
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

const deserializeAws_restXmlInvalidNextTokenExceptionResponse = async (
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

const deserializeAws_restXmlInvalidRequestExceptionResponse = async (
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

const deserializeAws_restXmlJobStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobStatusException> => {
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

const deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse = async (
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

const deserializeAws_restXmlNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restXmlTooManyRequestsExceptionResponse = async (
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

const deserializeAws_restXmlTooManyTagsExceptionResponse = async (
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

const serializeAws_restXmlAccountLevel = (input: AccountLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccountLevel");
  if (input.ActivityMetrics != null) {
    const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.BucketLevel != null) {
    const node = serializeAws_restXmlBucketLevel(input.BucketLevel, context).withName("BucketLevel");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedCostOptimizationMetrics != null) {
    const node = serializeAws_restXmlAdvancedCostOptimizationMetrics(
      input.AdvancedCostOptimizationMetrics,
      context
    ).withName("AdvancedCostOptimizationMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedDataProtectionMetrics != null) {
    const node = serializeAws_restXmlAdvancedDataProtectionMetrics(
      input.AdvancedDataProtectionMetrics,
      context
    ).withName("AdvancedDataProtectionMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.DetailedStatusCodesMetrics != null) {
    const node = serializeAws_restXmlDetailedStatusCodesMetrics(input.DetailedStatusCodesMetrics, context).withName(
      "DetailedStatusCodesMetrics"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlActivityMetrics = (input: ActivityMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ActivityMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAdvancedCostOptimizationMetrics = (
  input: AdvancedCostOptimizationMetrics,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AdvancedCostOptimizationMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAdvancedDataProtectionMetrics = (
  input: AdvancedDataProtectionMetrics,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AdvancedDataProtectionMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAwsLambdaTransformation = (input: AwsLambdaTransformation, context: __SerdeContext): any => {
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

const serializeAws_restXmlBucketLevel = (input: BucketLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLevel");
  if (input.ActivityMetrics != null) {
    const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixLevel != null) {
    const node = serializeAws_restXmlPrefixLevel(input.PrefixLevel, context).withName("PrefixLevel");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedCostOptimizationMetrics != null) {
    const node = serializeAws_restXmlAdvancedCostOptimizationMetrics(
      input.AdvancedCostOptimizationMetrics,
      context
    ).withName("AdvancedCostOptimizationMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.AdvancedDataProtectionMetrics != null) {
    const node = serializeAws_restXmlAdvancedDataProtectionMetrics(
      input.AdvancedDataProtectionMetrics,
      context
    ).withName("AdvancedDataProtectionMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.DetailedStatusCodesMetrics != null) {
    const node = serializeAws_restXmlDetailedStatusCodesMetrics(input.DetailedStatusCodesMetrics, context).withName(
      "DetailedStatusCodesMetrics"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBuckets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("S3BucketArnString", entry);
      return node.withName("Arn");
    });
};

const serializeAws_restXmlCloudWatchMetrics = (input: CloudWatchMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("CloudWatchMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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

const serializeAws_restXmlCreateMultiRegionAccessPointInput = (
  input: CreateMultiRegionAccessPointInput,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateMultiRegionAccessPointInput");
  if (input.Name != null) {
    const node = __XmlNode.of("MultiRegionAccessPointName", input.Name).withName("Name");
    bodyNode.addChildNode(node);
  }
  if (input.PublicAccessBlock != null) {
    const node = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlock, context).withName(
      "PublicAccessBlock"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Regions != null) {
    const nodes = serializeAws_restXmlRegionCreationList(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlDeleteMultiRegionAccessPointInput = (
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

const serializeAws_restXmlDetailedStatusCodesMetrics = (
  input: DetailedStatusCodesMetrics,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("DetailedStatusCodesMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXml_Exclude = (input: _Exclude, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Exclude");
  if (input.Buckets != null) {
    const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions != null) {
    const nodes = serializeAws_restXmlRegions(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlGeneratedManifestEncryption = (
  input: GeneratedManifestEncryption,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("GeneratedManifestEncryption");
  if (input.SSES3 != null) {
    const node = serializeAws_restXmlSSES3Encryption(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS != null) {
    const node = serializeAws_restXmlSSEKMSEncryption(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlInclude = (input: Include, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Include");
  if (input.Buckets != null) {
    const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions != null) {
    const nodes = serializeAws_restXmlRegions(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifest = (input: JobManifest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifest");
  if (input.Spec != null) {
    const node = serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec");
    bodyNode.addChildNode(node);
  }
  if (input.Location != null) {
    const node = serializeAws_restXmlJobManifestLocation(input.Location, context).withName("Location");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestFieldList = (
  input: (JobManifestFieldName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("JobManifestFieldName", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlJobManifestGenerator = (input: JobManifestGenerator, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestGenerator");
  JobManifestGenerator.visit(input, {
    S3JobManifestGenerator: (value) => {
      const node = serializeAws_restXmlS3JobManifestGenerator(value, context).withName("S3JobManifestGenerator");
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

const serializeAws_restXmlJobManifestGeneratorFilter = (
  input: JobManifestGeneratorFilter,
  context: __SerdeContext
): any => {
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
    const nodes = serializeAws_restXmlReplicationStatusFilterList(input.ObjectReplicationStatuses, context);
    const containerNode = new __XmlNode("ObjectReplicationStatuses");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestLocation = (input: JobManifestLocation, context: __SerdeContext): any => {
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

const serializeAws_restXmlJobManifestSpec = (input: JobManifestSpec, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestSpec");
  if (input.Format != null) {
    const node = __XmlNode.of("JobManifestFormat", input.Format).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Fields != null) {
    const nodes = serializeAws_restXmlJobManifestFieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlJobOperation = (input: JobOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobOperation");
  if (input.LambdaInvoke != null) {
    const node = serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectCopy != null) {
    const node = serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectAcl != null) {
    const node = serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectTagging != null) {
    const node = serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName(
      "S3PutObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3DeleteObjectTagging != null) {
    const node = serializeAws_restXmlS3DeleteObjectTaggingOperation(input.S3DeleteObjectTagging, context).withName(
      "S3DeleteObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3InitiateRestoreObject != null) {
    const node = serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName(
      "S3InitiateRestoreObject"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectLegalHold != null) {
    const node = serializeAws_restXmlS3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName(
      "S3PutObjectLegalHold"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectRetention != null) {
    const node = serializeAws_restXmlS3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName(
      "S3PutObjectRetention"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3ReplicateObject != null) {
    const node = serializeAws_restXmlS3ReplicateObjectOperation(input.S3ReplicateObject, context).withName(
      "S3ReplicateObject"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobReport = (input: JobReport, context: __SerdeContext): any => {
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

const serializeAws_restXmlLambdaInvokeOperation = (input: LambdaInvokeOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn != null) {
    const node = __XmlNode.of("FunctionArnString", input.FunctionArn).withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleConfiguration = (input: LifecycleConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleConfiguration");
  if (input.Rules != null) {
    const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
    const containerNode = new __XmlNode("Rules");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleExpiration = (input: LifecycleExpiration, context: __SerdeContext): any => {
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
    const containerNode = new __XmlNode("Transitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.NoncurrentVersionTransitions != null) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    const containerNode = new __XmlNode("NoncurrentVersionTransitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
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
    const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
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

const serializeAws_restXmlLifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  if (input.Prefix != null) {
    const node = __XmlNode.of("Prefix", input.Prefix).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag != null) {
    const node = serializeAws_restXmlS3Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And != null) {
    const node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
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

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlLifecycleRule(entry, context);
      return node.withName("Rule");
    });
};

const serializeAws_restXmlMultiRegionAccessPointRoute = (
  input: MultiRegionAccessPointRoute,
  context: __SerdeContext
): any => {
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
      .of("NoncurrentVersionCount", String(input.NewerNoncurrentVersions))
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
      return node.withName("NoncurrentVersionTransition");
    });
};

const serializeAws_restXmlObjectLambdaAllowedFeaturesList = (
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

const serializeAws_restXmlObjectLambdaConfiguration = (
  input: ObjectLambdaConfiguration,
  context: __SerdeContext
): any => {
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
    const nodes = serializeAws_restXmlObjectLambdaAllowedFeaturesList(input.AllowedFeatures, context);
    const containerNode = new __XmlNode("AllowedFeatures");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TransformationConfigurations != null) {
    const nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationsList(
      input.TransformationConfigurations,
      context
    );
    const containerNode = new __XmlNode("TransformationConfigurations");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLambdaContentTransformation = (
  input: ObjectLambdaContentTransformation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ObjectLambdaContentTransformation");
  ObjectLambdaContentTransformation.visit(input, {
    AwsLambda: (value) => {
      const node = serializeAws_restXmlAwsLambdaTransformation(value, context).withName("AwsLambda");
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

const serializeAws_restXmlObjectLambdaTransformationConfiguration = (
  input: ObjectLambdaTransformationConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ObjectLambdaTransformationConfiguration");
  if (input.Actions != null) {
    const nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(input.Actions, context);
    const containerNode = new __XmlNode("Actions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentTransformation != null) {
    const node = serializeAws_restXmlObjectLambdaContentTransformation(input.ContentTransformation, context).withName(
      "ContentTransformation"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = (
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

const serializeAws_restXmlObjectLambdaTransformationConfigurationsList = (
  input: ObjectLambdaTransformationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
      return node.withName("TransformationConfiguration");
    });
};

const serializeAws_restXmlPrefixLevel = (input: PrefixLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PrefixLevel");
  if (input.StorageMetrics != null) {
    const node = serializeAws_restXmlPrefixLevelStorageMetrics(input.StorageMetrics, context).withName(
      "StorageMetrics"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlPrefixLevelStorageMetrics = (
  input: PrefixLevelStorageMetrics,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PrefixLevelStorageMetrics");
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.SelectionCriteria != null) {
    const node = serializeAws_restXmlSelectionCriteria(input.SelectionCriteria, context).withName("SelectionCriteria");
    bodyNode.addChildNode(node);
  }
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

const serializeAws_restXmlPutMultiRegionAccessPointPolicyInput = (
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

const serializeAws_restXmlRegion = (input: Region, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Region");
  if (input.Bucket != null) {
    const node = __XmlNode.of("BucketName", input.Bucket).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRegionCreationList = (input: Region[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlRegion(entry, context);
      return node.withName("Region");
    });
};

const serializeAws_restXmlRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("S3AWSRegion", entry);
      return node.withName("Region");
    });
};

const serializeAws_restXmlReplicationStatusFilterList = (
  input: (ReplicationStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = __XmlNode.of("ReplicationStatus", entry);
      return node.withName("member");
    });
};

const serializeAws_restXmlRouteList = (input: MultiRegionAccessPointRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlMultiRegionAccessPointRoute(entry, context);
      return node.withName("Route");
    });
};

const serializeAws_restXmlS3AccessControlList = (input: S3AccessControlList, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlList");
  if (input.Owner != null) {
    const node = serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  if (input.Grants != null) {
    const nodes = serializeAws_restXmlS3GrantList(input.Grants, context);
    const containerNode = new __XmlNode("Grants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlS3AccessControlPolicy = (input: S3AccessControlPolicy, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlPolicy");
  if (input.AccessControlList != null) {
    const node = serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName(
      "AccessControlList"
    );
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

const serializeAws_restXmlS3BucketDestination = (input: S3BucketDestination, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlStorageLensDataExportEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3CopyObjectOperation = (input: S3CopyObjectOperation, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
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
    const node = serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectTagging != null) {
    const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
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

const serializeAws_restXmlS3DeleteObjectTaggingOperation = (
  input: S3DeleteObjectTaggingOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3DeleteObjectTaggingOperation");
  return bodyNode;
};

const serializeAws_restXmlS3Grant = (input: S3Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grant");
  if (input.Grantee != null) {
    const node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission != null) {
    const node = __XmlNode.of("S3Permission", input.Permission).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grantee = (input: S3Grantee, context: __SerdeContext): any => {
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

const serializeAws_restXmlS3GrantList = (input: S3Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlS3Grant(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlS3InitiateRestoreObjectOperation = (
  input: S3InitiateRestoreObjectOperation,
  context: __SerdeContext
): any => {
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

const serializeAws_restXmlS3JobManifestGenerator = (input: S3JobManifestGenerator, context: __SerdeContext): any => {
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
    const node = serializeAws_restXmlS3ManifestOutputLocation(input.ManifestOutputLocation, context).withName(
      "ManifestOutputLocation"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Filter != null) {
    const node = serializeAws_restXmlJobManifestGeneratorFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.EnableManifestOutput != null) {
    const node = __XmlNode.of("Boolean", String(input.EnableManifestOutput)).withName("EnableManifestOutput");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ManifestOutputLocation = (
  input: S3ManifestOutputLocation,
  context: __SerdeContext
): any => {
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
    const node = serializeAws_restXmlGeneratedManifestEncryption(input.ManifestEncryption, context).withName(
      "ManifestEncryption"
    );
    bodyNode.addChildNode(node);
  }
  if (input.ManifestFormat != null) {
    const node = __XmlNode.of("GeneratedManifestFormat", input.ManifestFormat).withName("ManifestFormat");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectLockLegalHold = (input: S3ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectLockLegalHold");
  if (input.Status != null) {
    const node = __XmlNode.of("S3ObjectLockLegalHoldStatus", input.Status).withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectMetadata = (input: S3ObjectMetadata, context: __SerdeContext): any => {
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
    const nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
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

const serializeAws_restXmlS3ObjectOwner = (input: S3ObjectOwner, context: __SerdeContext): any => {
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

const serializeAws_restXmlS3ReplicateObjectOperation = (
  input: S3ReplicateObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3ReplicateObjectOperation");
  return bodyNode;
};

const serializeAws_restXmlS3Retention = (input: S3Retention, context: __SerdeContext): any => {
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

const serializeAws_restXmlS3SetObjectAclOperation = (input: S3SetObjectAclOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy != null) {
    const node = serializeAws_restXmlS3AccessControlPolicy(input.AccessControlPolicy, context).withName(
      "AccessControlPolicy"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectLegalHoldOperation = (
  input: S3SetObjectLegalHoldOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectLegalHoldOperation");
  if (input.LegalHold != null) {
    const node = serializeAws_restXmlS3ObjectLockLegalHold(input.LegalHold, context).withName("LegalHold");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectRetentionOperation = (
  input: S3SetObjectRetentionOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectRetentionOperation");
  if (input.BypassGovernanceRetention != null) {
    const node = __XmlNode.of("Boolean", String(input.BypassGovernanceRetention)).withName("BypassGovernanceRetention");
    bodyNode.addChildNode(node);
  }
  if (input.Retention != null) {
    const node = serializeAws_restXmlS3Retention(input.Retention, context).withName("Retention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectTaggingOperation = (
  input: S3SetObjectTaggingOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectTaggingOperation");
  if (input.TagSet != null) {
    const nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Tag = (input: S3Tag, context: __SerdeContext): any => {
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

const serializeAws_restXmlS3TagSet = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlS3Tag(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlS3UserMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restXmlSelectionCriteria = (input: SelectionCriteria, context: __SerdeContext): any => {
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

const serializeAws_restXmlSSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId != null) {
    const node = __XmlNode.of("SSEKMSKeyId", input.KeyId).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSEKMSEncryption = (input: SSEKMSEncryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId != null) {
    const node = __XmlNode.of("KmsKeyArnString", input.KeyId).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

const serializeAws_restXmlSSES3Encryption = (input: SSES3Encryption, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

const serializeAws_restXmlStorageLensAwsOrg = (input: StorageLensAwsOrg, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensAwsOrg");
  if (input.Arn != null) {
    const node = __XmlNode.of("AwsOrgArn", input.Arn).withName("Arn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensConfiguration = (
  input: StorageLensConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageLensConfiguration");
  if (input.Id != null) {
    const node = __XmlNode.of("ConfigId", input.Id).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.AccountLevel != null) {
    const node = serializeAws_restXmlAccountLevel(input.AccountLevel, context).withName("AccountLevel");
    bodyNode.addChildNode(node);
  }
  if (input.Include != null) {
    const node = serializeAws_restXmlInclude(input.Include, context).withName("Include");
    bodyNode.addChildNode(node);
  }
  if (input.Exclude != null) {
    const node = serializeAws_restXml_Exclude(input.Exclude, context).withName("Exclude");
    bodyNode.addChildNode(node);
  }
  if (input.DataExport != null) {
    const node = serializeAws_restXmlStorageLensDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled != null) {
    const node = __XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.AwsOrg != null) {
    const node = serializeAws_restXmlStorageLensAwsOrg(input.AwsOrg, context).withName("AwsOrg");
    bodyNode.addChildNode(node);
  }
  if (input.StorageLensArn != null) {
    const node = __XmlNode.of("StorageLensArn", input.StorageLensArn).withName("StorageLensArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensDataExport = (input: StorageLensDataExport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensDataExport");
  if (input.S3BucketDestination != null) {
    const node = serializeAws_restXmlS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CloudWatchMetrics != null) {
    const node = serializeAws_restXmlCloudWatchMetrics(input.CloudWatchMetrics, context).withName("CloudWatchMetrics");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensDataExportEncryption = (
  input: StorageLensDataExportEncryption,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageLensDataExportEncryption");
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

const serializeAws_restXmlStorageLensTag = (input: StorageLensTag, context: __SerdeContext): any => {
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

const serializeAws_restXmlStorageLensTags = (input: StorageLensTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlStorageLensTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet != null) {
    const nodes = serializeAws_restXmlS3TagSet(input.TagSet, context);
    const containerNode = new __XmlNode("TagSet");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlTransition = (input: Transition, context: __SerdeContext): any => {
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

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      const node = serializeAws_restXmlTransition(entry, context);
      return node.withName("Transition");
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

const serializeAws_restXmlVpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId != null) {
    const node = __XmlNode.of("VpcId", input.VpcId).withName("VpcId");
    bodyNode.addChildNode(node);
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

const deserializeAws_restXmlAccessPoint = (output: any, context: __SerdeContext): AccessPoint => {
  const contents: any = {
    Name: undefined,
    NetworkOrigin: undefined,
    VpcConfiguration: undefined,
    Bucket: undefined,
    AccessPointArn: undefined,
    Alias: undefined,
    BucketAccountId: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = __expectString(output["NetworkOrigin"]);
  }
  if (output["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(output["VpcConfiguration"], context);
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

const deserializeAws_restXmlAccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlAccessPoint(entry, context);
    });
};

const deserializeAws_restXmlAccountLevel = (output: any, context: __SerdeContext): AccountLevel => {
  const contents: any = {
    ActivityMetrics: undefined,
    BucketLevel: undefined,
    AdvancedCostOptimizationMetrics: undefined,
    AdvancedDataProtectionMetrics: undefined,
    DetailedStatusCodesMetrics: undefined,
  };
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["BucketLevel"] !== undefined) {
    contents.BucketLevel = deserializeAws_restXmlBucketLevel(output["BucketLevel"], context);
  }
  if (output["AdvancedCostOptimizationMetrics"] !== undefined) {
    contents.AdvancedCostOptimizationMetrics = deserializeAws_restXmlAdvancedCostOptimizationMetrics(
      output["AdvancedCostOptimizationMetrics"],
      context
    );
  }
  if (output["AdvancedDataProtectionMetrics"] !== undefined) {
    contents.AdvancedDataProtectionMetrics = deserializeAws_restXmlAdvancedDataProtectionMetrics(
      output["AdvancedDataProtectionMetrics"],
      context
    );
  }
  if (output["DetailedStatusCodesMetrics"] !== undefined) {
    contents.DetailedStatusCodesMetrics = deserializeAws_restXmlDetailedStatusCodesMetrics(
      output["DetailedStatusCodesMetrics"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlActivityMetrics = (output: any, context: __SerdeContext): ActivityMetrics => {
  const contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlAdvancedCostOptimizationMetrics = (
  output: any,
  context: __SerdeContext
): AdvancedCostOptimizationMetrics => {
  const contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlAdvancedDataProtectionMetrics = (
  output: any,
  context: __SerdeContext
): AdvancedDataProtectionMetrics => {
  const contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlAsyncErrorDetails = (output: any, context: __SerdeContext): AsyncErrorDetails => {
  const contents: any = {
    Code: undefined,
    Message: undefined,
    Resource: undefined,
    RequestId: undefined,
  };
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

const deserializeAws_restXmlAsyncOperation = (output: any, context: __SerdeContext): AsyncOperation => {
  const contents: any = {
    CreationTime: undefined,
    Operation: undefined,
    RequestTokenARN: undefined,
    RequestParameters: undefined,
    RequestStatus: undefined,
    ResponseDetails: undefined,
  };
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTime(output["CreationTime"]));
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = __expectString(output["Operation"]);
  }
  if (output["RequestTokenARN"] !== undefined) {
    contents.RequestTokenARN = __expectString(output["RequestTokenARN"]);
  }
  if (output["RequestParameters"] !== undefined) {
    contents.RequestParameters = deserializeAws_restXmlAsyncRequestParameters(output["RequestParameters"], context);
  }
  if (output["RequestStatus"] !== undefined) {
    contents.RequestStatus = __expectString(output["RequestStatus"]);
  }
  if (output["ResponseDetails"] !== undefined) {
    contents.ResponseDetails = deserializeAws_restXmlAsyncResponseDetails(output["ResponseDetails"], context);
  }
  return contents;
};

const deserializeAws_restXmlAsyncRequestParameters = (output: any, context: __SerdeContext): AsyncRequestParameters => {
  const contents: any = {
    CreateMultiRegionAccessPointRequest: undefined,
    DeleteMultiRegionAccessPointRequest: undefined,
    PutMultiRegionAccessPointPolicyRequest: undefined,
  };
  if (output["CreateMultiRegionAccessPointRequest"] !== undefined) {
    contents.CreateMultiRegionAccessPointRequest = deserializeAws_restXmlCreateMultiRegionAccessPointInput(
      output["CreateMultiRegionAccessPointRequest"],
      context
    );
  }
  if (output["DeleteMultiRegionAccessPointRequest"] !== undefined) {
    contents.DeleteMultiRegionAccessPointRequest = deserializeAws_restXmlDeleteMultiRegionAccessPointInput(
      output["DeleteMultiRegionAccessPointRequest"],
      context
    );
  }
  if (output["PutMultiRegionAccessPointPolicyRequest"] !== undefined) {
    contents.PutMultiRegionAccessPointPolicyRequest = deserializeAws_restXmlPutMultiRegionAccessPointPolicyInput(
      output["PutMultiRegionAccessPointPolicyRequest"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlAsyncResponseDetails = (output: any, context: __SerdeContext): AsyncResponseDetails => {
  const contents: any = {
    MultiRegionAccessPointDetails: undefined,
    ErrorDetails: undefined,
  };
  if (output["MultiRegionAccessPointDetails"] !== undefined) {
    contents.MultiRegionAccessPointDetails = deserializeAws_restXmlMultiRegionAccessPointsAsyncResponse(
      output["MultiRegionAccessPointDetails"],
      context
    );
  }
  if (output["ErrorDetails"] !== undefined) {
    contents.ErrorDetails = deserializeAws_restXmlAsyncErrorDetails(output["ErrorDetails"], context);
  }
  return contents;
};

const deserializeAws_restXmlAwsLambdaTransformation = (
  output: any,
  context: __SerdeContext
): AwsLambdaTransformation => {
  const contents: any = {
    FunctionArn: undefined,
    FunctionPayload: undefined,
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  if (output["FunctionPayload"] !== undefined) {
    contents.FunctionPayload = __expectString(output["FunctionPayload"]);
  }
  return contents;
};

const deserializeAws_restXmlBucketLevel = (output: any, context: __SerdeContext): BucketLevel => {
  const contents: any = {
    ActivityMetrics: undefined,
    PrefixLevel: undefined,
    AdvancedCostOptimizationMetrics: undefined,
    AdvancedDataProtectionMetrics: undefined,
    DetailedStatusCodesMetrics: undefined,
  };
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["PrefixLevel"] !== undefined) {
    contents.PrefixLevel = deserializeAws_restXmlPrefixLevel(output["PrefixLevel"], context);
  }
  if (output["AdvancedCostOptimizationMetrics"] !== undefined) {
    contents.AdvancedCostOptimizationMetrics = deserializeAws_restXmlAdvancedCostOptimizationMetrics(
      output["AdvancedCostOptimizationMetrics"],
      context
    );
  }
  if (output["AdvancedDataProtectionMetrics"] !== undefined) {
    contents.AdvancedDataProtectionMetrics = deserializeAws_restXmlAdvancedDataProtectionMetrics(
      output["AdvancedDataProtectionMetrics"],
      context
    );
  }
  if (output["DetailedStatusCodesMetrics"] !== undefined) {
    contents.DetailedStatusCodesMetrics = deserializeAws_restXmlDetailedStatusCodesMetrics(
      output["DetailedStatusCodesMetrics"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlBuckets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlCloudWatchMetrics = (output: any, context: __SerdeContext): CloudWatchMetrics => {
  const contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlCreateMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): CreateMultiRegionAccessPointInput => {
  const contents: any = {
    Name: undefined,
    PublicAccessBlock: undefined,
    Regions: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["PublicAccessBlock"] !== undefined) {
    contents.PublicAccessBlock = deserializeAws_restXmlPublicAccessBlockConfiguration(
      output["PublicAccessBlock"],
      context
    );
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegionCreationList(
      __getArrayIfSingleItem(output["Regions"]["Region"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlDeleteMultiRegionAccessPointInput = (
  output: any,
  context: __SerdeContext
): DeleteMultiRegionAccessPointInput => {
  const contents: any = {
    Name: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  return contents;
};

const deserializeAws_restXmlDetailedStatusCodesMetrics = (
  output: any,
  context: __SerdeContext
): DetailedStatusCodesMetrics => {
  const contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlEndpoints = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_restXmlEstablishedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): EstablishedMultiRegionAccessPointPolicy => {
  const contents: any = {
    Policy: undefined,
  };
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  return contents;
};

const deserializeAws_restXml_Exclude = (output: any, context: __SerdeContext): _Exclude => {
  const contents: any = {
    Buckets: undefined,
    Regions: undefined,
  };
  if (output.Buckets === "") {
    contents.Buckets = [];
  } else if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

const deserializeAws_restXmlGeneratedManifestEncryption = (
  output: any,
  context: __SerdeContext
): GeneratedManifestEncryption => {
  const contents: any = {
    SSES3: undefined,
    SSEKMS: undefined,
  };
  if (output["SSE-S3"] !== undefined) {
    contents.SSES3 = deserializeAws_restXmlSSES3Encryption(output["SSE-S3"], context);
  }
  if (output["SSE-KMS"] !== undefined) {
    contents.SSEKMS = deserializeAws_restXmlSSEKMSEncryption(output["SSE-KMS"], context);
  }
  return contents;
};

const deserializeAws_restXmlInclude = (output: any, context: __SerdeContext): Include => {
  const contents: any = {
    Buckets: undefined,
    Regions: undefined,
  };
  if (output.Buckets === "") {
    contents.Buckets = [];
  } else if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

const deserializeAws_restXmlJobDescriptor = (output: any, context: __SerdeContext): JobDescriptor => {
  const contents: any = {
    JobId: undefined,
    ConfirmationRequired: undefined,
    Description: undefined,
    JobArn: undefined,
    Status: undefined,
    Manifest: undefined,
    Operation: undefined,
    Priority: undefined,
    ProgressSummary: undefined,
    StatusUpdateReason: undefined,
    FailureReasons: undefined,
    Report: undefined,
    CreationTime: undefined,
    TerminationDate: undefined,
    RoleArn: undefined,
    SuspendedDate: undefined,
    SuspendedCause: undefined,
    ManifestGenerator: undefined,
    GeneratedManifestDescriptor: undefined,
  };
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
    contents.Manifest = deserializeAws_restXmlJobManifest(output["Manifest"], context);
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = deserializeAws_restXmlJobOperation(output["Operation"], context);
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = __strictParseInt32(output["Priority"]) as number;
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
  }
  if (output["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = __expectString(output["StatusUpdateReason"]);
  }
  if (output.FailureReasons === "") {
    contents.FailureReasons = [];
  } else if (output["FailureReasons"] !== undefined && output["FailureReasons"]["member"] !== undefined) {
    contents.FailureReasons = deserializeAws_restXmlJobFailureList(
      __getArrayIfSingleItem(output["FailureReasons"]["member"]),
      context
    );
  }
  if (output["Report"] !== undefined) {
    contents.Report = deserializeAws_restXmlJobReport(output["Report"], context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTime(output["CreationTime"]));
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = __expectNonNull(__parseRfc3339DateTime(output["TerminationDate"]));
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["SuspendedDate"] !== undefined) {
    contents.SuspendedDate = __expectNonNull(__parseRfc3339DateTime(output["SuspendedDate"]));
  }
  if (output["SuspendedCause"] !== undefined) {
    contents.SuspendedCause = __expectString(output["SuspendedCause"]);
  }
  if (output.ManifestGenerator === "") {
    // Pass empty tags.
  } else if (output["ManifestGenerator"] !== undefined) {
    contents.ManifestGenerator = deserializeAws_restXmlJobManifestGenerator(
      __expectUnion(output["ManifestGenerator"]),
      context
    );
  }
  if (output["GeneratedManifestDescriptor"] !== undefined) {
    contents.GeneratedManifestDescriptor = deserializeAws_restXmlS3GeneratedManifestDescriptor(
      output["GeneratedManifestDescriptor"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobFailure = (output: any, context: __SerdeContext): JobFailure => {
  const contents: any = {
    FailureCode: undefined,
    FailureReason: undefined,
  };
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = __expectString(output["FailureCode"]);
  }
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = __expectString(output["FailureReason"]);
  }
  return contents;
};

const deserializeAws_restXmlJobFailureList = (output: any, context: __SerdeContext): JobFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlJobFailure(entry, context);
    });
};

const deserializeAws_restXmlJobListDescriptor = (output: any, context: __SerdeContext): JobListDescriptor => {
  const contents: any = {
    JobId: undefined,
    Description: undefined,
    Operation: undefined,
    Priority: undefined,
    Status: undefined,
    CreationTime: undefined,
    TerminationDate: undefined,
    ProgressSummary: undefined,
  };
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
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTime(output["CreationTime"]));
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = __expectNonNull(__parseRfc3339DateTime(output["TerminationDate"]));
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobListDescriptorList = (output: any, context: __SerdeContext): JobListDescriptor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlJobListDescriptor(entry, context);
    });
};

const deserializeAws_restXmlJobManifest = (output: any, context: __SerdeContext): JobManifest => {
  const contents: any = {
    Spec: undefined,
    Location: undefined,
  };
  if (output["Spec"] !== undefined) {
    contents.Spec = deserializeAws_restXmlJobManifestSpec(output["Spec"], context);
  }
  if (output["Location"] !== undefined) {
    contents.Location = deserializeAws_restXmlJobManifestLocation(output["Location"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobManifestFieldList = (
  output: any,
  context: __SerdeContext
): (JobManifestFieldName | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlJobManifestGenerator = (output: any, context: __SerdeContext): JobManifestGenerator => {
  if (output["S3JobManifestGenerator"] !== undefined) {
    return {
      S3JobManifestGenerator: deserializeAws_restXmlS3JobManifestGenerator(output["S3JobManifestGenerator"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlJobManifestGeneratorFilter = (
  output: any,
  context: __SerdeContext
): JobManifestGeneratorFilter => {
  const contents: any = {
    EligibleForReplication: undefined,
    CreatedAfter: undefined,
    CreatedBefore: undefined,
    ObjectReplicationStatuses: undefined,
  };
  if (output["EligibleForReplication"] !== undefined) {
    contents.EligibleForReplication = __parseBoolean(output["EligibleForReplication"]);
  }
  if (output["CreatedAfter"] !== undefined) {
    contents.CreatedAfter = __expectNonNull(__parseRfc3339DateTime(output["CreatedAfter"]));
  }
  if (output["CreatedBefore"] !== undefined) {
    contents.CreatedBefore = __expectNonNull(__parseRfc3339DateTime(output["CreatedBefore"]));
  }
  if (output.ObjectReplicationStatuses === "") {
    contents.ObjectReplicationStatuses = [];
  } else if (
    output["ObjectReplicationStatuses"] !== undefined &&
    output["ObjectReplicationStatuses"]["member"] !== undefined
  ) {
    contents.ObjectReplicationStatuses = deserializeAws_restXmlReplicationStatusFilterList(
      __getArrayIfSingleItem(output["ObjectReplicationStatuses"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobManifestLocation = (output: any, context: __SerdeContext): JobManifestLocation => {
  const contents: any = {
    ObjectArn: undefined,
    ObjectVersionId: undefined,
    ETag: undefined,
  };
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

const deserializeAws_restXmlJobManifestSpec = (output: any, context: __SerdeContext): JobManifestSpec => {
  const contents: any = {
    Format: undefined,
    Fields: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output.Fields === "") {
    contents.Fields = [];
  } else if (output["Fields"] !== undefined && output["Fields"]["member"] !== undefined) {
    contents.Fields = deserializeAws_restXmlJobManifestFieldList(
      __getArrayIfSingleItem(output["Fields"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobOperation = (output: any, context: __SerdeContext): JobOperation => {
  const contents: any = {
    LambdaInvoke: undefined,
    S3PutObjectCopy: undefined,
    S3PutObjectAcl: undefined,
    S3PutObjectTagging: undefined,
    S3DeleteObjectTagging: undefined,
    S3InitiateRestoreObject: undefined,
    S3PutObjectLegalHold: undefined,
    S3PutObjectRetention: undefined,
    S3ReplicateObject: undefined,
  };
  if (output["LambdaInvoke"] !== undefined) {
    contents.LambdaInvoke = deserializeAws_restXmlLambdaInvokeOperation(output["LambdaInvoke"], context);
  }
  if (output["S3PutObjectCopy"] !== undefined) {
    contents.S3PutObjectCopy = deserializeAws_restXmlS3CopyObjectOperation(output["S3PutObjectCopy"], context);
  }
  if (output["S3PutObjectAcl"] !== undefined) {
    contents.S3PutObjectAcl = deserializeAws_restXmlS3SetObjectAclOperation(output["S3PutObjectAcl"], context);
  }
  if (output["S3PutObjectTagging"] !== undefined) {
    contents.S3PutObjectTagging = deserializeAws_restXmlS3SetObjectTaggingOperation(
      output["S3PutObjectTagging"],
      context
    );
  }
  if (output["S3DeleteObjectTagging"] !== undefined) {
    contents.S3DeleteObjectTagging = deserializeAws_restXmlS3DeleteObjectTaggingOperation(
      output["S3DeleteObjectTagging"],
      context
    );
  }
  if (output["S3InitiateRestoreObject"] !== undefined) {
    contents.S3InitiateRestoreObject = deserializeAws_restXmlS3InitiateRestoreObjectOperation(
      output["S3InitiateRestoreObject"],
      context
    );
  }
  if (output["S3PutObjectLegalHold"] !== undefined) {
    contents.S3PutObjectLegalHold = deserializeAws_restXmlS3SetObjectLegalHoldOperation(
      output["S3PutObjectLegalHold"],
      context
    );
  }
  if (output["S3PutObjectRetention"] !== undefined) {
    contents.S3PutObjectRetention = deserializeAws_restXmlS3SetObjectRetentionOperation(
      output["S3PutObjectRetention"],
      context
    );
  }
  if (output["S3ReplicateObject"] !== undefined) {
    contents.S3ReplicateObject = deserializeAws_restXmlS3ReplicateObjectOperation(output["S3ReplicateObject"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobProgressSummary = (output: any, context: __SerdeContext): JobProgressSummary => {
  const contents: any = {
    TotalNumberOfTasks: undefined,
    NumberOfTasksSucceeded: undefined,
    NumberOfTasksFailed: undefined,
    Timers: undefined,
  };
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
    contents.Timers = deserializeAws_restXmlJobTimers(output["Timers"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobReport = (output: any, context: __SerdeContext): JobReport => {
  const contents: any = {
    Bucket: undefined,
    Format: undefined,
    Enabled: undefined,
    Prefix: undefined,
    ReportScope: undefined,
  };
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

const deserializeAws_restXmlJobTimers = (output: any, context: __SerdeContext): JobTimers => {
  const contents: any = {
    ElapsedTimeInActiveSeconds: undefined,
  };
  if (output["ElapsedTimeInActiveSeconds"] !== undefined) {
    contents.ElapsedTimeInActiveSeconds = __strictParseLong(output["ElapsedTimeInActiveSeconds"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlLambdaInvokeOperation = (output: any, context: __SerdeContext): LambdaInvokeOperation => {
  const contents: any = {
    FunctionArn: undefined,
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  return contents;
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
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Transitions === "") {
    contents.Transitions = [];
  } else if (output["Transitions"] !== undefined && output["Transitions"]["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(
      __getArrayIfSingleItem(output["Transitions"]["Transition"]),
      context
    );
  }
  if (output.NoncurrentVersionTransitions === "") {
    contents.NoncurrentVersionTransitions = [];
  } else if (
    output["NoncurrentVersionTransitions"] !== undefined &&
    output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"] !== undefined
  ) {
    contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList(
      __getArrayIfSingleItem(output["NoncurrentVersionTransitions"]["NoncurrentVersionTransition"]),
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  const contents: any = {
    Prefix: undefined,
    Tag: undefined,
    And: undefined,
    ObjectSizeGreaterThan: undefined,
    ObjectSizeLessThan: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlS3Tag(output["Tag"], context);
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context);
  }
  if (output["ObjectSizeGreaterThan"] !== undefined) {
    contents.ObjectSizeGreaterThan = __strictParseLong(output["ObjectSizeGreaterThan"]) as number;
  }
  if (output["ObjectSizeLessThan"] !== undefined) {
    contents.ObjectSizeLessThan = __strictParseLong(output["ObjectSizeLessThan"]) as number;
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};

const deserializeAws_restXmlListStorageLensConfigurationEntry = (
  output: any,
  context: __SerdeContext
): ListStorageLensConfigurationEntry => {
  const contents: any = {
    Id: undefined,
    StorageLensArn: undefined,
    HomeRegion: undefined,
    IsEnabled: undefined,
  };
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

const deserializeAws_restXmlMultiRegionAccessPointPolicyDocument = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointPolicyDocument => {
  const contents: any = {
    Established: undefined,
    Proposed: undefined,
  };
  if (output["Established"] !== undefined) {
    contents.Established = deserializeAws_restXmlEstablishedMultiRegionAccessPointPolicy(
      output["Established"],
      context
    );
  }
  if (output["Proposed"] !== undefined) {
    contents.Proposed = deserializeAws_restXmlProposedMultiRegionAccessPointPolicy(output["Proposed"], context);
  }
  return contents;
};

const deserializeAws_restXmlMultiRegionAccessPointRegionalResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse => {
  const contents: any = {
    Name: undefined,
    RequestStatus: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["RequestStatus"] !== undefined) {
    contents.RequestStatus = __expectString(output["RequestStatus"]);
  }
  return contents;
};

const deserializeAws_restXmlMultiRegionAccessPointRegionalResponseList = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRegionalResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlMultiRegionAccessPointRegionalResponse(entry, context);
    });
};

const deserializeAws_restXmlMultiRegionAccessPointReport = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointReport => {
  const contents: any = {
    Name: undefined,
    Alias: undefined,
    CreatedAt: undefined,
    PublicAccessBlock: undefined,
    Status: undefined,
    Regions: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Alias"] !== undefined) {
    contents.Alias = __expectString(output["Alias"]);
  }
  if (output["CreatedAt"] !== undefined) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(output["CreatedAt"]));
  }
  if (output["PublicAccessBlock"] !== undefined) {
    contents.PublicAccessBlock = deserializeAws_restXmlPublicAccessBlockConfiguration(
      output["PublicAccessBlock"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegionReportList(
      __getArrayIfSingleItem(output["Regions"]["Region"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlMultiRegionAccessPointReportList = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlMultiRegionAccessPointReport(entry, context);
    });
};

const deserializeAws_restXmlMultiRegionAccessPointRoute = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointRoute => {
  const contents: any = {
    Bucket: undefined,
    Region: undefined,
    TrafficDialPercentage: undefined,
  };
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

const deserializeAws_restXmlMultiRegionAccessPointsAsyncResponse = (
  output: any,
  context: __SerdeContext
): MultiRegionAccessPointsAsyncResponse => {
  const contents: any = {
    Regions: undefined,
  };
  if (output.Regions === "") {
    contents.Regions = [];
  } else if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlMultiRegionAccessPointRegionalResponseList(
      __getArrayIfSingleItem(output["Regions"]["Region"]),
      context
    );
  }
  return contents;
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
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = __strictParseInt32(output["NoncurrentDays"]) as number;
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = __expectString(output["StorageClass"]);
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

const deserializeAws_restXmlObjectLambdaAccessPoint = (
  output: any,
  context: __SerdeContext
): ObjectLambdaAccessPoint => {
  const contents: any = {
    Name: undefined,
    ObjectLambdaAccessPointArn: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["ObjectLambdaAccessPointArn"] !== undefined) {
    contents.ObjectLambdaAccessPointArn = __expectString(output["ObjectLambdaAccessPointArn"]);
  }
  return contents;
};

const deserializeAws_restXmlObjectLambdaAccessPointList = (
  output: any,
  context: __SerdeContext
): ObjectLambdaAccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlObjectLambdaAccessPoint(entry, context);
    });
};

const deserializeAws_restXmlObjectLambdaAllowedFeaturesList = (
  output: any,
  context: __SerdeContext
): (ObjectLambdaAllowedFeature | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlObjectLambdaConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLambdaConfiguration => {
  const contents: any = {
    SupportingAccessPoint: undefined,
    CloudWatchMetricsEnabled: undefined,
    AllowedFeatures: undefined,
    TransformationConfigurations: undefined,
  };
  if (output["SupportingAccessPoint"] !== undefined) {
    contents.SupportingAccessPoint = __expectString(output["SupportingAccessPoint"]);
  }
  if (output["CloudWatchMetricsEnabled"] !== undefined) {
    contents.CloudWatchMetricsEnabled = __parseBoolean(output["CloudWatchMetricsEnabled"]);
  }
  if (output.AllowedFeatures === "") {
    contents.AllowedFeatures = [];
  } else if (output["AllowedFeatures"] !== undefined && output["AllowedFeatures"]["AllowedFeature"] !== undefined) {
    contents.AllowedFeatures = deserializeAws_restXmlObjectLambdaAllowedFeaturesList(
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
    contents.TransformationConfigurations = deserializeAws_restXmlObjectLambdaTransformationConfigurationsList(
      __getArrayIfSingleItem(output["TransformationConfigurations"]["TransformationConfiguration"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlObjectLambdaContentTransformation = (
  output: any,
  context: __SerdeContext
): ObjectLambdaContentTransformation => {
  if (output["AwsLambda"] !== undefined) {
    return {
      AwsLambda: deserializeAws_restXmlAwsLambdaTransformation(output["AwsLambda"], context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restXmlObjectLambdaTransformationConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration => {
  const contents: any = {
    Actions: undefined,
    ContentTransformation: undefined,
  };
  if (output.Actions === "") {
    contents.Actions = [];
  } else if (output["Actions"] !== undefined && output["Actions"]["Action"] !== undefined) {
    contents.Actions = deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(
      __getArrayIfSingleItem(output["Actions"]["Action"]),
      context
    );
  }
  if (output.ContentTransformation === "") {
    // Pass empty tags.
  } else if (output["ContentTransformation"] !== undefined) {
    contents.ContentTransformation = deserializeAws_restXmlObjectLambdaContentTransformation(
      __expectUnion(output["ContentTransformation"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList = (
  output: any,
  context: __SerdeContext
): (ObjectLambdaTransformationConfigurationAction | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlObjectLambdaTransformationConfigurationsList = (
  output: any,
  context: __SerdeContext
): ObjectLambdaTransformationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
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

const deserializeAws_restXmlPrefixLevel = (output: any, context: __SerdeContext): PrefixLevel => {
  const contents: any = {
    StorageMetrics: undefined,
  };
  if (output["StorageMetrics"] !== undefined) {
    contents.StorageMetrics = deserializeAws_restXmlPrefixLevelStorageMetrics(output["StorageMetrics"], context);
  }
  return contents;
};

const deserializeAws_restXmlPrefixLevelStorageMetrics = (
  output: any,
  context: __SerdeContext
): PrefixLevelStorageMetrics => {
  const contents: any = {
    IsEnabled: undefined,
    SelectionCriteria: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["SelectionCriteria"] !== undefined) {
    contents.SelectionCriteria = deserializeAws_restXmlSelectionCriteria(output["SelectionCriteria"], context);
  }
  return contents;
};

const deserializeAws_restXmlProposedMultiRegionAccessPointPolicy = (
  output: any,
  context: __SerdeContext
): ProposedMultiRegionAccessPointPolicy => {
  const contents: any = {
    Policy: undefined,
  };
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
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

const deserializeAws_restXmlPutMultiRegionAccessPointPolicyInput = (
  output: any,
  context: __SerdeContext
): PutMultiRegionAccessPointPolicyInput => {
  const contents: any = {
    Name: undefined,
    Policy: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Policy"] !== undefined) {
    contents.Policy = __expectString(output["Policy"]);
  }
  return contents;
};

const deserializeAws_restXmlRegion = (output: any, context: __SerdeContext): Region => {
  const contents: any = {
    Bucket: undefined,
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  return contents;
};

const deserializeAws_restXmlRegionalBucket = (output: any, context: __SerdeContext): RegionalBucket => {
  const contents: any = {
    Bucket: undefined,
    BucketArn: undefined,
    PublicAccessBlockEnabled: undefined,
    CreationDate: undefined,
    OutpostId: undefined,
  };
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
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(output["CreationDate"]));
  }
  if (output["OutpostId"] !== undefined) {
    contents.OutpostId = __expectString(output["OutpostId"]);
  }
  return contents;
};

const deserializeAws_restXmlRegionalBucketList = (output: any, context: __SerdeContext): RegionalBucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlRegionalBucket(entry, context);
    });
};

const deserializeAws_restXmlRegionCreationList = (output: any, context: __SerdeContext): Region[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlRegion(entry, context);
    });
};

const deserializeAws_restXmlRegionReport = (output: any, context: __SerdeContext): RegionReport => {
  const contents: any = {
    Bucket: undefined,
    Region: undefined,
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = __expectString(output["Bucket"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  return contents;
};

const deserializeAws_restXmlRegionReportList = (output: any, context: __SerdeContext): RegionReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlRegionReport(entry, context);
    });
};

const deserializeAws_restXmlRegions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlReplicationStatusFilterList = (
  output: any,
  context: __SerdeContext
): (ReplicationStatus | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlRouteList = (output: any, context: __SerdeContext): MultiRegionAccessPointRoute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlMultiRegionAccessPointRoute(entry, context);
    });
};

const deserializeAws_restXmlS3AccessControlList = (output: any, context: __SerdeContext): S3AccessControlList => {
  const contents: any = {
    Owner: undefined,
    Grants: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlS3ObjectOwner(output["Owner"], context);
  }
  if (output.Grants === "") {
    contents.Grants = [];
  } else if (output["Grants"] !== undefined && output["Grants"]["member"] !== undefined) {
    contents.Grants = deserializeAws_restXmlS3GrantList(__getArrayIfSingleItem(output["Grants"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlS3AccessControlPolicy = (output: any, context: __SerdeContext): S3AccessControlPolicy => {
  const contents: any = {
    AccessControlList: undefined,
    CannedAccessControlList: undefined,
  };
  if (output["AccessControlList"] !== undefined) {
    contents.AccessControlList = deserializeAws_restXmlS3AccessControlList(output["AccessControlList"], context);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = __expectString(output["CannedAccessControlList"]);
  }
  return contents;
};

const deserializeAws_restXmlS3BucketDestination = (output: any, context: __SerdeContext): S3BucketDestination => {
  const contents: any = {
    Format: undefined,
    OutputSchemaVersion: undefined,
    AccountId: undefined,
    Arn: undefined,
    Prefix: undefined,
    Encryption: undefined,
  };
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
    contents.Encryption = deserializeAws_restXmlStorageLensDataExportEncryption(output["Encryption"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3CopyObjectOperation = (output: any, context: __SerdeContext): S3CopyObjectOperation => {
  const contents: any = {
    TargetResource: undefined,
    CannedAccessControlList: undefined,
    AccessControlGrants: undefined,
    MetadataDirective: undefined,
    ModifiedSinceConstraint: undefined,
    NewObjectMetadata: undefined,
    NewObjectTagging: undefined,
    RedirectLocation: undefined,
    RequesterPays: undefined,
    StorageClass: undefined,
    UnModifiedSinceConstraint: undefined,
    SSEAwsKmsKeyId: undefined,
    TargetKeyPrefix: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    BucketKeyEnabled: undefined,
    ChecksumAlgorithm: undefined,
  };
  if (output["TargetResource"] !== undefined) {
    contents.TargetResource = __expectString(output["TargetResource"]);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = __expectString(output["CannedAccessControlList"]);
  }
  if (output.AccessControlGrants === "") {
    contents.AccessControlGrants = [];
  } else if (output["AccessControlGrants"] !== undefined && output["AccessControlGrants"]["member"] !== undefined) {
    contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(
      __getArrayIfSingleItem(output["AccessControlGrants"]["member"]),
      context
    );
  }
  if (output["MetadataDirective"] !== undefined) {
    contents.MetadataDirective = __expectString(output["MetadataDirective"]);
  }
  if (output["ModifiedSinceConstraint"] !== undefined) {
    contents.ModifiedSinceConstraint = __expectNonNull(__parseRfc3339DateTime(output["ModifiedSinceConstraint"]));
  }
  if (output["NewObjectMetadata"] !== undefined) {
    contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(output["NewObjectMetadata"], context);
  }
  if (output.NewObjectTagging === "") {
    contents.NewObjectTagging = [];
  } else if (output["NewObjectTagging"] !== undefined && output["NewObjectTagging"]["member"] !== undefined) {
    contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(
      __getArrayIfSingleItem(output["NewObjectTagging"]["member"]),
      context
    );
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
    contents.UnModifiedSinceConstraint = __expectNonNull(__parseRfc3339DateTime(output["UnModifiedSinceConstraint"]));
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
    contents.ObjectLockRetainUntilDate = __expectNonNull(__parseRfc3339DateTime(output["ObjectLockRetainUntilDate"]));
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = __parseBoolean(output["BucketKeyEnabled"]);
  }
  if (output["ChecksumAlgorithm"] !== undefined) {
    contents.ChecksumAlgorithm = __expectString(output["ChecksumAlgorithm"]);
  }
  return contents;
};

const deserializeAws_restXmlS3DeleteObjectTaggingOperation = (
  output: any,
  context: __SerdeContext
): S3DeleteObjectTaggingOperation => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlS3GeneratedManifestDescriptor = (
  output: any,
  context: __SerdeContext
): S3GeneratedManifestDescriptor => {
  const contents: any = {
    Format: undefined,
    Location: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output["Location"] !== undefined) {
    contents.Location = deserializeAws_restXmlJobManifestLocation(output["Location"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3Grant = (output: any, context: __SerdeContext): S3Grant => {
  const contents: any = {
    Grantee: undefined,
    Permission: undefined,
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlS3Grantee(output["Grantee"], context);
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = __expectString(output["Permission"]);
  }
  return contents;
};

const deserializeAws_restXmlS3Grantee = (output: any, context: __SerdeContext): S3Grantee => {
  const contents: any = {
    TypeIdentifier: undefined,
    Identifier: undefined,
    DisplayName: undefined,
  };
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

const deserializeAws_restXmlS3GrantList = (output: any, context: __SerdeContext): S3Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlS3Grant(entry, context);
    });
};

const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  const contents: any = {
    ExpirationInDays: undefined,
    GlacierJobTier: undefined,
  };
  if (output["ExpirationInDays"] !== undefined) {
    contents.ExpirationInDays = __strictParseInt32(output["ExpirationInDays"]) as number;
  }
  if (output["GlacierJobTier"] !== undefined) {
    contents.GlacierJobTier = __expectString(output["GlacierJobTier"]);
  }
  return contents;
};

const deserializeAws_restXmlS3JobManifestGenerator = (output: any, context: __SerdeContext): S3JobManifestGenerator => {
  const contents: any = {
    ExpectedBucketOwner: undefined,
    SourceBucket: undefined,
    ManifestOutputLocation: undefined,
    Filter: undefined,
    EnableManifestOutput: undefined,
  };
  if (output["ExpectedBucketOwner"] !== undefined) {
    contents.ExpectedBucketOwner = __expectString(output["ExpectedBucketOwner"]);
  }
  if (output["SourceBucket"] !== undefined) {
    contents.SourceBucket = __expectString(output["SourceBucket"]);
  }
  if (output["ManifestOutputLocation"] !== undefined) {
    contents.ManifestOutputLocation = deserializeAws_restXmlS3ManifestOutputLocation(
      output["ManifestOutputLocation"],
      context
    );
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlJobManifestGeneratorFilter(output["Filter"], context);
  }
  if (output["EnableManifestOutput"] !== undefined) {
    contents.EnableManifestOutput = __parseBoolean(output["EnableManifestOutput"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ManifestOutputLocation = (
  output: any,
  context: __SerdeContext
): S3ManifestOutputLocation => {
  const contents: any = {
    ExpectedManifestBucketOwner: undefined,
    Bucket: undefined,
    ManifestPrefix: undefined,
    ManifestEncryption: undefined,
    ManifestFormat: undefined,
  };
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
    contents.ManifestEncryption = deserializeAws_restXmlGeneratedManifestEncryption(
      output["ManifestEncryption"],
      context
    );
  }
  if (output["ManifestFormat"] !== undefined) {
    contents.ManifestFormat = __expectString(output["ManifestFormat"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectLockLegalHold = (output: any, context: __SerdeContext): S3ObjectLockLegalHold => {
  const contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectMetadata = (output: any, context: __SerdeContext): S3ObjectMetadata => {
  const contents: any = {
    CacheControl: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    UserMetadata: undefined,
    ContentLength: undefined,
    ContentMD5: undefined,
    ContentType: undefined,
    HttpExpiresDate: undefined,
    RequesterCharged: undefined,
    SSEAlgorithm: undefined,
  };
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
    contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(
      __getArrayIfSingleItem(output["UserMetadata"]["entry"]),
      context
    );
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
    contents.HttpExpiresDate = __expectNonNull(__parseRfc3339DateTime(output["HttpExpiresDate"]));
  }
  if (output["RequesterCharged"] !== undefined) {
    contents.RequesterCharged = __parseBoolean(output["RequesterCharged"]);
  }
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = __expectString(output["SSEAlgorithm"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectOwner = (output: any, context: __SerdeContext): S3ObjectOwner => {
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

const deserializeAws_restXmlS3ReplicateObjectOperation = (
  output: any,
  context: __SerdeContext
): S3ReplicateObjectOperation => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlS3Retention = (output: any, context: __SerdeContext): S3Retention => {
  const contents: any = {
    RetainUntilDate: undefined,
    Mode: undefined,
  };
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = __expectNonNull(__parseRfc3339DateTime(output["RetainUntilDate"]));
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectAclOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectAclOperation => {
  const contents: any = {
    AccessControlPolicy: undefined,
  };
  if (output["AccessControlPolicy"] !== undefined) {
    contents.AccessControlPolicy = deserializeAws_restXmlS3AccessControlPolicy(output["AccessControlPolicy"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectLegalHoldOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectLegalHoldOperation => {
  const contents: any = {
    LegalHold: undefined,
  };
  if (output["LegalHold"] !== undefined) {
    contents.LegalHold = deserializeAws_restXmlS3ObjectLockLegalHold(output["LegalHold"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectRetentionOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectRetentionOperation => {
  const contents: any = {
    BypassGovernanceRetention: undefined,
    Retention: undefined,
  };
  if (output["BypassGovernanceRetention"] !== undefined) {
    contents.BypassGovernanceRetention = __parseBoolean(output["BypassGovernanceRetention"]);
  }
  if (output["Retention"] !== undefined) {
    contents.Retention = deserializeAws_restXmlS3Retention(output["Retention"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectTaggingOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectTaggingOperation => {
  const contents: any = {
    TagSet: undefined,
  };
  if (output.TagSet === "") {
    contents.TagSet = [];
  } else if (output["TagSet"] !== undefined && output["TagSet"]["member"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["TagSet"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlS3Tag = (output: any, context: __SerdeContext): S3Tag => {
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

const deserializeAws_restXmlS3TagSet = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlS3Tag(entry, context);
    });
};

const deserializeAws_restXmlS3UserMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_restXmlSelectionCriteria = (output: any, context: __SerdeContext): SelectionCriteria => {
  const contents: any = {
    Delimiter: undefined,
    MaxDepth: undefined,
    MinStorageBytesPercentage: undefined,
  };
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

const deserializeAws_restXmlSSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  const contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
  }
  return contents;
};

const deserializeAws_restXmlSSEKMSEncryption = (output: any, context: __SerdeContext): SSEKMSEncryption => {
  const contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
  }
  return contents;
};

const deserializeAws_restXmlSSES3 = (output: any, context: __SerdeContext): SSES3 => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlSSES3Encryption = (output: any, context: __SerdeContext): SSES3Encryption => {
  const contents: any = {};
  return contents;
};

const deserializeAws_restXmlStorageLensAwsOrg = (output: any, context: __SerdeContext): StorageLensAwsOrg => {
  const contents: any = {
    Arn: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_restXmlStorageLensConfiguration = (
  output: any,
  context: __SerdeContext
): StorageLensConfiguration => {
  const contents: any = {
    Id: undefined,
    AccountLevel: undefined,
    Include: undefined,
    Exclude: undefined,
    DataExport: undefined,
    IsEnabled: undefined,
    AwsOrg: undefined,
    StorageLensArn: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["AccountLevel"] !== undefined) {
    contents.AccountLevel = deserializeAws_restXmlAccountLevel(output["AccountLevel"], context);
  }
  if (output["Include"] !== undefined) {
    contents.Include = deserializeAws_restXmlInclude(output["Include"], context);
  }
  if (output["Exclude"] !== undefined) {
    contents.Exclude = deserializeAws_restXml_Exclude(output["Exclude"], context);
  }
  if (output["DataExport"] !== undefined) {
    contents.DataExport = deserializeAws_restXmlStorageLensDataExport(output["DataExport"], context);
  }
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  if (output["AwsOrg"] !== undefined) {
    contents.AwsOrg = deserializeAws_restXmlStorageLensAwsOrg(output["AwsOrg"], context);
  }
  if (output["StorageLensArn"] !== undefined) {
    contents.StorageLensArn = __expectString(output["StorageLensArn"]);
  }
  return contents;
};

const deserializeAws_restXmlStorageLensConfigurationList = (
  output: any,
  context: __SerdeContext
): ListStorageLensConfigurationEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlListStorageLensConfigurationEntry(entry, context);
    });
};

const deserializeAws_restXmlStorageLensDataExport = (output: any, context: __SerdeContext): StorageLensDataExport => {
  const contents: any = {
    S3BucketDestination: undefined,
    CloudWatchMetrics: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlS3BucketDestination(output["S3BucketDestination"], context);
  }
  if (output["CloudWatchMetrics"] !== undefined) {
    contents.CloudWatchMetrics = deserializeAws_restXmlCloudWatchMetrics(output["CloudWatchMetrics"], context);
  }
  return contents;
};

const deserializeAws_restXmlStorageLensDataExportEncryption = (
  output: any,
  context: __SerdeContext
): StorageLensDataExportEncryption => {
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

const deserializeAws_restXmlStorageLensTag = (output: any, context: __SerdeContext): StorageLensTag => {
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

const deserializeAws_restXmlStorageLensTags = (output: any, context: __SerdeContext): StorageLensTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_restXmlStorageLensTag(entry, context);
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

const deserializeAws_restXmlVpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  const contents: any = {
    VpcId: undefined,
  };
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
