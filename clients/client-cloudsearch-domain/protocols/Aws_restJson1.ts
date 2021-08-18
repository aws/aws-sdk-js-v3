import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SuggestCommandInput, SuggestCommandOutput } from "../commands/SuggestCommand";
import { UploadDocumentsCommandInput, UploadDocumentsCommandOutput } from "../commands/UploadDocumentsCommand";
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
  SuggestModel,
  SuggestStatus,
  SuggestionMatch,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat as __limitedParseFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1SearchCommand = async (
  input: SearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/search";
  const query: any = {
    format: "sdk",
    pretty: "true",
    ...(input.cursor !== undefined && { cursor: input.cursor }),
    ...(input.expr !== undefined && { expr: input.expr }),
    ...(input.facet !== undefined && { facet: input.facet }),
    ...(input.filterQuery !== undefined && { fq: input.filterQuery }),
    ...(input.highlight !== undefined && { highlight: input.highlight }),
    ...(input.partial !== undefined && { partial: input.partial.toString() }),
    ...(input.query !== undefined && { q: input.query }),
    ...(input.queryOptions !== undefined && { "q.options": input.queryOptions }),
    ...(input.queryParser !== undefined && { "q.parser": input.queryParser }),
    ...(input.return !== undefined && { return: input.return }),
    ...(input.size !== undefined && { size: input.size.toString() }),
    ...(input.sort !== undefined && { sort: input.sort }),
    ...(input.start !== undefined && { start: input.start.toString() }),
    ...(input.stats !== undefined && { stats: input.stats }),
  };
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

export const serializeAws_restJson1SuggestCommand = async (
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/suggest";
  const query: any = {
    format: "sdk",
    pretty: "true",
    ...(input.query !== undefined && { q: input.query }),
    ...(input.suggester !== undefined && { suggester: input.suggester }),
    ...(input.size !== undefined && { size: input.size.toString() }),
  };
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

export const serializeAws_restJson1UploadDocumentsCommand = async (
  input: UploadDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2013-01-01/documents/batch";
  const query: any = {
    format: "sdk",
  };
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

export const deserializeAws_restJson1SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchCommandError(output, context);
  }
  const contents: SearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    facets: undefined,
    hits: undefined,
    stats: undefined,
    status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.facets !== undefined && data.facets !== null) {
    contents.facets = deserializeAws_restJson1Facets(data.facets, context);
  }
  if (data.hits !== undefined && data.hits !== null) {
    contents.hits = deserializeAws_restJson1Hits(data.hits, context);
  }
  if (data.stats !== undefined && data.stats !== null) {
    contents.stats = deserializeAws_restJson1Stats(data.stats, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1SearchStatus(data.status, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      response = {
        ...(await deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SuggestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SuggestCommandError(output, context);
  }
  const contents: SuggestCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
    suggest: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1SuggestStatus(data.status, context);
  }
  if (data.suggest !== undefined && data.suggest !== null) {
    contents.suggest = deserializeAws_restJson1SuggestModel(data.suggest, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SuggestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      response = {
        ...(await deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UploadDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UploadDocumentsCommandError(output, context);
  }
  const contents: UploadDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    adds: undefined,
    deletes: undefined,
    status: undefined,
    warnings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.adds !== undefined && data.adds !== null) {
    contents.adds = __expectInt(data.adds);
  }
  if (data.deletes !== undefined && data.deletes !== null) {
    contents.deletes = __expectInt(data.deletes);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1DocumentServiceWarnings(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UploadDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentServiceException":
    case "com.amazonaws.cloudsearchdomain#DocumentServiceException":
      response = {
        ...(await deserializeAws_restJson1DocumentServiceExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1DocumentServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: DocumentServiceException = {
    name: "DocumentServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    status: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1SearchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SearchException> => {
  const contents: SearchException = {
    name: "SearchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1Bucket = (output: any, context: __SerdeContext): Bucket => {
  return {
    count: __expectInt(output.count),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1BucketInfo = (output: any, context: __SerdeContext): BucketInfo => {
  return {
    buckets:
      output.buckets !== undefined && output.buckets !== null
        ? deserializeAws_restJson1BucketList(output.buckets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BucketList = (output: any, context: __SerdeContext): Bucket[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Bucket(entry, context);
    });
};

const deserializeAws_restJson1DocumentServiceWarning = (
  output: any,
  context: __SerdeContext
): DocumentServiceWarning => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1DocumentServiceWarnings = (
  output: any,
  context: __SerdeContext
): DocumentServiceWarning[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DocumentServiceWarning(entry, context);
    });
};

const deserializeAws_restJson1Exprs = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Facets = (output: any, context: __SerdeContext): { [key: string]: BucketInfo } => {
  return Object.entries(output).reduce((acc: { [key: string]: BucketInfo }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1BucketInfo(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Fields = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1FieldValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1FieldStats = (output: any, context: __SerdeContext): FieldStats => {
  return {
    count: __expectInt(output.count),
    max: __expectString(output.max),
    mean: __expectString(output.mean),
    min: __expectString(output.min),
    missing: __expectInt(output.missing),
    stddev: __limitedParseFloat(output.stddev),
    sum: __limitedParseFloat(output.sum),
    sumOfSquares: __limitedParseFloat(output.sumOfSquares),
  } as any;
};

const deserializeAws_restJson1FieldValue = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Highlights = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Hit = (output: any, context: __SerdeContext): Hit => {
  return {
    exprs:
      output.exprs !== undefined && output.exprs !== null
        ? deserializeAws_restJson1Exprs(output.exprs, context)
        : undefined,
    fields:
      output.fields !== undefined && output.fields !== null
        ? deserializeAws_restJson1Fields(output.fields, context)
        : undefined,
    highlights:
      output.highlights !== undefined && output.highlights !== null
        ? deserializeAws_restJson1Highlights(output.highlights, context)
        : undefined,
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1HitList = (output: any, context: __SerdeContext): Hit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Hit(entry, context);
    });
};

const deserializeAws_restJson1Hits = (output: any, context: __SerdeContext): Hits => {
  return {
    cursor: __expectString(output.cursor),
    found: __expectInt(output.found),
    hit:
      output.hit !== undefined && output.hit !== null
        ? deserializeAws_restJson1HitList(output.hit, context)
        : undefined,
    start: __expectInt(output.start),
  } as any;
};

const deserializeAws_restJson1SearchStatus = (output: any, context: __SerdeContext): SearchStatus => {
  return {
    rid: __expectString(output.rid),
    timems: __expectInt(output.timems),
  } as any;
};

const deserializeAws_restJson1Stats = (output: any, context: __SerdeContext): { [key: string]: FieldStats } => {
  return Object.entries(output).reduce((acc: { [key: string]: FieldStats }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1FieldStats(value, context),
    };
  }, {});
};

const deserializeAws_restJson1SuggestionMatch = (output: any, context: __SerdeContext): SuggestionMatch => {
  return {
    id: __expectString(output.id),
    score: __expectInt(output.score),
    suggestion: __expectString(output.suggestion),
  } as any;
};

const deserializeAws_restJson1Suggestions = (output: any, context: __SerdeContext): SuggestionMatch[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuggestionMatch(entry, context);
    });
};

const deserializeAws_restJson1SuggestModel = (output: any, context: __SerdeContext): SuggestModel => {
  return {
    found: __expectInt(output.found),
    query: __expectString(output.query),
    suggestions:
      output.suggestions !== undefined && output.suggestions !== null
        ? deserializeAws_restJson1Suggestions(output.suggestions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuggestStatus = (output: any, context: __SerdeContext): SuggestStatus => {
  return {
    rid: __expectString(output.rid),
    timems: __expectInt(output.timems),
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
