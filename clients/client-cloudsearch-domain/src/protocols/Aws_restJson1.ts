// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SuggestCommandInput, SuggestCommandOutput } from "../commands/SuggestCommand";
import { UploadDocumentsCommandInput, UploadDocumentsCommandOutput } from "../commands/UploadDocumentsCommand";
import { CloudSearchDomainServiceException as __BaseException } from "../models/CloudSearchDomainServiceException";
import {
  Bucket,
  BucketInfo,
  DocumentServiceException,
  DocumentServiceWarning,
  FieldStats,
  Hit,
  Hits,
  SearchException,
  SearchStatus,
  SuggestionMatch,
  SuggestModel,
  SuggestStatus,
} from "../models/models_0";

/**
 * serializeAws_restJson1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/search";
  const query: any = map({
    format: [, "sdk"],
    pretty: [, "true"],
    cursor: [, input.cursor!],
    expr: [, input.expr!],
    facet: [, input.facet!],
    fq: [, input.filterQuery!],
    highlight: [, input.highlight!],
    partial: [() => input.partial !== void 0, () => input.partial!.toString()],
    q: [, __expectNonNull(input.query!, `query`)],
    "q.options": [, input.queryOptions!],
    "q.parser": [, input.queryParser!],
    return: [, input.return!],
    size: [() => input.size !== void 0, () => input.size!.toString()],
    sort: [, input.sort!],
    start: [() => input.start !== void 0, () => input.start!.toString()],
    stats: [, input.stats!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SuggestCommand
 */
export const se_SuggestCommand = async (
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/suggest";
  const query: any = map({
    format: [, "sdk"],
    pretty: [, "true"],
    q: [, __expectNonNull(input.query!, `query`)],
    suggester: [, __expectNonNull(input.suggester!, `suggester`)],
    size: [() => input.size !== void 0, () => input.size!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UploadDocumentsCommand
 */
export const se_UploadDocumentsCommand = async (
  input: UploadDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/documents/batch";
  const query: any = map({
    format: [, "sdk"],
  });
  let body: any;
  if (input.documents !== undefined) {
    body = input.documents;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.facets != null) {
    contents.facets = de_Facets(data.facets, context);
  }
  if (data.hits != null) {
    contents.hits = de_Hits(data.hits, context);
  }
  if (data.stats != null) {
    contents.stats = de_Stats(data.stats, context);
  }
  if (data.status != null) {
    contents.status = de_SearchStatus(data.status, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchCommandError
 */
const de_SearchCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      throw await de_SearchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SuggestCommand
 */
export const de_SuggestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SuggestCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = de_SuggestStatus(data.status, context);
  }
  if (data.suggest != null) {
    contents.suggest = de_SuggestModel(data.suggest, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SuggestCommandError
 */
const de_SuggestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      throw await de_SearchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UploadDocumentsCommand
 */
export const de_UploadDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UploadDocumentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adds != null) {
    contents.adds = __expectLong(data.adds);
  }
  if (data.deletes != null) {
    contents.deletes = __expectLong(data.deletes);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.warnings != null) {
    contents.warnings = de_DocumentServiceWarnings(data.warnings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UploadDocumentsCommandError
 */
const de_UploadDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentServiceException":
    case "com.amazonaws.cloudsearchdomain#DocumentServiceException":
      throw await de_DocumentServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DocumentServiceExceptionRes
 */
const de_DocumentServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  const exception = new DocumentServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SearchExceptionRes
 */
const de_SearchExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<SearchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SearchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1Bucket
 */
const de_Bucket = (output: any, context: __SerdeContext): Bucket => {
  return {
    count: __expectLong(output.count),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1BucketInfo
 */
const de_BucketInfo = (output: any, context: __SerdeContext): BucketInfo => {
  return {
    buckets: output.buckets != null ? de_BucketList(output.buckets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BucketList
 */
const de_BucketList = (output: any, context: __SerdeContext): Bucket[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Bucket(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DocumentServiceWarning
 */
const de_DocumentServiceWarning = (output: any, context: __SerdeContext): DocumentServiceWarning => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1DocumentServiceWarnings
 */
const de_DocumentServiceWarnings = (output: any, context: __SerdeContext): DocumentServiceWarning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentServiceWarning(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Exprs
 */
const de_Exprs = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Facets
 */
const de_Facets = (output: any, context: __SerdeContext): Record<string, BucketInfo> => {
  return Object.entries(output).reduce((acc: Record<string, BucketInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_BucketInfo(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Fields
 */
const de_Fields = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FieldValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FieldStats
 */
const de_FieldStats = (output: any, context: __SerdeContext): FieldStats => {
  return {
    count: __expectLong(output.count),
    max: __expectString(output.max),
    mean: __expectString(output.mean),
    min: __expectString(output.min),
    missing: __expectLong(output.missing),
    stddev: __limitedParseDouble(output.stddev),
    sum: __limitedParseDouble(output.sum),
    sumOfSquares: __limitedParseDouble(output.sumOfSquares),
  } as any;
};

/**
 * deserializeAws_restJson1FieldValue
 */
const de_FieldValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Highlights
 */
const de_Highlights = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Hit
 */
const de_Hit = (output: any, context: __SerdeContext): Hit => {
  return {
    exprs: output.exprs != null ? de_Exprs(output.exprs, context) : undefined,
    fields: output.fields != null ? de_Fields(output.fields, context) : undefined,
    highlights: output.highlights != null ? de_Highlights(output.highlights, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1HitList
 */
const de_HitList = (output: any, context: __SerdeContext): Hit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Hit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Hits
 */
const de_Hits = (output: any, context: __SerdeContext): Hits => {
  return {
    cursor: __expectString(output.cursor),
    found: __expectLong(output.found),
    hit: output.hit != null ? de_HitList(output.hit, context) : undefined,
    start: __expectLong(output.start),
  } as any;
};

/**
 * deserializeAws_restJson1SearchStatus
 */
const de_SearchStatus = (output: any, context: __SerdeContext): SearchStatus => {
  return {
    rid: __expectString(output.rid),
    timems: __expectLong(output.timems),
  } as any;
};

/**
 * deserializeAws_restJson1Stats
 */
const de_Stats = (output: any, context: __SerdeContext): Record<string, FieldStats> => {
  return Object.entries(output).reduce((acc: Record<string, FieldStats>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FieldStats(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SuggestionMatch
 */
const de_SuggestionMatch = (output: any, context: __SerdeContext): SuggestionMatch => {
  return {
    id: __expectString(output.id),
    score: __expectLong(output.score),
    suggestion: __expectString(output.suggestion),
  } as any;
};

/**
 * deserializeAws_restJson1Suggestions
 */
const de_Suggestions = (output: any, context: __SerdeContext): SuggestionMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SuggestionMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SuggestModel
 */
const de_SuggestModel = (output: any, context: __SerdeContext): SuggestModel => {
  return {
    found: __expectLong(output.found),
    query: __expectString(output.query),
    suggestions: output.suggestions != null ? de_Suggestions(output.suggestions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SuggestStatus
 */
const de_SuggestStatus = (output: any, context: __SerdeContext): SuggestStatus => {
  return {
    rid: __expectString(output.rid),
    timems: __expectLong(output.timems),
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
