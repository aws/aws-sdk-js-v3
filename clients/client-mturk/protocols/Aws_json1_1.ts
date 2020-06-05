import {
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput
} from "../commands/AcceptQualificationRequestCommand";
import {
  ApproveAssignmentCommandInput,
  ApproveAssignmentCommandOutput
} from "../commands/ApproveAssignmentCommand";
import {
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput
} from "../commands/AssociateQualificationWithWorkerCommand";
import {
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput
} from "../commands/CreateAdditionalAssignmentsForHITCommand";
import {
  CreateHITCommandInput,
  CreateHITCommandOutput
} from "../commands/CreateHITCommand";
import {
  CreateHITTypeCommandInput,
  CreateHITTypeCommandOutput
} from "../commands/CreateHITTypeCommand";
import {
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput
} from "../commands/CreateHITWithHITTypeCommand";
import {
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput
} from "../commands/CreateQualificationTypeCommand";
import {
  CreateWorkerBlockCommandInput,
  CreateWorkerBlockCommandOutput
} from "../commands/CreateWorkerBlockCommand";
import {
  DeleteHITCommandInput,
  DeleteHITCommandOutput
} from "../commands/DeleteHITCommand";
import {
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput
} from "../commands/DeleteQualificationTypeCommand";
import {
  DeleteWorkerBlockCommandInput,
  DeleteWorkerBlockCommandOutput
} from "../commands/DeleteWorkerBlockCommand";
import {
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput
} from "../commands/DisassociateQualificationFromWorkerCommand";
import {
  GetAccountBalanceCommandInput,
  GetAccountBalanceCommandOutput
} from "../commands/GetAccountBalanceCommand";
import {
  GetAssignmentCommandInput,
  GetAssignmentCommandOutput
} from "../commands/GetAssignmentCommand";
import {
  GetFileUploadURLCommandInput,
  GetFileUploadURLCommandOutput
} from "../commands/GetFileUploadURLCommand";
import {
  GetHITCommandInput,
  GetHITCommandOutput
} from "../commands/GetHITCommand";
import {
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput
} from "../commands/GetQualificationScoreCommand";
import {
  GetQualificationTypeCommandInput,
  GetQualificationTypeCommandOutput
} from "../commands/GetQualificationTypeCommand";
import {
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput
} from "../commands/ListAssignmentsForHITCommand";
import {
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput
} from "../commands/ListBonusPaymentsCommand";
import {
  ListHITsCommandInput,
  ListHITsCommandOutput
} from "../commands/ListHITsCommand";
import {
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput
} from "../commands/ListHITsForQualificationTypeCommand";
import {
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput
} from "../commands/ListQualificationRequestsCommand";
import {
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput
} from "../commands/ListQualificationTypesCommand";
import {
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput
} from "../commands/ListReviewPolicyResultsForHITCommand";
import {
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput
} from "../commands/ListReviewableHITsCommand";
import {
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput
} from "../commands/ListWorkerBlocksCommand";
import {
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput
} from "../commands/ListWorkersWithQualificationTypeCommand";
import {
  NotifyWorkersCommandInput,
  NotifyWorkersCommandOutput
} from "../commands/NotifyWorkersCommand";
import {
  RejectAssignmentCommandInput,
  RejectAssignmentCommandOutput
} from "../commands/RejectAssignmentCommand";
import {
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput
} from "../commands/RejectQualificationRequestCommand";
import {
  SendBonusCommandInput,
  SendBonusCommandOutput
} from "../commands/SendBonusCommand";
import {
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput
} from "../commands/SendTestEventNotificationCommand";
import {
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput
} from "../commands/UpdateExpirationForHITCommand";
import {
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput
} from "../commands/UpdateHITReviewStatusCommand";
import {
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput
} from "../commands/UpdateHITTypeOfHITCommand";
import {
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput
} from "../commands/UpdateNotificationSettingsCommand";
import {
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput
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
  ListReviewPolicyResultsForHITRequest,
  ListReviewPolicyResultsForHITResponse,
  ListReviewableHITsRequest,
  ListReviewableHITsResponse,
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
  WorkerBlock
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AcceptQualificationRequestCommand = async (
  input: AcceptQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.AcceptQualificationRequest"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcceptQualificationRequestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ApproveAssignmentCommand = async (
  input: ApproveAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ApproveAssignment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ApproveAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateQualificationWithWorkerCommand = async (
  input: AssociateQualificationWithWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (
  input: CreateAdditionalAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHITCommand = async (
  input: CreateHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.CreateHIT"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.CreateHITType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHITTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHITWithHITTypeCommand = async (
  input: CreateHITWithHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.CreateHITWithHITType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHITWithHITTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateQualificationTypeCommand = async (
  input: CreateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.CreateQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkerBlockCommand = async (
  input: CreateWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.CreateWorkerBlock"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWorkerBlockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHITCommand = async (
  input: DeleteHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.DeleteHIT"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.DeleteQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkerBlockCommand = async (
  input: DeleteWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.DeleteWorkerBlock"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWorkerBlockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (
  input: DisassociateQualificationFromWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateQualificationFromWorkerRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccountBalanceCommand = async (
  input: GetAccountBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetAccountBalance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAccountBalanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAssignmentCommand = async (
  input: GetAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetAssignment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFileUploadURLCommand = async (
  input: GetFileUploadURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetFileUploadURL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFileUploadURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetHITCommand = async (
  input: GetHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetHIT"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetQualificationScore"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQualificationScoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQualificationTypeCommand = async (
  input: GetQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.GetQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssignmentsForHITCommand = async (
  input: ListAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssignmentsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBonusPaymentsCommand = async (
  input: ListBonusPaymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListBonusPayments"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBonusPaymentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHITsCommand = async (
  input: ListHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListHITs"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.ListHITsForQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQualificationRequestsCommand = async (
  input: ListQualificationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListQualificationRequests"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQualificationRequestsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQualificationTypesCommand = async (
  input: ListQualificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListQualificationTypes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQualificationTypesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReviewableHITsCommand = async (
  input: ListReviewableHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListReviewableHITs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReviewableHITsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (
  input: ListReviewPolicyResultsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkerBlocksCommand = async (
  input: ListWorkerBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.ListWorkerBlocks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkerBlocksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (
  input: ListWorkersWithQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyWorkersCommand = async (
  input: NotifyWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.NotifyWorkers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyWorkersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectAssignmentCommand = async (
  input: RejectAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.RejectAssignment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RejectAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectQualificationRequestCommand = async (
  input: RejectQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.RejectQualificationRequest"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RejectQualificationRequestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendBonusCommand = async (
  input: SendBonusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.SendBonus"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.SendTestEventNotification"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SendTestEventNotificationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateExpirationForHITCommand = async (
  input: UpdateExpirationForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.UpdateExpirationForHIT"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateExpirationForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHITReviewStatusCommand = async (
  input: UpdateHITReviewStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.UpdateHITReviewStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateHITReviewStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHITTypeOfHITCommand = async (
  input: UpdateHITTypeOfHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotificationSettingsCommand = async (
  input: UpdateNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.UpdateNotificationSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNotificationSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateQualificationTypeCommand = async (
  input: UpdateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MTurkRequesterServiceV20170117.UpdateQualificationType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcceptQualificationRequestCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptQualificationRequestResponse(
    data,
    context
  );
  const response: AcceptQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptQualificationRequestResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptQualificationRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ApproveAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ApproveAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ApproveAssignmentResponse(data, context);
  const response: ApproveAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ApproveAssignmentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ApproveAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateQualificationWithWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateQualificationWithWorkerResponse(
    data,
    context
  );
  const response: AssociateQualificationWithWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateQualificationWithWorkerResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateQualificationWithWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse(
    data,
    context
  );
  const response: CreateAdditionalAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAdditionalAssignmentsForHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITResponse(data, context);
  const response: CreateHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHITTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITTypeResponse(data, context);
  const response: CreateHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHITTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateHITWithHITTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHITWithHITTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHITWithHITTypeResponse(data, context);
  const response: CreateHITWithHITTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHITWithHITTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHITWithHITTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateQualificationTypeResponse(
    data,
    context
  );
  const response: CreateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkerBlockResponse(data, context);
  const response: CreateWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWorkerBlockResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkerBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHITResponse(data, context);
  const response: DeleteHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteQualificationTypeResponse(
    data,
    context
  );
  const response: DeleteQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteWorkerBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkerBlockResponse(data, context);
  const response: DeleteWorkerBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWorkerBlockResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkerBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateQualificationFromWorkerResponse(
    data,
    context
  );
  const response: DisassociateQualificationFromWorkerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateQualificationFromWorkerResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetAccountBalanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAccountBalanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccountBalanceResponse(data, context);
  const response: GetAccountBalanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountBalanceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccountBalanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssignmentResponse(data, context);
  const response: GetAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAssignmentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetFileUploadURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFileUploadURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFileUploadURLResponse(data, context);
  const response: GetFileUploadURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFileUploadURLResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFileUploadURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetHITCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHITResponse(data, context);
  const response: GetHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetQualificationScoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetQualificationScoreCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQualificationScoreResponse(data, context);
  const response: GetQualificationScoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQualificationScoreResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQualificationScoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQualificationTypeResponse(data, context);
  const response: GetQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssignmentsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssignmentsForHITCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssignmentsForHITResponse(data, context);
  const response: ListAssignmentsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssignmentsForHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssignmentsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListBonusPaymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListBonusPaymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBonusPaymentsResponse(data, context);
  const response: ListBonusPaymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBonusPaymentsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBonusPaymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHITsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHITsResponse(data, context);
  const response: ListHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHITsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHITsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListHITsForQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHITsForQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHITsForQualificationTypeResponse(
    data,
    context
  );
  const response: ListHITsForQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHITsForQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHITsForQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListQualificationRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListQualificationRequestsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQualificationRequestsResponse(
    data,
    context
  );
  const response: ListQualificationRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQualificationRequestsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQualificationRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListQualificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListQualificationTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQualificationTypesResponse(
    data,
    context
  );
  const response: ListQualificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQualificationTypesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQualificationTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReviewableHITsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListReviewableHITsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReviewableHITsResponse(data, context);
  const response: ListReviewableHITsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReviewableHITsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReviewableHITsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReviewPolicyResultsForHITResponse(
    data,
    context
  );
  const response: ListReviewPolicyResultsForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReviewPolicyResultsForHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListWorkerBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListWorkerBlocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkerBlocksResponse(data, context);
  const response: ListWorkerBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWorkerBlocksResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkerBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkersWithQualificationTypeResponse(
    data,
    context
  );
  const response: ListWorkersWithQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWorkersWithQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1NotifyWorkersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1NotifyWorkersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyWorkersResponse(data, context);
  const response: NotifyWorkersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NotifyWorkersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyWorkersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RejectAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RejectAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectAssignmentResponse(data, context);
  const response: RejectAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RejectAssignmentResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RejectQualificationRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RejectQualificationRequestCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectQualificationRequestResponse(
    data,
    context
  );
  const response: RejectQualificationRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RejectQualificationRequestResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectQualificationRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SendBonusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SendBonusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendBonusResponse(data, context);
  const response: SendBonusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendBonusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendBonusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SendTestEventNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SendTestEventNotificationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendTestEventNotificationResponse(
    data,
    context
  );
  const response: SendTestEventNotificationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendTestEventNotificationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendTestEventNotificationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateExpirationForHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateExpirationForHITCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateExpirationForHITResponse(
    data,
    context
  );
  const response: UpdateExpirationForHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateExpirationForHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateExpirationForHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateHITReviewStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateHITReviewStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHITReviewStatusResponse(data, context);
  const response: UpdateHITReviewStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateHITReviewStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHITReviewStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateHITTypeOfHITCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateHITTypeOfHITCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHITTypeOfHITResponse(data, context);
  const response: UpdateHITTypeOfHITCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateHITTypeOfHITResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHITTypeOfHITCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateNotificationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateNotificationSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotificationSettingsResponse(
    data,
    context
  );
  const response: UpdateNotificationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNotificationSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNotificationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateQualificationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateQualificationTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateQualificationTypeResponse(
    data,
    context
  );
  const response: UpdateQualificationTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateQualificationTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateQualificationTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.mturk#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.mturk#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1RequestErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestError(body, context);
  const contents: RequestError = {
    name: "RequestError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceFault(body, context);
  const contents: ServiceFault = {
    name: "ServiceFault",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AcceptQualificationRequestRequest = (
  input: AcceptQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntegerValue !== undefined && {
      IntegerValue: input.IntegerValue
    }),
    ...(input.QualificationRequestId !== undefined && {
      QualificationRequestId: input.QualificationRequestId
    })
  };
};

const serializeAws_json1_1ApproveAssignmentRequest = (
  input: ApproveAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    }),
    ...(input.OverrideRejection !== undefined && {
      OverrideRejection: input.OverrideRejection
    }),
    ...(input.RequesterFeedback !== undefined && {
      RequesterFeedback: input.RequesterFeedback
    })
  };
};

const serializeAws_json1_1AssignmentStatusList = (
  input: (AssignmentStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AssociateQualificationWithWorkerRequest = (
  input: AssociateQualificationWithWorkerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntegerValue !== undefined && {
      IntegerValue: input.IntegerValue
    }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.SendNotification !== undefined && {
      SendNotification: input.SendNotification
    }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = (
  input: CreateAdditionalAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.NumberOfAdditionalAssignments !== undefined && {
      NumberOfAdditionalAssignments: input.NumberOfAdditionalAssignments
    }),
    ...(input.UniqueRequestToken !== undefined && {
      UniqueRequestToken: input.UniqueRequestToken
    })
  };
};

const serializeAws_json1_1CreateHITRequest = (
  input: CreateHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentDurationInSeconds !== undefined && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds
    }),
    ...(input.AssignmentReviewPolicy !== undefined && {
      AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(
        input.AssignmentReviewPolicy,
        context
      )
    }),
    ...(input.AutoApprovalDelayInSeconds !== undefined && {
      AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.HITLayoutId !== undefined && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters !== undefined && {
      HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(
        input.HITLayoutParameters,
        context
      )
    }),
    ...(input.HITReviewPolicy !== undefined && {
      HITReviewPolicy: serializeAws_json1_1ReviewPolicy(
        input.HITReviewPolicy,
        context
      )
    }),
    ...(input.Keywords !== undefined && { Keywords: input.Keywords }),
    ...(input.LifetimeInSeconds !== undefined && {
      LifetimeInSeconds: input.LifetimeInSeconds
    }),
    ...(input.MaxAssignments !== undefined && {
      MaxAssignments: input.MaxAssignments
    }),
    ...(input.QualificationRequirements !== undefined && {
      QualificationRequirements: serializeAws_json1_1QualificationRequirementList(
        input.QualificationRequirements,
        context
      )
    }),
    ...(input.Question !== undefined && { Question: input.Question }),
    ...(input.RequesterAnnotation !== undefined && {
      RequesterAnnotation: input.RequesterAnnotation
    }),
    ...(input.Reward !== undefined && { Reward: input.Reward }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.UniqueRequestToken !== undefined && {
      UniqueRequestToken: input.UniqueRequestToken
    })
  };
};

const serializeAws_json1_1CreateHITTypeRequest = (
  input: CreateHITTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentDurationInSeconds !== undefined && {
      AssignmentDurationInSeconds: input.AssignmentDurationInSeconds
    }),
    ...(input.AutoApprovalDelayInSeconds !== undefined && {
      AutoApprovalDelayInSeconds: input.AutoApprovalDelayInSeconds
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Keywords !== undefined && { Keywords: input.Keywords }),
    ...(input.QualificationRequirements !== undefined && {
      QualificationRequirements: serializeAws_json1_1QualificationRequirementList(
        input.QualificationRequirements,
        context
      )
    }),
    ...(input.Reward !== undefined && { Reward: input.Reward }),
    ...(input.Title !== undefined && { Title: input.Title })
  };
};

const serializeAws_json1_1CreateHITWithHITTypeRequest = (
  input: CreateHITWithHITTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentReviewPolicy !== undefined && {
      AssignmentReviewPolicy: serializeAws_json1_1ReviewPolicy(
        input.AssignmentReviewPolicy,
        context
      )
    }),
    ...(input.HITLayoutId !== undefined && { HITLayoutId: input.HITLayoutId }),
    ...(input.HITLayoutParameters !== undefined && {
      HITLayoutParameters: serializeAws_json1_1HITLayoutParameterList(
        input.HITLayoutParameters,
        context
      )
    }),
    ...(input.HITReviewPolicy !== undefined && {
      HITReviewPolicy: serializeAws_json1_1ReviewPolicy(
        input.HITReviewPolicy,
        context
      )
    }),
    ...(input.HITTypeId !== undefined && { HITTypeId: input.HITTypeId }),
    ...(input.LifetimeInSeconds !== undefined && {
      LifetimeInSeconds: input.LifetimeInSeconds
    }),
    ...(input.MaxAssignments !== undefined && {
      MaxAssignments: input.MaxAssignments
    }),
    ...(input.Question !== undefined && { Question: input.Question }),
    ...(input.RequesterAnnotation !== undefined && {
      RequesterAnnotation: input.RequesterAnnotation
    }),
    ...(input.UniqueRequestToken !== undefined && {
      UniqueRequestToken: input.UniqueRequestToken
    })
  };
};

const serializeAws_json1_1CreateQualificationTypeRequest = (
  input: CreateQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnswerKey !== undefined && { AnswerKey: input.AnswerKey }),
    ...(input.AutoGranted !== undefined && { AutoGranted: input.AutoGranted }),
    ...(input.AutoGrantedValue !== undefined && {
      AutoGrantedValue: input.AutoGrantedValue
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Keywords !== undefined && { Keywords: input.Keywords }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.QualificationTypeStatus !== undefined && {
      QualificationTypeStatus: input.QualificationTypeStatus
    }),
    ...(input.RetryDelayInSeconds !== undefined && {
      RetryDelayInSeconds: input.RetryDelayInSeconds
    }),
    ...(input.Test !== undefined && { Test: input.Test }),
    ...(input.TestDurationInSeconds !== undefined && {
      TestDurationInSeconds: input.TestDurationInSeconds
    })
  };
};

const serializeAws_json1_1CreateWorkerBlockRequest = (
  input: CreateWorkerBlockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Reason !== undefined && { Reason: input.Reason }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1CustomerIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeleteHITRequest = (
  input: DeleteHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId })
  };
};

const serializeAws_json1_1DeleteQualificationTypeRequest = (
  input: DeleteQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    })
  };
};

const serializeAws_json1_1DeleteWorkerBlockRequest = (
  input: DeleteWorkerBlockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Reason !== undefined && { Reason: input.Reason }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1DisassociateQualificationFromWorkerRequest = (
  input: DisassociateQualificationFromWorkerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.Reason !== undefined && { Reason: input.Reason }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1EventTypeList = (
  input: (EventType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetAccountBalanceRequest = (
  input: GetAccountBalanceRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAssignmentRequest = (
  input: GetAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    })
  };
};

const serializeAws_json1_1GetFileUploadURLRequest = (
  input: GetFileUploadURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    }),
    ...(input.QuestionIdentifier !== undefined && {
      QuestionIdentifier: input.QuestionIdentifier
    })
  };
};

const serializeAws_json1_1GetHITRequest = (
  input: GetHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId })
  };
};

const serializeAws_json1_1GetQualificationScoreRequest = (
  input: GetQualificationScoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1GetQualificationTypeRequest = (
  input: GetQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    })
  };
};

const serializeAws_json1_1HITLayoutParameter = (
  input: HITLayoutParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1HITLayoutParameterList = (
  input: HITLayoutParameter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1HITLayoutParameter(entry, context)
  );
};

const serializeAws_json1_1IntegerList = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListAssignmentsForHITRequest = (
  input: ListAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentStatuses !== undefined && {
      AssignmentStatuses: serializeAws_json1_1AssignmentStatusList(
        input.AssignmentStatuses,
        context
      )
    }),
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListBonusPaymentsRequest = (
  input: ListBonusPaymentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    }),
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListHITsForQualificationTypeRequest = (
  input: ListHITsForQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    })
  };
};

const serializeAws_json1_1ListHITsRequest = (
  input: ListHITsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListQualificationRequestsRequest = (
  input: ListQualificationRequestsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    })
  };
};

