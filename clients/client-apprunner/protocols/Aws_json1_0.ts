import {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "../commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "../commands/CreateAutoScalingConfigurationCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "../commands/DeleteAutoScalingConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "../commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "../commands/DescribeCustomDomainsCommand";
import { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "../commands/DescribeServiceCommand";
import {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "../commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "../commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "../commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  AssociateCustomDomainRequest,
  AssociateCustomDomainResponse,
  AuthenticationConfiguration,
  AutoScalingConfiguration,
  AutoScalingConfigurationSummary,
  CertificateValidationRecord,
  CodeConfiguration,
  CodeConfigurationValues,
  CodeRepository,
  Connection,
  ConnectionSummary,
  CreateAutoScalingConfigurationRequest,
  CreateAutoScalingConfigurationResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CustomDomain,
  DeleteAutoScalingConfigurationRequest,
  DeleteAutoScalingConfigurationResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DescribeAutoScalingConfigurationRequest,
  DescribeAutoScalingConfigurationResponse,
  DescribeCustomDomainsRequest,
  DescribeCustomDomainsResponse,
  DescribeServiceRequest,
  DescribeServiceResponse,
  DisassociateCustomDomainRequest,
  DisassociateCustomDomainResponse,
  EncryptionConfiguration,
  HealthCheckConfiguration,
  ImageConfiguration,
  ImageRepository,
  InstanceConfiguration,
  InternalServiceErrorException,
  InvalidRequestException,
  InvalidStateException,
  ListAutoScalingConfigurationsRequest,
  ListAutoScalingConfigurationsResponse,
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OperationSummary,
  PauseServiceRequest,
  PauseServiceResponse,
  ResourceNotFoundException,
  ResumeServiceRequest,
  ResumeServiceResponse,
  Service,
  ServiceQuotaExceededException,
  ServiceSummary,
  SourceCodeVersion,
  SourceConfiguration,
  StartDeploymentRequest,
  StartDeploymentResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_0AssociateCustomDomainCommand = async (
  input: AssociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.AssociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateAutoScalingConfigurationCommand = async (
  input: CreateAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (
  input: DeleteAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (
  input: DescribeAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeCustomDomainsCommand = async (
  input: DescribeCustomDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeCustomDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeCustomDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeServiceCommand = async (
  input: DescribeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateCustomDomainCommand = async (
  input: DisassociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DisassociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListAutoScalingConfigurationsCommand = async (
  input: ListAutoScalingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListAutoScalingConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListAutoScalingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PauseServiceCommand = async (
  input: PauseServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.PauseService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PauseServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ResumeServiceCommand = async (
  input: ResumeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ResumeService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ResumeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.StartDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UpdateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateCustomDomainResponse(data, context);
  const response: AssociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateAutoScalingConfigurationResponse(data, context);
  const response: CreateAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteAutoScalingConfigurationResponse(data, context);
  const response: DeleteAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeAutoScalingConfigurationResponse(data, context);
  const response: DescribeAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeCustomDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeCustomDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeCustomDomainsResponse(data, context);
  const response: DescribeCustomDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeCustomDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeServiceResponse(data, context);
  const response: DescribeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DisassociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateCustomDomainResponse(data, context);
  const response: DisassociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListAutoScalingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListAutoScalingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListAutoScalingConfigurationsResponse(data, context);
  const response: ListAutoScalingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListAutoScalingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0PauseServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PauseServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PauseServiceResponse(data, context);
  const response: PauseServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PauseServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ResumeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ResumeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ResumeServiceResponse(data, context);
  const response: ResumeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ResumeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartDeploymentResponse(data, context);
  const response: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_0InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServiceErrorException(body, context);
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidStateException(body, context);
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0AssociateCustomDomainRequest = (
  input: AssociateCustomDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.EnableWWWSubdomain !== undefined &&
      input.EnableWWWSubdomain !== null && { EnableWWWSubdomain: input.EnableWWWSubdomain }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0AuthenticationConfiguration = (
  input: AuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessRoleArn !== undefined && input.AccessRoleArn !== null && { AccessRoleArn: input.AccessRoleArn }),
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0CodeConfiguration = (input: CodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfigurationValues !== undefined &&
      input.CodeConfigurationValues !== null && {
        CodeConfigurationValues: serializeAws_json1_0CodeConfigurationValues(input.CodeConfigurationValues, context),
      }),
    ...(input.ConfigurationSource !== undefined &&
      input.ConfigurationSource !== null && { ConfigurationSource: input.ConfigurationSource }),
  };
};

const serializeAws_json1_0CodeConfigurationValues = (input: CodeConfigurationValues, context: __SerdeContext): any => {
  return {
    ...(input.BuildCommand !== undefined && input.BuildCommand !== null && { BuildCommand: input.BuildCommand }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }),
    ...(input.RuntimeEnvironmentVariables !== undefined &&
      input.RuntimeEnvironmentVariables !== null && {
        RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
          input.RuntimeEnvironmentVariables,
          context
        ),
      }),
    ...(input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }),
  };
};

const serializeAws_json1_0CodeRepository = (input: CodeRepository, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfiguration !== undefined &&
      input.CodeConfiguration !== null && {
        CodeConfiguration: serializeAws_json1_0CodeConfiguration(input.CodeConfiguration, context),
      }),
    ...(input.RepositoryUrl !== undefined && input.RepositoryUrl !== null && { RepositoryUrl: input.RepositoryUrl }),
    ...(input.SourceCodeVersion !== undefined &&
      input.SourceCodeVersion !== null && {
        SourceCodeVersion: serializeAws_json1_0SourceCodeVersion(input.SourceCodeVersion, context),
      }),
  };
};

const serializeAws_json1_0CreateAutoScalingConfigurationRequest = (
  input: CreateAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName !== undefined &&
      input.AutoScalingConfigurationName !== null && {
        AutoScalingConfigurationName: input.AutoScalingConfigurationName,
      }),
    ...(input.MaxConcurrency !== undefined &&
      input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
    ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.HealthCheckConfiguration !== undefined &&
      input.HealthCheckConfiguration !== null && {
        HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
      }),
    ...(input.InstanceConfiguration !== undefined &&
      input.InstanceConfiguration !== null && {
        InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
      }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0DeleteAutoScalingConfigurationRequest = (
  input: DeleteAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
  };
};

const serializeAws_json1_0DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DescribeAutoScalingConfigurationRequest = (
  input: DescribeAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
  };
};

const serializeAws_json1_0DescribeCustomDomainsRequest = (
  input: DescribeCustomDomainsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DescribeServiceRequest = (input: DescribeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DisassociateCustomDomainRequest = (
  input: DisassociateCustomDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
  };
};

const serializeAws_json1_0HealthCheckConfiguration = (
  input: HealthCheckConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthyThreshold !== undefined &&
      input.HealthyThreshold !== null && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold !== undefined &&
      input.UnhealthyThreshold !== null && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};

const serializeAws_json1_0ImageConfiguration = (input: ImageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.RuntimeEnvironmentVariables !== undefined &&
      input.RuntimeEnvironmentVariables !== null && {
        RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
          input.RuntimeEnvironmentVariables,
          context
        ),
      }),
    ...(input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }),
  };
};

const serializeAws_json1_0ImageRepository = (input: ImageRepository, context: __SerdeContext): any => {
  return {
    ...(input.ImageConfiguration !== undefined &&
      input.ImageConfiguration !== null && {
        ImageConfiguration: serializeAws_json1_0ImageConfiguration(input.ImageConfiguration, context),
      }),
    ...(input.ImageIdentifier !== undefined &&
      input.ImageIdentifier !== null && { ImageIdentifier: input.ImageIdentifier }),
    ...(input.ImageRepositoryType !== undefined &&
      input.ImageRepositoryType !== null && { ImageRepositoryType: input.ImageRepositoryType }),
  };
};

const serializeAws_json1_0InstanceConfiguration = (input: InstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Cpu !== undefined && input.Cpu !== null && { Cpu: input.Cpu }),
    ...(input.InstanceRoleArn !== undefined &&
      input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Memory !== undefined && input.Memory !== null && { Memory: input.Memory }),
  };
};

const serializeAws_json1_0ListAutoScalingConfigurationsRequest = (
  input: ListAutoScalingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName !== undefined &&
      input.AutoScalingConfigurationName !== null && {
        AutoScalingConfigurationName: input.AutoScalingConfigurationName,
      }),
    ...(input.LatestOnly !== undefined && input.LatestOnly !== null && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListConnectionsRequest = (input: ListConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0PauseServiceRequest = (input: PauseServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0ResumeServiceRequest = (input: ResumeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0RuntimeEnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_0SourceCodeVersion = (input: SourceCodeVersion, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_0SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration !== undefined &&
      input.AuthenticationConfiguration !== null && {
        AuthenticationConfiguration: serializeAws_json1_0AuthenticationConfiguration(
          input.AuthenticationConfiguration,
          context
        ),
      }),
    ...(input.AutoDeploymentsEnabled !== undefined &&
      input.AutoDeploymentsEnabled !== null && { AutoDeploymentsEnabled: input.AutoDeploymentsEnabled }),
    ...(input.CodeRepository !== undefined &&
      input.CodeRepository !== null && {
        CodeRepository: serializeAws_json1_0CodeRepository(input.CodeRepository, context),
      }),
    ...(input.ImageRepository !== undefined &&
      input.ImageRepository !== null && {
        ImageRepository: serializeAws_json1_0ImageRepository(input.ImageRepository, context),
      }),
  };
};

const serializeAws_json1_0StartDeploymentRequest = (input: StartDeploymentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
    ...(input.HealthCheckConfiguration !== undefined &&
      input.HealthCheckConfiguration !== null && {
        HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
      }),
    ...(input.InstanceConfiguration !== undefined &&
      input.InstanceConfiguration !== null && {
        InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
      }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
    ...(input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
      }),
  };
};

const deserializeAws_json1_0AssociateCustomDomainResponse = (
  output: any,
  context: __SerdeContext
): AssociateCustomDomainResponse => {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0AuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): AuthenticationConfiguration => {
  return {
    AccessRoleArn: __expectString(output.AccessRoleArn),
    ConnectionArn: __expectString(output.ConnectionArn),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): AutoScalingConfiguration => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt(output.AutoScalingConfigurationRevision),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DeletedAt:
      output.DeletedAt !== undefined && output.DeletedAt !== null
        ? new Date(Math.round(output.DeletedAt * 1000))
        : undefined,
    Latest: __expectBoolean(output.Latest),
    MaxConcurrency: __expectInt(output.MaxConcurrency),
    MaxSize: __expectInt(output.MaxSize),
    MinSize: __expectInt(output.MinSize),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfigurationSummary = (
  output: any,
  context: __SerdeContext
): AutoScalingConfigurationSummary => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt(output.AutoScalingConfigurationRevision),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): AutoScalingConfigurationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AutoScalingConfigurationSummary(entry, context);
    });
};

