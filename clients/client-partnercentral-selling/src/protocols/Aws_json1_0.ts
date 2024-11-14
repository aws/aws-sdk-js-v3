// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
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

import { AssignOpportunityCommandInput, AssignOpportunityCommandOutput } from "../commands/AssignOpportunityCommand";
import {
  AssociateOpportunityCommandInput,
  AssociateOpportunityCommandOutput,
} from "../commands/AssociateOpportunityCommand";
import { CreateOpportunityCommandInput, CreateOpportunityCommandOutput } from "../commands/CreateOpportunityCommand";
import {
  DisassociateOpportunityCommandInput,
  DisassociateOpportunityCommandOutput,
} from "../commands/DisassociateOpportunityCommand";
import {
  GetAwsOpportunitySummaryCommandInput,
  GetAwsOpportunitySummaryCommandOutput,
} from "../commands/GetAwsOpportunitySummaryCommand";
import {
  GetEngagementInvitationCommandInput,
  GetEngagementInvitationCommandOutput,
} from "../commands/GetEngagementInvitationCommand";
import { GetOpportunityCommandInput, GetOpportunityCommandOutput } from "../commands/GetOpportunityCommand";
import {
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "../commands/ListEngagementInvitationsCommand";
import { ListOpportunitiesCommandInput, ListOpportunitiesCommandOutput } from "../commands/ListOpportunitiesCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "../commands/ListSolutionsCommand";
import {
  RejectEngagementInvitationCommandInput,
  RejectEngagementInvitationCommandOutput,
} from "../commands/RejectEngagementInvitationCommand";
import {
  StartEngagementByAcceptingInvitationTaskCommandInput,
  StartEngagementByAcceptingInvitationTaskCommandOutput,
} from "../commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  StartEngagementFromOpportunityTaskCommandInput,
  StartEngagementFromOpportunityTaskCommandOutput,
} from "../commands/StartEngagementFromOpportunityTaskCommand";
import { UpdateOpportunityCommandInput, UpdateOpportunityCommandOutput } from "../commands/UpdateOpportunityCommand";
import {
  AccessDeniedException,
  Account,
  Address,
  AssigneeContact,
  AssignOpportunityRequest,
  AssociateOpportunityRequest,
  AwsOpportunityLifeCycle,
  AwsSubmission,
  Channel,
  ConflictException,
  Contact,
  CreateOpportunityRequest,
  CreateOpportunityResponse,
  Customer,
  DeliveryModel,
  DisassociateOpportunityRequest,
  EngagementInvitationPayloadType,
  EngagementInvitationSummary,
  ExpectedCustomerSpend,
  GetAwsOpportunitySummaryRequest,
  GetAwsOpportunitySummaryResponse,
  GetEngagementInvitationRequest,
  GetEngagementInvitationResponse,
  GetOpportunityRequest,
  GetOpportunityResponse,
  InternalServerException,
  LastModifiedDate,
  LifeCycle,
  ListEngagementInvitationsRequest,
  ListEngagementInvitationsResponse,
  ListOpportunitiesRequest,
  ListOpportunitiesResponse,
  ListSolutionsRequest,
  ListSolutionsResponse,
  Marketing,
  MonetaryValue,
  NextStepsHistory,
  OpportunityEngagementInvitationSort,
  OpportunitySort,
  OpportunitySummary,
  PrimaryNeedFromAws,
  ProfileNextStepsHistory,
  Project,
  RejectEngagementInvitationRequest,
  ResourceNotFoundException,
  ReviewStatus,
  SalesActivity,
  ServiceQuotaExceededException,
  SoftwareRevenue,
  SolutionBase,
  SolutionSort,
  SolutionStatus,
  Stage,
  StartEngagementByAcceptingInvitationTaskRequest,
  StartEngagementByAcceptingInvitationTaskResponse,
  StartEngagementFromOpportunityTaskRequest,
  StartEngagementFromOpportunityTaskResponse,
  ThrottlingException,
  UpdateOpportunityRequest,
  UpdateOpportunityResponse,
  ValidationException,
} from "../models/models_0";
import { PartnerCentralSellingServiceException as __BaseException } from "../models/PartnerCentralSellingServiceException";

/**
 * serializeAws_json1_0AssignOpportunityCommand
 */
