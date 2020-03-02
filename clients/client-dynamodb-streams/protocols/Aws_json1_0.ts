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

export async function serializeAws_json1_0DescribeStreamCommand(
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDBStreams_20120810.DescribeStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0GetRecordsCommand(
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDBStreams_20120810.GetRecords";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0GetShardIteratorCommand(
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDBStreams_20120810.GetShardIterator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetShardIteratorInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0ListStreamsCommand(
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDBStreams_20120810.ListStreams";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_0DescribeStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_0GetRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> {
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
}

async function deserializeAws_json1_0GetRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExpiredIteratorException":
    case "com.amazonaws.dynamodb.streams.v20120810#ExpiredIteratorException":
      response = {
        ...(await deserializeAws_json1_0ExpiredIteratorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodb.streams.v20120810#TrimmedDataAccessException":
      response = {
        ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_0GetShardIteratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> {
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
}

async function deserializeAws_json1_0GetShardIteratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodb.streams.v20120810#TrimmedDataAccessException":
      response = {
        ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_0ListStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
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
}

async function deserializeAws_json1_0ListStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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

const serializeAws_json1_0DescribeStreamInput = (
  input: DescribeStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartShardId !== undefined) {
    bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.StreamArn !== undefined) {
    bodyParams["StreamArn"] = input.StreamArn;
  }
  return bodyParams;
};

const serializeAws_json1_0GetRecordsInput = (
  input: GetRecordsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.ShardIterator !== undefined) {
    bodyParams["ShardIterator"] = input.ShardIterator;
  }
  return bodyParams;
};

const serializeAws_json1_0GetShardIteratorInput = (
  input: GetShardIteratorInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SequenceNumber !== undefined) {
    bodyParams["SequenceNumber"] = input.SequenceNumber;
  }
  if (input.ShardId !== undefined) {
    bodyParams["ShardId"] = input.ShardId;
  }
  if (input.ShardIteratorType !== undefined) {
    bodyParams["ShardIteratorType"] = input.ShardIteratorType;
  }
  if (input.StreamArn !== undefined) {
    bodyParams["StreamArn"] = input.StreamArn;
  }
  return bodyParams;
};

const serializeAws_json1_0ListStreamsInput = (
  input: ListStreamsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartStreamArn !== undefined) {
    bodyParams["ExclusiveStartStreamArn"] = input.ExclusiveStartStreamArn;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const deserializeAws_json1_0DescribeStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamOutput => {
  let contents: any = {
    __type: "DescribeStreamOutput",
    StreamDescription: undefined
  };
  if (
    output.StreamDescription !== undefined &&
    output.StreamDescription !== null
  ) {
    contents.StreamDescription = deserializeAws_json1_0StreamDescription(
      output.StreamDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ExpiredIteratorException = (
  output: any,
  context: __SerdeContext
): ExpiredIteratorException => {
  let contents: any = {
    __type: "ExpiredIteratorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0GetRecordsOutput = (
  output: any,
  context: __SerdeContext
): GetRecordsOutput => {
  let contents: any = {
    __type: "GetRecordsOutput",
    NextShardIterator: undefined,
    Records: undefined
  };
  if (
    output.NextShardIterator !== undefined &&
    output.NextShardIterator !== null
  ) {
    contents.NextShardIterator = output.NextShardIterator;
  }
  if (output.Records !== undefined && output.Records !== null) {
    contents.Records = deserializeAws_json1_0RecordList(
      output.Records,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GetShardIteratorOutput = (
  output: any,
  context: __SerdeContext
): GetShardIteratorOutput => {
  let contents: any = {
    __type: "GetShardIteratorOutput",
    ShardIterator: undefined
  };
  if (output.ShardIterator !== undefined && output.ShardIterator !== null) {
    contents.ShardIterator = output.ShardIterator;
  }
  return contents;
};

const deserializeAws_json1_0Identity = (
  output: any,
  context: __SerdeContext
): Identity => {
  let contents: any = {
    __type: "Identity",
    PrincipalId: undefined,
    Type: undefined
  };
  if (output.PrincipalId !== undefined && output.PrincipalId !== null) {
    contents.PrincipalId = output.PrincipalId;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_0ListStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListStreamsOutput => {
  let contents: any = {
    __type: "ListStreamsOutput",
    LastEvaluatedStreamArn: undefined,
    Streams: undefined
  };
  if (
    output.LastEvaluatedStreamArn !== undefined &&
    output.LastEvaluatedStreamArn !== null
  ) {
    contents.LastEvaluatedStreamArn = output.LastEvaluatedStreamArn;
  }
  if (output.Streams !== undefined && output.Streams !== null) {
    contents.Streams = deserializeAws_json1_0StreamList(
      output.Streams,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  let contents: any = {
    __type: "Record",
    awsRegion: undefined,
    dynamodb: undefined,
    eventID: undefined,
    eventName: undefined,
    eventSource: undefined,
    eventVersion: undefined,
    userIdentity: undefined
  };
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (output.dynamodb !== undefined && output.dynamodb !== null) {
    contents.dynamodb = deserializeAws_json1_0StreamRecord(
      output.dynamodb,
      context
    );
  }
  if (output.eventID !== undefined && output.eventID !== null) {
    contents.eventID = output.eventID;
  }
  if (output.eventName !== undefined && output.eventName !== null) {
    contents.eventName = output.eventName;
  }
  if (output.eventSource !== undefined && output.eventSource !== null) {
    contents.eventSource = output.eventSource;
  }
  if (output.eventVersion !== undefined && output.eventVersion !== null) {
    contents.eventVersion = output.eventVersion;
  }
  if (output.userIdentity !== undefined && output.userIdentity !== null) {
    contents.userIdentity = deserializeAws_json1_0Identity(
      output.userIdentity,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0RecordList = (
  output: any,
  context: __SerdeContext
): Array<_Record> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0_Record(entry, context)
  );
};

const deserializeAws_json1_0SequenceNumberRange = (
  output: any,
  context: __SerdeContext
): SequenceNumberRange => {
  let contents: any = {
    __type: "SequenceNumberRange",
    EndingSequenceNumber: undefined,
    StartingSequenceNumber: undefined
  };
  if (
    output.EndingSequenceNumber !== undefined &&
    output.EndingSequenceNumber !== null
  ) {
    contents.EndingSequenceNumber = output.EndingSequenceNumber;
  }
  if (
    output.StartingSequenceNumber !== undefined &&
    output.StartingSequenceNumber !== null
  ) {
    contents.StartingSequenceNumber = output.StartingSequenceNumber;
  }
  return contents;
};

const deserializeAws_json1_0Shard = (
  output: any,
  context: __SerdeContext
): Shard => {
  let contents: any = {
    __type: "Shard",
    ParentShardId: undefined,
    SequenceNumberRange: undefined,
    ShardId: undefined
  };
  if (output.ParentShardId !== undefined && output.ParentShardId !== null) {
    contents.ParentShardId = output.ParentShardId;
  }
  if (
    output.SequenceNumberRange !== undefined &&
    output.SequenceNumberRange !== null
  ) {
    contents.SequenceNumberRange = deserializeAws_json1_0SequenceNumberRange(
      output.SequenceNumberRange,
      context
    );
  }
  if (output.ShardId !== undefined && output.ShardId !== null) {
    contents.ShardId = output.ShardId;
  }
  return contents;
};

const deserializeAws_json1_0ShardDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<Shard> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Shard(entry, context)
  );
};

const deserializeAws_json1_0_Stream = (
  output: any,
  context: __SerdeContext
): _Stream => {
  let contents: any = {
    __type: "Stream",
    StreamArn: undefined,
    StreamLabel: undefined,
    TableName: undefined
  };
  if (output.StreamArn !== undefined && output.StreamArn !== null) {
    contents.StreamArn = output.StreamArn;
  }
  if (output.StreamLabel !== undefined && output.StreamLabel !== null) {
    contents.StreamLabel = output.StreamLabel;
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0StreamDescription = (
  output: any,
  context: __SerdeContext
): StreamDescription => {
  let contents: any = {
    __type: "StreamDescription",
    CreationRequestDateTime: undefined,
    KeySchema: undefined,
    LastEvaluatedShardId: undefined,
    Shards: undefined,
    StreamArn: undefined,
    StreamLabel: undefined,
    StreamStatus: undefined,
    StreamViewType: undefined,
    TableName: undefined
  };
  if (
    output.CreationRequestDateTime !== undefined &&
    output.CreationRequestDateTime !== null
  ) {
    contents.CreationRequestDateTime = new Date(
      Math.round(output.CreationRequestDateTime * 1000)
    );
  }
  if (output.KeySchema !== undefined && output.KeySchema !== null) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (
    output.LastEvaluatedShardId !== undefined &&
    output.LastEvaluatedShardId !== null
  ) {
    contents.LastEvaluatedShardId = output.LastEvaluatedShardId;
  }
  if (output.Shards !== undefined && output.Shards !== null) {
    contents.Shards = deserializeAws_json1_0ShardDescriptionList(
      output.Shards,
      context
    );
  }
  if (output.StreamArn !== undefined && output.StreamArn !== null) {
    contents.StreamArn = output.StreamArn;
  }
  if (output.StreamLabel !== undefined && output.StreamLabel !== null) {
    contents.StreamLabel = output.StreamLabel;
  }
  if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
    contents.StreamStatus = output.StreamStatus;
  }
  if (output.StreamViewType !== undefined && output.StreamViewType !== null) {
    contents.StreamViewType = output.StreamViewType;
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0StreamList = (
  output: any,
  context: __SerdeContext
): Array<_Stream> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0_Stream(entry, context)
  );
};

const deserializeAws_json1_0StreamRecord = (
  output: any,
  context: __SerdeContext
): StreamRecord => {
  let contents: any = {
    __type: "StreamRecord",
    ApproximateCreationDateTime: undefined,
    Keys: undefined,
    NewImage: undefined,
    OldImage: undefined,
    SequenceNumber: undefined,
    SizeBytes: undefined,
    StreamViewType: undefined
  };
  if (
    output.ApproximateCreationDateTime !== undefined &&
    output.ApproximateCreationDateTime !== null
  ) {
    contents.ApproximateCreationDateTime = new Date(
      Math.round(output.ApproximateCreationDateTime * 1000)
    );
  }
  if (output.Keys !== undefined && output.Keys !== null) {
    contents.Keys = deserializeAws_json1_0AttributeMap(output.Keys, context);
  }
  if (output.NewImage !== undefined && output.NewImage !== null) {
    contents.NewImage = deserializeAws_json1_0AttributeMap(
      output.NewImage,
      context
    );
  }
  if (output.OldImage !== undefined && output.OldImage !== null) {
    contents.OldImage = deserializeAws_json1_0AttributeMap(
      output.OldImage,
      context
    );
  }
  if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
    contents.SequenceNumber = output.SequenceNumber;
  }
  if (output.SizeBytes !== undefined && output.SizeBytes !== null) {
    contents.SizeBytes = output.SizeBytes;
  }
  if (output.StreamViewType !== undefined && output.StreamViewType !== null) {
    contents.StreamViewType = output.StreamViewType;
  }
  return contents;
};

const deserializeAws_json1_0TrimmedDataAccessException = (
  output: any,
  context: __SerdeContext
): TrimmedDataAccessException => {
  let contents: any = {
    __type: "TrimmedDataAccessException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0AttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue => {
  let contents: any = {
    __type: "AttributeValue",
    B: undefined,
    BOOL: undefined,
    BS: undefined,
    L: undefined,
    M: undefined,
    N: undefined,
    NS: undefined,
    NULL: undefined,
    S: undefined,
    SS: undefined
  };
  if (output.B !== undefined && output.B !== null) {
    contents.B = context.base64Decoder(output.B);
  }
  if (output.BOOL !== undefined && output.BOOL !== null) {
    contents.BOOL = output.BOOL;
  }
  if (output.BS !== undefined && output.BS !== null) {
    contents.BS = deserializeAws_json1_0BinarySetAttributeValue(
      output.BS,
      context
    );
  }
  if (output.L !== undefined && output.L !== null) {
    contents.L = deserializeAws_json1_0ListAttributeValue(output.L, context);
  }
  if (output.M !== undefined && output.M !== null) {
    contents.M = deserializeAws_json1_0MapAttributeValue(output.M, context);
  }
  if (output.N !== undefined && output.N !== null) {
    contents.N = output.N;
  }
  if (output.NS !== undefined && output.NS !== null) {
    contents.NS = deserializeAws_json1_0NumberSetAttributeValue(
      output.NS,
      context
    );
  }
  if (output.NULL !== undefined && output.NULL !== null) {
    contents.NULL = output.NULL;
  }
  if (output.S !== undefined && output.S !== null) {
    contents.S = output.S;
  }
  if (output.SS !== undefined && output.SS !== null) {
    contents.SS = deserializeAws_json1_0StringSetAttributeValue(
      output.SS,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0BinarySetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<Uint8Array> => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_json1_0InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0KeySchema = (
  output: any,
  context: __SerdeContext
): Array<KeySchemaElement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0KeySchemaElement(entry, context)
  );
};

const deserializeAws_json1_0KeySchemaElement = (
  output: any,
  context: __SerdeContext
): KeySchemaElement => {
  let contents: any = {
    __type: "KeySchemaElement",
    AttributeName: undefined,
    KeyType: undefined
  };
  if (output.AttributeName !== undefined && output.AttributeName !== null) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.KeyType !== undefined && output.KeyType !== null) {
    contents.KeyType = output.KeyType;
  }
  return contents;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ListAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<AttributeValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeValue(entry, context)
  );
};

const deserializeAws_json1_0MapAttributeValue = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0NumberSetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StringSetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
