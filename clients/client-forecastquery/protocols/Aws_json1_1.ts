import {
  QueryForecastCommandInput,
  QueryForecastCommandOutput
} from "../commands/QueryForecastCommand";
import {
  DataPoint,
  Forecast,
  InvalidInputException,
  InvalidNextTokenException,
  LimitExceededException,
  QueryForecastRequest,
  QueryForecastResponse,
  ResourceInUseException,
  ResourceNotFoundException
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

export async function serializeAws_json1_1QueryForecastCommand(
  input: QueryForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecastRuntime.QueryForecast";
  let body: any = {};
  const wrappedBody: any = {
    QueryForecastRequest: serializeAws_json1_1QueryForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/QueryForecast",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1QueryForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1QueryForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QueryForecastResponse(
    data.QueryForecastResponse,
    context
  );
  const response: QueryForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "QueryForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1QueryForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.queryservice#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.queryservice#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.queryservice#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.queryservice#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.queryservice#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.queryservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    output.body,
    context
  );
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    output.body,
    context
  );
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Filters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1QueryForecastRequest = (
  input: QueryForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndDate !== undefined) {
    bodyParams["EndDate"] = input.EndDate;
  }
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartDate !== undefined) {
    bodyParams["StartDate"] = input.StartDate;
  }
  return bodyParams;
};

const deserializeAws_json1_1DataPoint = (
  output: any,
  context: __SerdeContext
): DataPoint => {
  let contents: any = {
    __type: "DataPoint",
    Timestamp: undefined,
    Value: undefined
  };
  if (output.Timestamp !== undefined) {
    contents.Timestamp = output.Timestamp;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Forecast = (
  output: any,
  context: __SerdeContext
): Forecast => {
  let contents: any = {
    __type: "Forecast",
    Predictions: undefined
  };
  if (output.Predictions !== undefined) {
    contents.Predictions = deserializeAws_json1_1Predictions(
      output.Predictions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Predictions = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<DataPoint> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1TimeSeries(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1QueryForecastResponse = (
  output: any,
  context: __SerdeContext
): QueryForecastResponse => {
  let contents: any = {
    __type: "QueryForecastResponse",
    Forecast: undefined
  };
  if (output.Forecast !== undefined) {
    contents.Forecast = deserializeAws_json1_1Forecast(
      output.Forecast,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TimeSeries = (
  output: any,
  context: __SerdeContext
): Array<DataPoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataPoint(entry, context)
  );
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
