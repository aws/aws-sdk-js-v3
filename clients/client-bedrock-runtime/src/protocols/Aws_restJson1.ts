// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { ApplyGuardrailCommandInput, ApplyGuardrailCommandOutput } from "../commands/ApplyGuardrailCommand";
import { ConverseCommandInput, ConverseCommandOutput } from "../commands/ConverseCommand";
import { ConverseStreamCommandInput, ConverseStreamCommandOutput } from "../commands/ConverseStreamCommand";
import { CountTokensCommandInput, CountTokensCommandOutput } from "../commands/CountTokensCommand";
import { GetAsyncInvokeCommandInput, GetAsyncInvokeCommandOutput } from "../commands/GetAsyncInvokeCommand";
import { InvokeModelCommandInput, InvokeModelCommandOutput } from "../commands/InvokeModelCommand";
import {
  InvokeModelWithBidirectionalStreamCommandInput,
  InvokeModelWithBidirectionalStreamCommandOutput,
} from "../commands/InvokeModelWithBidirectionalStreamCommand";
import {
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
} from "../commands/InvokeModelWithResponseStreamCommand";
import { ListAsyncInvokesCommandInput, ListAsyncInvokesCommandOutput } from "../commands/ListAsyncInvokesCommand";
import { StartAsyncInvokeCommandInput, StartAsyncInvokeCommandOutput } from "../commands/StartAsyncInvokeCommand";
import { BedrockRuntimeServiceException as __BaseException } from "../models/BedrockRuntimeServiceException";
import {
  AccessDeniedException,
  AnyToolChoice,
  AsyncInvokeOutputDataConfig,
  AsyncInvokeS3OutputDataConfig,
  AsyncInvokeSummary,
  AutoToolChoice,
  BidirectionalInputPayloadPart,
  BidirectionalOutputPayloadPart,
  CachePointBlock,
  Citation,
  CitationGeneratedContent,
  CitationLocation,
  CitationsConfig,
  CitationsContentBlock,
  CitationSourceContent,
  ConflictException,
  ContentBlock,
  ContentBlockDelta,
  ContentBlockDeltaEvent,
  ContentBlockStartEvent,
  ContentBlockStopEvent,
  ConverseOutput,
  ConverseStreamMetadataEvent,
  ConverseStreamOutput,
  ConverseStreamTrace,
  ConverseTokensRequest,
  ConverseTrace,
  CountTokensInput,
  DocumentBlock,
  DocumentCharLocation,
  DocumentChunkLocation,
  DocumentContentBlock,
  DocumentPageLocation,
  DocumentSource,
  GuardrailAssessment,
  GuardrailAutomatedReasoningFinding,
  GuardrailAutomatedReasoningImpossibleFinding,
  GuardrailAutomatedReasoningInvalidFinding,
  GuardrailAutomatedReasoningPolicyAssessment,
  GuardrailAutomatedReasoningSatisfiableFinding,
  GuardrailAutomatedReasoningTranslation,
  GuardrailAutomatedReasoningTranslationAmbiguousFinding,
  GuardrailAutomatedReasoningTranslationOption,
  GuardrailAutomatedReasoningValidFinding,
  GuardrailConfiguration,
  GuardrailContentBlock,
  GuardrailContentQualifier,
  GuardrailContextualGroundingFilter,
  GuardrailContextualGroundingPolicyAssessment,
  GuardrailConverseContentBlock,
  GuardrailConverseContentQualifier,
  GuardrailConverseImageBlock,
  GuardrailConverseImageSource,
  GuardrailConverseTextBlock,
  GuardrailImageBlock,
  GuardrailImageSource,
  GuardrailStreamConfiguration,
  GuardrailTextBlock,
  GuardrailTraceAssessment,
  ImageBlock,
  ImageSource,
  InferenceConfiguration,
  InternalServerException,
  InvokeModelTokensRequest,
  InvokeModelWithBidirectionalStreamInput,
  InvokeModelWithBidirectionalStreamOutput,
  Message,
  MessageStartEvent,
  MessageStopEvent,
  ModelErrorException,
  ModelNotReadyException,
  ModelStreamErrorException,
  ModelTimeoutException,
  PayloadPart,
  PerformanceConfiguration,
  PromptVariableValues,
  ReasoningContentBlock,
  ReasoningContentBlockDelta,
  ReasoningTextBlock,
  ResourceNotFoundException,
  ResponseStream,
  S3Location,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SpecificToolChoice,
  SystemContentBlock,
  Tag,
  ThrottlingException,
  Tool,
  ToolChoice,
  ToolConfiguration,
  ToolInputSchema,
  ToolResultBlock,
  ToolResultContentBlock,
  ToolSpecification,
  ToolUseBlock,
  ValidationException,
  VideoBlock,
  VideoSource,
} from "../models/models_0";

/**
 * serializeAws_restJson1ApplyGuardrailCommand
 */
