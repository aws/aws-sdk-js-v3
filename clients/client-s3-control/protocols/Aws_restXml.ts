import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "../commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "../commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "../commands/DeleteAccessPointPolicyCommand";
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
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "../commands/GetAccessPointCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "../commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "../commands/GetAccessPointPolicyStatusCommand";
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
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "../commands/ListAccessPointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "../commands/ListRegionalBucketsCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "../commands/PutAccessPointPolicyCommand";
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
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "../commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "../commands/UpdateJobStatusCommand";
import {
  AbortIncompleteMultipartUpload,
  AccessPoint,
  BadRequestException,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  CreateBucketConfiguration,
  IdempotencyException,
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
  NoSuchPublicAccessBlockConfiguration,
  NoncurrentVersionExpiration,
  NoncurrentVersionTransition,
  NotFoundException,
  PolicyStatus,
  PublicAccessBlockConfiguration,
  RegionalBucket,
  S3AccessControlList,
  S3AccessControlPolicy,
  S3CopyObjectOperation,
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
  Tagging,
  TooManyRequestsException,
  TooManyTagsException,
  Transition,
  VpcConfiguration,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XmlNode as __XmlNode, XmlText as __XmlText } from "@aws-sdk/xml-builder";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restXmlCreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.GrantFullControl) && { "x-amz-grant-full-control": input.GrantFullControl! }),
    ...(isSerializableHeaderValue(input.GrantRead) && { "x-amz-grant-read": input.GrantRead! }),
    ...(isSerializableHeaderValue(input.GrantReadACP) && { "x-amz-grant-read-acp": input.GrantReadACP! }),
    ...(isSerializableHeaderValue(input.ACL) && { "x-amz-acl": input.ACL! }),
    ...(isSerializableHeaderValue(input.GrantWrite) && { "x-amz-grant-write": input.GrantWrite! }),
    ...(isSerializableHeaderValue(input.GrantWriteACP) && { "x-amz-grant-write-acp": input.GrantWriteACP! }),
    ...(isSerializableHeaderValue(input.ObjectLockEnabledForBucket) && {
      "x-amz-bucket-object-lock-enabled": input.ObjectLockEnabledForBucket!.toString(),
    }),
    ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}";
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
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
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

export const serializeAws_restXmlCreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
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

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}";
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

export const serializeAws_restXmlGetAccessPointCommand = async (
  input: GetAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}/policyStatus";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
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

export const serializeAws_restXmlGetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint";
  const query: any = {
    ...(input.Bucket !== undefined && { bucket: input.Bucket }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.JobStatuses !== undefined && { jobStatuses: (input.JobStatuses || []).map((_entry) => _entry) }),
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

export const serializeAws_restXmlListRegionalBucketsCommand = async (
  input: ListRegionalBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
    ...(isSerializableHeaderValue(input.OutpostId) && { "x-amz-outpost-id": input.OutpostId! }),
  };
  let resolvedPath = "/v20180820/bucket";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restXmlPutAccessPointPolicyCommand = async (
  input: PutAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/lifecycleconfiguration";
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
  if (input.LifecycleConfiguration !== undefined) {
    contents = serializeAws_restXmlLifecycleConfiguration(input.LifecycleConfiguration, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
    ...(isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess) && {
      "x-amz-confirm-remove-self-bucket-access": input.ConfirmRemoveSelfBucketAccess!.toString(),
    }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/policy";
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/bucket/{Bucket}/tagging";
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
  if (input.Tagging !== undefined) {
    contents = serializeAws_restXmlTagging(input.Tagging, context);
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute("xmlns", "http://awss3control.amazonaws.com/doc/2018-08-20/");
    body += contents.toString();
  }
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "{AccountId}." + resolvedHostname;
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}/tagging";
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

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
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
    resolvedHostname = resolvedHostname.replace("{AccountId}", input.AccountId!);
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}/priority";
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

export const serializeAws_restXmlUpdateJobStatusCommand = async (
  input: UpdateJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && { "x-amz-account-id": input.AccountId! }),
  };
  let resolvedPath = "/v20180820/jobs/{JobId}/status";
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

export const deserializeAws_restXmlCreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlCreateAccessPointCommandError(output, context);
  }
  const contents: CreateAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessPointArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = data["AccessPointArn"];
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

