import {
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectInt as __expectInt, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = async (
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/realtime-contact-analysis/analysis-segments";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommandError(output, context);
  }
  const contents: ListRealtimeContactAnalysisSegmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Segments: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Segments !== undefined && data.Segments !== null) {
    contents.Segments = deserializeAws_restJson1RealtimeContactAnalysisSegments(data.Segments, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcontactlens#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.connectcontactlens#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.connectcontactlens#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcontactlens#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectcontactlens#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1Categories = (output: any, context: __SerdeContext): Categories => {
  return {
    MatchedCategories:
      output.MatchedCategories !== undefined && output.MatchedCategories !== null
        ? deserializeAws_restJson1MatchedCategories(output.MatchedCategories, context)
        : undefined,
    MatchedDetails:
      output.MatchedDetails !== undefined && output.MatchedDetails !== null
        ? deserializeAws_restJson1MatchedDetails(output.MatchedDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CategoryDetails = (output: any, context: __SerdeContext): CategoryDetails => {
  return {
    PointsOfInterest:
      output.PointsOfInterest !== undefined && output.PointsOfInterest !== null
        ? deserializeAws_restJson1PointsOfInterest(output.PointsOfInterest, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CharacterOffsets = (output: any, context: __SerdeContext): CharacterOffsets => {
  return {
    BeginOffsetChar: __expectInt(output.BeginOffsetChar),
    EndOffsetChar: __expectInt(output.EndOffsetChar),
  } as any;
};

const deserializeAws_restJson1IssueDetected = (output: any, context: __SerdeContext): IssueDetected => {
  return {
    CharacterOffsets:
      output.CharacterOffsets !== undefined && output.CharacterOffsets !== null
        ? deserializeAws_restJson1CharacterOffsets(output.CharacterOffsets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IssuesDetected = (output: any, context: __SerdeContext): IssueDetected[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IssueDetected(entry, context);
    });
};

const deserializeAws_restJson1MatchedCategories = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1MatchedDetails = (
  output: any,
  context: __SerdeContext
): { [key: string]: CategoryDetails } => {
  return Object.entries(output).reduce((acc: { [key: string]: CategoryDetails }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1CategoryDetails(value, context),
    };
  }, {});
};

const deserializeAws_restJson1PointOfInterest = (output: any, context: __SerdeContext): PointOfInterest => {
  return {
    BeginOffsetMillis: __expectInt(output.BeginOffsetMillis),
    EndOffsetMillis: __expectInt(output.EndOffsetMillis),
  } as any;
};

const deserializeAws_restJson1PointsOfInterest = (output: any, context: __SerdeContext): PointOfInterest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PointOfInterest(entry, context);
    });
};

const deserializeAws_restJson1RealtimeContactAnalysisSegment = (
  output: any,
  context: __SerdeContext
): RealtimeContactAnalysisSegment => {
  return {
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1Categories(output.Categories, context)
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_restJson1Transcript(output.Transcript, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RealtimeContactAnalysisSegments = (
  output: any,
  context: __SerdeContext
): RealtimeContactAnalysisSegment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RealtimeContactAnalysisSegment(entry, context);
    });
};

const deserializeAws_restJson1Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    BeginOffsetMillis: __expectInt(output.BeginOffsetMillis),
    Content: __expectString(output.Content),
    EndOffsetMillis: __expectInt(output.EndOffsetMillis),
    Id: __expectString(output.Id),
    IssuesDetected:
      output.IssuesDetected !== undefined && output.IssuesDetected !== null
        ? deserializeAws_restJson1IssuesDetected(output.IssuesDetected, context)
        : undefined,
    ParticipantId: __expectString(output.ParticipantId),
    ParticipantRole: __expectString(output.ParticipantRole),
    Sentiment: __expectString(output.Sentiment),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