const serializeAws_json1_1ListQualificationTypesRequest = (
  input: ListQualificationTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MustBeOwnedByCaller !== undefined && {
      MustBeOwnedByCaller: input.MustBeOwnedByCaller
    }),
    ...(input.MustBeRequestable !== undefined && {
      MustBeRequestable: input.MustBeRequestable
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Query !== undefined && { Query: input.Query })
  };
};

const serializeAws_json1_1ListReviewableHITsRequest = (
  input: ListReviewableHITsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITTypeId !== undefined && { HITTypeId: input.HITTypeId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && { Status: input.Status })
  };
};

const serializeAws_json1_1ListReviewPolicyResultsForHITRequest = (
  input: ListReviewPolicyResultsForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PolicyLevels !== undefined && {
      PolicyLevels: serializeAws_json1_1ReviewPolicyLevelList(
        input.PolicyLevels,
        context
      )
    }),
    ...(input.RetrieveActions !== undefined && {
      RetrieveActions: input.RetrieveActions
    }),
    ...(input.RetrieveResults !== undefined && {
      RetrieveResults: input.RetrieveResults
    })
  };
};

const serializeAws_json1_1ListWorkerBlocksRequest = (
  input: ListWorkerBlocksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListWorkersWithQualificationTypeRequest = (
  input: ListWorkersWithQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.Status !== undefined && { Status: input.Status })
  };
};

