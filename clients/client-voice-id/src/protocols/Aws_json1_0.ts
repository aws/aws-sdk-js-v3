// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteFraudsterCommandInput, DeleteFraudsterCommandOutput } from "../commands/DeleteFraudsterCommand";
import { DeleteSpeakerCommandInput, DeleteSpeakerCommandOutput } from "../commands/DeleteSpeakerCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import { DescribeFraudsterCommandInput, DescribeFraudsterCommandOutput } from "../commands/DescribeFraudsterCommand";
import {
  DescribeFraudsterRegistrationJobCommandInput,
  DescribeFraudsterRegistrationJobCommandOutput,
} from "../commands/DescribeFraudsterRegistrationJobCommand";
import { DescribeSpeakerCommandInput, DescribeSpeakerCommandOutput } from "../commands/DescribeSpeakerCommand";
import {
  DescribeSpeakerEnrollmentJobCommandInput,
  DescribeSpeakerEnrollmentJobCommandOutput,
} from "../commands/DescribeSpeakerEnrollmentJobCommand";
import { EvaluateSessionCommandInput, EvaluateSessionCommandOutput } from "../commands/EvaluateSessionCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
} from "../commands/ListFraudsterRegistrationJobsCommand";
import {
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput,
} from "../commands/ListSpeakerEnrollmentJobsCommand";
import { ListSpeakersCommandInput, ListSpeakersCommandOutput } from "../commands/ListSpeakersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { OptOutSpeakerCommandInput, OptOutSpeakerCommandOutput } from "../commands/OptOutSpeakerCommand";
import {
  StartFraudsterRegistrationJobCommandInput,
  StartFraudsterRegistrationJobCommandOutput,
} from "../commands/StartFraudsterRegistrationJobCommand";
import {
  StartSpeakerEnrollmentJobCommandInput,
  StartSpeakerEnrollmentJobCommandOutput,
} from "../commands/StartSpeakerEnrollmentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import {
  AccessDeniedException,
  AuthenticationConfiguration,
  AuthenticationResult,
  ConflictException,
  CreateDomainRequest,
  CreateDomainResponse,
  DeleteDomainRequest,
  DeleteFraudsterRequest,
  DeleteSpeakerRequest,
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeFraudsterRegistrationJobRequest,
  DescribeFraudsterRegistrationJobResponse,
  DescribeFraudsterRequest,
  DescribeFraudsterResponse,
  DescribeSpeakerEnrollmentJobRequest,
  DescribeSpeakerEnrollmentJobResponse,
  DescribeSpeakerRequest,
  DescribeSpeakerResponse,
  Domain,
  DomainSummary,
  EnrollmentConfig,
  EnrollmentJobFraudDetectionConfig,
  EvaluateSessionRequest,
  EvaluateSessionResponse,
  FailureDetails,
  FraudDetectionConfiguration,
  FraudDetectionReason,
  FraudDetectionResult,
  FraudRiskDetails,
  Fraudster,
  FraudsterRegistrationJob,
  FraudsterRegistrationJobSummary,
  InputDataConfig,
  InternalServerException,
  JobProgress,
  KnownFraudsterRisk,
  ListDomainsRequest,
  ListDomainsResponse,
  ListFraudsterRegistrationJobsRequest,
  ListFraudsterRegistrationJobsResponse,
  ListSpeakerEnrollmentJobsRequest,
  ListSpeakerEnrollmentJobsResponse,
  ListSpeakersRequest,
  ListSpeakersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OptOutSpeakerRequest,
  OptOutSpeakerResponse,
  OutputDataConfig,
  RegistrationConfig,
  ResourceNotFoundException,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionUpdateDetails,
  ServiceQuotaExceededException,
  Speaker,
  SpeakerEnrollmentJob,
  SpeakerEnrollmentJobSummary,
  SpeakerSummary,
  StartFraudsterRegistrationJobRequest,
  StartFraudsterRegistrationJobResponse,
  StartSpeakerEnrollmentJobRequest,
  StartSpeakerEnrollmentJobResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDomainRequest,
  UpdateDomainResponse,
  ValidationException,
  VoiceSpoofingRisk,
} from "../models/models_0";
import { VoiceIDServiceException as __BaseException } from "../models/VoiceIDServiceException";

