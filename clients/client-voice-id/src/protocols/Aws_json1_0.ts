// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateFraudsterCommandInput, AssociateFraudsterCommandOutput } from "../commands/AssociateFraudsterCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateWatchlistCommandInput, CreateWatchlistCommandOutput } from "../commands/CreateWatchlistCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteFraudsterCommandInput, DeleteFraudsterCommandOutput } from "../commands/DeleteFraudsterCommand";
import { DeleteSpeakerCommandInput, DeleteSpeakerCommandOutput } from "../commands/DeleteSpeakerCommand";
import { DeleteWatchlistCommandInput, DeleteWatchlistCommandOutput } from "../commands/DeleteWatchlistCommand";
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
import { DescribeWatchlistCommandInput, DescribeWatchlistCommandOutput } from "../commands/DescribeWatchlistCommand";
import {
  DisassociateFraudsterCommandInput,
  DisassociateFraudsterCommandOutput,
} from "../commands/DisassociateFraudsterCommand";
import { EvaluateSessionCommandInput, EvaluateSessionCommandOutput } from "../commands/EvaluateSessionCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
} from "../commands/ListFraudsterRegistrationJobsCommand";
import { ListFraudstersCommandInput, ListFraudstersCommandOutput } from "../commands/ListFraudstersCommand";
import {
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput,
} from "../commands/ListSpeakerEnrollmentJobsCommand";
import { ListSpeakersCommandInput, ListSpeakersCommandOutput } from "../commands/ListSpeakersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWatchlistsCommandInput, ListWatchlistsCommandOutput } from "../commands/ListWatchlistsCommand";
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
import { UpdateWatchlistCommandInput, UpdateWatchlistCommandOutput } from "../commands/UpdateWatchlistCommand";
import {
  AccessDeniedException,
  AssociateFraudsterRequest,
  AssociateFraudsterResponse,
  AuthenticationResult,
  ConflictException,
  CreateDomainRequest,
  CreateDomainResponse,
  CreateWatchlistRequest,
  CreateWatchlistResponse,
  DeleteDomainRequest,
  DeleteFraudsterRequest,
  DeleteSpeakerRequest,
  DeleteWatchlistRequest,
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
  DescribeWatchlistRequest,
  DescribeWatchlistResponse,
  DisassociateFraudsterRequest,
  DisassociateFraudsterResponse,
  Domain,
  DomainSummary,
  EnrollmentConfig,
  EnrollmentJobFraudDetectionConfig,
  EvaluateSessionRequest,
  EvaluateSessionResponse,
  FraudDetectionResult,
  Fraudster,
  FraudsterRegistrationJob,
  FraudsterRegistrationJobSummary,
  FraudsterSummary,
  InputDataConfig,
  InternalServerException,
  ListDomainsRequest,
  ListDomainsResponse,
  ListFraudsterRegistrationJobsRequest,
  ListFraudsterRegistrationJobsResponse,
  ListFraudstersRequest,
  ListFraudstersResponse,
  ListSpeakerEnrollmentJobsRequest,
  ListSpeakerEnrollmentJobsResponse,
  ListSpeakersRequest,
  ListSpeakersResponse,
  ListTagsForResourceRequest,
  ListWatchlistsRequest,
  ListWatchlistsResponse,
  OptOutSpeakerRequest,
  OptOutSpeakerResponse,
  OutputDataConfig,
  RegistrationConfig,
  ResourceNotFoundException,
  ServerSideEncryptionConfiguration,
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
  ThrottlingException,
  UntagResourceRequest,
  UpdateDomainRequest,
  UpdateDomainResponse,
  UpdateWatchlistRequest,
  UpdateWatchlistResponse,
  ValidationException,
  Watchlist,
  WatchlistSummary,
} from "../models/models_0";
import { VoiceIDServiceException as __BaseException } from "../models/VoiceIDServiceException";

/**
 * serializeAws_json1_0AssociateFraudsterCommand
 */