const serializeAws_json1_1Locale = (
  input: Locale,
  context: __SerdeContext
): any => {
  return {
    ...(input.Country !== undefined && { Country: input.Country }),
    ...(input.Subdivision !== undefined && { Subdivision: input.Subdivision })
  };
};

const serializeAws_json1_1LocaleList = (
  input: Locale[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Locale(entry, context));
};

const serializeAws_json1_1NotificationSpecification = (
  input: NotificationSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && { Destination: input.Destination }),
    ...(input.EventTypes !== undefined && {
      EventTypes: serializeAws_json1_1EventTypeList(input.EventTypes, context)
    }),
    ...(input.Transport !== undefined && { Transport: input.Transport }),
    ...(input.Version !== undefined && { Version: input.Version })
  };
};

const serializeAws_json1_1NotifyWorkersRequest = (
  input: NotifyWorkersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageText !== undefined && { MessageText: input.MessageText }),
    ...(input.Subject !== undefined && { Subject: input.Subject }),
    ...(input.WorkerIds !== undefined && {
      WorkerIds: serializeAws_json1_1CustomerIdList(input.WorkerIds, context)
    })
  };
};

const serializeAws_json1_1ParameterMapEntry = (
  input: ParameterMapEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1StringList(input.Values, context)
    })
  };
};

