// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
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
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { InvokeAgentCommandInput, InvokeAgentCommandOutput } from "../commands/InvokeAgentCommand";
import {
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
} from "../commands/RetrieveAndGenerateCommand";
import { RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import { BedrockAgentRuntimeServiceException as __BaseException } from "../models/BedrockAgentRuntimeServiceException";
import {
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InferenceConfiguration,
  InternalServerException,
  KnowledgeBaseQuery,
  KnowledgeBaseRetrievalConfiguration,
  KnowledgeBaseRetrievalResult,
  KnowledgeBaseRetrieveAndGenerateConfiguration,
  KnowledgeBaseVectorSearchConfiguration,
  ModelInvocationInput,
  OrchestrationTrace,
  PayloadPart,
  PostProcessingTrace,
  PreProcessingTrace,
  ResourceNotFoundException,
  ResponseStream,
  RetrieveAndGenerateConfiguration,
  RetrieveAndGenerateInput,
  RetrieveAndGenerateSessionConfiguration,
  ServiceQuotaExceededException,
  SessionState,
  ThrottlingException,
  Trace,
  TracePart,
  ValidationException,
} from "../models/models_0";

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
      sessionState: (_) => _json(_),
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
      retrievalConfiguration: (_) => _json(_),
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
      retrieveAndGenerateConfiguration: (_) => _json(_),
      sessionConfiguration: (_) => _json(_),
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1InvokeAgentCommand
 */
export const de_InvokeAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InvokeAgentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_xabact]],
    [_sI]: [, output.headers[_xabasi]],
  });
  const data: any = output.body;
  contents.completion = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAgentCommandError
 */
const de_InvokeAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAgentCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1RetrieveCommand
 */
export const de_RetrieveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RetrieveCommandError(output, context);
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
 * deserializeAws_restJson1RetrieveCommandError
 */
const de_RetrieveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1RetrieveAndGenerateCommand
 */
export const de_RetrieveAndGenerateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveAndGenerateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RetrieveAndGenerateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    citations: _json,
    output: _json,
    sessionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RetrieveAndGenerateCommandError
 */
const de_RetrieveAndGenerateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveAndGenerateCommandOutput> => {
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
      });
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
// se_KnowledgeBaseQuery omitted.

// se_KnowledgeBaseRetrievalConfiguration omitted.

// se_KnowledgeBaseRetrieveAndGenerateConfiguration omitted.

// se_KnowledgeBaseVectorSearchConfiguration omitted.

// se_PromptSessionAttributesMap omitted.

// se_RetrieveAndGenerateConfiguration omitted.

// se_RetrieveAndGenerateInput omitted.

// se_RetrieveAndGenerateSessionConfiguration omitted.

// se_SessionAttributesMap omitted.

// se_SessionState omitted.

// de_ActionGroupInvocationInput omitted.

// de_ActionGroupInvocationOutput omitted.

// de_Attribution omitted.

// de_Citation omitted.

// de_Citations omitted.

// de_ContentMap omitted.

// de_FailureTrace omitted.

// de_FinalResponse omitted.

// de_GeneratedResponsePart omitted.

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

// de_KnowledgeBaseLookupInput omitted.

// de_KnowledgeBaseLookupOutput omitted.

/**
 * deserializeAws_restJson1KnowledgeBaseRetrievalResult
 */
const de_KnowledgeBaseRetrievalResult = (output: any, context: __SerdeContext): KnowledgeBaseRetrievalResult => {
  return take(output, {
    content: _json,
    location: _json,
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

// de_Observation omitted.

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
  if (output.observation != null) {
    return {
      observation: _json(output.observation),
    };
  }
  if (output.rationale != null) {
    return {
      rationale: _json(output.rationale),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_Parameter omitted.

// de_Parameters omitted.

/**
 * deserializeAws_restJson1PayloadPart
 */
const de_PayloadPart = (output: any, context: __SerdeContext): PayloadPart => {
  return take(output, {
    attribution: _json,
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

// de_Rationale omitted.

// de_RepromptResponse omitted.

// de_RequestBody omitted.

// de_RetrievalResultContent omitted.

// de_RetrievalResultLocation omitted.

// de_RetrievalResultS3Location omitted.

// de_RetrieveAndGenerateOutput omitted.

// de_RetrievedReference omitted.

// de_RetrievedReferences omitted.

// de_Span omitted.

// de_StopSequences omitted.

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
    sessionId: __expectString,
    trace: (_: any) => de_Trace(__expectUnion(_), context),
  }) as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _cT = "contentType";
const _sI = "sessionId";
const _xabact = "x-amzn-bedrock-agent-content-type";
const _xabasi = "x-amz-bedrock-agent-session-id";

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
