// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { PostContentCommandInput, PostContentCommandOutput } from "../commands/PostContentCommand";
import { PostTextCommandInput, PostTextCommandOutput } from "../commands/PostTextCommand";
import { PutSessionCommandInput, PutSessionCommandOutput } from "../commands/PutSessionCommand";
import { LexRuntimeServiceServiceException as __BaseException } from "../models/LexRuntimeServiceServiceException";
import {
  ActiveContext,
  ActiveContextTimeToLive,
  BadGatewayException,
  BadRequestException,
  ConflictException,
  DependencyFailedException,
  DialogAction,
  IntentConfidence,
  IntentSummary,
  InternalFailureException,
  LimitExceededException,
  LoopDetectedException,
  NotAcceptableException,
  NotFoundException,
  PredictedIntent,
  RequestTimeoutException,
  UnsupportedMediaTypeException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteSessionCommand
 */
export const se_DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/bot/{botName}/alias/{botAlias}/user/{userId}/session");
  b.p("botName", () => input.botName!, "{botName}", false);
  b.p("botAlias", () => input.botAlias!, "{botAlias}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/bot/{botName}/alias/{botAlias}/user/{userId}/session");
  b.p("botName", () => input.botName!, "{botName}", false);
  b.p("botAlias", () => input.botAlias!, "{botAlias}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  const query: any = map({
    [_cLF]: [, input[_cLF]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostContentCommand
 */
export const se_PostContentCommand = async (
  input: PostContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    [_ct]: input[_cT] || "application/octet-stream",
    [_xalsa]: [
      () => isSerializableHeaderValue(input[_sA]),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.from(input[_sA]!))),
    ],
    [_xalra]: [
      () => isSerializableHeaderValue(input[_rA]),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.from(input[_rA]!))),
    ],
    [_a]: input[_a]!,
    [_xalac]: [
      () => isSerializableHeaderValue(input[_aC]),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.from(input[_aC]!))),
    ],
  });
  b.bp("/bot/{botName}/alias/{botAlias}/user/{userId}/content");
  b.p("botName", () => input.botName!, "{botName}", false);
  b.p("botAlias", () => input.botAlias!, "{botAlias}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  if (input.inputStream !== undefined) {
    body = input.inputStream;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostTextCommand
 */
export const se_PostTextCommand = async (
  input: PostTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/bot/{botName}/alias/{botAlias}/user/{userId}/text");
  b.p("botName", () => input.botName!, "{botName}", false);
  b.p("botAlias", () => input.botAlias!, "{botAlias}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      activeContexts: (_) => _json(_),
      inputText: [],
      requestAttributes: (_) => _json(_),
      sessionAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSessionCommand
 */
export const se_PutSessionCommand = async (
  input: PutSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_a]: input[_a]!,
  });
  b.bp("/bot/{botName}/alias/{botAlias}/user/{userId}/session");
  b.p("botName", () => input.botName!, "{botName}", false);
  b.p("botAlias", () => input.botAlias!, "{botAlias}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      activeContexts: (_) => _json(_),
      dialogAction: (_) => _json(_),
      recentIntentSummaryView: (_) => _json(_),
      sessionAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DeleteSessionCommand
 */
export const de_DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botAlias: __expectString,
    botName: __expectString,
    sessionId: __expectString,
    userId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeContexts: _json,
    dialogAction: _json,
    recentIntentSummaryView: _json,
    sessionAttributes: _json,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostContentCommand
 */
export const de_PostContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<PostContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_iN]: [, output.headers[_xalin]],
    [_nIC]: [
      () => void 0 !== output.headers[_xalnic],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalnic])).toString("utf8")),
    ],
    [_aI]: [
      () => void 0 !== output.headers[_xalai],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalai])).toString("utf8")),
    ],
    [_s]: [
      () => void 0 !== output.headers[_xals],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xals])).toString("utf8")),
    ],
    [_sA]: [
      () => void 0 !== output.headers[_xalsa],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalsa])).toString("utf8")),
    ],
    [_sR]: [, output.headers[_xals_]],
    [_m]: [, output.headers[_xalm]],
    [_eM]: [, output.headers[_xalem]],
    [_mF]: [, output.headers[_xalmf]],
    [_dS]: [, output.headers[_xalds]],
    [_sTE]: [, output.headers[_xalste]],
    [_iT]: [, output.headers[_xalit]],
    [_eIT]: [, output.headers[_xaleit]],
    [_bV]: [, output.headers[_xalbv]],
    [_sI]: [, output.headers[_xalsi]],
    [_aC]: [
      () => void 0 !== output.headers[_xalac],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalac])).toString("utf8")),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
  return contents;
};

/**
 * deserializeAws_restJson1PostTextCommand
 */
export const de_PostTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeContexts: _json,
    alternativeIntents: (_) => de_IntentList(_, context),
    botVersion: __expectString,
    dialogState: __expectString,
    intentName: __expectString,
    message: __expectString,
    messageFormat: __expectString,
    nluIntentConfidence: (_) => de_IntentConfidence(_, context),
    responseCard: _json,
    sentimentResponse: _json,
    sessionAttributes: _json,
    sessionId: __expectString,
    slotToElicit: __expectString,
    slots: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSessionCommand
 */
