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

export const serializeAws_restJson1_1BatchPutMessageCommand = async (
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/inputs/messages";
  let body: any;
  body = JSON.stringify({
    ...(input.messages !== undefined && {
      messages: serializeAws_restJson1_1Messages(input.messages, context)
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

export const serializeAws_restJson1_1BatchUpdateDetectorCommand = async (
  input: BatchUpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detectors";
  let body: any;
  body = JSON.stringify({
    ...(input.detectors !== undefined && {
      detectors: serializeAws_restJson1_1UpdateDetectorRequests(
        input.detectors,
        context
      )
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

export const serializeAws_restJson1_1DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detectors/{detectorModelName}/keyValues";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {
    ...(input.keyValue !== undefined && { keyValue: input.keyValue })
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

export const serializeAws_restJson1_1ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detectors/{detectorModelName}";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.stateName !== undefined && { stateName: input.stateName })
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

export const deserializeAws_restJson1_1BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
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
  if (
    data.BatchPutMessageErrorEntries !== undefined &&
    data.BatchPutMessageErrorEntries !== null
  ) {
    contents.BatchPutMessageErrorEntries = deserializeAws_restJson1_1BatchPutMessageErrorEntries(
      data.BatchPutMessageErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1BatchPutMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1BatchUpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
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
  if (
    data.batchUpdateDetectorErrorEntries !== undefined &&
    data.batchUpdateDetectorErrorEntries !== null
  ) {
    contents.batchUpdateDetectorErrorEntries = deserializeAws_restJson1_1BatchUpdateDetectorErrorEntries(
      data.batchUpdateDetectorErrorEntries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1BatchUpdateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
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
  if (data.detector !== undefined && data.detector !== null) {
    contents.detector = deserializeAws_restJson1_1Detector(
      data.detector,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
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
  if (data.detectorSummaries !== undefined && data.detectorSummaries !== null) {
    contents.detectorSummaries = deserializeAws_restJson1_1DetectorSummaries(
      data.detectorSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1DetectorStateDefinition = (
  input: DetectorStateDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.stateName !== undefined && { stateName: input.stateName }),
    ...(input.timers !== undefined && {
      timers: serializeAws_restJson1_1TimerDefinitions(input.timers, context)
    }),
    ...(input.variables !== undefined && {
      variables: serializeAws_restJson1_1VariableDefinitions(
        input.variables,
        context
      )
    })
  };
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName !== undefined && { inputName: input.inputName }),
    ...(input.messageId !== undefined && { messageId: input.messageId }),
    ...(input.payload !== undefined && {
      payload: context.base64Encoder(input.payload)
    })
  };
};

const serializeAws_restJson1_1Messages = (
  input: Message[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Message(entry, context));
};

const serializeAws_restJson1_1TimerDefinition = (
  input: TimerDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.seconds !== undefined && { seconds: input.seconds })
  };
};

const serializeAws_restJson1_1TimerDefinitions = (
  input: TimerDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1TimerDefinition(entry, context)
  );
};

const serializeAws_restJson1_1UpdateDetectorRequest = (
  input: UpdateDetectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorModelName !== undefined && {
      detectorModelName: input.detectorModelName
    }),
    ...(input.keyValue !== undefined && { keyValue: input.keyValue }),
    ...(input.messageId !== undefined && { messageId: input.messageId }),
    ...(input.state !== undefined && {
      state: serializeAws_restJson1_1DetectorStateDefinition(
        input.state,
        context
      )
    })
  };
};

const serializeAws_restJson1_1UpdateDetectorRequests = (
  input: UpdateDetectorRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1UpdateDetectorRequest(entry, context)
  );
};

const serializeAws_restJson1_1VariableDefinition = (
  input: VariableDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1VariableDefinitions = (
  input: VariableDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1VariableDefinition(entry, context)
  );
};

const deserializeAws_restJson1_1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry[] => {
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
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.messageId !== undefined && output.messageId !== null) {
    contents.messageId = output.messageId;
  }
  return contents;
};

const deserializeAws_restJson1_1BatchUpdateDetectorErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchUpdateDetectorErrorEntry[] => {
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
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.messageId !== undefined && output.messageId !== null) {
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
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (
    output.detectorModelVersion !== undefined &&
    output.detectorModelVersion !== null
  ) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.keyValue !== undefined && output.keyValue !== null) {
    contents.keyValue = output.keyValue;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.state !== undefined && output.state !== null) {
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
  if (output.stateName !== undefined && output.stateName !== null) {
    contents.stateName = output.stateName;
  }
  if (output.timers !== undefined && output.timers !== null) {
    contents.timers = deserializeAws_restJson1_1Timers(output.timers, context);
  }
  if (output.variables !== undefined && output.variables !== null) {
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
  if (output.stateName !== undefined && output.stateName !== null) {
    contents.stateName = output.stateName;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorSummaries = (
  output: any,
  context: __SerdeContext
): DetectorSummary[] => {
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
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (
    output.detectorModelVersion !== undefined &&
    output.detectorModelVersion !== null
  ) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.keyValue !== undefined && output.keyValue !== null) {
    contents.keyValue = output.keyValue;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.state !== undefined && output.state !== null) {
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
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = new Date(Math.round(output.timestamp * 1000));
  }
  return contents;
};

const deserializeAws_restJson1_1Timers = (
  output: any,
  context: __SerdeContext
): Timer[] => {
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
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1Variables = (
  output: any,
  context: __SerdeContext
): Variable[] => {
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
