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

export async function serializeAws_json1_1AcceptQualificationRequestCommand(
  input: AcceptQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.AcceptQualificationRequest";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcceptQualificationRequestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ApproveAssignmentCommand(
  input: ApproveAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ApproveAssignment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ApproveAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateQualificationWithWorkerCommand(
  input: AssociateQualificationWithWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(
  input: CreateAdditionalAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateHITCommand(
  input: CreateHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateHIT";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateHITTypeCommand(
  input: CreateHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateHITType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHITTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateHITWithHITTypeCommand(
  input: CreateHITWithHITTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.CreateHITWithHITType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHITWithHITTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateQualificationTypeCommand(
  input: CreateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.CreateQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateWorkerBlockCommand(
  input: CreateWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateWorkerBlock";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWorkerBlockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteHITCommand(
  input: DeleteHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.DeleteHIT";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteQualificationTypeCommand(
  input: DeleteQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.DeleteQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteWorkerBlockCommand(
  input: DeleteWorkerBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.DeleteWorkerBlock";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWorkerBlockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateQualificationFromWorkerCommand(
  input: DisassociateQualificationFromWorkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateQualificationFromWorkerRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAccountBalanceCommand(
  input: GetAccountBalanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetAccountBalance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAccountBalanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAssignmentCommand(
  input: GetAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetAssignment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetFileUploadURLCommand(
  input: GetFileUploadURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetFileUploadURL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFileUploadURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetHITCommand(
  input: GetHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetHIT";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetHITRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetQualificationScoreCommand(
  input: GetQualificationScoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.GetQualificationScore";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQualificationScoreRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetQualificationTypeCommand(
  input: GetQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.GetQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssignmentsForHITCommand(
  input: ListAssignmentsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListAssignmentsForHIT";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssignmentsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListBonusPaymentsCommand(
  input: ListBonusPaymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListBonusPayments";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBonusPaymentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListHITsCommand(
  input: ListHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListHITs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHITsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListHITsForQualificationTypeCommand(
  input: ListHITsForQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListHITsForQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListQualificationRequestsCommand(
  input: ListQualificationRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListQualificationRequests";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQualificationRequestsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListQualificationTypesCommand(
  input: ListQualificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListQualificationTypes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQualificationTypesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListReviewPolicyResultsForHITCommand(
  input: ListReviewPolicyResultsForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListReviewableHITsCommand(
  input: ListReviewableHITsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListReviewableHITs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListReviewableHITsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListWorkerBlocksCommand(
  input: ListWorkerBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListWorkerBlocks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkerBlocksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListWorkersWithQualificationTypeCommand(
  input: ListWorkersWithQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1NotifyWorkersCommand(
  input: NotifyWorkersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.NotifyWorkers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyWorkersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RejectAssignmentCommand(
  input: RejectAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.RejectAssignment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RejectAssignmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RejectQualificationRequestCommand(
  input: RejectQualificationRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.RejectQualificationRequest";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RejectQualificationRequestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SendBonusCommand(
  input: SendBonusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.SendBonus";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendBonusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SendTestEventNotificationCommand(
  input: SendTestEventNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.SendTestEventNotification";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SendTestEventNotificationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateExpirationForHITCommand(
  input: UpdateExpirationForHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.UpdateExpirationForHIT";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateExpirationForHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateHITReviewStatusCommand(
  input: UpdateHITReviewStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.UpdateHITReviewStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateHITReviewStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateHITTypeOfHITCommand(
  input: UpdateHITTypeOfHITCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateNotificationSettingsCommand(
  input: UpdateNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.UpdateNotificationSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNotificationSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateQualificationTypeCommand(
  input: UpdateQualificationTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MTurkRequesterServiceV20170117.UpdateQualificationType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateQualificationTypeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AcceptQualificationRequestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> {
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
}

async function deserializeAws_json1_1AcceptQualificationRequestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptQualificationRequestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ApproveAssignmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> {
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
}

async function deserializeAws_json1_1ApproveAssignmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveAssignmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AssociateQualificationWithWorkerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateQualificationWithWorkerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> {
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
}

async function deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdditionalAssignmentsForHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> {
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
}

async function deserializeAws_json1_1CreateHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateHITTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateHITTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateHITWithHITTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateHITWithHITTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHITWithHITTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateWorkerBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> {
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
}

async function deserializeAws_json1_1CreateWorkerBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkerBlockCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteWorkerBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteWorkerBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkerBlockCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateQualificationFromWorkerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetAccountBalanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> {
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
}

async function deserializeAws_json1_1GetAccountBalanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountBalanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetAssignmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> {
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
}

async function deserializeAws_json1_1GetAssignmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssignmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetFileUploadURLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> {
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
}

async function deserializeAws_json1_1GetFileUploadURLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileUploadURLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> {
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
}

async function deserializeAws_json1_1GetHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetQualificationScoreCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> {
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
}

async function deserializeAws_json1_1GetQualificationScoreCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationScoreCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1GetQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListAssignmentsForHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> {
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
}

async function deserializeAws_json1_1ListAssignmentsForHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssignmentsForHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListBonusPaymentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> {
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
}

async function deserializeAws_json1_1ListBonusPaymentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBonusPaymentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListHITsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> {
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
}

async function deserializeAws_json1_1ListHITsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListHITsForQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1ListHITsForQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHITsForQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListQualificationRequestsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> {
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
}

async function deserializeAws_json1_1ListQualificationRequestsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationRequestsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListQualificationTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> {
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
}

async function deserializeAws_json1_1ListQualificationTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQualificationTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListReviewPolicyResultsForHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> {
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
}

async function deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewPolicyResultsForHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListReviewableHITsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> {
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
}

async function deserializeAws_json1_1ListReviewableHITsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewableHITsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListWorkerBlocksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> {
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
}

async function deserializeAws_json1_1ListWorkerBlocksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkerBlocksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListWorkersWithQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkersWithQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1NotifyWorkersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> {
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
}

async function deserializeAws_json1_1NotifyWorkersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyWorkersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RejectAssignmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> {
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
}

async function deserializeAws_json1_1RejectAssignmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAssignmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RejectQualificationRequestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> {
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
}

async function deserializeAws_json1_1RejectQualificationRequestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectQualificationRequestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SendBonusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> {
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
}

async function deserializeAws_json1_1SendBonusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendBonusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SendTestEventNotificationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> {
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
}

async function deserializeAws_json1_1SendTestEventNotificationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTestEventNotificationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateExpirationForHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateExpirationForHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExpirationForHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateHITReviewStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateHITReviewStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITReviewStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateHITTypeOfHITCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateHITTypeOfHITCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHITTypeOfHITCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateNotificationSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateNotificationSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateQualificationTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateQualificationTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQualificationTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "RequestError":
    case "com.amazonaws.services.mturk.requester.model#RequestError":
      response = {
        ...(await deserializeAws_json1_1RequestErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceFault":
    case "com.amazonaws.services.mturk.requester.model#ServiceFault":
      response = {
        ...(await deserializeAws_json1_1ServiceFaultResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.IntegerValue !== undefined) {
    bodyParams["IntegerValue"] = input.IntegerValue;
  }
  if (input.QualificationRequestId !== undefined) {
    bodyParams["QualificationRequestId"] = input.QualificationRequestId;
  }
  return bodyParams;
};

const serializeAws_json1_1ApproveAssignmentRequest = (
  input: ApproveAssignmentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  if (input.OverrideRejection !== undefined) {
    bodyParams["OverrideRejection"] = input.OverrideRejection;
  }
  if (input.RequesterFeedback !== undefined) {
    bodyParams["RequesterFeedback"] = input.RequesterFeedback;
  }
  return bodyParams;
};

const serializeAws_json1_1AssignmentStatusList = (
  input: Array<AssignmentStatus | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AssociateQualificationWithWorkerRequest = (
  input: AssociateQualificationWithWorkerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IntegerValue !== undefined) {
    bodyParams["IntegerValue"] = input.IntegerValue;
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.SendNotification !== undefined) {
    bodyParams["SendNotification"] = input.SendNotification;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = (
  input: CreateAdditionalAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.NumberOfAdditionalAssignments !== undefined) {
    bodyParams["NumberOfAdditionalAssignments"] =
      input.NumberOfAdditionalAssignments;
  }
  if (input.UniqueRequestToken !== undefined) {
    bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHITRequest = (
  input: CreateHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentDurationInSeconds !== undefined) {
    bodyParams["AssignmentDurationInSeconds"] =
      input.AssignmentDurationInSeconds;
  }
  if (input.AssignmentReviewPolicy !== undefined) {
    bodyParams["AssignmentReviewPolicy"] = serializeAws_json1_1ReviewPolicy(
      input.AssignmentReviewPolicy,
      context
    );
  }
  if (input.AutoApprovalDelayInSeconds !== undefined) {
    bodyParams["AutoApprovalDelayInSeconds"] = input.AutoApprovalDelayInSeconds;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.HITLayoutId !== undefined) {
    bodyParams["HITLayoutId"] = input.HITLayoutId;
  }
  if (input.HITLayoutParameters !== undefined) {
    bodyParams[
      "HITLayoutParameters"
    ] = serializeAws_json1_1HITLayoutParameterList(
      input.HITLayoutParameters,
      context
    );
  }
  if (input.HITReviewPolicy !== undefined) {
    bodyParams["HITReviewPolicy"] = serializeAws_json1_1ReviewPolicy(
      input.HITReviewPolicy,
      context
    );
  }
  if (input.Keywords !== undefined) {
    bodyParams["Keywords"] = input.Keywords;
  }
  if (input.LifetimeInSeconds !== undefined) {
    bodyParams["LifetimeInSeconds"] = input.LifetimeInSeconds;
  }
  if (input.MaxAssignments !== undefined) {
    bodyParams["MaxAssignments"] = input.MaxAssignments;
  }
  if (input.QualificationRequirements !== undefined) {
    bodyParams[
      "QualificationRequirements"
    ] = serializeAws_json1_1QualificationRequirementList(
      input.QualificationRequirements,
      context
    );
  }
  if (input.Question !== undefined) {
    bodyParams["Question"] = input.Question;
  }
  if (input.RequesterAnnotation !== undefined) {
    bodyParams["RequesterAnnotation"] = input.RequesterAnnotation;
  }
  if (input.Reward !== undefined) {
    bodyParams["Reward"] = input.Reward;
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  if (input.UniqueRequestToken !== undefined) {
    bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHITTypeRequest = (
  input: CreateHITTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentDurationInSeconds !== undefined) {
    bodyParams["AssignmentDurationInSeconds"] =
      input.AssignmentDurationInSeconds;
  }
  if (input.AutoApprovalDelayInSeconds !== undefined) {
    bodyParams["AutoApprovalDelayInSeconds"] = input.AutoApprovalDelayInSeconds;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Keywords !== undefined) {
    bodyParams["Keywords"] = input.Keywords;
  }
  if (input.QualificationRequirements !== undefined) {
    bodyParams[
      "QualificationRequirements"
    ] = serializeAws_json1_1QualificationRequirementList(
      input.QualificationRequirements,
      context
    );
  }
  if (input.Reward !== undefined) {
    bodyParams["Reward"] = input.Reward;
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHITWithHITTypeRequest = (
  input: CreateHITWithHITTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentReviewPolicy !== undefined) {
    bodyParams["AssignmentReviewPolicy"] = serializeAws_json1_1ReviewPolicy(
      input.AssignmentReviewPolicy,
      context
    );
  }
  if (input.HITLayoutId !== undefined) {
    bodyParams["HITLayoutId"] = input.HITLayoutId;
  }
  if (input.HITLayoutParameters !== undefined) {
    bodyParams[
      "HITLayoutParameters"
    ] = serializeAws_json1_1HITLayoutParameterList(
      input.HITLayoutParameters,
      context
    );
  }
  if (input.HITReviewPolicy !== undefined) {
    bodyParams["HITReviewPolicy"] = serializeAws_json1_1ReviewPolicy(
      input.HITReviewPolicy,
      context
    );
  }
  if (input.HITTypeId !== undefined) {
    bodyParams["HITTypeId"] = input.HITTypeId;
  }
  if (input.LifetimeInSeconds !== undefined) {
    bodyParams["LifetimeInSeconds"] = input.LifetimeInSeconds;
  }
  if (input.MaxAssignments !== undefined) {
    bodyParams["MaxAssignments"] = input.MaxAssignments;
  }
  if (input.Question !== undefined) {
    bodyParams["Question"] = input.Question;
  }
  if (input.RequesterAnnotation !== undefined) {
    bodyParams["RequesterAnnotation"] = input.RequesterAnnotation;
  }
  if (input.UniqueRequestToken !== undefined) {
    bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateQualificationTypeRequest = (
  input: CreateQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AnswerKey !== undefined) {
    bodyParams["AnswerKey"] = input.AnswerKey;
  }
  if (input.AutoGranted !== undefined) {
    bodyParams["AutoGranted"] = input.AutoGranted;
  }
  if (input.AutoGrantedValue !== undefined) {
    bodyParams["AutoGrantedValue"] = input.AutoGrantedValue;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Keywords !== undefined) {
    bodyParams["Keywords"] = input.Keywords;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.QualificationTypeStatus !== undefined) {
    bodyParams["QualificationTypeStatus"] = input.QualificationTypeStatus;
  }
  if (input.RetryDelayInSeconds !== undefined) {
    bodyParams["RetryDelayInSeconds"] = input.RetryDelayInSeconds;
  }
  if (input.Test !== undefined) {
    bodyParams["Test"] = input.Test;
  }
  if (input.TestDurationInSeconds !== undefined) {
    bodyParams["TestDurationInSeconds"] = input.TestDurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateWorkerBlockRequest = (
  input: CreateWorkerBlockRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1CustomerIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeleteHITRequest = (
  input: DeleteHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteQualificationTypeRequest = (
  input: DeleteQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteWorkerBlockRequest = (
  input: DeleteWorkerBlockRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateQualificationFromWorkerRequest = (
  input: DisassociateQualificationFromWorkerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1EventTypeList = (
  input: Array<EventType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetAccountBalanceRequest = (
  input: GetAccountBalanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetAssignmentRequest = (
  input: GetAssignmentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetFileUploadURLRequest = (
  input: GetFileUploadURLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  if (input.QuestionIdentifier !== undefined) {
    bodyParams["QuestionIdentifier"] = input.QuestionIdentifier;
  }
  return bodyParams;
};

const serializeAws_json1_1GetHITRequest = (
  input: GetHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetQualificationScoreRequest = (
  input: GetQualificationScoreRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetQualificationTypeRequest = (
  input: GetQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  return bodyParams;
};

const serializeAws_json1_1HITLayoutParameter = (
  input: HITLayoutParameter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1HITLayoutParameterList = (
  input: Array<HITLayoutParameter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1HITLayoutParameter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1IntegerList = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListAssignmentsForHITRequest = (
  input: ListAssignmentsForHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentStatuses !== undefined) {
    bodyParams["AssignmentStatuses"] = serializeAws_json1_1AssignmentStatusList(
      input.AssignmentStatuses,
      context
    );
  }
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListBonusPaymentsRequest = (
  input: ListBonusPaymentsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListHITsForQualificationTypeRequest = (
  input: ListHITsForQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListHITsRequest = (
  input: ListHITsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListQualificationRequestsRequest = (
  input: ListQualificationRequestsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListQualificationTypesRequest = (
  input: ListQualificationTypesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.MustBeOwnedByCaller !== undefined) {
    bodyParams["MustBeOwnedByCaller"] = input.MustBeOwnedByCaller;
  }
  if (input.MustBeRequestable !== undefined) {
    bodyParams["MustBeRequestable"] = input.MustBeRequestable;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Query !== undefined) {
    bodyParams["Query"] = input.Query;
  }
  return bodyParams;
};

const serializeAws_json1_1ListReviewPolicyResultsForHITRequest = (
  input: ListReviewPolicyResultsForHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PolicyLevels !== undefined) {
    bodyParams["PolicyLevels"] = serializeAws_json1_1ReviewPolicyLevelList(
      input.PolicyLevels,
      context
    );
  }
  if (input.RetrieveActions !== undefined) {
    bodyParams["RetrieveActions"] = input.RetrieveActions;
  }
  if (input.RetrieveResults !== undefined) {
    bodyParams["RetrieveResults"] = input.RetrieveResults;
  }
  return bodyParams;
};

const serializeAws_json1_1ListReviewableHITsRequest = (
  input: ListReviewableHITsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITTypeId !== undefined) {
    bodyParams["HITTypeId"] = input.HITTypeId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1ListWorkerBlocksRequest = (
  input: ListWorkerBlocksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListWorkersWithQualificationTypeRequest = (
  input: ListWorkersWithQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1Locale = (
  input: Locale,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Country !== undefined) {
    bodyParams["Country"] = input.Country;
  }
  if (input.Subdivision !== undefined) {
    bodyParams["Subdivision"] = input.Subdivision;
  }
  return bodyParams;
};

const serializeAws_json1_1LocaleList = (
  input: Array<Locale>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Locale(entry, context));
  }
  return contents;
};

const serializeAws_json1_1NotificationSpecification = (
  input: NotificationSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["Destination"] = input.Destination;
  }
  if (input.EventTypes !== undefined) {
    bodyParams["EventTypes"] = serializeAws_json1_1EventTypeList(
      input.EventTypes,
      context
    );
  }
  if (input.Transport !== undefined) {
    bodyParams["Transport"] = input.Transport;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  return bodyParams;
};

const serializeAws_json1_1NotifyWorkersRequest = (
  input: NotifyWorkersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MessageText !== undefined) {
    bodyParams["MessageText"] = input.MessageText;
  }
  if (input.Subject !== undefined) {
    bodyParams["Subject"] = input.Subject;
  }
  if (input.WorkerIds !== undefined) {
    bodyParams["WorkerIds"] = serializeAws_json1_1CustomerIdList(
      input.WorkerIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterMapEntry = (
  input: ParameterMapEntry,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1StringList(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterMapEntryList = (
  input: Array<ParameterMapEntry>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ParameterMapEntry(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PolicyParameter = (
  input: PolicyParameter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.MapEntries !== undefined) {
    bodyParams["MapEntries"] = serializeAws_json1_1ParameterMapEntryList(
      input.MapEntries,
      context
    );
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1StringList(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PolicyParameterList = (
  input: Array<PolicyParameter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PolicyParameter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1QualificationRequirement = (
  input: QualificationRequirement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ActionsGuarded !== undefined) {
    bodyParams["ActionsGuarded"] = input.ActionsGuarded;
  }
  if (input.Comparator !== undefined) {
    bodyParams["Comparator"] = input.Comparator;
  }
  if (input.IntegerValues !== undefined) {
    bodyParams["IntegerValues"] = serializeAws_json1_1IntegerList(
      input.IntegerValues,
      context
    );
  }
  if (input.LocaleValues !== undefined) {
    bodyParams["LocaleValues"] = serializeAws_json1_1LocaleList(
      input.LocaleValues,
      context
    );
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.RequiredToPreview !== undefined) {
    bodyParams["RequiredToPreview"] = input.RequiredToPreview;
  }
  return bodyParams;
};

const serializeAws_json1_1QualificationRequirementList = (
  input: Array<QualificationRequirement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1QualificationRequirement(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RejectAssignmentRequest = (
  input: RejectAssignmentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  if (input.RequesterFeedback !== undefined) {
    bodyParams["RequesterFeedback"] = input.RequesterFeedback;
  }
  return bodyParams;
};

const serializeAws_json1_1RejectQualificationRequestRequest = (
  input: RejectQualificationRequestRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QualificationRequestId !== undefined) {
    bodyParams["QualificationRequestId"] = input.QualificationRequestId;
  }
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  return bodyParams;
};

const serializeAws_json1_1ReviewPolicy = (
  input: ReviewPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_json1_1PolicyParameterList(
      input.Parameters,
      context
    );
  }
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  return bodyParams;
};

const serializeAws_json1_1ReviewPolicyLevelList = (
  input: Array<ReviewPolicyLevel | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SendBonusRequest = (
  input: SendBonusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AssignmentId !== undefined) {
    bodyParams["AssignmentId"] = input.AssignmentId;
  }
  if (input.BonusAmount !== undefined) {
    bodyParams["BonusAmount"] = input.BonusAmount;
  }
  if (input.Reason !== undefined) {
    bodyParams["Reason"] = input.Reason;
  }
  if (input.UniqueRequestToken !== undefined) {
    bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
  }
  if (input.WorkerId !== undefined) {
    bodyParams["WorkerId"] = input.WorkerId;
  }
  return bodyParams;
};

const serializeAws_json1_1SendTestEventNotificationRequest = (
  input: SendTestEventNotificationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1NotificationSpecification(
      input.Notification,
      context
    );
  }
  if (input.TestEventType !== undefined) {
    bodyParams["TestEventType"] = input.TestEventType;
  }
  return bodyParams;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UpdateExpirationForHITRequest = (
  input: UpdateExpirationForHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExpireAt !== undefined) {
    bodyParams["ExpireAt"] = Math.round(input.ExpireAt.getTime() / 1000);
  }
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateHITReviewStatusRequest = (
  input: UpdateHITReviewStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.Revert !== undefined) {
    bodyParams["Revert"] = input.Revert;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateHITTypeOfHITRequest = (
  input: UpdateHITTypeOfHITRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HITId !== undefined) {
    bodyParams["HITId"] = input.HITId;
  }
  if (input.HITTypeId !== undefined) {
    bodyParams["HITTypeId"] = input.HITTypeId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateNotificationSettingsRequest = (
  input: UpdateNotificationSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Active !== undefined) {
    bodyParams["Active"] = input.Active;
  }
  if (input.HITTypeId !== undefined) {
    bodyParams["HITTypeId"] = input.HITTypeId;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1NotificationSpecification(
      input.Notification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateQualificationTypeRequest = (
  input: UpdateQualificationTypeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AnswerKey !== undefined) {
    bodyParams["AnswerKey"] = input.AnswerKey;
  }
  if (input.AutoGranted !== undefined) {
    bodyParams["AutoGranted"] = input.AutoGranted;
  }
  if (input.AutoGrantedValue !== undefined) {
    bodyParams["AutoGrantedValue"] = input.AutoGrantedValue;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.QualificationTypeId !== undefined) {
    bodyParams["QualificationTypeId"] = input.QualificationTypeId;
  }
  if (input.QualificationTypeStatus !== undefined) {
    bodyParams["QualificationTypeStatus"] = input.QualificationTypeStatus;
  }
  if (input.RetryDelayInSeconds !== undefined) {
    bodyParams["RetryDelayInSeconds"] = input.RetryDelayInSeconds;
  }
  if (input.Test !== undefined) {
    bodyParams["Test"] = input.Test;
  }
  if (input.TestDurationInSeconds !== undefined) {
    bodyParams["TestDurationInSeconds"] = input.TestDurationInSeconds;
  }
  return bodyParams;
};

const deserializeAws_json1_1AcceptQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): AcceptQualificationRequestResponse => {
  let contents: any = {
    __type: "AcceptQualificationRequestResponse"
  };
  return contents;
};

const deserializeAws_json1_1ApproveAssignmentResponse = (
  output: any,
  context: __SerdeContext
): ApproveAssignmentResponse => {
  let contents: any = {
    __type: "ApproveAssignmentResponse"
  };
  return contents;
};

const deserializeAws_json1_1Assignment = (
  output: any,
  context: __SerdeContext
): Assignment => {
  let contents: any = {
    __type: "Assignment",
    AcceptTime: undefined,
    Answer: undefined,
    ApprovalTime: undefined,
    AssignmentId: undefined,
    AssignmentStatus: undefined,
    AutoApprovalTime: undefined,
    Deadline: undefined,
    HITId: undefined,
    RejectionTime: undefined,
    RequesterFeedback: undefined,
    SubmitTime: undefined,
    WorkerId: undefined
  };
  if (output.AcceptTime !== undefined && output.AcceptTime !== null) {
    contents.AcceptTime = new Date(Math.round(output.AcceptTime * 1000));
  }
  if (output.Answer !== undefined && output.Answer !== null) {
    contents.Answer = output.Answer;
  }
  if (output.ApprovalTime !== undefined && output.ApprovalTime !== null) {
    contents.ApprovalTime = new Date(Math.round(output.ApprovalTime * 1000));
  }
  if (output.AssignmentId !== undefined && output.AssignmentId !== null) {
    contents.AssignmentId = output.AssignmentId;
  }
  if (
    output.AssignmentStatus !== undefined &&
    output.AssignmentStatus !== null
  ) {
    contents.AssignmentStatus = output.AssignmentStatus;
  }
  if (
    output.AutoApprovalTime !== undefined &&
    output.AutoApprovalTime !== null
  ) {
    contents.AutoApprovalTime = new Date(
      Math.round(output.AutoApprovalTime * 1000)
    );
  }
  if (output.Deadline !== undefined && output.Deadline !== null) {
    contents.Deadline = new Date(Math.round(output.Deadline * 1000));
  }
  if (output.HITId !== undefined && output.HITId !== null) {
    contents.HITId = output.HITId;
  }
  if (output.RejectionTime !== undefined && output.RejectionTime !== null) {
    contents.RejectionTime = new Date(Math.round(output.RejectionTime * 1000));
  }
  if (
    output.RequesterFeedback !== undefined &&
    output.RequesterFeedback !== null
  ) {
    contents.RequesterFeedback = output.RequesterFeedback;
  }
  if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
    contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1AssignmentList = (
  output: any,
  context: __SerdeContext
): Array<Assignment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Assignment(entry, context)
  );
};

const deserializeAws_json1_1AssociateQualificationWithWorkerResponse = (
  output: any,
  context: __SerdeContext
): AssociateQualificationWithWorkerResponse => {
  let contents: any = {
    __type: "AssociateQualificationWithWorkerResponse"
  };
  return contents;
};

const deserializeAws_json1_1BonusPayment = (
  output: any,
  context: __SerdeContext
): BonusPayment => {
  let contents: any = {
    __type: "BonusPayment",
    AssignmentId: undefined,
    BonusAmount: undefined,
    GrantTime: undefined,
    Reason: undefined,
    WorkerId: undefined
  };
  if (output.AssignmentId !== undefined && output.AssignmentId !== null) {
    contents.AssignmentId = output.AssignmentId;
  }
  if (output.BonusAmount !== undefined && output.BonusAmount !== null) {
    contents.BonusAmount = output.BonusAmount;
  }
  if (output.GrantTime !== undefined && output.GrantTime !== null) {
    contents.GrantTime = new Date(Math.round(output.GrantTime * 1000));
  }
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1BonusPaymentList = (
  output: any,
  context: __SerdeContext
): Array<BonusPayment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BonusPayment(entry, context)
  );
};

const deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): CreateAdditionalAssignmentsForHITResponse => {
  let contents: any = {
    __type: "CreateAdditionalAssignmentsForHITResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateHITResponse = (
  output: any,
  context: __SerdeContext
): CreateHITResponse => {
  let contents: any = {
    __type: "CreateHITResponse",
    HIT: undefined
  };
  if (output.HIT !== undefined && output.HIT !== null) {
    contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateHITTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateHITTypeResponse => {
  let contents: any = {
    __type: "CreateHITTypeResponse",
    HITTypeId: undefined
  };
  if (output.HITTypeId !== undefined && output.HITTypeId !== null) {
    contents.HITTypeId = output.HITTypeId;
  }
  return contents;
};

const deserializeAws_json1_1CreateHITWithHITTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateHITWithHITTypeResponse => {
  let contents: any = {
    __type: "CreateHITWithHITTypeResponse",
    HIT: undefined
  };
  if (output.HIT !== undefined && output.HIT !== null) {
    contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateQualificationTypeResponse => {
  let contents: any = {
    __type: "CreateQualificationTypeResponse",
    QualificationType: undefined
  };
  if (
    output.QualificationType !== undefined &&
    output.QualificationType !== null
  ) {
    contents.QualificationType = deserializeAws_json1_1QualificationType(
      output.QualificationType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): CreateWorkerBlockResponse => {
  let contents: any = {
    __type: "CreateWorkerBlockResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteHITResponse = (
  output: any,
  context: __SerdeContext
): DeleteHITResponse => {
  let contents: any = {
    __type: "DeleteHITResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): DeleteQualificationTypeResponse => {
  let contents: any = {
    __type: "DeleteQualificationTypeResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteWorkerBlockResponse = (
  output: any,
  context: __SerdeContext
): DeleteWorkerBlockResponse => {
  let contents: any = {
    __type: "DeleteWorkerBlockResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = (
  output: any,
  context: __SerdeContext
): DisassociateQualificationFromWorkerResponse => {
  let contents: any = {
    __type: "DisassociateQualificationFromWorkerResponse"
  };
  return contents;
};

const deserializeAws_json1_1GetAccountBalanceResponse = (
  output: any,
  context: __SerdeContext
): GetAccountBalanceResponse => {
  let contents: any = {
    __type: "GetAccountBalanceResponse",
    AvailableBalance: undefined,
    OnHoldBalance: undefined
  };
  if (
    output.AvailableBalance !== undefined &&
    output.AvailableBalance !== null
  ) {
    contents.AvailableBalance = output.AvailableBalance;
  }
  if (output.OnHoldBalance !== undefined && output.OnHoldBalance !== null) {
    contents.OnHoldBalance = output.OnHoldBalance;
  }
  return contents;
};

const deserializeAws_json1_1GetAssignmentResponse = (
  output: any,
  context: __SerdeContext
): GetAssignmentResponse => {
  let contents: any = {
    __type: "GetAssignmentResponse",
    Assignment: undefined,
    HIT: undefined
  };
  if (output.Assignment !== undefined && output.Assignment !== null) {
    contents.Assignment = deserializeAws_json1_1Assignment(
      output.Assignment,
      context
    );
  }
  if (output.HIT !== undefined && output.HIT !== null) {
    contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
  }
  return contents;
};

const deserializeAws_json1_1GetFileUploadURLResponse = (
  output: any,
  context: __SerdeContext
): GetFileUploadURLResponse => {
  let contents: any = {
    __type: "GetFileUploadURLResponse",
    FileUploadURL: undefined
  };
  if (output.FileUploadURL !== undefined && output.FileUploadURL !== null) {
    contents.FileUploadURL = output.FileUploadURL;
  }
  return contents;
};

const deserializeAws_json1_1GetHITResponse = (
  output: any,
  context: __SerdeContext
): GetHITResponse => {
  let contents: any = {
    __type: "GetHITResponse",
    HIT: undefined
  };
  if (output.HIT !== undefined && output.HIT !== null) {
    contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
  }
  return contents;
};

const deserializeAws_json1_1GetQualificationScoreResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationScoreResponse => {
  let contents: any = {
    __type: "GetQualificationScoreResponse",
    Qualification: undefined
  };
  if (output.Qualification !== undefined && output.Qualification !== null) {
    contents.Qualification = deserializeAws_json1_1Qualification(
      output.Qualification,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): GetQualificationTypeResponse => {
  let contents: any = {
    __type: "GetQualificationTypeResponse",
    QualificationType: undefined
  };
  if (
    output.QualificationType !== undefined &&
    output.QualificationType !== null
  ) {
    contents.QualificationType = deserializeAws_json1_1QualificationType(
      output.QualificationType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HIT = (
  output: any,
  context: __SerdeContext
): HIT => {
  let contents: any = {
    __type: "HIT",
    AssignmentDurationInSeconds: undefined,
    AutoApprovalDelayInSeconds: undefined,
    CreationTime: undefined,
    Description: undefined,
    Expiration: undefined,
    HITGroupId: undefined,
    HITId: undefined,
    HITLayoutId: undefined,
    HITReviewStatus: undefined,
    HITStatus: undefined,
    HITTypeId: undefined,
    Keywords: undefined,
    MaxAssignments: undefined,
    NumberOfAssignmentsAvailable: undefined,
    NumberOfAssignmentsCompleted: undefined,
    NumberOfAssignmentsPending: undefined,
    QualificationRequirements: undefined,
    Question: undefined,
    RequesterAnnotation: undefined,
    Reward: undefined,
    Title: undefined
  };
  if (
    output.AssignmentDurationInSeconds !== undefined &&
    output.AssignmentDurationInSeconds !== null
  ) {
    contents.AssignmentDurationInSeconds = output.AssignmentDurationInSeconds;
  }
  if (
    output.AutoApprovalDelayInSeconds !== undefined &&
    output.AutoApprovalDelayInSeconds !== null
  ) {
    contents.AutoApprovalDelayInSeconds = output.AutoApprovalDelayInSeconds;
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Expiration !== undefined && output.Expiration !== null) {
    contents.Expiration = new Date(Math.round(output.Expiration * 1000));
  }
  if (output.HITGroupId !== undefined && output.HITGroupId !== null) {
    contents.HITGroupId = output.HITGroupId;
  }
  if (output.HITId !== undefined && output.HITId !== null) {
    contents.HITId = output.HITId;
  }
  if (output.HITLayoutId !== undefined && output.HITLayoutId !== null) {
    contents.HITLayoutId = output.HITLayoutId;
  }
  if (output.HITReviewStatus !== undefined && output.HITReviewStatus !== null) {
    contents.HITReviewStatus = output.HITReviewStatus;
  }
  if (output.HITStatus !== undefined && output.HITStatus !== null) {
    contents.HITStatus = output.HITStatus;
  }
  if (output.HITTypeId !== undefined && output.HITTypeId !== null) {
    contents.HITTypeId = output.HITTypeId;
  }
  if (output.Keywords !== undefined && output.Keywords !== null) {
    contents.Keywords = output.Keywords;
  }
  if (output.MaxAssignments !== undefined && output.MaxAssignments !== null) {
    contents.MaxAssignments = output.MaxAssignments;
  }
  if (
    output.NumberOfAssignmentsAvailable !== undefined &&
    output.NumberOfAssignmentsAvailable !== null
  ) {
    contents.NumberOfAssignmentsAvailable = output.NumberOfAssignmentsAvailable;
  }
  if (
    output.NumberOfAssignmentsCompleted !== undefined &&
    output.NumberOfAssignmentsCompleted !== null
  ) {
    contents.NumberOfAssignmentsCompleted = output.NumberOfAssignmentsCompleted;
  }
  if (
    output.NumberOfAssignmentsPending !== undefined &&
    output.NumberOfAssignmentsPending !== null
  ) {
    contents.NumberOfAssignmentsPending = output.NumberOfAssignmentsPending;
  }
  if (
    output.QualificationRequirements !== undefined &&
    output.QualificationRequirements !== null
  ) {
    contents.QualificationRequirements = deserializeAws_json1_1QualificationRequirementList(
      output.QualificationRequirements,
      context
    );
  }
  if (output.Question !== undefined && output.Question !== null) {
    contents.Question = output.Question;
  }
  if (
    output.RequesterAnnotation !== undefined &&
    output.RequesterAnnotation !== null
  ) {
    contents.RequesterAnnotation = output.RequesterAnnotation;
  }
  if (output.Reward !== undefined && output.Reward !== null) {
    contents.Reward = output.Reward;
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = output.Title;
  }
  return contents;
};

const deserializeAws_json1_1HITList = (
  output: any,
  context: __SerdeContext
): Array<HIT> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HIT(entry, context)
  );
};

const deserializeAws_json1_1IntegerList = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListAssignmentsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListAssignmentsForHITResponse => {
  let contents: any = {
    __type: "ListAssignmentsForHITResponse",
    Assignments: undefined,
    NextToken: undefined,
    NumResults: undefined
  };
  if (output.Assignments !== undefined && output.Assignments !== null) {
    contents.Assignments = deserializeAws_json1_1AssignmentList(
      output.Assignments,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  return contents;
};

const deserializeAws_json1_1ListBonusPaymentsResponse = (
  output: any,
  context: __SerdeContext
): ListBonusPaymentsResponse => {
  let contents: any = {
    __type: "ListBonusPaymentsResponse",
    BonusPayments: undefined,
    NextToken: undefined,
    NumResults: undefined
  };
  if (output.BonusPayments !== undefined && output.BonusPayments !== null) {
    contents.BonusPayments = deserializeAws_json1_1BonusPaymentList(
      output.BonusPayments,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  return contents;
};

const deserializeAws_json1_1ListHITsForQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListHITsForQualificationTypeResponse => {
  let contents: any = {
    __type: "ListHITsForQualificationTypeResponse",
    HITs: undefined,
    NextToken: undefined,
    NumResults: undefined
  };
  if (output.HITs !== undefined && output.HITs !== null) {
    contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  return contents;
};

const deserializeAws_json1_1ListHITsResponse = (
  output: any,
  context: __SerdeContext
): ListHITsResponse => {
  let contents: any = {
    __type: "ListHITsResponse",
    HITs: undefined,
    NextToken: undefined,
    NumResults: undefined
  };
  if (output.HITs !== undefined && output.HITs !== null) {
    contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  return contents;
};

const deserializeAws_json1_1ListQualificationRequestsResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationRequestsResponse => {
  let contents: any = {
    __type: "ListQualificationRequestsResponse",
    NextToken: undefined,
    NumResults: undefined,
    QualificationRequests: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  if (
    output.QualificationRequests !== undefined &&
    output.QualificationRequests !== null
  ) {
    contents.QualificationRequests = deserializeAws_json1_1QualificationRequestList(
      output.QualificationRequests,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListQualificationTypesResponse = (
  output: any,
  context: __SerdeContext
): ListQualificationTypesResponse => {
  let contents: any = {
    __type: "ListQualificationTypesResponse",
    NextToken: undefined,
    NumResults: undefined,
    QualificationTypes: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  if (
    output.QualificationTypes !== undefined &&
    output.QualificationTypes !== null
  ) {
    contents.QualificationTypes = deserializeAws_json1_1QualificationTypeList(
      output.QualificationTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = (
  output: any,
  context: __SerdeContext
): ListReviewPolicyResultsForHITResponse => {
  let contents: any = {
    __type: "ListReviewPolicyResultsForHITResponse",
    AssignmentReviewPolicy: undefined,
    AssignmentReviewReport: undefined,
    HITId: undefined,
    HITReviewPolicy: undefined,
    HITReviewReport: undefined,
    NextToken: undefined
  };
  if (
    output.AssignmentReviewPolicy !== undefined &&
    output.AssignmentReviewPolicy !== null
  ) {
    contents.AssignmentReviewPolicy = deserializeAws_json1_1ReviewPolicy(
      output.AssignmentReviewPolicy,
      context
    );
  }
  if (
    output.AssignmentReviewReport !== undefined &&
    output.AssignmentReviewReport !== null
  ) {
    contents.AssignmentReviewReport = deserializeAws_json1_1ReviewReport(
      output.AssignmentReviewReport,
      context
    );
  }
  if (output.HITId !== undefined && output.HITId !== null) {
    contents.HITId = output.HITId;
  }
  if (output.HITReviewPolicy !== undefined && output.HITReviewPolicy !== null) {
    contents.HITReviewPolicy = deserializeAws_json1_1ReviewPolicy(
      output.HITReviewPolicy,
      context
    );
  }
  if (output.HITReviewReport !== undefined && output.HITReviewReport !== null) {
    contents.HITReviewReport = deserializeAws_json1_1ReviewReport(
      output.HITReviewReport,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListReviewableHITsResponse = (
  output: any,
  context: __SerdeContext
): ListReviewableHITsResponse => {
  let contents: any = {
    __type: "ListReviewableHITsResponse",
    HITs: undefined,
    NextToken: undefined,
    NumResults: undefined
  };
  if (output.HITs !== undefined && output.HITs !== null) {
    contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  return contents;
};

const deserializeAws_json1_1ListWorkerBlocksResponse = (
  output: any,
  context: __SerdeContext
): ListWorkerBlocksResponse => {
  let contents: any = {
    __type: "ListWorkerBlocksResponse",
    NextToken: undefined,
    NumResults: undefined,
    WorkerBlocks: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  if (output.WorkerBlocks !== undefined && output.WorkerBlocks !== null) {
    contents.WorkerBlocks = deserializeAws_json1_1WorkerBlockList(
      output.WorkerBlocks,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): ListWorkersWithQualificationTypeResponse => {
  let contents: any = {
    __type: "ListWorkersWithQualificationTypeResponse",
    NextToken: undefined,
    NumResults: undefined,
    Qualifications: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.NumResults !== undefined && output.NumResults !== null) {
    contents.NumResults = output.NumResults;
  }
  if (output.Qualifications !== undefined && output.Qualifications !== null) {
    contents.Qualifications = deserializeAws_json1_1QualificationList(
      output.Qualifications,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Locale = (
  output: any,
  context: __SerdeContext
): Locale => {
  let contents: any = {
    __type: "Locale",
    Country: undefined,
    Subdivision: undefined
  };
  if (output.Country !== undefined && output.Country !== null) {
    contents.Country = output.Country;
  }
  if (output.Subdivision !== undefined && output.Subdivision !== null) {
    contents.Subdivision = output.Subdivision;
  }
  return contents;
};

const deserializeAws_json1_1LocaleList = (
  output: any,
  context: __SerdeContext
): Array<Locale> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Locale(entry, context)
  );
};

const deserializeAws_json1_1NotifyWorkersFailureStatus = (
  output: any,
  context: __SerdeContext
): NotifyWorkersFailureStatus => {
  let contents: any = {
    __type: "NotifyWorkersFailureStatus",
    NotifyWorkersFailureCode: undefined,
    NotifyWorkersFailureMessage: undefined,
    WorkerId: undefined
  };
  if (
    output.NotifyWorkersFailureCode !== undefined &&
    output.NotifyWorkersFailureCode !== null
  ) {
    contents.NotifyWorkersFailureCode = output.NotifyWorkersFailureCode;
  }
  if (
    output.NotifyWorkersFailureMessage !== undefined &&
    output.NotifyWorkersFailureMessage !== null
  ) {
    contents.NotifyWorkersFailureMessage = output.NotifyWorkersFailureMessage;
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1NotifyWorkersFailureStatusList = (
  output: any,
  context: __SerdeContext
): Array<NotifyWorkersFailureStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context)
  );
};

const deserializeAws_json1_1NotifyWorkersResponse = (
  output: any,
  context: __SerdeContext
): NotifyWorkersResponse => {
  let contents: any = {
    __type: "NotifyWorkersResponse",
    NotifyWorkersFailureStatuses: undefined
  };
  if (
    output.NotifyWorkersFailureStatuses !== undefined &&
    output.NotifyWorkersFailureStatuses !== null
  ) {
    contents.NotifyWorkersFailureStatuses = deserializeAws_json1_1NotifyWorkersFailureStatusList(
      output.NotifyWorkersFailureStatuses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ParameterMapEntry = (
  output: any,
  context: __SerdeContext
): ParameterMapEntry => {
  let contents: any = {
    __type: "ParameterMapEntry",
    Key: undefined,
    Values: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined && output.Values !== null) {
    contents.Values = deserializeAws_json1_1StringList(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1ParameterMapEntryList = (
  output: any,
  context: __SerdeContext
): Array<ParameterMapEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterMapEntry(entry, context)
  );
};

const deserializeAws_json1_1PolicyParameter = (
  output: any,
  context: __SerdeContext
): PolicyParameter => {
  let contents: any = {
    __type: "PolicyParameter",
    Key: undefined,
    MapEntries: undefined,
    Values: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.MapEntries !== undefined && output.MapEntries !== null) {
    contents.MapEntries = deserializeAws_json1_1ParameterMapEntryList(
      output.MapEntries,
      context
    );
  }
  if (output.Values !== undefined && output.Values !== null) {
    contents.Values = deserializeAws_json1_1StringList(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1PolicyParameterList = (
  output: any,
  context: __SerdeContext
): Array<PolicyParameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicyParameter(entry, context)
  );
};

const deserializeAws_json1_1Qualification = (
  output: any,
  context: __SerdeContext
): Qualification => {
  let contents: any = {
    __type: "Qualification",
    GrantTime: undefined,
    IntegerValue: undefined,
    LocaleValue: undefined,
    QualificationTypeId: undefined,
    Status: undefined,
    WorkerId: undefined
  };
  if (output.GrantTime !== undefined && output.GrantTime !== null) {
    contents.GrantTime = new Date(Math.round(output.GrantTime * 1000));
  }
  if (output.IntegerValue !== undefined && output.IntegerValue !== null) {
    contents.IntegerValue = output.IntegerValue;
  }
  if (output.LocaleValue !== undefined && output.LocaleValue !== null) {
    contents.LocaleValue = deserializeAws_json1_1Locale(
      output.LocaleValue,
      context
    );
  }
  if (
    output.QualificationTypeId !== undefined &&
    output.QualificationTypeId !== null
  ) {
    contents.QualificationTypeId = output.QualificationTypeId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1QualificationList = (
  output: any,
  context: __SerdeContext
): Array<Qualification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Qualification(entry, context)
  );
};

const deserializeAws_json1_1QualificationRequest = (
  output: any,
  context: __SerdeContext
): QualificationRequest => {
  let contents: any = {
    __type: "QualificationRequest",
    Answer: undefined,
    QualificationRequestId: undefined,
    QualificationTypeId: undefined,
    SubmitTime: undefined,
    Test: undefined,
    WorkerId: undefined
  };
  if (output.Answer !== undefined && output.Answer !== null) {
    contents.Answer = output.Answer;
  }
  if (
    output.QualificationRequestId !== undefined &&
    output.QualificationRequestId !== null
  ) {
    contents.QualificationRequestId = output.QualificationRequestId;
  }
  if (
    output.QualificationTypeId !== undefined &&
    output.QualificationTypeId !== null
  ) {
    contents.QualificationTypeId = output.QualificationTypeId;
  }
  if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
    contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
  }
  if (output.Test !== undefined && output.Test !== null) {
    contents.Test = output.Test;
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1QualificationRequestList = (
  output: any,
  context: __SerdeContext
): Array<QualificationRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationRequest(entry, context)
  );
};

const deserializeAws_json1_1QualificationRequirement = (
  output: any,
  context: __SerdeContext
): QualificationRequirement => {
  let contents: any = {
    __type: "QualificationRequirement",
    ActionsGuarded: undefined,
    Comparator: undefined,
    IntegerValues: undefined,
    LocaleValues: undefined,
    QualificationTypeId: undefined,
    RequiredToPreview: undefined
  };
  if (output.ActionsGuarded !== undefined && output.ActionsGuarded !== null) {
    contents.ActionsGuarded = output.ActionsGuarded;
  }
  if (output.Comparator !== undefined && output.Comparator !== null) {
    contents.Comparator = output.Comparator;
  }
  if (output.IntegerValues !== undefined && output.IntegerValues !== null) {
    contents.IntegerValues = deserializeAws_json1_1IntegerList(
      output.IntegerValues,
      context
    );
  }
  if (output.LocaleValues !== undefined && output.LocaleValues !== null) {
    contents.LocaleValues = deserializeAws_json1_1LocaleList(
      output.LocaleValues,
      context
    );
  }
  if (
    output.QualificationTypeId !== undefined &&
    output.QualificationTypeId !== null
  ) {
    contents.QualificationTypeId = output.QualificationTypeId;
  }
  if (
    output.RequiredToPreview !== undefined &&
    output.RequiredToPreview !== null
  ) {
    contents.RequiredToPreview = output.RequiredToPreview;
  }
  return contents;
};

const deserializeAws_json1_1QualificationRequirementList = (
  output: any,
  context: __SerdeContext
): Array<QualificationRequirement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationRequirement(entry, context)
  );
};

const deserializeAws_json1_1QualificationType = (
  output: any,
  context: __SerdeContext
): QualificationType => {
  let contents: any = {
    __type: "QualificationType",
    AnswerKey: undefined,
    AutoGranted: undefined,
    AutoGrantedValue: undefined,
    CreationTime: undefined,
    Description: undefined,
    IsRequestable: undefined,
    Keywords: undefined,
    Name: undefined,
    QualificationTypeId: undefined,
    QualificationTypeStatus: undefined,
    RetryDelayInSeconds: undefined,
    Test: undefined,
    TestDurationInSeconds: undefined
  };
  if (output.AnswerKey !== undefined && output.AnswerKey !== null) {
    contents.AnswerKey = output.AnswerKey;
  }
  if (output.AutoGranted !== undefined && output.AutoGranted !== null) {
    contents.AutoGranted = output.AutoGranted;
  }
  if (
    output.AutoGrantedValue !== undefined &&
    output.AutoGrantedValue !== null
  ) {
    contents.AutoGrantedValue = output.AutoGrantedValue;
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.IsRequestable !== undefined && output.IsRequestable !== null) {
    contents.IsRequestable = output.IsRequestable;
  }
  if (output.Keywords !== undefined && output.Keywords !== null) {
    contents.Keywords = output.Keywords;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.QualificationTypeId !== undefined &&
    output.QualificationTypeId !== null
  ) {
    contents.QualificationTypeId = output.QualificationTypeId;
  }
  if (
    output.QualificationTypeStatus !== undefined &&
    output.QualificationTypeStatus !== null
  ) {
    contents.QualificationTypeStatus = output.QualificationTypeStatus;
  }
  if (
    output.RetryDelayInSeconds !== undefined &&
    output.RetryDelayInSeconds !== null
  ) {
    contents.RetryDelayInSeconds = output.RetryDelayInSeconds;
  }
  if (output.Test !== undefined && output.Test !== null) {
    contents.Test = output.Test;
  }
  if (
    output.TestDurationInSeconds !== undefined &&
    output.TestDurationInSeconds !== null
  ) {
    contents.TestDurationInSeconds = output.TestDurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1QualificationTypeList = (
  output: any,
  context: __SerdeContext
): Array<QualificationType> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QualificationType(entry, context)
  );
};

const deserializeAws_json1_1RejectAssignmentResponse = (
  output: any,
  context: __SerdeContext
): RejectAssignmentResponse => {
  let contents: any = {
    __type: "RejectAssignmentResponse"
  };
  return contents;
};

const deserializeAws_json1_1RejectQualificationRequestResponse = (
  output: any,
  context: __SerdeContext
): RejectQualificationRequestResponse => {
  let contents: any = {
    __type: "RejectQualificationRequestResponse"
  };
  return contents;
};

const deserializeAws_json1_1ReviewActionDetail = (
  output: any,
  context: __SerdeContext
): ReviewActionDetail => {
  let contents: any = {
    __type: "ReviewActionDetail",
    ActionId: undefined,
    ActionName: undefined,
    CompleteTime: undefined,
    ErrorCode: undefined,
    Result: undefined,
    Status: undefined,
    TargetId: undefined,
    TargetType: undefined
  };
  if (output.ActionId !== undefined && output.ActionId !== null) {
    contents.ActionId = output.ActionId;
  }
  if (output.ActionName !== undefined && output.ActionName !== null) {
    contents.ActionName = output.ActionName;
  }
  if (output.CompleteTime !== undefined && output.CompleteTime !== null) {
    contents.CompleteTime = new Date(Math.round(output.CompleteTime * 1000));
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Result !== undefined && output.Result !== null) {
    contents.Result = output.Result;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.TargetId !== undefined && output.TargetId !== null) {
    contents.TargetId = output.TargetId;
  }
  if (output.TargetType !== undefined && output.TargetType !== null) {
    contents.TargetType = output.TargetType;
  }
  return contents;
};

const deserializeAws_json1_1ReviewActionDetailList = (
  output: any,
  context: __SerdeContext
): Array<ReviewActionDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReviewActionDetail(entry, context)
  );
};

const deserializeAws_json1_1ReviewPolicy = (
  output: any,
  context: __SerdeContext
): ReviewPolicy => {
  let contents: any = {
    __type: "ReviewPolicy",
    Parameters: undefined,
    PolicyName: undefined
  };
  if (output.Parameters !== undefined && output.Parameters !== null) {
    contents.Parameters = deserializeAws_json1_1PolicyParameterList(
      output.Parameters,
      context
    );
  }
  if (output.PolicyName !== undefined && output.PolicyName !== null) {
    contents.PolicyName = output.PolicyName;
  }
  return contents;
};

const deserializeAws_json1_1ReviewReport = (
  output: any,
  context: __SerdeContext
): ReviewReport => {
  let contents: any = {
    __type: "ReviewReport",
    ReviewActions: undefined,
    ReviewResults: undefined
  };
  if (output.ReviewActions !== undefined && output.ReviewActions !== null) {
    contents.ReviewActions = deserializeAws_json1_1ReviewActionDetailList(
      output.ReviewActions,
      context
    );
  }
  if (output.ReviewResults !== undefined && output.ReviewResults !== null) {
    contents.ReviewResults = deserializeAws_json1_1ReviewResultDetailList(
      output.ReviewResults,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ReviewResultDetail = (
  output: any,
  context: __SerdeContext
): ReviewResultDetail => {
  let contents: any = {
    __type: "ReviewResultDetail",
    ActionId: undefined,
    Key: undefined,
    QuestionId: undefined,
    SubjectId: undefined,
    SubjectType: undefined,
    Value: undefined
  };
  if (output.ActionId !== undefined && output.ActionId !== null) {
    contents.ActionId = output.ActionId;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.QuestionId !== undefined && output.QuestionId !== null) {
    contents.QuestionId = output.QuestionId;
  }
  if (output.SubjectId !== undefined && output.SubjectId !== null) {
    contents.SubjectId = output.SubjectId;
  }
  if (output.SubjectType !== undefined && output.SubjectType !== null) {
    contents.SubjectType = output.SubjectType;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ReviewResultDetailList = (
  output: any,
  context: __SerdeContext
): Array<ReviewResultDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReviewResultDetail(entry, context)
  );
};

const deserializeAws_json1_1SendBonusResponse = (
  output: any,
  context: __SerdeContext
): SendBonusResponse => {
  let contents: any = {
    __type: "SendBonusResponse"
  };
  return contents;
};

const deserializeAws_json1_1SendTestEventNotificationResponse = (
  output: any,
  context: __SerdeContext
): SendTestEventNotificationResponse => {
  let contents: any = {
    __type: "SendTestEventNotificationResponse"
  };
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1UpdateExpirationForHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateExpirationForHITResponse => {
  let contents: any = {
    __type: "UpdateExpirationForHITResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateHITReviewStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITReviewStatusResponse => {
  let contents: any = {
    __type: "UpdateHITReviewStatusResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateHITTypeOfHITResponse = (
  output: any,
  context: __SerdeContext
): UpdateHITTypeOfHITResponse => {
  let contents: any = {
    __type: "UpdateHITTypeOfHITResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateNotificationSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateNotificationSettingsResponse => {
  let contents: any = {
    __type: "UpdateNotificationSettingsResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateQualificationTypeResponse = (
  output: any,
  context: __SerdeContext
): UpdateQualificationTypeResponse => {
  let contents: any = {
    __type: "UpdateQualificationTypeResponse",
    QualificationType: undefined
  };
  if (
    output.QualificationType !== undefined &&
    output.QualificationType !== null
  ) {
    contents.QualificationType = deserializeAws_json1_1QualificationType(
      output.QualificationType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WorkerBlock = (
  output: any,
  context: __SerdeContext
): WorkerBlock => {
  let contents: any = {
    __type: "WorkerBlock",
    Reason: undefined,
    WorkerId: undefined
  };
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  if (output.WorkerId !== undefined && output.WorkerId !== null) {
    contents.WorkerId = output.WorkerId;
  }
  return contents;
};

const deserializeAws_json1_1WorkerBlockList = (
  output: any,
  context: __SerdeContext
): Array<WorkerBlock> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkerBlock(entry, context)
  );
};

const deserializeAws_json1_1RequestError = (
  output: any,
  context: __SerdeContext
): RequestError => {
  let contents: any = {
    __type: "RequestError",
    Message: undefined,
    TurkErrorCode: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.TurkErrorCode !== undefined && output.TurkErrorCode !== null) {
    contents.TurkErrorCode = output.TurkErrorCode;
  }
  return contents;
};

const deserializeAws_json1_1ServiceFault = (
  output: any,
  context: __SerdeContext
): ServiceFault => {
  let contents: any = {
    __type: "ServiceFault",
    Message: undefined,
    TurkErrorCode: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.TurkErrorCode !== undefined && output.TurkErrorCode !== null) {
    contents.TurkErrorCode = output.TurkErrorCode;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
