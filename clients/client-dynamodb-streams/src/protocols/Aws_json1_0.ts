// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "../commands/DescribeStreamCommand";
import { GetRecordsCommandInput, GetRecordsCommandOutput } from "../commands/GetRecordsCommand";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "../commands/GetShardIteratorCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { DynamoDBStreamsServiceException as __BaseException } from "../models/DynamoDBStreamsServiceException";
import {
  _Record,
  _Stream,
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
} from "../models/models_0";

export const serializeAws_json1_0DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDBStreams_20120810.DescribeStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDBStreams_20120810.GetRecords",
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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDBStreams_20120810.GetShardIterator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetShardIteratorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "DynamoDBStreams_20120810.ListStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredIteratorException":
    case "com.amazonaws.dynamodbstreams#ExpiredIteratorException":
      throw await deserializeAws_json1_0ExpiredIteratorExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodbstreams#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      throw await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetShardIteratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      throw await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      throw await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_0ExpiredIteratorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExpiredIteratorException(body, context);
  const exception = new ExpiredIteratorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TrimmedDataAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrimmedDataAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TrimmedDataAccessException(body, context);
  const exception = new TrimmedDataAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0DescribeStreamInput = (input: DescribeStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

const serializeAws_json1_0GetRecordsInput = (input: GetRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ShardIterator != null && { ShardIterator: input.ShardIterator }),
  };
};

const serializeAws_json1_0GetShardIteratorInput = (input: GetShardIteratorInput, context: __SerdeContext): any => {
  return {
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.ShardIteratorType != null && { ShardIteratorType: input.ShardIteratorType }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

const serializeAws_json1_0ListStreamsInput = (input: ListStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartStreamArn != null && { ExclusiveStartStreamArn: input.ExclusiveStartStreamArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const deserializeAws_json1_0AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  if (output.B != null) {
    return {
      B: context.base64Decoder(output.B),
    };
  }
  if (__expectBoolean(output.BOOL) !== undefined) {
    return { BOOL: __expectBoolean(output.BOOL) as any };
  }
  if (output.BS != null) {
    return {
      BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
    };
  }
  if (output.L != null) {
    return {
      L: deserializeAws_json1_0ListAttributeValue(output.L, context),
    };
  }
  if (output.M != null) {
    return {
      M: deserializeAws_json1_0MapAttributeValue(output.M, context),
    };
  }
  if (__expectString(output.N) !== undefined) {
    return { N: __expectString(output.N) as any };
  }
  if (output.NS != null) {
    return {
      NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
    };
  }
  if (__expectBoolean(output.NULL) !== undefined) {
    return { NULL: __expectBoolean(output.NULL) as any };
  }
  if (__expectString(output.S) !== undefined) {
    return { S: __expectString(output.S) as any };
  }
  if (output.SS != null) {
    return {
      SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return context.base64Decoder(entry);
    });
  return retVal;
};

const deserializeAws_json1_0DescribeStreamOutput = (output: any, context: __SerdeContext): DescribeStreamOutput => {
  return {
    StreamDescription:
      output.StreamDescription != null
        ? deserializeAws_json1_0StreamDescription(output.StreamDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExpiredIteratorException = (
  output: any,
  context: __SerdeContext
): ExpiredIteratorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return {
    NextShardIterator: __expectString(output.NextShardIterator),
    Records: output.Records != null ? deserializeAws_json1_0RecordList(output.Records, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetShardIteratorOutput = (output: any, context: __SerdeContext): GetShardIteratorOutput => {
  return {
    ShardIterator: __expectString(output.ShardIterator),
  } as any;
};

const deserializeAws_json1_0Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    PrincipalId: __expectString(output.PrincipalId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_0InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0KeySchema = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_json1_0ListStreamsOutput = (output: any, context: __SerdeContext): ListStreamsOutput => {
  return {
    LastEvaluatedStreamArn: __expectString(output.LastEvaluatedStreamArn),
    Streams: output.Streams != null ? deserializeAws_json1_0StreamList(output.Streams, context) : undefined,
  } as any;
};

const deserializeAws_json1_0MapAttributeValue = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_0AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_json1_0NumberSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_0_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    awsRegion: __expectString(output.awsRegion),
    dynamodb: output.dynamodb != null ? deserializeAws_json1_0StreamRecord(output.dynamodb, context) : undefined,
    eventID: __expectString(output.eventID),
    eventName: __expectString(output.eventName),
    eventSource: __expectString(output.eventSource),
    eventVersion: __expectString(output.eventVersion),
    userIdentity:
      output.userIdentity != null ? deserializeAws_json1_0Identity(output.userIdentity, context) : undefined,
  } as any;
};

const deserializeAws_json1_0RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0_Record(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0SequenceNumberRange = (output: any, context: __SerdeContext): SequenceNumberRange => {
  return {
    EndingSequenceNumber: __expectString(output.EndingSequenceNumber),
    StartingSequenceNumber: __expectString(output.StartingSequenceNumber),
  } as any;
};

const deserializeAws_json1_0Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    ParentShardId: __expectString(output.ParentShardId),
    SequenceNumberRange:
      output.SequenceNumberRange != null
        ? deserializeAws_json1_0SequenceNumberRange(output.SequenceNumberRange, context)
        : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

const deserializeAws_json1_0ShardDescriptionList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Shard(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0_Stream = (output: any, context: __SerdeContext): _Stream => {
  return {
    StreamArn: __expectString(output.StreamArn),
    StreamLabel: __expectString(output.StreamLabel),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0StreamDescription = (output: any, context: __SerdeContext): StreamDescription => {
  return {
    CreationRequestDateTime:
      output.CreationRequestDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationRequestDateTime)))
        : undefined,
    KeySchema: output.KeySchema != null ? deserializeAws_json1_0KeySchema(output.KeySchema, context) : undefined,
    LastEvaluatedShardId: __expectString(output.LastEvaluatedShardId),
    Shards: output.Shards != null ? deserializeAws_json1_0ShardDescriptionList(output.Shards, context) : undefined,
    StreamArn: __expectString(output.StreamArn),
    StreamLabel: __expectString(output.StreamLabel),
    StreamStatus: __expectString(output.StreamStatus),
    StreamViewType: __expectString(output.StreamViewType),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0StreamList = (output: any, context: __SerdeContext): _Stream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0_Stream(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0StreamRecord = (output: any, context: __SerdeContext): StreamRecord => {
  return {
    ApproximateCreationDateTime:
      output.ApproximateCreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApproximateCreationDateTime)))
        : undefined,
    Keys: output.Keys != null ? deserializeAws_json1_0AttributeMap(output.Keys, context) : undefined,
    NewImage: output.NewImage != null ? deserializeAws_json1_0AttributeMap(output.NewImage, context) : undefined,
    OldImage: output.OldImage != null ? deserializeAws_json1_0AttributeMap(output.OldImage, context) : undefined,
    SequenceNumber: __expectString(output.SequenceNumber),
    SizeBytes: __expectLong(output.SizeBytes),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

const deserializeAws_json1_0StringSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_0TrimmedDataAccessException = (
  output: any,
  context: __SerdeContext
): TrimmedDataAccessException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
