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
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
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
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateInvocationCommandInput, CreateInvocationCommandOutput } from "../commands/CreateInvocationCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import { DeleteAgentMemoryCommandInput, DeleteAgentMemoryCommandOutput } from "../commands/DeleteAgentMemoryCommand";
import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { EndSessionCommandInput, EndSessionCommandOutput } from "../commands/EndSessionCommand";
import { GenerateQueryCommandInput, GenerateQueryCommandOutput } from "../commands/GenerateQueryCommand";
import { GetAgentMemoryCommandInput, GetAgentMemoryCommandOutput } from "../commands/GetAgentMemoryCommand";
import { GetInvocationStepCommandInput, GetInvocationStepCommandOutput } from "../commands/GetInvocationStepCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { InvokeAgentCommandInput, InvokeAgentCommandOutput } from "../commands/InvokeAgentCommand";
import { InvokeFlowCommandInput, InvokeFlowCommandOutput } from "../commands/InvokeFlowCommand";
import { InvokeInlineAgentCommandInput, InvokeInlineAgentCommandOutput } from "../commands/InvokeInlineAgentCommand";
import { ListInvocationsCommandInput, ListInvocationsCommandOutput } from "../commands/ListInvocationsCommand";
import {
  ListInvocationStepsCommandInput,
  ListInvocationStepsCommandOutput,
} from "../commands/ListInvocationStepsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { OptimizePromptCommandInput, OptimizePromptCommandOutput } from "../commands/OptimizePromptCommand";
import { PutInvocationStepCommandInput, PutInvocationStepCommandOutput } from "../commands/PutInvocationStepCommand";
import { RerankCommandInput, RerankCommandOutput } from "../commands/RerankCommand";
import {
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
} from "../commands/RetrieveAndGenerateCommand";
import {
  RetrieveAndGenerateStreamCommandInput,
  RetrieveAndGenerateStreamCommandOutput,
} from "../commands/RetrieveAndGenerateStreamCommand";
import { RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "../commands/UpdateSessionCommand";
import { BedrockAgentRuntimeServiceException as __BaseException } from "../models/BedrockAgentRuntimeServiceException";
import {
  AccessDeniedException,
  ActionGroupExecutor,
  AgentActionGroup,
  AgentCollaboratorInvocationOutput,
  AnalyzePromptEvent,
  ApiResult,
  APISchema,
  Attribution,
  BadGatewayException,
  BedrockModelConfigurations,
  BedrockRerankingConfiguration,
  BedrockRerankingModelConfiguration,
  BedrockSessionContentBlock,
  ByteContentDoc,
  ByteContentFile,
  Citation,
  CitationEvent,
  CollaboratorConfiguration,
  ConflictException,
  ContentBlock,
  ContentBody,
  ConversationHistory,
  DependencyFailedException,
  ExternalSource,
  ExternalSourcesGenerationConfiguration,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  FieldForReranking,
  FilePart,
  FileSource,
  FilterAttribute,
  FlowCompletionEvent,
  FlowInput,
  FlowInputContent,
  FlowMultiTurnInputContent,
  FlowMultiTurnInputRequestEvent,
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
  FunctionDefinition,
  FunctionResult,
  FunctionSchema,
  GenerationConfiguration,
  GuardrailConfiguration,
  GuardrailConfigurationWithArn,
  GuardrailEvent,
  ImageBlock,
  ImageSource,
  ImplicitFilterConfiguration,
  InferenceConfig,
  InferenceConfiguration,
  InlineAgentFilePart,
  InlineAgentPayloadPart,
  InlineAgentResponseStream,
  InlineAgentReturnControlPayload,
  InlineAgentTracePart,
  InlineBedrockModelConfigurations,
  InlineSessionState,
  InputFile,
  InputPrompt,
  InternalServerException,
  InvocationResultMember,
  InvocationStep,
  InvocationStepPayload,
  InvocationStepSummary,
  InvocationSummary,
  KnowledgeBaseLookupOutput,
  KnowledgeBaseQuery,
  KnowledgeBaseRetrievalResult,
  Memory,
  MemorySessionSummary,
  Message,
  MetadataAttributeSchema,
  MetadataConfigurationForReranking,
  ModelInvocationInput,
  ModelNotReadyException,
  ModelPerformanceConfiguration,
  Observation,
  OptimizedPromptEvent,
  OptimizedPromptStream,
  OrchestrationConfiguration,
  OrchestrationModelInvocationOutput,
  OrchestrationTrace,
  OutputFile,
  ParameterDetail,
  PayloadPart,
  PerformanceConfiguration,
  PostProcessingModelInvocationOutput,
  PostProcessingTrace,
  PreProcessingModelInvocationOutput,
  PreProcessingTrace,
  PromptConfiguration,
  PromptOverrideConfiguration,
  PromptTemplate,
  QueryGenerationInput,
  QueryTransformationConfiguration,
  ReasoningContentBlock,
  RerankDocument,
  RerankingConfiguration,
  RerankingMetadataSelectiveModeConfiguration,
  RerankQuery,
  RerankResult,
  RerankSource,
  RerankTextDocument,
  ResourceNotFoundException,
  ResponseStream,
  RetrieveAndGenerateInput,
  RetrieveAndGenerateOutputEvent,
  RetrieveAndGenerateSessionConfiguration,
  RetrieveAndGenerateStreamResponseOutput,
  RetrievedReference,
  ReturnControlPayload,
  RoutingClassifierTrace,
  S3Identifier,
  S3Location,
  S3ObjectDoc,
  S3ObjectFile,
  ServiceQuotaExceededException,
  SessionSummary,
  StreamingConfigurations,
  TextInferenceConfig,
  TextPrompt,
  TextToSqlConfiguration,
  TextToSqlKnowledgeBaseConfiguration,
  ThrottlingException,
  Trace,
  TracePart,
  TransformationConfiguration,
  ValidationException,
  VectorSearchBedrockRerankingConfiguration,
  VectorSearchBedrockRerankingModelConfiguration,
  VectorSearchRerankingConfiguration,
} from "../models/models_0";
import {
  Collaborator,
  KnowledgeBase,
  KnowledgeBaseConfiguration,
  KnowledgeBaseRetrievalConfiguration,
  KnowledgeBaseRetrieveAndGenerateConfiguration,
  KnowledgeBaseVectorSearchConfiguration,
  RetrievalFilter,
  RetrieveAndGenerateConfiguration,
  SessionState,
} from "../models/models_1";

/**
 * serializeAws_restJson1CreateInvocationCommand
 */
export const se_CreateInvocationCommand = async (
  input: CreateInvocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions/{sessionIdentifier}/invocations");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      invocationId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSessionCommand
 */
export const se_CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionKeyArn: [],
      sessionMetadata: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

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
    [_sI]: [, input[_sI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSessionCommand
 */
export const se_DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions/{sessionIdentifier}");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EndSessionCommand
 */
export const se_EndSessionCommand = async (
  input: EndSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions/{sessionIdentifier}");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateQueryCommand
 */
export const se_GenerateQueryCommand = async (
  input: GenerateQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/generateQuery");
  let body: any;
  body = JSON.stringify(
    take(input, {
      queryGenerationInput: (_) => _json(_),
      transformationConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1GetInvocationStepCommand
 */
export const se_GetInvocationStepCommand = async (
  input: GetInvocationStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions/{sessionIdentifier}/invocationSteps/{invocationStepId}");
  b.p("invocationStepId", () => input.invocationStepId!, "{invocationStepId}", false);
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      invocationIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/sessions/{sessionIdentifier}");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xasa]: input[_sA]!,
  });
  b.bp("/agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      bedrockModelConfigurations: (_) => _json(_),
      enableTrace: [],
      endSession: [],
      inputText: [],
      memoryId: [],
      sessionState: (_) => se_SessionState(_, context),
      streamingConfigurations: (_) => _json(_),
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
      executionId: [],
      inputs: (_) => se_FlowInputs(_, context),
      modelPerformanceConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeInlineAgentCommand
 */
export const se_InvokeInlineAgentCommand = async (
  input: InvokeInlineAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{sessionId}");
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionGroups: (_) => _json(_),
      agentCollaboration: [],
      bedrockModelConfigurations: (_) => _json(_),
      collaboratorConfigurations: (_) => _json(_),
      collaborators: (_) => se_Collaborators(_, context),
      customerEncryptionKeyArn: [],
      enableTrace: [],
      endSession: [],
      foundationModel: [],
      guardrailConfiguration: (_) => _json(_),
      idleSessionTTLInSeconds: [],
      inlineSessionState: (_) => se_InlineSessionState(_, context),
      inputText: [],
      instruction: [],
      knowledgeBases: (_) => se_KnowledgeBases(_, context),
      promptOverrideConfiguration: (_) => se_PromptOverrideConfiguration(_, context),
      streamingConfigurations: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInvocationsCommand
 */
export const se_ListInvocationsCommand = async (
  input: ListInvocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions/{sessionIdentifier}/invocations");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInvocationStepsCommand
 */
export const se_ListInvocationStepsCommand = async (
  input: ListInvocationStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions/{sessionIdentifier}/invocationSteps");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      invocationIdentifier: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1PutInvocationStepCommand
 */
export const se_PutInvocationStepCommand = async (
  input: PutInvocationStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions/{sessionIdentifier}/invocationSteps");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      invocationIdentifier: [],
      invocationStepId: [],
      invocationStepTime: (_) => __serializeDateTime(_),
      payload: (_) => se_InvocationStepPayload(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RerankCommand
 */
export const se_RerankCommand = async (input: RerankCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rerank");
  let body: any;
  body = JSON.stringify(
    take(input, {
      nextToken: [],
      queries: (_) => _json(_),
      rerankingConfiguration: (_) => se_RerankingConfiguration(_, context),
      sources: (_) => se_RerankSourcesList(_, context),
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
      guardrailConfiguration: (_) => _json(_),
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
 * serializeAws_restJson1RetrieveAndGenerateStreamCommand
 */
export const se_RetrieveAndGenerateStreamCommand = async (
  input: RetrieveAndGenerateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/retrieveAndGenerateStream");
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSessionCommand
 */
export const se_UpdateSessionCommand = async (
  input: UpdateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessions/{sessionIdentifier}");
  b.p("sessionIdentifier", () => input.sessionIdentifier!, "{sessionIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionMetadata: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateInvocationCommand
 */
export const de_CreateInvocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvocationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    invocationId: __expectString,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSessionCommand
 */
export const de_CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1EndSessionCommand
 */
export const de_EndSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EndSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GenerateQueryCommand
 */
export const de_GenerateQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queries: _json,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1GetInvocationStepCommand
 */
export const de_GetInvocationStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvocationStepCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationStep: (_) => de_InvocationStep(_, context),
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
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    encryptionKeyArn: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionMetadata: _json,
    sessionStatus: __expectString,
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
    [_eI]: [, output.headers[_xabfei]],
  });
  const data: any = output.body;
  contents.responseStream = de_FlowResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeInlineAgentCommand
 */
export const de_InvokeInlineAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeInlineAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_xabact]],
    [_sI]: [, output.headers[_xabasi]],
  });
  const data: any = output.body;
  contents.completion = de_InlineAgentResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvocationsCommand
 */
export const de_ListInvocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationSummaries: (_) => de_InvocationSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvocationStepsCommand
 */
export const de_ListInvocationStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvocationStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationStepSummaries: (_) => de_InvocationStepSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionSummaries: (_) => de_SessionSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1PutInvocationStepCommand
 */
export const de_PutInvocationStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInvocationStepCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationStepId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RerankCommand
 */
export const de_RerankCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RerankCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: (_) => de_RerankResultsList(_, context),
  });
  Object.assign(contents, doc);
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
    guardrailAction: __expectString,
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
 * deserializeAws_restJson1RetrieveAndGenerateStreamCommand
 */
export const de_RetrieveAndGenerateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<RetrieveAndGenerateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_sI]: [, output.headers[_xabkbsi]],
  });
  const data: any = output.body;
  contents.stream = de_RetrieveAndGenerateStreamResponseOutput(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateSessionCommand
 */
export const de_UpdateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionStatus: __expectString,
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
    case "ConflictException":
    case "com.amazonaws.bedrockagentruntime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    case "BadGatewayException":
    case "com.amazonaws.bedrockagentruntime#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "DependencyFailedException":
    case "com.amazonaws.bedrockagentruntime#DependencyFailedException":
      throw await de_DependencyFailedExceptionRes(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.bedrockagentruntime#ModelNotReadyException":
      throw await de_ModelNotReadyExceptionRes(parsedOutput, context);
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
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
    if (event["flowMultiTurnInputRequestEvent"] != null) {
      return {
        flowMultiTurnInputRequestEvent: await de_FlowMultiTurnInputRequestEvent_event(
          event["flowMultiTurnInputRequestEvent"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
/**
 * deserializeAws_restJson1InlineAgentResponseStream
 */
const de_InlineAgentResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<InlineAgentResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_InlineAgentPayloadPart_event(event["chunk"], context),
      };
    }
    if (event["trace"] != null) {
      return {
        trace: await de_InlineAgentTracePart_event(event["trace"], context),
      };
    }
    if (event["returnControl"] != null) {
      return {
        returnControl: await de_InlineAgentReturnControlPayload_event(event["returnControl"], context),
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
        files: await de_InlineAgentFilePart_event(event["files"], context),
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
    if (event["modelNotReadyException"] != null) {
      return {
        modelNotReadyException: await de_ModelNotReadyException_event(event["modelNotReadyException"], context),
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
/**
 * deserializeAws_restJson1RetrieveAndGenerateStreamResponseOutput
 */
const de_RetrieveAndGenerateStreamResponseOutput = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<RetrieveAndGenerateStreamResponseOutput> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["output"] != null) {
      return {
        output: await de_RetrieveAndGenerateOutputEvent_event(event["output"], context),
      };
    }
    if (event["citation"] != null) {
      return {
        citation: await de_CitationEvent_event(event["citation"], context),
      };
    }
    if (event["guardrail"] != null) {
      return {
        guardrail: await de_GuardrailEvent_event(event["guardrail"], context),
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
const de_CitationEvent_event = async (output: any, context: __SerdeContext): Promise<CitationEvent> => {
  const contents: CitationEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_CitationEvent(data, context));
  return contents;
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
const de_FlowMultiTurnInputRequestEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<FlowMultiTurnInputRequestEvent> => {
  const contents: FlowMultiTurnInputRequestEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_FlowMultiTurnInputRequestEvent(data, context));
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
const de_GuardrailEvent_event = async (output: any, context: __SerdeContext): Promise<GuardrailEvent> => {
  const contents: GuardrailEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_InlineAgentFilePart_event = async (output: any, context: __SerdeContext): Promise<InlineAgentFilePart> => {
  const contents: InlineAgentFilePart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_InlineAgentFilePart(data, context));
  return contents;
};
const de_InlineAgentPayloadPart_event = async (
  output: any,
  context: __SerdeContext
): Promise<InlineAgentPayloadPart> => {
  const contents: InlineAgentPayloadPart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_InlineAgentPayloadPart(data, context));
  return contents;
};
const de_InlineAgentReturnControlPayload_event = async (
  output: any,
  context: __SerdeContext
): Promise<InlineAgentReturnControlPayload> => {
  const contents: InlineAgentReturnControlPayload = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_InlineAgentTracePart_event = async (output: any, context: __SerdeContext): Promise<InlineAgentTracePart> => {
  const contents: InlineAgentTracePart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_InlineAgentTracePart(data, context));
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
const de_ModelNotReadyException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ModelNotReadyException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ModelNotReadyExceptionRes(parsedOutput, context);
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
const de_RetrieveAndGenerateOutputEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<RetrieveAndGenerateOutputEvent> => {
  const contents: RetrieveAndGenerateOutputEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
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
// se_ActionGroupExecutor omitted.

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

// se_AgentActionGroup omitted.

// se_AgentActionGroups omitted.

// se_ApiResult omitted.

// se_APISchema omitted.

// se_BedrockModelConfigurations omitted.

/**
 * serializeAws_restJson1BedrockRerankingConfiguration
 */
const se_BedrockRerankingConfiguration = (input: BedrockRerankingConfiguration, context: __SerdeContext): any => {
  return take(input, {
    modelConfiguration: (_) => se_BedrockRerankingModelConfiguration(_, context),
    numberOfResults: [],
  });
};

/**
 * serializeAws_restJson1BedrockRerankingModelConfiguration
 */
const se_BedrockRerankingModelConfiguration = (
  input: BedrockRerankingModelConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    modelArn: [],
  });
};

/**
 * serializeAws_restJson1BedrockSessionContentBlock
 */
const se_BedrockSessionContentBlock = (input: BedrockSessionContentBlock, context: __SerdeContext): any => {
  return BedrockSessionContentBlock.visit(input, {
    image: (value) => ({ image: se_ImageBlock(value, context) }),
    text: (value) => ({ text: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1BedrockSessionContentBlocks
 */
const se_BedrockSessionContentBlocks = (input: BedrockSessionContentBlock[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BedrockSessionContentBlock(entry, context);
    });
};

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

/**
 * serializeAws_restJson1Collaborator
 */
const se_Collaborator = (input: Collaborator, context: __SerdeContext): any => {
  return take(input, {
    actionGroups: _json,
    agentCollaboration: [],
    agentName: [],
    collaboratorConfigurations: _json,
    customerEncryptionKeyArn: [],
    foundationModel: [],
    guardrailConfiguration: _json,
    idleSessionTTLInSeconds: [],
    instruction: [],
    knowledgeBases: (_) => se_KnowledgeBases(_, context),
    promptOverrideConfiguration: (_) => se_PromptOverrideConfiguration(_, context),
  });
};

// se_CollaboratorConfiguration omitted.

// se_CollaboratorConfigurations omitted.

/**
 * serializeAws_restJson1Collaborators
 */
const se_Collaborators = (input: Collaborator[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Collaborator(entry, context);
    });
};

// se_ContentBlock omitted.

// se_ContentBlocks omitted.

// se_ContentBody omitted.

// se_ConversationHistory omitted.

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
    performanceConfig: _json,
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

// se_FieldForReranking omitted.

// se_FieldsForReranking omitted.

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
    nodeInputName: [],
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
    _: (name, value) => ({ [name]: value } as any),
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

// se_FunctionDefinition omitted.

// se_FunctionResult omitted.

// se_Functions omitted.

// se_FunctionSchema omitted.

/**
 * serializeAws_restJson1GenerationConfiguration
 */
const se_GenerationConfiguration = (input: GenerationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    inferenceConfig: (_) => se_InferenceConfig(_, context),
    performanceConfig: _json,
    promptTemplate: _json,
  });
};

// se_GuardrailConfiguration omitted.

// se_GuardrailConfigurationWithArn omitted.

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

// se_ImplicitFilterConfiguration omitted.

/**
 * serializeAws_restJson1InferenceConfig
 */
const se_InferenceConfig = (input: InferenceConfig, context: __SerdeContext): any => {
  return take(input, {
    textInferenceConfig: (_) => se_TextInferenceConfig(_, context),
  });
};

/**
 * serializeAws_restJson1InferenceConfiguration
 */
const se_InferenceConfiguration = (input: InferenceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    maximumLength: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topK: [],
    topP: __serializeFloat,
  });
};

// se_InlineBedrockModelConfigurations omitted.

/**
 * serializeAws_restJson1InlineSessionState
 */
const se_InlineSessionState = (input: InlineSessionState, context: __SerdeContext): any => {
  return take(input, {
    conversationHistory: _json,
    files: (_) => se_InputFiles(_, context),
    invocationId: [],
    promptSessionAttributes: _json,
    returnControlInvocationResults: _json,
    sessionAttributes: _json,
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
 * serializeAws_restJson1InvocationStepPayload
 */
const se_InvocationStepPayload = (input: InvocationStepPayload, context: __SerdeContext): any => {
  return InvocationStepPayload.visit(input, {
    contentBlocks: (value) => ({ contentBlocks: se_BedrockSessionContentBlocks(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1KnowledgeBase
 */
const se_KnowledgeBase = (input: KnowledgeBase, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    knowledgeBaseId: [],
    retrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
  });
};

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
 * serializeAws_restJson1KnowledgeBases
 */
const se_KnowledgeBases = (input: KnowledgeBase[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KnowledgeBase(entry, context);
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
    implicitFilterConfiguration: _json,
    numberOfResults: [],
    overrideSearchType: [],
    rerankingConfiguration: (_) => se_VectorSearchRerankingConfiguration(_, context),
  });
};

// se_Message omitted.

// se_Messages omitted.

// se_MetadataAttributeSchema omitted.

// se_MetadataAttributeSchemaList omitted.

// se_MetadataConfigurationForReranking omitted.

// se_ModelPerformanceConfiguration omitted.

/**
 * serializeAws_restJson1OrchestrationConfiguration
 */
const se_OrchestrationConfiguration = (input: OrchestrationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    inferenceConfig: (_) => se_InferenceConfig(_, context),
    performanceConfig: _json,
    promptTemplate: _json,
    queryTransformationConfiguration: _json,
  });
};

// se_ParameterDetail omitted.

// se_ParameterMap omitted.

// se_PerformanceConfiguration omitted.

/**
 * serializeAws_restJson1PromptConfiguration
 */
const se_PromptConfiguration = (input: PromptConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_Document(_, context),
    basePromptTemplate: [],
    foundationModel: [],
    inferenceConfiguration: (_) => se_InferenceConfiguration(_, context),
    parserMode: [],
    promptCreationMode: [],
    promptState: [],
    promptType: [],
  });
};

/**
 * serializeAws_restJson1PromptConfigurations
 */
const se_PromptConfigurations = (input: PromptConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PromptConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1PromptOverrideConfiguration
 */
const se_PromptOverrideConfiguration = (input: PromptOverrideConfiguration, context: __SerdeContext): any => {
  return take(input, {
    overrideLambda: [],
    promptConfigurations: (_) => se_PromptConfigurations(_, context),
  });
};

// se_PromptSessionAttributesMap omitted.

// se_PromptTemplate omitted.

// se_QueryGenerationInput omitted.

// se_QueryTransformationConfiguration omitted.

// se_RAGStopSequences omitted.

/**
 * serializeAws_restJson1RerankDocument
 */
const se_RerankDocument = (input: RerankDocument, context: __SerdeContext): any => {
  return take(input, {
    jsonDocument: (_) => se_Document(_, context),
    textDocument: _json,
    type: [],
  });
};

/**
 * serializeAws_restJson1RerankingConfiguration
 */
const se_RerankingConfiguration = (input: RerankingConfiguration, context: __SerdeContext): any => {
  return take(input, {
    bedrockRerankingConfiguration: (_) => se_BedrockRerankingConfiguration(_, context),
    type: [],
  });
};

// se_RerankingMetadataSelectiveModeConfiguration omitted.

// se_RerankQueriesList omitted.

// se_RerankQuery omitted.

/**
 * serializeAws_restJson1RerankSource
 */
const se_RerankSource = (input: RerankSource, context: __SerdeContext): any => {
  return take(input, {
    inlineDocumentSource: (_) => se_RerankDocument(_, context),
    type: [],
  });
};

/**
 * serializeAws_restJson1RerankSourcesList
 */
const se_RerankSourcesList = (input: RerankSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RerankSource(entry, context);
    });
};

// se_RerankTextDocument omitted.

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
    _: (name, value) => ({ [name]: value } as any),
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

// se_S3Identifier omitted.

// se_S3Location omitted.

// se_S3ObjectDoc omitted.

// se_S3ObjectFile omitted.

// se_SessionAttributesMap omitted.

// se_SessionMetadataMap omitted.

/**
 * serializeAws_restJson1SessionState
 */
const se_SessionState = (input: SessionState, context: __SerdeContext): any => {
  return take(input, {
    conversationHistory: _json,
    files: (_) => se_InputFiles(_, context),
    invocationId: [],
    knowledgeBaseConfigurations: (_) => se_KnowledgeBaseConfigurations(_, context),
    promptSessionAttributes: _json,
    returnControlInvocationResults: _json,
    sessionAttributes: _json,
  });
};

// se_StopSequences omitted.

// se_StreamingConfigurations omitted.

// se_TagsMap omitted.

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

// se_TextToSqlConfiguration omitted.

// se_TextToSqlKnowledgeBaseConfiguration omitted.

// se_TransformationConfiguration omitted.

/**
 * serializeAws_restJson1VectorSearchBedrockRerankingConfiguration
 */
const se_VectorSearchBedrockRerankingConfiguration = (
  input: VectorSearchBedrockRerankingConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    metadataConfiguration: _json,
    modelConfiguration: (_) => se_VectorSearchBedrockRerankingModelConfiguration(_, context),
    numberOfRerankedResults: [],
  });
};

/**
 * serializeAws_restJson1VectorSearchBedrockRerankingModelConfiguration
 */
const se_VectorSearchBedrockRerankingModelConfiguration = (
  input: VectorSearchBedrockRerankingModelConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    modelArn: [],
  });
};

/**
 * serializeAws_restJson1VectorSearchRerankingConfiguration
 */
const se_VectorSearchRerankingConfiguration = (
  input: VectorSearchRerankingConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    bedrockRerankingConfiguration: (_) => se_VectorSearchBedrockRerankingConfiguration(_, context),
    type: [],
  });
};

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_ActionGroupInvocationInput omitted.

// de_ActionGroupInvocationOutput omitted.

// de_AgentCollaboratorInputPayload omitted.

// de_AgentCollaboratorInvocationInput omitted.

/**
 * deserializeAws_restJson1AgentCollaboratorInvocationOutput
 */
const de_AgentCollaboratorInvocationOutput = (
  output: any,
  context: __SerdeContext
): AgentCollaboratorInvocationOutput => {
  return take(output, {
    agentCollaboratorAliasArn: __expectString,
    agentCollaboratorName: __expectString,
    output: _json,
  }) as any;
};

// de_AgentCollaboratorOutputPayload omitted.

// de_AnalyzePromptEvent omitted.

// de_ApiContentMap omitted.

// de_ApiInvocationInput omitted.

// de_ApiParameter omitted.

// de_ApiParameters omitted.

// de_ApiRequestBody omitted.

// de_ApiResult omitted.

/**
 * deserializeAws_restJson1Attribution
 */
const de_Attribution = (output: any, context: __SerdeContext): Attribution => {
  return take(output, {
    citations: (_: any) => de_Citations(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1BedrockSessionContentBlock
 */
const de_BedrockSessionContentBlock = (output: any, context: __SerdeContext): BedrockSessionContentBlock => {
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context),
    };
  }
  if (__expectString(output.text) !== undefined) {
    return { text: __expectString(output.text) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1BedrockSessionContentBlocks
 */
const de_BedrockSessionContentBlocks = (output: any, context: __SerdeContext): BedrockSessionContentBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BedrockSessionContentBlock(__expectUnion(entry), context);
    });
  return retVal;
};

// de_Caller omitted.

// de_CallerChain omitted.

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
 * deserializeAws_restJson1CitationEvent
 */
const de_CitationEvent = (output: any, context: __SerdeContext): CitationEvent => {
  return take(output, {
    citation: (_: any) => de_Citation(_, context),
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

// de_ContentBody omitted.

// de_ContentMap omitted.

// de_CustomOrchestrationTrace omitted.

// de_CustomOrchestrationTraceEvent omitted.

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
 * deserializeAws_restJson1FlowMultiTurnInputContent
 */
const de_FlowMultiTurnInputContent = (output: any, context: __SerdeContext): FlowMultiTurnInputContent => {
  if (output.document != null) {
    return {
      document: de_Document(output.document, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FlowMultiTurnInputRequestEvent
 */
const de_FlowMultiTurnInputRequestEvent = (output: any, context: __SerdeContext): FlowMultiTurnInputRequestEvent => {
  return take(output, {
    content: (_: any) => de_FlowMultiTurnInputContent(__expectUnion(_), context),
    nodeName: __expectString,
    nodeType: __expectString,
  }) as any;
};

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

// de_FunctionResult omitted.

// de_GeneratedQueries omitted.

// de_GeneratedQuery omitted.

// de_GeneratedResponsePart omitted.

// de_GuardrailAssessment omitted.

// de_GuardrailAssessmentList omitted.

// de_GuardrailContentFilter omitted.

// de_GuardrailContentFilterList omitted.

// de_GuardrailContentPolicyAssessment omitted.

// de_GuardrailCustomWord omitted.

// de_GuardrailCustomWordList omitted.

// de_GuardrailEvent omitted.

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

/**
 * deserializeAws_restJson1InlineAgentFilePart
 */
const de_InlineAgentFilePart = (output: any, context: __SerdeContext): InlineAgentFilePart => {
  return take(output, {
    files: (_: any) => de_OutputFiles(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1InlineAgentPayloadPart
 */
const de_InlineAgentPayloadPart = (output: any, context: __SerdeContext): InlineAgentPayloadPart => {
  return take(output, {
    attribution: (_: any) => de_Attribution(_, context),
    bytes: context.base64Decoder,
  }) as any;
};

// de_InlineAgentReturnControlPayload omitted.

/**
 * deserializeAws_restJson1InlineAgentTracePart
 */
const de_InlineAgentTracePart = (output: any, context: __SerdeContext): InlineAgentTracePart => {
  return take(output, {
    sessionId: __expectString,
    trace: (_: any) => de_Trace(__expectUnion(_), context),
  }) as any;
};

// de_InvocationInput omitted.

// de_InvocationInputMember omitted.

// de_InvocationInputs omitted.

// de_InvocationResultMember omitted.

/**
 * deserializeAws_restJson1InvocationStep
 */
const de_InvocationStep = (output: any, context: __SerdeContext): InvocationStep => {
  return take(output, {
    invocationId: __expectString,
    invocationStepId: __expectString,
    invocationStepTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    payload: (_: any) => de_InvocationStepPayload(__expectUnion(_), context),
    sessionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InvocationStepPayload
 */
const de_InvocationStepPayload = (output: any, context: __SerdeContext): InvocationStepPayload => {
  if (output.contentBlocks != null) {
    return {
      contentBlocks: de_BedrockSessionContentBlocks(output.contentBlocks, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1InvocationStepSummaries
 */
const de_InvocationStepSummaries = (output: any, context: __SerdeContext): InvocationStepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InvocationStepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InvocationStepSummary
 */
const de_InvocationStepSummary = (output: any, context: __SerdeContext): InvocationStepSummary => {
  return take(output, {
    invocationId: __expectString,
    invocationStepId: __expectString,
    invocationStepTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InvocationSummaries
 */
const de_InvocationSummaries = (output: any, context: __SerdeContext): InvocationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InvocationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InvocationSummary
 */
const de_InvocationSummary = (output: any, context: __SerdeContext): InvocationSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    invocationId: __expectString,
    sessionId: __expectString,
  }) as any;
};

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
    foundationModel: __expectString,
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
    agentCollaboratorInvocationOutput: (_: any) => de_AgentCollaboratorInvocationOutput(_, context),
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

/**
 * deserializeAws_restJson1OrchestrationModelInvocationOutput
 */
const de_OrchestrationModelInvocationOutput = (
  output: any,
  context: __SerdeContext
): OrchestrationModelInvocationOutput => {
  return take(output, {
    metadata: _json,
    rawResponse: _json,
    reasoningContent: (_: any) => de_ReasoningContentBlock(__expectUnion(_), context),
    traceId: __expectString,
  }) as any;
};

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
      modelInvocationOutput: de_OrchestrationModelInvocationOutput(output.modelInvocationOutput, context),
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

/**
 * deserializeAws_restJson1PostProcessingModelInvocationOutput
 */
const de_PostProcessingModelInvocationOutput = (
  output: any,
  context: __SerdeContext
): PostProcessingModelInvocationOutput => {
  return take(output, {
    metadata: _json,
    parsedResponse: _json,
    rawResponse: _json,
    reasoningContent: (_: any) => de_ReasoningContentBlock(__expectUnion(_), context),
    traceId: __expectString,
  }) as any;
};

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
      modelInvocationOutput: de_PostProcessingModelInvocationOutput(output.modelInvocationOutput, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PreProcessingModelInvocationOutput
 */
const de_PreProcessingModelInvocationOutput = (
  output: any,
  context: __SerdeContext
): PreProcessingModelInvocationOutput => {
  return take(output, {
    metadata: _json,
    parsedResponse: _json,
    rawResponse: _json,
    reasoningContent: (_: any) => de_ReasoningContentBlock(__expectUnion(_), context),
    traceId: __expectString,
  }) as any;
};

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
      modelInvocationOutput: de_PreProcessingModelInvocationOutput(output.modelInvocationOutput, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_PropertyParameters omitted.

// de_Rationale omitted.

// de_RawResponse omitted.

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

// de_ReasoningTextBlock omitted.

// de_RepromptResponse omitted.

// de_RequestBody omitted.

/**
 * deserializeAws_restJson1RerankDocument
 */
const de_RerankDocument = (output: any, context: __SerdeContext): RerankDocument => {
  return take(output, {
    jsonDocument: (_: any) => de_Document(_, context),
    textDocument: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RerankResult
 */
const de_RerankResult = (output: any, context: __SerdeContext): RerankResult => {
  return take(output, {
    document: (_: any) => de_RerankDocument(_, context),
    index: __expectInt32,
    relevanceScore: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1RerankResultsList
 */
const de_RerankResultsList = (output: any, context: __SerdeContext): RerankResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RerankResult(entry, context);
    });
  return retVal;
};

// de_RerankTextDocument omitted.

// de_ResponseBody omitted.

// de_RetrievalResultConfluenceLocation omitted.

// de_RetrievalResultContent omitted.

// de_RetrievalResultContentColumn omitted.

// de_RetrievalResultContentRow omitted.

// de_RetrievalResultCustomDocumentLocation omitted.

// de_RetrievalResultKendraDocumentLocation omitted.

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

// de_RetrievalResultSqlLocation omitted.

// de_RetrievalResultWebLocation omitted.

// de_RetrieveAndGenerateOutput omitted.

// de_RetrieveAndGenerateOutputEvent omitted.

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

// de_ReturnControlInvocationResults omitted.

// de_ReturnControlPayload omitted.

// de_ReturnControlResults omitted.

// de_RoutingClassifierModelInvocationOutput omitted.

/**
 * deserializeAws_restJson1RoutingClassifierTrace
 */
const de_RoutingClassifierTrace = (output: any, context: __SerdeContext): RoutingClassifierTrace => {
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
  return { $unknown: Object.entries(output)[0] };
};

// de_S3Location omitted.

// de_SessionMetadataMap omitted.

/**
 * deserializeAws_restJson1SessionSummaries
 */
const de_SessionSummaries = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionArn: __expectString,
    sessionId: __expectString,
    sessionStatus: __expectString,
  }) as any;
};

// de_Span omitted.

// de_StopSequences omitted.

// de_TagsMap omitted.

// de_TextPrompt omitted.

// de_TextResponsePart omitted.

/**
 * deserializeAws_restJson1Trace
 */
const de_Trace = (output: any, context: __SerdeContext): Trace => {
  if (output.customOrchestrationTrace != null) {
    return {
      customOrchestrationTrace: _json(output.customOrchestrationTrace),
    };
  }
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
  if (output.routingClassifierTrace != null) {
    return {
      routingClassifierTrace: de_RoutingClassifierTrace(__expectUnion(output.routingClassifierTrace), context),
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
    callerChain: _json,
    collaboratorName: __expectString,
    eventTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
const _eI = "executionId";
const _mI = "memoryId";
const _mIa = "maxItems";
const _mR = "maxResults";
const _mT = "memoryType";
const _nT = "nextToken";
const _sA = "sourceArn";
const _sI = "sessionId";
const _tK = "tagKeys";
const _xabact = "x-amzn-bedrock-agent-content-type";
const _xabami = "x-amz-bedrock-agent-memory-id";
const _xabasi = "x-amz-bedrock-agent-session-id";
const _xabfei = "x-amz-bedrock-flow-execution-id";
const _xabkbsi = "x-amzn-bedrock-knowledge-base-session-id";
const _xasa = "x-amz-source-arn";
