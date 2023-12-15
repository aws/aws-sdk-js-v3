// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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
  ApproveAssignmentRequest,
  Assignment,
  AssignmentStatus,
  AssociateQualificationWithWorkerRequest,
  BonusPayment,
  CreateAdditionalAssignmentsForHITRequest,
  CreateHITRequest,
  CreateHITResponse,
  CreateHITTypeRequest,
  CreateHITWithHITTypeRequest,
  CreateHITWithHITTypeResponse,
  CreateQualificationTypeRequest,
  CreateQualificationTypeResponse,
  CreateWorkerBlockRequest,
  DeleteHITRequest,
  DeleteQualificationTypeRequest,
  DeleteWorkerBlockRequest,
  DisassociateQualificationFromWorkerRequest,
  EventType,
  GetAccountBalanceRequest,
  GetAssignmentRequest,
  GetAssignmentResponse,
  GetFileUploadURLRequest,
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
  ListWorkersWithQualificationTypeRequest,
  ListWorkersWithQualificationTypeResponse,
  Locale,
  NotificationSpecification,
  NotifyWorkersRequest,
  ParameterMapEntry,
  PolicyParameter,
  Qualification,
  QualificationRequest,
  QualificationRequirement,
  QualificationType,
  RejectAssignmentRequest,
  RejectQualificationRequestRequest,
  RequestError,
  ReviewActionDetail,
  ReviewPolicy,
  ReviewPolicyLevel,
  ReviewReport,
  SendBonusRequest,
  SendTestEventNotificationRequest,
  ServiceFault,
  UpdateExpirationForHITRequest,
  UpdateHITReviewStatusRequest,
  UpdateHITTypeOfHITRequest,
  UpdateNotificationSettingsRequest,
  UpdateQualificationTypeRequest,
  UpdateQualificationTypeResponse,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetHITCommand
 */
