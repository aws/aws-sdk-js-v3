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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ApplyGuardrailCommandInput, ApplyGuardrailCommandOutput } from "../commands/ApplyGuardrailCommand";
import { ConverseCommandInput, ConverseCommandOutput } from "../commands/ConverseCommand";
import { ConverseStreamCommandInput, ConverseStreamCommandOutput } from "../commands/ConverseStreamCommand";
import { InvokeModelCommandInput, InvokeModelCommandOutput } from "../commands/InvokeModelCommand";
import {
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
} from "../commands/InvokeModelWithResponseStreamCommand";
import { BedrockRuntimeServiceException as __BaseException } from "../models/BedrockRuntimeServiceException";
import {
  AccessDeniedException,
  AnyToolChoice,
  AutoToolChoice,
  ContentBlock,
  ContentBlockDeltaEvent,
  ContentBlockStartEvent,
  ContentBlockStopEvent,
  ConverseOutput,
  ConverseStreamMetadataEvent,
  ConverseStreamOutput,
  ConverseStreamTrace,
  ConverseTrace,
  DocumentBlock,
  DocumentSource,
  GuardrailAssessment,
  GuardrailConfiguration,
  GuardrailContentBlock,
  GuardrailContentQualifier,
  GuardrailContextualGroundingFilter,
  GuardrailContextualGroundingPolicyAssessment,
  GuardrailConverseContentBlock,
  GuardrailConverseContentQualifier,
  GuardrailConverseTextBlock,
  GuardrailStreamConfiguration,
  GuardrailTextBlock,
  GuardrailTraceAssessment,
  ImageBlock,
  ImageSource,
  InferenceConfiguration,
  InternalServerException,
  Message,
  MessageStartEvent,
  MessageStopEvent,
  ModelErrorException,
  ModelNotReadyException,
  ModelStreamErrorException,
  ModelTimeoutException,
  PayloadPart,
  PromptVariableValues,
  ResourceNotFoundException,
  ResponseStream,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SpecificToolChoice,
  SystemContentBlock,
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
      content: (_) => _json(_),
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
      promptVariables: (_) => _json(_),
      system: (_) => _json(_),
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
      promptVariables: (_) => _json(_),
      system: (_) => _json(_),
      toolConfig: (_) => se_ToolConfiguration(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
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
  });
  const data: any = await collectBody(output.body, context);
  contents.body = data;
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
  });
  const data: any = output.body;
  contents.body = de_ResponseStream(data, context);
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
    case "ServiceUnavailableException":
    case "com.amazonaws.bedrockruntime#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ModelStreamErrorException":
    case "com.amazonaws.bedrockruntime#ModelStreamErrorException":
      throw await de_ModelStreamErrorExceptionRes(parsedOutput, context);
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
    return { $unknown: output };
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
    return { $unknown: output };
  });
};
const de_ContentBlockDeltaEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ContentBlockDeltaEvent> => {
  const contents: ContentBlockDeltaEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
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

// se_AutoToolChoice omitted.

/**
 * serializeAws_restJson1ContentBlock
 */
const se_ContentBlock = (input: ContentBlock, context: __SerdeContext): any => {
  return ContentBlock.visit(input, {
    document: (value) => ({ document: se_DocumentBlock(value, context) }),
    guardContent: (value) => ({ guardContent: _json(value) }),
    image: (value) => ({ image: se_ImageBlock(value, context) }),
    text: (value) => ({ text: value }),
    toolResult: (value) => ({ toolResult: se_ToolResultBlock(value, context) }),
    toolUse: (value) => ({ toolUse: se_ToolUseBlock(value, context) }),
    _: (name, value) => ({ name: value } as any),
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
 * serializeAws_restJson1DocumentBlock
 */
const se_DocumentBlock = (input: DocumentBlock, context: __SerdeContext): any => {
  return take(input, {
    format: [],
    name: [],
    source: (_) => se_DocumentSource(_, context),
  });
};

/**
 * serializeAws_restJson1DocumentSource
 */
const se_DocumentSource = (input: DocumentSource, context: __SerdeContext): any => {
  return DocumentSource.visit(input, {
    bytes: (value) => ({ bytes: context.base64Encoder(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_GuardrailConfiguration omitted.

// se_GuardrailContentBlock omitted.

// se_GuardrailContentBlockList omitted.

// se_GuardrailContentQualifierList omitted.

// se_GuardrailConverseContentBlock omitted.

// se_GuardrailConverseContentQualifierList omitted.

// se_GuardrailConverseTextBlock omitted.

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
    _: (name, value) => ({ name: value } as any),
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

// se_NonEmptyStringList omitted.

// se_PromptVariableMap omitted.

// se_PromptVariableValues omitted.

// se_SpecificToolChoice omitted.

// se_SystemContentBlock omitted.

// se_SystemContentBlocks omitted.

/**
 * serializeAws_restJson1Tool
 */
const se_Tool = (input: Tool, context: __SerdeContext): any => {
  return Tool.visit(input, {
    toolSpec: (value) => ({ toolSpec: se_ToolSpecification(value, context) }),
    _: (name, value) => ({ name: value } as any),
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
    _: (name, value) => ({ name: value } as any),
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
    _: (name, value) => ({ name: value } as any),
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
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * deserializeAws_restJson1ContentBlock
 */
const de_ContentBlock = (output: any, context: __SerdeContext): ContentBlock => {
  if (output.document != null) {
    return {
      document: de_DocumentBlock(output.document, context),
    };
  }
  if (output.guardContent != null) {
    return {
      guardContent: _json(__expectUnion(output.guardContent)),
    };
  }
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context),
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
  return { $unknown: Object.entries(output)[0] };
};

// de_ContentBlockDelta omitted.

// de_ContentBlockDeltaEvent omitted.

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
  }) as any;
};

/**
 * deserializeAws_restJson1ConverseTrace
 */
const de_ConverseTrace = (output: any, context: __SerdeContext): ConverseTrace => {
  return take(output, {
    guardrail: (_: any) => de_GuardrailTraceAssessment(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentBlock
 */
const de_DocumentBlock = (output: any, context: __SerdeContext): DocumentBlock => {
  return take(output, {
    format: __expectString,
    name: __expectString,
    source: (_: any) => de_DocumentSource(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentSource
 */
const de_DocumentSource = (output: any, context: __SerdeContext): DocumentSource => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GuardrailAssessment
 */
const de_GuardrailAssessment = (output: any, context: __SerdeContext): GuardrailAssessment => {
  return take(output, {
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

// de_GuardrailConverseContentBlock omitted.

// de_GuardrailConverseContentQualifierList omitted.

// de_GuardrailConverseTextBlock omitted.

// de_GuardrailCoverage omitted.

// de_GuardrailCustomWord omitted.

// de_GuardrailCustomWordList omitted.

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
const _t = "trace";
const _xaba = "x-amzn-bedrock-accept";
const _xabct = "x-amzn-bedrock-content-type";
const _xabg = "x-amzn-bedrock-guardrailidentifier";
const _xabg_ = "x-amzn-bedrock-guardrailversion";
const _xabt = "x-amzn-bedrock-trace";
