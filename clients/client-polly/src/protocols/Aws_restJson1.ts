// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteLexiconCommandInput, DeleteLexiconCommandOutput } from "../commands/DeleteLexiconCommand";
import { DescribeVoicesCommandInput, DescribeVoicesCommandOutput } from "../commands/DescribeVoicesCommand";
import { GetLexiconCommandInput, GetLexiconCommandOutput } from "../commands/GetLexiconCommand";
import {
  GetSpeechSynthesisTaskCommandInput,
  GetSpeechSynthesisTaskCommandOutput,
} from "../commands/GetSpeechSynthesisTaskCommand";
import { ListLexiconsCommandInput, ListLexiconsCommandOutput } from "../commands/ListLexiconsCommand";
import {
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
} from "../commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommandInput, PutLexiconCommandOutput } from "../commands/PutLexiconCommand";
import {
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
} from "../commands/StartSpeechSynthesisTaskCommand";
import { SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput } from "../commands/SynthesizeSpeechCommand";
import {
  EngineNotSupportedException,
  InvalidLexiconException,
  InvalidNextTokenException,
  InvalidS3BucketException,
  InvalidS3KeyException,
  InvalidSampleRateException,
  InvalidSnsTopicArnException,
  InvalidSsmlException,
  InvalidTaskIdException,
  LanguageNotSupportedException,
  LexiconAttributes,
  LexiconDescription,
  LexiconNotFoundException,
  LexiconSizeExceededException,
  MarksNotSupportedForFormatException,
  MaxLexemeLengthExceededException,
  MaxLexiconsNumberExceededException,
  ServiceFailureException,
  SpeechMarkType,
  SsmlMarksNotSupportedForTextTypeException,
  SynthesisTask,
  SynthesisTaskNotFoundException,
  TextLengthExceededException,
  UnsupportedPlsAlphabetException,
  UnsupportedPlsLanguageException,
} from "../models/models_0";
import { PollyServiceException as __BaseException } from "../models/PollyServiceException";

/**
 * serializeAws_restJson1DeleteLexiconCommand
 */