export const se_ApplyGuardrailCommand = async (
  input: ApplyGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier!, "{guardrailIdentifier}", false);
  b.p("guardrailVersion", () => input.guardrailVersion!, "{guardrailVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      content: (_) => se_GuardrailContentBlockList(_, context),
      outputScope: [],
      source: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConverseCommand
 */
export const se_ConverseCommand = async (
  input: ConverseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model/{modelId}/converse");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalModelRequestFields: (_) => se_Document(_, context),
      additionalModelResponseFieldPaths: (_) => _json(_),
      guardrailConfig: (_) => _json(_),
      inferenceConfig: (_) => se_InferenceConfiguration(_, context),
      messages: (_) => se_Messages(_, context),
      performanceConfig: (_) => _json(_),
      promptVariables: (_) => _json(_),
      requestMetadata: (_) => _json(_),
      system: (_) => se_SystemContentBlocks(_, context),
      toolConfig: (_) => se_ToolConfiguration(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConverseStreamCommand
 */
export const se_ConverseStreamCommand = async (
  input: ConverseStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model/{modelId}/converse-stream");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalModelRequestFields: (_) => se_Document(_, context),
      additionalModelResponseFieldPaths: (_) => _json(_),
      guardrailConfig: (_) => _json(_),
      inferenceConfig: (_) => se_InferenceConfiguration(_, context),
      messages: (_) => se_Messages(_, context),
      performanceConfig: (_) => _json(_),
      promptVariables: (_) => _json(_),
      requestMetadata: (_) => _json(_),
      system: (_) => se_SystemContentBlocks(_, context),
      toolConfig: (_) => se_ToolConfiguration(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CountTokensCommand
 */
export const se_CountTokensCommand = async (
  input: CountTokensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model/{modelId}/count-tokens");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      input: (_) => se_CountTokensInput(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAsyncInvokeCommand
 */
export const se_GetAsyncInvokeCommand = async (
  input: GetAsyncInvokeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/async-invoke/{invocationArn}");
  b.p("invocationArn", () => input.invocationArn!, "{invocationArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeModelCommand
 */
export const se_InvokeModelCommand = async (
  input: InvokeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
    [_a]: input[_a]!,
    [_xabt]: input[_t]!,
    [_xabg]: input[_gI]!,
    [_xabg_]: input[_gV]!,
    [_xabpl]: input[_pCL]!,
  });
  b.bp("/model/{modelId}/invoke");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeModelWithBidirectionalStreamCommand
 */
export const se_InvokeModelWithBidirectionalStreamCommand = async (
  input: InvokeModelWithBidirectionalStreamCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model/{modelId}/invoke-with-bidirectional-stream");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  if (input.body !== undefined) {
    body = se_InvokeModelWithBidirectionalStreamInput(input.body, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeModelWithResponseStreamCommand
 */
export const se_InvokeModelWithResponseStreamCommand = async (
  input: InvokeModelWithResponseStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
    [_xaba]: input[_a]!,
    [_xabt]: input[_t]!,
    [_xabg]: input[_gI]!,
    [_xabg_]: input[_gV]!,
    [_xabpl]: input[_pCL]!,
  });
  b.bp("/model/{modelId}/invoke-with-response-stream");
  b.p("modelId", () => input.modelId!, "{modelId}", false);
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAsyncInvokesCommand
 */
export const se_ListAsyncInvokesCommand = async (
  input: ListAsyncInvokesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/async-invoke");
  const query: any = map({
    [_sTA]: [() => input.submitTimeAfter !== void 0, () => __serializeDateTime(input[_sTA]!).toString()],
    [_sTB]: [() => input.submitTimeBefore !== void 0, () => __serializeDateTime(input[_sTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAsyncInvokeCommand
 */
export const se_StartAsyncInvokeCommand = async (
  input: StartAsyncInvokeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/async-invoke");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modelId: [],
      modelInput: (_) => se_ModelInputPayload(_, context),
      outputDataConfig: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ApplyGuardrailCommand
 */
export const de_ApplyGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyGuardrailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    action: __expectString,
    actionReason: __expectString,
    assessments: (_) => de_GuardrailAssessmentList(_, context),
    guardrailCoverage: _json,
    outputs: _json,
    usage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConverseCommand
 */
export const de_ConverseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConverseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    additionalModelResponseFields: (_) => de_Document(_, context),
    metrics: _json,
    output: (_) => de_ConverseOutput(__expectUnion(_), context),
    performanceConfig: _json,
    stopReason: __expectString,
    trace: (_) => de_ConverseTrace(_, context),
    usage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConverseStreamCommand
 */
export const de_ConverseStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<ConverseStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.stream = de_ConverseStreamOutput(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CountTokensCommand
 */
export const de_CountTokensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountTokensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inputTokens: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAsyncInvokeCommand
 */
export const de_GetAsyncInvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAsyncInvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientRequestToken: __expectString,
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    invocationArn: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    outputDataConfig: (_) => _json(__expectUnion(_)),
    status: __expectString,
    submitTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeModelCommand
 */
export const de_InvokeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_pCL]: [, output.headers[_xabpl]],
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
  return contents;
};

/**
 * deserializeAws_restJson1InvokeModelWithBidirectionalStreamCommand
 */
export const de_InvokeModelWithBidirectionalStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeModelWithBidirectionalStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.body = de_InvokeModelWithBidirectionalStreamOutput(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeModelWithResponseStreamCommand
 */
export const de_InvokeModelWithResponseStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeModelWithResponseStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_xabct]],
    [_pCL]: [, output.headers[_xabpl]],
  });
  const data: any = output.body;
  contents.body = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListAsyncInvokesCommand
 */
export const de_ListAsyncInvokesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAsyncInvokesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    asyncInvokeSummaries: (_) => de_AsyncInvokeSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartAsyncInvokeCommand
 */
export const de_StartAsyncInvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAsyncInvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationArn: __expectString,
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
    case "AccessDeniedException":
    case "com.amazonaws.bedrockruntime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockruntime#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.bedrockruntime#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ModelErrorException":
    case "com.amazonaws.bedrockruntime#ModelErrorException":
      throw await de_ModelErrorExceptionRes(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.bedrockruntime#ModelNotReadyException":
      throw await de_ModelNotReadyExceptionRes(parsedOutput, context);
    case "ModelTimeoutException":
    case "com.amazonaws.bedrockruntime#ModelTimeoutException":
      throw await de_ModelTimeoutExceptionRes(parsedOutput, context);
    case "ModelStreamErrorException":
    case "com.amazonaws.bedrockruntime#ModelStreamErrorException":
      throw await de_ModelStreamErrorExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockruntime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelErrorExceptionRes
 */
const de_ModelErrorExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ModelErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    originalStatusCode: __expectInt32,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ModelErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelNotReadyExceptionRes
 */
const de_ModelNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ModelNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelStreamErrorExceptionRes
 */
const de_ModelStreamErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelStreamErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    originalMessage: __expectString,
    originalStatusCode: __expectInt32,
  });
  Object.assign(contents, doc);
  const exception = new ModelStreamErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelTimeoutExceptionRes
 */
const de_ModelTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ModelTimeoutException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1InvokeModelWithBidirectionalStreamInput
 */
const se_InvokeModelWithBidirectionalStreamInput = (
  input: any,
  context: __SerdeContext & __EventStreamSerdeContext
): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    InvokeModelWithBidirectionalStreamInput.visit(event, {
      chunk: (value) => se_BidirectionalInputPayloadPart_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const se_BidirectionalInputPayloadPart_event = (
  input: BidirectionalInputPayloadPart,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "chunk" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_BidirectionalInputPayloadPart(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
/**
 * deserializeAws_restJson1ConverseStreamOutput
 */
const de_ConverseStreamOutput = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<ConverseStreamOutput> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["messageStart"] != null) {
      return {
        messageStart: await de_MessageStartEvent_event(event["messageStart"], context),
      };
    }
    if (event["contentBlockStart"] != null) {
      return {
        contentBlockStart: await de_ContentBlockStartEvent_event(event["contentBlockStart"], context),
      };
    }
    if (event["contentBlockDelta"] != null) {
      return {
        contentBlockDelta: await de_ContentBlockDeltaEvent_event(event["contentBlockDelta"], context),
      };
    }
    if (event["contentBlockStop"] != null) {
      return {
        contentBlockStop: await de_ContentBlockStopEvent_event(event["contentBlockStop"], context),
      };
    }
    if (event["messageStop"] != null) {
      return {
        messageStop: await de_MessageStopEvent_event(event["messageStop"], context),
      };
    }
    if (event["metadata"] != null) {
      return {
        metadata: await de_ConverseStreamMetadataEvent_event(event["metadata"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        ),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_restJson1InvokeModelWithBidirectionalStreamOutput
 */
const de_InvokeModelWithBidirectionalStreamOutput = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<InvokeModelWithBidirectionalStreamOutput> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_BidirectionalOutputPayloadPart_event(event["chunk"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        ),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["modelTimeoutException"] != null) {
      return {
        modelTimeoutException: await de_ModelTimeoutException_event(event["modelTimeoutException"], context),
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_restJson1ResponseStream
 */
const de_ResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<ResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_PayloadPart_event(event["chunk"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        ),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["modelTimeoutException"] != null) {
      return {
        modelTimeoutException: await de_ModelTimeoutException_event(event["modelTimeoutException"], context),
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
const de_BidirectionalOutputPayloadPart_event = async (
  output: any,
  context: __SerdeContext
): Promise<BidirectionalOutputPayloadPart> => {
  const contents: BidirectionalOutputPayloadPart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_BidirectionalOutputPayloadPart(data, context));
  return contents;
};
const de_ContentBlockDeltaEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContentBlockDeltaEvent> => {
  const contents: ContentBlockDeltaEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_ContentBlockDeltaEvent(data, context));
  return contents;
};
const de_ContentBlockStartEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContentBlockStartEvent> => {
  const contents: ContentBlockStartEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ContentBlockStopEvent_event = async (output: any, context: __SerdeContext): Promise<ContentBlockStopEvent> => {
  const contents: ContentBlockStopEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ConverseStreamMetadataEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConverseStreamMetadataEvent> => {
  const contents: ConverseStreamMetadataEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_ConverseStreamMetadataEvent(data, context));
  return contents;
};
const de_InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalServerExceptionRes(parsedOutput, context);
};
const de_MessageStartEvent_event = async (output: any, context: __SerdeContext): Promise<MessageStartEvent> => {
  const contents: MessageStartEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_MessageStopEvent_event = async (output: any, context: __SerdeContext): Promise<MessageStopEvent> => {
  const contents: MessageStopEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_MessageStopEvent(data, context));
  return contents;
};
const de_ModelStreamErrorException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ModelStreamErrorException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ModelStreamErrorExceptionRes(parsedOutput, context);
};
const de_ModelTimeoutException_event = async (output: any, context: __SerdeContext): Promise<ModelTimeoutException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ModelTimeoutExceptionRes(parsedOutput, context);
};
const de_PayloadPart_event = async (output: any, context: __SerdeContext): Promise<PayloadPart> => {
  const contents: PayloadPart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_PayloadPart(data, context));
  return contents;
};
const de_ServiceUnavailableException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceUnavailableExceptionRes(parsedOutput, context);
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
// se_AdditionalModelResponseFieldPaths omitted.

// se_AnyToolChoice omitted.

// se_AsyncInvokeOutputDataConfig omitted.

// se_AsyncInvokeS3OutputDataConfig omitted.

// se_AutoToolChoice omitted.

/**
 * serializeAws_restJson1BidirectionalInputPayloadPart
 */
const se_BidirectionalInputPayloadPart = (input: BidirectionalInputPayloadPart, context: __SerdeContext): any => {
  return take(input, {
    bytes: context.base64Encoder,
  });
};

// se_CachePointBlock omitted.

// se_Citation omitted.

// se_CitationGeneratedContent omitted.

// se_CitationGeneratedContentList omitted.

// se_CitationLocation omitted.

// se_Citations omitted.

// se_CitationsConfig omitted.

// se_CitationsContentBlock omitted.

// se_CitationSourceContent omitted.

// se_CitationSourceContentList omitted.

/**
 * serializeAws_restJson1ContentBlock
 */
const se_ContentBlock = (input: ContentBlock, context: __SerdeContext): any => {
  return ContentBlock.visit(input, {
    cachePoint: (value) => ({ cachePoint: _json(value) }),
    citationsContent: (value) => ({ citationsContent: _json(value) }),
    document: (value) => ({ document: se_DocumentBlock(value, context) }),
    guardContent: (value) => ({ guardContent: se_GuardrailConverseContentBlock(value, context) }),
    image: (value) => ({ image: se_ImageBlock(value, context) }),
    reasoningContent: (value) => ({ reasoningContent: se_ReasoningContentBlock(value, context) }),
    text: (value) => ({ text: value }),
    toolResult: (value) => ({ toolResult: se_ToolResultBlock(value, context) }),
    toolUse: (value) => ({ toolUse: se_ToolUseBlock(value, context) }),
    video: (value) => ({ video: se_VideoBlock(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1ContentBlocks
 */
const se_ContentBlocks = (input: ContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContentBlock(entry, context);
    });
};

/**
 * serializeAws_restJson1ConverseTokensRequest
 */
const se_ConverseTokensRequest = (input: ConverseTokensRequest, context: __SerdeContext): any => {
  return take(input, {
    messages: (_) => se_Messages(_, context),
    system: (_) => se_SystemContentBlocks(_, context),
  });
};

/**
 * serializeAws_restJson1CountTokensInput
 */
const se_CountTokensInput = (input: CountTokensInput, context: __SerdeContext): any => {
  return CountTokensInput.visit(input, {
    converse: (value) => ({ converse: se_ConverseTokensRequest(value, context) }),
    invokeModel: (value) => ({ invokeModel: se_InvokeModelTokensRequest(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1DocumentBlock
 */
const se_DocumentBlock = (input: DocumentBlock, context: __SerdeContext): any => {
  return take(input, {
    citations: _json,
    context: [],
    format: [],
    name: [],
    source: (_) => se_DocumentSource(_, context),
  });
};

// se_DocumentCharLocation omitted.

// se_DocumentChunkLocation omitted.

// se_DocumentContentBlock omitted.

// se_DocumentContentBlocks omitted.

// se_DocumentPageLocation omitted.

/**
 * serializeAws_restJson1DocumentSource
 */
const se_DocumentSource = (input: DocumentSource, context: __SerdeContext): any => {
  return DocumentSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    content: (value) => ({ content: _json(value) }),
    s3Location: (value) => ({ s3Location: _json(value) }),
    text: (value) => ({ text: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_GuardrailConfiguration omitted.

/**
 * serializeAws_restJson1GuardrailContentBlock
 */
const se_GuardrailContentBlock = (input: GuardrailContentBlock, context: __SerdeContext): any => {
  return GuardrailContentBlock.visit(input, {
    image: (value) => ({ image: se_GuardrailImageBlock(value, context) }),
    text: (value) => ({ text: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1GuardrailContentBlockList
 */
const se_GuardrailContentBlockList = (input: GuardrailContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GuardrailContentBlock(entry, context);
    });
};

// se_GuardrailContentQualifierList omitted.

/**
 * serializeAws_restJson1GuardrailConverseContentBlock
 */
const se_GuardrailConverseContentBlock = (input: GuardrailConverseContentBlock, context: __SerdeContext): any => {
  return GuardrailConverseContentBlock.visit(input, {
    image: (value) => ({ image: se_GuardrailConverseImageBlock(value, context) }),
    text: (value) => ({ text: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_GuardrailConverseContentQualifierList omitted.

/**
 * serializeAws_restJson1GuardrailConverseImageBlock
 */
const se_GuardrailConverseImageBlock = (input: GuardrailConverseImageBlock, context: __SerdeContext): any => {
  return take(input, {
    format: [],
    source: (_) => se_GuardrailConverseImageSource(_, context),
  });
};

/**
 * serializeAws_restJson1GuardrailConverseImageSource
 */
const se_GuardrailConverseImageSource = (input: GuardrailConverseImageSource, context: __SerdeContext): any => {
  return GuardrailConverseImageSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_GuardrailConverseTextBlock omitted.

/**
 * serializeAws_restJson1GuardrailImageBlock
 */
const se_GuardrailImageBlock = (input: GuardrailImageBlock, context: __SerdeContext): any => {
  return take(input, {
    format: [],
    source: (_) => se_GuardrailImageSource(_, context),
  });
};

/**
 * serializeAws_restJson1GuardrailImageSource
 */
const se_GuardrailImageSource = (input: GuardrailImageSource, context: __SerdeContext): any => {
  return GuardrailImageSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_GuardrailStreamConfiguration omitted.

// se_GuardrailTextBlock omitted.

/**
 * serializeAws_restJson1ImageBlock
 */
const se_ImageBlock = (input: ImageBlock, context: __SerdeContext): any => {
  return take(input, {
    format: [],
    source: (_) => se_ImageSource(_, context),
  });
};

/**
 * serializeAws_restJson1ImageSource
 */
const se_ImageSource = (input: ImageSource, context: __SerdeContext): any => {
  return ImageSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    s3Location: (value) => ({ s3Location: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1InferenceConfiguration
 */
const se_InferenceConfiguration = (input: InferenceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    maxTokens: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topP: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1InvokeModelTokensRequest
 */
const se_InvokeModelTokensRequest = (input: InvokeModelTokensRequest, context: __SerdeContext): any => {
  return take(input, {
    body: context.base64Encoder,
  });
};

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return take(input, {
    content: (_) => se_ContentBlocks(_, context),
    role: [],
  });
};

/**
 * serializeAws_restJson1Messages
 */
const se_Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Message(entry, context);
    });
};

/**
 * serializeAws_restJson1ModelInputPayload
 */
const se_ModelInputPayload = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_NonEmptyStringList omitted.

// se_PerformanceConfiguration omitted.

// se_PromptVariableMap omitted.

// se_PromptVariableValues omitted.

/**
 * serializeAws_restJson1ReasoningContentBlock
 */
const se_ReasoningContentBlock = (input: ReasoningContentBlock, context: __SerdeContext): any => {
  return ReasoningContentBlock.visit(input, {
    reasoningText: (value) => ({ reasoningText: _json(value) }),
    redactedContent: (value) => ({ redactedContent: context.base64Encoder(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_ReasoningTextBlock omitted.

// se_RequestMetadata omitted.

// se_S3Location omitted.

// se_SpecificToolChoice omitted.

/**
 * serializeAws_restJson1SystemContentBlock
 */
const se_SystemContentBlock = (input: SystemContentBlock, context: __SerdeContext): any => {
  return SystemContentBlock.visit(input, {
    cachePoint: (value) => ({ cachePoint: _json(value) }),
    guardContent: (value) => ({ guardContent: se_GuardrailConverseContentBlock(value, context) }),
    text: (value) => ({ text: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1SystemContentBlocks
 */
const se_SystemContentBlocks = (input: SystemContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SystemContentBlock(entry, context);
    });
};

// se_Tag omitted.

// se_TagList omitted.

/**
 * serializeAws_restJson1Tool
 */
const se_Tool = (input: Tool, context: __SerdeContext): any => {
  return Tool.visit(input, {
    cachePoint: (value) => ({ cachePoint: _json(value) }),
    toolSpec: (value) => ({ toolSpec: se_ToolSpecification(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_ToolChoice omitted.

/**
 * serializeAws_restJson1ToolConfiguration
 */
const se_ToolConfiguration = (input: ToolConfiguration, context: __SerdeContext): any => {
  return take(input, {
    toolChoice: _json,
    tools: (_) => se_Tools(_, context),
  });
};

/**
 * serializeAws_restJson1ToolInputSchema
 */
const se_ToolInputSchema = (input: ToolInputSchema, context: __SerdeContext): any => {
  return ToolInputSchema.visit(input, {
    json: (value) => ({ json: se_Document(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1ToolResultBlock
 */
const se_ToolResultBlock = (input: ToolResultBlock, context: __SerdeContext): any => {
  return take(input, {
    content: (_) => se_ToolResultContentBlocks(_, context),
    status: [],
    toolUseId: [],
  });
};

/**
 * serializeAws_restJson1ToolResultContentBlock
 */
const se_ToolResultContentBlock = (input: ToolResultContentBlock, context: __SerdeContext): any => {
  return ToolResultContentBlock.visit(input, {
    document: (value) => ({ document: se_DocumentBlock(value, context) }),
    image: (value) => ({ image: se_ImageBlock(value, context) }),
    json: (value) => ({ json: se_Document(value, context) }),
    text: (value) => ({ text: value }),
    video: (value) => ({ video: se_VideoBlock(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1ToolResultContentBlocks
 */
const se_ToolResultContentBlocks = (input: ToolResultContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ToolResultContentBlock(entry, context);
    });
};

/**
 * serializeAws_restJson1Tools
 */
const se_Tools = (input: Tool[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tool(entry, context);
    });
};

/**
 * serializeAws_restJson1ToolSpecification
 */
const se_ToolSpecification = (input: ToolSpecification, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    inputSchema: (_) => se_ToolInputSchema(_, context),
    name: [],
  });
};

/**
 * serializeAws_restJson1ToolUseBlock
 */
const se_ToolUseBlock = (input: ToolUseBlock, context: __SerdeContext): any => {
  return take(input, {
    input: (_) => se_Document(_, context),
    name: [],
    toolUseId: [],
  });
};

/**
 * serializeAws_restJson1VideoBlock
 */
const se_VideoBlock = (input: VideoBlock, context: __SerdeContext): any => {
  return take(input, {
    format: [],
    source: (_) => se_VideoSource(_, context),
  });
};

/**
 * serializeAws_restJson1VideoSource
 */
const se_VideoSource = (input: VideoSource, context: __SerdeContext): any => {
  return VideoSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    s3Location: (value) => ({ s3Location: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_AsyncInvokeOutputDataConfig omitted.

// de_AsyncInvokeS3OutputDataConfig omitted.

/**
 * deserializeAws_restJson1AsyncInvokeSummaries
 */
const de_AsyncInvokeSummaries = (output: any, context: __SerdeContext): AsyncInvokeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AsyncInvokeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AsyncInvokeSummary
 */
const de_AsyncInvokeSummary = (output: any, context: __SerdeContext): AsyncInvokeSummary => {
  return take(output, {
    clientRequestToken: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    invocationArn: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    outputDataConfig: (_: any) => _json(__expectUnion(_)),
    status: __expectString,
    submitTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1BidirectionalOutputPayloadPart
 */
const de_BidirectionalOutputPayloadPart = (output: any, context: __SerdeContext): BidirectionalOutputPayloadPart => {
  return take(output, {
    bytes: context.base64Decoder,
  }) as any;
};

// de_CachePointBlock omitted.

// de_Citation omitted.

// de_CitationGeneratedContent omitted.

// de_CitationGeneratedContentList omitted.

// de_CitationLocation omitted.

// de_Citations omitted.

// de_CitationsConfig omitted.

// de_CitationsContentBlock omitted.

// de_CitationsDelta omitted.

// de_CitationSourceContent omitted.

// de_CitationSourceContentDelta omitted.

// de_CitationSourceContentList omitted.

// de_CitationSourceContentListDelta omitted.

/**
 * deserializeAws_restJson1ContentBlock
 */
const de_ContentBlock = (output: any, context: __SerdeContext): ContentBlock => {
  if (output.cachePoint != null) {
    return {
      cachePoint: _json(output.cachePoint),
    };
  }
  if (output.citationsContent != null) {
    return {
      citationsContent: _json(output.citationsContent),
    };
  }
  if (output.document != null) {
    return {
      document: de_DocumentBlock(output.document, context),
    };
  }
  if (output.guardContent != null) {
    return {
      guardContent: de_GuardrailConverseContentBlock(__expectUnion(output.guardContent), context),
    };
  }
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context),
    };
  }
  if (output.reasoningContent != null) {
    return {
      reasoningContent: de_ReasoningContentBlock(__expectUnion(output.reasoningContent), context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  if (output.toolResult != null) {
    return {
      toolResult: de_ToolResultBlock(output.toolResult, context),
    };
  }
  if (output.toolUse != null) {
    return {
      toolUse: de_ToolUseBlock(output.toolUse, context),
    };
  }
  if (output.video != null) {
    return {
      video: de_VideoBlock(output.video, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ContentBlockDelta
 */
const de_ContentBlockDelta = (output: any, context: __SerdeContext): ContentBlockDelta => {
  if (output.citation != null) {
    return {
      citation: _json(output.citation),
    };
  }
  if (output.reasoningContent != null) {
    return {
      reasoningContent: de_ReasoningContentBlockDelta(__expectUnion(output.reasoningContent), context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  if (output.toolUse != null) {
    return {
      toolUse: _json(output.toolUse),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ContentBlockDeltaEvent
 */
const de_ContentBlockDeltaEvent = (output: any, context: __SerdeContext): ContentBlockDeltaEvent => {
  return take(output, {
    contentBlockIndex: __expectInt32,
    delta: (_: any) => de_ContentBlockDelta(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1ContentBlocks
 */
const de_ContentBlocks = (output: any, context: __SerdeContext): ContentBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContentBlock(__expectUnion(entry), context);
    });
  return retVal;
};

// de_ContentBlockStart omitted.

// de_ContentBlockStartEvent omitted.

// de_ContentBlockStopEvent omitted.

// de_ConverseMetrics omitted.

/**
 * deserializeAws_restJson1ConverseOutput
 */
const de_ConverseOutput = (output: any, context: __SerdeContext): ConverseOutput => {
  if (output.message != null) {
    return {
      message: de_Message(output.message, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConverseStreamMetadataEvent
 */
const de_ConverseStreamMetadataEvent = (output: any, context: __SerdeContext): ConverseStreamMetadataEvent => {
  return take(output, {
    metrics: _json,
    performanceConfig: _json,
    trace: (_: any) => de_ConverseStreamTrace(_, context),
    usage: _json,
  }) as any;
};

// de_ConverseStreamMetrics omitted.

/**
 * deserializeAws_restJson1ConverseStreamTrace
 */
const de_ConverseStreamTrace = (output: any, context: __SerdeContext): ConverseStreamTrace => {
  return take(output, {
    guardrail: (_: any) => de_GuardrailTraceAssessment(_, context),
    promptRouter: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConverseTrace
 */
const de_ConverseTrace = (output: any, context: __SerdeContext): ConverseTrace => {
  return take(output, {
    guardrail: (_: any) => de_GuardrailTraceAssessment(_, context),
    promptRouter: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentBlock
 */
const de_DocumentBlock = (output: any, context: __SerdeContext): DocumentBlock => {
  return take(output, {
    citations: _json,
    context: __expectString,
    format: __expectString,
    name: __expectString,
    source: (_: any) => de_DocumentSource(__expectUnion(_), context),
  }) as any;
};

// de_DocumentCharLocation omitted.

// de_DocumentChunkLocation omitted.

// de_DocumentContentBlock omitted.

// de_DocumentContentBlocks omitted.

// de_DocumentPageLocation omitted.

/**
 * deserializeAws_restJson1DocumentSource
 */
const de_DocumentSource = (output: any, context: __SerdeContext): DocumentSource => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes),
    };
  }
  if (output.content != null) {
    return {
      content: _json(output.content),
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: _json(output.s3Location),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GuardrailAssessment
 */
const de_GuardrailAssessment = (output: any, context: __SerdeContext): GuardrailAssessment => {
  return take(output, {
    automatedReasoningPolicy: (_: any) => de_GuardrailAutomatedReasoningPolicyAssessment(_, context),
    contentPolicy: _json,
    contextualGroundingPolicy: (_: any) => de_GuardrailContextualGroundingPolicyAssessment(_, context),
    invocationMetrics: _json,
    sensitiveInformationPolicy: _json,
    topicPolicy: _json,
    wordPolicy: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailAssessmentList
 */
const de_GuardrailAssessmentList = (output: any, context: __SerdeContext): GuardrailAssessment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailAssessment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailAssessmentListMap
 */
const de_GuardrailAssessmentListMap = (output: any, context: __SerdeContext): Record<string, GuardrailAssessment[]> => {
  return Object.entries(output).reduce((acc: Record<string, GuardrailAssessment[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_GuardrailAssessmentList(value, context);
    return acc;
  }, {} as Record<string, GuardrailAssessment[]>);
};

/**
 * deserializeAws_restJson1GuardrailAssessmentMap
 */
const de_GuardrailAssessmentMap = (output: any, context: __SerdeContext): Record<string, GuardrailAssessment> => {
  return Object.entries(output).reduce((acc: Record<string, GuardrailAssessment>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_GuardrailAssessment(value, context);
    return acc;
  }, {} as Record<string, GuardrailAssessment>);
};

// de_GuardrailAutomatedReasoningDifferenceScenarioList omitted.

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningFinding
 */
const de_GuardrailAutomatedReasoningFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningFinding => {
  if (output.impossible != null) {
    return {
      impossible: de_GuardrailAutomatedReasoningImpossibleFinding(output.impossible, context),
    };
  }
  if (output.invalid != null) {
    return {
      invalid: de_GuardrailAutomatedReasoningInvalidFinding(output.invalid, context),
    };
  }
  if (output.noTranslations != null) {
    return {
      noTranslations: _json(output.noTranslations),
    };
  }
  if (output.satisfiable != null) {
    return {
      satisfiable: de_GuardrailAutomatedReasoningSatisfiableFinding(output.satisfiable, context),
    };
  }
  if (output.tooComplex != null) {
    return {
      tooComplex: _json(output.tooComplex),
    };
  }
  if (output.translationAmbiguous != null) {
    return {
      translationAmbiguous: de_GuardrailAutomatedReasoningTranslationAmbiguousFinding(
        output.translationAmbiguous,
        context
      ),
    };
  }
  if (output.valid != null) {
    return {
      valid: de_GuardrailAutomatedReasoningValidFinding(output.valid, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningFindingList
 */
const de_GuardrailAutomatedReasoningFindingList = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailAutomatedReasoningFinding(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningImpossibleFinding
 */
const de_GuardrailAutomatedReasoningImpossibleFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningImpossibleFinding => {
  return take(output, {
    contradictingRules: _json,
    logicWarning: _json,
    translation: (_: any) => de_GuardrailAutomatedReasoningTranslation(_, context),
  }) as any;
};

// de_GuardrailAutomatedReasoningInputTextReference omitted.

// de_GuardrailAutomatedReasoningInputTextReferenceList omitted.

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningInvalidFinding
 */
const de_GuardrailAutomatedReasoningInvalidFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningInvalidFinding => {
  return take(output, {
    contradictingRules: _json,
    logicWarning: _json,
    translation: (_: any) => de_GuardrailAutomatedReasoningTranslation(_, context),
  }) as any;
};

// de_GuardrailAutomatedReasoningLogicWarning omitted.

// de_GuardrailAutomatedReasoningNoTranslationsFinding omitted.

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningPolicyAssessment
 */
const de_GuardrailAutomatedReasoningPolicyAssessment = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningPolicyAssessment => {
  return take(output, {
    findings: (_: any) => de_GuardrailAutomatedReasoningFindingList(_, context),
  }) as any;
};

// de_GuardrailAutomatedReasoningRule omitted.

// de_GuardrailAutomatedReasoningRuleList omitted.

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningSatisfiableFinding
 */
const de_GuardrailAutomatedReasoningSatisfiableFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningSatisfiableFinding => {
  return take(output, {
    claimsFalseScenario: _json,
    claimsTrueScenario: _json,
    logicWarning: _json,
    translation: (_: any) => de_GuardrailAutomatedReasoningTranslation(_, context),
  }) as any;
};

// de_GuardrailAutomatedReasoningScenario omitted.

// de_GuardrailAutomatedReasoningStatement omitted.

// de_GuardrailAutomatedReasoningStatementList omitted.

// de_GuardrailAutomatedReasoningTooComplexFinding omitted.

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningTranslation
 */
const de_GuardrailAutomatedReasoningTranslation = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningTranslation => {
  return take(output, {
    claims: _json,
    confidence: __limitedParseDouble,
    premises: _json,
    untranslatedClaims: _json,
    untranslatedPremises: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningTranslationAmbiguousFinding
 */
const de_GuardrailAutomatedReasoningTranslationAmbiguousFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningTranslationAmbiguousFinding => {
  return take(output, {
    differenceScenarios: _json,
    options: (_: any) => de_GuardrailAutomatedReasoningTranslationOptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningTranslationList
 */
const de_GuardrailAutomatedReasoningTranslationList = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningTranslation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailAutomatedReasoningTranslation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningTranslationOption
 */
const de_GuardrailAutomatedReasoningTranslationOption = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningTranslationOption => {
  return take(output, {
    translations: (_: any) => de_GuardrailAutomatedReasoningTranslationList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningTranslationOptionList
 */
const de_GuardrailAutomatedReasoningTranslationOptionList = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningTranslationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailAutomatedReasoningTranslationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailAutomatedReasoningValidFinding
 */
const de_GuardrailAutomatedReasoningValidFinding = (
  output: any,
  context: __SerdeContext
): GuardrailAutomatedReasoningValidFinding => {
  return take(output, {
    claimsTrueScenario: _json,
    logicWarning: _json,
    supportingRules: _json,
    translation: (_: any) => de_GuardrailAutomatedReasoningTranslation(_, context),
  }) as any;
};

// de_GuardrailContentFilter omitted.

// de_GuardrailContentFilterList omitted.

// de_GuardrailContentPolicyAssessment omitted.

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFilter
 */
const de_GuardrailContextualGroundingFilter = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilter => {
  return take(output, {
    action: __expectString,
    detected: __expectBoolean,
    score: __limitedParseDouble,
    threshold: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFilters
 */
const de_GuardrailContextualGroundingFilters = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailContextualGroundingFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailContextualGroundingPolicyAssessment
 */
const de_GuardrailContextualGroundingPolicyAssessment = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingPolicyAssessment => {
  return take(output, {
    filters: (_: any) => de_GuardrailContextualGroundingFilters(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailConverseContentBlock
 */
const de_GuardrailConverseContentBlock = (output: any, context: __SerdeContext): GuardrailConverseContentBlock => {
  if (output.image != null) {
    return {
      image: de_GuardrailConverseImageBlock(output.image, context),
    };
  }
  if (output.text != null) {
    return {
      text: _json(output.text),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_GuardrailConverseContentQualifierList omitted.

/**
 * deserializeAws_restJson1GuardrailConverseImageBlock
 */
const de_GuardrailConverseImageBlock = (output: any, context: __SerdeContext): GuardrailConverseImageBlock => {
  return take(output, {
    format: __expectString,
    source: (_: any) => de_GuardrailConverseImageSource(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailConverseImageSource
 */
const de_GuardrailConverseImageSource = (output: any, context: __SerdeContext): GuardrailConverseImageSource => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_GuardrailConverseTextBlock omitted.

// de_GuardrailCoverage omitted.

// de_GuardrailCustomWord omitted.

// de_GuardrailCustomWordList omitted.

// de_GuardrailImageCoverage omitted.

// de_GuardrailInvocationMetrics omitted.

// de_GuardrailManagedWord omitted.

// de_GuardrailManagedWordList omitted.

// de_GuardrailOutputContent omitted.

// de_GuardrailOutputContentList omitted.

// de_GuardrailPiiEntityFilter omitted.

// de_GuardrailPiiEntityFilterList omitted.

// de_GuardrailRegexFilter omitted.

// de_GuardrailRegexFilterList omitted.

// de_GuardrailSensitiveInformationPolicyAssessment omitted.

// de_GuardrailTextCharactersCoverage omitted.

// de_GuardrailTopic omitted.

// de_GuardrailTopicList omitted.

// de_GuardrailTopicPolicyAssessment omitted.

/**
 * deserializeAws_restJson1GuardrailTraceAssessment
 */
const de_GuardrailTraceAssessment = (output: any, context: __SerdeContext): GuardrailTraceAssessment => {
  return take(output, {
    actionReason: __expectString,
    inputAssessment: (_: any) => de_GuardrailAssessmentMap(_, context),
    modelOutput: _json,
    outputAssessments: (_: any) => de_GuardrailAssessmentListMap(_, context),
  }) as any;
};

// de_GuardrailUsage omitted.

// de_GuardrailWordPolicyAssessment omitted.

/**
 * deserializeAws_restJson1ImageBlock
 */
const de_ImageBlock = (output: any, context: __SerdeContext): ImageBlock => {
  return take(output, {
    format: __expectString,
    source: (_: any) => de_ImageSource(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1ImageSource
 */
const de_ImageSource = (output: any, context: __SerdeContext): ImageSource => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes),
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: _json(output.s3Location),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return take(output, {
    content: (_: any) => de_ContentBlocks(_, context),
    role: __expectString,
  }) as any;
};

// de_MessageStartEvent omitted.

/**
 * deserializeAws_restJson1MessageStopEvent
 */
const de_MessageStopEvent = (output: any, context: __SerdeContext): MessageStopEvent => {
  return take(output, {
    additionalModelResponseFields: (_: any) => de_Document(_, context),
    stopReason: __expectString,
  }) as any;
};

// de_ModelOutputs omitted.

/**
 * deserializeAws_restJson1PayloadPart
 */
const de_PayloadPart = (output: any, context: __SerdeContext): PayloadPart => {
  return take(output, {
    bytes: context.base64Decoder,
  }) as any;
};

// de_PerformanceConfiguration omitted.

// de_PromptRouterTrace omitted.

/**
 * deserializeAws_restJson1ReasoningContentBlock
 */
const de_ReasoningContentBlock = (output: any, context: __SerdeContext): ReasoningContentBlock => {
  if (output.reasoningText != null) {
    return {
      reasoningText: _json(output.reasoningText),
    };
  }
  if (output.redactedContent != null) {
    return {
      redactedContent: context.base64Decoder(output.redactedContent),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ReasoningContentBlockDelta
 */
const de_ReasoningContentBlockDelta = (output: any, context: __SerdeContext): ReasoningContentBlockDelta => {
  if (output.redactedContent != null) {
    return {
      redactedContent: context.base64Decoder(output.redactedContent),
    };
  }
  if (__expectString(output.signature) !== undefined) {
    return { signature: __expectString(output.signature) as any };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ReasoningTextBlock omitted.

// de_S3Location omitted.

// de_TokenUsage omitted.

/**
 * deserializeAws_restJson1ToolResultBlock
 */
const de_ToolResultBlock = (output: any, context: __SerdeContext): ToolResultBlock => {
  return take(output, {
    content: (_: any) => de_ToolResultContentBlocks(_, context),
    status: __expectString,
    toolUseId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ToolResultContentBlock
 */
const de_ToolResultContentBlock = (output: any, context: __SerdeContext): ToolResultContentBlock => {
  if (output.document != null) {
    return {
      document: de_DocumentBlock(output.document, context),
    };
  }
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context),
    };
  }
  if (output.json != null) {
    return {
      json: de_Document(output.json, context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  if (output.video != null) {
    return {
      video: de_VideoBlock(output.video, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ToolResultContentBlocks
 */
const de_ToolResultContentBlocks = (output: any, context: __SerdeContext): ToolResultContentBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ToolResultContentBlock(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ToolUseBlock
 */
const de_ToolUseBlock = (output: any, context: __SerdeContext): ToolUseBlock => {
  return take(output, {
    input: (_: any) => de_Document(_, context),
    name: __expectString,
    toolUseId: __expectString,
  }) as any;
};

// de_ToolUseBlockDelta omitted.

// de_ToolUseBlockStart omitted.

/**
 * deserializeAws_restJson1VideoBlock
 */
const de_VideoBlock = (output: any, context: __SerdeContext): VideoBlock => {
  return take(output, {
    format: __expectString,
    source: (_: any) => de_VideoSource(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSource
 */
const de_VideoSource = (output: any, context: __SerdeContext): VideoSource => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes),
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: _json(output.s3Location),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

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
const _cT = "contentType";
const _ct = "content-type";
const _gI = "guardrailIdentifier";
const _gV = "guardrailVersion";
const _mR = "maxResults";
const _nT = "nextToken";
const _pCL = "performanceConfigLatency";
const _sB = "sortBy";
const _sE = "statusEquals";
const _sO = "sortOrder";
const _sTA = "submitTimeAfter";
const _sTB = "submitTimeBefore";
const _t = "trace";
const _xaba = "x-amzn-bedrock-accept";
const _xabct = "x-amzn-bedrock-content-type";
const _xabg = "x-amzn-bedrock-guardrailidentifier";
const _xabg_ = "x-amzn-bedrock-guardrailversion";
const _xabpl = "x-amzn-bedrock-performanceconfig-latency";
const _xabt = "x-amzn-bedrock-trace";
