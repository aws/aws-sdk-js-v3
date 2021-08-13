import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "../commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
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
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "../commands/GetJobTaggingCommand";
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
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "../commands/PutJobTaggingCommand";
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
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "../commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "../commands/UpdateJobStatusCommand";
import {
  AbortIncompleteMultipartUpload,
  AccessPoint,
  AccountLevel,
  ActivityMetrics,
  AwsLambdaTransformation,
  BadRequestException,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketLevel,
  CreateBucketConfiguration,
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
  JobManifestLocation,
  JobManifestSpec,
  JobOperation,
  JobProgressSummary,
  JobReport,
  JobStatusException,
  LambdaInvokeOperation,
  LifecycleConfiguration,
  LifecycleExpiration,
  LifecycleRule,
  LifecycleRuleAndOperator,
  LifecycleRuleFilter,
  ListStorageLensConfigurationEntry,
  NoSuchPublicAccessBlockConfiguration,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
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
  PublicAccessBlockConfiguration,
  RegionalBucket,
  S3AccessControlList,
  S3AccessControlPolicy,
  S3BucketDestination,
  S3CopyObjectOperation,
  S3DeleteObjectTaggingOperation,
  S3Grant,
  S3Grantee,
  S3InitiateRestoreObjectOperation,
  S3ObjectLockLegalHold,
  S3ObjectMetadata,
  S3ObjectOwner,
  S3Retention,
  S3SetObjectAclOperation,
  S3SetObjectLegalHoldOperation,
  S3SetObjectRetentionOperation,
  S3SetObjectTaggingOperation,
  S3Tag,
  SSEKMS,
  SSES3,
  SelectionCriteria,
  StorageLensAwsOrg,
  StorageLensConfiguration,
  StorageLensDataExport,
  StorageLensDataExportEncryption,
  StorageLensTag,
  Tagging,
  TooManyRequestsException,
  TooManyTagsException,
  Transition,
  VpcConfiguration,
  _Exclude,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restXmlCreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateAccessPointRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("BucketName").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
      "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket!.toString(),
    }),
    ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateJobRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength64String")
      .addChildNode(new __XmlText(input.ClientRequestToken))
      .withName("ClientRequestToken");
    bodyNode.addChildNode(node);
  }
  if (input.ConfirmationRequired !== undefined) {
    const node = new __XmlNode("ConfirmationRequired")
      .addChildNode(new __XmlText(String(input.ConfirmationRequired)))
      .withName("ConfirmationRequired");
    bodyNode.addChildNode(node);
  }
  if (input.Description !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength256String")
      .addChildNode(new __XmlText(input.Description))
      .withName("Description");
    bodyNode.addChildNode(node);
  }
  if (input.Manifest !== undefined) {
    const node = serializeAws_restXmlJobManifest(input.Manifest, context).withName("Manifest");
    bodyNode.addChildNode(node);
  }
  if (input.Operation !== undefined) {
    const node = serializeAws_restXmlJobOperation(input.Operation, context).withName("Operation");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined) {
    const node = new __XmlNode("JobPriority").addChildNode(new __XmlText(String(input.Priority))).withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Report !== undefined) {
    const node = serializeAws_restXmlJobReport(input.Report, context).withName("Report");
    bodyNode.addChildNode(node);
  }
  if (input.RoleArn !== undefined) {
    const node = new __XmlNode("IAMRoleArn").addChildNode(new __XmlText(input.RoleArn)).withName("RoleArn");
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

export const serializeAws_restXmlDeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/configuration";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspoint/{Name}/policyStatus";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policyStatus";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint";
  const query: any = {
    ...(input.Bucket !== undefined && { bucket: input.Bucket }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspointforobjectlambda";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs";
  const query: any = {
    ...(input.JobStatuses !== undefined && { jobStatuses: (input.JobStatuses || []).map((_entry) => _entry) }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
    ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/configuration";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = new __XmlNode("Policy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/accesspointforobjectlambda/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointPolicyForObjectLambdaRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = new __XmlNode("ObjectLambdaPolicy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
    ...(isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
      "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess!.toString(),
    }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/policy";
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
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutBucketPolicyRequest");
  bodyNode.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
  if (input.Policy !== undefined) {
    const node = new __XmlNode("Policy").addChildNode(new __XmlText(input.Policy)).withName("Policy");
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/bucket/{Bucket}/tagging";
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

export const serializeAws_restXmlPutJobTaggingCommand = async (
  input: PutJobTaggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/tagging";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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
  const headers: any = {
    "content-type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/storagelens/{ConfigId}/tagging";
  if (input.ConfigId !== undefined) {
    const labelValue: string = input.ConfigId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigId.");
  }
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

export const serializeAws_restXmlUpdateJobPriorityCommand = async (
  input: UpdateJobPriorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/priority";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  const query: any = {
    ...(input.Priority !== undefined && { priority: input.Priority.toString() }),
  };
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20180820/jobs/{JobId}/status";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  const query: any = {
    ...(input.RequestedJobStatus !== undefined && { requestedJobStatus: input.RequestedJobStatus }),
    ...(input.StatusUpdateReason !== undefined && { statusUpdateReason: input.StatusUpdateReason }),
  };
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
  const contents: CreateAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPointArn: undefined,
    Alias: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(data["AccessPointArn"]);
  }
  if (data["Alias"] !== undefined) {
    contents.Alias = __expectString(data["Alias"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: CreateAccessPointForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ObjectLambdaAccessPointArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["ObjectLambdaAccessPointArn"] !== undefined) {
    contents.ObjectLambdaAccessPointArn = __expectString(data["ObjectLambdaAccessPointArn"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
    BucketArn: undefined,
    Location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.Location = output.headers["location"];
  }
  const data: any = await parseBody(output.body, context);
  if (data["BucketArn"] !== undefined) {
    contents.BucketArn = __expectString(data["BucketArn"]);
  }
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
    case "com.amazonaws.s3control#BucketAlreadyExists":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BucketAlreadyOwnedByYou":
    case "com.amazonaws.s3control#BucketAlreadyOwnedByYou":
      response = {
        ...(await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlCreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlCreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyException":
    case "com.amazonaws.s3control#IdempotencyException":
      response = {
        ...(await deserializeAws_restXmlIdempotencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: DeleteAccessPointForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointPolicyCommandError(output, context);
  }
  const contents: DeleteAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: DeleteAccessPointPolicyForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError(output, context);
  }
  const contents: DeleteBucketLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteBucketLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketLifecycleConfigurationCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteJobTaggingCommandError(output, context);
  }
  const contents: DeleteJobTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStorageLensConfigurationCommandError(output, context);
  }
  const contents: DeleteStorageLensConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: DeleteStorageLensConfigurationTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDeleteStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageLensConfigurationTaggingCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlDescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlDescribeJobCommandError(output, context);
  }
  const contents: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Job: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Job"] !== undefined) {
    contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlDescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointCommandError(output, context);
  }
  const contents: GetAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPointArn: undefined,
    Alias: undefined,
    Bucket: undefined,
    CreationDate: undefined,
    Endpoints: undefined,
    Name: undefined,
    NetworkOrigin: undefined,
    PublicAccessBlockConfiguration: undefined,
    VpcConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = __expectString(data["AccessPointArn"]);
  }
  if (data["Alias"] !== undefined) {
    contents.Alias = __expectString(data["Alias"]);
  }
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(data["CreationDate"]);
  }
  if (data.Endpoints === "") {
    contents.Endpoints = {};
  }
  if (data["Endpoints"] !== undefined && data["Endpoints"]["entry"] !== undefined) {
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: GetAccessPointConfigurationForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    Configuration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Configuration"] !== undefined) {
    contents.Configuration = deserializeAws_restXmlObjectLambdaConfiguration(data["Configuration"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointConfigurationForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError(output, context);
  }
  const contents: GetAccessPointForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreationDate: undefined,
    Name: undefined,
    PublicAccessBlockConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(data["CreationDate"]);
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
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context);
  }
  const contents: GetAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: GetAccessPointPolicyForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Policy"] !== undefined) {
    contents.Policy = __expectString(data["Policy"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(output, context);
  }
  const contents: GetAccessPointPolicyStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    PolicyStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError(output, context);
  }
  const contents: GetAccessPointPolicyStatusForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    PolicyStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data["PolicyStatus"], context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetBucketCommandError(output, context);
  }
  const contents: GetBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    CreationDate: undefined,
    PublicAccessBlockEnabled: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = __expectString(data["Bucket"]);
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(data["CreationDate"]);
  }
  if (data["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = __parseBoolean(data["PublicAccessBlockEnabled"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
  if (data.Rules === "") {
    contents.Rules = [];
  }
  if (data["Rules"] !== undefined && data["Rules"]["Rule"] !== undefined) {
    contents.Rules = deserializeAws_restXmlLifecycleRules(__getArrayIfSingleItem(data["Rules"]["Rule"]), context);
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
    contents.Policy = __expectString(data["Policy"]);
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
  if (data["TagSet"] !== undefined && data["TagSet"]["member"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["TagSet"]["member"]), context);
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetJobTaggingCommandError(output, context);
  }
  const contents: GetJobTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags === "") {
    contents.Tags = [];
  }
  if (data["Tags"] !== undefined && data["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["Tags"]["member"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStorageLensConfigurationCommandError(output, context);
  }
  const contents: GetStorageLensConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    StorageLensConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.StorageLensConfiguration = deserializeAws_restXmlStorageLensConfiguration(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: GetStorageLensConfigurationTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags === "") {
    contents.Tags = [];
  }
  if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlStorageLensTags(__getArrayIfSingleItem(data["Tags"]["Tag"]), context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlGetStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageLensConfigurationTaggingCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListAccessPointsCommandError(output, context);
  }
  const contents: ListAccessPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPointList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessPointList === "") {
    contents.AccessPointList = [];
  }
  if (data["AccessPointList"] !== undefined && data["AccessPointList"]["AccessPoint"] !== undefined) {
    contents.AccessPointList = deserializeAws_restXmlAccessPointList(
      __getArrayIfSingleItem(data["AccessPointList"]["AccessPoint"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListAccessPointsForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError(output, context);
  }
  const contents: ListAccessPointsForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ObjectLambdaAccessPointList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.ObjectLambdaAccessPointList === "") {
    contents.ObjectLambdaAccessPointList = [];
  }
  if (
    data["ObjectLambdaAccessPointList"] !== undefined &&
    data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"] !== undefined
  ) {
    contents.ObjectLambdaAccessPointList = deserializeAws_restXmlObjectLambdaAccessPointList(
      __getArrayIfSingleItem(data["ObjectLambdaAccessPointList"]["ObjectLambdaAccessPoint"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListAccessPointsForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs === "") {
    contents.Jobs = [];
  }
  if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
    contents.Jobs = deserializeAws_restXmlJobListDescriptorList(
      __getArrayIfSingleItem(data["Jobs"]["member"]),
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.s3control#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restXmlInvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.s3control#InvalidRequestException":
      response = {
        ...(await deserializeAws_restXmlInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListRegionalBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListRegionalBucketsCommandError(output, context);
  }
  const contents: ListRegionalBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RegionalBucketList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.RegionalBucketList === "") {
    contents.RegionalBucketList = [];
  }
  if (data["RegionalBucketList"] !== undefined && data["RegionalBucketList"]["RegionalBucket"] !== undefined) {
    contents.RegionalBucketList = deserializeAws_restXmlRegionalBucketList(
      __getArrayIfSingleItem(data["RegionalBucketList"]["RegionalBucket"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListRegionalBucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionalBucketsCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlListStorageLensConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlListStorageLensConfigurationsCommandError(output, context);
  }
  const contents: ListStorageLensConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    StorageLensConfigurationList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["NextToken"] !== undefined) {
    contents.NextToken = __expectString(data["NextToken"]);
  }
  if (data.StorageLensConfigurationList === "") {
    contents.StorageLensConfigurationList = [];
  }
  if (data["StorageLensConfigurationList"] !== undefined) {
    contents.StorageLensConfigurationList = deserializeAws_restXmlStorageLensConfigurationList(
      __getArrayIfSingleItem(data["StorageLensConfigurationList"]),
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlListStorageLensConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageLensConfigurationsCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError(output, context);
  }
  const contents: PutAccessPointConfigurationForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointConfigurationForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointPolicyCommandError(output, context);
  }
  const contents: PutAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError(output, context);
  }
  const contents: PutAccessPointPolicyForObjectLambdaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutAccessPointPolicyForObjectLambdaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyForObjectLambdaCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutJobTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutJobTaggingCommandError(output, context);
  }
  const contents: PutJobTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutJobTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobTaggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.s3control#TooManyTagsException":
      response = {
        ...(await deserializeAws_restXmlTooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutStorageLensConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutStorageLensConfigurationCommandError(output, context);
  }
  const contents: PutStorageLensConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutStorageLensConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError(output, context);
  }
  const contents: PutStorageLensConfigurationTaggingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlPutStorageLensConfigurationTaggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageLensConfigurationTaggingCommandOutput> => {
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
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateJobPriorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
  }
  const contents: UpdateJobPriorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
    Priority: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  if (data["Priority"] !== undefined) {
    contents.Priority = parseInt(data["Priority"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateJobPriorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restXmlUpdateJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restXmlUpdateJobStatusCommandError(output, context);
  }
  const contents: UpdateJobStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
    Status: undefined,
    StatusUpdateReason: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = __expectString(data["JobId"]);
  }
  if (data["Status"] !== undefined) {
    contents.Status = __expectString(data["Status"]);
  }
  if (data["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = __expectString(data["StatusUpdateReason"]);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restXmlUpdateJobStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "JobStatusException":
    case "com.amazonaws.s3control#JobStatusException":
      response = {
        ...(await deserializeAws_restXmlJobStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restXmlBadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
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
  const data: any = parsedOutput.body.Error;
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
  const data: any = parsedOutput.body.Error;
  return contents;
};

const deserializeAws_restXmlIdempotencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const contents: IdempotencyException = {
    name: "IdempotencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlInternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlInvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlJobStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobStatusException> => {
  const contents: JobStatusException = {
    name: "JobStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchPublicAccessBlockConfiguration> => {
  const contents: NoSuchPublicAccessBlockConfiguration = {
    name: "NoSuchPublicAccessBlockConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const deserializeAws_restXmlTooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = __expectString(data["Message"]);
  }
  return contents;
};

const serializeAws_restXmlAbortIncompleteMultipartUpload = (
  input: AbortIncompleteMultipartUpload,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("AbortIncompleteMultipartUpload");
  if (input.DaysAfterInitiation !== undefined && input.DaysAfterInitiation !== null) {
    const node = new __XmlNode("DaysAfterInitiation")
      .addChildNode(new __XmlText(String(input.DaysAfterInitiation)))
      .withName("DaysAfterInitiation");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAccountLevel = (input: AccountLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AccountLevel");
  if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
    const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.BucketLevel !== undefined && input.BucketLevel !== null) {
    const node = serializeAws_restXmlBucketLevel(input.BucketLevel, context).withName("BucketLevel");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlActivityMetrics = (input: ActivityMetrics, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("ActivityMetrics");
  if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
    const node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlAwsLambdaTransformation = (input: AwsLambdaTransformation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("AwsLambdaTransformation");
  if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
    const node = new __XmlNode("FunctionArnString")
      .addChildNode(new __XmlText(input.FunctionArn))
      .withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  if (input.FunctionPayload !== undefined && input.FunctionPayload !== null) {
    const node = new __XmlNode("AwsLambdaTransformationPayload")
      .addChildNode(new __XmlText(input.FunctionPayload))
      .withName("FunctionPayload");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBucketLevel = (input: BucketLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("BucketLevel");
  if (input.ActivityMetrics !== undefined && input.ActivityMetrics !== null) {
    const node = serializeAws_restXmlActivityMetrics(input.ActivityMetrics, context).withName("ActivityMetrics");
    bodyNode.addChildNode(node);
  }
  if (input.PrefixLevel !== undefined && input.PrefixLevel !== null) {
    const node = serializeAws_restXmlPrefixLevel(input.PrefixLevel, context).withName("PrefixLevel");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlBuckets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(entry));
      return node.withName("Arn");
    });
};

const serializeAws_restXmlCreateBucketConfiguration = (
  input: CreateBucketConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("CreateBucketConfiguration");
  if (input.LocationConstraint !== undefined && input.LocationConstraint !== null) {
    const node = new __XmlNode("BucketLocationConstraint")
      .addChildNode(new __XmlText(input.LocationConstraint))
      .withName("LocationConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXml_Exclude = (input: _Exclude, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Exclude");
  if (input.Buckets !== undefined && input.Buckets !== null) {
    const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions !== undefined && input.Regions !== null) {
    const nodes = serializeAws_restXmlRegions(input.Regions, context);
    const containerNode = new __XmlNode("Regions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlInclude = (input: Include, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Include");
  if (input.Buckets !== undefined && input.Buckets !== null) {
    const nodes = serializeAws_restXmlBuckets(input.Buckets, context);
    const containerNode = new __XmlNode("Buckets");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Regions !== undefined && input.Regions !== null) {
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
  if (input.Spec !== undefined && input.Spec !== null) {
    const node = serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec");
    bodyNode.addChildNode(node);
  }
  if (input.Location !== undefined && input.Location !== null) {
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
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("JobManifestFieldName").addChildNode(new __XmlText(entry));
      return node.withName("member");
    });
};

const serializeAws_restXmlJobManifestLocation = (input: JobManifestLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestLocation");
  if (input.ObjectArn !== undefined && input.ObjectArn !== null) {
    const node = new __XmlNode("S3KeyArnString").addChildNode(new __XmlText(input.ObjectArn)).withName("ObjectArn");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectVersionId !== undefined && input.ObjectVersionId !== null) {
    const node = new __XmlNode("S3ObjectVersionId")
      .addChildNode(new __XmlText(input.ObjectVersionId))
      .withName("ObjectVersionId");
    bodyNode.addChildNode(node);
  }
  if (input.ETag !== undefined && input.ETag !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ETag)).withName("ETag");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestSpec = (input: JobManifestSpec, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestSpec");
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("JobManifestFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Fields !== undefined && input.Fields !== null) {
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
  if (input.LambdaInvoke !== undefined && input.LambdaInvoke !== null) {
    const node = serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectCopy !== undefined && input.S3PutObjectCopy !== null) {
    const node = serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectAcl !== undefined && input.S3PutObjectAcl !== null) {
    const node = serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectTagging !== undefined && input.S3PutObjectTagging !== null) {
    const node = serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName(
      "S3PutObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3DeleteObjectTagging !== undefined && input.S3DeleteObjectTagging !== null) {
    const node = serializeAws_restXmlS3DeleteObjectTaggingOperation(input.S3DeleteObjectTagging, context).withName(
      "S3DeleteObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3InitiateRestoreObject !== undefined && input.S3InitiateRestoreObject !== null) {
    const node = serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName(
      "S3InitiateRestoreObject"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectLegalHold !== undefined && input.S3PutObjectLegalHold !== null) {
    const node = serializeAws_restXmlS3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName(
      "S3PutObjectLegalHold"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectRetention !== undefined && input.S3PutObjectRetention !== null) {
    const node = serializeAws_restXmlS3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName(
      "S3PutObjectRetention"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobReport = (input: JobReport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobReport");
  if (input.Bucket !== undefined && input.Bucket !== null) {
    const node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("JobReportFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined && input.Enabled !== null) {
    const node = new __XmlNode("Boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("ReportPrefixString").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.ReportScope !== undefined && input.ReportScope !== null) {
    const node = new __XmlNode("JobReportScope").addChildNode(new __XmlText(input.ReportScope)).withName("ReportScope");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaInvokeOperation = (input: LambdaInvokeOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn !== undefined && input.FunctionArn !== null) {
    const node = new __XmlNode("FunctionArnString")
      .addChildNode(new __XmlText(input.FunctionArn))
      .withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleConfiguration = (input: LifecycleConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleConfiguration");
  if (input.Rules !== undefined && input.Rules !== null) {
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
  if (input.Date !== undefined && input.Date !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.ExpiredObjectDeleteMarker !== undefined && input.ExpiredObjectDeleteMarker !== null) {
    const node = new __XmlNode("ExpiredObjectDeleteMarker")
      .addChildNode(new __XmlText(String(input.ExpiredObjectDeleteMarker)))
      .withName("ExpiredObjectDeleteMarker");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.Expiration !== undefined && input.Expiration !== null) {
    const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined && input.Filter !== null) {
    const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
    bodyNode.addChildNode(node);
  }
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("ExpirationStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
    bodyNode.addChildNode(node);
  }
  if (input.Transitions !== undefined && input.Transitions !== null) {
    const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
    const containerNode = new __XmlNode("Transitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.NoncurrentVersionTransitions !== undefined && input.NoncurrentVersionTransitions !== null) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    const containerNode = new __XmlNode("NoncurrentVersionTransitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.NoncurrentVersionExpiration !== undefined && input.NoncurrentVersionExpiration !== null) {
    const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName(
      "NoncurrentVersionExpiration"
    );
    bodyNode.addChildNode(node);
  }
  if (input.AbortIncompleteMultipartUpload !== undefined && input.AbortIncompleteMultipartUpload !== null) {
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
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const nodes = serializeAws_restXmlS3TagSet(input.Tags, context);
    const containerNode = new __XmlNode("Tags");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRuleFilter = (input: LifecycleRuleFilter, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRuleFilter");
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Tag !== undefined && input.Tag !== null) {
    const node = serializeAws_restXmlS3Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined && input.And !== null) {
    const node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlLifecycleRule(entry, context);
      return node.withName("Rule");
    });
};

const serializeAws_restXmlNoncurrentVersionExpiration = (
  input: NoncurrentVersionExpiration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("NoncurrentVersionExpiration");
  if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
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
  if (input.NoncurrentDays !== undefined && input.NoncurrentDays !== null) {
    const node = new __XmlNode("Days")
      .addChildNode(new __XmlText(String(input.NoncurrentDays)))
      .withName("NoncurrentDays");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("ObjectLambdaAllowedFeature").addChildNode(new __XmlText(entry));
      return node.withName("AllowedFeature");
    });
};

const serializeAws_restXmlObjectLambdaConfiguration = (
  input: ObjectLambdaConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("ObjectLambdaConfiguration");
  if (input.SupportingAccessPoint !== undefined && input.SupportingAccessPoint !== null) {
    const node = new __XmlNode("ObjectLambdaSupportingAccessPointArn")
      .addChildNode(new __XmlText(input.SupportingAccessPoint))
      .withName("SupportingAccessPoint");
    bodyNode.addChildNode(node);
  }
  if (input.CloudWatchMetricsEnabled !== undefined && input.CloudWatchMetricsEnabled !== null) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.CloudWatchMetricsEnabled)))
      .withName("CloudWatchMetricsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.AllowedFeatures !== undefined && input.AllowedFeatures !== null) {
    const nodes = serializeAws_restXmlObjectLambdaAllowedFeaturesList(input.AllowedFeatures, context);
    const containerNode = new __XmlNode("AllowedFeatures");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.TransformationConfigurations !== undefined && input.TransformationConfigurations !== null) {
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
  if (input.Actions !== undefined && input.Actions !== null) {
    const nodes = serializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(input.Actions, context);
    const containerNode = new __XmlNode("Actions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentTransformation !== undefined && input.ContentTransformation !== null) {
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
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("ObjectLambdaTransformationConfigurationAction").addChildNode(new __XmlText(entry));
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
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
      return node.withName("TransformationConfiguration");
    });
};

const serializeAws_restXmlPrefixLevel = (input: PrefixLevel, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("PrefixLevel");
  if (input.StorageMetrics !== undefined && input.StorageMetrics !== null) {
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
  if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
    const node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.SelectionCriteria !== undefined && input.SelectionCriteria !== null) {
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
  if (input.BlockPublicAcls !== undefined && input.BlockPublicAcls !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicAcls)))
      .withName("BlockPublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.IgnorePublicAcls !== undefined && input.IgnorePublicAcls !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.IgnorePublicAcls)))
      .withName("IgnorePublicAcls");
    bodyNode.addChildNode(node);
  }
  if (input.BlockPublicPolicy !== undefined && input.BlockPublicPolicy !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicPolicy)))
      .withName("BlockPublicPolicy");
    bodyNode.addChildNode(node);
  }
  if (input.RestrictPublicBuckets !== undefined && input.RestrictPublicBuckets !== null) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.RestrictPublicBuckets)))
      .withName("RestrictPublicBuckets");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = new __XmlNode("S3AWSRegion").addChildNode(new __XmlText(entry));
      return node.withName("Region");
    });
};

const serializeAws_restXmlS3AccessControlList = (input: S3AccessControlList, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlList");
  if (input.Owner !== undefined && input.Owner !== null) {
    const node = serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  if (input.Grants !== undefined && input.Grants !== null) {
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
  if (input.AccessControlList !== undefined && input.AccessControlList !== null) {
    const node = serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName(
      "AccessControlList"
    );
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3BucketDestination = (input: S3BucketDestination, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3BucketDestination");
  if (input.Format !== undefined && input.Format !== null) {
    const node = new __XmlNode("Format").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.OutputSchemaVersion !== undefined && input.OutputSchemaVersion !== null) {
    const node = new __XmlNode("OutputSchemaVersion")
      .addChildNode(new __XmlText(input.OutputSchemaVersion))
      .withName("OutputSchemaVersion");
    bodyNode.addChildNode(node);
  }
  if (input.AccountId !== undefined && input.AccountId !== null) {
    const node = new __XmlNode("AccountId").addChildNode(new __XmlText(input.AccountId)).withName("AccountId");
    bodyNode.addChildNode(node);
  }
  if (input.Arn !== undefined && input.Arn !== null) {
    const node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(input.Arn)).withName("Arn");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined && input.Prefix !== null) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Encryption !== undefined && input.Encryption !== null) {
    const node = serializeAws_restXmlStorageLensDataExportEncryption(input.Encryption, context).withName("Encryption");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3CopyObjectOperation = (input: S3CopyObjectOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3CopyObjectOperation");
  if (input.TargetResource !== undefined && input.TargetResource !== null) {
    const node = new __XmlNode("S3BucketArnString")
      .addChildNode(new __XmlText(input.TargetResource))
      .withName("TargetResource");
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList !== undefined && input.CannedAccessControlList !== null) {
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlGrants !== undefined && input.AccessControlGrants !== null) {
    const nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
    const containerNode = new __XmlNode("AccessControlGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.MetadataDirective !== undefined && input.MetadataDirective !== null) {
    const node = new __XmlNode("S3MetadataDirective")
      .addChildNode(new __XmlText(input.MetadataDirective))
      .withName("MetadataDirective");
    bodyNode.addChildNode(node);
  }
  if (input.ModifiedSinceConstraint !== undefined && input.ModifiedSinceConstraint !== null) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
      .withName("ModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectMetadata !== undefined && input.NewObjectMetadata !== null) {
    const node = serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectTagging !== undefined && input.NewObjectTagging !== null) {
    const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
    const containerNode = new __XmlNode("NewObjectTagging");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.RedirectLocation !== undefined && input.RedirectLocation !== null) {
    const node = new __XmlNode("NonEmptyMaxLength2048String")
      .addChildNode(new __XmlText(input.RedirectLocation))
      .withName("RedirectLocation");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterPays !== undefined && input.RequesterPays !== null) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterPays)))
      .withName("RequesterPays");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("S3StorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.UnModifiedSinceConstraint !== undefined && input.UnModifiedSinceConstraint !== null) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
      .withName("UnModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAwsKmsKeyId !== undefined && input.SSEAwsKmsKeyId !== null) {
    const node = new __XmlNode("KmsKeyArnString")
      .addChildNode(new __XmlText(input.SSEAwsKmsKeyId))
      .withName("SSEAwsKmsKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.TargetKeyPrefix !== undefined && input.TargetKeyPrefix !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.TargetKeyPrefix))
      .withName("TargetKeyPrefix");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockLegalHoldStatus !== undefined && input.ObjectLockLegalHoldStatus !== null) {
    const node = new __XmlNode("S3ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.ObjectLockLegalHoldStatus))
      .withName("ObjectLockLegalHoldStatus");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockMode !== undefined && input.ObjectLockMode !== null) {
    const node = new __XmlNode("S3ObjectLockMode")
      .addChildNode(new __XmlText(input.ObjectLockMode))
      .withName("ObjectLockMode");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockRetainUntilDate !== undefined && input.ObjectLockRetainUntilDate !== null) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("ObjectLockRetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.BucketKeyEnabled !== undefined && input.BucketKeyEnabled !== null) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.BucketKeyEnabled)))
      .withName("BucketKeyEnabled");
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
  if (input.Grantee !== undefined && input.Grantee !== null) {
    const node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined && input.Permission !== null) {
    const node = new __XmlNode("S3Permission").addChildNode(new __XmlText(input.Permission)).withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grantee = (input: S3Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grantee");
  if (input.TypeIdentifier !== undefined && input.TypeIdentifier !== null) {
    const node = new __XmlNode("S3GranteeTypeIdentifier")
      .addChildNode(new __XmlText(input.TypeIdentifier))
      .withName("TypeIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.Identifier !== undefined && input.Identifier !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.Identifier))
      .withName("Identifier");
    bodyNode.addChildNode(node);
  }
  if (input.DisplayName !== undefined && input.DisplayName !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3GrantList = (input: S3Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlS3Grant(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlS3InitiateRestoreObjectOperation = (
  input: S3InitiateRestoreObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
  if (input.ExpirationInDays !== undefined && input.ExpirationInDays !== null) {
    const node = new __XmlNode("S3ExpirationInDays")
      .addChildNode(new __XmlText(String(input.ExpirationInDays)))
      .withName("ExpirationInDays");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobTier !== undefined && input.GlacierJobTier !== null) {
    const node = new __XmlNode("S3GlacierJobTier")
      .addChildNode(new __XmlText(input.GlacierJobTier))
      .withName("GlacierJobTier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectLockLegalHold = (input: S3ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectLockLegalHold");
  if (input.Status !== undefined && input.Status !== null) {
    const node = new __XmlNode("S3ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectMetadata = (input: S3ObjectMetadata, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectMetadata");
  if (input.CacheControl !== undefined && input.CacheControl !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.CacheControl))
      .withName("CacheControl");
    bodyNode.addChildNode(node);
  }
  if (input.ContentDisposition !== undefined && input.ContentDisposition !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentDisposition))
      .withName("ContentDisposition");
    bodyNode.addChildNode(node);
  }
  if (input.ContentEncoding !== undefined && input.ContentEncoding !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentEncoding))
      .withName("ContentEncoding");
    bodyNode.addChildNode(node);
  }
  if (input.ContentLanguage !== undefined && input.ContentLanguage !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentLanguage))
      .withName("ContentLanguage");
    bodyNode.addChildNode(node);
  }
  if (input.UserMetadata !== undefined && input.UserMetadata !== null) {
    const nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentLength !== undefined && input.ContentLength !== null) {
    const node = new __XmlNode("S3ContentLength")
      .addChildNode(new __XmlText(String(input.ContentLength)))
      .withName("ContentLength");
    bodyNode.addChildNode(node);
  }
  if (input.ContentMD5 !== undefined && input.ContentMD5 !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentMD5))
      .withName("ContentMD5");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined && input.ContentType !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentType))
      .withName("ContentType");
    bodyNode.addChildNode(node);
  }
  if (input.HttpExpiresDate !== undefined && input.HttpExpiresDate !== null) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z"))
      .withName("HttpExpiresDate");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterCharged !== undefined && input.RequesterCharged !== null) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterCharged)))
      .withName("RequesterCharged");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null) {
    const node = new __XmlNode("S3SSEAlgorithm")
      .addChildNode(new __XmlText(input.SSEAlgorithm))
      .withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectOwner = (input: S3ObjectOwner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectOwner");
  if (input.ID !== undefined && input.ID !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.DisplayName !== undefined && input.DisplayName !== null) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Retention = (input: S3Retention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Retention");
  if (input.RetainUntilDate !== undefined && input.RetainUntilDate !== null) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined && input.Mode !== null) {
    const node = new __XmlNode("S3ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectAclOperation = (input: S3SetObjectAclOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy !== undefined && input.AccessControlPolicy !== null) {
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
  if (input.LegalHold !== undefined && input.LegalHold !== null) {
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
  if (input.BypassGovernanceRetention !== undefined && input.BypassGovernanceRetention !== null) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.BypassGovernanceRetention)))
      .withName("BypassGovernanceRetention");
    bodyNode.addChildNode(node);
  }
  if (input.Retention !== undefined && input.Retention !== null) {
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
  if (input.TagSet !== undefined && input.TagSet !== null) {
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
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("TagKeyString").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("TagValueString").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3TagSet = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlS3Tag(entry, context);
      return node.withName("member");
    });
};

const serializeAws_restXmlS3UserMetadata = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.keys(input)
    .filter((key) => input[key] != null)
    .map((key) => {
      const entryNode = new __XmlNode("entry");
      const keyNode = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(key)).withName("key");
      entryNode.addChildNode(keyNode);
      var node;
      node = new __XmlNode("MaxLength1024String").addChildNode(new __XmlText(input[key]));
      entryNode.addChildNode(node.withName("value"));
      return entryNode;
    });
};

const serializeAws_restXmlSelectionCriteria = (input: SelectionCriteria, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SelectionCriteria");
  if (input.Delimiter !== undefined && input.Delimiter !== null) {
    const node = new __XmlNode("StorageLensPrefixLevelDelimiter")
      .addChildNode(new __XmlText(input.Delimiter))
      .withName("Delimiter");
    bodyNode.addChildNode(node);
  }
  if (input.MaxDepth !== undefined && input.MaxDepth !== null) {
    const node = new __XmlNode("StorageLensPrefixLevelMaxDepth")
      .addChildNode(new __XmlText(String(input.MaxDepth)))
      .withName("MaxDepth");
    bodyNode.addChildNode(node);
  }
  if (input.MinStorageBytesPercentage !== undefined && input.MinStorageBytesPercentage !== null) {
    const node = new __XmlNode("MinStorageBytesPercentage")
      .addChildNode(new __XmlText(String(input.MinStorageBytesPercentage)))
      .withName("MinStorageBytesPercentage");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSEKMS = (input: SSEKMS, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-KMS");
  if (input.KeyId !== undefined && input.KeyId !== null) {
    const node = new __XmlNode("SSEKMSKeyId").addChildNode(new __XmlText(input.KeyId)).withName("KeyId");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlSSES3 = (input: SSES3, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("SSE-S3");
  return bodyNode;
};

const serializeAws_restXmlStorageLensAwsOrg = (input: StorageLensAwsOrg, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensAwsOrg");
  if (input.Arn !== undefined && input.Arn !== null) {
    const node = new __XmlNode("AwsOrgArn").addChildNode(new __XmlText(input.Arn)).withName("Arn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensConfiguration = (
  input: StorageLensConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageLensConfiguration");
  if (input.Id !== undefined && input.Id !== null) {
    const node = new __XmlNode("ConfigId").addChildNode(new __XmlText(input.Id)).withName("Id");
    bodyNode.addChildNode(node);
  }
  if (input.AccountLevel !== undefined && input.AccountLevel !== null) {
    const node = serializeAws_restXmlAccountLevel(input.AccountLevel, context).withName("AccountLevel");
    bodyNode.addChildNode(node);
  }
  if (input.Include !== undefined && input.Include !== null) {
    const node = serializeAws_restXmlInclude(input.Include, context).withName("Include");
    bodyNode.addChildNode(node);
  }
  if (input.Exclude !== undefined && input.Exclude !== null) {
    const node = serializeAws_restXml_Exclude(input.Exclude, context).withName("Exclude");
    bodyNode.addChildNode(node);
  }
  if (input.DataExport !== undefined && input.DataExport !== null) {
    const node = serializeAws_restXmlStorageLensDataExport(input.DataExport, context).withName("DataExport");
    bodyNode.addChildNode(node);
  }
  if (input.IsEnabled !== undefined && input.IsEnabled !== null) {
    const node = new __XmlNode("IsEnabled").addChildNode(new __XmlText(String(input.IsEnabled))).withName("IsEnabled");
    bodyNode.addChildNode(node);
  }
  if (input.AwsOrg !== undefined && input.AwsOrg !== null) {
    const node = serializeAws_restXmlStorageLensAwsOrg(input.AwsOrg, context).withName("AwsOrg");
    bodyNode.addChildNode(node);
  }
  if (input.StorageLensArn !== undefined && input.StorageLensArn !== null) {
    const node = new __XmlNode("StorageLensArn")
      .addChildNode(new __XmlText(input.StorageLensArn))
      .withName("StorageLensArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensDataExport = (input: StorageLensDataExport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensDataExport");
  if (input.S3BucketDestination !== undefined && input.S3BucketDestination !== null) {
    const node = serializeAws_restXmlS3BucketDestination(input.S3BucketDestination, context).withName(
      "S3BucketDestination"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensDataExportEncryption = (
  input: StorageLensDataExportEncryption,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("StorageLensDataExportEncryption");
  if (input.SSES3 !== undefined && input.SSES3 !== null) {
    const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
    bodyNode.addChildNode(node);
  }
  if (input.SSEKMS !== undefined && input.SSEKMS !== null) {
    const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensTag = (input: StorageLensTag, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("StorageLensTag");
  if (input.Key !== undefined && input.Key !== null) {
    const node = new __XmlNode("TagKeyString").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined && input.Value !== null) {
    const node = new __XmlNode("TagValueString").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlStorageLensTags = (input: StorageLensTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlStorageLensTag(entry, context);
      return node.withName("Tag");
    });
};

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet !== undefined && input.TagSet !== null) {
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
  if (input.Date !== undefined && input.Date !== null) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined && input.Days !== null) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined && input.StorageClass !== null) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      const node = serializeAws_restXmlTransition(entry, context);
      return node.withName("Transition");
    });
};

const serializeAws_restXmlVpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId !== undefined && input.VpcId !== null) {
    const node = new __XmlNode("VpcId").addChildNode(new __XmlText(input.VpcId)).withName("VpcId");
    bodyNode.addChildNode(node);
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

const deserializeAws_restXmlAccessPoint = (output: any, context: __SerdeContext): AccessPoint => {
  let contents: any = {
    Name: undefined,
    NetworkOrigin: undefined,
    VpcConfiguration: undefined,
    Bucket: undefined,
    AccessPointArn: undefined,
    Alias: undefined,
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
  return contents;
};

const deserializeAws_restXmlAccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlAccessPoint(entry, context);
    });
};

const deserializeAws_restXmlAccountLevel = (output: any, context: __SerdeContext): AccountLevel => {
  let contents: any = {
    ActivityMetrics: undefined,
    BucketLevel: undefined,
  };
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["BucketLevel"] !== undefined) {
    contents.BucketLevel = deserializeAws_restXmlBucketLevel(output["BucketLevel"], context);
  }
  return contents;
};

const deserializeAws_restXmlActivityMetrics = (output: any, context: __SerdeContext): ActivityMetrics => {
  let contents: any = {
    IsEnabled: undefined,
  };
  if (output["IsEnabled"] !== undefined) {
    contents.IsEnabled = __parseBoolean(output["IsEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlAwsLambdaTransformation = (
  output: any,
  context: __SerdeContext
): AwsLambdaTransformation => {
  let contents: any = {
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
  let contents: any = {
    ActivityMetrics: undefined,
    PrefixLevel: undefined,
  };
  if (output["ActivityMetrics"] !== undefined) {
    contents.ActivityMetrics = deserializeAws_restXmlActivityMetrics(output["ActivityMetrics"], context);
  }
  if (output["PrefixLevel"] !== undefined) {
    contents.PrefixLevel = deserializeAws_restXmlPrefixLevel(output["PrefixLevel"], context);
  }
  return contents;
};

const deserializeAws_restXmlBuckets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlEndpoints = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_restXml_Exclude = (output: any, context: __SerdeContext): _Exclude => {
  let contents: any = {
    Buckets: undefined,
    Regions: undefined,
  };
  if (output.Buckets === "") {
    contents.Buckets = [];
  }
  if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  }
  if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

const deserializeAws_restXmlInclude = (output: any, context: __SerdeContext): Include => {
  let contents: any = {
    Buckets: undefined,
    Regions: undefined,
  };
  if (output.Buckets === "") {
    contents.Buckets = [];
  }
  if (output["Buckets"] !== undefined && output["Buckets"]["Arn"] !== undefined) {
    contents.Buckets = deserializeAws_restXmlBuckets(__getArrayIfSingleItem(output["Buckets"]["Arn"]), context);
  }
  if (output.Regions === "") {
    contents.Regions = [];
  }
  if (output["Regions"] !== undefined && output["Regions"]["Region"] !== undefined) {
    contents.Regions = deserializeAws_restXmlRegions(__getArrayIfSingleItem(output["Regions"]["Region"]), context);
  }
  return contents;
};

const deserializeAws_restXmlJobDescriptor = (output: any, context: __SerdeContext): JobDescriptor => {
  let contents: any = {
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
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
  }
  if (output["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = __expectString(output["StatusUpdateReason"]);
  }
  if (output.FailureReasons === "") {
    contents.FailureReasons = [];
  }
  if (output["FailureReasons"] !== undefined && output["FailureReasons"]["member"] !== undefined) {
    contents.FailureReasons = deserializeAws_restXmlJobFailureList(
      __getArrayIfSingleItem(output["FailureReasons"]["member"]),
      context
    );
  }
  if (output["Report"] !== undefined) {
    contents.Report = deserializeAws_restXmlJobReport(output["Report"], context);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["SuspendedDate"] !== undefined) {
    contents.SuspendedDate = new Date(output["SuspendedDate"]);
  }
  if (output["SuspendedCause"] !== undefined) {
    contents.SuspendedCause = __expectString(output["SuspendedCause"]);
  }
  return contents;
};

const deserializeAws_restXmlJobFailure = (output: any, context: __SerdeContext): JobFailure => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlJobFailure(entry, context);
    });
};

const deserializeAws_restXmlJobListDescriptor = (output: any, context: __SerdeContext): JobListDescriptor => {
  let contents: any = {
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
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlJobListDescriptor(entry, context);
    });
};

const deserializeAws_restXmlJobManifest = (output: any, context: __SerdeContext): JobManifest => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlJobManifestLocation = (output: any, context: __SerdeContext): JobManifestLocation => {
  let contents: any = {
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
  let contents: any = {
    Format: undefined,
    Fields: undefined,
  };
  if (output["Format"] !== undefined) {
    contents.Format = __expectString(output["Format"]);
  }
  if (output.Fields === "") {
    contents.Fields = [];
  }
  if (output["Fields"] !== undefined && output["Fields"]["member"] !== undefined) {
    contents.Fields = deserializeAws_restXmlJobManifestFieldList(
      __getArrayIfSingleItem(output["Fields"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobOperation = (output: any, context: __SerdeContext): JobOperation => {
  let contents: any = {
    LambdaInvoke: undefined,
    S3PutObjectCopy: undefined,
    S3PutObjectAcl: undefined,
    S3PutObjectTagging: undefined,
    S3DeleteObjectTagging: undefined,
    S3InitiateRestoreObject: undefined,
    S3PutObjectLegalHold: undefined,
    S3PutObjectRetention: undefined,
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
  return contents;
};

const deserializeAws_restXmlJobProgressSummary = (output: any, context: __SerdeContext): JobProgressSummary => {
  let contents: any = {
    TotalNumberOfTasks: undefined,
    NumberOfTasksSucceeded: undefined,
    NumberOfTasksFailed: undefined,
  };
  if (output["TotalNumberOfTasks"] !== undefined) {
    contents.TotalNumberOfTasks = parseInt(output["TotalNumberOfTasks"]);
  }
  if (output["NumberOfTasksSucceeded"] !== undefined) {
    contents.NumberOfTasksSucceeded = parseInt(output["NumberOfTasksSucceeded"]);
  }
  if (output["NumberOfTasksFailed"] !== undefined) {
    contents.NumberOfTasksFailed = parseInt(output["NumberOfTasksFailed"]);
  }
  return contents;
};

const deserializeAws_restXmlJobReport = (output: any, context: __SerdeContext): JobReport => {
  let contents: any = {
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

const deserializeAws_restXmlLambdaInvokeOperation = (output: any, context: __SerdeContext): LambdaInvokeOperation => {
  let contents: any = {
    FunctionArn: undefined,
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = __expectString(output["FunctionArn"]);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  let contents: any = {
    Date: undefined,
    Days: undefined,
    ExpiredObjectDeleteMarker: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = __parseBoolean(output["ExpiredObjectDeleteMarker"]);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  let contents: any = {
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
  }
  if (output["Transitions"] !== undefined && output["Transitions"]["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(
      __getArrayIfSingleItem(output["Transitions"]["Transition"]),
      context
    );
  }
  if (output.NoncurrentVersionTransitions === "") {
    contents.NoncurrentVersionTransitions = [];
  }
  if (
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
  let contents: any = {
    Prefix: undefined,
    Tags: undefined,
  };
  if (output["Prefix"] !== undefined) {
    contents.Prefix = __expectString(output["Prefix"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  let contents: any = {
    Prefix: undefined,
    Tag: undefined,
    And: undefined,
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
  return contents;
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};

const deserializeAws_restXmlListStorageLensConfigurationEntry = (
  output: any,
  context: __SerdeContext
): ListStorageLensConfigurationEntry => {
  let contents: any = {
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
    NoncurrentDays: undefined,
    StorageClass: undefined,
  };
  if (output["NoncurrentDays"] !== undefined) {
    contents.NoncurrentDays = parseInt(output["NoncurrentDays"]);
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};

const deserializeAws_restXmlObjectLambdaAccessPoint = (
  output: any,
  context: __SerdeContext
): ObjectLambdaAccessPoint => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlObjectLambdaConfiguration = (
  output: any,
  context: __SerdeContext
): ObjectLambdaConfiguration => {
  let contents: any = {
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
  }
  if (output["AllowedFeatures"] !== undefined && output["AllowedFeatures"]["AllowedFeature"] !== undefined) {
    contents.AllowedFeatures = deserializeAws_restXmlObjectLambdaAllowedFeaturesList(
      __getArrayIfSingleItem(output["AllowedFeatures"]["AllowedFeature"]),
      context
    );
  }
  if (output.TransformationConfigurations === "") {
    contents.TransformationConfigurations = [];
  }
  if (
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
  let contents: any = {
    Actions: undefined,
    ContentTransformation: undefined,
  };
  if (output.Actions === "") {
    contents.Actions = [];
  }
  if (output["Actions"] !== undefined && output["Actions"]["Action"] !== undefined) {
    contents.Actions = deserializeAws_restXmlObjectLambdaTransformationConfigurationActionsList(
      __getArrayIfSingleItem(output["Actions"]["Action"]),
      context
    );
  }
  if (output["ContentTransformation"] !== undefined) {
    contents.ContentTransformation = deserializeAws_restXmlObjectLambdaContentTransformation(
      output["ContentTransformation"],
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlObjectLambdaTransformationConfiguration(entry, context);
    });
};

const deserializeAws_restXmlPolicyStatus = (output: any, context: __SerdeContext): PolicyStatus => {
  let contents: any = {
    IsPublic: undefined,
  };
  if (output["IsPublic"] !== undefined) {
    contents.IsPublic = __parseBoolean(output["IsPublic"]);
  }
  return contents;
};

const deserializeAws_restXmlPrefixLevel = (output: any, context: __SerdeContext): PrefixLevel => {
  let contents: any = {
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
  let contents: any = {
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

const deserializeAws_restXmlPublicAccessBlockConfiguration = (
  output: any,
  context: __SerdeContext
): PublicAccessBlockConfiguration => {
  let contents: any = {
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

const deserializeAws_restXmlRegionalBucket = (output: any, context: __SerdeContext): RegionalBucket => {
  let contents: any = {
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
    contents.CreationDate = new Date(output["CreationDate"]);
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlRegionalBucket(entry, context);
    });
};

const deserializeAws_restXmlRegions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restXmlS3AccessControlList = (output: any, context: __SerdeContext): S3AccessControlList => {
  let contents: any = {
    Owner: undefined,
    Grants: undefined,
  };
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlS3ObjectOwner(output["Owner"], context);
  }
  if (output.Grants === "") {
    contents.Grants = [];
  }
  if (output["Grants"] !== undefined && output["Grants"]["member"] !== undefined) {
    contents.Grants = deserializeAws_restXmlS3GrantList(__getArrayIfSingleItem(output["Grants"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlS3AccessControlPolicy = (output: any, context: __SerdeContext): S3AccessControlPolicy => {
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  };
  if (output["TargetResource"] !== undefined) {
    contents.TargetResource = __expectString(output["TargetResource"]);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = __expectString(output["CannedAccessControlList"]);
  }
  if (output.AccessControlGrants === "") {
    contents.AccessControlGrants = [];
  }
  if (output["AccessControlGrants"] !== undefined && output["AccessControlGrants"]["member"] !== undefined) {
    contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(
      __getArrayIfSingleItem(output["AccessControlGrants"]["member"]),
      context
    );
  }
  if (output["MetadataDirective"] !== undefined) {
    contents.MetadataDirective = __expectString(output["MetadataDirective"]);
  }
  if (output["ModifiedSinceConstraint"] !== undefined) {
    contents.ModifiedSinceConstraint = new Date(output["ModifiedSinceConstraint"]);
  }
  if (output["NewObjectMetadata"] !== undefined) {
    contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(output["NewObjectMetadata"], context);
  }
  if (output.NewObjectTagging === "") {
    contents.NewObjectTagging = [];
  }
  if (output["NewObjectTagging"] !== undefined && output["NewObjectTagging"]["member"] !== undefined) {
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
    contents.UnModifiedSinceConstraint = new Date(output["UnModifiedSinceConstraint"]);
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
    contents.ObjectLockRetainUntilDate = new Date(output["ObjectLockRetainUntilDate"]);
  }
  if (output["BucketKeyEnabled"] !== undefined) {
    contents.BucketKeyEnabled = __parseBoolean(output["BucketKeyEnabled"]);
  }
  return contents;
};

const deserializeAws_restXmlS3DeleteObjectTaggingOperation = (
  output: any,
  context: __SerdeContext
): S3DeleteObjectTaggingOperation => {
  let contents: any = {};
  return contents;
};

const deserializeAws_restXmlS3Grant = (output: any, context: __SerdeContext): S3Grant => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlS3Grant(entry, context);
    });
};

const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  let contents: any = {
    ExpirationInDays: undefined,
    GlacierJobTier: undefined,
  };
  if (output["ExpirationInDays"] !== undefined) {
    contents.ExpirationInDays = parseInt(output["ExpirationInDays"]);
  }
  if (output["GlacierJobTier"] !== undefined) {
    contents.GlacierJobTier = __expectString(output["GlacierJobTier"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectLockLegalHold = (output: any, context: __SerdeContext): S3ObjectLockLegalHold => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectMetadata = (output: any, context: __SerdeContext): S3ObjectMetadata => {
  let contents: any = {
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
  }
  if (output["UserMetadata"] !== undefined && output["UserMetadata"]["entry"] !== undefined) {
    contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(
      __getArrayIfSingleItem(output["UserMetadata"]["entry"]),
      context
    );
  }
  if (output["ContentLength"] !== undefined) {
    contents.ContentLength = parseInt(output["ContentLength"]);
  }
  if (output["ContentMD5"] !== undefined) {
    contents.ContentMD5 = __expectString(output["ContentMD5"]);
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = __expectString(output["ContentType"]);
  }
  if (output["HttpExpiresDate"] !== undefined) {
    contents.HttpExpiresDate = new Date(output["HttpExpiresDate"]);
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
  let contents: any = {
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

const deserializeAws_restXmlS3Retention = (output: any, context: __SerdeContext): S3Retention => {
  let contents: any = {
    RetainUntilDate: undefined,
    Mode: undefined,
  };
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
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
  let contents: any = {
    TagSet: undefined,
  };
  if (output.TagSet === "") {
    contents.TagSet = [];
  }
  if (output["TagSet"] !== undefined && output["TagSet"]["member"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["TagSet"]["member"]), context);
  }
  return contents;
};

const deserializeAws_restXmlS3Tag = (output: any, context: __SerdeContext): S3Tag => {
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlS3Tag(entry, context);
    });
};

const deserializeAws_restXmlS3UserMetadata = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_restXmlSelectionCriteria = (output: any, context: __SerdeContext): SelectionCriteria => {
  let contents: any = {
    Delimiter: undefined,
    MaxDepth: undefined,
    MinStorageBytesPercentage: undefined,
  };
  if (output["Delimiter"] !== undefined) {
    contents.Delimiter = __expectString(output["Delimiter"]);
  }
  if (output["MaxDepth"] !== undefined) {
    contents.MaxDepth = parseInt(output["MaxDepth"]);
  }
  if (output["MinStorageBytesPercentage"] !== undefined) {
    contents.MinStorageBytesPercentage = parseFloat(output["MinStorageBytesPercentage"]);
  }
  return contents;
};

const deserializeAws_restXmlSSEKMS = (output: any, context: __SerdeContext): SSEKMS => {
  let contents: any = {
    KeyId: undefined,
  };
  if (output["KeyId"] !== undefined) {
    contents.KeyId = __expectString(output["KeyId"]);
  }
  return contents;
};

const deserializeAws_restXmlSSES3 = (output: any, context: __SerdeContext): SSES3 => {
  let contents: any = {};
  return contents;
};

const deserializeAws_restXmlStorageLensAwsOrg = (output: any, context: __SerdeContext): StorageLensAwsOrg => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlListStorageLensConfigurationEntry(entry, context);
    });
};

const deserializeAws_restXmlStorageLensDataExport = (output: any, context: __SerdeContext): StorageLensDataExport => {
  let contents: any = {
    S3BucketDestination: undefined,
  };
  if (output["S3BucketDestination"] !== undefined) {
    contents.S3BucketDestination = deserializeAws_restXmlS3BucketDestination(output["S3BucketDestination"], context);
  }
  return contents;
};

const deserializeAws_restXmlStorageLensDataExportEncryption = (
  output: any,
  context: __SerdeContext
): StorageLensDataExportEncryption => {
  let contents: any = {
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
  let contents: any = {
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlStorageLensTag(entry, context);
    });
};

const deserializeAws_restXmlTransition = (output: any, context: __SerdeContext): Transition => {
  let contents: any = {
    Date: undefined,
    Days: undefined,
    StorageClass: undefined,
  };
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
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
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restXmlTransition(entry, context);
    });
};

const deserializeAws_restXmlVpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  let contents: any = {
    VpcId: undefined,
  };
  if (output["VpcId"] !== undefined) {
    contents.VpcId = __expectString(output["VpcId"]);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