const deserializeAws_json1_0CertificateValidationRecord = (
  output: any,
  context: __SerdeContext
): CertificateValidationRecord => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0CertificateValidationRecordList = (
  output: any,
  context: __SerdeContext
): CertificateValidationRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CertificateValidationRecord(entry, context);
    });
};

const deserializeAws_json1_0CodeConfiguration = (output: any, context: __SerdeContext): CodeConfiguration => {
  return {
    CodeConfigurationValues:
      output.CodeConfigurationValues !== undefined && output.CodeConfigurationValues !== null
        ? deserializeAws_json1_0CodeConfigurationValues(output.CodeConfigurationValues, context)
        : undefined,
    ConfigurationSource: __expectString(output.ConfigurationSource),
  } as any;
};

const deserializeAws_json1_0CodeConfigurationValues = (
  output: any,
  context: __SerdeContext
): CodeConfigurationValues => {
  return {
    BuildCommand: __expectString(output.BuildCommand),
    Port: __expectString(output.Port),
    Runtime: __expectString(output.Runtime),
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables !== undefined && output.RuntimeEnvironmentVariables !== null
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

const deserializeAws_json1_0CodeRepository = (output: any, context: __SerdeContext): CodeRepository => {
  return {
    CodeConfiguration:
      output.CodeConfiguration !== undefined && output.CodeConfiguration !== null
        ? deserializeAws_json1_0CodeConfiguration(output.CodeConfiguration, context)
        : undefined,
    RepositoryUrl: __expectString(output.RepositoryUrl),
    SourceCodeVersion:
      output.SourceCodeVersion !== undefined && output.SourceCodeVersion !== null
        ? deserializeAws_json1_0SourceCodeVersion(output.SourceCodeVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ConnectionSummary = (output: any, context: __SerdeContext): ConnectionSummary => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ConnectionSummaryList = (output: any, context: __SerdeContext): ConnectionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ConnectionSummary(entry, context);
    });
};

const deserializeAws_json1_0CreateAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CustomDomain = (output: any, context: __SerdeContext): CustomDomain => {
  return {
    CertificateValidationRecords:
      output.CertificateValidationRecords !== undefined && output.CertificateValidationRecords !== null
        ? deserializeAws_json1_0CertificateValidationRecordList(output.CertificateValidationRecords, context)
        : undefined,
    DomainName: __expectString(output.DomainName),
    EnableWWWSubdomain: __expectBoolean(output.EnableWWWSubdomain),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CustomDomainList = (output: any, context: __SerdeContext): CustomDomain[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CustomDomain(entry, context);
    });
};

const deserializeAws_json1_0DeleteAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeCustomDomainsResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomDomainsResponse => {
  return {
    CustomDomains:
      output.CustomDomains !== undefined && output.CustomDomains !== null
        ? deserializeAws_json1_0CustomDomainList(output.CustomDomains, context)
        : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    NextToken: __expectString(output.NextToken),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0DescribeServiceResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceResponse => {
  return {
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DisassociateCustomDomainResponse = (
  output: any,
  context: __SerdeContext
): DisassociateCustomDomainResponse => {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

const deserializeAws_json1_0HealthCheckConfiguration = (
  output: any,
  context: __SerdeContext
): HealthCheckConfiguration => {
  return {
    HealthyThreshold: __expectInt(output.HealthyThreshold),
    Interval: __expectInt(output.Interval),
    Path: __expectString(output.Path),
    Protocol: __expectString(output.Protocol),
    Timeout: __expectInt(output.Timeout),
    UnhealthyThreshold: __expectInt(output.UnhealthyThreshold),
  } as any;
};

const deserializeAws_json1_0ImageConfiguration = (output: any, context: __SerdeContext): ImageConfiguration => {
  return {
    Port: __expectString(output.Port),
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables !== undefined && output.RuntimeEnvironmentVariables !== null
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

const deserializeAws_json1_0ImageRepository = (output: any, context: __SerdeContext): ImageRepository => {
  return {
    ImageConfiguration:
      output.ImageConfiguration !== undefined && output.ImageConfiguration !== null
        ? deserializeAws_json1_0ImageConfiguration(output.ImageConfiguration, context)
        : undefined,
    ImageIdentifier: __expectString(output.ImageIdentifier),
    ImageRepositoryType: __expectString(output.ImageRepositoryType),
  } as any;
};

const deserializeAws_json1_0InstanceConfiguration = (output: any, context: __SerdeContext): InstanceConfiguration => {
  return {
    Cpu: __expectString(output.Cpu),
    InstanceRoleArn: __expectString(output.InstanceRoleArn),
    Memory: __expectString(output.Memory),
  } as any;
};

const deserializeAws_json1_0InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListAutoScalingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAutoScalingConfigurationsResponse => {
  return {
    AutoScalingConfigurationSummaryList:
      output.AutoScalingConfigurationSummaryList !== undefined && output.AutoScalingConfigurationSummaryList !== null
        ? deserializeAws_json1_0AutoScalingConfigurationSummaryList(output.AutoScalingConfigurationSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListConnectionsResponse = (
  output: any,
  context: __SerdeContext
): ListConnectionsResponse => {
  return {
    ConnectionSummaryList:
      output.ConnectionSummaryList !== undefined && output.ConnectionSummaryList !== null
        ? deserializeAws_json1_0ConnectionSummaryList(output.ConnectionSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OperationSummaryList:
      output.OperationSummaryList !== undefined && output.OperationSummaryList !== null
        ? deserializeAws_json1_0OperationSummaryList(output.OperationSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceSummaryList:
      output.ServiceSummaryList !== undefined && output.ServiceSummaryList !== null
        ? deserializeAws_json1_0ServiceSummaryList(output.ServiceSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    EndedAt:
      output.EndedAt !== undefined && output.EndedAt !== null ? new Date(Math.round(output.EndedAt * 1000)) : undefined,
    Id: __expectString(output.Id),
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status: __expectString(output.Status),
    TargetArn: __expectString(output.TargetArn),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0OperationSummary(entry, context);
    });
};

const deserializeAws_json1_0PauseServiceResponse = (output: any, context: __SerdeContext): PauseServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResumeServiceResponse = (output: any, context: __SerdeContext): ResumeServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RuntimeEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_0Service = (output: any, context: __SerdeContext): Service => {
  return {
    AutoScalingConfigurationSummary:
      output.AutoScalingConfigurationSummary !== undefined && output.AutoScalingConfigurationSummary !== null
        ? deserializeAws_json1_0AutoScalingConfigurationSummary(output.AutoScalingConfigurationSummary, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DeletedAt:
      output.DeletedAt !== undefined && output.DeletedAt !== null
        ? new Date(Math.round(output.DeletedAt * 1000))
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    HealthCheckConfiguration:
      output.HealthCheckConfiguration !== undefined && output.HealthCheckConfiguration !== null
        ? deserializeAws_json1_0HealthCheckConfiguration(output.HealthCheckConfiguration, context)
        : undefined,
    InstanceConfiguration:
      output.InstanceConfiguration !== undefined && output.InstanceConfiguration !== null
        ? deserializeAws_json1_0InstanceConfiguration(output.InstanceConfiguration, context)
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    SourceConfiguration:
      output.SourceConfiguration !== undefined && output.SourceConfiguration !== null
        ? deserializeAws_json1_0SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0ServiceSummaryList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ServiceSummary(entry, context);
    });
};

const deserializeAws_json1_0SourceCodeVersion = (output: any, context: __SerdeContext): SourceCodeVersion => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration !== undefined && output.AuthenticationConfiguration !== null
        ? deserializeAws_json1_0AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    AutoDeploymentsEnabled: __expectBoolean(output.AutoDeploymentsEnabled),
    CodeRepository:
      output.CodeRepository !== undefined && output.CodeRepository !== null
        ? deserializeAws_json1_0CodeRepository(output.CodeRepository, context)
        : undefined,
    ImageRepository:
      output.ImageRepository !== undefined && output.ImageRepository !== null
        ? deserializeAws_json1_0ImageRepository(output.ImageRepository, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartDeploymentResponse = (
  output: any,
  context: __SerdeContext
): StartDeploymentResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
