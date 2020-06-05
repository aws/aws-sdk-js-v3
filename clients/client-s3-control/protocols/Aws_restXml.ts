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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
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

export const serializeAws_restXmlCreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const bodyNode = new __XmlNode("CreateAccessPointRequest");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("BucketName")
      .addChildNode(new __XmlText(input.Bucket))
      .withName("Bucket");
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
    const node = serializeAws_restXmlVpcConfiguration(
      input.VpcConfiguration,
      context
    ).withName("VpcConfiguration");
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
    body
  });
};

export const serializeAws_restXmlCreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
  let resolvedPath = "/v20180820/jobs";
  let body: any;
  body = '<?xml version="1.0" encoding="UTF-8"?>';
  const bodyNode = new __XmlNode("CreateJobRequest");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
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
    const node = serializeAws_restXmlJobManifest(
      input.Manifest,
      context
    ).withName("Manifest");
    bodyNode.addChildNode(node);
  }
  if (input.Operation !== undefined) {
    const node = serializeAws_restXmlJobOperation(
      input.Operation,
      context
    ).withName("Operation");
    bodyNode.addChildNode(node);
  }
  if (input.Priority !== undefined) {
    const node = new __XmlNode("JobPriority")
      .addChildNode(new __XmlText(String(input.Priority)))
      .withName("Priority");
    bodyNode.addChildNode(node);
  }
  if (input.Report !== undefined) {
    const node = serializeAws_restXmlJobReport(input.Report, context).withName(
      "Report"
    );
    bodyNode.addChildNode(node);
  }
  if (input.RoleArn !== undefined) {
    const node = new __XmlNode("IAMRoleArn")
      .addChildNode(new __XmlText(input.RoleArn))
      .withName("RoleArn");
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
    body
  });
};

export const serializeAws_restXmlDeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlDeleteAccessPointPolicyCommand = async (
  input: DeleteAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlDeletePublicAccessBlockCommand = async (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlDescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlGetAccessPointCommand = async (
  input: GetAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlGetAccessPointPolicyCommand = async (
  input: GetAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
  input: GetAccessPointPolicyStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlGetPublicAccessBlockCommand = async (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
  let resolvedPath = "/v20180820/configuration/publicAccessBlock";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlListAccessPointsCommand = async (
  input: ListAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
  let resolvedPath = "/v20180820/accesspoint";
  const query: any = {
    ...(input.Bucket !== undefined && { bucket: input.Bucket }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
    body
  });
};

export const serializeAws_restXmlListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
  let resolvedPath = "/v20180820/jobs";
  const query: any = {
    ...(input.JobStatuses !== undefined && {
      jobStatuses: (input.JobStatuses || []).map(_entry => _entry)
    }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
    body
  });
};

export const serializeAws_restXmlPutAccessPointPolicyCommand = async (
  input: PutAccessPointPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const bodyNode = new __XmlNode("PutAccessPointPolicyRequest");
  bodyNode.addAttribute(
    "xmlns",
    "http://awss3control.amazonaws.com/doc/2018-08-20/"
  );
  if (input.Policy !== undefined) {
    const node = new __XmlNode("Policy")
      .addChildNode(new __XmlText(input.Policy))
      .withName("Policy");
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
    body
  });
};

export const serializeAws_restXmlPutPublicAccessBlockCommand = async (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/xml",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restXmlUpdateJobPriorityCommand = async (
  input: UpdateJobPriorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const query: any = {
    ...(input.Priority !== undefined && { priority: input.Priority.toString() })
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
    body
  });
};

export const serializeAws_restXmlUpdateJobStatusCommand = async (
  input: UpdateJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AccountId) && {
      "x-amz-account-id": input.AccountId!
    })
  };
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
  const query: any = {
    ...(input.RequestedJobStatus !== undefined && {
      requestedJobStatus: input.RequestedJobStatus
    }),
    ...(input.StatusUpdateReason !== undefined && {
      statusUpdateReason: input.StatusUpdateReason
    })
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
    body
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
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restXmlCreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
    __type: "CreateJobResult",
    JobId: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotencyException":
    case "com.amazonaws.s3control#IdempotencyException":
      response = {
        ...(await deserializeAws_restXmlIdempotencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_restXmlDeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restXmlDeleteAccessPointCommandError(output, context);
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlDeleteAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
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
};

const deserializeAws_restXmlDeleteAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
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
};

const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
    __type: "DescribeJobResult",
    Job: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

const deserializeAws_restXmlGetAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlGetAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
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
};