export const se_DeleteLexiconCommand = async (
  input: DeleteLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/lexicons/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVoicesCommand
 */
export const se_DescribeVoicesCommand = async (
  input: DescribeVoicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/voices");
  const query: any = map({
    [_E]: [, input[_E]!],
    [_LC]: [, input[_LC]!],
    [_IALC]: [() => input.IncludeAdditionalLanguageCodes !== void 0, () => input[_IALC]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLexiconCommand
 */
export const se_GetLexiconCommand = async (
  input: GetLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/lexicons/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSpeechSynthesisTaskCommand
 */
export const se_GetSpeechSynthesisTaskCommand = async (
  input: GetSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/synthesisTasks/{TaskId}");
  b.p("TaskId", () => input.TaskId!, "{TaskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLexiconsCommand
 */
export const se_ListLexiconsCommand = async (
  input: ListLexiconsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/lexicons");
  const query: any = map({
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSpeechSynthesisTasksCommand
 */
export const se_ListSpeechSynthesisTasksCommand = async (
  input: ListSpeechSynthesisTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/synthesisTasks");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_S]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutLexiconCommand
 */
export const se_PutLexiconCommand = async (
  input: PutLexiconCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/lexicons/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSpeechSynthesisTaskCommand
 */
export const se_StartSpeechSynthesisTaskCommand = async (
  input: StartSpeechSynthesisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/synthesisTasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Engine: [],
      LanguageCode: [],
      LexiconNames: (_) => _json(_),
      OutputFormat: [],
      OutputS3BucketName: [],
      OutputS3KeyPrefix: [],
      SampleRate: [],
      SnsTopicArn: [],
      SpeechMarkTypes: (_) => _json(_),
      Text: [],
      TextType: [],
      VoiceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SynthesizeSpeechCommand
 */
export const se_SynthesizeSpeechCommand = async (
  input: SynthesizeSpeechCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/speech");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Engine: [],
      LanguageCode: [],
      LexiconNames: (_) => _json(_),
      OutputFormat: [],
      SampleRate: [],
      SpeechMarkTypes: (_) => _json(_),
      Text: [],
      TextType: [],
      VoiceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DeleteLexiconCommand
 */
export const de_DeleteLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVoicesCommand
 */
export const de_DescribeVoicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVoicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Voices: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLexiconCommand
 */
export const de_GetLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Lexicon: _json,
    LexiconAttributes: (_) => de_LexiconAttributes(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSpeechSynthesisTaskCommand
 */
export const de_GetSpeechSynthesisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeechSynthesisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SynthesisTask: (_) => de_SynthesisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLexiconsCommand
 */
export const de_ListLexiconsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLexiconsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Lexicons: (_) => de_LexiconDescriptionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSpeechSynthesisTasksCommand
 */
export const de_ListSpeechSynthesisTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeechSynthesisTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SynthesisTasks: (_) => de_SynthesisTasks(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutLexiconCommand
 */
export const de_PutLexiconCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLexiconCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartSpeechSynthesisTaskCommand
 */
export const de_StartSpeechSynthesisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeechSynthesisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SynthesisTask: (_) => de_SynthesisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SynthesizeSpeechCommand
 */
export const de_SynthesizeSpeechCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<SynthesizeSpeechCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_RC]: [() => void 0 !== output.headers[_xar], () => __strictParseInt32(output.headers[_xar])],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.AudioStream = data;
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
    case "LexiconNotFoundException":
    case "com.amazonaws.polly#LexiconNotFoundException":
      throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.polly#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.polly#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidTaskIdException":
    case "com.amazonaws.polly#InvalidTaskIdException":
      throw await de_InvalidTaskIdExceptionRes(parsedOutput, context);
    case "SynthesisTaskNotFoundException":
    case "com.amazonaws.polly#SynthesisTaskNotFoundException":
      throw await de_SynthesisTaskNotFoundExceptionRes(parsedOutput, context);
    case "InvalidLexiconException":
    case "com.amazonaws.polly#InvalidLexiconException":
      throw await de_InvalidLexiconExceptionRes(parsedOutput, context);
    case "LexiconSizeExceededException":
    case "com.amazonaws.polly#LexiconSizeExceededException":
      throw await de_LexiconSizeExceededExceptionRes(parsedOutput, context);
    case "MaxLexemeLengthExceededException":
    case "com.amazonaws.polly#MaxLexemeLengthExceededException":
      throw await de_MaxLexemeLengthExceededExceptionRes(parsedOutput, context);
    case "MaxLexiconsNumberExceededException":
    case "com.amazonaws.polly#MaxLexiconsNumberExceededException":
      throw await de_MaxLexiconsNumberExceededExceptionRes(parsedOutput, context);
    case "UnsupportedPlsAlphabetException":
    case "com.amazonaws.polly#UnsupportedPlsAlphabetException":
      throw await de_UnsupportedPlsAlphabetExceptionRes(parsedOutput, context);
    case "UnsupportedPlsLanguageException":
    case "com.amazonaws.polly#UnsupportedPlsLanguageException":
      throw await de_UnsupportedPlsLanguageExceptionRes(parsedOutput, context);
    case "EngineNotSupportedException":
    case "com.amazonaws.polly#EngineNotSupportedException":
      throw await de_EngineNotSupportedExceptionRes(parsedOutput, context);
    case "InvalidS3BucketException":
    case "com.amazonaws.polly#InvalidS3BucketException":
      throw await de_InvalidS3BucketExceptionRes(parsedOutput, context);
    case "InvalidS3KeyException":
    case "com.amazonaws.polly#InvalidS3KeyException":
      throw await de_InvalidS3KeyExceptionRes(parsedOutput, context);
    case "InvalidSampleRateException":
    case "com.amazonaws.polly#InvalidSampleRateException":
      throw await de_InvalidSampleRateExceptionRes(parsedOutput, context);
    case "InvalidSnsTopicArnException":
    case "com.amazonaws.polly#InvalidSnsTopicArnException":
      throw await de_InvalidSnsTopicArnExceptionRes(parsedOutput, context);
    case "InvalidSsmlException":
    case "com.amazonaws.polly#InvalidSsmlException":
      throw await de_InvalidSsmlExceptionRes(parsedOutput, context);
    case "LanguageNotSupportedException":
    case "com.amazonaws.polly#LanguageNotSupportedException":
      throw await de_LanguageNotSupportedExceptionRes(parsedOutput, context);
    case "MarksNotSupportedForFormatException":
    case "com.amazonaws.polly#MarksNotSupportedForFormatException":
      throw await de_MarksNotSupportedForFormatExceptionRes(parsedOutput, context);
    case "SsmlMarksNotSupportedForTextTypeException":
    case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
      throw await de_SsmlMarksNotSupportedForTextTypeExceptionRes(parsedOutput, context);
    case "TextLengthExceededException":
    case "com.amazonaws.polly#TextLengthExceededException":
      throw await de_TextLengthExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EngineNotSupportedExceptionRes
 */
const de_EngineNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EngineNotSupportedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new EngineNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidLexiconExceptionRes
 */
const de_InvalidLexiconExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLexiconException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidLexiconException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidS3BucketExceptionRes
 */
const de_InvalidS3BucketExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidS3BucketException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidS3KeyExceptionRes
 */
const de_InvalidS3KeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3KeyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidS3KeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSampleRateExceptionRes
 */
const de_InvalidSampleRateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSampleRateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidSampleRateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSnsTopicArnExceptionRes
 */
const de_InvalidSnsTopicArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicArnException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidSnsTopicArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSsmlExceptionRes
 */
const de_InvalidSsmlExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSsmlException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidSsmlException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidTaskIdExceptionRes
 */
const de_InvalidTaskIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTaskIdException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidTaskIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LanguageNotSupportedExceptionRes
 */
const de_LanguageNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LanguageNotSupportedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LanguageNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LexiconNotFoundExceptionRes
 */
const de_LexiconNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LexiconNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LexiconSizeExceededExceptionRes
 */
const de_LexiconSizeExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LexiconSizeExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LexiconSizeExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MarksNotSupportedForFormatExceptionRes
 */
const de_MarksNotSupportedForFormatExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarksNotSupportedForFormatException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MarksNotSupportedForFormatException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MaxLexemeLengthExceededExceptionRes
 */
const de_MaxLexemeLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexemeLengthExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MaxLexemeLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MaxLexiconsNumberExceededExceptionRes
 */
const de_MaxLexiconsNumberExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxLexiconsNumberExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MaxLexiconsNumberExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SsmlMarksNotSupportedForTextTypeExceptionRes
 */
const de_SsmlMarksNotSupportedForTextTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SsmlMarksNotSupportedForTextTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SsmlMarksNotSupportedForTextTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SynthesisTaskNotFoundExceptionRes
 */
const de_SynthesisTaskNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SynthesisTaskNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SynthesisTaskNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TextLengthExceededExceptionRes
 */
const de_TextLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextLengthExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TextLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedPlsAlphabetExceptionRes
 */
const de_UnsupportedPlsAlphabetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsAlphabetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedPlsAlphabetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedPlsLanguageExceptionRes
 */
const de_UnsupportedPlsLanguageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedPlsLanguageException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedPlsLanguageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_LexiconNameList omitted.

// se_SpeechMarkTypeList omitted.

// de_EngineList omitted.

// de_LanguageCodeList omitted.

// de_Lexicon omitted.

/**
 * deserializeAws_restJson1LexiconAttributes
 */
const de_LexiconAttributes = (output: any, context: __SerdeContext): LexiconAttributes => {
  return take(output, {
    Alphabet: __expectString,
    LanguageCode: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LexemesCount: __expectInt32,
    LexiconArn: __expectString,
    Size: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1LexiconDescription
 */
const de_LexiconDescription = (output: any, context: __SerdeContext): LexiconDescription => {
  return take(output, {
    Attributes: (_: any) => de_LexiconAttributes(_, context),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LexiconDescriptionList
 */
const de_LexiconDescriptionList = (output: any, context: __SerdeContext): LexiconDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LexiconDescription(entry, context);
    });
  return retVal;
};

// de_LexiconNameList omitted.

// de_SpeechMarkTypeList omitted.

/**
 * deserializeAws_restJson1SynthesisTask
 */
const de_SynthesisTask = (output: any, context: __SerdeContext): SynthesisTask => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Engine: __expectString,
    LanguageCode: __expectString,
    LexiconNames: _json,
    OutputFormat: __expectString,
    OutputUri: __expectString,
    RequestCharacters: __expectInt32,
    SampleRate: __expectString,
    SnsTopicArn: __expectString,
    SpeechMarkTypes: _json,
    TaskId: __expectString,
    TaskStatus: __expectString,
    TaskStatusReason: __expectString,
    TextType: __expectString,
    VoiceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SynthesisTasks
 */
const de_SynthesisTasks = (output: any, context: __SerdeContext): SynthesisTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SynthesisTask(entry, context);
    });
  return retVal;
};

// de_Voice omitted.

// de_VoiceList omitted.

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

const _CT = "ContentType";
const _E = "Engine";
const _IALC = "IncludeAdditionalLanguageCodes";
const _LC = "LanguageCode";
const _MR = "MaxResults";
const _NT = "NextToken";
const _RC = "RequestCharacters";
const _S = "Status";
const _ct = "content-type";
const _xar = "x-amzn-requestcharacters";
