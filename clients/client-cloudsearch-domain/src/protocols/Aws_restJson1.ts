// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SuggestCommandInput, SuggestCommandOutput } from "../commands/SuggestCommand";
import { UploadDocumentsCommandInput, UploadDocumentsCommandOutput } from "../commands/UploadDocumentsCommand";
import { CloudSearchDomainServiceException as __BaseException } from "../models/CloudSearchDomainServiceException";
import { DocumentServiceException, FieldStats, SearchException } from "../models/models_0";

/**
 * serializeAws_restJson1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2013-01-01/search");
  const query: any = map({
    [_f]: [, "sdk"],
    [_p]: [, "true"],
    [_c]: [, input[_c]!],
    [_e]: [, input[_e]!],
    [_fa]: [, input[_fa]!],
    [_fq]: [, input[_fQ]!],
    [_h]: [, input[_h]!],
    [_pa]: [() => input.partial !== void 0, () => input[_pa]!.toString()],
    [_q_]: [, __expectNonNull(input[_q]!, `query`)],
    [_qo]: [, input[_qO]!],
    [_qp]: [, input[_qP]!],
    [_r]: [, input[_r]!],
    [_s]: [() => input.size !== void 0, () => input[_s]!.toString()],
    [_so]: [, input[_so]!],
    [_st]: [() => input.start !== void 0, () => input[_st]!.toString()],
    [_sta]: [, input[_sta]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SuggestCommand
 */
export const se_SuggestCommand = async (
  input: SuggestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2013-01-01/suggest");
  const query: any = map({
    [_f]: [, "sdk"],
    [_p]: [, "true"],
    [_q_]: [, __expectNonNull(input[_q]!, `query`)],
    [_su]: [, __expectNonNull(input[_su]!, `suggester`)],
    [_s]: [() => input.size !== void 0, () => input[_s]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UploadDocumentsCommand
 */
export const se_UploadDocumentsCommand = async (
  input: UploadDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
  });
  b.bp("/2013-01-01/documents/batch");
  const query: any = map({
    [_f]: [, "sdk"],
  });
  let body: any;
  if (input.documents !== undefined) {
    body = input.documents;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    facets: _json,
    hits: _json,
    stats: (_) => de_Stats(_, context),
    status: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SuggestCommand
 */
export const de_SuggestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuggestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: _json,
    suggest: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UploadDocumentsCommand
 */
export const de_UploadDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadDocumentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adds: __expectLong,
    deletes: __expectLong,
    status: __expectString,
    warnings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "SearchException":
    case "com.amazonaws.cloudsearchdomain#SearchException":
      throw await de_SearchExceptionRes(parsedOutput, context);
    case "DocumentServiceException":
    case "com.amazonaws.cloudsearchdomain#DocumentServiceException":
      throw await de_DocumentServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1DocumentServiceExceptionRes
 */
const de_DocumentServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SearchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_Bucket omitted.

// de_BucketInfo omitted.

// de_BucketList omitted.

// de_DocumentServiceWarning omitted.

// de_DocumentServiceWarnings omitted.

// de_Exprs omitted.

// de_Facets omitted.

// de_Fields omitted.

/**
 * deserializeAws_restJson1FieldStats
 */
const de_FieldStats = (output: any, context: __SerdeContext): FieldStats => {
  return take(output, {
    count: __expectLong,
    max: __expectString,
    mean: __expectString,
    min: __expectString,
    missing: __expectLong,
    stddev: __limitedParseDouble,
    sum: __limitedParseDouble,
    sumOfSquares: __limitedParseDouble,
  }) as any;
};

// de_FieldValue omitted.

// de_Highlights omitted.

// de_Hit omitted.

// de_HitList omitted.

// de_Hits omitted.

// de_SearchStatus omitted.

/**
 * deserializeAws_restJson1Stats
 */
const de_Stats = (output: any, context: __SerdeContext): Record<string, FieldStats> => {
  return Object.entries(output).reduce((acc: Record<string, FieldStats>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_FieldStats(value, context);
    return acc;
  }, {} as Record<string, FieldStats>);
};

// de_SuggestionMatch omitted.

// de_Suggestions omitted.

// de_SuggestModel omitted.

// de_SuggestStatus omitted.

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

const _c = "cursor";
const _cT = "contentType";
const _ct = "content-type";
const _e = "expr";
const _f = "format";
const _fQ = "filterQuery";
const _fa = "facet";
const _fq = "fq";
const _h = "highlight";
const _p = "pretty";
const _pa = "partial";
const _q = "query";
const _qO = "queryOptions";
const _qP = "queryParser";
const _q_ = "q";
const _qo = "q.options";
const _qp = "q.parser";
const _r = "return";
const _s = "size";
const _so = "sort";
const _st = "start";
const _sta = "stats";
const _su = "suggester";
