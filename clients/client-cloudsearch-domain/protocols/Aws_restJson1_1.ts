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

export async function serializeAws_restJson1_1SearchCommand(
  input: SearchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2013-01-01/search";
  const query: any = {
    format: "sdk",
    pretty: "true"
  };
  if (input.cursor !== undefined) {
    query["cursor"] = input.cursor;
  }
  if (input.expr !== undefined) {
    query["expr"] = input.expr;
  }
  if (input.facet !== undefined) {
    query["facet"] = input.facet;
  }
  if (input.filterQuery !== undefined) {
    query["fq"] = input.filterQuery;
  }
  if (input.highlight !== undefined) {
    query["highlight"] = input.highlight;
  }
  if (input.partial !== undefined) {
    query["partial"] = input.partial.toString();
  }
  if (input.query !== undefined) {
    query["q"] = input.query;
  }
  if (input.queryOptions !== undefined) {
    query["q.options"] = input.queryOptions;
  }
  if (input.queryParser !== undefined) {
    query["q.parser"] = input.queryParser;
  }
  if (input.return !== undefined) {
    query["return"] = input.return;
  }
  if (input.size !== undefined) {
    query["size"] = input.size.toString();
  }
  if (input.sort !== undefined) {
    query["sort"] = input.sort;
  }
  if (input.start !== undefined) {
    query["start"] = input.start.toString();
  }
  if (input.stats !== undefined) {
    query["stats"] = input.stats;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1SuggestCommand(
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2013-01-01/suggest";
  const query: any = {
    format: "sdk",
    pretty: "true"
  };
  if (input.query !== undefined) {
    query["q"] = input.query;
  }
  if (input.size !== undefined) {
    query["size"] = input.size.toString();
  }
  if (input.suggester !== undefined) {
    query["suggester"] = input.suggester;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UploadDocumentsCommand(
  input: UploadDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (input.contentType !== undefined) {
    headers["Content-Type"] = input.contentType;
  }
  let resolvedPath = "/2013-01-01/documents/batch";
  const query: any = {
    format: "sdk"
  };
  let body: any;
  if (input.documents !== undefined) {
    body = input.documents;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function deserializeAws_restJson1_1SearchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SearchCommandError(output, context);
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
    contents.facets = deserializeAws_restJson1_1Facets(data.facets, context);
  }
  if (data.hits !== undefined && data.hits !== null) {
    contents.hits = deserializeAws_restJson1_1Hits(data.hits, context);
  }
  if (data.stats !== undefined && data.stats !== null) {
    contents.stats = deserializeAws_restJson1_1Stats(data.stats, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1_1SearchStatus(
      data.status,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SearchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "SearchException":
    case "com.a9.cloudsearch.service2013#SearchException":
      response = {
        ...(await deserializeAws_restJson1_1SearchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1SuggestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SuggestCommandError(output, context);
  }
  const contents: SuggestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SuggestResponse",
    status: undefined,
    suggest: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1_1SuggestStatus(
      data.status,
      context
    );
  }
  if (data.suggest !== undefined && data.suggest !== null) {
    contents.suggest = deserializeAws_restJson1_1SuggestModel(
      data.suggest,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SuggestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "SearchException":
    case "com.a9.cloudsearch.service2013#SearchException":
      response = {
        ...(await deserializeAws_restJson1_1SearchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UploadDocumentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UploadDocumentsCommandError(
      output,
      context
    );
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
    contents.warnings = deserializeAws_restJson1_1DocumentServiceWarnings(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UploadDocumentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DocumentServiceException":
    case "com.a9.cloudsearch.service2013#DocumentServiceException":
      response = {
        ...(await deserializeAws_restJson1_1DocumentServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1DocumentServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: DocumentServiceException = {
    name: "DocumentServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return contents;
};

const deserializeAws_restJson1_1SearchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SearchException> => {
  const contents: SearchException = {
    name: "SearchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1Bucket = (
  output: any,
  context: __SerdeContext
): Bucket => {
  let contents: any = {
    __type: "Bucket",
    count: undefined,
    value: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1BucketInfo = (
  output: any,
  context: __SerdeContext
): BucketInfo => {
  let contents: any = {
    __type: "BucketInfo",
    buckets: undefined
  };
  if (output.buckets !== undefined && output.buckets !== null) {
    contents.buckets = deserializeAws_restJson1_1BucketList(
      output.buckets,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BucketList = (
  output: any,
  context: __SerdeContext
): Array<Bucket> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Bucket(entry, context)
  );
};

const deserializeAws_restJson1_1DocumentServiceWarning = (
  output: any,
  context: __SerdeContext
): DocumentServiceWarning => {
  let contents: any = {
    __type: "DocumentServiceWarning",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_restJson1_1DocumentServiceWarnings = (
  output: any,
  context: __SerdeContext
): Array<DocumentServiceWarning> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DocumentServiceWarning(entry, context)
  );
};

const deserializeAws_restJson1_1Exprs = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Facets = (
  output: any,
  context: __SerdeContext
): { [key: string]: BucketInfo } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1BucketInfo(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1FieldStats = (
  output: any,
  context: __SerdeContext
): FieldStats => {
  let contents: any = {
    __type: "FieldStats",
    count: undefined,
    max: undefined,
    mean: undefined,
    min: undefined,
    missing: undefined,
    stddev: undefined,
    sum: undefined,
    sumOfSquares: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.max !== undefined && output.max !== null) {
    contents.max = output.max;
  }
  if (output.mean !== undefined && output.mean !== null) {
    contents.mean = output.mean;
  }
  if (output.min !== undefined && output.min !== null) {
    contents.min = output.min;
  }
  if (output.missing !== undefined && output.missing !== null) {
    contents.missing = output.missing;
  }
  if (output.stddev !== undefined && output.stddev !== null) {
    contents.stddev = output.stddev;
  }
  if (output.sum !== undefined && output.sum !== null) {
    contents.sum = output.sum;
  }
  if (output.sumOfSquares !== undefined && output.sumOfSquares !== null) {
    contents.sumOfSquares = output.sumOfSquares;
  }
  return contents;
};

const deserializeAws_restJson1_1FieldValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Fields = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<string> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1FieldValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1Highlights = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Hit = (
  output: any,
  context: __SerdeContext
): Hit => {
  let contents: any = {
    __type: "Hit",
    exprs: undefined,
    fields: undefined,
    highlights: undefined,
    id: undefined
  };
  if (output.exprs !== undefined && output.exprs !== null) {
    contents.exprs = deserializeAws_restJson1_1Exprs(output.exprs, context);
  }
  if (output.fields !== undefined && output.fields !== null) {
    contents.fields = deserializeAws_restJson1_1Fields(output.fields, context);
  }
  if (output.highlights !== undefined && output.highlights !== null) {
    contents.highlights = deserializeAws_restJson1_1Highlights(
      output.highlights,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_restJson1_1HitList = (
  output: any,
  context: __SerdeContext
): Array<Hit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Hit(entry, context)
  );
};

const deserializeAws_restJson1_1Hits = (
  output: any,
  context: __SerdeContext
): Hits => {
  let contents: any = {
    __type: "Hits",
    cursor: undefined,
    found: undefined,
    hit: undefined,
    start: undefined
  };
  if (output.cursor !== undefined && output.cursor !== null) {
    contents.cursor = output.cursor;
  }
  if (output.found !== undefined && output.found !== null) {
    contents.found = output.found;
  }
  if (output.hit !== undefined && output.hit !== null) {
    contents.hit = deserializeAws_restJson1_1HitList(output.hit, context);
  }
  if (output.start !== undefined && output.start !== null) {
    contents.start = output.start;
  }
  return contents;
};

const deserializeAws_restJson1_1SearchStatus = (
  output: any,
  context: __SerdeContext
): SearchStatus => {
  let contents: any = {
    __type: "SearchStatus",
    rid: undefined,
    timems: undefined
  };
  if (output.rid !== undefined && output.rid !== null) {
    contents.rid = output.rid;
  }
  if (output.timems !== undefined && output.timems !== null) {
    contents.timems = output.timems;
  }
  return contents;
};

const deserializeAws_restJson1_1Stats = (
  output: any,
  context: __SerdeContext
): { [key: string]: FieldStats } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1FieldStats(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1SuggestModel = (
  output: any,
  context: __SerdeContext
): SuggestModel => {
  let contents: any = {
    __type: "SuggestModel",
    found: undefined,
    query: undefined,
    suggestions: undefined
  };
  if (output.found !== undefined && output.found !== null) {
    contents.found = output.found;
  }
  if (output.query !== undefined && output.query !== null) {
    contents.query = output.query;
  }
  if (output.suggestions !== undefined && output.suggestions !== null) {
    contents.suggestions = deserializeAws_restJson1_1Suggestions(
      output.suggestions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SuggestStatus = (
  output: any,
  context: __SerdeContext
): SuggestStatus => {
  let contents: any = {
    __type: "SuggestStatus",
    rid: undefined,
    timems: undefined
  };
  if (output.rid !== undefined && output.rid !== null) {
    contents.rid = output.rid;
  }
  if (output.timems !== undefined && output.timems !== null) {
    contents.timems = output.timems;
  }
  return contents;
};

const deserializeAws_restJson1_1SuggestionMatch = (
  output: any,
  context: __SerdeContext
): SuggestionMatch => {
  let contents: any = {
    __type: "SuggestionMatch",
    id: undefined,
    score: undefined,
    suggestion: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.score !== undefined && output.score !== null) {
    contents.score = output.score;
  }
  if (output.suggestion !== undefined && output.suggestion !== null) {
    contents.suggestion = output.suggestion;
  }
  return contents;
};

const deserializeAws_restJson1_1Suggestions = (
  output: any,
  context: __SerdeContext
): Array<SuggestionMatch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SuggestionMatch(entry, context)
  );
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
