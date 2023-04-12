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
  limitedParseDouble as __limitedParseDouble,
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
  AddAttributesToFindingsResponse,
  AgentAlreadyRunningAssessment,
  AgentFilter,
  AgentHealth,
  AgentHealthCode,
  AgentPreview,
  AgentsAlreadyRunningAssessmentException,
  AssessmentRun,
  AssessmentRunAgent,
  AssessmentRunFilter,
  AssessmentRunInProgressException,
  AssessmentRunNotification,
  AssessmentRunState,
  AssessmentRunStateChange,
  AssessmentTarget,
  AssessmentTargetFilter,
  AssessmentTemplate,
  AssessmentTemplateFilter,
  AssetAttributes,
  Attribute,
  CreateAssessmentTargetRequest,
  CreateAssessmentTargetResponse,
  CreateAssessmentTemplateRequest,
  CreateAssessmentTemplateResponse,
  CreateExclusionsPreviewRequest,
  CreateExclusionsPreviewResponse,
  CreateResourceGroupRequest,
  CreateResourceGroupResponse,
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
  DescribeExclusionsResponse,
  DescribeFindingsRequest,
  DescribeFindingsResponse,
  DescribeResourceGroupsRequest,
  DescribeResourceGroupsResponse,
  DescribeRulesPackagesRequest,
  DescribeRulesPackagesResponse,
  DurationRange,
  EventSubscription,
  Exclusion,
  ExclusionPreview,
  FailedItemDetails,
  Finding,
  FindingFilter,
  GetAssessmentReportRequest,
  GetAssessmentReportResponse,
  GetExclusionsPreviewRequest,
  GetExclusionsPreviewResponse,
  GetTelemetryMetadataRequest,
  GetTelemetryMetadataResponse,
  InspectorServiceAttributes,
  InternalException,
  InvalidCrossAccountRoleException,
  InvalidInputException,
  LimitExceededException,
  ListAssessmentRunAgentsRequest,
  ListAssessmentRunAgentsResponse,
  ListAssessmentRunsRequest,
  ListAssessmentRunsResponse,
  ListAssessmentTargetsRequest,
  ListAssessmentTargetsResponse,
  ListAssessmentTemplatesRequest,
  ListAssessmentTemplatesResponse,
  ListEventSubscriptionsRequest,
  ListEventSubscriptionsResponse,
  ListExclusionsRequest,
  ListExclusionsResponse,
  ListFindingsRequest,
  ListFindingsResponse,
  ListRulesPackagesRequest,
  ListRulesPackagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  NetworkInterface,
  NoSuchEntityException,
  PreviewAgentsRequest,
  PreviewAgentsResponse,
  PreviewGenerationInProgressException,
  PrivateIp,
  RegisterCrossAccountAccessRoleRequest,
  RemoveAttributesFromFindingsRequest,
  RemoveAttributesFromFindingsResponse,
  ResourceGroup,
  ResourceGroupTag,
  RulesPackage,
  Scope,
  SecurityGroup,
  ServiceTemporarilyUnavailableException,
  SetTagsForResourceRequest,
  Severity,
  StartAssessmentRunRequest,
  StartAssessmentRunResponse,
  StopAssessmentRunRequest,
  SubscribeToEventRequest,
  Subscription,
  Tag,
  TelemetryMetadata,
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
  body = JSON.stringify(se_AddAttributesToFindingsRequest(input, context));
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
  body = JSON.stringify(se_CreateAssessmentTargetRequest(input, context));
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
  body = JSON.stringify(se_CreateAssessmentTemplateRequest(input, context));
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
  body = JSON.stringify(se_CreateExclusionsPreviewRequest(input, context));
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
  body = JSON.stringify(se_CreateResourceGroupRequest(input, context));
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
  body = JSON.stringify(se_DeleteAssessmentRunRequest(input, context));
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
  body = JSON.stringify(se_DeleteAssessmentTargetRequest(input, context));
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
  body = JSON.stringify(se_DeleteAssessmentTemplateRequest(input, context));
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
  body = JSON.stringify(se_DescribeAssessmentRunsRequest(input, context));
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
  body = JSON.stringify(se_DescribeAssessmentTargetsRequest(input, context));
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
  body = JSON.stringify(se_DescribeAssessmentTemplatesRequest(input, context));
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
  body = JSON.stringify(se_DescribeExclusionsRequest(input, context));
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
  body = JSON.stringify(se_DescribeFindingsRequest(input, context));
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
  body = JSON.stringify(se_DescribeResourceGroupsRequest(input, context));
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
  body = JSON.stringify(se_DescribeRulesPackagesRequest(input, context));
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
  body = JSON.stringify(se_GetAssessmentReportRequest(input, context));
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
  body = JSON.stringify(se_GetExclusionsPreviewRequest(input, context));
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
  body = JSON.stringify(se_GetTelemetryMetadataRequest(input, context));
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
  body = JSON.stringify(se_ListAssessmentRunAgentsRequest(input, context));
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
  body = JSON.stringify(se_ListAssessmentTargetsRequest(input, context));
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
  body = JSON.stringify(se_ListAssessmentTemplatesRequest(input, context));
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
  body = JSON.stringify(se_ListEventSubscriptionsRequest(input, context));
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
  body = JSON.stringify(se_ListExclusionsRequest(input, context));
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
  body = JSON.stringify(se_ListRulesPackagesRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_PreviewAgentsRequest(input, context));
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
  body = JSON.stringify(se_RegisterCrossAccountAccessRoleRequest(input, context));
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
  body = JSON.stringify(se_RemoveAttributesFromFindingsRequest(input, context));
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
  body = JSON.stringify(se_SetTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_StartAssessmentRunRequest(input, context));
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
  body = JSON.stringify(se_StopAssessmentRunRequest(input, context));
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
  body = JSON.stringify(se_SubscribeToEventRequest(input, context));
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
  body = JSON.stringify(se_UnsubscribeFromEventRequest(input, context));
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
  body = JSON.stringify(se_UpdateAssessmentTargetRequest(input, context));
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
  contents = de_AddAttributesToFindingsResponse(data, context);
  const response: AddAttributesToFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateAssessmentTargetResponse(data, context);
  const response: CreateAssessmentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateAssessmentTemplateResponse(data, context);
  const response: CreateAssessmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateExclusionsPreviewResponse(data, context);
  const response: CreateExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateResourceGroupResponse(data, context);
  const response: CreateResourceGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeExclusionsResponse(data, context);
  const response: DescribeExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeRulesPackagesResponse(data, context);
  const response: DescribeRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetAssessmentReportResponse(data, context);
  const response: GetAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetExclusionsPreviewResponse(data, context);
  const response: GetExclusionsPreviewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetTelemetryMetadataResponse(data, context);
  const response: GetTelemetryMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAssessmentRunAgentsResponse(data, context);
  const response: ListAssessmentRunAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAssessmentRunsResponse(data, context);
  const response: ListAssessmentRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAssessmentTargetsResponse(data, context);
  const response: ListAssessmentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAssessmentTemplatesResponse(data, context);
  const response: ListAssessmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListExclusionsResponse(data, context);
  const response: ListExclusionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListFindingsResponse(data, context);
  const response: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListRulesPackagesResponse(data, context);
  const response: ListRulesPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PreviewAgentsResponse(data, context);
  const response: PreviewAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_RemoveAttributesFromFindingsResponse(data, context);
  const response: RemoveAttributesFromFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartAssessmentRunResponse(data, context);
  const response: StartAssessmentRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_AgentsAlreadyRunningAssessmentException(body, context);
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
  const deserialized: any = de_AssessmentRunInProgressException(body, context);
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
  const deserialized: any = de_InternalException(body, context);
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
  const deserialized: any = de_InvalidCrossAccountRoleException(body, context);
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
  const deserialized: any = de_InvalidInputException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_NoSuchEntityException(body, context);
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
  const deserialized: any = de_PreviewGenerationInProgressException(body, context);
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
  const deserialized: any = de_ServiceTemporarilyUnavailableException(body, context);
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
  const deserialized: any = de_UnsupportedFeatureException(body, context);
  const exception = new UnsupportedFeatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddAttributesToFindingsRequest
 */
