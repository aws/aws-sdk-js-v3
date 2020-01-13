import {
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput
} from "../commands/BatchPutMessageCommand";
import {
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput
} from "../commands/BatchUpdateDetectorCommand";
import {
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput
} from "../commands/DescribeDetectorCommand";
import {
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput
} from "../commands/ListDetectorsCommand";
import {
  BatchPutMessageErrorEntry,
  BatchUpdateDetectorErrorEntry,
  Detector,
  DetectorState,
  DetectorStateDefinition,
  DetectorStateSummary,
  DetectorSummary,
  InternalFailureException,
  InvalidRequestException,
  Message,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  Timer,
  TimerDefinition,
  UpdateDetectorRequest,
  Variable,
  VariableDefinition
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

export async function serializeAws_restJson1_1BatchPutMessageCommand(
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/inputs/messages";
  let body: any = {};
  const bodyParams: any = {};
  if (input.messages !== undefined) {
    bodyParams["messages"] = serializeAws_restJson1_1Messages(
      input.messages,
      context
    );
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

export async function serializeAws_restJson1_1BatchUpdateDetectorCommand(
  input: BatchUpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/detectors";
  let body: any = {};
  const bodyParams: any = {};
  if (input.detectors !== undefined) {
    bodyParams["detectors"] = serializeAws_restJson1_1UpdateDetectorRequests(
      input.detectors,
      context
    );
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

export async function serializeAws_restJson1_1DescribeDetectorCommand(
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/detectors/{detectorModelName}/keyValues";
  if (input.detectorModelName !== undefined) {
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {};
  if (input.keyValue !== undefined) {
    query["keyValue"] = input.keyValue.toString();
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

export async function serializeAws_restJson1_1ListDetectorsCommand(
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/detectors/{detectorModelName}";
  if (input.detectorModelName !== undefined) {
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  if (input.stateName !== undefined) {
    query["stateName"] = input.stateName.toString();
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

export async function deserializeAws_restJson1_1BatchPutMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchPutMessageCommandError(
      output,
      context
    );
  }
  const contents: BatchPutMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchPutMessageResponse",
    BatchPutMessageErrorEntries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BatchPutMessageErrorEntries !== undefined) {
    contents.BatchPutMessageErrorEntries = deserializeAws_restJson1_1BatchPutMessageErrorEntries(
      data.BatchPutMessageErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchPutMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.iot.columbo.data#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1BatchUpdateDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchUpdateDetectorCommandError(
      output,
      context
    );
  }
  const contents: BatchUpdateDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchUpdateDetectorResponse",
    batchUpdateDetectorErrorEntries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.batchUpdateDetectorErrorEntries !== undefined) {
    contents.batchUpdateDetectorErrorEntries = deserializeAws_restJson1_1BatchUpdateDetectorErrorEntries(
      data.batchUpdateDetectorErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchUpdateDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.iot.columbo.data#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeDetectorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDetectorCommandError(
      output,
      context
    );
  }
  const contents: DescribeDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDetectorResponse",
    detector: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.detector !== undefined) {
    contents.detector = deserializeAws_restJson1_1Detector(
      data.detector,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDetectorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.iot.columbo.data#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDetectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDetectorsCommandError(output, context);
  }
  const contents: ListDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDetectorsResponse",
    detectorSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorSummaries !== undefined) {
    contents.detectorSummaries = deserializeAws_restJson1_1DetectorSummaries(
      data.detectorSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.iot.columbo.data#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1DetectorStateDefinition = (
  input: DetectorStateDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.stateName !== undefined) {
    bodyParams["stateName"] = input.stateName;
  }
  if (input.timers !== undefined) {
    bodyParams["timers"] = serializeAws_restJson1_1TimerDefinitions(
      input.timers,
      context
    );
  }
  if (input.variables !== undefined) {
    bodyParams["variables"] = serializeAws_restJson1_1VariableDefinitions(
      input.variables,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.inputName !== undefined) {
    bodyParams["inputName"] = input.inputName;
  }
  if (input.messageId !== undefined) {
    bodyParams["messageId"] = input.messageId;
  }
  if (input.payload !== undefined) {
    bodyParams["payload"] = context.base64Encoder(input.payload);
  }
  return bodyParams;
};

const serializeAws_restJson1_1Messages = (
  input: Array<Message>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Message(entry, context)
  );
};

const serializeAws_restJson1_1TimerDefinition = (
  input: TimerDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.seconds !== undefined) {
    bodyParams["seconds"] = input.seconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimerDefinitions = (
  input: Array<TimerDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1TimerDefinition(entry, context)
  );
};

const serializeAws_restJson1_1UpdateDetectorRequest = (
  input: UpdateDetectorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.detectorModelName !== undefined) {
    bodyParams["detectorModelName"] = input.detectorModelName;
  }
  if (input.keyValue !== undefined) {
    bodyParams["keyValue"] = input.keyValue;
  }
  if (input.messageId !== undefined) {
    bodyParams["messageId"] = input.messageId;
  }
  if (input.state !== undefined) {
    bodyParams["state"] = serializeAws_restJson1_1DetectorStateDefinition(
      input.state,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1UpdateDetectorRequests = (
  input: Array<UpdateDetectorRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1UpdateDetectorRequest(entry, context)
  );
};

const serializeAws_restJson1_1VariableDefinition = (
  input: VariableDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VariableDefinitions = (
  input: Array<VariableDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1VariableDefinition(entry, context)
  );
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): Array<BatchPutMessageErrorEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchPutMessageErrorEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry => {
  let contents: any = {
    __type: "BatchPutMessageErrorEntry",
    errorCode: undefined,
    errorMessage: undefined,
    messageId: undefined
  };
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.messageId !== undefined) {
    contents.messageId = output.messageId;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchUpdateDetectorErrorEntries = (
  output: any,
  context: __SerdeContext
): Array<BatchUpdateDetectorErrorEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BatchUpdateDetectorErrorEntry(entry, context)
  );
};

const deserializeAws_restJson1_1BatchUpdateDetectorErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchUpdateDetectorErrorEntry => {
  let contents: any = {
    __type: "BatchUpdateDetectorErrorEntry",
    errorCode: undefined,
    errorMessage: undefined,
    messageId: undefined
  };
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.messageId !== undefined) {
    contents.messageId = output.messageId;
  }
  return contents;
};

const deserializeAws_restJson1_1Detector = (
  output: any,
  context: __SerdeContext
): Detector => {
  let contents: any = {
    __type: "Detector",
    creationTime: undefined,
    detectorModelName: undefined,
    detectorModelVersion: undefined,
    keyValue: undefined,
    lastUpdateTime: undefined,
    state: undefined
  };
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.detectorModelName !== undefined) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.detectorModelVersion !== undefined) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.keyValue !== undefined) {
    contents.keyValue = output.keyValue;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.state !== undefined) {
    contents.state = deserializeAws_restJson1_1DetectorState(
      output.state,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorState = (
  output: any,
  context: __SerdeContext
): DetectorState => {
  let contents: any = {
    __type: "DetectorState",
    stateName: undefined,
    timers: undefined,
    variables: undefined
  };
  if (output.stateName !== undefined) {
    contents.stateName = output.stateName;
  }
  if (output.timers !== undefined) {
    contents.timers = deserializeAws_restJson1_1Timers(output.timers, context);
  }
  if (output.variables !== undefined) {
    contents.variables = deserializeAws_restJson1_1Variables(
      output.variables,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorStateSummary = (
  output: any,
  context: __SerdeContext
): DetectorStateSummary => {
  let contents: any = {
    __type: "DetectorStateSummary",
    stateName: undefined
  };
  if (output.stateName !== undefined) {
    contents.stateName = output.stateName;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorSummaries = (
  output: any,
  context: __SerdeContext
): Array<DetectorSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DetectorSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DetectorSummary = (
  output: any,
  context: __SerdeContext
): DetectorSummary => {
  let contents: any = {
    __type: "DetectorSummary",
    creationTime: undefined,
    detectorModelName: undefined,
    detectorModelVersion: undefined,
    keyValue: undefined,
    lastUpdateTime: undefined,
    state: undefined
  };
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.detectorModelName !== undefined) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.detectorModelVersion !== undefined) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.keyValue !== undefined) {
    contents.keyValue = output.keyValue;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.state !== undefined) {
    contents.state = deserializeAws_restJson1_1DetectorStateSummary(
      output.state,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Timer = (
  output: any,
  context: __SerdeContext
): Timer => {
  let contents: any = {
    __type: "Timer",
    name: undefined,
    timestamp: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.timestamp !== undefined) {
    contents.timestamp = new Date(
      output.timestamp % 1 != 0
        ? Math.round(output.timestamp * 1000)
        : output.timestamp
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Timers = (
  output: any,
  context: __SerdeContext
): Array<Timer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Timer(entry, context)
  );
};

const deserializeAws_restJson1_1Variable = (
  output: any,
  context: __SerdeContext
): Variable => {
  let contents: any = {
    __type: "Variable",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1Variables = (
  output: any,
  context: __SerdeContext
): Array<Variable> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Variable(entry, context)
  );
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
