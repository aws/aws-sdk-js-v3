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

/**
 * serializeAws_json1_0DescribeStreamCommand
 */
export const se_DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStream");
  let body: any;
  body = JSON.stringify(se_DescribeStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecordsCommand
 */
export const se_GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecords");
  let body: any;
  body = JSON.stringify(se_GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetShardIteratorCommand
 */
export const se_GetShardIteratorCommand = async (
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetShardIterator");
  let body: any;
  body = JSON.stringify(se_GetShardIteratorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListStreamsCommand
 */
export const se_ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStreams");
  let body: any;
  body = JSON.stringify(se_ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0DescribeStreamCommand
 */
export const de_DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeStreamCommandError
 */
const de_DescribeStreamCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetRecordsCommand
 */
export const de_GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetRecordsCommandError
 */
const de_GetRecordsCommandError = async (
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
      throw await de_ExpiredIteratorExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.dynamodbstreams#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.dynamodbstreams#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      throw await de_TrimmedDataAccessExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetShardIteratorCommand
 */
export const de_GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetShardIteratorCommandError
 */
const de_GetShardIteratorCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TrimmedDataAccessException":
    case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
      throw await de_TrimmedDataAccessExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListStreamsCommandError
 */
const de_ListStreamsCommandError = async (
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
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ExpiredIteratorExceptionRes
 */
const de_ExpiredIteratorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExpiredIteratorException(body, context);
  const exception = new ExpiredIteratorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TrimmedDataAccessExceptionRes
 */
const de_TrimmedDataAccessExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrimmedDataAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrimmedDataAccessException(body, context);
  const exception = new TrimmedDataAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0DescribeStreamInput
 */
const se_DescribeStreamInput = (input: DescribeStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_json1_0GetRecordsInput
 */
const se_GetRecordsInput = (input: GetRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ShardIterator != null && { ShardIterator: input.ShardIterator }),
  };
};

/**
 * serializeAws_json1_0GetShardIteratorInput
 */
const se_GetShardIteratorInput = (input: GetShardIteratorInput, context: __SerdeContext): any => {
  return {
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.ShardIteratorType != null && { ShardIteratorType: input.ShardIteratorType }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
  };
};

/**
 * serializeAws_json1_0ListStreamsInput
 */
const se_ListStreamsInput = (input: ListStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartStreamArn != null && { ExclusiveStartStreamArn: input.ExclusiveStartStreamArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * deserializeAws_json1_0AttributeMap
 */
const de_AttributeMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
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
      BS: de_BinarySetAttributeValue(output.BS, context),
    };
  }
  if (output.L != null) {
    return {
      L: de_ListAttributeValue(output.L, context),
    };
  }
  if (output.M != null) {
    return {
      M: de_MapAttributeValue(output.M, context),
    };
  }
  if (__expectString(output.N) !== undefined) {
    return { N: __expectString(output.N) as any };
  }
  if (output.NS != null) {
    return {
      NS: de_NumberSetAttributeValue(output.NS, context),
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
      SS: de_StringSetAttributeValue(output.SS, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0BinarySetAttributeValue
 */
const de_BinarySetAttributeValue = (output: any, context: __SerdeContext): Uint8Array[] => {
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

/**
 * deserializeAws_json1_0DescribeStreamOutput
 */
const de_DescribeStreamOutput = (output: any, context: __SerdeContext): DescribeStreamOutput => {
  return {
    StreamDescription:
      output.StreamDescription != null ? de_StreamDescription(output.StreamDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExpiredIteratorException
 */
const de_ExpiredIteratorException = (output: any, context: __SerdeContext): ExpiredIteratorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0GetRecordsOutput
 */
const de_GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return {
    NextShardIterator: __expectString(output.NextShardIterator),
    Records: output.Records != null ? de_RecordList(output.Records, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetShardIteratorOutput
 */
const de_GetShardIteratorOutput = (output: any, context: __SerdeContext): GetShardIteratorOutput => {
  return {
    ShardIterator: __expectString(output.ShardIterator),
  } as any;
};

/**
 * deserializeAws_json1_0Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    PrincipalId: __expectString(output.PrincipalId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0KeySchema
 */
const de_KeySchema = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeySchemaElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeySchemaElement
 */
const de_KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ListAttributeValue
 */
const de_ListAttributeValue = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListStreamsOutput
 */
const de_ListStreamsOutput = (output: any, context: __SerdeContext): ListStreamsOutput => {
  return {
    LastEvaluatedStreamArn: __expectString(output.LastEvaluatedStreamArn),
    Streams: output.Streams != null ? de_StreamList(output.Streams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MapAttributeValue
 */
const de_MapAttributeValue = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0NumberSetAttributeValue
 */
const de_NumberSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return {
    awsRegion: __expectString(output.awsRegion),
    dynamodb: output.dynamodb != null ? de_StreamRecord(output.dynamodb, context) : undefined,
    eventID: __expectString(output.eventID),
    eventName: __expectString(output.eventName),
    eventSource: __expectString(output.eventSource),
    eventVersion: __expectString(output.eventVersion),
    userIdentity: output.userIdentity != null ? de_Identity(output.userIdentity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RecordList
 */
const de_RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0SequenceNumberRange
 */
const de_SequenceNumberRange = (output: any, context: __SerdeContext): SequenceNumberRange => {
  return {
    EndingSequenceNumber: __expectString(output.EndingSequenceNumber),
    StartingSequenceNumber: __expectString(output.StartingSequenceNumber),
  } as any;
};

/**
 * deserializeAws_json1_0Shard
 */
const de_Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    ParentShardId: __expectString(output.ParentShardId),
    SequenceNumberRange:
      output.SequenceNumberRange != null ? de_SequenceNumberRange(output.SequenceNumberRange, context) : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

/**
 * deserializeAws_json1_0ShardDescriptionList
 */
const de_ShardDescriptionList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Shard(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0_Stream
 */
const de__Stream = (output: any, context: __SerdeContext): _Stream => {
  return {
    StreamArn: __expectString(output.StreamArn),
    StreamLabel: __expectString(output.StreamLabel),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0StreamDescription
 */
const de_StreamDescription = (output: any, context: __SerdeContext): StreamDescription => {
  return {
    CreationRequestDateTime:
      output.CreationRequestDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationRequestDateTime)))
        : undefined,
    KeySchema: output.KeySchema != null ? de_KeySchema(output.KeySchema, context) : undefined,
    LastEvaluatedShardId: __expectString(output.LastEvaluatedShardId),
    Shards: output.Shards != null ? de_ShardDescriptionList(output.Shards, context) : undefined,
    StreamArn: __expectString(output.StreamArn),
    StreamLabel: __expectString(output.StreamLabel),
    StreamStatus: __expectString(output.StreamStatus),
    StreamViewType: __expectString(output.StreamViewType),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0StreamList
 */
const de_StreamList = (output: any, context: __SerdeContext): _Stream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de__Stream(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StreamRecord
 */
const de_StreamRecord = (output: any, context: __SerdeContext): StreamRecord => {
  return {
    ApproximateCreationDateTime:
      output.ApproximateCreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApproximateCreationDateTime)))
        : undefined,
    Keys: output.Keys != null ? de_AttributeMap(output.Keys, context) : undefined,
    NewImage: output.NewImage != null ? de_AttributeMap(output.NewImage, context) : undefined,
    OldImage: output.OldImage != null ? de_AttributeMap(output.OldImage, context) : undefined,
    SequenceNumber: __expectString(output.SequenceNumber),
    SizeBytes: __expectLong(output.SizeBytes),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

/**
 * deserializeAws_json1_0StringSetAttributeValue
 */
const de_StringSetAttributeValue = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0TrimmedDataAccessException
 */
const de_TrimmedDataAccessException = (output: any, context: __SerdeContext): TrimmedDataAccessException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `DynamoDBStreams_20120810.${operation}`,
  };
}

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