const serializeAws_json1_1ParameterMapEntryList = (
  input: ParameterMapEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ParameterMapEntry(entry, context)
  );
};

const serializeAws_json1_1PolicyParameter = (
  input: PolicyParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.MapEntries !== undefined && {
      MapEntries: serializeAws_json1_1ParameterMapEntryList(
        input.MapEntries,
        context
      )
    }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1StringList(input.Values, context)
    })
  };
};

const serializeAws_json1_1PolicyParameterList = (
  input: PolicyParameter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PolicyParameter(entry, context)
  );
};

const serializeAws_json1_1QualificationRequirement = (
  input: QualificationRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionsGuarded !== undefined && {
      ActionsGuarded: input.ActionsGuarded
    }),
    ...(input.Comparator !== undefined && { Comparator: input.Comparator }),
    ...(input.IntegerValues !== undefined && {
      IntegerValues: serializeAws_json1_1IntegerList(
        input.IntegerValues,
        context
      )
    }),
    ...(input.LocaleValues !== undefined && {
      LocaleValues: serializeAws_json1_1LocaleList(input.LocaleValues, context)
    }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.RequiredToPreview !== undefined && {
      RequiredToPreview: input.RequiredToPreview
    })
  };
};

const serializeAws_json1_1QualificationRequirementList = (
  input: QualificationRequirement[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1QualificationRequirement(entry, context)
  );
};

const serializeAws_json1_1RejectAssignmentRequest = (
  input: RejectAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    }),
    ...(input.RequesterFeedback !== undefined && {
      RequesterFeedback: input.RequesterFeedback
    })
  };
};

const serializeAws_json1_1RejectQualificationRequestRequest = (
  input: RejectQualificationRequestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QualificationRequestId !== undefined && {
      QualificationRequestId: input.QualificationRequestId
    }),
    ...(input.Reason !== undefined && { Reason: input.Reason })
  };
};

const serializeAws_json1_1ReviewPolicy = (
  input: ReviewPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_json1_1PolicyParameterList(
        input.Parameters,
        context
      )
    }),
    ...(input.PolicyName !== undefined && { PolicyName: input.PolicyName })
  };
};

const serializeAws_json1_1ReviewPolicyLevelList = (
  input: (ReviewPolicyLevel | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SendBonusRequest = (
  input: SendBonusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignmentId !== undefined && {
      AssignmentId: input.AssignmentId
    }),
    ...(input.BonusAmount !== undefined && { BonusAmount: input.BonusAmount }),
    ...(input.Reason !== undefined && { Reason: input.Reason }),
    ...(input.UniqueRequestToken !== undefined && {
      UniqueRequestToken: input.UniqueRequestToken
    }),
    ...(input.WorkerId !== undefined && { WorkerId: input.WorkerId })
  };
};

const serializeAws_json1_1SendTestEventNotificationRequest = (
  input: SendTestEventNotificationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1NotificationSpecification(
        input.Notification,
        context
      )
    }),
    ...(input.TestEventType !== undefined && {
      TestEventType: input.TestEventType
    })
  };
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1UpdateExpirationForHITRequest = (
  input: UpdateExpirationForHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExpireAt !== undefined && {
      ExpireAt: Math.round(input.ExpireAt.getTime() / 1000)
    }),
    ...(input.HITId !== undefined && { HITId: input.HITId })
  };
};

const serializeAws_json1_1UpdateHITReviewStatusRequest = (
  input: UpdateHITReviewStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.Revert !== undefined && { Revert: input.Revert })
  };
};

const serializeAws_json1_1UpdateHITTypeOfHITRequest = (
  input: UpdateHITTypeOfHITRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HITId !== undefined && { HITId: input.HITId }),
    ...(input.HITTypeId !== undefined && { HITTypeId: input.HITTypeId })
  };
};

const serializeAws_json1_1UpdateNotificationSettingsRequest = (
  input: UpdateNotificationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Active !== undefined && { Active: input.Active }),
    ...(input.HITTypeId !== undefined && { HITTypeId: input.HITTypeId }),
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1NotificationSpecification(
        input.Notification,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateQualificationTypeRequest = (
  input: UpdateQualificationTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnswerKey !== undefined && { AnswerKey: input.AnswerKey }),
    ...(input.AutoGranted !== undefined && { AutoGranted: input.AutoGranted }),
    ...(input.AutoGrantedValue !== undefined && {
      AutoGrantedValue: input.AutoGrantedValue
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.QualificationTypeId !== undefined && {
      QualificationTypeId: input.QualificationTypeId
    }),
    ...(input.QualificationTypeStatus !== undefined && {
      QualificationTypeStatus: input.QualificationTypeStatus
    }),
    ...(input.RetryDelayInSeconds !== undefined && {
      RetryDelayInSeconds: input.RetryDelayInSeconds
    }),
    ...(input.Test !== undefined && { Test: input.Test }),
    ...(input.TestDurationInSeconds !== undefined && {
      TestDurationInSeconds: input.TestDurationInSeconds
    })
  };
};

