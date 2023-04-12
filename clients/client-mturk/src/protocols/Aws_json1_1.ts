// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import {
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
} from "../commands/AcceptQualificationRequestCommand";
import { ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput } from "../commands/ApproveAssignmentCommand";
import {
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
} from "../commands/AssociateQualificationWithWorkerCommand";
import {
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
} from "../commands/CreateAdditionalAssignmentsForHITCommand";
import { CreateHITCommandInput, CreateHITCommandOutput } from "../commands/CreateHITCommand";
import { CreateHITTypeCommandInput, CreateHITTypeCommandOutput } from "../commands/CreateHITTypeCommand";
import {
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput,
} from "../commands/CreateHITWithHITTypeCommand";
import {
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput,
} from "../commands/CreateQualificationTypeCommand";
import { CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput } from "../commands/CreateWorkerBlockCommand";
import { DeleteHITCommandInput, DeleteHITCommandOutput } from "../commands/DeleteHITCommand";
import {
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
} from "../commands/DeleteQualificationTypeCommand";
import { DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput } from "../commands/DeleteWorkerBlockCommand";
import {
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
} from "../commands/DisassociateQualificationFromWorkerCommand";
import { GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput } from "../commands/GetAccountBalanceCommand";
import { GetAssignmentCommandInput, GetAssignmentCommandOutput } from "../commands/GetAssignmentCommand";
import { GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput } from "../commands/GetFileUploadURLCommand";
import { GetHITCommandInput, GetHITCommandOutput } from "../commands/GetHITCommand";
import {
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
} from "../commands/GetQualificationScoreCommand";
import {
  GetQualificationTypeCommandInput,
  GetQualificationTypeCommandOutput,
} from "../commands/GetQualificationTypeCommand";
import {
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "../commands/ListAssignmentsForHITCommand";
import { ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput } from "../commands/ListBonusPaymentsCommand";
import { ListHITsCommandInput, ListHITsCommandOutput } from "../commands/ListHITsCommand";
import {
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "../commands/ListHITsForQualificationTypeCommand";
import {
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "../commands/ListQualificationRequestsCommand";
import {
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "../commands/ListQualificationTypesCommand";
import { ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput } from "../commands/ListReviewableHITsCommand";
import {
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "../commands/ListReviewPolicyResultsForHITCommand";
import { ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput } from "../commands/ListWorkerBlocksCommand";
import {
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "../commands/ListWorkersWithQualificationTypeCommand";
import { NotifyWorkersCommandInput, NotifyWorkersCommandOutput } from "../commands/NotifyWorkersCommand";
import { RejectAssignmentCommandInput, RejectAssignmentCommandOutput } from "../commands/RejectAssignmentCommand";
import {
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
} from "../commands/RejectQualificationRequestCommand";
import { SendBonusCommandInput, SendBonusCommandOutput } from "../commands/SendBonusCommand";
import {
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput,
} from "../commands/SendTestEventNotificationCommand";
import {
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput,
} from "../commands/UpdateExpirationForHITCommand";
import {
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
} from "../commands/UpdateHITReviewStatusCommand";
import { UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput } from "../commands/UpdateHITTypeOfHITCommand";
import {
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
} from "../commands/UpdateNotificationSettingsCommand";
import {
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput,
} from "../commands/UpdateQualificationTypeCommand";
import {
  AcceptQualificationRequestRequest,
  AcceptQualificationRequestResponse,
  ApproveAssignmentRequest,
  ApproveAssignmentResponse,
  Assignment,
  AssignmentStatus,
  AssociateQualificationWithWorkerRequest,
  AssociateQualificationWithWorkerResponse,
  BonusPayment,
  CreateAdditionalAssignmentsForHITRequest,
  CreateAdditionalAssignmentsForHITResponse,
  CreateHITRequest,
  CreateHITResponse,
  CreateHITTypeRequest,
  CreateHITTypeResponse,
  CreateHITWithHITTypeRequest,
  CreateHITWithHITTypeResponse,
  CreateQualificationTypeRequest,
  CreateQualificationTypeResponse,
  CreateWorkerBlockRequest,
  CreateWorkerBlockResponse,
  DeleteHITRequest,
  DeleteHITResponse,
  DeleteQualificationTypeRequest,
  DeleteQualificationTypeResponse,
  DeleteWorkerBlockRequest,
  DeleteWorkerBlockResponse,
  DisassociateQualificationFromWorkerRequest,
  DisassociateQualificationFromWorkerResponse,
  EventType,
  GetAccountBalanceRequest,
  GetAccountBalanceResponse,
  GetAssignmentRequest,
  GetAssignmentResponse,
  GetFileUploadURLRequest,
  GetFileUploadURLResponse,
  GetHITRequest,
  GetHITResponse,
  GetQualificationScoreRequest,
  GetQualificationScoreResponse,
  GetQualificationTypeRequest,
  GetQualificationTypeResponse,
  HIT,
  HITLayoutParameter,
  ListAssignmentsForHITRequest,
  ListAssignmentsForHITResponse,
  ListBonusPaymentsRequest,
  ListBonusPaymentsResponse,
  ListHITsForQualificationTypeRequest,
  ListHITsForQualificationTypeResponse,
  ListHITsRequest,
  ListHITsResponse,
  ListQualificationRequestsRequest,
  ListQualificationRequestsResponse,
  ListQualificationTypesRequest,
  ListQualificationTypesResponse,
  ListReviewableHITsRequest,
  ListReviewableHITsResponse,
  ListReviewPolicyResultsForHITRequest,
  ListReviewPolicyResultsForHITResponse,
  ListWorkerBlocksRequest,
  ListWorkerBlocksResponse,
  ListWorkersWithQualificationTypeRequest,
  ListWorkersWithQualificationTypeResponse,
  Locale,
  NotificationSpecification,
  NotifyWorkersFailureStatus,
  NotifyWorkersRequest,
  NotifyWorkersResponse,
  ParameterMapEntry,
  PolicyParameter,
  Qualification,
  QualificationRequest,
  QualificationRequirement,
  QualificationType,
  RejectAssignmentRequest,
  RejectAssignmentResponse,
  RejectQualificationRequestRequest,
  RejectQualificationRequestResponse,
  RequestError,
  ReviewActionDetail,
  ReviewPolicy,
  ReviewPolicyLevel,
  ReviewReport,
  ReviewResultDetail,
  SendBonusRequest,
  SendBonusResponse,
  SendTestEventNotificationRequest,
  SendTestEventNotificationResponse,
  ServiceFault,
  UpdateExpirationForHITRequest,
  UpdateExpirationForHITResponse,
  UpdateHITReviewStatusRequest,
  UpdateHITReviewStatusResponse,
  UpdateHITTypeOfHITRequest,
  UpdateHITTypeOfHITResponse,
  UpdateNotificationSettingsRequest,
  UpdateNotificationSettingsResponse,
  UpdateQualificationTypeRequest,
  UpdateQualificationTypeResponse,
  WorkerBlock,
} from "../models/models_0";
import { MTurkServiceException as __BaseException } from "../models/MTurkServiceException";

/**
 * serializeAws_json1_1AcceptQualificationRequestCommand
 */
export const se_AcceptQualificationRequestCommand = async (
  input: AcceptQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptQualificationRequest");
  let body: any;
  body = JSON.stringify(se_AcceptQualificationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ApproveAssignmentCommand
 */
export const se_ApproveAssignmentCommand = async (
  input: ApproveAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ApproveAssignment");
  let body: any;
  body = JSON.stringify(se_ApproveAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateQualificationWithWorkerCommand
 */
export const se_AssociateQualificationWithWorkerCommand = async (
  input: AssociateQualificationWithWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateQualificationWithWorker");
  let body: any;
  body = JSON.stringify(se_AssociateQualificationWithWorkerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand
 */
export const se_CreateAdditionalAssignmentsForHITCommand = async (
  input: CreateAdditionalAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAdditionalAssignmentsForHIT");
  let body: any;
  body = JSON.stringify(se_CreateAdditionalAssignmentsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHITCommand
 */
export const se_CreateHITCommand = async (
  input: CreateHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHIT");
  let body: any;
  body = JSON.stringify(se_CreateHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHITTypeCommand
 */
export const se_CreateHITTypeCommand = async (
  input: CreateHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHITType");
  let body: any;
  body = JSON.stringify(se_CreateHITTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHITWithHITTypeCommand
 */
export const se_CreateHITWithHITTypeCommand = async (
  input: CreateHITWithHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHITWithHITType");
  let body: any;
  body = JSON.stringify(se_CreateHITWithHITTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateQualificationTypeCommand
 */
export const se_CreateQualificationTypeCommand = async (
  input: CreateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateQualificationType");
  let body: any;
  body = JSON.stringify(se_CreateQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkerBlockCommand
 */
export const se_CreateWorkerBlockCommand = async (
  input: CreateWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkerBlock");
  let body: any;
  body = JSON.stringify(se_CreateWorkerBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHITCommand
 */
export const se_DeleteHITCommand = async (
  input: DeleteHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHIT");
  let body: any;
  body = JSON.stringify(se_DeleteHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteQualificationTypeCommand
 */
export const se_DeleteQualificationTypeCommand = async (
  input: DeleteQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteQualificationType");
  let body: any;
  body = JSON.stringify(se_DeleteQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkerBlockCommand
 */
export const se_DeleteWorkerBlockCommand = async (
  input: DeleteWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkerBlock");
  let body: any;
  body = JSON.stringify(se_DeleteWorkerBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateQualificationFromWorkerCommand
 */
export const se_DisassociateQualificationFromWorkerCommand = async (
  input: DisassociateQualificationFromWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateQualificationFromWorker");
  let body: any;
  body = JSON.stringify(se_DisassociateQualificationFromWorkerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccountBalanceCommand
 */
export const se_GetAccountBalanceCommand = async (
  input: GetAccountBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountBalance");
  let body: any;
  body = JSON.stringify(se_GetAccountBalanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAssignmentCommand
 */
export const se_GetAssignmentCommand = async (
  input: GetAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAssignment");
  let body: any;
  body = JSON.stringify(se_GetAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFileUploadURLCommand
 */
export const se_GetFileUploadURLCommand = async (
  input: GetFileUploadURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFileUploadURL");
  let body: any;
  body = JSON.stringify(se_GetFileUploadURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetHITCommand
 */
export const se_GetHITCommand = async (input: GetHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHIT");
  let body: any;
  body = JSON.stringify(se_GetHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQualificationScoreCommand
 */
export const se_GetQualificationScoreCommand = async (
  input: GetQualificationScoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQualificationScore");
  let body: any;
  body = JSON.stringify(se_GetQualificationScoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQualificationTypeCommand
 */
export const se_GetQualificationTypeCommand = async (
  input: GetQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQualificationType");
  let body: any;
  body = JSON.stringify(se_GetQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssignmentsForHITCommand
 */
export const se_ListAssignmentsForHITCommand = async (
  input: ListAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssignmentsForHIT");
  let body: any;
  body = JSON.stringify(se_ListAssignmentsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBonusPaymentsCommand
 */
export const se_ListBonusPaymentsCommand = async (
  input: ListBonusPaymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBonusPayments");
  let body: any;
  body = JSON.stringify(se_ListBonusPaymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHITsCommand
 */
export const se_ListHITsCommand = async (
  input: ListHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHITs");
  let body: any;
  body = JSON.stringify(se_ListHITsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHITsForQualificationTypeCommand
 */
export const se_ListHITsForQualificationTypeCommand = async (
  input: ListHITsForQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHITsForQualificationType");
  let body: any;
  body = JSON.stringify(se_ListHITsForQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQualificationRequestsCommand
 */
export const se_ListQualificationRequestsCommand = async (
  input: ListQualificationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQualificationRequests");
  let body: any;
  body = JSON.stringify(se_ListQualificationRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQualificationTypesCommand
 */
export const se_ListQualificationTypesCommand = async (
  input: ListQualificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQualificationTypes");
  let body: any;
  body = JSON.stringify(se_ListQualificationTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReviewableHITsCommand
 */
export const se_ListReviewableHITsCommand = async (
  input: ListReviewableHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReviewableHITs");
  let body: any;
  body = JSON.stringify(se_ListReviewableHITsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReviewPolicyResultsForHITCommand
 */
export const se_ListReviewPolicyResultsForHITCommand = async (
  input: ListReviewPolicyResultsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReviewPolicyResultsForHIT");
  let body: any;
  body = JSON.stringify(se_ListReviewPolicyResultsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkerBlocksCommand
 */
export const se_ListWorkerBlocksCommand = async (
  input: ListWorkerBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkerBlocks");
  let body: any;
  body = JSON.stringify(se_ListWorkerBlocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkersWithQualificationTypeCommand
 */
export const se_ListWorkersWithQualificationTypeCommand = async (
  input: ListWorkersWithQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkersWithQualificationType");
  let body: any;
  body = JSON.stringify(se_ListWorkersWithQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyWorkersCommand
 */
export const se_NotifyWorkersCommand = async (
  input: NotifyWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyWorkers");
  let body: any;
  body = JSON.stringify(se_NotifyWorkersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectAssignmentCommand
 */
export const se_RejectAssignmentCommand = async (
  input: RejectAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectAssignment");
  let body: any;
  body = JSON.stringify(se_RejectAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectQualificationRequestCommand
 */
export const se_RejectQualificationRequestCommand = async (
  input: RejectQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectQualificationRequest");
  let body: any;
  body = JSON.stringify(se_RejectQualificationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendBonusCommand
 */
export const se_SendBonusCommand = async (
  input: SendBonusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendBonus");
  let body: any;
  body = JSON.stringify(se_SendBonusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendTestEventNotificationCommand
 */
export const se_SendTestEventNotificationCommand = async (
  input: SendTestEventNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendTestEventNotification");
  let body: any;
  body = JSON.stringify(se_SendTestEventNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateExpirationForHITCommand
 */
export const se_UpdateExpirationForHITCommand = async (
  input: UpdateExpirationForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateExpirationForHIT");
  let body: any;
  body = JSON.stringify(se_UpdateExpirationForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHITReviewStatusCommand
 */
export const se_UpdateHITReviewStatusCommand = async (
  input: UpdateHITReviewStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHITReviewStatus");
  let body: any;
  body = JSON.stringify(se_UpdateHITReviewStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHITTypeOfHITCommand
 */
export const se_UpdateHITTypeOfHITCommand = async (
  input: UpdateHITTypeOfHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHITTypeOfHIT");
  let body: any;
  body = JSON.stringify(se_UpdateHITTypeOfHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotificationSettingsCommand
 */
export const se_UpdateNotificationSettingsCommand = async (
  input: UpdateNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotificationSettings");
  let body: any;
  body = JSON.stringify(se_UpdateNotificationSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateQualificationTypeCommand
 */
export const se_UpdateQualificationTypeCommand = async (
  input: UpdateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateQualificationType");
  let body: any;
  body = JSON.stringify(se_UpdateQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptQualificationRequestCommand
 */
export const de_AcceptQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptQualificationRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptQualificationRequestResponse(data, context);
  const response: AcceptQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptQualificationRequestCommandError
 */
const de_AcceptQualificationRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ApproveAssignmentCommand
 */
export const de_ApproveAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApproveAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApproveAssignmentResponse(data, context);
  const response: ApproveAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ApproveAssignmentCommandError
 */
const de_ApproveAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateQualificationWithWorkerCommand
 */
export const de_AssociateQualificationWithWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateQualificationWithWorkerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateQualificationWithWorkerResponse(data, context);
  const response: AssociateQualificationWithWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateQualificationWithWorkerCommandError
 */
const de_AssociateQualificationWithWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand
 */
export const de_CreateAdditionalAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAdditionalAssignmentsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAdditionalAssignmentsForHITResponse(data, context);
  const response: CreateAdditionalAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError
 */
const de_CreateAdditionalAssignmentsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHITCommand
 */
export const de_CreateHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHITResponse(data, context);
  const response: CreateHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHITCommandError
 */
const de_CreateHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHITTypeCommand
 */
export const de_CreateHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHITTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHITTypeResponse(data, context);
  const response: CreateHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHITTypeCommandError
 */
const de_CreateHITTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHITWithHITTypeCommand
 */
export const de_CreateHITWithHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHITWithHITTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHITWithHITTypeResponse(data, context);
  const response: CreateHITWithHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHITWithHITTypeCommandError
 */
const de_CreateHITWithHITTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateQualificationTypeCommand
 */
export const de_CreateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateQualificationTypeResponse(data, context);
  const response: CreateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateQualificationTypeCommandError
 */
const de_CreateQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateWorkerBlockCommand
 */
export const de_CreateWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkerBlockResponse(data, context);
  const response: CreateWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkerBlockCommandError
 */
const de_CreateWorkerBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteHITCommand
 */
export const de_DeleteHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHITResponse(data, context);
  const response: DeleteHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteHITCommandError
 */
const de_DeleteHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteQualificationTypeCommand
 */
export const de_DeleteQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteQualificationTypeResponse(data, context);
  const response: DeleteQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteQualificationTypeCommandError
 */
const de_DeleteQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteWorkerBlockCommand
 */
export const de_DeleteWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkerBlockResponse(data, context);
  const response: DeleteWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkerBlockCommandError
 */
const de_DeleteWorkerBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateQualificationFromWorkerCommand
 */
export const de_DisassociateQualificationFromWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateQualificationFromWorkerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateQualificationFromWorkerResponse(data, context);
  const response: DisassociateQualificationFromWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError
 */
const de_DisassociateQualificationFromWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAccountBalanceCommand
 */
export const de_GetAccountBalanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountBalanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountBalanceResponse(data, context);
  const response: GetAccountBalanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAccountBalanceCommandError
 */
const de_GetAccountBalanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAssignmentCommand
 */
export const de_GetAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAssignmentResponse(data, context);
  const response: GetAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAssignmentCommandError
 */
const de_GetAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetFileUploadURLCommand
 */
export const de_GetFileUploadURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFileUploadURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFileUploadURLResponse(data, context);
  const response: GetFileUploadURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFileUploadURLCommandError
 */
const de_GetFileUploadURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetHITCommand
 */
export const de_GetHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetHITResponse(data, context);
  const response: GetHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetHITCommandError
 */
const de_GetHITCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetQualificationScoreCommand
 */
export const de_GetQualificationScoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQualificationScoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQualificationScoreResponse(data, context);
  const response: GetQualificationScoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQualificationScoreCommandError
 */
const de_GetQualificationScoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetQualificationTypeCommand
 */
export const de_GetQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQualificationTypeResponse(data, context);
  const response: GetQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQualificationTypeCommandError
 */
const de_GetQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssignmentsForHITCommand
 */
export const de_ListAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssignmentsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssignmentsForHITResponse(data, context);
  const response: ListAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssignmentsForHITCommandError
 */
const de_ListAssignmentsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListBonusPaymentsCommand
 */
export const de_ListBonusPaymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBonusPaymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBonusPaymentsResponse(data, context);
  const response: ListBonusPaymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBonusPaymentsCommandError
 */
const de_ListBonusPaymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHITsCommand
 */
export const de_ListHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHITsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHITsResponse(data, context);
  const response: ListHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHITsCommandError
 */
const de_ListHITsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHITsForQualificationTypeCommand
 */
export const de_ListHITsForQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHITsForQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHITsForQualificationTypeResponse(data, context);
  const response: ListHITsForQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHITsForQualificationTypeCommandError
 */
const de_ListHITsForQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListQualificationRequestsCommand
 */
export const de_ListQualificationRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQualificationRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQualificationRequestsResponse(data, context);
  const response: ListQualificationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListQualificationRequestsCommandError
 */
const de_ListQualificationRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListQualificationTypesCommand
 */
export const de_ListQualificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQualificationTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQualificationTypesResponse(data, context);
  const response: ListQualificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListQualificationTypesCommandError
 */
const de_ListQualificationTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListReviewableHITsCommand
 */
export const de_ListReviewableHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReviewableHITsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReviewableHITsResponse(data, context);
  const response: ListReviewableHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReviewableHITsCommandError
 */
const de_ListReviewableHITsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListReviewPolicyResultsForHITCommand
 */
export const de_ListReviewPolicyResultsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReviewPolicyResultsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReviewPolicyResultsForHITResponse(data, context);
  const response: ListReviewPolicyResultsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError
 */
const de_ListReviewPolicyResultsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListWorkerBlocksCommand
 */
export const de_ListWorkerBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkerBlocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkerBlocksResponse(data, context);
  const response: ListWorkerBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWorkerBlocksCommandError
 */
const de_ListWorkerBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListWorkersWithQualificationTypeCommand
 */
export const de_ListWorkersWithQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkersWithQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkersWithQualificationTypeResponse(data, context);
  const response: ListWorkersWithQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError
 */
const de_ListWorkersWithQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1NotifyWorkersCommand
 */
export const de_NotifyWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyWorkersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyWorkersResponse(data, context);
  const response: NotifyWorkersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyWorkersCommandError
 */
const de_NotifyWorkersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1RejectAssignmentCommand
 */
export const de_RejectAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectAssignmentResponse(data, context);
  const response: RejectAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectAssignmentCommandError
 */
const de_RejectAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1RejectQualificationRequestCommand
 */
export const de_RejectQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectQualificationRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectQualificationRequestResponse(data, context);
  const response: RejectQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectQualificationRequestCommandError
 */
const de_RejectQualificationRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1SendBonusCommand
 */
export const de_SendBonusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendBonusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendBonusResponse(data, context);
  const response: SendBonusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendBonusCommandError
 */
const de_SendBonusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1SendTestEventNotificationCommand
 */
export const de_SendTestEventNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTestEventNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendTestEventNotificationResponse(data, context);
  const response: SendTestEventNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendTestEventNotificationCommandError
 */
const de_SendTestEventNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateExpirationForHITCommand
 */
export const de_UpdateExpirationForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateExpirationForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateExpirationForHITResponse(data, context);
  const response: UpdateExpirationForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateExpirationForHITCommandError
 */
const de_UpdateExpirationForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateHITReviewStatusCommand
 */
export const de_UpdateHITReviewStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHITReviewStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHITReviewStatusResponse(data, context);
  const response: UpdateHITReviewStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateHITReviewStatusCommandError
 */
const de_UpdateHITReviewStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateHITTypeOfHITCommand
 */
export const de_UpdateHITTypeOfHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHITTypeOfHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHITTypeOfHITResponse(data, context);
  const response: UpdateHITTypeOfHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateHITTypeOfHITCommandError
 */
const de_UpdateHITTypeOfHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNotificationSettingsCommand
 */
export const de_UpdateNotificationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotificationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNotificationSettingsResponse(data, context);
  const response: UpdateNotificationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNotificationSettingsCommandError
 */
const de_UpdateNotificationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateQualificationTypeCommand
 */
export const de_UpdateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateQualificationTypeResponse(data, context);
  const response: UpdateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateQualificationTypeCommandError
 */
const de_UpdateQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await de_RequestErrorRes(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await de_ServiceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1RequestErrorRes
 */
const de_RequestErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<RequestError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestError(body, context);
  const exception = new RequestError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceFaultRes
 */
const de_ServiceFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceFault(body, context);
  const exception = new ServiceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptQualificationRequestRequest
 */
const se_AcceptQualificationRequestRequest = (
  input: AcceptQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntegerValue != null && { IntegerValue: input.IntegerValue }),
    ...(input.QualificationRequestId != null && { QualificationRequestId: input.QualificationRequestId }),
  };
};

/**
 * serializeAws_json1_1ApproveAssignmentRequest
 */
const se_ApproveAssignmentRequest = (input: ApproveAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.OverrideRejection != null && { OverrideRejection: input.OverrideRejection }),
    ...(input.RequesterFeedback != null && { RequesterFeedback: input.RequesterFeedback }),
  };
};

/**
 * serializeAws_json1_1AssignmentStatusList
 */
const se_AssignmentStatusList = (input: (AssignmentStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateQualificationWithWorkerRequest
 */
const se_AssociateQualificationWithWorkerRequest = (
  input: AssociateQualificationWithWorkerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntegerValue != null && { IntegerValue: input.IntegerValue }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.SendNotification != null && { SendNotification: input.SendNotification }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest
 */
const se_CreateAdditionalAssignmentsForHITRequest = (
  input: CreateAdditionalAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.NumberOfAdditionalAssignments != null && {
      NumberOfAdditionalAssignments: input.NumberOfAdditionalAssignments,
    }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
  };
};

/**
 * serializeAws_json1_1CreateHITRequest
 */
const se_CreateHITRequest = (input: CreateHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentDurationInSeconds != null && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds,
    }),
    ...(input.AssignmentReviewPolicy != null && {
      AssignmentReviewPolicy: se_ReviewPolicy(input.AssignmentReviewPolicy, context),
    }),
    ...(input.AutoApprovalDelayInSeconds != null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HITLayoutId != null && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters != null && {
      HITLayoutParameters: se_HITLayoutParameterList(input.HITLayoutParameters, context),
    }),
    ...(input.HITReviewPolicy != null && { HITReviewPolicy: se_ReviewPolicy(input.HITReviewPolicy, context) }),
    ...(input.Keywords != null && { Keywords: input.Keywords }),
    ...(input.LifetimeInSeconds != null && { LifetimeInSeconds: input.LifetimeInSeconds }),
    ...(input.MaxAssignments != null && { MaxAssignments: input.MaxAssignments }),
    ...(input.QualificationRequirements != null && {
      QualificationRequirements: se_QualificationRequirementList(input.QualificationRequirements, context),
    }),
    ...(input.Question != null && { Question: input.Question }),
    ...(input.RequesterAnnotation != null && { RequesterAnnotation: input.RequesterAnnotation }),
    ...(input.Reward != null && { Reward: input.Reward }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
  };
};

/**
 * serializeAws_json1_1CreateHITTypeRequest
 */
const se_CreateHITTypeRequest = (input: CreateHITTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentDurationInSeconds != null && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds,
    }),
    ...(input.AutoApprovalDelayInSeconds != null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Keywords != null && { Keywords: input.Keywords }),
    ...(input.QualificationRequirements != null && {
      QualificationRequirements: se_QualificationRequirementList(input.QualificationRequirements, context),
    }),
    ...(input.Reward != null && { Reward: input.Reward }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1CreateHITWithHITTypeRequest
 */
const se_CreateHITWithHITTypeRequest = (input: CreateHITWithHITTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentReviewPolicy != null && {
      AssignmentReviewPolicy: se_ReviewPolicy(input.AssignmentReviewPolicy, context),
    }),
    ...(input.HITLayoutId != null && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters != null && {
      HITLayoutParameters: se_HITLayoutParameterList(input.HITLayoutParameters, context),
    }),
    ...(input.HITReviewPolicy != null && { HITReviewPolicy: se_ReviewPolicy(input.HITReviewPolicy, context) }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.LifetimeInSeconds != null && { LifetimeInSeconds: input.LifetimeInSeconds }),
    ...(input.MaxAssignments != null && { MaxAssignments: input.MaxAssignments }),
    ...(input.Question != null && { Question: input.Question }),
    ...(input.RequesterAnnotation != null && { RequesterAnnotation: input.RequesterAnnotation }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
  };
};

/**
 * serializeAws_json1_1CreateQualificationTypeRequest
 */
const se_CreateQualificationTypeRequest = (input: CreateQualificationTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnswerKey != null && { AnswerKey: input.AnswerKey }),
    ...(input.AutoGranted != null && { AutoGranted: input.AutoGranted }),
    ...(input.AutoGrantedValue != null && { AutoGrantedValue: input.AutoGrantedValue }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Keywords != null && { Keywords: input.Keywords }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QualificationTypeStatus != null && { QualificationTypeStatus: input.QualificationTypeStatus }),
    ...(input.RetryDelayInSeconds != null && { RetryDelayInSeconds: input.RetryDelayInSeconds }),
    ...(input.Test != null && { Test: input.Test }),
    ...(input.TestDurationInSeconds != null && { TestDurationInSeconds: input.TestDurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1CreateWorkerBlockRequest
 */
const se_CreateWorkerBlockRequest = (input: CreateWorkerBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1CustomerIdList
 */
const se_CustomerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteHITRequest
 */
const se_DeleteHITRequest = (input: DeleteHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

/**
 * serializeAws_json1_1DeleteQualificationTypeRequest
 */
const se_DeleteQualificationTypeRequest = (input: DeleteQualificationTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkerBlockRequest
 */
const se_DeleteWorkerBlockRequest = (input: DeleteWorkerBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1DisassociateQualificationFromWorkerRequest
 */
const se_DisassociateQualificationFromWorkerRequest = (
  input: DisassociateQualificationFromWorkerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1EventTypeList
 */
const se_EventTypeList = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetAccountBalanceRequest
 */
const se_GetAccountBalanceRequest = (input: GetAccountBalanceRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetAssignmentRequest
 */
const se_GetAssignmentRequest = (input: GetAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
  };
};

/**
 * serializeAws_json1_1GetFileUploadURLRequest
 */
const se_GetFileUploadURLRequest = (input: GetFileUploadURLRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.QuestionIdentifier != null && { QuestionIdentifier: input.QuestionIdentifier }),
  };
};

/**
 * serializeAws_json1_1GetHITRequest
 */
const se_GetHITRequest = (input: GetHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

/**
 * serializeAws_json1_1GetQualificationScoreRequest
 */
const se_GetQualificationScoreRequest = (input: GetQualificationScoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1GetQualificationTypeRequest
 */
const se_GetQualificationTypeRequest = (input: GetQualificationTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

/**
 * serializeAws_json1_1HITLayoutParameter
 */
const se_HITLayoutParameter = (input: HITLayoutParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1HITLayoutParameterList
 */
const se_HITLayoutParameterList = (input: HITLayoutParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HITLayoutParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1IntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListAssignmentsForHITRequest
 */
const se_ListAssignmentsForHITRequest = (input: ListAssignmentsForHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentStatuses != null && {
      AssignmentStatuses: se_AssignmentStatusList(input.AssignmentStatuses, context),
    }),
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListBonusPaymentsRequest
 */
const se_ListBonusPaymentsRequest = (input: ListBonusPaymentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListHITsForQualificationTypeRequest
 */
const se_ListHITsForQualificationTypeRequest = (
  input: ListHITsForQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

/**
 * serializeAws_json1_1ListHITsRequest
 */
const se_ListHITsRequest = (input: ListHITsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListQualificationRequestsRequest
 */
const se_ListQualificationRequestsRequest = (input: ListQualificationRequestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

/**
 * serializeAws_json1_1ListQualificationTypesRequest
 */
const se_ListQualificationTypesRequest = (input: ListQualificationTypesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MustBeOwnedByCaller != null && { MustBeOwnedByCaller: input.MustBeOwnedByCaller }),
    ...(input.MustBeRequestable != null && { MustBeRequestable: input.MustBeRequestable }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Query != null && { Query: input.Query }),
  };
};

/**
 * serializeAws_json1_1ListReviewableHITsRequest
 */
const se_ListReviewableHITsRequest = (input: ListReviewableHITsRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListReviewPolicyResultsForHITRequest
 */
const se_ListReviewPolicyResultsForHITRequest = (
  input: ListReviewPolicyResultsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyLevels != null && { PolicyLevels: se_ReviewPolicyLevelList(input.PolicyLevels, context) }),
    ...(input.RetrieveActions != null && { RetrieveActions: input.RetrieveActions }),
    ...(input.RetrieveResults != null && { RetrieveResults: input.RetrieveResults }),
  };
};

/**
 * serializeAws_json1_1ListWorkerBlocksRequest
 */
const se_ListWorkerBlocksRequest = (input: ListWorkerBlocksRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListWorkersWithQualificationTypeRequest
 */
const se_ListWorkersWithQualificationTypeRequest = (
  input: ListWorkersWithQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1Locale
 */
const se_Locale = (input: Locale, context: __SerdeContext): any => {
  return {
    ...(input.Country != null && { Country: input.Country }),
    ...(input.Subdivision != null && { Subdivision: input.Subdivision }),
  };
};

/**
 * serializeAws_json1_1LocaleList
 */
const se_LocaleList = (input: Locale[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Locale(entry, context);
    });
};

/**
 * serializeAws_json1_1NotificationSpecification
 */
const se_NotificationSpecification = (input: NotificationSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.EventTypes != null && { EventTypes: se_EventTypeList(input.EventTypes, context) }),
    ...(input.Transport != null && { Transport: input.Transport }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1NotifyWorkersRequest
 */
const se_NotifyWorkersRequest = (input: NotifyWorkersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MessageText != null && { MessageText: input.MessageText }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.WorkerIds != null && { WorkerIds: se_CustomerIdList(input.WorkerIds, context) }),
  };
};

/**
 * serializeAws_json1_1ParameterMapEntry
 */
const se_ParameterMapEntry = (input: ParameterMapEntry, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_StringList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1ParameterMapEntryList
 */
const se_ParameterMapEntryList = (input: ParameterMapEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterMapEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1PolicyParameter
 */
const se_PolicyParameter = (input: PolicyParameter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MapEntries != null && { MapEntries: se_ParameterMapEntryList(input.MapEntries, context) }),
    ...(input.Values != null && { Values: se_StringList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1PolicyParameterList
 */
const se_PolicyParameterList = (input: PolicyParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PolicyParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1QualificationRequirement
 */
const se_QualificationRequirement = (input: QualificationRequirement, context: __SerdeContext): any => {
  return {
    ...(input.ActionsGuarded != null && { ActionsGuarded: input.ActionsGuarded }),
    ...(input.Comparator != null && { Comparator: input.Comparator }),
    ...(input.IntegerValues != null && { IntegerValues: se_IntegerList(input.IntegerValues, context) }),
    ...(input.LocaleValues != null && { LocaleValues: se_LocaleList(input.LocaleValues, context) }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.RequiredToPreview != null && { RequiredToPreview: input.RequiredToPreview }),
  };
};

/**
 * serializeAws_json1_1QualificationRequirementList
 */
const se_QualificationRequirementList = (input: QualificationRequirement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_QualificationRequirement(entry, context);
    });
};

/**
 * serializeAws_json1_1RejectAssignmentRequest
 */
const se_RejectAssignmentRequest = (input: RejectAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.RequesterFeedback != null && { RequesterFeedback: input.RequesterFeedback }),
  };
};

/**
 * serializeAws_json1_1RejectQualificationRequestRequest
 */
const se_RejectQualificationRequestRequest = (
  input: RejectQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationRequestId != null && { QualificationRequestId: input.QualificationRequestId }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

/**
 * serializeAws_json1_1ReviewPolicy
 */
const se_ReviewPolicy = (input: ReviewPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_PolicyParameterList(input.Parameters, context) }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

/**
 * serializeAws_json1_1ReviewPolicyLevelList
 */
const se_ReviewPolicyLevelList = (input: (ReviewPolicyLevel | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SendBonusRequest
 */
const se_SendBonusRequest = (input: SendBonusRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.BonusAmount != null && { BonusAmount: input.BonusAmount }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

/**
 * serializeAws_json1_1SendTestEventNotificationRequest
 */
const se_SendTestEventNotificationRequest = (input: SendTestEventNotificationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Notification != null && { Notification: se_NotificationSpecification(input.Notification, context) }),
    ...(input.TestEventType != null && { TestEventType: input.TestEventType }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UpdateExpirationForHITRequest
 */
const se_UpdateExpirationForHITRequest = (input: UpdateExpirationForHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExpireAt != null && { ExpireAt: Math.round(input.ExpireAt.getTime() / 1000) }),
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

/**
 * serializeAws_json1_1UpdateHITReviewStatusRequest
 */
const se_UpdateHITReviewStatusRequest = (input: UpdateHITReviewStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.Revert != null && { Revert: input.Revert }),
  };
};

/**
 * serializeAws_json1_1UpdateHITTypeOfHITRequest
 */
const se_UpdateHITTypeOfHITRequest = (input: UpdateHITTypeOfHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
  };
};

/**
 * serializeAws_json1_1UpdateNotificationSettingsRequest
 */
const se_UpdateNotificationSettingsRequest = (
  input: UpdateNotificationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.Notification != null && { Notification: se_NotificationSpecification(input.Notification, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateQualificationTypeRequest
 */
const se_UpdateQualificationTypeRequest = (input: UpdateQualificationTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnswerKey != null && { AnswerKey: input.AnswerKey }),
    ...(input.AutoGranted != null && { AutoGranted: input.AutoGranted }),
    ...(input.AutoGrantedValue != null && { AutoGrantedValue: input.AutoGrantedValue }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.QualificationTypeStatus != null && { QualificationTypeStatus: input.QualificationTypeStatus }),
    ...(input.RetryDelayInSeconds != null && { RetryDelayInSeconds: input.RetryDelayInSeconds }),
    ...(input.Test != null && { Test: input.Test }),
    ...(input.TestDurationInSeconds != null && { TestDurationInSeconds: input.TestDurationInSeconds }),
  };
};

/**
 * deserializeAws_json1_1AcceptQualificationRequestResponse
 */
const de_AcceptQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): AcceptQualificationRequestResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ApproveAssignmentResponse
 */
const de_ApproveAssignmentResponse = (output: any, context: __SerdeContext): ApproveAssignmentResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Assignment
 */
const de_Assignment = (output: any, context: __SerdeContext): Assignment => {
  return {
    AcceptTime:
      output.AcceptTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AcceptTime))) : undefined,
    Answer: __expectString(output.Answer),
    ApprovalTime:
      output.ApprovalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApprovalTime)))
        : undefined,
    AssignmentId: __expectString(output.AssignmentId),
    AssignmentStatus: __expectString(output.AssignmentStatus),
    AutoApprovalTime:
      output.AutoApprovalTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AutoApprovalTime)))
        : undefined,
    Deadline:
      output.Deadline != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Deadline))) : undefined,
    HITId: __expectString(output.HITId),
    RejectionTime:
      output.RejectionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RejectionTime)))
        : undefined,
    RequesterFeedback: __expectString(output.RequesterFeedback),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1AssignmentList
 */
const de_AssignmentList = (output: any, context: __SerdeContext): Assignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Assignment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateQualificationWithWorkerResponse
 */
const de_AssociateQualificationWithWorkerResponse = (
  output: any,
  context: __SerdeContext
): AssociateQualificationWithWorkerResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1BonusPayment
 */
const de_BonusPayment = (output: any, context: __SerdeContext): BonusPayment => {
  return {
    AssignmentId: __expectString(output.AssignmentId),
    BonusAmount: __expectString(output.BonusAmount),
    GrantTime:
      output.GrantTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.GrantTime))) : undefined,
    Reason: __expectString(output.Reason),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1BonusPaymentList
 */
const de_BonusPaymentList = (output: any, context: __SerdeContext): BonusPayment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BonusPayment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse
 */
const de_CreateAdditionalAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): CreateAdditionalAssignmentsForHITResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateHITResponse
 */
const de_CreateHITResponse = (output: any, context: __SerdeContext): CreateHITResponse => {
  return {
    HIT: output.HIT != null ? de_HIT(output.HIT, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateHITTypeResponse
 */
const de_CreateHITTypeResponse = (output: any, context: __SerdeContext): CreateHITTypeResponse => {
  return {
    HITTypeId: __expectString(output.HITTypeId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateHITWithHITTypeResponse
 */
const de_CreateHITWithHITTypeResponse = (output: any, context: __SerdeContext): CreateHITWithHITTypeResponse => {
  return {
    HIT: output.HIT != null ? de_HIT(output.HIT, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateQualificationTypeResponse
 */
const de_CreateQualificationTypeResponse = (output: any, context: __SerdeContext): CreateQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null ? de_QualificationType(output.QualificationType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkerBlockResponse
 */
const de_CreateWorkerBlockResponse = (output: any, context: __SerdeContext): CreateWorkerBlockResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteHITResponse
 */
const de_DeleteHITResponse = (output: any, context: __SerdeContext): DeleteHITResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteQualificationTypeResponse
 */
const de_DeleteQualificationTypeResponse = (output: any, context: __SerdeContext): DeleteQualificationTypeResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteWorkerBlockResponse
 */
const de_DeleteWorkerBlockResponse = (output: any, context: __SerdeContext): DeleteWorkerBlockResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateQualificationFromWorkerResponse
 */
const de_DisassociateQualificationFromWorkerResponse = (
  output: any,
  context: __SerdeContext
): DisassociateQualificationFromWorkerResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1GetAccountBalanceResponse
 */
const de_GetAccountBalanceResponse = (output: any, context: __SerdeContext): GetAccountBalanceResponse => {
  return {
    AvailableBalance: __expectString(output.AvailableBalance),
    OnHoldBalance: __expectString(output.OnHoldBalance),
  } as any;
};

/**
 * deserializeAws_json1_1GetAssignmentResponse
 */
const de_GetAssignmentResponse = (output: any, context: __SerdeContext): GetAssignmentResponse => {
  return {
    Assignment: output.Assignment != null ? de_Assignment(output.Assignment, context) : undefined,
    HIT: output.HIT != null ? de_HIT(output.HIT, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFileUploadURLResponse
 */
const de_GetFileUploadURLResponse = (output: any, context: __SerdeContext): GetFileUploadURLResponse => {
  return {
    FileUploadURL: __expectString(output.FileUploadURL),
  } as any;
};

/**
 * deserializeAws_json1_1GetHITResponse
 */
const de_GetHITResponse = (output: any, context: __SerdeContext): GetHITResponse => {
  return {
    HIT: output.HIT != null ? de_HIT(output.HIT, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQualificationScoreResponse
 */
const de_GetQualificationScoreResponse = (output: any, context: __SerdeContext): GetQualificationScoreResponse => {
  return {
    Qualification: output.Qualification != null ? de_Qualification(output.Qualification, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQualificationTypeResponse
 */
const de_GetQualificationTypeResponse = (output: any, context: __SerdeContext): GetQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null ? de_QualificationType(output.QualificationType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HIT
 */
const de_HIT = (output: any, context: __SerdeContext): HIT => {
  return {
    AssignmentDurationInSeconds: __expectLong(output.AssignmentDurationInSeconds),
    AutoApprovalDelayInSeconds: __expectLong(output.AutoApprovalDelayInSeconds),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    Expiration:
      output.Expiration != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expiration))) : undefined,
    HITGroupId: __expectString(output.HITGroupId),
    HITId: __expectString(output.HITId),
    HITLayoutId: __expectString(output.HITLayoutId),
    HITReviewStatus: __expectString(output.HITReviewStatus),
    HITStatus: __expectString(output.HITStatus),
    HITTypeId: __expectString(output.HITTypeId),
    Keywords: __expectString(output.Keywords),
    MaxAssignments: __expectInt32(output.MaxAssignments),
    NumberOfAssignmentsAvailable: __expectInt32(output.NumberOfAssignmentsAvailable),
    NumberOfAssignmentsCompleted: __expectInt32(output.NumberOfAssignmentsCompleted),
    NumberOfAssignmentsPending: __expectInt32(output.NumberOfAssignmentsPending),
    QualificationRequirements:
      output.QualificationRequirements != null
        ? de_QualificationRequirementList(output.QualificationRequirements, context)
        : undefined,
    Question: __expectString(output.Question),
    RequesterAnnotation: __expectString(output.RequesterAnnotation),
    Reward: __expectString(output.Reward),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_json1_1HITList
 */
const de_HITList = (output: any, context: __SerdeContext): HIT[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HIT(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IntegerList
 */
const de_IntegerList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListAssignmentsForHITResponse
 */
const de_ListAssignmentsForHITResponse = (output: any, context: __SerdeContext): ListAssignmentsForHITResponse => {
  return {
    Assignments: output.Assignments != null ? de_AssignmentList(output.Assignments, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

/**
 * deserializeAws_json1_1ListBonusPaymentsResponse
 */
const de_ListBonusPaymentsResponse = (output: any, context: __SerdeContext): ListBonusPaymentsResponse => {
  return {
    BonusPayments: output.BonusPayments != null ? de_BonusPaymentList(output.BonusPayments, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

/**
 * deserializeAws_json1_1ListHITsForQualificationTypeResponse
 */
const de_ListHITsForQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListHITsForQualificationTypeResponse => {
  return {
    HITs: output.HITs != null ? de_HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

/**
 * deserializeAws_json1_1ListHITsResponse
 */
const de_ListHITsResponse = (output: any, context: __SerdeContext): ListHITsResponse => {
  return {
    HITs: output.HITs != null ? de_HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

/**
 * deserializeAws_json1_1ListQualificationRequestsResponse
 */
const de_ListQualificationRequestsResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationRequestsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    QualificationRequests:
      output.QualificationRequests != null
        ? de_QualificationRequestList(output.QualificationRequests, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListQualificationTypesResponse
 */
const de_ListQualificationTypesResponse = (output: any, context: __SerdeContext): ListQualificationTypesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    QualificationTypes:
      output.QualificationTypes != null ? de_QualificationTypeList(output.QualificationTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReviewableHITsResponse
 */
const de_ListReviewableHITsResponse = (output: any, context: __SerdeContext): ListReviewableHITsResponse => {
  return {
    HITs: output.HITs != null ? de_HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

/**
 * deserializeAws_json1_1ListReviewPolicyResultsForHITResponse
 */
const de_ListReviewPolicyResultsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListReviewPolicyResultsForHITResponse => {
  return {
    AssignmentReviewPolicy:
      output.AssignmentReviewPolicy != null ? de_ReviewPolicy(output.AssignmentReviewPolicy, context) : undefined,
    AssignmentReviewReport:
      output.AssignmentReviewReport != null ? de_ReviewReport(output.AssignmentReviewReport, context) : undefined,
    HITId: __expectString(output.HITId),
    HITReviewPolicy: output.HITReviewPolicy != null ? de_ReviewPolicy(output.HITReviewPolicy, context) : undefined,
    HITReviewReport: output.HITReviewReport != null ? de_ReviewReport(output.HITReviewReport, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListWorkerBlocksResponse
 */
const de_ListWorkerBlocksResponse = (output: any, context: __SerdeContext): ListWorkerBlocksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    WorkerBlocks: output.WorkerBlocks != null ? de_WorkerBlockList(output.WorkerBlocks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWorkersWithQualificationTypeResponse
 */
const de_ListWorkersWithQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListWorkersWithQualificationTypeResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    Qualifications: output.Qualifications != null ? de_QualificationList(output.Qualifications, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Locale
 */
const de_Locale = (output: any, context: __SerdeContext): Locale => {
  return {
    Country: __expectString(output.Country),
    Subdivision: __expectString(output.Subdivision),
  } as any;
};

/**
 * deserializeAws_json1_1LocaleList
 */
const de_LocaleList = (output: any, context: __SerdeContext): Locale[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Locale(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotifyWorkersFailureStatus
 */
const de_NotifyWorkersFailureStatus = (output: any, context: __SerdeContext): NotifyWorkersFailureStatus => {
  return {
    NotifyWorkersFailureCode: __expectString(output.NotifyWorkersFailureCode),
    NotifyWorkersFailureMessage: __expectString(output.NotifyWorkersFailureMessage),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1NotifyWorkersFailureStatusList
 */
const de_NotifyWorkersFailureStatusList = (output: any, context: __SerdeContext): NotifyWorkersFailureStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotifyWorkersFailureStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotifyWorkersResponse
 */
const de_NotifyWorkersResponse = (output: any, context: __SerdeContext): NotifyWorkersResponse => {
  return {
    NotifyWorkersFailureStatuses:
      output.NotifyWorkersFailureStatuses != null
        ? de_NotifyWorkersFailureStatusList(output.NotifyWorkersFailureStatuses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ParameterMapEntry
 */
const de_ParameterMapEntry = (output: any, context: __SerdeContext): ParameterMapEntry => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_StringList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ParameterMapEntryList
 */
const de_ParameterMapEntryList = (output: any, context: __SerdeContext): ParameterMapEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterMapEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PolicyParameter
 */
const de_PolicyParameter = (output: any, context: __SerdeContext): PolicyParameter => {
  return {
    Key: __expectString(output.Key),
    MapEntries: output.MapEntries != null ? de_ParameterMapEntryList(output.MapEntries, context) : undefined,
    Values: output.Values != null ? de_StringList(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PolicyParameterList
 */
const de_PolicyParameterList = (output: any, context: __SerdeContext): PolicyParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Qualification
 */
const de_Qualification = (output: any, context: __SerdeContext): Qualification => {
  return {
    GrantTime:
      output.GrantTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.GrantTime))) : undefined,
    IntegerValue: __expectInt32(output.IntegerValue),
    LocaleValue: output.LocaleValue != null ? de_Locale(output.LocaleValue, context) : undefined,
    QualificationTypeId: __expectString(output.QualificationTypeId),
    Status: __expectString(output.Status),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1QualificationList
 */
const de_QualificationList = (output: any, context: __SerdeContext): Qualification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Qualification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QualificationRequest
 */
const de_QualificationRequest = (output: any, context: __SerdeContext): QualificationRequest => {
  return {
    Answer: __expectString(output.Answer),
    QualificationRequestId: __expectString(output.QualificationRequestId),
    QualificationTypeId: __expectString(output.QualificationTypeId),
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
    Test: __expectString(output.Test),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1QualificationRequestList
 */
const de_QualificationRequestList = (output: any, context: __SerdeContext): QualificationRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QualificationRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QualificationRequirement
 */
const de_QualificationRequirement = (output: any, context: __SerdeContext): QualificationRequirement => {
  return {
    ActionsGuarded: __expectString(output.ActionsGuarded),
    Comparator: __expectString(output.Comparator),
    IntegerValues: output.IntegerValues != null ? de_IntegerList(output.IntegerValues, context) : undefined,
    LocaleValues: output.LocaleValues != null ? de_LocaleList(output.LocaleValues, context) : undefined,
    QualificationTypeId: __expectString(output.QualificationTypeId),
    RequiredToPreview: __expectBoolean(output.RequiredToPreview),
  } as any;
};

/**
 * deserializeAws_json1_1QualificationRequirementList
 */
const de_QualificationRequirementList = (output: any, context: __SerdeContext): QualificationRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QualificationRequirement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QualificationType
 */
const de_QualificationType = (output: any, context: __SerdeContext): QualificationType => {
  return {
    AnswerKey: __expectString(output.AnswerKey),
    AutoGranted: __expectBoolean(output.AutoGranted),
    AutoGrantedValue: __expectInt32(output.AutoGrantedValue),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    IsRequestable: __expectBoolean(output.IsRequestable),
    Keywords: __expectString(output.Keywords),
    Name: __expectString(output.Name),
    QualificationTypeId: __expectString(output.QualificationTypeId),
    QualificationTypeStatus: __expectString(output.QualificationTypeStatus),
    RetryDelayInSeconds: __expectLong(output.RetryDelayInSeconds),
    Test: __expectString(output.Test),
    TestDurationInSeconds: __expectLong(output.TestDurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1QualificationTypeList
 */
const de_QualificationTypeList = (output: any, context: __SerdeContext): QualificationType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QualificationType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RejectAssignmentResponse
 */
const de_RejectAssignmentResponse = (output: any, context: __SerdeContext): RejectAssignmentResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RejectQualificationRequestResponse
 */
const de_RejectQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): RejectQualificationRequestResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RequestError
 */
const de_RequestError = (output: any, context: __SerdeContext): RequestError => {
  return {
    Message: __expectString(output.Message),
    TurkErrorCode: __expectString(output.TurkErrorCode),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewActionDetail
 */
const de_ReviewActionDetail = (output: any, context: __SerdeContext): ReviewActionDetail => {
  return {
    ActionId: __expectString(output.ActionId),
    ActionName: __expectString(output.ActionName),
    CompleteTime:
      output.CompleteTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompleteTime)))
        : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    Result: __expectString(output.Result),
    Status: __expectString(output.Status),
    TargetId: __expectString(output.TargetId),
    TargetType: __expectString(output.TargetType),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewActionDetailList
 */
const de_ReviewActionDetailList = (output: any, context: __SerdeContext): ReviewActionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReviewActionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReviewPolicy
 */
const de_ReviewPolicy = (output: any, context: __SerdeContext): ReviewPolicy => {
  return {
    Parameters: output.Parameters != null ? de_PolicyParameterList(output.Parameters, context) : undefined,
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewReport
 */
const de_ReviewReport = (output: any, context: __SerdeContext): ReviewReport => {
  return {
    ReviewActions: output.ReviewActions != null ? de_ReviewActionDetailList(output.ReviewActions, context) : undefined,
    ReviewResults: output.ReviewResults != null ? de_ReviewResultDetailList(output.ReviewResults, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReviewResultDetail
 */
const de_ReviewResultDetail = (output: any, context: __SerdeContext): ReviewResultDetail => {
  return {
    ActionId: __expectString(output.ActionId),
    Key: __expectString(output.Key),
    QuestionId: __expectString(output.QuestionId),
    SubjectId: __expectString(output.SubjectId),
    SubjectType: __expectString(output.SubjectType),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ReviewResultDetailList
 */
const de_ReviewResultDetailList = (output: any, context: __SerdeContext): ReviewResultDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReviewResultDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SendBonusResponse
 */
const de_SendBonusResponse = (output: any, context: __SerdeContext): SendBonusResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SendTestEventNotificationResponse
 */
const de_SendTestEventNotificationResponse = (
  output: any,
  context: __SerdeContext
): SendTestEventNotificationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ServiceFault
 */
const de_ServiceFault = (output: any, context: __SerdeContext): ServiceFault => {
  return {
    Message: __expectString(output.Message),
    TurkErrorCode: __expectString(output.TurkErrorCode),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1UpdateExpirationForHITResponse
 */
const de_UpdateExpirationForHITResponse = (output: any, context: __SerdeContext): UpdateExpirationForHITResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateHITReviewStatusResponse
 */
const de_UpdateHITReviewStatusResponse = (output: any, context: __SerdeContext): UpdateHITReviewStatusResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateHITTypeOfHITResponse
 */
const de_UpdateHITTypeOfHITResponse = (output: any, context: __SerdeContext): UpdateHITTypeOfHITResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNotificationSettingsResponse
 */
const de_UpdateNotificationSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateQualificationTypeResponse
 */
const de_UpdateQualificationTypeResponse = (output: any, context: __SerdeContext): UpdateQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null ? de_QualificationType(output.QualificationType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkerBlock
 */
const de_WorkerBlock = (output: any, context: __SerdeContext): WorkerBlock => {
  return {
    Reason: __expectString(output.Reason),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

/**
 * deserializeAws_json1_1WorkerBlockList
 */
const de_WorkerBlockList = (output: any, context: __SerdeContext): WorkerBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkerBlock(entry, context);
    });
  return retVal;
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `MTurkRequesterServiceV20170117.${operation}`,
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
