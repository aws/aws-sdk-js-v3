// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensServiceException as __BaseException } from "../models/ConnectContactLensServiceException";
import {
  AccessDeniedException,
  Categories,
  CategoryDetails,
  CharacterOffsets,
  InternalServiceException,
  InvalidRequestException,
  IssueDetected,
  PointOfInterest,
  RealtimeContactAnalysisSegment,
  ResourceNotFoundException,
  ThrottlingException,
  Transcript,
} from "../models/models_0";

/**
 * serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand
 */
export const se_ListRealtimeContactAnalysisSegmentsCommand = async (
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/realtime-contact-analysis/analysis-segments";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand
 */
export const de_ListRealtimeContactAnalysisSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRealtimeContactAnalysisSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Segments != null) {
    contents.Segments = de_RealtimeContactAnalysisSegments(data.Segments, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommandError
 */
const de_ListRealtimeContactAnalysisSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcontactlens#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.connectcontactlens#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.connectcontactlens#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcontactlens#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcontactlens#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1Categories
 */
const de_Categories = (output: any, context: __SerdeContext): Categories => {
  return {
    MatchedCategories:
      output.MatchedCategories != null ? de_MatchedCategories(output.MatchedCategories, context) : undefined,
    MatchedDetails: output.MatchedDetails != null ? de_MatchedDetails(output.MatchedDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CategoryDetails
 */
const de_CategoryDetails = (output: any, context: __SerdeContext): CategoryDetails => {
  return {
    PointsOfInterest:
      output.PointsOfInterest != null ? de_PointsOfInterest(output.PointsOfInterest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CharacterOffsets
 */
const de_CharacterOffsets = (output: any, context: __SerdeContext): CharacterOffsets => {
  return {
    BeginOffsetChar: __expectInt32(output.BeginOffsetChar),
    EndOffsetChar: __expectInt32(output.EndOffsetChar),
  } as any;
};

/**
 * deserializeAws_restJson1IssueDetected
 */
const de_IssueDetected = (output: any, context: __SerdeContext): IssueDetected => {
  return {
    CharacterOffsets:
      output.CharacterOffsets != null ? de_CharacterOffsets(output.CharacterOffsets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IssuesDetected
 */
const de_IssuesDetected = (output: any, context: __SerdeContext): IssueDetected[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IssueDetected(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MatchedCategories
 */
const de_MatchedCategories = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MatchedDetails
 */
const de_MatchedDetails = (output: any, context: __SerdeContext): Record<string, CategoryDetails> => {
  return Object.entries(output).reduce((acc: Record<string, CategoryDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_CategoryDetails(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PointOfInterest
 */
const de_PointOfInterest = (output: any, context: __SerdeContext): PointOfInterest => {
  return {
    BeginOffsetMillis: __expectInt32(output.BeginOffsetMillis),
    EndOffsetMillis: __expectInt32(output.EndOffsetMillis),
  } as any;
};

/**
 * deserializeAws_restJson1PointsOfInterest
 */
const de_PointsOfInterest = (output: any, context: __SerdeContext): PointOfInterest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PointOfInterest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RealtimeContactAnalysisSegment
 */
const de_RealtimeContactAnalysisSegment = (output: any, context: __SerdeContext): RealtimeContactAnalysisSegment => {
  return {
    Categories: output.Categories != null ? de_Categories(output.Categories, context) : undefined,
    Transcript: output.Transcript != null ? de_Transcript(output.Transcript, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RealtimeContactAnalysisSegments
 */
const de_RealtimeContactAnalysisSegments = (output: any, context: __SerdeContext): RealtimeContactAnalysisSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RealtimeContactAnalysisSegment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Transcript
 */
const de_Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    BeginOffsetMillis: __expectInt32(output.BeginOffsetMillis),
    Content: __expectString(output.Content),
    EndOffsetMillis: __expectInt32(output.EndOffsetMillis),
    Id: __expectString(output.Id),
    IssuesDetected: output.IssuesDetected != null ? de_IssuesDetected(output.IssuesDetected, context) : undefined,
    ParticipantId: __expectString(output.ParticipantId),
    ParticipantRole: __expectString(output.ParticipantRole),
    Sentiment: __expectString(output.Sentiment),
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