const deserializeAws_json1_1AcceptQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): AcceptQualificationRequestResponse => {
  return {
    __type: "AcceptQualificationRequestResponse"
  } as any;
};

const deserializeAws_json1_1ApproveAssignmentResponse = (
  output: any,
  context: __SerdeContext
): ApproveAssignmentResponse => {
  return {
    __type: "ApproveAssignmentResponse"
  } as any;
};

const deserializeAws_json1_1Assignment = (
  output: any,
  context: __SerdeContext
): Assignment => {
  return {
    __type: "Assignment",
    AcceptTime:
      output.AcceptTime !== undefined && output.AcceptTime !== null
        ? new Date(Math.round(output.AcceptTime * 1000))
        : undefined,
    Answer:
      output.Answer !== undefined && output.Answer !== null
        ? output.Answer
        : undefined,
    ApprovalTime:
      output.ApprovalTime !== undefined && output.ApprovalTime !== null
        ? new Date(Math.round(output.ApprovalTime * 1000))
        : undefined,
    AssignmentId:
      output.AssignmentId !== undefined && output.AssignmentId !== null
        ? output.AssignmentId
        : undefined,
    AssignmentStatus:
      output.AssignmentStatus !== undefined && output.AssignmentStatus !== null
        ? output.AssignmentStatus
        : undefined,
    AutoApprovalTime:
      output.AutoApprovalTime !== undefined && output.AutoApprovalTime !== null
        ? new Date(Math.round(output.AutoApprovalTime * 1000))
        : undefined,
    Deadline:
      output.Deadline !== undefined && output.Deadline !== null
        ? new Date(Math.round(output.Deadline * 1000))
        : undefined,
    HITId:
      output.HITId !== undefined && output.HITId !== null
        ? output.HITId
        : undefined,
    RejectionTime:
      output.RejectionTime !== undefined && output.RejectionTime !== null
        ? new Date(Math.round(output.RejectionTime * 1000))
        : undefined,
    RequesterFeedback:
      output.RequesterFeedback !== undefined &&
      output.RequesterFeedback !== null
        ? output.RequesterFeedback
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1AssignmentList = (
  output: any,
  context: __SerdeContext
): Assignment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Assignment(entry, context)
  );
};

const deserializeAws_json1_1AssociateQualificationWithWorkerResponse = (
  output: any,
  context: __SerdeContext
): AssociateQualificationWithWorkerResponse => {
  return {
    __type: "AssociateQualificationWithWorkerResponse"
  } as any;
};

const deserializeAws_json1_1BonusPayment = (
  output: any,
  context: __SerdeContext
): BonusPayment => {
  return {
    __type: "BonusPayment",
    AssignmentId:
      output.AssignmentId !== undefined && output.AssignmentId !== null
        ? output.AssignmentId
        : undefined,
    BonusAmount:
      output.BonusAmount !== undefined && output.BonusAmount !== null
        ? output.BonusAmount
        : undefined,
    GrantTime:
      output.GrantTime !== undefined && output.GrantTime !== null
        ? new Date(Math.round(output.GrantTime * 1000))
        : undefined,
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1BonusPaymentList = (
  output: any,
  context: __SerdeContext
): BonusPayment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BonusPayment(entry, context)
  );
};

const deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): CreateAdditionalAssignmentsForHITResponse => {
  return {
    __type: "CreateAdditionalAssignmentsForHITResponse"
  } as any;
};