export const se_AssociateFraudsterCommand = async (
  input: AssociateFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFraudster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDomain");
  let body: any;
  body = JSON.stringify(se_CreateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateWatchlistCommand
 */
export const se_CreateWatchlistCommand = async (
  input: CreateWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWatchlist");
  let body: any;
  body = JSON.stringify(se_CreateWatchlistRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFraudsterCommand
 */
export const se_DeleteFraudsterCommand = async (
  input: DeleteFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFraudster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSpeakerCommand
 */
export const se_DeleteSpeakerCommand = async (
  input: DeleteSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSpeaker");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteWatchlistCommand
 */
export const se_DeleteWatchlistCommand = async (
  input: DeleteWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWatchlist");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFraudsterCommand
 */
export const se_DescribeFraudsterCommand = async (
  input: DescribeFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFraudster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFraudsterRegistrationJobCommand
 */
export const se_DescribeFraudsterRegistrationJobCommand = async (
  input: DescribeFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFraudsterRegistrationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSpeakerCommand
 */
export const se_DescribeSpeakerCommand = async (
  input: DescribeSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSpeaker");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSpeakerEnrollmentJobCommand
 */
export const se_DescribeSpeakerEnrollmentJobCommand = async (
  input: DescribeSpeakerEnrollmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSpeakerEnrollmentJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWatchlistCommand
 */
export const se_DescribeWatchlistCommand = async (
  input: DescribeWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWatchlist");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateFraudsterCommand
 */
export const se_DisassociateFraudsterCommand = async (
  input: DisassociateFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFraudster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0EvaluateSessionCommand
 */
export const se_EvaluateSessionCommand = async (
  input: EvaluateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EvaluateSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFraudsterRegistrationJobsCommand
 */
export const se_ListFraudsterRegistrationJobsCommand = async (
  input: ListFraudsterRegistrationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFraudsterRegistrationJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFraudstersCommand
 */
export const se_ListFraudstersCommand = async (
  input: ListFraudstersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFraudsters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSpeakerEnrollmentJobsCommand
 */
export const se_ListSpeakerEnrollmentJobsCommand = async (
  input: ListSpeakerEnrollmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSpeakerEnrollmentJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSpeakersCommand
 */
export const se_ListSpeakersCommand = async (
  input: ListSpeakersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSpeakers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListWatchlistsCommand
 */
export const se_ListWatchlistsCommand = async (
  input: ListWatchlistsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWatchlists");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OptOutSpeakerCommand
 */
export const se_OptOutSpeakerCommand = async (
  input: OptOutSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OptOutSpeaker");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartFraudsterRegistrationJobCommand
 */
export const se_StartFraudsterRegistrationJobCommand = async (
  input: StartFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFraudsterRegistrationJob");
  let body: any;
  body = JSON.stringify(se_StartFraudsterRegistrationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartSpeakerEnrollmentJobCommand
 */
export const se_StartSpeakerEnrollmentJobCommand = async (
  input: StartSpeakerEnrollmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSpeakerEnrollmentJob");
  let body: any;
  body = JSON.stringify(se_StartSpeakerEnrollmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateWatchlistCommand
 */
export const se_UpdateWatchlistCommand = async (
  input: UpdateWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWatchlist");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateFraudsterCommand
 */
export const de_AssociateFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFraudsterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFraudsterResponse(data, context);
  const response: AssociateFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0AssociateFraudsterCommandError
 */
const de_AssociateFraudsterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFraudsterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDomainResponse(data, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0CreateWatchlistCommand
 */
export const de_CreateWatchlistCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWatchlistCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWatchlistCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWatchlistResponse(data, context);
  const response: CreateWatchlistCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateWatchlistCommandError
 */
const de_CreateWatchlistCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWatchlistCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DeleteFraudsterCommand
 */
export const de_DeleteFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFraudsterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteFraudsterCommandError
 */
const de_DeleteFraudsterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DeleteSpeakerCommand
 */
export const de_DeleteSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSpeakerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteSpeakerCommandError
 */
const de_DeleteSpeakerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DeleteWatchlistCommand
 */
export const de_DeleteWatchlistCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWatchlistCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWatchlistCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWatchlistCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteWatchlistCommandError
 */
const de_DeleteWatchlistCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWatchlistCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainResponse(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeDomainCommandError
 */
const de_DescribeDomainCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeFraudsterCommand
 */
export const de_DescribeFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFraudsterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFraudsterResponse(data, context);
  const response: DescribeFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeFraudsterCommandError
 */
const de_DescribeFraudsterCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeFraudsterRegistrationJobCommand
 */
export const de_DescribeFraudsterRegistrationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFraudsterRegistrationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFraudsterRegistrationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFraudsterRegistrationJobResponse(data, context);
  const response: DescribeFraudsterRegistrationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeFraudsterRegistrationJobCommandError
 */
const de_DescribeFraudsterRegistrationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeSpeakerCommand
 */
export const de_DescribeSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSpeakerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSpeakerResponse(data, context);
  const response: DescribeSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeSpeakerCommandError
 */
const de_DescribeSpeakerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeSpeakerEnrollmentJobCommand
 */
export const de_DescribeSpeakerEnrollmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpeakerEnrollmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSpeakerEnrollmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSpeakerEnrollmentJobResponse(data, context);
  const response: DescribeSpeakerEnrollmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeSpeakerEnrollmentJobCommandError
 */
const de_DescribeSpeakerEnrollmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DescribeWatchlistCommand
 */
export const de_DescribeWatchlistCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWatchlistCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWatchlistCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWatchlistResponse(data, context);
  const response: DescribeWatchlistCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeWatchlistCommandError
 */
const de_DescribeWatchlistCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWatchlistCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0DisassociateFraudsterCommand
 */
export const de_DisassociateFraudsterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFraudsterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFraudsterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateFraudsterResponse(data, context);
  const response: DisassociateFraudsterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateFraudsterCommandError
 */
const de_DisassociateFraudsterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFraudsterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0EvaluateSessionCommand
 */
export const de_EvaluateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EvaluateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EvaluateSessionResponse(data, context);
  const response: EvaluateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0EvaluateSessionCommandError
 */
const de_EvaluateSessionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListFraudsterRegistrationJobsCommand
 */
export const de_ListFraudsterRegistrationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFraudsterRegistrationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFraudsterRegistrationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFraudsterRegistrationJobsResponse(data, context);
  const response: ListFraudsterRegistrationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListFraudsterRegistrationJobsCommandError
 */
const de_ListFraudsterRegistrationJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListFraudstersCommand
 */
export const de_ListFraudstersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFraudstersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFraudstersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFraudstersResponse(data, context);
  const response: ListFraudstersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListFraudstersCommandError
 */
const de_ListFraudstersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFraudstersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListSpeakerEnrollmentJobsCommand
 */
export const de_ListSpeakerEnrollmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakerEnrollmentJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSpeakerEnrollmentJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSpeakerEnrollmentJobsResponse(data, context);
  const response: ListSpeakerEnrollmentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSpeakerEnrollmentJobsCommandError
 */
const de_ListSpeakerEnrollmentJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListSpeakersCommand
 */
export const de_ListSpeakersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpeakersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSpeakersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSpeakersResponse(data, context);
  const response: ListSpeakersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSpeakersCommandError
 */
const de_ListSpeakersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0ListWatchlistsCommand
 */
export const de_ListWatchlistsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWatchlistsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWatchlistsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWatchlistsResponse(data, context);
  const response: ListWatchlistsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListWatchlistsCommandError
 */
const de_ListWatchlistsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWatchlistsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0OptOutSpeakerCommand
 */
export const de_OptOutSpeakerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptOutSpeakerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OptOutSpeakerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OptOutSpeakerResponse(data, context);
  const response: OptOutSpeakerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0OptOutSpeakerCommandError
 */
const de_OptOutSpeakerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0StartFraudsterRegistrationJobCommand
 */
export const de_StartFraudsterRegistrationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFraudsterRegistrationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFraudsterRegistrationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFraudsterRegistrationJobResponse(data, context);
  const response: StartFraudsterRegistrationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartFraudsterRegistrationJobCommandError
 */
const de_StartFraudsterRegistrationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0StartSpeakerEnrollmentJobCommand
 */
export const de_StartSpeakerEnrollmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeakerEnrollmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSpeakerEnrollmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSpeakerEnrollmentJobResponse(data, context);
  const response: StartSpeakerEnrollmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartSpeakerEnrollmentJobCommandError
 */
const de_StartSpeakerEnrollmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.voiceid#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainResponse(data, context);
  const response: UpdateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateDomainCommandError
 */
const de_UpdateDomainCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0UpdateWatchlistCommand
 */
export const de_UpdateWatchlistCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWatchlistCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWatchlistCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWatchlistResponse(data, context);
  const response: UpdateWatchlistCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateWatchlistCommandError
 */
const de_UpdateWatchlistCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWatchlistCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.voiceid#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.voiceid#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.voiceid#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.voiceid#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.voiceid#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.voiceid#ValidationException":
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateFraudsterRequest omitted.

/**
 * serializeAws_json1_0CreateDomainRequest
 */
const se_CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    ServerSideEncryptionConfiguration: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateWatchlistRequest
 */
const se_CreateWatchlistRequest = (input: CreateWatchlistRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    DomainId: [],
    Name: [],
  });
};

// se_DeleteDomainRequest omitted.

// se_DeleteFraudsterRequest omitted.

// se_DeleteSpeakerRequest omitted.

// se_DeleteWatchlistRequest omitted.

// se_DescribeDomainRequest omitted.

// se_DescribeFraudsterRegistrationJobRequest omitted.

// se_DescribeFraudsterRequest omitted.

// se_DescribeSpeakerEnrollmentJobRequest omitted.

// se_DescribeSpeakerRequest omitted.

// se_DescribeWatchlistRequest omitted.

// se_DisassociateFraudsterRequest omitted.

// se_EnrollmentConfig omitted.

// se_EnrollmentJobFraudDetectionConfig omitted.

// se_EnrollmentJobFraudDetectionConfigWatchlistIds omitted.

// se_EvaluateSessionRequest omitted.

// se_InputDataConfig omitted.

// se_ListDomainsRequest omitted.

// se_ListFraudsterRegistrationJobsRequest omitted.

// se_ListFraudstersRequest omitted.

// se_ListSpeakerEnrollmentJobsRequest omitted.

// se_ListSpeakersRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListWatchlistsRequest omitted.

// se_OptOutSpeakerRequest omitted.

// se_OutputDataConfig omitted.

// se_RegistrationConfig omitted.

// se_RegistrationConfigWatchlistIds omitted.

// se_ServerSideEncryptionConfiguration omitted.

/**
 * serializeAws_json1_0StartFraudsterRegistrationJobRequest
 */
const se_StartFraudsterRegistrationJobRequest = (
  input: StartFraudsterRegistrationJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DomainId: [],
    InputDataConfig: _json,
    JobName: [],
    OutputDataConfig: _json,
    RegistrationConfig: _json,
  });
};

/**
 * serializeAws_json1_0StartSpeakerEnrollmentJobRequest
 */
const se_StartSpeakerEnrollmentJobRequest = (input: StartSpeakerEnrollmentJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    DomainId: [],
    EnrollmentConfig: _json,
    InputDataConfig: _json,
    JobName: [],
    OutputDataConfig: _json,
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDomainRequest omitted.

// se_UpdateWatchlistRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0AssociateFraudsterResponse
 */
const de_AssociateFraudsterResponse = (output: any, context: __SerdeContext): AssociateFraudsterResponse => {
  return take(output, {
    Fraudster: (_: any) => de_Fraudster(_, context),
  }) as any;
};

// de_AuthenticationConfiguration omitted.

/**
 * deserializeAws_json1_0AuthenticationResult
 */
const de_AuthenticationResult = (output: any, context: __SerdeContext): AuthenticationResult => {
  return take(output, {
    AudioAggregationEndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AudioAggregationStartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AuthenticationResultId: __expectString,
    Configuration: _json,
    CustomerSpeakerId: __expectString,
    Decision: __expectString,
    GeneratedSpeakerId: __expectString,
    Score: __expectInt32,
  }) as any;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateDomainResponse
 */
const de_CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  return take(output, {
    Domain: (_: any) => de_Domain(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateWatchlistResponse
 */
const de_CreateWatchlistResponse = (output: any, context: __SerdeContext): CreateWatchlistResponse => {
  return take(output, {
    Watchlist: (_: any) => de_Watchlist(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeDomainResponse
 */
const de_DescribeDomainResponse = (output: any, context: __SerdeContext): DescribeDomainResponse => {
  return take(output, {
    Domain: (_: any) => de_Domain(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeFraudsterRegistrationJobResponse
 */
const de_DescribeFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFraudsterRegistrationJobResponse => {
  return take(output, {
    Job: (_: any) => de_FraudsterRegistrationJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeFraudsterResponse
 */
const de_DescribeFraudsterResponse = (output: any, context: __SerdeContext): DescribeFraudsterResponse => {
  return take(output, {
    Fraudster: (_: any) => de_Fraudster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeSpeakerEnrollmentJobResponse
 */
const de_DescribeSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSpeakerEnrollmentJobResponse => {
  return take(output, {
    Job: (_: any) => de_SpeakerEnrollmentJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeSpeakerResponse
 */
const de_DescribeSpeakerResponse = (output: any, context: __SerdeContext): DescribeSpeakerResponse => {
  return take(output, {
    Speaker: (_: any) => de_Speaker(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeWatchlistResponse
 */
const de_DescribeWatchlistResponse = (output: any, context: __SerdeContext): DescribeWatchlistResponse => {
  return take(output, {
    Watchlist: (_: any) => de_Watchlist(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DisassociateFraudsterResponse
 */
const de_DisassociateFraudsterResponse = (output: any, context: __SerdeContext): DisassociateFraudsterResponse => {
  return take(output, {
    Fraudster: (_: any) => de_Fraudster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Domain
 */
const de_Domain = (output: any, context: __SerdeContext): Domain => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DomainId: __expectString,
    DomainStatus: __expectString,
    Name: __expectString,
    ServerSideEncryptionConfiguration: _json,
    ServerSideEncryptionUpdateDetails: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WatchlistDetails: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0DomainSummaries
 */
const de_DomainSummaries = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DomainId: __expectString,
    DomainStatus: __expectString,
    Name: __expectString,
    ServerSideEncryptionConfiguration: _json,
    ServerSideEncryptionUpdateDetails: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WatchlistDetails: _json,
  }) as any;
};

// de_EnrollmentConfig omitted.

// de_EnrollmentJobFraudDetectionConfig omitted.

// de_EnrollmentJobFraudDetectionConfigWatchlistIds omitted.

/**
 * deserializeAws_json1_0EvaluateSessionResponse
 */
const de_EvaluateSessionResponse = (output: any, context: __SerdeContext): EvaluateSessionResponse => {
  return take(output, {
    AuthenticationResult: (_: any) => de_AuthenticationResult(_, context),
    DomainId: __expectString,
    FraudDetectionResult: (_: any) => de_FraudDetectionResult(_, context),
    SessionId: __expectString,
    SessionName: __expectString,
    StreamingStatus: __expectString,
  }) as any;
};

// de_FailureDetails omitted.

// de_FraudDetectionConfiguration omitted.

// de_FraudDetectionReasons omitted.

/**
 * deserializeAws_json1_0FraudDetectionResult
 */
const de_FraudDetectionResult = (output: any, context: __SerdeContext): FraudDetectionResult => {
  return take(output, {
    AudioAggregationEndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AudioAggregationStartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Configuration: _json,
    Decision: __expectString,
    FraudDetectionResultId: __expectString,
    Reasons: _json,
    RiskDetails: _json,
  }) as any;
};

// de_FraudRiskDetails omitted.

/**
 * deserializeAws_json1_0Fraudster
 */
const de_Fraudster = (output: any, context: __SerdeContext): Fraudster => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    GeneratedFraudsterId: __expectString,
    WatchlistIds: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0FraudsterRegistrationJob
 */
const de_FraudsterRegistrationJob = (output: any, context: __SerdeContext): FraudsterRegistrationJob => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataAccessRoleArn: __expectString,
    DomainId: __expectString,
    EndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureDetails: _json,
    InputDataConfig: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobProgress: _json,
    JobStatus: __expectString,
    OutputDataConfig: _json,
    RegistrationConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0FraudsterRegistrationJobSummaries
 */
const de_FraudsterRegistrationJobSummaries = (
  output: any,
  context: __SerdeContext
): FraudsterRegistrationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FraudsterRegistrationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FraudsterRegistrationJobSummary
 */
const de_FraudsterRegistrationJobSummary = (output: any, context: __SerdeContext): FraudsterRegistrationJobSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    EndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureDetails: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobProgress: _json,
    JobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0FraudsterSummaries
 */
const de_FraudsterSummaries = (output: any, context: __SerdeContext): FraudsterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FraudsterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FraudsterSummary
 */
const de_FraudsterSummary = (output: any, context: __SerdeContext): FraudsterSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    GeneratedFraudsterId: __expectString,
    WatchlistIds: _json,
  }) as any;
};

// de_InputDataConfig omitted.

// de_InternalServerException omitted.

// de_JobProgress omitted.

// de_KnownFraudsterRisk omitted.

/**
 * deserializeAws_json1_0ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return take(output, {
    DomainSummaries: (_: any) => de_DomainSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListFraudsterRegistrationJobsResponse
 */
const de_ListFraudsterRegistrationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListFraudsterRegistrationJobsResponse => {
  return take(output, {
    JobSummaries: (_: any) => de_FraudsterRegistrationJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListFraudstersResponse
 */
const de_ListFraudstersResponse = (output: any, context: __SerdeContext): ListFraudstersResponse => {
  return take(output, {
    FraudsterSummaries: (_: any) => de_FraudsterSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListSpeakerEnrollmentJobsResponse
 */
const de_ListSpeakerEnrollmentJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSpeakerEnrollmentJobsResponse => {
  return take(output, {
    JobSummaries: (_: any) => de_SpeakerEnrollmentJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListSpeakersResponse
 */
const de_ListSpeakersResponse = (output: any, context: __SerdeContext): ListSpeakersResponse => {
  return take(output, {
    NextToken: __expectString,
    SpeakerSummaries: (_: any) => de_SpeakerSummaries(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_0ListWatchlistsResponse
 */
const de_ListWatchlistsResponse = (output: any, context: __SerdeContext): ListWatchlistsResponse => {
  return take(output, {
    NextToken: __expectString,
    WatchlistSummaries: (_: any) => de_WatchlistSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0OptOutSpeakerResponse
 */
const de_OptOutSpeakerResponse = (output: any, context: __SerdeContext): OptOutSpeakerResponse => {
  return take(output, {
    Speaker: (_: any) => de_Speaker(_, context),
  }) as any;
};

// de_OutputDataConfig omitted.

// de_RegistrationConfig omitted.

// de_RegistrationConfigWatchlistIds omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseWatchlistIds omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_ServerSideEncryptionUpdateDetails omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_0Speaker
 */
const de_Speaker = (output: any, context: __SerdeContext): Speaker => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerSpeakerId: __expectString,
    DomainId: __expectString,
    GeneratedSpeakerId: __expectString,
    LastAccessedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0SpeakerEnrollmentJob
 */
const de_SpeakerEnrollmentJob = (output: any, context: __SerdeContext): SpeakerEnrollmentJob => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataAccessRoleArn: __expectString,
    DomainId: __expectString,
    EndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnrollmentConfig: _json,
    FailureDetails: _json,
    InputDataConfig: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobProgress: _json,
    JobStatus: __expectString,
    OutputDataConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0SpeakerEnrollmentJobSummaries
 */
const de_SpeakerEnrollmentJobSummaries = (output: any, context: __SerdeContext): SpeakerEnrollmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SpeakerEnrollmentJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SpeakerEnrollmentJobSummary
 */
const de_SpeakerEnrollmentJobSummary = (output: any, context: __SerdeContext): SpeakerEnrollmentJobSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    EndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureDetails: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobProgress: _json,
    JobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0SpeakerSummaries
 */
const de_SpeakerSummaries = (output: any, context: __SerdeContext): SpeakerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SpeakerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SpeakerSummary
 */
const de_SpeakerSummary = (output: any, context: __SerdeContext): SpeakerSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerSpeakerId: __expectString,
    DomainId: __expectString,
    GeneratedSpeakerId: __expectString,
    LastAccessedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0StartFraudsterRegistrationJobResponse
 */
const de_StartFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): StartFraudsterRegistrationJobResponse => {
  return take(output, {
    Job: (_: any) => de_FraudsterRegistrationJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0StartSpeakerEnrollmentJobResponse
 */
const de_StartSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): StartSpeakerEnrollmentJobResponse => {
  return take(output, {
    Job: (_: any) => de_SpeakerEnrollmentJob(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateDomainResponse
 */
const de_UpdateDomainResponse = (output: any, context: __SerdeContext): UpdateDomainResponse => {
  return take(output, {
    Domain: (_: any) => de_Domain(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateWatchlistResponse
 */
const de_UpdateWatchlistResponse = (output: any, context: __SerdeContext): UpdateWatchlistResponse => {
  return take(output, {
    Watchlist: (_: any) => de_Watchlist(_, context),
  }) as any;
};

// de_ValidationException omitted.

// de_VoiceSpoofingRisk omitted.

/**
 * deserializeAws_json1_0Watchlist
 */
const de_Watchlist = (output: any, context: __SerdeContext): Watchlist => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultWatchlist: __expectBoolean,
    Description: __expectString,
    DomainId: __expectString,
    Name: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WatchlistId: __expectString,
  }) as any;
};

// de_WatchlistDetails omitted.

/**
 * deserializeAws_json1_0WatchlistSummaries
 */
const de_WatchlistSummaries = (output: any, context: __SerdeContext): WatchlistSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WatchlistSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WatchlistSummary
 */
const de_WatchlistSummary = (output: any, context: __SerdeContext): WatchlistSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultWatchlist: __expectBoolean,
    Description: __expectString,
    DomainId: __expectString,
    Name: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WatchlistId: __expectString,
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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `VoiceID.${operation}`,
  };
}

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
