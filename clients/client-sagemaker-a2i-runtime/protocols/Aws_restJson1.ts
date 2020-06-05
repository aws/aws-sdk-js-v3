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

export const serializeAws_restJson1DeleteHumanLoopCommand = async (
  input: DeleteHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DescribeHumanLoopCommand = async (
  input: DescribeHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1ListHumanLoopsCommand = async (
  input: ListHumanLoopsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/human-loops";
  const query: any = {
    ...(input.CreationTimeAfter !== undefined && {
      CreationTimeAfter: (
        input.CreationTimeAfter.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(input.CreationTimeBefore !== undefined && {
      CreationTimeBefore: (
        input.CreationTimeBefore.toISOString().split(".")[0] + "Z"
      ).toString()
    }),
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder })
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

export const serializeAws_restJson1StartHumanLoopCommand = async (
  input: StartHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/human-loops";
  let body: any;
  body = JSON.stringify({
    ...(input.DataAttributes !== undefined && {
      DataAttributes: serializeAws_restJson1HumanReviewDataAttributes(
        input.DataAttributes,
        context
      )
    }),
    ...(input.FlowDefinitionArn !== undefined && {
      FlowDefinitionArn: input.FlowDefinitionArn
    }),
    ...(input.HumanLoopInput !== undefined && {
      HumanLoopInput: serializeAws_restJson1HumanLoopInputContent(
        input.HumanLoopInput,
        context
      )
    }),
    ...(input.HumanLoopName !== undefined && {
      HumanLoopName: input.HumanLoopName
    })
  });
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

export const serializeAws_restJson1StopHumanLoopCommand = async (
  input: StopHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/human-loops/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.HumanLoopName !== undefined && {
      HumanLoopName: input.HumanLoopName
    })
  });
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

export const deserializeAws_restJson1DeleteHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteHumanLoopCommandError(output, context);
  }
  const contents: DeleteHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHumanLoopResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteHumanLoopCommandError = async (
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
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeHumanLoopCommandError(
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
    contents.HumanLoopInput = deserializeAws_restJson1HumanLoopInputContent(
      data.HumanLoopInput,
      context
    );
  }
  if (data.HumanLoopName !== undefined && data.HumanLoopName !== null) {
    contents.HumanLoopName = data.HumanLoopName;
  }
  if (data.HumanLoopOutput !== undefined && data.HumanLoopOutput !== null) {
    contents.HumanLoopOutput = deserializeAws_restJson1HumanLoopOutputContent(
      data.HumanLoopOutput,
      context
    );
  }
  if (data.HumanLoopStatus !== undefined && data.HumanLoopStatus !== null) {
    contents.HumanLoopStatus = data.HumanLoopStatus;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeHumanLoopCommandError = async (
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
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListHumanLoopsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListHumanLoopsCommandError(output, context);
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
    contents.HumanLoopSummaries = deserializeAws_restJson1HumanLoopSummaries(
      data.HumanLoopSummaries,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListHumanLoopsCommandError = async (
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
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1StartHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartHumanLoopCommandError(output, context);
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
    contents.HumanLoopActivationResults = deserializeAws_restJson1HumanLoopActivationResults(
      data.HumanLoopActivationResults,
      context
    );
  }
  if (data.HumanLoopArn !== undefined && data.HumanLoopArn !== null) {
    contents.HumanLoopArn = data.HumanLoopArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartHumanLoopCommandError = async (
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
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakera2iruntime#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1StopHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StopHumanLoopCommandError(output, context);
  }
  const contents: StopHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopHumanLoopResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopHumanLoopCommandError = async (
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
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
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

const serializeAws_restJson1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1HumanLoopInputContent = (
  input: HumanLoopInputContent,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputContent !== undefined && {
      InputContent: input.InputContent
    })
  };
};

const serializeAws_restJson1HumanReviewDataAttributes = (
  input: HumanReviewDataAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentClassifiers !== undefined && {
      ContentClassifiers: serializeAws_restJson1ContentClassifiers(
        input.ContentClassifiers,
        context
      )
    })
  };
};

const deserializeAws_restJson1HumanLoopActivationReason = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationReason => {
  return {
    __type: "HumanLoopActivationReason",
    ConditionsMatched:
      output.ConditionsMatched !== undefined &&
      output.ConditionsMatched !== null
        ? output.ConditionsMatched
        : undefined
  } as any;
};

const deserializeAws_restJson1HumanLoopActivationResults = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationResults => {
  return {
    __type: "HumanLoopActivationResults",
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
      output.HumanLoopActivationConditionsEvaluationResults !== null
        ? output.HumanLoopActivationConditionsEvaluationResults
        : undefined,
    HumanLoopActivationReason:
      output.HumanLoopActivationReason !== undefined &&
      output.HumanLoopActivationReason !== null
        ? deserializeAws_restJson1HumanLoopActivationReason(
            output.HumanLoopActivationReason,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1HumanLoopInputContent = (
  output: any,
  context: __SerdeContext
): HumanLoopInputContent => {
  return {
    __type: "HumanLoopInputContent",
    InputContent:
      output.InputContent !== undefined && output.InputContent !== null
        ? output.InputContent
        : undefined
  } as any;
};

const deserializeAws_restJson1HumanLoopOutputContent = (
  output: any,
  context: __SerdeContext
): HumanLoopOutputContent => {
  return {
    __type: "HumanLoopOutputContent",
    OutputS3Uri:
      output.OutputS3Uri !== undefined && output.OutputS3Uri !== null
        ? output.OutputS3Uri
        : undefined
  } as any;
};

const deserializeAws_restJson1HumanLoopSummaries = (
  output: any,
  context: __SerdeContext
): HumanLoopSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1HumanLoopSummary(entry, context)
  );
};

const deserializeAws_restJson1HumanLoopSummary = (
  output: any,
  context: __SerdeContext
): HumanLoopSummary => {
  return {
    __type: "HumanLoopSummary",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null
        ? output.FailureReason
        : undefined,
    FlowDefinitionArn:
      output.FlowDefinitionArn !== undefined &&
      output.FlowDefinitionArn !== null
        ? output.FlowDefinitionArn
        : undefined,
    HumanLoopName:
      output.HumanLoopName !== undefined && output.HumanLoopName !== null
        ? output.HumanLoopName
        : undefined,
    HumanLoopStatus:
      output.HumanLoopStatus !== undefined && output.HumanLoopStatus !== null
        ? output.HumanLoopStatus
        : undefined
  } as any;
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

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
