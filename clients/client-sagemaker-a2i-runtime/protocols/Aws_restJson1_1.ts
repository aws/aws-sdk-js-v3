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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeleteHumanLoopCommand(
  input: DeleteHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops/{HumanLoopName}";
  if (input.HumanLoopName !== undefined) {
    const labelValue: any = input.HumanLoopName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: HumanLoopName."
      );
    }
    resolvedPath = resolvedPath.replace("{HumanLoopName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: HumanLoopName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeHumanLoopCommand(
  input: DescribeHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops/{HumanLoopName}";
  if (input.HumanLoopName !== undefined) {
    const labelValue: any = input.HumanLoopName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: HumanLoopName."
      );
    }
    resolvedPath = resolvedPath.replace("{HumanLoopName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: HumanLoopName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListHumanLoopsCommand(
  input: ListHumanLoopsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/human-loops";
  const query: any = {};
  if (input.CreationTimeAfter !== undefined) {
    query["CreationTimeAfter"] = input.CreationTimeAfter.toISOString();
  }
  if (input.CreationTimeBefore !== undefined) {
    query["CreationTimeBefore"] = input.CreationTimeBefore.toISOString();
  }
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
  }
  if (input.SortOrder !== undefined) {
    query["SortOrder"] = input.SortOrder.toString();
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

export async function serializeAws_restJson1_1StartHumanLoopCommand(
  input: StartHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/human-loops";
  let body: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StopHumanLoopCommand(
  input: StopHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/human-loops/stop";
  let body: any = {};
  const bodyParams: any = {};
  if (input.HumanLoopName !== undefined) {
    bodyParams["HumanLoopName"] = input.HumanLoopName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DeleteHumanLoopCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteHumanLoopCommandError(
      output,
      context
    );
  }
  const contents: DeleteHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHumanLoopResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteHumanLoopCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.sagemaker.a2i.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeHumanLoopCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.CreationTimestamp !== undefined) {
    contents.CreationTimestamp = new Date(
      data.CreationTimestamp % 1 != 0
        ? Math.round(data.CreationTimestamp * 1000)
        : data.CreationTimestamp
    );
  }
  if (data.FailureCode !== undefined) {
    contents.FailureCode = data.FailureCode;
  }
  if (data.FailureReason !== undefined) {
    contents.FailureReason = data.FailureReason;
  }
  if (data.FlowDefinitionArn !== undefined) {
    contents.FlowDefinitionArn = data.FlowDefinitionArn;
  }
  if (data.HumanLoopArn !== undefined) {
    contents.HumanLoopArn = data.HumanLoopArn;
  }
  if (data.HumanLoopInput !== undefined) {
    contents.HumanLoopInput = deserializeAws_restJson1_1HumanLoopInputContent(
      data.HumanLoopInput,
      context
    );
  }
  if (data.HumanLoopName !== undefined) {
    contents.HumanLoopName = data.HumanLoopName;
  }
  if (data.HumanLoopOutput !== undefined) {
    contents.HumanLoopOutput = deserializeAws_restJson1_1HumanLoopOutputContent(
      data.HumanLoopOutput,
      context
    );
  }
  if (data.HumanLoopStatus !== undefined) {
    contents.HumanLoopStatus = data.HumanLoopStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeHumanLoopCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.sagemaker.a2i.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListHumanLoopsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.HumanLoopSummaries !== undefined) {
    contents.HumanLoopSummaries = deserializeAws_restJson1_1HumanLoopSummaries(
      data.HumanLoopSummaries,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListHumanLoopsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.sagemaker.a2i.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartHumanLoopCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.HumanLoopActivationResults !== undefined) {
    contents.HumanLoopActivationResults = deserializeAws_restJson1_1HumanLoopActivationResults(
      data.HumanLoopActivationResults,
      context
    );
  }
  if (data.HumanLoopArn !== undefined) {
    contents.HumanLoopArn = data.HumanLoopArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartHumanLoopCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemaker.a2i.runtime#ServiceQuotaExceededException":
      response = await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.sagemaker.a2i.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StopHumanLoopCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StopHumanLoopCommandError(output, context);
  }
  const contents: StopHumanLoopCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopHumanLoopResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopHumanLoopCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemaker.a2i.runtime#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemaker.a2i.runtime#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.sagemaker.a2i.runtime#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.sagemaker.a2i.runtime#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.sagemaker.a2i.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    __type: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1ContentClassifiers = (
  input: Array<ContentClassifier | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1HumanLoopInputContent = (
  input: HumanLoopInputContent,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.InputContent !== undefined) {
    bodyParams["InputContent"] = input.InputContent;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HumanReviewDataAttributes = (
  input: HumanReviewDataAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  if (output.ConditionsMatched !== undefined) {
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
  if (output.HumanLoopActivationConditionsEvaluationResults !== undefined) {
    contents.HumanLoopActivationConditionsEvaluationResults =
      output.HumanLoopActivationConditionsEvaluationResults;
  }
  if (output.HumanLoopActivationReason !== undefined) {
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
  if (output.InputContent !== undefined) {
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
  if (output.OutputS3Uri !== undefined) {
    contents.OutputS3Uri = output.OutputS3Uri;
  }
  return contents;
};

const deserializeAws_restJson1_1HumanLoopSummaries = (
  output: any,
  context: __SerdeContext
): Array<HumanLoopSummary> => {
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
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.FlowDefinitionArn !== undefined) {
    contents.FlowDefinitionArn = output.FlowDefinitionArn;
  }
  if (output.HumanLoopName !== undefined) {
    contents.HumanLoopName = output.HumanLoopName;
  }
  if (output.HumanLoopStatus !== undefined) {
    contents.HumanLoopStatus = output.HumanLoopStatus;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
