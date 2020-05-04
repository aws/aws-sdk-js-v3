import {
  DeleteHumanLoopCommandInput,
  DeleteHumanLoopCommandOutput
} from "../commands/DeleteHumanLoopCommand";
import {
  DescribeHumanLoopCommandInput,
  DescribeHumanLoopCommandOutput
} from "../commands/DescribeHumanLoopCommand";
import {
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput
} from "../commands/ListHumanLoopsCommand";
import {
  StartHumanLoopCommandInput,
  StartHumanLoopCommandOutput
} from "../commands/StartHumanLoopCommand";
import {
  StopHumanLoopCommandInput,
  StopHumanLoopCommandOutput
} from "../commands/StopHumanLoopCommand";
import {
  ContentClassifier,
  HumanLoopActivationReason,
  HumanLoopActivationResults,
  HumanLoopInputContent,
  HumanLoopOutputContent,
  HumanLoopSummary,
  HumanReviewDataAttributes,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException
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

export const serializeAws_restJson1_1DeleteHumanLoopCommand = async (
  input: DeleteHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops/{HumanLoopName}";
  if (input.HumanLoopName !== undefined) {
    const labelValue: string = input.HumanLoopName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: HumanLoopName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{HumanLoopName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: HumanLoopName.");
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

export const serializeAws_restJson1_1DescribeHumanLoopCommand = async (
  input: DescribeHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops/{HumanLoopName}";
  if (input.HumanLoopName !== undefined) {
    const labelValue: string = input.HumanLoopName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: HumanLoopName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{HumanLoopName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: HumanLoopName.");
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

export const serializeAws_restJson1_1ListHumanLoopsCommand = async (
  input: ListHumanLoopsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops";
  const query: any = {};
  if (input.CreationTimeAfter !== undefined) {
    query["CreationTimeAfter"] = (
      input.CreationTimeAfter.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (input.CreationTimeBefore !== undefined) {
    query["CreationTimeBefore"] = (
      input.CreationTimeBefore.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.SortOrder !== undefined) {
    query["SortOrder"] = input.SortOrder;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1StartHumanLoopCommand = async (
  input: StartHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/human-loops";
  let body: any;
  const bodyParams: any = {};
  if (input.DataAttributes !== undefined) {
    bodyParams[
      "DataAttributes"
    ] = serializeAws_restJson1_1HumanReviewDataAttributes(
      input.DataAttributes,
      context
    );
  }
  if (input.FlowDefinitionArn !== undefined) {
    bodyParams["FlowDefinitionArn"] = input.FlowDefinitionArn;
  }
  if (input.HumanLoopInput !== undefined) {
    bodyParams[
      "HumanLoopInput"
    ] = serializeAws_restJson1_1HumanLoopInputContent(
      input.HumanLoopInput,
      context
    );
  }
  if (input.HumanLoopName !== undefined) {
    bodyParams["HumanLoopName"] = input.HumanLoopName;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1StopHumanLoopCommand = async (
  input: StopHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/human-loops/stop";
  let body: any;
  const bodyParams: any = {};
  if (input.HumanLoopName !== undefined) {
    bodyParams["HumanLoopName"] = input.HumanLoopName;
  }
  body = JSON.stringify(bodyParams);
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

export const deserializeAws_restJson1_1DeleteHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteHumanLoopCommandError(
      output,
      context
    );
  }
  const contents: DeleteHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHumanLoopResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeHumanLoopCommandError(
      output,
      context
    );
  }
  const contents: DescribeHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHumanLoopResponse",
    CreationTimestamp: undefined,
    FailureCode: undefined,
    FailureReason: undefined,
    FlowDefinitionArn: undefined,
    HumanLoopArn: undefined,
    HumanLoopInput: undefined,
    HumanLoopName: undefined,
    HumanLoopOutput: undefined,
    HumanLoopStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationTimestamp !== undefined && data.CreationTimestamp !== null) {
    contents.CreationTimestamp = new Date(
      Math.round(data.CreationTimestamp * 1000)
    );
  }
  if (data.FailureCode !== undefined && data.FailureCode !== null) {
    contents.FailureCode = data.FailureCode;
  }
  if (data.FailureReason !== undefined && data.FailureReason !== null) {
    contents.FailureReason = data.FailureReason;
  }
  if (data.FlowDefinitionArn !== undefined && data.FlowDefinitionArn !== null) {
    contents.FlowDefinitionArn = data.FlowDefinitionArn;
  }
  if (data.HumanLoopArn !== undefined && data.HumanLoopArn !== null) {
    contents.HumanLoopArn = data.HumanLoopArn;
  }
  if (data.HumanLoopInput !== undefined && data.HumanLoopInput !== null) {
    contents.HumanLoopInput = deserializeAws_restJson1_1HumanLoopInputContent(
      data.HumanLoopInput,
      context
    );
  }
  if (data.HumanLoopName !== undefined && data.HumanLoopName !== null) {
    contents.HumanLoopName = data.HumanLoopName;
  }
  if (data.HumanLoopOutput !== undefined && data.HumanLoopOutput !== null) {
    contents.HumanLoopOutput = deserializeAws_restJson1_1HumanLoopOutputContent(
      data.HumanLoopOutput,
      context
    );
  }
  if (data.HumanLoopStatus !== undefined && data.HumanLoopStatus !== null) {
    contents.HumanLoopStatus = data.HumanLoopStatus;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListHumanLoopsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListHumanLoopsCommandError(
      output,
      context
    );
  }
  const contents: ListHumanLoopsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHumanLoopsResponse",
    HumanLoopSummaries: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.HumanLoopSummaries !== undefined &&
    data.HumanLoopSummaries !== null
  ) {
    contents.HumanLoopSummaries = deserializeAws_restJson1_1HumanLoopSummaries(
      data.HumanLoopSummaries,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListHumanLoopsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StartHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartHumanLoopCommandError(
      output,
      context
    );
  }
  const contents: StartHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartHumanLoopResponse",
    HumanLoopActivationResults: undefined,
    HumanLoopArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.HumanLoopActivationResults !== undefined &&
    data.HumanLoopActivationResults !== null
  ) {
    contents.HumanLoopActivationResults = deserializeAws_restJson1_1HumanLoopActivationResults(
      data.HumanLoopActivationResults,
      context
    );
  }
  if (data.HumanLoopArn !== undefined && data.HumanLoopArn !== null) {
    contents.HumanLoopArn = data.HumanLoopArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemaker.a2i.runtime#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StopHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopHumanLoopCommandError(output, context);
  }
  const contents: StopHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopHumanLoopResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StopHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1HumanLoopInputContent = (
  input: HumanLoopInputContent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputContent !== undefined) {
    bodyParams["InputContent"] = input.InputContent;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HumanReviewDataAttributes = (
  input: HumanReviewDataAttributes,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ContentClassifiers !== undefined) {
    bodyParams[
      "ContentClassifiers"
    ] = serializeAws_restJson1_1ContentClassifiers(
      input.ContentClassifiers,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1HumanLoopActivationReason = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationReason => {
  let contents: any = {
    __type: "HumanLoopActivationReason",
    ConditionsMatched: undefined
  };
  if (
    output.ConditionsMatched !== undefined &&
    output.ConditionsMatched !== null
  ) {
    contents.ConditionsMatched = output.ConditionsMatched;
  }
  return contents;
};

const deserializeAws_restJson1_1HumanLoopActivationResults = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationResults => {
  let contents: any = {
    __type: "HumanLoopActivationResults",
    HumanLoopActivationConditionsEvaluationResults: undefined,
    HumanLoopActivationReason: undefined
  };
  if (
    output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
    output.HumanLoopActivationConditionsEvaluationResults !== null
  ) {
    contents.HumanLoopActivationConditionsEvaluationResults =
      output.HumanLoopActivationConditionsEvaluationResults;
  }
  if (
    output.HumanLoopActivationReason !== undefined &&
    output.HumanLoopActivationReason !== null
  ) {
    contents.HumanLoopActivationReason = deserializeAws_restJson1_1HumanLoopActivationReason(
      output.HumanLoopActivationReason,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HumanLoopInputContent = (
  output: any,
  context: __SerdeContext
): HumanLoopInputContent => {
  let contents: any = {
    __type: "HumanLoopInputContent",
    InputContent: undefined
  };
  if (output.InputContent !== undefined && output.InputContent !== null) {
    contents.InputContent = output.InputContent;
  }
  return contents;
};

const deserializeAws_restJson1_1HumanLoopOutputContent = (
  output: any,
  context: __SerdeContext
): HumanLoopOutputContent => {
  let contents: any = {
    __type: "HumanLoopOutputContent",
    OutputS3Uri: undefined
  };
  if (output.OutputS3Uri !== undefined && output.OutputS3Uri !== null) {
    contents.OutputS3Uri = output.OutputS3Uri;
  }
  return contents;
};

const deserializeAws_restJson1_1HumanLoopSummaries = (
  output: any,
  context: __SerdeContext
): HumanLoopSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HumanLoopSummary(entry, context)
  );
};

const deserializeAws_restJson1_1HumanLoopSummary = (
  output: any,
  context: __SerdeContext
): HumanLoopSummary => {
  let contents: any = {
    __type: "HumanLoopSummary",
    CreationTime: undefined,
    FailureReason: undefined,
    FlowDefinitionArn: undefined,
    HumanLoopName: undefined,
    HumanLoopStatus: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (
    output.FlowDefinitionArn !== undefined &&
    output.FlowDefinitionArn !== null
  ) {
    contents.FlowDefinitionArn = output.FlowDefinitionArn;
  }
  if (output.HumanLoopName !== undefined && output.HumanLoopName !== null) {
    contents.HumanLoopName = output.HumanLoopName;
  }
  if (output.HumanLoopStatus !== undefined && output.HumanLoopStatus !== null) {
    contents.HumanLoopStatus = output.HumanLoopStatus;
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

function isSerializableHeaderValue(value: any): boolean {
  return (
    value !== undefined &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