export const serializeAws_json1_0CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.CreateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFraudsterCommand = async (
  input: DeleteFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteFraudster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteSpeakerCommand = async (
  input: DeleteSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteSpeaker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFraudsterCommand = async (
  input: DescribeFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeFraudster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFraudsterRegistrationJobCommand = async (
  input: DescribeFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeFraudsterRegistrationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFraudsterRegistrationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeSpeakerCommand = async (
  input: DescribeSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeSpeaker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeSpeakerEnrollmentJobCommand = async (
  input: DescribeSpeakerEnrollmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeSpeakerEnrollmentJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeSpeakerEnrollmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0EvaluateSessionCommand = async (
  input: EvaluateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.EvaluateSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0EvaluateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFraudsterRegistrationJobsCommand = async (
  input: ListFraudsterRegistrationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListFraudsterRegistrationJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFraudsterRegistrationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSpeakerEnrollmentJobsCommand = async (
  input: ListSpeakerEnrollmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListSpeakerEnrollmentJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSpeakerEnrollmentJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSpeakersCommand = async (
  input: ListSpeakersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListSpeakers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSpeakersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0OptOutSpeakerCommand = async (
  input: OptOutSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.OptOutSpeaker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0OptOutSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartFraudsterRegistrationJobCommand = async (
  input: StartFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.StartFraudsterRegistrationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartFraudsterRegistrationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartSpeakerEnrollmentJobCommand = async (
  input: StartSpeakerEnrollmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.StartSpeakerEnrollmentJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartSpeakerEnrollmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.UpdateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateDomainResponse(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DeleteFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFraudsterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFraudsterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFraudsterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DeleteSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteSpeakerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteSpeakerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpeakerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeDomainResponse(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DescribeFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFraudsterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFraudsterResponse(data, context);
  const response: DescribeFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFraudsterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DescribeFraudsterRegistrationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterRegistrationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFraudsterRegistrationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFraudsterRegistrationJobResponse(data, context);
  const response: DescribeFraudsterRegistrationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFraudsterRegistrationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterRegistrationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DescribeSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeSpeakerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeSpeakerResponse(data, context);
  const response: DescribeSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeSpeakerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0DescribeSpeakerEnrollmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerEnrollmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeSpeakerEnrollmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeSpeakerEnrollmentJobResponse(data, context);
  const response: DescribeSpeakerEnrollmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeSpeakerEnrollmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerEnrollmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0EvaluateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0EvaluateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0EvaluateSessionResponse(data, context);
  const response: EvaluateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0EvaluateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListFraudsterRegistrationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFraudsterRegistrationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFraudsterRegistrationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFraudsterRegistrationJobsResponse(data, context);
  const response: ListFraudsterRegistrationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFraudsterRegistrationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFraudsterRegistrationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListSpeakerEnrollmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakerEnrollmentJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSpeakerEnrollmentJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSpeakerEnrollmentJobsResponse(data, context);
  const response: ListSpeakerEnrollmentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSpeakerEnrollmentJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakerEnrollmentJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListSpeakersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSpeakersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSpeakersResponse(data, context);
  const response: ListSpeakersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSpeakersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0OptOutSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptOutSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0OptOutSpeakerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0OptOutSpeakerResponse(data, context);
  const response: OptOutSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0OptOutSpeakerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptOutSpeakerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0StartFraudsterRegistrationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFraudsterRegistrationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartFraudsterRegistrationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartFraudsterRegistrationJobResponse(data, context);
  const response: StartFraudsterRegistrationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartFraudsterRegistrationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFraudsterRegistrationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0StartSpeakerEnrollmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeakerEnrollmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartSpeakerEnrollmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartSpeakerEnrollmentJobResponse(data, context);
  const response: StartSpeakerEnrollmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartSpeakerEnrollmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeakerEnrollmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_0UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateDomainResponse(data, context);
  const response: UpdateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: serializeAws_json1_0ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
  };
};

const serializeAws_json1_0DeleteFraudsterRequest = (input: DeleteFraudsterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
  };
};

const serializeAws_json1_0DeleteSpeakerRequest = (input: DeleteSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

const serializeAws_json1_0DescribeDomainRequest = (input: DescribeDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
  };
};

const serializeAws_json1_0DescribeFraudsterRegistrationJobRequest = (
  input: DescribeFraudsterRegistrationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0DescribeFraudsterRequest = (
  input: DescribeFraudsterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
  };
};

const serializeAws_json1_0DescribeSpeakerEnrollmentJobRequest = (
  input: DescribeSpeakerEnrollmentJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0DescribeSpeakerRequest = (input: DescribeSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

const serializeAws_json1_0EnrollmentConfig = (input: EnrollmentConfig, context: __SerdeContext): any => {
  return {
    ...(input.ExistingEnrollmentAction != null && { ExistingEnrollmentAction: input.ExistingEnrollmentAction }),
    ...(input.FraudDetectionConfig != null && {
      FraudDetectionConfig: serializeAws_json1_0EnrollmentJobFraudDetectionConfig(input.FraudDetectionConfig, context),
    }),
  };
};

const serializeAws_json1_0EnrollmentJobFraudDetectionConfig = (
  input: EnrollmentJobFraudDetectionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.FraudDetectionAction != null && { FraudDetectionAction: input.FraudDetectionAction }),
    ...(input.RiskThreshold != null && { RiskThreshold: input.RiskThreshold }),
  };
};

const serializeAws_json1_0EvaluateSessionRequest = (input: EvaluateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SessionNameOrId != null && { SessionNameOrId: input.SessionNameOrId }),
  };
};

const serializeAws_json1_0InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_0ListDomainsRequest = (input: ListDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListFraudsterRegistrationJobsRequest = (
  input: ListFraudsterRegistrationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListSpeakerEnrollmentJobsRequest = (
  input: ListSpeakerEnrollmentJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListSpeakersRequest = (input: ListSpeakersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0OptOutSpeakerRequest = (input: OptOutSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

const serializeAws_json1_0OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_0RegistrationConfig = (input: RegistrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.DuplicateRegistrationAction != null && {
      DuplicateRegistrationAction: input.DuplicateRegistrationAction,
    }),
    ...(input.FraudsterSimilarityThreshold != null && {
      FraudsterSimilarityThreshold: input.FraudsterSimilarityThreshold,
    }),
  };
};

const serializeAws_json1_0ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_json1_0StartFraudsterRegistrationJobRequest = (
  input: StartFraudsterRegistrationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_0InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_0OutputDataConfig(input.OutputDataConfig, context),
    }),
    ...(input.RegistrationConfig != null && {
      RegistrationConfig: serializeAws_json1_0RegistrationConfig(input.RegistrationConfig, context),
    }),
  };
};

const serializeAws_json1_0StartSpeakerEnrollmentJobRequest = (
  input: StartSpeakerEnrollmentJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.EnrollmentConfig != null && {
      EnrollmentConfig: serializeAws_json1_0EnrollmentConfig(input.EnrollmentConfig, context),
    }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_0InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_0OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateDomainRequest = (input: UpdateDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: serializeAws_json1_0ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0AuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): AuthenticationConfiguration => {
  return {
    AcceptanceThreshold: __expectInt32(output.AcceptanceThreshold),
  } as any;
};

const deserializeAws_json1_0AuthenticationResult = (output: any, context: __SerdeContext): AuthenticationResult => {
  return {
    AudioAggregationEndedAt:
      output.AudioAggregationEndedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AudioAggregationEndedAt)))
        : undefined,
    AudioAggregationStartedAt:
      output.AudioAggregationStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AudioAggregationStartedAt)))
        : undefined,
    AuthenticationResultId: __expectString(output.AuthenticationResultId),
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_0AuthenticationConfiguration(output.Configuration, context)
        : undefined,
    CustomerSpeakerId: __expectString(output.CustomerSpeakerId),
    Decision: __expectString(output.Decision),
    GeneratedSpeakerId: __expectString(output.GeneratedSpeakerId),
    Score: __expectInt32(output.Score),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ConflictType: __expectString(output.ConflictType),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  return {
    Domain: output.Domain != null ? deserializeAws_json1_0Domain(output.Domain, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeDomainResponse = (output: any, context: __SerdeContext): DescribeDomainResponse => {
  return {
    Domain: output.Domain != null ? deserializeAws_json1_0Domain(output.Domain, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFraudsterRegistrationJobResponse => {
  return {
    Job: output.Job != null ? deserializeAws_json1_0FraudsterRegistrationJob(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFraudsterResponse = (
  output: any,
  context: __SerdeContext
): DescribeFraudsterResponse => {
  return {
    Fraudster: output.Fraudster != null ? deserializeAws_json1_0Fraudster(output.Fraudster, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSpeakerEnrollmentJobResponse => {
  return {
    Job: output.Job != null ? deserializeAws_json1_0SpeakerEnrollmentJob(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeSpeakerResponse = (
  output: any,
  context: __SerdeContext
): DescribeSpeakerResponse => {
  return {
    Speaker: output.Speaker != null ? deserializeAws_json1_0Speaker(output.Speaker, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Domain = (output: any, context: __SerdeContext): Domain => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DomainId: __expectString(output.DomainId),
    DomainStatus: __expectString(output.DomainStatus),
    Name: __expectString(output.Name),
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration != null
        ? deserializeAws_json1_0ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    ServerSideEncryptionUpdateDetails:
      output.ServerSideEncryptionUpdateDetails != null
        ? deserializeAws_json1_0ServerSideEncryptionUpdateDetails(output.ServerSideEncryptionUpdateDetails, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0DomainSummaries = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DomainSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DomainId: __expectString(output.DomainId),
    DomainStatus: __expectString(output.DomainStatus),
    Name: __expectString(output.Name),
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration != null
        ? deserializeAws_json1_0ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    ServerSideEncryptionUpdateDetails:
      output.ServerSideEncryptionUpdateDetails != null
        ? deserializeAws_json1_0ServerSideEncryptionUpdateDetails(output.ServerSideEncryptionUpdateDetails, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0EnrollmentConfig = (output: any, context: __SerdeContext): EnrollmentConfig => {
  return {
    ExistingEnrollmentAction: __expectString(output.ExistingEnrollmentAction),
    FraudDetectionConfig:
      output.FraudDetectionConfig != null
        ? deserializeAws_json1_0EnrollmentJobFraudDetectionConfig(output.FraudDetectionConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0EnrollmentJobFraudDetectionConfig = (
  output: any,
  context: __SerdeContext
): EnrollmentJobFraudDetectionConfig => {
  return {
    FraudDetectionAction: __expectString(output.FraudDetectionAction),
    RiskThreshold: __expectInt32(output.RiskThreshold),
  } as any;
};

const deserializeAws_json1_0EvaluateSessionResponse = (
  output: any,
  context: __SerdeContext
): EvaluateSessionResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null
        ? deserializeAws_json1_0AuthenticationResult(output.AuthenticationResult, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    FraudDetectionResult:
      output.FraudDetectionResult != null
        ? deserializeAws_json1_0FraudDetectionResult(output.FraudDetectionResult, context)
        : undefined,
    SessionId: __expectString(output.SessionId),
    SessionName: __expectString(output.SessionName),
    StreamingStatus: __expectString(output.StreamingStatus),
  } as any;
};

const deserializeAws_json1_0FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_json1_0FraudDetectionConfiguration = (
  output: any,
  context: __SerdeContext
): FraudDetectionConfiguration => {
  return {
    RiskThreshold: __expectInt32(output.RiskThreshold),
  } as any;
};

const deserializeAws_json1_0FraudDetectionReasons = (
  output: any,
  context: __SerdeContext
): (FraudDetectionReason | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_0FraudDetectionResult = (output: any, context: __SerdeContext): FraudDetectionResult => {
  return {
    AudioAggregationEndedAt:
      output.AudioAggregationEndedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AudioAggregationEndedAt)))
        : undefined,
    AudioAggregationStartedAt:
      output.AudioAggregationStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AudioAggregationStartedAt)))
        : undefined,
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_0FraudDetectionConfiguration(output.Configuration, context)
        : undefined,
    Decision: __expectString(output.Decision),
    FraudDetectionResultId: __expectString(output.FraudDetectionResultId),
    Reasons: output.Reasons != null ? deserializeAws_json1_0FraudDetectionReasons(output.Reasons, context) : undefined,
    RiskDetails:
      output.RiskDetails != null ? deserializeAws_json1_0FraudRiskDetails(output.RiskDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_0FraudRiskDetails = (output: any, context: __SerdeContext): FraudRiskDetails => {
  return {
    KnownFraudsterRisk:
      output.KnownFraudsterRisk != null
        ? deserializeAws_json1_0KnownFraudsterRisk(output.KnownFraudsterRisk, context)
        : undefined,
    VoiceSpoofingRisk:
      output.VoiceSpoofingRisk != null
        ? deserializeAws_json1_0VoiceSpoofingRisk(output.VoiceSpoofingRisk, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Fraudster = (output: any, context: __SerdeContext): Fraudster => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    GeneratedFraudsterId: __expectString(output.GeneratedFraudsterId),
  } as any;
};

const deserializeAws_json1_0FraudsterRegistrationJob = (
  output: any,
  context: __SerdeContext
): FraudsterRegistrationJob => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_0FailureDetails(output.FailureDetails, context) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_0InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress:
      output.JobProgress != null ? deserializeAws_json1_0JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_0OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    RegistrationConfig:
      output.RegistrationConfig != null
        ? deserializeAws_json1_0RegistrationConfig(output.RegistrationConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0FraudsterRegistrationJobSummaries = (
  output: any,
  context: __SerdeContext
): FraudsterRegistrationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0FraudsterRegistrationJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0FraudsterRegistrationJobSummary = (
  output: any,
  context: __SerdeContext
): FraudsterRegistrationJobSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_0FailureDetails(output.FailureDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress:
      output.JobProgress != null ? deserializeAws_json1_0JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_0InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0JobProgress = (output: any, context: __SerdeContext): JobProgress => {
  return {
    PercentComplete: __expectInt32(output.PercentComplete),
  } as any;
};

const deserializeAws_json1_0KnownFraudsterRisk = (output: any, context: __SerdeContext): KnownFraudsterRisk => {
  return {
    GeneratedFraudsterId: __expectString(output.GeneratedFraudsterId),
    RiskScore: __expectInt32(output.RiskScore),
  } as any;
};

const deserializeAws_json1_0ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return {
    DomainSummaries:
      output.DomainSummaries != null
        ? deserializeAws_json1_0DomainSummaries(output.DomainSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListFraudsterRegistrationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListFraudsterRegistrationJobsResponse => {
  return {
    JobSummaries:
      output.JobSummaries != null
        ? deserializeAws_json1_0FraudsterRegistrationJobSummaries(output.JobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListSpeakerEnrollmentJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSpeakerEnrollmentJobsResponse => {
  return {
    JobSummaries:
      output.JobSummaries != null
        ? deserializeAws_json1_0SpeakerEnrollmentJobSummaries(output.JobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListSpeakersResponse = (output: any, context: __SerdeContext): ListSpeakersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SpeakerSummaries:
      output.SpeakerSummaries != null
        ? deserializeAws_json1_0SpeakerSummaries(output.SpeakerSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0OptOutSpeakerResponse = (output: any, context: __SerdeContext): OptOutSpeakerResponse => {
  return {
    Speaker: output.Speaker != null ? deserializeAws_json1_0Speaker(output.Speaker, context) : undefined,
  } as any;
};

const deserializeAws_json1_0OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_0RegistrationConfig = (output: any, context: __SerdeContext): RegistrationConfig => {
  return {
    DuplicateRegistrationAction: __expectString(output.DuplicateRegistrationAction),
    FraudsterSimilarityThreshold: __expectInt32(output.FraudsterSimilarityThreshold),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_0ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_json1_0ServerSideEncryptionUpdateDetails = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionUpdateDetails => {
  return {
    Message: __expectString(output.Message),
    OldKmsKeyId: __expectString(output.OldKmsKeyId),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0Speaker = (output: any, context: __SerdeContext): Speaker => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CustomerSpeakerId: __expectString(output.CustomerSpeakerId),
    DomainId: __expectString(output.DomainId),
    GeneratedSpeakerId: __expectString(output.GeneratedSpeakerId),
    LastAccessedAt:
      output.LastAccessedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedAt)))
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0SpeakerEnrollmentJob = (output: any, context: __SerdeContext): SpeakerEnrollmentJob => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    EnrollmentConfig:
      output.EnrollmentConfig != null
        ? deserializeAws_json1_0EnrollmentConfig(output.EnrollmentConfig, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_0FailureDetails(output.FailureDetails, context) : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_0InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress:
      output.JobProgress != null ? deserializeAws_json1_0JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_0OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0SpeakerEnrollmentJobSummaries = (
  output: any,
  context: __SerdeContext
): SpeakerEnrollmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SpeakerEnrollmentJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SpeakerEnrollmentJobSummary = (
  output: any,
  context: __SerdeContext
): SpeakerEnrollmentJobSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_0FailureDetails(output.FailureDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress:
      output.JobProgress != null ? deserializeAws_json1_0JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_0SpeakerSummaries = (output: any, context: __SerdeContext): SpeakerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SpeakerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SpeakerSummary = (output: any, context: __SerdeContext): SpeakerSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CustomerSpeakerId: __expectString(output.CustomerSpeakerId),
    DomainId: __expectString(output.DomainId),
    GeneratedSpeakerId: __expectString(output.GeneratedSpeakerId),
    LastAccessedAt:
      output.LastAccessedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedAt)))
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0StartFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): StartFraudsterRegistrationJobResponse => {
  return {
    Job: output.Job != null ? deserializeAws_json1_0FraudsterRegistrationJob(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_0StartSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): StartSpeakerEnrollmentJobResponse => {
  return {
    Job: output.Job != null ? deserializeAws_json1_0SpeakerEnrollmentJob(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateDomainResponse = (output: any, context: __SerdeContext): UpdateDomainResponse => {
  return {
    Domain: output.Domain != null ? deserializeAws_json1_0Domain(output.Domain, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0VoiceSpoofingRisk = (output: any, context: __SerdeContext): VoiceSpoofingRisk => {
  return {
    RiskScore: __expectInt32(output.RiskScore),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