const deserializeAws_json1_1CreateHITResponse = (
  output: any,
  context: __SerdeContext
): CreateHITResponse => {
  return {
    __type: "CreateHITResponse",
    HIT:
      output.HIT !== undefined && output.HIT !== null
        ? deserializeAws_json1_1HIT(output.HIT, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateHITTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateHITTypeResponse => {
  return {
    __type: "CreateHITTypeResponse",
    HITTypeId:
      output.HITTypeId !== undefined && output.HITTypeId !== null
        ? output.HITTypeId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateHITWithHITTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateHITWithHITTypeResponse => {
  return {
    __type: "CreateHITWithHITTypeResponse",
    HIT:
      output.HIT !== undefined && output.HIT !== null
        ? deserializeAws_json1_1HIT(output.HIT, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateQualificationTypeResponse => {
  return {
    __type: "CreateQualificationTypeResponse",
    QualificationType:
      output.QualificationType !== undefined &&
      output.QualificationType !== null
        ? deserializeAws_json1_1QualificationType(
            output.QualificationType,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): CreateWorkerBlockResponse => {
  return {
    __type: "CreateWorkerBlockResponse"
  } as any;
};

const deserializeAws_json1_1DeleteHITResponse = (
  output: any,
  context: __SerdeContext
): DeleteHITResponse => {
  return {
    __type: "DeleteHITResponse"
  } as any;
};

const deserializeAws_json1_1DeleteQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): DeleteQualificationTypeResponse => {
  return {
    __type: "DeleteQualificationTypeResponse"
  } as any;
};

const deserializeAws_json1_1DeleteWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): DeleteWorkerBlockResponse => {
  return {
    __type: "DeleteWorkerBlockResponse"
  } as any;
};

const deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = (
  output: any,
  context: __SerdeContext
): DisassociateQualificationFromWorkerResponse => {
  return {
    __type: "DisassociateQualificationFromWorkerResponse"
  } as any;
};

const deserializeAws_json1_1GetAccountBalanceResponse = (
  output: any,
  context: __SerdeContext
): GetAccountBalanceResponse => {
  return {
    __type: "GetAccountBalanceResponse",
    AvailableBalance:
      output.AvailableBalance !== undefined && output.AvailableBalance !== null
        ? output.AvailableBalance
        : undefined,
    OnHoldBalance:
      output.OnHoldBalance !== undefined && output.OnHoldBalance !== null
        ? output.OnHoldBalance
        : undefined
  } as any;
};

const deserializeAws_json1_1GetAssignmentResponse = (
  output: any,
  context: __SerdeContext
): GetAssignmentResponse => {
  return {
    __type: "GetAssignmentResponse",
    Assignment:
      output.Assignment !== undefined && output.Assignment !== null
        ? deserializeAws_json1_1Assignment(output.Assignment, context)
        : undefined,
    HIT:
      output.HIT !== undefined && output.HIT !== null
        ? deserializeAws_json1_1HIT(output.HIT, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetFileUploadURLResponse = (
  output: any,
  context: __SerdeContext
): GetFileUploadURLResponse => {
  return {
    __type: "GetFileUploadURLResponse",
    FileUploadURL:
      output.FileUploadURL !== undefined && output.FileUploadURL !== null
        ? output.FileUploadURL
        : undefined
  } as any;
};

const deserializeAws_json1_1GetHITResponse = (
  output: any,
  context: __SerdeContext
): GetHITResponse => {
  return {
    __type: "GetHITResponse",
    HIT:
      output.HIT !== undefined && output.HIT !== null
        ? deserializeAws_json1_1HIT(output.HIT, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetQualificationScoreResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationScoreResponse => {
  return {
    __type: "GetQualificationScoreResponse",
    Qualification:
      output.Qualification !== undefined && output.Qualification !== null
        ? deserializeAws_json1_1Qualification(output.Qualification, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationTypeResponse => {
  return {
    __type: "GetQualificationTypeResponse",
    QualificationType:
      output.QualificationType !== undefined &&
      output.QualificationType !== null
        ? deserializeAws_json1_1QualificationType(
            output.QualificationType,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1HIT = (
  output: any,
  context: __SerdeContext
): HIT => {
  return {
    __type: "HIT",
    AssignmentDurationInSeconds:
      output.AssignmentDurationInSeconds !== undefined &&
      output.AssignmentDurationInSeconds !== null
        ? output.AssignmentDurationInSeconds
        : undefined,
    AutoApprovalDelayInSeconds:
      output.AutoApprovalDelayInSeconds !== undefined &&
      output.AutoApprovalDelayInSeconds !== null
        ? output.AutoApprovalDelayInSeconds
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Expiration:
      output.Expiration !== undefined && output.Expiration !== null
        ? new Date(Math.round(output.Expiration * 1000))
        : undefined,
    HITGroupId:
      output.HITGroupId !== undefined && output.HITGroupId !== null
        ? output.HITGroupId
        : undefined,
    HITId:
      output.HITId !== undefined && output.HITId !== null
        ? output.HITId
        : undefined,
    HITLayoutId:
      output.HITLayoutId !== undefined && output.HITLayoutId !== null
        ? output.HITLayoutId
        : undefined,
    HITReviewStatus:
      output.HITReviewStatus !== undefined && output.HITReviewStatus !== null
        ? output.HITReviewStatus
        : undefined,
    HITStatus:
      output.HITStatus !== undefined && output.HITStatus !== null
        ? output.HITStatus
        : undefined,
    HITTypeId:
      output.HITTypeId !== undefined && output.HITTypeId !== null
        ? output.HITTypeId
        : undefined,
    Keywords:
      output.Keywords !== undefined && output.Keywords !== null
        ? output.Keywords
        : undefined,
    MaxAssignments:
      output.MaxAssignments !== undefined && output.MaxAssignments !== null
        ? output.MaxAssignments
        : undefined,
    NumberOfAssignmentsAvailable:
      output.NumberOfAssignmentsAvailable !== undefined &&
      output.NumberOfAssignmentsAvailable !== null
        ? output.NumberOfAssignmentsAvailable
        : undefined,
    NumberOfAssignmentsCompleted:
      output.NumberOfAssignmentsCompleted !== undefined &&
      output.NumberOfAssignmentsCompleted !== null
        ? output.NumberOfAssignmentsCompleted
        : undefined,
    NumberOfAssignmentsPending:
      output.NumberOfAssignmentsPending !== undefined &&
      output.NumberOfAssignmentsPending !== null
        ? output.NumberOfAssignmentsPending
        : undefined,
    QualificationRequirements:
      output.QualificationRequirements !== undefined &&
      output.QualificationRequirements !== null
        ? deserializeAws_json1_1QualificationRequirementList(
            output.QualificationRequirements,
            context
          )
        : undefined,
    Question:
      output.Question !== undefined && output.Question !== null
        ? output.Question
        : undefined,
    RequesterAnnotation:
      output.RequesterAnnotation !== undefined &&
      output.RequesterAnnotation !== null
        ? output.RequesterAnnotation
        : undefined,
    Reward:
      output.Reward !== undefined && output.Reward !== null
        ? output.Reward
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? output.Title
        : undefined
  } as any;
};

const deserializeAws_json1_1HITList = (
  output: any,
  context: __SerdeContext
): HIT[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HIT(entry, context)
  );
};

const deserializeAws_json1_1IntegerList = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListAssignmentsForHITResponse => {
  return {
    __type: "ListAssignmentsForHITResponse",
    Assignments:
      output.Assignments !== undefined && output.Assignments !== null
        ? deserializeAws_json1_1AssignmentList(output.Assignments, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined
  } as any;
};

const deserializeAws_json1_1ListBonusPaymentsResponse = (
  output: any,
  context: __SerdeContext
): ListBonusPaymentsResponse => {
  return {
    __type: "ListBonusPaymentsResponse",
    BonusPayments:
      output.BonusPayments !== undefined && output.BonusPayments !== null
        ? deserializeAws_json1_1BonusPaymentList(output.BonusPayments, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined
  } as any;
};

const deserializeAws_json1_1ListHITsForQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListHITsForQualificationTypeResponse => {
  return {
    __type: "ListHITsForQualificationTypeResponse",
    HITs:
      output.HITs !== undefined && output.HITs !== null
        ? deserializeAws_json1_1HITList(output.HITs, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined
  } as any;
};

const deserializeAws_json1_1ListHITsResponse = (
  output: any,
  context: __SerdeContext
): ListHITsResponse => {
  return {
    __type: "ListHITsResponse",
    HITs:
      output.HITs !== undefined && output.HITs !== null
        ? deserializeAws_json1_1HITList(output.HITs, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined
  } as any;
};

const deserializeAws_json1_1ListQualificationRequestsResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationRequestsResponse => {
  return {
    __type: "ListQualificationRequestsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined,
    QualificationRequests:
      output.QualificationRequests !== undefined &&
      output.QualificationRequests !== null
        ? deserializeAws_json1_1QualificationRequestList(
            output.QualificationRequests,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListQualificationTypesResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationTypesResponse => {
  return {
    __type: "ListQualificationTypesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined,
    QualificationTypes:
      output.QualificationTypes !== undefined &&
      output.QualificationTypes !== null
        ? deserializeAws_json1_1QualificationTypeList(
            output.QualificationTypes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListReviewableHITsResponse = (
  output: any,
  context: __SerdeContext
): ListReviewableHITsResponse => {
  return {
    __type: "ListReviewableHITsResponse",
    HITs:
      output.HITs !== undefined && output.HITs !== null
        ? deserializeAws_json1_1HITList(output.HITs, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined
  } as any;
};

const deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListReviewPolicyResultsForHITResponse => {
  return {
    __type: "ListReviewPolicyResultsForHITResponse",
    AssignmentReviewPolicy:
      output.AssignmentReviewPolicy !== undefined &&
      output.AssignmentReviewPolicy !== null
        ? deserializeAws_json1_1ReviewPolicy(
            output.AssignmentReviewPolicy,
            context
          )
        : undefined,
    AssignmentReviewReport:
      output.AssignmentReviewReport !== undefined &&
      output.AssignmentReviewReport !== null
        ? deserializeAws_json1_1ReviewReport(
            output.AssignmentReviewReport,
            context
          )
        : undefined,
    HITId:
      output.HITId !== undefined && output.HITId !== null
        ? output.HITId
        : undefined,
    HITReviewPolicy:
      output.HITReviewPolicy !== undefined && output.HITReviewPolicy !== null
        ? deserializeAws_json1_1ReviewPolicy(output.HITReviewPolicy, context)
        : undefined,
    HITReviewReport:
      output.HITReviewReport !== undefined && output.HITReviewReport !== null
        ? deserializeAws_json1_1ReviewReport(output.HITReviewReport, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListWorkerBlocksResponse = (
  output: any,
  context: __SerdeContext
): ListWorkerBlocksResponse => {
  return {
    __type: "ListWorkerBlocksResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined,
    WorkerBlocks:
      output.WorkerBlocks !== undefined && output.WorkerBlocks !== null
        ? deserializeAws_json1_1WorkerBlockList(output.WorkerBlocks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListWorkersWithQualificationTypeResponse => {
  return {
    __type: "ListWorkersWithQualificationTypeResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    NumResults:
      output.NumResults !== undefined && output.NumResults !== null
        ? output.NumResults
        : undefined,
    Qualifications:
      output.Qualifications !== undefined && output.Qualifications !== null
        ? deserializeAws_json1_1QualificationList(
            output.Qualifications,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Locale = (
  output: any,
  context: __SerdeContext
): Locale => {
  return {
    __type: "Locale",
    Country:
      output.Country !== undefined && output.Country !== null
        ? output.Country
        : undefined,
    Subdivision:
      output.Subdivision !== undefined && output.Subdivision !== null
        ? output.Subdivision
        : undefined
  } as any;
};

const deserializeAws_json1_1LocaleList = (
  output: any,
  context: __SerdeContext
): Locale[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Locale(entry, context)
  );
};

const deserializeAws_json1_1NotifyWorkersFailureStatus = (
  output: any,
  context: __SerdeContext
): NotifyWorkersFailureStatus => {
  return {
    __type: "NotifyWorkersFailureStatus",
    NotifyWorkersFailureCode:
      output.NotifyWorkersFailureCode !== undefined &&
      output.NotifyWorkersFailureCode !== null
        ? output.NotifyWorkersFailureCode
        : undefined,
    NotifyWorkersFailureMessage:
      output.NotifyWorkersFailureMessage !== undefined &&
      output.NotifyWorkersFailureMessage !== null
        ? output.NotifyWorkersFailureMessage
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1NotifyWorkersFailureStatusList = (
  output: any,
  context: __SerdeContext
): NotifyWorkersFailureStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context)
  );
};

const deserializeAws_json1_1NotifyWorkersResponse = (
  output: any,
  context: __SerdeContext
): NotifyWorkersResponse => {
  return {
    __type: "NotifyWorkersResponse",
    NotifyWorkersFailureStatuses:
      output.NotifyWorkersFailureStatuses !== undefined &&
      output.NotifyWorkersFailureStatuses !== null
        ? deserializeAws_json1_1NotifyWorkersFailureStatusList(
            output.NotifyWorkersFailureStatuses,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterMapEntry = (
  output: any,
  context: __SerdeContext
): ParameterMapEntry => {
  return {
    __type: "ParameterMapEntry",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1StringList(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterMapEntryList = (
  output: any,
  context: __SerdeContext
): ParameterMapEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterMapEntry(entry, context)
  );
};

const deserializeAws_json1_1PolicyParameter = (
  output: any,
  context: __SerdeContext
): PolicyParameter => {
  return {
    __type: "PolicyParameter",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    MapEntries:
      output.MapEntries !== undefined && output.MapEntries !== null
        ? deserializeAws_json1_1ParameterMapEntryList(
            output.MapEntries,
            context
          )
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1StringList(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PolicyParameterList = (
  output: any,
  context: __SerdeContext
): PolicyParameter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicyParameter(entry, context)
  );
};

const deserializeAws_json1_1Qualification = (
  output: any,
  context: __SerdeContext
): Qualification => {
  return {
    __type: "Qualification",
    GrantTime:
      output.GrantTime !== undefined && output.GrantTime !== null
        ? new Date(Math.round(output.GrantTime * 1000))
        : undefined,
    IntegerValue:
      output.IntegerValue !== undefined && output.IntegerValue !== null
        ? output.IntegerValue
        : undefined,
    LocaleValue:
      output.LocaleValue !== undefined && output.LocaleValue !== null
        ? deserializeAws_json1_1Locale(output.LocaleValue, context)
        : undefined,
    QualificationTypeId:
      output.QualificationTypeId !== undefined &&
      output.QualificationTypeId !== null
        ? output.QualificationTypeId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1QualificationList = (
  output: any,
  context: __SerdeContext
): Qualification[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Qualification(entry, context)
  );
};

const deserializeAws_json1_1QualificationRequest = (
  output: any,
  context: __SerdeContext
): QualificationRequest => {
  return {
    __type: "QualificationRequest",
    Answer:
      output.Answer !== undefined && output.Answer !== null
        ? output.Answer
        : undefined,
    QualificationRequestId:
      output.QualificationRequestId !== undefined &&
      output.QualificationRequestId !== null
        ? output.QualificationRequestId
        : undefined,
    QualificationTypeId:
      output.QualificationTypeId !== undefined &&
      output.QualificationTypeId !== null
        ? output.QualificationTypeId
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
    Test:
      output.Test !== undefined && output.Test !== null
        ? output.Test
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1QualificationRequestList = (
  output: any,
  context: __SerdeContext
): QualificationRequest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationRequest(entry, context)
  );
};

const deserializeAws_json1_1QualificationRequirement = (
  output: any,
  context: __SerdeContext
): QualificationRequirement => {
  return {
    __type: "QualificationRequirement",
    ActionsGuarded:
      output.ActionsGuarded !== undefined && output.ActionsGuarded !== null
        ? output.ActionsGuarded
        : undefined,
    Comparator:
      output.Comparator !== undefined && output.Comparator !== null
        ? output.Comparator
        : undefined,
    IntegerValues:
      output.IntegerValues !== undefined && output.IntegerValues !== null
        ? deserializeAws_json1_1IntegerList(output.IntegerValues, context)
        : undefined,
    LocaleValues:
      output.LocaleValues !== undefined && output.LocaleValues !== null
        ? deserializeAws_json1_1LocaleList(output.LocaleValues, context)
        : undefined,
    QualificationTypeId:
      output.QualificationTypeId !== undefined &&
      output.QualificationTypeId !== null
        ? output.QualificationTypeId
        : undefined,
    RequiredToPreview:
      output.RequiredToPreview !== undefined &&
      output.RequiredToPreview !== null
        ? output.RequiredToPreview
        : undefined
  } as any;
};

const deserializeAws_json1_1QualificationRequirementList = (
  output: any,
  context: __SerdeContext
): QualificationRequirement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationRequirement(entry, context)
  );
};

const deserializeAws_json1_1QualificationType = (
  output: any,
  context: __SerdeContext
): QualificationType => {
  return {
    __type: "QualificationType",
    AnswerKey:
      output.AnswerKey !== undefined && output.AnswerKey !== null
        ? output.AnswerKey
        : undefined,
    AutoGranted:
      output.AutoGranted !== undefined && output.AutoGranted !== null
        ? output.AutoGranted
        : undefined,
    AutoGrantedValue:
      output.AutoGrantedValue !== undefined && output.AutoGrantedValue !== null
        ? output.AutoGrantedValue
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    IsRequestable:
      output.IsRequestable !== undefined && output.IsRequestable !== null
        ? output.IsRequestable
        : undefined,
    Keywords:
      output.Keywords !== undefined && output.Keywords !== null
        ? output.Keywords
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    QualificationTypeId:
      output.QualificationTypeId !== undefined &&
      output.QualificationTypeId !== null
        ? output.QualificationTypeId
        : undefined,
    QualificationTypeStatus:
      output.QualificationTypeStatus !== undefined &&
      output.QualificationTypeStatus !== null
        ? output.QualificationTypeStatus
        : undefined,
    RetryDelayInSeconds:
      output.RetryDelayInSeconds !== undefined &&
      output.RetryDelayInSeconds !== null
        ? output.RetryDelayInSeconds
        : undefined,
    Test:
      output.Test !== undefined && output.Test !== null
        ? output.Test
        : undefined,
    TestDurationInSeconds:
      output.TestDurationInSeconds !== undefined &&
      output.TestDurationInSeconds !== null
        ? output.TestDurationInSeconds
        : undefined
  } as any;
};

const deserializeAws_json1_1QualificationTypeList = (
  output: any,
  context: __SerdeContext
): QualificationType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationType(entry, context)
  );
};

const deserializeAws_json1_1RejectAssignmentResponse = (
  output: any,
  context: __SerdeContext
): RejectAssignmentResponse => {
  return {
    __type: "RejectAssignmentResponse"
  } as any;
};

const deserializeAws_json1_1RejectQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): RejectQualificationRequestResponse => {
  return {
    __type: "RejectQualificationRequestResponse"
  } as any;
};

const deserializeAws_json1_1RequestError = (
  output: any,
  context: __SerdeContext
): RequestError => {
  return {
    __type: "RequestError",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    TurkErrorCode:
      output.TurkErrorCode !== undefined && output.TurkErrorCode !== null
        ? output.TurkErrorCode
        : undefined
  } as any;
};

const deserializeAws_json1_1ReviewActionDetail = (
  output: any,
  context: __SerdeContext
): ReviewActionDetail => {
  return {
    __type: "ReviewActionDetail",
    ActionId:
      output.ActionId !== undefined && output.ActionId !== null
        ? output.ActionId
        : undefined,
    ActionName:
      output.ActionName !== undefined && output.ActionName !== null
        ? output.ActionName
        : undefined,
    CompleteTime:
      output.CompleteTime !== undefined && output.CompleteTime !== null
        ? new Date(Math.round(output.CompleteTime * 1000))
        : undefined,
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Result:
      output.Result !== undefined && output.Result !== null
        ? output.Result
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TargetId:
      output.TargetId !== undefined && output.TargetId !== null
        ? output.TargetId
        : undefined,
    TargetType:
      output.TargetType !== undefined && output.TargetType !== null
        ? output.TargetType
        : undefined
  } as any;
};

const deserializeAws_json1_1ReviewActionDetailList = (
  output: any,
  context: __SerdeContext
): ReviewActionDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReviewActionDetail(entry, context)
  );
};

const deserializeAws_json1_1ReviewPolicy = (
  output: any,
  context: __SerdeContext
): ReviewPolicy => {
  return {
    __type: "ReviewPolicy",
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1PolicyParameterList(output.Parameters, context)
        : undefined,
    PolicyName:
      output.PolicyName !== undefined && output.PolicyName !== null
        ? output.PolicyName
        : undefined
  } as any;
};

const deserializeAws_json1_1ReviewReport = (
  output: any,
  context: __SerdeContext
): ReviewReport => {
  return {
    __type: "ReviewReport",
    ReviewActions:
      output.ReviewActions !== undefined && output.ReviewActions !== null
        ? deserializeAws_json1_1ReviewActionDetailList(
            output.ReviewActions,
            context
          )
        : undefined,
    ReviewResults:
      output.ReviewResults !== undefined && output.ReviewResults !== null
        ? deserializeAws_json1_1ReviewResultDetailList(
            output.ReviewResults,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ReviewResultDetail = (
  output: any,
  context: __SerdeContext
): ReviewResultDetail => {
  return {
    __type: "ReviewResultDetail",
    ActionId:
      output.ActionId !== undefined && output.ActionId !== null
        ? output.ActionId
        : undefined,
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    QuestionId:
      output.QuestionId !== undefined && output.QuestionId !== null
        ? output.QuestionId
        : undefined,
    SubjectId:
      output.SubjectId !== undefined && output.SubjectId !== null
        ? output.SubjectId
        : undefined,
    SubjectType:
      output.SubjectType !== undefined && output.SubjectType !== null
        ? output.SubjectType
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1ReviewResultDetailList = (
  output: any,
  context: __SerdeContext
): ReviewResultDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReviewResultDetail(entry, context)
  );
};

const deserializeAws_json1_1SendBonusResponse = (
  output: any,
  context: __SerdeContext
): SendBonusResponse => {
  return {
    __type: "SendBonusResponse"
  } as any;
};

const deserializeAws_json1_1SendTestEventNotificationResponse = (
  output: any,
  context: __SerdeContext
): SendTestEventNotificationResponse => {
  return {
    __type: "SendTestEventNotificationResponse"
  } as any;
};

const deserializeAws_json1_1ServiceFault = (
  output: any,
  context: __SerdeContext
): ServiceFault => {
  return {
    __type: "ServiceFault",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    TurkErrorCode:
      output.TurkErrorCode !== undefined && output.TurkErrorCode !== null
        ? output.TurkErrorCode
        : undefined
  } as any;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1UpdateExpirationForHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateExpirationForHITResponse => {
  return {
    __type: "UpdateExpirationForHITResponse"
  } as any;
};

const deserializeAws_json1_1UpdateHITReviewStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITReviewStatusResponse => {
  return {
    __type: "UpdateHITReviewStatusResponse"
  } as any;
};

const deserializeAws_json1_1UpdateHITTypeOfHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITTypeOfHITResponse => {
  return {
    __type: "UpdateHITTypeOfHITResponse"
  } as any;
};

const deserializeAws_json1_1UpdateNotificationSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationSettingsResponse => {
  return {
    __type: "UpdateNotificationSettingsResponse"
  } as any;
};

const deserializeAws_json1_1UpdateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): UpdateQualificationTypeResponse => {
  return {
    __type: "UpdateQualificationTypeResponse",
    QualificationType:
      output.QualificationType !== undefined &&
      output.QualificationType !== null
        ? deserializeAws_json1_1QualificationType(
            output.QualificationType,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1WorkerBlock = (
  output: any,
  context: __SerdeContext
): WorkerBlock => {
  return {
    __type: "WorkerBlock",
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined,
    WorkerId:
      output.WorkerId !== undefined && output.WorkerId !== null
        ? output.WorkerId
        : undefined
  } as any;
};

const deserializeAws_json1_1WorkerBlockList = (
  output: any,
  context: __SerdeContext
): WorkerBlock[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkerBlock(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
