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
  limitedParseDouble as __limitedParseDouble,
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
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "../commands/AddAttributesToFindingsCommand";
import {
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "../commands/CreateAssessmentTargetCommand";
import {
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "../commands/CreateAssessmentTemplateCommand";
import {
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "../commands/CreateExclusionsPreviewCommand";
import {
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "../commands/CreateResourceGroupCommand";
import {
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "../commands/DeleteAssessmentRunCommand";
import {
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "../commands/DeleteAssessmentTargetCommand";
import {
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "../commands/DeleteAssessmentTemplateCommand";
import {
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "../commands/DescribeAssessmentRunsCommand";
import {
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "../commands/DescribeAssessmentTargetsCommand";
import {
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "../commands/DescribeAssessmentTemplatesCommand";
import {
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "../commands/DescribeCrossAccountAccessRoleCommand";
import { DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput } from "../commands/DescribeExclusionsCommand";
import { DescribeFindingsCommandInput, DescribeFindingsCommandOutput } from "../commands/DescribeFindingsCommand";
import {
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "../commands/DescribeResourceGroupsCommand";
import {
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "../commands/DescribeRulesPackagesCommand";
import {
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "../commands/GetAssessmentReportCommand";
import {
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "../commands/GetExclusionsPreviewCommand";
import {
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "../commands/GetTelemetryMetadataCommand";
import {
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "../commands/ListAssessmentRunAgentsCommand";
import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "../commands/ListAssessmentRunsCommand";
import {
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "../commands/ListAssessmentTargetsCommand";
import {
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand";
import {
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "../commands/ListEventSubscriptionsCommand";
import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "../commands/ListExclusionsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "../commands/ListRulesPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "../commands/PreviewAgentsCommand";
import {
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "../commands/RegisterCrossAccountAccessRoleCommand";
import {
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "../commands/RemoveAttributesFromFindingsCommand";
import { SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput } from "../commands/SetTagsForResourceCommand";
import { StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput } from "../commands/StartAssessmentRunCommand";
import { StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput } from "../commands/StopAssessmentRunCommand";
import { SubscribeToEventCommandInput, SubscribeToEventCommandOutput } from "../commands/SubscribeToEventCommand";
import {
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "../commands/UnsubscribeFromEventCommand";
import {
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "../commands/UpdateAssessmentTargetCommand";
import { InspectorServiceException as __BaseException } from "../models/InspectorServiceException";
import {
  AccessDeniedException,
  AddAttributesToFindingsRequest,
  AgentFilter,
  AgentHealth,
  AgentHealthCode,
  AgentsAlreadyRunningAssessmentException,
  AssessmentRun,
  AssessmentRunFilter,
  AssessmentRunInProgressException,
  AssessmentRunNotification,
  AssessmentRunState,
  AssessmentRunStateChange,
  AssessmentTarget,
  AssessmentTargetFilter,
  AssessmentTemplate,
  AssessmentTemplateFilter,
  Attribute,
  CreateAssessmentTargetRequest,
  CreateAssessmentTemplateRequest,
  CreateExclusionsPreviewRequest,
  CreateResourceGroupRequest,
  DeleteAssessmentRunRequest,
  DeleteAssessmentTargetRequest,
  DeleteAssessmentTemplateRequest,
  DescribeAssessmentRunsRequest,
  DescribeAssessmentRunsResponse,
  DescribeAssessmentTargetsRequest,
  DescribeAssessmentTargetsResponse,
  DescribeAssessmentTemplatesRequest,
  DescribeAssessmentTemplatesResponse,
  DescribeCrossAccountAccessRoleResponse,
  DescribeExclusionsRequest,
  DescribeFindingsRequest,
  DescribeFindingsResponse,
  DescribeResourceGroupsRequest,
  DescribeResourceGroupsResponse,
  DescribeRulesPackagesRequest,
  DurationRange,
  EventSubscription,
  Finding,
  FindingFilter,
  GetAssessmentReportRequest,
  GetExclusionsPreviewRequest,
  GetTelemetryMetadataRequest,
  InternalException,
  InvalidCrossAccountRoleException,
  InvalidInputException,
  LimitExceededException,
  ListAssessmentRunAgentsRequest,
  ListAssessmentRunsRequest,
  ListAssessmentTargetsRequest,
  ListAssessmentTemplatesRequest,
  ListEventSubscriptionsRequest,
  ListEventSubscriptionsResponse,
  ListExclusionsRequest,
  ListFindingsRequest,
  ListRulesPackagesRequest,
  ListTagsForResourceRequest,
  NoSuchEntityException,
  PreviewAgentsRequest,
  PreviewGenerationInProgressException,
  RegisterCrossAccountAccessRoleRequest,
  RemoveAttributesFromFindingsRequest,
  ResourceGroup,
  ResourceGroupTag,
  ServiceTemporarilyUnavailableException,
  SetTagsForResourceRequest,
  Severity,
  StartAssessmentRunRequest,
  StopAssessmentRunRequest,
  SubscribeToEventRequest,
  Subscription,
  Tag,
  TimestampRange,
  UnsubscribeFromEventRequest,
  UnsupportedFeatureException,
  UpdateAssessmentTargetRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddAttributesToFindingsCommand
 */
export const se_AddAttributesToFindingsCommand = async (
  input: AddAttributesToFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddAttributesToFindings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAssessmentTargetCommand
 */
export const se_CreateAssessmentTargetCommand = async (
  input: CreateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAssessmentTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAssessmentTemplateCommand
 */
export const se_CreateAssessmentTemplateCommand = async (
  input: CreateAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAssessmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExclusionsPreviewCommand
 */
export const se_CreateExclusionsPreviewCommand = async (
  input: CreateExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExclusionsPreview");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResourceGroupCommand
 */
export const se_CreateResourceGroupCommand = async (
  input: CreateResourceGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResourceGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssessmentRunCommand
 */
export const se_DeleteAssessmentRunCommand = async (
  input: DeleteAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssessmentTargetCommand
 */
export const se_DeleteAssessmentTargetCommand = async (
  input: DeleteAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssessmentTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssessmentTemplateCommand
 */
export const se_DeleteAssessmentTemplateCommand = async (
  input: DeleteAssessmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssessmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssessmentRunsCommand
 */
export const se_DescribeAssessmentRunsCommand = async (
  input: DescribeAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssessmentRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssessmentTargetsCommand
 */
export const se_DescribeAssessmentTargetsCommand = async (
  input: DescribeAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssessmentTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAssessmentTemplatesCommand
 */
export const se_DescribeAssessmentTemplatesCommand = async (
  input: DescribeAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAssessmentTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCrossAccountAccessRoleCommand
 */
export const se_DescribeCrossAccountAccessRoleCommand = async (
  input: DescribeCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCrossAccountAccessRole");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExclusionsCommand
 */
export const se_DescribeExclusionsCommand = async (
  input: DescribeExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExclusions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFindingsCommand
 */
export const se_DescribeFindingsCommand = async (
  input: DescribeFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFindings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourceGroupsCommand
 */
export const se_DescribeResourceGroupsCommand = async (
  input: DescribeResourceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourceGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRulesPackagesCommand
 */
export const se_DescribeRulesPackagesCommand = async (
  input: DescribeRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRulesPackages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAssessmentReportCommand
 */
export const se_GetAssessmentReportCommand = async (
  input: GetAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAssessmentReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExclusionsPreviewCommand
 */
export const se_GetExclusionsPreviewCommand = async (
  input: GetExclusionsPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExclusionsPreview");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTelemetryMetadataCommand
 */
export const se_GetTelemetryMetadataCommand = async (
  input: GetTelemetryMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTelemetryMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssessmentRunAgentsCommand
 */
export const se_ListAssessmentRunAgentsCommand = async (
  input: ListAssessmentRunAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssessmentRunAgents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssessmentRunsCommand
 */
export const se_ListAssessmentRunsCommand = async (
  input: ListAssessmentRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssessmentRuns");
  let body: any;
  body = JSON.stringify(se_ListAssessmentRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssessmentTargetsCommand
 */
export const se_ListAssessmentTargetsCommand = async (
  input: ListAssessmentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssessmentTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssessmentTemplatesCommand
 */
export const se_ListAssessmentTemplatesCommand = async (
  input: ListAssessmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssessmentTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventSubscriptionsCommand
 */
export const se_ListEventSubscriptionsCommand = async (
  input: ListEventSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventSubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExclusionsCommand
 */
export const se_ListExclusionsCommand = async (
  input: ListExclusionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExclusions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFindingsCommand
 */
export const se_ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFindings");
  let body: any;
  body = JSON.stringify(se_ListFindingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRulesPackagesCommand
 */
export const se_ListRulesPackagesCommand = async (
  input: ListRulesPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRulesPackages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
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
 * serializeAws_json1_1PreviewAgentsCommand
 */
export const se_PreviewAgentsCommand = async (
  input: PreviewAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PreviewAgents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterCrossAccountAccessRoleCommand
 */
export const se_RegisterCrossAccountAccessRoleCommand = async (
  input: RegisterCrossAccountAccessRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterCrossAccountAccessRole");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAttributesFromFindingsCommand
 */
export const se_RemoveAttributesFromFindingsCommand = async (
  input: RemoveAttributesFromFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveAttributesFromFindings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetTagsForResourceCommand
 */
export const se_SetTagsForResourceCommand = async (
  input: SetTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAssessmentRunCommand
 */
export const se_StartAssessmentRunCommand = async (
  input: StartAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAssessmentRunCommand
 */
export const se_StopAssessmentRunCommand = async (
  input: StopAssessmentRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAssessmentRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubscribeToEventCommand
 */
export const se_SubscribeToEventCommand = async (
  input: SubscribeToEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubscribeToEvent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnsubscribeFromEventCommand
 */
export const se_UnsubscribeFromEventCommand = async (
  input: UnsubscribeFromEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnsubscribeFromEvent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAssessmentTargetCommand
 */
export const se_UpdateAssessmentTargetCommand = async (
  input: UpdateAssessmentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAssessmentTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddAttributesToFindingsCommand
 */
export const de_AddAttributesToFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddAttributesToFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddAttributesToFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddAttributesToFindingsCommandError
 */
const de_AddAttributesToFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttributesToFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAssessmentTargetCommand
 */
export const de_CreateAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAssessmentTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAssessmentTargetCommandError
 */
const de_CreateAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      throw await de_InvalidCrossAccountRoleExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAssessmentTemplateCommand
 */
export const de_CreateAssessmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAssessmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAssessmentTemplateCommandError
 */
const de_CreateAssessmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateExclusionsPreviewCommand
 */
export const de_CreateExclusionsPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExclusionsPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateExclusionsPreviewCommandError
 */
const de_CreateExclusionsPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExclusionsPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PreviewGenerationInProgressException":
    case "com.amazonaws.inspector#PreviewGenerationInProgressException":
      throw await de_PreviewGenerationInProgressExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateResourceGroupCommand
 */
export const de_CreateResourceGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResourceGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResourceGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateResourceGroupCommandError
 */
const de_CreateResourceGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAssessmentRunCommand
 */
export const de_DeleteAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAssessmentRunCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAssessmentRunCommandError
 */
const de_DeleteAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      throw await de_AssessmentRunInProgressExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAssessmentTargetCommand
 */
export const de_DeleteAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAssessmentTargetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAssessmentTargetCommandError
 */
const de_DeleteAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      throw await de_AssessmentRunInProgressExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAssessmentTemplateCommand
 */
export const de_DeleteAssessmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAssessmentTemplateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAssessmentTemplateCommandError
 */
const de_DeleteAssessmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      throw await de_AssessmentRunInProgressExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAssessmentRunsCommand
 */
export const de_DescribeAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssessmentRunsResponse(data, context);
  const response: DescribeAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAssessmentRunsCommandError
 */
const de_DescribeAssessmentRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAssessmentTargetsCommand
 */
export const de_DescribeAssessmentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssessmentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssessmentTargetsResponse(data, context);
  const response: DescribeAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTargetsCommandError
 */
const de_DescribeAssessmentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAssessmentTemplatesCommand
 */
export const de_DescribeAssessmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAssessmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAssessmentTemplatesResponse(data, context);
  const response: DescribeAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTemplatesCommandError
 */
const de_DescribeAssessmentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssessmentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand
 */
export const de_DescribeCrossAccountAccessRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCrossAccountAccessRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCrossAccountAccessRoleResponse(data, context);
  const response: DescribeCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError
 */
const de_DescribeCrossAccountAccessRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCrossAccountAccessRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeExclusionsCommand
 */
export const de_DescribeExclusionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExclusionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExclusionsCommandError
 */
const de_DescribeExclusionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExclusionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeFindingsCommand
 */
export const de_DescribeFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFindingsResponse(data, context);
  const response: DescribeFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFindingsCommandError
 */
const de_DescribeFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeResourceGroupsCommand
 */
export const de_DescribeResourceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourceGroupsResponse(data, context);
  const response: DescribeResourceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeResourceGroupsCommandError
 */
const de_DescribeResourceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRulesPackagesCommand
 */
export const de_DescribeRulesPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRulesPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRulesPackagesCommandError
 */
const de_DescribeRulesPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRulesPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAssessmentReportCommand
 */
export const de_GetAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAssessmentReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAssessmentReportCommandError
 */
const de_GetAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AssessmentRunInProgressException":
    case "com.amazonaws.inspector#AssessmentRunInProgressException":
      throw await de_AssessmentRunInProgressExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "UnsupportedFeatureException":
    case "com.amazonaws.inspector#UnsupportedFeatureException":
      throw await de_UnsupportedFeatureExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetExclusionsPreviewCommand
 */
export const de_GetExclusionsPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExclusionsPreviewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetExclusionsPreviewCommandError
 */
const de_GetExclusionsPreviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExclusionsPreviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTelemetryMetadataCommand
 */
export const de_GetTelemetryMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTelemetryMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTelemetryMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTelemetryMetadataCommandError
 */
const de_GetTelemetryMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssessmentRunAgentsCommand
 */
export const de_ListAssessmentRunAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssessmentRunAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAssessmentRunAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssessmentRunAgentsCommandError
 */
const de_ListAssessmentRunAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssessmentRunsCommand
 */
export const de_ListAssessmentRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssessmentRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssessmentRunsCommandError
 */
const de_ListAssessmentRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssessmentTargetsCommand
 */
export const de_ListAssessmentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssessmentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssessmentTargetsCommandError
 */
const de_ListAssessmentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAssessmentTemplatesCommand
 */
export const de_ListAssessmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssessmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssessmentTemplatesCommandError
 */
const de_ListAssessmentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEventSubscriptionsCommand
 */
export const de_ListEventSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventSubscriptionsResponse(data, context);
  const response: ListEventSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEventSubscriptionsCommandError
 */
const de_ListEventSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListExclusionsCommand
 */
export const de_ListExclusionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExclusionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExclusionsCommandError
 */
const de_ListExclusionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExclusionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFindingsCommand
 */
export const de_ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFindingsCommandError
 */
const de_ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRulesPackagesCommand
 */
export const de_ListRulesPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRulesPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRulesPackagesCommandError
 */
const de_ListRulesPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PreviewAgentsCommand
 */
export const de_PreviewAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PreviewAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PreviewAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PreviewAgentsCommandError
 */
const de_PreviewAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      throw await de_InvalidCrossAccountRoleExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand
 */
export const de_RegisterCrossAccountAccessRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterCrossAccountAccessRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterCrossAccountAccessRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError
 */
const de_RegisterCrossAccountAccessRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCrossAccountAccessRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      throw await de_InvalidCrossAccountRoleExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveAttributesFromFindingsCommand
 */
export const de_RemoveAttributesFromFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveAttributesFromFindingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveAttributesFromFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveAttributesFromFindingsCommandError
 */
const de_RemoveAttributesFromFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesFromFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SetTagsForResourceCommand
 */
export const de_SetTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTagsForResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SetTagsForResourceCommandError
 */
const de_SetTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartAssessmentRunCommand
 */
export const de_StartAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAssessmentRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartAssessmentRunCommandError
 */
const de_StartAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AgentsAlreadyRunningAssessmentException":
    case "com.amazonaws.inspector#AgentsAlreadyRunningAssessmentException":
      throw await de_AgentsAlreadyRunningAssessmentExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidCrossAccountRoleException":
    case "com.amazonaws.inspector#InvalidCrossAccountRoleException":
      throw await de_InvalidCrossAccountRoleExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopAssessmentRunCommand
 */
export const de_StopAssessmentRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAssessmentRunCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopAssessmentRunCommandError
 */
const de_StopAssessmentRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAssessmentRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SubscribeToEventCommand
 */
export const de_SubscribeToEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubscribeToEventCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubscribeToEventCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SubscribeToEventCommandError
 */
const de_SubscribeToEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.inspector#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UnsubscribeFromEventCommand
 */
export const de_UnsubscribeFromEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnsubscribeFromEventCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeFromEventCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UnsubscribeFromEventCommandError
 */
const de_UnsubscribeFromEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAssessmentTargetCommand
 */
export const de_UpdateAssessmentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAssessmentTargetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAssessmentTargetCommandError
 */
const de_UpdateAssessmentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.inspector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.inspector#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.inspector#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntityException":
    case "com.amazonaws.inspector#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceTemporarilyUnavailableException":
    case "com.amazonaws.inspector#ServiceTemporarilyUnavailableException":
      throw await de_ServiceTemporarilyUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
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
 * deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionRes
 */
const de_AgentsAlreadyRunningAssessmentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AgentsAlreadyRunningAssessmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AgentsAlreadyRunningAssessmentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AssessmentRunInProgressExceptionRes
 */
const de_AssessmentRunInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AssessmentRunInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AssessmentRunInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCrossAccountRoleExceptionRes
 */
const de_InvalidCrossAccountRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCrossAccountRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCrossAccountRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchEntityExceptionRes
 */
const de_NoSuchEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NoSuchEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PreviewGenerationInProgressExceptionRes
 */
const de_PreviewGenerationInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreviewGenerationInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PreviewGenerationInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionRes
 */
const de_ServiceTemporarilyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceTemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceTemporarilyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedFeatureExceptionRes
 */
const de_UnsupportedFeatureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedFeatureException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedFeatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddAttributesToFindingsRequest omitted.

// se_AddRemoveAttributesFindingArnList omitted.

// se_AgentFilter omitted.

// se_AgentHealthCodeList omitted.

// se_AgentHealthList omitted.

// se_AgentIdList omitted.

/**
 * serializeAws_json1_1AssessmentRunFilter
 */
const se_AssessmentRunFilter = (input: AssessmentRunFilter, context: __SerdeContext): any => {
  return take(input, {
    completionTimeRange: (_) => se_TimestampRange(_, context),
    durationRange: _json,
    namePattern: [],
    rulesPackageArns: _json,
    startTimeRange: (_) => se_TimestampRange(_, context),
    stateChangeTimeRange: (_) => se_TimestampRange(_, context),
    states: _json,
  });
};

// se_AssessmentRunStateList omitted.

// se_AssessmentTargetFilter omitted.

// se_AssessmentTemplateFilter omitted.

// se_AssessmentTemplateRulesPackageArnList omitted.

// se_Attribute omitted.

// se_AttributeList omitted.

// se_AutoScalingGroupList omitted.

// se_BatchDescribeArnList omitted.

// se_BatchDescribeExclusionsArnList omitted.

// se_CreateAssessmentTargetRequest omitted.

// se_CreateAssessmentTemplateRequest omitted.

// se_CreateExclusionsPreviewRequest omitted.

// se_CreateResourceGroupRequest omitted.

// se_DeleteAssessmentRunRequest omitted.

// se_DeleteAssessmentTargetRequest omitted.

// se_DeleteAssessmentTemplateRequest omitted.

// se_DescribeAssessmentRunsRequest omitted.

// se_DescribeAssessmentTargetsRequest omitted.

// se_DescribeAssessmentTemplatesRequest omitted.

// se_DescribeExclusionsRequest omitted.

// se_DescribeFindingsRequest omitted.

// se_DescribeResourceGroupsRequest omitted.

// se_DescribeRulesPackagesRequest omitted.

// se_DurationRange omitted.

// se_FilterRulesPackageArnList omitted.

/**
 * serializeAws_json1_1FindingFilter
 */
const se_FindingFilter = (input: FindingFilter, context: __SerdeContext): any => {
  return take(input, {
    agentIds: _json,
    attributes: _json,
    autoScalingGroups: _json,
    creationTimeRange: (_) => se_TimestampRange(_, context),
    ruleNames: _json,
    rulesPackageArns: _json,
    severities: _json,
    userAttributes: _json,
  });
};

// se_GetAssessmentReportRequest omitted.

// se_GetExclusionsPreviewRequest omitted.

// se_GetTelemetryMetadataRequest omitted.

// se_ListAssessmentRunAgentsRequest omitted.

/**
 * serializeAws_json1_1ListAssessmentRunsRequest
 */
const se_ListAssessmentRunsRequest = (input: ListAssessmentRunsRequest, context: __SerdeContext): any => {
  return take(input, {
    assessmentTemplateArns: _json,
    filter: (_) => se_AssessmentRunFilter(_, context),
    maxResults: [],
    nextToken: [],
  });
};

// se_ListAssessmentTargetsRequest omitted.

// se_ListAssessmentTemplatesRequest omitted.

// se_ListEventSubscriptionsRequest omitted.

// se_ListExclusionsRequest omitted.

/**
 * serializeAws_json1_1ListFindingsRequest
 */
const se_ListFindingsRequest = (input: ListFindingsRequest, context: __SerdeContext): any => {
  return take(input, {
    assessmentRunArns: _json,
    filter: (_) => se_FindingFilter(_, context),
    maxResults: [],
    nextToken: [],
  });
};

// se_ListParentArnList omitted.

// se_ListRulesPackagesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_PreviewAgentsRequest omitted.

// se_RegisterCrossAccountAccessRoleRequest omitted.

// se_RemoveAttributesFromFindingsRequest omitted.

// se_ResourceGroupTag omitted.

// se_ResourceGroupTags omitted.

// se_RuleNameList omitted.

// se_SetTagsForResourceRequest omitted.

// se_SeverityList omitted.

// se_StartAssessmentRunRequest omitted.

// se_StopAssessmentRunRequest omitted.

// se_SubscribeToEventRequest omitted.

// se_Tag omitted.

// se_TagList omitted.

/**
 * serializeAws_json1_1TimestampRange
 */
const se_TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return take(input, {
    beginDate: (_) => Math.round(_.getTime() / 1000),
    endDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UnsubscribeFromEventRequest omitted.

// se_UpdateAssessmentTargetRequest omitted.

// se_UserAttributeKeyList omitted.

// se_UserAttributeList omitted.

// de_AccessDeniedException omitted.

// de_AddAttributesToFindingsResponse omitted.

// de_AgentAlreadyRunningAssessment omitted.

// de_AgentAlreadyRunningAssessmentList omitted.

// de_AgentPreview omitted.

// de_AgentPreviewList omitted.

// de_AgentsAlreadyRunningAssessmentException omitted.

// de_AssessmentRulesPackageArnList omitted.

/**
 * deserializeAws_json1_1AssessmentRun
 */
const de_AssessmentRun = (output: any, context: __SerdeContext): AssessmentRun => {
  return take(output, {
    arn: __expectString,
    assessmentTemplateArn: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataCollected: __expectBoolean,
    durationInSeconds: __expectInt32,
    findingCounts: _json,
    name: __expectString,
    notifications: (_: any) => de_AssessmentRunNotificationList(_, context),
    rulesPackageArns: _json,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: __expectString,
    stateChangedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateChanges: (_: any) => de_AssessmentRunStateChangeList(_, context),
    userAttributesForFindings: _json,
  }) as any;
};

// de_AssessmentRunAgent omitted.

// de_AssessmentRunAgentList omitted.

// de_AssessmentRunFindingCounts omitted.

// de_AssessmentRunInProgressArnList omitted.

// de_AssessmentRunInProgressException omitted.

/**
 * deserializeAws_json1_1AssessmentRunList
 */
const de_AssessmentRunList = (output: any, context: __SerdeContext): AssessmentRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentRunNotification
 */
const de_AssessmentRunNotification = (output: any, context: __SerdeContext): AssessmentRunNotification => {
  return take(output, {
    date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    error: __expectBoolean,
    event: __expectString,
    message: __expectString,
    snsPublishStatusCode: __expectString,
    snsTopicArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AssessmentRunNotificationList
 */
const de_AssessmentRunNotificationList = (output: any, context: __SerdeContext): AssessmentRunNotification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentRunNotification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentRunStateChange
 */
const de_AssessmentRunStateChange = (output: any, context: __SerdeContext): AssessmentRunStateChange => {
  return take(output, {
    state: __expectString,
    stateChangedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AssessmentRunStateChangeList
 */
const de_AssessmentRunStateChangeList = (output: any, context: __SerdeContext): AssessmentRunStateChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentRunStateChange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentTarget
 */
const de_AssessmentTarget = (output: any, context: __SerdeContext): AssessmentTarget => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    resourceGroupArn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AssessmentTargetList
 */
const de_AssessmentTargetList = (output: any, context: __SerdeContext): AssessmentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentTemplate
 */
const de_AssessmentTemplate = (output: any, context: __SerdeContext): AssessmentTemplate => {
  return take(output, {
    arn: __expectString,
    assessmentRunCount: __expectInt32,
    assessmentTargetArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    durationInSeconds: __expectInt32,
    lastAssessmentRunArn: __expectString,
    name: __expectString,
    rulesPackageArns: _json,
    userAttributesForFindings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AssessmentTemplateList
 */
const de_AssessmentTemplateList = (output: any, context: __SerdeContext): AssessmentTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentTemplate(entry, context);
    });
  return retVal;
};

// de_AssessmentTemplateRulesPackageArnList omitted.

// de_AssetAttributes omitted.

// de_Attribute omitted.

// de_AttributeList omitted.

// de_CreateAssessmentTargetResponse omitted.

// de_CreateAssessmentTemplateResponse omitted.

// de_CreateExclusionsPreviewResponse omitted.

// de_CreateResourceGroupResponse omitted.

/**
 * deserializeAws_json1_1DescribeAssessmentRunsResponse
 */
const de_DescribeAssessmentRunsResponse = (output: any, context: __SerdeContext): DescribeAssessmentRunsResponse => {
  return take(output, {
    assessmentRuns: (_: any) => de_AssessmentRunList(_, context),
    failedItems: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTargetsResponse
 */
const de_DescribeAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTargetsResponse => {
  return take(output, {
    assessmentTargets: (_: any) => de_AssessmentTargetList(_, context),
    failedItems: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTemplatesResponse
 */
const de_DescribeAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTemplatesResponse => {
  return take(output, {
    assessmentTemplates: (_: any) => de_AssessmentTemplateList(_, context),
    failedItems: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse
 */
const de_DescribeCrossAccountAccessRoleResponse = (
  output: any,
  context: __SerdeContext
): DescribeCrossAccountAccessRoleResponse => {
  return take(output, {
    registeredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    valid: __expectBoolean,
  }) as any;
};

// de_DescribeExclusionsResponse omitted.

/**
 * deserializeAws_json1_1DescribeFindingsResponse
 */
const de_DescribeFindingsResponse = (output: any, context: __SerdeContext): DescribeFindingsResponse => {
  return take(output, {
    failedItems: _json,
    findings: (_: any) => de_FindingList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeResourceGroupsResponse
 */
const de_DescribeResourceGroupsResponse = (output: any, context: __SerdeContext): DescribeResourceGroupsResponse => {
  return take(output, {
    failedItems: _json,
    resourceGroups: (_: any) => de_ResourceGroupList(_, context),
  }) as any;
};

// de_DescribeRulesPackagesResponse omitted.

/**
 * deserializeAws_json1_1EventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  return take(output, {
    event: __expectString,
    subscribedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EventSubscriptionList
 */
const de_EventSubscriptionList = (output: any, context: __SerdeContext): EventSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSubscription(entry, context);
    });
  return retVal;
};

// de_Exclusion omitted.

// de_ExclusionMap omitted.

// de_ExclusionPreview omitted.

// de_ExclusionPreviewList omitted.

// de_FailedItemDetails omitted.

// de_FailedItems omitted.

/**
 * deserializeAws_json1_1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    arn: __expectString,
    assetAttributes: _json,
    assetType: __expectString,
    attributes: _json,
    confidence: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    indicatorOfCompromise: __expectBoolean,
    numericSeverity: __limitedParseDouble,
    recommendation: __expectString,
    schemaVersion: __expectInt32,
    service: __expectString,
    serviceAttributes: _json,
    severity: __expectString,
    title: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    userAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1FindingList
 */
const de_FindingList = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Finding(entry, context);
    });
  return retVal;
};

// de_GetAssessmentReportResponse omitted.

// de_GetExclusionsPreviewResponse omitted.

// de_GetTelemetryMetadataResponse omitted.

// de_InspectorServiceAttributes omitted.

// de_InternalException omitted.

// de_InvalidCrossAccountRoleException omitted.

// de_InvalidInputException omitted.

// de_Ipv4AddressList omitted.

// de_Ipv6Addresses omitted.

// de_LimitExceededException omitted.

// de_ListAssessmentRunAgentsResponse omitted.

// de_ListAssessmentRunsResponse omitted.

// de_ListAssessmentTargetsResponse omitted.

// de_ListAssessmentTemplatesResponse omitted.

/**
 * deserializeAws_json1_1ListEventSubscriptionsResponse
 */
const de_ListEventSubscriptionsResponse = (output: any, context: __SerdeContext): ListEventSubscriptionsResponse => {
  return take(output, {
    nextToken: __expectString,
    subscriptions: (_: any) => de_SubscriptionList(_, context),
  }) as any;
};

// de_ListExclusionsResponse omitted.

// de_ListFindingsResponse omitted.

// de_ListReturnedArnList omitted.

// de_ListRulesPackagesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaces omitted.

// de_NoSuchEntityException omitted.

// de_PreviewAgentsResponse omitted.

// de_PreviewGenerationInProgressException omitted.

// de_PrivateIp omitted.

// de_PrivateIpAddresses omitted.

// de_RemoveAttributesFromFindingsResponse omitted.

/**
 * deserializeAws_json1_1ResourceGroup
 */
const de_ResourceGroup = (output: any, context: __SerdeContext): ResourceGroup => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceGroupList
 */
const de_ResourceGroupList = (output: any, context: __SerdeContext): ResourceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceGroup(entry, context);
    });
  return retVal;
};

// de_ResourceGroupTag omitted.

// de_ResourceGroupTags omitted.

// de_RulesPackage omitted.

// de_RulesPackageList omitted.

// de_Scope omitted.

// de_ScopeList omitted.

// de_SecurityGroup omitted.

// de_SecurityGroups omitted.

// de_ServiceTemporarilyUnavailableException omitted.

// de_StartAssessmentRunResponse omitted.

/**
 * deserializeAws_json1_1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return take(output, {
    eventSubscriptions: (_: any) => de_EventSubscriptionList(_, context),
    resourceArn: __expectString,
    topicArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SubscriptionList
 */
const de_SubscriptionList = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Subscription(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_Tags omitted.

// de_TelemetryMetadata omitted.

// de_TelemetryMetadataList omitted.

// de_UnsupportedFeatureException omitted.

// de_UserAttributeList omitted.

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
    "x-amz-target": `InspectorService.${operation}`,
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
