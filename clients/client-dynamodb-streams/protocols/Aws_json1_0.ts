import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput
} from "../commands/DescribeStreamCommand";
import {
  GetRecordsCommandInput,
  GetRecordsCommandOutput
} from "../commands/GetRecordsCommand";
import {
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput
} from "../commands/GetShardIteratorCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput
} from "../commands/ListStreamsCommand";
import {
  AttributeValue,
  DescribeStreamInput,
  DescribeStreamOutput,
  ExpiredIteratorException,
  GetRecordsInput,
  GetRecordsOutput,
  GetShardIteratorInput,
  GetShardIteratorOutput,
  Identity,
  InternalServerError,
  KeySchemaElement,
  LimitExceededException,
  ListStreamsInput,
  ListStreamsOutput,
  ResourceNotFoundException,
  SequenceNumberRange,
  Shard,
  StreamDescription,
  StreamRecord,
  TrimmedDataAccessException,
  _Record,
  _Stream
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_0DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDBStreams_20120810.DescribeStream"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDBStreams_20120810.GetRecords"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetShardIteratorCommand = async (
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDBStreams_20120810.GetShardIterator"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetShardIteratorInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDBStreams_20120810.ListStreams"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_0GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecordsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExpiredIteratorException":
    case "com.amazonaws.dynamodbstreams#ExpiredIteratorException":
      response = {
        ...(await deserializeAws_json1_0ExpiredIteratorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodbstreams#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      response = {
        ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(
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

export const deserializeAws_json1_0GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetShardIteratorOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetShardIteratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      response = {
        ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(
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

export const deserializeAws_json1_0ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_0ExpiredIteratorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExpiredIteratorException(
    body,
    context
  );
  const contents: ExpiredIteratorException = {
    name: "ExpiredIteratorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TrimmedDataAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrimmedDataAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TrimmedDataAccessException(
    body,
    context
  );
  const contents: TrimmedDataAccessException = {
    name: "TrimmedDataAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0DescribeStreamInput = (
  input: DescribeStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExclusiveStartShardId !== undefined && {
      ExclusiveStartShardId: input.ExclusiveStartShardId
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.StreamArn !== undefined && { StreamArn: input.StreamArn })
  };
};

const serializeAws_json1_0GetRecordsInput = (
  input: GetRecordsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.ShardIterator !== undefined && {
      ShardIterator: input.ShardIterator
    })
  };
};

const serializeAws_json1_0GetShardIteratorInput = (
  input: GetShardIteratorInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SequenceNumber !== undefined && {
      SequenceNumber: input.SequenceNumber
    }),
    ...(input.ShardId !== undefined && { ShardId: input.ShardId }),
    ...(input.ShardIteratorType !== undefined && {
      ShardIteratorType: input.ShardIteratorType
    }),
    ...(input.StreamArn !== undefined && { StreamArn: input.StreamArn })
  };
};

const serializeAws_json1_0ListStreamsInput = (
  input: ListStreamsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExclusiveStartStreamArn !== undefined && {
      ExclusiveStartStreamArn: input.ExclusiveStartStreamArn
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const deserializeAws_json1_0AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0AttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue => {
  return {
    __type: "AttributeValue",
    B:
      output.B !== undefined && output.B !== null
        ? context.base64Decoder(output.B)
        : undefined,
    BOOL:
      output.BOOL !== undefined && output.BOOL !== null
        ? output.BOOL
        : undefined,
    BS:
      output.BS !== undefined && output.BS !== null
        ? deserializeAws_json1_0BinarySetAttributeValue(output.BS, context)
        : undefined,
    L:
      output.L !== undefined && output.L !== null
        ? deserializeAws_json1_0ListAttributeValue(output.L, context)
        : undefined,
    M:
      output.M !== undefined && output.M !== null
        ? deserializeAws_json1_0MapAttributeValue(output.M, context)
        : undefined,
    N: output.N !== undefined && output.N !== null ? output.N : undefined,
    NS:
      output.NS !== undefined && output.NS !== null
        ? deserializeAws_json1_0NumberSetAttributeValue(output.NS, context)
        : undefined,
    NULL:
      output.NULL !== undefined && output.NULL !== null
        ? output.NULL
        : undefined,
    S: output.S !== undefined && output.S !== null ? output.S : undefined,
    SS:
      output.SS !== undefined && output.SS !== null
        ? deserializeAws_json1_0StringSetAttributeValue(output.SS, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0BinarySetAttributeValue = (
  output: any,
  context: __SerdeContext
): Uint8Array[] => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_json1_0DescribeStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamOutput => {
  return {
    __type: "DescribeStreamOutput",
    StreamDescription:
      output.StreamDescription !== undefined &&
      output.StreamDescription !== null
        ? deserializeAws_json1_0StreamDescription(
            output.StreamDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ExpiredIteratorException = (
  output: any,
  context: __SerdeContext
): ExpiredIteratorException => {
  return {
    __type: "ExpiredIteratorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0GetRecordsOutput = (
  output: any,
  context: __SerdeContext
): GetRecordsOutput => {
  return {
    __type: "GetRecordsOutput",
    NextShardIterator:
      output.NextShardIterator !== undefined &&
      output.NextShardIterator !== null
        ? output.NextShardIterator
        : undefined,
    Records:
      output.Records !== undefined && output.Records !== null
        ? deserializeAws_json1_0RecordList(output.Records, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0GetShardIteratorOutput = (
  output: any,
  context: __SerdeContext
): GetShardIteratorOutput => {
  return {
    __type: "GetShardIteratorOutput",
    ShardIterator:
      output.ShardIterator !== undefined && output.ShardIterator !== null
        ? output.ShardIterator
        : undefined
  } as any;
};

const deserializeAws_json1_0Identity = (
  output: any,
  context: __SerdeContext
): Identity => {
  return {
    __type: "Identity",
    PrincipalId:
      output.PrincipalId !== undefined && output.PrincipalId !== null
        ? output.PrincipalId
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_0InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  return {
    __type: "InternalServerError",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0KeySchema = (
  output: any,
  context: __SerdeContext
): KeySchemaElement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0KeySchemaElement(entry, context)
  );
};

const deserializeAws_json1_0KeySchemaElement = (
  output: any,
  context: __SerdeContext
): KeySchemaElement => {
  return {
    __type: "KeySchemaElement",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    KeyType:
      output.KeyType !== undefined && output.KeyType !== null
        ? output.KeyType
        : undefined
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ListAttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeValue(entry, context)
  );
};

const deserializeAws_json1_0ListStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListStreamsOutput => {
  return {
    __type: "ListStreamsOutput",
    LastEvaluatedStreamArn:
      output.LastEvaluatedStreamArn !== undefined &&
      output.LastEvaluatedStreamArn !== null
        ? output.LastEvaluatedStreamArn
        : undefined,
    Streams:
      output.Streams !== undefined && output.Streams !== null
        ? deserializeAws_json1_0StreamList(output.Streams, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0MapAttributeValue = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0NumberSetAttributeValue = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  return {
    __type: "Record",
    awsRegion:
      output.awsRegion !== undefined && output.awsRegion !== null
        ? output.awsRegion
        : undefined,
    dynamodb:
      output.dynamodb !== undefined && output.dynamodb !== null
        ? deserializeAws_json1_0StreamRecord(output.dynamodb, context)
        : undefined,
    eventID:
      output.eventID !== undefined && output.eventID !== null
        ? output.eventID
        : undefined,
    eventName:
      output.eventName !== undefined && output.eventName !== null
        ? output.eventName
        : undefined,
    eventSource:
      output.eventSource !== undefined && output.eventSource !== null
        ? output.eventSource
        : undefined,
    eventVersion:
      output.eventVersion !== undefined && output.eventVersion !== null
        ? output.eventVersion
        : undefined,
    userIdentity:
      output.userIdentity !== undefined && output.userIdentity !== null
        ? deserializeAws_json1_0Identity(output.userIdentity, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0RecordList = (
  output: any,
  context: __SerdeContext
): _Record[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0_Record(entry, context)
  );
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0SequenceNumberRange = (
  output: any,
  context: __SerdeContext
): SequenceNumberRange => {
  return {
    __type: "SequenceNumberRange",
    EndingSequenceNumber:
      output.EndingSequenceNumber !== undefined &&
      output.EndingSequenceNumber !== null
        ? output.EndingSequenceNumber
        : undefined,
    StartingSequenceNumber:
      output.StartingSequenceNumber !== undefined &&
      output.StartingSequenceNumber !== null
        ? output.StartingSequenceNumber
        : undefined
  } as any;
};

const deserializeAws_json1_0Shard = (
  output: any,
  context: __SerdeContext
): Shard => {
  return {
    __type: "Shard",
    ParentShardId:
      output.ParentShardId !== undefined && output.ParentShardId !== null
        ? output.ParentShardId
        : undefined,
    SequenceNumberRange:
      output.SequenceNumberRange !== undefined &&
      output.SequenceNumberRange !== null
        ? deserializeAws_json1_0SequenceNumberRange(
            output.SequenceNumberRange,
            context
          )
        : undefined,
    ShardId:
      output.ShardId !== undefined && output.ShardId !== null
        ? output.ShardId
        : undefined
  } as any;
};

const deserializeAws_json1_0ShardDescriptionList = (
  output: any,
  context: __SerdeContext
): Shard[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Shard(entry, context)
  );
};

const deserializeAws_json1_0_Stream = (
  output: any,
  context: __SerdeContext
): _Stream => {
  return {
    __type: "Stream",
    StreamArn:
      output.StreamArn !== undefined && output.StreamArn !== null
        ? output.StreamArn
        : undefined,
    StreamLabel:
      output.StreamLabel !== undefined && output.StreamLabel !== null
        ? output.StreamLabel
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0StreamDescription = (
  output: any,
  context: __SerdeContext
): StreamDescription => {
  return {
    __type: "StreamDescription",
    CreationRequestDateTime:
      output.CreationRequestDateTime !== undefined &&
      output.CreationRequestDateTime !== null
        ? new Date(Math.round(output.CreationRequestDateTime * 1000))
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    LastEvaluatedShardId:
      output.LastEvaluatedShardId !== undefined &&
      output.LastEvaluatedShardId !== null
        ? output.LastEvaluatedShardId
        : undefined,
    Shards:
      output.Shards !== undefined && output.Shards !== null
        ? deserializeAws_json1_0ShardDescriptionList(output.Shards, context)
        : undefined,
    StreamArn:
      output.StreamArn !== undefined && output.StreamArn !== null
        ? output.StreamArn
        : undefined,
    StreamLabel:
      output.StreamLabel !== undefined && output.StreamLabel !== null
        ? output.StreamLabel
        : undefined,
    StreamStatus:
      output.StreamStatus !== undefined && output.StreamStatus !== null
        ? output.StreamStatus
        : undefined,
    StreamViewType:
      output.StreamViewType !== undefined && output.StreamViewType !== null
        ? output.StreamViewType
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0StreamList = (
  output: any,
  context: __SerdeContext
): _Stream[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0_Stream(entry, context)
  );
};

const deserializeAws_json1_0StreamRecord = (
  output: any,
  context: __SerdeContext
): StreamRecord => {
  return {
    __type: "StreamRecord",
    ApproximateCreationDateTime:
      output.ApproximateCreationDateTime !== undefined &&
      output.ApproximateCreationDateTime !== null
        ? new Date(Math.round(output.ApproximateCreationDateTime * 1000))
        : undefined,
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_0AttributeMap(output.Keys, context)
        : undefined,
    NewImage:
      output.NewImage !== undefined && output.NewImage !== null
        ? deserializeAws_json1_0AttributeMap(output.NewImage, context)
        : undefined,
    OldImage:
      output.OldImage !== undefined && output.OldImage !== null
        ? deserializeAws_json1_0AttributeMap(output.OldImage, context)
        : undefined,
    SequenceNumber:
      output.SequenceNumber !== undefined && output.SequenceNumber !== null
        ? output.SequenceNumber
        : undefined,
    SizeBytes:
      output.SizeBytes !== undefined && output.SizeBytes !== null
        ? output.SizeBytes
        : undefined,
    StreamViewType:
      output.StreamViewType !== undefined && output.StreamViewType !== null
        ? output.StreamViewType
        : undefined
  } as any;
};

const deserializeAws_json1_0StringSetAttributeValue = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TrimmedDataAccessException = (
  output: any,
  context: __SerdeContext
): TrimmedDataAccessException => {
  return {
    __type: "TrimmedDataAccessException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