export const deserializeAws_restXmlCreateBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.BucketArn = data["BucketArn"];
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlCreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = data["JobId"];
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlDeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlDeleteBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlDescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetAccessPointCommandError(output, context);
  }
  const contents: GetAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Bucket: undefined,
    CreationDate: undefined,
    Name: undefined,
    NetworkOrigin: undefined,
    PublicAccessBlockConfiguration: undefined,
    VpcConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Bucket"] !== undefined) {
    contents.Bucket = data["Bucket"];
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(data["CreationDate"]);
  }
  if (data["Name"] !== undefined) {
    contents.Name = data["Name"];
  }
  if (data["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = data["NetworkOrigin"];
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

export const deserializeAws_restXmlGetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetAccessPointPolicyCommandError(output, context);
  }
  const contents: GetAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["Policy"] !== undefined) {
    contents.Policy = data["Policy"];
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

export const deserializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlGetBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.Bucket = data["Bucket"];
  }
  if (data["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(data["CreationDate"]);
  }
  if (data["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = data["PublicAccessBlockEnabled"] == "true";
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["TagSet"]["Tag"]), context);
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (data["Tags"] !== undefined && data["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(data["Tags"]["Tag"]), context);
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlListAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.NextToken = data["NextToken"];
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

export const deserializeAws_restXmlListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.NextToken = data["NextToken"];
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlListRegionalBucketsCommandError(output, context);
  }
  const contents: ListRegionalBucketsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RegionalBucketList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["NextToken"] !== undefined) {
    contents.NextToken = data["NextToken"];
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

export const deserializeAws_restXmlPutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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

export const deserializeAws_restXmlUpdateJobPriorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
  }
  const contents: UpdateJobPriorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
    Priority: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = data["JobId"];
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    contents.JobId = data["JobId"];
  }
  if (data["Status"] !== undefined) {
    contents.Status = data["Status"];
  }
  if (data["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = data["StatusUpdateReason"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
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
    contents.Message = data["Message"];
  }
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

const serializeAws_restXmlJobManifest = (input: JobManifest, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifest");
  if (input.Location !== undefined) {
    const node = serializeAws_restXmlJobManifestLocation(input.Location, context).withName("Location");
    bodyNode.addChildNode(node);
  }
  if (input.Spec !== undefined) {
    const node = serializeAws_restXmlJobManifestSpec(input.Spec, context).withName("Spec");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestFieldList = (
  input: (JobManifestFieldName | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => {
    const node = new __XmlNode("JobManifestFieldName").addChildNode(new __XmlText(entry));
    return node.withName("member");
  });
};

const serializeAws_restXmlJobManifestLocation = (input: JobManifestLocation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestLocation");
  if (input.ObjectVersionId !== undefined) {
    const node = new __XmlNode("S3ObjectVersionId")
      .addChildNode(new __XmlText(input.ObjectVersionId))
      .withName("ObjectVersionId");
    bodyNode.addChildNode(node);
  }
  if (input.ETag !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ETag)).withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectArn !== undefined) {
    const node = new __XmlNode("S3KeyArnString").addChildNode(new __XmlText(input.ObjectArn)).withName("ObjectArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestSpec = (input: JobManifestSpec, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobManifestSpec");
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlJobManifestFieldList(input.Fields, context);
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Format !== undefined) {
    const node = new __XmlNode("JobManifestFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobOperation = (input: JobOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobOperation");
  if (input.S3PutObjectTagging !== undefined) {
    const node = serializeAws_restXmlS3SetObjectTaggingOperation(input.S3PutObjectTagging, context).withName(
      "S3PutObjectTagging"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectAcl !== undefined) {
    const node = serializeAws_restXmlS3SetObjectAclOperation(input.S3PutObjectAcl, context).withName("S3PutObjectAcl");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectLegalHold !== undefined) {
    const node = serializeAws_restXmlS3SetObjectLegalHoldOperation(input.S3PutObjectLegalHold, context).withName(
      "S3PutObjectLegalHold"
    );
    bodyNode.addChildNode(node);
  }
  if (input.LambdaInvoke !== undefined) {
    const node = serializeAws_restXmlLambdaInvokeOperation(input.LambdaInvoke, context).withName("LambdaInvoke");
    bodyNode.addChildNode(node);
  }
  if (input.S3InitiateRestoreObject !== undefined) {
    const node = serializeAws_restXmlS3InitiateRestoreObjectOperation(input.S3InitiateRestoreObject, context).withName(
      "S3InitiateRestoreObject"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectRetention !== undefined) {
    const node = serializeAws_restXmlS3SetObjectRetentionOperation(input.S3PutObjectRetention, context).withName(
      "S3PutObjectRetention"
    );
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectCopy !== undefined) {
    const node = serializeAws_restXmlS3CopyObjectOperation(input.S3PutObjectCopy, context).withName("S3PutObjectCopy");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobReport = (input: JobReport, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("JobReport");
  if (input.ReportScope !== undefined) {
    const node = new __XmlNode("JobReportScope").addChildNode(new __XmlText(input.ReportScope)).withName("ReportScope");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("ReportPrefixString").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("S3BucketArnString").addChildNode(new __XmlText(input.Bucket)).withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined) {
    const node = new __XmlNode("Boolean").addChildNode(new __XmlText(String(input.Enabled))).withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Format !== undefined) {
    const node = new __XmlNode("JobReportFormat").addChildNode(new __XmlText(input.Format)).withName("Format");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaInvokeOperation = (input: LambdaInvokeOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn !== undefined) {
    const node = new __XmlNode("FunctionArnString")
      .addChildNode(new __XmlText(input.FunctionArn))
      .withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleConfiguration = (input: LifecycleConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleConfiguration");
  if (input.Rules !== undefined) {
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
  if (input.ExpiredObjectDeleteMarker !== undefined) {
    const node = new __XmlNode("ExpiredObjectDeleteMarker")
      .addChildNode(new __XmlText(String(input.ExpiredObjectDeleteMarker)))
      .withName("ExpiredObjectDeleteMarker");
    bodyNode.addChildNode(node);
  }
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
  return bodyNode;
};

const serializeAws_restXmlLifecycleRule = (input: LifecycleRule, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("LifecycleRule");
  if (input.Status !== undefined) {
    const node = new __XmlNode("ExpirationStatus").addChildNode(new __XmlText(input.Status)).withName("Status");
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
  if (input.Transitions !== undefined) {
    const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
    const containerNode = new __XmlNode("Transitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("ID").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  if (input.NoncurrentVersionTransitions !== undefined) {
    const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
    const containerNode = new __XmlNode("NoncurrentVersionTransitions");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Expiration !== undefined) {
    const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
    bodyNode.addChildNode(node);
  }
  if (input.Filter !== undefined) {
    const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
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
  if (input.Tag !== undefined) {
    const node = serializeAws_restXmlS3Tag(input.Tag, context).withName("Tag");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("Prefix").addChildNode(new __XmlText(input.Prefix)).withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.And !== undefined) {
    const node = serializeAws_restXmlLifecycleRuleAndOperator(input.And, context).withName("And");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLifecycleRules = (input: LifecycleRule[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlLifecycleRule(entry, context);
    return node.withName("Rule");
  });
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
    return node.withName("NoncurrentVersionTransition");
  });
};

const serializeAws_restXmlPublicAccessBlockConfiguration = (
  input: PublicAccessBlockConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PublicAccessBlockConfiguration");
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
  if (input.BlockPublicPolicy !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.BlockPublicPolicy)))
      .withName("BlockPublicPolicy");
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

const serializeAws_restXmlS3AccessControlList = (input: S3AccessControlList, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3AccessControlList");
  if (input.Owner !== undefined) {
    const node = serializeAws_restXmlS3ObjectOwner(input.Owner, context).withName("Owner");
    bodyNode.addChildNode(node);
  }
  if (input.Grants !== undefined) {
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
  if (input.CannedAccessControlList !== undefined) {
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlList !== undefined) {
    const node = serializeAws_restXmlS3AccessControlList(input.AccessControlList, context).withName(
      "AccessControlList"
    );
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3CopyObjectOperation = (input: S3CopyObjectOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3CopyObjectOperation");
  if (input.ObjectLockLegalHoldStatus !== undefined) {
    const node = new __XmlNode("S3ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.ObjectLockLegalHoldStatus))
      .withName("ObjectLockLegalHoldStatus");
    bodyNode.addChildNode(node);
  }
  if (input.MetadataDirective !== undefined) {
    const node = new __XmlNode("S3MetadataDirective")
      .addChildNode(new __XmlText(input.MetadataDirective))
      .withName("MetadataDirective");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("S3StorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAwsKmsKeyId !== undefined) {
    const node = new __XmlNode("KmsKeyArnString")
      .addChildNode(new __XmlText(input.SSEAwsKmsKeyId))
      .withName("SSEAwsKmsKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.AccessControlGrants !== undefined) {
    const nodes = serializeAws_restXmlS3GrantList(input.AccessControlGrants, context);
    const containerNode = new __XmlNode("AccessControlGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.RedirectLocation !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength2048String")
      .addChildNode(new __XmlText(input.RedirectLocation))
      .withName("RedirectLocation");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockRetainUntilDate !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("ObjectLockRetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterPays !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterPays)))
      .withName("RequesterPays");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectTagging !== undefined) {
    const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
    const containerNode = new __XmlNode("NewObjectTagging");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ObjectLockMode !== undefined) {
    const node = new __XmlNode("S3ObjectLockMode")
      .addChildNode(new __XmlText(input.ObjectLockMode))
      .withName("ObjectLockMode");
    bodyNode.addChildNode(node);
  }
  if (input.ModifiedSinceConstraint !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
      .withName("ModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectMetadata !== undefined) {
    const node = serializeAws_restXmlS3ObjectMetadata(input.NewObjectMetadata, context).withName("NewObjectMetadata");
    bodyNode.addChildNode(node);
  }
  if (input.UnModifiedSinceConstraint !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"))
      .withName("UnModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList !== undefined) {
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.TargetKeyPrefix !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.TargetKeyPrefix))
      .withName("TargetKeyPrefix");
    bodyNode.addChildNode(node);
  }
  if (input.TargetResource !== undefined) {
    const node = new __XmlNode("S3BucketArnString")
      .addChildNode(new __XmlText(input.TargetResource))
      .withName("TargetResource");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grant = (input: S3Grant, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grant");
  if (input.Permission !== undefined) {
    const node = new __XmlNode("S3Permission").addChildNode(new __XmlText(input.Permission)).withName("Permission");
    bodyNode.addChildNode(node);
  }
  if (input.Grantee !== undefined) {
    const node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName("Grantee");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grantee = (input: S3Grantee, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Grantee");
  if (input.DisplayName !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.TypeIdentifier !== undefined) {
    const node = new __XmlNode("S3GranteeTypeIdentifier")
      .addChildNode(new __XmlText(input.TypeIdentifier))
      .withName("TypeIdentifier");
    bodyNode.addChildNode(node);
  }
  if (input.Identifier !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.Identifier))
      .withName("Identifier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3GrantList = (input: S3Grant[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlS3Grant(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlS3InitiateRestoreObjectOperation = (
  input: S3InitiateRestoreObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
  if (input.GlacierJobTier !== undefined) {
    const node = new __XmlNode("S3GlacierJobTier")
      .addChildNode(new __XmlText(input.GlacierJobTier))
      .withName("GlacierJobTier");
    bodyNode.addChildNode(node);
  }
  if (input.ExpirationInDays !== undefined) {
    const node = new __XmlNode("S3ExpirationInDays")
      .addChildNode(new __XmlText(String(input.ExpirationInDays)))
      .withName("ExpirationInDays");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectLockLegalHold = (input: S3ObjectLockLegalHold, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectLockLegalHold");
  if (input.Status !== undefined) {
    const node = new __XmlNode("S3ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.Status))
      .withName("Status");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectMetadata = (input: S3ObjectMetadata, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectMetadata");
  if (input.UserMetadata !== undefined) {
    const nodes = serializeAws_restXmlS3UserMetadata(input.UserMetadata, context);
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ContentLanguage !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentLanguage))
      .withName("ContentLanguage");
    bodyNode.addChildNode(node);
  }
  if (input.ContentLength !== undefined) {
    const node = new __XmlNode("S3ContentLength")
      .addChildNode(new __XmlText(String(input.ContentLength)))
      .withName("ContentLength");
    bodyNode.addChildNode(node);
  }
  if (input.ContentEncoding !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentEncoding))
      .withName("ContentEncoding");
    bodyNode.addChildNode(node);
  }
  if (input.HttpExpiresDate !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z"))
      .withName("HttpExpiresDate");
    bodyNode.addChildNode(node);
  }
  if (input.ContentDisposition !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentDisposition))
      .withName("ContentDisposition");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAlgorithm !== undefined) {
    const node = new __XmlNode("S3SSEAlgorithm")
      .addChildNode(new __XmlText(input.SSEAlgorithm))
      .withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
  }
  if (input.ContentMD5 !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentMD5))
      .withName("ContentMD5");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterCharged !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterCharged)))
      .withName("RequesterCharged");
    bodyNode.addChildNode(node);
  }
  if (input.CacheControl !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.CacheControl))
      .withName("CacheControl");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentType))
      .withName("ContentType");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectOwner = (input: S3ObjectOwner, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3ObjectOwner");
  if (input.DisplayName !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(input.ID)).withName("ID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Retention = (input: S3Retention, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3Retention");
  if (input.RetainUntilDate !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(new __XmlText(input.RetainUntilDate.toISOString().split(".")[0] + "Z"))
      .withName("RetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.Mode !== undefined) {
    const node = new __XmlNode("S3ObjectLockRetentionMode").addChildNode(new __XmlText(input.Mode)).withName("Mode");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectAclOperation = (input: S3SetObjectAclOperation, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy !== undefined) {
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
  if (input.LegalHold !== undefined) {
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
  if (input.Retention !== undefined) {
    const node = serializeAws_restXmlS3Retention(input.Retention, context).withName("Retention");
    bodyNode.addChildNode(node);
  }
  if (input.BypassGovernanceRetention !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.BypassGovernanceRetention)))
      .withName("BypassGovernanceRetention");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectTaggingOperation = (
  input: S3SetObjectTaggingOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectTaggingOperation");
  if (input.TagSet !== undefined) {
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
  if (input.Value !== undefined) {
    const node = new __XmlNode("TagValueString").addChildNode(new __XmlText(input.Value)).withName("Value");
    bodyNode.addChildNode(node);
  }
  if (input.Key !== undefined) {
    const node = new __XmlNode("TagKeyString").addChildNode(new __XmlText(input.Key)).withName("Key");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3TagSet = (input: S3Tag[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlS3Tag(entry, context);
    return node.withName("Tag");
  });
};

const serializeAws_restXmlS3UserMetadata = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.keys(input).map((key) => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("NonEmptyMaxLength1024String").addChildNode(new __XmlText(key)).withName("key");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("MaxLength1024String").addChildNode(new __XmlText(input[key]));
    entryNode.addChildNode(node.withName("value"));
    return entryNode;
  });
};

const serializeAws_restXmlTagging = (input: Tagging, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("Tagging");
  if (input.TagSet !== undefined) {
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
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("TransitionStorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
    bodyNode.addChildNode(node);
  }
  if (input.Date !== undefined) {
    const node = new __XmlNode("Date")
      .addChildNode(new __XmlText(input.Date.toISOString().split(".")[0] + "Z"))
      .withName("Date");
    bodyNode.addChildNode(node);
  }
  if (input.Days !== undefined) {
    const node = new __XmlNode("Days").addChildNode(new __XmlText(String(input.Days))).withName("Days");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlTransitionList = (input: Transition[], context: __SerdeContext): any => {
  return input.map((entry) => {
    const node = serializeAws_restXmlTransition(entry, context);
    return node.withName("Transition");
  });
};

const serializeAws_restXmlVpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId !== undefined) {
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
    Bucket: undefined,
    AccessPointArn: undefined,
    VpcConfiguration: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = output["NetworkOrigin"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["AccessPointArn"] !== undefined) {
    contents.AccessPointArn = output["AccessPointArn"];
  }
  if (output["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(output["VpcConfiguration"], context);
  }
  return contents;
};

const deserializeAws_restXmlAccessPointList = (output: any, context: __SerdeContext): AccessPoint[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlAccessPoint(entry, context));
};

const deserializeAws_restXmlJobDescriptor = (output: any, context: __SerdeContext): JobDescriptor => {
  let contents: any = {
    JobArn: undefined,
    Manifest: undefined,
    ConfirmationRequired: undefined,
    SuspendedDate: undefined,
    CreationTime: undefined,
    JobId: undefined,
    TerminationDate: undefined,
    Description: undefined,
    RoleArn: undefined,
    FailureReasons: undefined,
    StatusUpdateReason: undefined,
    Priority: undefined,
    SuspendedCause: undefined,
    Report: undefined,
    Status: undefined,
    Operation: undefined,
    ProgressSummary: undefined,
  };
  if (output["JobArn"] !== undefined) {
    contents.JobArn = output["JobArn"];
  }
  if (output["Manifest"] !== undefined) {
    contents.Manifest = deserializeAws_restXmlJobManifest(output["Manifest"], context);
  }
  if (output["ConfirmationRequired"] !== undefined) {
    contents.ConfirmationRequired = output["ConfirmationRequired"] == "true";
  }
  if (output["SuspendedDate"] !== undefined) {
    contents.SuspendedDate = new Date(output["SuspendedDate"]);
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = output["RoleArn"];
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
  if (output["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = output["StatusUpdateReason"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["SuspendedCause"] !== undefined) {
    contents.SuspendedCause = output["SuspendedCause"];
  }
  if (output["Report"] !== undefined) {
    contents.Report = deserializeAws_restXmlJobReport(output["Report"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = deserializeAws_restXmlJobOperation(output["Operation"], context);
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobFailure = (output: any, context: __SerdeContext): JobFailure => {
  let contents: any = {
    FailureReason: undefined,
    FailureCode: undefined,
  };
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = output["FailureReason"];
  }
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = output["FailureCode"];
  }
  return contents;
};

const deserializeAws_restXmlJobFailureList = (output: any, context: __SerdeContext): JobFailure[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlJobFailure(entry, context));
};

const deserializeAws_restXmlJobListDescriptor = (output: any, context: __SerdeContext): JobListDescriptor => {
  let contents: any = {
    ProgressSummary: undefined,
    JobId: undefined,
    CreationTime: undefined,
    TerminationDate: undefined,
    Status: undefined,
    Description: undefined,
    Operation: undefined,
    Priority: undefined,
  };
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(output["ProgressSummary"], context);
  }
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = output["Operation"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  return contents;
};

const deserializeAws_restXmlJobListDescriptorList = (output: any, context: __SerdeContext): JobListDescriptor[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlJobListDescriptor(entry, context));
};

const deserializeAws_restXmlJobManifest = (output: any, context: __SerdeContext): JobManifest => {
  let contents: any = {
    Location: undefined,
    Spec: undefined,
  };
  if (output["Location"] !== undefined) {
    contents.Location = deserializeAws_restXmlJobManifestLocation(output["Location"], context);
  }
  if (output["Spec"] !== undefined) {
    contents.Spec = deserializeAws_restXmlJobManifestSpec(output["Spec"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobManifestFieldList = (
  output: any,
  context: __SerdeContext
): (JobManifestFieldName | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlJobManifestLocation = (output: any, context: __SerdeContext): JobManifestLocation => {
  let contents: any = {
    ObjectVersionId: undefined,
    ETag: undefined,
    ObjectArn: undefined,
  };
  if (output["ObjectVersionId"] !== undefined) {
    contents.ObjectVersionId = output["ObjectVersionId"];
  }
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["ObjectArn"] !== undefined) {
    contents.ObjectArn = output["ObjectArn"];
  }
  return contents;
};

const deserializeAws_restXmlJobManifestSpec = (output: any, context: __SerdeContext): JobManifestSpec => {
  let contents: any = {
    Fields: undefined,
    Format: undefined,
  };
  if (output.Fields === "") {
    contents.Fields = [];
  }
  if (output["Fields"] !== undefined && output["Fields"]["member"] !== undefined) {
    contents.Fields = deserializeAws_restXmlJobManifestFieldList(
      __getArrayIfSingleItem(output["Fields"]["member"]),
      context
    );
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  return contents;
};

const deserializeAws_restXmlJobOperation = (output: any, context: __SerdeContext): JobOperation => {
  let contents: any = {
    S3PutObjectTagging: undefined,
    S3PutObjectAcl: undefined,
    S3PutObjectLegalHold: undefined,
    LambdaInvoke: undefined,
    S3InitiateRestoreObject: undefined,
    S3PutObjectRetention: undefined,
    S3PutObjectCopy: undefined,
  };
  if (output["S3PutObjectTagging"] !== undefined) {
    contents.S3PutObjectTagging = deserializeAws_restXmlS3SetObjectTaggingOperation(
      output["S3PutObjectTagging"],
      context
    );
  }
  if (output["S3PutObjectAcl"] !== undefined) {
    contents.S3PutObjectAcl = deserializeAws_restXmlS3SetObjectAclOperation(output["S3PutObjectAcl"], context);
  }
  if (output["S3PutObjectLegalHold"] !== undefined) {
    contents.S3PutObjectLegalHold = deserializeAws_restXmlS3SetObjectLegalHoldOperation(
      output["S3PutObjectLegalHold"],
      context
    );
  }
  if (output["LambdaInvoke"] !== undefined) {
    contents.LambdaInvoke = deserializeAws_restXmlLambdaInvokeOperation(output["LambdaInvoke"], context);
  }
  if (output["S3InitiateRestoreObject"] !== undefined) {
    contents.S3InitiateRestoreObject = deserializeAws_restXmlS3InitiateRestoreObjectOperation(
      output["S3InitiateRestoreObject"],
      context
    );
  }
  if (output["S3PutObjectRetention"] !== undefined) {
    contents.S3PutObjectRetention = deserializeAws_restXmlS3SetObjectRetentionOperation(
      output["S3PutObjectRetention"],
      context
    );
  }
  if (output["S3PutObjectCopy"] !== undefined) {
    contents.S3PutObjectCopy = deserializeAws_restXmlS3CopyObjectOperation(output["S3PutObjectCopy"], context);
  }
  return contents;
};

const deserializeAws_restXmlJobProgressSummary = (output: any, context: __SerdeContext): JobProgressSummary => {
  let contents: any = {
    NumberOfTasksFailed: undefined,
    TotalNumberOfTasks: undefined,
    NumberOfTasksSucceeded: undefined,
  };
  if (output["NumberOfTasksFailed"] !== undefined) {
    contents.NumberOfTasksFailed = parseInt(output["NumberOfTasksFailed"]);
  }
  if (output["TotalNumberOfTasks"] !== undefined) {
    contents.TotalNumberOfTasks = parseInt(output["TotalNumberOfTasks"]);
  }
  if (output["NumberOfTasksSucceeded"] !== undefined) {
    contents.NumberOfTasksSucceeded = parseInt(output["NumberOfTasksSucceeded"]);
  }
  return contents;
};

const deserializeAws_restXmlJobReport = (output: any, context: __SerdeContext): JobReport => {
  let contents: any = {
    ReportScope: undefined,
    Prefix: undefined,
    Bucket: undefined,
    Enabled: undefined,
    Format: undefined,
  };
  if (output["ReportScope"] !== undefined) {
    contents.ReportScope = output["ReportScope"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  return contents;
};

const deserializeAws_restXmlLambdaInvokeOperation = (output: any, context: __SerdeContext): LambdaInvokeOperation => {
  let contents: any = {
    FunctionArn: undefined,
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = output["FunctionArn"];
  }
  return contents;
};

const deserializeAws_restXmlLifecycleExpiration = (output: any, context: __SerdeContext): LifecycleExpiration => {
  let contents: any = {
    ExpiredObjectDeleteMarker: undefined,
    Days: undefined,
    Date: undefined,
  };
  if (output["ExpiredObjectDeleteMarker"] !== undefined) {
    contents.ExpiredObjectDeleteMarker = output["ExpiredObjectDeleteMarker"] == "true";
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRule = (output: any, context: __SerdeContext): LifecycleRule => {
  let contents: any = {
    Status: undefined,
    NoncurrentVersionExpiration: undefined,
    AbortIncompleteMultipartUpload: undefined,
    Transitions: undefined,
    ID: undefined,
    NoncurrentVersionTransitions: undefined,
    Expiration: undefined,
    Filter: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
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
  if (output.Transitions === "") {
    contents.Transitions = [];
  }
  if (output["Transitions"] !== undefined && output["Transitions"]["Transition"] !== undefined) {
    contents.Transitions = deserializeAws_restXmlTransitionList(
      __getArrayIfSingleItem(output["Transitions"]["Transition"]),
      context
    );
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
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
  if (output["Expiration"] !== undefined) {
    contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
  }
  if (output["Filter"] !== undefined) {
    contents.Filter = deserializeAws_restXmlLifecycleRuleFilter(output["Filter"], context);
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
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
    contents.Tags = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["Tags"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRuleFilter = (output: any, context: __SerdeContext): LifecycleRuleFilter => {
  let contents: any = {
    Tag: undefined,
    Prefix: undefined,
    And: undefined,
  };
  if (output["Tag"] !== undefined) {
    contents.Tag = deserializeAws_restXmlS3Tag(output["Tag"], context);
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["And"] !== undefined) {
    contents.And = deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context);
  }
  return contents;
};

const deserializeAws_restXmlLifecycleRules = (output: any, context: __SerdeContext): LifecycleRule[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlLifecycleRule(entry, context));
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
    BlockPublicAcls: undefined,
    RestrictPublicBuckets: undefined,
    BlockPublicPolicy: undefined,
    IgnorePublicAcls: undefined,
  };
  if (output["BlockPublicAcls"] !== undefined) {
    contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
  }
  if (output["RestrictPublicBuckets"] !== undefined) {
    contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
  }
  if (output["BlockPublicPolicy"] !== undefined) {
    contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
  }
  if (output["IgnorePublicAcls"] !== undefined) {
    contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlRegionalBucket = (output: any, context: __SerdeContext): RegionalBucket => {
  let contents: any = {
    BucketArn: undefined,
    CreationDate: undefined,
    OutpostId: undefined,
    Bucket: undefined,
    PublicAccessBlockEnabled: undefined,
  };
  if (output["BucketArn"] !== undefined) {
    contents.BucketArn = output["BucketArn"];
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["OutpostId"] !== undefined) {
    contents.OutpostId = output["OutpostId"];
  }
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["PublicAccessBlockEnabled"] !== undefined) {
    contents.PublicAccessBlockEnabled = output["PublicAccessBlockEnabled"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlRegionalBucketList = (output: any, context: __SerdeContext): RegionalBucket[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlRegionalBucket(entry, context));
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
    CannedAccessControlList: undefined,
    AccessControlList: undefined,
  };
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = output["CannedAccessControlList"];
  }
  if (output["AccessControlList"] !== undefined) {
    contents.AccessControlList = deserializeAws_restXmlS3AccessControlList(output["AccessControlList"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3CopyObjectOperation = (output: any, context: __SerdeContext): S3CopyObjectOperation => {
  let contents: any = {
    ObjectLockLegalHoldStatus: undefined,
    MetadataDirective: undefined,
    StorageClass: undefined,
    SSEAwsKmsKeyId: undefined,
    AccessControlGrants: undefined,
    RedirectLocation: undefined,
    ObjectLockRetainUntilDate: undefined,
    RequesterPays: undefined,
    NewObjectTagging: undefined,
    ObjectLockMode: undefined,
    ModifiedSinceConstraint: undefined,
    NewObjectMetadata: undefined,
    UnModifiedSinceConstraint: undefined,
    CannedAccessControlList: undefined,
    TargetKeyPrefix: undefined,
    TargetResource: undefined,
  };
  if (output["ObjectLockLegalHoldStatus"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output["ObjectLockLegalHoldStatus"];
  }
  if (output["MetadataDirective"] !== undefined) {
    contents.MetadataDirective = output["MetadataDirective"];
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["SSEAwsKmsKeyId"] !== undefined) {
    contents.SSEAwsKmsKeyId = output["SSEAwsKmsKeyId"];
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
  if (output["RedirectLocation"] !== undefined) {
    contents.RedirectLocation = output["RedirectLocation"];
  }
  if (output["ObjectLockRetainUntilDate"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(output["ObjectLockRetainUntilDate"]);
  }
  if (output["RequesterPays"] !== undefined) {
    contents.RequesterPays = output["RequesterPays"] == "true";
  }
  if (output.NewObjectTagging === "") {
    contents.NewObjectTagging = [];
  }
  if (output["NewObjectTagging"] !== undefined && output["NewObjectTagging"]["Tag"] !== undefined) {
    contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(
      __getArrayIfSingleItem(output["NewObjectTagging"]["Tag"]),
      context
    );
  }
  if (output["ObjectLockMode"] !== undefined) {
    contents.ObjectLockMode = output["ObjectLockMode"];
  }
  if (output["ModifiedSinceConstraint"] !== undefined) {
    contents.ModifiedSinceConstraint = new Date(output["ModifiedSinceConstraint"]);
  }
  if (output["NewObjectMetadata"] !== undefined) {
    contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(output["NewObjectMetadata"], context);
  }
  if (output["UnModifiedSinceConstraint"] !== undefined) {
    contents.UnModifiedSinceConstraint = new Date(output["UnModifiedSinceConstraint"]);
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = output["CannedAccessControlList"];
  }
  if (output["TargetKeyPrefix"] !== undefined) {
    contents.TargetKeyPrefix = output["TargetKeyPrefix"];
  }
  if (output["TargetResource"] !== undefined) {
    contents.TargetResource = output["TargetResource"];
  }
  return contents;
};

const deserializeAws_restXmlS3Grant = (output: any, context: __SerdeContext): S3Grant => {
  let contents: any = {
    Permission: undefined,
    Grantee: undefined,
  };
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlS3Grantee(output["Grantee"], context);
  }
  return contents;
};

const deserializeAws_restXmlS3Grantee = (output: any, context: __SerdeContext): S3Grantee => {
  let contents: any = {
    DisplayName: undefined,
    TypeIdentifier: undefined,
    Identifier: undefined,
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["TypeIdentifier"] !== undefined) {
    contents.TypeIdentifier = output["TypeIdentifier"];
  }
  if (output["Identifier"] !== undefined) {
    contents.Identifier = output["Identifier"];
  }
  return contents;
};

const deserializeAws_restXmlS3GrantList = (output: any, context: __SerdeContext): S3Grant[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlS3Grant(entry, context));
};

const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  let contents: any = {
    GlacierJobTier: undefined,
    ExpirationInDays: undefined,
  };
  if (output["GlacierJobTier"] !== undefined) {
    contents.GlacierJobTier = output["GlacierJobTier"];
  }
  if (output["ExpirationInDays"] !== undefined) {
    contents.ExpirationInDays = parseInt(output["ExpirationInDays"]);
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectLockLegalHold = (output: any, context: __SerdeContext): S3ObjectLockLegalHold => {
  let contents: any = {
    Status: undefined,
  };
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectMetadata = (output: any, context: __SerdeContext): S3ObjectMetadata => {
  let contents: any = {
    UserMetadata: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentEncoding: undefined,
    HttpExpiresDate: undefined,
    ContentDisposition: undefined,
    SSEAlgorithm: undefined,
    ContentMD5: undefined,
    RequesterCharged: undefined,
    CacheControl: undefined,
    ContentType: undefined,
  };
  if (output.UserMetadata === "") {
    contents.UserMetadata = {};
  }
  if (output["UserMetadata"] !== undefined && output["UserMetadata"]["entry"] !== undefined) {
    contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(
      __getArrayIfSingleItem(output["UserMetadata"]["entry"]),
      context
    );
  }
  if (output["ContentLanguage"] !== undefined) {
    contents.ContentLanguage = output["ContentLanguage"];
  }
  if (output["ContentLength"] !== undefined) {
    contents.ContentLength = parseInt(output["ContentLength"]);
  }
  if (output["ContentEncoding"] !== undefined) {
    contents.ContentEncoding = output["ContentEncoding"];
  }
  if (output["HttpExpiresDate"] !== undefined) {
    contents.HttpExpiresDate = new Date(output["HttpExpiresDate"]);
  }
  if (output["ContentDisposition"] !== undefined) {
    contents.ContentDisposition = output["ContentDisposition"];
  }
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = output["SSEAlgorithm"];
  }
  if (output["ContentMD5"] !== undefined) {
    contents.ContentMD5 = output["ContentMD5"];
  }
  if (output["RequesterCharged"] !== undefined) {
    contents.RequesterCharged = output["RequesterCharged"] == "true";
  }
  if (output["CacheControl"] !== undefined) {
    contents.CacheControl = output["CacheControl"];
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = output["ContentType"];
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectOwner = (output: any, context: __SerdeContext): S3ObjectOwner => {
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

const deserializeAws_restXmlS3Retention = (output: any, context: __SerdeContext): S3Retention => {
  let contents: any = {
    RetainUntilDate: undefined,
    Mode: undefined,
  };
  if (output["RetainUntilDate"] !== undefined) {
    contents.RetainUntilDate = new Date(output["RetainUntilDate"]);
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = output["Mode"];
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
    Retention: undefined,
    BypassGovernanceRetention: undefined,
  };
  if (output["Retention"] !== undefined) {
    contents.Retention = deserializeAws_restXmlS3Retention(output["Retention"], context);
  }
  if (output["BypassGovernanceRetention"] !== undefined) {
    contents.BypassGovernanceRetention = output["BypassGovernanceRetention"] == "true";
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
  if (output["TagSet"] !== undefined && output["TagSet"]["Tag"] !== undefined) {
    contents.TagSet = deserializeAws_restXmlS3TagSet(__getArrayIfSingleItem(output["TagSet"]["Tag"]), context);
  }
  return contents;
};

const deserializeAws_restXmlS3Tag = (output: any, context: __SerdeContext): S3Tag => {
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

const deserializeAws_restXmlS3TagSet = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlS3Tag(entry, context));
};

const deserializeAws_restXmlS3UserMetadata = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"],
    }),
    {}
  );
};

const deserializeAws_restXmlTransition = (output: any, context: __SerdeContext): Transition => {
  let contents: any = {
    StorageClass: undefined,
    Date: undefined,
    Days: undefined,
  };
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["Date"] !== undefined) {
    contents.Date = new Date(output["Date"]);
  }
  if (output["Days"] !== undefined) {
    contents.Days = parseInt(output["Days"]);
  }
  return contents;
};

const deserializeAws_restXmlTransitionList = (output: any, context: __SerdeContext): Transition[] => {
  return (output || []).map((entry: any) => deserializeAws_restXmlTransition(entry, context));
};

const deserializeAws_restXmlVpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  let contents: any = {
    VpcId: undefined,
  };
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
