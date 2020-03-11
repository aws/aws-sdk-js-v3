import {
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput
} from "../commands/CreateAccessPointCommand";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "../commands/CreateJobCommand";
import {
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput
} from "../commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput
} from "../commands/DeleteAccessPointPolicyCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput
} from "../commands/DeletePublicAccessBlockCommand";
import {
  DescribeJobCommandInput,
  DescribeJobCommandOutput
} from "../commands/DescribeJobCommand";
import {
  GetAccessPointCommandInput,
  GetAccessPointCommandOutput
} from "../commands/GetAccessPointCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput
} from "../commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput
} from "../commands/GetAccessPointPolicyStatusCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput
} from "../commands/GetPublicAccessBlockCommand";
import {
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput
} from "../commands/ListAccessPointsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput
} from "../commands/PutAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput
} from "../commands/PutPublicAccessBlockCommand";
import {
  UpdateJobPriorityCommandInput,
  UpdateJobPriorityCommandOutput
} from "../commands/UpdateJobPriorityCommand";
import {
  UpdateJobStatusCommandInput,
  UpdateJobStatusCommandOutput
} from "../commands/UpdateJobStatusCommand";
import {
  AccessPoint,
  BadRequestException,
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
  NoSuchPublicAccessBlockConfiguration,
  NotFoundException,
  PolicyStatus,
  PublicAccessBlockConfiguration,
  S3AccessControlList,
  S3AccessControlPolicy,
  S3CopyObjectOperation,
  S3Grant,
  S3Grantee,
  S3InitiateRestoreObjectOperation,
  S3ObjectMetadata,
  S3ObjectOwner,
  S3SetObjectAclOperation,
  S3SetObjectTaggingOperation,
  S3Tag,
  TooManyRequestsException,
  VpcConfiguration
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import {
  XmlNode as __XmlNode,
  XmlText as __XmlText
} from "@aws-sdk/xml-builder";
import { parse as xmlParse } from "fast-xml-parser";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restXmlCreateAccessPointCommand(
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/xml";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateAccessPoint");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
  if (input.Bucket !== undefined) {
    const memberNode = new __XmlNode("BucketName").addChildNode(
      new __XmlText(input.Bucket)
    );
    bodyNode.addChildNode(memberNode.withName("Bucket"));
  }
  if (input.PublicAccessBlockConfiguration !== undefined) {
    const memberNode = serializeAws_restXmlPublicAccessBlockConfiguration(
      input.PublicAccessBlockConfiguration,
      context
    );
    bodyNode.addChildNode(
      memberNode.withName("PublicAccessBlockConfiguration")
    );
  }
  if (input.VpcConfiguration !== undefined) {
    const memberNode = serializeAws_restXmlVpcConfiguration(
      input.VpcConfiguration,
      context
    );
    bodyNode.addChildNode(memberNode.withName("VpcConfiguration"));
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restXmlCreateJobCommand(
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/xml";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/jobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateJob");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    const memberNode = new __XmlNode("NonEmptyMaxLength64String").addChildNode(
      new __XmlText(input.ClientRequestToken)
    );
    bodyNode.addChildNode(memberNode.withName("ClientRequestToken"));
  }
  if (input.ConfirmationRequired !== undefined) {
    const memberNode = new __XmlNode("ConfirmationRequired").addChildNode(
      new __XmlText(String(input.ConfirmationRequired))
    );
    bodyNode.addChildNode(memberNode.withName("ConfirmationRequired"));
  }
  if (input.Description !== undefined) {
    const memberNode = new __XmlNode("NonEmptyMaxLength256String").addChildNode(
      new __XmlText(input.Description)
    );
    bodyNode.addChildNode(memberNode.withName("Description"));
  }
  if (input.Manifest !== undefined) {
    const memberNode = serializeAws_restXmlJobManifest(input.Manifest, context);
    bodyNode.addChildNode(memberNode.withName("Manifest"));
  }
  if (input.Operation !== undefined) {
    const memberNode = serializeAws_restXmlJobOperation(
      input.Operation,
      context
    );
    bodyNode.addChildNode(memberNode.withName("Operation"));
  }
  if (input.Priority !== undefined) {
    const memberNode = new __XmlNode("JobPriority").addChildNode(
      new __XmlText(String(input.Priority))
    );
    bodyNode.addChildNode(memberNode.withName("Priority"));
  }
  if (input.Report !== undefined) {
    const memberNode = serializeAws_restXmlJobReport(input.Report, context);
    bodyNode.addChildNode(memberNode.withName("Report"));
  }
  if (input.RoleArn !== undefined) {
    const memberNode = new __XmlNode("IAMRoleArn").addChildNode(
      new __XmlText(input.RoleArn)
    );
    bodyNode.addChildNode(memberNode.withName("RoleArn"));
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restXmlDeleteAccessPointCommand(
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlDeleteAccessPointPolicyCommand(
  input: DeleteAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlDeletePublicAccessBlockCommand(
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlDescribeJobCommand(
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{JobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlGetAccessPointCommand(
  input: GetAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlGetAccessPointPolicyCommand(
  input: GetAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlGetAccessPointPolicyStatusCommand(
  input: GetAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}/policyStatus";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlGetPublicAccessBlockCommand(
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restXmlListAccessPointsCommand(
  input: ListAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint";
  const query: any = {};
  if (input.Bucket !== undefined) {
    query["bucket"] = input.Bucket;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restXmlListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/jobs";
  const query: any = {};
  if (input.JobStatuses !== undefined) {
    query["jobStatuses"] = input.JobStatuses;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restXmlPutAccessPointPolicyCommand(
  input: PutAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/xml";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/accesspoint/{Name}/policy";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("PutAccessPointPolicy");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
  if (input.Policy !== undefined) {
    const memberNode = new __XmlNode("Policy").addChildNode(
      new __XmlText(input.Policy)
    );
    bodyNode.addChildNode(memberNode.withName("Policy"));
  }
  body += bodyNode.toString();
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restXmlPutPublicAccessBlockCommand(
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/xml";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
  let contents: any;
  if (input.PublicAccessBlockConfiguration !== undefined) {
    contents = serializeAws_restXmlPublicAccessBlockConfiguration(
      input.PublicAccessBlockConfiguration,
      context
    );
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    contents.addAttribute(
      "xmlns",
      "http://awss3control.amazonaws.com/doc/2018-08-20/"
    );
    body += contents.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restXmlUpdateJobPriorityCommand(
  input: UpdateJobPriorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/jobs/{JobId}/priority";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{JobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  const query: any = {};
  if (input.Priority !== undefined) {
    query["priority"] = input.Priority.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restXmlUpdateJobStatusCommand(
  input: UpdateJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.AccountId !== undefined) {
    headers["x-amz-account-id"] = input.AccountId;
  }
  let resolvedPath = "/v20180820/jobs/{JobId}/status";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{JobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  const query: any = {};
  if (input.RequestedJobStatus !== undefined) {
    query["requestedJobStatus"] = input.RequestedJobStatus;
  }
  if (input.StatusUpdateReason !== undefined) {
    query["statusUpdateReason"] = input.StatusUpdateReason;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function deserializeAws_restXmlCreateAccessPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlCreateAccessPointCommandError(output, context);
  }
  const contents: CreateAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlCreateAccessPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlCreateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlCreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResult",
    JobId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = data["JobId"];
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlCreateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.awss3control.v20180820#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotencyException":
    case "com.amazonaws.awss3control.v20180820#IdempotencyException":
      response = {
        ...(await deserializeAws_restXmlIdempotencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.awss3control.v20180820#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlDeleteAccessPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlDeleteAccessPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlDeleteAccessPointPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlDeleteAccessPointPolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlDeleteAccessPointPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlDeletePublicAccessBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlDeletePublicAccessBlockCommandError(
      output,
      context
    );
  }
  const contents: DeletePublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlDeletePublicAccessBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlDescribeJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlDescribeJobCommandError(output, context);
  }
  const contents: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobResult",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["Job"] !== undefined) {
    contents.Job = deserializeAws_restXmlJobDescriptor(data["Job"], context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlDescribeJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.awss3control.v20180820#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.awss3control.v20180820#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awss3control.v20180820#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlGetAccessPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetAccessPointCommandError(output, context);
  }
  const contents: GetAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccessPointResult",
    Bucket: undefined,
    CreationDate: undefined,
    Name: undefined,
    NetworkOrigin: undefined,
    PublicAccessBlockConfiguration: undefined,
    VpcConfiguration: undefined
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
    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(
      data["VpcConfiguration"],
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlGetAccessPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlGetAccessPointPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetAccessPointPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccessPointPolicyResult",
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["Policy"] !== undefined) {
    contents.Policy = data["Policy"];
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlGetAccessPointPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlGetAccessPointPolicyStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(
      output,
      context
    );
  }
  const contents: GetAccessPointPolicyStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccessPointPolicyStatusResult",
    PolicyStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["PolicyStatus"] !== undefined) {
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(
      data["PolicyStatus"],
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlGetAccessPointPolicyStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlGetPublicAccessBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlGetPublicAccessBlockCommandError(
      output,
      context
    );
  }
  const contents: GetPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPublicAccessBlockOutput",
    PublicAccessBlockConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlGetPublicAccessBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.awss3control.v20180820#NoSuchPublicAccessBlockConfiguration":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlListAccessPointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlListAccessPointsCommandError(output, context);
  }
  const contents: ListAccessPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccessPointsResult",
    AccessPointList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessPointList === "") {
    contents.AccessPointList = [];
  }
  if (
    data["AccessPointList"] !== undefined &&
    data["AccessPointList"]["AccessPoint"] !== undefined
  ) {
    const wrappedItem =
      data["AccessPointList"]["AccessPoint"] instanceof Array
        ? data["AccessPointList"]["AccessPoint"]
        : [data["AccessPointList"]["AccessPoint"]];
    contents.AccessPointList = deserializeAws_restXmlAccessPointList(
      wrappedItem,
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = data["NextToken"];
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlListAccessPointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPointsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResult",
    Jobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Jobs === "") {
    contents.Jobs = [];
  }
  if (data["Jobs"] !== undefined && data["Jobs"]["member"] !== undefined) {
    const wrappedItem =
      data["Jobs"]["member"] instanceof Array
        ? data["Jobs"]["member"]
        : [data["Jobs"]["member"]];
    contents.Jobs = deserializeAws_restXmlJobListDescriptorList(
      wrappedItem,
      context
    );
  }
  if (data["NextToken"] !== undefined) {
    contents.NextToken = data["NextToken"];
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.awss3control.v20180820#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awss3control.v20180820#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restXmlInvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.awss3control.v20180820#InvalidRequestException":
      response = {
        ...(await deserializeAws_restXmlInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlPutAccessPointPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlPutAccessPointPolicyCommandError(
      output,
      context
    );
  }
  const contents: PutAccessPointPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlPutAccessPointPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlPutPublicAccessBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlPutPublicAccessBlockCommandError(
      output,
      context
    );
  }
  const contents: PutPublicAccessBlockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlPutPublicAccessBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlUpdateJobPriorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlUpdateJobPriorityCommandError(output, context);
  }
  const contents: UpdateJobPriorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobPriorityResult",
    JobId: undefined,
    Priority: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data["JobId"] !== undefined) {
    contents.JobId = data["JobId"];
  }
  if (data["Priority"] !== undefined) {
    contents.Priority = parseInt(data["Priority"]);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restXmlUpdateJobPriorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.awss3control.v20180820#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.awss3control.v20180820#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awss3control.v20180820#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restXmlUpdateJobStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlUpdateJobStatusCommandError(output, context);
  }
  const contents: UpdateJobStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobStatusResult",
    JobId: undefined,
    Status: undefined,
    StatusUpdateReason: undefined
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
}

async function deserializeAws_restXmlUpdateJobStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.awss3control.v20180820#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.awss3control.v20180820#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobStatusException":
    case "com.amazonaws.awss3control.v20180820#JobStatusException":
      response = {
        ...(await deserializeAws_restXmlJobStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awss3control.v20180820#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awss3control.v20180820#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restXmlBadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
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
    Message: undefined
  };
  const data: any = parsedOutput.body.Error;
  if (data["Message"] !== undefined) {
    contents.Message = data["Message"];
  }
  return contents;
};

const serializeAws_restXmlJobManifest = (
  input: JobManifest,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobManifest");
  if (input.Location !== undefined) {
    const memberNode = serializeAws_restXmlJobManifestLocation(
      input.Location,
      context
    );
    bodyNode.addChildNode(memberNode.withName("Location"));
  }
  if (input.Spec !== undefined) {
    const memberNode = serializeAws_restXmlJobManifestSpec(input.Spec, context);
    bodyNode.addChildNode(memberNode.withName("Spec"));
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestFieldList = (
  input: Array<JobManifestFieldName | string>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = new __XmlNode("JobManifestFieldName").addChildNode(
      new __XmlText(entry)
    );
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
};

const serializeAws_restXmlJobManifestLocation = (
  input: JobManifestLocation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobManifestLocation");
  if (input.ETag !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ETag));
    bodyNode.addChildNode(memberNode.withName("ETag"));
  }
  if (input.ObjectArn !== undefined) {
    const memberNode = new __XmlNode("S3KeyArnString").addChildNode(
      new __XmlText(input.ObjectArn)
    );
    bodyNode.addChildNode(memberNode.withName("ObjectArn"));
  }
  if (input.ObjectVersionId !== undefined) {
    const memberNode = new __XmlNode("S3ObjectVersionId").addChildNode(
      new __XmlText(input.ObjectVersionId)
    );
    bodyNode.addChildNode(memberNode.withName("ObjectVersionId"));
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestSpec = (
  input: JobManifestSpec,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobManifestSpec");
  if (input.Fields !== undefined) {
    const nodes = serializeAws_restXmlJobManifestFieldList(
      input.Fields,
      context
    );
    const containerNode = new __XmlNode("Fields");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Format !== undefined) {
    const memberNode = new __XmlNode("JobManifestFormat").addChildNode(
      new __XmlText(input.Format)
    );
    bodyNode.addChildNode(memberNode.withName("Format"));
  }
  return bodyNode;
};

const serializeAws_restXmlJobOperation = (
  input: JobOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobOperation");
  if (input.LambdaInvoke !== undefined) {
    const memberNode = serializeAws_restXmlLambdaInvokeOperation(
      input.LambdaInvoke,
      context
    );
    bodyNode.addChildNode(memberNode.withName("LambdaInvoke"));
  }
  if (input.S3InitiateRestoreObject !== undefined) {
    const memberNode = serializeAws_restXmlS3InitiateRestoreObjectOperation(
      input.S3InitiateRestoreObject,
      context
    );
    bodyNode.addChildNode(memberNode.withName("S3InitiateRestoreObject"));
  }
  if (input.S3PutObjectAcl !== undefined) {
    const memberNode = serializeAws_restXmlS3SetObjectAclOperation(
      input.S3PutObjectAcl,
      context
    );
    bodyNode.addChildNode(memberNode.withName("S3PutObjectAcl"));
  }
  if (input.S3PutObjectCopy !== undefined) {
    const memberNode = serializeAws_restXmlS3CopyObjectOperation(
      input.S3PutObjectCopy,
      context
    );
    bodyNode.addChildNode(memberNode.withName("S3PutObjectCopy"));
  }
  if (input.S3PutObjectTagging !== undefined) {
    const memberNode = serializeAws_restXmlS3SetObjectTaggingOperation(
      input.S3PutObjectTagging,
      context
    );
    bodyNode.addChildNode(memberNode.withName("S3PutObjectTagging"));
  }
  return bodyNode;
};

const serializeAws_restXmlJobReport = (
  input: JobReport,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobReport");
  if (input.Bucket !== undefined) {
    const memberNode = new __XmlNode("S3BucketArnString").addChildNode(
      new __XmlText(input.Bucket)
    );
    bodyNode.addChildNode(memberNode.withName("Bucket"));
  }
  if (input.Enabled !== undefined) {
    const memberNode = new __XmlNode("Boolean").addChildNode(
      new __XmlText(String(input.Enabled))
    );
    bodyNode.addChildNode(memberNode.withName("Enabled"));
  }
  if (input.Format !== undefined) {
    const memberNode = new __XmlNode("JobReportFormat").addChildNode(
      new __XmlText(input.Format)
    );
    bodyNode.addChildNode(memberNode.withName("Format"));
  }
  if (input.Prefix !== undefined) {
    const memberNode = new __XmlNode("ReportPrefixString").addChildNode(
      new __XmlText(input.Prefix)
    );
    bodyNode.addChildNode(memberNode.withName("Prefix"));
  }
  if (input.ReportScope !== undefined) {
    const memberNode = new __XmlNode("JobReportScope").addChildNode(
      new __XmlText(input.ReportScope)
    );
    bodyNode.addChildNode(memberNode.withName("ReportScope"));
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaInvokeOperation = (
  input: LambdaInvokeOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.FunctionArn));
    bodyNode.addChildNode(memberNode.withName("FunctionArn"));
  }
  return bodyNode;
};

const serializeAws_restXmlPublicAccessBlockConfiguration = (
  input: PublicAccessBlockConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("PublicAccessBlockConfiguration");
  if (input.BlockPublicAcls !== undefined) {
    const memberNode = new __XmlNode("Setting").addChildNode(
      new __XmlText(String(input.BlockPublicAcls))
    );
    bodyNode.addChildNode(memberNode.withName("BlockPublicAcls"));
  }
  if (input.BlockPublicPolicy !== undefined) {
    const memberNode = new __XmlNode("Setting").addChildNode(
      new __XmlText(String(input.BlockPublicPolicy))
    );
    bodyNode.addChildNode(memberNode.withName("BlockPublicPolicy"));
  }
  if (input.IgnorePublicAcls !== undefined) {
    const memberNode = new __XmlNode("Setting").addChildNode(
      new __XmlText(String(input.IgnorePublicAcls))
    );
    bodyNode.addChildNode(memberNode.withName("IgnorePublicAcls"));
  }
  if (input.RestrictPublicBuckets !== undefined) {
    const memberNode = new __XmlNode("Setting").addChildNode(
      new __XmlText(String(input.RestrictPublicBuckets))
    );
    bodyNode.addChildNode(memberNode.withName("RestrictPublicBuckets"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3AccessControlList = (
  input: S3AccessControlList,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3AccessControlList");
  if (input.Grants !== undefined) {
    const nodes = serializeAws_restXmlS3GrantList(input.Grants, context);
    const containerNode = new __XmlNode("Grants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.Owner !== undefined) {
    const memberNode = serializeAws_restXmlS3ObjectOwner(input.Owner, context);
    bodyNode.addChildNode(memberNode.withName("Owner"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3AccessControlPolicy = (
  input: S3AccessControlPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3AccessControlPolicy");
  if (input.AccessControlList !== undefined) {
    const memberNode = serializeAws_restXmlS3AccessControlList(
      input.AccessControlList,
      context
    );
    bodyNode.addChildNode(memberNode.withName("AccessControlList"));
  }
  if (input.CannedAccessControlList !== undefined) {
    const memberNode = new __XmlNode("S3CannedAccessControlList").addChildNode(
      new __XmlText(input.CannedAccessControlList)
    );
    bodyNode.addChildNode(memberNode.withName("CannedAccessControlList"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3CopyObjectOperation = (
  input: S3CopyObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3CopyObjectOperation");
  if (input.AccessControlGrants !== undefined) {
    const nodes = serializeAws_restXmlS3GrantList(
      input.AccessControlGrants,
      context
    );
    const containerNode = new __XmlNode("AccessControlGrants");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.CannedAccessControlList !== undefined) {
    const memberNode = new __XmlNode("S3CannedAccessControlList").addChildNode(
      new __XmlText(input.CannedAccessControlList)
    );
    bodyNode.addChildNode(memberNode.withName("CannedAccessControlList"));
  }
  if (input.MetadataDirective !== undefined) {
    const memberNode = new __XmlNode("S3MetadataDirective").addChildNode(
      new __XmlText(input.MetadataDirective)
    );
    bodyNode.addChildNode(memberNode.withName("MetadataDirective"));
  }
  if (input.ModifiedSinceConstraint !== undefined) {
    const memberNode = new __XmlNode("TimeStamp").addChildNode(
      new __XmlText(input.ModifiedSinceConstraint.toISOString())
    );
    bodyNode.addChildNode(memberNode.withName("ModifiedSinceConstraint"));
  }
  if (input.NewObjectMetadata !== undefined) {
    const memberNode = serializeAws_restXmlS3ObjectMetadata(
      input.NewObjectMetadata,
      context
    );
    bodyNode.addChildNode(memberNode.withName("NewObjectMetadata"));
  }
  if (input.NewObjectTagging !== undefined) {
    const nodes = serializeAws_restXmlS3TagSet(input.NewObjectTagging, context);
    const containerNode = new __XmlNode("NewObjectTagging");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  if (input.ObjectLockLegalHoldStatus !== undefined) {
    const memberNode = new __XmlNode(
      "S3ObjectLockLegalHoldStatus"
    ).addChildNode(new __XmlText(input.ObjectLockLegalHoldStatus));
    bodyNode.addChildNode(memberNode.withName("ObjectLockLegalHoldStatus"));
  }
  if (input.ObjectLockMode !== undefined) {
    const memberNode = new __XmlNode("S3ObjectLockMode").addChildNode(
      new __XmlText(input.ObjectLockMode)
    );
    bodyNode.addChildNode(memberNode.withName("ObjectLockMode"));
  }
  if (input.ObjectLockRetainUntilDate !== undefined) {
    const memberNode = new __XmlNode("TimeStamp").addChildNode(
      new __XmlText(input.ObjectLockRetainUntilDate.toISOString())
    );
    bodyNode.addChildNode(memberNode.withName("ObjectLockRetainUntilDate"));
  }
  if (input.RedirectLocation !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength2048String"
    ).addChildNode(new __XmlText(input.RedirectLocation));
    bodyNode.addChildNode(memberNode.withName("RedirectLocation"));
  }
  if (input.RequesterPays !== undefined) {
    const memberNode = new __XmlNode("Boolean").addChildNode(
      new __XmlText(String(input.RequesterPays))
    );
    bodyNode.addChildNode(memberNode.withName("RequesterPays"));
  }
  if (input.SSEAwsKmsKeyId !== undefined) {
    const memberNode = new __XmlNode("KmsKeyArnString").addChildNode(
      new __XmlText(input.SSEAwsKmsKeyId)
    );
    bodyNode.addChildNode(memberNode.withName("SSEAwsKmsKeyId"));
  }
  if (input.StorageClass !== undefined) {
    const memberNode = new __XmlNode("S3StorageClass").addChildNode(
      new __XmlText(input.StorageClass)
    );
    bodyNode.addChildNode(memberNode.withName("StorageClass"));
  }
  if (input.TargetKeyPrefix !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.TargetKeyPrefix));
    bodyNode.addChildNode(memberNode.withName("TargetKeyPrefix"));
  }
  if (input.TargetResource !== undefined) {
    const memberNode = new __XmlNode("S3BucketArnString").addChildNode(
      new __XmlText(input.TargetResource)
    );
    bodyNode.addChildNode(memberNode.withName("TargetResource"));
  }
  if (input.UnModifiedSinceConstraint !== undefined) {
    const memberNode = new __XmlNode("TimeStamp").addChildNode(
      new __XmlText(input.UnModifiedSinceConstraint.toISOString())
    );
    bodyNode.addChildNode(memberNode.withName("UnModifiedSinceConstraint"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grant = (
  input: S3Grant,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Grant");
  if (input.Grantee !== undefined) {
    const memberNode = serializeAws_restXmlS3Grantee(input.Grantee, context);
    bodyNode.addChildNode(memberNode.withName("Grantee"));
  }
  if (input.Permission !== undefined) {
    const memberNode = new __XmlNode("S3Permission").addChildNode(
      new __XmlText(input.Permission)
    );
    bodyNode.addChildNode(memberNode.withName("Permission"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3GrantList = (
  input: Array<S3Grant>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = serializeAws_restXmlS3Grant(entry, context);
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
};

const serializeAws_restXmlS3Grantee = (
  input: S3Grantee,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Grantee");
  if (input.DisplayName !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.DisplayName));
    bodyNode.addChildNode(memberNode.withName("DisplayName"));
  }
  if (input.Identifier !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.Identifier));
    bodyNode.addChildNode(memberNode.withName("Identifier"));
  }
  if (input.TypeIdentifier !== undefined) {
    const memberNode = new __XmlNode("S3GranteeTypeIdentifier").addChildNode(
      new __XmlText(input.TypeIdentifier)
    );
    bodyNode.addChildNode(memberNode.withName("TypeIdentifier"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3InitiateRestoreObjectOperation = (
  input: S3InitiateRestoreObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
  if (input.ExpirationInDays !== undefined) {
    const memberNode = new __XmlNode("S3ExpirationInDays").addChildNode(
      new __XmlText(String(input.ExpirationInDays))
    );
    bodyNode.addChildNode(memberNode.withName("ExpirationInDays"));
  }
  if (input.GlacierJobTier !== undefined) {
    const memberNode = new __XmlNode("S3GlacierJobTier").addChildNode(
      new __XmlText(input.GlacierJobTier)
    );
    bodyNode.addChildNode(memberNode.withName("GlacierJobTier"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectMetadata = (
  input: S3ObjectMetadata,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3ObjectMetadata");
  if (input.CacheControl !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.CacheControl));
    bodyNode.addChildNode(memberNode.withName("CacheControl"));
  }
  if (input.ContentDisposition !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ContentDisposition));
    bodyNode.addChildNode(memberNode.withName("ContentDisposition"));
  }
  if (input.ContentEncoding !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ContentEncoding));
    bodyNode.addChildNode(memberNode.withName("ContentEncoding"));
  }
  if (input.ContentLanguage !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ContentLanguage));
    bodyNode.addChildNode(memberNode.withName("ContentLanguage"));
  }
  if (input.ContentLength !== undefined) {
    const memberNode = new __XmlNode("S3ContentLength").addChildNode(
      new __XmlText(String(input.ContentLength))
    );
    bodyNode.addChildNode(memberNode.withName("ContentLength"));
  }
  if (input.ContentMD5 !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ContentMD5));
    bodyNode.addChildNode(memberNode.withName("ContentMD5"));
  }
  if (input.ContentType !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ContentType));
    bodyNode.addChildNode(memberNode.withName("ContentType"));
  }
  if (input.HttpExpiresDate !== undefined) {
    const memberNode = new __XmlNode("TimeStamp").addChildNode(
      new __XmlText(input.HttpExpiresDate.toISOString())
    );
    bodyNode.addChildNode(memberNode.withName("HttpExpiresDate"));
  }
  if (input.RequesterCharged !== undefined) {
    const memberNode = new __XmlNode("Boolean").addChildNode(
      new __XmlText(String(input.RequesterCharged))
    );
    bodyNode.addChildNode(memberNode.withName("RequesterCharged"));
  }
  if (input.SSEAlgorithm !== undefined) {
    const memberNode = new __XmlNode("S3SSEAlgorithm").addChildNode(
      new __XmlText(input.SSEAlgorithm)
    );
    bodyNode.addChildNode(memberNode.withName("SSEAlgorithm"));
  }
  if (input.UserMetadata !== undefined) {
    const nodes = serializeAws_restXmlS3UserMetadata(
      input.UserMetadata,
      context
    );
    const containerNode = new __XmlNode("UserMetadata");
    nodes.map((node: any) => {
      containerNode.addChildNode(node);
    });
    bodyNode.addChildNode(containerNode);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectOwner = (
  input: S3ObjectOwner,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3ObjectOwner");
  if (input.DisplayName !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.DisplayName));
    bodyNode.addChildNode(memberNode.withName("DisplayName"));
  }
  if (input.ID !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.ID));
    bodyNode.addChildNode(memberNode.withName("ID"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectAclOperation = (
  input: S3SetObjectAclOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy !== undefined) {
    const memberNode = serializeAws_restXmlS3AccessControlPolicy(
      input.AccessControlPolicy,
      context
    );
    bodyNode.addChildNode(memberNode.withName("AccessControlPolicy"));
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

const serializeAws_restXmlS3Tag = (
  input: S3Tag,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Tag");
  if (input.Key !== undefined) {
    const memberNode = new __XmlNode(
      "NonEmptyMaxLength1024String"
    ).addChildNode(new __XmlText(input.Key));
    bodyNode.addChildNode(memberNode.withName("Key"));
  }
  if (input.Value !== undefined) {
    const memberNode = new __XmlNode("MaxLength1024String").addChildNode(
      new __XmlText(input.Value)
    );
    bodyNode.addChildNode(memberNode.withName("Value"));
  }
  return bodyNode;
};

const serializeAws_restXmlS3TagSet = (
  input: Array<S3Tag>,
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  for (let entry of input) {
    const node = serializeAws_restXmlS3Tag(entry, context);
    collectedNodes.push(node.withName("member"));
  }
  return collectedNodes;
};

const serializeAws_restXmlS3UserMetadata = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const collectedNodes: any = [];
  Object.keys(input).forEach(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("key");
    keyNode.addChildNode(
      new __XmlNode("NonEmptyMaxLength1024String").addChildNode(
        new __XmlText(key)
      )
    );
    entryNode.addChildNode(keyNode);
    const valueNode = new __XmlNode("value");
    valueNode.addChildNode(
      new __XmlNode("MaxLength1024String").addChildNode(
        new __XmlText(input[key])
      )
    );
    entryNode.addChildNode(valueNode);
    collectedNodes.push(entryNode);
  });
  return collectedNodes;
};

const serializeAws_restXmlVpcConfiguration = (
  input: VpcConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId !== undefined) {
    const memberNode = new __XmlNode("VpcId").addChildNode(
      new __XmlText(input.VpcId)
    );
    bodyNode.addChildNode(memberNode.withName("VpcId"));
  }
  return bodyNode;
};

const deserializeAws_restXmlAccessPoint = (
  output: any,
  context: __SerdeContext
): AccessPoint => {
  let contents: any = {
    __type: "AccessPoint",
    Bucket: undefined,
    Name: undefined,
    NetworkOrigin: undefined,
    VpcConfiguration: undefined
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["NetworkOrigin"] !== undefined) {
    contents.NetworkOrigin = output["NetworkOrigin"];
  }
  if (output["VpcConfiguration"] !== undefined) {
    contents.VpcConfiguration = deserializeAws_restXmlVpcConfiguration(
      output["VpcConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlAccessPointList = (
  output: any,
  context: __SerdeContext
): Array<AccessPoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlAccessPoint(entry, context)
  );
};

const deserializeAws_restXmlJobDescriptor = (
  output: any,
  context: __SerdeContext
): JobDescriptor => {
  let contents: any = {
    __type: "JobDescriptor",
    ConfirmationRequired: undefined,
    CreationTime: undefined,
    Description: undefined,
    FailureReasons: undefined,
    JobArn: undefined,
    JobId: undefined,
    Manifest: undefined,
    Operation: undefined,
    Priority: undefined,
    ProgressSummary: undefined,
    Report: undefined,
    RoleArn: undefined,
    Status: undefined,
    StatusUpdateReason: undefined,
    SuspendedCause: undefined,
    SuspendedDate: undefined,
    TerminationDate: undefined
  };
  if (output["ConfirmationRequired"] !== undefined) {
    contents.ConfirmationRequired = output["ConfirmationRequired"] == "true";
  }
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output.FailureReasons === "") {
    contents.FailureReasons = [];
  }
  if (
    output["FailureReasons"] !== undefined &&
    output["FailureReasons"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["FailureReasons"]["member"] instanceof Array
        ? output["FailureReasons"]["member"]
        : [output["FailureReasons"]["member"]];
    contents.FailureReasons = deserializeAws_restXmlJobFailureList(
      wrappedItem,
      context
    );
  }
  if (output["JobArn"] !== undefined) {
    contents.JobArn = output["JobArn"];
  }
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  if (output["Manifest"] !== undefined) {
    contents.Manifest = deserializeAws_restXmlJobManifest(
      output["Manifest"],
      context
    );
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = deserializeAws_restXmlJobOperation(
      output["Operation"],
      context
    );
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(
      output["ProgressSummary"],
      context
    );
  }
  if (output["Report"] !== undefined) {
    contents.Report = deserializeAws_restXmlJobReport(
      output["Report"],
      context
    );
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = output["RoleArn"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["StatusUpdateReason"] !== undefined) {
    contents.StatusUpdateReason = output["StatusUpdateReason"];
  }
  if (output["SuspendedCause"] !== undefined) {
    contents.SuspendedCause = output["SuspendedCause"];
  }
  if (output["SuspendedDate"] !== undefined) {
    contents.SuspendedDate = new Date(output["SuspendedDate"]);
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
  }
  return contents;
};

const deserializeAws_restXmlJobFailure = (
  output: any,
  context: __SerdeContext
): JobFailure => {
  let contents: any = {
    __type: "JobFailure",
    FailureCode: undefined,
    FailureReason: undefined
  };
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = output["FailureCode"];
  }
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = output["FailureReason"];
  }
  return contents;
};

const deserializeAws_restXmlJobFailureList = (
  output: any,
  context: __SerdeContext
): Array<JobFailure> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlJobFailure(entry, context)
  );
};

const deserializeAws_restXmlJobListDescriptor = (
  output: any,
  context: __SerdeContext
): JobListDescriptor => {
  let contents: any = {
    __type: "JobListDescriptor",
    CreationTime: undefined,
    Description: undefined,
    JobId: undefined,
    Operation: undefined,
    Priority: undefined,
    ProgressSummary: undefined,
    Status: undefined,
    TerminationDate: undefined
  };
  if (output["CreationTime"] !== undefined) {
    contents.CreationTime = new Date(output["CreationTime"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  if (output["Operation"] !== undefined) {
    contents.Operation = output["Operation"];
  }
  if (output["Priority"] !== undefined) {
    contents.Priority = parseInt(output["Priority"]);
  }
  if (output["ProgressSummary"] !== undefined) {
    contents.ProgressSummary = deserializeAws_restXmlJobProgressSummary(
      output["ProgressSummary"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["TerminationDate"] !== undefined) {
    contents.TerminationDate = new Date(output["TerminationDate"]);
  }
  return contents;
};

const deserializeAws_restXmlJobListDescriptorList = (
  output: any,
  context: __SerdeContext
): Array<JobListDescriptor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlJobListDescriptor(entry, context)
  );
};

const deserializeAws_restXmlJobManifest = (
  output: any,
  context: __SerdeContext
): JobManifest => {
  let contents: any = {
    __type: "JobManifest",
    Location: undefined,
    Spec: undefined
  };
  if (output["Location"] !== undefined) {
    contents.Location = deserializeAws_restXmlJobManifestLocation(
      output["Location"],
      context
    );
  }
  if (output["Spec"] !== undefined) {
    contents.Spec = deserializeAws_restXmlJobManifestSpec(
      output["Spec"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobManifestFieldList = (
  output: any,
  context: __SerdeContext
): Array<JobManifestFieldName | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restXmlJobManifestLocation = (
  output: any,
  context: __SerdeContext
): JobManifestLocation => {
  let contents: any = {
    __type: "JobManifestLocation",
    ETag: undefined,
    ObjectArn: undefined,
    ObjectVersionId: undefined
  };
  if (output["ETag"] !== undefined) {
    contents.ETag = output["ETag"];
  }
  if (output["ObjectArn"] !== undefined) {
    contents.ObjectArn = output["ObjectArn"];
  }
  if (output["ObjectVersionId"] !== undefined) {
    contents.ObjectVersionId = output["ObjectVersionId"];
  }
  return contents;
};

const deserializeAws_restXmlJobManifestSpec = (
  output: any,
  context: __SerdeContext
): JobManifestSpec => {
  let contents: any = {
    __type: "JobManifestSpec",
    Fields: undefined,
    Format: undefined
  };
  if (output.Fields === "") {
    contents.Fields = [];
  }
  if (
    output["Fields"] !== undefined &&
    output["Fields"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Fields"]["member"] instanceof Array
        ? output["Fields"]["member"]
        : [output["Fields"]["member"]];
    contents.Fields = deserializeAws_restXmlJobManifestFieldList(
      wrappedItem,
      context
    );
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  return contents;
};

const deserializeAws_restXmlJobOperation = (
  output: any,
  context: __SerdeContext
): JobOperation => {
  let contents: any = {
    __type: "JobOperation",
    LambdaInvoke: undefined,
    S3InitiateRestoreObject: undefined,
    S3PutObjectAcl: undefined,
    S3PutObjectCopy: undefined,
    S3PutObjectTagging: undefined
  };
  if (output["LambdaInvoke"] !== undefined) {
    contents.LambdaInvoke = deserializeAws_restXmlLambdaInvokeOperation(
      output["LambdaInvoke"],
      context
    );
  }
  if (output["S3InitiateRestoreObject"] !== undefined) {
    contents.S3InitiateRestoreObject = deserializeAws_restXmlS3InitiateRestoreObjectOperation(
      output["S3InitiateRestoreObject"],
      context
    );
  }
  if (output["S3PutObjectAcl"] !== undefined) {
    contents.S3PutObjectAcl = deserializeAws_restXmlS3SetObjectAclOperation(
      output["S3PutObjectAcl"],
      context
    );
  }
  if (output["S3PutObjectCopy"] !== undefined) {
    contents.S3PutObjectCopy = deserializeAws_restXmlS3CopyObjectOperation(
      output["S3PutObjectCopy"],
      context
    );
  }
  if (output["S3PutObjectTagging"] !== undefined) {
    contents.S3PutObjectTagging = deserializeAws_restXmlS3SetObjectTaggingOperation(
      output["S3PutObjectTagging"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlJobProgressSummary = (
  output: any,
  context: __SerdeContext
): JobProgressSummary => {
  let contents: any = {
    __type: "JobProgressSummary",
    NumberOfTasksFailed: undefined,
    NumberOfTasksSucceeded: undefined,
    TotalNumberOfTasks: undefined
  };
  if (output["NumberOfTasksFailed"] !== undefined) {
    contents.NumberOfTasksFailed = parseInt(output["NumberOfTasksFailed"]);
  }
  if (output["NumberOfTasksSucceeded"] !== undefined) {
    contents.NumberOfTasksSucceeded = parseInt(
      output["NumberOfTasksSucceeded"]
    );
  }
  if (output["TotalNumberOfTasks"] !== undefined) {
    contents.TotalNumberOfTasks = parseInt(output["TotalNumberOfTasks"]);
  }
  return contents;
};

const deserializeAws_restXmlJobReport = (
  output: any,
  context: __SerdeContext
): JobReport => {
  let contents: any = {
    __type: "JobReport",
    Bucket: undefined,
    Enabled: undefined,
    Format: undefined,
    Prefix: undefined,
    ReportScope: undefined
  };
  if (output["Bucket"] !== undefined) {
    contents.Bucket = output["Bucket"];
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  if (output["Format"] !== undefined) {
    contents.Format = output["Format"];
  }
  if (output["Prefix"] !== undefined) {
    contents.Prefix = output["Prefix"];
  }
  if (output["ReportScope"] !== undefined) {
    contents.ReportScope = output["ReportScope"];
  }
  return contents;
};

const deserializeAws_restXmlLambdaInvokeOperation = (
  output: any,
  context: __SerdeContext
): LambdaInvokeOperation => {
  let contents: any = {
    __type: "LambdaInvokeOperation",
    FunctionArn: undefined
  };
  if (output["FunctionArn"] !== undefined) {
    contents.FunctionArn = output["FunctionArn"];
  }
  return contents;
};

const deserializeAws_restXmlPolicyStatus = (
  output: any,
  context: __SerdeContext
): PolicyStatus => {
  let contents: any = {
    __type: "PolicyStatus",
    IsPublic: undefined
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
    __type: "PublicAccessBlockConfiguration",
    BlockPublicAcls: undefined,
    BlockPublicPolicy: undefined,
    IgnorePublicAcls: undefined,
    RestrictPublicBuckets: undefined
  };
  if (output["BlockPublicAcls"] !== undefined) {
    contents.BlockPublicAcls = output["BlockPublicAcls"] == "true";
  }
  if (output["BlockPublicPolicy"] !== undefined) {
    contents.BlockPublicPolicy = output["BlockPublicPolicy"] == "true";
  }
  if (output["IgnorePublicAcls"] !== undefined) {
    contents.IgnorePublicAcls = output["IgnorePublicAcls"] == "true";
  }
  if (output["RestrictPublicBuckets"] !== undefined) {
    contents.RestrictPublicBuckets = output["RestrictPublicBuckets"] == "true";
  }
  return contents;
};

const deserializeAws_restXmlS3AccessControlList = (
  output: any,
  context: __SerdeContext
): S3AccessControlList => {
  let contents: any = {
    __type: "S3AccessControlList",
    Grants: undefined,
    Owner: undefined
  };
  if (output.Grants === "") {
    contents.Grants = [];
  }
  if (
    output["Grants"] !== undefined &&
    output["Grants"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["Grants"]["member"] instanceof Array
        ? output["Grants"]["member"]
        : [output["Grants"]["member"]];
    contents.Grants = deserializeAws_restXmlS3GrantList(wrappedItem, context);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = deserializeAws_restXmlS3ObjectOwner(
      output["Owner"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlS3AccessControlPolicy = (
  output: any,
  context: __SerdeContext
): S3AccessControlPolicy => {
  let contents: any = {
    __type: "S3AccessControlPolicy",
    AccessControlList: undefined,
    CannedAccessControlList: undefined
  };
  if (output["AccessControlList"] !== undefined) {
    contents.AccessControlList = deserializeAws_restXmlS3AccessControlList(
      output["AccessControlList"],
      context
    );
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = output["CannedAccessControlList"];
  }
  return contents;
};

const deserializeAws_restXmlS3CopyObjectOperation = (
  output: any,
  context: __SerdeContext
): S3CopyObjectOperation => {
  let contents: any = {
    __type: "S3CopyObjectOperation",
    AccessControlGrants: undefined,
    CannedAccessControlList: undefined,
    MetadataDirective: undefined,
    ModifiedSinceConstraint: undefined,
    NewObjectMetadata: undefined,
    NewObjectTagging: undefined,
    ObjectLockLegalHoldStatus: undefined,
    ObjectLockMode: undefined,
    ObjectLockRetainUntilDate: undefined,
    RedirectLocation: undefined,
    RequesterPays: undefined,
    SSEAwsKmsKeyId: undefined,
    StorageClass: undefined,
    TargetKeyPrefix: undefined,
    TargetResource: undefined,
    UnModifiedSinceConstraint: undefined
  };
  if (output.AccessControlGrants === "") {
    contents.AccessControlGrants = [];
  }
  if (
    output["AccessControlGrants"] !== undefined &&
    output["AccessControlGrants"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["AccessControlGrants"]["member"] instanceof Array
        ? output["AccessControlGrants"]["member"]
        : [output["AccessControlGrants"]["member"]];
    contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(
      wrappedItem,
      context
    );
  }
  if (output["CannedAccessControlList"] !== undefined) {
    contents.CannedAccessControlList = output["CannedAccessControlList"];
  }
  if (output["MetadataDirective"] !== undefined) {
    contents.MetadataDirective = output["MetadataDirective"];
  }
  if (output["ModifiedSinceConstraint"] !== undefined) {
    contents.ModifiedSinceConstraint = new Date(
      output["ModifiedSinceConstraint"]
    );
  }
  if (output["NewObjectMetadata"] !== undefined) {
    contents.NewObjectMetadata = deserializeAws_restXmlS3ObjectMetadata(
      output["NewObjectMetadata"],
      context
    );
  }
  if (output.NewObjectTagging === "") {
    contents.NewObjectTagging = [];
  }
  if (
    output["NewObjectTagging"] !== undefined &&
    output["NewObjectTagging"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["NewObjectTagging"]["member"] instanceof Array
        ? output["NewObjectTagging"]["member"]
        : [output["NewObjectTagging"]["member"]];
    contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(
      wrappedItem,
      context
    );
  }
  if (output["ObjectLockLegalHoldStatus"] !== undefined) {
    contents.ObjectLockLegalHoldStatus = output["ObjectLockLegalHoldStatus"];
  }
  if (output["ObjectLockMode"] !== undefined) {
    contents.ObjectLockMode = output["ObjectLockMode"];
  }
  if (output["ObjectLockRetainUntilDate"] !== undefined) {
    contents.ObjectLockRetainUntilDate = new Date(
      output["ObjectLockRetainUntilDate"]
    );
  }
  if (output["RedirectLocation"] !== undefined) {
    contents.RedirectLocation = output["RedirectLocation"];
  }
  if (output["RequesterPays"] !== undefined) {
    contents.RequesterPays = output["RequesterPays"] == "true";
  }
  if (output["SSEAwsKmsKeyId"] !== undefined) {
    contents.SSEAwsKmsKeyId = output["SSEAwsKmsKeyId"];
  }
  if (output["StorageClass"] !== undefined) {
    contents.StorageClass = output["StorageClass"];
  }
  if (output["TargetKeyPrefix"] !== undefined) {
    contents.TargetKeyPrefix = output["TargetKeyPrefix"];
  }
  if (output["TargetResource"] !== undefined) {
    contents.TargetResource = output["TargetResource"];
  }
  if (output["UnModifiedSinceConstraint"] !== undefined) {
    contents.UnModifiedSinceConstraint = new Date(
      output["UnModifiedSinceConstraint"]
    );
  }
  return contents;
};

const deserializeAws_restXmlS3Grant = (
  output: any,
  context: __SerdeContext
): S3Grant => {
  let contents: any = {
    __type: "S3Grant",
    Grantee: undefined,
    Permission: undefined
  };
  if (output["Grantee"] !== undefined) {
    contents.Grantee = deserializeAws_restXmlS3Grantee(
      output["Grantee"],
      context
    );
  }
  if (output["Permission"] !== undefined) {
    contents.Permission = output["Permission"];
  }
  return contents;
};

const deserializeAws_restXmlS3GrantList = (
  output: any,
  context: __SerdeContext
): Array<S3Grant> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlS3Grant(entry, context)
  );
};

const deserializeAws_restXmlS3Grantee = (
  output: any,
  context: __SerdeContext
): S3Grantee => {
  let contents: any = {
    __type: "S3Grantee",
    DisplayName: undefined,
    Identifier: undefined,
    TypeIdentifier: undefined
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["Identifier"] !== undefined) {
    contents.Identifier = output["Identifier"];
  }
  if (output["TypeIdentifier"] !== undefined) {
    contents.TypeIdentifier = output["TypeIdentifier"];
  }
  return contents;
};

const deserializeAws_restXmlS3InitiateRestoreObjectOperation = (
  output: any,
  context: __SerdeContext
): S3InitiateRestoreObjectOperation => {
  let contents: any = {
    __type: "S3InitiateRestoreObjectOperation",
    ExpirationInDays: undefined,
    GlacierJobTier: undefined
  };
  if (output["ExpirationInDays"] !== undefined) {
    contents.ExpirationInDays = parseInt(output["ExpirationInDays"]);
  }
  if (output["GlacierJobTier"] !== undefined) {
    contents.GlacierJobTier = output["GlacierJobTier"];
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectMetadata = (
  output: any,
  context: __SerdeContext
): S3ObjectMetadata => {
  let contents: any = {
    __type: "S3ObjectMetadata",
    CacheControl: undefined,
    ContentDisposition: undefined,
    ContentEncoding: undefined,
    ContentLanguage: undefined,
    ContentLength: undefined,
    ContentMD5: undefined,
    ContentType: undefined,
    HttpExpiresDate: undefined,
    RequesterCharged: undefined,
    SSEAlgorithm: undefined,
    UserMetadata: undefined
  };
  if (output["CacheControl"] !== undefined) {
    contents.CacheControl = output["CacheControl"];
  }
  if (output["ContentDisposition"] !== undefined) {
    contents.ContentDisposition = output["ContentDisposition"];
  }
  if (output["ContentEncoding"] !== undefined) {
    contents.ContentEncoding = output["ContentEncoding"];
  }
  if (output["ContentLanguage"] !== undefined) {
    contents.ContentLanguage = output["ContentLanguage"];
  }
  if (output["ContentLength"] !== undefined) {
    contents.ContentLength = parseInt(output["ContentLength"]);
  }
  if (output["ContentMD5"] !== undefined) {
    contents.ContentMD5 = output["ContentMD5"];
  }
  if (output["ContentType"] !== undefined) {
    contents.ContentType = output["ContentType"];
  }
  if (output["HttpExpiresDate"] !== undefined) {
    contents.HttpExpiresDate = new Date(output["HttpExpiresDate"]);
  }
  if (output["RequesterCharged"] !== undefined) {
    contents.RequesterCharged = output["RequesterCharged"] == "true";
  }
  if (output["SSEAlgorithm"] !== undefined) {
    contents.SSEAlgorithm = output["SSEAlgorithm"];
  }
  if (output.UserMetadata === "") {
    contents.UserMetadata = {};
  }
  if (
    output["UserMetadata"] !== undefined &&
    output["UserMetadata"]["entry"] !== undefined
  ) {
    const wrappedItem =
      output["UserMetadata"]["entry"] instanceof Array
        ? output["UserMetadata"]["entry"]
        : [output["UserMetadata"]["entry"]];
    contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(
      wrappedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlS3ObjectOwner = (
  output: any,
  context: __SerdeContext
): S3ObjectOwner => {
  let contents: any = {
    __type: "S3ObjectOwner",
    DisplayName: undefined,
    ID: undefined
  };
  if (output["DisplayName"] !== undefined) {
    contents.DisplayName = output["DisplayName"];
  }
  if (output["ID"] !== undefined) {
    contents.ID = output["ID"];
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectAclOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectAclOperation => {
  let contents: any = {
    __type: "S3SetObjectAclOperation",
    AccessControlPolicy: undefined
  };
  if (output["AccessControlPolicy"] !== undefined) {
    contents.AccessControlPolicy = deserializeAws_restXmlS3AccessControlPolicy(
      output["AccessControlPolicy"],
      context
    );
  }
  return contents;
};

const deserializeAws_restXmlS3SetObjectTaggingOperation = (
  output: any,
  context: __SerdeContext
): S3SetObjectTaggingOperation => {
  let contents: any = {
    __type: "S3SetObjectTaggingOperation",
    TagSet: undefined
  };
  if (output.TagSet === "") {
    contents.TagSet = [];
  }
  if (
    output["TagSet"] !== undefined &&
    output["TagSet"]["member"] !== undefined
  ) {
    const wrappedItem =
      output["TagSet"]["member"] instanceof Array
        ? output["TagSet"]["member"]
        : [output["TagSet"]["member"]];
    contents.TagSet = deserializeAws_restXmlS3TagSet(wrappedItem, context);
  }
  return contents;
};

const deserializeAws_restXmlS3Tag = (
  output: any,
  context: __SerdeContext
): S3Tag => {
  let contents: any = {
    __type: "S3Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_restXmlS3TagSet = (
  output: any,
  context: __SerdeContext
): Array<S3Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlS3Tag(entry, context)
  );
};

const deserializeAws_restXmlS3UserMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  output.forEach((pair: any) => {
    mapParams[pair["key"]] = pair["value"];
  });
  return mapParams;
};

const deserializeAws_restXmlVpcConfiguration = (
  output: any,
  context: __SerdeContext
): VpcConfiguration => {
  let contents: any = {
    __type: "VpcConfiguration",
    VpcId: undefined
  };
  if (output["VpcId"] !== undefined) {
    contents.VpcId = output["VpcId"];
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const decodeEscapedXML = (str: string) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return parsedObjToReturn;
    }
    return {};
  });
};

const loadRestXmlErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