const deserializeAws_restXmlGetAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlGetAccessPointPolicyStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
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
};

const deserializeAws_restXmlGetAccessPointPolicyStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPointPolicyStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlGetPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
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
};

const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchPublicAccessBlockConfiguration":
    case "com.amazonaws.s3control#NoSuchPublicAccessBlockConfiguration":
      response = {
        ...(await deserializeAws_restXmlNoSuchPublicAccessBlockConfigurationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
    body: await parseBody(output.body, context)
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
    __type: "ListJobsResult",
    Jobs: undefined,
    NextToken: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.s3control#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restXmlInvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.s3control#InvalidRequestException":
      response = {
        ...(await deserializeAws_restXmlInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_restXmlPutAccessPointPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
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
};

const deserializeAws_restXmlPutAccessPointPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessPointPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

export const deserializeAws_restXmlPutPublicAccessBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
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
};

const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPublicAccessBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
};

const deserializeAws_restXmlUpdateJobPriorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobPriorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

const deserializeAws_restXmlUpdateJobStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.s3control#BadRequestException":
      response = {
        ...(await deserializeAws_restXmlBadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.s3control#InternalServiceException":
      response = {
        ...(await deserializeAws_restXmlInternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobStatusException":
    case "com.amazonaws.s3control#JobStatusException":
      response = {
        ...(await deserializeAws_restXmlJobStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.s3control#NotFoundException":
      response = {
        ...(await deserializeAws_restXmlNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.s3control#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restXmlTooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

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
    const node = serializeAws_restXmlJobManifestLocation(
      input.Location,
      context
    ).withName("Location");
    bodyNode.addChildNode(node);
  }
  if (input.Spec !== undefined) {
    const node = serializeAws_restXmlJobManifestSpec(
      input.Spec,
      context
    ).withName("Spec");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobManifestFieldList = (
  input: (JobManifestFieldName | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = new __XmlNode("JobManifestFieldName").addChildNode(
      new __XmlText(entry)
    );
    return node.withName("member");
  });
};

const serializeAws_restXmlJobManifestLocation = (
  input: JobManifestLocation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobManifestLocation");
  if (input.ETag !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ETag))
      .withName("ETag");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectArn !== undefined) {
    const node = new __XmlNode("S3KeyArnString")
      .addChildNode(new __XmlText(input.ObjectArn))
      .withName("ObjectArn");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectVersionId !== undefined) {
    const node = new __XmlNode("S3ObjectVersionId")
      .addChildNode(new __XmlText(input.ObjectVersionId))
      .withName("ObjectVersionId");
    bodyNode.addChildNode(node);
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
    const node = new __XmlNode("JobManifestFormat")
      .addChildNode(new __XmlText(input.Format))
      .withName("Format");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobOperation = (
  input: JobOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobOperation");
  if (input.LambdaInvoke !== undefined) {
    const node = serializeAws_restXmlLambdaInvokeOperation(
      input.LambdaInvoke,
      context
    ).withName("LambdaInvoke");
    bodyNode.addChildNode(node);
  }
  if (input.S3InitiateRestoreObject !== undefined) {
    const node = serializeAws_restXmlS3InitiateRestoreObjectOperation(
      input.S3InitiateRestoreObject,
      context
    ).withName("S3InitiateRestoreObject");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectAcl !== undefined) {
    const node = serializeAws_restXmlS3SetObjectAclOperation(
      input.S3PutObjectAcl,
      context
    ).withName("S3PutObjectAcl");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectCopy !== undefined) {
    const node = serializeAws_restXmlS3CopyObjectOperation(
      input.S3PutObjectCopy,
      context
    ).withName("S3PutObjectCopy");
    bodyNode.addChildNode(node);
  }
  if (input.S3PutObjectTagging !== undefined) {
    const node = serializeAws_restXmlS3SetObjectTaggingOperation(
      input.S3PutObjectTagging,
      context
    ).withName("S3PutObjectTagging");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlJobReport = (
  input: JobReport,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("JobReport");
  if (input.Bucket !== undefined) {
    const node = new __XmlNode("S3BucketArnString")
      .addChildNode(new __XmlText(input.Bucket))
      .withName("Bucket");
    bodyNode.addChildNode(node);
  }
  if (input.Enabled !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.Enabled)))
      .withName("Enabled");
    bodyNode.addChildNode(node);
  }
  if (input.Format !== undefined) {
    const node = new __XmlNode("JobReportFormat")
      .addChildNode(new __XmlText(input.Format))
      .withName("Format");
    bodyNode.addChildNode(node);
  }
  if (input.Prefix !== undefined) {
    const node = new __XmlNode("ReportPrefixString")
      .addChildNode(new __XmlText(input.Prefix))
      .withName("Prefix");
    bodyNode.addChildNode(node);
  }
  if (input.ReportScope !== undefined) {
    const node = new __XmlNode("JobReportScope")
      .addChildNode(new __XmlText(input.ReportScope))
      .withName("ReportScope");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlLambdaInvokeOperation = (
  input: LambdaInvokeOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("LambdaInvokeOperation");
  if (input.FunctionArn !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.FunctionArn))
      .withName("FunctionArn");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
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
  if (input.RestrictPublicBuckets !== undefined) {
    const node = new __XmlNode("Setting")
      .addChildNode(new __XmlText(String(input.RestrictPublicBuckets)))
      .withName("RestrictPublicBuckets");
    bodyNode.addChildNode(node);
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
    const node = serializeAws_restXmlS3ObjectOwner(
      input.Owner,
      context
    ).withName("Owner");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3AccessControlPolicy = (
  input: S3AccessControlPolicy,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3AccessControlPolicy");
  if (input.AccessControlList !== undefined) {
    const node = serializeAws_restXmlS3AccessControlList(
      input.AccessControlList,
      context
    ).withName("AccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.CannedAccessControlList !== undefined) {
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
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
    const node = new __XmlNode("S3CannedAccessControlList")
      .addChildNode(new __XmlText(input.CannedAccessControlList))
      .withName("CannedAccessControlList");
    bodyNode.addChildNode(node);
  }
  if (input.MetadataDirective !== undefined) {
    const node = new __XmlNode("S3MetadataDirective")
      .addChildNode(new __XmlText(input.MetadataDirective))
      .withName("MetadataDirective");
    bodyNode.addChildNode(node);
  }
  if (input.ModifiedSinceConstraint !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(
        new __XmlText(
          input.ModifiedSinceConstraint.toISOString().split(".")[0] + "Z"
        )
      )
      .withName("ModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  if (input.NewObjectMetadata !== undefined) {
    const node = serializeAws_restXmlS3ObjectMetadata(
      input.NewObjectMetadata,
      context
    ).withName("NewObjectMetadata");
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
  if (input.ObjectLockLegalHoldStatus !== undefined) {
    const node = new __XmlNode("S3ObjectLockLegalHoldStatus")
      .addChildNode(new __XmlText(input.ObjectLockLegalHoldStatus))
      .withName("ObjectLockLegalHoldStatus");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockMode !== undefined) {
    const node = new __XmlNode("S3ObjectLockMode")
      .addChildNode(new __XmlText(input.ObjectLockMode))
      .withName("ObjectLockMode");
    bodyNode.addChildNode(node);
  }
  if (input.ObjectLockRetainUntilDate !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(
        new __XmlText(
          input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z"
        )
      )
      .withName("ObjectLockRetainUntilDate");
    bodyNode.addChildNode(node);
  }
  if (input.RedirectLocation !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength2048String")
      .addChildNode(new __XmlText(input.RedirectLocation))
      .withName("RedirectLocation");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterPays !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterPays)))
      .withName("RequesterPays");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAwsKmsKeyId !== undefined) {
    const node = new __XmlNode("KmsKeyArnString")
      .addChildNode(new __XmlText(input.SSEAwsKmsKeyId))
      .withName("SSEAwsKmsKeyId");
    bodyNode.addChildNode(node);
  }
  if (input.StorageClass !== undefined) {
    const node = new __XmlNode("S3StorageClass")
      .addChildNode(new __XmlText(input.StorageClass))
      .withName("StorageClass");
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
  if (input.UnModifiedSinceConstraint !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(
        new __XmlText(
          input.UnModifiedSinceConstraint.toISOString().split(".")[0] + "Z"
        )
      )
      .withName("UnModifiedSinceConstraint");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grant = (
  input: S3Grant,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Grant");
  if (input.Grantee !== undefined) {
    const node = serializeAws_restXmlS3Grantee(input.Grantee, context).withName(
      "Grantee"
    );
    bodyNode.addChildNode(node);
  }
  if (input.Permission !== undefined) {
    const node = new __XmlNode("S3Permission")
      .addChildNode(new __XmlText(input.Permission))
      .withName("Permission");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3Grantee = (
  input: S3Grantee,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Grantee");
  if (input.DisplayName !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.Identifier !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.Identifier))
      .withName("Identifier");
    bodyNode.addChildNode(node);
  }
  if (input.TypeIdentifier !== undefined) {
    const node = new __XmlNode("S3GranteeTypeIdentifier")
      .addChildNode(new __XmlText(input.TypeIdentifier))
      .withName("TypeIdentifier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3GrantList = (
  input: S3Grant[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = serializeAws_restXmlS3Grant(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlS3InitiateRestoreObjectOperation = (
  input: S3InitiateRestoreObjectOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3InitiateRestoreObjectOperation");
  if (input.ExpirationInDays !== undefined) {
    const node = new __XmlNode("S3ExpirationInDays")
      .addChildNode(new __XmlText(String(input.ExpirationInDays)))
      .withName("ExpirationInDays");
    bodyNode.addChildNode(node);
  }
  if (input.GlacierJobTier !== undefined) {
    const node = new __XmlNode("S3GlacierJobTier")
      .addChildNode(new __XmlText(input.GlacierJobTier))
      .withName("GlacierJobTier");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3ObjectMetadata = (
  input: S3ObjectMetadata,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3ObjectMetadata");
  if (input.CacheControl !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.CacheControl))
      .withName("CacheControl");
    bodyNode.addChildNode(node);
  }
  if (input.ContentDisposition !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentDisposition))
      .withName("ContentDisposition");
    bodyNode.addChildNode(node);
  }
  if (input.ContentEncoding !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentEncoding))
      .withName("ContentEncoding");
    bodyNode.addChildNode(node);
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
  if (input.ContentMD5 !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentMD5))
      .withName("ContentMD5");
    bodyNode.addChildNode(node);
  }
  if (input.ContentType !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ContentType))
      .withName("ContentType");
    bodyNode.addChildNode(node);
  }
  if (input.HttpExpiresDate !== undefined) {
    const node = new __XmlNode("TimeStamp")
      .addChildNode(
        new __XmlText(input.HttpExpiresDate.toISOString().split(".")[0] + "Z")
      )
      .withName("HttpExpiresDate");
    bodyNode.addChildNode(node);
  }
  if (input.RequesterCharged !== undefined) {
    const node = new __XmlNode("Boolean")
      .addChildNode(new __XmlText(String(input.RequesterCharged)))
      .withName("RequesterCharged");
    bodyNode.addChildNode(node);
  }
  if (input.SSEAlgorithm !== undefined) {
    const node = new __XmlNode("S3SSEAlgorithm")
      .addChildNode(new __XmlText(input.SSEAlgorithm))
      .withName("SSEAlgorithm");
    bodyNode.addChildNode(node);
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
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.DisplayName))
      .withName("DisplayName");
    bodyNode.addChildNode(node);
  }
  if (input.ID !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.ID))
      .withName("ID");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3SetObjectAclOperation = (
  input: S3SetObjectAclOperation,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3SetObjectAclOperation");
  if (input.AccessControlPolicy !== undefined) {
    const node = serializeAws_restXmlS3AccessControlPolicy(
      input.AccessControlPolicy,
      context
    ).withName("AccessControlPolicy");
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

const serializeAws_restXmlS3Tag = (
  input: S3Tag,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("S3Tag");
  if (input.Key !== undefined) {
    const node = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(input.Key))
      .withName("Key");
    bodyNode.addChildNode(node);
  }
  if (input.Value !== undefined) {
    const node = new __XmlNode("MaxLength1024String")
      .addChildNode(new __XmlText(input.Value))
      .withName("Value");
    bodyNode.addChildNode(node);
  }
  return bodyNode;
};

const serializeAws_restXmlS3TagSet = (
  input: S3Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => {
    const node = serializeAws_restXmlS3Tag(entry, context);
    return node.withName("member");
  });
};

const serializeAws_restXmlS3UserMetadata = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).map(key => {
    const entryNode = new __XmlNode("entry");
    const keyNode = new __XmlNode("NonEmptyMaxLength1024String")
      .addChildNode(new __XmlText(key))
      .withName("key");
    entryNode.addChildNode(keyNode);
    const node = new __XmlNode("MaxLength1024String").addChildNode(
      new __XmlText(input[key])
    );
    entryNode.addChildNode(node.withName("value"));
    return entryNode;
  });
};

const serializeAws_restXmlVpcConfiguration = (
  input: VpcConfiguration,
  context: __SerdeContext
): any => {
  const bodyNode = new __XmlNode("VpcConfiguration");
  if (input.VpcId !== undefined) {
    const node = new __XmlNode("VpcId")
      .addChildNode(new __XmlText(input.VpcId))
      .withName("VpcId");
    bodyNode.addChildNode(node);
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
): AccessPoint[] => {
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
    contents.FailureReasons = deserializeAws_restXmlJobFailureList(
      __getArrayIfSingleItem(output["FailureReasons"]["member"]),
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
): JobFailure[] => {
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
): JobListDescriptor[] => {
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
): (JobManifestFieldName | string)[] => {
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
    contents.Grants = deserializeAws_restXmlS3GrantList(
      __getArrayIfSingleItem(output["Grants"]["member"]),
      context
    );
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
    contents.AccessControlGrants = deserializeAws_restXmlS3GrantList(
      __getArrayIfSingleItem(output["AccessControlGrants"]["member"]),
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
    contents.NewObjectTagging = deserializeAws_restXmlS3TagSet(
      __getArrayIfSingleItem(output["NewObjectTagging"]["member"]),
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

const deserializeAws_restXmlS3GrantList = (
  output: any,
  context: __SerdeContext
): S3Grant[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlS3Grant(entry, context)
  );
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
    contents.UserMetadata = deserializeAws_restXmlS3UserMetadata(
      __getArrayIfSingleItem(output["UserMetadata"]["entry"]),
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
    contents.TagSet = deserializeAws_restXmlS3TagSet(
      __getArrayIfSingleItem(output["TagSet"]["member"]),
      context
    );
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
): S3Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restXmlS3Tag(entry, context)
  );
};

const deserializeAws_restXmlS3UserMetadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
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
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
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