const se_AddAttributesToFindingsRequest = (input: AddAttributesToFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_UserAttributeList(input.attributes, context) }),
    ...(input.findingArns != null && { findingArns: se_AddRemoveAttributesFindingArnList(input.findingArns, context) }),
  };
};

/**
 * serializeAws_json1_1AddRemoveAttributesFindingArnList
 */
const se_AddRemoveAttributesFindingArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AgentFilter
 */
const se_AgentFilter = (input: AgentFilter, context: __SerdeContext): any => {
  return {
    ...(input.agentHealthCodes != null && {
      agentHealthCodes: se_AgentHealthCodeList(input.agentHealthCodes, context),
    }),
    ...(input.agentHealths != null && { agentHealths: se_AgentHealthList(input.agentHealths, context) }),
  };
};

/**
 * serializeAws_json1_1AgentHealthCodeList
 */
const se_AgentHealthCodeList = (input: (AgentHealthCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AgentHealthList
 */
const se_AgentHealthList = (input: (AgentHealth | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AgentIdList
 */
const se_AgentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssessmentRunFilter
 */
const se_AssessmentRunFilter = (input: AssessmentRunFilter, context: __SerdeContext): any => {
  return {
    ...(input.completionTimeRange != null && {
      completionTimeRange: se_TimestampRange(input.completionTimeRange, context),
    }),
    ...(input.durationRange != null && { durationRange: se_DurationRange(input.durationRange, context) }),
    ...(input.namePattern != null && { namePattern: input.namePattern }),
    ...(input.rulesPackageArns != null && {
      rulesPackageArns: se_FilterRulesPackageArnList(input.rulesPackageArns, context),
    }),
    ...(input.startTimeRange != null && { startTimeRange: se_TimestampRange(input.startTimeRange, context) }),
    ...(input.stateChangeTimeRange != null && {
      stateChangeTimeRange: se_TimestampRange(input.stateChangeTimeRange, context),
    }),
    ...(input.states != null && { states: se_AssessmentRunStateList(input.states, context) }),
  };
};

/**
 * serializeAws_json1_1AssessmentRunStateList
 */
const se_AssessmentRunStateList = (input: (AssessmentRunState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssessmentTargetFilter
 */
const se_AssessmentTargetFilter = (input: AssessmentTargetFilter, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetNamePattern != null && {
      assessmentTargetNamePattern: input.assessmentTargetNamePattern,
    }),
  };
};

/**
 * serializeAws_json1_1AssessmentTemplateFilter
 */
const se_AssessmentTemplateFilter = (input: AssessmentTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.durationRange != null && { durationRange: se_DurationRange(input.durationRange, context) }),
    ...(input.namePattern != null && { namePattern: input.namePattern }),
    ...(input.rulesPackageArns != null && {
      rulesPackageArns: se_FilterRulesPackageArnList(input.rulesPackageArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1AssessmentTemplateRulesPackageArnList
 */
const se_AssessmentTemplateRulesPackageArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1AttributeList
 */
const se_AttributeList = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attribute(entry, context);
    });
};

/**
 * serializeAws_json1_1AutoScalingGroupList
 */
const se_AutoScalingGroupList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchDescribeArnList
 */
const se_BatchDescribeArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchDescribeExclusionsArnList
 */
const se_BatchDescribeExclusionsArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateAssessmentTargetRequest
 */
const se_CreateAssessmentTargetRequest = (input: CreateAssessmentTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetName != null && { assessmentTargetName: input.assessmentTargetName }),
    ...(input.resourceGroupArn != null && { resourceGroupArn: input.resourceGroupArn }),
  };
};

/**
 * serializeAws_json1_1CreateAssessmentTemplateRequest
 */
const se_CreateAssessmentTemplateRequest = (input: CreateAssessmentTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetArn != null && { assessmentTargetArn: input.assessmentTargetArn }),
    ...(input.assessmentTemplateName != null && { assessmentTemplateName: input.assessmentTemplateName }),
    ...(input.durationInSeconds != null && { durationInSeconds: input.durationInSeconds }),
    ...(input.rulesPackageArns != null && {
      rulesPackageArns: se_AssessmentTemplateRulesPackageArnList(input.rulesPackageArns, context),
    }),
    ...(input.userAttributesForFindings != null && {
      userAttributesForFindings: se_UserAttributeList(input.userAttributesForFindings, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateExclusionsPreviewRequest
 */
const se_CreateExclusionsPreviewRequest = (input: CreateExclusionsPreviewRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTemplateArn != null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

/**
 * serializeAws_json1_1CreateResourceGroupRequest
 */
const se_CreateResourceGroupRequest = (input: CreateResourceGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceGroupTags != null && {
      resourceGroupTags: se_ResourceGroupTags(input.resourceGroupTags, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteAssessmentRunRequest
 */
const se_DeleteAssessmentRunRequest = (input: DeleteAssessmentRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
  };
};

/**
 * serializeAws_json1_1DeleteAssessmentTargetRequest
 */
const se_DeleteAssessmentTargetRequest = (input: DeleteAssessmentTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetArn != null && { assessmentTargetArn: input.assessmentTargetArn }),
  };
};

/**
 * serializeAws_json1_1DeleteAssessmentTemplateRequest
 */
const se_DeleteAssessmentTemplateRequest = (input: DeleteAssessmentTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTemplateArn != null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAssessmentRunsRequest
 */
const se_DescribeAssessmentRunsRequest = (input: DescribeAssessmentRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArns != null && {
      assessmentRunArns: se_BatchDescribeArnList(input.assessmentRunArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeAssessmentTargetsRequest
 */
const se_DescribeAssessmentTargetsRequest = (input: DescribeAssessmentTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetArns != null && {
      assessmentTargetArns: se_BatchDescribeArnList(input.assessmentTargetArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeAssessmentTemplatesRequest
 */
const se_DescribeAssessmentTemplatesRequest = (
  input: DescribeAssessmentTemplatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.assessmentTemplateArns != null && {
      assessmentTemplateArns: se_BatchDescribeArnList(input.assessmentTemplateArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeExclusionsRequest
 */
const se_DescribeExclusionsRequest = (input: DescribeExclusionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.exclusionArns != null && {
      exclusionArns: se_BatchDescribeExclusionsArnList(input.exclusionArns, context),
    }),
    ...(input.locale != null && { locale: input.locale }),
  };
};

/**
 * serializeAws_json1_1DescribeFindingsRequest
 */
const se_DescribeFindingsRequest = (input: DescribeFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.findingArns != null && { findingArns: se_BatchDescribeArnList(input.findingArns, context) }),
    ...(input.locale != null && { locale: input.locale }),
  };
};

/**
 * serializeAws_json1_1DescribeResourceGroupsRequest
 */
const se_DescribeResourceGroupsRequest = (input: DescribeResourceGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceGroupArns != null && {
      resourceGroupArns: se_BatchDescribeArnList(input.resourceGroupArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeRulesPackagesRequest
 */
const se_DescribeRulesPackagesRequest = (input: DescribeRulesPackagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.locale != null && { locale: input.locale }),
    ...(input.rulesPackageArns != null && {
      rulesPackageArns: se_BatchDescribeArnList(input.rulesPackageArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1DurationRange
 */
const se_DurationRange = (input: DurationRange, context: __SerdeContext): any => {
  return {
    ...(input.maxSeconds != null && { maxSeconds: input.maxSeconds }),
    ...(input.minSeconds != null && { minSeconds: input.minSeconds }),
  };
};

/**
 * serializeAws_json1_1FilterRulesPackageArnList
 */
const se_FilterRulesPackageArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FindingFilter
 */
const se_FindingFilter = (input: FindingFilter, context: __SerdeContext): any => {
  return {
    ...(input.agentIds != null && { agentIds: se_AgentIdList(input.agentIds, context) }),
    ...(input.attributes != null && { attributes: se_AttributeList(input.attributes, context) }),
    ...(input.autoScalingGroups != null && {
      autoScalingGroups: se_AutoScalingGroupList(input.autoScalingGroups, context),
    }),
    ...(input.creationTimeRange != null && { creationTimeRange: se_TimestampRange(input.creationTimeRange, context) }),
    ...(input.ruleNames != null && { ruleNames: se_RuleNameList(input.ruleNames, context) }),
    ...(input.rulesPackageArns != null && {
      rulesPackageArns: se_FilterRulesPackageArnList(input.rulesPackageArns, context),
    }),
    ...(input.severities != null && { severities: se_SeverityList(input.severities, context) }),
    ...(input.userAttributes != null && { userAttributes: se_AttributeList(input.userAttributes, context) }),
  };
};

/**
 * serializeAws_json1_1GetAssessmentReportRequest
 */
const se_GetAssessmentReportRequest = (input: GetAssessmentReportRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.reportFileFormat != null && { reportFileFormat: input.reportFileFormat }),
    ...(input.reportType != null && { reportType: input.reportType }),
  };
};

/**
 * serializeAws_json1_1GetExclusionsPreviewRequest
 */
const se_GetExclusionsPreviewRequest = (input: GetExclusionsPreviewRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTemplateArn != null && { assessmentTemplateArn: input.assessmentTemplateArn }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.previewToken != null && { previewToken: input.previewToken }),
  };
};

/**
 * serializeAws_json1_1GetTelemetryMetadataRequest
 */
const se_GetTelemetryMetadataRequest = (input: GetTelemetryMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
  };
};

/**
 * serializeAws_json1_1ListAssessmentRunAgentsRequest
 */
const se_ListAssessmentRunAgentsRequest = (input: ListAssessmentRunAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.filter != null && { filter: se_AgentFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListAssessmentRunsRequest
 */
const se_ListAssessmentRunsRequest = (input: ListAssessmentRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTemplateArns != null && {
      assessmentTemplateArns: se_ListParentArnList(input.assessmentTemplateArns, context),
    }),
    ...(input.filter != null && { filter: se_AssessmentRunFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListAssessmentTargetsRequest
 */
const se_ListAssessmentTargetsRequest = (input: ListAssessmentTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_AssessmentTargetFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListAssessmentTemplatesRequest
 */
const se_ListAssessmentTemplatesRequest = (input: ListAssessmentTemplatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetArns != null && {
      assessmentTargetArns: se_ListParentArnList(input.assessmentTargetArns, context),
    }),
    ...(input.filter != null && { filter: se_AssessmentTemplateFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventSubscriptionsRequest
 */
const se_ListEventSubscriptionsRequest = (input: ListEventSubscriptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListExclusionsRequest
 */
const se_ListExclusionsRequest = (input: ListExclusionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListFindingsRequest
 */
const se_ListFindingsRequest = (input: ListFindingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArns != null && {
      assessmentRunArns: se_ListParentArnList(input.assessmentRunArns, context),
    }),
    ...(input.filter != null && { filter: se_FindingFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListParentArnList
 */
const se_ListParentArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListRulesPackagesRequest
 */
const se_ListRulesPackagesRequest = (input: ListRulesPackagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1PreviewAgentsRequest
 */
const se_PreviewAgentsRequest = (input: PreviewAgentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.previewAgentsArn != null && { previewAgentsArn: input.previewAgentsArn }),
  };
};

/**
 * serializeAws_json1_1RegisterCrossAccountAccessRoleRequest
 */
const se_RegisterCrossAccountAccessRoleRequest = (
  input: RegisterCrossAccountAccessRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_json1_1RemoveAttributesFromFindingsRequest
 */
const se_RemoveAttributesFromFindingsRequest = (
  input: RemoveAttributesFromFindingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributeKeys != null && { attributeKeys: se_UserAttributeKeyList(input.attributeKeys, context) }),
    ...(input.findingArns != null && { findingArns: se_AddRemoveAttributesFindingArnList(input.findingArns, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceGroupTag
 */
const se_ResourceGroupTag = (input: ResourceGroupTag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1ResourceGroupTags
 */
const se_ResourceGroupTags = (input: ResourceGroupTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceGroupTag(entry, context);
    });
};

/**
 * serializeAws_json1_1RuleNameList
 */
const se_RuleNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SetTagsForResourceRequest
 */
const se_SetTagsForResourceRequest = (input: SetTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1SeverityList
 */
const se_SeverityList = (input: (Severity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartAssessmentRunRequest
 */
const se_StartAssessmentRunRequest = (input: StartAssessmentRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunName != null && { assessmentRunName: input.assessmentRunName }),
    ...(input.assessmentTemplateArn != null && { assessmentTemplateArn: input.assessmentTemplateArn }),
  };
};

/**
 * serializeAws_json1_1StopAssessmentRunRequest
 */
const se_StopAssessmentRunRequest = (input: StopAssessmentRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentRunArn != null && { assessmentRunArn: input.assessmentRunArn }),
    ...(input.stopAction != null && { stopAction: input.stopAction }),
  };
};

/**
 * serializeAws_json1_1SubscribeToEventRequest
 */
const se_SubscribeToEventRequest = (input: SubscribeToEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.event != null && { event: input.event }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.topicArn != null && { topicArn: input.topicArn }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TimestampRange
 */
const se_TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return {
    ...(input.beginDate != null && { beginDate: Math.round(input.beginDate.getTime() / 1000) }),
    ...(input.endDate != null && { endDate: Math.round(input.endDate.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UnsubscribeFromEventRequest
 */
const se_UnsubscribeFromEventRequest = (input: UnsubscribeFromEventRequest, context: __SerdeContext): any => {
  return {
    ...(input.event != null && { event: input.event }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.topicArn != null && { topicArn: input.topicArn }),
  };
};

/**
 * serializeAws_json1_1UpdateAssessmentTargetRequest
 */
const se_UpdateAssessmentTargetRequest = (input: UpdateAssessmentTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.assessmentTargetArn != null && { assessmentTargetArn: input.assessmentTargetArn }),
    ...(input.assessmentTargetName != null && { assessmentTargetName: input.assessmentTargetName }),
    ...(input.resourceGroupArn != null && { resourceGroupArn: input.resourceGroupArn }),
  };
};

/**
 * serializeAws_json1_1UserAttributeKeyList
 */
const se_UserAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UserAttributeList
 */
const se_UserAttributeList = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attribute(entry, context);
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AddAttributesToFindingsResponse
 */
const de_AddAttributesToFindingsResponse = (output: any, context: __SerdeContext): AddAttributesToFindingsResponse => {
  return {
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AgentAlreadyRunningAssessment
 */
const de_AgentAlreadyRunningAssessment = (output: any, context: __SerdeContext): AgentAlreadyRunningAssessment => {
  return {
    agentId: __expectString(output.agentId),
    assessmentRunArn: __expectString(output.assessmentRunArn),
  } as any;
};

/**
 * deserializeAws_json1_1AgentAlreadyRunningAssessmentList
 */
const de_AgentAlreadyRunningAssessmentList = (
  output: any,
  context: __SerdeContext
): AgentAlreadyRunningAssessment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentAlreadyRunningAssessment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AgentPreview
 */
const de_AgentPreview = (output: any, context: __SerdeContext): AgentPreview => {
  return {
    agentHealth: __expectString(output.agentHealth),
    agentId: __expectString(output.agentId),
    agentVersion: __expectString(output.agentVersion),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    hostname: __expectString(output.hostname),
    ipv4Address: __expectString(output.ipv4Address),
    kernelVersion: __expectString(output.kernelVersion),
    operatingSystem: __expectString(output.operatingSystem),
  } as any;
};

/**
 * deserializeAws_json1_1AgentPreviewList
 */
const de_AgentPreviewList = (output: any, context: __SerdeContext): AgentPreview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AgentPreview(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AgentsAlreadyRunningAssessmentException
 */
const de_AgentsAlreadyRunningAssessmentException = (
  output: any,
  context: __SerdeContext
): AgentsAlreadyRunningAssessmentException => {
  return {
    agents: output.agents != null ? de_AgentAlreadyRunningAssessmentList(output.agents, context) : undefined,
    agentsTruncated: __expectBoolean(output.agentsTruncated),
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRulesPackageArnList
 */
const de_AssessmentRulesPackageArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AssessmentRun
 */
const de_AssessmentRun = (output: any, context: __SerdeContext): AssessmentRun => {
  return {
    arn: __expectString(output.arn),
    assessmentTemplateArn: __expectString(output.assessmentTemplateArn),
    completedAt:
      output.completedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completedAt)))
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    dataCollected: __expectBoolean(output.dataCollected),
    durationInSeconds: __expectInt32(output.durationInSeconds),
    findingCounts:
      output.findingCounts != null ? de_AssessmentRunFindingCounts(output.findingCounts, context) : undefined,
    name: __expectString(output.name),
    notifications:
      output.notifications != null ? de_AssessmentRunNotificationList(output.notifications, context) : undefined,
    rulesPackageArns:
      output.rulesPackageArns != null ? de_AssessmentRulesPackageArnList(output.rulesPackageArns, context) : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    state: __expectString(output.state),
    stateChangedAt:
      output.stateChangedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stateChangedAt)))
        : undefined,
    stateChanges:
      output.stateChanges != null ? de_AssessmentRunStateChangeList(output.stateChanges, context) : undefined,
    userAttributesForFindings:
      output.userAttributesForFindings != null
        ? de_UserAttributeList(output.userAttributesForFindings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRunAgent
 */
const de_AssessmentRunAgent = (output: any, context: __SerdeContext): AssessmentRunAgent => {
  return {
    agentHealth: __expectString(output.agentHealth),
    agentHealthCode: __expectString(output.agentHealthCode),
    agentHealthDetails: __expectString(output.agentHealthDetails),
    agentId: __expectString(output.agentId),
    assessmentRunArn: __expectString(output.assessmentRunArn),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    telemetryMetadata:
      output.telemetryMetadata != null ? de_TelemetryMetadataList(output.telemetryMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRunAgentList
 */
const de_AssessmentRunAgentList = (output: any, context: __SerdeContext): AssessmentRunAgent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentRunAgent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentRunFindingCounts
 */
const de_AssessmentRunFindingCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [Severity | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1AssessmentRunInProgressArnList
 */
const de_AssessmentRunInProgressArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AssessmentRunInProgressException
 */
const de_AssessmentRunInProgressException = (
  output: any,
  context: __SerdeContext
): AssessmentRunInProgressException => {
  return {
    assessmentRunArns:
      output.assessmentRunArns != null
        ? de_AssessmentRunInProgressArnList(output.assessmentRunArns, context)
        : undefined,
    assessmentRunArnsTruncated: __expectBoolean(output.assessmentRunArnsTruncated),
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRunList
 */
const de_AssessmentRunList = (output: any, context: __SerdeContext): AssessmentRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentRunNotification
 */
const de_AssessmentRunNotification = (output: any, context: __SerdeContext): AssessmentRunNotification => {
  return {
    date: output.date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.date))) : undefined,
    error: __expectBoolean(output.error),
    event: __expectString(output.event),
    message: __expectString(output.message),
    snsPublishStatusCode: __expectString(output.snsPublishStatusCode),
    snsTopicArn: __expectString(output.snsTopicArn),
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRunNotificationList
 */
const de_AssessmentRunNotificationList = (output: any, context: __SerdeContext): AssessmentRunNotification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentRunNotification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentRunStateChange
 */
const de_AssessmentRunStateChange = (output: any, context: __SerdeContext): AssessmentRunStateChange => {
  return {
    state: __expectString(output.state),
    stateChangedAt:
      output.stateChangedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stateChangedAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentRunStateChangeList
 */
const de_AssessmentRunStateChangeList = (output: any, context: __SerdeContext): AssessmentRunStateChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentRunStateChange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentTarget
 */
const de_AssessmentTarget = (output: any, context: __SerdeContext): AssessmentTarget => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    name: __expectString(output.name),
    resourceGroupArn: __expectString(output.resourceGroupArn),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentTargetList
 */
const de_AssessmentTargetList = (output: any, context: __SerdeContext): AssessmentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentTemplate
 */
const de_AssessmentTemplate = (output: any, context: __SerdeContext): AssessmentTemplate => {
  return {
    arn: __expectString(output.arn),
    assessmentRunCount: __expectInt32(output.assessmentRunCount),
    assessmentTargetArn: __expectString(output.assessmentTargetArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    durationInSeconds: __expectInt32(output.durationInSeconds),
    lastAssessmentRunArn: __expectString(output.lastAssessmentRunArn),
    name: __expectString(output.name),
    rulesPackageArns:
      output.rulesPackageArns != null
        ? de_AssessmentTemplateRulesPackageArnList(output.rulesPackageArns, context)
        : undefined,
    userAttributesForFindings:
      output.userAttributesForFindings != null
        ? de_UserAttributeList(output.userAttributesForFindings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssessmentTemplateList
 */
const de_AssessmentTemplateList = (output: any, context: __SerdeContext): AssessmentTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssessmentTemplateRulesPackageArnList
 */
const de_AssessmentTemplateRulesPackageArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AssetAttributes
 */
const de_AssetAttributes = (output: any, context: __SerdeContext): AssetAttributes => {
  return {
    agentId: __expectString(output.agentId),
    amiId: __expectString(output.amiId),
    autoScalingGroup: __expectString(output.autoScalingGroup),
    hostname: __expectString(output.hostname),
    ipv4Addresses: output.ipv4Addresses != null ? de_Ipv4AddressList(output.ipv4Addresses, context) : undefined,
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    schemaVersion: __expectInt32(output.schemaVersion),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeList
 */
const de_AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAssessmentTargetResponse
 */
const de_CreateAssessmentTargetResponse = (output: any, context: __SerdeContext): CreateAssessmentTargetResponse => {
  return {
    assessmentTargetArn: __expectString(output.assessmentTargetArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAssessmentTemplateResponse
 */
const de_CreateAssessmentTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateAssessmentTemplateResponse => {
  return {
    assessmentTemplateArn: __expectString(output.assessmentTemplateArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateExclusionsPreviewResponse
 */
const de_CreateExclusionsPreviewResponse = (output: any, context: __SerdeContext): CreateExclusionsPreviewResponse => {
  return {
    previewToken: __expectString(output.previewToken),
  } as any;
};

/**
 * deserializeAws_json1_1CreateResourceGroupResponse
 */
const de_CreateResourceGroupResponse = (output: any, context: __SerdeContext): CreateResourceGroupResponse => {
  return {
    resourceGroupArn: __expectString(output.resourceGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssessmentRunsResponse
 */
const de_DescribeAssessmentRunsResponse = (output: any, context: __SerdeContext): DescribeAssessmentRunsResponse => {
  return {
    assessmentRuns: output.assessmentRuns != null ? de_AssessmentRunList(output.assessmentRuns, context) : undefined,
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTargetsResponse
 */
const de_DescribeAssessmentTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTargetsResponse => {
  return {
    assessmentTargets:
      output.assessmentTargets != null ? de_AssessmentTargetList(output.assessmentTargets, context) : undefined,
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAssessmentTemplatesResponse
 */
const de_DescribeAssessmentTemplatesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAssessmentTemplatesResponse => {
  return {
    assessmentTemplates:
      output.assessmentTemplates != null ? de_AssessmentTemplateList(output.assessmentTemplates, context) : undefined,
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse
 */
const de_DescribeCrossAccountAccessRoleResponse = (
  output: any,
  context: __SerdeContext
): DescribeCrossAccountAccessRoleResponse => {
  return {
    registeredAt:
      output.registeredAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registeredAt)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    valid: __expectBoolean(output.valid),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExclusionsResponse
 */
const de_DescribeExclusionsResponse = (output: any, context: __SerdeContext): DescribeExclusionsResponse => {
  return {
    exclusions: output.exclusions != null ? de_ExclusionMap(output.exclusions, context) : undefined,
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFindingsResponse
 */
const de_DescribeFindingsResponse = (output: any, context: __SerdeContext): DescribeFindingsResponse => {
  return {
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
    findings: output.findings != null ? de_FindingList(output.findings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourceGroupsResponse
 */
const de_DescribeResourceGroupsResponse = (output: any, context: __SerdeContext): DescribeResourceGroupsResponse => {
  return {
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
    resourceGroups: output.resourceGroups != null ? de_ResourceGroupList(output.resourceGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRulesPackagesResponse
 */
const de_DescribeRulesPackagesResponse = (output: any, context: __SerdeContext): DescribeRulesPackagesResponse => {
  return {
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
    rulesPackages: output.rulesPackages != null ? de_RulesPackageList(output.rulesPackages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventSubscription
 */
const de_EventSubscription = (output: any, context: __SerdeContext): EventSubscription => {
  return {
    event: __expectString(output.event),
    subscribedAt:
      output.subscribedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.subscribedAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventSubscriptionList
 */
const de_EventSubscriptionList = (output: any, context: __SerdeContext): EventSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Exclusion
 */
const de_Exclusion = (output: any, context: __SerdeContext): Exclusion => {
  return {
    arn: __expectString(output.arn),
    attributes: output.attributes != null ? de_AttributeList(output.attributes, context) : undefined,
    description: __expectString(output.description),
    recommendation: __expectString(output.recommendation),
    scopes: output.scopes != null ? de_ScopeList(output.scopes, context) : undefined,
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_json1_1ExclusionMap
 */
const de_ExclusionMap = (output: any, context: __SerdeContext): Record<string, Exclusion> => {
  return Object.entries(output).reduce((acc: Record<string, Exclusion>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Exclusion(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ExclusionPreview
 */
const de_ExclusionPreview = (output: any, context: __SerdeContext): ExclusionPreview => {
  return {
    attributes: output.attributes != null ? de_AttributeList(output.attributes, context) : undefined,
    description: __expectString(output.description),
    recommendation: __expectString(output.recommendation),
    scopes: output.scopes != null ? de_ScopeList(output.scopes, context) : undefined,
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_json1_1ExclusionPreviewList
 */
const de_ExclusionPreviewList = (output: any, context: __SerdeContext): ExclusionPreview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExclusionPreview(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedItemDetails
 */
const de_FailedItemDetails = (output: any, context: __SerdeContext): FailedItemDetails => {
  return {
    failureCode: __expectString(output.failureCode),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

/**
 * deserializeAws_json1_1FailedItems
 */
const de_FailedItems = (output: any, context: __SerdeContext): Record<string, FailedItemDetails> => {
  return Object.entries(output).reduce((acc: Record<string, FailedItemDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FailedItemDetails(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return {
    arn: __expectString(output.arn),
    assetAttributes: output.assetAttributes != null ? de_AssetAttributes(output.assetAttributes, context) : undefined,
    assetType: __expectString(output.assetType),
    attributes: output.attributes != null ? de_AttributeList(output.attributes, context) : undefined,
    confidence: __expectInt32(output.confidence),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    indicatorOfCompromise: __expectBoolean(output.indicatorOfCompromise),
    numericSeverity: __limitedParseDouble(output.numericSeverity),
    recommendation: __expectString(output.recommendation),
    schemaVersion: __expectInt32(output.schemaVersion),
    service: __expectString(output.service),
    serviceAttributes:
      output.serviceAttributes != null ? de_InspectorServiceAttributes(output.serviceAttributes, context) : undefined,
    severity: __expectString(output.severity),
    title: __expectString(output.title),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
    userAttributes: output.userAttributes != null ? de_UserAttributeList(output.userAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FindingList
 */
const de_FindingList = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Finding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAssessmentReportResponse
 */
const de_GetAssessmentReportResponse = (output: any, context: __SerdeContext): GetAssessmentReportResponse => {
  return {
    status: __expectString(output.status),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1GetExclusionsPreviewResponse
 */
const de_GetExclusionsPreviewResponse = (output: any, context: __SerdeContext): GetExclusionsPreviewResponse => {
  return {
    exclusionPreviews:
      output.exclusionPreviews != null ? de_ExclusionPreviewList(output.exclusionPreviews, context) : undefined,
    nextToken: __expectString(output.nextToken),
    previewStatus: __expectString(output.previewStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetTelemetryMetadataResponse
 */
const de_GetTelemetryMetadataResponse = (output: any, context: __SerdeContext): GetTelemetryMetadataResponse => {
  return {
    telemetryMetadata:
      output.telemetryMetadata != null ? de_TelemetryMetadataList(output.telemetryMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InspectorServiceAttributes
 */
const de_InspectorServiceAttributes = (output: any, context: __SerdeContext): InspectorServiceAttributes => {
  return {
    assessmentRunArn: __expectString(output.assessmentRunArn),
    rulesPackageArn: __expectString(output.rulesPackageArn),
    schemaVersion: __expectInt32(output.schemaVersion),
  } as any;
};

/**
 * deserializeAws_json1_1InternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCrossAccountRoleException
 */
const de_InvalidCrossAccountRoleException = (
  output: any,
  context: __SerdeContext
): InvalidCrossAccountRoleException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Ipv4AddressList
 */
const de_Ipv4AddressList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Ipv6Addresses
 */
const de_Ipv6Addresses = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssessmentRunAgentsResponse
 */
const de_ListAssessmentRunAgentsResponse = (output: any, context: __SerdeContext): ListAssessmentRunAgentsResponse => {
  return {
    assessmentRunAgents:
      output.assessmentRunAgents != null ? de_AssessmentRunAgentList(output.assessmentRunAgents, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssessmentRunsResponse
 */
const de_ListAssessmentRunsResponse = (output: any, context: __SerdeContext): ListAssessmentRunsResponse => {
  return {
    assessmentRunArns:
      output.assessmentRunArns != null ? de_ListReturnedArnList(output.assessmentRunArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssessmentTargetsResponse
 */
const de_ListAssessmentTargetsResponse = (output: any, context: __SerdeContext): ListAssessmentTargetsResponse => {
  return {
    assessmentTargetArns:
      output.assessmentTargetArns != null ? de_ListReturnedArnList(output.assessmentTargetArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssessmentTemplatesResponse
 */
const de_ListAssessmentTemplatesResponse = (output: any, context: __SerdeContext): ListAssessmentTemplatesResponse => {
  return {
    assessmentTemplateArns:
      output.assessmentTemplateArns != null
        ? de_ListReturnedArnList(output.assessmentTemplateArns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventSubscriptionsResponse
 */
const de_ListEventSubscriptionsResponse = (output: any, context: __SerdeContext): ListEventSubscriptionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    subscriptions: output.subscriptions != null ? de_SubscriptionList(output.subscriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListExclusionsResponse
 */
const de_ListExclusionsResponse = (output: any, context: __SerdeContext): ListExclusionsResponse => {
  return {
    exclusionArns: output.exclusionArns != null ? de_ListReturnedArnList(output.exclusionArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFindingsResponse
 */
const de_ListFindingsResponse = (output: any, context: __SerdeContext): ListFindingsResponse => {
  return {
    findingArns: output.findingArns != null ? de_ListReturnedArnList(output.findingArns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListReturnedArnList
 */
const de_ListReturnedArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ListRulesPackagesResponse
 */
const de_ListRulesPackagesResponse = (output: any, context: __SerdeContext): ListRulesPackagesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    rulesPackageArns:
      output.rulesPackageArns != null ? de_ListReturnedArnList(output.rulesPackageArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    ipv6Addresses: output.ipv6Addresses != null ? de_Ipv6Addresses(output.ipv6Addresses, context) : undefined,
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateDnsName: __expectString(output.privateDnsName),
    privateIpAddress: __expectString(output.privateIpAddress),
    privateIpAddresses:
      output.privateIpAddresses != null ? de_PrivateIpAddresses(output.privateIpAddresses, context) : undefined,
    publicDnsName: __expectString(output.publicDnsName),
    publicIp: __expectString(output.publicIp),
    securityGroups: output.securityGroups != null ? de_SecurityGroups(output.securityGroups, context) : undefined,
    subnetId: __expectString(output.subnetId),
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterfaces
 */
const de_NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkInterface(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NoSuchEntityException
 */
const de_NoSuchEntityException = (output: any, context: __SerdeContext): NoSuchEntityException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PreviewAgentsResponse
 */
const de_PreviewAgentsResponse = (output: any, context: __SerdeContext): PreviewAgentsResponse => {
  return {
    agentPreviews: output.agentPreviews != null ? de_AgentPreviewList(output.agentPreviews, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1PreviewGenerationInProgressException
 */
const de_PreviewGenerationInProgressException = (
  output: any,
  context: __SerdeContext
): PreviewGenerationInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PrivateIp
 */
const de_PrivateIp = (output: any, context: __SerdeContext): PrivateIp => {
  return {
    privateDnsName: __expectString(output.privateDnsName),
    privateIpAddress: __expectString(output.privateIpAddress),
  } as any;
};

/**
 * deserializeAws_json1_1PrivateIpAddresses
 */
const de_PrivateIpAddresses = (output: any, context: __SerdeContext): PrivateIp[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PrivateIp(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemoveAttributesFromFindingsResponse
 */
const de_RemoveAttributesFromFindingsResponse = (
  output: any,
  context: __SerdeContext
): RemoveAttributesFromFindingsResponse => {
  return {
    failedItems: output.failedItems != null ? de_FailedItems(output.failedItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceGroup
 */
const de_ResourceGroup = (output: any, context: __SerdeContext): ResourceGroup => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    tags: output.tags != null ? de_ResourceGroupTags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceGroupList
 */
const de_ResourceGroupList = (output: any, context: __SerdeContext): ResourceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceGroupTag
 */
const de_ResourceGroupTag = (output: any, context: __SerdeContext): ResourceGroupTag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceGroupTags
 */
const de_ResourceGroupTags = (output: any, context: __SerdeContext): ResourceGroupTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceGroupTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RulesPackage
 */
const de_RulesPackage = (output: any, context: __SerdeContext): RulesPackage => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1RulesPackageList
 */
const de_RulesPackageList = (output: any, context: __SerdeContext): RulesPackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RulesPackage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Scope
 */
const de_Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ScopeList
 */
const de_ScopeList = (output: any, context: __SerdeContext): Scope[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Scope(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityGroup
 */
const de_SecurityGroup = (output: any, context: __SerdeContext): SecurityGroup => {
  return {
    groupId: __expectString(output.groupId),
    groupName: __expectString(output.groupName),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): SecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceTemporarilyUnavailableException
 */
const de_ServiceTemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceTemporarilyUnavailableException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StartAssessmentRunResponse
 */
const de_StartAssessmentRunResponse = (output: any, context: __SerdeContext): StartAssessmentRunResponse => {
  return {
    assessmentRunArn: __expectString(output.assessmentRunArn),
  } as any;
};

/**
 * deserializeAws_json1_1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    eventSubscriptions:
      output.eventSubscriptions != null ? de_EventSubscriptionList(output.eventSubscriptions, context) : undefined,
    resourceArn: __expectString(output.resourceArn),
    topicArn: __expectString(output.topicArn),
  } as any;
};

/**
 * deserializeAws_json1_1SubscriptionList
 */
const de_SubscriptionList = (output: any, context: __SerdeContext): Subscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
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
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TelemetryMetadata
 */
const de_TelemetryMetadata = (output: any, context: __SerdeContext): TelemetryMetadata => {
  return {
    count: __expectLong(output.count),
    dataSize: __expectLong(output.dataSize),
    messageType: __expectString(output.messageType),
  } as any;
};

/**
 * deserializeAws_json1_1TelemetryMetadataList
 */
const de_TelemetryMetadataList = (output: any, context: __SerdeContext): TelemetryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TelemetryMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedFeatureException
 */
const de_UnsupportedFeatureException = (output: any, context: __SerdeContext): UnsupportedFeatureException => {
  return {
    canRetry: __expectBoolean(output.canRetry),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserAttributeList
 */
const de_UserAttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
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
