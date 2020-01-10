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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
    query["cursor"] = input.cursor.toString();
  }
  if (input.expr !== undefined) {
    query["expr"] = input.expr.toString();
  }
  if (input.facet !== undefined) {
    query["facet"] = input.facet.toString();
  }
  if (input.filterQuery !== undefined) {
    query["fq"] = input.filterQuery.toString();
  }
  if (input.highlight !== undefined) {
    query["highlight"] = input.highlight.toString();
  }
  if (input.partial !== undefined) {
    query["partial"] = input.partial.toString();
  }
  if (input.query !== undefined) {
    query["q"] = input.query.toString();
  }
  if (input.queryOptions !== undefined) {
    query["q.options"] = input.queryOptions.toString();
  }
  if (input.queryParser !== undefined) {
    query["q.parser"] = input.queryParser.toString();
  }
  if (input.return !== undefined) {
    query["return"] = input.return.toString();
  }
  if (input.size !== undefined) {
    query["size"] = input.size.toString();
  }
  if (input.sort !== undefined) {
    query["sort"] = input.sort.toString();
  }
  if (input.start !== undefined) {
    query["start"] = input.start.toString();
  }
  if (input.stats !== undefined) {
    query["stats"] = input.stats.toString();
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
    query["q"] = input.query.toString();
  }
  if (input.size !== undefined) {
    query["size"] = input.size.toString();
  }
  if (input.suggester !== undefined) {
    query["suggester"] = input.suggester.toString();
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
    headers["Content-Type"] = input.contentType.toString();
  }
  let resolvedPath = "/2013-01-01/documents/batch";
  const query: any = {
    format: "sdk"
  };
  let body: any = {};
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
  if (output.statusCode !== 200) {
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
  if (data.facets !== undefined) {
    contents.facets = deserializeAws_restJson1_1Facets(data.facets, context);
  }
  if (data.hits !== undefined) {
    contents.hits = deserializeAws_restJson1_1Hits(data.hits, context);
  }
  if (data.stats !== undefined) {
    contents.stats = deserializeAws_restJson1_1Stats(data.stats, context);
  }
  if (data.status !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "SearchException":
    case "com.a9.cloudsearch.service2013#SearchException":
      response = await deserializeAws_restJson1_1SearchExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.a9.cloudsearch.service2013#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SuggestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SuggestCommandError(output, context);
  }
  const contents: SuggestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SuggestResponse",
    status: undefined,
    suggest: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined) {
    contents.status = deserializeAws_restJson1_1SuggestStatus(
      data.status,
      context
    );
  }
  if (data.suggest !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "SearchException":
    case "com.a9.cloudsearch.service2013#SearchException":
      response = await deserializeAws_restJson1_1SearchExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.a9.cloudsearch.service2013#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UploadDocumentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.adds !== undefined) {
    contents.adds = data.adds;
  }
  if (data.deletes !== undefined) {
    contents.deletes = data.deletes;
  }
  if (data.status !== undefined) {
    contents.status = data.status;
  }
  if (data.warnings !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DocumentServiceException":
    case "com.a9.cloudsearch.service2013#DocumentServiceException":
      response = await deserializeAws_restJson1_1DocumentServiceExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.a9.cloudsearch.service2013#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1DocumentServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: DocumentServiceException = {
    __type: "DocumentServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.status !== undefined) {
    contents.status = data.status;
  }
  return contents;
};

const deserializeAws_restJson1_1SearchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SearchException> => {
  const contents: SearchException = {
    __type: "SearchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
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
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  if (output.value !== undefined) {
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
  if (output.buckets !== undefined) {
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
  if (output.message !== undefined) {
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
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Facets = (
  output: any,
  context: __SerdeContext
): { [key: string]: BucketInfo } => {
  let mapParams: any = {};
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
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  if (output.max !== undefined) {
    contents.max = output.max;
  }
  if (output.mean !== undefined) {
    contents.mean = output.mean;
  }
  if (output.min !== undefined) {
    contents.min = output.min;
  }
  if (output.missing !== undefined) {
    contents.missing = output.missing;
  }
  if (output.stddev !== undefined) {
    contents.stddev = output.stddev;
  }
  if (output.sum !== undefined) {
    contents.sum = output.sum;
  }
  if (output.sumOfSquares !== undefined) {
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
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1FieldValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1Highlights = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
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
  if (output.exprs !== undefined) {
    contents.exprs = deserializeAws_restJson1_1Exprs(output.exprs, context);
  }
  if (output.fields !== undefined) {
    contents.fields = deserializeAws_restJson1_1Fields(output.fields, context);
  }
  if (output.highlights !== undefined) {
    contents.highlights = deserializeAws_restJson1_1Highlights(
      output.highlights,
      context
    );
  }
  if (output.id !== undefined) {
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
  if (output.cursor !== undefined) {
    contents.cursor = output.cursor;
  }
  if (output.found !== undefined) {
    contents.found = output.found;
  }
  if (output.hit !== undefined) {
    contents.hit = deserializeAws_restJson1_1HitList(output.hit, context);
  }
  if (output.start !== undefined) {
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
  if (output.rid !== undefined) {
    contents.rid = output.rid;
  }
  if (output.timems !== undefined) {
    contents.timems = output.timems;
  }
  return contents;
};

const deserializeAws_restJson1_1Stats = (
  output: any,
  context: __SerdeContext
): { [key: string]: FieldStats } => {
  let mapParams: any = {};
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
  if (output.found !== undefined) {
    contents.found = output.found;
  }
  if (output.query !== undefined) {
    contents.query = output.query;
  }
  if (output.suggestions !== undefined) {
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
  if (output.rid !== undefined) {
    contents.rid = output.rid;
  }
  if (output.timems !== undefined) {
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
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.score !== undefined) {
    contents.score = output.score;
  }
  if (output.suggestion !== undefined) {
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
  return context.streamCollector(streamBody) || new Uint8Array();
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