export const de_PutSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<PutSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_iN]: [, output.headers[_xalin]],
    [_s]: [
      () => void 0 !== output.headers[_xals],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xals])).toString("utf8")),
    ],
    [_sA]: [
      () => void 0 !== output.headers[_xalsa],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalsa])).toString("utf8")),
    ],
    [_m]: [, output.headers[_xalm]],
    [_eM]: [, output.headers[_xalem]],
    [_mF]: [, output.headers[_xalmf]],
    [_dS]: [, output.headers[_xalds]],
    [_sTE]: [, output.headers[_xalste]],
    [_sI]: [, output.headers[_xalsi]],
    [_aC]: [
      () => void 0 !== output.headers[_xalac],
      () => __LazyJsonString.from(Buffer.from(context.base64Decoder(output.headers[_xalac])).toString("utf8")),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.audioStream = data;
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
    case "BadRequestException":
    case "com.amazonaws.lexruntimeservice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lexruntimeservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.lexruntimeservice#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.lexruntimeservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.lexruntimeservice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.lexruntimeservice#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.lexruntimeservice#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "LoopDetectedException":
    case "com.amazonaws.lexruntimeservice#LoopDetectedException":
      throw await de_LoopDetectedExceptionRes(parsedOutput, context);
    case "NotAcceptableException":
    case "com.amazonaws.lexruntimeservice#NotAcceptableException":
      throw await de_NotAcceptableExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
      throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadGatewayException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyFailedExceptionRes
 */
const de_DependencyFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LoopDetectedExceptionRes
 */
const de_LoopDetectedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoopDetectedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LoopDetectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAcceptableExceptionRes
 */
const de_NotAcceptableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAcceptableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotAcceptableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedMediaTypeExceptionRes
 */
const de_UnsupportedMediaTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActiveContext omitted.

// se_ActiveContextParametersMap omitted.

// se_ActiveContextsList omitted.

// se_ActiveContextTimeToLive omitted.

// se_DialogAction omitted.

// se_IntentSummary omitted.

// se_IntentSummaryList omitted.

// se_StringMap omitted.

// de_ActiveContext omitted.

// de_ActiveContextParametersMap omitted.

// de_ActiveContextsList omitted.

// de_ActiveContextTimeToLive omitted.

// de_Button omitted.

// de_DialogAction omitted.

// de_GenericAttachment omitted.

// de_genericAttachmentList omitted.

/**
 * deserializeAws_restJson1IntentConfidence
 */
const de_IntentConfidence = (output: any, context: __SerdeContext): IntentConfidence => {
  return take(output, {
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1IntentList
 */
const de_IntentList = (output: any, context: __SerdeContext): PredictedIntent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictedIntent(entry, context);
    });
  return retVal;
};

// de_IntentSummary omitted.

// de_IntentSummaryList omitted.

// de_listOfButtons omitted.

/**
 * deserializeAws_restJson1PredictedIntent
 */
const de_PredictedIntent = (output: any, context: __SerdeContext): PredictedIntent => {
  return take(output, {
    intentName: __expectString,
    nluIntentConfidence: (_: any) => de_IntentConfidence(_, context),
    slots: _json,
  }) as any;
};

// de_ResponseCard omitted.

// de_SentimentResponse omitted.

// de_StringMap omitted.

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

const _a = "accept";
const _aC = "activeContexts";
const _aI = "alternativeIntents";
const _bV = "botVersion";
const _cLF = "checkpointLabelFilter";
const _cT = "contentType";
const _ct = "content-type";
const _dS = "dialogState";
const _eIT = "encodedInputTranscript";
const _eM = "encodedMessage";
const _iN = "intentName";
const _iT = "inputTranscript";
const _m = "message";
const _mF = "messageFormat";
const _nIC = "nluIntentConfidence";
const _rA = "requestAttributes";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "slots";
const _sA = "sessionAttributes";
const _sI = "sessionId";
const _sR = "sentimentResponse";
const _sTE = "slotToElicit";
const _xalac = "x-amz-lex-active-contexts";
const _xalai = "x-amz-lex-alternative-intents";
const _xalbv = "x-amz-lex-bot-version";
const _xalds = "x-amz-lex-dialog-state";
const _xaleit = "x-amz-lex-encoded-input-transcript";
const _xalem = "x-amz-lex-encoded-message";
const _xalin = "x-amz-lex-intent-name";
const _xalit = "x-amz-lex-input-transcript";
const _xalm = "x-amz-lex-message";
const _xalmf = "x-amz-lex-message-format";
const _xalnic = "x-amz-lex-nlu-intent-confidence";
const _xalra = "x-amz-lex-request-attributes";
const _xals = "x-amz-lex-slots";
const _xals_ = "x-amz-lex-sentiment";
const _xalsa = "x-amz-lex-session-attributes";
const _xalsi = "x-amz-lex-session-id";
const _xalste = "x-amz-lex-slot-to-elicit";
