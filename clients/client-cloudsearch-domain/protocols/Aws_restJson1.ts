import {
  SearchCommandInput,
  SearchCommandOutput
} from "../commands/SearchCommand";
import {
  SuggestCommandInput,
  SuggestCommandOutput
} from "../commands/SuggestCommand";
import {
  UploadDocumentsCommandInput,
  UploadDocumentsCommandOutput
} from "../commands/UploadDocumentsCommand";
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
  SuggestionMatch
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1SearchCommand = async (
  input: SearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2013-01-01/search";
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
    ...(input.queryOptions !== undefined && {
      "q.options": input.queryOptions
    }),
    ...(input.queryParser !== undefined && { "q.parser": input.queryParser }),
    ...(input.return !== undefined && { return: input.return }),
    ...(input.size !== undefined && { size: input.size.toString() }),
    ...(input.sort !== undefined && { sort: input.sort }),
    ...(input.start !== undefined && { start: input.start.toString() }),
    ...(input.stats !== undefined && { stats: input.stats })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1SuggestCommand = async (
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2013-01-01/suggest";
  const query: any = {
    format: "sdk",
    pretty: "true",
    ...(input.query !== undefined && { q: input.query }),
    ...(input.size !== undefined && { size: input.size.toString() }),
    ...(input.suggester !== undefined && { suggester: input.suggester })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UploadDocumentsCommand = async (
  input: UploadDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.contentType) && {
      "Content-Type": input.contentType!
    })
  };
  let resolvedPath = "/2013-01-01/documents/batch";
  const query: any = {
    format: "sdk"
  };
  let body: any;
  if (input.documents !== undefined) {
    body = input.documents;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const deserializeAws_restJson1SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SearchCommandError(output, context);
  }
  const contents: SearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchResponse",
    facets: undefined,
    hits: undefined,
    stats: undefined,
    status: undefined
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
    contents.status = deserializeAws_restJson1SearchStatus(
      data.status,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      response = {
        ...(await deserializeAws_restJson1SearchExceptionResponse(
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

export const deserializeAws_restJson1SuggestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SuggestCommandError(output, context);
  }
  const contents: SuggestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SuggestResponse",
    status: undefined,
    suggest: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1SuggestStatus(
      data.status,
      context
    );
  }
  if (data.suggest !== undefined && data.suggest !== null) {
    contents.suggest = deserializeAws_restJson1SuggestModel(
      data.suggest,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SuggestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      response = {
        ...(await deserializeAws_restJson1SearchExceptionResponse(
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

export const deserializeAws_restJson1UploadDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UploadDocumentsCommandError(output, context);
  }
  const contents: UploadDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadDocumentsResponse",
    adds: undefined,
    deletes: undefined,
    status: undefined,
    warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.adds !== undefined && data.adds !== null) {
    contents.adds = data.adds;
  }
  if (data.deletes !== undefined && data.deletes !== null) {
    contents.deletes = data.deletes;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1DocumentServiceWarnings(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UploadDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentServiceException":
    case "com.amazonaws.cloudsearchdomain#DocumentServiceException":
      response = {
        ...(await deserializeAws_restJson1DocumentServiceExceptionResponse(
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

const deserializeAws_restJson1DocumentServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: DocumentServiceException = {
    name: "DocumentServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    status: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1Bucket = (
  output: any,
  context: __SerdeContext
): Bucket => {
  return {
    __type: "Bucket",
    count:
      output.count !== undefined && output.count !== null
        ? output.count
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1BucketInfo = (
  output: any,
  context: __SerdeContext
): BucketInfo => {
  return {
    __type: "BucketInfo",
    buckets:
      output.buckets !== undefined && output.buckets !== null
        ? deserializeAws_restJson1BucketList(output.buckets, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1BucketList = (
  output: any,
  context: __SerdeContext
): Bucket[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Bucket(entry, context)
  );
};

const deserializeAws_restJson1DocumentServiceWarning = (
  output: any,
  context: __SerdeContext
): DocumentServiceWarning => {
  return {
    __type: "DocumentServiceWarning",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_restJson1DocumentServiceWarnings = (
  output: any,
  context: __SerdeContext
): DocumentServiceWarning[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DocumentServiceWarning(entry, context)
  );
};

const deserializeAws_restJson1Exprs = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Facets = (
  output: any,
  context: __SerdeContext
): { [key: string]: BucketInfo } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: BucketInfo }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1BucketInfo(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1Fields = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1FieldValue(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1FieldStats = (
  output: any,
  context: __SerdeContext
): FieldStats => {
  return {
    __type: "FieldStats",
    count:
      output.count !== undefined && output.count !== null
        ? output.count
        : undefined,
    max:
      output.max !== undefined && output.max !== null ? output.max : undefined,
    mean:
      output.mean !== undefined && output.mean !== null
        ? output.mean
        : undefined,
    min:
      output.min !== undefined && output.min !== null ? output.min : undefined,
    missing:
      output.missing !== undefined && output.missing !== null
        ? output.missing
        : undefined,
    stddev:
      output.stddev !== undefined && output.stddev !== null
        ? output.stddev
        : undefined,
    sum:
      output.sum !== undefined && output.sum !== null ? output.sum : undefined,
    sumOfSquares:
      output.sumOfSquares !== undefined && output.sumOfSquares !== null
        ? output.sumOfSquares
        : undefined
  } as any;
};

const deserializeAws_restJson1FieldValue = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Highlights = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Hit = (
  output: any,
  context: __SerdeContext
): Hit => {
  return {
    __type: "Hit",
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
    id: output.id !== undefined && output.id !== null ? output.id : undefined
  } as any;
};

const deserializeAws_restJson1HitList = (
  output: any,
  context: __SerdeContext
): Hit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Hit(entry, context)
  );
};

const deserializeAws_restJson1Hits = (
  output: any,
  context: __SerdeContext
): Hits => {
  return {
    __type: "Hits",
    cursor:
      output.cursor !== undefined && output.cursor !== null
        ? output.cursor
        : undefined,
    found:
      output.found !== undefined && output.found !== null
        ? output.found
        : undefined,
    hit:
      output.hit !== undefined && output.hit !== null
        ? deserializeAws_restJson1HitList(output.hit, context)
        : undefined,
    start:
      output.start !== undefined && output.start !== null
        ? output.start
        : undefined
  } as any;
};

const deserializeAws_restJson1SearchStatus = (
  output: any,
  context: __SerdeContext
): SearchStatus => {
  return {
    __type: "SearchStatus",
    rid:
      output.rid !== undefined && output.rid !== null ? output.rid : undefined,
    timems:
      output.timems !== undefined && output.timems !== null
        ? output.timems
        : undefined
  } as any;
};

const deserializeAws_restJson1Stats = (
  output: any,
  context: __SerdeContext
): { [key: string]: FieldStats } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: FieldStats }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1FieldStats(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1SuggestionMatch = (
  output: any,
  context: __SerdeContext
): SuggestionMatch => {
  return {
    __type: "SuggestionMatch",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    score:
      output.score !== undefined && output.score !== null
        ? output.score
        : undefined,
    suggestion:
      output.suggestion !== undefined && output.suggestion !== null
        ? output.suggestion
        : undefined
  } as any;
};

const deserializeAws_restJson1Suggestions = (
  output: any,
  context: __SerdeContext
): SuggestionMatch[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SuggestionMatch(entry, context)
  );
};

const deserializeAws_restJson1SuggestModel = (
  output: any,
  context: __SerdeContext
): SuggestModel => {
  return {
    __type: "SuggestModel",
    found:
      output.found !== undefined && output.found !== null
        ? output.found
        : undefined,
    query:
      output.query !== undefined && output.query !== null
        ? output.query
        : undefined,
    suggestions:
      output.suggestions !== undefined && output.suggestions !== null
        ? deserializeAws_restJson1Suggestions(output.suggestions, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1SuggestStatus = (
  output: any,
  context: __SerdeContext
): SuggestStatus => {
  return {
    __type: "SuggestStatus",
    rid:
      output.rid !== undefined && output.rid !== null ? output.rid : undefined,
    timems:
      output.timems !== undefined && output.timems !== null
        ? output.timems
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
