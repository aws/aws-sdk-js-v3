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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

import { DeleteAgentMemoryCommandInput, DeleteAgentMemoryCommandOutput } from "../commands/DeleteAgentMemoryCommand";
import { GetAgentMemoryCommandInput, GetAgentMemoryCommandOutput } from "../commands/GetAgentMemoryCommand";
import { InvokeAgentCommandInput, InvokeAgentCommandOutput } from "../commands/InvokeAgentCommand";
import { InvokeFlowCommandInput, InvokeFlowCommandOutput } from "../commands/InvokeFlowCommand";
import { OptimizePromptCommandInput, OptimizePromptCommandOutput } from "../commands/OptimizePromptCommand";
import {
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
} from "../commands/RetrieveAndGenerateCommand";
import { RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import { BedrockAgentRuntimeServiceException as __BaseException } from "../models/BedrockAgentRuntimeServiceException";
import {
  AccessDeniedException,
  AnalyzePromptEvent,
  ApiResult,
  Attribution,
  BadGatewayException,
  ByteContentDoc,
  ByteContentFile,
  Citation,
  ConflictException,
  ContentBody,
  DependencyFailedException,
  ExternalSource,
  ExternalSourcesGenerationConfiguration,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  FilePart,
  FileSource,
  FilterAttribute,
  FlowCompletionEvent,
  FlowInput,
  FlowInputContent,
  FlowOutputContent,
  FlowOutputEvent,
  FlowResponseStream,
  FlowTrace,
  FlowTraceConditionNodeResultEvent,
  FlowTraceEvent,
  FlowTraceNodeInputContent,
  FlowTraceNodeInputEvent,
  FlowTraceNodeInputField,
  FlowTraceNodeOutputContent,
  FlowTraceNodeOutputEvent,
  FlowTraceNodeOutputField,
  FunctionResult,
  GenerationConfiguration,
  GuardrailConfiguration,
  InferenceConfig,
  InferenceConfiguration,
  InputFile,
  InputPrompt,
  InternalServerException,
  InvocationResultMember,
  KnowledgeBaseConfiguration,
  KnowledgeBaseLookupOutput,
  KnowledgeBaseQuery,
  KnowledgeBaseRetrievalConfiguration,
  KnowledgeBaseRetrievalResult,
  KnowledgeBaseRetrieveAndGenerateConfiguration,
  KnowledgeBaseVectorSearchConfiguration,
  Memory,
  MemorySessionSummary,
  ModelInvocationInput,
  Observation,
  OptimizedPromptEvent,
  OptimizedPromptStream,
  OrchestrationConfiguration,
  OrchestrationTrace,
  OutputFile,
  PayloadPart,
  PostProcessingTrace,
  PreProcessingTrace,
  PromptTemplate,
  QueryTransformationConfiguration,
  ResourceNotFoundException,
  ResponseStream,
  RetrievalFilter,
  RetrieveAndGenerateConfiguration,
  RetrieveAndGenerateInput,
  RetrieveAndGenerateSessionConfiguration,
  RetrievedReference,
  ReturnControlPayload,
  S3ObjectDoc,
  S3ObjectFile,
  ServiceQuotaExceededException,
  SessionState,
  TextInferenceConfig,
  TextPrompt,
  ThrottlingException,
  Trace,
  TracePart,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteAgentMemoryCommand
 */
export const se_DeleteAgentMemoryCommand = async (
  input: DeleteAgentMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentAliases/{agentAliasId}/memories");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  const query: any = map({
    [_mI]: [, input[_mI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentMemoryCommand
 */
export const se_GetAgentMemoryCommand = async (
  input: GetAgentMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentAliases/{agentAliasId}/memories");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mIa]: [() => input.maxItems !== void 0, () => input[_mIa]!.toString()],
    [_mT]: [, __expectNonNull(input[_mT]!, `memoryType`)],
    [_mI]: [, __expectNonNull(input[_mI]!, `memoryId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeAgentCommand
 */
export const se_InvokeAgentCommand = async (
  input: InvokeAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      enableTrace: [],
      endSession: [],
      inputText: [],
      memoryId: [],
      sessionState: (_) => se_SessionState(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeFlowCommand
 */
export const se_InvokeFlowCommand = async (
  input: InvokeFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("flowAliasIdentifier", () => input.flowAliasIdentifier!, "{flowAliasIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      enableTrace: [],
      inputs: (_) => se_FlowInputs(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OptimizePromptCommand
 */
export const se_OptimizePromptCommand = async (
  input: OptimizePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/optimize-prompt");
  let body: any;
  body = JSON.stringify(
    take(input, {
      input: (_) => _json(_),
      targetModelId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RetrieveCommand
 */
export const se_RetrieveCommand = async (
  input: RetrieveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/retrieve");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      nextToken: [],
      retrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
      retrievalQuery: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RetrieveAndGenerateCommand
 */
export const se_RetrieveAndGenerateCommand = async (
  input: RetrieveAndGenerateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/retrieveAndGenerate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      input: (_) => _json(_),
      retrieveAndGenerateConfiguration: (_) => se_RetrieveAndGenerateConfiguration(_, context),
      sessionConfiguration: (_) => _json(_),
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DeleteAgentMemoryCommand
 */
export const de_DeleteAgentMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentMemoryCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentMemoryCommand
 */
export const de_GetAgentMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentMemoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryContents: (_) => de_Memories(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAgentCommand
 */
export const de_InvokeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_xabact]],
    [_sI]: [, output.headers[_xabasi]],
    [_mI]: [, output.headers[_xabami]],
  });
  const data: any = output.body;
  contents.completion = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeFlowCommand
 */
export const de_InvokeFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.responseStream = de_FlowResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1OptimizePromptCommand
 */
export const de_OptimizePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<OptimizePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.optimizedPrompt = de_OptimizedPromptStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1RetrieveCommand
 */
export const de_RetrieveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    retrievalResults: (_) => de_KnowledgeBaseRetrievalResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RetrieveAndGenerateCommand
 */
export const de_RetrieveAndGenerateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveAndGenerateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    citations: (_) => de_Citations(_, context),
    guardrailAction: __expectString,
    output: _json,
    sessionId: __expectString,
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
    case "com.amazonaws.bedrockagentruntime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadGatewayException":
    case "com.amazonaws.bedrockagentruntime#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockagentruntime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.bedrockagentruntime#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockagentruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockagentruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockagentruntime#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockagentruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockagentruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadGatewayException({
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
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyFailedException({
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
 * deserializeAws_restJson1FlowResponseStream
 */
const de_FlowResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<FlowResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["flowOutputEvent"] != null) {
      return {
        flowOutputEvent: await de_FlowOutputEvent_event(event["flowOutputEvent"], context),
      };
    }
    if (event["flowCompletionEvent"] != null) {
      return {
        flowCompletionEvent: await de_FlowCompletionEvent_event(event["flowCompletionEvent"], context),
      };
    }
    if (event["flowTraceEvent"] != null) {
      return {
        flowTraceEvent: await de_FlowTraceEvent_event(event["flowTraceEvent"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["resourceNotFoundException"] != null) {
      return {
        resourceNotFoundException: await de_ResourceNotFoundException_event(
          event["resourceNotFoundException"],
          context
        ),
      };
    }
    if (event["serviceQuotaExceededException"] != null) {
      return {
        serviceQuotaExceededException: await de_ServiceQuotaExceededException_event(
          event["serviceQuotaExceededException"],
          context
        ),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["accessDeniedException"] != null) {
      return {
        accessDeniedException: await de_AccessDeniedException_event(event["accessDeniedException"], context),
      };
    }
    if (event["conflictException"] != null) {
      return {
        conflictException: await de_ConflictException_event(event["conflictException"], context),
      };
    }
    if (event["dependencyFailedException"] != null) {
      return {
        dependencyFailedException: await de_DependencyFailedException_event(
          event["dependencyFailedException"],
          context
        ),
      };
    }
    if (event["badGatewayException"] != null) {
      return {
        badGatewayException: await de_BadGatewayException_event(event["badGatewayException"], context),
      };
    }
    return { $unknown: output };
  });
};
/**
 * deserializeAws_restJson1OptimizedPromptStream
 */
const de_OptimizedPromptStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<OptimizedPromptStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["optimizedPromptEvent"] != null) {
      return {
        optimizedPromptEvent: await de_OptimizedPromptEvent_event(event["optimizedPromptEvent"], context),
      };
    }
    if (event["analyzePromptEvent"] != null) {
      return {
        analyzePromptEvent: await de_AnalyzePromptEvent_event(event["analyzePromptEvent"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["dependencyFailedException"] != null) {
      return {
        dependencyFailedException: await de_DependencyFailedException_event(
          event["dependencyFailedException"],
          context
        ),
      };
    }
    if (event["accessDeniedException"] != null) {
      return {
        accessDeniedException: await de_AccessDeniedException_event(event["accessDeniedException"], context),
      };
    }
    if (event["badGatewayException"] != null) {
      return {
        badGatewayException: await de_BadGatewayException_event(event["badGatewayException"], context),
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
    if (event["trace"] != null) {
      return {
        trace: await de_TracePart_event(event["trace"], context),
      };
    }
    if (event["returnControl"] != null) {
      return {
        returnControl: await de_ReturnControlPayload_event(event["returnControl"], context),
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context),
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context),
      };
    }
    if (event["resourceNotFoundException"] != null) {
      return {
        resourceNotFoundException: await de_ResourceNotFoundException_event(
          event["resourceNotFoundException"],
          context
        ),
      };
    }
    if (event["serviceQuotaExceededException"] != null) {
      return {
        serviceQuotaExceededException: await de_ServiceQuotaExceededException_event(
          event["serviceQuotaExceededException"],
          context
        ),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    if (event["accessDeniedException"] != null) {
      return {
        accessDeniedException: await de_AccessDeniedException_event(event["accessDeniedException"], context),
      };
    }
    if (event["conflictException"] != null) {
      return {
        conflictException: await de_ConflictException_event(event["conflictException"], context),
      };
    }
    if (event["dependencyFailedException"] != null) {
      return {
        dependencyFailedException: await de_DependencyFailedException_event(
          event["dependencyFailedException"],
          context
        ),
      };
    }
    if (event["badGatewayException"] != null) {
      return {
        badGatewayException: await de_BadGatewayException_event(event["badGatewayException"], context),
      };
    }
    if (event["files"] != null) {
      return {
        files: await de_FilePart_event(event["files"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_AccessDeniedException_event = async (output: any, context: __SerdeContext): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_AccessDeniedExceptionRes(parsedOutput, context);
};
const de_AnalyzePromptEvent_event = async (output: any, context: __SerdeContext): Promise<AnalyzePromptEvent> => {
  const contents: AnalyzePromptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_BadGatewayException_event = async (output: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_BadGatewayExceptionRes(parsedOutput, context);
};
const de_ConflictException_event = async (output: any, context: __SerdeContext): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ConflictExceptionRes(parsedOutput, context);
};
const de_DependencyFailedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_DependencyFailedExceptionRes(parsedOutput, context);
};
const de_FilePart_event = async (output: any, context: __SerdeContext): Promise<FilePart> => {
  const contents: FilePart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_FilePart(data, context));
  return contents;
};
const de_FlowCompletionEvent_event = async (output: any, context: __SerdeContext): Promise<FlowCompletionEvent> => {
  const contents: FlowCompletionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_FlowOutputEvent_event = async (output: any, context: __SerdeContext): Promise<FlowOutputEvent> => {
  const contents: FlowOutputEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_FlowOutputEvent(data, context));
  return contents;
};
const de_FlowTraceEvent_event = async (output: any, context: __SerdeContext): Promise<FlowTraceEvent> => {
  const contents: FlowTraceEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_FlowTraceEvent(data, context));
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
const de_OptimizedPromptEvent_event = async (output: any, context: __SerdeContext): Promise<OptimizedPromptEvent> => {
  const contents: OptimizedPromptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_PayloadPart_event = async (output: any, context: __SerdeContext): Promise<PayloadPart> => {
  const contents: PayloadPart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_PayloadPart(data, context));
  return contents;
};
const de_ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ResourceNotFoundExceptionRes(parsedOutput, context);
};
const de_ReturnControlPayload_event = async (output: any, context: __SerdeContext): Promise<ReturnControlPayload> => {
  const contents: ReturnControlPayload = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ServiceQuotaExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_TracePart_event = async (output: any, context: __SerdeContext): Promise<TracePart> => {
  const contents: TracePart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_TracePart(data, context));
  return contents;
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
/**
 * serializeAws_restJson1AdditionalModelRequestFields
 */
const se_AdditionalModelRequestFields = (input: Record<string, __DocumentType>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AdditionalModelRequestFieldsValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AdditionalModelRequestFieldsValue
 */
const se_AdditionalModelRequestFieldsValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_ApiResult omitted.

/**
 * serializeAws_restJson1ByteContentDoc
 */
const se_ByteContentDoc = (input: ByteContentDoc, context: __SerdeContext): any => {
  return take(input, {
    contentType: [],
    data: context.base64Encoder,
    identifier: [],
  });
};

/**
 * serializeAws_restJson1ByteContentFile
 */
const se_ByteContentFile = (input: ByteContentFile, context: __SerdeContext): any => {
  return take(input, {
    data: context.base64Encoder,
    mediaType: [],
  });
};

// se_ContentBody omitted.

/**
 * serializeAws_restJson1ExternalSource
 */
const se_ExternalSource = (input: ExternalSource, context: __SerdeContext): any => {
  return take(input, {
    byteContent: (_) => se_ByteContentDoc(_, context),
    s3Location: _json,
    sourceType: [],
  });
};

/**
 * serializeAws_restJson1ExternalSources
 */
const se_ExternalSources = (input: ExternalSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExternalSource(entry, context);
    });
};

/**
 * serializeAws_restJson1ExternalSourcesGenerationConfiguration
 */
const se_ExternalSourcesGenerationConfiguration = (
  input: ExternalSourcesGenerationConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    inferenceConfig: (_) => se_InferenceConfig(_, context),
    promptTemplate: _json,
  });
};

/**
 * serializeAws_restJson1ExternalSourcesRetrieveAndGenerateConfiguration
 */
const se_ExternalSourcesRetrieveAndGenerateConfiguration = (
  input: ExternalSourcesRetrieveAndGenerateConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    generationConfiguration: (_) => se_ExternalSourcesGenerationConfiguration(_, context),
    modelArn: [],
    sources: (_) => se_ExternalSources(_, context),
  });
};

/**
 * serializeAws_restJson1FileSource
 */
const se_FileSource = (input: FileSource, context: __SerdeContext): any => {
  return take(input, {
    byteContent: (_) => se_ByteContentFile(_, context),
    s3Location: _json,
    sourceType: [],
  });
};

/**
 * serializeAws_restJson1FilterAttribute
 */
const se_FilterAttribute = (input: FilterAttribute, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    value: (_) => se_FilterValue(_, context),
  });
};

/**
 * serializeAws_restJson1FilterValue
 */
const se_FilterValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1FlowInput
 */
const se_FlowInput = (input: FlowInput, context: __SerdeContext): any => {
  return take(input, {
    content: (_) => se_FlowInputContent(_, context),
    nodeName: [],
    nodeOutputName: [],
  });
};

/**
 * serializeAws_restJson1FlowInputContent
 */
const se_FlowInputContent = (input: FlowInputContent, context: __SerdeContext): any => {
  return FlowInputContent.visit(input, {
    document: (value) => ({ document: se_Document(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1FlowInputs
 */
const se_FlowInputs = (input: FlowInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FlowInput(entry, context);
    });
};

// se_FunctionResult omitted.

/**
 * serializeAws_restJson1GenerationConfiguration
 */
const se_GenerationConfiguration = (input: GenerationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    inferenceConfig: (_) => se_InferenceConfig(_, context),
    promptTemplate: _json,
  });
};

// se_GuardrailConfiguration omitted.

/**
 * serializeAws_restJson1InferenceConfig
 */
const se_InferenceConfig = (input: InferenceConfig, context: __SerdeContext): any => {
  return take(input, {
    textInferenceConfig: (_) => se_TextInferenceConfig(_, context),
  });
};

/**
 * serializeAws_restJson1InputFile
 */
const se_InputFile = (input: InputFile, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    source: (_) => se_FileSource(_, context),
    useCase: [],
  });
};

/**
 * serializeAws_restJson1InputFiles
 */
const se_InputFiles = (input: InputFile[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputFile(entry, context);
    });
};

// se_InputPrompt omitted.

// se_InvocationResultMember omitted.

/**
 * serializeAws_restJson1KnowledgeBaseConfiguration
 */
const se_KnowledgeBaseConfiguration = (input: KnowledgeBaseConfiguration, context: __SerdeContext): any => {
  return take(input, {
    knowledgeBaseId: [],
    retrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseConfigurations
 */
const se_KnowledgeBaseConfigurations = (input: KnowledgeBaseConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KnowledgeBaseConfiguration(entry, context);
    });
};

// se_KnowledgeBaseQuery omitted.

/**
 * serializeAws_restJson1KnowledgeBaseRetrievalConfiguration
 */
const se_KnowledgeBaseRetrievalConfiguration = (
  input: KnowledgeBaseRetrievalConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    vectorSearchConfiguration: (_) => se_KnowledgeBaseVectorSearchConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseRetrieveAndGenerateConfiguration
 */
const se_KnowledgeBaseRetrieveAndGenerateConfiguration = (
  input: KnowledgeBaseRetrieveAndGenerateConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    generationConfiguration: (_) => se_GenerationConfiguration(_, context),
    knowledgeBaseId: [],
    modelArn: [],
    orchestrationConfiguration: (_) => se_OrchestrationConfiguration(_, context),
    retrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseVectorSearchConfiguration
 */
const se_KnowledgeBaseVectorSearchConfiguration = (
  input: KnowledgeBaseVectorSearchConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    filter: (_) => se_RetrievalFilter(_, context),
    numberOfResults: [],
    overrideSearchType: [],
  });
};

/**
 * serializeAws_restJson1OrchestrationConfiguration
 */
const se_OrchestrationConfiguration = (input: OrchestrationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    inferenceConfig: (_) => se_InferenceConfig(_, context),
    promptTemplate: _json,
    queryTransformationConfiguration: _json,
  });
};

// se_PromptSessionAttributesMap omitted.

// se_PromptTemplate omitted.

// se_QueryTransformationConfiguration omitted.

// se_RAGStopSequences omitted.

// se_ResponseBody omitted.

/**
 * serializeAws_restJson1RetrievalFilter
 */
const se_RetrievalFilter = (input: RetrievalFilter, context: __SerdeContext): any => {
  return RetrievalFilter.visit(input, {
    andAll: (value) => ({ andAll: se_RetrievalFilterList(value, context) }),
    equals: (value) => ({ equals: se_FilterAttribute(value, context) }),
    greaterThan: (value) => ({ greaterThan: se_FilterAttribute(value, context) }),
    greaterThanOrEquals: (value) => ({ greaterThanOrEquals: se_FilterAttribute(value, context) }),
    in: (value) => ({ in: se_FilterAttribute(value, context) }),
    lessThan: (value) => ({ lessThan: se_FilterAttribute(value, context) }),
    lessThanOrEquals: (value) => ({ lessThanOrEquals: se_FilterAttribute(value, context) }),
    listContains: (value) => ({ listContains: se_FilterAttribute(value, context) }),
    notEquals: (value) => ({ notEquals: se_FilterAttribute(value, context) }),
    notIn: (value) => ({ notIn: se_FilterAttribute(value, context) }),
    orAll: (value) => ({ orAll: se_RetrievalFilterList(value, context) }),
    startsWith: (value) => ({ startsWith: se_FilterAttribute(value, context) }),
    stringContains: (value) => ({ stringContains: se_FilterAttribute(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RetrievalFilterList
 */
const se_RetrievalFilterList = (input: RetrievalFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RetrievalFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RetrieveAndGenerateConfiguration
 */
const se_RetrieveAndGenerateConfiguration = (input: RetrieveAndGenerateConfiguration, context: __SerdeContext): any => {
  return take(input, {
    externalSourcesConfiguration: (_) => se_ExternalSourcesRetrieveAndGenerateConfiguration(_, context),
    knowledgeBaseConfiguration: (_) => se_KnowledgeBaseRetrieveAndGenerateConfiguration(_, context),
    type: [],
  });
};

// se_RetrieveAndGenerateInput omitted.

// se_RetrieveAndGenerateSessionConfiguration omitted.

// se_ReturnControlInvocationResults omitted.

// se_S3ObjectDoc omitted.

// se_S3ObjectFile omitted.

// se_SessionAttributesMap omitted.

/**
 * serializeAws_restJson1SessionState
 */
const se_SessionState = (input: SessionState, context: __SerdeContext): any => {
  return take(input, {
    files: (_) => se_InputFiles(_, context),
    invocationId: [],
    knowledgeBaseConfigurations: (_) => se_KnowledgeBaseConfigurations(_, context),
    promptSessionAttributes: _json,
    returnControlInvocationResults: _json,
    sessionAttributes: _json,
  });
};

/**
 * serializeAws_restJson1TextInferenceConfig
 */
const se_TextInferenceConfig = (input: TextInferenceConfig, context: __SerdeContext): any => {
  return take(input, {
    maxTokens: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topP: __serializeFloat,
  });
};

// se_TextPrompt omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_ActionGroupInvocationInput omitted.

// de_ActionGroupInvocationOutput omitted.

// de_AnalyzePromptEvent omitted.

// de_ApiContentMap omitted.

// de_ApiInvocationInput omitted.

// de_ApiParameter omitted.

// de_ApiParameters omitted.

// de_ApiRequestBody omitted.

/**
 * deserializeAws_restJson1Attribution
 */
const de_Attribution = (output: any, context: __SerdeContext): Attribution => {
  return take(output, {
    citations: (_: any) => de_Citations(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Citation
 */
const de_Citation = (output: any, context: __SerdeContext): Citation => {
  return take(output, {
    generatedResponsePart: _json,
    retrievedReferences: (_: any) => de_RetrievedReferences(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Citations
 */
const de_Citations = (output: any, context: __SerdeContext): Citation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Citation(entry, context);
    });
  return retVal;
};

// de_CodeInterpreterInvocationInput omitted.

// de_CodeInterpreterInvocationOutput omitted.

// de_ContentMap omitted.

// de_FailureTrace omitted.

/**
 * deserializeAws_restJson1FilePart
 */
const de_FilePart = (output: any, context: __SerdeContext): FilePart => {
  return take(output, {
    files: (_: any) => de_OutputFiles(_, context),
  }) as any;
};

// de_Files omitted.

// de_FinalResponse omitted.

// de_FlowCompletionEvent omitted.

/**
 * deserializeAws_restJson1FlowOutputContent
 */
const de_FlowOutputContent = (output: any, context: __SerdeContext): FlowOutputContent => {
  if (output.document != null) {
    return {
      document: de_Document(output.document, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FlowOutputEvent
 */
const de_FlowOutputEvent = (output: any, context: __SerdeContext): FlowOutputEvent => {
  return take(output, {
    content: (_: any) => de_FlowOutputContent(__expectUnion(_), context),
    nodeName: __expectString,
    nodeType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTrace
 */
const de_FlowTrace = (output: any, context: __SerdeContext): FlowTrace => {
  if (output.conditionNodeResultTrace != null) {
    return {
      conditionNodeResultTrace: de_FlowTraceConditionNodeResultEvent(output.conditionNodeResultTrace, context),
    };
  }
  if (output.nodeInputTrace != null) {
    return {
      nodeInputTrace: de_FlowTraceNodeInputEvent(output.nodeInputTrace, context),
    };
  }
  if (output.nodeOutputTrace != null) {
    return {
      nodeOutputTrace: de_FlowTraceNodeOutputEvent(output.nodeOutputTrace, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_FlowTraceCondition omitted.

/**
 * deserializeAws_restJson1FlowTraceConditionNodeResultEvent
 */
const de_FlowTraceConditionNodeResultEvent = (
  output: any,
  context: __SerdeContext
): FlowTraceConditionNodeResultEvent => {
  return take(output, {
    nodeName: __expectString,
    satisfiedConditions: _json,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_FlowTraceConditions omitted.

/**
 * deserializeAws_restJson1FlowTraceEvent
 */
const de_FlowTraceEvent = (output: any, context: __SerdeContext): FlowTraceEvent => {
  return take(output, {
    trace: (_: any) => de_FlowTrace(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTraceNodeInputContent
 */
const de_FlowTraceNodeInputContent = (output: any, context: __SerdeContext): FlowTraceNodeInputContent => {
  if (output.document != null) {
    return {
      document: de_Document(output.document, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FlowTraceNodeInputEvent
 */
const de_FlowTraceNodeInputEvent = (output: any, context: __SerdeContext): FlowTraceNodeInputEvent => {
  return take(output, {
    fields: (_: any) => de_FlowTraceNodeInputFields(_, context),
    nodeName: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTraceNodeInputField
 */
const de_FlowTraceNodeInputField = (output: any, context: __SerdeContext): FlowTraceNodeInputField => {
  return take(output, {
    content: (_: any) => de_FlowTraceNodeInputContent(__expectUnion(_), context),
    nodeInputName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTraceNodeInputFields
 */
const de_FlowTraceNodeInputFields = (output: any, context: __SerdeContext): FlowTraceNodeInputField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowTraceNodeInputField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowTraceNodeOutputContent
 */
const de_FlowTraceNodeOutputContent = (output: any, context: __SerdeContext): FlowTraceNodeOutputContent => {
  if (output.document != null) {
    return {
      document: de_Document(output.document, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FlowTraceNodeOutputEvent
 */
const de_FlowTraceNodeOutputEvent = (output: any, context: __SerdeContext): FlowTraceNodeOutputEvent => {
  return take(output, {
    fields: (_: any) => de_FlowTraceNodeOutputFields(_, context),
    nodeName: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTraceNodeOutputField
 */
const de_FlowTraceNodeOutputField = (output: any, context: __SerdeContext): FlowTraceNodeOutputField => {
  return take(output, {
    content: (_: any) => de_FlowTraceNodeOutputContent(__expectUnion(_), context),
    nodeOutputName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FlowTraceNodeOutputFields
 */
const de_FlowTraceNodeOutputFields = (output: any, context: __SerdeContext): FlowTraceNodeOutputField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowTraceNodeOutputField(entry, context);
    });
  return retVal;
};

// de_FunctionInvocationInput omitted.

// de_FunctionParameter omitted.

// de_FunctionParameters omitted.

// de_GeneratedResponsePart omitted.

// de_GuardrailAssessment omitted.

// de_GuardrailAssessmentList omitted.

// de_GuardrailContentFilter omitted.

// de_GuardrailContentFilterList omitted.

// de_GuardrailContentPolicyAssessment omitted.

// de_GuardrailCustomWord omitted.

// de_GuardrailCustomWordList omitted.

// de_GuardrailManagedWord omitted.

// de_GuardrailManagedWordList omitted.

// de_GuardrailPiiEntityFilter omitted.

// de_GuardrailPiiEntityFilterList omitted.

// de_GuardrailRegexFilter omitted.

// de_GuardrailRegexFilterList omitted.

// de_GuardrailSensitiveInformationPolicyAssessment omitted.

// de_GuardrailTopic omitted.

// de_GuardrailTopicList omitted.

// de_GuardrailTopicPolicyAssessment omitted.

// de_GuardrailTrace omitted.

// de_GuardrailWordPolicyAssessment omitted.

/**
 * deserializeAws_restJson1InferenceConfiguration
 */
const de_InferenceConfiguration = (output: any, context: __SerdeContext): InferenceConfiguration => {
  return take(output, {
    maximumLength: __expectInt32,
    stopSequences: _json,
    temperature: __limitedParseFloat32,
    topK: __expectInt32,
    topP: __limitedParseFloat32,
  }) as any;
};

// de_InvocationInput omitted.

// de_InvocationInputMember omitted.

// de_InvocationInputs omitted.

// de_KnowledgeBaseLookupInput omitted.

/**
 * deserializeAws_restJson1KnowledgeBaseLookupOutput
 */
const de_KnowledgeBaseLookupOutput = (output: any, context: __SerdeContext): KnowledgeBaseLookupOutput => {
  return take(output, {
    retrievedReferences: (_: any) => de_RetrievedReferences(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseRetrievalResult
 */
const de_KnowledgeBaseRetrievalResult = (output: any, context: __SerdeContext): KnowledgeBaseRetrievalResult => {
  return take(output, {
    content: _json,
    location: _json,
    metadata: (_: any) => de_RetrievalResultMetadata(_, context),
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseRetrievalResults
 */
const de_KnowledgeBaseRetrievalResults = (output: any, context: __SerdeContext): KnowledgeBaseRetrievalResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KnowledgeBaseRetrievalResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Memories
 */
const de_Memories = (output: any, context: __SerdeContext): Memory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Memory(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Memory
 */
const de_Memory = (output: any, context: __SerdeContext): Memory => {
  if (output.sessionSummary != null) {
    return {
      sessionSummary: de_MemorySessionSummary(output.sessionSummary, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1MemorySessionSummary
 */
const de_MemorySessionSummary = (output: any, context: __SerdeContext): MemorySessionSummary => {
  return take(output, {
    memoryId: __expectString,
    sessionExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
    sessionStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    summaryText: __expectString,
  }) as any;
};

// de_Metadata omitted.

/**
 * deserializeAws_restJson1ModelInvocationInput
 */
const de_ModelInvocationInput = (output: any, context: __SerdeContext): ModelInvocationInput => {
  return take(output, {
    inferenceConfiguration: (_: any) => de_InferenceConfiguration(_, context),
    overrideLambda: __expectString,
    parserMode: __expectString,
    promptCreationMode: __expectString,
    text: __expectString,
    traceId: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Observation
 */
const de_Observation = (output: any, context: __SerdeContext): Observation => {
  return take(output, {
    actionGroupInvocationOutput: _json,
    codeInterpreterInvocationOutput: _json,
    finalResponse: _json,
    knowledgeBaseLookupOutput: (_: any) => de_KnowledgeBaseLookupOutput(_, context),
    repromptResponse: _json,
    traceId: __expectString,
    type: __expectString,
  }) as any;
};

// de_OptimizedPrompt omitted.

// de_OptimizedPromptEvent omitted.

// de_OrchestrationModelInvocationOutput omitted.

/**
 * deserializeAws_restJson1OrchestrationTrace
 */
const de_OrchestrationTrace = (output: any, context: __SerdeContext): OrchestrationTrace => {
  if (output.invocationInput != null) {
    return {
      invocationInput: _json(output.invocationInput),
    };
  }
  if (output.modelInvocationInput != null) {
    return {
      modelInvocationInput: de_ModelInvocationInput(output.modelInvocationInput, context),
    };
  }
  if (output.modelInvocationOutput != null) {
    return {
      modelInvocationOutput: _json(output.modelInvocationOutput),
    };
  }
  if (output.observation != null) {
    return {
      observation: de_Observation(output.observation, context),
    };
  }
  if (output.rationale != null) {
    return {
      rationale: _json(output.rationale),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1OutputFile
 */
const de_OutputFile = (output: any, context: __SerdeContext): OutputFile => {
  return take(output, {
    bytes: context.base64Decoder,
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OutputFiles
 */
const de_OutputFiles = (output: any, context: __SerdeContext): OutputFile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputFile(entry, context);
    });
  return retVal;
};

// de_Parameter omitted.

// de_ParameterList omitted.

// de_Parameters omitted.

/**
 * deserializeAws_restJson1PayloadPart
 */
const de_PayloadPart = (output: any, context: __SerdeContext): PayloadPart => {
  return take(output, {
    attribution: (_: any) => de_Attribution(_, context),
    bytes: context.base64Decoder,
  }) as any;
};

// de_PostProcessingModelInvocationOutput omitted.

// de_PostProcessingParsedResponse omitted.

/**
 * deserializeAws_restJson1PostProcessingTrace
 */
const de_PostProcessingTrace = (output: any, context: __SerdeContext): PostProcessingTrace => {
  if (output.modelInvocationInput != null) {
    return {
      modelInvocationInput: de_ModelInvocationInput(output.modelInvocationInput, context),
    };
  }
  if (output.modelInvocationOutput != null) {
    return {
      modelInvocationOutput: _json(output.modelInvocationOutput),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_PreProcessingModelInvocationOutput omitted.

// de_PreProcessingParsedResponse omitted.

/**
 * deserializeAws_restJson1PreProcessingTrace
 */
const de_PreProcessingTrace = (output: any, context: __SerdeContext): PreProcessingTrace => {
  if (output.modelInvocationInput != null) {
    return {
      modelInvocationInput: de_ModelInvocationInput(output.modelInvocationInput, context),
    };
  }
  if (output.modelInvocationOutput != null) {
    return {
      modelInvocationOutput: _json(output.modelInvocationOutput),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_PropertyParameters omitted.

// de_Rationale omitted.

// de_RawResponse omitted.

// de_RepromptResponse omitted.

// de_RequestBody omitted.

// de_RetrievalResultConfluenceLocation omitted.

// de_RetrievalResultContent omitted.

// de_RetrievalResultLocation omitted.

/**
 * deserializeAws_restJson1RetrievalResultMetadata
 */
const de_RetrievalResultMetadata = (output: any, context: __SerdeContext): Record<string, __DocumentType> => {
  return Object.entries(output).reduce((acc: Record<string, __DocumentType>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_RetrievalResultMetadataValue(value, context);
    return acc;
  }, {} as Record<string, __DocumentType>);
};

/**
 * deserializeAws_restJson1RetrievalResultMetadataValue
 */
const de_RetrievalResultMetadataValue = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_RetrievalResultS3Location omitted.

// de_RetrievalResultSalesforceLocation omitted.

// de_RetrievalResultSharePointLocation omitted.

// de_RetrievalResultWebLocation omitted.

// de_RetrieveAndGenerateOutput omitted.

/**
 * deserializeAws_restJson1RetrievedReference
 */
const de_RetrievedReference = (output: any, context: __SerdeContext): RetrievedReference => {
  return take(output, {
    content: _json,
    location: _json,
    metadata: (_: any) => de_RetrievalResultMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RetrievedReferences
 */
const de_RetrievedReferences = (output: any, context: __SerdeContext): RetrievedReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RetrievedReference(entry, context);
    });
  return retVal;
};

// de_ReturnControlPayload omitted.

// de_Span omitted.

// de_StopSequences omitted.

// de_TextPrompt omitted.

// de_TextResponsePart omitted.

/**
 * deserializeAws_restJson1Trace
 */
const de_Trace = (output: any, context: __SerdeContext): Trace => {
  if (output.failureTrace != null) {
    return {
      failureTrace: _json(output.failureTrace),
    };
  }
  if (output.guardrailTrace != null) {
    return {
      guardrailTrace: _json(output.guardrailTrace),
    };
  }
  if (output.orchestrationTrace != null) {
    return {
      orchestrationTrace: de_OrchestrationTrace(__expectUnion(output.orchestrationTrace), context),
    };
  }
  if (output.postProcessingTrace != null) {
    return {
      postProcessingTrace: de_PostProcessingTrace(__expectUnion(output.postProcessingTrace), context),
    };
  }
  if (output.preProcessingTrace != null) {
    return {
      preProcessingTrace: de_PreProcessingTrace(__expectUnion(output.preProcessingTrace), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1TracePart
 */
const de_TracePart = (output: any, context: __SerdeContext): TracePart => {
  return take(output, {
    agentAliasId: __expectString,
    agentId: __expectString,
    agentVersion: __expectString,
    sessionId: __expectString,
    trace: (_: any) => de_Trace(__expectUnion(_), context),
  }) as any;
};

// de_Usage omitted.

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

const _cT = "contentType";
const _mI = "memoryId";
const _mIa = "maxItems";
const _mT = "memoryType";
const _nT = "nextToken";
const _sI = "sessionId";
const _xabact = "x-amzn-bedrock-agent-content-type";
const _xabami = "x-amz-bedrock-agent-memory-id";
const _xabasi = "x-amz-bedrock-agent-session-id";
