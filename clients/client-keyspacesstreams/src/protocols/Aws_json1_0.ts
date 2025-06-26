// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetRecordsCommandInput, GetRecordsCommandOutput } from "../commands/GetRecordsCommand";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "../commands/GetShardIteratorCommand";
import { GetStreamCommandInput, GetStreamCommandOutput } from "../commands/GetStreamCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KeyspacesStreamsServiceException as __BaseException } from "../models/KeyspacesStreamsServiceException";
import {
  _Record,
  AccessDeniedException,
  GetRecordsInput,
  GetRecordsOutput,
  GetShardIteratorInput,
  GetStreamInput,
  GetStreamOutput,
  InternalServerException,
  KeyspacesCell,
  KeyspacesCellMapDefinition,
  KeyspacesCellValue,
  KeyspacesRow,
  ListStreamsInput,
  ResourceNotFoundException,
  ShardFilter,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0GetRecordsCommand
 */
export const se_GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecords");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetStreamCommand
 */
export const se_GetStreamCommand = async (
  input: GetStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStream");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0GetRecordsCommand
 */
export const de_GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetShardIteratorCommand
 */
export const de_GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetStreamCommand
 */
export const de_GetStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStreamOutput(data, context);
  const response: GetStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspacesstreams#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspacesstreams#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspacesstreams#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.keyspacesstreams#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspacesstreams#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
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
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_GetRecordsInput omitted.

// se_GetShardIteratorInput omitted.

// se_GetStreamInput omitted.

// se_ListStreamsInput omitted.

// se_ShardFilter omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0GetRecordsOutput
 */
const de_GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return take(output, {
    changeRecords: (_: any) => de_RecordList(_, context),
    nextShardIterator: __expectString,
  }) as any;
};

// de_GetShardIteratorOutput omitted.

/**
 * deserializeAws_json1_0GetStreamOutput
 */
const de_GetStreamOutput = (output: any, context: __SerdeContext): GetStreamOutput => {
  return take(output, {
    creationRequestDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    keyspaceName: __expectString,
    nextToken: __expectString,
    shards: _json,
    streamArn: __expectString,
    streamLabel: __expectString,
    streamStatus: __expectString,
    streamViewType: __expectString,
    tableName: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0KeyspacesCell
 */
const de_KeyspacesCell = (output: any, context: __SerdeContext): KeyspacesCell => {
  return take(output, {
    metadata: _json,
    value: (_: any) => de_KeyspacesCellValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_json1_0KeyspacesCellList
 */
const de_KeyspacesCellList = (output: any, context: __SerdeContext): KeyspacesCell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyspacesCell(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeyspacesCellMap
 */
const de_KeyspacesCellMap = (output: any, context: __SerdeContext): KeyspacesCellMapDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KeyspacesCellMapDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KeyspacesCellMapDefinition
 */
const de_KeyspacesCellMapDefinition = (output: any, context: __SerdeContext): KeyspacesCellMapDefinition => {
  return take(output, {
    key: (_: any) => de_KeyspacesCellValue(__expectUnion(_), context),
    metadata: _json,
    value: (_: any) => de_KeyspacesCellValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_json1_0KeyspacesCells
 */
const de_KeyspacesCells = (output: any, context: __SerdeContext): Record<string, KeyspacesCell> => {
  return Object.entries(output).reduce((acc: Record<string, KeyspacesCell>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_KeyspacesCell(value, context);
    return acc;
  }, {} as Record<string, KeyspacesCell>);
};

/**
 * deserializeAws_json1_0KeyspacesCellValue
 */
const de_KeyspacesCellValue = (output: any, context: __SerdeContext): KeyspacesCellValue => {
  if (__expectString(output.asciiT) !== undefined) {
    return { asciiT: __expectString(output.asciiT) as any };
  }
  if (__expectString(output.bigintT) !== undefined) {
    return { bigintT: __expectString(output.bigintT) as any };
  }
  if (output.blobT != null) {
    return {
      blobT: context.base64Decoder(output.blobT),
    };
  }
  if (__expectBoolean(output.boolT) !== undefined) {
    return { boolT: __expectBoolean(output.boolT) as any };
  }
  if (__expectString(output.counterT) !== undefined) {
    return { counterT: __expectString(output.counterT) as any };
  }
  if (__expectString(output.dateT) !== undefined) {
    return { dateT: __expectString(output.dateT) as any };
  }
  if (__expectString(output.decimalT) !== undefined) {
    return { decimalT: __expectString(output.decimalT) as any };
  }
  if (__expectString(output.doubleT) !== undefined) {
    return { doubleT: __expectString(output.doubleT) as any };
  }
  if (__expectString(output.floatT) !== undefined) {
    return { floatT: __expectString(output.floatT) as any };
  }
  if (__expectString(output.inetT) !== undefined) {
    return { inetT: __expectString(output.inetT) as any };
  }
  if (__expectString(output.intT) !== undefined) {
    return { intT: __expectString(output.intT) as any };
  }
  if (output.listT != null) {
    return {
      listT: de_KeyspacesCellList(output.listT, context),
    };
  }
  if (output.mapT != null) {
    return {
      mapT: de_KeyspacesCellMap(output.mapT, context),
    };
  }
  if (output.setT != null) {
    return {
      setT: de_KeyspacesCellList(output.setT, context),
    };
  }
  if (__expectString(output.smallintT) !== undefined) {
    return { smallintT: __expectString(output.smallintT) as any };
  }
  if (__expectString(output.textT) !== undefined) {
    return { textT: __expectString(output.textT) as any };
  }
  if (__expectString(output.timeT) !== undefined) {
    return { timeT: __expectString(output.timeT) as any };
  }
  if (__expectString(output.timestampT) !== undefined) {
    return { timestampT: __expectString(output.timestampT) as any };
  }
  if (__expectString(output.timeuuidT) !== undefined) {
    return { timeuuidT: __expectString(output.timeuuidT) as any };
  }
  if (__expectString(output.tinyintT) !== undefined) {
    return { tinyintT: __expectString(output.tinyintT) as any };
  }
  if (output.tupleT != null) {
    return {
      tupleT: de_KeyspacesCellList(output.tupleT, context),
    };
  }
  if (output.udtT != null) {
    return {
      udtT: de_KeyspacesUdtMap(output.udtT, context),
    };
  }
  if (__expectString(output.uuidT) !== undefined) {
    return { uuidT: __expectString(output.uuidT) as any };
  }
  if (__expectString(output.varcharT) !== undefined) {
    return { varcharT: __expectString(output.varcharT) as any };
  }
  if (__expectString(output.varintT) !== undefined) {
    return { varintT: __expectString(output.varintT) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0KeyspacesKeysMap
 */
const de_KeyspacesKeysMap = (output: any, context: __SerdeContext): Record<string, KeyspacesCellValue> => {
  return Object.entries(output).reduce((acc: Record<string, KeyspacesCellValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_KeyspacesCellValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, KeyspacesCellValue>);
};

// de_KeyspacesMetadata omitted.

/**
 * deserializeAws_json1_0KeyspacesRow
 */
const de_KeyspacesRow = (output: any, context: __SerdeContext): KeyspacesRow => {
  return take(output, {
    rowMetadata: _json,
    staticCells: (_: any) => de_KeyspacesCells(_, context),
    valueCells: (_: any) => de_KeyspacesCells(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0KeyspacesUdtMap
 */
const de_KeyspacesUdtMap = (output: any, context: __SerdeContext): Record<string, KeyspacesCell> => {
  return Object.entries(output).reduce((acc: Record<string, KeyspacesCell>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_KeyspacesCell(value, context);
    return acc;
  }, {} as Record<string, KeyspacesCell>);
};

// de_ListStreamsOutput omitted.

/**
 * deserializeAws_json1_0_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return take(output, {
    clusteringKeys: (_: any) => de_KeyspacesKeysMap(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventVersion: __expectString,
    newImage: (_: any) => de_KeyspacesRow(_, context),
    oldImage: (_: any) => de_KeyspacesRow(_, context),
    origin: __expectString,
    partitionKeys: (_: any) => de_KeyspacesKeysMap(_, context),
    sequenceNumber: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RecordList
 */
const de_RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Record(entry, context);
    });
  return retVal;
};

// de_ResourceNotFoundException omitted.

// de_SequenceNumberRange omitted.

// de_Shard omitted.

// de_ShardDescriptionList omitted.

// de_ShardIdList omitted.

// de__Stream omitted.

// de_StreamList omitted.

// de_ThrottlingException omitted.

// de_ValidationException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
    "x-amz-target": `KeyspacesStreams.${operation}`,
  };
}
