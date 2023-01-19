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

export const serializeAws_json1_1AcceptQualificationRequestCommand = async (
  input: AcceptQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptQualificationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ApproveAssignmentCommand = async (
  input: ApproveAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ApproveAssignment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ApproveAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateQualificationWithWorkerCommand = async (
  input: AssociateQualificationWithWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (
  input: CreateAdditionalAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHITCommand = async (
  input: CreateHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHITTypeCommand = async (
  input: CreateHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHITTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHITWithHITTypeCommand = async (
  input: CreateHITWithHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateHITWithHITType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHITWithHITTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateQualificationTypeCommand = async (
  input: CreateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkerBlockCommand = async (
  input: CreateWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.CreateWorkerBlock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkerBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHITCommand = async (
  input: DeleteHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.DeleteHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteQualificationTypeCommand = async (
  input: DeleteQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.DeleteQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkerBlockCommand = async (
  input: DeleteWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.DeleteWorkerBlock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkerBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (
  input: DisassociateQualificationFromWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateQualificationFromWorkerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccountBalanceCommand = async (
  input: GetAccountBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetAccountBalance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAccountBalanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAssignmentCommand = async (
  input: GetAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetAssignment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFileUploadURLCommand = async (
  input: GetFileUploadURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetFileUploadURL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFileUploadURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetHITCommand = async (
  input: GetHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQualificationScoreCommand = async (
  input: GetQualificationScoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationScore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQualificationScoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQualificationTypeCommand = async (
  input: GetQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.GetQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssignmentsForHITCommand = async (
  input: ListAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListAssignmentsForHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssignmentsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBonusPaymentsCommand = async (
  input: ListBonusPaymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListBonusPayments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBonusPaymentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHITsCommand = async (
  input: ListHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListHITs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHITsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHITsForQualificationTypeCommand = async (
  input: ListHITsForQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListHITsForQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQualificationRequestsCommand = async (
  input: ListQualificationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListQualificationRequestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQualificationTypesCommand = async (
  input: ListQualificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListQualificationTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListQualificationTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReviewableHITsCommand = async (
  input: ListReviewableHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewableHITs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReviewableHITsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (
  input: ListReviewPolicyResultsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkerBlocksCommand = async (
  input: ListWorkerBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkerBlocks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkerBlocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (
  input: ListWorkersWithQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyWorkersCommand = async (
  input: NotifyWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.NotifyWorkers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NotifyWorkersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectAssignmentCommand = async (
  input: RejectAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.RejectAssignment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectQualificationRequestCommand = async (
  input: RejectQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.RejectQualificationRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectQualificationRequestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendBonusCommand = async (
  input: SendBonusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.SendBonus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendBonusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendTestEventNotificationCommand = async (
  input: SendTestEventNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.SendTestEventNotification",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendTestEventNotificationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateExpirationForHITCommand = async (
  input: UpdateExpirationForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.UpdateExpirationForHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateExpirationForHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHITReviewStatusCommand = async (
  input: UpdateHITReviewStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITReviewStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateHITReviewStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHITTypeOfHITCommand = async (
  input: UpdateHITTypeOfHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotificationSettingsCommand = async (
  input: UpdateNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.UpdateNotificationSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNotificationSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateQualificationTypeCommand = async (
  input: UpdateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MTurkRequesterServiceV20170117.UpdateQualificationType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateQualificationTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptQualificationRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptQualificationRequestResponse(data, context);
  const response: AcceptQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptQualificationRequestCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ApproveAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ApproveAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ApproveAssignmentResponse(data, context);
  const response: ApproveAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ApproveAssignmentCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateQualificationWithWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateQualificationWithWorkerResponse(data, context);
  const response: AssociateQualificationWithWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateQualificationWithWorkerCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse(data, context);
  const response: CreateAdditionalAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITResponse(data, context);
  const response: CreateHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHITTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITTypeResponse(data, context);
  const response: CreateHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateHITWithHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHITWithHITTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITWithHITTypeResponse(data, context);
  const response: CreateHITWithHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITWithHITTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateQualificationTypeResponse(data, context);
  const response: CreateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkerBlockResponse(data, context);
  const response: CreateWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkerBlockCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHITResponse(data, context);
  const response: DeleteHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteQualificationTypeResponse(data, context);
  const response: DeleteQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkerBlockResponse(data, context);
  const response: DeleteWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkerBlockCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateQualificationFromWorkerResponse(data, context);
  const response: DisassociateQualificationFromWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAccountBalanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccountBalanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccountBalanceResponse(data, context);
  const response: GetAccountBalanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccountBalanceCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssignmentResponse(data, context);
  const response: GetAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAssignmentCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetFileUploadURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFileUploadURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFileUploadURLResponse(data, context);
  const response: GetFileUploadURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFileUploadURLCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHITResponse(data, context);
  const response: GetHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetQualificationScoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQualificationScoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQualificationScoreResponse(data, context);
  const response: GetQualificationScoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQualificationScoreCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQualificationTypeResponse(data, context);
  const response: GetQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssignmentsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssignmentsForHITResponse(data, context);
  const response: ListAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssignmentsForHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBonusPaymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBonusPaymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBonusPaymentsResponse(data, context);
  const response: ListBonusPaymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBonusPaymentsCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHITsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHITsResponse(data, context);
  const response: ListHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHITsCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHITsForQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHITsForQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHITsForQualificationTypeResponse(data, context);
  const response: ListHITsForQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHITsForQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListQualificationRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQualificationRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQualificationRequestsResponse(data, context);
  const response: ListQualificationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQualificationRequestsCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListQualificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQualificationTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQualificationTypesResponse(data, context);
  const response: ListQualificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQualificationTypesCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReviewableHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReviewableHITsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReviewableHITsResponse(data, context);
  const response: ListReviewableHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReviewableHITsCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReviewPolicyResultsForHITResponse(data, context);
  const response: ListReviewPolicyResultsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListWorkerBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkerBlocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkerBlocksResponse(data, context);
  const response: ListWorkerBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkerBlocksCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkersWithQualificationTypeResponse(data, context);
  const response: ListWorkersWithQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1NotifyWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NotifyWorkersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyWorkersResponse(data, context);
  const response: NotifyWorkersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyWorkersCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RejectAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectAssignmentResponse(data, context);
  const response: RejectAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectAssignmentCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RejectQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectQualificationRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectQualificationRequestResponse(data, context);
  const response: RejectQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectQualificationRequestCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendBonusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendBonusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendBonusResponse(data, context);
  const response: SendBonusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendBonusCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendTestEventNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendTestEventNotificationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendTestEventNotificationResponse(data, context);
  const response: SendTestEventNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendTestEventNotificationCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateExpirationForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateExpirationForHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateExpirationForHITResponse(data, context);
  const response: UpdateExpirationForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateExpirationForHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateHITReviewStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateHITReviewStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHITReviewStatusResponse(data, context);
  const response: UpdateHITReviewStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHITReviewStatusCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateHITTypeOfHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateHITTypeOfHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHITTypeOfHITResponse(data, context);
  const response: UpdateHITTypeOfHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHITTypeOfHITCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNotificationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNotificationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotificationSettingsResponse(data, context);
  const response: UpdateNotificationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNotificationSettingsCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateQualificationTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateQualificationTypeResponse(data, context);
  const response: UpdateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateQualificationTypeCommandError = async (
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
      throw await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context);
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      throw await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context);
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

const deserializeAws_json1_1RequestErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestError(body, context);
  const exception = new RequestError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceFault(body, context);
  const exception = new ServiceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptQualificationRequestRequest = (
  input: AcceptQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntegerValue != null && { IntegerValue: input.IntegerValue }),
    ...(input.QualificationRequestId != null && { QualificationRequestId: input.QualificationRequestId }),
  };
};

const serializeAws_json1_1ApproveAssignmentRequest = (
  input: ApproveAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.OverrideRejection != null && { OverrideRejection: input.OverrideRejection }),
    ...(input.RequesterFeedback != null && { RequesterFeedback: input.RequesterFeedback }),
  };
};

const serializeAws_json1_1AssignmentStatusList = (
  input: (AssignmentStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateQualificationWithWorkerRequest = (
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

const serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = (
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

const serializeAws_json1_1CreateHITRequest = (input: CreateHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentDurationInSeconds != null && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds,
    }),
    ...(input.AssignmentReviewPolicy != null && {
      AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
    }),
    ...(input.AutoApprovalDelayInSeconds != null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HITLayoutId != null && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters != null && {
      HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
    }),
    ...(input.HITReviewPolicy != null && {
      HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
    }),
    ...(input.Keywords != null && { Keywords: input.Keywords }),
    ...(input.LifetimeInSeconds != null && { LifetimeInSeconds: input.LifetimeInSeconds }),
    ...(input.MaxAssignments != null && { MaxAssignments: input.MaxAssignments }),
    ...(input.QualificationRequirements != null && {
      QualificationRequirements: serializeAws_json1_1QualificationRequirementList(
        input.QualificationRequirements,
        context
      ),
    }),
    ...(input.Question != null && { Question: input.Question }),
    ...(input.RequesterAnnotation != null && { RequesterAnnotation: input.RequesterAnnotation }),
    ...(input.Reward != null && { Reward: input.Reward }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
  };
};

const serializeAws_json1_1CreateHITTypeRequest = (input: CreateHITTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentDurationInSeconds != null && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds,
    }),
    ...(input.AutoApprovalDelayInSeconds != null && { AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Keywords != null && { Keywords: input.Keywords }),
    ...(input.QualificationRequirements != null && {
      QualificationRequirements: serializeAws_json1_1QualificationRequirementList(
        input.QualificationRequirements,
        context
      ),
    }),
    ...(input.Reward != null && { Reward: input.Reward }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_json1_1CreateHITWithHITTypeRequest = (
  input: CreateHITWithHITTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentReviewPolicy != null && {
      AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context),
    }),
    ...(input.HITLayoutId != null && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters != null && {
      HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context),
    }),
    ...(input.HITReviewPolicy != null && {
      HITReviewPolicy: serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context),
    }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.LifetimeInSeconds != null && { LifetimeInSeconds: input.LifetimeInSeconds }),
    ...(input.MaxAssignments != null && { MaxAssignments: input.MaxAssignments }),
    ...(input.Question != null && { Question: input.Question }),
    ...(input.RequesterAnnotation != null && { RequesterAnnotation: input.RequesterAnnotation }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
  };
};

const serializeAws_json1_1CreateQualificationTypeRequest = (
  input: CreateQualificationTypeRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1CreateWorkerBlockRequest = (
  input: CreateWorkerBlockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

const serializeAws_json1_1CustomerIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteHITRequest = (input: DeleteHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

const serializeAws_json1_1DeleteQualificationTypeRequest = (
  input: DeleteQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

const serializeAws_json1_1DeleteWorkerBlockRequest = (
  input: DeleteWorkerBlockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

const serializeAws_json1_1DisassociateQualificationFromWorkerRequest = (
  input: DisassociateQualificationFromWorkerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

const serializeAws_json1_1EventTypeList = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetAccountBalanceRequest = (
  input: GetAccountBalanceRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAssignmentRequest = (input: GetAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
  };
};

const serializeAws_json1_1GetFileUploadURLRequest = (input: GetFileUploadURLRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.QuestionIdentifier != null && { QuestionIdentifier: input.QuestionIdentifier }),
  };
};

const serializeAws_json1_1GetHITRequest = (input: GetHITRequest, context: __SerdeContext): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

const serializeAws_json1_1GetQualificationScoreRequest = (
  input: GetQualificationScoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

const serializeAws_json1_1GetQualificationTypeRequest = (
  input: GetQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

const serializeAws_json1_1HITLayoutParameter = (input: HITLayoutParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1HITLayoutParameterList = (input: HITLayoutParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1HITLayoutParameter(entry, context);
    });
};

const serializeAws_json1_1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListAssignmentsForHITRequest = (
  input: ListAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentStatuses != null && {
      AssignmentStatuses: serializeAws_json1_1AssignmentStatusList(input.AssignmentStatuses, context),
    }),
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListBonusPaymentsRequest = (
  input: ListBonusPaymentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListHITsForQualificationTypeRequest = (
  input: ListHITsForQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

const serializeAws_json1_1ListHITsRequest = (input: ListHITsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListQualificationRequestsRequest = (
  input: ListQualificationRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
  };
};

const serializeAws_json1_1ListQualificationTypesRequest = (
  input: ListQualificationTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MustBeOwnedByCaller != null && { MustBeOwnedByCaller: input.MustBeOwnedByCaller }),
    ...(input.MustBeRequestable != null && { MustBeRequestable: input.MustBeRequestable }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Query != null && { Query: input.Query }),
  };
};

const serializeAws_json1_1ListReviewableHITsRequest = (
  input: ListReviewableHITsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListReviewPolicyResultsForHITRequest = (
  input: ListReviewPolicyResultsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyLevels != null && {
      PolicyLevels: serializeAws_json1_1ReviewPolicyLevelList(input.PolicyLevels, context),
    }),
    ...(input.RetrieveActions != null && { RetrieveActions: input.RetrieveActions }),
    ...(input.RetrieveResults != null && { RetrieveResults: input.RetrieveResults }),
  };
};

const serializeAws_json1_1ListWorkerBlocksRequest = (input: ListWorkerBlocksRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListWorkersWithQualificationTypeRequest = (
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

const serializeAws_json1_1Locale = (input: Locale, context: __SerdeContext): any => {
  return {
    ...(input.Country != null && { Country: input.Country }),
    ...(input.Subdivision != null && { Subdivision: input.Subdivision }),
  };
};

const serializeAws_json1_1LocaleList = (input: Locale[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Locale(entry, context);
    });
};

const serializeAws_json1_1NotificationSpecification = (
  input: NotificationSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.EventTypes != null && { EventTypes: serializeAws_json1_1EventTypeList(input.EventTypes, context) }),
    ...(input.Transport != null && { Transport: input.Transport }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1NotifyWorkersRequest = (input: NotifyWorkersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MessageText != null && { MessageText: input.MessageText }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.WorkerIds != null && { WorkerIds: serializeAws_json1_1CustomerIdList(input.WorkerIds, context) }),
  };
};

const serializeAws_json1_1ParameterMapEntry = (input: ParameterMapEntry, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1StringList(input.Values, context) }),
  };
};

const serializeAws_json1_1ParameterMapEntryList = (input: ParameterMapEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterMapEntry(entry, context);
    });
};

const serializeAws_json1_1PolicyParameter = (input: PolicyParameter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.MapEntries != null && {
      MapEntries: serializeAws_json1_1ParameterMapEntryList(input.MapEntries, context),
    }),
    ...(input.Values != null && { Values: serializeAws_json1_1StringList(input.Values, context) }),
  };
};

const serializeAws_json1_1PolicyParameterList = (input: PolicyParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PolicyParameter(entry, context);
    });
};

const serializeAws_json1_1QualificationRequirement = (
  input: QualificationRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionsGuarded != null && { ActionsGuarded: input.ActionsGuarded }),
    ...(input.Comparator != null && { Comparator: input.Comparator }),
    ...(input.IntegerValues != null && {
      IntegerValues: serializeAws_json1_1IntegerList(input.IntegerValues, context),
    }),
    ...(input.LocaleValues != null && { LocaleValues: serializeAws_json1_1LocaleList(input.LocaleValues, context) }),
    ...(input.QualificationTypeId != null && { QualificationTypeId: input.QualificationTypeId }),
    ...(input.RequiredToPreview != null && { RequiredToPreview: input.RequiredToPreview }),
  };
};

const serializeAws_json1_1QualificationRequirementList = (
  input: QualificationRequirement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1QualificationRequirement(entry, context);
    });
};

const serializeAws_json1_1RejectAssignmentRequest = (input: RejectAssignmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.RequesterFeedback != null && { RequesterFeedback: input.RequesterFeedback }),
  };
};

const serializeAws_json1_1RejectQualificationRequestRequest = (
  input: RejectQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationRequestId != null && { QualificationRequestId: input.QualificationRequestId }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

const serializeAws_json1_1ReviewPolicy = (input: ReviewPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1PolicyParameterList(input.Parameters, context) }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_json1_1ReviewPolicyLevelList = (
  input: (ReviewPolicyLevel | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SendBonusRequest = (input: SendBonusRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssignmentId != null && { AssignmentId: input.AssignmentId }),
    ...(input.BonusAmount != null && { BonusAmount: input.BonusAmount }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.UniqueRequestToken != null && { UniqueRequestToken: input.UniqueRequestToken }),
    ...(input.WorkerId != null && { WorkerId: input.WorkerId }),
  };
};

const serializeAws_json1_1SendTestEventNotificationRequest = (
  input: SendTestEventNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notification != null && {
      Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
    }),
    ...(input.TestEventType != null && { TestEventType: input.TestEventType }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1UpdateExpirationForHITRequest = (
  input: UpdateExpirationForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExpireAt != null && { ExpireAt: Math.round(input.ExpireAt.getTime() / 1000) }),
    ...(input.HITId != null && { HITId: input.HITId }),
  };
};

const serializeAws_json1_1UpdateHITReviewStatusRequest = (
  input: UpdateHITReviewStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.Revert != null && { Revert: input.Revert }),
  };
};

const serializeAws_json1_1UpdateHITTypeOfHITRequest = (
  input: UpdateHITTypeOfHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId != null && { HITId: input.HITId }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
  };
};

const serializeAws_json1_1UpdateNotificationSettingsRequest = (
  input: UpdateNotificationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.HITTypeId != null && { HITTypeId: input.HITTypeId }),
    ...(input.Notification != null && {
      Notification: serializeAws_json1_1NotificationSpecification(input.Notification, context),
    }),
  };
};

const serializeAws_json1_1UpdateQualificationTypeRequest = (
  input: UpdateQualificationTypeRequest,
  context: __SerdeContext
): any => {
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

const deserializeAws_json1_1AcceptQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): AcceptQualificationRequestResponse => {
  return {} as any;
};

const deserializeAws_json1_1ApproveAssignmentResponse = (
  output: any,
  context: __SerdeContext
): ApproveAssignmentResponse => {
  return {} as any;
};

const deserializeAws_json1_1Assignment = (output: any, context: __SerdeContext): Assignment => {
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

const deserializeAws_json1_1AssignmentList = (output: any, context: __SerdeContext): Assignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Assignment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateQualificationWithWorkerResponse = (
  output: any,
  context: __SerdeContext
): AssociateQualificationWithWorkerResponse => {
  return {} as any;
};

const deserializeAws_json1_1BonusPayment = (output: any, context: __SerdeContext): BonusPayment => {
  return {
    AssignmentId: __expectString(output.AssignmentId),
    BonusAmount: __expectString(output.BonusAmount),
    GrantTime:
      output.GrantTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.GrantTime))) : undefined,
    Reason: __expectString(output.Reason),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

const deserializeAws_json1_1BonusPaymentList = (output: any, context: __SerdeContext): BonusPayment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BonusPayment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): CreateAdditionalAssignmentsForHITResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateHITResponse = (output: any, context: __SerdeContext): CreateHITResponse => {
  return {
    HIT: output.HIT != null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateHITTypeResponse = (output: any, context: __SerdeContext): CreateHITTypeResponse => {
  return {
    HITTypeId: __expectString(output.HITTypeId),
  } as any;
};

const deserializeAws_json1_1CreateHITWithHITTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateHITWithHITTypeResponse => {
  return {
    HIT: output.HIT != null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null
        ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): CreateWorkerBlockResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteHITResponse = (output: any, context: __SerdeContext): DeleteHITResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): DeleteQualificationTypeResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): DeleteWorkerBlockResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = (
  output: any,
  context: __SerdeContext
): DisassociateQualificationFromWorkerResponse => {
  return {} as any;
};

const deserializeAws_json1_1GetAccountBalanceResponse = (
  output: any,
  context: __SerdeContext
): GetAccountBalanceResponse => {
  return {
    AvailableBalance: __expectString(output.AvailableBalance),
    OnHoldBalance: __expectString(output.OnHoldBalance),
  } as any;
};

const deserializeAws_json1_1GetAssignmentResponse = (output: any, context: __SerdeContext): GetAssignmentResponse => {
  return {
    Assignment: output.Assignment != null ? deserializeAws_json1_1Assignment(output.Assignment, context) : undefined,
    HIT: output.HIT != null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetFileUploadURLResponse = (
  output: any,
  context: __SerdeContext
): GetFileUploadURLResponse => {
  return {
    FileUploadURL: __expectString(output.FileUploadURL),
  } as any;
};

const deserializeAws_json1_1GetHITResponse = (output: any, context: __SerdeContext): GetHITResponse => {
  return {
    HIT: output.HIT != null ? deserializeAws_json1_1HIT(output.HIT, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetQualificationScoreResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationScoreResponse => {
  return {
    Qualification:
      output.Qualification != null ? deserializeAws_json1_1Qualification(output.Qualification, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null
        ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HIT = (output: any, context: __SerdeContext): HIT => {
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
        ? deserializeAws_json1_1QualificationRequirementList(output.QualificationRequirements, context)
        : undefined,
    Question: __expectString(output.Question),
    RequesterAnnotation: __expectString(output.RequesterAnnotation),
    Reward: __expectString(output.Reward),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_json1_1HITList = (output: any, context: __SerdeContext): HIT[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HIT(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IntegerList = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1ListAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListAssignmentsForHITResponse => {
  return {
    Assignments:
      output.Assignments != null ? deserializeAws_json1_1AssignmentList(output.Assignments, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

const deserializeAws_json1_1ListBonusPaymentsResponse = (
  output: any,
  context: __SerdeContext
): ListBonusPaymentsResponse => {
  return {
    BonusPayments:
      output.BonusPayments != null ? deserializeAws_json1_1BonusPaymentList(output.BonusPayments, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

const deserializeAws_json1_1ListHITsForQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListHITsForQualificationTypeResponse => {
  return {
    HITs: output.HITs != null ? deserializeAws_json1_1HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

const deserializeAws_json1_1ListHITsResponse = (output: any, context: __SerdeContext): ListHITsResponse => {
  return {
    HITs: output.HITs != null ? deserializeAws_json1_1HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

const deserializeAws_json1_1ListQualificationRequestsResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationRequestsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    QualificationRequests:
      output.QualificationRequests != null
        ? deserializeAws_json1_1QualificationRequestList(output.QualificationRequests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListQualificationTypesResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationTypesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    QualificationTypes:
      output.QualificationTypes != null
        ? deserializeAws_json1_1QualificationTypeList(output.QualificationTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListReviewableHITsResponse = (
  output: any,
  context: __SerdeContext
): ListReviewableHITsResponse => {
  return {
    HITs: output.HITs != null ? deserializeAws_json1_1HITList(output.HITs, context) : undefined,
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
  } as any;
};

const deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListReviewPolicyResultsForHITResponse => {
  return {
    AssignmentReviewPolicy:
      output.AssignmentReviewPolicy != null
        ? deserializeAws_json1_1ReviewPolicy(output.AssignmentReviewPolicy, context)
        : undefined,
    AssignmentReviewReport:
      output.AssignmentReviewReport != null
        ? deserializeAws_json1_1ReviewReport(output.AssignmentReviewReport, context)
        : undefined,
    HITId: __expectString(output.HITId),
    HITReviewPolicy:
      output.HITReviewPolicy != null ? deserializeAws_json1_1ReviewPolicy(output.HITReviewPolicy, context) : undefined,
    HITReviewReport:
      output.HITReviewReport != null ? deserializeAws_json1_1ReviewReport(output.HITReviewReport, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListWorkerBlocksResponse = (
  output: any,
  context: __SerdeContext
): ListWorkerBlocksResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    WorkerBlocks:
      output.WorkerBlocks != null ? deserializeAws_json1_1WorkerBlockList(output.WorkerBlocks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListWorkersWithQualificationTypeResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NumResults: __expectInt32(output.NumResults),
    Qualifications:
      output.Qualifications != null
        ? deserializeAws_json1_1QualificationList(output.Qualifications, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Locale = (output: any, context: __SerdeContext): Locale => {
  return {
    Country: __expectString(output.Country),
    Subdivision: __expectString(output.Subdivision),
  } as any;
};

const deserializeAws_json1_1LocaleList = (output: any, context: __SerdeContext): Locale[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Locale(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotifyWorkersFailureStatus = (
  output: any,
  context: __SerdeContext
): NotifyWorkersFailureStatus => {
  return {
    NotifyWorkersFailureCode: __expectString(output.NotifyWorkersFailureCode),
    NotifyWorkersFailureMessage: __expectString(output.NotifyWorkersFailureMessage),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

const deserializeAws_json1_1NotifyWorkersFailureStatusList = (
  output: any,
  context: __SerdeContext
): NotifyWorkersFailureStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotifyWorkersResponse = (output: any, context: __SerdeContext): NotifyWorkersResponse => {
  return {
    NotifyWorkersFailureStatuses:
      output.NotifyWorkersFailureStatuses != null
        ? deserializeAws_json1_1NotifyWorkersFailureStatusList(output.NotifyWorkersFailureStatuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ParameterMapEntry = (output: any, context: __SerdeContext): ParameterMapEntry => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? deserializeAws_json1_1StringList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ParameterMapEntryList = (output: any, context: __SerdeContext): ParameterMapEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterMapEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PolicyParameter = (output: any, context: __SerdeContext): PolicyParameter => {
  return {
    Key: __expectString(output.Key),
    MapEntries:
      output.MapEntries != null ? deserializeAws_json1_1ParameterMapEntryList(output.MapEntries, context) : undefined,
    Values: output.Values != null ? deserializeAws_json1_1StringList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyParameterList = (output: any, context: __SerdeContext): PolicyParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicyParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Qualification = (output: any, context: __SerdeContext): Qualification => {
  return {
    GrantTime:
      output.GrantTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.GrantTime))) : undefined,
    IntegerValue: __expectInt32(output.IntegerValue),
    LocaleValue: output.LocaleValue != null ? deserializeAws_json1_1Locale(output.LocaleValue, context) : undefined,
    QualificationTypeId: __expectString(output.QualificationTypeId),
    Status: __expectString(output.Status),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

const deserializeAws_json1_1QualificationList = (output: any, context: __SerdeContext): Qualification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Qualification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QualificationRequest = (output: any, context: __SerdeContext): QualificationRequest => {
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

const deserializeAws_json1_1QualificationRequestList = (
  output: any,
  context: __SerdeContext
): QualificationRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QualificationRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QualificationRequirement = (
  output: any,
  context: __SerdeContext
): QualificationRequirement => {
  return {
    ActionsGuarded: __expectString(output.ActionsGuarded),
    Comparator: __expectString(output.Comparator),
    IntegerValues:
      output.IntegerValues != null ? deserializeAws_json1_1IntegerList(output.IntegerValues, context) : undefined,
    LocaleValues:
      output.LocaleValues != null ? deserializeAws_json1_1LocaleList(output.LocaleValues, context) : undefined,
    QualificationTypeId: __expectString(output.QualificationTypeId),
    RequiredToPreview: __expectBoolean(output.RequiredToPreview),
  } as any;
};

const deserializeAws_json1_1QualificationRequirementList = (
  output: any,
  context: __SerdeContext
): QualificationRequirement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QualificationRequirement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QualificationType = (output: any, context: __SerdeContext): QualificationType => {
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

const deserializeAws_json1_1QualificationTypeList = (output: any, context: __SerdeContext): QualificationType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QualificationType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RejectAssignmentResponse = (
  output: any,
  context: __SerdeContext
): RejectAssignmentResponse => {
  return {} as any;
};

const deserializeAws_json1_1RejectQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): RejectQualificationRequestResponse => {
  return {} as any;
};

const deserializeAws_json1_1RequestError = (output: any, context: __SerdeContext): RequestError => {
  return {
    Message: __expectString(output.Message),
    TurkErrorCode: __expectString(output.TurkErrorCode),
  } as any;
};

const deserializeAws_json1_1ReviewActionDetail = (output: any, context: __SerdeContext): ReviewActionDetail => {
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

const deserializeAws_json1_1ReviewActionDetailList = (output: any, context: __SerdeContext): ReviewActionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReviewActionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReviewPolicy = (output: any, context: __SerdeContext): ReviewPolicy => {
  return {
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1PolicyParameterList(output.Parameters, context) : undefined,
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_json1_1ReviewReport = (output: any, context: __SerdeContext): ReviewReport => {
  return {
    ReviewActions:
      output.ReviewActions != null
        ? deserializeAws_json1_1ReviewActionDetailList(output.ReviewActions, context)
        : undefined,
    ReviewResults:
      output.ReviewResults != null
        ? deserializeAws_json1_1ReviewResultDetailList(output.ReviewResults, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReviewResultDetail = (output: any, context: __SerdeContext): ReviewResultDetail => {
  return {
    ActionId: __expectString(output.ActionId),
    Key: __expectString(output.Key),
    QuestionId: __expectString(output.QuestionId),
    SubjectId: __expectString(output.SubjectId),
    SubjectType: __expectString(output.SubjectType),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ReviewResultDetailList = (output: any, context: __SerdeContext): ReviewResultDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReviewResultDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SendBonusResponse = (output: any, context: __SerdeContext): SendBonusResponse => {
  return {} as any;
};

const deserializeAws_json1_1SendTestEventNotificationResponse = (
  output: any,
  context: __SerdeContext
): SendTestEventNotificationResponse => {
  return {} as any;
};

const deserializeAws_json1_1ServiceFault = (output: any, context: __SerdeContext): ServiceFault => {
  return {
    Message: __expectString(output.Message),
    TurkErrorCode: __expectString(output.TurkErrorCode),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1UpdateExpirationForHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateExpirationForHITResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateHITReviewStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITReviewStatusResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateHITTypeOfHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITTypeOfHITResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNotificationSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): UpdateQualificationTypeResponse => {
  return {
    QualificationType:
      output.QualificationType != null
        ? deserializeAws_json1_1QualificationType(output.QualificationType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkerBlock = (output: any, context: __SerdeContext): WorkerBlock => {
  return {
    Reason: __expectString(output.Reason),
    WorkerId: __expectString(output.WorkerId),
  } as any;
};

const deserializeAws_json1_1WorkerBlockList = (output: any, context: __SerdeContext): WorkerBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkerBlock(entry, context);
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