export const se_AssignOpportunityCommand = async (
  input: AssignOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0AssociateOpportunityCommand
 */
export const se_AssociateOpportunityCommand = async (
  input: AssociateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateOpportunityCommand
 */
export const se_CreateOpportunityCommand = async (
  input: CreateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOpportunity");
  let body: any;
  body = JSON.stringify(se_CreateOpportunityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateOpportunityCommand
 */
export const se_DisassociateOpportunityCommand = async (
  input: DisassociateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAwsOpportunitySummaryCommand
 */
export const se_GetAwsOpportunitySummaryCommand = async (
  input: GetAwsOpportunitySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAwsOpportunitySummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEngagementInvitationCommand
 */
export const se_GetEngagementInvitationCommand = async (
  input: GetEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEngagementInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetOpportunityCommand
 */
export const se_GetOpportunityCommand = async (
  input: GetOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementInvitationsCommand
 */
export const se_ListEngagementInvitationsCommand = async (
  input: ListEngagementInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementInvitations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOpportunitiesCommand
 */
export const se_ListOpportunitiesCommand = async (
  input: ListOpportunitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpportunities");
  let body: any;
  body = JSON.stringify(se_ListOpportunitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSolutionsCommand
 */
export const se_ListSolutionsCommand = async (
  input: ListSolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSolutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RejectEngagementInvitationCommand
 */
export const se_RejectEngagementInvitationCommand = async (
  input: RejectEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectEngagementInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartEngagementByAcceptingInvitationTaskCommand
 */
export const se_StartEngagementByAcceptingInvitationTaskCommand = async (
  input: StartEngagementByAcceptingInvitationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEngagementByAcceptingInvitationTask");
  let body: any;
  body = JSON.stringify(se_StartEngagementByAcceptingInvitationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartEngagementFromOpportunityTaskCommand
 */
export const se_StartEngagementFromOpportunityTaskCommand = async (
  input: StartEngagementFromOpportunityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEngagementFromOpportunityTask");
  let body: any;
  body = JSON.stringify(se_StartEngagementFromOpportunityTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateOpportunityCommand
 */
export const se_UpdateOpportunityCommand = async (
  input: UpdateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOpportunity");
  let body: any;
  body = JSON.stringify(se_UpdateOpportunityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssignOpportunityCommand
 */
export const de_AssignOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0AssociateOpportunityCommand
 */
export const de_AssociateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateOpportunityCommand
 */
export const de_CreateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOpportunityResponse(data, context);
  const response: CreateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateOpportunityCommand
 */
export const de_DisassociateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAwsOpportunitySummaryCommand
 */
export const de_GetAwsOpportunitySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAwsOpportunitySummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAwsOpportunitySummaryResponse(data, context);
  const response: GetAwsOpportunitySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEngagementInvitationCommand
 */
export const de_GetEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEngagementInvitationResponse(data, context);
  const response: GetEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetOpportunityCommand
 */
export const de_GetOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpportunityResponse(data, context);
  const response: GetOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementInvitationsCommand
 */
export const de_ListEngagementInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementInvitationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementInvitationsResponse(data, context);
  const response: ListEngagementInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListOpportunitiesCommand
 */
export const de_ListOpportunitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpportunitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpportunitiesResponse(data, context);
  const response: ListOpportunitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSolutionsCommand
 */
export const de_ListSolutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSolutionsResponse(data, context);
  const response: ListSolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RejectEngagementInvitationCommand
 */
export const de_RejectEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RejectEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0StartEngagementByAcceptingInvitationTaskCommand
 */
export const de_StartEngagementByAcceptingInvitationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementByAcceptingInvitationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartEngagementByAcceptingInvitationTaskResponse(data, context);
  const response: StartEngagementByAcceptingInvitationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartEngagementFromOpportunityTaskCommand
 */
export const de_StartEngagementFromOpportunityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementFromOpportunityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartEngagementFromOpportunityTaskResponse(data, context);
  const response: StartEngagementFromOpportunityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateOpportunityCommand
 */
export const de_UpdateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateOpportunityResponse(data, context);
  const response: UpdateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.partnercentralselling#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.partnercentralselling#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.partnercentralselling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.partnercentralselling#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.partnercentralselling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.partnercentralselling#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.partnercentralselling#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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

// se_Account omitted.

// se_Address omitted.

// se_ApnPrograms omitted.

// se_AssigneeContact omitted.

// se_AssignOpportunityRequest omitted.

// se_AssociateOpportunityRequest omitted.

// se_AwsSubmission omitted.

// se_Channels omitted.

// se_Contact omitted.

/**
 * serializeAws_json1_0CreateOpportunityRequest
 */
const se_CreateOpportunityRequest = (input: CreateOpportunityRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Customer: _json,
    LifeCycle: (_) => se_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: [],
    OpportunityTeam: _json,
    OpportunityType: [],
    Origin: [],
    PartnerOpportunityIdentifier: [],
    PrimaryNeedsFromAws: _json,
    Project: _json,
    SoftwareRevenue: _json,
  });
};

// se_Customer omitted.

// se_CustomerContactsList omitted.

// se_DeliveryModels omitted.

// se_DisassociateOpportunityRequest omitted.

// se_EngagementInvitationsPayloadType omitted.

// se_ExpectedCustomerSpend omitted.

// se_ExpectedCustomerSpendList omitted.

// se_FilterIdentifier omitted.

// se_FilterLifeCycleReviewStatus omitted.

// se_FilterLifeCycleStage omitted.

// se_FilterStatus omitted.

// se_GetAwsOpportunitySummaryRequest omitted.

// se_GetEngagementInvitationRequest omitted.

// se_GetOpportunityRequest omitted.

/**
 * serializeAws_json1_0LastModifiedDate
 */
const se_LastModifiedDate = (input: LastModifiedDate, context: __SerdeContext): any => {
  return take(input, {
    AfterLastModifiedDate: __serializeDateTime,
    BeforeLastModifiedDate: __serializeDateTime,
  });
};

/**
 * serializeAws_json1_0LifeCycle
 */
const se_LifeCycle = (input: LifeCycle, context: __SerdeContext): any => {
  return take(input, {
    ClosedLostReason: [],
    NextSteps: [],
    NextStepsHistory: (_) => se_NextStepsHistories(_, context),
    ReviewComments: [],
    ReviewStatus: [],
    ReviewStatusReason: [],
    Stage: [],
    TargetCloseDate: [],
  });
};

// se_ListEngagementInvitationsRequest omitted.

/**
 * serializeAws_json1_0ListOpportunitiesRequest
 */
const se_ListOpportunitiesRequest = (input: ListOpportunitiesRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    CustomerCompanyName: _json,
    Identifier: _json,
    LastModifiedDate: (_) => se_LastModifiedDate(_, context),
    LifeCycleReviewStatus: _json,
    LifeCycleStage: _json,
    MaxResults: [],
    NextToken: [],
    Sort: _json,
  });
};

// se_ListSolutionsRequest omitted.

// se_Marketing omitted.

// se_MonetaryValue omitted.

/**
 * serializeAws_json1_0NextStepsHistories
 */
const se_NextStepsHistories = (input: NextStepsHistory[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NextStepsHistory(entry, context);
    });
};

/**
 * serializeAws_json1_0NextStepsHistory
 */
const se_NextStepsHistory = (input: NextStepsHistory, context: __SerdeContext): any => {
  return take(input, {
    Time: __serializeDateTime,
    Value: [],
  });
};

// se_OpportunityEngagementInvitationSort omitted.

// se_OpportunitySort omitted.

// se_PartnerOpportunityTeamMembersList omitted.

// se_PrimaryNeedsFromAws omitted.

// se_Project omitted.

// se_RejectEngagementInvitationRequest omitted.

// se_SalesActivities omitted.

// se_SoftwareRevenue omitted.

// se_SolutionIdentifiers omitted.

// se_SolutionSort omitted.

/**
 * serializeAws_json1_0StartEngagementByAcceptingInvitationTaskRequest
 */
const se_StartEngagementByAcceptingInvitationTaskRequest = (
  input: StartEngagementByAcceptingInvitationTaskRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
  });
};

/**
 * serializeAws_json1_0StartEngagementFromOpportunityTaskRequest
 */
const se_StartEngagementFromOpportunityTaskRequest = (
  input: StartEngagementFromOpportunityTaskRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AwsSubmission: _json,
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
  });
};

// se_StringList omitted.

/**
 * serializeAws_json1_0UpdateOpportunityRequest
 */
const se_UpdateOpportunityRequest = (input: UpdateOpportunityRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    Customer: _json,
    Identifier: [],
    LastModifiedDate: __serializeDateTime,
    LifeCycle: (_) => se_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: [],
    OpportunityType: [],
    PartnerOpportunityIdentifier: [],
    PrimaryNeedsFromAws: _json,
    Project: _json,
    SoftwareRevenue: _json,
  });
};

// se_UseCases omitted.

// de_AccessDeniedException omitted.

// de_Account omitted.

// de_AccountReceiver omitted.

// de_AccountSummary omitted.

// de_Address omitted.

// de_AddressSummary omitted.

// de_ApnPrograms omitted.

// de_AwsMarketplaceOfferIdentifiers omitted.

// de_AwsOpportunityCustomer omitted.

// de_AwsOpportunityInsights omitted.

/**
 * deserializeAws_json1_0AwsOpportunityLifeCycle
 */
const de_AwsOpportunityLifeCycle = (output: any, context: __SerdeContext): AwsOpportunityLifeCycle => {
  return take(output, {
    ClosedLostReason: __expectString,
    NextSteps: __expectString,
    NextStepsHistory: (_: any) => de_ProfileNextStepsHistories(_, context),
    Stage: __expectString,
    TargetCloseDate: __expectString,
  }) as any;
};

// de_AwsOpportunityProject omitted.

// de_AwsOpportunityRelatedEntities omitted.

// de_AwsOpportunityTeamMembersList omitted.

// de_AwsProductIdentifiers omitted.

// de_AwsTeamMember omitted.

// de_Channels omitted.

// de_ConflictException omitted.

// de_Contact omitted.

/**
 * deserializeAws_json1_0CreateOpportunityResponse
 */
const de_CreateOpportunityResponse = (output: any, context: __SerdeContext): CreateOpportunityResponse => {
  return take(output, {
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PartnerOpportunityIdentifier: __expectString,
  }) as any;
};

// de_Customer omitted.

// de_CustomerContactsList omitted.

// de_CustomerSummary omitted.

// de_DeliveryModels omitted.

// de_EngagementCustomer omitted.

/**
 * deserializeAws_json1_0EngagementInvitationSummaries
 */
const de_EngagementInvitationSummaries = (output: any, context: __SerdeContext): EngagementInvitationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EngagementInvitationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EngagementInvitationSummary
 */
const de_EngagementInvitationSummary = (output: any, context: __SerdeContext): EngagementInvitationSummary => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    EngagementTitle: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    InvitationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PayloadType: __expectString,
    Receiver: (_: any) => _json(__expectUnion(_)),
    SenderAwsAccountId: __expectString,
    SenderCompanyName: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ExpectedCustomerSpend omitted.

// de_ExpectedCustomerSpendList omitted.

/**
 * deserializeAws_json1_0GetAwsOpportunitySummaryResponse
 */
const de_GetAwsOpportunitySummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAwsOpportunitySummaryResponse => {
  return take(output, {
    Catalog: __expectString,
    Customer: _json,
    Insights: _json,
    InvolvementType: __expectString,
    InvolvementTypeChangeReason: __expectString,
    LifeCycle: (_: any) => de_AwsOpportunityLifeCycle(_, context),
    OpportunityTeam: _json,
    Origin: __expectString,
    Project: _json,
    RelatedEntityIds: _json,
    RelatedOpportunityId: __expectString,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEngagementInvitationResponse
 */
const de_GetEngagementInvitationResponse = (output: any, context: __SerdeContext): GetEngagementInvitationResponse => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    EngagementTitle: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    InvitationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Payload: (_: any) => _json(__expectUnion(_)),
    PayloadType: __expectString,
    Receiver: (_: any) => _json(__expectUnion(_)),
    RejectionReason: __expectString,
    SenderAwsAccountId: __expectString,
    SenderCompanyName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetOpportunityResponse
 */
const de_GetOpportunityResponse = (output: any, context: __SerdeContext): GetOpportunityResponse => {
  return take(output, {
    Catalog: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Customer: _json,
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LifeCycle: (_: any) => de_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: __expectString,
    OpportunityTeam: _json,
    OpportunityType: __expectString,
    PartnerOpportunityIdentifier: __expectString,
    PrimaryNeedsFromAws: _json,
    Project: _json,
    RelatedEntityIdentifiers: _json,
    SoftwareRevenue: _json,
  }) as any;
};

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0LifeCycle
 */
const de_LifeCycle = (output: any, context: __SerdeContext): LifeCycle => {
  return take(output, {
    ClosedLostReason: __expectString,
    NextSteps: __expectString,
    NextStepsHistory: (_: any) => de_NextStepsHistories(_, context),
    ReviewComments: __expectString,
    ReviewStatus: __expectString,
    ReviewStatusReason: __expectString,
    Stage: __expectString,
    TargetCloseDate: __expectString,
  }) as any;
};

// de_LifeCycleSummary omitted.

/**
 * deserializeAws_json1_0ListEngagementInvitationsResponse
 */
const de_ListEngagementInvitationsResponse = (
  output: any,
  context: __SerdeContext
): ListEngagementInvitationsResponse => {
  return take(output, {
    EngagementInvitationSummaries: (_: any) => de_EngagementInvitationSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListOpportunitiesResponse
 */
const de_ListOpportunitiesResponse = (output: any, context: __SerdeContext): ListOpportunitiesResponse => {
  return take(output, {
    NextToken: __expectString,
    OpportunitySummaries: (_: any) => de_OpportunitySummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListSolutionsResponse
 */
const de_ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return take(output, {
    NextToken: __expectString,
    SolutionSummaries: (_: any) => de_SolutionList(_, context),
  }) as any;
};

// de_Marketing omitted.

// de_MonetaryValue omitted.

/**
 * deserializeAws_json1_0NextStepsHistories
 */
const de_NextStepsHistories = (output: any, context: __SerdeContext): NextStepsHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NextStepsHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0NextStepsHistory
 */
const de_NextStepsHistory = (output: any, context: __SerdeContext): NextStepsHistory => {
  return take(output, {
    Time: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Value: __expectString,
  }) as any;
};

// de_OpportunityInvitationPayload omitted.

/**
 * deserializeAws_json1_0OpportunitySummaries
 */
const de_OpportunitySummaries = (output: any, context: __SerdeContext): OpportunitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpportunitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OpportunitySummary
 */
const de_OpportunitySummary = (output: any, context: __SerdeContext): OpportunitySummary => {
  return take(output, {
    Catalog: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Customer: _json,
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LifeCycle: _json,
    OpportunityType: __expectString,
    PartnerOpportunityIdentifier: __expectString,
    Project: _json,
  }) as any;
};

// de_PartnerOpportunityTeamMembersList omitted.

// de_Payload omitted.

// de_PrimaryNeedsFromAws omitted.

/**
 * deserializeAws_json1_0ProfileNextStepsHistories
 */
const de_ProfileNextStepsHistories = (output: any, context: __SerdeContext): ProfileNextStepsHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileNextStepsHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProfileNextStepsHistory
 */
const de_ProfileNextStepsHistory = (output: any, context: __SerdeContext): ProfileNextStepsHistory => {
  return take(output, {
    Time: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Value: __expectString,
  }) as any;
};

// de_Project omitted.

// de_ProjectDetails omitted.

// de_ProjectSummary omitted.

// de_Receiver omitted.

// de_ReceiverResponsibilityList omitted.

// de_RelatedEntityIdentifiers omitted.

// de_ResourceNotFoundException omitted.

// de_SalesActivities omitted.

// de_SenderContact omitted.

// de_SenderContactList omitted.

// de_ServiceQuotaExceededException omitted.

// de_SoftwareRevenue omitted.

/**
 * deserializeAws_json1_0SolutionBase
 */
const de_SolutionBase = (output: any, context: __SerdeContext): SolutionBase => {
  return take(output, {
    Catalog: __expectString,
    Category: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_SolutionIdentifiers omitted.

/**
 * deserializeAws_json1_0SolutionList
 */
const de_SolutionList = (output: any, context: __SerdeContext): SolutionBase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SolutionBase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StartEngagementByAcceptingInvitationTaskResponse
 */
const de_StartEngagementByAcceptingInvitationTaskResponse = (
  output: any,
  context: __SerdeContext
): StartEngagementByAcceptingInvitationTaskResponse => {
  return take(output, {
    EngagementInvitationId: __expectString,
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0StartEngagementFromOpportunityTaskResponse
 */
const de_StartEngagementFromOpportunityTaskResponse = (
  output: any,
  context: __SerdeContext
): StartEngagementFromOpportunityTaskResponse => {
  return take(output, {
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0UpdateOpportunityResponse
 */
const de_UpdateOpportunityResponse = (output: any, context: __SerdeContext): UpdateOpportunityResponse => {
  return take(output, {
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_UseCases omitted.

// de_ValidationException omitted.

// de_ValidationExceptionError omitted.

// de_ValidationExceptionErrorList omitted.

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
    "x-amz-target": `AWSPartnerCentralSelling.${operation}`,
  };
}
