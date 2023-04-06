// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
  AuthenticationConfiguration,
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
  FailureDetails,
  FraudDetectionConfiguration,
  FraudDetectionReason,
  FraudDetectionResult,
  FraudRiskDetails,
  Fraudster,
  FraudsterRegistrationJob,
  FraudsterRegistrationJobSummary,
  FraudsterSummary,
  InputDataConfig,
  InternalServerException,
  JobProgress,
  KnownFraudsterRisk,
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
  ListTagsForResourceResponse,
  ListWatchlistsRequest,
  ListWatchlistsResponse,
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
  UpdateWatchlistRequest,
  UpdateWatchlistResponse,
  ValidationException,
  VoiceSpoofingRisk,
  Watchlist,
  WatchlistDetails,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.AssociateFraudster",
  };
  let body: any;
  body = JSON.stringify(se_AssociateFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.CreateDomain",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.CreateWatchlist",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteFraudsterCommand
 */
export const se_DeleteFraudsterCommand = async (
  input: DeleteFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteFraudster",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSpeakerCommand
 */
export const se_DeleteSpeakerCommand = async (
  input: DeleteSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteSpeaker",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteWatchlistCommand
 */
export const se_DeleteWatchlistCommand = async (
  input: DeleteWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DeleteWatchlist",
  };
  let body: any;
  body = JSON.stringify(se_DeleteWatchlistRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeDomain",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFraudsterCommand
 */
export const se_DescribeFraudsterCommand = async (
  input: DescribeFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeFraudster",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeFraudsterRegistrationJobCommand
 */
export const se_DescribeFraudsterRegistrationJobCommand = async (
  input: DescribeFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeFraudsterRegistrationJob",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFraudsterRegistrationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSpeakerCommand
 */
export const se_DescribeSpeakerCommand = async (
  input: DescribeSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeSpeaker",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSpeakerEnrollmentJobCommand
 */
export const se_DescribeSpeakerEnrollmentJobCommand = async (
  input: DescribeSpeakerEnrollmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeSpeakerEnrollmentJob",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSpeakerEnrollmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWatchlistCommand
 */
export const se_DescribeWatchlistCommand = async (
  input: DescribeWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DescribeWatchlist",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWatchlistRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateFraudsterCommand
 */
export const se_DisassociateFraudsterCommand = async (
  input: DisassociateFraudsterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.DisassociateFraudster",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateFraudsterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0EvaluateSessionCommand
 */
export const se_EvaluateSessionCommand = async (
  input: EvaluateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.EvaluateSession",
  };
  let body: any;
  body = JSON.stringify(se_EvaluateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListDomains",
  };
  let body: any;
  body = JSON.stringify(se_ListDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFraudsterRegistrationJobsCommand
 */
export const se_ListFraudsterRegistrationJobsCommand = async (
  input: ListFraudsterRegistrationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListFraudsterRegistrationJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListFraudsterRegistrationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListFraudstersCommand
 */
export const se_ListFraudstersCommand = async (
  input: ListFraudstersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListFraudsters",
  };
  let body: any;
  body = JSON.stringify(se_ListFraudstersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSpeakerEnrollmentJobsCommand
 */
export const se_ListSpeakerEnrollmentJobsCommand = async (
  input: ListSpeakerEnrollmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListSpeakerEnrollmentJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListSpeakerEnrollmentJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSpeakersCommand
 */
export const se_ListSpeakersCommand = async (
  input: ListSpeakersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListSpeakers",
  };
  let body: any;
  body = JSON.stringify(se_ListSpeakersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListWatchlistsCommand
 */
export const se_ListWatchlistsCommand = async (
  input: ListWatchlistsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.ListWatchlists",
  };
  let body: any;
  body = JSON.stringify(se_ListWatchlistsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0OptOutSpeakerCommand
 */
export const se_OptOutSpeakerCommand = async (
  input: OptOutSpeakerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.OptOutSpeaker",
  };
  let body: any;
  body = JSON.stringify(se_OptOutSpeakerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartFraudsterRegistrationJobCommand
 */
export const se_StartFraudsterRegistrationJobCommand = async (
  input: StartFraudsterRegistrationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.StartFraudsterRegistrationJob",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.StartSpeakerEnrollmentJob",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.UpdateDomain",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateWatchlistCommand
 */
export const se_UpdateWatchlistCommand = async (
  input: UpdateWatchlistCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "VoiceID.UpdateWatchlist",
  };
  let body: any;
  body = JSON.stringify(se_UpdateWatchlistRequest(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AssociateFraudsterRequest
 */
const se_AssociateFraudsterRequest = (input: AssociateFraudsterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * serializeAws_json1_0CreateDomainRequest
 */
const se_CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: se_ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateWatchlistRequest
 */
const se_CreateWatchlistRequest = (input: CreateWatchlistRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_0DeleteDomainRequest
 */
const se_DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
  };
};

/**
 * serializeAws_json1_0DeleteFraudsterRequest
 */
const se_DeleteFraudsterRequest = (input: DeleteFraudsterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
  };
};

/**
 * serializeAws_json1_0DeleteSpeakerRequest
 */
const se_DeleteSpeakerRequest = (input: DeleteSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

/**
 * serializeAws_json1_0DeleteWatchlistRequest
 */
const se_DeleteWatchlistRequest = (input: DeleteWatchlistRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * serializeAws_json1_0DescribeDomainRequest
 */
const se_DescribeDomainRequest = (input: DescribeDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
  };
};

/**
 * serializeAws_json1_0DescribeFraudsterRegistrationJobRequest
 */
const se_DescribeFraudsterRegistrationJobRequest = (
  input: DescribeFraudsterRegistrationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_0DescribeFraudsterRequest
 */
const se_DescribeFraudsterRequest = (input: DescribeFraudsterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
  };
};

/**
 * serializeAws_json1_0DescribeSpeakerEnrollmentJobRequest
 */
const se_DescribeSpeakerEnrollmentJobRequest = (
  input: DescribeSpeakerEnrollmentJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_0DescribeSpeakerRequest
 */
const se_DescribeSpeakerRequest = (input: DescribeSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

/**
 * serializeAws_json1_0DescribeWatchlistRequest
 */
const se_DescribeWatchlistRequest = (input: DescribeWatchlistRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * serializeAws_json1_0DisassociateFraudsterRequest
 */
const se_DisassociateFraudsterRequest = (input: DisassociateFraudsterRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.FraudsterId != null && { FraudsterId: input.FraudsterId }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * serializeAws_json1_0EnrollmentConfig
 */
const se_EnrollmentConfig = (input: EnrollmentConfig, context: __SerdeContext): any => {
  return {
    ...(input.ExistingEnrollmentAction != null && { ExistingEnrollmentAction: input.ExistingEnrollmentAction }),
    ...(input.FraudDetectionConfig != null && {
      FraudDetectionConfig: se_EnrollmentJobFraudDetectionConfig(input.FraudDetectionConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0EnrollmentJobFraudDetectionConfig
 */
const se_EnrollmentJobFraudDetectionConfig = (
  input: EnrollmentJobFraudDetectionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.FraudDetectionAction != null && { FraudDetectionAction: input.FraudDetectionAction }),
    ...(input.RiskThreshold != null && { RiskThreshold: input.RiskThreshold }),
    ...(input.WatchlistIds != null && {
      WatchlistIds: se_EnrollmentJobFraudDetectionConfigWatchlistIds(input.WatchlistIds, context),
    }),
  };
};

/**
 * serializeAws_json1_0EnrollmentJobFraudDetectionConfigWatchlistIds
 */
const se_EnrollmentJobFraudDetectionConfigWatchlistIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0EvaluateSessionRequest
 */
const se_EvaluateSessionRequest = (input: EvaluateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SessionNameOrId != null && { SessionNameOrId: input.SessionNameOrId }),
  };
};

/**
 * serializeAws_json1_0InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_0ListDomainsRequest
 */
const se_ListDomainsRequest = (input: ListDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListFraudsterRegistrationJobsRequest
 */
const se_ListFraudsterRegistrationJobsRequest = (
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

/**
 * serializeAws_json1_0ListFraudstersRequest
 */
const se_ListFraudstersRequest = (input: ListFraudstersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * serializeAws_json1_0ListSpeakerEnrollmentJobsRequest
 */
const se_ListSpeakerEnrollmentJobsRequest = (input: ListSpeakerEnrollmentJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListSpeakersRequest
 */
const se_ListSpeakersRequest = (input: ListSpeakersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ListWatchlistsRequest
 */
const se_ListWatchlistsRequest = (input: ListWatchlistsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0OptOutSpeakerRequest
 */
const se_OptOutSpeakerRequest = (input: OptOutSpeakerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.SpeakerId != null && { SpeakerId: input.SpeakerId }),
  };
};

/**
 * serializeAws_json1_0OutputDataConfig
 */
const se_OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_json1_0RegistrationConfig
 */
const se_RegistrationConfig = (input: RegistrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.DuplicateRegistrationAction != null && {
      DuplicateRegistrationAction: input.DuplicateRegistrationAction,
    }),
    ...(input.FraudsterSimilarityThreshold != null && {
      FraudsterSimilarityThreshold: input.FraudsterSimilarityThreshold,
    }),
    ...(input.WatchlistIds != null && { WatchlistIds: se_RegistrationConfigWatchlistIds(input.WatchlistIds, context) }),
  };
};

/**
 * serializeAws_json1_0RegistrationConfigWatchlistIds
 */
const se_RegistrationConfigWatchlistIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ServerSideEncryptionConfiguration
 */
const se_ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

/**
 * serializeAws_json1_0StartFraudsterRegistrationJobRequest
 */
const se_StartFraudsterRegistrationJobRequest = (
  input: StartFraudsterRegistrationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
    ...(input.RegistrationConfig != null && {
      RegistrationConfig: se_RegistrationConfig(input.RegistrationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0StartSpeakerEnrollmentJobRequest
 */
const se_StartSpeakerEnrollmentJobRequest = (input: StartSpeakerEnrollmentJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.EnrollmentConfig != null && { EnrollmentConfig: se_EnrollmentConfig(input.EnrollmentConfig, context) }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateDomainRequest
 */
const se_UpdateDomainRequest = (input: UpdateDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: se_ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateWatchlistRequest
 */
const se_UpdateWatchlistRequest = (input: UpdateWatchlistRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WatchlistId != null && { WatchlistId: input.WatchlistId }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0AssociateFraudsterResponse
 */
const de_AssociateFraudsterResponse = (output: any, context: __SerdeContext): AssociateFraudsterResponse => {
  return {
    Fraudster: output.Fraudster != null ? de_Fraudster(output.Fraudster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AuthenticationConfiguration
 */
const de_AuthenticationConfiguration = (output: any, context: __SerdeContext): AuthenticationConfiguration => {
  return {
    AcceptanceThreshold: __expectInt32(output.AcceptanceThreshold),
  } as any;
};

/**
 * deserializeAws_json1_0AuthenticationResult
 */
const de_AuthenticationResult = (output: any, context: __SerdeContext): AuthenticationResult => {
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
      output.Configuration != null ? de_AuthenticationConfiguration(output.Configuration, context) : undefined,
    CustomerSpeakerId: __expectString(output.CustomerSpeakerId),
    Decision: __expectString(output.Decision),
    GeneratedSpeakerId: __expectString(output.GeneratedSpeakerId),
    Score: __expectInt32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ConflictType: __expectString(output.ConflictType),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateDomainResponse
 */
const de_CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  return {
    Domain: output.Domain != null ? de_Domain(output.Domain, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateWatchlistResponse
 */
const de_CreateWatchlistResponse = (output: any, context: __SerdeContext): CreateWatchlistResponse => {
  return {
    Watchlist: output.Watchlist != null ? de_Watchlist(output.Watchlist, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeDomainResponse
 */
const de_DescribeDomainResponse = (output: any, context: __SerdeContext): DescribeDomainResponse => {
  return {
    Domain: output.Domain != null ? de_Domain(output.Domain, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFraudsterRegistrationJobResponse
 */
const de_DescribeFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFraudsterRegistrationJobResponse => {
  return {
    Job: output.Job != null ? de_FraudsterRegistrationJob(output.Job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeFraudsterResponse
 */
const de_DescribeFraudsterResponse = (output: any, context: __SerdeContext): DescribeFraudsterResponse => {
  return {
    Fraudster: output.Fraudster != null ? de_Fraudster(output.Fraudster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeSpeakerEnrollmentJobResponse
 */
const de_DescribeSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSpeakerEnrollmentJobResponse => {
  return {
    Job: output.Job != null ? de_SpeakerEnrollmentJob(output.Job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeSpeakerResponse
 */
const de_DescribeSpeakerResponse = (output: any, context: __SerdeContext): DescribeSpeakerResponse => {
  return {
    Speaker: output.Speaker != null ? de_Speaker(output.Speaker, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeWatchlistResponse
 */
const de_DescribeWatchlistResponse = (output: any, context: __SerdeContext): DescribeWatchlistResponse => {
  return {
    Watchlist: output.Watchlist != null ? de_Watchlist(output.Watchlist, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DisassociateFraudsterResponse
 */
const de_DisassociateFraudsterResponse = (output: any, context: __SerdeContext): DisassociateFraudsterResponse => {
  return {
    Fraudster: output.Fraudster != null ? de_Fraudster(output.Fraudster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Domain
 */
const de_Domain = (output: any, context: __SerdeContext): Domain => {
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
        ? de_ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    ServerSideEncryptionUpdateDetails:
      output.ServerSideEncryptionUpdateDetails != null
        ? de_ServerSideEncryptionUpdateDetails(output.ServerSideEncryptionUpdateDetails, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WatchlistDetails:
      output.WatchlistDetails != null ? de_WatchlistDetails(output.WatchlistDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DomainSummaries
 */
const de_DomainSummaries = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
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
        ? de_ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    ServerSideEncryptionUpdateDetails:
      output.ServerSideEncryptionUpdateDetails != null
        ? de_ServerSideEncryptionUpdateDetails(output.ServerSideEncryptionUpdateDetails, context)
        : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WatchlistDetails:
      output.WatchlistDetails != null ? de_WatchlistDetails(output.WatchlistDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EnrollmentConfig
 */
const de_EnrollmentConfig = (output: any, context: __SerdeContext): EnrollmentConfig => {
  return {
    ExistingEnrollmentAction: __expectString(output.ExistingEnrollmentAction),
    FraudDetectionConfig:
      output.FraudDetectionConfig != null
        ? de_EnrollmentJobFraudDetectionConfig(output.FraudDetectionConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EnrollmentJobFraudDetectionConfig
 */
const de_EnrollmentJobFraudDetectionConfig = (
  output: any,
  context: __SerdeContext
): EnrollmentJobFraudDetectionConfig => {
  return {
    FraudDetectionAction: __expectString(output.FraudDetectionAction),
    RiskThreshold: __expectInt32(output.RiskThreshold),
    WatchlistIds:
      output.WatchlistIds != null
        ? de_EnrollmentJobFraudDetectionConfigWatchlistIds(output.WatchlistIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EnrollmentJobFraudDetectionConfigWatchlistIds
 */
const de_EnrollmentJobFraudDetectionConfigWatchlistIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0EvaluateSessionResponse
 */
const de_EvaluateSessionResponse = (output: any, context: __SerdeContext): EvaluateSessionResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null ? de_AuthenticationResult(output.AuthenticationResult, context) : undefined,
    DomainId: __expectString(output.DomainId),
    FraudDetectionResult:
      output.FraudDetectionResult != null ? de_FraudDetectionResult(output.FraudDetectionResult, context) : undefined,
    SessionId: __expectString(output.SessionId),
    SessionName: __expectString(output.SessionName),
    StreamingStatus: __expectString(output.StreamingStatus),
  } as any;
};

/**
 * deserializeAws_json1_0FailureDetails
 */
const de_FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_json1_0FraudDetectionConfiguration
 */
const de_FraudDetectionConfiguration = (output: any, context: __SerdeContext): FraudDetectionConfiguration => {
  return {
    RiskThreshold: __expectInt32(output.RiskThreshold),
    WatchlistId: __expectString(output.WatchlistId),
  } as any;
};

/**
 * deserializeAws_json1_0FraudDetectionReasons
 */
const de_FraudDetectionReasons = (output: any, context: __SerdeContext): (FraudDetectionReason | string)[] => {
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

/**
 * deserializeAws_json1_0FraudDetectionResult
 */
const de_FraudDetectionResult = (output: any, context: __SerdeContext): FraudDetectionResult => {
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
      output.Configuration != null ? de_FraudDetectionConfiguration(output.Configuration, context) : undefined,
    Decision: __expectString(output.Decision),
    FraudDetectionResultId: __expectString(output.FraudDetectionResultId),
    Reasons: output.Reasons != null ? de_FraudDetectionReasons(output.Reasons, context) : undefined,
    RiskDetails: output.RiskDetails != null ? de_FraudRiskDetails(output.RiskDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0FraudRiskDetails
 */
const de_FraudRiskDetails = (output: any, context: __SerdeContext): FraudRiskDetails => {
  return {
    KnownFraudsterRisk:
      output.KnownFraudsterRisk != null ? de_KnownFraudsterRisk(output.KnownFraudsterRisk, context) : undefined,
    VoiceSpoofingRisk:
      output.VoiceSpoofingRisk != null ? de_VoiceSpoofingRisk(output.VoiceSpoofingRisk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Fraudster
 */
const de_Fraudster = (output: any, context: __SerdeContext): Fraudster => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    GeneratedFraudsterId: __expectString(output.GeneratedFraudsterId),
    WatchlistIds: output.WatchlistIds != null ? de_ResponseWatchlistIds(output.WatchlistIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0FraudsterRegistrationJob
 */
const de_FraudsterRegistrationJob = (output: any, context: __SerdeContext): FraudsterRegistrationJob => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress: output.JobProgress != null ? de_JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    RegistrationConfig:
      output.RegistrationConfig != null ? de_RegistrationConfig(output.RegistrationConfig, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_FraudsterRegistrationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FraudsterRegistrationJobSummary
 */
const de_FraudsterRegistrationJobSummary = (output: any, context: __SerdeContext): FraudsterRegistrationJobSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress: output.JobProgress != null ? de_JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_0FraudsterSummaries
 */
const de_FraudsterSummaries = (output: any, context: __SerdeContext): FraudsterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FraudsterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0FraudsterSummary
 */
const de_FraudsterSummary = (output: any, context: __SerdeContext): FraudsterSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    GeneratedFraudsterId: __expectString(output.GeneratedFraudsterId),
    WatchlistIds: output.WatchlistIds != null ? de_ResponseWatchlistIds(output.WatchlistIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0JobProgress
 */
const de_JobProgress = (output: any, context: __SerdeContext): JobProgress => {
  return {
    PercentComplete: __expectInt32(output.PercentComplete),
  } as any;
};

/**
 * deserializeAws_json1_0KnownFraudsterRisk
 */
const de_KnownFraudsterRisk = (output: any, context: __SerdeContext): KnownFraudsterRisk => {
  return {
    GeneratedFraudsterId: __expectString(output.GeneratedFraudsterId),
    RiskScore: __expectInt32(output.RiskScore),
  } as any;
};

/**
 * deserializeAws_json1_0ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return {
    DomainSummaries: output.DomainSummaries != null ? de_DomainSummaries(output.DomainSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFraudsterRegistrationJobsResponse
 */
const de_ListFraudsterRegistrationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListFraudsterRegistrationJobsResponse => {
  return {
    JobSummaries:
      output.JobSummaries != null ? de_FraudsterRegistrationJobSummaries(output.JobSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListFraudstersResponse
 */
const de_ListFraudstersResponse = (output: any, context: __SerdeContext): ListFraudstersResponse => {
  return {
    FraudsterSummaries:
      output.FraudsterSummaries != null ? de_FraudsterSummaries(output.FraudsterSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListSpeakerEnrollmentJobsResponse
 */
const de_ListSpeakerEnrollmentJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSpeakerEnrollmentJobsResponse => {
  return {
    JobSummaries:
      output.JobSummaries != null ? de_SpeakerEnrollmentJobSummaries(output.JobSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListSpeakersResponse
 */
const de_ListSpeakersResponse = (output: any, context: __SerdeContext): ListSpeakersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SpeakerSummaries:
      output.SpeakerSummaries != null ? de_SpeakerSummaries(output.SpeakerSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListWatchlistsResponse
 */
const de_ListWatchlistsResponse = (output: any, context: __SerdeContext): ListWatchlistsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    WatchlistSummaries:
      output.WatchlistSummaries != null ? de_WatchlistSummaries(output.WatchlistSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0OptOutSpeakerResponse
 */
const de_OptOutSpeakerResponse = (output: any, context: __SerdeContext): OptOutSpeakerResponse => {
  return {
    Speaker: output.Speaker != null ? de_Speaker(output.Speaker, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_json1_0RegistrationConfig
 */
const de_RegistrationConfig = (output: any, context: __SerdeContext): RegistrationConfig => {
  return {
    DuplicateRegistrationAction: __expectString(output.DuplicateRegistrationAction),
    FraudsterSimilarityThreshold: __expectInt32(output.FraudsterSimilarityThreshold),
    WatchlistIds:
      output.WatchlistIds != null ? de_RegistrationConfigWatchlistIds(output.WatchlistIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RegistrationConfigWatchlistIds
 */
const de_RegistrationConfigWatchlistIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_0ResponseWatchlistIds
 */
const de_ResponseWatchlistIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0ServerSideEncryptionConfiguration
 */
const de_ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

/**
 * deserializeAws_json1_0ServerSideEncryptionUpdateDetails
 */
const de_ServerSideEncryptionUpdateDetails = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionUpdateDetails => {
  return {
    Message: __expectString(output.Message),
    OldKmsKeyId: __expectString(output.OldKmsKeyId),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0Speaker
 */
const de_Speaker = (output: any, context: __SerdeContext): Speaker => {
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

/**
 * deserializeAws_json1_0SpeakerEnrollmentJob
 */
const de_SpeakerEnrollmentJob = (output: any, context: __SerdeContext): SpeakerEnrollmentJob => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    EnrollmentConfig:
      output.EnrollmentConfig != null ? de_EnrollmentConfig(output.EnrollmentConfig, context) : undefined,
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress: output.JobProgress != null ? de_JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0SpeakerEnrollmentJobSummaries
 */
const de_SpeakerEnrollmentJobSummaries = (output: any, context: __SerdeContext): SpeakerEnrollmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SpeakerEnrollmentJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SpeakerEnrollmentJobSummary
 */
const de_SpeakerEnrollmentJobSummary = (output: any, context: __SerdeContext): SpeakerEnrollmentJobSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainId: __expectString(output.DomainId),
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobProgress: output.JobProgress != null ? de_JobProgress(output.JobProgress, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

/**
 * deserializeAws_json1_0SpeakerSummaries
 */
const de_SpeakerSummaries = (output: any, context: __SerdeContext): SpeakerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SpeakerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SpeakerSummary
 */
const de_SpeakerSummary = (output: any, context: __SerdeContext): SpeakerSummary => {
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

/**
 * deserializeAws_json1_0StartFraudsterRegistrationJobResponse
 */
const de_StartFraudsterRegistrationJobResponse = (
  output: any,
  context: __SerdeContext
): StartFraudsterRegistrationJobResponse => {
  return {
    Job: output.Job != null ? de_FraudsterRegistrationJob(output.Job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartSpeakerEnrollmentJobResponse
 */
const de_StartSpeakerEnrollmentJobResponse = (
  output: any,
  context: __SerdeContext
): StartSpeakerEnrollmentJobResponse => {
  return {
    Job: output.Job != null ? de_SpeakerEnrollmentJob(output.Job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateDomainResponse
 */
const de_UpdateDomainResponse = (output: any, context: __SerdeContext): UpdateDomainResponse => {
  return {
    Domain: output.Domain != null ? de_Domain(output.Domain, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateWatchlistResponse
 */
const de_UpdateWatchlistResponse = (output: any, context: __SerdeContext): UpdateWatchlistResponse => {
  return {
    Watchlist: output.Watchlist != null ? de_Watchlist(output.Watchlist, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0VoiceSpoofingRisk
 */
const de_VoiceSpoofingRisk = (output: any, context: __SerdeContext): VoiceSpoofingRisk => {
  return {
    RiskScore: __expectInt32(output.RiskScore),
  } as any;
};

/**
 * deserializeAws_json1_0Watchlist
 */
const de_Watchlist = (output: any, context: __SerdeContext): Watchlist => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DefaultWatchlist: __expectBoolean(output.DefaultWatchlist),
    Description: __expectString(output.Description),
    DomainId: __expectString(output.DomainId),
    Name: __expectString(output.Name),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WatchlistId: __expectString(output.WatchlistId),
  } as any;
};

/**
 * deserializeAws_json1_0WatchlistDetails
 */
const de_WatchlistDetails = (output: any, context: __SerdeContext): WatchlistDetails => {
  return {
    DefaultWatchlistId: __expectString(output.DefaultWatchlistId),
  } as any;
};

/**
 * deserializeAws_json1_0WatchlistSummaries
 */
const de_WatchlistSummaries = (output: any, context: __SerdeContext): WatchlistSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WatchlistSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WatchlistSummary
 */
const de_WatchlistSummary = (output: any, context: __SerdeContext): WatchlistSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DefaultWatchlist: __expectBoolean(output.DefaultWatchlist),
    Description: __expectString(output.Description),
    DomainId: __expectString(output.DomainId),
    Name: __expectString(output.Name),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WatchlistId: __expectString(output.WatchlistId),
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