export const se_GetHITCommand = async (input: GetHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHIT");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AcceptQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ApproveAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateQualificationWithWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAdditionalAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateQualificationFromWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAccountBalanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetFileUploadURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListWorkerBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyWorkersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendBonusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendTestEventNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateExpirationForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateHITReviewStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateHITTypeOfHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNotificationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RequestErrorRes
 */
const de_RequestErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<RequestError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ServiceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptQualificationRequestRequest omitted.

// se_ApproveAssignmentRequest omitted.

// se_AssignmentStatusList omitted.

// se_AssociateQualificationWithWorkerRequest omitted.

// se_CreateAdditionalAssignmentsForHITRequest omitted.

// se_CreateHITRequest omitted.

// se_CreateHITTypeRequest omitted.

// se_CreateHITWithHITTypeRequest omitted.

// se_CreateQualificationTypeRequest omitted.

// se_CreateWorkerBlockRequest omitted.

// se_CustomerIdList omitted.

// se_DeleteHITRequest omitted.

// se_DeleteQualificationTypeRequest omitted.

// se_DeleteWorkerBlockRequest omitted.

// se_DisassociateQualificationFromWorkerRequest omitted.

// se_EventTypeList omitted.

// se_GetAccountBalanceRequest omitted.

// se_GetAssignmentRequest omitted.

// se_GetFileUploadURLRequest omitted.

// se_GetHITRequest omitted.

// se_GetQualificationScoreRequest omitted.

// se_GetQualificationTypeRequest omitted.

// se_HITLayoutParameter omitted.

// se_HITLayoutParameterList omitted.

// se_IntegerList omitted.

// se_ListAssignmentsForHITRequest omitted.

// se_ListBonusPaymentsRequest omitted.

// se_ListHITsForQualificationTypeRequest omitted.

// se_ListHITsRequest omitted.

// se_ListQualificationRequestsRequest omitted.

// se_ListQualificationTypesRequest omitted.

// se_ListReviewableHITsRequest omitted.

// se_ListReviewPolicyResultsForHITRequest omitted.

// se_ListWorkerBlocksRequest omitted.

// se_ListWorkersWithQualificationTypeRequest omitted.

// se_Locale omitted.

// se_LocaleList omitted.

// se_NotificationSpecification omitted.

// se_NotifyWorkersRequest omitted.

// se_ParameterMapEntry omitted.

// se_ParameterMapEntryList omitted.

// se_PolicyParameter omitted.

// se_PolicyParameterList omitted.

// se_QualificationRequirement omitted.

// se_QualificationRequirementList omitted.

// se_RejectAssignmentRequest omitted.

// se_RejectQualificationRequestRequest omitted.

// se_ReviewPolicy omitted.

// se_ReviewPolicyLevelList omitted.

// se_SendBonusRequest omitted.

// se_SendTestEventNotificationRequest omitted.

// se_StringList omitted.

/**
 * serializeAws_json1_1UpdateExpirationForHITRequest
 */
const se_UpdateExpirationForHITRequest = (input: UpdateExpirationForHITRequest, context: __SerdeContext): any => {
  return take(input, {
    ExpireAt: (_) => Math.round(_.getTime() / 1000),
    HITId: [],
  });
};

// se_UpdateHITReviewStatusRequest omitted.

// se_UpdateHITTypeOfHITRequest omitted.

// se_UpdateNotificationSettingsRequest omitted.

// se_UpdateQualificationTypeRequest omitted.

// de_AcceptQualificationRequestResponse omitted.

// de_ApproveAssignmentResponse omitted.

/**
 * deserializeAws_json1_1Assignment
 */
const de_Assignment = (output: any, context: __SerdeContext): Assignment => {
  return take(output, {
    AcceptTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Answer: __expectString,
    ApprovalTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AssignmentId: __expectString,
    AssignmentStatus: __expectString,
    AutoApprovalTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Deadline: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HITId: __expectString,
    RejectionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequesterFeedback: __expectString,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AssignmentList
 */
const de_AssignmentList = (output: any, context: __SerdeContext): Assignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Assignment(entry, context);
    });
  return retVal;
};

// de_AssociateQualificationWithWorkerResponse omitted.

/**
 * deserializeAws_json1_1BonusPayment
 */
const de_BonusPayment = (output: any, context: __SerdeContext): BonusPayment => {
  return take(output, {
    AssignmentId: __expectString,
    BonusAmount: __expectString,
    GrantTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Reason: __expectString,
    WorkerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BonusPaymentList
 */
const de_BonusPaymentList = (output: any, context: __SerdeContext): BonusPayment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BonusPayment(entry, context);
    });
  return retVal;
};

// de_CreateAdditionalAssignmentsForHITResponse omitted.

/**
 * deserializeAws_json1_1CreateHITResponse
 */
const de_CreateHITResponse = (output: any, context: __SerdeContext): CreateHITResponse => {
  return take(output, {
    HIT: (_: any) => de_HIT(_, context),
  }) as any;
};

// de_CreateHITTypeResponse omitted.

/**
 * deserializeAws_json1_1CreateHITWithHITTypeResponse
 */
const de_CreateHITWithHITTypeResponse = (output: any, context: __SerdeContext): CreateHITWithHITTypeResponse => {
  return take(output, {
    HIT: (_: any) => de_HIT(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateQualificationTypeResponse
 */
const de_CreateQualificationTypeResponse = (output: any, context: __SerdeContext): CreateQualificationTypeResponse => {
  return take(output, {
    QualificationType: (_: any) => de_QualificationType(_, context),
  }) as any;
};

// de_CreateWorkerBlockResponse omitted.

// de_DeleteHITResponse omitted.

// de_DeleteQualificationTypeResponse omitted.

// de_DeleteWorkerBlockResponse omitted.

// de_DisassociateQualificationFromWorkerResponse omitted.

// de_GetAccountBalanceResponse omitted.

/**
 * deserializeAws_json1_1GetAssignmentResponse
 */
const de_GetAssignmentResponse = (output: any, context: __SerdeContext): GetAssignmentResponse => {
  return take(output, {
    Assignment: (_: any) => de_Assignment(_, context),
    HIT: (_: any) => de_HIT(_, context),
  }) as any;
};

// de_GetFileUploadURLResponse omitted.

/**
 * deserializeAws_json1_1GetHITResponse
 */
const de_GetHITResponse = (output: any, context: __SerdeContext): GetHITResponse => {
  return take(output, {
    HIT: (_: any) => de_HIT(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetQualificationScoreResponse
 */
const de_GetQualificationScoreResponse = (output: any, context: __SerdeContext): GetQualificationScoreResponse => {
  return take(output, {
    Qualification: (_: any) => de_Qualification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetQualificationTypeResponse
 */
const de_GetQualificationTypeResponse = (output: any, context: __SerdeContext): GetQualificationTypeResponse => {
  return take(output, {
    QualificationType: (_: any) => de_QualificationType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HIT
 */
const de_HIT = (output: any, context: __SerdeContext): HIT => {
  return take(output, {
    AssignmentDurationInSeconds: __expectLong,
    AutoApprovalDelayInSeconds: __expectLong,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Expiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HITGroupId: __expectString,
    HITId: __expectString,
    HITLayoutId: __expectString,
    HITReviewStatus: __expectString,
    HITStatus: __expectString,
    HITTypeId: __expectString,
    Keywords: __expectString,
    MaxAssignments: __expectInt32,
    NumberOfAssignmentsAvailable: __expectInt32,
    NumberOfAssignmentsCompleted: __expectInt32,
    NumberOfAssignmentsPending: __expectInt32,
    QualificationRequirements: _json,
    Question: __expectString,
    RequesterAnnotation: __expectString,
    Reward: __expectString,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HITList
 */
const de_HITList = (output: any, context: __SerdeContext): HIT[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HIT(entry, context);
    });
  return retVal;
};

// de_IntegerList omitted.

/**
 * deserializeAws_json1_1ListAssignmentsForHITResponse
 */
const de_ListAssignmentsForHITResponse = (output: any, context: __SerdeContext): ListAssignmentsForHITResponse => {
  return take(output, {
    Assignments: (_: any) => de_AssignmentList(_, context),
    NextToken: __expectString,
    NumResults: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ListBonusPaymentsResponse
 */
const de_ListBonusPaymentsResponse = (output: any, context: __SerdeContext): ListBonusPaymentsResponse => {
  return take(output, {
    BonusPayments: (_: any) => de_BonusPaymentList(_, context),
    NextToken: __expectString,
    NumResults: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHITsForQualificationTypeResponse
 */
const de_ListHITsForQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListHITsForQualificationTypeResponse => {
  return take(output, {
    HITs: (_: any) => de_HITList(_, context),
    NextToken: __expectString,
    NumResults: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHITsResponse
 */
const de_ListHITsResponse = (output: any, context: __SerdeContext): ListHITsResponse => {
  return take(output, {
    HITs: (_: any) => de_HITList(_, context),
    NextToken: __expectString,
    NumResults: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ListQualificationRequestsResponse
 */
const de_ListQualificationRequestsResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationRequestsResponse => {
  return take(output, {
    NextToken: __expectString,
    NumResults: __expectInt32,
    QualificationRequests: (_: any) => de_QualificationRequestList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListQualificationTypesResponse
 */
const de_ListQualificationTypesResponse = (output: any, context: __SerdeContext): ListQualificationTypesResponse => {
  return take(output, {
    NextToken: __expectString,
    NumResults: __expectInt32,
    QualificationTypes: (_: any) => de_QualificationTypeList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListReviewableHITsResponse
 */
const de_ListReviewableHITsResponse = (output: any, context: __SerdeContext): ListReviewableHITsResponse => {
  return take(output, {
    HITs: (_: any) => de_HITList(_, context),
    NextToken: __expectString,
    NumResults: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ListReviewPolicyResultsForHITResponse
 */
const de_ListReviewPolicyResultsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListReviewPolicyResultsForHITResponse => {
  return take(output, {
    AssignmentReviewPolicy: _json,
    AssignmentReviewReport: (_: any) => de_ReviewReport(_, context),
    HITId: __expectString,
    HITReviewPolicy: _json,
    HITReviewReport: (_: any) => de_ReviewReport(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListWorkerBlocksResponse omitted.

/**
 * deserializeAws_json1_1ListWorkersWithQualificationTypeResponse
 */
const de_ListWorkersWithQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListWorkersWithQualificationTypeResponse => {
  return take(output, {
    NextToken: __expectString,
    NumResults: __expectInt32,
    Qualifications: (_: any) => de_QualificationList(_, context),
  }) as any;
};

// de_Locale omitted.

// de_LocaleList omitted.

// de_NotifyWorkersFailureStatus omitted.

// de_NotifyWorkersFailureStatusList omitted.

// de_NotifyWorkersResponse omitted.

// de_ParameterMapEntry omitted.

// de_ParameterMapEntryList omitted.

// de_PolicyParameter omitted.

// de_PolicyParameterList omitted.

/**
 * deserializeAws_json1_1Qualification
 */
const de_Qualification = (output: any, context: __SerdeContext): Qualification => {
  return take(output, {
    GrantTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IntegerValue: __expectInt32,
    LocaleValue: _json,
    QualificationTypeId: __expectString,
    Status: __expectString,
    WorkerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1QualificationList
 */
const de_QualificationList = (output: any, context: __SerdeContext): Qualification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Qualification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QualificationRequest
 */
const de_QualificationRequest = (output: any, context: __SerdeContext): QualificationRequest => {
  return take(output, {
    Answer: __expectString,
    QualificationRequestId: __expectString,
    QualificationTypeId: __expectString,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Test: __expectString,
    WorkerId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1QualificationRequestList
 */
const de_QualificationRequestList = (output: any, context: __SerdeContext): QualificationRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QualificationRequest(entry, context);
    });
  return retVal;
};

// de_QualificationRequirement omitted.

// de_QualificationRequirementList omitted.

/**
 * deserializeAws_json1_1QualificationType
 */
const de_QualificationType = (output: any, context: __SerdeContext): QualificationType => {
  return take(output, {
    AnswerKey: __expectString,
    AutoGranted: __expectBoolean,
    AutoGrantedValue: __expectInt32,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    IsRequestable: __expectBoolean,
    Keywords: __expectString,
    Name: __expectString,
    QualificationTypeId: __expectString,
    QualificationTypeStatus: __expectString,
    RetryDelayInSeconds: __expectLong,
    Test: __expectString,
    TestDurationInSeconds: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1QualificationTypeList
 */
const de_QualificationTypeList = (output: any, context: __SerdeContext): QualificationType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QualificationType(entry, context);
    });
  return retVal;
};

// de_RejectAssignmentResponse omitted.

// de_RejectQualificationRequestResponse omitted.

// de_RequestError omitted.

/**
 * deserializeAws_json1_1ReviewActionDetail
 */
const de_ReviewActionDetail = (output: any, context: __SerdeContext): ReviewActionDetail => {
  return take(output, {
    ActionId: __expectString,
    ActionName: __expectString,
    CompleteTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorCode: __expectString,
    Result: __expectString,
    Status: __expectString,
    TargetId: __expectString,
    TargetType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReviewActionDetailList
 */
const de_ReviewActionDetailList = (output: any, context: __SerdeContext): ReviewActionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReviewActionDetail(entry, context);
    });
  return retVal;
};

// de_ReviewPolicy omitted.

/**
 * deserializeAws_json1_1ReviewReport
 */
const de_ReviewReport = (output: any, context: __SerdeContext): ReviewReport => {
  return take(output, {
    ReviewActions: (_: any) => de_ReviewActionDetailList(_, context),
    ReviewResults: _json,
  }) as any;
};

// de_ReviewResultDetail omitted.

// de_ReviewResultDetailList omitted.

// de_SendBonusResponse omitted.

// de_SendTestEventNotificationResponse omitted.

// de_ServiceFault omitted.

// de_StringList omitted.

// de_UpdateExpirationForHITResponse omitted.

// de_UpdateHITReviewStatusResponse omitted.

// de_UpdateHITTypeOfHITResponse omitted.

// de_UpdateNotificationSettingsResponse omitted.

/**
 * deserializeAws_json1_1UpdateQualificationTypeResponse
 */
const de_UpdateQualificationTypeResponse = (output: any, context: __SerdeContext): UpdateQualificationTypeResponse => {
  return take(output, {
    QualificationType: (_: any) => de_QualificationType(_, context),
  }) as any;
};

// de_WorkerBlock omitted.

// de_WorkerBlockList omitted.

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
